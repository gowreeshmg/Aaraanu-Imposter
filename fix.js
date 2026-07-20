const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

code = code.replace('const list = voteList;', 'const list = $(\'voteList\');');
code = code.replace('if (voteCountIndicator) voteCountIndicator.textContent = ${totalVotesCast} /  Votes Cast;', 'if ($(\'voteCountIndicator\')) $(\'voteCountIndicator\').textContent = `${totalVotesCast} / ${players.length} Votes Cast`;');
code = code.replace('if (revealResult) {', 'if ($(\'revealResult\')) {');
code = code.replace(/revealResult\.disabled/g, '$(\'revealResult\').disabled');
code = code.replace(/revealResult\.classList/g, '$(\'revealResult\').classList');
code = code.replace('const resetBtn = resetVotesBtn;', 'const resetBtn = $(\'resetVotesBtn\');');

const oldInner = 'b.innerHTML = <span class="avatar"></span><span></span><span style="margin-left:auto; background:var(--accent); color:#000; padding:2px 8px; border-radius:12px; font-weight:bold; font-size:12px;"></span>;';
const newInner = 'b.innerHTML = `<span class="avatar">${i+1}</span><span>${name}</span><span style="margin-left:auto; background:var(--accent); color:#000; padding:2px 8px; border-radius:12px; font-weight:bold; font-size:12px;">${playerVotes[i]}</span>`;';
code = code.replace(oldInner, newInner);

fs.writeFileSync('app.js', code, 'utf8');
console.log('Fixed app.js safely via Node string replacements!');
