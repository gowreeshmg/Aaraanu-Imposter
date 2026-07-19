const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const alignScript = `
function alignBurst() {
  const burst = document.querySelector('.burst');
  const img = document.getElementById('homeCharacterImg');
  if (!burst || !img) return;
  const rect = img.getBoundingClientRect();
  const parentRect = burst.getBoundingClientRect();
  if (rect.width === 0) return;
  
  const isMalayalam = document.body.classList.contains('malayalam-edition');
  const faceYFromBottom = isMalayalam ? 155 : 100;
  
  const faceY = rect.bottom - faceYFromBottom - parentRect.top;
  const faceX = rect.left + (rect.width / 2) - parentRect.left;
  
  burst.style.setProperty('background', \`repeating-conic-gradient(from 0deg at \${faceX}px \${faceY}px, #181528 0deg 7.5deg, #0c0a14 7.5deg 15deg)\`, 'important');
}
`;

js = js.replace(/function startTimer/, alignScript + '\nfunction startTimer');
js = js.replace(/if\(\$\('playerList'\)\)renderPlayers\(\);/, 'if($(\\'playerList\\'))renderPlayers();\n  setTimeout(alignBurst, 50);\n  window.addEventListener(\\'resize\\', alignBurst);');
// also trigger it when toggleEdition runs
js = js.replace(/function toggleEdition\(\) \{/, 'function toggleEdition() {\n  setTimeout(alignBurst, 150);\n');

fs.writeFileSync('app.js', js);
console.log('JS updated');
