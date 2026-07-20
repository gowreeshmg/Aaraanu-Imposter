import sys

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('function showVote(){')
end_idx = content.find('function result(){')

new_showVote = '''let playerVotes = [];
let totalVotesCast = 0;

function renderVoteList() {
  const list = voteList;
  if(!list) return;
  list.innerHTML = '';
  players.forEach((name, i) => {
    const b = document.createElement('button');
    b.className = 'vote-option';
    b.innerHTML = <span class="avatar"></span><span></span><span style="margin-left:auto; background:var(--accent); color:#000; padding:2px 8px; border-radius:12px; font-weight:bold; font-size:12px;"></span>;
    b.onclick = () => {
      if (totalVotesCast < players.length) {
        playerVotes[i]++;
        totalVotesCast++;
        renderVoteList();
      }
    };
    list.append(b);
  });
  
  if (voteCountIndicator) voteCountIndicator.textContent = ${totalVotesCast} /  Votes Cast;
  
  if (revealResult) {
    if (totalVotesCast === players.length) {
      revealResult.disabled = false;
      revealResult.classList.remove('disabled');
    } else {
      revealResult.disabled = true;
      revealResult.classList.add('disabled');
    }
  }
}

function showVote() {
  if (typeof document === 'undefined') return;
  clearInterval(timerId);
  playerVotes = new Array(players.length).fill(0);
  totalVotesCast = 0;
  
  renderVoteList();
  
  const resetBtn = resetVotesBtn;
  if (resetBtn) {
    resetBtn.onclick = () => {
      playerVotes = new Array(players.length).fill(0);
      totalVotesCast = 0;
      renderVoteList();
    };
  }
  
  show('vote');
}

'''

content = content[:start_idx] + new_showVote + content[end_idx:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
