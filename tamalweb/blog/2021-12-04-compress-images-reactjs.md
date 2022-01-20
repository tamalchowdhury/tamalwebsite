---
slug: compress-images-reactjs
title: Best Practices on How to Compress Images For Reactjs
authors:
  name: Tamal Web
  title: Frontend Engineer
  url: https://twitter.com/tamalweb
  image_url: https://github.com/tamalweb.png
tags: [reactjs, performance]
---

In this quick tutorial, I will walk you through some of the best ways you can compress images for Reactjs for huge performance wins.


As you can see on the cover image, the original file was 65 kB, and after compression, I got it down to 5 KB, that’s over 80% saving for just one image file.

This file is from one of my side projects ReactionPoll, where I make use of a bunch of Facebook and Linkedin reaction icons. My original reaction set for Facebook was 155 kB and after optimizing them, I got it to just 35 kB!

<!-- truncate -->

Let’s begin with the obvious,

## Import images into your React source code

The first quick win is to always import your images in your source code. 

Add the images into the src directory. For me, I created a folder called img inside the src folder and put all the image assets inside. 

Now from your component files, just type in 

```import like from '../img/src/like.png'```
You can insert this image in the src attribute in the img tag like this:

```<img src={like} alt="like icon" />```

When you import images this way, create-react-app (or webpack) will bundle all your images and try to best compress them. Don’t put your images in the public directory and hotlink them, unless you have a strong reason to do so (Hadar, 2021).

If your images are less than 10 kB (10,000 bytes) these images will be converted into inline base 64 strings. So they will load instantly (Llobera, 2020).

See this love icon is 4.5 kB (less than 10 kB) and converted as a data URL:


But when your images are over 10 KB, for example, this care reaction icon is 14 kB, react will link to the asset file.


Did you know about the inline image thing? I didn’t. Tweet this to your followers,

If your image is under 10 kB, Create React App will turn them into base64 data strings, making them load instantly! #reactjsCLICK TO TWEET
To further compress these source images, we have to optimize them ourselves,

## Compress Your Source Images Using TinyPNG

TinyPNG is an online tool I use to compress images. Usually optimized PNG and JPGs have a small file size already, but when I run these images against this free tool, I get surprised that it squeezes up even more. I saw a 68% savings when compressing my reaction icon pngs using TinyPNG.