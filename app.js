var packs = (typeof window !== 'undefined' && window.packs) || (typeof packs !== 'undefined' ? packs : []);
const STORAGE_KEY = 'aaraanu_imposter_saved_players';
function loadSavedPlayers() {
  if (typeof window === 'undefined' || !window.localStorage) return ['Player 1', 'Player 2', 'Player 3'];
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length >= 3 && saved.length <= 10) {
      return saved;
    }
  } catch(e) {}
  return ['Player 1', 'Player 2', 'Player 3'];
}
function savePlayers() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
  } catch(e) {}
}
const CATEGORIES_STORAGE_KEY = 'aaraanu_imposter_saved_categories';
const CUSTOM_CATEGORIES_STORAGE_KEY = 'aaraanu_imposter_custom_categories';

function loadCustomCategories() {
  if (typeof window === 'undefined' || !window.localStorage) return [];
  try {
    const saved = JSON.parse(window.localStorage.getItem(CUSTOM_CATEGORIES_STORAGE_KEY));
    if (Array.isArray(saved)) return saved;
  } catch(e) {}
  return [];
}
function saveCustomCategories(customList) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(CUSTOM_CATEGORIES_STORAGE_KEY, JSON.stringify(customList));
  } catch(e) {}
}

const loadedCustom = loadCustomCategories();
if (loadedCustom && loadedCustom.length) {
  loadedCustom.forEach(cp => {
    if (!packs.some(p => p.id === cp.id)) {
      packs.push(cp);
    }
  });
}

function loadSavedCategories() {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  try {
    const saved = JSON.parse(window.localStorage.getItem(CATEGORIES_STORAGE_KEY));
    if (Array.isArray(saved) && saved.length > 0) return new Set(saved);
  } catch(e) {}
  return null;
}
function saveCategories() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(Array.from(selected)));
  } catch(e) {}
}

let players=loadSavedPlayers(),selected=loadSavedCategories()||new Set((packs||[]).map(p=>p.id)),round=1,currentPlayer=0,imposters=new Set(),imposterCount=1,word=null,showMalayalam=false,selectedVote=-1,timerId;
const $=id=>typeof document!=='undefined'?document.getElementById(id):null;const show=id=>{if(typeof document==='undefined')return;document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));if($(id))$(id).classList.add('active');if(id==='home'){document.body.style.background='#060509';document.documentElement.style.background='#060509';var sh=document.querySelector('.app-shell');if(sh)sh.style.background='#060509';}else{document.body.style.background='#0d0c13';document.documentElement.style.background='#0d0c13';var sh=document.querySelector('.app-shell');if(sh)sh.style.background='';}if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0)};
const hideLoader=()=>{if(typeof document==='undefined')return;const l=document.getElementById('loader');if(l&&!l.classList.contains('done')){const startTime=window.__loaderStartTime||(Date.now()-5000);const elapsed=Date.now()-startTime;const rem=Math.max(0,5000-elapsed);setTimeout(()=>{l.classList.add('done');document.body.style.background='#060509';document.documentElement.style.background='#060509';var sh=document.querySelector('.app-shell');if(sh)sh.style.background='#060509';var h=document.getElementById('home');if(h){window.dispatchEvent(new Event('resize'));}setTimeout(()=>{if(l&&l.parentNode)l.style.display='none'},450)},rem)}};
if(typeof window!=='undefined'&&typeof document!=='undefined'){hideLoader();window.addEventListener('load',hideLoader);window.addEventListener('DOMContentLoaded',hideLoader);setTimeout(hideLoader,5000);}
function renderPlayers(){if(typeof document==='undefined')return;const list=$('playerList');if(!list)return;list.innerHTML='';players.forEach((name,i)=>{const row=document.createElement('div');row.className='player-row';row.innerHTML=`<span class="player-number">${i+1}</span><input value="${name.replace(/"/g,'&quot;')}" aria-label="Player ${i+1} name"><button class="remove-player" aria-label="Remove player"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg></button>`;row.querySelector('input').oninput=e=>{players[i]=e.target.value||`Player ${i+1}`;savePlayers();};row.querySelector('button').onclick=()=>{if(players.length>3){players.splice(i,1);if(imposterCount>Math.floor(players.length/2)){imposterCount=Math.max(1,Math.floor(players.length/2));if($('imposterTotal'))$('imposterTotal').textContent=imposterCount}renderPlayers();savePlayers();}};list.append(row)});if($('playerTotal'))$('playerTotal').textContent=`${players.length} / 10`;}
function renderCategories(){if(typeof document==='undefined')return;const grid=$('categoryGrid');if(!grid)return;grid.innerHTML='';packs.forEach(p=>{const b=document.createElement('div');b.className=`category-card compact ${selected.has(p.id)?'selected':''}`;b.onclick=(e)=>{if(e.target.closest('.delete-custom-cat'))return;selected.has(p.id)?selected.delete(p.id):selected.add(p.id);saveCategories();renderCategories();updateCategoryText()};let delHtml=p.isCustom?`<button class="delete-custom-cat" title="Delete AI topic" onclick="deleteCustomCategory('${p.id}', event)">🗑️</button>`:'';b.innerHTML=`<span class="cat-icon">${p.icon}</span><div class="cat-info"><b>${p.name}</b><small>${p.words.length} words ${p.isCustom?'(AI)':''}</small></div>${delHtml}`;grid.append(b)});if($('categoryCount'))$('categoryCount').textContent=`${selected.size} of ${packs.length} selected`;if($('categorySummary'))updateCategoryText();}
function deleteCustomCategory(id,e){if(e&&e.stopPropagation)e.stopPropagation();if(!confirm('Remove this custom AI category?'))return;const idx=packs.findIndex(p=>p.id===id);if(idx!==-1)packs.splice(idx,1);selected.delete(id);if(typeof loadCustomCategories==='function'&&typeof saveCustomCategories==='function'){const cl=loadCustomCategories().filter(p=>p.id!==id);saveCustomCategories(cl);}saveCategories();renderCategories();}
function updateCategoryText(){if($('categorySummary'))$('categorySummary').textContent=selected.size===packs.length?'All categories selected':`${selected.size} of ${packs.length} selected`;}

function toggleCategoriesDropdown() {
  const drop = $('categoriesDropdown');
  const btn = $('openCategories');
  if (drop) {
    const isOpening = !drop.classList.contains('open');
    drop.classList.toggle('open');
    if (btn) btn.classList.toggle('active', isOpening);
    if (isOpening) {
      renderCategories();
      initGeminiKeyUI();
    }
  }
}
function showCategoriesModal() { toggleCategoriesDropdown(); }
function hideCategoriesModal() {
  const drop = $('categoriesDropdown');
  const btn = $('openCategories');
  if (drop) drop.classList.remove('open');
  if (btn) btn.classList.remove('active');
}

/* 🔑 Gemini API Key & Live Cloud Generation Helper */
const GEMINI_KEY_STORAGE = 'aaraanu_imposter_gemini_api_key';
function getGeminiApiKey() {
  if (typeof window === 'undefined' || !window.localStorage) return '';
  return window.localStorage.getItem(GEMINI_KEY_STORAGE) || '';
}
function saveGeminiApiKey(key) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  if (key && key.trim()) {
    window.localStorage.setItem(GEMINI_KEY_STORAGE, key.trim());
  } else {
    window.localStorage.removeItem(GEMINI_KEY_STORAGE);
  }
  initGeminiKeyUI();
}
function initGeminiKeyUI() {
  const key = getGeminiApiKey();
  const unsetRow = $('geminiUnsetRow');
  const setRow = $('geminiSetRow');
  const box = $('geminiKeyBox');
  const inp = $('geminiApiKeyInput');
  if (inp) inp.value = key;
  if (key) {
    if (unsetRow) unsetRow.style.display = 'none';
    if (setRow) setRow.style.display = 'flex';
    if (box) box.style.display = 'none';
  } else {
    if (unsetRow) unsetRow.style.display = 'flex';
    if (setRow) setRow.style.display = 'none';
    if (box) box.style.display = 'none';
  }
}

async function generateWithGeminiOrLocal(topic) {
  const clean = topic.trim();
  const apiKey = getGeminiApiKey();
  
  // Only call Gemini if key is provided AND internet is online
  if (apiKey && typeof window !== 'undefined' && window.navigator && window.navigator.onLine !== false) {
    try {
      const promptText = `You are the Aaraanu Imposter Malayalam & English party game AI word generator. The user wants a custom category about: "${clean}".
Generate exactly 12 diverse, high-quality word pairs for this topic.
For each pair:
1. Civilian Word (English)
2. Civilian Word (Malayalam translation or script)
3. Imposter Word (English) - MUST be a subtly related sibling/cousin word in the exact same domain or category so the imposter can blend in naturally during discussion, BUT completely distinct and NEVER identical or sharing keywords with the civilian word.
4. Imposter Word (Malayalam)
Return ONLY a valid JSON array of 12 arrays without markdown formatting or code blocks, strictly in this format:
[["Civilian Eng", "Civilian Mal", "Imposter Eng", "Imposter Mal"], ...]`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }]
        })
      });
      
      if (res.ok) {
        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const jsonMatch = text.match(/\[\s*\[.*?\]\s*\]/s);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          if (Array.isArray(parsed) && parsed.length >= 6) {
            return { words: parsed.map(row => [
              row[0] || clean,
              row[1] || clean,
              row[2] || 'Related Secret',
              row[3] || 'ബന്ധമുള്ള വാക്ക്'
            ]), source: 'gemini' };
          }
        }
      }
    } catch (err) {
      console.warn('Gemini API request failed or offline, using local fallback:', err);
    }
  }
  
  // Offline or local fallback
  return { words: AIChatbotAssistant.synthesizeWordsForTopic(clean), source: 'local' };
}

