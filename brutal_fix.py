import re
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Remove the over-constrained #home.screen.active CSS entirely
html = re.sub(r"\s*#home\.screen\.active\{[^\}]+\}", "", html)

# Increment v
html = re.sub(r"\?v=\d+", "?v=32", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Remove any #home.screen.active over-constraints from styles.css as well
css = re.sub(r"\s*#home\.screen\.active\{[^\}]+\}", "", css)

# Make home-actions flow normally in flexbox
css = re.sub(
    r"\.home-actions\{[^\}]+\}",
    ".home-actions{\n  position:relative!important;\n  margin-top:auto!important;\n  width:100%!important;\n  max-width:520px!important;\n  background:#060509!important;\n  border-top:1px solid #1a1726!important;\n  border-radius:24px 24px 0 0!important;\n  padding:36px 16px max(12px, env(safe-area-inset-bottom, 12px))!important;\n  display:flex!important;\n  flex-direction:column!important;\n  gap:6px!important;\n  align-items:center!important;\n  z-index:999!important;\n}",
    css
)

# Add pointer-events none to home-copy and character-wrap to prevent them blocking clicks
css = re.sub(r"\.home-copy\{", ".home-copy{pointer-events:none;", css)
css = re.sub(r"\.character-wrap\{", ".character-wrap{pointer-events:none;", css)
# But make sure h1 and text aren't selectable anyway
css = re.sub(r"body\[data-screen=\"home\"\]\.app-shell\{", "body[data-screen=\"home\"] .app-shell{", css)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Brutal fix applied")
