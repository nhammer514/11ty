---
layout: note.njk
title: Objects
tags: note
---
**Objects** are constructs that hold data and functions.

Here is a fun, game-like example of a function demostrates objects:
```js
// The player has two hundred dollars.
var playerMoney = 200;
// This function allows for the creation of items, as it returns an object.
function createItem(name, description, value){
    return{
        name: name,
        value: value
    };
}
// Stores the object in this variable.
const itemSoda = createItem("Soda", 50);
//The player buys the item, with its associated value subtracted from the player.
playerMoney -= itemSoda.value; // Return 150;
```
**Classes** are templates for JavaScript objects. 

Here is another version of the previous example that utilizes classes.

```js
var playerMoney = 200;
// The following code-block is a blueprint for "Item" objects.
class Item {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
};
// Creates a new object based off the item class, and stores it inside a variable.
const itemSoda = new Item("Soda", 50)
playerMoney -= itemSoda.value; // Return 150;
```