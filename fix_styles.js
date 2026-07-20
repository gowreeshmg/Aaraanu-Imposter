const fs = require("fs");
let css = fs.readFileSync("styles.css", "utf8");

// Change .home-actions position to absolute
css = css.replace(".home-actions{\n  position:fixed!important;", ".home-actions{\n  position:absolute!important;");

// Update home-actions padding to move it down
css = css.replace("padding:28px 16px 4px!important;", "padding:36px 16px 4px!important;");

// Update #openHelp font size and padding
css = css.replace("#openHelp { font-size: 16px!important; padding: 12px!important; }", "#openHelp { font-size: 18px!important; padding: 14px!important; }");

fs.writeFileSync("styles.css", css, "utf8");
console.log("Styles updated");
