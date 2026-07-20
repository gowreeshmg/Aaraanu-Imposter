import json, re

funny_words = [
    {"civWord": "Pwoli", "civWordMal": "പൊളി", "imposters": [
        {"word": "Kidu", "wordMal": "കിടു", "relationEN": "Both are popular slang words used to express that something is extraordinarily awesome.", "relationML": "രണ്ടും വളരെ മികച്ചതിനെ വിശേഷിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ജനപ്രിയ വാക്കുകളാണ്."},
        {"word": "Adipoli", "wordMal": "അടിപൊളി", "relationEN": "Both are enthusiastic expressions for a fantastic experience.", "relationML": "രണ്ടും ഒരു നല്ല അനുഭവത്തെ സൂചിപ്പിക്കുന്ന വാക്കുകളാണ്."}
    ]},
    {"civWord": "Ayyayyo", "civWordMal": "അയ്യയ്യോ", "imposters": [
        {"word": "Ente Ammo", "wordMal": "എന്റെ അമ്മോ", "relationEN": "Both are spontaneous exclamations used in moments of sudden shock or fear.", "relationML": "രണ്ടും പെട്ടെന്നുള്ള ഞെട്ടലോ ഭയമോ പ്രകടിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന വാക്കുകളാണ്."},
        {"word": "Kashtam", "wordMal": "കഷ്ടം", "relationEN": "Both express dismay or a sense of tragedy.", "relationML": "കാര്യങ്ങൾ വിചാരിച്ച പോലെ നടക്കാതിരിക്കുമ്പോൾ ഉപയോഗിക്കുന്ന വാക്കുകളാണ് രണ്ടും."}
    ]},
    {"civWord": "Scene illa", "civWordMal": "സീൻ ഇല്ല", "imposters": [
        {"word": "Chill", "wordMal": "ചിൽ", "relationEN": "Both phrases mean that there is no problem and everything is relaxed.", "relationML": "ഒരു പ്രശ്നവുമില്ലെന്നും എല്ലാം സമാധാനത്തിലാണെന്നും രണ്ടും അർത്ഥമാക്കുന്നു."},
        {"word": "Cool", "wordMal": "കൂൾ", "relationEN": "Both are used to tell someone to calm down and not worry.", "relationML": "വിഷമിക്കേണ്ട എന്ന് പറയാൻ ഉപയോഗിക്കുന്ന വാക്കുകളാണ് രണ്ടും."}
    ]},
    {"civWord": "Thallal", "civWordMal": "തള്ളൽ", "imposters": [
        {"word": "Pucham", "wordMal": "പുച്ഛം", "relationEN": "Both describe negative social behaviors - boasting and showing contempt.", "relationML": "രണ്ടും മറ്റുള്ളവരോടുള്ള മോശം പെരുമാറ്റത്തെ സൂചിപ്പിക്കുന്നു."},
        {"word": "Jada", "wordMal": "ജാഡ", "relationEN": "Both are used to criticize someone who is showing off or acting superior.", "relationML": "അഹങ്കാരം കാണിക്കുന്നവരെ വിമർശിക്കാൻ ഉപയോഗിക്കുന്ന വാക്കുകളാണ് രണ്ടും."}
    ]},
    {"civWord": "Kidu", "civWordMal": "കിടു", "imposters": [
        {"word": "Mass", "wordMal": "മാസ്സ്", "relationEN": "Both terms describe something incredibly impressive or stylish.", "relationML": "രണ്ടും വളരെ ആകർഷകമായ കാര്യങ്ങളെ വിശേഷിപ്പിക്കുന്നു."},
        {"word": "Super", "wordMal": "സൂപ്പർ", "relationEN": "Both are very common words of high praise.", "relationML": "രണ്ടും ഒന്നിനെ പുകഴ്ത്താൻ ഉപയോഗിക്കുന്ന വാക്കുകളാണ്."}
    ]},
    {"civWord": "Adipoli", "civWordMal": "അടിപൊളി", "imposters": [
        {"word": "Pwoli", "wordMal": "പൊളി", "relationEN": "Both are the most common words to say something is excellent.", "relationML": "ഒന്ന് വളരെ മികച്ചതാണെന്ന് പറയാൻ ഉപയോഗിക്കുന്ന സാധാരണ വാക്കുകൾ."},
        {"word": "Kiduve", "wordMal": "കിടുവെ", "relationEN": "Both are enthusiastic slang terms for great things.", "relationML": "നല്ല കാര്യങ്ങളെ ആവേശത്തോടെ വിളിക്കുന്ന പേരുകൾ."}
    ]},
    {"civWord": "Poli Scene", "civWordMal": "പൊളി സീൻ", "imposters": [
        {"word": "Mass Entry", "wordMal": "മാസ്സ് എൻട്രി", "relationEN": "Both describe a very exciting or cinematic moment.", "relationML": "രണ്ടും വളരെ ആവേശകരമായ ഒരു നിമിഷത്തെ വിശേഷിപ്പിക്കുന്നു."},
        {"word": "Kidu Item", "wordMal": "കിടു ഐറ്റം", "relationEN": "Both refer to a highlight or an excellent occurrence.", "relationML": "വളരെ മികച്ച ഒരു സംഭവത്തെ സൂചിപ്പിക്കുന്നു."}
    ]},
    {"civWord": "Sadhanam Kayyil Undo", "civWordMal": "സാധനം കയ്യിൽ ഉണ്ടോ", "imposters": [
        {"word": "Ramanan", "wordMal": "രമണൻ", "relationEN": "Both are iconic pop culture references from classic Malayalam comedy movies.", "relationML": "രണ്ടും പ്രശസ്തമായ മലയാളം കോമഡി സിനിമകളിലെ സംഭാഷണങ്ങളാണ്."},
        {"word": "Kalyana Raman", "wordMal": "കല്യാണ രാമൻ", "relationEN": "Both evoke nostalgia for vintage Malayalam humor.", "relationML": "രണ്ടും പഴയകാല മലയാളം തമാശകളെ ഓർമ്മിപ്പിക്കുന്നു."}
    ]}
]

