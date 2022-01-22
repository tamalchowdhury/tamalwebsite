---
slug: what-is-nodejs
title: What is Node JS? Explained in Simple Terms For Beginners
authors: tamalweb
tags: [nodejs, explainer]
---

Node JS is the first backend platform I learned and it helped me build full-stack applications. In this article, I will talk a little about Node and the concepts that go around this runtime environment. So to answer your question in simple terms,

What is Node JS? **Node JS is a runtime environment for the JavaScript language similar to how you would use a Python interpreter to run Python code on your computer. Node JS is being used to run and execute JavaScript code in the server to build backend services.**

According to the official Node JS website, _“Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser”_ (Node.js org, 2020).

Right out of the bat you must have figured it out what open-source and cross-platform means.

<!-- truncate -->

**Open-source** means the source code of Node JS is open to the public (like Linux) and everyone can contribute, modify and use this software without paying any license fee. So if you make an application with Node JS, you won’t have to pay any money for the core Node JS runtime.

**Cross-platform** means Node JS can run in all the major operating systems like Windows, Mac OS, Linux, and others so it doesn’t matter what kind of computer you own, it will still run. You can host a Node JS application in both Linux or Windows servers for deployment.

Now that the obvious is out of the way, I am going to explain the other important parts to help you understand what the Node runtime environment is and why you should care to use it. As part of the explanation, I am also going to outline other technical aspects of the runtime like the asynchronous, event-driven and non-blocking aspect of Node JS.

## What is the Node JS runtime environment?

As mentioned before, Node JS is a runtime environment that will execute JavaScript code, but why is it so special?

Before the invention of Node JS, JavaScript language was only confined to the browser like in Google Chrome, Firefox, and Opera. Before Node, we could only run JavaScript in the browser to do little interactions and effects. It didn’t have any way to access the file system and that’s one reason why we don’t have any print command in JavaScript.

Node JS took the V8 engine (the JavaScript engine of Google Chrome) and turned that into a standalone JavaScript execution environment on the desktop.

So in a nutshell, the Node JS runtime environment allows you to run and execute JavaScript code outside of the browser environment. It allowed JS to read and write files and talk to the internet independently. This gave the opportunity to make web servers with Node JS and currently it’s a popular choice for making full-stack applications.

JavaScript language brought many new advantages to backend development with its new runtime environment. Here let me outline some of the technical features of the Node runtime environment that makes it different than others.

### Asynchronous

“In a synchronous programming model, things happen one at a time” (Eloquent JavaScript, 2020, para. 4). Compared to that, in an Asynchronous model, multiple things can happen at the same time.

Node JS has one single thread to deal with the requests and another one as the main working thread.

When a user requests something, Node JS will send that request to the thread and get back to the main worker thread. If another user does another request, it will put the next request to the same thread and get back to working again.

After some time, the request will return and Node will be notified. Node will then take the response and give it to the user.

All this process can happen in one single thread one after another and this the gist of asynchronousness in Node JS.

In other programming environments such as Python and PHP, when someone makes a request, the entire thread gets blocked. If another user needs to make a new request, the system will have to create a new thread for the operation.

Node JS works with a single thread and can get notified for fulfilled requests via events. Let me explain what it means what event-driven means in Node JS.

### Event-driven

Since Node JS is sending the request to another thread for completion, it has to know how something returns to it. Node JS will always keep listening to various events. This is similar to how operating systems work. An operating system will listen for various events like a mouse click, keyboard key press and so on. When an event comes, the system will stop what it was doing and put its attention to the event at hand and do what is required.

Similarly, in Node JS, it can do the assign tasks and still keep listening to other events. When a user clicks or something has returned from the thread, it will do what’s needed to do. This event-driven mechanism is what makes it possible for Node to work with a single thread and be super fast.

### Non-blocking

Node JS does not sleep because it can do things one after another. It’s sort of like juggling where one item is always in the air. In Node’s case, it will juggle with one hand and keep all the other things in the air (other thread.)

When you make a request to save something to the database, you know it’s going to take some time to write. Node is going to move on to the next task at hand. This is the basics of JavaScript’s non-blocking computation model.

If you write this command in python: `sleep(5)`

It’s going to literally sleep for five seconds and won’t be available to do anything within this time. This is an example of a blocking code. If you are making a server were 10,000s of users are making requests, this means for five seconds the server will not be able to serve these people.

One the other hand, this is an equivalent code in Node: setTimeout(doSomething, 5000);

Here Node will do that function after five seconds, but it will never go to sleep. This way it will still be able to handle all the other requests that come to it.

### Node Package Manager, NPM

Node JS works with packages similar to how Java and Python has their own packages. NPM is a public repository where all the developers can contribute packages.

NPM comes built-in with Node JS and when you are building applications, you are going to use NPM commands to install and work with packages.

With this you will have to enter Linux like commands for installing various packages like this is how you would install the express js framework:

```js
npm install express
```

## Next steps

- Download Node JS and start using it
- Start building something with it
- Leave a comment in this post and let me know what you think

## References:

1. Node.js. (2020). About Node JS. Retrieved February 27, 2020, from https://nodejs.org/en/about/
2. Eloquent JavaScript. 2020. Asynchronous Programming. Retrieved February 27, 2020, from https://eloquentjavascript.net/11_async.html