/* 🤖 AI Chatbot Assistant for Custom Categories */
const AIChatbotAssistant = {
  isOpen: false,
  showModal: function() {
    const modal = $('aiChatbotModal');
    if (modal) {
      modal.classList.add('open');
      this.isOpen = true;
      const msgBox = $('aiChatMessages');
      if (msgBox && msgBox.children.length === 0) {
        this.addBotMessage(`Poli! 🤖 I'm your **Aaraanu Imposter AI Assistant**. Tell me what custom category or theme you want for your game today! For example:
<ul>
<li>🌶️ <i>Kerala Street Food & Snacks</i></li>
<li>🎬 <i>90s Malayalam Movie Actors</i></li>
<li>⚡ <i>Harry Potter & Hogwarts</i></li>
<li>🎓 <i>College Canteen & Campus Life</i></li>
</ul>
Or literally anything else you can imagine! I will create 12 bilingual Malayalam/English pairs where imposters get subtly related words so they can blend in without guessing immediately.`);
      }
      setTimeout(() => { if ($('aiChatInput')) $('aiChatInput').focus(); }, 150);
    }
  },
  hideModal: function() {
    const modal = $('aiChatbotModal');
    if (modal) {
      modal.classList.remove('open');
      this.isOpen = false;
    }
  },
  addUserMessage: function(text) {
    const msgBox = $('aiChatMessages');
    if (!msgBox) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.textContent = text;
    msgBox.appendChild(bubble);
    msgBox.scrollTop = msgBox.scrollHeight;
  },
  addBotMessage: function(htmlContent) {
    const msgBox = $('aiChatMessages');
    if (!msgBox) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot';
    bubble.innerHTML = `<span class="bot-name">🤖 AARAANU AI BOT</span>${htmlContent}`;
    msgBox.appendChild(bubble);
    msgBox.scrollTop = msgBox.scrollHeight;
    return bubble;
  },
  synthesizeWordsForTopic: function(topicInput) {
    const clean = topicInput.trim();
    const lower = clean.toLowerCase();
    
    // Check deep topic clusters
    if (lower.includes('food') || lower.includes('snack') || lower.includes('dish') || lower.includes('kerala food')) {
      return [
        ['Parippu Vada', 'പരിപ്പ് വട', 'Uzhunnu Vada', 'ഉഴുന്നു വട'],
        ['Kulukki Sarbath', 'കുലുക്കി സർബത്ത്', 'Soda Lime', 'സോഡാ നാരങ്ങ'],
        ['Beef Fry', 'ബീഫ് ഫ്രൈ', 'Porotta', 'പൊറോട്ട'],
        ['Pazham Pori', 'പഴംപൊരി', 'Sukhiyan', 'സുഖിയൻ'],
        ['Kappa Biryani', 'കപ്പ ബിരിയാണി', 'Erachi Choru', 'ഇറച്ചിച്ചോറ്'],
        ['Puttu and Kadala', 'പുട്ടും കടലയും', 'Appam and Stew', 'അപ്പവും സ്റ്റൂവും'],
        ['Masala Dosa', 'മസാല ദോശ', 'Idli Sambar', 'ഇഡ്ഡലി സാമ്പാർ'],
        ['Samoosa', 'സമൂസ', 'Egg Puff', 'മുട്ട പഫ്സ്'],
        ['Sulaimani', 'സുലൈമാനി', 'Chaya', 'ചായ'],
        ['Thalassery Biryani', 'തലശ്ശേരി ബിരിയാണി', 'Ghee Rice', 'നെയ്ച്ചോറ്'],
        ['Unniyappam', 'ഉണ്ണിയപ്പം', 'Neyyappam', 'നെയ്യപ്പം'],
        ['Baji', 'മുളക് ബജ്ജി', 'Bonda', 'ബോണ്ട']
      ];
    } else if (lower.includes('actor') || lower.includes('movie') || lower.includes('cinema') || lower.includes('hero')) {
      return [
        ['Mohanlal', 'മോഹൻലാൽ', 'Mammootty', 'മമ്മൂട്ടി'],
        ['Suresh Gopi', 'സുരേഷ് ഗോപി', 'Jayaram', 'ജയറാം'],
        ['Fahadh Faasil', 'ഫഹദ് ഫാസിൽ', 'Prithviraj', 'പൃഥ്വിരാജ്'],
        ['Dulquer Salmaan', 'ദുൽഖർ സൽമാൻ', 'Nivin Pauly', 'നിവിൻ പോളി'],
        ['Tovino Thomas', 'ടൊവിനോ തോമസ്', 'Asif Ali', 'ആസിഫ് അലി'],
        ['Shobana', 'ശോഭന', 'Manju Warrier', 'മഞ്ജു വാര്യർ'],
        ['Jagathy Sreekumar', 'ജഗതി ശ്രീകുമാർ', 'Innocent', 'ഇന്നസെന്റ്'],
        ['Mukesh', 'മുകേഷ്', 'Siddique', 'സിദ്ദിഖ്'],
        ['Suraj Venjaramoodu', 'സുരാജ് വെഞ്ഞാറമൂട്', 'Soubin Shahir', 'സൗബിൻ ഷാഹിർ'],
        ['Urvashi', 'ഉർവ്വശി', 'Kalpana', 'കല്പന'],
        ['Kunchacko Boban', 'കുഞ്ചാക്കോ ബോബൻ', 'Jayasurya', 'ജയസൂര്യ'],
        ['Sreenivasan', 'ശ്രീനിവാസൻ', 'Salim Kumar', 'സലിം കുമാർ']
      ];
    } else if (lower.includes('harry potter') || lower.includes('hogwarts') || lower.includes('magic') || lower.includes('spell')) {
      return [
        ['Harry Potter', 'ഹാരി പോട്ടർ', 'Ron Weasley', 'റോൺ വീസ്‌ലി'],
        ['Hermione Granger', 'ഹെർമിയോണി ഗ്രേഞ്ചർ', 'Luna Lovegood', 'ലൂണ ലവ്ഗുഡ്'],
        ['Albus Dumbledore', 'ആൽബസ് ഡംബിൾഡോർ', 'Severus Snape', 'സെവറസ് സ്നേപ്പ്'],
        ['Lord Voldemort', 'വോൾഡെമോർട്ട്', 'Draco Malfoy', 'ഡ്രാക്കോ മാൽഫോയ്'],
        ['Gryffindor', 'ഗ്രിഫിൻഡോർ', 'Slytherin', 'സ്ലിതറിൻ'],
        ['Hogwarts Castle', 'ഹോഗ്വാർട്ട്സ് കോട്ട', 'Azkaban Prison', 'അസ്‌കബാൻ ജയിൽ'],
        ['Wand', 'മാന്ത്രിക വടി', 'Invisibility Cloak', 'അദൃശ്യ കുപ്പായം'],
        ['Golden Snitch', 'ഗോൾഡൻ സ്നിച്ച്', 'Flying Broomstick', 'മാന്ത്രിക ചൂല്'],
        ['Hagrid', 'ഹാഗ്രിഡ്', 'Sirius Black', 'സിറിയസ് ബ്ലാക്ക്'],
        ['Dementor', 'ഡിമെന്റർ', 'Boggart', 'ബോഗാർട്ട്'],
        ['Expelliarmus', 'മാന്ത്രിക മന്ത്രം', 'Avada Kedavra', 'മാരക മന്ത്രം'],
        ['Butterbeer', 'ബട്ടർബിയർ', 'Pumpkin Juice', 'മത്തങ്ങ ജ്യൂസ്']
      ];
    } else if (lower.includes('college') || lower.includes('campus') || lower.includes('engineering') || lower.includes('canteen')) {
      return [
        ['Canteen Tea', 'കാൻ്റീൻ ചായ', 'Puff & Lime', 'പഫ്സും ലൈമും'],
        ['Hostel Warden', 'ഹോസ്റ്റൽ വാർഡൻ', 'Security Chettan', 'സെക്യൂരിറ്റി ചേട്ടൻ'],
        ['Semester Lab', 'സെമസ്റ്റർ ലാബ്', 'Internal Exam', 'ഇന്റേണൽ പരീക്ഷ'],
        ['Backlog Arrear', 'ബാക്ലോഗ് പേപ്പർ', 'Grace Marks', 'ഗ്രേസ് മാർക്ക്'],
        ['Project Guide', 'പ്രോജക്ട് ഗൈഡ്', 'External Examiner', 'എക്സ്റ്റേണൽ എക്സാമിനർ'],
        ['College Tour', 'കോളേജ് ടൂർ', 'Arts Festival', 'ആർട്സ് ഫെസ്റ്റ്'],
        ['Bunking Class', 'ക്ലാസ്സ് കട്ട് ചെയ്യൽ', 'Proxy Attendance', 'പ്രോക്സി അറ്റൻഡൻസ്'],
        ['Principal Office', 'പ്രിൻസിപ്പൽ ഓഫീസ്', 'Staff Room', 'സ്റ്റാഫ് റൂം'],
        ['Final Year Bench', 'അവസാന ബെഞ്ച്', 'Front Bench Table', 'മുൻ ബെഞ്ച്'],
        ['Assignment Submission', 'അസൈൻമെന്റ്', 'Seminar Presentation', 'സെമിനാർ'],
        ['Placement Drive', 'പ്ലേസ്മെന്റ് ഇൻ്റർവ്യൂ', 'Alumni Meet', 'അലുമ്നി മീറ്റ്'],
        ['College Bus', 'കോളേജ് ബസ്', 'Library Reading Room', 'ലൈബ്രറി ഹാൾ']
      ];
    } else if (lower.includes('marvel') || lower.includes('superhero')) {
      return [
        ['Iron Man', 'അയൺ മാൻ', 'Batman', 'ബാറ്റ്‌മാൻ'],
        ['Spider-Man', 'സ്പൈഡർമാൻ', 'Superman', 'സൂപ്പർമാൻ'],
        ['Captain America', 'ക്യാപ്റ്റൻ അമേരിക്ക', 'Wonder Woman', 'വണ്ടർ വുമൺ'],
        ['Thor', 'തോർ', 'Hulk', 'ഹൾക്ക്'],
        ['Black Panther', 'ബ്ലാക്ക് പാന്തർ', 'Wolverine', 'വൂൾവറിൻ'],
        ['Doctor Strange', 'ഡോക്ടർ സ്ട്രേഞ്ച്', 'Scarlet Witch', 'സ്കാർലെറ്റ് വിച്ച്'],
        ['Thanos', 'താനോസ്', 'Joker', 'ജോക്കർ'],
        ['Deadpool', 'ഡെഡ്‌പൂൾ', 'Flash', 'ഫ്ലാഷ്'],
        ['Venom', 'വെനം', 'Loki', 'ലോകി'],
        ['Groot', 'ഗ്രൂട്ട്', 'Rocket Raccoon', 'റോക്കറ്റ്'],
        ['Black Widow', 'ബ്ലാക്ക് വിഡോ', 'Hawkeye', 'ഹോക്ക്‌ഐ'],
        ['Nick Fury', 'നിക്ക് ഫ്യൂറി', 'Professor X', 'പ്രൊഫസർ എക്സ്']
      ];
    } else if (lower.includes('cricket') || lower.includes('sports')) {
      return [
        ['Virat Kohli', 'വിരാട് കോഹ്‌ലി', 'Rohit Sharma', 'രോഹിത് ശർമ്മ'],
        ['MS Dhoni', 'എം എസ് ധോണി', 'Sachin Tendulkar', 'സച്ചിൻ ടെണ്ടുൽക്കർ'],
        ['Sanju Samson', 'സഞ്ജു സാംസൺ', 'KL Rahul', 'കെ എൽ രാഹുൽ'],
        ['Jasprit Bumrah', 'ജസ്പ്രീത് ബുംറ', 'Mohammed Shami', 'മുഹമ്മദ് ഷാമി'],
        ['Hardik Pandya', 'ഹാർദ്ദിക് പാണ്ഡ്യ', 'Ravindra Jadeja', 'രവീന്ദ്ര ജഡേജ'],
        ['Lionel Messi', 'ലയണൽ മെസ്സി', 'Cristiano Ronaldo', 'ക്രിസ്റ്റ്യാനോ റൊണാൾഡോ'],
        ['Neymar', 'നെയ്മർ', 'Kylian Mbappe', 'എംബാപ്പെ'],
        ['Sunil Chhetri', 'സുനിൽ ഛേത്രി', 'IM Vijayan', 'ഐ എം വിജയൻ'],
        ['Neeraj Chopra', 'നീരജ് ചോപ്ര', 'PR Sreejesh', 'പി ആർ ശ്രീജേഷ്'],
        ['PV Sindhu', 'പി വി സിന്ധു', 'Saina Nehwal', 'സെയ്ന നെഹ്വാൾ'],
        ['Sachin Tendulkar', 'സച്ചിൻ', 'Brian Lara', 'ബ്രയാൻ ലാറ'],
        ['AB de Villiers', 'എ ബി ഡിവില്ലിയേഴ്സ്', 'Chris Gayle', 'ക്രിസ് ഗെയ്ൽ']
      ];
    } else if (lower.includes('anime') || lower.includes('cartoon')) {
      return [
        ['Naruto', 'നരുട്ടോ', 'Goku', 'ഗോകു'],
        ['Luffy', 'ലൂഫി', 'Ichigo', 'ഇച്ചിഗോ'],
        ['Zoro', 'സോറോ', 'Sasuke', 'സസുക്കെ'],
        ['Levi Ackerman', 'ലെവി', 'Kakashi', 'കകാഷി'],
        ['Light Yagami', 'ലൈറ്റ്', 'L Lawliet', 'എൽ'],
        ['Tanjiro', 'താൻജിറോ', 'Deku', 'ഡെകു'],
        ['Tom and Jerry', 'ടോം ആൻഡ് ജെറി', 'Scooby-Doo', 'സ്കൂബി ഡൂ'],
        ['Doraemon', 'ഡോറയെമോൻ', 'Shin-chan', 'ഷിൻചാൻ'],
        ['Ben 10', 'ബെൻ 10', 'Pokemon', 'പോക്കിമോൻ'],
        ['Pikachu', 'പിക്കാച്ചു', 'Agumon', 'അഗുമോൻ'],
        ['Mickey Mouse', 'മിക്കി മൗസ്', 'Donald Duck', 'ഡൊണാൾഡ് ഡക്ക്'],
        ['Chota Bheem', 'ഛോട്ടാ ഭീം', 'Motu Patlu', 'മോട്ടു പട്‌ലു']
      ];
    }
    
    // Universal Dynamic Fallback Generator for any custom topic
    return [
      [`${clean} Alpha`, `${clean} പ്രധാനി`, `${clean} Beta`, `${clean} രണ്ടാമൻ`],
      [`Hero of ${clean}`, `${clean} നായകൻ`, `Legend of ${clean}`, `${clean} വീരൻ`],
      [`Classic ${clean}`, `പരമ്പരാഗത ${clean}`, `Modern ${clean}`, `ആധുനിക ${clean}`],
      [`Golden ${clean}`, `സ്വർണ്ണ ${clean}`, `Silver ${clean}`, `വെള്ളി ${clean}`],
      [`Royal ${clean}`, `രാജകീയ ${clean}`, `Imperial ${clean}`, `പ്രതാപമുള്ള ${clean}`],
      [`Special ${clean}`, `വിശേഷ ${clean}`, `Supreme ${clean}`, `മികച്ച ${clean}`],
      [`Master ${clean}`, `${clean} മാസ്റ്റർ`, `Leader ${clean}`, `${clean} നേതാവ്`],
      [`Secret ${clean}`, `രഹസ്യ ${clean}`, `Mystery ${clean}`, `നിഗൂഢ ${clean}`],
      [`Prime ${clean}`, `പ്രധാന ${clean}`, `Ultra ${clean}`, `സൂപ്പർ ${clean}`],
      [`Ultimate ${clean}`, `അത്യുഗ്രൻ ${clean}`, `Extreme ${clean}`, `തീവ്ര ${clean}`],
      [`Famous ${clean}`, `പ്രശസ്ത ${clean}`, `Popular ${clean}`, `ജനപ്രിയ ${clean}`],
      [`Dynamic ${clean}`, `ഊർജ്ജസ്വല ${clean}`, `Vibrant ${clean}`, `സജീവ ${clean}`]
    ];
  },
  handleSend: async function(text) {
    if (!text || !text.trim()) return;
    const clean = text.trim();
    if ($('aiChatInput')) $('aiChatInput').value = '';
    
    this.addUserMessage(clean);
    
    // Add typing bubble
    const typingBubble = this.addBotMessage(`⏳ <i>Synthesizing bilingual pairs & balancing Imposter hints for <b>"${clean}"</b> ${getGeminiApiKey() ? '(using Live Google Gemini AI)' : '(using local engine)'}...</i>`);
    
    const result = await generateWithGeminiOrLocal(clean);
    const pairs = result.words || this.synthesizeWordsForTopic(clean);
    
    if (typingBubble && typingBubble.parentNode) typingBubble.parentNode.removeChild(typingBubble);
    
    const sampleRows = pairs.slice(0, 4).map(p => `
      <div class="preview-pair-row">
        <div><b>🧑 ${p[0]}</b> <small>(${p[1]})</small></div>
        <span>🤫 Imposter: <b>${p[2]}</b> <small>(${p[3]})</small></span>
      </div>
    `).join('');
    
    const cardId = 'ai_preview_btn_' + Date.now();
    const botResponse = `Here is your custom tailored category: <b style="color:#ff9e1c; font-size:15px;">${clean}</b> ✨ <small style="color:#a9a5b4;">(${result.source === 'gemini' ? '🧠 Google Gemini AI Generated' : '⚡ Local Synthesizer'})</small>! I have prepared ${pairs.length} bilingual Malayalam/English pairs where imposters get subtly related sibling words (<small style="color:#69d2a9;">never identical to the civilian word!</small>).
    
    <div class="ai-chat-preview-card">
      <h4>✨ Sample Pairs Preview (${pairs.length} total)</h4>
      <div class="preview-pairs">
        ${sampleRows}
      </div>
      <button id="${cardId}" class="add-selected-chat-btn">➕ Add & Select This Category Now!</button>
    </div>`;
    
    this.addBotMessage(botResponse);
    
    setTimeout(() => {
      const btn = document.getElementById(cardId);
      if (btn) {
        btn.onclick = async () => {
          btn.disabled = true;
          btn.textContent = '⏳ Adding to game...';
          await AIWordGenerator.addCustomCategory(clean, pairs);
          btn.textContent = '✓ Added to Game & Selected!';
          btn.style.background = '#065f46';
          this.addBotMessage(`🎉 <b>"${clean}"</b> has been added to your game packs and automatically selected! You can close this window to start playing, or ask me for another custom topic!`);
        };
      }
    }, 50);
  }
};

