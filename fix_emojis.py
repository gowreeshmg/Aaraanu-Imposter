import json, re

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

emojis = {
    "Funny Malayalam": "??",
    "Movies": "??",
    "Bakery & Snacks": "??",
    "Household Items": "??",
    "People": "??",
    "Kerala Life": "??",
    "Vehicles": "??",
    "College & School": "??",
    "Sports": "?",
    "Gulf & NRI": "??",
    
    "Superheroes": "?????",
    "Famous Villains": "?????",
    "Movie Characters": "??",
    "TV Characters": "??",
    "Famous Foods": "??",
    "Animals": "??",
    "Famous People": "??",
    "Everyday Objects": "??",
    "Nature": "??",
    "Disney & Animation": "??",
    "Famous Places": "??"
}

def fix_icons(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p['name'] in emojis:
            p['icon'] = emojis[p['name']]
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

text = re.sub(r'var packs = (\[.*?\]);', fix_icons, text, flags=re.DOTALL)
text = re.sub(r'const intlPacks = (\[.*?\]);', fix_icons, text, flags=re.DOTALL)

with open("words.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Fixed emojis!")
