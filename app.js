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

/* ===================================================================
   EDITION SYSTEM — Kerala Edition ↔ International Edition
   =================================================================== */
const EDITION_STORAGE_KEY = 'aaraanu_imposter_edition';
let currentEdition = (typeof window !== 'undefined' && window.localStorage)
  ? (window.localStorage.getItem(EDITION_STORAGE_KEY) || 'kerala')
  : 'kerala';

// Keep a backup of the Kerala packs so we can restore them
let _keralaPacksBackup = null;

function applyEdition(ed) {
  if (typeof document === 'undefined') return;
  currentEdition = ed;
  const isIntl = (ed === 'intl');

  // ── Home pill ──────────────────────────────────────────────────────
  const pill = document.getElementById('editionPill');
  if (pill) pill.classList.toggle('intl-edition', isIntl);

  const lbl = document.getElementById('homeEditionLabel');
  if (lbl) lbl.textContent = isIntl ? 'English Edition' : 'Malayalam Edition';

  const sub = document.getElementById('homeEditionSub');
  if (sub) sub.textContent = isIntl ? 'The Global Edition' : 'Play with your friends';

  // ── Home text ─────────────────────────────────────────────────────
  const title = document.getElementById('homeTitle');
  if (title) title.innerHTML = isIntl ? "Who's the<br>Imposter?" : 'Aaraanu<br>Imposter?';

  const badge = document.getElementById('homeEditionBadge');
  if (badge) badge.textContent = isIntl ? 'ENGLISH EDITION' : 'MALAYALAM EDITION';

  const subtitle = document.getElementById('homeSubtitle');
  if (subtitle) subtitle.textContent = isIntl ? 'Spot the fraud among your friends!' : 'Who is the Imposter?';

  // ── Home screen accent class ───────────────────────────────────────
  const homeSection = document.getElementById('home');
  if (homeSection) homeSection.classList.toggle('intl-mode', isIntl);

  // ── Character image — crossfade swap ──────────────────────────────
  const charImg = document.getElementById('homeCharacterImg');
  if (charImg) {
    charImg.classList.add('switching');
    setTimeout(() => {
      charImg.src = isIntl ? 'assets/home-character-intl.png' : 'assets/home-character.png';
      charImg.classList.remove('switching');
    }, 300);
  }

  // ── Role swipe images ─────────────────────────────────────────────
  const swipeSrc = isIntl ? 'assets/role-swipe-intl.jpg' : 'assets/role-swipe.jpg';
  const swipeImg = document.getElementById('roleSwipeImg');
  if (swipeImg) swipeImg.src = swipeSrc;
  const revealImg = document.getElementById('roleSwipeImgReveal');
  if (revealImg) revealImg.src = swipeSrc;
  // Also update the kalla-kedayadi image used in-game (assets/kalla-kedayadi.jpg)
  document.querySelectorAll('img[src*="role-swipe"], img[src*="kalla-kedayadi"]').forEach(img => {
    if (img.id !== 'roleSwipeImg' && img.id !== 'roleSwipeImgReveal') img.src = swipeSrc;
  });

  // ── Word packs ────────────────────────────────────────────────────
  if (isIntl) {
    if (!_keralaPacksBackup) _keralaPacksBackup = packs.slice();
    const intl = (typeof window !== 'undefined' && window.intlPacks) || [];
    packs.length = 0;
    intl.forEach(p => packs.push(p));
    // Reset selected to all intl packs
    selected = new Set(packs.map(p => p.id));
  } else {
    if (_keralaPacksBackup) {
      packs.length = 0;
      _keralaPacksBackup.forEach(p => packs.push(p));
    }
    selected = loadSavedCategories() || new Set(packs.map(p => p.id));
  }

  // Re-render categories if dropdown is open
  const island = document.getElementById('categoriesIsland');
  if (island && island.classList.contains('open')) renderCategories();
  else if (typeof updateCategoryText === 'function') updateCategoryText();

  // Persist
  if (typeof window !== 'undefined' && window.localStorage)
    window.localStorage.setItem(EDITION_STORAGE_KEY, ed);
}

function toggleEdition() {
  applyEdition(currentEdition === 'kerala' ? 'intl' : 'kerala');
}

/* ─────────────────────────────────────────────────────────────────── */
const $=id=>typeof document!=='undefined'?document.getElementById(id):null;const show=id=>{if(typeof document==='undefined')return;document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));if($(id))$(id).classList.add('active');if(id==='home'){document.body.style.background='#060509';document.documentElement.style.background='#060509';var sh=document.querySelector('.app-shell');if(sh)sh.style.background='#060509';}else{document.body.style.background='#0d0c13';document.documentElement.style.background='#0d0c13';var sh=document.querySelector('.app-shell');if(sh)sh.style.background='';}if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0)};
const hideLoader=()=>{if(typeof document==='undefined')return;const l=document.getElementById('loader');if(l&&!l.classList.contains('done')){const startTime=window.__loaderStartTime||(Date.now()-5000);const elapsed=Date.now()-startTime;const rem=Math.max(0,5000-elapsed);setTimeout(()=>{l.classList.add('done');document.body.style.background='#060509';document.documentElement.style.background='#060509';var sh=document.querySelector('.app-shell');if(sh)sh.style.background='#060509';var h=document.getElementById('home');if(h){window.dispatchEvent(new Event('resize'));}setTimeout(()=>{if(l&&l.parentNode)l.style.display='none'},450)},rem)}};
if(typeof window!=='undefined'&&typeof document!=='undefined'){hideLoader();window.addEventListener('load',hideLoader);window.addEventListener('DOMContentLoaded',hideLoader);setTimeout(hideLoader,5000);}
function renderPlayers(){if(typeof document==='undefined')return;const list=$('playerList');if(!list)return;list.innerHTML='';players.forEach((name,i)=>{const row=document.createElement('div');row.className='player-row';row.innerHTML=`<span class="player-number">${i+1}</span><input value="${name.replace(/"/g,'&quot;')}" aria-label="Player ${i+1} name"><button class="remove-player" aria-label="Remove player"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg></button>`;row.querySelector('input').oninput=e=>{players[i]=e.target.value||`Player ${i+1}`;savePlayers();};row.querySelector('button').onclick=()=>{if(players.length>3){players.splice(i,1);if(imposterCount>Math.floor(players.length/2)){imposterCount=Math.max(1,Math.floor(players.length/2));if($('imposterTotal'))$('imposterTotal').textContent=imposterCount}renderPlayers();savePlayers();}};list.append(row)});if($('playerTotal'))$('playerTotal').textContent=`${players.length} / 10`;}
function renderCategories(){if(typeof document==='undefined')return;const grid=$('categoryGrid');if(!grid)return;grid.innerHTML='';packs.forEach(p=>{const b=document.createElement('div');b.className=`category-card compact ${selected.has(p.id)?'selected':''}`;b.onclick=(e)=>{if(e.target.closest('.delete-custom-cat'))return;selected.has(p.id)?selected.delete(p.id):selected.add(p.id);saveCategories();renderCategories();updateCategoryText()};let delHtml=p.isCustom?`<button class="delete-custom-cat" title="Delete AI topic" onclick="deleteCustomCategory('${p.id}', event)">🗑️</button>`:'';b.innerHTML=`<span class="cat-icon">${p.icon}</span><div class="cat-info"><b>${p.name}</b><small>${p.words.length} words ${p.isCustom?'(AI)':''}</small></div>${delHtml}`;grid.append(b)});if($('categoryCount'))$('categoryCount').textContent=`${selected.size} of ${packs.length} selected`;if($('categorySummary'))updateCategoryText();}
function deleteCustomCategory(id,e){if(e&&e.stopPropagation)e.stopPropagation();if(!confirm('Remove this custom AI category?'))return;const idx=packs.findIndex(p=>p.id===id);if(idx!==-1)packs.splice(idx,1);selected.delete(id);if(typeof loadCustomCategories==='function'&&typeof saveCustomCategories==='function'){const cl=loadCustomCategories().filter(p=>p.id!==id);saveCustomCategories(cl);}saveCategories();renderCategories();}
function updateCategoryText(){if($('categorySummary'))$('categorySummary').textContent=selected.size===packs.length?'All categories selected':`${selected.size} of ${packs.length} selected`;}

