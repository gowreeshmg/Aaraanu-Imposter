import json
import os

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

# Extract packs array
import re
match = re.search(r"var packs = (\[.*?\]);", text, re.DOTALL)
packs = json.loads(match.group(1))

bad_cats = []
for p in packs:
    is_bad = False
    for w in p.get("words", []):
        for imp in w.get("imposters", []):
            if "Alternative" in imp.get("word", ""):
                is_bad = True
                break
        if is_bad: break
    if is_bad:
        bad_cats.append(p)

os.makedirs("scratch", exist_ok=True)
with open("scratch/bad_categories.json", "w", encoding="utf-8") as f:
    json.dump(bad_cats, f, indent=2)

print(f"Found {len(bad_cats)} bad categories.")
