import re
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# I will add back the #home.screen.active block into index.html
inline_css = """
    /* Home screen: relative container that exactly fills the viewport */
    #home.screen.active{
      position:relative!important;
      height:100svh!important;
      min-height:100svh!important;
      max-height:100svh!important;
      overflow:hidden!important;
      display:flex!important;
      flex-direction:column!important;
      padding:0!important;
    }
"""
if "#home.screen.active" not in html:
    html = html.replace("</style>", inline_css + "</style>")

html = re.sub(r"\?v=\d+", "?v=35", html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Replace the broken home-actions with the fixed one
css = re.sub(
    r"\.home-actions\{[^\}]+\}",
    ".home-actions{\n  position:fixed!important;\n  bottom:0!important;\n  left:50%!important;\n  transform:translateX(-50%)!important;\n  width:100%!important;\n  max-width:520px!important;\n  background:#060509!important;\n  border-top:1px solid #1a1726!important;\n  border-radius:24px 24px 0 0!important;\n  padding:36px 16px max(12px, env(safe-area-inset-bottom, 12px))!important;\n  display:flex!important;\n  flex-direction:column!important;\n  gap:6px!important;\n  align-items:center!important;\n  z-index:999!important;\n}",
    css
)

# Remove the pointer-events none from home-copy and character-wrap just to be clean
css = css.replace("pointer-events:none;", "")

# I'll also add back #home.screen.active to styles.css just in case
if "#home.screen.active" not in css:
    css += """
#home.screen.active{
  display:flex!important;
  flex-direction:column!important;
  position:relative!important;
  height:100svh!important;
  min-height:100svh!important;
  max-height:100svh!important;
  overflow:hidden!important;
  padding:0!important;
}
"""

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Restored fixed positioning")