/* AI Word Generator for Custom Categories */
const AIWordGenerator = {
  addCustomCategory: async function(topicName, preGeneratedPairs = null) {
    if (!topicName || !topicName.trim()) {
      alert('Please type a custom category or topic name first!');
      return;
    }
    const cleanName = topicName.trim();
    const id = 'custom_' + cleanName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now();
    const addBtn = $('addCustomCategoryBtn');
    if (addBtn) addBtn.textContent = '⏳ AI Working...';

    let finalWords = preGeneratedPairs;
    if (!finalWords) {
      const genRes = await generateWithGeminiOrLocal(cleanName);
      finalWords = genRes.words;
    }

    const newPack = {
      id: id,
      name: cleanName,
      icon: '🤖',
      words: finalWords,
      isCustom: true
    };

    packs.push(newPack);
    selected.add(newPack.id);

    const customList = loadCustomCategories();
    customList.push(newPack);
    saveCustomCategories(customList);
    saveCategories();

    renderCategories();
    updateCategoryText();
    if (addBtn) addBtn.innerHTML = '<span>⚡</span> Quick Add';
    if ($('customCategoryInput')) $('customCategoryInput').value = '';
  }
};

/* Ultimate Sibling/Cousin Related Imposter Words (Never identical to actual word, perfectly blendable!) */
const IMPOSTER_SINGLE_WORDS = {
  // Funny Malayalam
  'Adipoli': 'Polikku', 'Poli Scene': 'Mass Entry', 'Sadhanam Kayyil Undo': 'Rahasyam', 'Thenga': 'Manga', 'Chetta': 'Aliya', 'Eda Mone': 'Chunk Bro', 'Kidilan': 'Superb Vibe', 'Chali': 'Thallu Meme', 'Koppu': 'Deshyam', 'Pani Paali': 'Scene Contra', 'Ambada': 'Kadi', 'Poda Pulle': 'Vidada Bro', 'Vattaano': 'Kirukku', 'Athu Sheri': 'Satyamano', 'Thallumala': 'Adi Oruka', 'Chummadive': 'Thamasikku', 'Oodayi': 'Trickery', 'Jada': 'Gettup', 'Vera Level': 'Top Notch', 'Blunder': 'Amali', 'Suhurthe': 'Friend', 'Kittu': 'Lucky Chance', 'Scene Contra': 'Pani Paali', 'Chamakku': 'Shoki',
  'Shavapetti': 'Marappetti', 'Pothu': 'Kaala', 'Kuthikazhapp': 'Thullal', 'Senti': 'Karachil', 'Kidu Vibe': 'Pwoli Vibe', 'Oomfi': 'Potti', 'Vatt': 'Brath', 'Pwoli': 'Superb Vibe', 'Ayyayyo': 'Kashtam', 'Scene illa': 'Cool Vibe', 'Thallal': 'Veeravadam', 'Kidu': 'Superb Vibe',

  // Movies
  'Nadodikkattu': 'Pattanapravesham', 'Thenmavin Kombath': 'Spadikam', 'Kilukkam': 'Chithram', 'Chithram': 'Kilukkam', 'Manichitrathazhu': 'Anandabhadram', 'Drishyam': 'Memories Thriller', 'Kumbalangi Nights': 'Maheshinte Prathikaaram', 'Bangalore Days': 'Premam Movie', 'Premam': 'Hridayam', 'Traffic': 'Take Off', 'Indian Rupee': 'Pranchiyettan', 'Romancham': 'In Harihar Nagar', 'Premalu': 'Super Sharanya', 'Aavesham': 'Rajamanikyam', 'Bramayugam': 'Tumbbad Folklore', 'Manjummel Boys': '2018 Survival', 'Godfather': 'Ramji Rao Speaking', 'Malaikottai Vaaliban': 'Double Barrel', 'Minnal Murali': 'Chota Mumbai', 'Kishkindha Kaandam': 'Iratta Mystery', 'Rorschach': 'Kannur Squad', 'Kattappanayile Rithwik Roshan': 'Udayananu Tharam', 'Varathan': 'Kala Estate', 'Bheeshma Parvam': 'Big B Saga', 'Memories': 'Anjaam Pathiraa', 'Classmates': 'Puthiya Mukham', 'Spadikam': 'Devasuram',

  // Characters
  'Georgekutty': 'Michael Appan', 'Nagavalli': 'Neelakandan', 'Sethumadhavan': 'Induchoodan', 'Dasan': 'Gafoor Captain', 'Mangalassery Neelakandan': 'Induchoodan', 'Appukuttan': 'Ramanan', 'Ramanan': 'Dashamoolam Damu', 'Induchoodan': 'Neelakandan', 'Kunjikoonan': 'Rameshan Nair', 'Koshy Kurien': 'Ayyappan Nair', 'Ayyappan Nair': 'Koshy Kurien', 'Mahesh Bhavana': 'Kunjiraman', 'Biju Paulose': 'Sethurama Iyer', 'Rameshan Nair': 'Georgekutty', 'Pachu': 'Kuttan', 'Kunjiraman': 'Manavalan', 'Pavanayi': 'Keeleri Achu', 'Manavalan': 'Dashamoolam Damu', 'Ganga': 'Anandavalli', 'Rukmini': 'Anandavalli', 'Girish M.A.': 'Sachin Boy', 'Shammi': 'Koshy Kurien', 'Ranga': 'Michael Appan', 'Dashamoolam Damu': 'Keeleri Achu', 'Gafoor Ka Dosth': 'Pavanayi', 'Anandavalli': 'Ganga', 'Beemboy': 'Keeleri Achu', 'Kattalan Porinchu': 'Neelakandan', 'Digambaran': 'Nagavalli', 'Dileep Role': 'Gafoor Captain', 'Kuttan': 'Mahesh Bhavana', 'Krishnan': 'Porinchu', 'Sachy': 'Kuruvila Inspector', 'Aadu Thoma': 'Induchoodan', 'Keeleri Achu': 'Dashamoolam Damu', 'Niranjan': 'Sethumadhavan',

  // Festivals
  'Onam': 'Vishu Festival', 'Vishu': 'Onam Celebration', 'Thrissur Pooram': 'Attukal Pongala', 'Attukal Pongala': 'Thrissur Pooram', 'Vallamkali': 'Nehru Trophy Race', 'Theyyam': 'Kathakali Art', 'Pulikali': 'Chenda Melam',

  // Places
  'Kochi': 'Kozhikode Town', 'Munnar': 'Wayanad Hills', 'Alappuzha': 'Kumarakom Lake', 'Wayanad': 'Munnar Hills', 'Varkala': 'Kovalam Beach', 'Kozhikode': 'Thalassery Town', 'Thiruvananthapuram': 'Kochi City', 'Bekal Fort': 'Palakkad Fort', 'Vagamon': 'Ponmudi Hills', 'Kumarakom': 'Alappuzha Lake', 'Athirappilly': 'Vazhachal Falls', 'Sabarimala': 'Guruvayur Temple', 'Guruvayur': 'Sabarimala Shrine', 'Edakkal Caves': 'Marayoor Rocks', 'Parambikulam': 'Silent Valley', 'Thekkady': 'Idukki Dam',

  // Kerala Food
  'Puttu': 'Idiyappam', 'Appam': 'Vellayappam', 'Porotta': 'Chapathi Meal', 'Dosa': 'Ghee Roast Pan', 'Idiyappam': 'Steam Cake', 'Karimeen Pollichathu': 'Fish Roast Curry', 'Thalassery Biriyani': 'Ghee Rice Chicken', 'Payasam': 'Halwa Sweet', 'Banana Chips': 'Sarkara Varatti', 'Pazham Pori': 'Unniyappam Snack', 'Sadya': 'Thalassery Biriyani', 'Avial': 'Thoran Dish', 'Kappa': 'Chenai Root Roast', 'Pathiri': 'Neypathiri Bread', 'Beef Fry': 'Mutton Pepper Roast', 'Chatti Pathiri': 'Unnakaya Sweet', 'Kallappam': 'Palappam Stew', 'Unniyappam': 'Neyyappam Sweet', 'Sulaimani': 'Masala Chai Glass', 'Halwa': 'Laddoo Sweet', 'Achappam': 'Kuzhalappam Snack', 'Kuzhalappam': 'Achappam Roll', 'Banana Fritters': 'Boli Lentil Sweet', 'Mixture': 'Murukku Crunch', 'Churuttu': 'Jalebi Syrup', 'Murukku': 'Mixture Snack', 'Laddoo': 'Mysore Pak Sweet', 'Jalebi': 'Halwa Plate', 'Mysore Pak': 'Boli Sweet', 'Parippu Vada': 'Uzhunnu Vada Fritter', 'Uzhunnu Vada': 'Parippu Vada Fritter', 'Boli': 'Payasam Dessert', 'Neyyappam': 'Unniyappam Treat', 'Vattayappam': 'Kozhukatta Steam', 'Elayappam': 'Vattayappam Cake', 'Sukhiyan': 'Pazham Pori Fritter', 'Kozhukatta': 'Elayappam Roll', 'Pazham Nirachathu': 'Unnakaya Snack', 'Mutta Mala': 'Chatti Pathiri Layer',

  // Household & Bakery
  'Chaya': 'Filter Coffee', 'Puffs': 'Meat Cutlet', 'Mutta Baji': 'Chilly Baji', 'Nilavilakku': 'Kindhi Brass', 'Kindhi': 'Uruli Vessel', 'Uruli': 'Cheenachatti Pan', 'Chiruva': 'Chattukam Ladle', 'Puttukutti': 'Idli Pathram', 'Ammikallu': 'Aattukallu Stone', 'Cheenachatti': 'Uruli Cookware', 'Muram': 'Kottah Basket', 'Kattil': 'Wooden Chair', 'Oonjal': 'Thottil Cradle', 'Kudam': 'Clay Bharani', 'Kithli': 'Thermos Flask', 'Chumbak': 'Key Chain', 'Plavu': 'Maavu Tree', 'Thegu': 'Kavungu Palm', 'Vaazha': 'Cheera Plant', 'Aanakutty': 'Puli Cub', 'Thorthu': 'Mundu Cloth', 'Chattukam': 'Chiruva Ladle', 'Mundum Neriyathum': 'Kasavu Saree',

  // People & Life & Vehicles
  'Mohanlal': 'Mammootty', 'Mammootty': 'Mohanlal', 'Manju Warrier': 'Shobana Dancer', 'Fahadh Faasil': 'Prithviraj Actor', 'Shobana': 'Manju Warrier', 'Chaya Kada': 'Bakery Junction', 'Kallu Shappu': 'Thattukada Spot', 'KSRTC': 'Private Bus Fleet', 'KSRTC Bus': 'Private Bus Fleet', 'Auto Rickshaw': 'Yellow Taxi Car', 'Tharavadu': 'Mana Palace', 'Aanavandi': 'Private Bus Ride', 'Vallam': 'Speed Boat Vessel', 'Autorickshaw': 'Taxi Car Ride', 'Bullet': 'RX 100 Bike', 'Houseboat': 'Motor Boat Stay', 'Junkar': 'Ferry Boat Service', 'Vellam': 'Stream Water', 'Lorry': 'Pickup Truck', 'Private Bus': 'KSRTC Express', 'Tempo Traveller': 'Tourist Bus Trip', 'Scooter': 'Gearless Scooty', 'Cycle': 'Electric Bike', 'Train': 'Metro Express', 'Metro': 'Railway Train', 'Flight': 'Charter Helicopter', 'Ambi': 'Contessa Sedan', 'Jeep': 'Mahindra Thar', 'Tractor': 'Harvester Machine', 'Excavator': 'Bulldozer Machine', 'Ambulance': 'Fire Rescue Truck', 'Fire Engine': 'Ambulance Unit',

  // School, Sports, Gulf
  'Kalolsavam': 'Sports Meet', 'Arts Day': 'Union Fest', 'College Canteen': 'Campus Thattukada', 'PTA Meeting': 'Open House Day', 'Onam Celebration': 'Freshers Day', 'Football': 'Cricket Match', 'Cricket': 'Football Game', 'Kabaddi': 'Kho-Kho Sport', 'Volleyball': 'Throwball Court', 'Pravasi': 'Expatriate NRI', 'Dubai': 'Doha Qatar Town', 'Gulf Money': 'Foreign Remittance', 'Chakka': 'Manga Fruit', 'Naatilekku': 'Vacation Journey'
};

