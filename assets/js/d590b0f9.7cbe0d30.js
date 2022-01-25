"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[9817],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2127:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return h},toc:function(){return d},default:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={slug:"what-is-nodejs",title:"What is Node JS? Explained in Simple Terms For Beginners",authors:"tamalweb",tags:["nodejs","explainer"]},l=void 0,u={permalink:"/tamalwebsite/what-is-nodejs",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2020/2-27-what-is-nodejs/index.md",source:"@site/blog/2020/2-27-what-is-nodejs/index.md",title:"What is Node JS? Explained in Simple Terms For Beginners",description:"Node JS is the first backend platform I learned and it helped me build full-stack applications. In this article, I will talk a little about Node and the concepts that go around this runtime environment. So to answer your question in simple terms,",date:"2020-02-27T00:00:00.000Z",formattedDate:"February 27, 2020",tags:[{label:"nodejs",permalink:"/tamalwebsite/tags/nodejs"},{label:"explainer",permalink:"/tamalwebsite/tags/explainer"}],readingTime:5.955,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"What is null in JavaScript?",permalink:"/tamalwebsite/null-javascript"},nextItem:{title:"Should I Learn JavaScript Before Learning Node JS?",permalink:"/tamalwebsite/learn-javascript-before-nodejs"}},h={authorsImageUrls:[void 0]},d=[{value:"What is the Node JS runtime environment?",id:"what-is-the-node-js-runtime-environment",children:[{value:"Asynchronous",id:"asynchronous",children:[],level:3},{value:"Event-driven",id:"event-driven",children:[],level:3},{value:"Non-blocking",id:"non-blocking",children:[],level:3},{value:"Node Package Manager, NPM",id:"node-package-manager-npm",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2},{value:"References:",id:"references",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Node JS is the first backend platform I learned and it helped me build full-stack applications. In this article, I will talk a little about Node and the concepts that go around this runtime environment. So to answer your question in simple terms,"),(0,i.kt)("p",null,"What is Node JS? ",(0,i.kt)("strong",{parentName:"p"},"Node JS is a runtime environment for the JavaScript language similar to how you would use a Python interpreter to run Python code on your computer. Node JS is being used to run and execute JavaScript code in the server to build backend services.")),(0,i.kt)("p",null,"According to the official Node JS website, ",(0,i.kt)("em",{parentName:"p"},"\u201cNode.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser\u201d")," (Node.js org, 2020)."),(0,i.kt)("p",null,"Right out of the bat you must have figured it out what open-source and cross-platform means."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Open-source")," means the source code of Node JS is open to the public (like Linux) and everyone can contribute, modify and use this software without paying any license fee. So if you make an application with Node JS, you won\u2019t have to pay any money for the core Node JS runtime."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cross-platform")," means Node JS can run in all the major operating systems like Windows, Mac OS, Linux, and others so it doesn\u2019t matter what kind of computer you own, it will still run. You can host a Node JS application in both Linux or Windows servers for deployment."),(0,i.kt)("p",null,"Now that the obvious is out of the way, I am going to explain the other important parts to help you understand what the Node runtime environment is and why you should care to use it. As part of the explanation, I am also going to outline other technical aspects of the runtime like the asynchronous, event-driven and non-blocking aspect of Node JS."),(0,i.kt)("h2",{id:"what-is-the-node-js-runtime-environment"},"What is the Node JS runtime environment?"),(0,i.kt)("p",null,"As mentioned before, Node JS is a runtime environment that will execute JavaScript code, but why is it so special?"),(0,i.kt)("p",null,"Before the invention of Node JS, JavaScript language was only confined to the browser like in Google Chrome, Firefox, and Opera. Before Node, we could only run JavaScript in the browser to do little interactions and effects. It didn\u2019t have any way to access the file system and that\u2019s one reason why we don\u2019t have any print command in JavaScript."),(0,i.kt)("p",null,"Node JS took the V8 engine (the JavaScript engine of Google Chrome) and turned that into a standalone JavaScript execution environment on the desktop."),(0,i.kt)("p",null,"So in a nutshell, the Node JS runtime environment allows you to run and execute JavaScript code outside of the browser environment. It allowed JS to read and write files and talk to the internet independently. This gave the opportunity to make web servers with Node JS and currently it\u2019s a popular choice for making full-stack applications."),(0,i.kt)("p",null,"JavaScript language brought many new advantages to backend development with its new runtime environment. Here let me outline some of the technical features of the Node runtime environment that makes it different than others."),(0,i.kt)("h3",{id:"asynchronous"},"Asynchronous"),(0,i.kt)("p",null,"\u201cIn a synchronous programming model, things happen one at a time\u201d (Eloquent JavaScript, 2020, para. 4). Compared to that, in an Asynchronous model, multiple things can happen at the same time."),(0,i.kt)("p",null,"Node JS has one single thread to deal with the requests and another one as the main working thread."),(0,i.kt)("p",null,"When a user requests something, Node JS will send that request to the thread and get back to the main worker thread. If another user does another request, it will put the next request to the same thread and get back to working again."),(0,i.kt)("p",null,"After some time, the request will return and Node will be notified. Node will then take the response and give it to the user."),(0,i.kt)("p",null,"All this process can happen in one single thread one after another and this the gist of asynchronousness in Node JS."),(0,i.kt)("p",null,"In other programming environments such as Python and PHP, when someone makes a request, the entire thread gets blocked. If another user needs to make a new request, the system will have to create a new thread for the operation."),(0,i.kt)("p",null,"Node JS works with a single thread and can get notified for fulfilled requests via events. Let me explain what it means what event-driven means in Node JS."),(0,i.kt)("h3",{id:"event-driven"},"Event-driven"),(0,i.kt)("p",null,"Since Node JS is sending the request to another thread for completion, it has to know how something returns to it. Node JS will always keep listening to various events. This is similar to how operating systems work. An operating system will listen for various events like a mouse click, keyboard key press and so on. When an event comes, the system will stop what it was doing and put its attention to the event at hand and do what is required."),(0,i.kt)("p",null,"Similarly, in Node JS, it can do the assign tasks and still keep listening to other events. When a user clicks or something has returned from the thread, it will do what\u2019s needed to do. This event-driven mechanism is what makes it possible for Node to work with a single thread and be super fast."),(0,i.kt)("h3",{id:"non-blocking"},"Non-blocking"),(0,i.kt)("p",null,"Node JS does not sleep because it can do things one after another. It\u2019s sort of like juggling where one item is always in the air. In Node\u2019s case, it will juggle with one hand and keep all the other things in the air (other thread.)"),(0,i.kt)("p",null,"When you make a request to save something to the database, you know it\u2019s going to take some time to write. Node is going to move on to the next task at hand. This is the basics of JavaScript\u2019s non-blocking computation model."),(0,i.kt)("p",null,"If you write this command in python: ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep(5)")),(0,i.kt)("p",null,"It\u2019s going to literally sleep for five seconds and won\u2019t be available to do anything within this time. This is an example of a blocking code. If you are making a server were 10,000s of users are making requests, this means for five seconds the server will not be able to serve these people."),(0,i.kt)("p",null,"One the other hand, this is an equivalent code in Node: setTimeout(doSomething, 5000);"),(0,i.kt)("p",null,"Here Node will do that function after five seconds, but it will never go to sleep. This way it will still be able to handle all the other requests that come to it."),(0,i.kt)("h3",{id:"node-package-manager-npm"},"Node Package Manager, NPM"),(0,i.kt)("p",null,"Node JS works with packages similar to how Java and Python has their own packages. NPM is a public repository where all the developers can contribute packages."),(0,i.kt)("p",null,"NPM comes built-in with Node JS and when you are building applications, you are going to use NPM commands to install and work with packages."),(0,i.kt)("p",null,"With this you will have to enter Linux like commands for installing various packages like this is how you would install the express js framework:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm install express\n")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download Node JS and start using it"),(0,i.kt)("li",{parentName:"ul"},"Start building something with it"),(0,i.kt)("li",{parentName:"ul"},"Leave a comment in this post and let me know what you think")),(0,i.kt)("h2",{id:"references"},"References:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Node.js. (2020). About Node JS. Retrieved February 27, 2020, from ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/about/"},"https://nodejs.org/en/about/")),(0,i.kt)("li",{parentName:"ol"},"Eloquent JavaScript. 2020. Asynchronous Programming. Retrieved February 27, 2020, from ",(0,i.kt)("a",{parentName:"li",href:"https://eloquentjavascript.net/11_async.html"},"https://eloquentjavascript.net/11_async.html"))))}c.isMDXComponent=!0}}]);