import json, re

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

print("Malayalam:")
for match in re.finditer(r'var packs = (\[.*?\]);', text, re.DOTALL):
    packs = json.loads(match.group(1))
    for p in packs:
        print(f"  {p['name']} ({len(p['words'])})")

print("English:")
for match in re.finditer(r'const intlPacks = (\[.*?\]);', text, re.DOTALL):
    packs = json.loads(match.group(1))
    for p in packs:
        print(f"  {p['name']} ({len(p['words'])})")
