---
slug: learn-javascript-before-nodejs
title: Should I Learn JavaScript Before Learning Node JS?
authors: tamalweb
tags: [nodejs, javascript, explainer]
---

Today I am going to help you save time and hassle by giving you a concrete answer whether you should learn JavaScript before learning Node JS or not. You have learned about Node JS and would like to dive in to become a backend developer. Since you asked, this means you don’t know JS or have little experience with it. Allow me to simplify this for you.

Should I learn JavaScript before Node JS? **If you have taken another programming course before (like Python) then you have the proper programming foundation and can go ahead and start learning Node JS without taking a JavaScript course. You can pick up the fundamentals of JS while you build servers with Node. However, if this is the first time you are programming, then I would highly recommend you take a foundation web development course in HTML, CSS, and JavaScript to get your ABCs down.**

<!-- truncate -->

Other than general programming syntax in JavaScript, there is so much that goes into Node JS. When you are learning Node JS, you are most probably interested in learning how to build the backend services or the REST API of a website. For the rest of this article, I will discuss various programming and JavaScript concepts that go into when working with Node JS. You can check these skills and see if you already have these covered so you can make the right decision whether if you should learn JavaScript before Node or not.

## Programming fundamentals to master before learning Node JS

These are some of the barebone programming fundamentals that every programmer must learn and master before they can take on building anything with code. These concepts are not exclusive to JavaScript and you will notice that you already know these if you have taken a programming course in another language such as Python, Ruby, PHP or Java.

### Basic data types

These are your basic building blocks like strings, integers, and boolean data types. In programming, these are called primitive data types. You should be able to identify each of these data types and be able to assign them to variables. JavaScript has only a few primitive data types and they are String, Numbers (integers and floats) and boolean. In Node JS we make lots of variables and work with all sorts of data types throughout the application.

```js
// Primitive data types in JavaScript
const name = 'Tamal' // String
const age = 100 // Number
const isAwesome = true // Boolean
```

### Control flow

In programming, if, else and else if are what makes the programs versatile. With the basic control flow structure, we make Node JS apps do various tasks depending on various conditions. Depending on the condition we can execute a command or do something else entirely.

```js
// Control flow
if (isAwesome) {
  console.log('Tamal is awesome!')
} else {
  console.log('Ouch!')
}
```

Other than if/else, Node JS also makes extensive use of the switch statement in various cases. So as a programmer you should know your control flow structure to excel in Node.

```js
// Switch statement
switch (color) {
  case 'RED':
    console.log('Stop')
    break
  case 'GREEN':
    console.log('GO')
    break
  case 'YELLOW':
    console.log('WAIT')
    break
  default:
    console.log('DO NOTHING')
    break
}
```

### Loops

Loops like the for-loop, while-loop is what helps make repeating tasks in Node JS. Often times we use loops in a helper utility function. Other times we may use it to do a server action n number of times. As a programmer, you should know your loops really well to start learning Node JS.

```js
// For loop
for (let i = 0; i < 10; i++) {
  console.log('I love you!')
}
// We used let instead of const because
// we have to keep assigning a new number
// to the i variable
```

```js
// While loop
let i = 0

while (i < 10) {
  console.log('I hate you!')
  i++
}
```

```js
// Do while loop
let i = 0;
​
do {
console.log("Are we there yet?");
i++;
} while (i < 10);

```

### Functions

Functions (subroutines or methods) are what Node JS servers are made of. In JavaScript, functions are first-class citizens, which means in JS, functions can take another function as a parameter or can return a new function as output. You should be able to build useful modular functions that can do a set of small tasks to return a value. In Node JS, everything is made out of little functions including the routes, APIs and middlewares.

```js
// Functions
function sumOfTwoNumbers(a, b) {
  let result = a + b
  return result
}

sumOfTwoNumbers(2, 3) // 5
```

### Advance data types, Objects, and Arrays

Objects are heavily used in modern JavaScript and in Node JS, objects are used everywhere. You should have a good idea of how object and array data type works. Objects are called dictionaries or maps in other programming languages. Just like objects, arrays are frequently used.

```js
// Object literal in JavaScript

const person = {
  name: 'Tamal',
  age: 100,
  isAwesome: true,
}

person.name // "Tamal"
```

Arrays are called lists in other languages. You should know the difference between primitive data types and reference data types such as objects and arrays and how to manipulate them.

```js
// Arrays

const fruits = ['apple', 'banana', 'mango']

fruits[0] // "apple"
```

### Composing basic programs

After learning the programming syntax you should also know how to make basic programs. Programming is building stuff and you should be confident in constructing them. After taking a programming course you should practice on your own to make a few practice projects. Being able to build things is very important because, in Node JS, we have to build out a large complex application. A large complex application is nothing more than a combination of a lot of small programs put together so don’t underestimate the power of composing.

### Fixing bugs, finding a solution online

When building the backend of a Node application, you will often run into problems. You should have an open mind to find these bugs and look for solutions online. Often times the issue can be solved with a quick Google search and finding a working piece of code in Stack Overflow. It’s completely okay to do this and professional software developers always Google and search for existing solutions and snippets of code. You should build the quality of not getting frustrated and always finding the solution to your coding problems.

