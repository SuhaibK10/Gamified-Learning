import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import Dashboard from '@/components/Dashboard';

export default async function HomePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const { data: topicStats } = await supabase
    .from('topic_stats')
    .select('*')
    .eq('user_id', user.id);

  const { data: recentAttempts } = await supabase
    .from('attempts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(50);

  const { data: notes } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const statsMap = {};
  (topicStats || []).forEach(s => { statsMap[s.topic] = { correct: s.correct, total: s.total }; });

  const notesMap = {};
  (notes || []).forEach(n => {
    if (!notesMap[n.question]) notesMap[n.question] = [];
    notesMap[n.question].push({ text: n.content, date: n.created_at, id: n.id });
  });

  return (
    <Dashboard
      user={user}
      profile={profile || { xp: 0, best_streak: 0, total_answered: 0, total_correct: 0, display_name: 'Player', avatar_url: '' }}
      topicStats={statsMap}
      recentAttempts={recentAttempts || []}
      notes={notesMap}
    />
  );
}
