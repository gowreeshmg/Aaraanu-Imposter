import re
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Find the .home-actions block
match = re.search(r'\.home-actions\s*{[^}]*}', css)
if match:
    block = match.group(0)
    print("Found block:", block)
    # Revert position to fixed
    new_block = re.sub(r'position:\s*absolute\s*!important', 'position:fixed!important', block)
    
    # Set padding back to what the user wants: "make the height of blackbox how it was before... increase the size of the How to Play button too"
    # Original padding was probably padding:12px 20px 10px!important; or similar.
    # Actually, the user says "make the height of blackbox how it was before", meaning they want it BIGGER (because I had made it smaller).
    # Let's set it to padding: 20px 20px 16px!important;
    new_block = re.sub(r'padding:[^;]+;', 'padding:20px 20px 16px!important;', new_block)
    
    css = css.replace(block, new_block)
    
    # Also find How to Play button to increase size
    # The How to Play button has ID #openHelp. It's a .link-button.
    # Let's just add a specific rule for #openHelp
    if "#openHelp" not in css:
        css += "\n#openHelp { font-size: 16px!important; padding: 12px!important; }\n"
        
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Fixed styles.css successfully!")
else:
    print("Could not find .home-actions")
