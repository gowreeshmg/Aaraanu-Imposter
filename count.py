import json

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

# strip var packs = and trailing ;
json_str = text.split("var packs = ")[1].strip()
if json_str.endswith(";"):
    json_str = json_str[:-1]

packs = json.loads(json_str)

bad_count = 0
for p in packs:
    for w in p.get("words", []):
        for imp in w.get("imposters", []):
            if "Alternative" in imp.get("word", ""):
                bad_count += 1

print(f"Total bad imposters: {bad_count}")
