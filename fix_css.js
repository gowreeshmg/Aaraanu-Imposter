const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');
const target = `  body[data-screen="home"] .app-shell {
    height: 100%!important;
    min-height: 100'%important;
    max-height: 100%!important;
`/;
const replacement = `  body[data-screen="home"] .app-shell {
    height: 100%!important;
    min-height: 100%!important;
    max-height: 100'%important;
  }
`//;
let lastIndex = css.lastIndexOf(target);
if(lastIndex !== -1) {
  css = css.substring(0, lastIndex) + replacement + css.substring(lastIndex + target.length);
  fs.writeFileSync('styles.css', css, 'utf8');
  console.log('Fixed css');
} else {
  console.log('Target not found');
}