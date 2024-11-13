---
layout: note.njk
title: Closures
tags: note
---
A  **closure** is an *inner-function* that can locate variables found in the *outer-function's* scope. 

This example is a basic demostration of a closure.

```js
// This is the outer-function. We will be using its parameter as reference.
const createName = function(first) {
    // Now lets declare an inner-function
    return function(last){
        return ( first + " " +last );
    };
}
firstName = createName("John"); // Stores the inner-function.
firstName("Doe") // Outputs "John Doe"
```

In this example, a closure is used to create a counter.
```js
// An anonymous function called 'createCounter' is created.
var createCounter = function(n) {
    // The 'n' parameter is stored in the 'count' variable. The inner-function can call back to this.
    var count = n;
    // Returns a newly declared function, and...
    return function counter() {
        //... increments the 'count' variable.
        return count++;
    };
};
const counter = createCounter(10);
counter(); // Returns 10
counter(); // Returns 11
counter(); // Returns 12
```
The first return of `n` is not incremented because `n++`  is the postfixed increment operator. If we used a prefixed increment operator `++n`, then `n` would be incremented before the return.

Here is another example of a counter that is more optimized.
```js
var createCounter = function(n) {
    return ()=> n++
};
```