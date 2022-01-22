---
slug: null-javascript
title: What is null in JavaScript?
authors: tamalweb
tags: [javascript]
---

Every programming language has at least one bottom value but JavaScript has two: null and undefined (Crockford, 2017). We are going to focus on null for this article because there is so much that’s going on behind the scenes.

What is null in JavaScript? **null means no-value. When there is no value assigned to an object variable, it means the object doesn’t exist. If you want to delete the contents of an object from memory, you would assign that object to null.**

By the way, null is not exclusive to just JavaScript, I have seen it on Java, C#, SQL and it works the same way it does in JavaScript.

An object is a combination of primitive values like string, number, and boolean types. Since objects are special types of data, we also need a special concept of assigning no-values. This is where null comes in.

In this article, I will tell all about the null type and how it works in JavaScript and programming in general. But before I can fully explain to you about the null type, let me give you an overview of the types in JavaScript.

## Primitive Types and Reference Types

A primitive type of data is a number and boolean. In JavaScript, the string data type is also considered a primitive type (spoilers: it’s actually not). This is because a string “Hello World” is actually a string of characters: ‘H’, ‘e’, ‘l’, ‘l’, ‘o’… and so on. A single character ‘T’ is a primitive type and the string is like an array of all these characters together.

This is why In Java (which is different than JavaScript), the String data type is actually an object. The same thing applies to JavaScript but JS is built in such a way that the string type is treated like primitive values.

So in short, it’s safe to say these are primitives in JavaScript: string, number, boolean.

```js
var name = 'Tamal'
var age = 100
var isMale = true
```

### So what are primitive types?

A primitive type is where the variable actually holds the data.

If I open the variable age, I will find the exact value there.

`age shows 100`
But watch what happens when I do the same for objects.

```js
var person = {
  name: 'Tamal',
  age: 100,
  isMale: true,
}
```

If I open the variable person, I will see this memory address and not the actual data.

`person shows 0x000001`

This is where primitive types and reference types differ.

As I mentioned earlier, an object is a custom data type made out of multiple primitive data types or even other objects.

An array is a collection of other primitive types like a list of names, or a list of numbers. So it’s an object too. When you check the type of an array, you will see object:

```js
var list = [1, 2, 3]
typeof list
// 'object'
```

Since each of the object is a custom type, a variable space is not enough to hold all the items and the configuration in it.

The solution: references.

The data items will be stored somewhere in the computer memory and the variable will only store the address to that memory location.

This variable will only reference to that memory location, thus it’s called a reference type (Sierra & Berts, 2005).

But how this all relate to the null type?

Now that we know there are two types in JavaScript, we can set the initial starting values of the primitive types like this:

```js
var name = ''
var age = 0
var isMale = false
```

But when it comes to objects, we can’t simply say person = {} because an empty object literal is still taking up memory somewhere and it’s not truly empty.

To fully erase the object from the memory, we will have to assign null to that object. But before you do that, let me tell you why doing this matters.

## Referencing a Reference type Variable

Since the value of a primitive type lives inside the variable, it’s very easy to copy a variable.

```js
var hero = 'Superman'
var memberName = hero
// change the value
memberName = 'Batman'
// Check them:

// hero
// >> "Superman"
// memberName
// >> "Batman"
// But we can’t do the same thing with reference types.
```

If we try to do this and make changes to the second object, you will notice that the original object is also changing.

```js
var person = {
name: "Tamal",
language: "JavaScript"
}
​
var member = person;
// Now both objects have the same contents
// And they are referencing to the same object
​
// Making changes:
member.name = "Karen";
member.language = "C#";
​
person

// {name: "Karen", language: "C#"}
// member
// {name: "Karen", language: "C#"}
// So you can see two variables are referencing the same object.
```

This is why it’s important to know that the variable is actually holding the reference to the object. When you copy this variable, only the reference is being copied.

I am not going to cover how to copy objects because we are interested in the null value and how it comes into play.

### Garbage Collection

All these variables take up some space in memory and there must be some way to free up the memory by doing some cleanups. When you are done with some objects, you can feel free to clean up that object so that the memory can be used for other things.

In high-level languages like in JavaScript, you don’t have to worry about this garbage collection, it happens automatically when the program stops using the variables (Sierra & Berts, 2005).

You will notice that you can create an object in JavaScript but can’t delete it.

```js
var person = {}
// there is no delete option
```

But you can with the null value.

When you assign null to a variable it will unlink the reference to the memory.

```js
person = null
// the object is deleted forever
```

The JavaScript (and Java) garbage collector is set up in such a way that whenever it finds an object that is not being referenced by any other variables, it will delete it.

So in a nutshell, the null value is used whenever you want to completely delete an object from the memory, and make sure no other variable is referencing that object.

Now that you know what null is and how it’s used, let me outline some interesting things about the null value in JavaScript.

### Why typeof null is object?

When you check the type of null, you will see it’s an object. But null is not an object, it’s a primitive value. This is a bug in JavaScript and can’t be fixed (Crockford, 2017). On the other hand, null is only used for objects in JavaScript, so it’s useful if you adapt your program according to it.

typeof null

// "object"
// // this is a bug in JavaScript

### Is null and undefined the same in JavaScript?

null and undefined are not the same because null is a lack of value and undefined means the variable is not been assigned. In JavaScript, null is used for object types and undefined for string, number, boolean and other primitive types.

// loose equality
null == undefined

// true
// ​
// // strict equality
// null === undefined
// false

### How to check for null in a block?

// typeof person will return object and it will still return an object when set to null. To bypass this, you have to type this: person == null to check if the object exists or not.

```js
if (person == null) {
  // do something
}
```

## Key Takeaways

null is a primitive value that can be assigned to an object.
When you assign null to an object and no other variable is referencing to that object anymore, it will be deleted from the memory permanently.
In JavaScript, null is buggy and returns an object type when checked.
There are two bottom values in JavaScript, null and undefined, but they are not the same.
If this article helped you then feel free to leave a comment and let me know what you think.

## References:

1. Crockford, D. 2017. The Post JavaScript Apocalypse, ConFoo Developer Conference. Retrieved from https://youtu.be/NPB34lDZj3E?t=742 (Timestamp: 12:22)
2. Sierra, K., Berts, B. 2005. Head First Java. Retrieved from https://www.amazon.com/Head-First-Java-Kathy-Sierra/dp/0596009208
