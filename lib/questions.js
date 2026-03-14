// ═══════════════════════════════════════════════════
// JS ARENA — QUESTION BANK
// JavaScript + React Questions
// ═══════════════════════════════════════════════════

export const QUESTIONS = [
  // ────────────────────────────────────────────────
  // JAVASCRIPT QUESTIONS (existing)
  // ────────────────────────────────────────────────
  {t:"JS: Variables",d:1,q:"What does `typeof null` return?",o:["'null'","'object'","'undefined'","'boolean'"],a:1,e:"A 27-year-old bug. null's internal type tag was 0 (same as objects)."},
  {t:"JS: Variables",d:1,q:"Which keyword should you use by default?",o:["var","let","const","def"],a:2,e:"const prevents reassignment and signals intent."},
  {t:"JS: Variables",d:1,q:"const arr=[1,2,3]; arr.push(4); — error?",o:["Yes","No, works fine","Only strict mode","Depends"],a:1,e:"const prevents reassigning the variable, not mutating contents."},
  {t:"JS: Variables",d:2,q:"What is NaN === NaN?",o:["true","false","TypeError","undefined"],a:1,e:"NaN is the only JS value not equal to itself. Use Number.isNaN()."},
  {t:"JS: Variables",d:1,q:"Which is NOT falsy?",o:["0","''","'0'","null"],a:2,e:"String '0' is truthy! Falsy 6: false, 0, '', null, undefined, NaN."},
  {t:"JS: Variables",d:2,q:"What is typeof NaN?",o:["'NaN'","'number'","'undefined'","'object'"],a:1,e:"Ironically, NaN (Not a Number) has type 'number'."},
  {t:"JS: Variables",d:3,q:"[] == ![] returns?",o:["true","false","TypeError","undefined"],a:0,e:"![] is false, [] == false triggers coercion chain: both become 0."},

  {t:"JS: Operators",d:1,q:"What does '5' + 3 return?",o:["8","'53'","NaN","'8'"],a:1,e:"+ with a string triggers concatenation."},
  {t:"JS: Operators",d:1,q:"What does '5' - 3 return?",o:["2","'2'","NaN","'53'"],a:0,e:"- only works with numbers, so JS converts '5' to 5."},
  {t:"JS: Operators",d:2,q:"0 || 'default' vs 0 ?? 'default'?",o:["Both 'default'","|| gives 'default', ?? gives 0","Both 0","Reversed"],a:1,e:"|| catches ALL falsy (0 is falsy). ?? only catches null/undefined."},
  {t:"JS: Operators",d:1,q:"What does === check that == doesn't?",o:["Value only","Type and value","Reference","Prototype"],a:1,e:"=== checks both type AND value without conversion."},
  {t:"JS: Operators",d:2,q:"user?.address?.city if user is null?",o:["TypeError","null","undefined","''"],a:2,e:"Optional chaining short-circuits to undefined. No crash!"},
  {t:"JS: Operators",d:1,q:"What's true + true?",o:["2","true","'truetrue'","NaN"],a:0,e:"+ converts booleans to numbers: true=1, so 1+1=2."},

  {t:"JS: Strings",d:1,q:"'hello'.slice(1, 3) returns?",o:["'hel'","'el'","'ell'","'ello'"],a:1,e:"slice(1,3) extracts index 1 and 2: 'e' and 'l'."},
  {t:"JS: Strings",d:1,q:"Are strings mutable in JavaScript?",o:["Mutable","Immutable","Depends","Only with var"],a:1,e:"Strings are always immutable. Methods return NEW strings."},
  {t:"JS: Strings",d:2,q:"'abc'.split('') returns?",o:["['abc']","['a','b','c']","'abc'","Error"],a:1,e:"split('') splits at every character boundary."},
  {t:"JS: Strings",d:1,q:"Which creates a template literal?",o:["Single quotes","Double quotes","Backticks","Parentheses"],a:2,e:"Backticks enable template literals with expression interpolation."},

  {t:"JS: Arrays",d:1,q:"[1,2,3].map(n => n * 2) returns?",o:["[2,4,6]","6","[1,2,3,1,2,3]","undefined"],a:0,e:"map() transforms every element into a NEW array."},
  {t:"JS: Arrays",d:1,q:"[1,2,3,4,5].filter(n => n > 3) returns?",o:["[4,5]","[1,2,3]","2","true"],a:0,e:"filter() keeps only elements passing the test."},
  {t:"JS: Arrays",d:2,q:"[10,9,80].sort() returns?",o:["[9,10,80]","[80,10,9]","[10,80,9]","[10,9,80]"],a:2,e:"sort() converts to STRINGS first! Fix: .sort((a,b) => a-b)."},
  {t:"JS: Arrays",d:2,q:"[1,2,3].reduce((s,n) => s+n, 0) returns?",o:["6","[1,2,3]","'123'","0"],a:0,e:"reduce accumulates: 0+1=1, 1+2=3, 3+3=6."},
  {t:"JS: Arrays",d:1,q:"Difference between find() and filter()?",o:["find=first, filter=all","Identical","find=index","find mutates"],a:0,e:"find() returns FIRST match. filter() returns ALL matches."},
  {t:"JS: Arrays",d:3,q:"[1,2,3].map(parseInt) returns?",o:["[1,2,3]","[1,NaN,NaN]","Error","['1','2','3']"],a:1,e:"map passes (value,index) to parseInt. The radix trips it."},

  {t:"JS: Objects",d:1,q:"const a={x:1}; const b=a; b.x=99; a.x is?",o:["1","99","undefined","Error"],a:1,e:"Objects are passed by REFERENCE. Both point to SAME object."},
  {t:"JS: Objects",d:1,q:"Object.keys({a:1, b:2}) returns?",o:["[1,2]","['a','b']","2","{a,b}"],a:1,e:"Object.keys() returns array of key NAMES."},
  {t:"JS: Objects",d:2,q:"How to deep copy an object?",o:["Object.assign","{ ...obj }","structuredClone(obj)","JSON.parse(obj)"],a:2,e:"structuredClone() creates true deep copy. Spread is only shallow."},

  {t:"JS: Functions",d:1,q:"Declaration vs expression — key difference?",o:["Declarations hoisted","No difference","Expressions faster","Declarations can't return"],a:0,e:"Function declarations are hoisted (callable before definition)."},
  {t:"JS: Functions",d:2,q:"What does a closure 'close over'?",o:["Global scope","Variables from creation scope","The DOM","Other functions"],a:1,e:"A closure remembers variables from its creation scope."},
  {t:"JS: Functions",d:3,q:"for(var i=0;i<3;i++){setTimeout(()=>console.log(i),0)} prints?",o:["0,1,2","3,3,3","undefined x3","0,0,0"],a:1,e:"var is function-scoped. ONE shared i = 3 when timeouts fire. Use let."},
  {t:"JS: Functions",d:2,q:"What's a higher-order function?",o:["Runs first","Takes/returns functions","Recursive","Async"],a:1,e:"Takes functions as args or returns functions."},

  {t:"JS: Async",d:2,q:"fetch('/api') returns 404. Promise rejects?",o:["Yes","No, resolves","Throws error","Depends"],a:1,e:"fetch only rejects on NETWORK failures. 404 resolves! Check res.ok."},
  {t:"JS: Async",d:1,q:"3 states of a Promise?",o:["start/middle/end","pending/fulfilled/rejected","open/closed/error","sync/async/done"],a:1,e:"Pending (waiting), Fulfilled (success), Rejected (error)."},
  {t:"JS: Async",d:2,q:"Sequential awaits vs Promise.all — faster?",o:["Sequential","Promise.all","Same","Depends"],a:1,e:"Promise.all runs parallel. 2s+2s: sequential=4s, parallel=2s."},
  {t:"JS: Async",d:1,q:"Which keyword makes a function return a Promise?",o:["promise","await","async","return"],a:2,e:"'async' makes the function always return a Promise."},
  {t:"JS: Async",d:3,q:"setTimeout(() => console.log('A'), 0) runs when?",o:["Immediately","After call stack clears","Never","After 1ms"],a:1,e:"Even 0ms goes to task queue. Runs AFTER sync code finishes."},

  {t:"JS: ES6+",d:1,q:"Spread ... on array does?",o:["Copies ref","Unpacks elements","Deletes","Sorts"],a:1,e:"Spread unpacks: [...arr] creates shallow copy."},
  {t:"JS: ES6+",d:2,q:"const [a,,b] = [1,2,3] — a and b?",o:["1 and 2","1 and 3","2 and 3","Error"],a:1,e:"Empty comma skips. a=1, skip idx 1, b=3."},
  {t:"JS: ES6+",d:1,q:"What does a Set guarantee?",o:["Sorted","Unique elements","Frozen","Strings only"],a:1,e:"Set stores only unique values."},

  {t:"JS: Mixed",d:3,q:"log(1); setTimeout(()=>log(2),0); log(3); output?",o:["1,2,3","1,3,2","3,2,1","2,1,3"],a:1,e:"Sync first (1,3), then event loop (2)."},
  {t:"JS: Mixed",d:2,q:"[...new Set('hello')] returns?",o:["['hello']","['h','e','l','o']","['h','e','l','l','o']","Set"],a:1,e:"String spreads, Set dedupes, spread back to array."},
  {t:"JS: Mixed",d:1,q:"What year was JavaScript created?",o:["1991","1995","2000","2008"],a:1,e:"Brendan Eich created JS in 10 days, May 1995."},

  // ────────────────────────────────────────────────
  // REACT QUESTIONS
  // ────────────────────────────────────────────────

  // ─── React Basics & Philosophy ───
  {t:"React: Basics",d:1,q:"What is React?",o:["A full framework","A UI library for building interfaces","A backend framework","A CSS preprocessor"],a:1,e:"React is a JavaScript LIBRARY (not framework) for building user interfaces. It handles the view layer only."},
  {t:"React: Basics",d:1,q:"Who created React and when?",o:["Google, 2010","Facebook, 2013","Microsoft, 2015","Netflix, 2012"],a:1,e:"Jordan Walke at Facebook created React. Open-sourced in May 2013."},
  {t:"React: Basics",d:2,q:"What is the Virtual DOM?",o:["A faster browser DOM","A JS copy of the real DOM used for diffing","A database","An HTML template engine"],a:1,e:"React creates a lightweight JS representation of the real DOM, diffs old vs new, and only updates what changed. This is why React is fast."},
  {t:"React: Basics",d:1,q:"React is declarative. What does that mean?",o:["You describe step-by-step DOM changes","You describe WHAT the UI should look like","You declare variables","You write CSS in JS"],a:1,e:"Declarative: you describe the desired state of the UI, React figures out HOW to update the DOM. Imperative (vanilla JS) = you manually do each step."},
  {t:"React: Basics",d:2,q:"What is reconciliation in React?",o:["Merging CSS files","The diffing process between old and new Virtual DOM","Connecting to a database","Compiling JSX"],a:1,e:"Reconciliation is React's algorithm for comparing the previous Virtual DOM tree with the new one and computing the minimal set of real DOM changes needed."},
  {t:"React: Basics",d:2,q:"React updates are batched. What does this mean?",o:["Updates are sent to server in batches","Multiple setState calls are combined into one re-render","Components render in batches of 10","CSS is applied in batches"],a:1,e:"If you call setState 3 times in a row, React doesn't re-render 3 times. It batches them into ONE update for performance."},

  // ─── JSX ───
  {t:"React: JSX",d:1,q:"What is JSX?",o:["A new language","Syntactic sugar that compiles to React.createElement calls","HTML inside CSS","A templating engine"],a:1,e:"JSX looks like HTML but compiles to React.createElement() function calls via Babel/Vite. It's JavaScript, not HTML."},
  {t:"React: JSX",d:1,q:"Why className instead of class in JSX?",o:["React convention","'class' is a reserved JS keyword","It's faster","No reason"],a:1,e:"JSX compiles to JavaScript, where 'class' is reserved for ES6 classes. So React uses 'className'. Similarly, 'for' becomes 'htmlFor'."},
  {t:"React: JSX",d:1,q:"What do curly braces {} do inside JSX?",o:["Create a new scope","Embed JavaScript expressions","Define CSS","Create components"],a:1,e:"Curly braces are an 'escape hatch' from JSX back to JavaScript. You can put any JS expression inside: variables, math, function calls, ternaries."},
  {t:"React: JSX",d:2,q:"Can you use if/else inside JSX curly braces?",o:["Yes, freely","No, only expressions allowed","Only with plugins","Only in class components"],a:1,e:"JSX {} only accepts expressions (things that produce a value), not statements (if/else, for). Use ternary operators or logical && instead."},
  {t:"React: JSX",d:1,q:"How do you write a comment in JSX?",o:["<!-- comment -->","// comment","/* comment */","{/* comment */}"],a:3,e:"JSX comments must be inside curly braces: {/* comment */}. HTML-style <!-- --> doesn't work in JSX."},
  {t:"React: JSX",d:2,q:"What's a Fragment in React?",o:["A broken component","An invisible wrapper that avoids extra DOM nodes","A CSS feature","A debugging tool"],a:1,e:"Fragments (<> </> or <React.Fragment>) let you return multiple elements without adding an extra div to the DOM. Keeps markup clean."},
  {t:"React: JSX",d:2,q:"How is style applied in JSX?",o:["style='color: red'","style={{color: 'red'}}","style={color: red}","css={{color: red}}"],a:1,e:"JSX style takes an OBJECT (not a string). Double braces: outer {} = JS expression, inner {} = object literal. Properties are camelCase: backgroundColor, not background-color."},

  // ─── Components ───
  {t:"React: Components",d:1,q:"What IS a React component?",o:["An HTML tag","A function that returns JSX","A CSS class","A database table"],a:1,e:"A component is a JavaScript function that returns JSX. That's the entire definition. It describes a piece of UI."},
  {t:"React: Components",d:1,q:"Why must component names start with a capital letter?",o:["Convention only","React treats lowercase as HTML elements","It runs faster","It enables TypeScript"],a:1,e:"React uses the casing to distinguish: <div> = HTML element, <Dashboard> = React component. Lowercase = treated as a string (HTML tag)."},
  {t:"React: Components",d:2,q:"What is component composition?",o:["Combining CSS with JS","Using components inside other components","Server rendering","Compiling components"],a:1,e:"Composition = nesting components inside each other like LEGO blocks. App contains Header, Main, Footer. Main contains PostList. PostList contains PostCards."},
  {t:"React: Components",d:1,q:"What's the difference between a component and an element?",o:["Same thing","Component is a function, element is what it returns","Component is HTML, element is JS","No difference"],a:1,e:"A component is the FUNCTION (the recipe). An element is what the function RETURNS (the dish). <Button /> calls the Button component and produces a React element."},

  // ─── Props ───
  {t:"React: Props",d:1,q:"What are props in React?",o:["CSS properties","Data passed from parent to child component","State variables","Event handlers"],a:1,e:"Props (properties) are how parent components pass data DOWN to child components. They're like function arguments — because components ARE functions."},
  {t:"React: Props",d:1,q:"Are props mutable or immutable?",o:["Mutable","Immutable (read-only)","Depends on type","Mutable in class components"],a:1,e:"Props are READ-ONLY. A component must never modify its own props. This enforces one-way data flow: parent controls data, child just displays it."},
  {t:"React: Props",d:2,q:"What is the children prop?",o:["An array of child components","Content placed between opening and closing tags","A special state variable","The parent component"],a:1,e:"children is whatever JSX you put BETWEEN a component's tags: <Card><h1>Title</h1></Card>. Inside Card, props.children = <h1>Title</h1>. Used for wrapper components."},
  {t:"React: Props",d:1,q:"How do you set a default prop value?",o:["defaultProps only","Destructuring with = syntax","PropTypes","It's not possible"],a:1,e:"Use default parameters in destructuring: function Button({ label = 'Click me' }). The default is used when the prop isn't passed by the parent."},
  {t:"React: Props",d:2,q:"Can you pass a function as a prop?",o:["No, only data","Yes, functions are values","Only arrow functions","Only with useCallback"],a:1,e:"Functions are values in JS. Passing functions as props is THE pattern for child-to-parent communication: parent passes onClick handler, child calls it."},
  {t:"React: Props",d:2,q:"Why is one-way data flow important?",o:["Performance","Predictability — easy to trace where data comes from","It's not important","Saves memory"],a:1,e:"Data flows parent→child via props. If something's wrong, you only look UP the tree. Two-way flow (like old Angular) made debugging a nightmare — changes could come from anywhere."},

  // ─── State & useState ───
  {t:"React: useState",d:1,q:"What is state in React?",o:["Global variables","Component's own mutable data that triggers re-renders","CSS state","Server data"],a:1,e:"State is data OWNED by the component that can change over time. When state changes, React automatically re-renders the component to reflect the new data."},
  {t:"React: useState",d:1,q:"useState returns what?",o:["Just the value","[value, setter] array","An object","A promise"],a:1,e:"useState returns an array with exactly 2 items: [currentValue, setterFunction]. You destructure it: const [count, setCount] = useState(0)."},
  {t:"React: useState",d:2,q:"Why can't you mutate state directly like state.push(item)?",o:["Syntax error","React doesn't detect the change (same reference)","It's slower","It crashes"],a:1,e:"React compares references. .push() mutates the SAME array (same reference). React sees old === new and thinks nothing changed. Create a NEW array: [...state, item]."},
  {t:"React: useState",d:2,q:"When should you use setCount(prev => prev + 1)?",o:["Always","When new state depends on previous state","Never","Only for numbers"],a:1,e:"The updater function form guarantees you're working with the LATEST value. Important because React batches updates — without it, multiple setCount(count+1) calls use the same stale 'count'."},
  {t:"React: useState",d:1,q:"What happens when you call setState?",o:["DOM updates immediately","Component re-renders with new state","Nothing visible","Page reloads"],a:1,e:"setState schedules a re-render. React calls your component function again, this time useState returns the NEW value. The returned JSX reflects the update. React patches the DOM."},
  {t:"React: useState",d:2,q:"How do you update ONE property of an object in state?",o:["state.name = 'new'","setState({...state, name: 'new'})","setState.name('new')","state = {...state, name: 'new'}"],a:1,e:"Spread the existing state, then override the property: setState({...state, name: 'new'}). This creates a NEW object (new reference) so React detects the change."},
  {t:"React: useState",d:3,q:"You call setCount(count+1) three times in a row. Count was 0. Result?",o:["3","1","0","Error"],a:1,e:"All three calls use the SAME stale count (0). So it's setCount(0+1) three times = 1, not 3. Fix: setCount(prev => prev+1) three times = 3 (each gets latest value)."},
  {t:"React: useState",d:1,q:"What's the argument to useState()?",o:["The component name","The initial value of the state","The setter function","A callback"],a:1,e:"useState(initialValue) sets the starting value. useState(0) starts at 0, useState('') starts as empty string, useState([]) starts as empty array."},

  // ─── Events ───
  {t:"React: Events",d:1,q:"React event names are written in?",o:["lowercase","camelCase","UPPERCASE","kebab-case"],a:1,e:"React uses camelCase: onClick, onChange, onSubmit, onKeyDown. NOT onclick or on-click."},
  {t:"React: Events",d:2,q:"onClick={handleClick} vs onClick={handleClick()} — difference?",o:["No difference","First PASSES function, second CALLS it immediately","First is slower","Second is React-specific"],a:1,e:"onClick={handleClick} passes the function reference (called on click). onClick={handleClick()} CALLS it immediately during render — a common bug! Wrap in arrow if you need args: onClick={() => handleClick(id)}."},
  {t:"React: Events",d:1,q:"How do you prevent a form from reloading the page?",o:["return false","e.preventDefault()","e.stopPropagation()","onSubmit={false}"],a:1,e:"e.preventDefault() stops the browser's default form submission behavior (page reload). Call it first thing in your submit handler."},
  {t:"React: Events",d:2,q:"How do you pass an argument to an event handler?",o:["onClick={handleClick(id)}","onClick={() => handleClick(id)}","onClick={handleClick, id}","onClick=handleClick(id)"],a:1,e:"Wrap in an arrow function: onClick={() => handleClick(id)}. This creates a function that, when called (on click), runs handleClick with the id. Direct handleClick(id) would call it immediately."},

  // ─── Conditional Rendering ───
  {t:"React: Conditional",d:1,q:"How do you render A or B based on a condition in JSX?",o:["if/else inside JSX","Ternary: condition ? A : B","switch statement","for loop"],a:1,e:"Use ternary inside JSX: {isLoading ? <Spinner /> : <Content />}. if/else are statements and can't go inside JSX (which only accepts expressions)."},
  {t:"React: Conditional",d:2,q:"{count && <Badge />} when count is 0 shows?",o:["Nothing","The Badge","0 on screen","Error"],a:2,e:"0 is falsy, so 0 && <Badge /> evaluates to 0. React renders 0 as text on screen! Fix: {count > 0 && <Badge />} — always use explicit boolean checks with &&."},
  {t:"React: Conditional",d:1,q:"What does {isOpen && <Dropdown />} do?",o:["Always shows Dropdown","Shows Dropdown only if isOpen is true","Toggles Dropdown","Creates a new Dropdown"],a:1,e:"Logical AND short-circuit: if isOpen is true, evaluates and returns <Dropdown />. If false, returns false (React renders nothing). It's the 'show or nothing' pattern."},
  {t:"React: Conditional",d:2,q:"What's the early return pattern in React?",o:["Returning null from useEffect","Returning early from a component based on conditions","Using break in JSX","Returning from setState"],a:1,e:"Check conditions at the top of the component and return alternative JSX early: if (!user) return <LoginPage />; The rest of the component only runs for logged-in users."},

  // ─── Lists & Keys ───
  {t:"React: Lists",d:1,q:"How do you render a list of items in React?",o:["for loop in JSX","array.map(item => JSX)","document.createElement","innerHTML"],a:1,e:"Use .map() to transform an array of data into an array of JSX elements: {items.map(item => <li key={item.id}>{item.name}</li>)}."},
  {t:"React: Lists",d:1,q:"Why do list items need a 'key' prop?",o:["CSS styling","React uses keys to track which items changed/moved/removed","Performance only","They don't need keys"],a:1,e:"Keys are React's way of identifying items across re-renders. Without stable keys, React can't tell which item was added/removed/reordered and may update the wrong elements."},
  {t:"React: Lists",d:2,q:"Why is array index a bad key for dynamic lists?",o:["It's fine to use","Indices shift when items are added/removed, confusing React","It's slower","Index isn't a number"],a:1,e:"If you delete item at index 2, item at index 3 becomes index 2. React thinks index 2 just changed content (not that old index 2 was deleted). This causes bugs: wrong data, lost input state, broken animations."},
  {t:"React: Lists",d:1,q:"What makes a good key?",o:["Array index","Random Math.random()","Stable unique ID from data","The item's name"],a:2,e:"Keys should be stable (don't change), unique (among siblings), and come from your data (database IDs, UUIDs). Random values create NEW keys every render, defeating the purpose."},

  // ─── useEffect ───
  {t:"React: useEffect",d:1,q:"What is useEffect for?",o:["Styling components","Running side effects (fetch, timers, listeners)","Creating state","Defining props"],a:1,e:"useEffect handles side effects: things that 'reach outside' the component — fetching data, setting up event listeners, timers, updating document title, etc."},
  {t:"React: useEffect",d:2,q:"useEffect(() => {}, []) — when does this run?",o:["Every render","Once after first render only","Never","Before render"],a:1,e:"Empty dependency array [] means: 'I have no dependencies, so only run once after the initial render.' This is the equivalent of componentDidMount in class components."},
  {t:"React: useEffect",d:2,q:"useEffect(() => {}, [userId]) — when does it re-run?",o:["Every render","Only when userId changes","Once","Never"],a:1,e:"The dependency array is a 'watch list.' React re-runs the effect whenever any value in the array changes. [userId] means: run the effect when userId is different from last render."},
  {t:"React: useEffect",d:3,q:"What causes an infinite loop in useEffect?",o:["Using async","Updating a state variable that's in its own dependency array","Returning a function","Using multiple effects"],a:1,e:"Effect runs → updates state X → X is in deps → triggers re-render → effect runs again → updates X → re-render → forever. Solution: remove X from deps or restructure the logic."},
  {t:"React: useEffect",d:2,q:"What is a cleanup function in useEffect?",o:["A function that deletes the component","A returned function that runs on unmount or before re-running","A function that cleans localStorage","Error handling"],a:1,e:"Return a function from useEffect to clean up: remove listeners, clear timers, cancel subscriptions. Runs when the component unmounts OR before the effect re-runs with new deps."},
  {t:"React: useEffect",d:1,q:"What's a side effect in React?",o:["A bug","Any operation that reaches outside the component (fetch, DOM, timers)","A CSS animation","State update"],a:1,e:"Side effects are operations beyond rendering UI: API calls, manual DOM manipulation, timers, subscriptions. They 'reach outside' the pure render cycle."},

  // ─── Forms ───
  {t:"React: Forms",d:1,q:"What is a controlled component?",o:["A component with no state","An input whose value is controlled by React state","A component with propTypes","A server-rendered component"],a:1,e:"Controlled input: value={state}, onChange updates state. React state is the 'single source of truth' — the input always shows what's in state. You control every keystroke."},
  {t:"React: Forms",d:2,q:"Why do controlled inputs need both value AND onChange?",o:["Convention","value locks the display, onChange allows updates","onChange is optional","Only value is needed"],a:1,e:"value={state} locks the input to the state value. Without onChange, the user can't type (input is frozen). onChange={(e) => setState(e.target.value)} updates state on each keystroke, which updates the displayed value."},
  {t:"React: Forms",d:1,q:"What does e.target.value contain in an input onChange?",o:["The input element","The current text in the input field","The previous value","The event type"],a:1,e:"e.target is the input element that fired the event. e.target.value is the current text content of that input — what the user has typed so far."},

  // ─── Lifting State Up ───
  {t:"React: Lifting State",d:2,q:"Two sibling components need the same data. Solution?",o:["Use global variables","Lift state up to their common parent","Copy state in both","Use localStorage"],a:1,e:"Move the shared state UP to the nearest common parent. The parent holds the state and passes it down to both siblings via props. This is called 'lifting state up.'"},
  {t:"React: Lifting State",d:2,q:"How does a child component 'change' the parent's state?",o:["Directly modify parent state","Parent passes a setter function as a prop, child calls it","It can't","Using context only"],a:1,e:"Parent passes the setState function (or a wrapper) as a prop. Child calls this function, which updates the parent's state, triggering re-render of both parent and child with new data."},
  {t:"React: Lifting State",d:1,q:"Data flow in React is?",o:["Two-way","One-way (top-down)","Bottom-up","Random"],a:1,e:"React enforces one-way (unidirectional) data flow: data goes DOWN from parent to child via props. Children can REQUEST changes via callback props, but they don't directly modify parent data."},

  // ─── useRef ───
  {t:"React: useRef",d:2,q:"What does useRef do?",o:["Creates state","Creates a mutable container that persists across renders without causing re-renders","Creates a new component","Fetches data"],a:1,e:"useRef gives you a {current: value} object that persists across renders but does NOT trigger re-renders when changed. Two uses: DOM access and storing mutable values."},
  {t:"React: useRef",d:2,q:"How do you access a DOM element directly in React?",o:["document.querySelector","Create a ref with useRef, attach via ref prop","Use getElementById","Access via props"],a:1,e:"const inputRef = useRef(null); then <input ref={inputRef} />. Now inputRef.current is the real DOM element. Use for focus, scroll, measurements — things you can't do declaratively."},
  {t:"React: useRef",d:2,q:"useState vs useRef — key difference?",o:["useState is faster","useState triggers re-renders, useRef doesn't","useRef is for numbers only","No difference"],a:1,e:"Both persist across renders. useState re-renders the component when updated. useRef does NOT re-render — it silently stores a value. Use useState for UI data, useRef for non-UI data (timers, DOM refs)."},

  // ─── Data Fetching ───
  {t:"React: Fetching",d:2,q:"What's the standard pattern for fetching data in React?",o:["Fetch in component body","useState + useEffect + fetch + conditional rendering","Only use Redux","Fetch in JSX"],a:1,e:"useState for data/loading/error + useEffect with [] to trigger fetch on mount + async function inside + conditional rendering for the 3 states (loading/error/success)."},
  {t:"React: Fetching",d:2,q:"Why fetch inside useEffect, not directly in the component body?",o:["It's faster","Component body runs every render — would fetch infinitely","It's a convention","Fetching in body works fine"],a:1,e:"The component function runs on EVERY render. Fetching in the body would fire a new request every re-render — infinite loop! useEffect with [] ensures it runs once after mount."},
  {t:"React: Fetching",d:1,q:"What are the 3 states you typically manage when fetching?",o:["start/middle/end","loading, error, data","get, post, delete","open, pending, closed"],a:1,e:"loading (boolean: show spinner), error (null or error message), data (null or fetched data). Render different UI for each state: spinner while loading, error message on failure, content on success."},
  {t:"React: Fetching",d:3,q:"Why can't you make useEffect's callback async directly?",o:["You can","useEffect expects a cleanup function or nothing, not a Promise","async is banned in React","It causes memory leaks"],a:1,e:"useEffect callback must return either nothing or a cleanup function. async functions return a Promise, which React can't use as cleanup. Fix: define an async function INSIDE the effect, then call it."},
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

// Section filter helpers
export const JS_TOPICS = TOPICS.filter(t => t.startsWith('JS:'));
export const REACT_TOPICS = TOPICS.filter(t => t.startsWith('React:'));