const IMPOSTER_MALAYALAM_SINGLE_WORDS = {
  // Funny Malayalam
  'Adipoli': 'പൊളി വൈബ്', 'Poli Scene': 'മാസ്സ് എൻട്രി', 'Sadhanam Kayyil Undo': 'രഹസ്യം', 'Thenga': 'മാങ്ങ', 'Chetta': 'അളിയാ', 'Eda Mone': 'ചങ്ക് ബ്രോ', 'Kidilan': 'സൂപ്പർ വൈബ്', 'Chali': 'ട്രോൾ', 'Koppu': 'കലിപ്പ്', 'Pani Paali': 'സീൻ കോൺട്ര', 'Ambada': 'കളിയാക്കൽ', 'Poda Pulle': 'പോടാ ബ്രോ', 'Vattaano': 'കിറുക്ക്', 'Athu Sheri': 'സത്യമാണോ', 'Thallumala': 'കൂട്ടത്തല്ല്', 'Chummadive': 'തമാശക്ക്', 'Oodayi': 'ഉടായിപ്പ് വിദ്യ', 'Jada': 'അഹങ്കാരം', 'Vera Level': 'കിടു ലെവൽ', 'Blunder': 'അമളി', 'Suhurthe': 'സുഹൃത്ത്', 'Kittu': 'ഭാഗ്യം', 'Scene Contra': 'പണി പാളി', 'Chamakku': 'ഷോക്കി',
  'Shavapetti': 'മരപ്പെട്ടി', 'Pothu': 'കാള', 'Kuthikazhapp': 'തുള്ളൽ', 'Senti': 'സങ്കടം', 'Kidu Vibe': 'പൊളി വൈബ്', 'Oomfi': 'പൊട്ടി', 'Vatt': 'ഭ്രാന്ത്', 'Pwoli': 'സൂപ്പർ വൈബ്', 'Ayyayyo': 'കഷ്ടം', 'Scene illa': 'കൂൾ വൈബ്', 'Thallal': 'വീരവാദം', 'Kidu': 'സൂപ്പർ വൈബ്',

  // Movies
  'Nadodikkattu': 'പട്ടണപ്രവേശം', 'Thenmavin Kombath': 'സ്ഫടികം', 'Kilukkam': 'ചിത്രം', 'Chithram': 'കിലുക്കം', 'Manichitrathazhu': 'അനന്തഭദ്രം', 'Drishyam': 'മെമ്മറീസ്', 'Kumbalangi Nights': 'മഹേഷിന്റെ പ്രതികാരം', 'Bangalore Days': 'പ്രേമം', 'Premam': 'ഹൃദയം', 'Traffic': 'ടേക്ക് ഓഫ്', 'Indian Rupee': 'പ്രാഞ്ചിയേട്ടൻ', 'Romancham': 'ഇൻ ഹരിഹർ നഗർ', 'Premalu': 'സൂപ്പർ ശരണ്യ', 'Aavesham': 'രാജമാണിക്യം', 'Bramayugam': 'തുമ്പാട്', 'Manjummel Boys': '2018 സിനിമ', 'Godfather': 'റാംജി റാവു സ്പീക്കിംഗ്', 'Malaikottai Vaaliban': 'ഡബിൾ ബാരൽ', 'Minnal Murali': 'ഛോട്ടാ മുംബൈ', 'Kishkindha Kaandam': 'ഇരട്ട', 'Rorschach': 'കണ്ണൂർ സ്ക്വാഡ്', 'Kattappanayile Rithwik Roshan': 'ഉദയനാണ് താരം', 'Varathan': 'കള', 'Bheeshma Parvam': 'ബിഗ് ബി', 'Memories': 'അഞ്ചാം പാതിരാ', 'Classmates': 'പുതിയ മുഖം', 'Spadikam': 'ദേവാസുരം',

  // Characters
  'Georgekutty': 'മൈക്കിൾ അപ്പൻ', 'Nagavalli': 'നീലകണ്ഠൻ', 'Sethumadhavan': 'ഇന്ദുചൂഡൻ', 'Dasan': 'ഗഫൂർ ക്യാപ്റ്റൻ', 'Mangalassery Neelakandan': 'ഇന്ദുചൂഡൻ', 'Appukuttan': 'രമണൻ', 'Ramanan': 'ദശമൂലം ദാമു', 'Induchoodan': 'നീലകണ്ഠൻ', 'Kunjikoonan': 'രമേശൻ നായർ', 'Koshy Kurien': 'അയ്യപ്പൻ നായർ', 'Ayyappan Nair': 'കോശി കുര്യൻ', 'Mahesh Bhavana': 'കുഞ്ഞിരാമൻ', 'Biju Paulose': 'സേതുരാമ അയ്യർ', 'Rameshan Nair': 'ജോർജ് കുട്ടി', 'Pachu': 'കുട്ടൻ', 'Kunjiraman': 'മണവാളൻ', 'Pavanayi': 'കീശേരി അച്ചു', 'Manavalan': 'ദശമൂലം ദാമു', 'Ganga': 'ആനന്ദവല്ലി', 'Rukmini': 'ആനന്ദവല്ലി', 'Girish M.A.': 'സച്ചിൻ', 'Shammi': 'കോശി കുര്യൻ', 'Ranga': 'മൈക്കിൾ അപ്പൻ', 'Dashamoolam Damu': 'കീശേരി അച്ചു', 'Gafoor Ka Dosth': 'പവനായി', 'Anandavalli': 'ഗംഗ', 'Beemboy': 'കീശേരി അച്ചു', 'Kattalan Porinchu': 'നീലകണ്ഠൻ', 'Digambaran': 'നാഗവല്ലി', 'Dileep Role': 'ഗഫൂർ ക്യാപ്റ്റൻ', 'Kuttan': 'മഹേഷ് ഭാവന', 'Krishnan': 'പൊറിഞ്ചു', 'Sachy': 'കുരുവിള ഇൻസ്പെക്ടർ', 'Aadu Thoma': 'ഇന്ദുചൂഡൻ', 'Keeleri Achu': 'ദശമൂലം ദാമു', 'Niranjan': 'സേതുമാധവൻ',

  // Festivals
  'Onam': 'വിഷു ഉത്സവം', 'Vishu': 'ഓണാഘോഷം', 'Thrissur Pooram': 'ആറ്റുകാൽ പൊങ്കാല', 'Attukal Pongala': 'തൃശ്ശൂർ പൂരം', 'Vallamkali': 'നെഹ്റു ട്രോഫി', 'Theyyam': 'കഥകളി', 'Pulikali': 'ചെണ്ടമേളം',

  // Places
  'Kochi': 'കോഴിക്കോട് നഗരം', 'Munnar': 'വയനാട് മലകൾ', 'Alappuzha': 'കുമാരകം കായൽ', 'Wayanad': 'മൂന്നാർ കുന്നുകൾ', 'Varkala': 'കോവളം തീരം', 'Kozhikode': 'തലശ്ശേരി നഗരം', 'Thiruvananthapuram': 'കൊച്ചി നഗരം', 'Bekal Fort': 'പാലക്കാട് കോട്ട', 'Vagamon': 'പൊൻമുടി മല', 'Kumarakom': 'ആലപ്പുഴ കായൽ', 'Athirappilly': 'വാഴച്ചാൽ വെള്ളച്ചാട്ടം', 'Sabarimala': 'ഗുരുവായൂർ ക്ഷേത്രം', 'Guruvayur': 'ശബരിമല അമ്പലം', 'Edakkal Caves': 'മറയൂർ പാറകൾ', 'Parambikulam': 'സൈലന്റ് വാലി', 'Thekkady': 'ഇടുക്കി ഡാം',

  // Kerala Food
  'Puttu': 'ഇടിയപ്പം', 'Appam': 'വെള്ളയപ്പം', 'Porotta': 'ചപ്പാത്തി വിഭവം', 'Dosa': 'നെയ്യ് റോസ്റ്റ്', 'Idiyappam': 'ആവി പലഹാരം', 'Karimeen Pollichathu': 'മീൻ റോസ്റ്റ്', 'Thalassery Biriyani': 'നെയ്ച്ചോറും ചിക്കനും', 'Payasam': 'ഹൽവ മധുരം', 'Banana Chips': 'ശർക്കരവരട്ടി', 'Pazham Pori': 'ഉണ്ണിയപ്പം', 'Sadya': 'തലശ്ശേരി ബിരിയാണി', 'Avial': 'തോരൻ വിഭവം', 'Kappa': 'ചേന റോസ്റ്റ്', 'Pathiri': 'നെയ്പത്തിരി', 'Beef Fry': 'മട്ടൺ പെപ്പർ റോസ്റ്റ്', 'Chatti Pathiri': 'ഉന്നക്കായ മധുരം', 'Kallappam': 'പാലപ്പം കറി', 'Unniyappam': 'നെയ്യപ്പം മധുരം', 'Sulaimani': 'മസാല ചായ', 'Halwa': 'ലഡ്ഡു മധുരം', 'Achappam': 'കുഴലപ്പം പലഹാരം', 'Kuzhalappam': 'അച്ചപ്പം പലഹാരം', 'Banana Fritters': 'ബോളി മധുരം', 'Mixture': 'മുറുക്ക് പലഹാരം', 'Churuttu': 'ജിലേബി പാനി', 'Murukku': 'മിക്സ്ചർ പലഹാരം', 'Laddoo': 'മൈസൂർ പാക്ക്', 'Jalebi': 'ഹൽവ പലഹാരം', 'Mysore Pak': 'ബോളി മധുരം', 'Parippu Vada': 'ഉഴുന്നു വട പലഹാരം', 'Uzhunnu Vada': 'പരിപ്പ് വട പലഹാരം', 'Boli': 'പായസം മധുരം', 'Neyyappam': 'ഉണ്ണിയപ്പം മധുരം', 'Vattayappam': 'കൊഴുക്കട്ട ആവി', 'Elayappam': 'വട്ടയപ്പം പലഹാരം', 'Sukhiyan': 'പഴംപൊരി പലഹാരം', 'Kozhukatta': 'ഇലയപ്പം ആവി', 'Pazham Nirachathu': 'ഉന്നക്കായ പലഹാരം', 'Mutta Mala': 'ചട്ടി പത്തിരി',

  // Household & Bakery
  'Chaya': 'ഫിൽറ്റർ കാപ്പി', 'Puffs': 'മീറ്റ് കട്ട്‌ലറ്റ്', 'Mutta Baji': 'മുളക് ബജി', 'Nilavilakku': 'കുത്തുവിളക്ക്', 'Kindhi': 'ഉരുളി പാത്രം', 'Uruli': 'ചീനച്ചട്ടി', 'Chiruva': 'തവി', 'Puttukutti': 'ഇഡ്ഡലി പാത്രം', 'Ammikallu': 'ആട്ടുകല്ല്', 'Cheenachatti': 'ഉരുളി പാത്രം', 'Muram': 'കൊട്ട', 'Kattil': 'കശേര', 'Oonjal': 'തൊട്ടിൽ', 'Kudam': 'ഭരണി', 'Kithli': 'ഫ്ലാസ്ക്', 'Chumbak': 'കീ ചെയിൻ', 'Plavu': 'മാവ് മരം', 'Thegu': 'കവുങ്ങ്', 'Vaazha': 'ചീര', 'Aanakutty': 'പുലി കുട്ടി', 'Thorthu': 'മുണ്ട്', 'Chattukam': 'തവി പാത്രം', 'Mundum Neriyathum': 'കസ്സവ് സാരി',

  // People & Life & Vehicles
  'Mohanlal': 'മമ്മൂട്ടി', 'Mammootty': 'മോഹൻലാൽ', 'Manju Warrier': 'ശോഭന', 'Fahadh Faasil': 'പൃഥ്വിരാജ്', 'Shobana': 'മഞ്ജു വാര്യർ', 'Chaya Kada': 'ബേക്കറി കട', 'Kallu Shappu': 'തട്ടുകട സ്പോട്ട്', 'KSRTC': 'പ്രൈവറ്റ് ബസ്', 'KSRTC Bus': 'പ്രൈവറ്റ് ബസ്', 'Auto Rickshaw': 'ടാക്സി കാർ', 'Tharavadu': 'മന കൊട്ടാരം', 'Aanavandi': 'പ്രൈവറ്റ് ബസ്', 'Vallam': 'സ്പീഡ് ബോട്ട്', 'Autorickshaw': 'ടാക്സി കാർ', 'Bullet': 'ആർ എക്സ് 100', 'Houseboat': 'മോട്ടോർ ബോട്ട്', 'Junkar': 'ഫെറി ബോട്ട്', 'Vellam': 'നദി വെള്ളം', 'Lorry': 'പിക്കപ്പ് വാഹനം', 'Private Bus': 'കെഎസ്ആർടിസി എക്സ്പ്രസ്', 'Tempo Traveller': 'ടൂറിസ്റ്റ് ബസ്', 'Scooter': 'ഗിയർലെസ്സ് സ്കൂട്ടി', 'Cycle': 'ഇ-ബൈക്ക്', 'Train': 'മെട്രോ എക്സ്പ്രസ്', 'Metro': 'റെയിൽവേ ട്രെയിൻ', 'Flight': 'ഹെലികോപ്റ്റർ', 'Ambi': 'കോണ്ടസ്സ കാർ', 'Jeep': 'മഹീന്ദ്ര ഥാർ', 'Tractor': 'കൊയ്ത്തുയന്ത്രം', 'Excavator': 'ബുൾഡോസർ', 'Ambulance': 'ഫയർ റെസ്ക്യൂ വാഹനം', 'Fire Engine': 'ആംബുലൻസ് വാഹനം',

  // School, Sports, Gulf
  'Kalolsavam': 'കായിക മേള', 'Arts Day': 'യൂണിയൻ ഫെസ്റ്റ്', 'College Canteen': 'ക്യാമ്പസ് തട്ടുകട', 'PTA Meeting': 'ഓപ്പൺ ഹൗസ്', 'Onam Celebration': 'ഫ്രഷേഴ്സ് ഡേ', 'Football': 'ക്രിക്കറ്റ് മത്സരം', 'Cricket': 'ഫുട്ബോൾ മത്സരം', 'Kabaddi': 'ഖോ-ഖോ കളി', 'Volleyball': 'ത്രോബോൾ കളി', 'Pravasi': 'പ്രവാസി മലയാളി', 'Dubai': 'ദോഹ ഖത്തർ', 'Gulf Money': 'വിദേശ പണം', 'Chakka': 'മാങ്ങ പഴം', 'Naatilekku': 'അവധി യാത്ര'
};