movie_words = [
    {"civWord": "Manichitrathazhu", "civWordMal": "മണിച്ചിത്രത്താഴ്", "imposters": [
        {"word": "Anandabhadram", "wordMal": "അനന്തഭദ്രം", "relationEN": "Both are classic supernatural thrillers set in ancient ancestral mansions.", "relationML": "രണ്ടും പഴയ തറവാടുകളുടെ പശ്ചാത്തലത്തിലുള്ള അമാനുഷിക ത്രില്ലറുകളാണ്."},
        {"word": "Aakasha Ganga", "wordMal": "ആകാശഗംഗ", "relationEN": "Both feature vengeful female spirits possessing someone within a traditional family.", "relationML": "രണ്ടും പ്രതികാരദാഹിയായ സ്ത്രീ ആത്മാക്കളെ കുറിച്ചുള്ള സിനിമകളാണ്."}
    ]},
    {"civWord": "Drishyam", "civWordMal": "ദൃശ്യം", "imposters": [
        {"word": "Memories", "wordMal": "മെമ്മറീസ്", "relationEN": "Both are highly acclaimed Malayalam suspense thrillers involving a police investigation.", "relationML": "രണ്ടും പോലീസ് അന്വേഷണം ഉൾപ്പെടുന്ന മികച്ച മലയാളം ത്രില്ലറുകളാണ്."},
        {"word": "Mumbai Police", "wordMal": "മുംബൈ പോലീസ്", "relationEN": "Both movies feature shocking twists and revolve around covering up a crime.", "relationML": "രണ്ടും കുറ്റകൃത്യങ്ങൾ മറച്ചുവെക്കുന്നതിനെ കുറിച്ചുള്ള സിനിമകളാണ്."}
    ]},
    {"civWord": "Kumbalangi Nights", "civWordMal": "കുമ്പളങ്ങി നൈറ്റ്സ്", "imposters": [
        {"word": "Maheshinte Prathikaaram", "wordMal": "മഹേഷിന്റെ പ്രതികാരം", "relationEN": "Both are realistic, critically acclaimed slice-of-life movies set in rural Kerala.", "relationML": "രണ്ടും കേരളത്തിലെ ഗ്രാമീണ ജീവിതം കാണിക്കുന്ന മികച്ച സിനിമകളാണ്."},
        {"word": "Sudani from Nigeria", "wordMal": "സുഡാനി ഫ്രം നൈജീരിയ", "relationEN": "Both films beautifully portray human relationships and brotherhood.", "relationML": "രണ്ടും മനുഷ്യബന്ധങ്ങളെയും സാഹോദര്യത്തെയും കുറിച്ചുള്ള സിനിമകളാണ്."}
    ]},
    {"civWord": "Bangalore Days", "civWordMal": "ബാംഗ്ലൂർ ഡെയ്സ്", "imposters": [
        {"word": "Premam", "wordMal": "പ്രേമം", "relationEN": "Both are blockbuster coming-of-age movies loved by the youth.", "relationML": "രണ്ടും യുവാക്കൾക്കിടയിൽ വലിയ തരംഗമായ സിനിമകളാണ്."},
        {"word": "Ohm Shanthi Oshaana", "wordMal": "ഓം ശാന്തി ഓശാന", "relationEN": "Both are lighthearted romantic comedies with a strong youth appeal.", "relationML": "രണ്ടും രസകരമായ പ്രണയകഥകൾ പറയുന്ന സിനിമകളാണ്."}
    ]},
    {"civWord": "Premam", "civWordMal": "പ്രേമം", "imposters": [
        {"word": "Thattathin Marayathu", "wordMal": "തട്ടത്തിൻ മറയത്ത്", "relationEN": "Both are iconic romantic movies that became massive trendsetters in Kerala.", "relationML": "രണ്ടും കേരളത്തിൽ വലിയ തരംഗമായ പ്രണയ സിനിമകളാണ്."},
        {"word": "Hridayam", "wordMal": "ഹൃദയം", "relationEN": "Both movies show the different stages of love and coming-of-age in a man's life.", "relationML": "രണ്ടും ഒരു വ്യക്തിയുടെ ജീവിതത്തിലെ വിവിധ പ്രണയഘട്ടങ്ങൾ കാണിക്കുന്നു."}
    ]}
]