function toggleCategoriesDropdown() {
  const island = $('categoriesIsland');
  const drop = $('categoriesDropdown');
  const btn = $('openCategories');
  if (island || drop) {
    const isOpening = !(island ? island.classList.contains('open') : drop.classList.contains('open'));
    if (island) island.classList.toggle('open', isOpening);
    if (drop) drop.classList.toggle('open', isOpening);
    if (btn) btn.classList.toggle('active', isOpening);
    if (isOpening) {
      renderCategories();
      initGeminiKeyUI();
    }
  }
}
function showCategoriesModal() { toggleCategoriesDropdown(); }
function hideCategoriesModal() {
  const island = $('categoriesIsland');
  const drop = $('categoriesDropdown');
  const btn = $('openCategories');
  if (island) island.classList.remove('open');
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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000); // Ultra fast 7s timeout
      
      const promptText = `You are the Aaraanu Imposter party game AI word generator. The user requested a custom category: "${clean}".
CRITICAL REQUIREMENTS:
1. You MUST generate EXACTLY 12 specific, actual, real-world items/dishes/entities/names belonging strictly to "${clean}". Every single word MUST be a real, authentic entity!
2. ENTITY ACCURACY & MATCHING TYPE (STRICT RULE):
   - The Civilian Word MUST NEVER be an actor's real name if the category asks for characters! If the category is about movie characters (like "Lucifer characters" or "Harry Potter characters"), every single Civilian Word MUST be an actual character name inside that movie/universe.
   - Both the Civilian Word AND the Imposter Word MUST be entities of the EXACT SAME TYPE and level of specificity (e.g., if Civilian gets a character from the movie, Imposter MUST get a different character from the same movie/universe, NEVER an actor's real name).
3. GOLDEN RULE FOR IMPOSTER WORD (SIBLING CONCEPT, NOT A DEFINITION/SYNONYM):
   - STRICT SINGLE/SHORT NOUN RULE: Both words MUST strictly be single words, names, or short 1-3 word nouns. NEVER write a full sentence or explanation!
   - THE IMPOSTER WORD MUST BE A *SIBLING PEER* IN THE SAME CATEGORY, NOT A TRANSLATION, SYNONYM, OR DEFINITION of the Civilian Word!
   - EXAMPLE 1 (Good): Civilian="Pen", Imposter="Pencil" or "Marker". (Bad: "Wooden writing tool", "Ink pen").
   - EXAMPLE 2 (Good): Civilian="Moon", Imposter="Sun" or "Stars". (Bad: "Earth's satellite", "Night sky object").
   - EXAMPLE 3 (Good): Civilian="Kerala Piravi", Imposter="Onam" or "Vishu". (Bad: "State Anniversary", "November 1").
   - EXAMPLE 4 (Good): Civilian="Toothpaste", Imposter="Brush" or "Mouthwash". (Bad: "Teeth cleaner").
   - The Imposter Word MUST NEVER contain any shared noun or exact duplicate keyword from the Civilian Word. It should be related enough to blend in, but distinctly a DIFFERENT item!
4. Return ONLY a valid JSON array of 12 arrays without markdown or code blocks:
[["CivEng", "CivMal", "ImpEng", "ImpMal"], ...]`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 1200
          }
        })
      });
      clearTimeout(timeoutId);
      
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
    
    // Check deep topic clusters & specific popular topics like Mandi / Biryani / Food
    if (lower.includes('mandi') || lower.includes('kuzhimandi') || lower.includes('arabian')) {
      return [
        ['Chicken Kuzhi Mandi', 'ചിക്കൻ കുഴിമന്തി', 'Al-Faham Pepper Roast', 'അൽഫഹം പെപ്പർ റോസ്റ്റ്'],
        ['Beef Madghout', 'ബീഫ് മദ്ഗൂത്ത്', 'Arabian Ghee Rice', 'അറേബ്യൻ നെയ്ച്ചോറ്'],
        ['Kanthari Alfaham Mandi', 'കാന്താരി അൽഫഹം മന്തി', 'Spicy BBQ Chicken Plate', 'സ്പൈസി ബാർബിക്യൂ ചിക്കൻ'],
        ['Honey Chilli Mandi', 'ഹണി ചില്ലി മന്തി', 'Garlic Chicken Roast', 'ഗാർലിക് ചിക്കൻ റോസ്റ്റ്'],
        ['Arabian Majboos', 'അറേബ്യൻ മജ്ബൂസ്', 'Malabar Dum Choru', 'മലബാർ ദം ചോറ്'],
        ['Schezwan Mandi', 'ഷെസ്വാൻ മന്തി', 'Dragon Chicken Dry', 'ഡ്രാഗൺ ചിക്കൻ ഡ്രൈ'],
        ['Fish Kuzhi Mandi', 'ഫിഷ് കുഴിമന്തി', 'Neymeen Pollichathu', 'നെയ്മീൻ പൊള്ളിച്ചത്'],
        ['Mutton Ribs Mandi', 'മട്ടൺ റിബ്സ് മന്തി', 'Lamb Chops Roast', 'ലാംബ് ചോപ്സ് റോസ്റ്റ്'],
        ['Shorba Soup', 'ഷോർബ സൂപ്പ്', 'Arabian Salata', 'അറേബ്യൻ സലാത്ത'],
        ['Mayonnaise Garlic', 'മയോണൈസ് ഗാർലിക്', 'Spicy Tomato Chutney', 'തക്കാളി ചട്നി'],
        ['Shawarma Plate', 'ഷവർമ്മ പ്ലേറ്റ്', 'Grilled Chicken Platter', 'ഗ്രിൽഡ് ചിക്കൻ പ്ലാറ്റർ'],
        ['Hummus with Pita', 'ഹമ്മുസ് പീറ്റ', 'Baba Ghanoush Dip', 'ബാബ ഗനൂഷ് ഡിപ്പ്']
      ];
    } else if (lower.includes('biryani') || lower.includes('biriyani')) {
      return [
        ['Thalassery Biryani', 'തലശ്ശേരി ബിരിയാണി', 'Ghee Rice & Chicken Roast', 'നെയ്ച്ചോറും ചിക്കൻ റോസ്റ്റും'],
        ['Hyderabadi Dum Biryani', 'ഹൈദരാബാദി ബിരിയാണി', 'Mughlai Spiced Pulao', 'മൊഗ്ലൈ പുലാവ്'],
        ['Kozhikodan Dum Biryani', 'കോഴിക്കോടൻ ബിരിയാണി', 'Malabar Erachi Choru', 'മലബാർ ഇറച്ചിച്ചോറ്'],
        ['Dindigul Biryani', 'ദിണ്ഡിഗൽ ബിരിയാണി', 'Spicy Seeraga Samba Pulao', 'ജീരകശാല പുലാവ്'],
        ['Ambur Chicken Biryani', 'ആംബൂർ ബിരിയാണി', 'Ghee Rice & Mutton Kuruma', 'നെയ്ച്ചോറും മട്ടൺ കുരുമയും'],
        ['Beef Roast Biryani', 'ബീഫ് റോസ്റ്റ് ബിരിയാണി', 'Kerala Beef Fry & Ghee Rice', 'ബീഫ് ഫ്രൈയും നെയ്ച്ചോറും'],
        ['Neymeen Fish Biryani', 'നെയ്മീൻ ബിരിയാണി', 'Malabar Fish Masala Choru', 'മലബാർ ഫിഷ് മസാല ചോറ്'],
        ['Prawns Dum Biryani', 'പ്രോൺസ് ബിരിയാണി', 'Seafood Spiced Pulao', 'സീഫുഡ് പുലാവ്'],
        ['Kochi Kayal Biryani', 'കൊച്ചി കായൽ ബിരിയാണി', 'Backwater Fish Pulao', 'കായൽ മീൻ പുലാവ്'],
        ['Bamboo Chicken Biryani', 'മുള ബിരിയാണി', 'Tribal Spiced Rice & Roast', 'കാട്ടു സുഗന്ധ ചോറ്'],
        ['Kalyana Dum Biryani', 'കല്യാണ ബിരിയാണി', 'Malabar Wedding Ghee Rice', 'കല്യാണ നെയ്ച്ചോറ്'],
        ['Palakkadan Dum Biryani', 'പാലക്കാടൻ ബിരിയാണി', 'Agraharam Spiced Choru', 'അഗ്രഹാര സ്പെഷ്യൽ ചോറ്']
      ];
    } else if (lower.includes('food') || lower.includes('snack') || lower.includes('dish') || lower.includes('kerala food')) {
      return [
        ['Parippu Vada', 'പരിപ്പ് വട', 'Crispy Banana Fritter', 'പഴംപൊരി'],
        ['Kulukki Sarbath', 'കുലുക്കി സർബത്ത്', 'Soda Lime Lime soda', 'സോഡാ നാരങ്ങ'],
        ['Kerala Beef Fry', 'ബീഫ് ഫ്രൈ', 'Malabar Porotta Roast', 'പൊറോട്ട റോസ്റ്റ്'],
        ['Pazham Pori', 'പഴംപൊരി', 'Sweet Sukhiyan Snack', 'സുഖിയൻ'],
        ['Kappa Biryani', 'കപ്പ ബിരിയാണി', 'Spicy Erachi Choru', 'ഇറച്ചിച്ചോറ്'],
        ['Puttu and Kadala', 'പുട്ടും കടലയും', 'Appam & Mutton Stew', 'അപ്പവും സ്റ്റൂവും'],
        ['Masala Dosa', 'മസാല ദോശ', 'Steamed Idli Sambar', 'ഇഡ്ഡലി സാമ്പാർ'],
        ['Crispy Samoosa', 'സമൂസ', 'Hot Egg Puff Snack', 'മുട്ട പഫ്സ്'],
        ['Sulaimani Tea', 'സുലൈമാനി', 'Milk Masala Chai', 'ചായ'],
        ['Thalassery Biryani', 'തലശ്ശേരി ബിരിയാണി', 'Malabar Ghee Rice', 'നെയ്ച്ചോറ്'],
        ['Sweet Unniyappam', 'ഉണ്ണിയപ്പം', 'Traditional Neyyappam', 'നെയ്യപ്പം'],
        ['Chilli Baji Snack', 'മുളക് ബജ്ജി', 'Potato Masala Bonda', 'ബോണ്ട']
      ];
    } else if (lower.includes('godfather') || lower.includes('anjooran')) {
      return [
        ['Anjooran', 'അഞ്ഞൂരാൻ', 'Swaminathan', 'സ്വാമിനാഥൻ'],
        ['Ramabhadran', 'രാമഭദ്രൻ', 'Balaraman', 'ബലരാമൻ'],
        ['Malappuram Anappadi Anjooran', 'അഞ്ഞൂരാൻ', 'Achamma', 'അച്ചാമ്മ'],
        ['Swaminathan', 'സ്വാമിനാഥൻ', 'Ramabhadran', 'രാമഭദ്രൻ'],
        ['Balaraman', 'ബലരാമൻ', 'Veerabhadran', 'വീരഭദ്രൻ'],
        ['Achamma', 'അച്ചാമ്മ', 'Malati', 'മാലതി'],
        ['Malati', 'മാലതി', 'Anjooran Family House', 'അഞ്ഞൂരാൻ വീട്'],
        ['Anjooran Patriarch', 'അഞ്ഞൂരാൻ കാരണവർ', 'Balaraman', 'ബലരാമൻ'],
        ['Veerabhadran', 'വീരഭദ്രൻ', 'Swaminathan Brother', 'സ്വാമിനാഥൻ സഹോദരൻ'],
        ['Godfather Family Rivalry', 'കുടുംബ വൈരം', 'Achamma Household', 'അച്ചാമ്മ വീട്'],
        ['Advocate Ananthan', 'അഡ്വക്കറ്റ് അനന്തൻ', 'Ramabhadran', 'രാമഭദ്രൻ'],
        ['Godfather Comedy Scene', 'കോമഡി രംഗം', 'Anjooran Sons', 'അഞ്ഞൂരാൻ മക്കൾ']
      ];
    } else if (lower.includes('in harihar nagar') || lower.includes('harihar nagar') || lower.includes('mahadevan') || lower.includes('appukuttan') || lower.includes('ramanan')) {
      return [
        ['Mahadevan', 'മഹാദേവൻ', 'Govindan Kutty', 'ഗോവിന്ദൻകുട്ടി'],
        ['Appukuttan', 'അപ്പുകുട്ടൻ', 'Ramanan', 'രമണൻ'],
        ['Thomas Kutty', 'തോമസ് കുട്ടി', 'Appukuttan', 'അപ്പുകുട്ടൻ'],
        ['Govindan Kutty', 'ഗോവിന്ദൻകുട്ടി', 'Mahadevan', 'മഹാദേവൻ'],
        ['Maya', 'മായ', 'Sethulakshmi', 'സേതുലക്ഷ്മി'],
        ['John Honai', 'ജോൺ ഹോനായി', 'Thomas Kutty', 'തോമസ് കുട്ടി'],
        ['Ramanan', 'രമണൻ', 'Appukuttan', 'അപ്പുകുട്ടൻ'],
        ['Harihar Nagar Colony', 'ഹരിഹർ നഗർ കോളനി', 'John Honai Gang', 'ഹോനായി സംഘം'],
        ['Mahadevan House', 'മഹാദേവൻ വീട്', 'Maya Briefcase', 'മായ പെട്ടി'],
        ['Sethulakshmi', 'സേതുലക്ഷ്മി', 'Maya', 'മായ'],
        ['Thomas Kutty Mother', 'തോമസ് കുട്ടി അമ്മ', 'Govindan Kutty', 'ഗോവിന്ദൻകുട്ടി'],
        ['John Honai Suitcase', 'ഹോനായി പെട്ടി', 'Harihar Nagar Boys', 'ഹരിഹർ നഗർ മക്കൾ']
      ];
    } else if (lower.includes('manichitrathazhu') || lower.includes('nagavalli') || lower.includes('dr. sunny') || lower.includes('ganga')) {
      return [
        ['Ganga', 'ഗംഗ', 'Nakulan', 'നകുലൻ'],
        ['Dr. Sunny Joseph', 'ഡോ. സണ്ണി ജോസഫ്', 'Nakulan', 'നകുലൻ'],
        ['Nagavalli', 'നാഗവല്ലി', 'Ramanathan Dancer', 'രാമനാഥൻ'],
        ['Sreedevi', 'ശ്രീദേവി', 'Unnithan', 'ഉണ്ണിത്താൻ'],
        ['Bhasura', 'ഭാസുര', 'Kattuparamban', 'കാട്ടുപറമ്പൻ'],
        ['Mahadevan Dancer', 'മഹാദേവൻ നർത്തകൻ', 'Nagavalli', 'നാഗവല്ലി'],
        ['Madampalli Tharavadu', 'മാടമ്പള്ളി തറവാട്', 'Thekkini Room', 'തെക്കിനി'],
        ['Ornate Lock / Thazhu', 'മണിച്ചിത്രത്താഴ്', 'Silambu Anklet', 'ചിലമ്പ്'],
        ['Pulluvan Pattu Song', 'പുള്ളുവൻ പാട്ട്', 'Oru Murai Vanthu', 'ഒരു മുറൈ വന്ത്'],
        ['Brahmadattan Namboodiri', 'ബ്രഹ്മദത്തൻ നമ്പൂതിരി', 'Dr. Sunny Joseph', 'ഡോ. സണ്ണി ജോസഫ്'],
        ['Chandu', 'ചന്തു', 'Mahadevan Dancer', 'മഹാദേവൻ നർത്തകൻ'],
        ['Thekkini Room', 'തെക്കിനി', 'Madampalli Palace', 'മാടമ്പള്ളി കൊട്ടാരം']
      ];
    } else if (lower.includes('nadodikkattu') || lower.includes('dasan') || lower.includes('vijayan') || lower.includes('cid moosa')) {
      return [
        ['Dasan', 'ദാസൻ', 'Vijayan', 'വിജയൻ'],
        ['Vijayan', 'വിജയൻ', 'Dasan', 'ദാസൻ'],
        ['Ananthan Nambiar', 'അനന്തൻ നമ്പ്യാർ', 'Pavanayi', 'പവനായി'],
        ['Gafoor Ka Dosth', 'ഗഫൂർ ക്യാപ്റ്റൻ', 'Captain Gafoor Boat', 'ഗഫൂർ ബോട്ട്'],
        ['Pavanayi Suitcase', 'പവനായി', 'Ananthan Nambiar', 'അനന്തൻ നമ്പ്യാർ'],
        ['Radha', 'രാധ', 'Kovai Brother', 'കോവൈ സഹോദരൻ'],
        ['CID Officers', 'സിഐഡി ഉദ്യോഗസ്ഥർ', 'Dasan & Vijayan', 'ദാസൻ വിജയൻ'],
        ['Dubai Shore / Chennai', 'ദുബായ് കടൽതീരം', 'Gafoor Ka Dosth Boat', 'ഗഫൂർ ബോട്ട്'],
        ['Pavanayi', 'പവനായി', 'Ananthan Nambiar', 'അനന്തൻ നമ്പ്യാർ'],
        ['Madras / Chennai Beach', 'മദ്രാസ് ബീച്ച്', 'Dubai Coast', 'ദുബായ് തീരം'],
        ['Dasan Milk Supply', 'പാൽ വിതരണം', 'Vijayan Cow', 'വിജയൻ പശു'],
        ['CID Moosa Role', 'സിഐഡി മൂസ', 'Pavanayi Killer', 'പവനായി കൊലയാളി']
      ];
    } else if (lower.includes('lucifer') || lower.includes('empuraan') || lower.includes('stephen nedumpally')) {
      return [
        ['Stephen Nedumpally', 'സ്റ്റീഫൻ നെടുമ്പള്ളി', 'Zayed Masood', 'സയീദ് മസൂദ്'],
        ['Khureshi Ab\'ram', 'ഖുറേഷി അബ്രാം', 'Sagar Alias Jacky', 'സാഗർ ഏലിയാസ് ജാക്കി'],
        ['Bimal Nair / Bobby', 'ബോബി', 'Jatin Ramdas', 'ജതിൻ രാംദാസ്'],
        ['Priyadarshini Ramdas', 'പ്രിയദർശിനി', 'Anitha / Medha', 'അനിത'],
        ['Govardhan', 'ഗോവർദ്ധൻ', 'Murugan Lorry Driver', 'മുരുകൻ'],
        ['P.K. Ramdas (PKR)', 'പി.കെ. രാംദാസ്', 'Mahesh Varma Sir', 'വർമ്മ സാർ'],
        ['Sanjeev / Sanju', 'സഞ്ജു', 'Aloshy', 'അലോഷി'],
        ['Mayilvahanam IPS', 'മയിൽവാഹനം', 'IG Joseph', 'ഐജി ജോസഫ്'],
        ['Nedumpally Estate', 'നെടുമ്പള്ളി എസ്റ്റേറ്റ്', 'Gold Syndicate Club', 'ഗോൾഡ് സിൻഡിക്കേറ്റ്'],
        ['Sreekanth Varma', 'ശ്രീകാന്ത് വർമ്മ', 'Ranga Annan', 'രംഗ അണ്ണൻ'],
        ['Bhadran', 'ഭദ്രൻ', 'Michael Appan', 'മൈക്കിൾ അപ്പൻ'],
        ['Nair / Father', 'നായർ അച്ചൻ', 'Koshy Kurien', 'കോശി കുര്യൻ']
      ];
    } else if (lower === 'characters' || lower === 'movie characters' || lower === 'malayalam movie characters' || lower === 'malayalam characters') {
      return [
        ['Stephen Nedumpally', 'സ്റ്റീഫൻ നെടുമ്പള്ളി', 'Zayed Masood', 'സയീദ് മസൂദ്'],
        ['Georgekutty', 'മൈക്കിൾ അപ്പൻ', 'Koshy Kurien', 'അയ്യപ്പൻ നായർ'],
        ['Nagavalli', 'നാഗവല്ലി', 'Digambaran', 'ദിഗംബരൻ'],
        ['Sethumadhavan', 'സേതുമാധവൻ', 'Induchoodan', 'ഇന്ദുചൂഡൻ'],
        ['Dasan', 'ദാസൻ', 'Gafoor Ka Dosth', 'ഗഫൂർ ക്യാപ്റ്റൻ'],
        ['Mangalassery Neelakandan', 'നീലകണ്ഠൻ', 'Aadu Thoma', 'ആടു തോമ'],
        ['Appukuttan', 'അപ്പുകുട്ടൻ', 'Ramanan', 'രമണൻ'],
        ['Dashamoolam Damu', 'ദശമൂലം ദാമു', 'Keeleri Achu', 'കീശേരി അച്ചു'],
        ['Ganga', 'ഗംഗ', 'Anandavalli', 'ആനന്ദവല്ലി'],
        ['Shammi', 'ഷമ്മി', 'Michael Appan', 'മൈക്കിൾ അപ്പൻ'],
        ['Ranga', 'രംഗ', 'Kattalan Porinchu', 'പൊറിഞ്ചു'],
        ['Dileep Role / CID Moosa', 'സിഐഡി മൂസ', 'Pavanayi', 'പവനായി']
      ];
    } else if (lower.includes('actor') || lower.includes('actress') || lower.includes('star') || lower.includes('hero') || lower.includes('cinema')) {
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
    
    // Smart Topic Entity Extraction (stripping "varieties of", "types of", etc.)
    let entity = clean.replace(/^(varieties of|variety of|types of|type of|different|top|famous|best|list of)\s+/i, '').trim() || clean;
    const eCap = entity.charAt(0).toUpperCase() + entity.slice(1);
    
    return [
      [`Classic ${eCap}`, `പരമ്പരാഗത ${eCap}`, `Modern ${eCap}`, `ആധുനിക ${eCap}`],
      [`Special ${eCap}`, `വിശേഷ ${eCap}`, `Supreme ${eCap}`, `മികച്ച ${eCap}`],
      [`Malabar ${eCap}`, `മലബാർ ${eCap}`, `Travancore ${eCap}`, `തിരുവിതാംകൂർ ${eCap}`],
      [`Arabian ${eCap}`, `അറേബ്യൻ ${eCap}`, `Indian ${eCap}`, `ഇന്ത്യൻ ${eCap}`],
      [`Spicy ${eCap}`, `എരിവുള്ള ${eCap}`, `Crispy ${eCap}`, `മൊരിഞ്ഞ ${eCap}`],
      [`Royal ${eCap}`, `രാജകീയ ${eCap}`, `Popular ${eCap}`, `ജനപ്രിയ ${eCap}`],
      [`Famous ${eCap}`, `പ്രശസ്ത ${eCap}`, `Secret ${eCap}`, `രഹസ്യ ${eCap}`],
      [`Golden ${eCap}`, `സ്വർണ്ണ ${eCap}`, `Silver ${eCap}`, `വെള്ളി ${eCap}`],
      [`Prime ${eCap}`, `പ്രധാന ${eCap}`, `Select ${eCap}`, `തിരഞ്ഞെടുത്ത ${eCap}`],
      [`Original ${eCap}`, `തനി ${eCap}`, `Fusion ${eCap}`, `ഫ്യൂഷൻ ${eCap}`],
      [`Master ${eCap}`, `${eCap} മാസ്റ്റർ`, `Legend ${eCap}`, `${eCap} ലെജൻഡ്`],
      [`Authentic ${eCap}`, `യഥാർത്ഥ ${eCap}`, `Specialty ${eCap}`, `സ്പെഷ്യൽ ${eCap}`]
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
  // Common Household, Bathroom & Daily Items
  'Toothpaste': 'Brush', 'Brush': 'Paste', 'Soap': 'Shampoo', 'Shampoo': 'Soap', 'Towel': 'Comb', 'Comb': 'Towel', 'Mirror': 'Powder', 'Bucket': 'Mug', 'Mug': 'Bucket', 'Bottle': 'Glass', 'Glass': 'Bottle', 'Plate': 'Spoon', 'Spoon': 'Plate', 'Oil': 'Lotion', 'Perfume': 'Spray',

  // Funny Malayalam
  'Adipoli': 'Polikku', 'Poli Scene': 'Mass Entry', 'Sadhanam Kayyil Undo': 'Rahasyam', 'Thenga': 'Manga', 'Chetta': 'Aliya', 'Eda Mone': 'Chunk Bro', 'Kidilan': 'Polikku', 'Chali': 'Troll', 'Koppu': 'Deshyam', 'Pani Paali': 'Scene Contra', 'Ambada': 'Kadi', 'Poda Pulle': 'Vidada Bro', 'Vattaano': 'Kirukku', 'Athu Sheri': 'Satyamano', 'Thallumala': 'Adi', 'Chummadive': 'Thamasikku', 'Oodayi': 'Trickery', 'Jada': 'Gettup', 'Vera Level': 'Kidilan', 'Blunder': 'Amali', 'Suhurthe': 'Aliya', 'Kittu': 'Luck', 'Scene Contra': 'Pani Paali', 'Chamakku': 'Shoki',
  'Shavapetti': 'Marappetti', 'Pothu': 'Kaala', 'Kuthikazhapp': 'Thullal', 'Senti': 'Karachil', 'Kidu Vibe': 'Pwoli Vibe', 'Oomfi': 'Potti', 'Vatt': 'Brath', 'Pwoli': 'Kidilan', 'Ayyayyo': 'Kashtam', 'Scene illa': 'Cool Vibe', 'Thallal': 'Veeravadam', 'Kidu': 'Polikku',

  // Movies
  'Nadodikkattu': 'Pattanapravesham', 'Thenmavin Kombath': 'Spadikam', 'Kilukkam': 'Chithram', 'Chithram': 'Kilukkam', 'Manichitrathazhu': 'Anandabhadram', 'Drishyam': 'Memories', 'Kumbalangi Nights': 'Maheshinte Prathikaaram', 'Bangalore Days': 'Premam', 'Premam': 'Hridayam', 'Traffic': 'Takeoff', 'Indian Rupee': 'Pranchiyettan', 'Romancham': 'Premalu', 'Premalu': 'Romancham', 'Aavesham': 'Rajamanikyam', 'Bramayugam': 'Tumbbad', 'Manjummel Boys': 'Romancham', 'Godfather': 'Hariharnagar', 'Malaikottai Vaaliban': 'Kayamkulam', 'Minnal Murali': 'Rajamanikyam', 'Kishkindha Kaandam': 'Iratta', 'Rorschach': 'Kannur Squad', 'Kattappanayile Rithwik Roshan': 'Udayananu Tharam', 'Varathan': 'Kala', 'Bheeshma Parvam': 'Big B', 'Memories': 'Anjaam Pathiraa', 'Classmates': 'Puthiya Mukham', 'Spadikam': 'Devasuram', 'Bharatham': 'His Highness Abdullah', 'Devasuram': 'Aaraam Thampuran', 'Ustad Hotel': 'Bangalore Days', 'Maheshinte Prathikaaram': 'Thondimuthalum Driksakshiyum', 'Ayyappanum Koshiyum': 'Action Hero Biju', 'Lucifer': 'Empuraan', 'Thondimuthalum Driksakshiyum': 'Maheshinte Prathikaaram', 'Action Hero Biju': 'Ayyappanum Koshiyum', 'Sudani from Nigeria': 'Kumbalangi Nights',

  // Characters
  'Georgekutty': 'Michael Appan', 'Nagavalli': 'Neelakandan', 'Sethumadhavan': 'Induchoodan', 'Dasan': 'Gafoor', 'Mangalassery Neelakandan': 'Induchoodan', 'Appukuttan': 'Ramanan', 'Ramanan': 'Damu', 'Induchoodan': 'Neelakandan', 'Kunjikoonan': 'Rameshan', 'Koshy Kurien': 'Ayyappan Nair', 'Ayyappan Nair': 'Koshy Kurien', 'Mahesh Bhavana': 'Kunjiraman', 'Biju Paulose': 'Sethurama Iyer', 'Rameshan Nair': 'Georgekutty', 'Pachu': 'Kuttan', 'Kunjiraman': 'Manavalan', 'Pavanayi': 'Keeleri Achu', 'Manavalan': 'Damu', 'Ganga': 'Anandavalli', 'Rukmini': 'Anandavalli', 'Girish M.A.': 'Sachin', 'Shammi': 'Koshy Kurien', 'Ranga': 'Michael Appan', 'Dashamoolam Damu': 'Keeleri Achu', 'Gafoor Ka Dosth': 'Pavanayi', 'Anandavalli': 'Ganga', 'Beemboy': 'Keeleri Achu', 'Kattalan Porinchu': 'Neelakandan', 'Digambaran': 'Nagavalli', 'Dileep Role': 'Gafoor', 'Kuttan': 'Mahesh Bhavana', 'Krishnan': 'Porinchu', 'Sachy': 'Kuruvila', 'Aadu Thoma': 'Induchoodan', 'Keeleri Achu': 'Damu', 'Niranjan': 'Sethumadhavan', 'Stephen Nedumpally': 'Zayed Masood', 'Khureshi Ab\'ram': 'Sagar Alias Jacky', 'Bimal Nair / Bobby': 'Jatin Ramdas', 'Priyadarshini Ramdas': 'Anitha / Medha', 'Govardhan': 'Murugan', 'P.K. Ramdas (PKR)': 'Mahesh Varma Sir', 'Sanjeev / Sanju': 'Aloshy', 'Mayilvahanam IPS': 'IG Joseph', 'Nedumpally Estate': 'Gold Syndicate Club', 'Sreekanth Varma': 'Ranga Annan', 'Bhadran': 'Michael Appan', 'Nair / Father': 'Koshy Kurien',

  // Festivals
  'Onam': 'Vishu', 'Vishu': 'Onam', 'Thrissur Pooram': 'Attukal Pongala', 'Attukal Pongala': 'Thrissur Pooram', 'Vallamkali': 'Nehru Trophy', 'Theyyam': 'Kathakali', 'Pulikali': 'Chenda Melam', 'Kerala Piravi': 'Republic Day', 'Christmas': 'Easter', 'Eid': 'Muharram', 'Karkidaka Vavu': 'Sivarathri', 'Navarathri': 'Thiruvathira', 'Thiruvathira': 'Navarathri', 'Makaravilakku': 'Mandala Pooja', 'Kodiyettam': 'Arattu', 'Aranmula Uthrattathi': 'Nehru Trophy', 'Kettukazhcha': 'Kaalavela', 'Thiruvulsavam': 'Pooram', 'Pooram': 'Thiruvulsavam', 'Palliperunnal': 'Beemapally Uroos', 'Beemapally Uroos': 'Palliperunnal', 'Malayattoor Perunnal': 'Makaravilakku', 'Oachira Kettukazhcha': 'Chettikulangara Bharani', 'Kalpathi Ratholsavam': 'Thrissur Pooram', 'Chettikulangara Bharani': 'Oachira Kettukazhcha', 'Sivarathri': 'Karkidaka Vavu', 'Kuthiyottam': 'Theeyattam', 'Kaalavela': 'Kettukazhcha', 'Ganamela': 'Chenda Melam', 'Kalampaattu': 'Thalappoli', 'Theeyattam': 'Kuthiyottam', 'Ezhunnallathu': 'Kodiyettam', 'Chenda Melam': 'Ganamela', 'Thalappoli': 'Kalampaattu', 'Vishu Kani': 'Onapookkalam', 'Chutti Art': 'Kathakali',

  // Places
  'Kochi': 'Kozhikode', 'Munnar': 'Wayanad', 'Alappuzha': 'Kumarakom', 'Wayanad': 'Munnar', 'Varkala': 'Kovalam', 'Kozhikode': 'Thalassery', 'Thiruvananthapuram': 'Kochi', 'Bekal Fort': 'Palakkad Fort', 'Vagamon': 'Ponmudi', 'Kumarakom': 'Alappuzha', 'Athirappilly': 'Vazhachal', 'Sabarimala': 'Guruvayur', 'Guruvayur': 'Sabarimala', 'Edakkal Caves': 'Marayoor', 'Parambikulam': 'Silent Valley', 'Thekkady': 'Idukki', 'Thrissur': 'Palakkad', 'Kollam': 'Pathanamthitta', 'Kannur': 'Kasaragod', 'Kottayam': 'Idukki', 'Palakkad': 'Thrissur', 'Kasaragod': 'Kannur', 'Idukki': 'Wayanad', 'Malappuram': 'Kozhikode', 'Sultan Bathery': 'Mananthavady', 'Fort Kochi': 'Mattancherry', 'Silent Valley': 'Parambikulam', 'Nelliyampathy': 'Ponmudi', 'Sree Padmanabhaswamy Temple': 'Guruvayur Temple', 'Thenmala': 'Ponmudi', 'Marari Beach': 'Kovalam', 'Agasthyarkoodam': 'Meesapulimala', 'Banasura Sagar': 'Malampuzha Dam', 'Poonjar': 'Pala', 'Muzhappilangad': 'Payyambalam', 'Kuttanad': 'Alappuzha', 'Pathanamthitta': 'Kollam',

  // Kerala Food
  'Puttu': 'Idiyappam', 'Appam': 'Vellayappam', 'Porotta': 'Chapathi', 'Dosa': 'Idli', 'Idiyappam': 'Puttu', 'Karimeen Pollichathu': 'Meen Curry', 'Thalassery Biriyani': 'Malabar Biriyani', 'Payasam': 'Halwa', 'Banana Chips': 'Sarkara Varatti', 'Pazham Pori': 'Unniyappam', 'Sadya': 'Biriyani', 'Avial': 'Thoran', 'Kappa': 'Chenai', 'Pathiri': 'Neypathiri', 'Beef Fry': 'Mutton Roast', 'Chatti Pathiri': 'Unnakaya', 'Kallappam': 'Palappam', 'Unniyappam': 'Neyyappam', 'Sulaimani': 'Chaya', 'Halwa': 'Laddoo', 'Achappam': 'Kuzhalappam', 'Kuzhalappam': 'Achappam', 'Banana Fritters': 'Boli', 'Mixture': 'Murukku', 'Churuttu': 'Jalebi', 'Murukku': 'Mixture', 'Laddoo': 'Mysore Pak', 'Jalebi': 'Halwa', 'Mysore Pak': 'Boli', 'Parippu Vada': 'Uzhunnu Vada', 'Uzhunnu Vada': 'Parippu Vada', 'Boli': 'Payasam', 'Neyyappam': 'Unniyappam', 'Vattayappam': 'Kozhukatta', 'Elayappam': 'Vattayappam', 'Sukhiyan': 'Pazham Pori', 'Kozhukatta': 'Elayappam', 'Pazham Nirachathu': 'Unnakaya', 'Mutta Mala': 'Chatti Pathiri', 'Sambar': 'Rasam', 'Thoran': 'Avial', 'Olan': 'Kalan', 'Kalan': 'Olan', 'Erissery': 'Pulissery', 'Inji Curry': 'Pachadi', 'Pappadam': 'Payasam', 'Chicken Stew': 'Mutton Kuruma', 'Kothu Parotta': 'Porotta Roast', 'Mutton Chaaps': 'Beef Roast', 'Kappa Biriyani': 'Beef Biriyani', 'Neyyappam Special': 'Unniyappam', 'Chemeen Curry': 'Meen Curry', 'Parippu Curry': 'Sambar', 'Meen Peera': 'Fish Moolie', 'Fish Moolie': 'Meen Curry', 'Chicken 65': 'Chilli Chicken', 'Chammanthi Podi': 'Achar',

  // Household & Bakery
  'Chaya': 'Coffee', 'Puffs': 'Cutlet', 'Mutta Baji': 'Samoosa', 'Nilavilakku': 'Kindhi', 'Kindhi': 'Uruli', 'Uruli': 'Cheenachatti', 'Chiruva': 'Chattukam', 'Puttukutti': 'Ammikallu', 'Ammikallu': 'Muram', 'Cheenachatti': 'Uruli', 'Muram': 'Kottah', 'Kattil': 'Kasera', 'Oonjal': 'Thottil', 'Kudam': 'Bharani', 'Kithli': 'Flask', 'Chumbak': 'Poottu', 'Plavu': 'Mavu', 'Thegu': 'Kavungu', 'Vaazha': 'Cheera', 'Aanakutty': 'Pulikutty', 'Thorthu': 'Mundu', 'Chattukam': 'Chiruva', 'Mundum Neriyathum': 'Kasavu Saree', 'Cutlet': 'Samoosa', 'Samosa': 'Cutlet', 'Bonda': 'Sukhiyan', 'Ela Ada': 'Kozhukkatta', 'Sharkara Upperi': 'Banana Chips', 'Kappa Chips': 'Banana Chips', 'Avalose Podi': 'Churuttu', 'Kozhalappam': 'Achappam', 'Kinnathappam': 'Vattayappam', 'Bread Pakora': 'Baji', 'Meat Roll': 'Chicken Puff', 'Vettu Cake': 'Cream Bun', 'Pakkavada': 'Mixture', 'Kayyappam': 'Pazham Pori', 'Ilayappam': 'Kozhukkatta', 'Mothagam': 'Kozhukkatta', 'Mutta Puff': 'Chicken Puff', 'Cream Bun': 'Jam Bun', 'Pahadi Halwa': 'Kozhikodan Halwa', 'Para': 'Edangazhi', 'Chembu': 'Uruli', 'Arakkallu': 'Ammikallu', 'Aattukallu': 'Ammikallu', 'Chirava': 'Ammikallu', 'Paathram': 'Cheenachatti', 'Puttu Kutti': 'Appachatti', 'Vaal Kannadi': 'Nilavilakku', 'Kalam': 'Bharani', 'Kettle': 'Flask', 'Chattuvam': 'Chattukam', 'Paya': 'Bed', 'Thiri': 'Enna', 'Kindu Brass': 'Uruli', 'Alavu Para': 'Edangazhi', 'Kindu Vessel': 'Kindi', 'Chappathi Kallu': 'Ammikallu', 'Arippa': 'Chattukam', 'Choottu': 'Pantham', 'Madaal': 'Plavu',

  // People & Life & Vehicles
  'Mohanlal': 'Mammootty', 'Mammootty': 'Mohanlal', 'Manju Warrier': 'Shobana', 'Fahadh Faasil': 'Prithviraj', 'Shobana': 'Manju Warrier', 'Chaya Kada': 'Bakery', 'Kallu Shappu': 'Thattukada', 'KSRTC': 'Private Bus', 'KSRTC Bus': 'Private Bus', 'Auto Rickshaw': 'Taxi', 'Tharavadu': 'Mana', 'Aanavandi': 'Private Bus', 'Vallam': 'Boat', 'Autorickshaw': 'Taxi', 'Bullet': 'RX 100', 'Houseboat': 'Motorboat', 'Junkar': 'Ferry', 'Vellam': 'Nadi', 'Lorry': 'Truck', 'Private Bus': 'KSRTC', 'Tempo Traveller': 'Tourist Bus', 'Scooter': 'Scooty', 'Cycle': 'Scooter', 'Train': 'Metro', 'Metro': 'Train', 'Flight': 'Helicopter', 'Ambi': 'Contessa', 'Jeep': 'Thar', 'Tractor': 'Harvester', 'Excavator': 'Bulldozer', 'Ambulance': 'Fire Engine', 'Fire Engine': 'Ambulance', 'Dileep': 'Jayaram', 'Suresh Gopi': 'Biju Menon', 'Prithviraj': 'Fahadh Faasil', 'Tovino Thomas': 'Asif Ali', 'Nivin Pauly': 'Dulquer Salmaan', 'Kunchacko Boban': 'Jayasurya', 'Jayaram': 'Dileep', 'Jayasurya': 'Kunchacko Boban', 'Parvathy Thiruvothu': 'Manju Warrier', 'Nazriya Nazim': 'Aishwarya Lekshmi', 'Anaswara Rajan': 'Kalyani Priyadarshan', 'Aishwarya Lekshmi': 'Nazriya Nazim', 'Asif Ali': 'Tovino Thomas', 'Basil Joseph': 'Vineeth Sreenivasan', 'Vineeth Sreenivasan': 'Basil Joseph', 'Dulquer Salmaan': 'Prithviraj', 'Suraj Venjaramoodu': 'Soubin Shahir', 'Jagathy Sreekumar': 'Innocent', 'Innocent': 'Jagathy Sreekumar', 'Soubin Shahir': 'Suraj Venjaramoodu', 'Kalyani Priyadarshan': 'Anaswara Rajan', 'K. J. Yesudas': 'M. G. Sreekumar', 'K. S. Chithra': 'Sujatha', 'Sanju Samson': 'Sreejesh', 'Shashi Tharoor': 'Pinarayi Vijayan', 'Sreenivasan': 'Siddique', 'Salim Kumar': 'Harisree Ashokan', 'Urveshi': 'Kalpana', 'Mukesh': 'Siddique', 'Biju Menon': 'Suresh Gopi', 'Pepe Antony': 'Shane Nigam', 'Panchayath': 'Village Office', 'Kudumbashree': 'Ayalkoottam', 'Anganwadi': 'Nursery', 'Rubber Thottam': 'Tea Estate', 'Tea Estate': 'Rubber Thottam', 'Thengu': 'Plavu', 'Kuttanadan Padanilam': 'Cole Padam', 'Puzha': 'Kulam', 'Kaithari': 'Khadi', 'Mazha': 'Veyil', 'Tharavad': 'Mana', 'Naadan Pattu': 'Kathakali', 'Kavala': 'Junction', 'Palli': 'Ambalam', 'Ambalam': 'Palli', 'Lottery Ticket': 'Chitty', 'Hartal': 'Bandh', 'Vayanasala': 'Library', 'Chitty': 'Bank', 'Kavukal': 'Ambalam', 'Kulam': 'Puzha', 'Milma': 'Supplyco', 'Bevco': 'Kallu Shappu', 'Akshaya Centre': 'Village Office', 'Supplyco': 'Ration Kada', 'Vidyabhyasa Loan': 'Bank Loan', 'Ration Kada': 'Supplyco', 'Mahatma Gandhi NREGA': 'Kudumbashree', 'Current Bill': 'Water Bill', 'KSEB': 'Water Authority', 'Water Authority': 'KSEB', 'Jankar': 'Ferry', 'Ferry': 'Jankar', 'Chundan Vallam': 'Kettuvallam', 'Kettuvallam': 'Houseboat', 'Pickup': 'Lorry', 'Taxi': 'Auto', 'School Bus': 'College Bus', 'Jik Jik Train': 'Metro', 'Kochi Metro': 'Water Metro', 'Speed Boat': 'Houseboat', 'Peti Auto': 'Pickup', 'Ambassador': 'Contessa', 'Mahindra Jeep': 'Gypsy', 'Chavittu Vandi': 'Cycle', 'RX 100': 'Bullet', 'Torrus Truck': 'Lorry', 'Water Metro': 'Kochi Metro', 'Low Floor Bus': 'KSRTC', 'Tourist Bus': 'Tempo Traveller',

  // School, Sports, Gulf
  'Kalolsavam': 'Arts Day', 'Arts Day': 'Kalolsavam', 'College Canteen': 'Hostel Mess', 'PTA Meeting': 'Open House', 'Onam Celebration': 'Freshers Day', 'Football': 'Cricket', 'Cricket': 'Football', 'Kabaddi': 'Kho-Kho', 'Volleyball': 'Throwball', 'Pravasi': 'NRI', 'Dubai': 'Doha', 'Gulf Money': 'Dollar', 'Chakka': 'Manga', 'Naatilekku': 'Avadhi', 'Uniform': 'ID Card', 'PT Period': 'Lunch Break', 'Annual Day': 'Arts Day', 'Exam Hall': 'Library', 'Rank List': 'Mark List', 'College Union': 'NSS', 'Batch': 'Department', 'Farewell': 'Freshers Day', 'NSS': 'NCC', 'NCC': 'NSS', 'Laboratory': 'Library', 'Library': 'Laboratory', 'Hostel': 'Canteen', 'Class Leader': 'Union Chairman', 'Tour Trip': 'Camp', 'Bench and Desk': 'Blackboard', 'Bell': 'Whistle', 'Principal': 'Manager', 'Assignment': 'Project', 'Alumni Meet': 'Farewell', 'IV (Industrial Visit)': 'College Tour', 'Tuition Class': 'Special Class', 'Canara Bank Challan': 'Fee Receipt', 'Record Book': 'Textbook', 'Study Leave': 'Exam Time', 'Youth Festival': 'Kalolsavam', 'Progress Report': 'Rank Card', 'Geometry Box': 'School Bag', 'Slate and Pencil': 'Chalk', 'School Bag': 'Water Bottle', 'Tug of War': 'Kabaddi', 'Sevens Football': 'Futsal', 'Kho Kho': 'Kabaddi', 'Badminton': 'Tennis', 'Swimming': 'Water Polo', 'Athletics': 'Marathon', 'Javelin': 'Shot Put', 'Relay': 'Sprint', 'Boat Race': 'Nehru Trophy', 'Carrom': 'Chess', 'Chess': 'Carrom', 'Kalari': 'Karate', 'Long Jump': 'High Jump', 'High Jump': 'Long Jump', 'Throwball': 'Volleyball', 'Table Tennis': 'Badminton', 'Marathon': 'Relay', 'Penalty Shootout': 'Free Kick', 'Trophy': 'Medal', 'Umpire': 'Referee', 'Gallery': 'Stadium', 'Kuttiyum Kolum': 'Kilithattu', 'Kilithattu': 'Kuttiyum Kolum', 'Talappanthukali': 'Volleyball', 'Nadan Panthu': 'Football', 'Goli': 'Lagori', 'Lagori': 'Goli', 'Arm Wrestling': 'Boxing', 'Kabaddi Court': 'Wrestling Mat', 'Shuttle Racket': 'Tennis Racket', 'Foot Volley': 'Volleyball', 'Abu Dhabi': 'Dubai', 'Qatar': 'Bahrain', 'Saudi': 'Kuwait', 'Oman': 'Qatar', 'Bahrain': 'Oman', 'Kuwait': 'Saudi', 'Visa': 'Passport', 'Passport': 'Visa', 'Airport': 'Flight', 'Remittance': 'Exchange', 'Duty Free': 'Gold Souk', 'Perfume': 'Attar', 'Dates': 'Almonds', 'Gold': 'Diamond', 'Return Ticket': 'Visa', 'Norka': 'Embassy', 'Sharjah': 'Ajman', 'Baklava': 'Kunafa', 'Desert Safari': 'Dhow Cruise', 'Burj Khalifa': 'Burj Al Arab', 'Vacation Leave': 'Exit Visa', 'Dubai Gold Souk': 'Meena Bazaar', 'Khubus': 'Pita Bread', 'Kafala': 'Labor Law', 'Perfume Attar': 'Oud', 'Qatar Airways': 'Emirates Flight', 'Shawarma Machine': 'Grill Machine', 'Oud Incense': 'Bakhoor', 'Lablabi / Hummus': 'Tahini', 'Dirham Currency': 'Dinar', 'Emirates ID': 'Civil ID',

  // Godfather & Harihar Nagar & Movie characters
  'Anjooran': 'Swaminathan', 'Swaminathan': 'Ramabhadran', 'Ramabhadran': 'Balaraman', 'Balaraman': 'Veerabhadran', 'Achamma': 'Malati', 'Mahadevan': 'Govindan Kutty', 'Govindan Kutty': 'Thomas Kutty', 'Thomas Kutty': 'Appukuttan', 'John Honai': 'Thomas Kutty', 'Ganga': 'Nakulan', 'Dr. Sunny Joseph': 'Nakulan', 'Nagavalli': 'Ramanathan'
};

const IMPOSTER_MALAYALAM_SINGLE_WORDS = {
  // Common Household, Bathroom & Daily Items
  'Toothpaste': 'ബ്രഷ്', 'Brush': 'പേസ്റ്റ്', 'Soap': 'ഷാംപൂ', 'Shampoo': 'സോപ്പ്', 'Towel': 'ചീപ്പ്', 'Comb': 'തോർത്ത്', 'Mirror': 'പൗഡർ', 'Bucket': 'മഗ്ഗ്', 'Mug': 'ബക്കറ്റ്', 'Bottle': 'ഗ്ലാസ്', 'Glass': 'കുപ്പി', 'Plate': 'സ്പൂൺ', 'Spoon': 'പ്ലേറ്റ്', 'Oil': 'ലോഷൻ', 'Perfume': 'സ്പ്രേ',

  // Funny Malayalam
  'Adipoli': 'പൊളിക്ക്', 'Poli Scene': 'മാസ്സ് എൻട്രി', 'Sadhanam Kayyil Undo': 'രഹസ്യം', 'Thenga': 'മാങ്ങ', 'Chetta': 'അളിയാ', 'Eda Mone': 'ചങ്ക് ബ്രോ', 'Kidilan': 'പൊളിക്ക്', 'Chali': 'ട്രോൾ', 'Koppu': 'കലിപ്പ്', 'Pani Paali': 'സീൻ കോൺട്ര', 'Ambada': 'കളിയാക്കൽ', 'Poda Pulle': 'പോടാ ബ്രോ', 'Vattaano': 'കിറുക്ക്', 'Athu Sheri': 'സത്യമാണോ', 'Thallumala': 'അടി', 'Chummadive': 'തമാശക്ക്', 'Oodayi': 'ഉടായിപ്പ്', 'Jada': 'അഹങ്കാരം', 'Vera Level': 'കിടു', 'Blunder': 'അമളി', 'Suhurthe': 'അളിയാ', 'Kittu': 'ഭാഗ്യം', 'Scene Contra': 'പണി പാളി', 'Chamakku': 'ഷോക്കി',
  'Shavapetti': 'മരപ്പെട്ടി', 'Pothu': 'കാള', 'Kuthikazhapp': 'തുള്ളൽ', 'Senti': 'സങ്കടം', 'Kidu Vibe': 'പൊളി വൈബ്', 'Oomfi': 'പൊട്ടി', 'Vatt': 'ഭ്രാന്ത്', 'Pwoli': 'കിടു', 'Ayyayyo': 'കഷ്ടം', 'Scene illa': 'കൂൾ വൈബ്', 'Thallal': 'വീരവാദം', 'Kidu': 'പൊളിക്ക്',

  // Movies
  'Nadodikkattu': 'പട്ടണപ്രവേശം', 'Thenmavin Kombath': 'സ്ഫടികം', 'Kilukkam': 'ചിത്രം', 'Chithram': 'കിലുക്കം', 'Manichitrathazhu': 'അനന്തഭദ്രം', 'Drishyam': 'മെമ്മറീസ്', 'Kumbalangi Nights': 'മഹേഷിന്റെ പ്രതികാരം', 'Bangalore Days': 'പ്രേമം', 'Premam': 'ഹൃദയം', 'Traffic': 'ടേക്ക് ഓഫ്', 'Indian Rupee': 'പ്രാഞ്ചിയേട്ടൻ', 'Romancham': 'പ്രേമലു', 'Premalu': 'രോമാഞ്ചം', 'Aavesham': 'രാജമാണിക്യം', 'Bramayugam': 'തുമ്പാട്', 'Manjummel Boys': 'രോമാഞ്ചം', 'Godfather': 'ഹരിഹർനഗർ', 'Malaikottai Vaaliban': 'കായംകുളം', 'Minnal Murali': 'രാജമാണിക്യം', 'Kishkindha Kaandam': 'ഇരട്ട', 'Rorschach': 'കണ്ണൂർ സ്ക്വാഡ്', 'Kattappanayile Rithwik Roshan': 'ഉദയനാണ് താരം', 'Varathan': 'കള', 'Bheeshma Parvam': 'ബിഗ് ബി', 'Memories': 'അഞ്ചാം പാതിരാ', 'Classmates': 'പുതിയ മുഖം', 'Spadikam': 'ദേവാസുരം', 'Bharatham': 'ഹിസ് ഹൈനസ് അബ്ദുള്ള', 'Devasuram': 'ആറാം തമ്പുരാൻ', 'Ustad Hotel': 'ബാംഗ്ലൂർ ഡെയ്സ്', 'Maheshinte Prathikaaram': 'തൊണ്ടിമുതലും ദൃക്സാക്ഷിയും', 'Ayyappanum Koshiyum': 'ആക്ഷൻ ഹീറോ ബിജു', 'Lucifer': 'എമ്പുരാൻ', 'Thondimuthalum Driksakshiyum': 'മഹേഷിന്റെ പ്രതികാരം', 'Action Hero Biju': 'അയ്യപ്പനും കോശിയും', 'Sudani from Nigeria': 'കുമ്പളങ്ങി നൈറ്റ്സ്',

  // Characters
  'Georgekutty': 'മൈക്കിൾ അപ്പൻ', 'Nagavalli': 'നീലകണ്ഠൻ', 'Sethumadhavan': 'ഇന്ദുചൂഡൻ', 'Dasan': 'ഗഫൂർ', 'Mangalassery Neelakandan': 'ഇന്ദുചൂഡൻ', 'Appukuttan': 'രമണൻ', 'Ramanan': 'ദാമു', 'Induchoodan': 'നീലകണ്ഠൻ', 'Kunjikoonan': 'രമേശൻ', 'Koshy Kurien': 'അയ്യപ്പൻ നായർ', 'Ayyappan Nair': 'കോശി കുര്യൻ', 'Mahesh Bhavana': 'കുഞ്ഞിരാമൻ', 'Biju Paulose': 'സേതുരാമ അയ്യർ', 'Rameshan Nair': 'ജോർജ് കുട്ടി', 'Pachu': 'കുട്ടൻ', 'Kunjiraman': 'മണവാളൻ', 'Pavanayi': 'കീശേരി അച്ചു', 'Manavalan': 'ദാമു', 'Ganga': 'ആനന്ദവല്ലി', 'Rukmini': 'ആനന്ദവല്ലി', 'Girish M.A.': 'സച്ചിൻ', 'Shammi': 'കോശി കുര്യൻ', 'Ranga': 'മൈക്കിൾ അപ്പൻ', 'Dashamoolam Damu': 'കീശേരി അച്ചു', 'Gafoor Ka Dosth': 'പവനായി', 'Anandavalli': 'ഗംഗ', 'Beemboy': 'കീശേരി അച്ചു', 'Kattalan Porinchu': 'നീലകണ്ഠൻ', 'Digambaran': 'നാഗവല്ലി', 'Dileep Role': 'ഗഫൂർ', 'Kuttan': 'മഹേഷ് ഭാവന', 'Krishnan': 'പൊറിഞ്ചു', 'Sachy': 'കുരുവിള', 'Aadu Thoma': 'ഇന്ദുചൂഡൻ', 'Keeleri Achu': 'ദാമു', 'Niranjan': 'സേതുമാധവൻ', 'Stephen Nedumpally': 'സയീദ് മസൂദ്', 'Khureshi Ab\'ram': 'സാഗർ ഏലിയാസ് ജാക്കി', 'Bimal Nair / Bobby': 'ജതിൻ രാംദാസ്', 'Priyadarshini Ramdas': 'അനിത', 'Govardhan': 'മുരുകൻ', 'P.K. Ramdas (PKR)': 'വർമ്മ സാർ', 'Sanjeev / Sanju': 'അലോഷി', 'Mayilvahanam IPS': 'ഐജി ജോസഫ്', 'Nedumpally Estate': 'ഗോൾഡ് സിൻഡിക്കേറ്റ്', 'Sreekanth Varma': 'രംഗ അണ്ണൻ', 'Bhadran': 'മൈക്കിൾ അപ്പൻ', 'Nair / Father': 'കോശി കുര്യൻ',

  // Festivals
  'Onam': 'വിഷു', 'Vishu': 'ഓണം', 'Thrissur Pooram': 'ആറ്റുകാൽ പൊങ്കാല', 'Attukal Pongala': 'തൃശ്ശൂർ പൂരം', 'Vallamkali': 'നെഹ്റു ട്രോഫി', 'Theyyam': 'കഥകളി', 'Pulikali': 'ചെണ്ടമേളം', 'Kerala Piravi': 'റിപ്പബ്ലിക് ഡേ', 'Christmas': 'ഈസ്റ്റർ', 'Eid': 'മുഹറം', 'Karkidaka Vavu': 'ശിവരാത്രി', 'Navarathri': 'തിരുവാതിര', 'Thiruvathira': 'നവരാത്രി', 'Makaravilakku': 'മണ്ഡല പൂജ', 'Kodiyettam': 'ആറാട്ട്', 'Aranmula Uthrattathi': 'നെഹ്റു ട്രോഫി', 'Kettukazhcha': 'കാളവേല', 'Thiruvulsavam': 'പൂരം', 'Pooram': 'തിരുവുത്സവം', 'Palliperunnal': 'ബീമാപള്ളി ഉറൂസ്', 'Beemapally Uroos': 'പള്ളിപ്പെരുന്നാൾ', 'Malayattoor Perunnal': 'മകരവിളക്ക്', 'Oachira Kettukazhcha': 'ചെട്ടികുളങ്ങര ഭരണി', 'Kalpathi Ratholsavam': 'തൃശ്ശൂർ പൂരം', 'Chettikulangara Bharani': 'ഓച്ചിറ കെട്ടുകാഴ്ച', 'Sivarathri': 'കർക്കിടക വാവ്', 'Kuthiyottam': 'തീയാട്ടം', 'Kaalavela': 'കെട്ടുകാഴ്ച', 'Ganamela': 'ചെണ്ടമേളം', 'Kalampaattu': 'താലപ്പൊലി', 'Theeyattam': 'കുത്തിയോട്ടം', 'Ezhunnallathu': 'കൊടിയേറ്റം', 'Chenda Melam': 'ഗാനമേള', 'Thalappoli': 'കളംപാട്ട്', 'Vishu Kani': 'ഓണപ്പൂക്കളം', 'Chutti Art': 'കഥകളി',

  // Places
  'Kochi': 'കോഴിക്കോട്', 'Munnar': 'വയനാട്', 'Alappuzha': 'കുമാരകം', 'Wayanad': 'മൂന്നാർ', 'Varkala': 'കോവളം', 'Kozhikode': 'തലശ്ശേരി', 'Thiruvananthapuram': 'കൊച്ചി', 'Bekal Fort': 'പാലക്കാട് കോട്ട', 'Vagamon': 'പൊൻമുടി', 'Kumarakom': 'ആലപ്പുഴ', 'Athirappilly': 'വാഴച്ചാൽ', 'Sabarimala': 'ഗുരുവായൂർ', 'Guruvayur': 'ശബരിമല', 'Edakkal Caves': 'മറയൂർ', 'Parambikulam': 'സൈലന്റ് വാലി', 'Thekkady': 'ഇടുക്കി', 'Thrissur': 'പാലക്കാട്', 'Kollam': 'പത്തനംതിട്ട', 'Kannur': 'കാസർഗോഡ്', 'Kottayam': 'ഇടുക്കി', 'Palakkad': 'തൃശ്ശൂർ', 'Kasaragod': 'കണ്ണൂർ', 'Idukki': 'വയനാട്', 'Malappuram': 'കോഴിക്കോട്', 'Sultan Bathery': 'മാനന്തവാടി', 'Fort Kochi': 'മട്ടാഞ്ചേരി', 'Silent Valley': 'പറമ്പിക്കുളം', 'Nelliyampathy': 'പൊന്മുടി', 'Sree Padmanabhaswamy Temple': 'ഗുരുവായൂർ ക്ഷേത്രം', 'Thenmala': 'പൊന്മുടി', 'Marari Beach': 'കോവളം', 'Agasthyarkoodam': 'മീശപ്പുലിമല', 'Banasura Sagar': 'മലമ്പുഴ ഡാം', 'Poonjar': 'പാലാ', 'Muzhappilangad': 'പയ്യാമ്പലം', 'Kuttanad': 'ആലപ്പുഴ', 'Pathanamthitta': 'കൊല്ലം',

  // Kerala Food
  'Puttu': 'ഇടിയപ്പം', 'Appam': 'വെള്ളയപ്പം', 'Porotta': 'ചപ്പാത്തി', 'Dosa': 'ഇഡ്ഡലി', 'Idiyappam': 'പുട്ട്', 'Karimeen Pollichathu': 'മീൻ കറി', 'Thalassery Biriyani': 'മലബാർ ബിരിയാണി', 'Payasam': 'ഹൽവ', 'Banana Chips': 'ശർക്കരവരട്ടി', 'Pazham Pori': 'ഉണ്ണിയപ്പം', 'Sadya': 'ബിരിയാണി', 'Avial': 'തോരൻ', 'Kappa': 'ചേന', 'Pathiri': 'നെയ്പത്തിരി', 'Beef Fry': 'മട്ടൺ റോസ്റ്റ്', 'Chatti Pathiri': 'ഉന്നക്കായ', 'Kallappam': 'പാലപ്പം', 'Unniyappam': 'നെയ്യപ്പം', 'Sulaimani': 'ചായ', 'Halwa': 'ലഡ്ഡു', 'Achappam': 'കുഴലപ്പം', 'Kuzhalappam': 'അച്ചപ്പം', 'Banana Fritters': 'ബോളി', 'Mixture': 'മുറുക്ക്', 'Churuttu': 'ജിലേബി', 'Murukku': 'മിക്സ്ചർ', 'Laddoo': 'മൈസൂർ പാക്ക്', 'Jalebi': 'ഹൽവ', 'Mysore Pak': 'ബോളി', 'Parippu Vada': 'ഉഴുന്നു വട', 'Uzhunnu Vada': 'പരിപ്പ് വട', 'Boli': 'പായസം', 'Neyyappam': 'ഉണ്ണിയപ്പം', 'Vattayappam': 'കൊഴുക്കട്ട', 'Elayappam': 'വട്ടയപ്പം', 'Sukhiyan': 'പഴംപൊരി', 'Kozhukatta': 'ഇലയപ്പം', 'Pazham Nirachathu': 'ഉന്നക്കായ', 'Mutta Mala': 'ചട്ടി പത്തിരി', 'Sambar': 'രസം', 'Thoran': 'അവിയൽ', 'Olan': 'കാളൻ', 'Kalan': 'ഓലൻ', 'Erissery': 'പുളിശ്ശേരി', 'Inji Curry': 'പച്ചടി', 'Pappadam': 'പായസം', 'Chicken Stew': 'മട്ടൺ കുരുമ', 'Kothu Parotta': 'പൊറോട്ട റോസ്റ്റ്', 'Mutton Chaaps': 'ബീഫ് റോസ്റ്റ്', 'Kappa Biriyani': 'ബീഫ് ബിരിയാണി', 'Neyyappam Special': 'ഉണ്ണിയപ്പം', 'Chemeen Curry': 'മീൻ കറി', 'Parippu Curry': 'സാമ്പാർ', 'Meen Peera': 'ഫിഷ് മോളി', 'Fish Moolie': 'മീൻ കറി', 'Chicken 65': 'ചില്ലി ചിക്കൻ', 'Chammanthi Podi': 'അച്ചാർ',

  // Household & Bakery
  'Chaya': 'കാപ്പി', 'Puffs': 'കട്ട്‌ലറ്റ്', 'Mutta Baji': 'സമൂസ', 'Nilavilakku': 'കുത്തുവിളക്ക്', 'Kindhi': 'ഉരുളി', 'Uruli': 'ചീനച്ചട്ടി', 'Chiruva': 'തവി', 'Puttukutti': 'ആട്ടുകല്ല്', 'Ammikallu': 'മുറം', 'Cheenachatti': 'ഉരുളി', 'Muram': 'കൊട്ട', 'Kattil': 'കശേര', 'Oonjal': 'തൊട്ടിൽ', 'Kudam': 'ഭരണി', 'Kithli': 'ഫ്ലാസ്ക്', 'Chumbak': 'പൂട്ട്', 'Plavu': 'മാവ്', 'Thegu': 'കവുങ്ങ്', 'Vaazha': 'ചീര', 'Aanakutty': 'പുലിക്കുട്ടി', 'Thorthu': 'മുണ്ട്', 'Chattukam': 'തവി', 'Mundum Neriyathum': 'കസ്സവ് സാരി', 'Cutlet': 'സമൂസ', 'Samosa': 'കട്ട്‌ലറ്റ്', 'Bonda': 'സുഖിയൻ', 'Ela Ada': 'കൊഴുക്കട്ട', 'Sharkara Upperi': 'വാഴക്ക ചിപ്സ്', 'Kappa Chips': 'വാഴക്ക ചിപ്സ്', 'Avalose Podi': 'ചുരുട്ട്', 'Kozhalappam': 'അച്ചപ്പം', 'Kinnathappam': 'വട്ടയപ്പം', 'Bread Pakora': 'ബജ്ജി', 'Meat Roll': 'ചിക്കൻ പഫ്', 'Vettu Cake': 'ക്രീം ബൺ', 'Pakkavada': 'മിക്സ്ചർ', 'Kayyappam': 'പഴംപൊരി', 'Ilayappam': 'കൊഴുക്കട്ട', 'Mothagam': 'കൊഴുക്കട്ട', 'Mutta Puff': 'ചിക്കൻ പഫ്', 'Cream Bun': 'ജാം ബൺ', 'Pahadi Halwa': 'കോഴിക്കോടൻ ഹൽവ', 'Para': 'ഇടങ്ങാഴി', 'Chembu': 'ഉരുളി', 'Arakkallu': 'അമ്മിക്കല്ല്', 'Aattukallu': 'അമ്മിക്കല്ല്', 'Chirava': 'അമ്മിക്കല്ല്', 'Paathram': 'ചീനച്ചട്ടി', 'Puttu Kutti': 'അപ്പച്ചട്ടി', 'Vaal Kannadi': 'നിലവിളക്ക്', 'Kalam': 'ഭരണി', 'Kettle': 'ഫ്ലാസ്ക്', 'Chattuvam': 'ചട്ടുകം', 'Paya': 'കിടക്ക', 'Thiri': 'എണ്ണ', 'Kindu Brass': 'ഉരുളി', 'Alavu Para': 'ഇടങ്ങാഴി', 'Kindu Vessel': 'കിണ്ടി', 'Chappathi Kallu': 'അമ്മിക്കല്ല്', 'Arippa': 'ചട്ടുകം', 'Choottu': 'പന്തം', 'Madaal': 'പ്ലാവ്',

  // People & Life & Vehicles
  'Mohanlal': 'മമ്മൂട്ടി', 'Mammootty': 'മോഹൻലാൽ', 'Manju Warrier': 'ശോഭന', 'Fahadh Faasil': 'പൃഥ്വിരാജ്', 'Shobana': 'മഞ്ജു വാര്യർ', 'Chaya Kada': 'ബേക്കറി', 'Kallu Shappu': 'തട്ടുകട', 'KSRTC': 'പ്രൈവറ്റ് ബസ്', 'KSRTC Bus': 'പ്രൈവറ്റ് ബസ്', 'Auto Rickshaw': 'ടാക്സി', 'Tharavadu': 'മന', 'Aanavandi': 'പ്രൈവറ്റ് ബസ്', 'Vallam': 'ബോട്ട്', 'Autorickshaw': 'ടാക്സി', 'Bullet': 'ആർ എക്സ് 100', 'Houseboat': 'മോട്ടോർബോട്ട്', 'Junkar': 'ഫെറി', 'Vellam': 'നദി', 'Lorry': 'ട്രക്ക്', 'Private Bus': 'കെഎസ്ആർടിസി', 'Tempo Traveller': 'ടൂറിസ്റ്റ് ബസ്', 'Scooter': 'സ്കൂട്ടി', 'Cycle': 'സ്കൂട്ടർ', 'Train': 'മെട്രോ', 'Metro': 'ട്രെയിൻ', 'Flight': 'ഹെലികോപ്റ്റർ', 'Ambi': 'കോണ്ടസ്സ', 'Jeep': 'ഥാർ', 'Tractor': 'കൊയ്ത്തുയന്ത്രം', 'Excavator': 'ബുൾഡോസർ', 'Ambulance': 'ഫയർ എഞ്ചിൻ', 'Fire Engine': 'ആംബുലൻസ്', 'Dileep': 'ജയറാം', 'Suresh Gopi': 'ബിജു മേനോൻ', 'Prithviraj': 'ഫഹദ് ഫാസിൽ', 'Tovino Thomas': 'ആസിഫ് അലി', 'Nivin Pauly': 'ദുൽഖർ സൽമാൻ', 'Kunchacko Boban': 'ജയസൂര്യ', 'Jayaram': 'ദിലീപ്', 'Jayasurya': 'കുഞ്ചാക്കോ ബോബൻ', 'Parvathy Thiruvothu': 'മഞ്ജു വാര്യർ', 'Nazriya Nazim': 'ഐശ്വര്യ ലക്ഷ്മി', 'Anaswara Rajan': 'കല്യാണി പ്രിയദർശൻ', 'Aishwarya Lekshmi': 'നസ്രിയ നസീം', 'Asif Ali': 'ടൊവിനോ തോമസ്', 'Basil Joseph': 'വിനീത് ശ്രീനിവാസൻ', 'Vineeth Sreenivasan': 'ബേസിൽ ജോസഫ്', 'Dulquer Salmaan': 'പൃഥ്വിരാജ്', 'Suraj Venjaramoodu': 'സൗബിൻ ഷാഹിർ', 'Jagathy Sreekumar': 'ഇന്നസെന്റ്', 'Innocent': 'ജഗതി ശ്രീകുമാർ', 'Soubin Shahir': 'സുരാജ് വെഞ്ഞാറമൂട്', 'Kalyani Priyadarshan': 'അനശ്വര രാജൻ', 'K. J. Yesudas': 'എം. ജി. ശ്രീകുമാർ', 'K. S. Chithra': 'സുജാത', 'Sanju Samson': 'ശ്രീജേഷ്', 'Shashi Tharoor': 'പിണറായി വിജയൻ', 'Sreenivasan': 'സിദ്ദിഖ്', 'Salim Kumar': 'ഹരിശ്രീ അശോകൻ', 'Urveshi': 'കല്പന', 'Mukesh': 'സിദ്ദിഖ്', 'Biju Menon': 'സുരേഷ് ഗോപി', 'Pepe Antony': 'ഷെയിൻ നിഗം', 'Panchayath': 'വില്ലേജ് ഓഫീസ്', 'Kudumbashree': 'അയൽക്കൂട്ടം', 'Anganwadi': 'നഴ്സറി', 'Rubber Thottam': 'തേയിലത്തോട്ടം', 'Tea Estate': 'റബ്ബർ തോട്ടം', 'Thengu': 'പ്ലാവ്', 'Kuttanadan Padanilam': 'കോൾ പടവ്', 'Puzha': 'കുളം', 'Kaithari': 'ഖാദി', 'Mazha': 'വെയിൽ', 'Tharavad': 'മന', 'Naadan Pattu': 'കഥകളി', 'Kavala': 'ജംഗ്ഷൻ', 'Palli': 'അമ്പലം', 'Ambalam': 'പള്ളി', 'Lottery Ticket': 'ചിട്ടി', 'Hartal': 'ബന്ദ്', 'Vayanasala': 'ലൈബ്രറി', 'Chitty': 'ബാങ്ക്', 'Kavukal': 'അമ്പലം', 'Kulam': 'പുഴ', 'Milma': 'സപ്ലൈകോ', 'Bevco': 'കള്ള് ഷാപ്പ്', 'Akshaya Centre': 'വില്ലേജ് ഓഫീസ്', 'Supplyco': 'റേഷൻ കട', 'Vidyabhyasa Loan': 'ബാങ്ക് വായ്പ', 'Ration Kada': 'സപ്ലൈകോ', 'Mahatma Gandhi NREGA': 'കുടുംബശ്രീ', 'Current Bill': 'വാട്ടർ ബിൽ', 'KSEB': 'വാട്ടർ അതോറിറ്റി', 'Water Authority': 'കെഎസ്ഇബി', 'Jankar': 'ഫെറി', 'Ferry': 'ജങ്കാർ', 'Chundan Vallam': 'കെട്ടുവള്ളം', 'Kettuvallam': 'ഹൗസ്‌ബോട്ട്', 'Pickup': 'ലോറി', 'Taxi': 'ഓട്ടോ', 'School Bus': 'കോളേജ് ബസ്', 'Jik Jik Train': 'മെട്രോ', 'Kochi Metro': 'വാട്ടർ മെട്രോ', 'Speed Boat': 'ഹൗസ്‌ബോട്ട്', 'Peti Auto': 'ലോറി', 'Ambassador': 'കോണ്ടസ്സ', 'Mahindra Jeep': 'ജിപ്സി', 'Chavittu Vandi': 'സൈക്കിൾ', 'RX 100': 'ബുള്ളറ്റ്', 'Torrus Truck': 'ലോറി', 'Water Metro': 'കൊച്ചി മെട്രോ', 'Low Floor Bus': 'കെഎസ്ആർടിസി', 'Tourist Bus': 'ടൂറിസ്റ്റ് ബസ്',

  // School, Sports, Gulf
  'Kalolsavam': 'ആർട്സ് ഡേ', 'Arts Day': 'കലോത്സവം', 'College Canteen': 'ഹോസ്റ്റൽ മെസ്സ്', 'PTA Meeting': 'ഓപ്പൺ ഹൗസ്', 'Onam Celebration': 'ഫ്രഷേഴ്സ് ഡേ', 'Football': 'ക്രിക്കറ്റ്', 'Cricket': 'ഫുട്ബോൾ', 'Kabaddi': 'ഖോ-ഖോ', 'Volleyball': 'ത്രോബോൾ', 'Pravasi': 'എൻആർഐ', 'Dubai': 'ദോഹ', 'Gulf Money': 'ഡോളർ', 'Chakka': 'മാങ്ങ', 'Naatilekku': 'അവധി', 'Uniform': 'ഐഡി കാർഡ്', 'PT Period': 'ലഞ്ച് ബ്രേക്ക്', 'Annual Day': 'ആർട്സ് ഡേ', 'Exam Hall': 'ലൈബ്രറി', 'Rank List': 'മാർക്ക് ലിസ്റ്റ്', 'College Union': 'എൻ എസ് എസ്', 'Batch': 'ഡിപ്പാർട്ട്മെന്റ്', 'Farewell': 'ഫ്രഷേഴ്സ് ഡേ', 'NSS': 'എൻ സി സി', 'NCC': 'എൻ എസ് എസ്', 'Laboratory': 'ലൈബ്രറി', 'Library': 'ലബോറട്ടറി', 'Hostel': 'കാന്റീൻ', 'Class Leader': 'യൂണിയൻ ചെയർമാൻ', 'Tour Trip': 'ക്യാമ്പ്', 'Bench and Desk': 'ബ്ലാക്ക്ബോർഡ്', 'Bell': 'വിസിൽ', 'Principal': 'മാനേജർ', 'Assignment': 'പ്രോജക്ട്', 'Alumni Meet': 'ഫെയർവെൽ', 'IV (Industrial Visit)': 'കോളേജ് ടൂർ', 'Tuition Class': 'സ്പെഷ്യൽ ക്ലാസ്', 'Canara Bank Challan': 'ഫീസ് രസീത്', 'Record Book': 'ടെക്സ്റ്റ്ബുക്ക്', 'Study Leave': 'പരീക്ഷാ സമയം', 'Youth Festival': 'കലോത്സവം', 'Progress Report': 'റാങ്ക് കാർഡ്', 'Geometry Box': 'സ്കൂൾ ബാഗ്', 'Slate and Pencil': 'ചോക്ക്', 'School Bag': 'വാട്ടർ ബോട്ടിൽ', 'Tug of War': 'കബഡി', 'Sevens Football': 'ഫുട്സാൽ', 'Kho Kho': 'കബഡി', 'Badminton': 'ടെന്നീസ്', 'Swimming': 'വാട്ടർ പോളോ', 'Athletics': 'മാരത്തൺ', 'Javelin': 'ഷോട്ട് പുട്ട്', 'Relay': 'സ്പ്രിന്റ്', 'Boat Race': 'നെഹ്റു ട്രോഫി', 'Carrom': 'ചെസ്സ്', 'Chess': 'കാരംസ്', 'Kalari': 'കരാട്ടെ', 'Long Jump': 'ഹൈ ജമ്പ്', 'High Jump': 'ലോംഗ് ജമ്പ്', 'Throwball': 'വോളിബോൾ', 'Table Tennis': 'ബാഡ്മിന്റൺ', 'Marathon': 'റിലേ', 'Penalty Shootout': 'ഫ്രീ കിക്ക്', 'Trophy': 'മെഡൽ', 'Umpire': 'റഫറി', 'Gallery': 'സ്റ്റേഡിയം', 'Kuttiyum Kolum': 'കിളിത്തട്ട്', 'Kilithattu': 'കുട്ടിയും കോലും', 'Talappanthukali': 'വോളിബോൾ', 'Nadan Panthu': 'ഫുട്ബോൾ', 'Goli': 'ലഗോറി', 'Lagori': 'ഗോലി', 'Arm Wrestling': 'ബോക്സിംഗ്', 'Kabaddi Court': 'റെസ്ലിംഗ് മാറ്റ്', 'Shuttle Racket': 'ടെന്നീസ് റാക്കറ്റ്', 'Foot Volley': 'വോളിബോൾ', 'Abu Dhabi': 'ദുബായ്', 'Qatar': 'ബഹ്റൈൻ', 'Saudi': 'കുവൈറ്റ്', 'Oman': 'ഖത്തർ', 'Bahrain': 'ഒമാൻ', 'Kuwait': 'സൗദി', 'Visa': 'പാസ്പോർട്ട്', 'Passport': 'വിസ', 'Airport': 'വിമാനം', 'Remittance': 'എക്സ്ചേഞ്ച്', 'Duty Free': 'ഗോൾഡ് സൂക്ക്', 'Perfume': 'അത്തർ', 'Dates': 'ബദാം', 'Gold': 'ഡയമണ്ട്', 'Return Ticket': 'വിസ', 'Norka': 'എംബസി', 'Sharjah': 'അജ്മാൻ', 'Baklava': 'കുനാഫ', 'Desert Safari': 'ദൗ ക്രൂയിസ്', 'Burj Khalifa': 'ബുർജ് അൽ അറബ്', 'Vacation Leave': 'എക്സിറ്റ് വിസ', 'Dubai Gold Souk': 'മീന ബസാർ', 'Khubus': 'പീറ്റ ബ്രെഡ്', 'Kafala': 'ലേബർ ലോ', 'Perfume Attar': 'ഊദ്', 'Qatar Airways': 'എമിറേറ്റ്‌സ്', 'Shawarma Machine': 'ഗ്രിൽ മെഷീൻ', 'Oud Incense': 'ബഖൂർ', 'Lablabi / Hummus': 'തഹീനി', 'Dirham Currency': 'ദിനാർ', 'Emirates ID': 'സിവിൽ ഐഡി',

  // Godfather & Harihar Nagar & Movie characters
  'Anjooran': 'സ്വാമിനാഥൻ', 'Swaminathan': 'രാമഭദ്രൻ', 'Ramabhadran': 'ബലരാമൻ', 'Balaraman': 'വീരഭദ്രൻ', 'Achamma': 'മാലതി', 'Mahadevan': 'ഗോവിന്ദൻകുട്ടി', 'Govindan Kutty': 'തോമസ് കുട്ടി', 'Thomas Kutty': 'അപ്പുകുട്ടൻ', 'John Honai': 'തോമസ് കുട്ടി', 'Ganga': 'നകുലൻ', 'Dr. Sunny Joseph': 'നകുലൻ', 'Nagavalli': 'രാമനാഥൻ'
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
  'Niranjan': { movie: 'Summer in Bethlehem', movieMalayalam: 'സമ്മർ ഇൻ ബേത്‌ലഹേം', role: 'Philosophical death-row prisoner who shares a deeply moving final meeting with his beloved before his execution', roleMalayalam: 'വധശിക്ഷയ്ക്ക് മുമ്പ് തനിക്ക് പ്രിയപ്പെട്ടവളെ അവസാനമായി കാണുന്ന വൈകാരികമായ കഥാപാത്രം' },
  'Stephen Nedumpally': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'Enigmatic political mastermind and secret international gold syndicate leader (Khureshi Ab\'ram) protecting the Ramdas family', roleMalayalam: 'രാംദാസ് കുടുംബത്തെ സംരക്ഷിക്കുന്ന രാഷ്ട്രീയ നേതാവും അന്താരാഷ്ട്ര ഗോൾഡ് സിൻഡിക്കേറ്റ് തലവനുമായ ഖുറേഷി അബ്രാം' },
  'Khureshi Ab\'ram': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'The feared global don identity of Stephen Nedumpally operating from the shadows across international borders', roleMalayalam: 'അന്താരാഷ്ട്ര അധോലോകത്തെയും ഗോൾഡ് സിൻഡിക്കേറ്റിനെയും നയിക്കുന്ന സ്റ്റീഫൻ നെടുമ്പള്ളിയുടെ യഥാർത്ഥ മുഖം' },
  'Bimal Nair / Bobby': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'Ambitious, manipulative businessman who marries Priyadarshini and conspires with drug cartels to seize political power', roleMalayalam: 'അധികാരത്തിനും പണത്തിനും വേണ്ടി മയക്കുമരുന്ന് മാഫിയയുമായി ചേരുന്ന കുതന്ത്രശാലിയായ ബോബി' },
  'Priyadarshini Ramdas': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'Daughter of late CM P.K. Ramdas who fiercely guards her family honor while discovering Stephen\'s true loyalty', roleMalayalam: 'പി.കെ. രാംദാസിന്റെ മകളും കുടുംബത്തിന്റെ അഭിമാനത്തിനായി നിലകൊള്ളുന്ന ശക്തയായ സ്ത്രീയും' },
  'Govardhan': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'Relentless conspiracy theorist and truth-seeking vigilante who uncovers the secret web of political corruption and crime', roleMalayalam: 'രാഷ്ട്രീയ കൊലപാതകങ്ങളുടെയും അഴിമതിയുടെയും രഹസ്യ രേഖകൾ പുറത്തു കൊണ്ടുവരുന്ന സത്യസന്ധൻ' },
  'P.K. Ramdas (PKR)': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'The iconic veteran Chief Minister of Kerala whose sudden death triggers a massive political battle for succession', roleMalayalam: 'കേരള രാഷ്ട്രീയത്തിലെ അതികായനും പെട്ടെന്നുള്ള മരണത്തിലൂടെ വലിയ അധികാരത്തർക്കത്തിന് വഴിവെച്ച മുഖ്യമന്ത്രിയും' },
  'Sanjeev / Sanju': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'Deeply troubled son of Priyadarshini who is trapped and blackmailed by Bobby’s dark underworld network', roleMalayalam: 'ബോബിയുടെ ചതിയിലും ഭീഷണികളിലും കുടുങ്ങിപ്പോകുന്ന പ്രിയദർശിനിയുടെ മകൻ' },
  'Zayed Masood': { movie: 'Lucifer', movieMalayalam: 'ലൂസിഫർ', role: 'Elite mercenary and fiercely loyal lieutenant of Khureshi Ab\'ram who leads covert paramilitary operations', roleMalayalam: 'ഖുറേഷി അബ്രാമിന്റെ വിശ്വസ്തനും കമാൻഡോ ഓപ്പറേഷനുകൾ നയിക്കുന്ന കരുത്തനുമായ പോരാളി' },
  'Anjooran': { movie: 'Godfather', movieMalayalam: 'ഗോഡ്ഫാദർ', role: 'Strict and stubborn family patriarch of Anappadi who banned women from entering his family house due to old rivalries', roleMalayalam: 'പഴയകാല വൈരാഗ്യം മൂലം സ്ത്രീകളെ വീട്ടിൽ കയറ്റാതെ മക്കളെ കർക്കശമായി വളർത്തുന്ന കാരണവർ' },
  'Swaminathan': { movie: 'Godfather', movieMalayalam: 'ഗോഡ്ഫാദർ', role: 'Devoted eldest son of Anjooran who secretly managed outside connections while upholding family rules at home', roleMalayalam: 'അച്ഛന്റെ വാക്ക് കേട്ട് കഴിയുന്ന അഞ്ഞൂരാന്റെ മൂത്ത മകനും രസകരമായ കഥാപാത്രവും' },
  'Ramabhadran': { movie: 'Godfather', movieMalayalam: 'ഗോഡ്ഫാദർ', role: 'Youngest son of Anjooran whose secret college romance with rival family girl Malati sparks hilarious chaos', roleMalayalam: 'ശത്രു കുടുംബത്തിലെ മാലതിയുമായി പ്രണയത്തിലായി കുടുംബത്തിൽ വലിയ തമാശകളും പ്രശ്നങ്ങളുമുണ്ടാക്കുന്ന ഇളയ മകൻ' },
  'Balaraman': { movie: 'Godfather', movieMalayalam: 'ഗോഡ്ഫാദർ', role: 'Fiery and loyal middle son of Anjooran who fiercely defends his father and brothers against Achamma\'s clan', roleMalayalam: 'അച്ഛനും സഹോദരന്മാർക്കും വേണ്ടി എന്തിനും മുന്നിൽ നിൽക്കുന്ന അഞ്ഞൂരാന്റെ രണ്ടാമത്തെ മകൻ' },
  'Achamma': { movie: 'Godfather', movieMalayalam: 'ഗോഡ്ഫാദർ', role: 'Proud and vengeful matriarch of Aanappara house who vowed to destroy Anjooran and his family legacy', roleMalayalam: 'അഞ്ഞൂരാനോടുള്ള പക മനസ്സിൽ സൂക്ഷിക്കുന്ന ശക്തയായ ആനപ്പാറ കുടുംബ നാഥ' },
  'Mahadevan': { movie: 'In Harihar Nagar', movieMalayalam: 'ഇൻ ഹരിഹർ നഗർ', role: 'Flirtatious bachelor living with three friends whose obsession with a new neighbor Maya leads to criminal mystery', roleMalayalam: 'ഹരിഹർ നഗറിൽ കൂട്ടുകാരോടൊപ്പം താമസിച്ച് മായയെ പരിചയപ്പെടാൻ ശ്രമിക്കുന്ന ചെറുപ്പക്കാരൻ' },
  'Govindan Kutty': { movie: 'In Harihar Nagar', movieMalayalam: 'ഇൻ ഹരിഹർ നഗർ', role: 'Pragmatic bachelor friend in Harihar Nagar whose humorous advice and schemes always land the gang in trouble', roleMalayalam: 'കൂട്ടുകാരുടെ തമാശകൾക്കും പദ്ധതികൾക്കും കൂട്ടുനിൽക്കുന്ന ഹരിഹർ നഗറിലെ സുഹൃത്ത്' },
  'Thomas Kutty': { movie: 'In Harihar Nagar', movieMalayalam: 'ഇൻ ഹരിഹർ നഗർ', role: 'Innocent and easily scared bachelor friend whose hilarious dialogues and mother\'s calls made him unforgettable', roleMalayalam: 'എപ്പോഴും പേടിക്കുകയും ചിരിപ്പിക്കുന്ന ഡയലോഗുകൾ പറയുകയും ചെയ്യുന്ന കൂട്ടുകാരൻ' },
  'John Honai': { movie: 'In Harihar Nagar', movieMalayalam: 'ഇൻ ഹരിഹർ നഗർ', role: 'Deadly and sophisticated villain who tracks a mysterious suitcase full of money right into Harihar Nagar colony', roleMalayalam: 'പണം നിറച്ച പെട്ടി തേടി ഹരിഹർ നഗറിലെത്തുന്ന ഭയാനകനായ വില്ലൻ ജോൺ ഹോനായി' }
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
  // Also NEVER allow a sentence or explanation! Must be a single word or short 1-3 word noun phrase.
  const isValidShortNoun = (w) => {
    if (!w || typeof w !== 'string') return false;
    const trimmed = w.trim();
    const words = trimmed.split(/\s+/);
    if (words.length > 4) return false; // Reject sentences/long descriptions
    const badVerbs = ['is', 'are', 'was', 'were', 'that', 'which', 'who', 'from', 'about', 'explaining', 'meaning', 'called', 'character', 'describes', 'explains'];
    return !words.some(x => badVerbs.includes(x.toLowerCase()));
  };

  let impWord = null;
  let impMalWord = null;

  // 1. Check our curated exact match dictionaries first!
  const dictImp = IMPOSTER_SINGLE_WORDS[picked[0]];
  const dictImpMal = IMPOSTER_MALAYALAM_SINGLE_WORDS[picked[0]];
  if (dictImp && dictImpMal && dictImp.toLowerCase() !== picked[0].toLowerCase() && !picked[0].toLowerCase().includes(dictImp.toLowerCase()) && isValidShortNoun(dictImp)) {
    impWord = dictImp;
    impMalWord = dictImpMal;
  }

  // 2. For international edition packs, picked[2] IS the imposter word (a sibling character/item).
  //    For Kerala packs marked isAI, also use picked[2] if valid.
  if (!impWord || !impMalWord) {
    const isIntlPack = category.id && category.id.startsWith('intl_');
    if (isIntlPack && picked[2] && picked[2] !== picked[0]) {
      impWord = picked[2];
      impMalWord = picked[2]; // set to same as impWord so it's truthy — prevents step 3 overriding
    } else if (category.isAI && picked[2] && picked[3] && picked[2] !== 'Related Secret' && picked[2] !== picked[0] && isValidShortNoun(picked[2])) {
      const w0Lower = picked[0].toLowerCase();
      const w2Lower = picked[2].toLowerCase();
      const w2First = picked[2].split(' ')[0].toLowerCase();
      if (w0Lower !== w2Lower && !w0Lower.includes(w2Lower) && !w2Lower.includes(w0Lower) && !w0Lower.includes(w2First)) {
        impWord = picked[2];
        impMalWord = picked[3];
      }
    }
  }

  // 3. If still not set, smartly pick a related sibling word from the same category that has zero keyword overlap
  if (!impWord || !impMalWord) {
    const siblings = category.words.filter(w => {
      const w0Lower = w[0].toLowerCase();
      const p0Lower = picked[0].toLowerCase();
      return w[0] !== picked[0] && w0Lower !== p0Lower && !p0Lower.includes(w0Lower) && !w0Lower.includes(p0Lower) && isValidShortNoun(w[0]);
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
function renderRoleView() {
  if (typeof document === 'undefined') return;
  const isImposter = imposters.has(currentPlayer);
  if ($('roleBadge')) {
    $('roleBadge').textContent = isImposter ? (imposters.size > 1 ? 'You are one of the Imposters!' : 'You are the Imposter!') : 'You are a player';
    $('roleBadge').className = `role-badge ${isImposter ? 'imposter' : ''}`;
  }
  
  if (isImposter) {
    if ($('secretLabel')) $('secretLabel').style.display = 'none';
    if ($('secretWord')) $('secretWord').textContent = showMalayalam ? word.hintMalayalam : word.imposterWord;
    if ($('scriptToggle')) {
      // Hide Malayalam toggle in international edition
      const hasAlt = currentEdition !== 'intl' && word && (word.hintLatin || word.hintMalayalam);
      $('scriptToggle').hidden = !hasAlt;
      $('scriptToggle').textContent = showMalayalam ? 'Show in Manglish' : 'Show in Malayalam';
    }
    if ($('secretHint')) {
      let imposterHintHTML = [];
      if ($('seeCategory')?.checked && word && word.category) {
        imposterHintHTML.push(`<span style="color:#a9a4b3;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;display:block;">Category</span><b style="color:var(--accent);font-size:16px;display:block;margin-top:2px;">${word.category}</b>`);
      }
      imposterHintHTML.push(`<small style="color:var(--muted);font-size:12.5px;display:block;margin-top:6px;line-height:1.45;">💡 Subtly related to the secret word, but different! Blend in without guessing!</small>`);
      $('secretHint').innerHTML = imposterHintHTML.join('<div style="height:8px"></div>');
    }
  } else {
    if ($('secretLabel')) {
      $('secretLabel').style.display = '';
      $('secretLabel').textContent = 'SECRET WORD';
    }
    if ($('scriptToggle')) {
      // Hide Malayalam toggle in international edition (English-only)
      $('scriptToggle').hidden = currentEdition === 'intl';
      $('scriptToggle').textContent = showMalayalam ? 'Show in Manglish' : 'Show in Malayalam';
    }
    if ($('secretWord')) $('secretWord').textContent = showMalayalam ? word.malayalam : word.latin;
    if ($('secretHint')) {
      let hintHTML = [];
      // CIVILIAN ALWAYS SEES CATEGORY
      if (word && word.category) {
        hintHTML.push(`<span style="color:#a9a4b3;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;display:block;">Category</span><b style="color:var(--accent);font-size:16px;display:block;margin-top:2px;">${word.category}</b>`);
      }
      if (word && word.movieName && word.characterRole) {
        const mov = showMalayalam ? (word.movieMalayalam || word.movieName) : word.movieName;
        const rol = showMalayalam ? (word.characterRoleMalayalam || word.characterRole) : word.characterRole;
        const isMovie = word.detailType === 'movie' || word.category === 'Movies';
        const movLbl = showMalayalam ? 'സിനിമ / വിഷയം: ' : 'Theme / Movie: ';
        const rolLbl = showMalayalam ? (isMovie ? 'കഥാസാരം: ' : 'വിവരണം: ') : (isMovie ? 'Synopsis/Story: ' : 'Description: ');
        hintHTML.push(`<div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:10px;padding:10px 12px;margin-top:4px;text-align:left;"><div style="font-size:13px;color:var(--accent);margin-bottom:4px;"><b>🎬 ${movLbl}${mov}</b></div><div style="font-size:12.5px;color:var(--text);line-height:1.4;"><b>${rolLbl}</b>${rol}</div></div>`);
      }
      if (hintHTML.length === 0) {
        $('secretHint').innerHTML = 'Everyone else has this word too. Keep it hidden!';
      } else {
        $('secretHint').innerHTML = hintHTML.join('<div style="height:8px"></div>');
      }
    }
  }
}
function startTimer(){clearInterval(timerId);const minutes=parseInt($('durationSelect')?.value||2,10);let left=minutes*60;const total=left;const draw=()=>{const m=Math.floor(left/60),s=left%60;if($('timer'))$('timer').textContent=`${m}:${String(s).padStart(2,'0')}`;if($('timerRing'))$('timerRing').style.strokeDashoffset=327*(1-left/total)};draw();timerId=setInterval(()=>{left--;draw();if(left<=0){clearInterval(timerId);showVote()}},1000)}
function showVote(){if(typeof document==='undefined')return;clearInterval(timerId);selectedVote=-1;const list=$('voteList');if(!list)return;list.innerHTML='';players.forEach((name,i)=>{const b=document.createElement('button');b.className='vote-option';b.innerHTML=`<span class="avatar">${i+1}</span><span>${name}</span>`;b.onclick=()=>{document.querySelectorAll('.vote-option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');selectedVote=i;if($('revealResult')){$('revealResult').disabled=false;$('revealResult').classList.remove('disabled')}};list.append(b)});if($('revealResult')){$('revealResult').disabled=true;$('revealResult').classList.add('disabled')} show('vote')}
function result(){const caught=imposters.has(selectedVote);const who=Array.from(imposters).map(i=>players[i]).join(', ');if($('resultIcon')){$('resultIcon').className=`result-icon ${caught?'':'fail'}`;$('resultIcon').textContent=caught?'✦':'!'}if($('resultEyebrow'))$('resultEyebrow').textContent=caught?'GOT THEM!':'OH NO!';if($('resultTitle'))$('resultTitle').textContent=caught?'The Imposter is caught!':(imposters.size>1?'The Imposters win!':'The Imposter wins!');if($('resultText'))$('resultText').textContent=`${who} ${imposters.size>1?'were the Imposters':'was the Imposter'}.`;const compCard=$('resultComparisonCard')||$('answerWord')?.parentElement;if(compCard&&word){const civWord=showMalayalam?(word.malayalam||word.latin):(word.latin||'');const civSub=showMalayalam?word.latin:(word.malayalam||'');const impWordStr=showMalayalam?(word.hintMalayalam||word.imposterWord):(word.imposterWord||'');const impSub=showMalayalam?word.imposterWord:(word.hintMalayalam||'');let relText="";
// ─── Specific relationship explanation ───────────────────────────────────
const civ=word.latin||'';const imp=word.imposterWord||'';
if(word.category==='Godfather'||word.movieName==='Godfather'){
  relText=`Both are legendary characters from the iconic 'Godfather' saga. The imposter got <b>${imp}</b> while civilians had <b>${civ}</b>—similar world, different identity, so the imposter could blend in perfectly!`;
}else if(word.movieName||word.characterRole){
  const mName=word.movieName||word.category;
  relText=`Both <b>${civ}</b> and <b>${imp}</b> are characters that share a very similar role, profession, or moral archetype. The imposter could describe traits, personality, or story beats that apply to both—making it nearly impossible to be caught!`;
}else if(word.isAI||word.isCustom){
  relText=`The AI specifically paired <b>${civ}</b> with <b>${imp}</b> because they share strong thematic overlap in the '${word.category}' space. They are different enough to not be obvious, but connected enough for the imposter to sound credible!`;
}else{
  // Build a truly specific description based on the actual word pairing
  const civL=civ.toLowerCase();const impL=imp.toLowerCase();
  let specificRel='';
  // Check if both relate to the same brand/origin/context
  const brandMap={pizza:'Italian food',burger:'American fast food','hot dog':'American street food',sushi:'Japanese cuisine',ramen:'Japanese noodle dish',tacos:'Mexican street food',burritos:'Mexican wrap food',pasta:'Italian wheat dish',lasagna:'Italian baked pasta',steak:'grilled red meat',cheesecake:'creamy dessert cake',tiramisu:'Italian coffee dessert',donut:'fried sweet dough',waffle:'battered breakfast',croissant:'French pastry',pancake:'flat breakfast cake',crepe:'thin French pancake','fried chicken':'deep-fried poultry','grilled chicken':'flame-cooked poultry','french fries':'deep-fried potato','onion rings':'battered fried onion','chocolate cake':'rich cocoa dessert',brownies:'dense chocolate square','ice cream':'frozen dairy treat',gelato:'Italian frozen dessert',spaghetti:'long Italian pasta',fettuccine:'flat Italian pasta','spider-man':'Marvel web-slinger',batman:'DC dark knight','iron man':'Marvel armoured hero',thor:'Marvel thunder god','captain america':'Marvel super-soldier',hulk:'Marvel gamma powerhouse',superman:'DC kryptonian hero',flash:'DC speedster',wolverine:'Marvel adamantium mutant',cyclops:'Marvel optic-blast mutant',deadpool:'Marvel fourth-wall breaker',daredevil:'Marvel blind vigilante',lion:'apex big cat predator',tiger:'striped big cat predator',eagle:'powerful raptor bird',hawk:'smaller raptor bird',dolphin:'intelligent sea mammal',shark:'ocean apex predator',elephant:'largest land mammal',rhinoceros:'armoured land giant',cheetah:'fastest land predator',leopard:'spotted stealthy predator',wolf:'pack predator canine',fox:'clever solitary canine',gorilla:'largest great ape',chimpanzee:'tool-using great ape'};
  const civContext=brandMap[civL]||'';
  const impContext=brandMap[impL]||'';
  if(civContext&&impContext&&civContext===impContext){
    specificRel=`Both <b>${civ}</b> and <b>${imp}</b> are ${civContext}s. They share the same cooking style, origin, or eating experience, so the imposter could confidently talk about taste, texture, and feel—without revealing they had a different item!`;
  }else if(civContext&&impContext){
    specificRel=`<b>${civ}</b> (${civContext}) and <b>${imp}</b> (${impContext}) belong to the same flavour world. The imposter's clues about texture, meal-time, or cuisine type would apply to both, making them almost undetectable!`;
  }else{
    specificRel=`<b>${civ}</b> and <b>${imp}</b> are closely paired—they share the same real-world context, use-case, or cultural association. The imposter's description of <b>${imp}</b> would sound convincing because both items are experienced, discussed, and thought about in very similar ways. That's what makes this game tricky!`;
  }
  relText=specificRel;
}
compCard.innerHTML=`<div class="dual-words-container"><div class="word-box civ-box"><span class="box-label">🧑 Civilians' Word</span><strong class="box-word">${civWord}</strong>${civSub&&civSub!==civWord?`<small class="box-sub">(${civSub})</small>`:''}</div><div class="word-box imp-box"><span class="box-label">🤫 Imposter's Word</span><strong class="box-word">${impWordStr}</strong>${impSub&&impSub!==impWordStr?`<small class="box-sub">(${impSub})</small>`:''}</div></div><div class="relationship-explanation"><div class="rel-title">💡 How the words are related</div><div class="rel-text">${relText}</div></div>`;}show('result')}
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

  // Edition pill
  const editionPillEl = $('editionPill');
  if (editionPillEl) editionPillEl.onclick = toggleEdition;

  // Restore saved edition on load
  if (currentEdition === 'intl') applyEdition('intl');

  if($('playerList'))renderPlayers();if($('categorySummary'))updateCategoryText();initGeminiKeyUI();hideLoader();
}

