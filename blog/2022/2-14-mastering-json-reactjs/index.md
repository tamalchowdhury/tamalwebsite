---
title: Mastering JSON in ReactJS
slug: json-reactjs
authors: tamalweb
tags: [reactjs]
---

When building web apps, you will come across dynamic data created by your app or fetched by a third-party API. JSON is the universal data format for software, so if you master JSON, you will be a dangerous frontend engineer.

My article is all about mastering JSON with ReactJS so strap in!

<!-- truncate -->

## What is JSON in ReactJS?

**JavaScript Object Notation** is part of the core JavaScript language, not ReactJS. Since React is a JS library, it can access everything that the language supports. This data format is universal and can be used in any programming language or platform for data exchange from Python, PHP, Kotlin to Ruby, you name it.

In JavaScript, there is a global object called `JSON` which gives you only two methods to work with its data format:

- `JSON.parse()`
- `JSON.stringify()`

JSON is just a simple JavaScript object where the properties and values are wrapped around double-quotes.

```json title=freddy.json
{
  "Title": "Friday the 13th",
  "Year": "2009",
  "Rated": "R",
  "Released": "13 Feb 2009",
  "Runtime": "97 min",
  "Genre": "Horror, Mystery, Thriller",
  "Director": "Marcus Nispel"
}
```

This way we can easily send the object as a long string of text. And as you know, in computers, text take so little disk space.

`{"Title":"Friday the 13th","Year":"2009","Rated":"R","Released":"13 Feb 2009","Runtime":"97 min","Genre":"Horror, Mystery, Thriller","Director":"Marcus Nispel"}`

You might notice, JSON looks just like JS objects.

A JavaScript object is a combination of other primitive data types like String, Number, and Boolean.

```js title=script.js
const jason = {
  name: 'Jason Voorhees',
  age: 74,
  hasKilled: true,
  birthday: 'June 13, 1946',
}
```

Objects can also contain other objects and arrays, making them complex objects.

When you transform a JS object into JSON, all of it's properties and values will be wrapped in double quotes `" "` (except numbers and boolean).

**Original JS object:**

```js title=data.js
const person = {
  name: 'Jason Voorhees',
  age: 74,
  hasKilled: true,
  birthday: 'June 13, 1946',
}
```

**Converted JSON:**

```json title=data.json
{
  "name": "Jason Voorhees",
  "age": 74,
  "hasKilled": true,
  "birthday": "June 13, 1946"
}
```

Let's talk about what are some basic operations with this format in Reactjs,

How to Read JSON Data in React?

To read data from JSON, you have to convert it into an object using the JSON.parse() method. When you receive some JSON from an API or from a file, it's like a long piece of text (String data).

Since every JSON data is wrapped around a pair of curly braces {}, JSON.parse() will always return an object with properties you have to access.

Here's how to read data from JSON:

fetch().then(res => res.json())

When you get a response back from the server, often times the response data also contains a few header info like status, messages, etc.

It depends on how the API designer has created the JSON response. There will be a data property with the actual data you are looking for.

Tip: Since JSON responses can vary from API to API, it's advised to do a console.log() to check the shape of the JSON response. You can also open it on a new tab and explore it using a browser extension called JSON Viewer.

Here, I am calling this example API, getting the JSON response back, and converting it to an object by parsing it.

Now that I have the data saved in a variable, the next task would be to save this data in a state for my React app to display.

How do I Show JSON in Reactjs?

To show JSON data in Reactjs, you have to store the parsed data in your local state and let the app handle the display of the data. Often times when we get some data back from the API, the data is an array of objects. We can cycle through each of the objects using the Array.map() method and display them with our own react component.

{items.map(item => <Component key={item.slug} slug={item.slug} title={item.title} />)}

This is a common pattern you will see in React: get the data in JSON, convert data array in the local state, then React will render the components using the map method.

How do I show JSON in Reactjs? (Literally)

When you want to show the JSON data as is in your React app, you can simply wrap this data inside a code block like this: <code>{data}</code>

Giving you a nice code output.

But let's not get sidetracked, and talk about how can you create JSON and send it to the backend,