food_items = [
    {"civWord": "Pizza", "civWordMal": "Pizza", "imposters": [
        {"word": "Pasta", "wordMal": "Pasta", "relationEN": "Both are world-famous Italian dishes.", "relationML": "Both are world-famous Italian dishes."},
        {"word": "Burger", "wordMal": "Burger", "relationEN": "Both are extremely popular fast food items often ordered for takeout.", "relationML": "Both are extremely popular fast food items often ordered for takeout."}
    ]},
    {"civWord": "Burger", "civWordMal": "Burger", "imposters": [
        {"word": "Hot Dog", "wordMal": "Hot Dog", "relationEN": "Both are classic American fast food items served in a bun.", "relationML": "Both are classic American fast food items served in a bun."},
        {"word": "Sandwich", "wordMal": "Sandwich", "relationEN": "Both consist of meat or fillings placed between pieces of bread.", "relationML": "Both consist of meat or fillings placed between pieces of bread."}
    ]},
    {"civWord": "Sushi", "civWordMal": "Sushi", "imposters": [
        {"word": "Sashimi", "wordMal": "Sashimi", "relationEN": "Both are traditional Japanese dishes featuring raw fish.", "relationML": "Both are traditional Japanese dishes featuring raw fish."},
        {"word": "Ramen", "wordMal": "Ramen", "relationEN": "Both are iconic Japanese foods popular worldwide.", "relationML": "Both are iconic Japanese foods popular worldwide."}
    ]},
    {"civWord": "Tacos", "civWordMal": "Tacos", "imposters": [
        {"word": "Burrito", "wordMal": "Burrito", "relationEN": "Both are staple Mexican dishes wrapped in tortillas.", "relationML": "Both are staple Mexican dishes wrapped in tortillas."},
        {"word": "Nachos", "wordMal": "Nachos", "relationEN": "Both are popular Mexican snacks often served with salsa and cheese.", "relationML": "Both are popular Mexican snacks often served with salsa and cheese."}
    ]},
    {"civWord": "Steak", "civWordMal": "Steak", "imposters": [
        {"word": "BBQ Ribs", "wordMal": "BBQ Ribs", "relationEN": "Both are popular meat dishes often grilled or barbecued.", "relationML": "Both are popular meat dishes often grilled or barbecued."},
        {"word": "Roast Beef", "wordMal": "Roast Beef", "relationEN": "Both are premium cuts of beef served as main courses.", "relationML": "Both are premium cuts of beef served as main courses."}
    ]},
    {"civWord": "Ice Cream", "civWordMal": "Ice Cream", "imposters": [
        {"word": "Gelato", "wordMal": "Gelato", "relationEN": "Both are frozen dairy desserts, but gelato is denser and originated in Italy.", "relationML": "Both are frozen dairy desserts, but gelato is denser and originated in Italy."},
        {"word": "Frozen Yogurt", "wordMal": "Frozen Yogurt", "relationEN": "Both are popular cold, sweet treats served in cups or cones.", "relationML": "Both are popular cold, sweet treats served in cups or cones."}
    ]}
]

