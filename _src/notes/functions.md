---
layout: note.njk
title: Functions
tags: note
---
**Basic Syntax:** Standard way of writing functions.
```js
function f(a,b){
    const sum = a + b;
    return sum;
}
console.log(f(1,5)); // Returns 6
```
You can use `...arg`

**Anonymous Syntax:** Variable is name of function. 
```js
var f = function(a,b){
    const sum = a  + b;
    return sum;
}
console.log(f(1,5)); // Returns 6
```

**Immediately Invoked Function Expression (IIFE):** This form of function syntax allows for the encapsulation of a variable within a new scope. 
```js
const result = (function(a,b){
    const sum = a + b;
    return sum;
})(1,5);
console.log(result); // Returns 6
```

**Arrow Syntax:** A way to declare functions. However, it is used in more unique circumstances.
```js
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(1,5)); // Returns 6
```

Arrow syntax is different from function syntax because:
- More minimalistic. Useful for single-line functions.
- No automatic hoisting. You can use the function after it was declared. Good for readability.
- Cannot be bound to `this`, `super`, and arguments can be used as a constructor.

**Omit Return:** Shorter option for writing functions. You can omit the `return` keyword.
```js
const f = (a, b) => a + b;
console.log(f(1,5)); // Returns 6
```