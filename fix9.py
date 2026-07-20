import re
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Fix home-actions
css = re.sub(r"\.home-actions\{[\r\n\s]*position:fixed!important;", ".home-actions{\n  position:absolute!important;", css)
css = re.sub(r"padding:28px 16px 4px!important;", "padding:36px 16px 4px!important;", css)
css = re.sub(r"#openHelp \{ font-size: 16px!important; padding: 12px!important; \}", "#openHelp { font-size: 18px!important; padding: 14px!important; }", css)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Done")
