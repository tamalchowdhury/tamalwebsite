---
slug: fruit-ninja-facts
title: Fruit Ninja Random Fruit Facts API Built with Pure Node.js
authors: tamalweb
tags: [nodejs, project]
---

I started learning how to work with pure Node webserver (without Express or any other packages) The best way to solidify the learning is to build something with the knowledge. However, with the limited scope of the lesson, I couldn’t find a project to build.

I’m playing Fruit Ninja these days. After every round, it shows interesting fruit facts. I got an idea to make an API that will display random fruit facts in JSON format. This way I can put my knowledge to use while building something fun.

<!-- truncate -->

I built this simple API which shows interesting fruit facts in JSON format. When you type in `localhost:3000/apple` or any other available fruits, it will spit out this data.

The API is simple yet sophisticated. This is the first time I’m building a URL slug which acts as a variable. It’s the same as `/:fruit` in express.js.

I suggest you [open the up the code](https://github.com/tamalweb/fruit-facts/blob/master/index.js) and follow along with this post.

The idea is to take the full URL `http://localhost:3000/mango` and split it into parts. Then I take the path /mango and strip out any slashes to get a final clean trimmed path mango after which I can match the slug against my route handlers. I learned this way doing it from Pirple’s Node Masterclass course.

```js
let parsedUrl = url.parse(req.url, true)
let trimmedPath = parsedUrl.pathname.replace(/^\/|\/+$/g, '')
if (!trimmedPath) trimmedPath = 'index'
```

I collected these fruit facts from a wiki page. I will write about how I scrapped those facts with JavaScript in another post.

I create an array of available fruits. Many fruits have more than one fact so I created an object of fruits with an array of facts for every fruit:

```json
apple: [
    'The average person eats 65 apples per year',
    'Apple seeds are mildly poisonous, but not enough to be dangerous to humans',
    'There are over 10,000 varieties of apples grown around the world',
    "25% of an apple's volume is air, that’s why they float",
    'Over 60 million tons of apples are grown worldwide annually'
  ],
```

Other than the fruit facts, the API also has 3 additional pages — the homepage, a not found page, and a help page. First I check if the given URL slug is a matching fruit. If it’s a matching fruit, it will serve the fruit handler with the given fruit. If it doesn’t include a matching fruit but matches the other handlers, it will serve them accordingly:

```js
let chosenHandler

if (fruits.includes(trimmedPath)) {
  chosenHandler = handlers.fruit
} else {
  chosenHandler =
    typeof router[trimmedPath] !== 'undefined'
      ? router[trimmedPath]
      : handlers.notFound
}
```

Then all is left to do is to call the chosenHandler function and pass in the callback function:

```js
  chosenHandler(trimmedPath, function(statusCode, payload) {
    statusCode = typeof statusCode === 'number' ? statusCode : 200;
    payload = typeof payload === 'object' ? payload : {};
    let payloadString = JSON.stringify(payload);
    // Send the response
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(statusCode);
    res.end(payloadString);
  });
});
```

We use the native http package to create a web server. The server is built using http.createServer. The createServer function takes a callback where we can handle requests and serve fruit facts or other pages from `chosenHandler`. We then listen to port 3000 using server.listen.

```js
const server = http.createServer(function(req, res) {
// Callback to handle requests with chosenHandler
}
server.listen(3000, () => { console.log('Server started') })
```

You can tinker with the code on my Github page. I suggest you install the JSON viewer extension to see the JSON in a nice formatted way.
