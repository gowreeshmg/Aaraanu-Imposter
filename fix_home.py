import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

original_home_actions = ".home-actions{position:fixed!important;bottom:0!important;left:0!important;right:0!important;margin:0 auto!important;width:100%!important;max-width:520px!important;z-index:999!important;padding:36px 16px max(12px, env(safe-area-inset-bottom, 12px))!important;background:linear-gradient(to top, #060509 90%, transparent)!important;display:flex!important;flex-direction:column!important;align-items:center!important;gap:8px!important;}"

css = re.sub(
    r"\.home-actions\{[^\}]+\}",
    original_home_actions,
    css
)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r"\?v=\d+", "?v=38", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Fixed home actions css")
