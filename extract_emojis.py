import json, re

with open('scratch/overhaul_words.js', 'r', encoding='utf-8') as f:
    text = f.read()

for match in re.finditer(r'name"\s*:\s*"([^"]+)",\s*"icon"\s*:\s*"([^"]+)"', text):
    print(f"{match.group(2)} {match.group(1)}")
