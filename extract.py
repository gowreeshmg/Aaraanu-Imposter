import json
with open('c:/Users/HP/Desktop/Imposter/scratch/rel_chunk_2.json', encoding='utf-8') as f:
    data = json.load(f)
pairs = set()
for p in data:
    for w in p.get('words', []):
        for i in w.get('imposters', []):
            pairs.add((w['civWord'], i['word']))
print(f"Total pairs: {len(pairs)}")
print(list(pairs)[:10])