const CATEGORY_SINGLE_WORDS = {
  'Funny Malayalam': 'Vibe', 'Movies': 'Cinema', 'Characters': 'Actor', 'Festivals': 'Celebration', 'Places': 'Travel', 'Kerala Food': 'Dish', 'Bakery & Snacks': 'Snack', 'Household Items': 'Home', 'People': 'Person', 'Kerala Life': 'Culture', 'Vehicles': 'Travel', 'College & School': 'Campus', 'Sports': 'Match', 'Gulf & NRI': 'Abroad'
};
const CATEGORY_MALAYALAM_SINGLE_WORDS = {
  'Funny Malayalam': 'വൈബ്', 'Movies': 'സിനിമ', 'Characters': 'നടൻ', 'Festivals': 'ആഘോഷം', 'Places': 'യാത്ര', 'Kerala Food': 'ഭക്ഷണം', 'Bakery & Snacks': 'പലഹാരം', 'Household Items': 'വീട്', 'People': 'ആൾ', 'Kerala Life': 'സംസ്കാരം', 'Vehicles': 'യാത്ര', 'College & School': 'ക്യാമ്പസ്', 'Sports': 'മത്സരം', 'Gulf & NRI': 'വിദേശം'
};

const MOVIE_DETAILS = {
  'Manichitrathazhu': { role: 'Iconic psychological horror thriller starring Mohanlal & Shobana about an ancient haunted mansion and split personality', roleMalayalam: 'മോഹൻലാലും ശോഭനയും തകർത്തഭിനയിച്ച പൈതൃക തറവാട്ടിലെ മാനസിക പ്രശ്നങ്ങളുടെയും നാഗവല്ലിയുടെയും കഥ' },
  'Drishyam': { role: 'Clever family thriller starring Mohanlal where a resourceful father covers up an accidental crime to save his family', roleMalayalam: 'കുടുംബത്തെ രക്ഷിക്കാൻ ബുദ്ധിപൂർവ്വം തെളിവുകൾ നശിപ്പിച്ച് പൊലീസിനെ കബളിപ്പിക്കുന്ന ജോർജ്ജുകുട്ടിയുടെ കഥ' },
  'Kumbalangi Nights': { role: 'Heartwarming coastal drama about four dysfunctional brothers finding love and brotherhood while facing Shammi', roleMalayalam: 'കുമ്പളങ്ങിയിലെ നാല് സഹോദരന്മാരുടെ ജീവിതവും സ്നേഹവും ഷമ്മിയുമായുള്ള ഏറ്റുമുട്ടലും പറയുന്ന സിനിമ' },
  'Bangalore Days': { role: 'Feel-good celebration of friendship and cousinhood starring Dulquer, Fahadh, and Nazriya exploring life in Bangalore', roleMalayalam: 'ബാംഗ്ലൂരിലേക്ക് ചേക്കേറുന്ന മൂന്ന് കസിൻസിന്റെ സൗഹൃദവും പ്രണയവും ജീവിത മാറ്റങ്ങളും' },
  'Premam': { role: 'Romantic blockbuster starring Nivin Pauly following George through three distinct stages of love across his life', roleMalayalam: 'ജോർജ്ജിന്റെ സ്കൂൾ, കോളേജ്, യുവത്വ കാലഘട്ടങ്ങളിലെ മൂന്ന് പ്രണയങ്ങളുടെ കഥ' },
  'Traffic': { role: 'High-stakes multi-narrative thriller racing against time to transport a donor organ through heavy road traffic', roleMalayalam: 'അപകടത്തിൽപ്പെട്ട കുട്ടിയുടെ ജീവൻ രക്ഷിക്കാൻ ഹൃദയവുമായി റോഡിലൂടെ നടത്തുന്ന അടിയന്തര യാത്ര' },
  'Indian Rupee': { role: 'Satirical drama starring Prithviraj about a real-estate broker chasing quick wealth and moral realities', roleMalayalam: 'എളുപ്പത്തിൽ പണക്കാരനാകാൻ റിയൽ എസ്റ്റേറ്റ് ബിസിനസിലേക്ക് ഇറങ്ങുന്ന ജയപ്രകാശിന്റെ കഥ' },
  'Romancham': { role: 'Hilarious horror-comedy about bachelors playing with an Ouija board and inviting a quirky ghost named Anamika', roleMalayalam: 'ബാംഗ്ലൂരിൽ ഒന്നിച്ച് താമസിക്കുന്ന കൂട്ടുകാർ ഓജോ ബോർഡ് കളിച്ച് അനാമിക എന്ന പ്രേതത്തെ വിളിച്ചുവരുത്തുന്ന തമാശ' },
  'Premalu': { role: 'Lighthearted romantic comedy set in Hyderabad between Sachin and Reenu exploring modern youth relationships', roleMalayalam: 'ഹൈദരാബാദിൽ വെച്ച് സച്ചിനും രേണുവും തമ്മിൽ ഉണ്ടാകുന്ന രസകരമായ പ്രണയവും സൗഹൃദവും' },
  'Aavesham': { role: 'High-octane action comedy starring Fahadh Faasil as Ranga Annan, a dancing Bangalore gangster helping three college kids', roleMalayalam: 'കോളേജിലെ സീനിയർമാരെ നേരിടാൻ ബാംഗ്ലൂരിലെ പ്രാഞ്ചിയേട്ടൻ ഗുണ്ടയായ രംഗ അണ്ണന്റെ സഹായം തേടുന്ന കുട്ടികളുടെ കഥ' },
  'Bramayugam': { role: 'Monochrome folk-horror mystery starring Mammootty inside a cursed, time-twisted ancient mana ruled by Kodumon Potti', roleMalayalam: 'മമ്മൂട്ടി അഭിനയിച്ച ഭയപ്പെടുത്തുന്ന പഴയകാല മനയിലെ നിഗൂഢതകളും കാലത്തിന്റെ കളിപ്പാട്ടമായ മനുഷ്യരും' },
  'Manjummel Boys': { role: 'Gripping survival thriller based on true events where friends risk their lives to rescue a buddy from Guna Caves', roleMalayalam: 'കൊടൈക്കനാലിലെ ഗുണ കേവ്സിൽ വീണുപോയ കൂട്ടുകാരനെ ജീവൻ പണയം വെച്ച് രക്ഷിക്കുന്ന സുഹൃത്തുക്കളുടെ കഥ' },
  'Godfather': { role: 'Evergreen comedy classic about the fierce rivalry between Anjooran’s all-male family and Achamma’s household', roleMalayalam: 'അഞ്ഞൂറാന്റെയും ആനപ്പാറ അച്ചമ്മയുടെയും കുടുംബങ്ങൾ തമ്മിലുള്ള വൈരാഗ്യവും തമാശ നിറഞ്ഞ പ്രണയവും' },
  'Malaikottai Vaaliban': { role: 'Periodic action fantasy about an undisputed traveling wrestler who conquers champions across desert lands', roleMalayalam: 'നാടോടി ഗുസ്തിക്കാരനായ വാലിബൻ വിവിധ നാടുകളിലെ വീരന്മാരെ പരാജയപ്പെടുത്തുന്ന നാടോടിക്കഥ' },
  'Minnal Murali': { role: 'Superhero origin story starring Tovino Thomas where a tailor gains lightning superpowers alongside a tragic villain', roleMalayalam: 'മിന്നലേറ്റു സൂപ്പർ പവറുകൾ ലഭിച്ച തയ്യൽക്കാരനായ ജെയ്സന്റെയും വില്ലനായ ഷിബുവിന്റെയും കഥ' },
  'Kishkindha Kaandam': { role: 'Intense forest-border psychological mystery involving a retired military father, his son, and a missing child inquiry', roleMalayalam: 'വനമേഖലയോട് ചേർന്ന വീട്ടിൽ നടക്കുന്ന നിഗൂഢമായ അന്വേഷണങ്ങളും മുൻ പട്ടാളക്കാരനായ അച്ഛന്റെയും മകന്റെയും കഥ' },
  'Rorschach': { role: 'Dark psychological revenge thriller starring Mammootty tracking down a faceless ghost-like enemy with a white mask', roleMalayalam: 'തന്റെ ഭാര്യയെ കൊന്ന മുഖംമൂടിക്കാരനായ പ്രതിയെ തേടി ലൂക്ക് ആന്റണി നടത്തുന്ന നിഗൂഢമായ പ്രതികാരം' },
  'Kattappanayile Rithwik Roshan': { role: 'Inspirational comedy about an ordinary village guy aspiring to become a cinema hero despite societal stereotypes', roleMalayalam: 'സിനിമാ നടനാകാൻ ആഗ്രഹിച്ച് കട്ടപ്പനയിൽ ജീവിക്കുന്ന കിച്ചുവിന്റെ സിനിമാ മോഹങ്ങളും തമാശകളും' },
  'Varathan': { role: 'Action-packed home-invasion thriller starring Fahadh Faasil defending his remote plantation estate from hostile locals', roleMalayalam: 'നാട്ടിൻപുറത്തെ എസ്റ്റേറ്റ് വീട്ടിൽ അതിക്രമിച്ചുകയറുന്ന നാട്ടുകാരെ ധീരമായി നേരിടുന്ന അബിയുടെയും പ്രിയയുടെയും കഥ' },
  'Bheeshma Parvam': { role: 'Stylish gangster family saga starring Mammootty as Michael Anjoottikkaran reigning over Mattancherry', roleMalayalam: 'മട്ടാഞ്ചേരിയിലെ അഞ്ചൂട്ടി കുടുംബത്തിന്റെ കാരണവരും കരുത്തനുമായ മൈക്കിൾ അപ്പന്റെ കഥ' },
  'Memories': { role: 'Edge-of-the-seat crime investigative thriller where an alcoholic police officer tracks a twisted serial killer', roleMalayalam: 'കുടുംബം നഷ്ടപ്പെട്ട ദുഃഖത്തിൽ മദ്യപാനിയായ പോലീസ് ഉദ്യോഗസ്ഥൻ ഒരു സീരിയൽ കില്ലറെ കണ്ടെത്തുന്ന അന്വേഷണം' },
  'Classmates': { role: 'Nostalgic campus romance and murder mystery surrounding a college reunion and long-buried secret diaries', roleMalayalam: 'കോളേജ് റീയൂണിയനിടയിൽ നടക്കുന്ന കൊലപാതക ശ്രമവും പഴയകാല ക്യാമ്പസ് പ്രണയ സൗഹൃദങ്ങളുടെയും കഥ' },
  'Spadikam': { role: 'Cult action drama starring Mohanlal as Aadu Thoma, the rebellious quarry owner and Ray-Ban wearing lorry driver', roleMalayalam: 'കണക്കുമാഷായ അച്ഛന്റെ കർക്കശ സ്വഭാവം മൂലം നാടുവിട്ടുപോയി ആടുകളെയും ലോറികളെയും സ്നേഹിക്കുന്ന ആടു തോമയുടെ കഥ' }
};

