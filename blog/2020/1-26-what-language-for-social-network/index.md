---
slug: what-language-for-social-network
title: What Language Should I Learn to Build a Social Network?
authors: tamalweb
tags: [nodejs, javascript, explainer]
---

Today I am going to tell you what programming language you should learn if you want to build a social networking site like Twitter, Reddit, Facebook, or Instagram.

So what is a good language for building a social network? **JavaScript. Out of all the languages and tools, JavaScript helped me quickly build a social networking site using Node JS. As a beginner I found Node JS to have the shortest learning curve when it comes to building a full-stack application such as Twitter and Reddit.**

<!-- truncate -->

Now that you know you can learn JavaScript as your programming language and use Node JS as your tool to build the site, let me give you an overview of what goes into a full-stack application. I will also share with you why did I pick the JavaScript tech stack and not the other options such as PHP or Ruby on Rails. So without further ado, let’s get going.

## What goes into building a social networking website?

A social networking site is a kind of dynamic web application that was made popular by sites like MySpace and Facebook. It got even more popular with the creation of Twitter and then came mobile-centric social networking sites like Instagram, Snapchat and TikTok.

The implementation may be different for various sites, but at a very basic level, all of these sites have a few things in common. When you go out and build such an application, you are doing the full-stack development. In other words, you are gonna make every aspect of the app.

A full-stack application consists of a frontend and a backend. The backend has many parts including the database. To make it easier to explain, I will talk about databases separately and what role they play in a social media site.

### Frontend

A social networking site has a public-facing user interface which is usually a page for the non-logged in users. On Facebook when you go to www.facebook.com from a different computer (or when you are logged out) you will see a page instructing you to sign up for an account. You can see a similar theme going on Twitter and Instagram where they prompt you to sign up for a new account or download their mobile app.

You will notice that on Twitter, you can see all the tweets from an individual user because Twitter’s policy is to make all the tweets public for the entire world, even to the logged out users. Similarly, Reddit allows everyone to read and consume their site without even having to create an account; they can only post content or reply to other people when they create an account. Another aspect of a dynamic website is that it changes based on the user.

When you log in to Facebook and visit www.facebook.com on your browser, you will find that the page shows completely different content. This page will now show the home feed of the updates from your friends, the brands and celebrities you follow and the posts from the groups you have joined.

Similarly, on Twitter, the home page is a custom feed of all the tweets from the people you follow.

In Reddit, the homepage will be a personalized feed containing the subreddit you are following or frequently browse.

Not just that, if your friend logs into any of these social networking sites, they will see a completely different feed based on his/her preferences.

This is the true beauty of a dynamic web application.

There are more than a billion social media users and for each of them the content they see on the same page changes from person to person.

You may wonder, for a billion users there are a billion profile information pages, but does that mean a web developer had to painstakingly have to build a billion profile pages?

Of course not.

The frontend web developer has only created one page for the profile page using HTML, CSS, and JavaScript. The frontend is no more than an empty shell waiting to be populated with user data from the database.

### Database

If there are a billion users on Facebook, there must be a way to store and manage all that information, the names, the birthdays, the passwords, the list of their friends, the pages they like, you get the idea!

On top of that, it should be easy and quick to fetch the information of a given person in a short amount of time. To solve this a database is used to store all the dynamic information for your social network.

#### Simple store of data

When I went on to build a social networking app with Node JS, I learned that a database is nothing more than a simple text file. In fact, I can make a database out of a text file if I wanted to.

Every time someone creates a new account, I will create a new entry in my text file with the username, password, and other information. When that user tries to log in again, I will just check if the username exists in my text file and if the given password is correct, I will allow the user to log in.

The problem comes when I have to take and manage more data. In my custom social network, I just can’t have a user log in and do nothing. The user may want to post something, like a Tweet or a status update. I will then have to store status messages on my text file.

Maybe having two different text files for user data is a good idea. I will use my first text file to store the user information and the other text file for all the status updates in my network posted by all the users.

But then comes the problem,

How can I know who posted which status update or which update belongs to which user?

A nice solution could be giving a unique ID to each of my users and also putting this ID next to the status update so that each of the status updates will link to a user in my user’s text file and vice versa. This type of relationship is very common in relational databases, and it’s in fact how large complex databases work.

If I am reading the user file line by line from top to bottom it will take a significant time for a computer to find particular user info. I will also have to worry about generating unique ids for each of the users, the status updates and any other fields. It turns out, other people before me have already gone through these problems and have come up with a very good solution:

#### Real databases

A database is nothing but a special data structure to efficiently hold and retrieve data.

When Facebook was originally created, Mark Zuckerburg used a MySQL database for building the site. Today there are many different databases to choose from like MySQL, MS SQL, PostgreSQL, SQLite, MongoDB, Oracle DB, DynamoDB and many more. But at the core, all the databases make it efficient to store and retrieve data about your web application.

When I built my first social network I used MongoDB with Node JS. Mongo is a popular No SQL database that is similar to the JSON data format (JSON is data representation in JavaScript object notation). MongoDB goes hand in hand with Node JS because the way it organizes data and the commands to store and retrieve data are similar to JavaScript language.

When you go on building a social network, you will have to use a database to store all the dynamic content in it. A database is like the heart of a web application and you must pay extra attention to protect it. If you lose it or the data gets corrupted, your entire database will be gone in an instance. So it’s a good idea to pay a premium for a database and keep regular backups in case something goes wrong.

