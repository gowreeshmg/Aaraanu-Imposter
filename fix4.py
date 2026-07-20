import re
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

count = 0
for match in re.finditer(r'\.home-actions\{[^\}]+\}', css):
    block = match.group(0)
    if "position:absolute" in block:
        new_block = re.sub(r'position:absolute!important;', 'position:fixed!important;', block)
        new_block = re.sub(r'padding:[^;]+;', 'padding:20px 20px 16px!important;', new_block)
        css = css.replace(block, new_block)
        count += 1

if count > 0:
    # Also fix #openHelp button size
    if "#openHelp {" not in css:
        css += "\n#openHelp { font-size: 16px!important; padding: 12px!important; }\n"
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Fixed styles.css home-actions block!")
else:
    print("Could not find any .home-actions with position:absolute")
