import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

fixed_home_actions = ".home-actions{\n  position:fixed!important;\n  bottom:0!important;\n  left:50%!important;\n  transform:translateX(-50%)!important;\n  width:100%!important;\n  max-width:520px!important;\n  background:#060509!important;\n  border-top:1px solid #1a1726!important;\n  border-radius:24px 24px 0 0!important;\n  padding:24px 16px max(16px, env(safe-area-inset-bottom, 16px))!important;\n  display:flex!important;\n  flex-direction:column!important;\n  gap:6px!important;\n  align-items:center!important;\n  z-index:999!important;\n}"

css = re.sub(
    r"\.home-actions\{[^\}]+\}",
    fixed_home_actions,
    css
)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=41", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Applied final home actions CSS")
