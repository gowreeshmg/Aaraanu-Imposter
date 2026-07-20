import re

# Update index.html for setup-actions
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Setup actions has: padding:6px 16px max(8px, env(safe-area-inset-bottom, 8px)) 16px!important;
html = re.sub(
    r"padding:6px 16px max\(8px, env\(safe-area-inset-bottom, 8px\)\) 16px!important;",
    "padding:24px 16px max(24px, env(safe-area-inset-bottom, 16px))!important;",
    html
)

html = re.sub(r"\?v=\d+", "?v=37", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

# Update styles.css for home-actions
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Home actions has: padding:36px 16px max(12px, env(safe-area-inset-bottom, 12px))!important;
css = re.sub(
    r"padding:36px 16px max\(12px, env\(safe-area-inset-bottom, 12px\)\)!important;",
    "padding:16px 16px max(12px, env(safe-area-inset-bottom, 12px))!important;",
    css
)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Adjusted boxes")
