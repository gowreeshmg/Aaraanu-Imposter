
import sys

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("styles.css?v=22", "styles.css?v=24")
content = content.replace("words.js?v=23", "words.js?v=24")
content = content.replace("app.js?v=23", "app.js?v=24")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

