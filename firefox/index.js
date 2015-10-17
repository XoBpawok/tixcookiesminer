// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
// Create a page-mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.tixchat.com",
  contentScript: "!function(){setInterval(function(){ document.querySelector('.cookies .cookie') && document.querySelector('.cookies .cookie').click()},1e4)}(),function(e,t,n,c,o,a,i){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,a=t.createElement(n),i=t.getElementsByTagName(n)[0],a.async=1,a.src=c,i.parentNode.insertBefore(a,i)}(window,document,'script','//www.google-analytics.com/analytics.js','ga'),ga('create','UA-68751306-1','auto'),ga('send','pageview');"
});