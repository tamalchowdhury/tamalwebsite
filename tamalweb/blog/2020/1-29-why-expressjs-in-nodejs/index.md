---
slug: why-expressjs-in-nodejs
title: Why Express JS is Used in Node JS?
authors: tamalweb
tags: [nodejs, explainer]
---

Whenever you go out and try to learn how to configure a web server with Node JS, you will see that the first thing the instructor does is to install Express. Just like you, I always wondered why most people use Express JS and is there another way to build a server without it?

Why Express JS is used in Node JS? **Express JS is a minimal framework for building web applications in Node JS. It makes the process of creating a server simple with built-in methods that’s why Express JS is widely used and is the de facto framework for Node.**

<!-- truncate -->

Express JS is one framework that rules Node JS development. Express is also a central component for the MEAN stack development (MongoDB, Express, Angular, and Node).

Before Express, it was hard and cumbersome to build out a web server with Node but now you can install Express and run a server within a few lines of codes.

## What does Express JS do in Node JS development?

We know that we can use Node JS to build a backend server. Node provides an http module that you can use to check for routes, parse the payloads and supply content. But as you start building multiple routes, this becomes repetitive and a complicated process. Express JS simplifies the process by providing effective route creation and support for middlewares. It gives you all the tools you will need for route creation, parse payloads, create HTML view pages, work with middleware functions and connect to databases.

So in a nutshell, Express JS is used to build out web applications with Node JS. Why it’s used and instead of other frameworks? Because this is the one framework that 93% of the JavaScript developers like to use (State of JavaScript, 2019).

## What are middlewares in Express JS?

The Express framework works by making use of middlewares. Every route you create with Express JS will have the option to supply a middleware. Middleware is like a simple function that can do a certain task. Let’s say I create a middleware called validateEmail to check if the given email is a valid email address or not. I can pass this middleware into the route and when it reaches that part, it will run the function for validating email addresses. With middle-wares, you can make modular code that you can reuse all over your application that makes it easy for development.

## Can I build a web server with plain Node JS without a framework?

Yes, you can build a web server using only the built-in Node modules without using any frameworks. In fact, people used to build servers using the built-in http and https modules before Express came along. After learning how to build a full-stack web application with Node, I got interested to learn how I can build a server with vanilla Node. The process is a bit complicated and I soon realized how easy Express makes to build a server. If you are interested to learn how to build a server with the built-in modules, you can check out this course from Pirple.

## Does Express JS come built-in with Node JS?

Although Express JS is a hugely popular framework for Node, it does not comes built-in with Node JS. To use this framework you will have to install express via NPM in your node project.

## Why JavaScript developers love Express JS?

As mentioned previously that over 93% of the JavaScript developers are satisfied using the Express framework and would love to keep using it. Other than developer satisfaction, there are some other concrete reasons for using this framework. One big reason for using Express is that the framework is minimal and unopinionated. By this, it means, that with Express you can structure the app any way you want. Let me share what I mean by this.

### Express JS is minimal and unopinionated

According to the official Express JS homepage, it’s a “Fast, unopinionated, minimalist web framework for Node.js” (ExpressJS, 2020). Express uses less overhead in the core framework so that makes it minimal and a good choice for building out large web applications. You don’t want to have a framework that fills your codebase with lots of bloatware that you are never gonna use. With minimal code, the framework will not slow down your entire application.

Express JS is fast because of minimal footprint, but it also helps you build a server quickly. With a few lines of code, you can create a simple web server. With some more lines, you can create routes. When I went to create a server using the core Node modules, I realized how long and how many lines of code and logic it takes just to serve a “Hello World” page. This made me realize how quick and easy it is to build a server with a simple Express JS module.

Express is unopinionated and does not dictate you on how to structure your web applications. With Express you can structure your app any way you want; connect to any type of databases like MySQL, MongoDB or PostgreSQL; pick and use the view engine that you like the most such as pug, ejs, handlebars, mustache and many more.

When you have a specific need to fulfill you can pick another framework that best suits your needs. But did you know that other popular frameworks are actually built with Express?

### Other frameworks are built on Express JS

There are dozens of frameworks out there in the JavaScript ecosystem (Node.js Frameworks, 2020) and you know what, almost all of them are built on top of the core Express JS framework. Popular frameworks such as NestJS, Sails, Feathers JS, Loopback, and Graphql-yoga are among the few that are built using Express (ExpressJS, 2020). Another alternative framework to Node is Koa JS that is created by the same people who created Express JS. This shows the dominance of one single framework in the Node ecosystem.

If you are just getting started with Node and you don’t know where to start, you can safely pick Express JS. Then when you are leveling up and know what exactly you need, you can pick up other frameworks.

### Companies using Express JS

Of the top 10,000 websites on the internet, about 942 (9.42%) of the websites use Express JS (BuiltWith, 2020). This includes sites and services like PayPal, Glassdoor, Windows, Accenture, IBM, FOX Sports, Myntra, Uber, Yandex and many more (ExpressJS, 2020). Large companies using Express in their production application is a good enough reason to choose the Express framework and one of the dominating factors why people use it.

## Conclusion

Express JS makes it super simple to build routes, connect to the database, work with middlewares and serve dynamic HTML pages to build out web servers. It’s a fantastic tool that can speed up your Node development when you are just starting out. So I suggest you go ahead and give Express a try. Here are some steps to help you along the way,

Take a look at the Express JS documentation
Build a Node server using Express JS
Leave a comment on this post and let me know what you are going to build

## References

1. Express Usage Statistics. BuiltWith.com (2020). Retrieved January 29, 2020, from https://trends.builtwith.com/framework/Express
2. Companies using Express in production. Expressjs.com (2020). Retrieved January 29, 2020, from https://expressjs.com/en/resources/companies-using-express.html
3. Frameworks built on Express. Expressjs.com (2020). Retrieved January 29, 2020, from https://expressjs.com/en/resources/frameworks.html
4. The State of JavaScript: Backend Frameworks. State of JS (2019). Retrieved January 29, 2020, https://2019.stateofjs.com/back-end/
5. Node.js Frameworks. (2020). Retrieved January 29, 2020, from http://nodeframework.com/