A database is the content of a social network, but the brain that makes everything come together is the backend of your application.

### Backend

A simple HTML, CSS website does nothing, because there is no database to store the content and no mechanism in the backend to do the logic. For every social network out there, the real magic happens in the backend of the application.

1. The frontend will greet the visitor and take an order (request). The user registers for a new account with a name, email, and password.
2. The frontend will then send the request to the backend server. In this case, the information submitted by the user on the form.
3. The backend code lives somewhere in the server and is always listening for incoming requests.
4. The backend will receive a new request for registering a new user with all the information.
5. The backend will check and verify the name, email, and password, making sure the email is not already taken.
6. If everything is okay, the backend will create a new entry for the user in the database and tell the front end (response) to log this user into the account and display the home feed.
7. The frontend will receive the new response to log the user in and display the home feed so it will do it accordingly.

This is, of course, a simple representation of the request-response cycle. In a nutshell, every time the user clicks on something on the frontend, every time they post a comment or every time they move to a different page, a new request is sent to the backend for processing; the frontend then gets a new response back with some data to display to the user.

And all of this happens in less than a second.

If you want to build a social network, you will have to follow a design pattern. The most popular design pattern for building a social network is the MVC design pattern. MVC stands for Model, View, Controller; Twitter and many other social networking apps and even SaaS apps are built using this pattern. Express JS is a Node JS framework that makes it easy to build an application with the MVC design pattern. Let me share the core concepts in detail below,

#### Model

Model in MVC is the database layer where all the data is stored that will determine the makeup of the data. In Node.js development when you will be using MongoDB to build your database, you will have to provide the data structure within your server files. For a user, the data structure could be the username, first name, last name, email, password, date of birth, etc. A model is responsible for storing and retrieving the data for the entire application.

#### View

A view in MVC is the user-facing interface that the user can interact with. When I went to build a social network in Node JS, I used pug to build the dynamic HTML templates. A pug file is like a template where I can include custom JavaScript variables which will render real information to the user. Depending on the kind of user, the view layer can show different information based on the logic. Other options to build a view layer in Node JS are ejs, handlebars, and mustache.

#### Controller

A controller in MVC is the main logic or the brain of the application. In Node JS, this is achieved by making lots of functions and handlers for different requests. For each of the different requests, there will be different handlers and different functions.

To illustrate this, when someone posts a status update, the front end will send a POST request to the /post handler with the appropriate content. A controller will have a bunch of different handlers so it will then route this request to the handler which deals with posting new status updates.

Let’s say the handler is a function in JavaScript called postStatueUpdate. This function will then take the status update and perform other tasks like storing the update to the MongoDB database. When the update is stored, it will send a response to the frontend that it was successful. Now finally the controller will tell the front end to display the new post to the view layer. In a nutshell, the controller is the central nervous system that works constantly with the model and the view layer of the app.

Now that you have an overview of what goes into a social network, let me tell you why Node JS is a good tool for a beginner to build a full-stack application.

## Why use Node JS to build a social networking app?

Now you must be thinking, if I have all the many different options to build my backend server, why would I pick Node.js to build it? The first reason is speed.

### Speed

Node JS is fast when it comes to reading and writing data to and from the disk. A social networking website is all about user-generated content where users will create posts, comment on them, like, dislike and delete posts. This all means your application will have to do a lot of updates to the database and one thing I learned after building a bunch of applications is, that database updates take a significant amount of time.

Node JS is asynchronous and can handle all the requests one after the other without impacting the user interface. In traditional server-side languages, like in PHP, Java, and Python, the server will wait until read/write operation is complete. But in Node JS, it will send the read/write action to the queue and go on working on other requests. When the read/write action is complete, it will respond accordingly. This gives a huge advantage to a social networking site, where lots of requests are happening simultaneously. As a beginner, you would want to pick a tool that is easier to learn fast.

### Ease of learning

Node JS is JavaScript and if you already know how to build a simple website with HTML, CSS, and JavaScript, the learning curve will cut down in half.

Node application structures are built with a straight forward functional approach. When building my Twitter clone application, I used the Express framework which is just a collection of useful methods for making APIs and handlers. The process of making a Node JS application is as simple as making a bunch of functions that call each other at various stages. A typical Node project heavily relies on packages that are functions other people wrote which you can freely use. Node project also has a lot of set configurations that you can just copy-paste from boilerplate code.

### One language

Finally, Node JS lets you use a single language, JavaScript to do both the frontend and the backend of an application. In other technological stacks like in PHP, Python, Ruby, and Java, you will still have to do the frontend logic with JavaScript which means you will have to work with a minimum of two programming languages at a time.

As a beginner programmer, I had a hard time working with JavaScript in the front and PHP in the back. I was forgetting one language when I was working with the other. Node JS helped me focus only on JavaScript and I was able to build a full-stack social network with ease.

So if you are a new programmer, and would like to learn a single language to build the entire stack, then pick Node JS. Your JavaScript tech stack will look like this:

- Node JS -The runtime environment for the server
- Express JS -Framework to build your application
- MongoDB -A powerful database built on JS principles
- Pug, ejs, handlebars -for creating the view layer
- Frontend frameworks: React, Angular, Vue

(You can always learn new backend technologies once you have gained enough confidence with your first few projects.)

## Next Steps

- Download the latest LTS version of Node JS and install in your computer
- Learn how to make a simple web app using the Express JS framework
- Make a few learning projects by storing and retrieving from MongoDB database
