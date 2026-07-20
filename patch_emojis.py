import json, re

# Define correct emojis
mal_emojis = {
    "funny": "😂",
    "movies": "🎬",
    "bakery": "🍞",
    "household": "🏠",
    "people": "👥",
    "kerala": "🌴",
    "vehicles": "🚗",
    "school": "🎒",
    "sports": "⚽",
    "gulf": "✈️"
}

en_emojis = {
    "movies": "🍿",
    "famousplaces": "🗼",
    "famousfoods": "🍔",
    "superheroes": "🦸‍♂️",
    "disney": "🏰",
    "famousvillains": "🦹‍♂️",
    "animals": "🦁",
    "foodintl": "🍕"
}

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

def replacer(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p["id"] in mal_emojis:
            p["icon"] = mal_emojis[p["id"]]
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

def replacer_intl(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p["id"] in en_emojis:
            p["icon"] = en_emojis[p["id"]]
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

text = re.sub(r'var packs = (\[.*?\]);', replacer, text, flags=re.DOTALL)
text = re.sub(r'const intlPacks = (\[.*?\]);', replacer_intl, text, flags=re.DOTALL)

with open("words.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r"\?v=\d+", "?v=47", html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Fixed emojis!")
