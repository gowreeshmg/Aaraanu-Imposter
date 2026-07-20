import json
import re

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r"var packs = (\[.*?\]);", text, re.DOTALL)
packs = json.loads(match.group(1))

# Load all done chunks
done_files = [
    "scratch/rel_chunk_0_done.json",
    "scratch/rel_chunk_1_done.json",
    "scratch/rel_chunk_2_done.json",
    "scratch/rel_chunk_3_done.json",
    "scratch/rel_chunk_4_done.json",
]

all_fixed = {}
for f in done_files:
    with open(f, "r", encoding="utf-8") as fh:
        data = json.load(fh)
    for pack in data:
        all_fixed[pack["id"]] = pack

replaced = 0
for i, p in enumerate(packs):
    if p["id"] in all_fixed:
        packs[i] = all_fixed[p["id"]]
        replaced += 1

print(f"Replaced {replaced} packs")

new_json = json.dumps(packs, indent=2, ensure_ascii=False)
new_text = text[:match.start(1)] + new_json + text[match.end(1):]

with open("words.js", "w", encoding="utf-8") as f:
    f.write(new_text)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=44", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done!")
