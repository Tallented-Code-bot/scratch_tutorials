const cheerio = require("cheerio");
const fetch = require("node-fetch");

//const html = `
//<div>
//hello world
//<a href="scratch.mit.edu">Hi</a>
//this is some texxt.
//</div>
//`;

//const data = cheerio.load(html);
//console.log(data("div").text())

fetch("https://scratch.mit.edu/site-api/comments/user/Tallented-Code-bot/")
  .then((res) => res.text())
  .then((text) => {
    parseHtml(text);
  });

function parseHtml(html) {
  const $ = cheerio.load(html);
  let commentsContent = $("div .content");
  console.log(commentsContent.length);
  console.log(commentsContent[13].children[0].data);

  //for (let i = 0; i < 1; i++) {
  //console.log(commentsContent[i]);
  //}
}
