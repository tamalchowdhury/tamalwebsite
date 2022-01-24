---
slug: thoughts-after-building-a-reddit-clone-in-mern-node-react
title: Thoughts after Building a Reddit Clone in MERN (Node & React)
authors: tamalweb
tags: [project, nodejs]
---

So last week I put together a reddit like site, a clone of reddit as you can say. This is my first MERN stack application I am putting out to the world. I pretty much did a rush work and cut a lot of corners, just to get it out there and see how it goes.

<!-- truncate -->

## Features

A user can get a display name. This time I did not use any user registration mechanism. This also lead to some spam, which I will share in the rest of this post.

The user can post something and vote up and down. Users can vote as many times as she wants, again some lazy coding.

It was more like a prototype of how the app would look and feel like. I didn’t do much work in the backend other than connecting the database.

So I was happy to put it out there, hosting it on heroku.

Both my front end client code and backend server code is hosted on Heroku. After deploying I was getting a ‘Not Found’ error.

After some digging, I found that the ‘build’ folder in the react app gets ignored by default in the gitignore file. So I put that backup and now my app it up!

## Some thoughts after publishing it online:

Using it on localhost vs actual live deployment has day and night difference.

The app loads the posts after it publishes into the database, so this makes the app lose its react-ness. So in future work I will post the data to the state first, so when someone submits a post it gets displayed instantly and then sent to the database in the background.

The site needs a loading indicator. Currently, the page stays dumb for a few seconds until all the post gets loaded.

When I shared the site with the dev community, people started to spam the site. This is the first time I went to a headless approach. My backend gets data pushed to it via REST API’s. I did not secure my API’s this means anyone can send a request to it and manipulate the database. This + not having any validations led to a lot of post spam.

After a few days I dig into the code and added some validation mechanisms to the code.

## Comments:

**Christophe:** Hi Tamal,
Reading your awesome blogposts.
I following the same way as you. Learning the basics from a lot of (web)languages (html,css,JS,php,perl,Sass,…) and have experience with a lot of cms’systems like processwire, Drupal, Get Simple CMS, GRAV CMS, … the last 3 years Building WP websites and do small theme and plugin development work.
I’m not an advanced programmer, but is difficult focus on one programming language.
In the feature i will try do a different thing and will do more developing webapps. So with this in mind, trying learn NodeJS the last weeks.
Searching the internet about NodeJS articles, bought a book about NodeJS and looking a lot of NodeJS video’s. At the moment i can build a (more advanced) ‘hello world’ app in NodeJS. I understand now what MEAN-stack is and other basic stuff. Explore the Express Generator and so on. But, there is a lot of work for me while developing like a pro. So i follow your blog with a lot of interest. Last but not least, sorry for my poor English ?
Grtz from Belgium 😉

> All the best Chris, try to stick to one language/tech. Node is very good, but it can be overwhelming. Just keep on grinding and building stuff.
