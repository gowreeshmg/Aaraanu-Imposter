var packs = (typeof window !== 'undefined' && window.packs) || (typeof packs !== 'undefined' ? packs : []);
let players=['Gowreesh','Sachin','Gautham'],selected=new Set((packs||[]).map(p=>p.id)),round=1,currentPlayer=0,imposters=new Set(),imposterCount=1,word=null,showMalayalam=false,selectedVote=-1,timerId;
const $=id=>typeof document!=='undefined'?document.getElementById(id):null;const show=id=>{if(typeof document==='undefined')return;document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));if($(id))$(id).classList.add('active');if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0)};
const hideLoader=()=>{if(typeof document==='undefined')return;const l=document.getElementById('loader');if(l&&!l.classList.contains('done')){const startTime=window.__loaderStartTime||(Date.now()-5000);const elapsed=Date.now()-startTime;const rem=Math.max(0,5000-elapsed);setTimeout(()=>{l.classList.add('done');setTimeout(()=>{if(l&&l.parentNode)l.style.display='none'},450)},rem)}};
if(typeof window!=='undefined'&&typeof document!=='undefined'){hideLoader();window.addEventListener('load',hideLoader);window.addEventListener('DOMContentLoaded',hideLoader);setTimeout(hideLoader,5000);}
function renderPlayers(){if(typeof document==='undefined')return;const list=$('playerList');if(!list)return;list.innerHTML='';players.forEach((name,i)=>{const row=document.createElement('div');row.className='player-row';row.innerHTML=`<span class="player-number">${i+1}</span><input value="${name.replace(/"/g,'&quot;')}" aria-label="Player ${i+1} name"><button class="remove-player" aria-label="Remove player">⌫</button>`;row.querySelector('input').oninput=e=>players[i]=e.target.value||`Player ${i+1}`;row.querySelector('button').onclick=()=>{if(players.length>3){players.splice(i,1);if(imposterCount>Math.floor(players.length/2)){imposterCount=Math.max(1,Math.floor(players.length/2));if($('imposterTotal'))$('imposterTotal').textContent=imposterCount}renderPlayers()}};list.append(row)});if($('playerTotal'))$('playerTotal').textContent=`${players.length} / 10`;}
function renderCategories(){if(typeof document==='undefined')return;const grid=$('categoryGrid');if(!grid)return;grid.innerHTML='';packs.forEach(p=>{const b=document.createElement('button');b.className=`category-card ${selected.has(p.id)?'selected':''}`;b.innerHTML=`<span class="cat-icon">${p.icon}</span><b>${p.name}</b><small>${p.words.length} words</small>`;b.onclick=()=>{selected.has(p.id)?selected.delete(p.id):selected.add(p.id);renderCategories();updateCategoryText()};grid.append(b)});if($('categoryCount'))$('categoryCount').textContent=`${selected.size} of ${packs.length} selected`;}
function updateCategoryText(){if($('categorySummary'))$('categorySummary').textContent=selected.size===packs.length?'All categories selected':`${selected.size} of ${packs.length} selected`;}
function chooseWord(){const usable=packs.filter(p=>selected.has(p.id));if(!usable.length){packs.forEach(p=>selected.add(p.id));}const category=usable[Math.floor(Math.random()*usable.length)]||packs[0];const picked=category.words[Math.floor(Math.random()*category.words.length)];word={latin:picked[0],malayalam:picked[1],hintLatin:picked[2]||`Related to ${picked[0]}`,hintMalayalam:picked[3]||picked[2]||`Related to ${picked[0]}`,category:category.name};const indices=players.map((_,idx)=>idx);for(let i=indices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[indices[i],indices[j]]=[indices[j],indices[i]];}imposters=new Set(indices.slice(0,Math.min(imposterCount,players.length-1)))}
function startRound(){chooseWord();currentPlayer=0;showPass()};
function showPass(){if($('passName'))$('passName').textContent=players[currentPlayer]||`Player ${currentPlayer+1}`;if($('roundNumber'))$('roundNumber').textContent=round;show('pass');const card=$('roleSwipeCard');if(card){card.style.transition='none';card.style.transform='translateY(-110%)';card.offsetHeight;card.style.transition='transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';card.style.transform='translateY(0)';}};
function renderWord(){renderRoleView()}
function showReveal(){showMalayalam=false;renderRoleView();const card=$('roleSwipeCard');if(card){card.style.transition='transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)';card.style.transform='translateY(-110%)';setTimeout(()=>{show('reveal');card.style.transform='translateY(0)';},300);}else{show('reveal');}}
function renderRoleView(){if(typeof document==='undefined')return;const isImposter=imposters.has(currentPlayer);if($('roleBadge')){$('roleBadge').textContent=isImposter?(imposters.size>1?'You are one of the Imposters!':'You are the Imposter!'):'You are a player';$('roleBadge').className=`role-badge ${isImposter?'imposter':''}`}if($('secretLabel'))$('secretLabel').textContent=isImposter?'YOUR MISSION':'SECRET WORD';if(isImposter){if($('secretWord'))$('secretWord').textContent='?';if($('scriptToggle')){$('scriptToggle').hidden=!($('showHint')?.checked&&word&&(word.hintLatin||word.hintMalayalam));$('scriptToggle').textContent=showMalayalam?'Show in Manglish':'Show in Malayalam'}let hintHTML=[];if($('seeCategory')?.checked){hintHTML.push(`<span style="color:#a9a4b3;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;display:block;">Category</span><b style="color:var(--accent);font-size:16px;display:block;margin-top:2px;">${word.category}</b>`)}if($('showHint')?.checked&&word){const currentHint=showMalayalam?(word.hintMalayalam||word.hintLatin):(word.hintLatin||word.hintMalayalam);if(currentHint){hintHTML.push(`<span style="color:#a9a4b3;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;display:block;">Related Hint</span><b style="color:var(--accent);font-size:16px;display:block;margin-top:2px;">${currentHint}</b>`)}}if($('secretHint')){if(hintHTML.length===0){$('secretHint').innerHTML='Try to work out the secret word from the clues.'}else{$('secretHint').innerHTML=hintHTML.join('<div style="height:10px"></div>')}}}else{if($('scriptToggle')){$('scriptToggle').hidden=false;$('scriptToggle').textContent=showMalayalam?'Show in Manglish':'Show in Malayalam'}if($('secretWord'))$('secretWord').textContent=showMalayalam?word.malayalam:word.latin;if($('secretHint'))$('secretHint').textContent='Everyone else has this word too.'}}
function startTimer(){clearInterval(timerId);const minutes=parseInt($('durationSelect')?.value||2,10);let left=minutes*60;const total=left;const draw=()=>{const m=Math.floor(left/60),s=left%60;if($('timer'))$('timer').textContent=`${m}:${String(s).padStart(2,'0')}`;if($('timerRing'))$('timerRing').style.strokeDashoffset=327*(1-left/total)};draw();timerId=setInterval(()=>{left--;draw();if(left<=0){clearInterval(timerId);showVote()}},1000)}
function showVote(){if(typeof document==='undefined')return;clearInterval(timerId);selectedVote=-1;const list=$('voteList');if(!list)return;list.innerHTML='';players.forEach((name,i)=>{const b=document.createElement('button');b.className='vote-option';b.innerHTML=`<span class="avatar">${i+1}</span><span>${name}</span>`;b.onclick=()=>{document.querySelectorAll('.vote-option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');selectedVote=i;if($('revealResult')){$('revealResult').disabled=false;$('revealResult').classList.remove('disabled')}};list.append(b)});if($('revealResult')){$('revealResult').disabled=true;$('revealResult').classList.add('disabled')}show('vote')}
function result(){const caught=imposters.has(selectedVote);const who=Array.from(imposters).map(i=>players[i]).join(', ');if($('resultIcon')){$('resultIcon').className=`result-icon ${caught?'':'fail'}`;$('resultIcon').textContent=caught?'✦':'!'}if($('resultEyebrow'))$('resultEyebrow').textContent=caught?'GOT THEM!':'OH NO!';if($('resultTitle'))$('resultTitle').textContent=caught?'The Imposter is caught!':(imposters.size>1?'The Imposters win!':'The Imposter wins!');if($('resultText'))$('resultText').textContent=`${who} ${imposters.size>1?'were the Imposters':'was the Imposter'}.`;if($('answerWord'))$('answerWord').textContent=word?.latin||'';show('result')}
const bindClick=(id,fn)=>{const el=$(id);if(el)el.onclick=fn;};
if(typeof window!=='undefined'&&typeof document!=='undefined'){
bindClick('themeToggle',()=>{document.body.classList.toggle('light');if($('themeToggle'))$('themeToggle').textContent=document.body.classList.contains('light')?'☾':'☀'});
bindClick('startSetup',()=>show('setup'));
bindClick('openHelp',()=>show('help'));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));
bindClick('addPlayer',()=>{if(players.length<10){players.push(`Player ${players.length+1}`);if($('playerList'))renderPlayers()}});
bindClick('openCategories',()=>{if($('categoryGrid'))renderCategories();show('categories')});
bindClick('selectAll',()=>{packs.forEach(p=>selected.add(p.id));if($('categoryGrid'))renderCategories();if($('categorySummary'))updateCategoryText()});
bindClick('clearAll',()=>{selected.clear();if($('categoryGrid'))renderCategories();if($('categorySummary'))updateCategoryText()});
bindClick('beginRound',startRound);
const card=$('roleSwipeCard');
if(card){
  let startY=0, currentY=0, isDragging=false;
  const onDragStart=(y)=>{startY=y;currentY=y;isDragging=true;card.style.transition='none';};
  const onDragMove=(y)=>{if(!isDragging)return;currentY=y;const delta=currentY-startY;card.style.transform=`translateY(${delta}px)`;};
  const onDragEnd=()=>{if(!isDragging)return;isDragging=false;const delta=currentY-startY;if(delta<-65){showReveal();}else{card.style.transition='transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';card.style.transform='translateY(0)';}};
  card.addEventListener('touchstart',e=>{if(e.touches&&e.touches[0])onDragStart(e.touches[0].clientY);},{passive:true});
  card.addEventListener('touchmove',e=>{if(e.touches&&e.touches[0])onDragMove(e.touches[0].clientY);},{passive:true});
  card.addEventListener('touchend',()=>onDragEnd(),{passive:true});
  card.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;card.setPointerCapture(e.pointerId);onDragStart(e.clientY);});
  card.addEventListener('pointermove',e=>onDragMove(e.clientY));
  card.addEventListener('pointerup',e=>{card.releasePointerCapture(e.pointerId);onDragEnd();});
  card.addEventListener('pointercancel',()=>onDragEnd());
}
const revealScreen=$('reveal');
if(revealScreen){
  let rStartY=0,rCurrentY=0,rDragging=false;
  const onRStart=(y)=>{rStartY=y;rCurrentY=y;rDragging=true;};
  const onRMove=(y)=>{if(!rDragging)return;rCurrentY=y;};
  const onREnd=()=>{if(!rDragging)return;rDragging=false;if(rCurrentY-rStartY>80&&$('hideRole')){$('hideRole').click();}};
  revealScreen.addEventListener('touchstart',e=>{if(e.touches&&e.touches[0])onRStart(e.touches[0].clientY);},{passive:true});
  revealScreen.addEventListener('touchmove',e=>{if(e.touches&&e.touches[0])onRMove(e.touches[0].clientY);},{passive:true});
  revealScreen.addEventListener('touchend',()=>onREnd(),{passive:true});
}
bindClick('scriptToggle',()=>{showMalayalam=!showMalayalam;renderRoleView()});
bindClick('hideRole',()=>{currentPlayer++;if(currentPlayer<players.length){showPass();}else{show('clues');startTimer();}});
bindClick('skipDiscussion',showVote);
bindClick('revealResult',result);
bindClick('nextRound',()=>{round++;startRound()});
bindClick('goHome',()=>show('home'));
bindClick('removeImposter',()=>{if(imposterCount>1){imposterCount--;if($('imposterTotal'))$('imposterTotal').textContent=imposterCount}});
bindClick('addImposter',()=>{const maxImp=Math.max(1,Math.floor(players.length/2));if(imposterCount<maxImp){imposterCount++;if($('imposterTotal'))$('imposterTotal').textContent=imposterCount}});
const exitGameHandler=(e)=>{if(e&&e.stopPropagation)e.stopPropagation();if(confirm('Do you want to leave the game?')){show('setup');}};
if($('exitGame'))$('exitGame').onclick=exitGameHandler;
if($('exitReveal'))$('exitReveal').onclick=exitGameHandler;
bindClick('roleHelp',()=>show('help'));
if($('playerList'))renderPlayers();if($('categorySummary'))updateCategoryText();hideLoader();
}