## JavaScript specific concepts that are heavily used in Node JS

At this point, you should be able to decide if you need to take a JavaScript course before taking on Node or not. If you do decide to take a JS course, I want you to double down on these particular skills because these are frequently used in Node JS. It’s possible to learn each of these individual things while you are learning Node JS. For that case, I would suggest you get a rough idea by reading the list below and work accordingly.

### Callbacks

JavaScript is a functional programming language and the way the runtime works, it has the feature to have callbacks. In JS, you can supply another function as a function parameter. A callback is a function that will run at a certain point. You will often encounter functions that include another function that includes another function. If you want to work with Node JS and JavaScript in particular, you will be encountering a lot of callbacks.

```js
// JavaScript can take a function as a parameter

function doSomething(a, b, callback) {
  let result = callback(a, b)
  return result
}

doSomething(2, 2, sumOfTwoNumbers)
```

### Promises

Promises are the modern version of callbacks and they do the same thing that callbacks do but their syntax is very easy to understand. Similar to callbacks, you can have one function do something and it will have another method attached to it when the first function completes the task. Under the hood, promises are doing the exact thing that callbacks do. In Node JS, you will encounter some modules that have callbacks and others have the new promises. As a Node developer, you should have a good grasp of both to make your life easier.

### let and const

These are keywords for declaring variables in JavaScript. Apart from the var keyword, let and const lets you declare variables at the block scope. const is used to create constants, a value that stays the same. let is used to create variables that can be changed. You will find lots of tutorials and courses that make use of const & let and explains to you what to use where. As long as you know what they do, you will be fine in building your server.

```js
let city = 'London'
city = 'Berlin'

const country = 'France'
country = 'Greece' // Error, Can't do that
```

### JavaScript object literals

Objects are heavily used in Node JS application development. You should know the syntax and the shortcuts for working with them. In Node, objects are used for setting configurations for various NPM modules. Objects are also used for making data for your application. You should learn the modern ES6 syntax for object destructuring and prop name shortcuts.

```js
// Object literal in JavaScript

const person = {
  name: 'Tamal',
  age: 100,
  isAwesome: true,
}

person.name // "Tamal"
```

### Anonymous functions and arrow functions (lambda)

Since JavaScript allows functions to be passed into various functions, you will often find anonymous functions used throughout the development. These are unnamed functions that you can use as an expression.

Another popular anonymous function format is the arrow function or lambda functions.

Arrow functions are similar to the ones found in Java and in C# and they did confuse me a lot when I was just starting out. When working with React JS or Node JS, you will find people often using arrow functions instead of regular functions, so it’s good to have an idea of how it works.

```js
// Anonymous function

function(a, b) {
return a + b;
}

// shorthand for anonymous fn

(a, b) => {
return a + b;
}

// shorthand lambda
(name) => name;

// Used inside another function
fruits.map((item) => item);

// .map() is a built in array method
// which takes a function as a parameter
```

### Functional programming

You will come across a lot of functional programming concepts while working with JavaScript and Node JS. If you are unfamiliar with this programming pattern it might seem a little odd at first. In functional programming, functions are treated as if they are regular data types. You can supply functions as arguments to other functions as mentioned earlier. You can also return functions as a return type from another function. Finally, one thing that you will see most often is assigning a function to a variable. You will find that often times anonymous or arrow functions are assigned to regular variables instead of declaring them. So be prepared to encounter all these functional tricks when working with Node JS.

### Array methods

Some of the most common array methods are map, filter, reduce, and forEach. These functions allow developers to do quick array manipulations. Most JavaScript developers like to use array methods instead of the plain old for-loop. All of these methods accept a function as a parameter (arrow functions used most often) so be ready to see them in action.

### Common JS modules

In modern JavaScript development, the code is split into multiple files and you have to explicitly import and export when you want to use the functionality. In React JS, you have import and export directives, however, as of writing this article, they are not fully supported in recent versions of Node JS yet. Node JS uses common JS modules for import-export. Node uses built-in global methods require for including JS files and module.exports for exporting functionality. These are not that difficult and once you use a few times you will get the hang of it.

```js
// import export in JavaScript

import React from 'react'

export default MyComponent

// equivalant in NodeJS context

const express = require('express')

module.exports = router
```

## Final words

Node JS opens the world of possibilities by using a single language JavaScript for both the front end and the back. With a solid foundation in programming concepts and JavaScript, you can be a pro in Node JS in no time. If you already have the foundation covered, I suggest you take on a Node course and learn JavaScript as you go. On the other side, if JS is your first language or you are out of touch for many years, then go and brush up the concepts mentioned in this article. Even if you do go out and spend extra time learning the ropes of JavaScript, the time will be spent well because it’s a great language to keep on your arsenal. That being said, here are some final tips I want to share with you.

- Get the programming basics down first, take a course if you have to
- Focus on the JavaScript specific concepts to have an easy time with Node
- Build something! don’t worry, you will do just fine!
  Comment on this post and let me know what you think
