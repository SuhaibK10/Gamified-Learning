'use client';


import { useState, useEffect, useRef, useCallback } from 'react';
import { createClient } from '@/lib/supabase-browser';
import { QUESTIONS, TOPICS, DIFF_LABELS, LEVELS, getLevel, shuffle, JS_TOPICS, REACT_TOPICS, PYTHON_TOPICS } from '@/lib/questions';

const DIFF_CLR = ['','text-sage','text-gold','text-rose'];
const SECTIONS = ['All', 'JavaScript', 'React', 'Python'];

function getTopicsForSection(section) {
  if (section === 'JavaScript') return JS_TOPICS;
  if (section === 'React') return REACT_TOPICS;
  if (section === 'Python') return PYTHON_TOPICS;
  return TOPICS;
}

function getQuestionsForSection(section) {
  if (section === 'JavaScript') return QUESTIONS.filter(q => q.t.startsWith('JS:'));
  if (section === 'React') return QUESTIONS.filter(q => q.t.startsWith('React:'));
  if (section === 'Python') return QUESTIONS.filter(q => PYTHON_TOPICS.includes(q.t));
  return QUESTIONS;
}

export default function Dashboard({ user, profile: initProfile, topicStats: initTS, recentAttempts: initHistory, notes: initNotes }) {
  const supabase = createClient();

  const [screen, setScreen] = useState('home');
  const [profile, setProfile] = useState(initProfile);
  const [topicStats, setTopicStats] = useState(initTS);
  const [history, setHistory] = useState(initHistory);
  const [notes, setNotes] = useState(initNotes);
  const [section, setSection] = useState('All');

  // Game state
  const [queue, setQueue] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [showExpl, setShowExpl] = useState(false);
  const [combo, setCombo] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(5);
  const [sc, setSc] = useState(0);
  const [st, setSt] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timedMode, setTimedMode] = useState(false);
  const [shakeWrong, setShakeWrong] = useState(false);
  const [xpPop, setXpPop] = useState(0);
  const [showPop, setShowPop] = useState(false);
  const [noteInput, setNoteInput] = useState('');
  const [showNotepad, setShowNotepad] = useState(false);
  const [profileTab, setProfileTab] = useState('stats');
  const timerRef = useRef(null);

  const xp = profile.xp || 0;
  const level = getLevel(xp);
  const curXP = LEVELS[level-1]||0;
  const nxtXP = LEVELS[level]||LEVELS[LEVELS.length-1];
  const lvlProg = ((xp-curXP)/(nxtXP-curXP))*100;
  const currentQ = queue[qIdx];
  const sectionTopics = getTopicsForSection(section);
  const sectionQuestions = getQuestionsForSection(section);

  // Timer
  useEffect(() => {
    if (timedMode && timerActive && timer > 0) {
      timerRef.current = setTimeout(() => setTimer(t => t-1), 1000);
      return () => clearTimeout(timerRef.current);
    }
    if (timedMode && timer === 0 && timerActive && !answered) handleAnswer(-1);
  }, [timer, timerActive, timedMode, answered]);

  // DB helpers
  const updateProfile = async (updates) => {
    const newP = { ...profile, ...updates, updated_at: new Date().toISOString() };
    setProfile(newP);
    await supabase.from('profiles').update(updates).eq('id', user.id);
  };

  const upsertTopicStat = async (topic, isCorrect) => {
    const existing = topicStats[topic] || { correct: 0, total: 0 };
    const updated = { correct: existing.correct + (isCorrect?1:0), total: existing.total + 1 };
    setTopicStats(prev => ({ ...prev, [topic]: updated }));
    await supabase.from('topic_stats').upsert({
      user_id: user.id, topic, correct: updated.correct, total: updated.total, updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,topic' });
  };

  const saveAttempt = async (q, isCorrect) => {
    const entry = { user_id: user.id, question: q.q, topic: q.t, difficulty: q.d, correct: isCorrect };
    setHistory(prev => [{ ...entry, created_at: new Date().toISOString() }, ...prev].slice(0, 200));
    await supabase.from('attempts').insert(entry);
  };

  const saveNote = async () => {
    if (!noteInput.trim() || !currentQ) return;
    const entry = { user_id: user.id, question: currentQ.q, content: noteInput.trim() };
    const { data } = await supabase.from('notes').insert(entry).select().single();
    const key = currentQ.q;
    setNotes(prev => ({
      ...prev,
      [key]: [...(prev[key]||[]), { text: noteInput.trim(), date: new Date().toISOString(), id: data?.id }]
    }));
    setNoteInput('');
  };

  // Game logic
  const startGame = (topic, diff, timed) => {
    let pool = topic ? QUESTIONS.filter(q => q.t === topic) : [...sectionQuestions];
    if (diff) pool = pool.filter(q => q.d === diff);
    if (pool.length === 0) pool = [...sectionQuestions];
    setQueue(shuffle(pool).slice(0, Math.min(pool.length, 25)));
    setQIdx(0); setSelected(null); setAnswered(false); setCorrect(false);
    setShowExpl(false); setSc(0); setSt(0); setLives(5); setCombo(0); setStreak(0);
    setTimedMode(timed); setTimer(timed?15:0); setTimerActive(timed);
    setShowNotepad(false); setNoteInput('');
    setScreen('play');
  };

  const handleAnswer = useCallback(async (idx) => {
    if (answered) return;
    const isOk = idx === currentQ.a;
    setSelected(idx); setAnswered(true); setCorrect(isOk);
    setSt(p=>p+1); setTimerActive(false);

    await upsertTopicStat(currentQ.t, isOk);
    await saveAttempt(currentQ, isOk);

    const newTA = (profile.total_answered||0) + 1;
    const newTC = (profile.total_correct||0) + (isOk?1:0);

    if (isOk) {
      const nc = combo+1; const ns = streak+1;
      setCombo(nc); setStreak(ns);
      setSc(p=>p+1);
      const base = currentQ.d*10;
      const mult = Math.min(nc,5);
      const tBonus = timedMode ? Math.max(0,timer) : 0;
      const gained = base*mult + tBonus*2;
      const newXP = xp + gained;
      const newBest = Math.max(ns, profile.best_streak||0);
      setXpPop(gained); setShowPop(true); setTimeout(()=>setShowPop(false), 1200);
      await updateProfile({ xp: newXP, total_answered: newTA, total_correct: newTC, best_streak: newBest });
    } else {
      setCombo(0); setStreak(0); setLives(l=>l-1);
      setShakeWrong(true); setTimeout(()=>setShakeWrong(false), 500);
      await updateProfile({ total_answered: newTA, total_correct: newTC });
    }
  }, [answered, currentQ, combo, streak, timedMode, timer, xp, profile]);

  const nextQ = () => {
    setShowNotepad(false); setNoteInput('');
    if (lives<=0 || qIdx>=queue.length-1) { setScreen('results'); return; }
    setQIdx(i=>i+1); setSelected(null); setAnswered(false); setCorrect(false); setShowExpl(false);
    if (timedMode) { setTimer(15); setTimerActive(true); }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const comboLabel = combo>=5?"GODLIKE":combo>=4?"UNSTOPPABLE":combo>=3?"ON FIRE":combo>=2?"DOUBLE":"";
  const comboCl = combo>=5?"text-rose":combo>=3?"text-gold":combo>=2?"text-sky":"";
  const accuracy = (profile.total_answered||0) > 0 ? Math.round(((profile.total_correct||0)/(profile.total_answered||0))*100) : 0;
  const sectionIcon = section === 'JavaScript' ? '⚡' : section === 'React' ? '⚛️' : '🎯';

  // ═══ PROFILE SCREEN ═══
  if (screen === 'profile') {
    const qNotes = Object.entries(notes).filter(([,v])=>v.length>0);
    return (
      <div className="max-w-xl mx-auto p-5">
        <button onClick={()=>setScreen('home')} className="text-dim border border-border rounded-lg px-3 py-1.5 text-sm hover:border-dim transition mb-4">&larr; Back</button>
        <div className="text-center mb-6">
          {profile.avatar_url ? (
            <img src={profile.avatar_url} alt="" className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-gold/30" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-card border-2 border-gold/30 flex items-center justify-center text-3xl">🧑‍💻</div>
          )}
          <h2 className="text-xl font-extrabold text-bright">{profile.display_name}</h2>
          <p className="text-dim text-xs">Level {level} • {xp} XP</p>
          <div className="h-1.5 bg-border rounded-full mt-2 max-w-[200px] mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold to-sage rounded-full transition-all duration-500" style={{width:`${Math.min(lvlProg,100)}%`}} />
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          {['stats','notes','history'].map(tab=>(
            <button key={tab} onClick={()=>setProfileTab(tab)}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${profileTab===tab?'bg-gold/10 text-gold':'text-dim hover:text-bright'}`}>
              {tab}
            </button>
          ))}
        </div>
        {profileTab === 'stats' && (
          <div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-gold">{profile.total_answered||0}</div><div className="text-[10px] text-dim">Attempted</div></div>
              <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-sage">{accuracy}%</div><div className="text-[10px] text-dim">Accuracy</div></div>
              <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-rose">{profile.best_streak||0}</div><div className="text-[10px] text-dim">Best Streak</div></div>
            </div>
            <h3 className="text-xs font-bold text-dim uppercase tracking-wider mb-3">Topic Mastery</h3>
            {TOPICS.map(t=>{
              const s=topicStats[t]; if(!s) return null;
              const pct=Math.round(s.correct/s.total*100);
              const cl=pct>=70?'bg-sage':pct>=40?'bg-gold':'bg-rose';
              const tcl=pct>=70?'text-sage':pct>=40?'text-gold':'text-rose';
              return(
                <div key={t} className="mb-3">
                  <div className="flex justify-between text-xs mb-1"><span className="text-bright">{t}</span><span className={tcl}>{pct}% ({s.correct}/{s.total})</span></div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden"><div className={`h-full ${cl} rounded-full transition-all duration-500`} style={{width:`${pct}%`}} /></div>
                </div>
              );
            })}
          </div>
        )}
        {profileTab === 'notes' && (
          <div>
            {qNotes.length === 0 ? <p className="text-dim text-sm text-center py-8">No notes yet. Add notes after answering questions!</p>
            : qNotes.map(([question, noteList]) => (
              <div key={question} className="bg-card border border-border rounded-xl p-4 mb-3">
                <p className="text-xs font-semibold text-bright mb-2 leading-relaxed">{question}</p>
                {noteList.map((n,i) => (
                  <div key={i} className="bg-bg rounded-lg px-3 py-2 mb-1 text-xs">
                    <span className="text-gray-300">{n.text}</span>
                    <span className="text-dim/50 ml-2 text-[10px]">{new Date(n.date).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {profileTab === 'history' && (
          <div>
            {history.length === 0 ? <p className="text-dim text-sm text-center py-8">No history yet.</p>
            : history.slice(0,50).map((h,i) => (
              <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-0.5 ${i%2===0?'bg-card/50':''}`}>
                <span className="text-sm">{h.correct?'✅':'❌'}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-bright truncate">{h.question}</div>
                  <div className="text-[10px] text-dim">{h.topic} • {DIFF_LABELS[h.difficulty]}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={signOut} className="w-full mt-8 py-2.5 border border-rose/30 text-rose text-sm font-semibold rounded-xl hover:bg-rose/5 transition">Sign Out</button>
      </div>
    );
  }

  // ═══ HOME SCREEN ═══
  if (screen === 'home') return (
    <div className="max-w-xl mx-auto p-5">
      {/* Profile bar */}
      <button onClick={()=>{setProfileTab('stats');setScreen('profile')}}
        className="w-full flex items-center gap-3 bg-card border border-border rounded-2xl p-4 mb-3 hover:border-dim/50 transition text-left">
        {profile.avatar_url ? (
          <img src={profile.avatar_url} alt="" className="w-10 h-10 rounded-full border border-border" referrerPolicy="no-referrer" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-xl">🧑‍💻</div>
        )}
        <div className="flex-1">
          <div className="text-sm font-bold text-bright">{profile.display_name}</div>
          <div className="text-[11px] text-dim">Level {level} • {xp} XP</div>
        </div>
        <span className="text-dim text-xs">Profile →</span>
      </button>

      <div className="h-1.5 bg-border rounded-full mb-5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-gold to-sage rounded-full transition-all duration-500" style={{width:`${Math.min(lvlProg,100)}%`}} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-gold">{profile.total_answered||0}</div><div className="text-[10px] text-dim mt-0.5">Attempted</div></div>
        <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-sage">{accuracy}%</div><div className="text-[10px] text-dim mt-0.5">Accuracy</div></div>
        <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-rose">{profile.best_streak||0}</div><div className="text-[10px] text-dim mt-0.5">Best Streak</div></div>
        <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="text-lg font-bold text-sky">{Object.values(notes).flat().length}</div><div className="text-[10px] text-dim mt-0.5">Notes</div></div>
      </div>

      {/* ═══ SECTION SWITCHER ═══ */}
      <div className="flex gap-1 p-1 bg-card border border-border rounded-xl mb-5">
        {SECTIONS.map(s => (
          <button key={s} onClick={() => setSection(s)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              section === s 
                ? s === 'JavaScript' ? 'bg-gold/15 text-gold' : s === 'React' ? 'bg-sky/15 text-sky' : s === 'Python' ? 'bg-laven/15 text-laven' : 'bg-sage/15 text-sage'
                : 'text-dim hover:text-bright'
            }`}>
            {s === 'JavaScript' ? '⚡ ' : s === 'React' ? '⚛️ ' : s === 'Python' ? '🐍 ' : '🎯 '}{s}
            <span className="text-[10px] ml-1 opacity-60">({getQuestionsForSection(s).length})</span>
          </button>
        ))}
      </div>

      {/* Quick Play */}
      <h2 className="text-xs font-bold text-dim uppercase tracking-wider mb-2">Quick Play — {section}</h2>
      <div className="flex gap-3 mb-5">
        <button onClick={()=>startGame(null,null,false)} className={`flex-1 py-3.5 font-bold text-sm rounded-xl hover:brightness-110 active:scale-[0.98] transition text-bg ${
          section === 'React' ? 'bg-gradient-to-br from-sky to-blue-700' : section === 'JavaScript' ? 'bg-gradient-to-br from-gold to-amber-700' : 'bg-gradient-to-br from-sage to-emerald-700'
        }`}>{sectionIcon} All {section} Topics</button>
        <button onClick={()=>startGame(null,null,true)} className="flex-1 py-3.5 bg-gradient-to-br from-rose to-red-800 text-bg font-bold text-sm rounded-xl hover:brightness-110 active:scale-[0.98] transition">⏱ Timed Mode</button>
      </div>

      {/* Topics for current section */}
      <h2 className="text-xs font-bold text-dim uppercase tracking-wider mb-2">Topics</h2>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {sectionTopics.map(t=>{
          const s=topicStats[t]; const pct=s?Math.round(s.correct/s.total*100):0;
          const bcl=s?(pct>=70?'border-sage/40':pct>=40?'border-gold/40':'border-rose/40'):'border-border';
          const tcl=pct>=70?'text-sage':pct>=40?'text-gold':'text-rose';
          const displayName = t.replace('JS: ','').replace('React: ','');
          return(
            <button key={t} onClick={()=>startGame(t,null,false)} className={`bg-card border ${bcl} rounded-full px-3.5 py-1.5 text-xs hover:brightness-110 transition flex items-center gap-1.5`}>
              <span className="text-bright">{displayName}</span>
              {s && <span className={`text-[10px] ${tcl}`}>{pct}%</span>}
            </button>
          );
        })}
      </div>

      {/* Difficulty */}
      <h2 className="text-xs font-bold text-dim uppercase tracking-wider mb-2">By Difficulty</h2>
      <div className="flex gap-3">
        {[1,2,3].map(d=>(
          <button key={d} onClick={()=>startGame(null,d,false)} className={`flex-1 bg-card border border-border rounded-xl py-2.5 ${DIFF_CLR[d]} text-sm font-semibold hover:brightness-110 transition`}>
            {DIFF_LABELS[d]} ({sectionQuestions.filter(q=>q.d===d).length})
          </button>
        ))}
      </div>
    </div>
  );

  // ═══ PLAY SCREEN ═══
  if (screen === 'play' && currentQ) {
    const prog = ((qIdx+1)/queue.length)*100;
    const qNotes = notes[currentQ.q] || [];
    const topicDisplay = currentQ.t.replace('JS: ','').replace('React: ','');
    const isReactQ = currentQ.t.startsWith('React:');
    return (
      <div className="max-w-xl mx-auto p-5">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={()=>setScreen('home')} className="text-dim border border-border rounded-lg w-9 h-9 flex items-center justify-center hover:border-dim transition">&larr;</button>
          <div className="flex-1"><div className="h-1.5 bg-border rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-gold to-sage rounded-full transition-all duration-300" style={{width:`${prog}%`}} /></div></div>
          <div className="flex items-center gap-2.5">
            {timedMode && <span className={`border rounded-lg px-2.5 py-1 text-sm font-bold font-mono ${timer<=5?'text-rose border-rose/40':'text-gold border-gold/30'}`}>{timer}s</span>}
            <div className="flex gap-0.5">{Array.from({length:5},(_,i)=><span key={i} className={`text-xs ${i<lives?'opacity-100':'opacity-20'}`}>❤️</span>)}</div>
          </div>
        </div>

        {combo>=2 && <div className="text-center py-1 animate-pulse2"><span className={`text-xs font-bold tracking-widest ${comboCl}`}>{comboLabel} x{combo}</span></div>}
        {showPop && <div className="fixed top-[30%] left-1/2 z-50 animate-floatUp pointer-events-none"><div className="text-xl font-extrabold text-gold" style={{textShadow:'0 0 20px rgba(232,184,75,0.4)'}}>+{xpPop} XP</div></div>}

        <div className={`bg-card border border-border rounded-2xl p-5 mb-4 ${shakeWrong?'animate-shake':''}`}>
          <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
            <span className={`border rounded-full px-3 py-0.5 text-[10px] font-semibold ${DIFF_CLR[currentQ.d]} border-current/30`}>{DIFF_LABELS[currentQ.d]}</span>
            <span className={`border rounded-full px-3 py-0.5 text-[10px] font-semibold ${isReactQ ? 'border-sky/40 text-sky' : 'border-gold/40 text-gold'}`}>{isReactQ ? '⚛️ ' : '⚡ '}{topicDisplay}</span>
            <span className="text-[11px] text-dim">{qIdx+1}/{queue.length}</span>
          </div>

          <h2 className="text-[15px] font-semibold text-bright leading-relaxed mb-4">{currentQ.q}</h2>

          <div className="space-y-2.5">
            {currentQ.o.map((opt,i)=>{
              let cls = 'bg-card border-border text-gray-300 hover:border-dim/60 cursor-pointer';
              if (answered) {
                if (i===currentQ.a) cls = 'bg-sage/10 border-sage/60 text-sage';
                else if (i===selected && !correct) cls = 'bg-rose/10 border-rose/60 text-rose';
                else cls = 'bg-card border-border text-dim/40';
              }
              return (
                <button key={i} onClick={()=>handleAnswer(i)} disabled={answered}
                  className={`w-full flex items-center gap-3 p-3.5 border rounded-xl transition-all ${cls} ${answered&&i===currentQ.a?'scale-[1.01]':''}`}>
                  <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold flex-shrink-0 ${answered&&i===currentQ.a?'border-sage/60 text-sage':'border-border text-dim'}`}>{String.fromCharCode(65+i)}</span>
                  <span className="flex-1 text-left text-[13px]">{opt}</span>
                  {answered && i===currentQ.a && <span>✅</span>}
                  {answered && i===selected && !correct && i!==currentQ.a && <span>❌</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="mt-4">
              <div className="flex gap-2 flex-wrap">
                <button onClick={()=>setShowExpl(!showExpl)} className="border border-sky/30 text-sky rounded-lg px-3.5 py-1.5 text-xs font-semibold hover:bg-sky/5 transition">
                  {showExpl?'Hide':'Show'} Explanation
                </button>
                <button onClick={()=>setShowNotepad(!showNotepad)} className="border border-gold/30 text-gold rounded-lg px-3.5 py-1.5 text-xs font-semibold hover:bg-gold/5 transition">
                  📝 {showNotepad?'Hide':'Add'} Note
                </button>
              </div>
              {showExpl && (
                <div className="mt-2.5 p-3.5 bg-bg border border-sky/20 rounded-xl">
                  <p className="text-xs leading-relaxed text-gray-300">{currentQ.e}</p>
                </div>
              )}
              {showNotepad && (
                <div className="mt-2.5 p-3.5 bg-bg border border-gold/20 rounded-xl">
                  <textarea value={noteInput} onChange={e=>setNoteInput(e.target.value)} placeholder="Write your note or remark..."
                    className="w-full bg-card border border-border rounded-lg p-3 text-xs text-bright resize-y h-16 outline-none focus:border-gold/40 transition mb-2" />
                  <button onClick={saveNote} disabled={!noteInput.trim()}
                    className={`bg-gradient-to-r from-gold to-amber-600 text-bg font-bold text-xs py-1.5 px-4 rounded-lg transition ${noteInput.trim()?'opacity-100 hover:brightness-110':'opacity-40'}`}>
                    Save Note
                  </button>
                  {qNotes.length > 0 && (
                    <div className="mt-2.5">
                      <div className="text-[10px] text-dim mb-1.5">Your previous notes:</div>
                      {qNotes.map((n,i)=>(
                        <div key={i} className="text-[11px] text-gray-300 bg-card rounded-lg px-3 py-1.5 mb-1">
                          {n.text} <span className="text-dim/50 text-[9px] ml-1">{new Date(n.date).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {answered && (
          <button onClick={nextQ}
            className={`w-full py-3.5 font-bold text-base rounded-xl text-bg transition hover:brightness-110 active:scale-[0.98] mb-3 ${lives<=0||qIdx>=queue.length-1?'bg-gradient-to-r from-laven to-purple-800':'bg-gradient-to-r from-gold to-amber-600'}`}>
            {lives<=0?'See Results':qIdx>=queue.length-1?'Finish!':'Next Question →'}
          </button>
        )}

        <div className="flex justify-center gap-6 text-[11px] text-dim">
          <span>⚡ {xp} XP</span>
          <span>🔥 Streak: {streak}</span>
          <span>✅ {sc}/{st}</span>
        </div>
      </div>
    );
  }

  // ═══ RESULTS SCREEN ═══
  if (screen === 'results') {
    const pct = st>0?Math.round(sc/st*100):0;
    const grade = pct>=90?'S':pct>=75?'A':pct>=60?'B':pct>=40?'C':'F';
    const gc = pct>=90?'text-gold':pct>=75?'text-sage':pct>=60?'text-sky':pct>=40?'text-laven':'text-rose';
    const emoji = pct>=90?'👑':pct>=75?'🔥':pct>=60?'💪':pct>=40?'🤔':'💀';
    const msg = pct>=90?'Legendary!':pct>=75?'Solid skills!':pct>=60?'Getting there!':pct>=40?'Keep practicing!':'Don\'t give up!';
    return (
      <div className="max-w-xl mx-auto p-5 text-center">
        <div className="text-6xl mt-8 mb-2">{emoji}</div>
        <div className={`text-7xl font-extrabold ${gc} leading-none`}>{grade}</div>
        <p className="text-dim text-sm mt-2 mb-8">{msg}</p>
        <div className="grid grid-cols-4 gap-2 mb-8">
          <div className="bg-card border border-border rounded-xl p-3"><div className="text-xl font-bold text-sage">{sc}</div><div className="text-[10px] text-dim">Correct</div></div>
          <div className="bg-card border border-border rounded-xl p-3"><div className="text-xl font-bold text-rose">{st-sc}</div><div className="text-[10px] text-dim">Wrong</div></div>
          <div className="bg-card border border-border rounded-xl p-3"><div className="text-xl font-bold text-sky">{pct}%</div><div className="text-[10px] text-dim">Accuracy</div></div>
          <div className="bg-card border border-border rounded-xl p-3"><div className="text-xl font-bold text-gold">{profile.best_streak||0}</div><div className="text-[10px] text-dim">Best Streak</div></div>
        </div>
        <div className="flex gap-3">
          <button onClick={()=>startGame(null,null,false)} className="flex-1 py-3.5 bg-gradient-to-br from-sage to-emerald-700 text-bg font-bold text-sm rounded-xl hover:brightness-110 transition">🔄 Play Again</button>
          <button onClick={()=>setScreen('home')} className="flex-1 py-3.5 bg-gradient-to-br from-sky to-blue-800 text-bg font-bold text-sm rounded-xl hover:brightness-110 transition">🏠 Home</button>
        </div>
      </div>
    );
  }

  return null;
}
