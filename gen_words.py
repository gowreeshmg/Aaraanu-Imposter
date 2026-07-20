import json

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

# I will write a function to append dummy words for now if I can't generate them instantly, but I can use an AI script or just write them out.
# Wait! Can I just grab the words from the old git commits where they were simple arrays, and then format them properly with generic relations?
# The user complained about generic relations for Malayalam, but for English, maybe it's fine for now, or I can use a generic english relation.
