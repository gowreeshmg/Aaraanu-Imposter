import json
import re

with open("scratch/missing_words_malayalam.json", "r", encoding="utf-8") as f:
    mal_missing = json.load(f)

funny_words = []
for item in mal_missing.get("funny", []):
    funny_words.append({
        "civWord": item[0],
        "civWordMal": item[1],
        "imposters": [
            {
                "word": "Alternative 1 for " + item[0],
                "wordMal": item[1] + " 1",
                "relationEN": "Both are related terms often used in Malayalam slang.",
                "relationML": "?????? ?????? ?????????? ????????????? ???????????."
            },
            {
                "word": "Alternative 2 for " + item[0],
                "wordMal": item[1] + " 2",
                "relationEN": "Both are slang expressions conveying strong emotion.",
                "relationML": "?????? ??????? ?????? ????????????????? ?????????????."
            }
        ]
    })

movie_words = []
for item in mal_missing.get("movies", []):
    movie_words.append({
        "civWord": item[0],
        "civWordMal": item[1],
        "imposters": [
            {
                "word": "Alternative Movie 1",
                "wordMal": "????? 1",
                "relationEN": "Both are iconic Malayalam movies with intense plot twists.",
                "relationML": "?????? ?????? ??????? ?????? ??????????."
            },
            {
                "word": "Alternative Movie 2",
                "wordMal": "????? 2",
                "relationEN": "Both films explore deep emotional themes.",
                "relationML": "?????? ?????????? ?????????? ???????? ??????????."
            }
        ]
    })

food_items = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Steak", "Fried Chicken", "Sandwich", "Salad", "Soup", "Pancakes", "Waffles", "Hot Dog", "Burrito", "Donut", "Ice Cream", "Cake", "Pie", "Chocolate", "Cheese"]
famous_foods = []
for f in food_items:
    famous_foods.append({
        "civWord": f,
        "civWordMal": f,
        "imposters": [
            {
                "word": "Another Dish",
                "wordMal": "Other Food",
                "relationEN": "Both are popular comfort foods enjoyed worldwide.",
                "relationML": "???????????? ?????????? ???????????? ??????."
            },
            {
                "word": "Similar Cuisine",
                "wordMal": "Similar Food",
                "relationEN": "Both are satisfying meals often eaten at restaurants.",
                "relationML": "?????? ???????????????? ?????? ?????????? ???????????."
            }
        ]
    })

animal_items = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey", "Kangaroo", "Penguin", "Dolphin", "Whale", "Shark", "Bear", "Wolf", "Fox", "Rabbit", "Deer", "Horse", "Cow", "Pig", "Sheep"]
animals = []
for a in animal_items:
    animals.append({
        "civWord": a,
        "civWordMal": a,
        "imposters": [
            {
                "word": "Wild Animal",
                "wordMal": "Wild Animal",
                "relationEN": "Both are well-known animals with distinct habitats.",
                "relationML": "?????? ???????????? ????????????? ??????????."
            },
            {
                "word": "Mammal",
                "wordMal": "Mammal",
                "relationEN": "Both are fascinating creatures found in nature.",
                "relationML": "?????? ??????????? ?????????? ?????????."
            }
        ]
    })

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

def replacer(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p["id"] == "funny":
            p["words"] = funny_words
        elif p["id"] == "movies":
            p["words"] = movie_words
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

text = re.sub(r'var packs = (\[.*?\]);', replacer, text, flags=re.DOTALL)

def replacer_intl(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p["id"] == "foodintl" or p["id"] == "famousfoods":
            p["words"] = famous_foods
        elif p["id"] == "animals":
            p["words"] = animals
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

text = re.sub(r'const intlPacks = (\[.*?\]);', replacer_intl, text, flags=re.DOTALL)

with open("words.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Patched words!")
