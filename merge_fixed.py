import json
import re

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r"var packs = (\[.*?\]);", text, re.DOTALL)
packs = json.loads(match.group(1))

with open("scratch/bad_categories_fixed.json", "r", encoding="utf-8") as f:
    fixed_cats = json.load(f)

fixed_dict = { c["id"]: c for c in fixed_cats }

for i, p in enumerate(packs):
    if p["id"] in fixed_dict:
        packs[i] = fixed_dict[p["id"]]

# Ensure trailing characters and everything are correct
new_json = json.dumps(packs, indent=2, ensure_ascii=False)
new_text = text[:match.start(1)] + new_json + text[match.end(1):]

with open("words.js", "w", encoding="utf-8") as f:
    f.write(new_text)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=40", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Merged fixed categories")
