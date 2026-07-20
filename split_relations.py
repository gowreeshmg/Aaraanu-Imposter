import json
import re
import os
import math

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r"var packs = (\[.*?\]);", text, re.DOTALL)
packs = json.loads(match.group(1))

# We only care about Malayalam packs (exclude the English ones if they are in there, but they are all Malayalam actually except some? Wait, let's just rewrite everything in packs because intlPacks has the English ones)
os.makedirs("scratch", exist_ok=True)
chunk_size = math.ceil(len(packs) / 5)
for i in range(5):
    chunk = packs[i * chunk_size : (i + 1) * chunk_size]
    with open(f"scratch/rel_chunk_{i}.json", "w", encoding="utf-8") as f:
        json.dump(chunk, f, indent=2)

print(f"Split {len(packs)} packs into 5 chunks.")
