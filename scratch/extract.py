import json
with open('scratch/rel_chunk_3.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pairs = []
for p in data:
    for w in p['words']:
        for i in w['imposters']:
            pairs.append((w['civWord'], i['word']))

print(list(set(pairs)))
