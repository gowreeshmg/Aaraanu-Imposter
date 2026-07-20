import re
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

css = css.replace("position:fixed!important;", "position:absolute!important;", 1) # First one in that block?
# Let's be precise
