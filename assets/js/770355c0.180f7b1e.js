"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[7439],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2773:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={slug:"compress-images-reactjs",title:"Best Practices on How to Compress Images For Reactjs",authors:"tamalweb",tags:["reactjs","performance"]},l=void 0,p={permalink:"/compress-images-reactjs",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2021/12-4-compress-images-reactjs/index.md",source:"@site/blog/2021/12-4-compress-images-reactjs/index.md",title:"Best Practices on How to Compress Images For Reactjs",description:"In this quick tutorial, I will walk you through some of the best ways you can compress images for Reactjs for huge performance wins.",date:"2021-12-04T00:00:00.000Z",formattedDate:"December 4, 2021",tags:[{label:"reactjs",permalink:"/tags/reactjs"},{label:"performance",permalink:"/tags/performance"}],readingTime:8.14,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],nextItem:{title:"How to Add the New Google Analytics 4 in Reactjs App",permalink:"/google-analytics-with-reactjs"}},c={authorsImageUrls:[void 0]},m=[{value:"Import images into your React source code",id:"import-images-into-your-react-source-code",children:[],level:2},{value:"Compress Your Source Images Using TinyPNG",id:"compress-your-source-images-using-tinypng",children:[],level:2},{value:"Use Webp/Avif Images for Even Better Compression",id:"use-webpavif-images-for-even-better-compression",children:[],level:2},{value:"Use Webp and PNG together with Fallbacks",id:"use-webp-and-png-together-with-fallbacks",children:[],level:2},{value:"My Results",id:"my-results",children:[],level:2},{value:"Final Thoughts",id:"final-thoughts",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Comments:",id:"comments",children:[],level:2}],u={toc:m};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this quick tutorial, I will walk you through some of the best ways you can compress images for Reactjs for huge performance wins."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"featured image",src:a(162).Z})),(0,i.kt)("p",null,"As you can see on the cover image, the original file was 65 kB, and after compression, I got it down to 5 KB, that\u2019s over 80% saving for just one image file."),(0,i.kt)("p",null,"This file is from one of my side projects ReactionPoll, where I make use of a bunch of Facebook and Linkedin reaction icons. My original reaction set for Facebook was 155 kB and after optimizing them, I got it to just 35 kB!"),(0,i.kt)("p",null,"Let\u2019s begin with the obvious,"),(0,i.kt)("h2",{id:"import-images-into-your-react-source-code"},"Import images into your React source code"),(0,i.kt)("p",null,"The first quick win is to always import your images in your source code."),(0,i.kt)("p",null,"Add the images into the src directory. For me, I created a folder called img inside the src folder and put all the image assets inside."),(0,i.kt)("p",null,"Now from your component files, just type in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import like from '../img/src/like.png'\n")),(0,i.kt)("p",null,"You can insert this image in the src attribute in the img tag like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<img src={like} alt="like icon" />\n')),(0,i.kt)("p",null,"When you import images this way, create-react-app (or webpack) will bundle all your images and try to best compress them."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don\u2019t put your images in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/public")," directory and hotlink them, unless you have a strong reason to do so (Hadar, 2021)."))),(0,i.kt)("p",null,"If your images are less than 10 kB (10,000 bytes) these images will be converted into inline base 64 strings. So they will load instantly (Llobera, 2020)."),(0,i.kt)("p",null,"See this love icon is 4.5 kB (less than 10 kB) and converted as a data URL:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"images converted to data url",src:a(7052).Z})),(0,i.kt)("p",null,"But when your images are over 10 KB, for example, this care reaction icon is 14 kB, react will link to the asset file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"source image",src:a(8760).Z})),(0,i.kt)("p",null,"Did you know about the inline image thing? I didn\u2019t. Tweet this to your followers,"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your image is under 10 kB, Create React App will turn them into base64 data strings, making them load instantly!"))),(0,i.kt)("p",null,"To further compress these source images, we have to optimize them ourselves,"),(0,i.kt)("h2",{id:"compress-your-source-images-using-tinypng"},"Compress Your Source Images Using TinyPNG"),(0,i.kt)("p",null,"TinyPNG is an online tool I use to compress images. Usually optimized PNG and JPGs have a small file size already, but when I run these images against this free tool, I get surprised that it squeezes up even more."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tiny png",src:a(3094).Z})),(0,i.kt)("p",null,"I saw a 68% savings when compressing my reaction icon pngs using TinyPNG."),(0,i.kt)("p",null,"Compressed JPG and PNGs can only take you so far. If you want to really up your compression game, you need to find an even better image format: webp and avif."),(0,i.kt)("h2",{id:"use-webpavif-images-for-even-better-compression"},"Use Webp/Avif Images for Even Better Compression"),(0,i.kt)("p",null,"Webp (weppy) is a new fast image format developed by Google. If weppy is fast, then AVIF is faster. In my ReactionPoll tool, I used weppy images to further compress my images."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webp image converter",src:a(5093).Z})),(0,i.kt)("p",null,"What I did was to replace all images with their webp counterparts."),(0,i.kt)("p",null,"There is a weppy converter tool called cwebp that I downloaded and installed into my computer, but I was too lazy to compress them in CLI. So I used an online converter to convert my existing PNG files to webp."),(0,i.kt)("p",null,"The weppy versions helped cut down around 20% more file sizes from my already compressed PNG files."),(0,i.kt)("p",null,"You should keep in mind that, weppy and avif are newer file formats and not available in older browsers. It\u2019s a good idea to serve webp but also fall back to the jpg/pngs."),(0,i.kt)("h2",{id:"use-webp-and-png-together-with-fallbacks"},"Use Webp and PNG together with Fallbacks"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"<picture>")," tag we can add both webp and png files. The browser will pick the image that it supports."),(0,i.kt)("p",null,"The tag looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import likePng from '../img/src/like.png'\nimport likeWebp from '../img/src/like.webp'\n;<picture>\n  <source srcSet={likeWebp} type=\"image/webp\" />\n  <img src={likePng} alt=\"like button\" />\n</picture>\n")),(0,i.kt)("p",null,"I learned how to use this trick + how to use a reusable react component to automate the process using Josh\u2019s blog post."),(0,i.kt)("p",null,"Basically what he did was create a component called ",(0,i.kt)("inlineCode",{parentName:"p"},"ImgWithFallback")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const ImgWithFallback = ({\n  src,\n  fallback,\n  type = 'image/webp',\n  ...delegated\n}) => {\n  return (\n    <picture>\n      <source srcSet={src} type={type} />\n      <img src={fallback} {...delegated} />\n    </picture>\n  )\n}\n")),(0,i.kt)("p",null,"This component will take the webp image as the src and the png as the fallback image."),(0,i.kt)("p",null,"Use webp/avif images for faster loading but also have a fallback to png/jpeg files using a ",(0,i.kt)("inlineCode",{parentName:"p"},"<picture>")," tag."),(0,i.kt)("p",null,"After adding the WEBPs, I can say my images are loading much quicker than PNGs."),(0,i.kt)("h2",{id:"my-results"},"My Results"),(0,i.kt)("p",null,"I started with original reaction icons that I downloaded from the internet. After resizing all the icons into 250\xd7250 png images, the total file size for the seven icons was 155 kB."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compression results",src:a(4970).Z})),(0,i.kt)("p",null,"After compressing the PNGs with TinyPNG service, I ended up with 50 kB file size for all of them."),(0,i.kt)("p",null,"Finally, when I converted them to webp file format, I ended up with 35 kB file size, that leaves 5 kB per image icon."),(0,i.kt)("p",null,"Now you must be looking at the picture above and thinking, why the weppy images look pixelated? I don\u2019t know why it is displaying like this on my computer, but when I open both icons side by side, I can say they look fine,"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"side by side comparison",src:a(8257).Z})),(0,i.kt)("p",null,"By the way, all these icons you see are part of my Linkedin and Facebook reaction poll generator. If you want to check out my project in action and how the images perform, visit ReactionPoll.com/facebook"),(0,i.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,i.kt)("p",null,"Image compression and performance optimization is ongoing thing. As time goes, we will surely find out more ways to shave off those extra kilobytes without compromising the quality. When that happens, I will update this article with newer tricks as I learn them."),(0,i.kt)("p",null,"Till then start optimizing your react website and send me a tweet if you found this post useful."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To recap what we learned so far:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always import your images in reactjs"),(0,i.kt)("li",{parentName:"ul"},"Compress your assets using a tool like TinyPNG (it also works with jpegs)"),(0,i.kt)("li",{parentName:"ul"},"Use webp and avif image formats for fast loading but also have fallbacks for the browsers that don\u2019t support them")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Hadar, A. (2021) Using the Public Folder, Retrieved December 4, 2021, from ",(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/using-the-public-folder"},"https://create-react-app.dev/docs/using-the-public-folder")),(0,i.kt)("li",{parentName:"ol"},"Llobera, L. (2020) Adding Images, Fonts, and Files, Retrieved Decmber 4, 2021, from ",(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/adding-images-fonts-and-files"},"https://create-react-app.dev/docs/adding-images-fonts-and-files"))),(0,i.kt)("h2",{id:"comments"},"Comments:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cindy Lam:")," Hi Tamal, This is such a great and well-written article. I can tell you put a lot of effort and thoughts into writing this blog post. I really like the flow of the entire post. The use of screenshots and images are really helping you to tell your story. To me, as a reader, I do not feel exhausted reading through it and I even get some surprises like the \u201ctweet\u201d option for me to easily tweet what I have learned from your blog post to others. Fast and convenient! More importantly, I really like the \u201ctable of contents\u201d and the recaps at the end of the blog post."),(0,i.kt)("p",null,"Here are some of my opinions and suggestions that hopefully can help you out to improve the current blog post (I am just writing down what I hope to see as a reader when reading through the blog post):"),(0,i.kt)("p",null,"(1) The \u201cCare Reaction\u201d icon compression results in using TinyPNG and Webp methods \u2013 I know you have displayed screenshots regarding the file size of the care reaction before compression. I think it would be helpful to see this throughout all the other sections to see the progression of the compression. It gives readers more excitement when they are able to see the result immediately after reading sections 2 and 3."),(0,i.kt)("p",null,"(2) Included the \u201cCan I use\u201d link for Webp and AVIF \u2013 ie, ",(0,i.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=webP%20image%20format"},"can i use")," so the reader can click on the link and directly see the browser compatibility of these two image types."),(0,i.kt)("p",null,"(3) For Josh\u2019s blog post, I think it would be best if you could just link directly to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.joshwcomeau.com/performance/embracing-modern-image-formats/#abstraction-with-react"},"\u201cAbstraction with React\u201d"),". As a reader, I do not need to scroll all the way down to the source code."),(0,i.kt)("p",null,"The above items are just my opinions and hopefully, they can be slightly helpful to you if you are looking for optimization."),(0,i.kt)("p",null,"By the way, I have found a small typo in section 3 the last paragraph right after the bold text, you have Webp spelled incorrectly."),(0,i.kt)("p",null,"Overall, I really enjoy reading this post and learning something new regarding image compression! Great post, Tamal!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tamal: Hey Cindy, thank you for a very thoughtful comment."),(0,i.kt)("p",{parentName:"blockquote"},"Let me write some quick responses to your points below:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"You are right. Gonna update with some more before/after screenshots."),(0,i.kt)("li",{parentName:"ol"},"Good idea! I am gonna put them."),(0,i.kt)("li",{parentName:"ol"},"Sure, will add the direct link.\nTypo: I intentionally wrote Weppy -it\u2019s like a human-friendly >name of the technical WebP."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jose Oropeza"),": Excellent article Tamal. I honestly never considered image compression but will surely give this a try on a future project, specially since image quality is not compromised. Would love to see an article on best practices for optimizing gifs."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tamal: Definitely! Google web dev recommends web video in place of gifs to save data. But I\u2019ll def look into it.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Christiaan:")," So if I understand it correctly all images below 10k are in lined. So in the last step both the PNG and webp are in lined.\nSo aren\u2019t you shipping 35Kb more in the last example?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tamal: Only pngs are getting inlined, so in the last step, I am keeping both webp and png because of backwards compatibility.")))}d.isMDXComponent=!0},7052:function(e,t,a){t.Z=a.p+"assets/images/1-80385a578d72ffd2b15094f0992a9ac9.png"},8760:function(e,t,a){t.Z=a.p+"assets/images/2-d50f74ca0e68f48476c75c2b0ad7fb1c.png"},3094:function(e,t,a){t.Z=a.p+"assets/images/3-16dc37152d969b0422b79f36adc94e5c.jpg"},5093:function(e,t,a){t.Z=a.p+"assets/images/4-7c8a48b3d6eebf99b978d9e00ed4f47d.png"},4970:function(e,t,a){t.Z=a.p+"assets/images/5-15b1fd7d6125f7f882768035fa0681ca.png"},8257:function(e,t,a){t.Z=a.p+"assets/images/6-5e096d8c9870b019df054ea8563d5f3d.jpg"},162:function(e,t,a){t.Z=a.p+"assets/images/compress-images-7a341e62f7dfa2435416c6c89c65a611.png"}}]);