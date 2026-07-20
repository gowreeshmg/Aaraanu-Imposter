import sys

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

target = "function result(){const caught=imposters.has(selectedVote);"

new_logic = '''function result(){
  let maxVotes = 0;
  let eliminated = -1;
  let isTie = false;
  for (let i = 0; i < playerVotes.length; i++) {
    if (playerVotes[i] > maxVotes) {
      maxVotes = playerVotes[i];
      eliminated = i;
      isTie = false;
    } else if (playerVotes[i] === maxVotes && maxVotes > 0) {
      isTie = true;
    }
  }
  if (isTie) eliminated = -1;
  selectedVote = eliminated;
  const caught = imposters.has(selectedVote);'''

content = content.replace(target, new_logic)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
