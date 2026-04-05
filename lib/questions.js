// ═══════════════════════════════════════════════════════════════
// JS ARENA — COMPLETE QUESTION BANK v3.0
// 330+ Questions rooted in your Grimoire notes
// JS Part 1 + Part 2 + Deep Dive + React Complete + saarthack
// ═══════════════════════════════════════════════════════════════

export const QUESTIONS = [

  // ════════════════════════════════════════════════════════════
  // ⚡ JAVASCRIPT — PART 1 (Grimoire Chapters 1–8)
  // ════════════════════════════════════════════════════════════

  // ─── JS: Variables ───
  {t:"JS: Variables",d:1,q:"typeof null returns?",o:["'null'","'object'","'undefined'","'boolean'"],a:1,
   e:"A famous 27-year-old JS bug. null's internal type tag was 0 (same as objects). typeof null === 'object'. Use val === null to check for null."},
  {t:"JS: Variables",d:1,q:"Which keyword should you reach for by DEFAULT when declaring a variable?",o:["var","let","const","all are equal"],a:2,
   e:"Always start with const. It signals 'this won't be reassigned' and prevents accidental bugs. Only downgrade to let when you actually need to reassign."},
  {t:"JS: Variables",d:1,q:"const arr = [1,2,3]; arr.push(4); — does this throw an error?",o:["Yes — const is fully frozen","No — const only prevents reassignment","Only in strict mode","Depends on JS engine"],a:1,
   e:"const prevents REASSIGNING the variable (arr = something else throws). But the array itself can still be MUTATED. const locks the binding, not the value."},
  {t:"JS: Variables",d:2,q:"What is NaN === NaN?",o:["true","false","TypeError","undefined"],a:1,
   e:"NaN is the ONLY value in JS not equal to itself. Per the IEEE 754 spec. Use Number.isNaN(x) to check reliably."},
  {t:"JS: Variables",d:1,q:"Which of these is NOT falsy?",o:["0","''","'0'","null"],a:2,
   e:"'0' is a NON-EMPTY string — TRUTHY! The 6 falsy values: false, 0, '', null, undefined, NaN. Any non-empty string is always truthy."},
  {t:"JS: Variables",d:2,q:"typeof NaN returns?",o:["'NaN'","'number'","'undefined'","'object'"],a:1,
   e:"Ironically, NaN (Not a Number) has type 'number'. NaN is a special IEEE 754 floating-point value representing an invalid numeric result like 0/0."},
  {t:"JS: Variables",d:1,q:"Key difference between let and var?",o:["let is block-scoped, var is function-scoped","var is block-scoped, let is function-scoped","No difference in modern JS","let is hoisted, var is not"],a:0,
   e:"var scopes to its containing FUNCTION. let scopes to its containing BLOCK {}. var inside if/for leaks out; let stays contained."},
  {t:"JS: Variables",d:2,q:"What is the Temporal Dead Zone (TDZ)?",o:["A deleted variable","The time between a let/const entering scope and being initialized","A garbage-collected variable","An unused variable"],a:1,
   e:"let and const are hoisted but NOT initialized. Accessing them before their declaration line throws ReferenceError. That gap is the TDZ. var avoids this by initializing to undefined on hoist."},
  {t:"JS: Variables",d:2,q:"let x=5; { let x=10; console.log(x); } console.log(x); — outputs?",o:["10, 10","5, 5","10, 5","5, 10"],a:2,
   e:"let is block-scoped. The inner { let x=10 } creates a NEW x living only inside that block. The outer x=5 is untouched. Block scoping in action."},
  {t:"JS: Variables",d:1,q:"Which is NOT a primitive type in JavaScript?",o:["string","number","array","boolean"],a:2,
   e:"Arrays are OBJECTS (reference types). The 7 primitives: string, number, boolean, null, undefined, symbol, bigint. Primitives copy by value; objects copy by reference."},
  {t:"JS: Variables",d:2,q:"What does var hoisting actually look like?",o:["The whole var line moves to top","Only the DECLARATION hoists, initialized as undefined","The assignment hoists","var doesn't hoist"],a:1,
   e:"console.log(x); var x=5; prints 'undefined', not ReferenceError. The declaration (var x) hoists as undefined. The assignment (x=5) stays in place."},
  {t:"JS: Variables",d:3,q:"console.log(typeof undeclaredVariable) — what happens?",o:["ReferenceError","'null'","undefined","'undefined'"],a:3,
   e:"typeof is special — does NOT throw for undeclared variables. Returns the STRING 'undefined'. The ONLY safe operation on an undeclared variable."},
  {t:"JS: Variables",d:1,q:"Difference between undefined and null?",o:["Identical","undefined = no value assigned, null = intentional absence","null is a bug","null is only for objects"],a:1,
   e:"undefined: JS assigned this automatically (declared but no value). null: YOU set it intentionally to mean 'empty'. typeof undefined='undefined', typeof null='object' (the bug!)."},
  {t:"JS: Variables",d:2,q:"const obj={name:'Ali'}; obj.name='Sara'; — throws error?",o:["Yes — const objects are frozen","No — const only prevents reassigning obj itself","Only in strict mode","Yes — use let"],a:1,
   e:"const prevents obj=somethingElse. But obj.name='Sara' just mutates a property of the same object. To truly freeze: Object.freeze(obj)."},
  {t:"JS: Variables",d:3,q:"[] == ![] — what does this return?",o:["true","false","TypeError","undefined"],a:0,
   e:"![] = false (truthy array negated). Then []==false triggers coercion: []→''→0, false→0. 0==0 = true. This is why you always use ===."},

  // ─── JS: Operators ───
  {t:"JS: Operators",d:1,q:"'5' + 3 returns?",o:["8","'53'","NaN","TypeError"],a:1,
   e:"When + sees a STRING on either side, it does CONCATENATION. '5'+3='53'. This is why parseInt/Number() conversions matter."},
  {t:"JS: Operators",d:1,q:"'5' - 3 returns?",o:["2","'2'","NaN","'5-3'"],a:0,
   e:"- has NO string meaning. JS coerces both sides to numbers. '5' becomes 5. 5-3=2. Same for *, /. Only + is ambiguous."},
  {t:"JS: Operators",d:1,q:"Difference between == and ===?",o:["No difference","== converts types before comparing, === does not","=== is slower","== is for numbers only"],a:1,
   e:"== is LOOSE: converts types before comparing (1=='1' is true). === is STRICT: checks type AND value (1==='1' is false). Always prefer ===."},
  {t:"JS: Operators",d:2,q:"0 || 'hello' returns?",o:["0","'hello'","true","false"],a:1,
   e:"|| returns the first TRUTHY value. 0 is falsy, so moves to 'hello' which is truthy. Returns 'hello'."},
  {t:"JS: Operators",d:2,q:"0 ?? 'hello' returns?",o:["0","'hello'","true","null"],a:0,
   e:"?? (nullish coalescing) only triggers on null or undefined — NOT on 0, '', or false. 0 is a valid value, so ?? keeps it. KEY difference from ||."},
  {t:"JS: Operators",d:2,q:"user?.address?.city when user is undefined — returns?",o:["TypeError","null","undefined","''"],a:2,
   e:"Optional chaining (?.) short-circuits to undefined when left side is null/undefined. No crash! user?.address returns undefined, undefined?.city returns undefined."},
  {t:"JS: Operators",d:1,q:"What does !! do?",o:["Double negation = same value","Converts any value to its boolean equivalent","Syntax error","Runs a function twice"],a:1,
   e:"! converts to boolean then negates. !! negates twice = boolean equivalent. !!0=false, !!'hello'=true, !!null=false."},
  {t:"JS: Operators",d:2,q:"What does a ||= b do?",o:["Always assigns b to a","Assigns b to a only if a is falsy","Assigns b to a only if a is truthy","Logical NOT assign"],a:1,
   e:"||= is logical OR assignment. Shorthand for a = a || b. Only assigns if a is falsy. Useful for defaults: config.timeout ||= 3000."},
  {t:"JS: Operators",d:1,q:"10 % 3 returns?",o:["3","1","0.33","2"],a:1,
   e:"% is the MODULO (remainder) operator. 10/3 = 3 remainder 1. Use n%2===0 to check even numbers."},
  {t:"JS: Operators",d:2,q:"true + true returns?",o:["2","true","'truetrue'","NaN"],a:0,
   e:"+ converts booleans to numbers: true=1, false=0. true+true=1+1=2."},
  {t:"JS: Operators",d:3,q:"typeof function(){} returns?",o:["'object'","'function'","'callable'","'undefined'"],a:1,
   e:"Functions ARE objects in JS, but typeof makes an exception and returns 'function' for them. All other objects return 'object'."},
  {t:"JS: Operators",d:2,q:"What does the spread operator ... do to an array?",o:["Deletes array","Copies reference","Unpacks elements","Sorts elements"],a:2,
   e:"... spreads array into individual elements. [...arr]=shallow copy. Math.max(...[1,2,3]) passes 1,2,3 as separate args. [...a1,...a2]=merge arrays."},

  // ─── JS: Strings ───
  {t:"JS: Strings",d:1,q:"Are strings mutable in JavaScript?",o:["Yes, mutable","No, always immutable","Depends on const vs let","Only primitives are immutable"],a:1,
   e:"Strings are ALWAYS immutable. str[0]='X' silently fails. Every string method returns a NEW string. Original never changes."},
  {t:"JS: Strings",d:1,q:"'hello'.slice(1, 3) returns?",o:["'hel'","'el'","'ell'","'ello'"],a:1,
   e:"slice(start, end) extracts from index start UP TO BUT NOT INCLUDING end. Index 1='e', index 2='l'. Result: 'el'."},
  {t:"JS: Strings",d:2,q:"'hello world'.split(' ') returns?",o:["['hello world']","['hello','world']","every character","Error"],a:1,
   e:"split(separator) splits at each separator and returns an array. ' ' splits at spaces. ''.split('') splits at every character."},
  {t:"JS: Strings",d:1,q:"Which syntax creates a template literal?",o:["'text ${expr}'","\"text ${expr}\"","`text ${expr}`","(text ${expr})"],a:2,
   e:"Backticks (`) create template literals. ${} embeds any JS expression: variables, math, function calls, ternaries."},
  {t:"JS: Strings",d:2,q:"'  hello  '.trim() returns?",o:["'  hello  '","'hello'","'hello  '","'  hello'"],a:1,
   e:"trim() removes whitespace from BOTH ends. trimStart() = beginning only. trimEnd() = end only."},
  {t:"JS: Strings",d:1,q:"How do you get the number of characters in a string?",o:["str.size","str.length","str.count()","str.len()"],a:1,
   e:"str.length is a PROPERTY (no parentheses). Returns number of UTF-16 code units. ''.length=0, 'hi'.length=2."},
  {t:"JS: Strings",d:2,q:"'hello'.indexOf('l') returns?",o:["1","2","[2,3]","-1"],a:1,
   e:"indexOf returns index of the FIRST occurrence. In 'hello', first 'l' is at index 2. Returns -1 if not found."},
  {t:"JS: Strings",d:2,q:"'banana'.includes('nan') returns?",o:["false","true","0","NaN"],a:1,
   e:"includes() checks if substring exists anywhere. Returns boolean. Case-sensitive. Cleaner than indexOf()!==-1."},
  {t:"JS: Strings",d:2,q:"'5'.padStart(3, '0') returns?",o:["'500'","'005'","'050'","'5'"],a:1,
   e:"padStart(targetLength, padString) pads the BEGINNING until target length is reached. '5'.padStart(3,'0')='005'. Used for leading zeros."},
  {t:"JS: Strings",d:3,q:"'hello'.at(-1) returns?",o:["undefined","'h'","'o'","Error"],a:2,
   e:".at() accepts negative indices. -1 = last character. 'hello'.at(-1)='o'. Cleaner than str[str.length-1]. Works on arrays too."},
  {t:"JS: Strings",d:2,q:"'cat'.repeat(3) returns?",o:["'catcatcat'","'cat cat cat'","'cat3'","3"],a:0,
   e:"repeat(n) returns the string repeated n times. 'cat'.repeat(3)='catcatcat'. repeat(0)=''."},

  // ─── JS: Arrays ───
  {t:"JS: Arrays",d:1,q:"[1,2,3].map(n => n*2) returns?",o:["[2,4,6]","6","[1,2,3,1,2,3]","undefined"],a:0,
   e:"map() transforms every element and returns a NEW array of same length. Never modifies the original."},
  {t:"JS: Arrays",d:1,q:"[1,2,3,4,5].filter(n => n > 3) returns?",o:["[4,5]","[1,2,3]","2","[3,4,5]"],a:0,
   e:"filter() keeps only elements where callback returns true. n>3 is true for 4 and 5 only. Returns new array."},
  {t:"JS: Arrays",d:2,q:"[10, 9, 80].sort() — the gotcha result?",o:["[9, 10, 80]","[80, 10, 9]","[10, 80, 9]","[10, 9, 80]"],a:2,
   e:"GOTCHA: sort() converts to STRINGS by default! '10'<'80'<'9' lexicographically. Fix: .sort((a,b) => a-b) for numeric sort."},
  {t:"JS: Arrays",d:2,q:"[1,2,3].reduce((acc, n) => acc+n, 0) returns?",o:["6","[1,2,3]","'123'","0"],a:0,
   e:"reduce() accumulates to a single value. Start 0: 0+1=1, 1+2=3, 3+3=6. Second arg is the INITIAL value."},
  {t:"JS: Arrays",d:1,q:"find() vs filter() — key difference?",o:["find=first match, filter=all","Identical","find=index, filter=values","find mutates"],a:0,
   e:"find() returns the FIRST matching element (or undefined). filter() returns ALL matches in a new array."},
  {t:"JS: Arrays",d:1,q:"[1,2,3].push(4) returns?",o:["[1,2,3,4]","4","undefined","true"],a:1,
   e:"push() MUTATES the array and returns the NEW LENGTH, not the array! [1,2,3].push(4) = 4 (new length)."},
  {t:"JS: Arrays",d:2,q:"splice() vs slice() — which MUTATES the original?",o:["slice","splice","both","neither"],a:1,
   e:"splice() MUTATES (removes/inserts). slice() creates a NEW subarray. Remember: splic-e = chang-e."},
  {t:"JS: Arrays",d:2,q:"[1,2,3].some(n => n > 5) returns?",o:["false","true","[false,false,false]","undefined"],a:0,
   e:"some() returns true if AT LEAST ONE element passes. None of 1,2,3 are >5. every() requires ALL elements to pass."},
  {t:"JS: Arrays",d:1,q:"How do you reliably check if something is an array?",o:["typeof arr==='array'","arr instanceof Array","Array.isArray(arr)","arr.constructor===Array"],a:2,
   e:"Array.isArray() is most reliable. typeof [] returns 'object'. instanceof can fail across iframes. Array.isArray() always works."},
  {t:"JS: Arrays",d:3,q:"const a=[1,2]; const b=a; b.push(3); a.length is?",o:["2","3","undefined","Error"],a:1,
   e:"Arrays are REFERENCE types. a and b point to the SAME array. b.push(3) mutates the shared array. a.length=3. Fix: const b=[...a]."},
  {t:"JS: Arrays",d:3,q:"[1,2,3].map(parseInt) returns?",o:["[1,2,3]","[1,NaN,NaN]","[1,1,1]","Error"],a:1,
   e:"map passes (value, index) to callback. parseInt receives (value, radix). parseInt(2,1)=NaN (base 1 invalid), parseInt(3,2)=NaN (3 not in binary). Classic trap!"},
  {t:"JS: Arrays",d:2,q:"[1,[2,[3]]].flat() returns?",o:["[1,2,3]","[1,[2,[3]]]","[1,2,[3]]","Error"],a:2,
   e:"flat() flattens ONE level by default. Use flat(Infinity) to flatten ALL levels: [1,2,3]."},
  {t:"JS: Arrays",d:1,q:"pop() vs shift() — difference?",o:["pop=end, shift=beginning","shift=end, pop=beginning","Both from end","Both from beginning"],a:0,
   e:"pop() removes LAST element. shift() removes FIRST element. push() adds to end. unshift() adds to beginning."},
  {t:"JS: Arrays",d:2,q:"Array.from('hello') returns?",o:["['hello']","['h','e','l','l','o']","Error","'hello'"],a:1,
   e:"Array.from() converts any iterable to a real array. Strings iterate character by character."},
  {t:"JS: Arrays",d:2,q:"[3,1,2].sort((a,b) => a-b) returns?",o:["[3,2,1]","[1,2,3]","[3,1,2]","NaN"],a:1,
   e:"(a,b)=>a-b = ascending. (a,b)=>b-a = descending. Fixes the default string-conversion gotcha."},

  // ─── JS: Objects ───
  {t:"JS: Objects",d:1,q:"const a={x:1}; const b=a; b.x=99; What is a.x?",o:["1","99","undefined","Error"],a:1,
   e:"Objects are REFERENCE types. a and b point to the SAME object. Changing b.x changes the shared object. a.x=99. Fix: const b={...a}."},
  {t:"JS: Objects",d:1,q:"Object.keys({a:1, b:2, c:3}) returns?",o:["[1,2,3]","['a','b','c']","3","[['a',1],['b',2]]"],a:1,
   e:"Object.keys()=array of property NAMES. Object.values()=VALUES. Object.entries()=[key,value] pairs."},
  {t:"JS: Objects",d:2,q:"Which creates a TRUE deep copy?",o:["Object.assign({}, obj)","{ ...obj }","structuredClone(obj)","obj.clone()"],a:2,
   e:"structuredClone() creates a true deep copy. Spread and Object.assign are SHALLOW — nested objects still share references."},
  {t:"JS: Objects",d:1,q:"How do you check if a key exists in an object?",o:["obj.includes(key)","'key' in obj","obj.has('key')","obj[key]!==undefined"],a:1,
   e:"'key' in obj checks property AND prototype chain. For own properties: obj.hasOwnProperty('key'). Note: obj[key]!==undefined fails if value IS undefined."},
  {t:"JS: Objects",d:2,q:"Object.freeze(obj) — what does it do?",o:["Deletes object","Creates deep copy","Makes properties unaddable/unchangeable/undeletable","Makes async-safe"],a:2,
   e:"Object.freeze() prevents adding, changing, deleting properties. BUT it's SHALLOW — nested objects are NOT frozen."},
  {t:"JS: Objects",d:1,q:"What is shorthand property syntax?",o:["obj={key:key} when names match","obj={key} when variable name matches key","Both are the same","obj={key=>value}"],a:1,
   e:"const name='Ali'; const obj={name}; is shorthand for {name:name}. Very common in modern JS."},
  {t:"JS: Objects",d:2,q:"const {a, b} = {a:1, b:2, c:3} — values of a and b?",o:["undefined","1 and 2","[1,2]","Error"],a:1,
   e:"Object destructuring pulls properties by NAME. {a,b} extracts 'a' and 'b'. 'c' is ignored."},
  {t:"JS: Objects",d:2,q:"How do you merge two objects into a new one?",o:["obj1+obj2","Object.merge(obj1,obj2)","{ ...obj1, ...obj2 }","obj1.concat(obj2)"],a:2,
   e:"Spread both. If keys conflict, LAST wins: {...{x:1},...{x:2}}={x:2}. Also: Object.assign({},obj1,obj2)."},
  {t:"JS: Objects",d:2,q:"const {x: newName} = {x:42} — what is newName?",o:["undefined","42","{x:42}","Error"],a:1,
   e:"Renaming during destructuring: {originalKey: newVariable}. Creates variable newName=42. No variable called 'x' in scope."},
  {t:"JS: Objects",d:3,q:"const key='name'; const obj={[key]:'Ali'} — what is obj?",o:["{'key':'Ali'}","{'name':'Ali'}","{key:'Ali'}","Error"],a:1,
   e:"Computed property names: [expr] evaluates expression as key. [key] uses variable's value ('name'). Result: {name:'Ali'}."},

  // ─── JS: Conditionals ───
  {t:"JS: Conditionals",d:1,q:"The 6 falsy values in JavaScript?",o:["0, '', false only","0, '', null, undefined, NaN, false","0, null, false only","All empty values"],a:1,
   e:"The 6 falsy values: false, 0, '' (empty string), null, undefined, NaN. EVERYTHING else is truthy — including '0', [], {}, -1."},
  {t:"JS: Conditionals",d:1,q:"Ternary operator syntax?",o:["if(c) a else b","c ? a : b","c -> a : b","c then a else b"],a:1,
   e:"condition ? valueIfTrue : valueIfFalse. It's an EXPRESSION (returns a value), unlike if/else (a statement). Great for JSX."},
  {t:"JS: Conditionals",d:2,q:"switch — what happens without break in a case?",o:["Error","Falls through to the NEXT case","Stops executing","Runs default"],a:1,
   e:"Without break, execution FALLS THROUGH to the next case. Can be intentional or a nasty bug. Always add break."},
  {t:"JS: Conditionals",d:1,q:"Can you use if/else directly inside JSX {}?",o:["Yes freely","No — only expressions work in JSX {}","Yes with Babel","Only React 18+"],a:1,
   e:"if/else are STATEMENTS, not expressions. JSX {} only accepts expressions. Use ternary or logical && instead."},
  {t:"JS: Conditionals",d:3,q:"What does {count && <Badge />} render when count is 0?",o:["Nothing","<Badge />","0 (the number)","Error"],a:2,
   e:"GOTCHA: 0 && anything = 0 (not false). React renders 0 as TEXT on the page! Fix: {count>0 && <Badge />} — use explicit boolean."},
  {t:"JS: Conditionals",d:2,q:"null ?? 'default' returns?",o:["null","'default'","false","Error"],a:1,
   e:"?? returns right side when left is null or undefined. null is nullish, so 'default' returned. 0??'default'=0 (0 is NOT nullish)."},
  {t:"JS: Conditionals",d:2,q:"When should you prefer switch over if/else chains?",o:["Always","When checking ONE variable against many specific values","When using complex conditions","switch is deprecated"],a:1,
   e:"switch shines for ONE variable vs many fixed values. if/else is better for range checks (>, <) or complex boolean expressions."},

  // ─── JS: Loops ───
  {t:"JS: Loops",d:1,q:"for...of vs for...in — key difference?",o:["No difference","for...of iterates VALUES, for...in iterates KEYS","for...in=values, for...of=keys","for...in is for objects only"],a:1,
   e:"for...of: iterates VALUES of an iterable (arrays, strings, sets). for...in: iterates KEYS/indices. GOTCHA: for...in on arrays iterates prototype properties too — avoid it for arrays."},
  {t:"JS: Loops",d:2,q:"for(var i=0;i<3;i++){ setTimeout(()=>console.log(i),0) } — what prints?",o:["0, 1, 2","3, 3, 3","undefined x3","0, 0, 0"],a:1,
   e:"var is function-scoped — ONE shared i. By the time all 3 timeouts fire, loop is done, i=3. Fix: use let (block-scoped, each iteration gets its own i)."},
  {t:"JS: Loops",d:1,q:"What does break do in a loop?",o:["Skips current iteration","Exits the loop completely","Throws an error","Pauses the loop"],a:1,
   e:"break immediately EXITS the entire loop. continue SKIPS the current iteration and moves to next. return exits the whole function."},
  {t:"JS: Loops",d:2,q:"When should you prefer .forEach() over for loop?",o:["Always","When you don't need to break early and want cleaner syntax","forEach is faster","Only for arrays of numbers"],a:1,
   e:"forEach is clean for iterating without breaking. BUT: you can't break/return/await inside forEach. For those cases, use for...of."},
  {t:"JS: Loops",d:2,q:"while vs do...while — key difference?",o:["No difference","do...while always runs at least ONCE","while always runs at least once","do...while is faster"],a:1,
   e:"while: checks condition BEFORE running. do...while: runs body FIRST, then checks. do...while guaranteed to execute at least once."},
  {t:"JS: Loops",d:3,q:"Can you use await inside a forEach loop?",o:["Yes, works normally","No — await inside forEach doesn't work as expected","Yes, but only in async functions","Only with Promise.all"],a:1,
   e:"forEach doesn't await your async callbacks. The loop finishes before promises resolve. Use for...of with await, or map+Promise.all."},

  // ─── JS: Functions & Closures ───
  {t:"JS: Functions",d:1,q:"Function declaration vs expression — which is HOISTED?",o:["Both","Neither","Only declarations","Only expressions"],a:2,
   e:"Declarations (function foo(){}) are fully HOISTED — callable before they appear in code. Expressions (const foo = function(){}) are NOT hoisted."},
  {t:"JS: Functions",d:2,q:"What is a closure?",o:["A function with no parameters","A function that remembers variables from its creation scope","A sealed function","A recursive function"],a:1,
   e:"A closure CLOSES OVER variables from its outer scope, keeping them alive after the outer function returns. Enables private variables, factories, memoization."},
  {t:"JS: Functions",d:2,q:"What is a higher-order function (HOF)?",o:["A function that runs first","A function that takes or returns other functions","A recursive function","An async function"],a:1,
   e:"HOFs take functions as args OR return functions. map, filter, reduce all take callbacks. Functions returning functions are HOFs too: const mult = (x) => (n) => n*x."},
  {t:"JS: Functions",d:1,q:"What does arrow function change about 'this' vs regular functions?",o:["No difference","Arrow functions DON'T have their own 'this' — they inherit it","Arrow functions bind this to window","Arrow functions throw if this is used"],a:1,
   e:"Regular functions: 'this' depends on HOW they're called. Arrow functions: INHERIT 'this' from surrounding context. This is why arrow functions are used as class callbacks."},
  {t:"JS: Functions",d:1,q:"function add(a, b=10) { return a+b; } — add(5) returns?",o:["NaN","5","15","Error"],a:2,
   e:"Default parameters: if arg isn't provided (or is undefined), the default is used. add(5) means a=5, b defaults to 10. Result: 15."},
  {t:"JS: Functions",d:2,q:"What does the rest parameter (...args) collect?",o:["Only first argument","All remaining arguments into an array","Only named arguments","Previous function's args"],a:1,
   e:"Rest parameter collects ALL remaining arguments into a real array. function sum(...nums){ return nums.reduce((a,b)=>a+b,0) } — works with any number of args."},
  {t:"JS: Functions",d:3,q:"function counter(){let c=0; return ()=>++c;} const count=counter(); count(); count(); count() returns?",o:["1","3","undefined","Error"],a:1,
   e:"Closure-based counter. counter() creates c=0 and returns a function closing over it. Each count() increments the SAME c. After 3 calls, c=3."},
  {t:"JS: Functions",d:2,q:"What is a pure function?",o:["A function with no params","Returns same output for same input, no side effects","Only uses primitives","Can't call other functions"],a:1,
   e:"Pure functions: 1) Same input=same output. 2) No side effects (don't modify external state, no API calls, no DOM changes). map/filter callbacks should be pure."},
  {t:"JS: Functions",d:2,q:"What is a factory function?",o:["Creates DOM elements","A function that creates and returns objects","A class with constructor","Returns a class"],a:1,
   e:"Factory functions return objects without 'new'. const createUser=(name)=>({name, greet(){return 'Hi '+name;}}). Closures make the returned object's methods remember outer vars."},

  // ════════════════════════════════════════════════════════════
  // ⚡ JAVASCRIPT — PART 2 (Grimoire Chapters 9–15)
  // ════════════════════════════════════════════════════════════

  // ─── JS: DOM ───
  {t:"JS: DOM",d:1,q:"What does DOM stand for?",o:["Document Object Model","Dynamic Object Mapping","Data Object Method","Document Output Manager"],a:0,
   e:"DOM = Document Object Model. The browser's tree-like JS representation of your HTML. JavaScript can read and modify this tree to update what users see without reloading."},
  {t:"JS: DOM",d:1,q:"getElementById vs querySelector — difference?",o:["Identical","getElementById is faster/simpler, querySelector is more flexible with CSS selectors","querySelector is deprecated","getElementById is slower"],a:1,
   e:"getElementById: finds by ID only (fast). querySelector: accepts ANY CSS selector (#id, .class, tag, [attr]) — much more flexible. querySelectorAll returns ALL matches."},
  {t:"JS: DOM",d:2,q:"textContent vs innerHTML — key difference?",o:["No difference","textContent=plain text only, innerHTML parses HTML","innerHTML is safer","textContent renders HTML"],a:1,
   e:"textContent: sets/gets plain text — ignores HTML tags, safer. innerHTML: sets/gets HTML content. NEVER use innerHTML with user input (XSS attack risk!)."},
  {t:"JS: DOM",d:1,q:"How do you create a NEW element in the DOM?",o:["document.newElement('div')","document.createElement('div')","new Element('div')","DOM.create('div')"],a:1,
   e:"document.createElement('tagName') creates a new element in memory. Then append with parent.appendChild(newEl). Element isn't visible until appended to the DOM."},
  {t:"JS: DOM",d:2,q:"element.classList.add('active') vs element.className += ' active' — which is better?",o:["className is better","classList.add is better — doesn't wipe other classes","Identical","classList is deprecated"],a:1,
   e:"classList.add() safely adds a class. className+=' active' can introduce double-spaces. classList also has: remove(), toggle(), contains(), replace()."},
  {t:"JS: DOM",d:2,q:"What is event delegation?",o:["Passing events to parent window","Adding ONE listener on parent to handle events from many children","Delegating to server","Multiple listeners on one element"],a:1,
   e:"Instead of 100 listeners on list items, add ONE on the parent ul. Events bubble up. Check e.target to know which child was clicked. Works for dynamically added elements too."},
  {t:"JS: DOM",d:2,q:"document.querySelector returns how many elements?",o:["All matching","First matching element only","Last matching","An array"],a:1,
   e:"querySelector returns the FIRST matching element (or null). querySelectorAll returns a NodeList (array-like) of ALL matches."},
  {t:"JS: DOM",d:1,q:"What is the difference between document.querySelectorAll and document.getElementsByClassName?",o:["Identical","querySelectorAll returns static NodeList, getElementsByClassName returns live HTMLCollection","getElementsByClassName is faster","querySelectorAll is deprecated"],a:1,
   e:"querySelectorAll returns a STATIC NodeList (snapshot). getElementsByClassName returns a LIVE HTMLCollection (updates when DOM changes). Most developers use querySelectorAll for predictability."},

  // ─── JS: Events ───
  {t:"JS: Events",d:1,q:"What is event bubbling?",o:["An event that fires multiple times","Event propagates from target UP to ancestors","Event propagates DOWN from document","Events in async code"],a:1,
   e:"Bubbling: event fires on target, then bubbles UP to parent, grandparent, etc. Clicking a button also fires click on div, body, document. Use stopPropagation() to stop it."},
  {t:"JS: Events",d:1,q:"e.preventDefault() does what?",o:["Stops event bubbling","Stops the browser's DEFAULT behavior (form submit reload, link navigate)","Removes the event listener","Prevents event from firing twice"],a:1,
   e:"preventDefault() stops what browser normally does: form submit (page reload), link navigate, right-click menu. Does NOT stop bubbling — that's stopPropagation()."},
  {t:"JS: Events",d:2,q:"Why is addEventListener better than element.onclick = fn?",o:["It isn't — onclick is simpler","addEventListener allows multiple listeners and can be removed","addEventListener is faster","onclick is deprecated"],a:1,
   e:"element.onclick = fn overwrites any previous handler (only one at a time). addEventListener allows MULTIPLE handlers, can be removed with removeEventListener."},
  {t:"JS: Events",d:2,q:"e.target vs e.currentTarget — difference?",o:["Same thing","target=element that fired event, currentTarget=element with the listener","currentTarget fired it","target=keyboard, currentTarget=mouse"],a:1,
   e:"e.target: the ACTUAL element clicked (could be a child). e.currentTarget: the element where listener is attached. Important for event delegation."},
  {t:"JS: Events",d:1,q:"When does DOMContentLoaded fire?",o:["After all images/css load","After HTML is parsed and DOM is ready (before images)","When page closes","After all scripts run"],a:1,
   e:"DOMContentLoaded fires when HTML is fully parsed and DOM is ready — even if images/CSS haven't loaded yet. 'load' fires after EVERYTHING loads."},
  {t:"JS: Events",d:2,q:"How do you remove an event listener?",o:["element.removeEvent('click')","element.removeEventListener('click', handler)","element.onclick = null","element.detach('click', handler)"],a:1,
   e:"removeEventListener('event', handler). IMPORTANT: must pass the SAME function reference. Anonymous functions can't be removed! Always name your handler functions if you need to remove them."},

  // ─── JS: Async & Promises ───
  {t:"JS: Async",d:1,q:"What are the 3 states of a Promise?",o:["start/running/end","pending/fulfilled/rejected","open/waiting/done","async/sync/settled"],a:1,
   e:"Pending: in progress. Fulfilled: success (.then() fires). Rejected: failed (.catch() fires). Once settled, state can't change."},
  {t:"JS: Async",d:2,q:"fetch('/api') returns a 404. Does the Promise reject?",o:["Yes — any error status rejects","No — fetch only rejects on NETWORK failure","Yes — always for 4xx","Depends on server"],a:1,
   e:"THE GOTCHA: fetch only rejects on NETWORK failure. A 404, 500 still RESOLVES! Always check response.ok or response.status in your .then()."},
  {t:"JS: Async",d:1,q:"What does the async keyword do to a function?",o:["Makes it run in separate thread","Makes it always return a Promise","Makes it non-blocking","Makes it cancellable"],a:1,
   e:"async makes the function ALWAYS return a Promise. Even if you return a plain value, it's wrapped in Promise.resolve(value). Lets you use await inside."},
  {t:"JS: Async",d:1,q:"What does await do?",o:["Cancels the Promise","Pauses the async function until Promise settles","Creates a new Promise","Makes code synchronous"],a:1,
   e:"await PAUSES the async function until the Promise resolves, giving you the resolved value. While waiting, other JavaScript code continues. Only inside async functions."},
  {t:"JS: Async",d:2,q:"Sequential awaits vs Promise.all — which is faster for independent requests?",o:["Sequential — more reliable","Promise.all — runs them in parallel","Same speed","Depends on server"],a:1,
   e:"Sequential: req1 finishes THEN req2 starts = 2s+2s=4s. Promise.all: ALL requests start at once = max(2s,2s)=2s. Use Promise.all when requests don't depend on each other."},
  {t:"JS: Async",d:3,q:"setTimeout(()=>console.log('A'),0); console.log('B') — what prints first?",o:["A then B","B then A","Both at once","Depends on browser"],a:1,
   e:"Even 0ms setTimeout goes to the TASK QUEUE. Runs AFTER the call stack is empty. console.log('B') is synchronous and runs first. Event loop: call stack first, then task queue."},
  {t:"JS: Async",d:2,q:"What is the call stack?",o:["A list of errors","A pile of function calls JS is tracking — last in, first out","A queue of async tasks","The memory heap"],a:1,
   e:"The call stack tracks where JS is in your code. Function called = pushed. Function returns = popped. JS is single-threaded — one thing on the stack at a time."},
  {t:"JS: Async",d:2,q:"Promise.all vs Promise.allSettled — difference?",o:["Identical","Promise.all rejects if ANY fails; allSettled waits for ALL to settle","allSettled is faster","Promise.all waits for all"],a:1,
   e:"Promise.all: if ANY rejects, the whole thing rejects immediately. allSettled: waits for ALL (fulfilled OR rejected), gives results of each. Use allSettled when you need all results."},
  {t:"JS: Async",d:2,q:"Why can't useEffect's callback be directly async?",o:["You can — works fine","useEffect expects undefined or a cleanup function, not a Promise","async banned in React","Causes infinite loops"],a:1,
   e:"async functions return a Promise. useEffect expects NOTHING or a CLEANUP FUNCTION. Fix: define async function INSIDE the effect and call it immediately."},
  {t:"JS: Async",d:1,q:"How do you catch errors in async/await?",o:["if/else on the result","try...catch block",".then().catch()","async auto-catches"],a:1,
   e:"Wrap await in try/catch: try { const data = await fetch(url); } catch(err) { handleError(err); }. Without try/catch, rejected promises become unhandled rejections."},

  // ─── JS: ES6+ ───
  {t:"JS: ES6+",d:1,q:"What is destructuring?",o:["Deleting object properties","Extracting values from arrays/objects into variables","Copying an object","Converting to arrays"],a:1,
   e:"Extracts values into variables. Array: const [a,b]=[1,2]. Object: const {name,age}=person. Skip array elements: const [,second]=[1,2,3]."},
  {t:"JS: ES6+",d:2,q:"const [a,,b] = [1,2,3] — values of a and b?",o:["1 and 2","1 and 3","2 and 3","Error"],a:1,
   e:"Array destructuring with a gap. a=1 (index 0), skip index 1, b=3 (index 2). Extra commas skip positions."},
  {t:"JS: ES6+",d:1,q:"What does a Set guarantee?",o:["Sorted values","Unique values only","Frozen values","Object values only"],a:1,
   e:"Set stores only UNIQUE values — duplicates silently ignored. new Set([1,1,2,3,3])=Set{1,2,3}. Deduplicate array: [...new Set(arr)]."},
  {t:"JS: ES6+",d:2,q:"Map vs plain object {} — key advantage of Map?",o:["Identical","Map can use ANY type as key, preserves insertion order, has .size","Objects are faster","Map is for arrays"],a:1,
   e:"Map: any type as key (including objects!), guaranteed order, .size property, no prototype pollution. Use Map when keys aren't strings or order matters."},
  {t:"JS: ES6+",d:1,q:"const {name='Guest'} = {} — what is name?",o:["Error","undefined","'Guest'","null"],a:2,
   e:"Default values in destructuring! If property is missing or undefined, default is used. {name='Guest'} from {} → name='Guest'. Object had name:'Ali'? You'd get 'Ali'."},
  {t:"JS: ES6+",d:2,q:"[...new Set('hello')] returns?",o:["['hello']","['h','e','l','o']","['h','e','l','l','o']","Set"],a:1,
   e:"1) 'hello' spread → 'h','e','l','l','o'. 2) Set deduplicates → 'h','e','l','o'. 3) [...Set] back to array. Result: ['h','e','l','o']."},
  {t:"JS: ES6+",d:1,q:"JavaScript was created in how many days?",o:["1 day","10 days","30 days","1 year"],a:1,
   e:"Brendan Eich created JavaScript in just 10 DAYS in May 1995 at Netscape. Originally called Mocha, then LiveScript, then JavaScript."},
  {t:"JS: ES6+",d:2,q:"What is optional chaining (?.) and when introduced?",o:["Old ES5 feature","ES2020 — safely access nested properties without crashing on null/undefined","Babel-only","Same as && chaining"],a:1,
   e:"a?.b?.c: if a is null/undefined → returns undefined (no TypeError). ES2020 feature. Much cleaner than if(a && a.b && a.b.c)."},

  // ─── JS: Error Handling ───
  {t:"JS: Error Handling",d:1,q:"Purpose of try...catch?",o:["Runs code faster","Catch and handle runtime errors gracefully","Prevents all errors","Catch syntax errors"],a:1,
   e:"try { risky code } catch(err) { handle }. If ANY error thrown in try, execution jumps to catch. err has .message, .name, .stack. Prevents app from crashing."},
  {t:"JS: Error Handling",d:1,q:"When does the finally block run?",o:["Only if no error","Only if there's an error","ALWAYS — error or not","Only in async code"],a:2,
   e:"finally ALWAYS runs, no matter what. Even if you return inside try or catch. Perfect for cleanup: closing connections, hiding loaders."},
  {t:"JS: Error Handling",d:2,q:"How do you throw a custom error?",o:["error('message')","throw 'message'","throw new Error('message')","raise Error('message')"],a:2,
   e:"throw new Error('message') creates an Error with message, name, and stack trace. Catching: catch(err) { err.message }. You can also extend Error for custom types."},
  {t:"JS: Error Handling",d:2,q:"Does try...catch catch errors inside async callbacks like setTimeout?",o:["Yes, always","No — async errors need .catch() or try/await","Only with Promise","Only in React"],a:1,
   e:"try { setTimeout(() => { throw new Error(); }, 0); } catch(e) {} — the catch does NOT fire! setTimeout callback runs in a future task cycle, outside the try scope."},
  {t:"JS: Error Handling",d:1,q:"Difference between SyntaxError and TypeError?",o:["Same","SyntaxError=invalid code structure, TypeError=wrong type used","TypeError=network error","SyntaxError at runtime"],a:1,
   e:"SyntaxError: code can't be parsed (missing bracket) — caught before running. TypeError: wrong operation (null.name, calling non-function). ReferenceError: undeclared variable."},

  // ─── JS: Classes ───
  {t:"JS: Classes",d:1,q:"JavaScript classes are syntactic sugar over what?",o:["Nothing — classes are new","Prototype-based inheritance","Java-style classes","Factory functions"],a:1,
   e:"JS classes are SYNTACTIC SUGAR over the existing prototype system. class MyClass{} creates a constructor function under the hood. Same thing, nicer syntax."},
  {t:"JS: Classes",d:1,q:"What is the constructor method in a class?",o:["An optional extra method","Automatically called when you use 'new'","A static method","A private method"],a:1,
   e:"constructor() runs automatically when you create an instance with new. It's where you initialize instance properties. Default empty constructor used if not defined."},
  {t:"JS: Classes",d:2,q:"Methods defined inside a class — where do they live?",o:["Inside each instance (duplicated)","On the PROTOTYPE (shared by all instances)","In global scope","In a module"],a:1,
   e:"Class methods go on the PROTOTYPE. All instances SHARE the same method in memory — not duplicated. this inside refers to the calling instance."},
  {t:"JS: Classes",d:2,q:"What does extends do?",o:["Copies all methods from parent","Creates inheritance — child gets parent's methods","Merges two classes","Makes class final"],a:1,
   e:"class Dog extends Animal — Dog inherits all Animal methods. Dog can OVERRIDE or add new methods. Prototype chain is set up automatically."},
  {t:"JS: Classes",d:2,q:"What does super() do inside a child constructor?",o:["Calls a static method","Calls parent constructor — required before using 'this'","Copies parent","Skips to parent method"],a:1,
   e:"In child class constructor, you MUST call super() before using 'this'. super() calls parent's constructor, initializing parent properties. super.method() calls a parent method."},
  {t:"JS: Classes",d:2,q:"What is a static method?",o:["A method that never changes","A method called on the CLASS itself, not instances","A private method","Inherited by all classes"],a:1,
   e:"Static methods belong to the CLASS, not instances. MathUtils.add(2,3) — called on class, not new MathUtils().add(). Used for utility functions that don't need instance data."},

  // ─── JS: LocalStorage ───
  {t:"JS: LocalStorage",d:1,q:"localStorage stores data for how long?",o:["Session only — clears on tab close","Permanently until manually cleared","24 hours","Until browser closes"],a:1,
   e:"localStorage persists PERMANENTLY until explicitly cleared (clear() or removeItem()). Unlike sessionStorage which clears when tab closes. Limited to ~5MB, strings only."},
  {t:"JS: LocalStorage",d:1,q:"localStorage can only store what type?",o:["Any JS value","Strings only","Numbers and strings","Arrays and objects"],a:1,
   e:"localStorage only stores STRINGS. JSON.stringify() before saving, JSON.parse() after reading. localStorage.setItem('user', JSON.stringify({name:'Ali'}))."},
  {t:"JS: LocalStorage",d:1,q:"API to save, read, and delete in localStorage?",o:["save/get/delete","setItem/getItem/removeItem","write/read/erase","put/get/clear"],a:1,
   e:"setItem('key', value) to save. getItem('key') to read (null if not found). removeItem('key') to delete one. clear() to delete ALL."},
  {t:"JS: LocalStorage",d:2,q:"localStorage.getItem('count') returns what if key was never set?",o:["undefined","0","''","null"],a:3,
   e:"getItem returns null (not undefined) when key doesn't exist. Handle it: const count = JSON.parse(localStorage.getItem('count')) ?? 0."},
  {t:"JS: LocalStorage",d:2,q:"Difference between localStorage and sessionStorage?",o:["localStorage is faster","sessionStorage clears on tab close, localStorage is permanent","localStorage is larger","No difference"],a:1,
   e:"Same API. sessionStorage: tab-scoped, clears on close. localStorage: persists across tabs and restarts (same origin). Both ~5MB, string-only."},

  // ════════════════════════════════════════════════════════════
  // ⚡ JS DEEP DIVE — Arrow Functions, HOFs, Closures
  // ════════════════════════════════════════════════════════════

  // ─── JS: Arrow Functions ───
  {t:"JS: Arrow Functions",d:1,q:"Correct arrow function for: function double(n){ return n*2; }?",o:["double = n => n*2","function double => n*2","double(n) => n*2","n -> n*2"],a:0,
   e:"Remove 'function', add =>. Single param: no parens. Single expression: no braces, no return. const double = n => n*2."},
  {t:"JS: Arrow Functions",d:1,q:"Arrow function with NO parameters — syntax?",o:["=> x*2","n => x*2","() => x*2","void => x*2"],a:2,
   e:"No params = empty parens (). Examples: ()=>'hello', ()=>Math.random(), ()=>{ doSomething(); }."},
  {t:"JS: Arrow Functions",d:2,q:"Arrow function returning an OBJECT literal — correct syntax?",o:["() => {x:1}","() => ({x:1})","() => return {x:1}","() -> {x:1}"],a:1,
   e:"Wrap the object in parens! ()=>({x:1}). Without parens, JS thinks {} is the function body, not an object. Parens say: 'this is an expression'."},
  {t:"JS: Arrow Functions",d:2,q:"Why do arrow functions help in class methods and callbacks?",o:["They're faster","They inherit 'this' from surrounding scope, avoiding binding issues","They can't throw errors","They're shorter"],a:1,
   e:"Regular callbacks get their own 'this' (often wrong). Arrow functions capture 'this' from where they're DEFINED. Fixes common 'this is undefined' bugs in class method callbacks."},
  {t:"JS: Arrow Functions",d:2,q:"Can arrow functions be used as constructors with 'new'?",o:["Yes","No — they can't be used as constructors","Only in strict mode","Only with class syntax"],a:1,
   e:"Arrow functions CANNOT be used as constructors. new arrowFn() throws TypeError. They also don't have arguments object, prototype property, or their own 'this'."},

  // ─── JS: HOFs ───
  {t:"JS: HOFs",d:1,q:"What makes a function a Higher-Order Function (HOF)?",o:["Uses recursion","Takes functions as args OR returns a function","Runs at higher priority","Defined at top of file"],a:1,
   e:"HOF = takes function(s) as arg(s) OR returns a function. map, filter, reduce, setTimeout, addEventListener are HOFs. Enables callbacks and function composition."},
  {t:"JS: HOFs",d:1,q:"[1,2,3,4,5].filter(n => n%2===0) returns?",o:["[1,3,5]","[2,4]","[true,false,true,false,true]","2"],a:1,
   e:"filter() keeps elements where callback returns true. n%2===0 is true for even numbers. Only 2 and 4 satisfy this."},
  {t:"JS: HOFs",d:2,q:"['a','b','c'].map((char, i) => i+':'+char) returns?",o:["['a','b','c']","['0:a','1:b','2:c']","[0,1,2]","Error"],a:1,
   e:"map callback receives (value, index, array). Using both char and i. Result: ['0:a','1:b','2:c']."},
  {t:"JS: HOFs",d:1,q:"const double = n => n*2; [1,2,3].map(double) returns?",o:["Error","[2,4,6]","[1,2,3]","[double,double,double]"],a:1,
   e:"You can pass a named function to map instead of inline arrow. map(double) = map(n=>n*2). Passing function REFERENCES is a core HOF pattern."},
  {t:"JS: HOFs",d:2,q:"What is function composition?",o:["Nesting functions in HTML","Output of one function becomes input of another","Writing multiple functions","React pattern only"],a:1,
   e:"Composition: f(g(x)). Output of g becomes input of f. [1,2,3].filter(isEven).map(double) — each step transforms using previous result."},
  {t:"JS: HOFs",d:3,q:"const mult=(x)=>(n)=>n*x; const triple=mult(3); triple(5) returns?",o:["15","3","5","Error"],a:0,
   e:"Currying! mult(3) returns a NEW function (n)=>n*3, closing over x=3. triple=that function. triple(5)=5*3=15."},
  {t:"JS: HOFs",d:2,q:"[1,2,3,4].reduce((acc,n)=>{if(n%2===0)acc.push(n*2);return acc;},[]) returns?",o:["[2,4]","[4,8]","[1,4,3,8]","[]"],a:1,
   e:"reduce can build ANY data structure as accumulator. Starting with [], push n*2 only for evens. 2→push 4, 4→push 8. Result: [4,8]."},

  // ════════════════════════════════════════════════════════════
  // ⚛️ REACT — Complete Grimoire (14 Chapters)
  // ════════════════════════════════════════════════════════════

  // ─── React: Basics & JSX ───
  {t:"React: Basics",d:1,q:"React is a _____, not a full framework.",o:["language","library for building UIs","backend tool","CSS preprocessor"],a:1,
   e:"React is a JavaScript LIBRARY that handles only the VIEW layer. Doesn't include routing, state management, or HTTP — you add those with other tools."},
  {t:"React: Basics",d:1,q:"Who created React and when?",o:["Google, 2010","Facebook (Jordan Walke), 2013","Microsoft, 2015","Netflix, 2014"],a:1,
   e:"Jordan Walke at Facebook created React for the News Feed. Open-sourced at JSConf in May 2013. Solved Facebook's UI-out-of-sync-with-data problem."},
  {t:"React: Basics",d:2,q:"What does 'declarative' mean in React?",o:["You manually update DOM step by step","You describe WHAT UI should look like, React figures out HOW","You declare variables everywhere","You write HTML directly"],a:1,
   e:"Declarative: 'Show login button if not logged in.' React handles DOM changes. Imperative (vanilla JS): 'Find button, change text, show it...' — manual DOM manipulation."},
  {t:"React: Basics",d:2,q:"What is the Virtual DOM?",o:["A faster browser DOM","A JavaScript copy of the real DOM used for diffing","A database","An HTML template engine"],a:1,
   e:"React keeps a lightweight JS copy of the DOM. On state change, creates new Virtual DOM, diffs it vs old one (reconciliation), updates ONLY changed parts of real DOM."},
  {t:"React: Basics",d:2,q:"What is reconciliation?",o:["Connecting to server","Comparing old vs new Virtual DOM to find minimal DOM changes","Merging CSS files","Compiling JSX"],a:1,
   e:"Reconciliation is React's diffing algorithm. After state change, React creates new Virtual DOM, compares to old, finds MINIMUM changes, applies only those to real DOM."},
  {t:"React: Basics",d:2,q:"React updates are batched. What does this mean?",o:["Updates sent to server in batches","Multiple setState calls are combined into ONE re-render","Components render in batches of 10","CSS applied in batches"],a:1,
   e:"3 setState calls in one handler → React doesn't re-render 3 times. It batches them into ONE update for performance."},
  {t:"React: JSX",d:1,q:"What is JSX?",o:["A new language","HTML that runs in JavaScript","Syntactic sugar that compiles to React.createElement() calls","A template engine"],a:2,
   e:"JSX looks like HTML but is 100% JavaScript. Babel/Vite compiles <div className='box'> into React.createElement('div', {className:'box'})."},
  {t:"React: JSX",d:1,q:"Why is it className instead of class in JSX?",o:["React convention","'class' is a reserved JavaScript keyword (for ES6 classes)","className renders faster","It's shorter"],a:1,
   e:"JSX compiles to JavaScript. 'class' is reserved for ES6 classes. So React uses className. 'for' (HTML label) becomes 'htmlFor' in JSX for same reason."},
  {t:"React: JSX",d:1,q:"What do curly braces {} do inside JSX?",o:["Create a new scope","Embed any JavaScript expression","Define CSS styles","Create child components"],a:1,
   e:"{} is the 'escape hatch' from JSX to JavaScript. Any JS EXPRESSION works: {name}, {2+2}, {isLoggedIn ? 'Hi' : 'Login'}, {items.map(...)}. Statements don't work."},
  {t:"React: JSX",d:2,q:"Why can't you use if/else directly inside JSX {}?",o:["You can","if/else are STATEMENTS, not expressions — JSX needs expressions","Only in older React","Stylistic choice"],a:1,
   e:"JSX {} accepts EXPRESSIONS (things that evaluate to a value). if/else is a STATEMENT (doesn't return value). Use ternary (condition?A:B) or logical &&."},
  {t:"React: JSX",d:1,q:"How do you write a comment inside JSX?",o:["<!-- comment -->","// comment","{/* comment */}","/* comment */"],a:2,
   e:"Comments in JSX must use {/* comment */}. HTML-style <!-- --> is invalid in JSX."},
  {t:"React: JSX",d:2,q:"What is a React Fragment and why use it?",o:["A broken component","An invisible wrapper — avoids adding an extra div to DOM","A loading state","A memoized component"],a:1,
   e:"Components must return ONE root element. Fragment (<> </>) lets you group multiple elements WITHOUT adding an extra div. Keeps markup clean."},
  {t:"React: JSX",d:2,q:"JSX style prop syntax — which is correct?",o:["style='color: red'","style={{color:'red', fontSize:'16px'}}","style={color: red}","css={{color:'red'}}"],a:1,
   e:"Double curly: outer {} = JS expression, inner {} = the style object. Properties are camelCase: fontSize not font-size, backgroundColor not background-color."},
  {t:"React: JSX",d:1,q:"JSX must have ONE root element. How do you return two elements without an extra div?",o:["Not possible","Use a Fragment: <> </> or <React.Fragment>","Use adjacent JSX","Use a span"],a:1,
   e:"Fragment (<> </>) is an invisible wrapper. Returns multiple elements without adding any node to the real DOM. Perfect for table rows, list items, etc."},

  // ─── React: Components ───
  {t:"React: Components",d:1,q:"A React component is simply a _____ that returns JSX.",o:["class","function","object","module"],a:1,
   e:"A component is just a JS FUNCTION that returns JSX. function Button(){ return <button>Click</button>; }. React calls this function and renders what it returns."},
  {t:"React: Components",d:1,q:"Why must component names start with a capital letter?",o:["Just convention","React uses casing to tell HTML tags from components: <div> vs <Dashboard>","Enables TypeScript","Makes it faster"],a:1,
   e:"Lowercase = HTML tag. Uppercase = React component. <div> → createElement('div'). <Dashboard> → createElement(Dashboard) — passing the function itself."},
  {t:"React: Components",d:2,q:"What is component composition?",o:["Mixing CSS with JS","Using components inside other components like LEGO blocks","Server rendering","Compiling components"],a:1,
   e:"Composition = nesting components. <App> contains <Header>, <Main>, <Footer>. <Main> contains <PostList>. Build complex UIs from simple, reusable pieces."},
  {t:"React: Components",d:1,q:"Single responsibility principle for components?",o:["Components can do anything","Each component should do ONE thing well","Components can't have side effects","Each component needs a test"],a:1,
   e:"Each component = one job. Display a user card, handle a form, show a list. If it grows too large, split it. Small, focused components are easier to reuse and test."},
  {t:"React: Components",d:2,q:"Difference between a component and an instance?",o:["Same thing","Component=function (blueprint), instance=rendered output","Component=HTML, instance=JS","No difference"],a:1,
   e:"Component = the FUNCTION (recipe). Instance = what appears in your JSX — each <Button /> is a new instance with its own state and lifecycle."},

  // ─── React: Props ───
  {t:"React: Props",d:1,q:"What are props?",o:["CSS properties","Data passed FROM parent TO child","Internal state","Event handlers"],a:1,
   e:"Props (properties) are how parents talk to children. Like function arguments — because components ARE functions! <Button label='Click' /> passes label as a prop."},
  {t:"React: Props",d:1,q:"Are props mutable inside the receiving component?",o:["Yes — you can change them","No — props are READ-ONLY","Only primitives are immutable","Change with useState"],a:1,
   e:"Props are READ-ONLY. A component must NEVER modify its own props. Enforces one-way data flow. Want to change something? Lift to state in parent and pass handler down."},
  {t:"React: Props",d:2,q:"What is the children prop?",o:["Array of child components from server","Whatever JSX is placed between a component's opening and closing tags","A special state variable","The parent component reference"],a:1,
   e:"<Card><h1>Title</h1></Card> — inside Card, props.children = <h1>Title</h1>. Used for wrapper/layout components like Card, Modal, Layout."},
  {t:"React: Props",d:1,q:"How do you set a default value for a prop?",o:["PropTypes.default only","Default parameter in destructuring: function Btn({label='Click'})","You can't set defaults","Using defaultProps"],a:1,
   e:"function Button({label='Click me', color='blue'}) — if label isn't passed, defaults to 'Click me'. Just JavaScript default parameters in destructuring."},
  {t:"React: Props",d:2,q:"Can you pass a function as a prop?",o:["No — only data","Yes — functions are values in JavaScript","Only arrow functions","Only with useCallback"],a:1,
   e:"Functions are VALUES in JS. Passing a function as prop is THE pattern for child-to-parent communication. Parent passes onClick={handleClick}. Child calls props.onClick()."},
  {t:"React: Props",d:2,q:"Why is one-way data flow a feature, not limitation?",o:["It isn't a feature","Predictability: when wrong, trace UP the tree","Two-way flow is impossible","It's faster"],a:1,
   e:"With one-way flow, data comes from ONE direction. When something's wrong, trace UP. Two-way binding (old Angular) made debugging nightmarish — changes could come from ANYWHERE."},
  {t:"React: Props",d:2,q:"<User {...userData} /> — what does this do?",o:["Error","Passes all userData properties as individual props","Creates a copy of userData","TypeScript only"],a:1,
   e:"Prop spreading! userData={name:'Ali', age:20} → <User name='Ali' age={20} />. Useful but use with care — can pass unexpected props."},

  // ─── React: useState ───
  {t:"React: useState",d:1,q:"What is state in React?",o:["Global variables","Component's own data that triggers re-renders when changed","CSS state like :hover","Server data"],a:1,
   e:"State is data that BELONGS to a component and can change over time. When state changes, React re-renders the component. UI is always a reflection of current state."},
  {t:"React: useState",d:1,q:"useState returns what?",o:["Just the current value","An object with value and setter","[currentValue, setterFunction] array","A Promise"],a:2,
   e:"useState ALWAYS returns exactly [currentValue, setterFunction]. You destructure it: const [count, setCount] = useState(0)."},
  {t:"React: useState",d:1,q:"const [count, setCount] = useState(0); — initial state?",o:["undefined","null","0","[]"],a:2,
   e:"The argument to useState() is the INITIAL value. useState(0)→starts at 0. useState('')→empty string. useState([])→empty array."},
  {t:"React: useState",d:2,q:"Why can't you mutate state with arr.push() directly?",o:["Syntax error","React compares references — same reference = no change detected = no re-render","It's slower","React throws an error"],a:1,
   e:"React uses === to compare old vs new state. arr.push() mutates the SAME array — same reference. React sees no change, skips re-render. Create NEW: setState([...state, item])."},
  {t:"React: useState",d:2,q:"When to use setCount(prev => prev+1) vs setCount(count+1)?",o:["Always identical","Use updater when new state depends on previous — especially in batched updates","Updater is slower","setCount(count+1) is deprecated"],a:1,
   e:"React batches updates. Multiple setCount(count+1) use the SAME stale count. With updater: setCount(prev=>prev+1) each gets LATEST prev. Safe for counters and toggles."},
  {t:"React: useState",d:2,q:"How do you update ONE property of an object in state?",o:["state.name='new'","setUser({...user, name:'new'})","setUser.name('new')","setState.merge({name:'new'})"],a:1,
   e:"Spread existing state, then override: setUser({...user, name:'new'}). Creates NEW object (new reference) so React detects the change."},
  {t:"React: useState",d:3,q:"You call setCount(count+1) three times in one handler. count was 0. Result?",o:["3","1","0","2"],a:1,
   e:"All three use the SAME stale count (0). All are setCount(0+1)=1. Fix: setCount(prev=>prev+1) three times = each gets latest prev = 3."},
  {t:"React: useState",d:1,q:"What happens when you call setState?",o:["DOM updates immediately","React schedules a re-render with new state value","Nothing until manually triggered","Page reloads"],a:1,
   e:"setState SCHEDULES a re-render. React calls your component function again with the new state value. New JSX reflects the update. React patches DOM efficiently."},
  {t:"React: useState",d:2,q:"const [isOpen, setIsOpen] = useState(false); — how to toggle safely?",o:["setIsOpen(!isOpen)","setIsOpen(prev => !prev)","isOpen=!isOpen","toggle(isOpen)"],a:1,
   e:"setIsOpen(prev=>!prev) is SAFER. The updater function gets the latest state, preventing stale closure issues in async handlers."},
  {t:"React: useState",d:2,q:"Why should state be as minimal as possible?",o:["Performance only","Derived values shouldn't be state — compute from existing state/props","More state=more bugs","React has a state limit"],a:1,
   e:"If you can CALCULATE it from existing state/props, don't store it as state. const fullName = firstName+' '+lastName — no separate fullName state needed."},

  // ─── React: Events ───
  {t:"React: Events",d:1,q:"React event names are in what case?",o:["lowercase: onclick","camelCase: onClick","UPPERCASE: ONCLICK","kebab-case: on-click"],a:1,
   e:"React uses camelCase: onClick, onChange, onSubmit, onKeyDown, onMouseEnter. HTML uses lowercase (onclick), JSX uses camelCase."},
  {t:"React: Events",d:2,q:"onClick={handleClick} vs onClick={handleClick()} — difference?",o:["No difference","First passes function REFERENCE, second CALLS it immediately on render","Second is async","First is deprecated"],a:1,
   e:"handleClick = reference, called ON click. handleClick() CALLS it immediately during RENDER — very common bug! Wrap in arrow if you need args: onClick={()=>handleClick(id)}."},
  {t:"React: Events",d:1,q:"How do you prevent a form from reloading on submit?",o:["return false","e.preventDefault()","e.stopPropagation()","onSubmit={false}"],a:1,
   e:"e.preventDefault() prevents browser's default behavior. Call it FIRST. e.stopPropagation() is different — stops event bubbling."},
  {t:"React: Events",d:2,q:"How do you pass an argument to an event handler?",o:["onClick={handleClick(id)}","onClick={()=>handleClick(id)}","onClick={handleClick, id}","onClick=handleClick.bind(id)"],a:1,
   e:"Wrap in arrow: onClick={()=>handleClick(id)}. Creates a function that WHEN called (on click), runs handleClick(id). Direct handleClick(id) executes during render."},
  {t:"React: Events",d:1,q:"How do you get the typed value from an input's onChange?",o:["e.value","e.input.value","e.target.value","e.data"],a:2,
   e:"e.target = DOM element that fired event. e.target.value = current value. onChange={(e)=>setValue(e.target.value)} — the controlled input pattern."},

  // ─── React: Conditional Rendering ───
  {t:"React: Conditional",d:1,q:"How do you render A or B based on a condition?",o:["if/else inside JSX","Ternary: {condition ? <A /> : <B />}","switch inside JSX","for loop"],a:1,
   e:"Ternary: {isLoggedIn ? <Dashboard /> : <Login />}. For 'show or nothing': {isLoading && <Spinner />}. For complex conditions, early return."},
  {t:"React: Conditional",d:2,q:"{isLoading && <Spinner />} — what renders when isLoading is false?",o:["<Spinner />","Nothing (null)","false text","undefined"],a:1,
   e:"false && anything = false. React does NOT render false, null, undefined. So {false && <Spinner />} renders nothing."},
  {t:"React: Conditional",d:2,q:"What is the 'early return' pattern?",o:["Using return inside useEffect","Returning early JSX based on conditions before main return","Always returning null","Using return with async"],a:1,
   e:"if(!user) return <LoginPage />; Put BEFORE main render. Rest of component only runs for valid states. Avoids deeply nested ternaries."},
  {t:"React: Conditional",d:1,q:"How do you render NOTHING from a component?",o:["return undefined","return false","return null","return []"],a:2,
   e:"return null is the standard way to render nothing. React doesn't render null, undefined, false, or empty strings."},

  // ─── React: Lists & Keys ───
  {t:"React: Lists",d:1,q:"How do you render a list of items?",o:["for loop in JSX","array.map(item => <Component key={item.id} />)","createElement in useEffect","innerHTML"],a:1,
   e:"Use .map() to transform data arrays into JSX. Each item MUST have a unique key prop: {items.map(item => <li key={item.id}>{item.name}</li>)}."},
  {t:"React: Lists",d:1,q:"Why does each list item need a 'key' prop?",o:["CSS styling","React uses keys to track which items changed/moved/removed between renders","Performance only","Optional in React 18"],a:1,
   e:"Keys are React's way of identifying items across re-renders. Without stable keys, React can't efficiently tell which item was added/removed/reordered."},
  {t:"React: Lists",d:2,q:"Why is array index a BAD key for dynamic lists?",o:["It's fine","When items added/removed, indices SHIFT — confusing React","It's slower","Index isn't valid"],a:1,
   e:"Delete item at index 2 → item at index 3 becomes index 2. React thinks index-2 item CHANGED. Causes wrong data, lost input state, broken animations. Use stable unique IDs."},
  {t:"React: Lists",d:1,q:"What makes a GOOD key?",o:["Array index","Math.random()","Stable unique ID from your data (database ID, UUID)","The item's display name"],a:2,
   e:"Good keys: stable, unique among siblings, from your data. Database IDs are perfect. Random values create NEW keys every render — defeats the purpose."},
  {t:"React: Lists",d:2,q:"key={item.name} when names might not be unique — is this safe?",o:["Yes — names are usually unique","No — duplicate keys cause incorrect behavior","React deduplicates them","Works but warns"],a:1,
   e:"Keys must be UNIQUE among siblings. Duplicate keys cause React to skip rendering one and can cause subtle state bugs. Always use a unique identifier."},

  // ─── React: useEffect ───
  {t:"React: useEffect",d:1,q:"What is useEffect for?",o:["Styling components","Running side effects: fetch, timers, event listeners, document title","Creating state","Memoizing values"],a:1,
   e:"useEffect handles anything that 'reaches outside' the component: API calls, DOM manipulation, timers, subscriptions, localStorage."},
  {t:"React: useEffect",d:2,q:"useEffect(() => {}, []) — when does it run?",o:["Every render","Once after FIRST render only","Never","Before first render"],a:1,
   e:"Empty [] = 'I have no dependencies, run once after mount.' Equivalent to componentDidMount. Perfect for initial data fetching."},
  {t:"React: useEffect",d:2,q:"useEffect(() => {}, [userId]) — when does it re-run?",o:["Every render","Only when userId changes","Never after first run","Every 5 seconds"],a:1,
   e:"[userId] is the 'watch list.' React re-runs when userId from last render !== userId from this render. Perfect for fetching user-specific data."},
  {t:"React: useEffect",d:3,q:"What causes an infinite loop in useEffect?",o:["Using async/await","Updating state that's in the dependency array of the same effect","Fetching data","Using multiple effects"],a:1,
   e:"Effect runs → sets state X → X in deps → re-render → effect runs → sets X → re-render → forever. Remove X from deps or restructure."},
  {t:"React: useEffect",d:2,q:"What is a cleanup function in useEffect?",o:["Deletes the component","A function RETURNED from useEffect — runs on unmount or before re-running","Clears localStorage","An error handler"],a:1,
   e:"Return a function: return ()=>{ clearInterval(timer); }. Runs when: 1) Component UNMOUNTS. 2) Before effect re-runs. Prevents memory leaks from timers/listeners."},
  {t:"React: useEffect",d:1,q:"What is a side effect in React?",o:["A bug","Any operation outside the render cycle: fetch, DOM, timers, subscriptions","A CSS animation","A prop change"],a:1,
   e:"Side effects 'reach outside' the component's pure render cycle. Rendering is pure; side effects interact with the outside world."},
  {t:"React: useEffect",d:2,q:"Why fetch inside useEffect, not component body?",o:["It's faster","Component body runs on EVERY render — fetching there causes infinite requests","Style preference","Fetch doesn't work outside useEffect"],a:1,
   e:"Component function runs on EVERY re-render. Fetch in body = new request on every state change = infinite loop! useEffect with [] ensures it runs ONCE."},
  {t:"React: useEffect",d:2,q:"useEffect without dependency array — when does it run?",o:["Never","Once on mount","After EVERY render","Only on unmount"],a:2,
   e:"No dependency array = runs after EVERY render. Rarely what you want! Usually [] (once) or [dep] (when dep changes)."},

  // ─── React: Forms ───
  {t:"React: Forms",d:1,q:"What is a controlled component?",o:["Controlled by parent","Input whose value is controlled by React state","No props","Server-rendered"],a:1,
   e:"Controlled: value={state} + onChange updates state. React state is the SINGLE SOURCE OF TRUTH. Every keystroke: onChange → setState → re-render → input shows new state."},
  {t:"React: Forms",d:2,q:"Why does controlled input need BOTH value AND onChange?",o:["value alone is enough","value locks display, onChange allows updates — both required","onChange alone is enough","Neither required"],a:1,
   e:"value={state} locks input to state. Without onChange, user types but state doesn't update — input appears FROZEN. onChange:(e)=>setState(e.target.value) keeps in sync."},
  {t:"React: Forms",d:1,q:"What does e.target.value contain in an input onChange?",o:["The input DOM element","The current text the user typed","The previous value","The event type string"],a:1,
   e:"e.target = DOM element that fired the event (the input). e.target.value = its current value (what user has typed so far)."},
  {t:"React: Forms",d:2,q:"How to handle multiple inputs with ONE state object?",o:["Separate useState for each","setForm(prev=>({...prev, [e.target.name]: e.target.value}))","Not possible","Only with useReducer"],a:1,
   e:"Give each input a name attribute. [e.target.name] as computed key updates only that field. DRY pattern for forms with many inputs."},

  // ─── React: Lifting State ───
  {t:"React: Lifting State",d:1,q:"What is 'lifting state up'?",o:["Moving to global store","Moving shared state to nearest common parent component","Making state faster","Converting local state to props"],a:1,
   e:"When siblings need the same data, LIFT state to their common parent. Parent holds state, passes down as props to both. Parent becomes single source of truth."},
  {t:"React: Lifting State",d:2,q:"How does a child tell the parent to update state?",o:["Children modify parent state directly","Parent passes a setState function as a prop; child calls it","Window events","A database"],a:1,
   e:"Parent passes: <Child onUpdate={setData} />. Child calls: props.onUpdate(newValue). Triggers parent's setState → parent re-renders → new data flows back down."},
  {t:"React: Lifting State",d:1,q:"React's data flow is?",o:["Two-way","One-way/unidirectional (parent→child via props)","Bottom-up","Bidirectional in hooks"],a:1,
   e:"React enforces ONE-WAY data flow: parent → child via props. Children request changes via callback props. Predictable and traceable."},
  {t:"React: Lifting State",d:2,q:"Two siblings need shared state. You should?",o:["Store in both siblings' state","Lift to closest common parent","Use localStorage","Duplicate state"],a:1,
   e:"Put state in the NEAREST COMMON PARENT. Pass value down as prop to both. Pass setter to sibling that needs to change it."},

  // ─── React: useRef ───
  {t:"React: useRef",d:2,q:"What does useRef return?",o:["A state variable","A {current: value} object that persists without causing re-renders","A DOM element directly","A Promise"],a:1,
   e:"useRef returns {current: initialValue}. Changing ref.current does NOT trigger re-renders. Persists across all renders. Two uses: DOM access and mutable values."},
  {t:"React: useRef",d:2,q:"How do you access a DOM element directly in React?",o:["document.getElementById","const ref=useRef(null), then <input ref={ref} />, then ref.current","props.domElement","querySelector in useEffect"],a:1,
   e:"const inputRef=useRef(null); → attach ref={inputRef} → after render, inputRef.current is the real DOM element. Use for: focus(), scrollIntoView(), measuring size."},
  {t:"React: useRef",d:2,q:"useState vs useRef — key difference?",o:["useState for strings, useRef for objects","useState triggers re-renders on change, useRef does NOT","useRef is deprecated","No difference"],a:1,
   e:"Both persist across renders. useState: change → component re-renders. useRef: change .current → NO re-render. Use ref for timers, DOM, non-UI data."},
  {t:"React: useRef",d:2,q:"Why store a timer ID in useRef instead of useState?",o:["Timers must use refs","setInterval returns a number that we need to persist without causing unnecessary re-renders","It's faster","Timer IDs are objects"],a:1,
   e:"Storing in state triggers a re-render (wasteful). In ref: timerRef.current=setInterval(fn,1000). Later: clearInterval(timerRef.current). No re-renders needed."},

  // ─── React: Fetching Data ───
  {t:"React: Fetching",d:1,q:"The 3 states to manage when fetching data?",o:["start/middle/end","loading / error / data","get/post/delete","pending/complete/error"],a:1,
   e:"loading (show spinner), error (show error UI), data (show content). Render different JSX for each state."},
  {t:"React: Fetching",d:2,q:"Standard React data fetching pattern?",o:["Fetch in component body","useState + useEffect + fetch + conditional rendering for 3 states","Only use axios","Fetch in event handlers"],a:1,
   e:"useState for data/loading/error → useEffect with [] to fetch on mount → async function inside → set states → JSX renders loading/error/data conditionally."},
  {t:"React: Fetching",d:3,q:"Why can't useEffect's callback be directly async?",o:["You can — works","useEffect expects nothing or a cleanup function, not a Promise","async banned in React","Always memory leaks"],a:1,
   e:"async returns a Promise. useEffect's return must be CLEANUP or nothing. Fix: declare async function INSIDE and call it immediately."},
  {t:"React: Fetching",d:2,q:"Why set loading=true before and loading=false after fetching?",o:["It's optional","Shows spinner during wait, preventing blank/broken UI","Speeds up fetch","Required for async"],a:1,
   e:"Requests take 0.1s to 10s+. Without loading state, users see blank/broken UI. Show spinner → fetch → show content."},

  // ════════════════════════════════════════════════════════════
  // ⚛️ REACT — saarthack Curriculum (Advanced Topics)
  // ════════════════════════════════════════════════════════════

  // ─── React: Context API ───
  {t:"React: Context API",d:2,q:"What problem does Context solve?",o:["Slow renders","Prop drilling — passing data through many component layers","No state management","Large bundle size"],a:1,
   e:"Prop drilling: App→Page→Section→Widget→Button, passing same prop 4 levels deep. Context lets you 'teleport' data directly to any component that needs it."},
  {t:"React: Context API",d:2,q:"The 3 steps to use Context?",o:["import, use, export","createContext → Provider wraps the tree → useContext in consumer","useState→Context→Provider","createStore→dispatch→connect"],a:1,
   e:"1) const MyCtx=createContext(default). 2) Wrap in <MyCtx.Provider value={data}>. 3) In any child: const data=useContext(MyCtx). No prop threading!"},
  {t:"React: Context API",d:2,q:"When does a component re-render due to context?",o:["Every render","When the context VALUE changes","When Provider re-renders","When any state in tree changes"],a:1,
   e:"Any component using useContext(MyCtx) re-renders when MyCtx's VALUE changes. If you pass an object as value, new reference every render → every consumer re-renders."},
  {t:"React: Context API",d:1,q:"Context is best suited for?",o:["Component-level state","Global/shared data: theme, language, current user, auth status","Replacing all useState","Fetching data"],a:1,
   e:"Context is ideal for 'global' data shared by many components: current user, auth state, theme (dark/light), locale. NOT for high-frequency updates."},
  {t:"React: Context API",d:2,q:"Can you have multiple Context providers?",o:["No — only one","Yes — nest multiple providers for different concerns","Yes — same level only","Only with Redux"],a:1,
   e:"Multiple providers are normal: <ThemeProvider><AuthProvider><App /></AuthProvider></ThemeProvider>. Separate contexts by concern."},
  {t:"React: Context API",d:2,q:"Common pattern for context with setter?",o:["Pass only value","Create context with {value, setValue} — expose both through Provider","Use ref instead","Context is read-only"],a:1,
   e:"const [theme, setTheme]=useState('dark'); <ThemeCtx.Provider value={{theme,setTheme}}>. Consumers get both: const {theme,setTheme}=useContext(ThemeCtx)."},

  // ─── React: Router ───
  {t:"React: Router",d:1,q:"What does React Router enable?",o:["Faster rendering","Client-side routing — navigating between views without page reloads","Server-side rendering","State management"],a:1,
   e:"React Router allows navigation between components without reloading. URL changes, but only relevant parts of UI update. SPA navigation."},
  {t:"React: Router",d:1,q:"3 core React Router components?",o:["Route, Link, Navigate","BrowserRouter, Routes, Route","Router, Path, Link","Switch, Route, Link"],a:1,
   e:"BrowserRouter: wraps app, provides routing context. Routes: container for all Route definitions. Route: maps a path to a component."},
  {t:"React: Router",d:1,q:"Why <Link to='/about'> instead of <a href='/about'>?",o:["No difference","Link prevents full page reload (SPA navigation), <a> causes full reload","Link is faster","<a> deprecated in React"],a:1,
   e:"<a href=''> = FULL page reload, loses all state. <Link to=''> = client-side navigation, updates URL and renders new component WITHOUT reloading."},
  {t:"React: Router",d:2,q:"How do you get URL parameters in React Router?",o:["props.params","window.location.params","useParams() hook","Route.params"],a:2,
   e:"Define route: <Route path='/user/:id' />. In User component: const {id}=useParams(). /user/42 → id='42'."},
  {t:"React: Router",d:2,q:"What is useNavigate() for?",o:["Reading current URL","Programmatically navigating to a different route","Getting URL parameters","Setting page title"],a:1,
   e:"const navigate=useNavigate(). After form submit or login: navigate('/dashboard'). navigate(-1) goes back. Code-triggered navigation."},
  {t:"React: Router",d:2,q:"How to handle 404 routes?",o:["It's automatic","<Route path='*' element={<NotFound />} /> catches all unmatched routes","Using try/catch","Server concern only"],a:1,
   e:"path='*' is a wildcard matching ANYTHING not matched earlier. Put it LAST in Routes. Client-side 404 handling."},
  {t:"React: Router",d:2,q:"What is Outlet in nested routing?",o:["A portal component","A placeholder that renders nested child routes inside a parent layout","A context provider","A redirect"],a:1,
   e:"<Outlet /> renders whatever child route matches. Layout: <NavBar /><Outlet /><Footer />. Outlet replaced by matching child's component. Parent layout persists."},

  // ─── React: localStorage in React ───
  {t:"React: LocalStorage",d:1,q:"When is the right time to read from localStorage in React?",o:["Inside JSX","Inside event handlers only","As useState initial value or inside useEffect on mount","Only in useRef"],a:2,
   e:"useState(()=>JSON.parse(localStorage.getItem('key'))??default) — lazy initial state. Or read in useEffect on mount. Avoid in component body (runs every render)."},
  {t:"React: LocalStorage",d:2,q:"How to sync state with localStorage when state changes?",o:["Manually on every click","useEffect(()=>{localStorage.setItem('key',JSON.stringify(state))},[state])","It syncs automatically","Using storage event"],a:1,
   e:"useEffect with [state] runs whenever state changes. Inside: save to localStorage. Keeps localStorage in sync automatically."},
  {t:"React: LocalStorage",d:2,q:"useState(()=>JSON.parse(...)) — why the arrow function?",o:["Required syntax","Lazy initialization — function runs ONLY ONCE on mount, not every render","Arrow functions are faster","Required for JSON.parse"],a:1,
   e:"useState(JSON.parse(...)) runs JSON.parse on EVERY render. useState(()=>JSON.parse(...)) = LAZY initialization — runs ONLY ONCE for initial value."},

  // ─── React: Two-Way Binding ───
  {t:"React: Two-Way Binding",d:2,q:"What is two-way binding in React?",o:["React automatically syncs all state","Input value tied to state: state→input (value) AND input→state (onChange)","Props flow both ways","State shared between two components"],a:1,
   e:"state controls input display (one-way DOWN), onChange updates state when user types (back UP). value={state}+onChange={(e)=>setState(e.target.value)} = two-way."},
  {t:"React: Two-Way Binding",d:1,q:"Input with value={name} but no onChange — what happens?",o:["Works fine","Input appears FROZEN — user can't type","Shows an error","Clears on focus"],a:1,
   e:"With value={name} but no onChange, React resets input to state value on every render. User types → React immediately resets. Input appears frozen/read-only."},
  {t:"React: Two-Way Binding",d:2,q:"Controlled vs Uncontrolled inputs — uncontrolled is?",o:["Input with no value prop — manages its own state via DOM","Input with no onChange","Input outside a form","A textarea"],a:0,
   e:"Uncontrolled: DOM manages the value (no value prop). Read with ref: inputRef.current.value. Controlled: React state manages. React recommends controlled."},

  // ─── React: Project Setup (Vite) ───
  {t:"React: Project Setup",d:1,q:"What is Vite and why use it for React?",o:["A React framework","An extremely fast build tool and dev server","A CSS preprocessor","A testing library"],a:1,
   e:"Vite uses native ES modules in dev for near-instant hot reloads. Much faster than Create React App (which is mostly deprecated). The modern standard for React projects."},
  {t:"React: Project Setup",d:1,q:"In a Vite React project, where does the app start rendering?",o:["index.html directly","main.jsx → ReactDOM.createRoot → mounts App into #root","App.jsx auto-detected","public/index.js"],a:1,
   e:"main.jsx: ReactDOM.createRoot(document.getElementById('root')).render(<App />). Attaches React app to #root div in index.html."},
  {t:"React: Project Setup",d:2,q:"Purpose of the public/ folder?",o:["Where components go","Static assets served as-is without Vite processing","Where CSS goes","Config files"],a:1,
   e:"public/ = static files served directly (favicon, images, robots.txt), no processing. src/ = your app code processed by Vite (components, CSS modules, imports)."},

  // ─── React: API & Axios ───
  {t:"React: API & Axios",d:1,q:"Key advantage of Axios over fetch?",o:["Axios is built-in","Axios auto-parses JSON, throws for 4xx/5xx, better defaults","fetch is deprecated","Axios is faster"],a:1,
   e:"Axios: auto-parses JSON (no .json() needed), THROWS for 4xx/5xx (unlike fetch!), request/response interceptors. Both are good choices."},
  {t:"React: API & Axios",d:2,q:"axios.get('/api/users') — where is the actual data?",o:["Returned directly","In response.data","In response.json()","In response.body"],a:1,
   e:"Axios wraps response in an object. Actual data is in response.data. const {data}=await axios.get('/api/users') — destructure to get data directly."},
  {t:"React: API & Axios",d:2,q:"How to send a POST with data in Axios?",o:["axios.post('/url').data={}","axios.post('/url', {name:'Ali', age:20})","axios.post('/url').send({})","axios.request('POST','/url',{})"],a:1,
   e:"axios.post(url, data, config). Data is auto-serialized to JSON. Axios sets Content-Type:application/json automatically."},

  // ─── React: Performance (useMemo, useCallback) ───
  {t:"React: Performance",d:3,q:"What does useMemo do?",o:["Memoizes a function","Caches the RESULT of a calculation — only recomputes when deps change","Makes state updates faster","Prevents all re-renders"],a:1,
   e:"const result=useMemo(()=>expensiveCalc(a,b),[a,b]). Caches the RETURN VALUE. Recalculates only when a or b changes. Don't over-use — memoization has its own cost."},
  {t:"React: Performance",d:3,q:"What does useCallback do?",o:["Caches calculation result","Memoizes a FUNCTION REFERENCE — returns same function between renders","Makes async faster","Replaces useEffect"],a:1,
   e:"const fn=useCallback(()=>doSomething(id),[id]). Returns SAME function reference between renders (unless id changes). Important for memo'd children receiving callbacks."},
  {t:"React: Performance",d:3,q:"When should you use useMemo and useCallback?",o:["Always, for best performance","Only when you have a proven performance problem","For every function in a component","TypeScript only"],a:1,
   e:"Don't memoize everything! Memoization has cost (memory + comparison). Profile first. Good candidates: expensive pure calculations, callbacks to memo'd children."},
// ─── BATCH 1 of 5 — Paste inside QUESTIONS = [ array ───
// NumPy Arrays Q1–40 + NumPy Random Q1–10
// Total: 50 questions

  // ══ NumPy Arrays ══
  {t:"NumPy Arrays",d:1,q:"What does NumPy stand for?",o:["Numerical Python","Numeric Pyramid","Number Python","Null Python"],a:0,e:"NumPy stands for Numerical Python. It is a library consisting of multidimensional array objects and routines for processing those arrays."},
  {t:"NumPy Arrays",d:1,q:"What is an ndarray in NumPy?",o:["A list of Python dictionaries","An N-dimensional array of items of the same type","A pandas DataFrame wrapper","A named array with labels"],a:1,e:"ndarray (N-dimensional array) is NumPy's core data structure. All items must be the same type and are accessed using a zero-based index."},
  {t:"NumPy Arrays",d:1,q:"What does ndarray.shape return?",o:["Total number of elements","A tuple of array dimensions","Number of axes only","The dtype of elements"],a:1,e:"ndarray.shape returns a tuple of array dimensions. For a 2×3 array it returns (2, 3). It can also be used to resize the array."},
  {t:"NumPy Arrays",d:1,q:"What does ndarray.ndim return?",o:["Total elements","Number of array axes (dimensions)","Shape tuple","Item size in bytes"],a:1,e:"ndarray.ndim returns the number of array dimensions (axes). A 1D array has ndim=1, a 2D matrix has ndim=2, a 3D array has ndim=3."},
  {t:"NumPy Arrays",d:1,q:"What does ndarray.size return?",o:["Memory size in bytes","Total number of elements","Size of first dimension","Number of columns"],a:1,e:"ndarray.size returns the total number of elements — product of all dimension sizes. For a (2,3) array, size = 6."},
  {t:"NumPy Arrays",d:1,q:"What does ndarray.itemsize return?",o:["Number of items","Size in bytes of each element","Total array size in bytes","Number of dimensions"],a:1,e:"itemsize returns the size in bytes of each single element. For float64, itemsize=8 (64/8). For int8, itemsize=1."},
  {t:"NumPy Arrays",d:1,q:"What is the itemsize of an array with dtype=float64?",o:["4 bytes","6 bytes","8 bytes","16 bytes"],a:2,e:"float64 = 64 bits = 8 bytes. itemsize = dtype_bits / 8. So float64 → 64/8 = 8 bytes per element."},
  {t:"NumPy Arrays",d:1,q:"Which dtype stores a Boolean value in NumPy?",o:["int8","bool","bit","uint1"],a:1,e:"bool stores True or False as a single byte. From Nadeem Sir's dtype table: 'Boolean (True or False) stored as a byte'."},
  {t:"NumPy Arrays",d:1,q:"What is the range of int8 in NumPy?",o:["0 to 255","-128 to 127","-256 to 255","0 to 127"],a:1,e:"int8 is a signed 8-bit integer. Range: -128 to 127. uint8 (unsigned) goes 0 to 255."},
  {t:"NumPy Arrays",d:1,q:"What does np.array([1, 2, 3], dtype=complex) create?",o:["Error — complex needs two values","An array of complex numbers: [1+0j, 2+0j, 3+0j]","An array of strings","Same as int array"],a:1,e:"dtype=complex converts integers to complex numbers with zero imaginary part. Output: [1.+0.j, 2.+0.j, 3.+0.j]."},
  {t:"NumPy Arrays",d:1,q:"In NumPy, what are dimensions called?",o:["Levels","Axes","Layers","Ranks"],a:1,e:"In NumPy, dimensions are called axes. A 2D array has 2 axes: axis 0 (rows) and axis 1 (columns)."},
  {t:"NumPy Arrays",d:1,q:"For arr = np.array([1,2,3,4,5,6,7]), what does arr[1:5] return?",o:["[1,2,3,4,5]","[2,3,4,5]","[1,2,3,4]","[2,3,4,5,6]"],a:1,e:"arr[1:5] returns elements at indices 1,2,3,4. End index is exclusive. So elements are 2,3,4,5."},
  {t:"NumPy Arrays",d:1,q:"What does arr[:4] return for arr = [1,2,3,4,5,6,7]?",o:["[1,2,3,4,5]","[1,2,3,4]","[2,3,4]","[4,5,6,7]"],a:1,e:"When start is not given, it defaults to 0. arr[:4] = arr[0:4] = elements at indices 0,1,2,3 = [1,2,3,4]."},
  {t:"NumPy Arrays",d:1,q:"What does arr[-3:-1] return for arr = [1,2,3,4,5,6,7]?",o:["[5,6,7]","[5,6]","[4,5,6]","[6,7]"],a:1,e:"Negative indexing: -3 is index 4 (value 5), -1 is index 6 (value 7). arr[-3:-1] = elements at indices 4,5 = [5,6]. End is exclusive."},
  {t:"NumPy Arrays",d:1,q:"What does arr[1:5:2] return for arr = [1,2,3,4,5,6,7]?",o:["[2,3,4,5]","[2,4]","[1,3,5]","[2,4,6]"],a:1,e:"arr[start:end:step]. arr[1:5:2] starts at index 1 (value 2), steps by 2: indices 1,3 → values [2,4]."},
  {t:"NumPy Arrays",d:1,q:"What is the key difference between a NumPy copy and a view?",o:["Copy is faster, view is slower","Copy is a new independent array; view shares data with the original","View is a new array; copy shares data","No difference — both modify the original"],a:1,e:"A copy owns its data independently. A view does NOT own the data — it is a window into the original array. Modifying a view modifies the original."},
  {t:"NumPy Arrays",d:1,q:"What does arr.copy() create?",o:["A view of arr","A new independent array with the same data","A reference to arr","A shallow copy that shares elements"],a:1,e:"arr.copy() creates a completely new array that owns its data. Changes to the copy do NOT affect the original."},
  {t:"NumPy Arrays",d:1,q:"What does arr.view() create?",o:["A copy of arr","A view of arr that shares data with the original","A read-only version of arr","A formatted display of arr"],a:1,e:"arr.view() creates a view — a new array object that looks at the SAME underlying data. Modifying the view modifies the original."},
  {t:"NumPy Arrays",d:1,q:"What is the dimension tuple format in NumPy for a 3D array?",o:["[Dim0, Dim1, Dim2]","(Dim0, Dim1, Dim2)","{Dim0: Dim1: Dim2}","Dim0 x Dim1 x Dim2"],a:1,e:"From the lecture: 'Dimension of the array is: (Dim0, Dim1, Dim2)' — a tuple. For example (2,3,4) means 2 blocks, 3 rows, 4 columns."},
  {t:"NumPy Arrays",d:1,q:"What are the four basic functions to create NumPy arrays from the lecture?",o:["np.make(), np.build(), np.create(), np.generate()","np.array(), np.zeros(), np.ones(), np.random.randint()","np.list(), np.tuple(), np.dict(), np.set()","np.int(), np.float(), np.str(), np.bool()"],a:1,e:"From the lecture: np.array(), np.zeros(), np.ones(), np.random.randint(), np.random.rand() — the core array creation functions."},
  {t:"NumPy Arrays",d:2,q:"For arr = [[1,2,3,4,5],[6,7,8,9,10]], what does arr[1, 1:4] return?",o:["[1,2,3,4]","[7,8,9]","[6,7,8]","[7,8,9,10]"],a:1,e:"arr[1, 1:4] — row index 1 (second row = [6,7,8,9,10]), columns 1 to 3 (indices 1,2,3) = [7,8,9]."},
  {t:"NumPy Arrays",d:2,q:"For arr = [[1,2,3,4,5],[6,7,8,9,10]], what does arr[0:2, 2] return?",o:["[1,2]","[3,8]","[3,4,5]","[8,9,10]"],a:1,e:"arr[0:2, 2] — rows 0 and 1, column index 2. Row 0 col 2 = 3; Row 1 col 2 = 8. Result: [3, 8]."},
  {t:"NumPy Arrays",d:2,q:"For arr = [[1,2,3,4,5],[6,7,8,9,10]], what does arr[0:2, 1:4] return?",o:["[[2,3,4],[7,8,9]]","[[1,2,3],[6,7,8]]","[[3,4,5],[8,9,10]]","[[2,3],[7,8]]"],a:0,e:"arr[0:2, 1:4] — rows 0&1, columns 1,2,3. Row 0: [2,3,4], Row 1: [7,8,9]. Result: [[2,3,4],[7,8,9]]."},
  {t:"NumPy Arrays",d:2,q:"What does x.base return for x = arr.copy()?",o:["The original array arr","None — copy owns its data","True","A reference to arr's memory"],a:1,e:"From the lecture: 'Every NumPy array has the attribute base that returns None if the array owns the data.' copy() owns data → base returns None."},
  {t:"NumPy Arrays",d:2,q:"What does y.base return for y = arr.view()?",o:["None","True","The original array arr","False"],a:2,e:"view() does NOT own data. y.base refers to the original object (arr). This is how you check if an array is a view — base is not None."},
  {t:"NumPy Arrays",d:2,q:"a = np.arange(24); b = a.reshape(2,4,3). What is b.ndim?",o:["1","2","3","24"],a:2,e:"b = a.reshape(2,4,3) creates a 3D array. ndim = number of dimensions = 3."},
  {t:"NumPy Arrays",d:2,q:"When iterating a 2D array with 'for x in arr', what does each x represent?",o:["Each individual element","Each row (1D array)","Each column","Each dimension"],a:1,e:"Iterating a 2D array with for x in arr gives each ROW as a 1D array. To get individual elements, you need a nested loop: for x in arr: for y in x."},
  {t:"NumPy Arrays",d:2,q:"x = np.array([1,2,3,4,5], dtype=np.int8). What is x.itemsize?",o:["5","8","1","4"],a:2,e:"int8 = 8 bits = 1 byte per element. itemsize = 1. From the lecture example directly."},
  {t:"NumPy Arrays",d:2,q:"a = np.array([[1,2,3],[4,5,6]]); a.shape = (3,2). What is the new shape?",o:["(2,3)","(3,2)","Error — cannot reshape","(6,1)"],a:1,e:"shape can be assigned directly to reshape. (2,3) has 6 elements; (3,2) also has 6 — valid. The array is reorganized into 3 rows, 2 columns."},
  {t:"NumPy Arrays",d:2,q:"arr = [1,2,3,4,5]; x = arr.copy(); arr[0] = 42. What does x[0] equal?",o:["42","1","0","Error"],a:1,e:"copy() creates independent data. Changing arr[0] to 42 does NOT affect x. x[0] remains 1. From the exact lecture example."},
  {t:"NumPy Arrays",d:2,q:"arr = [1,2,3,4,5]; x = arr.view(); arr[0] = 42. What does x[0] equal?",o:["1","42","0","Error"],a:1,e:"view() shares data with original. Changing arr[0] to 42 ALSO changes x[0] to 42. This is the key distinction from copy()."},
  {t:"NumPy Arrays",d:2,q:"What is the uint8 data type range in NumPy?",o:["-128 to 127","0 to 128","0 to 255","-256 to 255"],a:2,e:"uint8 = unsigned 8-bit integer. No negative values. Range: 0 to 255. Commonly used for image pixel values."},
  {t:"NumPy Arrays",d:2,q:"numpy.array(object, dtype=None, ndmin=2). What does ndmin do?",o:["Sets the maximum number of dimensions","Specifies the minimum number of dimensions the array should have","Normalizes the array","Sets the number of elements"],a:1,e:"ndmin specifies the minimum number of dimensions. If the input has fewer dimensions, dimensions are prepended to the shape."},
  {t:"NumPy Arrays",d:3,q:"For the 3D array a with shape (2,3,3), what does a[0] return?",o:["A single element","The first 3×3 matrix (first block)","A 1D array of 3 elements","The entire array"],a:1,e:"For a 3D array of shape (2,3,3), a[0] gives the first 'block' — a 2D array of shape (3,3)."},
  {t:"NumPy Arrays",d:3,q:"a = np.arange(24); print(a.ndim) then b = a.reshape(2,4,3); print(b.ndim). What are the two outputs?",o:["1, 3","1, 2","24, 3","2, 3"],a:0,e:"np.arange(24) creates a 1D array → ndim=1. reshape(2,4,3) creates a 3D array → ndim=3. This is the exact example from the lecture."},
  {t:"NumPy Arrays",d:3,q:"float32 has sign bit, 8 bits exponent, 23 bits mantissa. How many bytes is float32?",o:["2","4","8","16"],a:1,e:"float32 = 32 bits = 32/8 = 4 bytes. Total = 1+8+23 = 32 bits = 4 bytes."},
  {t:"NumPy Arrays",d:3,q:"What is complex64 in NumPy?",o:["A 64-bit complex number","Represented by two 32-bit floats (real and imaginary)","A 64-element complex array","Same as float64 but for complex math"],a:1,e:"From the dtype table: complex64 = 'Complex number, represented by two 32-bit floats (real and imaginary part).' Total = 64 bits."},
  {t:"NumPy Arrays",d:3,q:"When iterating a 3D array, how many nested for loops do you need to reach individual elements?",o:["1","2","3","4"],a:2,e:"A 3D array needs 3 nested loops: outer loop gives 2D slices, middle loop gives 1D rows, inner loop gives individual elements."},
  {t:"NumPy Arrays",d:3,q:"int16 range is -32768 to 32767. What is the formula for signed integer range of n bits?",o:["0 to 2^n - 1","-2^(n-1) to 2^(n-1) - 1","-2^n to 2^n","-(2^n)/2 to (2^n)/2"],a:1,e:"For n-bit signed integer: min = -2^(n-1), max = 2^(n-1) - 1. int16: -2^15 = -32768, 2^15-1 = 32767."},
  {t:"NumPy Arrays",d:3,q:"If arr.base is not None, what does that tell you?",o:["The array owns its data","The array is a view and shares memory with another array","The array is empty","The array has been modified"],a:1,e:"base returns None if array owns data (copy). If base is not None, it returns the original object — meaning this array is a VIEW sharing memory."},

  // ══ NumPy Random — first 10 ══
  {t:"NumPy Random",d:1,q:"Which NumPy module is used to work with random numbers?",o:["numpy.chance","numpy.random","numpy.generate","numpy.rng"],a:1,e:"NumPy offers the random module: from numpy import random. Then use random.randint(), random.rand(), random.choice() etc."},
  {t:"NumPy Random",d:1,q:"What does random.randint(100) generate?",o:["An array of 100 random integers","A random integer from 0 to 100 inclusive","A random integer from 0 to 99","The number 100"],a:2,e:"random.randint(100) generates one random integer from 0 to 99. The upper bound is exclusive."},
  {t:"NumPy Random",d:1,q:"What does random.rand() generate?",o:["A random integer","A random float from 0 to 1","A random float from -1 to 1","A random boolean"],a:1,e:"random.rand() generates a random float from 0 to 1. From the lecture: 'Generate a random float from 0 to 1.'"},
  {t:"NumPy Random",d:1,q:"What does random.randint(0, 100, 5) generate?",o:["5 floats between 0 and 100","A 1D array of 5 random integers from 0 to 99","Random integers summing to 100","5 numbers all equal to 0 or 100"],a:1,e:"random.randint(low, high, size) generates size random integers from low to high-1. randint(0,100,5) → 5 integers each between 0 and 99."},
  {t:"NumPy Random",d:1,q:"What does random.rand(5) generate?",o:["5 random integers","A 1D array of 5 random floats between 0 and 1","5 random booleans","The number 5"],a:1,e:"random.rand(size) generates size random floats between 0 and 1. rand(5) gives a 1D array of 5 floats."},
  {t:"NumPy Random",d:1,q:"What does random.rand(2, 3) generate?",o:["2 random numbers","3 random numbers","A 2×3 matrix of random floats between 0 and 1","A random integer between 2 and 3"],a:2,e:"random.rand(d0, d1) generates a matrix of shape (d0, d1) filled with random floats between 0 and 1. rand(2,3) → 2×3 matrix."},
  {t:"NumPy Random",d:1,q:"What does random.choice([3,5,7,9]) return?",o:["All four values","One randomly selected value from the list","The index of a random element","A shuffled version of the list"],a:1,e:"random.choice(array) returns one random value from the given array. Each element has equal probability of being chosen."},
  {t:"NumPy Random",d:1,q:"What does shuffle() do to an array?",o:["Returns a new shuffled array","Changes element arrangement in-place, returns None","Creates a sorted copy","Reverses the array"],a:1,e:"From the lecture: 'shuffle() changes arrangement of elements in-place.' It modifies the original array and returns None."},
  {t:"NumPy Random",d:1,q:"What does permutation() do differently from shuffle()?",o:["They are identical","permutation() returns a new shuffled array without changing the original","permutation() is slower","permutation() only works on integers"],a:1,e:"From the lecture: 'permutation(x) returns a new permuted variable and the original data is not changed.' Key difference: shuffle modifies in-place; permutation creates a new array."},
  {t:"NumPy Random",d:1,q:"What are the two broadcasting compatibility rules from the lecture?",o:["Arrays must be same size OR same dtype","Dimensions are equal OR one of them is 1","Both arrays must be 2D OR 3D","First dimensions match OR last dimensions match"],a:1,e:"From Nadeem Sir's lecture: 'Two dimensions are compatible when they are equal, or one of them is 1. Missing dimensions are assumed to have size one.'"},

  ];

// ═══════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════
export const TOPICS      = [...new Set(QUESTIONS.map(q => q.t))];
export const DIFF_LABELS = ['', 'Easy', 'Medium', 'Hard'];
export const DIFF_COLORS = ['', 'text-sage', 'text-gold', 'text-rose'];
export const DIFF_BG     = ['', 'bg-sage/10 border-sage/30', 'bg-gold/10 border-gold/30', 'bg-rose/10 border-rose/30'];

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

export const JS_TOPICS    = TOPICS.filter(t => t.startsWith('JS:'));
export const REACT_TOPICS = TOPICS.filter(t => t.startsWith('React:'));
export const PYTHON_TOPICS = TOPICS.filter(t =>
  ['NumPy Arrays', 'NumPy Random', 'Pandas 1', 'Pandas 2',
   'Pandas Basics', 'EDA', 'Matplotlib', 'Seaborn',
   'Matplotlib & Seaborn'].includes(t)
);
