with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

target = """  body[data-screen="home"] .app-shell {
    height: 100%!important;
    min-height: 100%!important;
    max-height: 100%!important;
/* Use flex column + margin-top:auto so .home-actions sits at the very bottom  */"""

replacement = """  body[data-screen="home"] .app-shell {
    height: 100%!important;
    min-height: 100%!important;
    max-height: 100%!important;
  }
/* Use flex column + margin-top:auto so .home-actions sits at the very bottom  */"""

if target in css:
    css = css.replace(target, replacement)
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Fixed styles.css missing brace")
else:
    print("Target not found. Let me try a more flexible match.")
    import re
    new_css, count = re.subn(r'body\[data-screen="home"\] \.app-shell \{\s*height: 100%![a-z]+;\s*min-height: 100%![a-z]+;\s*max-height: 100%![a-z]+;\s*/\* Use flex column', r'body[data-screen="home"] .app-shell {\n    height: 100%!important;\n    min-height: 100%!important;\n    max-height: 100%!important;\n  }\n/* Use flex column', css)
    if count > 0:
        with open("styles.css", "w", encoding="utf-8") as f:
            f.write(new_css)
        print("Fixed styles.css using regex")
    else:
        print("Regex also failed to find it")
