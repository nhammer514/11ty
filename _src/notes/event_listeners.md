---
layout: note.njk
title: Event Listeners
tags: note
---
**Event Listeners** are functions that are listening for input ( or events ) coming from the HTML page.

In the code below, we created an event listener.  When the event `DomContentLoaded` occurs (page is completely loaded), we will trigger the `init()` function.
```js
window.addEventListener('DOMContentLoaded',init,false);
function init(){
    alert("Hello world!")
};
```

Event Listeners can be used for a variety of different features. For instance, event listeners can be used for buttons from the page:
```js
window.addEventListener('DOMContentLoaded',init,false);
function init(){
    const exampleButton = document.getElementById('testExample');
    exampleButton.addEventListener('click',buttonClicked,false);
}
function buttonClicked(){
    alert("You clicked me!")
}
```

Or as controls for a video game:
```js
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

window.addEventListener('keydown', (event) => {
  if (keys.hasOwnProperty(event.code)) keys[event.code] = true;
});

window.addEventListener('keyup', (event) => {
  if (keys.hasOwnProperty(event.code)) keys[event.code] = false;
});
```