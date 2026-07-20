import re
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

count = 0
for match in re.finditer(r'\.home-actions\{[^\}]+\}', css):
    block = match.group(0)
    new_block = re.sub(r'padding:[^;]+;', 'padding:28px 16px 4px!important;', block)
    css = css.replace(block, new_block)
    count += 1

if count > 0:
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Fixed padding!")
else:
    print("Could not find .home-actions")
