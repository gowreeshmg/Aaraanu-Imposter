import re
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Target exactly the body[data-screen="home"] block that has position: fixed!important
pattern = r'(body\[data-screen="home"\]\s*\{[^}]*)position:\s*fixed!important;([^}]*\})'
match = re.search(pattern, css)
if match:
    new_css = re.sub(pattern, r'\1\2', css)
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(new_css)
    print("Fixed body position!")
else:
    print("Could not find body block with position: fixed")
