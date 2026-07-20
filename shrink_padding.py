import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Replace padding:36px with padding:16px in home-actions
css = re.sub(
    r"padding:36px 16px max",
    "padding:16px 16px max",
    css
)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=39", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Shrunk top padding")
