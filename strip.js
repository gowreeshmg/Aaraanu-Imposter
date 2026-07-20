const fs = require("fs");
let app = fs.readFileSync("app.js", "utf8");

// We'll replace all instances of optional chaining that I added recently.
app = app.replace(/document\.getElementById\('durationSelect'\)\?\.value/g, "(document.getElementById('durationSelect') ? document.getElementById('durationSelect').value : null)");
app = app.replace(/document\.getElementById\('seeCategory'\)\?\.checked/g, "(document.getElementById('seeCategory') ? document.getElementById('seeCategory').checked : false)");
app = app.replace(/document\.getElementById\('showHint'\)\?\.checked/g, "(document.getElementById('showHint') ? document.getElementById('showHint').checked : false)");
app = app.replace(/\$\('seeCategory'\)\?\.checked/g, "($('seeCategory') ? $('seeCategory').checked : false)");
app = app.replace(/\$\('durationSelect'\)\?\.value/g, "($('durationSelect') ? $('durationSelect').value : 2)");
app = app.replace(/data\?\.candidates\?\.\[0\]\?\.content\?\.parts\?\.\[0\]\?\.text/g, "(data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] ? data.candidates[0].content.parts[0].text : null)");

fs.writeFileSync("app.js", app, "utf8");
console.log("Stripped optional chaining");
