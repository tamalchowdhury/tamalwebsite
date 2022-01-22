---
slug: which-nodejs-version
title: Which Node JS Version Should I Use?
authors: tamalweb
tags: [nodejs]
---

Today I am going to help you pick the correct version of Node JS to use. When you are just getting started and about to download Node JS, you will be presented with 2 confusing versions to choose from. It’s not a big of a deal but for public service here’s my simple answer:

Which Node JS version to use? **16 LTS. You should always use even-numbered versions marked LTS that says “Recommended for Most Users” on the download page. An even number Node version is 14.x.x LTS, 16.x.x LTS, 18.x.x LTS and so on that you should use when learning or deploying your project to a production environment.**

<!-- truncate -->

According to the Node JS blog, “If you are using Node.js in production use an LTS version. LTS release lines focus on stability, extended support and provide a reliable platform for applications of any scale. Most Node.js users and companies are on Long Term Support lines. For those that are currently using Node.js 4.x or Node.js 6.x, we recommend upgrading to Node.js 10” (Nodejs, 2018).

As I mentioned above, picking a Node version is not that of a big deal and you can always upgrade or downgrade versions when needed. If you are learning Node JS by following a tutorial, you can always check the version the instructor has used. You will be safe using a version that is higher than the version used by the instructor.

Now that you know which version to pick when working with Node JS, let me tell you a bit more about the Node version lifecycle.

## What is Node LTS?

LTS stands for Long Term Support and the recommended version for most users. Nodejs org makes new versions frequently with new features, bug fixes, and performance optimizations. As a general rule, we can safely assume that the latest version is always the best version to use. A major node version increments the first number like this: 6.x.x, 7.x.x, 8.x.x, 9.x.x, where the leftmost number is the most significant one and the rest of the numbers are minor changes to the software like 14.15.0.

### Major versions are current for 6 months

You will notice that in the Node download page you will find two versions, one marked as LTS and the other marked as Current. Instinctively you would want to download and start using the current version of the software. However, this version is not intended for you (the general user) but for the library authors.

Node JS has many uses. Nowadays Node is not only used by the backend developer but it’s also hugely used by the frontend tool developers. Various tools that make it easy to compile code such as Webpack, Gulp, Browserify, and others heavily rely on Node JS. Frontend frameworks like React, Angular, Vue, Svelte are also dependent on Nodejs. Testing frameworks like Jest, Mocha, and Enzyme also make use of the latest features of Node and NPM.

With a new major release of Node, it will allow these library owners 6 month time to download and make their tools compatible with new features and updates.

So in a nutshell, the current odd number Node JS versions such as 13.x.x, 15.x.x, 17.x.x and so on are targeted to the maintainers of various tools.

After 6 months, the odd numbered versions become unsupported, so there is no point in using these versions for development.

### Node LTS versions are good for 30 months (2+ years)

After the first 6 months have passed and library vendors have enough time to test and implement new features into their tools, the even number versions (12.x.x, 14.x.x, and 16.x.x) will enter the LTS or Long Term Support phase. By the time you get access to an LTS version, you can rest assured that all of your favorite NPM tools are tested and supported by this version of Node.

node version timeline
This LTS version will be further supported by the Open JS foundation for the next 30 months (2 and a half years). So if you are building a production application, you will get support for it for the next two years and more. The LTS version guarantees that the software will be maintained and critical bugs will be fixed during this period of time. The Node JS website states that “Production applications should only use Active LTS or Maintenance LTS releases” (Node JS org, 2020).

This all means that if today you start learning with Node JS 16, you are good to deploy a production app with this version till March 2024.

If today you start learning with Node JS 16, you are good to deploy a production app with this version till March 2024CLICK TO TWEET

## What goes into major Node releases?

New Node versions are all about speed, stability, feature updates and bug fixes. With each new version, Node JS is getting faster and better as the technology improves. For example, Node version 10 is 2x faster than Node version 6 (Nodejs blog, 2018), so it’s a good enough reason to always use the latest version. Since Node is built on other technologies, such as the V8 engine and the ECMA script, it has to stay current with new features and improvements.

### V8 Engine

V8 is Google Chrome’s JavaScript engine and the engine that was used to run code in the Node JS runtime. With new updates of the V8 engine, it is important to bring the same level of code execution to Node JS. For this reason, the people at Node will implement new versions of V8 into the Node JS runtime.

### New JavaScript features