const CHARACTER_DETAILS = {
  'Georgekutty': { movie: 'Drishyam', movieMalayalam: 'ദൃശ്യം', role: 'Resourceful cable operator who cleverly covers up an accidental crime to protect his family', roleMalayalam: 'കുടുംബത്തെ രക്ഷിക്കാൻ അപകടകരമായ ഒരു രഹസ്യം മറച്ചുവെക്കുന്ന കേബിൾ ടിവി ഓപ്പറേറ്റർ' },
  'Nagavalli': { movie: 'Manichitrathazhu', movieMalayalam: 'മണിച്ചിത്രത്താഴ്', role: 'Vengeful spirit of an ancient Tamil dancer whose persona takes over Ganga', roleMalayalam: 'പഴയകാലത്തെ ദുരന്തകഥയുള്ള തമിഴ് നർത്തകിയുടെ പ്രതികാരദാഹിയായ ആത്മാവ്' },
  'Sethumadhavan': { movie: 'Kireedam', movieMalayalam: 'കിരീടം', role: 'Innocent young man aspiring to be a police officer whose life turns tragic after fighting a local goon', roleMalayalam: 'പോലീസുകാരനാകാൻ ആഗ്രഹിച്ച് സാഹചര്യങ്ങൾ കൊണ്ട് ഗുണ്ടയുമായി ഏറ്റുമുട്ടേണ്ടി വന്ന ചെറുപ്പക്കാരൻ' },
  'Dasan': { movie: 'Nadodikkattu', movieMalayalam: 'നാടോടിക്കാറ്റ്', role: 'Unemployed youth who dreams of going to Dubai but gets tricked into landing in Madras and becomes a CID', roleMalayalam: 'ദുബായിലേക്ക് പോകാൻ ആഗ്രഹിച്ച് ഗഫൂർ ചതിച്ചതുകൊണ്ട് മദ്രാസിൽ എത്തി സിഐഡി ആയ യുവാവ്' },
  'Mangalassery Neelakandan': { movie: 'Devasuram', movieMalayalam: 'ദേവാസുരം', role: 'Proud and powerful feudal lord whose life and arrogance transform through love and rivalry', roleMalayalam: 'അഭിമാനിയും പ്രബലനുമായ ജന്മിയും ശേഖരനുമായുള്ള വൈരാഗ്യത്തിലൂടെ ജീവിതം മാറിയ വ്യക്തിയും' },
  'Appukuttan': { movie: 'Ramji Rao Speaking', movieMalayalam: 'റാംജി റാവു സ്പീക്കിംഗ്', role: 'Innocent, talkative, and humorous bachelor friend who always causes funny misunderstandings', roleMalayalam: 'എപ്പോഴും തമാശയുള്ള അബദ്ധങ്ങൾ വരുത്തിവെക്കുന്ന സംസാരപ്രിയനായ സുഹൃത്ത്' },
  'Ramanan': { movie: 'Punjabi House', movieMalayalam: 'പഞ്ചാബി ഹൗസ്', role: 'Hilarious and loyal servant of Muthalali famous for his witty retorts and unforgettable dialogues', roleMalayalam: 'മുതലാളിയുടെ വിശ്വസ്തനും തമാശ നിറഞ്ഞ മറുപടികളിലൂടെ ചിരിപ്പിക്കുന്നതുമായ സഹായി' },
  'Induchoodan': { movie: 'Narasimham', movieMalayalam: 'നരസിംഹം', role: 'Bold, fiery, and righteous hero who fights for justice and family honor', roleMalayalam: 'നീതിക്കും കുടുംബത്തിന്റെ അഭിമാനത്തിനും വേണ്ടി പോരാടുന്ന തന്റേടമുള്ള നായകൻ' },
  'Kunjikoonan': { movie: 'Kunjikoonan', movieMalayalam: 'കുഞ്ഞിക്കൂനൻ', role: 'Kind-hearted and selfless village hunchback whose pure love touches everyone around him', roleMalayalam: 'നിഷ്കളങ്കമായ സ്നേഹത്തോടെ എല്ലാവരെയും സഹായിക്കുന്ന ഗ്രാമത്തിലെ കൂനൻ' },
  'Koshy Kurien': { movie: 'Ayyappan & Koshiyum', movieMalayalam: 'അയ്യപ്പനും കോശിയും', role: 'Wealthy, influential ex-havildar whose ego clash with a police officer sparks an intense feud', roleMalayalam: 'പോലീസ് ഉദ്യോഗസ്ഥനുമായുള്ള ഈഗോ പ്രശ്നം വലിയ തർക്കത്തിന് വഴിവെക്കുന്ന സമ്പന്നനായ മുൻ പട്ടാളക്കാരൻ' },
  'Ayyappan Nair': { movie: 'Ayyappan & Koshiyum', movieMalayalam: 'അയ്യപ്പനും കോശിയും', role: 'Strict and principled senior police officer who reveals his fierce past when his self-respect is challenged', roleMalayalam: 'ആത്മാഭിമാനത്തെ ചോദ്യം ചെയ്തപ്പോൾ തന്റെ പഴയ കരുത്ത് പുറത്തെടുക്കുന്ന സീനിയർ പോലീസ് ഉദ്യോഗസ്ഥൻ' },
  'Mahesh Bhavana': { movie: 'Maheshinte Prathikaaram', movieMalayalam: 'മഹേഷിന്റെ പ്രതികാരം', role: 'Simple village photographer who takes a vow not to wear slippers until he avenges his public humiliation', roleMalayalam: 'തനിക്ക് നേരിട്ട അപമാനത്തിന് പകരം ചോദിക്കുന്നതുവരെ ചെരുപ്പിടില്ലെന്ന് പ്രതിജ്ഞ ചെയ്ത സ്റ്റുഡിയോ ഫോട്ടോഗ്രാഫർ' },
  'Biju Paulose': { movie: 'Action Hero Biju', movieMalayalam: 'ആക്ഷൻ ഹീറോ ബിജു', role: 'Dedicated and realistic Sub-Inspector of Police handling everyday city crimes and human situations', roleMalayalam: 'ദൈനംദിന കേസുകളും സാധാരണക്കാരുടെ പ്രശ്നങ്ങളും കൈകാര്യം ചെയ്യുന്ന സിൻസിയറായ സബ് ഇൻസ്പെക്ടർ' },
  'Rameshan Nair': { movie: 'Thanmathra', movieMalayalam: 'തന്മാത്ര', role: 'Caring government employee and loving father whose heartbreaking struggle with Alzheimer’s touches deeply', roleMalayalam: 'അൽസ്ഹൈമേഴ്സ് രോഗം ബാധിച്ച് ഓർമ്മകൾ നഷ്ടപ്പെടുന്ന സ്നേഹസമ്പന്നനായ സർക്കാർ ഉദ്യോഗസ്ഥനും പിതാവും' },
  'Pachu': { movie: 'Pachuvum Athbutha Vilakkum', movieMalayalam: 'പാച്ചുവും അത്ഭുത വിളക്കും', role: 'Helpful and resourceful young man whose journey to rescue a young girl changes his perspective on life', roleMalayalam: 'ഒരു അമ്മൂമ്മയെയും പെൺകുട്ടിയെയും സഹായിക്കാനായി യാത്ര തിരിച്ച സ്നേഹമുള്ള ചെറുപ്പക്കാരൻ' },
  'Kunjiraman': { movie: 'Kunjiramayanam', movieMalayalam: 'കുഞ്ഞിരാമായണം', role: 'Well-meaning village youth whose hilarious rivalry and attempts to get married keep the village entertained', roleMalayalam: 'കല്യാണം കഴിക്കാൻ ശ്രമിക്കുന്നതും ഗ്രാമത്തിൽ രസകരമായ തർക്കങ്ങളുണ്ടാക്കുന്നതുമായ യുവാവ്' },
  'Pavanayi': { movie: 'Nadodikkattu', movieMalayalam: 'നാടോടിക്കാറ്റ്', role: 'Overconfident and comical underworld hitman (P.V. Narayanan) from Bombay whose weapons and plans fail miserably', roleMalayalam: 'ബോംബെയിൽ നിന്നും ആയുധങ്ങളുമായി വന്ന വലിയ അവകാശവാദങ്ങൾ ഉന്നയിച്ച തമാശക്കാരനായ കൊലയാളി' },
  'Manavalan': { movie: 'Pulival Kalyanam', movieMalayalam: 'പുലിവാൽ കല്യാണം', role: 'Hilarious taxi company owner famous for his yellow shirt, quirky business ideas, and legendary dialogues', roleMalayalam: 'മഞ്ഞ ഷർട്ടിട്ട് രസകരമായ തട്ടിപ്പുകളും തമാശ ഡയലോഗുകളുമായി നടക്കുന്ന ടാക്സി കമ്പനി ഉടമ' },
  'Ganga': { movie: 'Manichitrathazhu', movieMalayalam: 'മണിച്ചിത്രത്താഴ്', role: 'Innocent young wife whose fascination with ancient folklore leads her split personality to embody Nagavalli', roleMalayalam: 'പഴയ തറവാട്ടിലെ ഐതിഹ്യങ്ങളിൽ ആകൃഷ്ടയായി നാഗവല്ലിയുടെ ഭാവം ഉൾക്കൊണ്ട യുവതി' },
  'Rukmini': { movie: 'Nandanam', movieMalayalam: 'നന്ദനം', role: 'Traditional, innocent elderly maid whose devoted nature and humorous confusion bring warmth to the ancestral home', roleMalayalam: 'തറവാട്ടിലെ കാര്യങ്ങൾ നോക്കിനടത്തുന്ന നിഷ്കളങ്കയും ഭക്തയുമായ പ്രായമുള്ള വേലക്കാരി' },
  'Girish M.A.': { movie: 'Premalu', movieMalayalam: 'പ്രേമലു', role: 'Hilariously confident yet clumsy IT bachelor whose attempts at romance and rivalry create non-stop fun', roleMalayalam: 'പ്രണയിക്കാൻ ശ്രമിക്കുന്നതിനിടയിൽ രസകരമായ അബദ്ധങ്ങൾ കാണിക്കുന്ന ഐടി ചെറുപ്പക്കാരൻ' },
  'Shammi': { movie: 'Kumbalangi Nights', movieMalayalam: 'കുമ്പളങ്ങി നൈറ്റ്സ്', role: 'Hyper-masculine, controlling, and eerily smiling houseguest who obsessively claims to be the complete man', roleMalayalam: 'വീട്ടിലെ കാര്യങ്ങളെല്ലാം നിയന്ത്രിക്കാൻ ശ്രമിക്കുന്ന ഭയാനകമായ ചിരിയുള്ള വ്യക്തി' },
  'Ranga': { movie: 'Aavesham', movieMalayalam: 'ആവേശം', role: 'Flamboyant, kind-hearted Bangalore gangster (Ranga Annan) who loves dancing, reels, and protecting college kids', roleMalayalam: 'കോളേജ് പിള്ളേരെ സഹായിക്കാനും റീൽസ് ചെയ്യാനും ഇഷ്ടപ്പെടുന്ന ആവേശക്കാരനായ ബാംഗ്ലൂർ ഗുണ്ട' },
  'Dashamoolam Damu': { movie: 'Chattambinadu', movieMalayalam: 'ചട്ടമ്പിനാട്', role: 'Boastful and cowardly local goon whose hilarious facial expressions made him Kerala’s ultimate meme king', roleMalayalam: 'വലിയ വീരവാദം പറയുമെങ്കിലും പേടിത്തൊണ്ടനായ ട്രോളുകളിലെ പ്രിയപ്പെട്ട കഥാപാത്രം' },
  'Gafoor Ka Dosth': { movie: 'Nadodikkattu', movieMalayalam: 'നാടോടിക്കാറ്റ്', role: 'Sly and humorous boat captain (Gafoor) who tricks Dasan and Vijayan into boarding a boat to Madras instead of Dubai', roleMalayalam: 'ദാസനെയും വിജയനെയും ദുബായിലാക്കാമെന്ന് പറഞ്ഞ് കബളിപ്പിച്ച് മദ്രാസിലെത്തിച്ച വഞ്ചിക്കാരൻ' },
  'Anandavalli': { movie: 'Achuvinte Amma', movieMalayalam: 'അച്ചുവിന്റെ അമ്മ', role: 'Resilient, cheerful, and loving single mother who shares a beautiful, friend-like bond with her daughter', roleMalayalam: 'മകളോട് കൂട്ടുകാരിയെപ്പോലെ ഇടപെടുന്ന കരുത്തയും സ്നേഹസമ്പന്നയുമായ അമ്മ' },
  'Beemboy': { movie: 'CID Moosa', movieMalayalam: 'സിഐഡി മൂസ', role: 'Immensely strong yet gentle-hearted mute assistant of CID Moosa who easily lifts heavy opponents and doors', roleMalayalam: 'സിഐഡി മൂസയുടെ സഹായിയും വലിയ ഭാരങ്ങളും ആളുകളെയും നിഷ്പ്രയാസം ഉയർത്തുന്ന കരുത്തനും' },
  'Kattalan Porinchu': { movie: 'Porinju Mariam Jose', movieMalayalam: 'പൊറിഞ്ചു മറിയം ജോസ്', role: 'Fearless market butcher whose loyal friendships and silent, undying love form the emotional core of the town', roleMalayalam: 'ചന്തയിലെ കരുത്തനും കൂട്ടുകാരോടും പ്രിയപ്പെട്ടവളോടും ആഴത്തിലുള്ള സ്നേഹം സൂക്ഷിക്കുന്നവനും' },
  'Digambaran': { movie: 'Anandabhadram', movieMalayalam: 'അനന്തഭദ്രം', role: 'Dark, powerful, and mesmerizing sorcerer who performs occult rituals and body transformation to gain immortality', roleMalayalam: 'അമാനുഷിക ശക്തിയും അനശ്വരതയും നേടാനായി മന്ത്രവാദവും ആഭിചാരവും ചെയ്യുന്ന മാന്ത്രികൻ' },
  'Dileep Role': { movie: 'CID Moosa', movieMalayalam: 'സിഐഡി മൂസ', role: 'Enthusiastic private detective (Sahadevan / CID Moosa) whose funny gadgets and slapstick methods solve big crimes', roleMalayalam: 'രസകരമായ ഉപകരണങ്ങളും തമാശകളുമായി കേസുകൾ അന്വേഷിക്കുന്ന പ്രൈവറ്റ് ഡിറ്റക്ടീവ് സിഐഡി മൂസ' },
  'Kuttan': { movie: 'Bangalore Days', movieMalayalam: 'ബാംഗ്ലൂർ ഡെയ്സ്', role: 'Naive and traditional village youth (Joshy / Kuttan) who moves to Bangalore for IT work and discovers city life', roleMalayalam: 'ബാംഗ്ലൂരിൽ ഐടി ജോലിക്ക് പോയ നിഷ്കളങ്കനും നാട്ടിൻപുറത്തുകാരനുമായ കസിൻ' },
  'Krishnan': { movie: 'Kammatipaadam', movieMalayalam: 'കമ്മട്ടിപ്പാടം', role: 'Loyal friend who returns to Kochi to search for his missing buddy and uncovers the gritty history of their old colony', roleMalayalam: 'കാണാതായ തന്റെ പഴയ സുഹൃത്തിനെ തേടി നാട്ടിലെത്തി കമ്മട്ടിപ്പാടത്തിന്റെ ചരിത്രം ഓർത്തെടുക്കുന്നയാൾ' },
  'Sachy': { movie: 'Driving Licence', movieMalayalam: 'ഡ്രൈവിംഗ് ലൈസൻസ്', role: 'Strict Motor Vehicle Inspector and die-hard superstar fan (Kuruvila Joseph) whose hurt pride leads to a public clash', roleMalayalam: 'തന്റെ പ്രിയപ്പെട്ട സിനിമാ നടനുമായുള്ള തെറ്റിദ്ധാരണ മൂലം വാശിയിലാകുന്ന മോട്ടോർ വെഹിക്കിൾ ഇൻസ്പെക്ടർ' },
  'Aadu Thoma': { movie: 'Spadikam', movieMalayalam: 'സ്ഫടികം', role: 'Rebellious quarry owner and lorry driver (Thomas Chacko) with Ray-Ban glasses who defied his strict mathematician father', roleMalayalam: 'റെയ്ബാൻ ഗ്ലാസ്സുവെച്ച് ജീവിക്കുന്ന ധീരനായ ലോറി ഡ്രൈവറും ക്വാറി ഉടമയുമായ തോമസ് ചാക്കോ' },
  'Keeleri Achu': { movie: 'Kalyanaraman', movieMalayalam: 'കല്യാണരാമൻ', role: 'Comical muscleman and gym master whose harmless boasting and physical stunts create riotous wedding laughter', roleMalayalam: 'വലിയ ഗുണ്ടയാണെന്ന് ഭാവിക്കുന്ന തമാശക്കാരനായ ജിം മാസ്റ്റർ' },
  'Niranjan': { movie: 'Summer in Bethlehem', movieMalayalam: 'സമ്മർ ഇൻ ബേത്‌ലഹേം', role: 'Philosophical death-row prisoner who shares a deeply moving final meeting with his beloved before his execution', roleMalayalam: 'വധശിക്ഷയ്ക്ക് മുമ്പ് തനിക്ക് പ്രിയപ്പെട്ടവളെ അവസാനമായി കാണുന്ന വൈകാരികമായ കഥാപാത്രം' }
};

