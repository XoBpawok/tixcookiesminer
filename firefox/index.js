// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Create a page-mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.tixchat.com",
  contentScript: "!function(){setInterval(function(){var cookiesContainer = document.querySelector('.cookies');cookiesContainer.parentNode.className.indexOf('hidden') === -1 && cookiesContainer.querySelector('.cookie').click();},1e4)}();"
});