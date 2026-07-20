import re
with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

text = re.sub(r"^const packs = \[", "var packs = [", text, flags=re.MULTILINE)

with open("words.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("app.js", "r", encoding="utf-8") as f:
    text2 = f.read()

# I will also just remove the var packs = ... from app.js and just rely on the global to be extra safe
# Or just leave var packs = ... since var is safe to redeclare.
# Wait, if words.js uses var packs = [], then app.js var packs = packs is fine.
# Let's change app.js to just use window.packs directly if we want to be safe, but var is fine.
text2 = re.sub(r"^var packs = .*?;", "var packs = (typeof window !== 'undefined' && window.packs) || (typeof packs !== 'undefined' ? packs : []);", text2, flags=re.MULTILINE)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text2)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=33", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Fixed var packs")