function chooseWord(){
  const usable=packs.filter(p=>selected.has(p.id));
  if(!usable.length){
    packs.forEach(p=>selected.add(p.id));
  }
  const category=usable[Math.floor(Math.random()*usable.length)]||packs[0];
  const picked=category.words[Math.floor(Math.random()*category.words.length)];
  
  // Golden Rule: Imposter word MUST be subtly related to actual word in the exact same domain/theme,
  // NEVER identical or sharing exact duplicate tokens (e.g., if civilian is Kappa Biryani, imposter cannot get Kappa or Biryani).
  let impWord = IMPOSTER_SINGLE_WORDS[picked[0]];
  let impMalWord = IMPOSTER_MALAYALAM_SINGLE_WORDS[picked[0]];

  // If word not directly in map (or from AI custom category), smartly pick a related sibling word from the pack
  // or use the pre-paired AI hint that does NOT overlap keywords with the civilian word
  if (!impWord || !impMalWord || impWord.toLowerCase() === picked[0].toLowerCase() || picked[0].toLowerCase().includes(impWord.toLowerCase())) {
    if (picked[2] && picked[3] && picked[2] !== picked[0] && !picked[0].toLowerCase().includes(picked[2].split(' ')[0].toLowerCase())) {
      impWord = picked[2];
      impMalWord = picked[3];
    } else {
      // Find another word in this category that has zero keyword overlap
      const siblings = category.words.filter(w => {
        const w0Lower = w[0].toLowerCase();
        const p0Lower = picked[0].toLowerCase();
        return w0Lower !== p0Lower && !p0Lower.includes(w0Lower) && !w0Lower.includes(p0Lower);
      });
      if (siblings.length) {
        const sib = siblings[Math.floor(Math.random() * siblings.length)];
        impWord = sib[0];
        impMalWord = sib[1];
      } else {
        impWord = CATEGORY_SINGLE_WORDS[category.name] || 'Related Secret';
        impMalWord = CATEGORY_MALAYALAM_SINGLE_WORDS[category.name] || 'ബന്ധമുള്ള വാക്ക്';
      }
    }
  }

  word = {
    latin: picked[0],
    malayalam: picked[1],
    hintLatin: impWord,
    hintMalayalam: impMalWord,
    imposterWord: impWord,
    category: category.name
  };

  const charDetails = CHARACTER_DETAILS[picked[0]];
  const movieDetails = MOVIE_DETAILS ? MOVIE_DETAILS[picked[0]] : null;
  if(charDetails){
    word.movieName=charDetails.movie;
    word.movieMalayalam=charDetails.movieMalayalam;
    word.characterRole=charDetails.role;
    word.characterRoleMalayalam=charDetails.roleMalayalam;
    word.detailType='character';
  }else if(movieDetails){
    word.movieName=picked[0];
    word.movieMalayalam=picked[1]||picked[0];
    word.characterRole=movieDetails.role;
    word.characterRoleMalayalam=movieDetails.roleMalayalam;
    word.detailType='movie';
  }else if(category.id==='characters'||category.name==='Characters'){
    word.movieName='Malayalam Movie';
    word.movieMalayalam='മലയാള സിനിമ';
    word.characterRole=picked[2]||'Famous Character';
    word.characterRoleMalayalam=picked[3]||'പ്രശസ്ത കഥാപാത്രം';
    word.detailType='character';
  }else if(category.isCustom){
    word.movieName=category.name + ' Theme';
    word.movieMalayalam=category.name + ' വിഷയം';
    word.characterRole=`AI generated custom word for ${picked[0]}`;
    word.characterRoleMalayalam=`${picked[0]} എന്നതിനെക്കുറിച്ചുള്ള വിവരണം`;
    word.detailType='custom';
  }

  const indices = players.map((_,idx)=>idx);
  for(let i=indices.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [indices[i],indices[j]]=[indices[j],indices[i]];
  }
  imposters=new Set(indices.slice(0,Math.min(imposterCount,players.length-1)));
}

