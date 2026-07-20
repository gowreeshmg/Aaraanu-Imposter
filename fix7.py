import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

pattern = r'body\[data-screen="home"\]\s*\{\s*overflow:\s*hidden!important;\s*#home has height:100dvh.*?\.home-actions\s*\{'

match = re.search(pattern, css, re.DOTALL)
if match:
    replacement = """#home.screen.active {
    display: flex!important;
    flex-direction: column!important;
    position: relative!important;
    height: 100%!important;
    min-height: 100%!important;
    max-height: 100%!important;
    overflow: hidden!important;
    padding: 0!important;
}

.home-actions {"""
    
    css = re.sub(pattern, replacement, css, flags=re.DOTALL)
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Mangled block fixed!")
else:
    print("Mangled block not found")
