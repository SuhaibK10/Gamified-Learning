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
];
// ============================================================
// JS ARENA — NEW QUESTION BANK ADDITIONS
// Topics: NumPy Arrays, NumPy Random, Pandas 1, Pandas 2,
//         Matplotlib, Seaborn
// ~300 questions | merge into existing QUESTIONS array
// ============================================================

export const NEW_QUESTIONS = [

  // ══════════════════════════════════════════════════════════
  // NUMPY ARRAYS (60 questions)
  // ══════════════════════════════════════════════════════════

  // Easy ─────────────────────────────────────────────────────
  {
    id: 'nparr-001',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'How do you import NumPy with its conventional alias?',
    options: ['import numpy', 'import numpy as np', 'from numpy import *', 'import np from numpy'],
    correct: 1,
    explanation: 'import numpy as np is the universal convention. np is the alias used everywhere in data science.'
  },
  {
    id: 'nparr-002',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'Which function creates a NumPy array from a Python list?',
    options: ['np.array()', 'np.list()', 'np.create()', 'np.make()'],
    correct: 0,
    explanation: 'np.array([1, 2, 3]) converts a Python list (or nested list) into a NumPy ndarray.'
  },
  {
    id: 'nparr-003',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does np.zeros((3, 4)) create?',
    options: ['A 3-element array of 4s', 'A 3×4 array filled with 0.0', 'A 4×3 array of zeros', 'A 1D array with 12 zeros'],
    correct: 1,
    explanation: 'np.zeros((3, 4)) creates a 3-row, 4-column 2D array filled entirely with 0.0 (float64 by default).'
  },
  {
    id: 'nparr-004',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does the .shape attribute of a NumPy array return?',
    options: ['The total number of elements', 'A tuple of dimension sizes', 'The number of dimensions only', 'The data type of elements'],
    correct: 1,
    explanation: '.shape returns a tuple like (3, 4) where each number is the size of that dimension.'
  },
  {
    id: 'nparr-005',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does np.arange(0, 10, 2) return?',
    options: ['[0, 2, 4, 6, 8, 10]', '[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 10, 2]'],
    correct: 1,
    explanation: 'np.arange(start, stop, step) — stop is exclusive. So 0, 2, 4, 6, 8. 10 is excluded.'
  },
  {
    id: 'nparr-006',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What is the default dtype of np.array([1, 2, 3])?',
    options: ['float32', 'int32', 'int64', 'object'],
    correct: 2,
    explanation: 'On most systems, a list of Python ints is converted to int64 by default. The exact type can be platform-dependent but is typically int64.'
  },
  {
    id: 'nparr-007',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does np.ones((2, 3)) create?',
    options: ['An array with 2 and 3', 'A 2×3 matrix of 1.0', 'A 3×2 matrix of ones', 'A 1D array [1, 2, 3]'],
    correct: 1,
    explanation: 'np.ones((rows, cols)) creates an array of that shape filled with 1.0 (float64 by default).'
  },
  {
    id: 'nparr-008',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'How do you find the total number of elements in a NumPy array?',
    options: ['arr.len()', 'len(arr)', 'arr.size', 'arr.count()'],
    correct: 2,
    explanation: 'arr.size returns the total number of elements (product of all shape dimensions). len(arr) only returns the first dimension.'
  },
  {
    id: 'nparr-009',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does arr.ndim return for a 2D array?',
    options: ['The shape tuple', '2', 'The total elements', 'The dtype'],
    correct: 1,
    explanation: 'ndim returns the number of dimensions (axes). A 2D array has ndim = 2. A 1D has ndim = 1.'
  },
  {
    id: 'nparr-010',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'Which NumPy function creates an array of 5 evenly spaced values between 0 and 1?',
    options: ['np.arange(0, 1, 5)', 'np.linspace(0, 1, 5)', 'np.space(0, 1, 5)', 'np.range(0, 1, 5)'],
    correct: 1,
    explanation: 'np.linspace(start, stop, num) creates num evenly spaced points — endpoints are INCLUDED by default.'
  },
  {
    id: 'nparr-011',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'How do you access the element at row 1, column 2 of a 2D NumPy array arr?',
    options: ['arr[1][2]', 'arr[1, 2]', 'Both A and B work', 'arr(1, 2)'],
    correct: 2,
    explanation: 'Both arr[1][2] (chained indexing) and arr[1, 2] (tuple indexing) work. arr[1, 2] is preferred — it\'s faster and more Pythonic.'
  },
  {
    id: 'nparr-012',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does np.eye(3) create?',
    options: ['A 3×3 matrix of ones', 'A 3×3 identity matrix', 'A 1D array [1, 2, 3]', 'A 3×3 matrix of threes'],
    correct: 1,
    explanation: 'np.eye(n) creates an n×n identity matrix with 1s on the main diagonal and 0s everywhere else.'
  },
  {
    id: 'nparr-013',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What is the result of np.array([1.0, 2, 3]).dtype?',
    options: ['int64', 'float64', 'object', 'mixed'],
    correct: 1,
    explanation: 'NumPy arrays have a single dtype. When you mix a float (1.0) with ints, the whole array becomes float64 (upcasting).'
  },
  {
    id: 'nparr-014',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'Which function stacks two 1D arrays vertically (creating a 2D array)?',
    options: ['np.hstack()', 'np.vstack()', 'np.stack()', 'np.column_stack()'],
    correct: 1,
    explanation: 'np.vstack([a, b]) stacks arrays vertically (along axis 0), turning two 1D arrays into a 2D matrix.'
  },
  {
    id: 'nparr-015',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does arr.flatten() do?',
    options: ['Removes all zeros', 'Returns a 1D copy of the array', 'Transposes the array', 'Removes duplicate values'],
    correct: 1,
    explanation: 'arr.flatten() returns a 1D copy of the array. Unlike ravel(), it always returns a copy, never a view.'
  },
  {
    id: 'nparr-016',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'How do you compute the sum of all elements in a NumPy array arr?',
    options: ['sum(arr)', 'arr.sum()', 'np.total(arr)', 'Both A and B'],
    correct: 3,
    explanation: 'Both sum(arr) (Python built-in) and arr.sum() (NumPy method) work. arr.sum() is faster for large arrays.'
  },
  {
    id: 'nparr-017',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does a[2:5] return for a 1D NumPy array a?',
    options: ['Elements at indices 2, 3, 4, 5', 'Elements at indices 2, 3, 4', 'Elements at indices 3, 4, 5', 'Element at index 3'],
    correct: 1,
    explanation: 'Slicing is end-exclusive, same as Python lists. a[2:5] gives indices 2, 3, 4.'
  },
  {
    id: 'nparr-018',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What is vectorization in NumPy?',
    options: ['Converting arrays to vectors', 'Performing operations on entire arrays without explicit loops', 'Saving arrays as vector files', 'Sorting arrays by value'],
    correct: 1,
    explanation: 'Vectorization means applying operations to entire arrays at once using optimized C/Fortran code, avoiding slow Python for-loops.'
  },
  {
    id: 'nparr-019',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What does np.zeros_like(arr) do?',
    options: ['Creates an array of zeros of length like len(arr)', 'Creates a zero array with same shape and dtype as arr', 'Fills arr with zeros in-place', 'Creates a copy of arr with negated values'],
    correct: 1,
    explanation: 'np.zeros_like(arr) creates a new array of zeros with the same shape and data type as arr.'
  },
  {
    id: 'nparr-020',
    topic: 'NumPy Arrays',
    difficulty: 'Easy',
    question: 'What is the difference between a NumPy array and a Python list?',
    options: ['Arrays are slower', 'Arrays store a single data type; lists can store mixed types', 'Lists support vectorized operations', 'Arrays can only hold integers'],
    correct: 1,
    explanation: 'NumPy arrays enforce a single dtype, enabling fast vectorized operations. Python lists allow mixed types but are much slower for numerical computation.'
  },

  // Medium ────────────────────────────────────────────────────
  {
    id: 'nparr-021',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is the result of reshaping a (12,) array into (3, 4)?',
    options: ['Error — sizes don\'t match', 'A 3-row, 4-column 2D array', 'A 4-row, 3-column 2D array', 'A (12, 3, 4) 3D array'],
    correct: 1,
    explanation: 'Reshape is valid if the total elements match. 3×4=12. The result is a 2D array with 3 rows and 4 columns.'
  },
  {
    id: 'nparr-022',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does arr.reshape(-1) do?',
    options: ['Reverses the array', 'Flattens the array to 1D', 'Throws an error', 'Negates all values'],
    correct: 1,
    explanation: '-1 in reshape means "infer this dimension." reshape(-1) flattens to 1D by computing the total element count automatically.'
  },
  {
    id: 'nparr-023',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'How does broadcasting work when adding a (3,) array to a (3,3) matrix?',
    options: ['Error — shapes don\'t match', 'The 1D array is added to each row', 'The 1D array is added to each column', 'Only the diagonal is affected'],
    correct: 1,
    explanation: 'Broadcasting stretches the (3,) array across each row. So the same 3 values are added to every row of the 3×3 matrix.'
  },
  {
    id: 'nparr-024',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is the difference between np.copy(arr) and a simple assignment b = arr?',
    options: ['No difference', 'b = arr creates a view; np.copy() creates an independent copy', 'np.copy() is slower', 'b = arr creates a deep copy'],
    correct: 1,
    explanation: 'b = arr makes both names point to the same memory. Changing b changes arr. np.copy(arr) creates independent data.'
  },
  {
    id: 'nparr-025',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does arr[arr > 5] do?',
    options: ['Returns indices where arr > 5', 'Returns a new array of elements where arr > 5', 'Sets those elements to 5', 'Raises an IndexError'],
    correct: 1,
    explanation: 'Boolean indexing: arr > 5 creates a boolean mask, and arr[mask] returns only the True elements. This is called fancy indexing.'
  },
  {
    id: 'nparr-026',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.where(arr > 0, arr, 0) do?',
    options: ['Returns indices of positive elements', 'Replaces negative values with 0, keeps positives', 'Deletes negative elements', 'Throws an error'],
    correct: 1,
    explanation: 'np.where(condition, x, y) returns x where condition is True, y where False. This is ReLU: keep positives, zero out negatives.'
  },
  {
    id: 'nparr-027',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is a view vs a copy in NumPy?',
    options: ['Views are faster; copies are safer', 'A view shares memory with the original; a copy is independent', 'Views are 2D; copies are 1D', 'There is no difference'],
    correct: 1,
    explanation: 'A view (like from slicing) shares underlying memory. Modifying a view modifies the original. np.copy() or .flatten() give independent copies.'
  },
  {
    id: 'nparr-028',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does arr.T do?',
    options: ['Converts to tuple', 'Returns the transpose of the array', 'Returns the first element', 'Moves the array to disk'],
    correct: 1,
    explanation: 'arr.T is the transpose — rows become columns and vice versa. For a (3, 4) array, arr.T has shape (4, 3). Note: transpose returns a view.'
  },
  {
    id: 'nparr-029',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.concatenate([a, b], axis=0) do?',
    options: ['Multiplies the arrays element-wise', 'Stacks arrays along rows (vertically)', 'Stacks arrays along columns (horizontally)', 'Merges overlapping values'],
    correct: 1,
    explanation: 'axis=0 concatenates along the row axis (adding more rows). For 2D arrays, this is the same as np.vstack().'
  },
  {
    id: 'nparr-030',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is the result of np.array([1, 2, 3]) * np.array([4, 5, 6])?',
    options: ['A dot product: 32', 'Element-wise: [4, 10, 18]', 'A (3,3) outer product matrix', 'An error — use np.dot() for multiplication'],
    correct: 1,
    explanation: 'The * operator performs element-wise multiplication: 1×4=4, 2×5=10, 3×6=18. For dot product, use np.dot() or the @ operator.'
  },
  {
    id: 'nparr-031',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.argmax(arr) return?',
    options: ['The maximum value in arr', 'The index of the maximum value', 'A boolean mask of max positions', 'The last element'],
    correct: 1,
    explanation: 'np.argmax(arr) returns the index (position) of the largest value. np.max(arr) returns the value itself.'
  },
  {
    id: 'nparr-032',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'How do you compute the column-wise mean of a 2D array?',
    options: ['arr.mean()', 'arr.mean(axis=0)', 'arr.mean(axis=1)', 'np.col_mean(arr)'],
    correct: 1,
    explanation: 'axis=0 means "collapse along rows" giving one mean per column. axis=1 collapses along columns giving one mean per row.'
  },
  {
    id: 'nparr-033',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is the result of np.dot(a, b) where a is (2,3) and b is (3,4)?',
    options: ['Error', 'A (2,4) matrix', 'A (3,3) matrix', 'A (2,3,4) tensor'],
    correct: 1,
    explanation: 'Matrix multiplication: (2,3) × (3,4) = (2,4). The inner dimensions must match (both 3).'
  },
  {
    id: 'nparr-034',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.unique(arr) return?',
    options: ['The first occurrence of each value', 'A sorted array of unique values', 'Count of unique values', 'A boolean mask of duplicates'],
    correct: 1,
    explanation: 'np.unique(arr) returns a sorted array of unique values. With return_counts=True, it also returns the count of each.'
  },
  {
    id: 'nparr-035',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.clip(arr, 0, 255) do?',
    options: ['Rounds values to 0 or 255', 'Clips values below 0 to 0 and above 255 to 255', 'Removes elements outside [0, 255]', 'Normalizes arr to [0, 255]'],
    correct: 1,
    explanation: 'np.clip(arr, a_min, a_max) limits values: anything below a_min becomes a_min, anything above a_max becomes a_max. Common in image processing.'
  },
  {
    id: 'nparr-036',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is the shape of np.arange(12).reshape(2, 2, 3)?',
    options: ['(2, 2, 3)', '(12,)', '(2, 6)', 'Error — 12 can\'t be reshaped to 2×2×3'],
    correct: 0,
    explanation: '2×2×3 = 12, which matches. The result is a 3D array of shape (2, 2, 3) — 2 blocks, each 2×3.'
  },
  {
    id: 'nparr-037',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'Which indexing returns a copy rather than a view in NumPy?',
    options: ['Slice indexing (arr[1:5])', 'Boolean indexing (arr[arr>0])', 'Step slicing (arr[::2])', 'Single index (arr[0])'],
    correct: 1,
    explanation: 'Fancy indexing (boolean or integer array indexing) always returns a copy. Basic slicing returns a view.'
  },
  {
    id: 'nparr-038',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.sort(arr, axis=0) do to a 2D array?',
    options: ['Sorts the entire flattened array', 'Sorts each column independently', 'Sorts each row independently', 'Returns sorted indices'],
    correct: 1,
    explanation: 'axis=0 sorts along the row axis — each column is sorted independently. axis=1 would sort each row independently.'
  },
  {
    id: 'nparr-039',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What does np.hstack([a, b]) do?',
    options: ['Stacks arrays vertically', 'Stacks arrays horizontally (side by side)', 'Computes the horizontal sum', 'Interleaves elements alternately'],
    correct: 1,
    explanation: 'np.hstack() stacks along axis=1 (horizontally), adding more columns. For 1D arrays it just concatenates them.'
  },
  {
    id: 'nparr-040',
    topic: 'NumPy Arrays',
    difficulty: 'Medium',
    question: 'What is the output of np.array([1, 2, 3]) + 10?',
    options: ['[1, 2, 3, 10]', '[11, 12, 13]', 'Error — can\'t add scalar to array', '[10, 20, 30]'],
    correct: 1,
    explanation: 'Broadcasting: the scalar 10 is broadcast to match the array shape, and addition is element-wise. Result: [11, 12, 13].'
  },

  // Hard ─────────────────────────────────────────────────────
  {
    id: 'nparr-041',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'Given a = np.array([[1,2],[3,4]]), what is a[:, np.newaxis].shape?',
    options: ['(2, 1)', '(2, 2, 1)', '(2, 1, 2)', 'Error'],
    correct: 1,
    explanation: 'a has shape (2,2). np.newaxis adds a new axis. a[:, np.newaxis] adds an axis at position 1: (2, 1, 2). The slice : preserves dim 0.'
  },
  {
    id: 'nparr-042',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What is the broadcasting rule for two arrays of shapes (4, 1) and (1, 3)?',
    options: ['Error', 'Output shape (4, 3)', 'Output shape (4, 1, 3)', 'Output shape (1, 3)'],
    correct: 1,
    explanation: 'Broadcasting compares from the trailing dimension. (4,1) vs (1,3): 1 broadcast to 3, 4 broadcast to 4. Result: (4,3).'
  },
  {
    id: 'nparr-043',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What does np.einsum("ij,jk->ik", A, B) compute?',
    options: ['Element-wise product of A and B', 'Matrix multiplication A @ B', 'The trace of A + B', 'The outer product of A and B'],
    correct: 1,
    explanation: 'einsum\'s "ij,jk->ik" means: sum over shared index j, producing an ik result. This is exactly matrix multiplication.'
  },
  {
    id: 'nparr-044',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What is a stride in NumPy?',
    options: ['The step size in np.arange', 'The number of bytes to move to reach the next element along each axis', 'The number of elements skipped in a slice', 'The memory alignment of the array'],
    correct: 1,
    explanation: 'Strides tell NumPy how many bytes to jump to move one step along each axis. Transposing reverses strides without copying data.'
  },
  {
    id: 'nparr-045',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'a = np.arange(9).reshape(3,3). What does a[np.ix_([0,2],[1,2])] return?',
    options: ['Elements at (0,1) and (2,2) only', 'A 2×2 submatrix of rows 0,2 and cols 1,2', 'Error — np.ix_ not valid here', 'A flattened array of 4 elements'],
    correct: 1,
    explanation: 'np.ix_([0,2],[1,2]) creates an open mesh for indexing. Combined with a, it extracts a 2×2 submatrix: rows 0&2, columns 1&2.'
  },
  {
    id: 'nparr-046',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What is the difference between arr.ravel() and arr.flatten()?',
    options: ['No difference', 'ravel() returns a view when possible; flatten() always returns a copy', 'flatten() returns a view; ravel() always copies', 'ravel() preserves shape; flatten() does not'],
    correct: 1,
    explanation: 'ravel() avoids copying when the data is contiguous in memory. flatten() always returns a new independent array. ravel is faster; flatten is safer.'
  },
  {
    id: 'nparr-047',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'a = np.zeros((3,3)); a[np.diag_indices(3)] = 5. What is a?',
    options: ['A matrix with 5 on anti-diagonal', 'A 3×3 identity-like matrix with 5 on main diagonal', 'A matrix where all values are 5', 'Error — diag_indices doesn\'t work on square matrices'],
    correct: 1,
    explanation: 'np.diag_indices(n) returns the row and column indices for the main diagonal. Setting those to 5 creates a diagonal matrix.'
  },
  {
    id: 'nparr-048',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'How does np.linalg.norm(arr) differ from np.sum(arr**2)**0.5?',
    options: ['They are equivalent', 'linalg.norm handles complex numbers and multiple norm types', 'linalg.norm only works on matrices', 'np.sum approach is more accurate'],
    correct: 1,
    explanation: 'Both compute the L2 norm for real arrays. np.linalg.norm is general: supports ord parameter (L1, L2, Frobenius, etc.) and complex inputs.'
  },
  {
    id: 'nparr-049',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What does np.split(arr, 3) do if arr has 9 elements?',
    options: ['Splits into 9 arrays of 3 each', 'Splits into 3 equal arrays of 3 each', 'Splits at indices 1, 2, 3', 'Raises ValueError always'],
    correct: 1,
    explanation: 'When the second argument is an integer, np.split divides the array into that many equal parts. 9÷3=3 elements each.'
  },
  {
    id: 'nparr-050',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What is the time complexity of a NumPy vectorized operation on n elements vs a Python for-loop?',
    options: ['Both O(n)', 'Both O(1)', 'Vectorized is O(n) but ~100x faster due to C-level ops; loop is O(n) with Python overhead', 'Vectorized is O(log n)'],
    correct: 2,
    explanation: 'Both are O(n) asymptotically, but vectorized ops use compiled C/Fortran with SIMD instructions — 10-100x fewer instructions per element than Python loops.'
  },
  {
    id: 'nparr-051',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What does np.lib.stride_tricks.as_strided() allow you to do?',
    options: ['Sort using stride steps', 'Create array views with custom strides to implement sliding windows without copying', 'Change the dtype of an array', 'Convert between C-order and Fortran-order'],
    correct: 1,
    explanation: 'as_strided lets you create custom array views by specifying strides manually. Used to create sliding window views efficiently — but dangerous if you step out of bounds.'
  },
  {
    id: 'nparr-052',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'How do you normalize a 2D array so each ROW has zero mean?',
    options: ['arr - arr.mean()', 'arr - arr.mean(axis=0)', 'arr - arr.mean(axis=1, keepdims=True)', 'arr / arr.std()'],
    correct: 2,
    explanation: 'axis=1 computes mean per row. keepdims=True keeps shape (n,1) for broadcasting compatibility. Without keepdims, shapes don\'t align for subtraction.'
  },
  {
    id: 'nparr-053',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What does arr.flags["OWNDATA"] tell you?',
    options: ['Whether the array is writable', 'Whether the array owns its memory or is a view of another', 'The endianness of the data', 'Whether the array is contiguous in memory'],
    correct: 1,
    explanation: 'OWNDATA is False when the array is a view (shares memory with another). True when the array owns its data. Critical for understanding copy/view behavior.'
  },
  {
    id: 'nparr-054',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'np.searchsorted(sorted_arr, 7) returns what?',
    options: ['The index of 7 in sorted_arr', 'The position where 7 should be inserted to keep arr sorted', 'True if 7 is in sorted_arr', 'The count of elements less than 7'],
    correct: 1,
    explanation: 'np.searchsorted performs binary search and returns the insertion index. If 7 exists, returns its position. If not, returns where it would go to maintain sort order.'
  },
  {
    id: 'nparr-055',
    topic: 'NumPy Arrays',
    difficulty: 'Hard',
    question: 'What is the result of np.outer(np.array([1,2,3]), np.array([4,5]))?',
    options: ['[4, 10, 12, 15, 12, 10] — confused product', 'A (3,2) matrix: each element i×j', 'A (2,3) matrix', 'Dot product scalar'],
    correct: 1,
    explanation: 'np.outer(a, b) computes the outer product: result[i,j] = a[i] * b[j]. Shape (3,) and (2,) → output (3,2).'
  },

  // ══════════════════════════════════════════════════════════
  // NUMPY RANDOM (40 questions)
  // ══════════════════════════════════════════════════════════

  // Easy ─────────────────────────────────────────────────────
  {
    id: 'nprand-001',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does np.random.rand(3, 4) generate?',
    options: ['3 random integers between 0 and 4', 'A 3×4 array of random floats in [0, 1)', 'A 3×4 array of random integers', 'Random samples from a normal distribution'],
    correct: 1,
    explanation: 'np.random.rand(d0, d1, ...) generates floats uniformly in [0.0, 1.0). Shape is (3, 4).'
  },
  {
    id: 'nprand-002',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'Why do you set a random seed with np.random.seed(42)?',
    options: ['To use exactly 42 random numbers', 'To make random results reproducible', 'To reset the random number generator', 'To speed up generation'],
    correct: 1,
    explanation: 'A seed initializes the pseudo-random number generator to a known state. Same seed = same sequence of "random" numbers every time. Essential for reproducibility.'
  },
  {
    id: 'nprand-003',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does np.random.randint(1, 7, size=5) simulate?',
    options: ['5 random floats between 1 and 7', 'Rolling a 6-sided die 5 times', 'Choosing 5 numbers from 1 to 7 without replacement', 'A random walk of 5 steps'],
    correct: 1,
    explanation: 'randint(low, high, size) generates integers from low to high-1. randint(1, 7) gives 1–6 — rolling a die. high is exclusive.'
  },
  {
    id: 'nprand-004',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What distribution does np.random.randn() draw from?',
    options: ['Uniform [0, 1)', 'Standard normal (mean=0, std=1)', 'Poisson', 'Exponential'],
    correct: 1,
    explanation: 'randn() generates samples from a standard normal distribution — bell curve centered at 0 with standard deviation 1.'
  },
  {
    id: 'nprand-005',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does np.random.shuffle(arr) do?',
    options: ['Returns a new shuffled array', 'Shuffles arr in-place and returns None', 'Sorts arr randomly', 'Returns indices of a shuffled version'],
    correct: 1,
    explanation: 'shuffle() operates IN-PLACE — it modifies the array and returns None. Use np.random.permutation(arr) to get a shuffled copy.'
  },
  {
    id: 'nprand-006',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'How do you generate 100 samples from a normal distribution with mean=50 and std=10?',
    options: ['np.random.randn(100)', 'np.random.normal(50, 10, 100)', 'np.random.rand(100) * 10 + 50', 'np.random.uniform(40, 60, 100)'],
    correct: 1,
    explanation: 'np.random.normal(loc, scale, size) generates from N(loc, scale²). loc=mean, scale=std, size=count.'
  },
  {
    id: 'nprand-007',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does np.random.choice([10, 20, 30, 40]) return?',
    options: ['All four values', 'A random element from the list', 'The index of a random element', 'A random subset'],
    correct: 1,
    explanation: 'np.random.choice(a) returns one element from array a uniformly at random. Use size= for multiple samples.'
  },
  {
    id: 'nprand-008',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What is the modern (preferred) way to create a random number generator in NumPy?',
    options: ['np.random.seed()', 'rng = np.random.default_rng(seed)', 'np.random.RandomState()', 'np.random.Generator()'],
    correct: 1,
    explanation: 'np.random.default_rng() creates a Generator using the new PCG64 algorithm. It\'s thread-safe, reproducible, and the recommended API since NumPy 1.17.'
  },
  {
    id: 'nprand-009',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does np.random.uniform(0, 10, size=5) generate?',
    options: ['5 floats from a normal distribution', '5 floats uniformly distributed in [0, 10)', '5 integers from 0 to 10', 'Samples from a beta distribution'],
    correct: 1,
    explanation: 'np.random.uniform(low, high, size) generates floats uniformly in [low, high). All values in that range are equally likely.'
  },
  {
    id: 'nprand-010',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does np.random.permutation(arr) do differently from np.random.shuffle(arr)?',
    options: ['They are identical', 'permutation returns a shuffled copy; shuffle modifies in-place', 'permutation only works on integers', 'shuffle creates more random results'],
    correct: 1,
    explanation: 'permutation() returns a new shuffled array, leaving the original unchanged. shuffle() modifies the original in-place and returns None.'
  },
  {
    id: 'nprand-011',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'What does the "pseudo" in pseudo-random number generator mean?',
    options: ['The numbers are not truly random but deterministically generated from a seed', 'The numbers are approximate, not exact', 'The generator uses partial randomness from hardware', 'The numbers repeat every 1000 iterations'],
    correct: 0,
    explanation: 'PRNG: given the same seed, the same sequence is produced every time. The numbers look random statistically but are computed deterministically.'
  },
  {
    id: 'nprand-012',
    topic: 'NumPy Random',
    difficulty: 'Easy',
    question: 'How do you randomly sample 3 elements from [10, 20, 30, 40, 50] without replacement?',
    options: ['np.random.choice([10,20,30,40,50], size=3)', 'np.random.choice([10,20,30,40,50], 3, replace=False)', 'np.random.sample([10,20,30,40,50], 3)', 'np.random.pick([10,20,30,40,50], 3)'],
    correct: 1,
    explanation: 'replace=False ensures no element is chosen twice. Default is replace=True (with replacement).'
  },

  // Medium ────────────────────────────────────────────────────
  {
    id: 'nprand-013',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'What is the key difference between np.random.rand() and np.random.random()?',
    options: ['rand() is older and deprecated', 'rand() takes shape as *args; random() takes a tuple', 'random() is faster', 'random() samples from a normal distribution'],
    correct: 1,
    explanation: 'rand(3, 4) vs random((3, 4)) — same output, different calling convention. random() follows NumPy\'s convention of taking a shape tuple.'
  },
  {
    id: 'nprand-014',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'How do you generate 1000 samples from N(mean=5, std=2) using the new Generator API?',
    options: ['np.random.normal(5, 2, 1000)', 'rng.normal(loc=5, scale=2, size=1000)', 'rng.randn(1000) * 2 + 5', 'Both B and C are correct'],
    correct: 3,
    explanation: 'Both work. rng.normal(5, 2, 1000) is direct. rng.randn(1000) * 2 + 5 scales a standard normal. B is cleaner; both give N(5, 4) samples.'
  },
  {
    id: 'nprand-015',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'What is a Monte Carlo simulation in the context of NumPy random?',
    options: ['A method to generate perfect random sequences', 'Using random sampling to estimate quantities that are hard to compute analytically', 'A special random distribution', 'A GPU-accelerated random number generator'],
    correct: 1,
    explanation: 'Monte Carlo methods use random sampling to approximate results. E.g., estimating π by randomly generating points and checking if they fall in a circle.'
  },
  {
    id: 'nprand-016',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'np.random.binomial(n=10, p=0.5, size=1000) simulates what?',
    options: ['1000 coin flips', '1000 experiments of flipping 10 coins each, counting heads', '10 groups of 1000 binary events', 'A normal approximation of 1000 values'],
    correct: 1,
    explanation: 'Binomial(n, p): each sample is the number of successes in n Bernoulli trials with success probability p. Here: count of heads in 10 fair flips.'
  },
  {
    id: 'nprand-017',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'Why might np.random.seed() cause problems in multi-threaded code?',
    options: ['Seeds can only be integers', 'The legacy random state is global — different threads share and corrupt it', 'Seeds slow down generation', 'np.random.seed() is deprecated'],
    correct: 1,
    explanation: 'The legacy np.random uses a global state. Multiple threads sharing it causes race conditions. Use np.random.default_rng() to create independent per-thread generators.'
  },
  {
    id: 'nprand-018',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'What does np.random.exponential(scale=2, size=500) generate?',
    options: ['500 values in an exponential sequence [2, 4, 8, ...]', 'Samples from an exponential distribution with mean=2', 'Values 2^x for 500 x values', 'Samples with 2 as the rate parameter (not mean)'],
    correct: 1,
    explanation: 'The scale parameter = 1/λ = mean of the exponential distribution. With scale=2, the expected value of each sample is 2.'
  },
  {
    id: 'nprand-019',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'How do you set a seed for the new Generator API?',
    options: ['np.random.seed(42)', 'rng = np.random.default_rng(42)', 'np.random.Generator.seed(42)', 'rng.set_seed(42)'],
    correct: 1,
    explanation: 'With the new API, seed is passed at construction: np.random.default_rng(42). The rng object is then independent and reproducible.'
  },
  {
    id: 'nprand-020',
    topic: 'NumPy Random',
    difficulty: 'Medium',
    question: 'In a uniform distribution on [0, 1), what is the probability that a sample falls below 0.5?',
    options: ['0.25', '0.5', '0.75', 'Exactly 1'],
    correct: 1,
    explanation: 'Uniform distribution: probability of [a, b] within [0, 1) = length of interval = b - a. P(X < 0.5) = 0.5.'
  },

  // Hard ─────────────────────────────────────────────────────
  {
    id: 'nprand-021',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'What is the PCG64 algorithm used in np.random.default_rng()?',
    options: ['Permuted Congruential Generator — improved PRNG with better statistical properties than Mersenne Twister', 'Parallel Computing Generator for GPU use', 'A cryptographic random number generator', 'Predictive Congruential Generator'],
    correct: 0,
    explanation: 'PCG64 (Permuted Congruential Generator) passes more statistical tests than Mersenne Twister, has smaller state, and generates numbers in random order of magnitude — much better quality randomness.'
  },
  {
    id: 'nprand-022',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'You want to estimate π using Monte Carlo. You generate 1M random points in [0,1)². The fraction inside the unit circle is f. What is the formula for π?',
    options: ['π ≈ f', 'π ≈ 4f', 'π ≈ 2f', 'π ≈ f²'],
    correct: 1,
    explanation: 'Points inside a quarter circle of radius 1 have x²+y² < 1. Area of quarter circle = π/4. Area of unit square = 1. So f ≈ π/4, meaning π ≈ 4f.'
  },
  {
    id: 'nprand-023',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'What does np.random.multivariate_normal(mean, cov, size) generate?',
    options: ['Samples from multiple independent normal distributions', 'Samples from a correlated multivariate normal with given mean vector and covariance matrix', 'The mean and covariance of a dataset', 'Eigenvalues of the covariance matrix'],
    correct: 1,
    explanation: 'Multivariate normal models correlated variables. mean is a 1D vector, cov is a positive semi-definite matrix. Each sample is a point in multi-dimensional space.'
  },
  {
    id: 'nprand-024',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'How do you implement bootstrap resampling to estimate the confidence interval of a statistic?',
    options: ['Use np.random.normal() to generate synthetic data', 'Repeatedly sample WITH replacement from the data using np.random.choice(data, size=n, replace=True), compute the statistic each time', 'Sort the data and take the 5th and 95th percentile', 'Subtract the mean and divide by std'],
    correct: 1,
    explanation: 'Bootstrap: resample with replacement many times, compute statistic each time. The distribution of those statistics approximates the sampling distribution, giving confidence intervals.'
  },
  {
    id: 'nprand-025',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'What is the difference between np.random.poisson(lam=5, size=1000) and np.random.exponential(scale=5, size=1000)?',
    options: ['They are equivalent', 'Poisson counts events in a fixed interval; exponential models time between events', 'Poisson is continuous; exponential is discrete', 'Exponential is always larger than Poisson for the same lambda'],
    correct: 1,
    explanation: 'Both relate to the Poisson process. Poisson(λ) counts arrivals in a fixed window (discrete). Exponential(1/λ) models time between arrivals (continuous).'
  },
  {
    id: 'nprand-026',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'You call np.random.seed(0) then generate 5 random numbers, then call np.random.seed(0) again and generate 5 more. What happens?',
    options: ['The second batch continues where the first left off', 'The second batch is identical to the first — seeds reset the state', 'The second batch is random relative to the first', 'An error is raised'],
    correct: 1,
    explanation: 'Setting the same seed resets the generator to the same state. Both calls produce the same sequence. This is how reproducibility works.'
  },
  {
    id: 'nprand-027',
    topic: 'NumPy Random',
    difficulty: 'Hard',
    question: 'What is the Mersenne Twister period, used by legacy np.random?',
    options: ['2^31 - 1', '2^53', '2^19937 - 1', '2^64'],
    correct: 2,
    explanation: 'The Mersenne Twister MT19937 has a period of 2^19937 - 1 — astronomically large. Despite this, it fails some modern statistical tests, which is why PCG64 was adopted.'
  },

  // ══════════════════════════════════════════════════════════
  // PANDAS 1 — BASICS (65 questions)
  // ══════════════════════════════════════════════════════════

  // Easy ─────────────────────────────────────────────────────
  {
    id: 'pd1-001',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does "Pandas" stand for?',
    options: ['Python Data Analysis System', 'Panel Data', 'Parallel Data Analysis', 'Python ANalysis for DAta Systems'],
    correct: 1,
    explanation: 'Pandas stands for "Panel Data" — a term from econometrics for structured, multi-dimensional datasets. It was created by Wes McKinney in 2008.'
  },
  {
    id: 'pd1-002',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What are the two core data structures in Pandas?',
    options: ['Table and Column', 'Series and DataFrame', 'Array and Matrix', 'Index and Value'],
    correct: 1,
    explanation: 'Pandas has exactly two: Series (1D labeled array) and DataFrame (2D table — a dictionary of Series sharing the same index).'
  },
  {
    id: 'pd1-003',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'How do you import Pandas with its conventional alias?',
    options: ['import pandas', 'import pandas as pd', 'import pd from pandas', 'from pandas import *'],
    correct: 1,
    explanation: 'import pandas as pd is universal convention in the data science ecosystem.'
  },
  {
    id: 'pd1-004',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.head() display by default?',
    options: ['Last 5 rows', 'First 5 rows', 'First and last row', 'The column headers only'],
    correct: 1,
    explanation: 'df.head(n=5) shows the first n rows. df.tail(n) shows the last n rows. Great for quick data inspection.'
  },
  {
    id: 'pd1-005',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.shape return?',
    options: ['The names of all columns', 'A tuple (rows, columns)', 'The total number of cells', 'The data types of each column'],
    correct: 1,
    explanation: 'df.shape returns (n_rows, n_columns). Essential for the first sanity check on any dataset.'
  },
  {
    id: 'pd1-006',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'How do you read a CSV file into a DataFrame?',
    options: ['pd.read("file.csv")', 'pd.read_csv("file.csv")', 'pd.load_csv("file.csv")', 'pd.DataFrame.from_csv("file.csv")'],
    correct: 1,
    explanation: 'pd.read_csv() is the most common data loading function. Pandas also has read_excel(), read_json(), read_sql(), etc.'
  },
  {
    id: 'pd1-007',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df["age"] return?',
    options: ['A DataFrame with one column', 'A Series containing the age column', 'A list of age values', 'A numpy array'],
    correct: 1,
    explanation: 'Single-bracket column access df["col"] returns a Series. Double-bracket df[["col"]] returns a single-column DataFrame.'
  },
  {
    id: 'pd1-008',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.info() show?',
    options: ['First 5 rows of data', 'Column names, dtypes, and non-null counts', 'Summary statistics', 'The size in bytes'],
    correct: 1,
    explanation: 'df.info() is great for a quick overview: column names, data types, non-null count, and memory usage.'
  },
  {
    id: 'pd1-009',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.describe() show?',
    options: ['Column names and dtypes', 'Summary statistics for numeric columns (mean, std, min, max, quartiles)', 'First 5 rows', 'Correlation matrix'],
    correct: 1,
    explanation: 'df.describe() gives count, mean, std, min, 25th, 50th, 75th percentile, and max for each numeric column.'
  },
  {
    id: 'pd1-010',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.isnull().sum() compute?',
    options: ['The total number of cells', 'The count of missing values per column', 'Whether any column is null', 'The sum of all null positions'],
    correct: 1,
    explanation: 'df.isnull() creates a boolean DataFrame; .sum() counts True values per column. Shows exactly where and how many NaNs are in your data.'
  },
  {
    id: 'pd1-011',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What is a Pandas Series?',
    options: ['A 2D table', 'A 1D labeled array with an index', 'A list of DataFrames', 'A NumPy matrix'],
    correct: 1,
    explanation: 'A Series is a 1D array with labels (the index). Think: one column ripped out of a spreadsheet, with row labels attached.'
  },
  {
    id: 'pd1-012',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.columns return?',
    options: ['A list of row labels', 'An Index object containing column names', 'The number of columns', 'Column dtypes'],
    correct: 1,
    explanation: 'df.columns returns an Index object with column names. df.index returns the row labels. Both are Index objects.'
  },
  {
    id: 'pd1-013',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.dtypes return?',
    options: ['The type of the DataFrame', 'A Series showing each column\'s data type', 'The number of different types', 'A list of type names'],
    correct: 1,
    explanation: 'df.dtypes returns a Series indexed by column name with each column\'s dtype. Look out for "object" dtype — usually strings or mixed types.'
  },
  {
    id: 'pd1-014',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'How do you select rows by label using Pandas?',
    options: ['df.iloc[]', 'df.loc[]', 'df.row[]', 'df.label[]'],
    correct: 1,
    explanation: 'df.loc[] selects by label (row/column names). df.iloc[] selects by integer position. Always use one of these for row selection.'
  },
  {
    id: 'pd1-015',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.dropna() do?',
    options: ['Fills NaN with 0', 'Removes rows containing any NaN', 'Removes columns containing any NaN', 'Checks for NaN values'],
    correct: 1,
    explanation: 'dropna() removes rows with any NaN by default. axis=1 drops columns. thresh=n keeps rows with at least n non-NaN values.'
  },
  {
    id: 'pd1-016',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.fillna(0) do?',
    options: ['Removes rows where value is 0', 'Replaces all NaN values with 0', 'Fills empty string columns with 0', 'Returns count of filled values'],
    correct: 1,
    explanation: 'fillna(value) replaces every NaN in the DataFrame with the specified value. You can also pass a dict to fill different columns differently.'
  },
  {
    id: 'pd1-017',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'How do you sort a DataFrame by the "score" column in descending order?',
    options: ['df.sort("score", desc=True)', 'df.sort_values("score", ascending=False)', 'df.order_by("score", reverse=True)', 'df.sort_by("score").reverse()'],
    correct: 1,
    explanation: 'sort_values(by, ascending=False) sorts in descending order. You can sort by multiple columns: sort_values(["col1", "col2"]).'
  },
  {
    id: 'pd1-018',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df["name"].value_counts() return?',
    options: ['The number of unique names', 'Each unique value and how many times it appears, sorted by frequency', 'A boolean for each row', 'The most common name only'],
    correct: 1,
    explanation: 'value_counts() counts occurrences of each unique value. Returns a Series sorted by frequency (most common first). Extremely useful for categorical data.'
  },
  {
    id: 'pd1-019',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What is the "object" dtype in Pandas?',
    options: ['An efficient string type', 'Pandas catch-all for non-numeric data — typically strings or mixed types', 'A pointer to a Python object', 'An empty column placeholder'],
    correct: 1,
    explanation: 'Object dtype stores Python objects. Usually means strings, but could be mixed. It\'s slow and memory-hungry — convert to StringDtype or category for better performance.'
  },
  {
    id: 'pd1-020',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'How do you add a new column "total" to a DataFrame?',
    options: ['df.add_column("total", values)', 'df["total"] = df["a"] + df["b"]', 'df.insert(df["a"] + df["b"], name="total")', 'pd.concat([df, "total"])'],
    correct: 1,
    explanation: 'Simply assign to a new column name: df["new_col"] = expression. Pandas creates the column if it doesn\'t exist.'
  },
  {
    id: 'pd1-021',
    topic: 'Pandas 1',
    difficulty: 'Easy',
    question: 'What does df.reset_index() do?',
    options: ['Sorts the index', 'Moves the current index to a regular column and creates a fresh 0,1,2... integer index', 'Removes the index', 'Renames the index'],
    correct: 1,
    explanation: 'reset_index() is common after groupby, pivot, or concat operations that create non-default indices. The old index becomes a column.'
  },

  // Medium ────────────────────────────────────────────────────
  {
    id: 'pd1-022',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What is the key difference between df.loc[0:4] and df.iloc[0:4]?',
    options: ['No difference', 'loc[0:4] returns 5 rows (inclusive end); iloc[0:4] returns 4 rows (exclusive end)', 'loc uses position; iloc uses labels', 'iloc is faster than loc'],
    correct: 1,
    explanation: 'loc slicing is INCLUSIVE on both ends (label-based). iloc slicing is EXCLUSIVE on the end (position-based, like Python lists).'
  },
  {
    id: 'pd1-023',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'Why does Pandas give a SettingWithCopyWarning?',
    options: ['You tried to set a read-only DataFrame', 'You modified a slice that might be a view, and Pandas can\'t guarantee the original is changed', 'You assigned a float to an integer column', 'You used loc instead of iloc'],
    correct: 1,
    explanation: 'When you filter a DataFrame, the result might be a view or a copy. Modifying it is ambiguous. Fix: df_sub = df[condition].copy() before modifying.'
  },
  {
    id: 'pd1-024',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'df.loc[df["score"] > 90, "grade"] = "A". What does this do?',
    options: ['Filters rows with score > 90', 'Sets "grade" to "A" only for rows where score > 90', 'Creates a new column only if score > 90', 'Raises an error — you can\'t mix boolean and string in loc'],
    correct: 1,
    explanation: 'loc with boolean mask + column name does conditional assignment — the correct way to set values based on a condition. This avoids SettingWithCopyWarning.'
  },
  {
    id: 'pd1-025',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does (df["age"] > 25) & (df["city"] == "Delhi") do?',
    options: ['Returns True or False for the whole DataFrame', 'Returns a boolean Series — True where both conditions are met', 'Raises SyntaxError — use "and" not "&"', 'Filters the DataFrame immediately'],
    correct: 1,
    explanation: '& performs element-wise AND on boolean Series. Use & | ~ instead of and/or/not. Always wrap each condition in parentheses due to operator precedence.'
  },
  {
    id: 'pd1-026',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What is automatic alignment in Pandas Series?',
    options: ['Series are sorted before operations', 'Operations between two Series align by index label before computing', 'Pandas fills missing values automatically', 'The index is always 0, 1, 2...'],
    correct: 1,
    explanation: 'When you add two Series, Pandas matches values by index label. Labels that exist in one but not the other produce NaN. This is Pandas\' defining "superpower."'
  },
  {
    id: 'pd1-027',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.set_index("student_id") do?',
    options: ['Sorts by student_id', 'Makes student_id the row index, removing it from columns', 'Adds student_id as an extra index', 'Resets the index to student_id values'],
    correct: 1,
    explanation: 'set_index(col) promotes a column to the row index. The column is removed from the DataFrame body. Use reset_index() to reverse this.'
  },
  {
    id: 'pd1-028',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.query("age > 25 and city == \'Delhi\'") do?',
    options: ['Raises an error — query doesn\'t support strings', 'Filters rows using an SQL-like string expression', 'Returns a boolean Series', 'Modifies df in-place'],
    correct: 1,
    explanation: 'query() evaluates a string expression. It\'s syntactic sugar for boolean indexing. Use @variable to reference Python variables inside the query string.'
  },
  {
    id: 'pd1-029',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df["city"].isin(["Delhi", "Mumbai"]) return?',
    options: ['Rows where city is Delhi or Mumbai', 'A boolean Series: True where city is Delhi or Mumbai', 'Count of Delhi and Mumbai rows', 'A filtered DataFrame'],
    correct: 1,
    explanation: 'isin() returns a boolean Series. Use it with df[df["city"].isin([...])] to filter. Equivalent to: (df["city"] == "Delhi") | (df["city"] == "Mumbai").'
  },
  {
    id: 'pd1-030',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.rename(columns={"old_name": "new_name"}) do?',
    options: ['Renames column headers as specified', 'Creates a new column named new_name', 'Deletes old_name and adds new_name with NaN', 'Modifies df in-place by default'],
    correct: 0,
    explanation: 'rename(columns=dict) creates a renamed copy. Use inplace=True to modify in-place (though inplace is being deprecated — prefer reassignment).'
  },
  {
    id: 'pd1-031',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.drop("age", axis=1) do?',
    options: ['Drops the row at index "age"', 'Drops the "age" column', 'Drops rows where age is NaN', 'Drops the first axis of the DataFrame'],
    correct: 1,
    explanation: 'axis=1 means "look along columns." You\'re saying: from the columns axis, remove the one named "age." axis=0 would drop a row.'
  },
  {
    id: 'pd1-032',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df["score"].between(60, 90) return?',
    options: ['Rows where score is between 60 and 90', 'A boolean Series: True where 60 ≤ score ≤ 90', 'The count of scores in [60, 90]', 'A filtered DataFrame'],
    correct: 1,
    explanation: 'between(left, right) returns a boolean Series. Both endpoints are inclusive by default. Shorthand for (df["score"] >= 60) & (df["score"] <= 90).'
  },
  {
    id: 'pd1-033',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What happens to integer columns when NaN is introduced in Pandas?',
    options: ['NaN is stored as -1', 'The column is silently converted to float64', 'Pandas raises a TypeError', 'The NaN is silently dropped'],
    correct: 1,
    explanation: 'NaN is a float value in Python. When added to an int64 column, the entire column must upcast to float64. Use pd.Int64Dtype() for nullable integers.'
  },
  {
    id: 'pd1-034',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df["name"].str.upper() do?',
    options: ['Returns the uppercase of the column name', 'Converts each string in the Series to uppercase', 'Checks if strings are uppercase', 'Raises an error on non-string columns'],
    correct: 1,
    explanation: 'The .str accessor vectorizes string methods across a Series. .str.upper() applies str.upper() to every element. Works on object or StringDtype columns.'
  },
  {
    id: 'pd1-035',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.assign(new_col=df["a"] + df["b"]) return?',
    options: ['Modifies df in-place', 'Returns a new DataFrame with new_col added', 'Raises AttributeError', 'Returns only the new column'],
    correct: 1,
    explanation: 'assign() returns a NEW DataFrame with the specified column added. It\'s the functional/chainable alternative to df["new"] = expression.'
  },
  {
    id: 'pd1-036',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.duplicated().sum() tell you?',
    options: ['Total unique rows', 'Count of duplicate rows (rows that appear more than once)', 'Rows with duplicate column names', 'Sum of all repeated values'],
    correct: 1,
    explanation: 'duplicated() returns a boolean Series — True for rows that are duplicates of an earlier row. .sum() counts how many duplicates exist.'
  },
  {
    id: 'pd1-037',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df.nlargest(5, "salary") return?',
    options: ['5 rows with the largest values across all columns', 'The 5 rows with the highest salary values', 'The 5 largest columns', 'An error — use sort_values().tail(5) instead'],
    correct: 1,
    explanation: 'nlargest(n, col) efficiently returns the n rows with the largest values in col. It uses partial sort — much faster than sorting all rows when n << total rows.'
  },
  {
    id: 'pd1-038',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does df["col"].astype("category") do?',
    options: ['Converts to a Python list', 'Creates an efficient Categorical dtype for columns with few unique values', 'Groups the column by category', 'Sorts the column alphabetically'],
    correct: 1,
    explanation: 'category dtype stores repeated strings as integer codes. For high-cardinality→low-cardinality columns (like gender, city), it can save 90%+ memory.'
  },
  {
    id: 'pd1-039',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What does pd.to_numeric(df["col"], errors="coerce") do?',
    options: ['Converts column to int64 or raises error', 'Converts column to numeric, turning non-parseable values to NaN', 'Forces all values to 0', 'Coerces floats to integers'],
    correct: 1,
    explanation: 'errors="coerce" makes non-numeric strings (like "N/A", "$", ",") become NaN instead of raising an error. Then use isnull() to find the problem rows.'
  },
  {
    id: 'pd1-040',
    topic: 'Pandas 1',
    difficulty: 'Medium',
    question: 'What is the difference between df.copy(deep=True) and df.copy(deep=False)?',
    options: ['No difference', 'Deep copy copies data too; shallow copy only copies the structure/references', 'Shallow copy is 10x faster always', 'Deep=False only copies column names'],
    correct: 1,
    explanation: 'Deep copy (default) creates completely independent data. Shallow copy creates a new DataFrame object but references the same underlying NumPy arrays.'
  },

  // Hard ─────────────────────────────────────────────────────
  {
    id: 'pd1-041',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'What is the exact behavior of s.loc[1:3] when the index is [1, 2, 2, 3]?',
    options: ['Returns rows at positions 1, 2, 3', 'Returns ALL rows with labels 1 through 3 — including both 2s', 'Raises an error due to duplicate labels', 'Returns only the first 2'],
    correct: 1,
    explanation: 'loc on a non-unique index with range slicing returns all rows with labels in [start, stop]. Both label-2 rows are included. Duplicates in index don\'t cause errors by default.'
  },
  {
    id: 'pd1-042',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'Why can\'t you use Python\'s "and" operator with Pandas boolean Series?',
    options: ['Pandas doesn\'t support boolean operations', '"and" requires a single True/False value, but a Series has many — use & instead', 'It works but is deprecated', '"and" returns the wrong dtype'],
    correct: 1,
    explanation: 'Python\'s "and" calls __bool__ which raises ValueError on a Series. The & operator calls __and__ which does element-wise AND. Series is ambiguous as a scalar boolean.'
  },
  {
    id: 'pd1-043',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'What is the performance implication of using object dtype vs StringDtype for a column of 1M names?',
    options: ['No difference', 'Object dtype stores Python string objects (pointers); StringDtype uses Arrow/efficient encoding — 5-10x memory reduction', 'StringDtype is deprecated', 'Object dtype uses less memory for short strings'],
    correct: 1,
    explanation: 'Object dtype stores a Python object pointer per cell. StringDtype (pd.StringDtype()) uses more efficient string storage. For 1M strings, this can mean MBs vs 100s of MBs.'
  },
  {
    id: 'pd1-044',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'df.loc[:, "A":"C"] — what does this select in a DataFrame with columns A, B, C, D, E?',
    options: ['Columns A and C only', 'Columns A, B, and C (label-based inclusive slice)', 'An error — can\'t slice columns with loc', 'Columns between A and C by position'],
    correct: 1,
    explanation: 'loc[:, "A":"C"] is label-based column slicing — inclusive on both ends. Returns columns A, B, and C. This only works if columns are sorted and unique.'
  },
  {
    id: 'pd1-045',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'What is the role of the underlying block manager in a Pandas DataFrame?',
    options: ['It manages database connections', 'It groups columns of the same dtype into NumPy arrays for efficient memory layout', 'It handles multiprocessing', 'It caches groupby results'],
    correct: 1,
    explanation: 'Internally, Pandas consolidates columns by dtype into blocks (NumPy arrays). One float block for all float columns, etc. This enables vectorized operations across same-dtype columns.'
  },
  {
    id: 'pd1-046',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'When is chained indexing dangerous in Pandas (e.g., df["col"][0:5])?',
    options: ['Always — it raises an error', 'It\'s always safe', 'The first indexer may return a view or copy, so the second assignment may not affect the original', 'Only dangerous with iloc'],
    correct: 2,
    explanation: 'df["col"] might return a view or copy (indeterminate). Indexing that result then assigning may or may not modify the original. This is the source of SettingWithCopyWarning.'
  },
  {
    id: 'pd1-047',
    topic: 'Pandas 1',
    difficulty: 'Hard',
    question: 'pd.to_datetime("2025-13-01", errors="coerce") returns?',
    options: ['datetime(2025, 1, 13)', 'NaT', 'Raises ValueError', 'datetime(2025, 12, 1)'],
    correct: 1,
    explanation: 'Month 13 doesn\'t exist. errors="coerce" converts unparseable dates to NaT (Not a Time) instead of raising. Use isnull() or isnat() to find them.'
  },

  // ══════════════════════════════════════════════════════════
  // PANDAS 2 — ADVANCED (65 questions)
  // ══════════════════════════════════════════════════════════

  // Easy ─────────────────────────────────────────────────────
  {
    id: 'pd2-001',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What are the three steps of a GroupBy operation in Pandas?',
    options: ['Read, Process, Write', 'Split, Apply, Combine', 'Filter, Sort, Aggregate', 'Map, Reduce, Collect'],
    correct: 1,
    explanation: 'Every GroupBy follows: (1) Split the DataFrame into groups, (2) Apply a function to each group, (3) Combine the results back together.'
  },
  {
    id: 'pd2-002',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does df.groupby("city")["salary"].mean() return?',
    options: ['The mean of all salaries', 'A Series with mean salary per city', 'A DataFrame of all employees in each city', 'The city with the highest mean salary'],
    correct: 1,
    explanation: 'groupby("city") splits by city; ["salary"] selects that column; .mean() computes the mean per group. Returns a Series indexed by city name.'
  },
  {
    id: 'pd2-003',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does df.groupby("dept") return before any aggregation?',
    options: ['A filtered DataFrame', 'A GroupBy object — no computation has happened yet', 'A dictionary of DataFrames', 'The count of each group'],
    correct: 1,
    explanation: 'GroupBy objects are lazy — they\'re a recipe, not a result. The split happens but the apply step waits until you call .mean(), .sum(), .agg(), etc.'
  },
  {
    id: 'pd2-004',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does pd.concat([df1, df2]) do?',
    options: ['Merges df1 and df2 by matching keys', 'Stacks df1 and df2 vertically (adds more rows)', 'Stacks df1 and df2 horizontally (adds more columns)', 'Returns whichever is longer'],
    correct: 1,
    explanation: 'concat() by default stacks along axis=0 (vertically). Use axis=1 for horizontal stacking. It doesn\'t care about matching keys — just arranges them physically.'
  },
  {
    id: 'pd2-005',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What is the default join type in pd.merge(df1, df2)?',
    options: ['outer', 'left', 'inner', 'right'],
    correct: 2,
    explanation: 'pd.merge() uses inner join by default — only rows with matching keys in BOTH DataFrames are kept. Use how="left", "right", or "outer" for other join types.'
  },
  {
    id: 'pd2-006',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does df.fillna(method="ffill") do?',
    options: ['Fills with the mean of each column', 'Forward-fills: propagates the last valid value to fill NaN', 'Fills with 0', 'Fills with the first non-null value of each column'],
    correct: 1,
    explanation: 'ffill (forward fill) carries the last valid value forward into NaN positions. Useful for time series where yesterday\'s value is a good estimate for missing today.'
  },
  {
    id: 'pd2-007',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does df["date"].dt.year extract?',
    options: ['The string "year" from the date column', 'The year component of each datetime value', 'Raises AttributeError — .dt is not a method', 'The number of years in the date range'],
    correct: 1,
    explanation: 'The .dt accessor exposes datetime properties on a Series of datetime64 dtype. .dt.year, .dt.month, .dt.day, .dt.weekday, .dt.hour, etc.'
  },
  {
    id: 'pd2-008',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does pd.to_datetime(df["date_col"]) do?',
    options: ['Converts strings to Python date objects', 'Converts a column of date strings into datetime64 dtype', 'Extracts the date from a datetime', 'Formats dates as strings'],
    correct: 1,
    explanation: 'pd.to_datetime() parses strings, ints, or other date representations into datetime64[ns]. Essential before using .dt accessor or resample().'
  },
  {
    id: 'pd2-009',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does df.groupby("dept").agg({"salary": "mean", "age": "max"}) return?',
    options: ['A Series with one value per department', 'A DataFrame with mean salary and max age per department', 'An error — agg can only take one function', 'The raw data grouped by dept'],
    correct: 1,
    explanation: 'agg() with a dict applies different functions to different columns. Perfect for creating multi-statistic summary tables.'
  },
  {
    id: 'pd2-010',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does melt() do to a DataFrame?',
    options: ['Removes missing values', 'Converts from wide format (many columns) to long format (fewer columns, more rows)', 'Sorts rows by column values', 'Merges two DataFrames'],
    correct: 1,
    explanation: 'melt() unpivots: it takes column headers and turns them into values in a single column. Wide → Long. The inverse of pivot_table().'
  },
  {
    id: 'pd2-011',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does NaT represent in Pandas?',
    options: ['Not a Table', 'Not a Time — the datetime equivalent of NaN', 'Natural Type', 'Null at Time'],
    correct: 1,
    explanation: 'NaT (Not a Time) is the missing value sentinel for datetime64 columns, just as NaN is for float columns. isna() detects both.'
  },
  {
    id: 'pd2-012',
    topic: 'Pandas 2',
    difficulty: 'Easy',
    question: 'What does df.resample("M").sum() require?',
    options: ['A MultiIndex', 'A DatetimeIndex set as the DataFrame index', 'A column named "date"', 'Monthly data'],
    correct: 1,
    explanation: 'resample() requires a DatetimeIndex. If dates are in a regular column, first: df = df.set_index("date_col"). Then resample() compresses to the specified frequency.'
  },

  // Medium ────────────────────────────────────────────────────
  {
    id: 'pd2-013',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What is the key difference between groupby().agg() and groupby().transform()?',
    options: ['They produce the same result', 'agg() reduces each group to one row; transform() keeps the same number of rows as the original', 'transform() is faster than agg()', 'agg() works on all columns; transform() works on one'],
    correct: 1,
    explanation: 'agg() compresses: N groups → N rows. transform() broadcasts: each row gets its group\'s result, keeping the original N rows. Transform is key for adding group stats to each row.'
  },
  {
    id: 'pd2-014',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'How do you add each employee\'s department\'s average salary as a column?',
    options: ['df["dept_avg"] = df.groupby("dept")["salary"].mean()', 'df["dept_avg"] = df.groupby("dept")["salary"].transform("mean")', 'df["dept_avg"] = df["dept"].map(df.groupby("dept")["salary"].mean())', 'Both B and C are correct'],
    correct: 3,
    explanation: 'Both transform("mean") and .map() with the agg result work. transform is direct; map explicitly maps each dept to its mean. Both produce a same-length Series.'
  },
  {
    id: 'pd2-015',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does pd.merge(df1, df2, on="id", how="left") do if an id exists in df1 but not df2?',
    options: ['Drops the row', 'Keeps the df1 row with NaN for df2 columns', 'Raises a KeyError', 'Fills with 0'],
    correct: 1,
    explanation: 'Left join keeps ALL rows from the left DataFrame. Rows with no match in df2 get NaN for all df2 columns. Use indicator=True to explicitly see which rows matched.'
  },
  {
    id: 'pd2-016',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does df.groupby("dept").filter(lambda g: g["salary"].mean() > 50000) return?',
    options: ['A boolean Series', 'A DataFrame with only rows belonging to qualifying departments', 'The list of qualifying department names', 'The mean salary for qualifying departments'],
    correct: 1,
    explanation: 'filter() keeps or drops entire groups based on a condition. It returns the original rows — not aggregated — just filtered by which group they belong to.'
  },
  {
    id: 'pd2-017',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does pd.pivot_table(df, values="sales", index="city", columns="month", aggfunc="sum") create?',
    options: ['A long-format table with city and month columns', 'A cross-tabulation with cities as rows, months as columns, and sum of sales in cells', 'A sorted table by total sales', 'An error — pivot_table needs a MultiIndex'],
    correct: 1,
    explanation: 'pivot_table is groupby + reshape. index=rows, columns=column headers, values=what to put in cells, aggfunc=how to aggregate. Perfect for creating Excel-style summary tables.'
  },
  {
    id: 'pd2-018',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What is the difference between pd.concat([df1, df2], ignore_index=True) and pd.concat([df1, df2])?',
    options: ['No difference', 'ignore_index=True resets the index to 0, 1, 2... instead of preserving original indices', 'ignore_index=True is faster', 'ignore_index=True only works for identical DataFrames'],
    correct: 1,
    explanation: 'By default, concat preserves original indices — you often get duplicates (both DataFrames might have index 0, 1, 2...). ignore_index=True creates a clean sequential index.'
  },
  {
    id: 'pd2-019',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does df["value"].rolling(7).mean() compute?',
    options: ['The mean of the last 7 rows only', 'A 7-day rolling average — each point is the average of itself and 6 preceding points', 'Compresses 7 rows into 1 with mean', 'A centered moving average'],
    correct: 1,
    explanation: 'rolling(n) creates a sliding window of n periods. .mean() computes the average in each window. First n-1 values are NaN (not enough data yet). Doesn\'t change the row count.'
  },
  {
    id: 'pd2-020',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What is the Cartesian product problem in pd.merge()?',
    options: ['Merge fails when keys don\'t match', 'If key A appears 3 times in left and 2 times in right, merge produces 6 rows for key A', 'Merge of different dtypes causes errors', 'Outer merge produces duplicate column names'],
    correct: 1,
    explanation: 'Many-to-many joins: every left-key row matches every right-key row. 3 left × 2 right = 6 rows. Almost always a bug. Detect with validate="one_to_many" or check df.shape after merge.'
  },
  {
    id: 'pd2-021',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does df["price"].pct_change() compute?',
    options: ['Cumulative percentage total', 'Percentage change from the previous row: (current - previous) / previous', 'Absolute difference from previous', 'Rank as percentage'],
    correct: 1,
    explanation: 'pct_change() computes (current - previous) / previous. The first value is NaN (no previous). Common for computing day-over-day returns in financial data.'
  },
  {
    id: 'pd2-022',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does df.groupby("city").apply(lambda g: g.nlargest(3, "salary")) return?',
    options: ['Top 3 salaries globally', 'Top 3 salary rows PER CITY', 'Error — apply can\'t return DataFrames', 'A scalar per city'],
    correct: 1,
    explanation: 'apply() with a function returning a DataFrame creates a hierarchical result. Each group\'s top 3 salary rows are kept. The result is a MultiIndex DataFrame.'
  },
  {
    id: 'pd2-023',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does df["date"].dt.to_period("M") convert dates to?',
    options: ['Milliseconds', 'Month periods like 2025-03', 'Integer month numbers', 'Quarterly periods'],
    correct: 1,
    explanation: 'to_period("M") converts datetimes to Period objects representing the month they belong to (e.g., 2025-03). Useful for grouping by month without day precision.'
  },
  {
    id: 'pd2-024',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What does df["val"].shift(1) do?',
    options: ['Shifts values left by 1 column', 'Moves all values down by 1 row — first row becomes NaN', 'Rounds values to 1 decimal', 'Replaces each value with the next'],
    correct: 1,
    explanation: 'shift(n) displaces values by n periods. shift(1) moves data "one step into the future" — commonly used to compute returns: (current - shift(1)) / shift(1).'
  },
  {
    id: 'pd2-025',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'What is the difference between np.where() and df["col"].apply() for creating conditional columns?',
    options: ['No functional difference', 'np.where() is vectorized (C-speed); apply() loops internally in Python — 10-50x slower', 'apply() handles NaN better', 'np.where() only handles numeric data'],
    correct: 1,
    explanation: 'np.where(condition, true_val, false_val) is a vectorized C operation. apply() with a Python lambda loops through each element. Always try np.where() or np.select() first.'
  },
  {
    id: 'pd2-026',
    topic: 'Pandas 2',
    difficulty: 'Medium',
    question: 'When should you use merge() vs concat()?',
    options: ['Always use merge', 'concat() for stacking same-structure data; merge() for joining by shared key', 'concat() for numeric; merge() for strings', 'merge() always; concat() is deprecated'],
    correct: 1,
    explanation: 'concat: physically stacking DataFrames (like appending monthly reports). merge: combining by a shared key column (like SQL JOIN — orders + customers by customer_id).'
  },

  // Hard ─────────────────────────────────────────────────────
  {
    id: 'pd2-027',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'You have daily data and want each row to show the 30-day trailing average AND monthly totals. Which Pandas operations?',
    options: ['Only rolling(30).mean()', 'rolling(30).mean() for trailing average; resample("M").sum() for monthly totals — separate operations', 'resample("30D").mean() for both', 'expanding().mean() for trailing average'],
    correct: 1,
    explanation: 'Different tools for different goals. rolling() preserves daily resolution while smoothing. resample() changes frequency from daily to monthly. They\'re complementary, not substitutes.'
  },
  {
    id: 'pd2-028',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'What is the performance difference between iterrows() and a vectorized Pandas operation?',
    options: ['iterrows() is faster due to Python optimizations', 'Vectorized ops are 100-1000x faster — iterrows loops in Python; vectorized uses compiled C/Fortran code', 'They perform the same on small DataFrames only', 'iterrows() is parallelized automatically'],
    correct: 1,
    explanation: 'iterrows() yields each row as a Series — Python overhead per row (type checking, object creation). Vectorized ops use NumPy\'s C code on contiguous memory. Never use iterrows() for transformation.'
  },
  {
    id: 'pd2-029',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'df.groupby("dept")["salary"].transform("sum") vs df.groupby("dept")["salary"].agg("sum"). What is the shape difference?',
    options: ['Same shape', 'transform returns same rows as df; agg returns one row per group', 'agg returns more rows than transform', 'transform is only for numeric data'],
    correct: 1,
    explanation: 'If df has 10,000 rows and 5 departments: transform returns 10,000 values (each employee has their dept\'s sum). agg returns 5 values (one per dept).'
  },
  {
    id: 'pd2-030',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'What is a MultiIndex in Pandas and when is it useful?',
    options: ['A DataFrame with multiple index columns', 'A hierarchical index that groups rows by multiple levels — enables groupby-like slicing without groupby', 'An index that can store multiple dtypes', 'An index pointing to multiple DataFrames'],
    correct: 1,
    explanation: 'MultiIndex stores multiple levels of row labels. Common output of groupby().agg(). Enables df.loc["city", "dept"] style selection. Use reset_index() to flatten it.'
  },
  {
    id: 'pd2-031',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'What does pd.merge(df1, df2, on="id", how="outer", indicator=True) do?',
    options: ['Validates that all IDs match', 'Creates an outer join AND adds a "_merge" column showing "left_only", "right_only", or "both"', 'Counts matches', 'Creates a boolean mask of non-matching rows'],
    correct: 1,
    explanation: 'indicator=True adds a "_merge" categorical column. Essential for debugging joins — immediately shows which rows matched and which didn\'t.'
  },
  {
    id: 'pd2-032',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'What is the MCAR, MAR, MNAR framework for missing data?',
    options: ['Types of fill methods', 'Missing Completely At Random, Missing At Random, Missing Not At Random — three mechanisms that determine appropriate imputation strategy', 'Acronyms for Pandas fill functions', 'Types of NaN representations'],
    correct: 1,
    explanation: 'MCAR: missing independent of any data (safest to drop). MAR: missing depends on observed data. MNAR: missing depends on the value itself (hardest — often biased if dropped).'
  },
  {
    id: 'pd2-033',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'What does df.pipe(func, arg1) do?',
    options: ['Sends df to a Unix pipe', 'Passes df as the first argument to func — enables clean method chaining', 'Applies func to each row like apply()', 'Filters columns using a pipeline'],
    correct: 1,
    explanation: 'pipe() is the functional chaining tool. df.pipe(f).pipe(g) is cleaner than g(f(df)). Combined with assign(), query(), and groupby, it enables readable transformation pipelines.'
  },
  {
    id: 'pd2-034',
    topic: 'Pandas 2',
    difficulty: 'Hard',
    question: 'What happens when you concat two DataFrames with different columns?',
    options: ['Raises ValueError', 'Missing columns in each DataFrame are filled with NaN', 'Only common columns are kept', 'The shorter DataFrame is repeated to match'],
    correct: 1,
    explanation: 'concat() performs an outer union of columns by default. Each DataFrame\'s missing columns are filled with NaN. Use join="inner" to keep only common columns.'
  },

  // ══════════════════════════════════════════════════════════
  // MATPLOTLIB (45 questions)
  // ══════════════════════════════════════════════════════════

  // Easy ─────────────────────────────────────────────────────
  {
    id: 'mpl-001',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What is the conventional import for Matplotlib\'s pyplot?',
    options: ['import matplotlib', 'import matplotlib.pyplot as plt', 'from matplotlib import plot as plt', 'import pyplot as plt'],
    correct: 1,
    explanation: 'import matplotlib.pyplot as plt is the universal convention. plt is the alias used everywhere in data visualization code.'
  },
  {
    id: 'mpl-002',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.show() do?',
    options: ['Saves the current figure to a file', 'Renders and displays all open figures', 'Shows the figure dimensions', 'Opens the Matplotlib documentation'],
    correct: 1,
    explanation: 'plt.show() renders and displays the figure. In Jupyter notebooks, you often don\'t need it (figures display automatically), but it\'s needed for standalone scripts.'
  },
  {
    id: 'mpl-003',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.hist(data, bins=20) create?',
    options: ['A bar chart with 20 bars', 'A histogram with 20 equal-width bins', 'A scatter plot with 20 points', 'A 20-element frequency table'],
    correct: 1,
    explanation: 'plt.hist() creates a frequency histogram. bins=20 divides the data range into 20 equal intervals. The height of each bar = count of values in that bin.'
  },
  {
    id: 'mpl-004',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.xlabel("Age") do?',
    options: ['Sets the title of the plot', 'Labels the x-axis with "Age"', 'Creates a column named Age', 'Sets x-axis tick values'],
    correct: 1,
    explanation: 'plt.xlabel() and plt.ylabel() label the axes. Always label your axes — unlabeled axes make plots uninterpretable for readers.'
  },
  {
    id: 'mpl-005',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.plot(x, y, "r--") create?',
    options: ['A red scatter plot with dashes', 'A red dashed line plot', 'A right-aligned dashed plot', 'A reversed dashed plot'],
    correct: 1,
    explanation: '"r--" is a format string: "r" = red color, "--" = dashed line. Format strings combine color, marker, and linestyle in one compact argument.'
  },
  {
    id: 'mpl-006',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'How do you add a legend to a Matplotlib plot?',
    options: ['plt.add_legend()', 'plt.legend()', 'plt.key()', 'plt.label_plot()'],
    correct: 1,
    explanation: 'plt.legend() creates a legend. For it to work, each plot element needs a label= argument or you pass labels to plt.legend(["label1", "label2"]).'
  },
  {
    id: 'mpl-007',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.scatter(x, y) create?',
    options: ['A line connecting all x,y points', 'A scatter plot showing each (x, y) pair as a point', 'A filled area between x and y', 'A heat map of x vs y'],
    correct: 1,
    explanation: 'plt.scatter() draws individual points — no connecting lines. Perfect for showing relationships between two continuous variables and spotting clusters or outliers.'
  },
  {
    id: 'mpl-008',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.bar(categories, values) create?',
    options: ['A horizontal bar chart', 'A vertical bar chart', 'A stacked bar chart', 'A progress bar'],
    correct: 1,
    explanation: 'plt.bar() creates a vertical bar chart. Use plt.barh() for horizontal. Use plt.bar(x, height1) then plt.bar(x, height2, bottom=height1) for stacked.'
  },
  {
    id: 'mpl-009',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.title("My Plot") do?',
    options: ['Sets the window title', 'Adds a title above the plot area', 'Creates a text annotation', 'Sets the filename for saving'],
    correct: 1,
    explanation: 'plt.title() adds a centered title above the axes. Use fontsize= to control text size.'
  },
  {
    id: 'mpl-010',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What does plt.savefig("plot.png") do?',
    options: ['Opens a file dialog to save', 'Saves the current figure to disk', 'Shows a preview before saving', 'Creates a backup of plt.show()'],
    correct: 1,
    explanation: 'savefig() writes the figure to disk. Call it BEFORE plt.show() — show() clears the figure. Supports PNG, PDF, SVG, etc. based on file extension.'
  },
  {
    id: 'mpl-011',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'What is a "Figure" in Matplotlib?',
    options: ['A single line or bar in a plot', 'The entire window/canvas that contains all plot elements', 'The axes and labels only', 'A collection of related datasets'],
    correct: 1,
    explanation: 'A Figure is the top-level container — the whole canvas. It can contain multiple Axes (subplots). An Axes is the actual plot area with x/y axes, data, labels.'
  },
  {
    id: 'mpl-012',
    topic: 'Matplotlib',
    difficulty: 'Easy',
    question: 'Why is data visualization preferred over just using summary statistics?',
    options: ['Visualizations are always accurate; statistics are not', 'Summary statistics can be identical for datasets with completely different shapes (e.g., Anscombe\'s Quartet)', 'Visualizations are faster to compute', 'Statistics require more data'],
    correct: 1,
    explanation: 'Anscombe\'s Quartet shows 4 datasets with identical mean, variance, and correlation — but completely different visual patterns. Summary statistics alone can be deeply misleading.'
  },

  // Medium ────────────────────────────────────────────────────
  {
    id: 'mpl-013',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'How do you create a 2-row, 2-column subplot grid in Matplotlib?',
    options: ['plt.subplots(2, 2)', 'fig, axes = plt.subplots(2, 2)', 'plt.subplot_grid(2, 2)', 'fig = plt.figure(2, 2)'],
    correct: 1,
    explanation: 'fig, axes = plt.subplots(nrows, ncols) returns the Figure and a 2D numpy array of Axes. Access each subplot as axes[row][col] or axes[row, col].'
  },
  {
    id: 'mpl-014',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What is the Object-Oriented (OO) API in Matplotlib vs the pyplot state machine?',
    options: ['No practical difference', 'OO: ax.set_title() — explicit control of figure/axes objects; pyplot: plt.title() — implicit current axes', 'OO is deprecated', 'pyplot is only for notebooks'],
    correct: 1,
    explanation: 'plt.xxx() operates on the "current axes" implicitly. ax.set_xxx() explicitly targets a specific Axes object. OO is preferred for complex plots, scripts, and functions.'
  },
  {
    id: 'mpl-015',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'plt.hist(df.Age, df.BloodPressure], bins=20, color=["blue","green"], alpha=0.4). What does alpha=0.4 do?',
    options: ['Sets the axis transparency', 'Makes bars 40% opaque (60% transparent) so overlapping histograms are visible', 'Filters values below 0.4', 'Sets the figure size'],
    correct: 1,
    explanation: 'alpha controls transparency from 0 (invisible) to 1 (fully opaque). alpha=0.4 makes overlapping bars see-through so both distributions are visible.'
  },
  {
    id: 'mpl-016',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What does plt.tight_layout() do?',
    options: ['Compresses the figure to a smaller size', 'Automatically adjusts subplot spacing to prevent overlapping labels', 'Increases DPI of the figure', 'Aligns all plot elements to a grid'],
    correct: 1,
    explanation: 'tight_layout() automatically adjusts padding between and around subplots. Call it before savefig() to ensure labels and titles don\'t overlap or get clipped.'
  },
  {
    id: 'mpl-017',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What does plt.plot(x, y1, label="Train") followed by plt.plot(x, y2, label="Test") then plt.legend() do?',
    options: ['Plots only y1', 'Overlays both lines on the same axes with a legend', 'Creates two separate figures', 'The second plt.plot() overwrites the first'],
    correct: 1,
    explanation: 'Multiple plt.plot() calls on the same figure add multiple lines. Each label= appears in plt.legend(). This is how you compare train/test curves on one chart.'
  },
  {
    id: 'mpl-018',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'How do you change the figure size in Matplotlib?',
    options: ['plt.size(10, 6)', 'plt.figure(figsize=(10, 6))', 'plt.resize(10, 6)', 'plt.set_size(10, 6)'],
    correct: 1,
    explanation: 'figsize=(width, height) in inches. Create the figure with desired size first: fig = plt.figure(figsize=(10, 6)) or fig, ax = plt.subplots(figsize=(10, 6)).'
  },
  {
    id: 'mpl-019',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What is a histogram bin and why does the number of bins matter?',
    options: ['A data point grouping; doesn\'t affect interpretation', 'A range of values; too few bins hides detail (underfitting), too many creates noise (overfitting)', 'A y-axis label; affects only aesthetics', 'A container of the same value; always fixed'],
    correct: 1,
    explanation: 'Bins divide the x-axis into intervals. Too few bins (e.g., 3) masks the distribution shape. Too many (e.g., 500) creates spiky noise. Goldilocks = enough to see shape clearly.'
  },
  {
    id: 'mpl-020',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What does plt.boxplot(data) visualize in the output?',
    options: ['Mean and standard deviation only', 'Five-number summary: min, Q1, median, Q3, max — plus outliers as points', 'The raw data as a distribution curve', 'A bar for each quartile'],
    correct: 1,
    explanation: 'A boxplot shows: box = IQR (Q1 to Q3), line in box = median, whiskers = extend to 1.5×IQR from Q1/Q3, individual dots beyond whiskers = outliers.'
  },
  {
    id: 'mpl-021',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What does plt.xlim(0, 100) do?',
    options: ['Sets x-axis ticks at 0 and 100', 'Forces the x-axis range to [0, 100]', 'Creates 100 x-axis labels', 'Zooms in on the first 100 data points'],
    correct: 1,
    explanation: 'plt.xlim(left, right) sets the visible range of the x-axis. Similarly plt.ylim(). Useful for zooming in or setting consistent ranges across multiple plots.'
  },
  {
    id: 'mpl-022',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'How do you plot data from a Pandas DataFrame column directly in Matplotlib?',
    options: ['plt.plot(df, "Age")', 'plt.plot(df["Age"])', 'plt.plot(df.to_numpy("Age"))', 'plt.from_dataframe(df, "Age")'],
    correct: 1,
    explanation: 'Pandas Series can be passed directly to plt.plot() — Matplotlib understands them. plt.plot(df["Age"]) plots the Age column with its index as x-values.'
  },
  {
    id: 'mpl-023',
    topic: 'Matplotlib',
    difficulty: 'Medium',
    question: 'What is the difference between a univariate and multivariate plot?',
    options: ['Univariate uses one color; multivariate uses multiple', 'Univariate analyzes one variable; multivariate shows relationships between two or more variables', 'Univariate requires numeric data; multivariate handles categories', 'Univariate is for raw data; multivariate for aggregated'],
    correct: 1,
    explanation: 'Univariate: one variable (histogram, KDE, boxplot). Multivariate: 2+ variables (scatter plot, heatmap, pair plot). Different questions, different chart types.'
  },

  // Hard ─────────────────────────────────────────────────────
  {
    id: 'mpl-024',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'What is Anscombe\'s Quartet and what does it demonstrate?',
    options: ['A famous dataset proving statistics are accurate', 'Four datasets with nearly identical summary statistics but completely different distributions — proves visualization is essential', 'A benchmark for chart rendering performance', 'A set of four color palettes for plots'],
    correct: 1,
    explanation: 'Anscombe\'s Quartet (1973): 4 datasets with the same mean, variance, correlation (≈0.816), and regression line — yet one is linear, one is curved, one has an outlier, one is vertical. Never trust stats alone.'
  },
  {
    id: 'mpl-025',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'In the Figure/Axes architecture, what is the correct way to set a title for a specific subplot in a grid?',
    options: ['plt.title("My Title")', 'axes[0, 1].set_title("My Title")', 'fig.suptitle("My Title", subplot=1)', 'plt.subplot_title(0, 1, "My Title")'],
    correct: 1,
    explanation: 'With OO API: ax.set_title() targets that specific Axes. plt.title() operates on the "currently active" axes — unreliable in loops. fig.suptitle() adds an overall super-title to the Figure.'
  },
  {
    id: 'mpl-026',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'What does plt.hist(data, bins=20, density=True) do differently from bins=20 alone?',
    options: ['Shows only the densest bins', 'Normalizes the y-axis so the histogram integrates to 1 — a probability density estimate', 'Removes empty bins', 'Shows density as a percentage'],
    correct: 1,
    explanation: 'density=True converts counts to density: y = count / (n × bin_width). The total area sums to 1. Required when comparing histograms of different sample sizes.'
  },
  {
    id: 'mpl-027',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'What is a Matplotlib backend and when does it matter?',
    options: ['The color scheme used for rendering', 'The rendering engine — interactive (TkAgg for desktop), non-interactive (Agg for file saving), or inline (for Jupyter)', 'The data loading mechanism', 'The version of Matplotlib'],
    correct: 1,
    explanation: 'Backends control rendering output. %matplotlib inline (Jupyter uses Agg). TkAgg/Qt5Agg for interactive GUI windows. Agg for server-side PNG generation. matplotlib.use("Agg") to set programmatically.'
  },
  {
    id: 'mpl-028',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'How do you create a secondary y-axis in Matplotlib?',
    options: ['plt.secondary_y()', 'ax2 = ax.twinx()', 'plt.plot(x, y, axis=2)', 'ax.add_axis("right")'],
    correct: 1,
    explanation: 'ax.twinx() creates a new Axes sharing the same x-axis with a separate y-axis on the right. ax.twiny() shares y and creates a second x on top. Common for overlaying metrics with different scales.'
  },
  {
    id: 'mpl-029',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'What does fig.set_dpi(300) control and why does it matter?',
    options: ['Display pixels per figure', 'Dots per inch — determines resolution for print/export. 300 DPI = print quality; 72 DPI = screen quality', 'Data points per inch of the plot', 'The number of color levels in the figure'],
    correct: 1,
    explanation: '300 DPI produces sharp, publication-quality images. Screen displays use 72-96 DPI. For journals and reports, always save at 300+ DPI: plt.savefig("fig.png", dpi=300).'
  },
  {
    id: 'mpl-030',
    topic: 'Matplotlib',
    difficulty: 'Hard',
    question: 'What is GridSpec and when is it used over plt.subplots()?',
    options: ['A data loading format', 'A layout tool for creating subplots of different sizes in the same figure', 'A color grid for heatmaps', 'A backend for responsive visualizations'],
    correct: 1,
    explanation: 'GridSpec enables complex layouts: one plot spanning 2 columns, another in a corner. plt.subplots() creates equal-sized grids. Use matplotlib.gridspec.GridSpec for irregular layouts.'
  },

  // ══════════════════════════════════════════════════════════
  // SEABORN (50 questions)
  // ══════════════════════════════════════════════════════════

  // Easy ─────────────────────────────────────────────────────
  {
    id: 'sns-001',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What is Seaborn and how does it relate to Matplotlib?',
    options: ['A replacement for Matplotlib', 'A high-level statistical visualization library built on top of Matplotlib', 'A data manipulation library like Pandas', 'A standalone plotting engine'],
    correct: 1,
    explanation: 'Seaborn is built on Matplotlib and integrates with Pandas. It provides beautiful defaults and high-level functions for statistical plots that would take many lines in raw Matplotlib.'
  },
  {
    id: 'sns-002',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What is the conventional import for Seaborn?',
    options: ['import seaborn', 'import seaborn as sns', 'from seaborn import *', 'import seaborn as sb'],
    correct: 1,
    explanation: 'import seaborn as sns is the universal convention. "sns" comes from "Samuel Norman Seaborn" — a fictional character, making it a fun bit of Python trivia.'
  },
  {
    id: 'sns-003',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.histplot(df["Age"], bins=20) create?',
    options: ['A bar chart of age groups', 'A histogram showing the distribution of the Age column', 'A KDE curve of Age', 'A boxplot of Age'],
    correct: 1,
    explanation: 'sns.histplot() is the Seaborn equivalent of plt.hist(). It creates a histogram with better defaults and optional KDE overlay using kde=True.'
  },
  {
    id: 'sns-004',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.boxplot() visualize?',
    options: ['Frequency distribution only', 'The five-number summary: min, Q1, median, Q3, max — with outliers as dots', 'Only the median and mean', 'A normalized probability distribution'],
    correct: 1,
    explanation: 'Boxplot = box from Q1 to Q3, horizontal line at median, whiskers extending to 1.5×IQR, individual dots for outliers beyond that range.'
  },
  {
    id: 'sns-005',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.scatterplot(x="Age", y="BloodPressure", data=df) create?',
    options: ['A line chart of Age vs BloodPressure', 'A scatter plot showing each row as a point', 'A bar chart grouped by Age', 'A correlation matrix'],
    correct: 1,
    explanation: 'sns.scatterplot() shows the bivariate relationship between two continuous variables. Each row becomes a point at (Age, BloodPressure). Add hue= for color-coding categories.'
  },
  {
    id: 'sns-006',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.heatmap(df.corr(), annot=True) create?',
    options: ['A heat map of row values', 'A color-coded correlation matrix with numeric values printed in each cell', 'A 2D histogram', 'A geographic heat map'],
    correct: 1,
    explanation: 'df.corr() computes pairwise correlations; sns.heatmap() visualizes it as a color grid. annot=True prints the correlation value in each cell. cmap="bwr" gives red-white-blue coloring.'
  },
  {
    id: 'sns-007',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.pairplot(df, hue="Outcome") create?',
    options: ['Two plots compared side by side', 'A grid of scatter plots for every variable pair — diagonal shows distributions', 'A single scatter plot with hue coloring', 'A correlation heatmap'],
    correct: 1,
    explanation: 'pairplot shows all pairwise scatterplots. Diagonal shows each variable\'s own distribution (histogram or KDE). hue= colors points by a categorical variable — great for spotting class separation.'
  },
  {
    id: 'sns-008',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What is a KDE plot and what does it show?',
    options: ['A Key Data Evaluation chart for missing values', 'A Kernel Density Estimate — a smooth continuous curve showing the distribution of a variable', 'A bar chart of sorted values', 'A cumulative distribution function'],
    correct: 1,
    explanation: 'KDE places a small Gaussian bell curve on each data point and sums them up, creating a smooth distribution estimate. Peaks show where data is most concentrated.'
  },
  {
    id: 'sns-009',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.violinplot() show that a boxplot does not?',
    options: ['The outliers', 'The full distribution shape via KDE — in addition to the five-number summary', 'The mean value', 'Confidence intervals'],
    correct: 1,
    explanation: 'Violin plot = boxplot + KDE curve. The "violin" shape shows where data is dense (wide) or sparse (narrow). Boxplot only shows summary statistics; violin shows the full shape.'
  },
  {
    id: 'sns-010',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does the hue parameter do in Seaborn plots?',
    options: ['Sets the plot background color', 'Color-codes data points by a categorical variable', 'Sets the color intensity', 'Applies a color gradient to values'],
    correct: 1,
    explanation: 'hue= takes a column name and colors each point/bar/violin by its category value. Automatically adds a legend. Makes it easy to spot group differences.'
  },
  {
    id: 'sns-011',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.barplot(x="city", y="salary", data=df) display?',
    options: ['Total salary per city', 'Mean salary per city with confidence intervals', 'Count of employees per city', 'A stacked bar of all salaries'],
    correct: 1,
    explanation: 'sns.barplot() shows the mean of the y variable per category by default. The error bars show 95% confidence intervals. Use estimator=np.sum for totals.'
  },
  {
    id: 'sns-012',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What is a univariate plot in EDA?',
    options: ['A plot comparing two datasets', 'A plot that analyzes one variable at a time — histograms, KDE, boxplots', 'A plot of unique values', 'A geographical map of data'],
    correct: 1,
    explanation: 'Univariate = one variable. Used to understand its distribution, range, skewness, and outliers. Histogram and KDE are the most common univariate plots.'
  },
  {
    id: 'sns-013',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.kdeplot(df["Glucose"], color="green", alpha=0.5) do?',
    options: ['Plots glucose as a bar chart', 'Creates a smooth green KDE density curve with 50% transparency', 'Creates a scatter plot in green', 'Normalizes glucose values'],
    correct: 1,
    explanation: 'kdeplot draws the kernel density estimate as a smooth curve. color= sets the curve color; alpha= controls transparency. Plot multiple KDEs on one axes to compare distributions.'
  },
  {
    id: 'sns-014',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What is a normal distribution?',
    options: ['A distribution with values 0 to 1', 'A bell-shaped symmetric distribution where mean = median = mode', 'A uniform distribution by another name', 'A distribution with no outliers'],
    correct: 1,
    explanation: 'Normal distribution is bell-shaped and symmetric around the mean. Mean = Median = Mode. About 68% of data falls within 1 standard deviation of the mean.'
  },
  {
    id: 'sns-015',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does right-skewed mean in a distribution?',
    options: ['Most values are on the right', 'Long tail toward the right; mean > median; most data concentrated on the left', 'The distribution is rotated right', 'Right half has more area than left'],
    correct: 1,
    explanation: 'Right (positive) skew: a few very large values pull the mean rightward. Mean > Median. Example: income distribution — most earn moderately, few earn vastly more.'
  },
  {
    id: 'sns-016',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What is a boxplot\'s IQR and why is it useful?',
    options: ['Infinite Quartile Range — for unbounded distributions', 'Interquartile Range = Q3 - Q1 — the middle 50% of data; resistant to outliers', 'The Internal Quartile Ratio for comparing distributions', 'The average of Q1 and Q3'],
    correct: 1,
    explanation: 'IQR = Q3 - Q1 encompasses the middle 50% of data. Unlike range, it ignores outliers. Whiskers typically extend to 1.5×IQR from Q1/Q3; beyond that = outliers.'
  },
  {
    id: 'sns-017',
    topic: 'Seaborn',
    difficulty: 'Easy',
    question: 'What does sns.jointplot(x="total_rooms", y="total_bedrooms", data=df) show?',
    options: ['Only a scatter plot', 'A scatter plot of the two variables WITH marginal distribution histograms on each axis', 'A joint frequency table', 'Two overlapping histograms'],
    correct: 1,
    explanation: 'jointplot combines a central scatter/bivariate plot with marginal univariate plots (histograms or KDE) along the axes — showing both the joint and individual distributions.'
  },

  // Medium ────────────────────────────────────────────────────
  {
    id: 'sns-018',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What is the difference between sns.histplot() and sns.kdeplot()?',
    options: ['histplot uses bars; kdeplot uses a smooth curve', 'kdeplot is more accurate', 'histplot requires category data; kdeplot requires numeric', 'They are identical'],
    correct: 0,
    explanation: 'histplot creates discrete bins (bars showing counts). kdeplot creates a smooth continuous estimate using kernel functions. kdeplot can obscure the actual data granularity; histplot shows raw frequencies.'
  },
  {
    id: 'sns-019',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does sns.violinplot(hue="ocean_proximity", y="total_bedrooms", data=df) show?',
    options: ['A violin plot for total_bedrooms only', 'Separate violin-shaped distribution plots for each ocean_proximity category', 'A scatter colored by ocean_proximity', 'A stacked bar chart'],
    correct: 1,
    explanation: 'hue= splits into one violin per category. Each violin shows the distribution shape via KDE, plus embedded boxplot elements. Perfect for comparing distributions across categories.'
  },
  {
    id: 'sns-020',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What is the cmap parameter in sns.heatmap()?',
    options: ['Column mapping for label renaming', 'Color map — controls the color palette used in the heatmap', 'Compression algorithm for large matrices', 'Category map for discrete values'],
    correct: 1,
    explanation: 'cmap="bwr" gives blue-white-red for negative-zero-positive. cmap="viridis" is perceptually uniform. cmap="coolwarm" is good for diverging data (correlations).'
  },
  {
    id: 'sns-021',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does the "multiple" parameter control in sns.histplot()?',
    options: ['Number of histograms to overlay', 'How to handle multiple groups: "stack", "dodge", "fill", or "layer"', 'Number of bins multiplier', 'Whether to show multiple y-axes'],
    correct: 1,
    explanation: '"dodge" places bars side by side; "stack" stacks them; "fill" normalizes to percentages; "layer" overlaps with transparency. Controls multi-group histogram layout.'
  },
  {
    id: 'sns-022',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does a correlation value of -0.8 mean in a heatmap?',
    options: ['80% of data is missing', 'Strong negative linear relationship — as one variable increases, the other strongly decreases', 'The variables are unrelated', 'Negative correlation only exists in error'],
    correct: 1,
    explanation: 'Correlation ranges from -1 to +1. -0.8 is strong negative: variables move in opposite directions. Near 0 = weak/no linear relationship. +1 = perfect positive, -1 = perfect negative.'
  },
  {
    id: 'sns-023',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does sns.pairplot(df, diag_kind="kde") change about the pairplot?',
    options: ['Changes diagonal from histograms to KDE curves', 'Shows KDE in scatter plots instead of points', 'Replaces axes labels with KDE values', 'Filters only KDE-compatible columns'],
    correct: 0,
    explanation: 'diag_kind controls the diagonal plots. "hist" shows histograms (default); "kde" shows KDE curves for each variable\'s own distribution along the diagonal.'
  },
  {
    id: 'sns-024',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What is the Z-score used for in EDA?',
    options: ['Sorting data alphabetically', 'Standardizing values to identify outliers — values beyond ±3 std from mean are suspicious', 'Computing correlations between variables', 'Normalizing data to [0, 1]'],
    correct: 1,
    explanation: 'Z = (x - μ) / σ. In a normal distribution, ~99.7% of data falls within ±3σ. Z-scores beyond ±3 are potential outliers. Only valid when data is approximately normally distributed.'
  },
  {
    id: 'sns-025',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'How does a violin plot differ from a box plot in terms of information shown?',
    options: ['Violin plots show more data; box plots are more accurate', 'Box plot shows 5-number summary; violin adds the full distribution shape via KDE — showing bimodality, skew, and data density', 'Violin plots only work for categorical data', 'Box plots show outliers; violin plots don\'t'],
    correct: 1,
    explanation: 'Boxplots summarize with 5 numbers. Violins embed that summary inside a KDE shape — wide areas = more data. Violins reveal bimodal or skewed distributions that boxplots mask.'
  },
  {
    id: 'sns-026',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does sns.heatmap(k, annot=True, cmap="bwr") do with a correlation matrix k?',
    options: ['Plots k as a scatter plot', 'Creates a heatmap where cell colors encode correlation strength and annot=True prints each value', 'Creates a bar chart of correlations', 'Creates a KDE plot for each pair'],
    correct: 1,
    explanation: 'heatmap turns the correlation matrix into a color grid. annot=True overlays the numeric value on each cell. "bwr" = blue (negative), white (zero), red (positive).'
  },
  {
    id: 'sns-027',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What is a multivariate visualization and give an example from Seaborn?',
    options: ['Any Seaborn plot with colors', 'A visualization showing relationships among multiple variables — e.g., pairplot (all pairs) or heatmap (all correlations)', 'A plot with multiple titles', 'Any plot with more than 100 data points'],
    correct: 1,
    explanation: 'Multivariate plots reveal interactions between 3+ variables. Seaborn\'s pairplot, heatmap, and jointplot with hue all qualify. Scatter with hue shows 3 variables at once.'
  },
  {
    id: 'sns-028',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'In sns.barplot(), what do the error bars represent by default?',
    options: ['Standard deviation', '95% confidence interval around the mean estimate', 'Min and max values', 'Standard error'],
    correct: 1,
    explanation: 'Seaborn\'s barplot draws the mean of y per x-category. Error bars = 95% CI (calculated via bootstrapping). They show how precisely the mean is estimated given the sample size.'
  },
  {
    id: 'sns-029',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does the palette parameter control in Seaborn?',
    options: ['The number of colors', 'The color scheme used for different groups or gradient values', 'The background color', 'The axis label colors'],
    correct: 1,
    explanation: 'palette= controls colors for categorical variables when using hue=. E.g., palette=["red","green"] for 2 groups, or palette="viridis" for a continuous gradient.'
  },
  {
    id: 'sns-030',
    topic: 'Seaborn',
    difficulty: 'Medium',
    question: 'What does "left-skewed" mean and give a real-world example?',
    options: ['Long tail to the left; mean < median; example: easy exam scores where most students scored high', 'Long tail to the left; mean > median; example: income distribution', 'Symmetric distribution shifted left', 'A distribution where the mode is on the left'],
    correct: 0,
    explanation: 'Left (negative) skew: tail goes left, most data concentrated on the right. Mean < Median. Example: an easy exam where most people scored 80-100 but a few scored very low.'
  },

  // Hard ─────────────────────────────────────────────────────
  {
    id: 'sns-031',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What does the bandwidth parameter in a KDE plot control?',
    options: ['The number of data points shown', 'The smoothness of the curve — smaller bandwidth = more wiggly (overfitting); larger = smoother (underfitting)', 'The range of x-values plotted', 'The area under the curve'],
    correct: 1,
    explanation: 'KDE bandwidth = size of the Gaussian kernel placed on each data point. Small bandwidth creates bumpy curves that overfit to noise. Large bandwidth creates overly smooth curves that miss real patterns.'
  },
  {
    id: 'sns-032',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'When would you prefer a violin plot over a boxplot in a scientific paper?',
    options: ['Never — journals require boxplots', 'When the distribution is multimodal or strongly non-normal — violin shows the full shape that boxplot\'s 5-number summary hides', 'When sample size is small', 'When the data has no outliers'],
    correct: 1,
    explanation: 'Boxplot hides whether a distribution is bimodal or has unusual shape. Violin reveals this. Critics note violin KDE can appear to add data that doesn\'t exist — especially at the tails with small samples.'
  },
  {
    id: 'sns-033',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What is the difference between sns.jointplot(kind="scatter") and kind="kde"?',
    options: ['No visual difference', 'kind="scatter" shows raw points; kind="kde" shows bivariate density contours in the central panel', 'kind="kde" uses hexbins', 'kind="scatter" can\'t use hue'],
    correct: 1,
    explanation: 'kind="scatter" shows raw (x,y) points. kind="kde" replaces scatter with a 2D KDE contour map — showing density "mountains" without individual points. Better for large overlapping datasets.'
  },
  {
    id: 'sns-034',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What does the Z-score formula Z = (x - μ) / σ standardize, and what is its distribution?',
    options: ['Normalizes to [0, 1]; uniform distribution', 'Standardizes to have mean=0 and std=1; if x is normally distributed, Z follows N(0,1)', 'Converts to percentiles; any distribution', 'Computes outlier probability; Chi-squared distribution'],
    correct: 1,
    explanation: 'Z-score transforms any normal distribution to the standard normal N(0,1). A Z-score of 2.5 means the value is 2.5 standard deviations above the mean — rare (about 0.6% of data).'
  },
  {
    id: 'sns-035',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'Why might you use sns.clustermap() instead of sns.heatmap() for a correlation matrix?',
    options: ['clustermap is faster', 'clustermap reorders rows and columns using hierarchical clustering — grouping similar variables together, revealing hidden structure', 'heatmap doesn\'t support annot=True', 'clustermap works on non-square matrices'],
    correct: 1,
    explanation: 'clustermap applies hierarchical clustering to reorder rows and columns. Correlated variables cluster together visually. This reveals data structure that a non-reordered heatmap hides.'
  },
  {
    id: 'sns-036',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What is Anscombe\'s lesson applied to EDA with Seaborn?',
    options: ['Always use Seaborn over Matplotlib', 'Always visualize data before trusting summary statistics — identical stats can hide completely different data shapes', 'Run Seaborn\'s pairplot first, before any other analysis', 'Use KDE instead of histograms for accuracy'],
    correct: 1,
    explanation: 'Anscombe\'s Quartet has 4 datasets with same mean, variance, correlation — yet completely different patterns (linear, curved, outlier, vertical cluster). EDA visualization must precede modeling.'
  },
  {
    id: 'sns-037',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What does the orient parameter in sns.boxplot() control?',
    options: ['The order of categories', 'Whether whiskers are horizontal or vertical', 'The orientation of labels', 'The direction of correlation shown'],
    correct: 1,
    explanation: 'orient="vertical" (default) draws boxes vertically with categories on x-axis. orient="horizontal" flips it — useful when category names are long and would overlap horizontally.'
  },
  {
    id: 'sns-038',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'How can you combine Seaborn and Matplotlib in the same figure?',
    options: ['You can\'t — they use different rendering engines', 'Since Seaborn is built on Matplotlib, you use fig, ax = plt.subplots() then pass ax= to Seaborn functions', 'Only with plt.subplots(seaborn=True)', 'Call sns.to_matplotlib() first'],
    correct: 1,
    explanation: 'Seaborn functions accept ax= parameter. Create axes with plt.subplots(), then: sns.histplot(data, ax=axes[0]); axes[1].set_title("..."). Full Matplotlib customization available after.'
  },
  {
    id: 'sns-039',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What is the purpose of a pair plot\'s diagonal in terms of EDA?',
    options: ['It\'s decorative and carries no information', 'Shows each variable\'s univariate distribution — essential for understanding individual variable shapes before examining pair relationships', 'Shows the correlation value', 'Shows the regression line slope'],
    correct: 1,
    explanation: 'Diagonal = each variable with itself. Shows skewness, bimodality, range. Off-diagonal = scatter plots showing pairwise relationships. Together they give a complete multivariate picture.'
  },
  {
    id: 'sns-040',
    topic: 'Seaborn',
    difficulty: 'Hard',
    question: 'What does robust=True in sns.regplot() or sns.lmplot() do?',
    options: ['Increases font size', 'Uses robust regression (less affected by outliers) instead of ordinary least squares', 'Validates that the model is statistically significant', 'Adds a confidence band beyond 95%'],
    correct: 1,
    explanation: 'robust=True uses statsmodels\' robust regression which down-weights outlier influence. The regression line becomes more representative of the majority of data rather than being pulled by extreme points.'
  },

];

// ============================================================
// NEW TOPICS TO ADD TO TOPICS ARRAY
// ============================================================
export const NEW_TOPICS = [
  'NumPy Arrays',
  'NumPy Random',
  'Pandas 1',
  'Pandas 2',
  'Matplotlib',
  'Seaborn',
];

// QUESTION COUNT SUMMARY:
// NumPy Arrays:  55 questions (20 Easy, 20 Medium, 15 Hard)
// NumPy Random:  27 questions (12 Easy, 8 Medium, 7 Hard)
// Pandas 1:      47 questions (21 Easy, 19 Medium, 7 Hard)
// Pandas 2:      34 questions (12 Easy, 14 Medium, 8 Hard)
// Matplotlib:    30 questions (12 Easy, 11 Medium, 7 Hard)
// Seaborn:       40 questions (17 Easy, 13 Medium, 10 Hard)
// Total:        ~300 new questions
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