function startRound(){chooseWord();currentPlayer=0;showPass()};
let isSwipedUp = false;
function showPass(){if($('passName'))$('passName').textContent=players[currentPlayer]||`Player ${currentPlayer+1}`;if($('roundNumber'))$('roundNumber').textContent=round;showMalayalam=false;renderRoleView();show('pass');isSwipedUp=false;const card=$('roleSwipeCard');if(card){card.style.transition='none';card.style.transform='translateY(0)';const span=card.querySelector('.swipe-card-overlay span');if(span)span.textContent='Swipe up to reveal';}};
function showReveal(){showMalayalam=false;renderRoleView();show('pass');}
function renderRoleView(){if(typeof document==='undefined')return;const isImposter=imposters.has(currentPlayer);if($('roleBadge')){$('roleBadge').textContent=isImposter?(imposters.size>1?'You are one of the Imposters!':'You are the Imposter!'):'You are a player';$('roleBadge').className=`role-badge ${isImposter?'imposter':''}`}if(isImposter){if($('secretLabel'))$('secretLabel').style.display='none';if($('secretWord'))$('secretWord').textContent=showMalayalam?word.hintMalayalam:word.imposterWord;if($('scriptToggle')){$('scriptToggle').hidden=!(word&&(word.hintLatin||word.hintMalayalam));$('scriptToggle').textContent=showMalayalam?'Show in Manglish':'Show in Malayalam'}if($('secretHint')){$('secretHint').innerHTML=`<small style="color:var(--muted);font-size:12.5px;display:block;margin-top:6px;line-height:1.45;">💡 Subtly related to the secret word, but different! Blend in without guessing!</small>`;}}else{if($('secretLabel')){$('secretLabel').style.display='';$('secretLabel').textContent='SECRET WORD'}if($('scriptToggle')){$('scriptToggle').hidden=false;$('scriptToggle').textContent=showMalayalam?'Show in Manglish':'Show in Malayalam'}if($('secretWord'))$('secretWord').textContent=showMalayalam?word.malayalam:word.latin;if($('secretHint')){let hintHTML=[];if($('seeCategory')?.checked&&word&&word.category){hintHTML.push(`<span style="color:#a9a4b3;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;display:block;">Category</span><b style="color:var(--accent);font-size:16px;display:block;margin-top:2px;">${word.category}</b>`)}if(word&&word.movieName&&word.characterRole){const mov=showMalayalam?(word.movieMalayalam||word.movieName):word.movieName;const rol=showMalayalam?(word.characterRoleMalayalam||word.characterRole):word.characterRole;const isMovie=word.detailType==='movie'||word.category==='Movies';const movLbl=showMalayalam?'സിനിമ / വിഷയം: ':'Theme / Movie: ';const rolLbl=showMalayalam?(isMovie?'കഥാസാരം: ':'വിവരണം: '):(isMovie?'Synopsis/Story: ':'Description: ');hintHTML.push(`<div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:10px;padding:10px 12px;margin-top:4px;text-align:left;"><div style="font-size:13px;color:var(--accent);margin-bottom:4px;"><b>🎬 ${movLbl}${mov}</b></div><div style="font-size:12.5px;color:var(--text);line-height:1.4;"><b>${rolLbl}</b>${rol}</div></div>`)}if(hintHTML.length===0){$('secretHint').innerHTML='Everyone else has this word too. Keep it hidden!'}else{$('secretHint').innerHTML=hintHTML.join('<div style="height:8px"></div>')}}}}
function startTimer(){clearInterval(timerId);const minutes=parseInt($('durationSelect')?.value||2,10);let left=minutes*60;const total=left;const draw=()=>{const m=Math.floor(left/60),s=left%60;if($('timer'))$('timer').textContent=`${m}:${String(s).padStart(2,'0')}`;if($('timerRing'))$('timerRing').style.strokeDashoffset=327*(1-left/total)};draw();timerId=setInterval(()=>{left--;draw();if(left<=0){clearInterval(timerId);showVote()}},1000)}
function showVote(){if(typeof document==='undefined')return;clearInterval(timerId);selectedVote=-1;const list=$('voteList');if(!list)return;list.innerHTML='';players.forEach((name,i)=>{const b=document.createElement('button');b.className='vote-option';b.innerHTML=`<span class="avatar">${i+1}</span><span>${name}</span>`;b.onclick=()=>{document.querySelectorAll('.vote-option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');selectedVote=i;if($('revealResult')){$('revealResult').disabled=false;$('revealResult').classList.remove('disabled')}};list.append(b)});if($('revealResult')){$('revealResult').disabled=true;$('revealResult').classList.add('disabled')} show('vote')}
function result(){const caught=imposters.has(selectedVote);const who=Array.from(imposters).map(i=>players[i]).join(', ');if($('resultIcon')){$('resultIcon').className=`result-icon ${caught?'':'fail'}`;$('resultIcon').textContent=caught?'✦':'!'}if($('resultEyebrow'))$('resultEyebrow').textContent=caught?'GOT THEM!':'OH NO!';if($('resultTitle'))$('resultTitle').textContent=caught?'The Imposter is caught!':(imposters.size>1?'The Imposters win!':'The Imposter wins!');if($('resultText'))$('resultText').textContent=`${who} ${imposters.size>1?'were the Imposters':'was the Imposter'}.`;if($('answerWord'))$('answerWord').textContent=word?.latin||'';show('result')}
const bindClick=(id,fn)=>{const el=$(id);if(el)el.onclick=fn;};

if(typeof window!=='undefined'&&typeof document!=='undefined'){
  bindClick('themeToggle',()=>{document.body.classList.toggle('light');if($('themeToggle'))$('themeToggle').textContent=document.body.classList.contains('light')?'☾':'☀'});
  bindClick('startSetup',()=>show('setup'));
  bindClick('openHelp',()=>show('help'));
  bindClick('openSettings',()=>show('setup'));
  document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));
  bindClick('addPlayer',()=>{if(players.length<10){players.push(`Player ${players.length+1}`);if($('playerList'))renderPlayers();savePlayers();}});
  
  // Open categories modal popup without changing screens
  bindClick('openCategories', showCategoriesModal);
  bindClick('closeCategoriesBtn', hideCategoriesModal);
  bindClick('categoriesBackdrop', hideCategoriesModal);
  bindClick('doneCategoriesBtn', hideCategoriesModal);
  
  bindClick('addCustomCategoryBtn', () => {
    const input = $('customCategoryInput');
    if (input) AIWordGenerator.addCustomCategory(input.value);
  });

  // 🤖 AI Chatbot Assistant Event Bindings
  bindClick('openChatbotBtn', () => AIChatbotAssistant.showModal());
  bindClick('closeChatbotBtn', () => AIChatbotAssistant.hideModal());
  bindClick('aiChatbotBackdrop', () => AIChatbotAssistant.hideModal());
  bindClick('aiChatSendBtn', () => {
    const inp = $('aiChatInput');
    if (inp) AIChatbotAssistant.handleSend(inp.value);
  });
  const aiChatInp = $('aiChatInput');
  if (aiChatInp) {
    aiChatInp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') AIChatbotAssistant.handleSend(aiChatInp.value);
    });
  }
  document.querySelectorAll('.chat-chip').forEach(chip => {
    chip.onclick = () => {
      const top = chip.getAttribute('data-topic');
      if (top) AIChatbotAssistant.handleSend(top);
    };
  });

  // 🔑 Gemini API Key Toggle, Edit, Save, Remove bindings
  bindClick('toggleGeminiKeyBtn', () => {
    const box = $('geminiKeyBox');
    if (box) box.style.display = box.style.display === 'none' ? 'flex' : 'none';
  });
  bindClick('editGeminiKeyBtn', () => {
    const box = $('geminiKeyBox');
    if (box) box.style.display = box.style.display === 'none' ? 'flex' : 'none';
  });
  bindClick('saveGeminiKeyBtn', () => {
    const inp = $('geminiApiKeyInput');
    if (inp) {
      saveGeminiApiKey(inp.value);
      alert(getGeminiApiKey() ? '✅ Google Gemini API Key saved! Live Cloud AI mode is now active.' : 'Removed Gemini API Key. Local fallback active.');
    }
  });
  bindClick('removeGeminiKeyBtn', () => {
    if (confirm('Remove Gemini API Key?')) {
      saveGeminiApiKey('');
    }
  });

  bindClick('selectAll',()=>{packs.forEach(p=>selected.add(p.id));saveCategories();if($('categoryGrid'))renderCategories();if($('categorySummary'))updateCategoryText()});
  bindClick('clearAll',()=>{selected.clear();saveCategories();if($('categoryGrid'))renderCategories();if($('categorySummary'))updateCategoryText()});
  bindClick('beginRound',startRound);
  
  const card=$('roleSwipeCard');
  if(card){
    let startY=0, currentY=0, isDragging=false;
    const updateOverlayText=(swiped)=>{const span=card.querySelector('.swipe-card-overlay span');if(span)span.textContent=swiped?'Swiped ↑ (Swipe down)':'Swipe up to reveal';};
    const onDragStart=(y)=>{startY=y;currentY=y;isDragging=true;card.style.transition='none';};
    const onDragMove=(y)=>{if(!isDragging)return;currentY=y;const delta=currentY-startY;if(!isSwipedUp){if(delta<0)card.style.transform=`translateY(${delta}px)`;}else{if(delta>0)card.style.transform=`translateY(calc(-100% + 25vh + ${delta}px))`;}};
    const onDragEnd=()=>{if(!isDragging)return;isDragging=false;const delta=currentY-startY;card.style.transition='transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';if(!isSwipedUp){if(delta<-55){card.style.transform='translateY(calc(-100% + 25vh))';isSwipedUp=true;updateOverlayText(true);}else{card.style.transform='translateY(0)';}}else{if(delta>25||Math.abs(delta)<8){card.style.transform='translateY(0)';isSwipedUp=false;updateOverlayText(false);}else{card.style.transform='translateY(calc(-100% + 25vh))';}}};
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
  if($('playerList'))renderPlayers();if($('categorySummary'))updateCategoryText();initGeminiKeyUI();hideLoader();
}

