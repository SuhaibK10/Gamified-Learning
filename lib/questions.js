export const QUESTIONS = [
  {t:"Variables",d:1,q:"What does `typeof null` return?",o:["'null'","'object'","'undefined'","'boolean'"],a:1,e:"A 27-year-old bug. null's internal type tag was 0 (same as objects)."},
  {t:"Variables",d:1,q:"Which keyword should you use by default?",o:["var","let","const","def"],a:2,e:"const prevents reassignment and signals intent."},
  {t:"Variables",d:1,q:"const arr=[1,2,3]; arr.push(4); — error?",o:["Yes","No, works fine","Only strict mode","Depends"],a:1,e:"const prevents reassigning the variable, not mutating contents."},
  {t:"Variables",d:2,q:"What is NaN === NaN?",o:["true","false","TypeError","undefined"],a:1,e:"NaN is the only JS value not equal to itself. Use Number.isNaN()."},
  {t:"Variables",d:1,q:"Which is NOT falsy?",o:["0","''","'0'","null"],a:2,e:"String '0' is truthy! Falsy 6: false, 0, '', null, undefined, NaN."},
  {t:"Variables",d:2,q:"What is typeof NaN?",o:["'NaN'","'number'","'undefined'","'object'"],a:1,e:"Ironically, NaN (Not a Number) has type 'number'."},
  {t:"Variables",d:3,q:"[] == ![] returns?",o:["true","false","TypeError","undefined"],a:0,e:"![] is false, [] == false triggers coercion chain: both become 0."},

  {t:"Operators",d:1,q:"What does '5' + 3 return?",o:["8","'53'","NaN","'8'"],a:1,e:"+ with a string triggers concatenation."},
  {t:"Operators",d:1,q:"What does '5' - 3 return?",o:["2","'2'","NaN","'53'"],a:0,e:"- only works with numbers, so JS converts '5' to 5."},
  {t:"Operators",d:2,q:"0 || 'default' vs 0 ?? 'default'?",o:["Both 'default'","|| gives 'default', ?? gives 0","Both 0","Reversed"],a:1,e:"|| catches ALL falsy (0 is falsy). ?? only catches null/undefined."},
  {t:"Operators",d:1,q:"What does === check that == doesn't?",o:["Value only","Type and value","Reference","Prototype"],a:1,e:"=== checks both type AND value without conversion."},
  {t:"Operators",d:2,q:"user?.address?.city if user is null?",o:["TypeError","null","undefined","''"],a:2,e:"Optional chaining short-circuits to undefined. No crash!"},
  {t:"Operators",d:1,q:"What's true + true?",o:["2","true","'truetrue'","NaN"],a:0,e:"+ converts booleans to numbers: true=1, so 1+1=2."},

  {t:"Strings",d:1,q:"'hello'.slice(1, 3) returns?",o:["'hel'","'el'","'ell'","'ello'"],a:1,e:"slice(1,3) extracts index 1 and 2: 'e' and 'l'."},
  {t:"Strings",d:1,q:"Are strings mutable in JavaScript?",o:["Mutable","Immutable","Depends","Only with var"],a:1,e:"Strings are always immutable. Methods return NEW strings."},
  {t:"Strings",d:2,q:"'abc'.split('') returns?",o:["['abc']","['a','b','c']","'abc'","Error"],a:1,e:"split('') splits at every character boundary."},
  {t:"Strings",d:1,q:"Which creates a template literal?",o:["Single quotes","Double quotes","Backticks","Parentheses"],a:2,e:"Backticks enable template literals with expression interpolation."},
  {t:"Strings",d:2,q:"'Hello World'.includes('world') returns?",o:["true","false","undefined","TypeError"],a:1,e:"includes() is case-sensitive! 'world' !== 'World'."},

  {t:"Arrays",d:1,q:"[1,2,3].map(n => n * 2) returns?",o:["[2,4,6]","6","[1,2,3,1,2,3]","undefined"],a:0,e:"map() transforms every element into a NEW array."},
  {t:"Arrays",d:1,q:"[1,2,3,4,5].filter(n => n > 3) returns?",o:["[4,5]","[1,2,3]","2","true"],a:0,e:"filter() keeps only elements passing the test."},
  {t:"Arrays",d:2,q:"[10,9,80].sort() returns?",o:["[9,10,80]","[80,10,9]","[10,80,9]","[10,9,80]"],a:2,e:"sort() converts to STRINGS first! Fix: .sort((a,b) => a-b)."},
  {t:"Arrays",d:1,q:"What does .push() return?",o:["The array","Pushed element","New length","undefined"],a:2,e:"push() returns the new LENGTH, not the array."},
  {t:"Arrays",d:2,q:"[1,2,3].reduce((s,n) => s+n, 0) returns?",o:["6","[1,2,3]","'123'","0"],a:0,e:"reduce accumulates: 0+1=1, 1+2=3, 3+3=6."},
  {t:"Arrays",d:1,q:"Difference between find() and filter()?",o:["find=first, filter=all","Identical","find=index","find mutates"],a:0,e:"find() returns FIRST match. filter() returns ALL matches."},
  {t:"Arrays",d:3,q:"[1,2,3].map(parseInt) returns?",o:["[1,2,3]","[1,NaN,NaN]","Error","['1','2','3']"],a:1,e:"map passes (value,index) to parseInt. The radix trips it."},

  {t:"Objects",d:1,q:"const a={x:1}; const b=a; b.x=99; a.x is?",o:["1","99","undefined","Error"],a:1,e:"Objects are passed by REFERENCE. Both point to SAME object."},
  {t:"Objects",d:1,q:"Object.keys({a:1, b:2}) returns?",o:["[1,2]","['a','b']","2","{a,b}"],a:1,e:"Object.keys() returns array of key NAMES."},
  {t:"Objects",d:2,q:"How to deep copy an object?",o:["Object.assign","{ ...obj }","structuredClone(obj)","JSON.parse(obj)"],a:2,e:"structuredClone() creates true deep copy. Spread is only shallow."},

  {t:"Functions",d:1,q:"Declaration vs expression — key difference?",o:["Declarations hoisted","No difference","Expressions faster","Declarations can't return"],a:0,e:"Function declarations are hoisted (callable before definition)."},
  {t:"Functions",d:2,q:"What does a closure 'close over'?",o:["Global scope","Variables from creation scope","The DOM","Other functions"],a:1,e:"A closure remembers variables from its creation scope."},
  {t:"Functions",d:3,q:"for(var i=0;i<3;i++){setTimeout(()=>console.log(i),0)} prints?",o:["0,1,2","3,3,3","undefined x3","0,0,0"],a:1,e:"var is function-scoped. ONE shared i = 3 when timeouts fire. Use let."},
  {t:"Functions",d:2,q:"What's a higher-order function?",o:["Runs first","Takes/returns functions","Recursive","Async"],a:1,e:"Takes functions as args or returns functions."},

  {t:"DOM",d:1,q:"querySelector('.btn') returns?",o:["All .btn","First .btn","NodeList","HTMLCollection"],a:1,e:"querySelector returns FIRST match. querySelectorAll for all."},
  {t:"DOM",d:2,q:"textContent vs innerHTML?",o:["Identical","text=safe, html=parses","innerHTML safer","textContent parses"],a:1,e:"textContent is safe. innerHTML parses HTML (XSS risk!)."},
  {t:"DOM",d:2,q:"classList.toggle('active') does?",o:["Always adds","Always removes","Adds if missing, removes if present","Error"],a:2,e:"toggle flips: add if absent, remove if present."},

  {t:"Events",d:1,q:"e.preventDefault() does?",o:["Stops bubbling","Stops browser default","Removes listener","Stops all events"],a:1,e:"Stops default behavior (form submit, link navigation)."},
  {t:"Events",d:2,q:"What is event delegation?",o:["Listener on each child","One listener on parent","Worker delegation","Stop bubbling"],a:1,e:"Parent catches child events via bubbling. Works for dynamic elements."},
  {t:"Events",d:2,q:"e.target vs e.currentTarget?",o:["Same","target=clicked, currentTarget=listener","target=parent","Depends"],a:1,e:"target=actually clicked. currentTarget=element with listener."},

  {t:"Async",d:2,q:"fetch('/api') returns 404. Promise rejects?",o:["Yes","No, resolves","Throws error","Depends"],a:1,e:"fetch only rejects on NETWORK failures. 404 resolves! Check res.ok."},
  {t:"Async",d:1,q:"3 states of a Promise?",o:["start/middle/end","pending/fulfilled/rejected","open/closed/error","sync/async/done"],a:1,e:"Pending (waiting), Fulfilled (success), Rejected (error)."},
  {t:"Async",d:2,q:"Sequential awaits vs Promise.all — faster?",o:["Sequential","Promise.all","Same","Depends"],a:1,e:"Promise.all runs parallel. 2s+2s: sequential=4s, parallel=2s."},
  {t:"Async",d:1,q:"Which keyword makes a function return a Promise?",o:["promise","await","async","return"],a:2,e:"'async' makes the function always return a Promise."},
  {t:"Async",d:3,q:"setTimeout(() => console.log('A'), 0) runs when?",o:["Immediately","After call stack clears","Never","After 1ms"],a:1,e:"Even 0ms goes to task queue. Runs AFTER sync code finishes."},

  {t:"ES6+",d:1,q:"Spread ... on array does?",o:["Copies ref","Unpacks elements","Deletes","Sorts"],a:1,e:"Spread unpacks: [...arr] creates shallow copy."},
  {t:"ES6+",d:2,q:"const [a,,b] = [1,2,3] — a and b?",o:["1 and 2","1 and 3","2 and 3","Error"],a:1,e:"Empty comma skips. a=1, skip idx 1, b=3."},
  {t:"ES6+",d:1,q:"What does a Set guarantee?",o:["Sorted","Unique elements","Frozen","Strings only"],a:1,e:"Set stores only unique values."},
  {t:"ES6+",d:2,q:"Map vs plain object — key difference?",o:["No difference","Map: any key type","Map faster","Objects: more data"],a:1,e:"Maps accept any key type, maintain order, have .size."},

  {t:"Error Handling",d:1,q:"When does finally run?",o:["After catch only","After try only","Always","If no error"],a:2,e:"finally ALWAYS runs regardless of success or failure."},
  {t:"Error Handling",d:2,q:"throw new Error('x') creates?",o:["A string","Error with stack trace","A warning","A log"],a:1,e:"Error object with .name, .message, .stack properties."},

  {t:"Classes",d:1,q:"extends does?",o:["Adds methods","Creates inheritance","Makes larger","Exports"],a:1,e:"extends sets up inheritance from a parent class."},
  {t:"Classes",d:2,q:"super() in constructor does?",o:["Calls parent constructor","Creates instance","Returns class","Static"],a:0,e:"super() runs parent's constructor."},
  {t:"Classes",d:2,q:"# before a field means?",o:["Comment","Truly private","Static","Decorator"],a:1,e:"# creates truly private fields."},

  {t:"Storage",d:1,q:"localStorage stores data as?",o:["Objects","Arrays","Strings only","Any type"],a:2,e:"Strings only. Use JSON.stringify/parse."},
  {t:"Storage",d:1,q:"What can't JSON.stringify handle?",o:["Numbers","Arrays","Functions & undefined","Strings"],a:2,e:"JSON drops functions, undefined, Symbol."},
  {t:"Storage",d:2,q:"sessionStorage vs localStorage?",o:["Faster","Clears on tab close","More space","Same"],a:1,e:"sessionStorage is tab-scoped. Close tab = gone."},

  {t:"Mixed",d:3,q:"log(1); setTimeout(()=>log(2),0); log(3); output?",o:["1,2,3","1,3,2","3,2,1","2,1,3"],a:1,e:"Sync first (1,3), then event loop (2)."},
  {t:"Mixed",d:2,q:"[...new Set('hello')] returns?",o:["['hello']","['h','e','l','o']","['h','e','l','l','o']","Set"],a:1,e:"String spreads, Set dedupes, spread back to array."},
  {t:"Mixed",d:1,q:"What year was JavaScript created?",o:["1991","1995","2000","2008"],a:1,e:"Brendan Eich created JS in 10 days, May 1995."},
];

export const TOPICS = [...new Set(QUESTIONS.map(q => q.t))];
export const DIFF_LABELS = ['', 'Easy', 'Medium', 'Hard'];
export const DIFF_COLORS = ['', 'text-sage', 'text-gold', 'text-rose'];
export const DIFF_BG = ['', 'bg-sage/10 border-sage/30', 'bg-gold/10 border-gold/30', 'bg-rose/10 border-rose/30'];

export const LEVELS = [0,100,250,450,700,1000,1400,1900,2500,3200,4000,5000,6500,8000,10000];
export const getLevel = (xp) => {
  for (let i = LEVELS.length - 1; i >= 0; i--) if (xp >= LEVELS[i]) return i + 1;
  return 1;
};

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
