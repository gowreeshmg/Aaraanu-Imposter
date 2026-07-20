const fs = require('fs');
const oldDump = JSON.parse(fs.readFileSync('scratch/categories_dump.json', 'utf8'));

const icons = {
  funny: '??', movies: '??', characters: '??', festivals: '??', places: '???', food: '???',
  bakery: '??', home: '??', people: '??', life: '??', vehicles: '??', school: '??', sports: '?', gulf: '??',
  intl_superheroes: '?????', intl_villains: '?????', intl_movie_chars: '??', intl_tv_chars: '??', intl_food: '??',
  intl_animals: '??', intl_sports: '??', intl_countries: '??', intl_video_games: '??', intl_music: '??',
  intl_famous_people: '??', intl_common_objects: '??', intl_nature: '??', intl_disney: '?', intl_places: '???'
};

const mergedData = {};
for (let i = 0; i < 5; i++) {
  try {
    const chunk = JSON.parse(fs.readFileSync('scratch/chunk_' + i + '_done.json', 'utf8'));
    Object.assign(mergedData, chunk);
  } catch (e) {
    console.error('Error reading chunk ' + i + ':', e);
  }
}

const packs = [];
const intlPacks = [];

for (const [catId, wordsArr] of Object.entries(mergedData)) {
  const isIntl = catId.startsWith('intl_');
  const name = oldDump[catId] ? oldDump[catId].name : catId;
  const icon = icons[catId] || '??';
  
  const pack = {
    id: catId,
    name: name,
    icon: icon,
    words: wordsArr
  };
  
  if (isIntl) {
    intlPacks.push(pack);
  } else {
    packs.push(pack);
  }
}

let fileOutput = "if (typeof window === 'undefined') { global.window = {}; }\n\n";
fileOutput += "const packs = " + JSON.stringify(packs, null, 2) + ";\n";
fileOutput += "const intlPacks = " + JSON.stringify(intlPacks, null, 2) + ";\n\n";
fileOutput += "if (typeof window !== 'undefined') {\n  window.packs = packs;\n  window.intlPacks = intlPacks;\n}\n";

fs.writeFileSync('words.js', fileOutput, 'utf8');
console.log('Successfully stitched words.js!');
