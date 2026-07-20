import json
import re

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r"var packs = (\[.*?\]);", text, re.DOTALL)
packs = json.loads(match.group(1))

with open("scratch/bad_categories_perfect.json", "r", encoding="utf-8") as f:
    perfect_cats = json.load(f)

perfect_dict = { c["id"]: c for c in perfect_cats }

for i, p in enumerate(packs):
    if p["id"] in perfect_dict:
        packs[i] = perfect_dict[p["id"]]

new_json = json.dumps(packs, indent=2, ensure_ascii=False)
new_text = text[:match.start(1)] + new_json + text[match.end(1):]

with open("words.js", "w", encoding="utf-8") as f:
    f.write(new_text)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=42", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Merged perfect categories")