animal_items = [
    {"civWord": "Lion", "civWordMal": "Lion", "imposters": [
        {"word": "Tiger", "wordMal": "Tiger", "relationEN": "Both are large, apex predator big cats found in the wild.", "relationML": "Both are large, apex predator big cats found in the wild."},
        {"word": "Leopard", "wordMal": "Leopard", "relationEN": "Both are fierce, carnivorous felines of the savanna and jungle.", "relationML": "Both are fierce, carnivorous felines of the savanna and jungle."}
    ]},
    {"civWord": "Elephant", "civWordMal": "Elephant", "imposters": [
        {"word": "Rhino", "wordMal": "Rhino", "relationEN": "Both are massive, thick-skinned herbivores native to Africa and Asia.", "relationML": "Both are massive, thick-skinned herbivores native to Africa and Asia."},
        {"word": "Hippo", "wordMal": "Hippo", "relationEN": "Both are incredibly heavy, giant land mammals.", "relationML": "Both are incredibly heavy, giant land mammals."}
    ]},
    {"civWord": "Giraffe", "civWordMal": "Giraffe", "imposters": [
        {"word": "Zebra", "wordMal": "Zebra", "relationEN": "Both are iconic, uniquely patterned herbivores of the African savanna.", "relationML": "Both are iconic, uniquely patterned herbivores of the African savanna."},
        {"word": "Camel", "wordMal": "Camel", "relationEN": "Both are tall, long-necked mammals adapted to harsh environments.", "relationML": "Both are tall, long-necked mammals adapted to harsh environments."}
    ]},
    {"civWord": "Penguin", "civWordMal": "Penguin", "imposters": [
        {"word": "Polar Bear", "wordMal": "Polar Bear", "relationEN": "Both are famous animals associated with extremely cold, icy environments.", "relationML": "Both are famous animals associated with extremely cold, icy environments."},
        {"word": "Seal", "wordMal": "Seal", "relationEN": "Both are aquatic animals that spend time on ice and swim gracefully.", "relationML": "Both are aquatic animals that spend time on ice and swim gracefully."}
    ]},
    {"civWord": "Dolphin", "civWordMal": "Dolphin", "imposters": [
        {"word": "Whale", "wordMal": "Whale", "relationEN": "Both are highly intelligent marine mammals.", "relationML": "Both are highly intelligent marine mammals."},
        {"word": "Shark", "wordMal": "Shark", "relationEN": "Both are sleek, dominant predators of the ocean.", "relationML": "Both are sleek, dominant predators of the ocean."}
    ]},
    {"civWord": "Kangaroo", "civWordMal": "Kangaroo", "imposters": [
        {"word": "Koala", "wordMal": "Koala", "relationEN": "Both are iconic marsupials native to Australia.", "relationML": "Both are iconic marsupials native to Australia."},
        {"word": "Wallaby", "wordMal": "Wallaby", "relationEN": "Both are hopping marsupials, though one is generally smaller.", "relationML": "Both are hopping marsupials, though one is generally smaller."}
    ]}
]

with open("words.js", "r", encoding="utf-8") as f:
    text = f.read()

def replacer(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p["id"] == "funny": p["words"] = funny_words
        elif p["id"] == "movies": p["words"] = movie_words
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

def replacer_intl(match):
    packs = json.loads(match.group(1))
    for p in packs:
        if p["id"] == "foodintl" or p["id"] == "famousfoods": p["words"] = food_items
        elif p["id"] == "animals": p["words"] = animal_items
    return match.group(0).replace(match.group(1), json.dumps(packs, indent=2, ensure_ascii=False))

text = re.sub(r'var packs = (\[.*?\]);', replacer, text, flags=re.DOTALL)
text = re.sub(r'const intlPacks = (\[.*?\]);', replacer_intl, text, flags=re.DOTALL)

with open("words.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r"\?v=\d+", "?v=46", html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Applied real data")