As new JavaScript features come up every year, it is important to stay up to date with the current language features and implement them into the Node runtime. As you may know, you can’t use all the latest JS features in Node JS. With each new update to Node, it brings more and more new JavaScript features to the runtime environment.

## Key changes in major Node versions

It’s clear that you should use the latest and greatest LTS version of the Node JS runtime, however, you will often come across old Node versions in apps or used in old tutorials. For that, it’s good to have an idea of some of the key aspects of major Node versions.

### Node 6 implemented ES6

Perhaps the most important update for a JavaScript developer is to be able to use the modern ES6 version. Node 6 implemented the new ECMA Script 6 which is a significant improvement in JavaScript.

ES6 introduced keywords like let and const, arrow functions, destructuring, template literals and many more. In today’s web development, it sucks not to be able to code in ES6. So if you come across a Node tutorial, make sure it’s using version 6 and up.

In fact, 99% of the modern JavaScript features are now supported with Node version 6 and up (Node.green, 2020).

### Node 8 implemented Async Await

Async Await was implemented in Node 8 (Cyren, 2017). Async and Await are special keywords you can use in functions to make them wait for promises. It’s a simpler way to use the promises in your JS code.

Node 10 added promisified fs module
fs is a built-in module in Node for reading and writing to the file system. In the past, we had to use callbacks for working with the file system module but in Node 10, we get the option of promisified fs (Node blog, 2018).

### Node 12 implemented ES6 modules

If you worked with both React and Node, you will notice that in Node, you use the require method to include a module, while in React you use import to do the same. This is because Node JS is still behind when it comes to implementing the latest and greatest JavaScript features. Node 12 introduced experimental use of import and export modules (Node blog, 2019) and I am sure by the time you use Node 14 and up, it will be able to use it with no issues.

## Can I install multiple Node versions on my computer?

Yes, you can use the NVM Node Version Manager app to install and use multiple versions of the Node JS runtime environment. NVM lets you easily switch between Node versions on the fly in your local development machine.

I was using the latest node version on my local computer then sometimes ago I was needed to use the old Node 8 version to run a particular project. I looked around and found NVM for windows.

How to install NVM for Windows computers
Go here to find the latest NVM for Windows releases. This is a separate project that lets Windows users use Node version manager.

At the time of writing this article, this is the latest version (the version you see may be different) but you will see a similar page:

Click on the nvm-setup.zip and download the zip file. Unzip the folder and install the program.

After that, go to your terminal (I use the built-in terminal in VS code)

Type in nvm -v to verify that NVM has been installed on your computer.

Type in nvm list to list all the node versions you have installed on your computer.

At this point, it may show only one version of Node you have installed on your computer.

To install a different version of Node JS, you can type in nvm install `<version_number>` like: nvm install 12.16.1

You can check out this page to see all the previous Node JS versions.

Once you have installed a new version using NVM, once again list them by typing nvm list.

Now you can select a particular Node version by typing: nvm use `<version>` like I did nvm use 8.9.4

Now type in node -v to verify that you are indeed using a different Node JS version:

You can also see that you are using a different NPM version that comes with that particular node installation:

Now you can use a specific version that is required in your project.

Did you know about NVM? Tweet this to your followers and let them know,

You can run multiple versions of Nodejs using NVM (Node Version Manager) –makes the development easier!CLICK TO TWEET

## Final Words

Node JS has two different audiences, the regular developers (us) and the open-source contributors (library authors). And for this reason, Node offers two different versions on their download page. For most cases, it’s safe to just go with the latest LTS version of the Node and if you are following a tutorial, just ask your instructor which version you should be using. Now that it’s the end of this article, here are a few things I want you to do:

- Download the latest 14.x.x LTS version of Node
- Start building something

## References

1. Node.js. (2020). Node Releases. Retrieved January 30, 2020, from https://nodejs.org/en/about/releases/
2. Node.green (2020). Node.js ES2015 Support. Retrieved January 30, 2020, from https://node.green/
3. Cyren, T. (2017). 5 Fantastic Features Shipping with Node.js 8 LTS. Retrieved January 30, 2020, from https://nodesource.com/blog/five-fantastic-features-shipping-with-node-js-8-lts-carbon
4. Node.js. (2018). October Brings Node.js 10.x to LTS and Node.js 11 to Current! Retrieved January 30, 2020, from https://medium.com/@nodejs/october-brings-node-js-10-x-to-lts-and-node-js-11-to-current-ae19f8f12b51
5. Node.js. (2019). Announcing core Node.js support for ECMAScript modules. Retrieved January 30, 2020, from https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663
