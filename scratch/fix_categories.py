import json

with open("scratch/bad_categories.json", "r", encoding="utf-8") as f:
    data = json.load(f)

fixes = {
    "Chaya": ("Kaappi", "കാപ്പി", "Kattan Chaya", "കട്ടൻ ചായ"),
    "Puffs": ("Samosa", "സമോസ", "Cutlet", "കട്ട്‌ലെറ്റ്"),
    "Uzhunnu Vada": ("Parippu Vada", "പരിപ്പ് വട", "Ulli Vada", "ഉള്ളി വട"),
    "Mutta Baji": ("Pazhampori", "പഴംപൊരി", "Mulaku Baji", "മുളകു ബജ്ജി"),
    "Kozhukkatta": ("Ela Ada", "ഇല അട", "Modakam", "മോദകം"),
    "Cutlet": ("Meat Roll", "മീറ്റ് റോൾ", "Samosa", "സമോസ"),
    "Samosa": ("Puffs", "പഫ്‌സ്", "Meat Roll", "മീറ്റ് റോൾ"),
    "Bonda": ("Sukhiyan", "സുഖിയൻ", "Uzhunnu Vada", "ഉഴുന്ന് വട"),
    "Parippu Vada": ("Uzhunnu Vada", "ഉഴുന്ന് വട", "Ulli Vada", "ഉള്ളി വട"),
    "Ela Ada": ("Kozhukkatta", "കൊഴുക്കട്ട", "Ilayappam", "ഇലയപ്പം"),
    "Achappam": ("Kuzhalappam", "കുഴലപ്പം", "Murukku", "മുറുക്ക്"),
    "Unniyappam": ("Neyyappam", "നെയ്യപ്പം", "Kinnathappam", "കിണ്ണത്തപ്പം"),
    "Banana Chips": ("Kappa Chips", "കപ്പ ചിപ്‌സ്", "Sharkara Upperi", "ശർക്കര ഉപ്പേരി"),
    "Sharkara Upperi": ("Banana Chips", "വാഴക്ക ചിപ്‌സ്", "Achappam", "അച്ചപ്പം"),
    "Kappa Chips": ("Banana Chips", "വാഴക്ക ചിപ്‌സ്", "Pakkavada", "പക്കാവട"),
    "Avalose Podi": ("Avalose Unda", "അവലോസ് ഉണ്ട", "Churuttu", "ചുരുട്ട്"),
    "Kozhalappam": ("Achappam", "അച്ചപ്പം", "Murukku", "മുറുക്ക്"),
    "Kinnathappam": ("Kalathappam", "കലത്തപ്പം", "Unniyappam", "ഉണ്ണിയപ്പം"),
    "Churuttu": ("Avalose Unda", "അവലോസ് ഉണ്ട", "Kuzhalappam", "കുഴലപ്പം"),
    "Halwa": ("Jalebi", "ജിലേബി", "Laddoo", "ലഡ്ഡു"),
    "Sukhiyan": ("Bonda", "ബോണ്ട", "Modakam", "മോദകം"),
    "Bread Pakora": ("Pazhampori", "പഴംപൊരി", "Mutta Baji", "മുട്ട ബജ്ജി"),
    "Laddoo": ("Jalebi", "ജിലേബി", "Halwa", "ഹൽവ"),
    "Jalebi": ("Laddoo", "ലഡ്ഡു", "Halwa", "ഹൽവ"),
    "Meat Roll": ("Cutlet", "കട്ട്‌ലെറ്റ്", "Samosa", "സമോസ"),
    "Boli": ("Payasam", "പായസം", "Halwa", "ഹൽവ"),
    "Chatti Pathiri": ("Meat Roll", "മീറ്റ് റോൾ", "Samosa", "സമോസ"),
    "Vettu Cake": ("Plum Cake", "പ്ലം കേക്ക്", "Bonda", "ബോണ്ട"),
    "Pakkavada": ("Mixture", "മിക്സ്ചർ", "Murukku", "മുറുക്ക്"),
    "Kayyappam": ("Neyyappam", "നെയ്യപ്പം", "Unniyappam", "ഉണ്ണിയപ്പം"),
    "Ilayappam": ("Ela Ada", "ഇല അട", "Kozhukkatta", "കൊഴുക്കട്ട"),
    "Mothagam": ("Kozhukkatta", "കൊഴുക്കട്ട", "Sukhiyan", "സുഖിയൻ"),
    "Mutta Puff": ("Meat Puff", "മീറ്റ് പഫ്‌സ്", "Chicken Puff", "ചിക്കൻ പഫ്‌സ്"),
    "Cream Bun": ("Jam Roll", "ജാം റോൾ", "Cup Cake", "കപ്പ് കേക്ക്"),
    "Mixture": ("Pakkavada", "പക്കാവട", "Murukku", "മുറുക്ക്"),
    "Pahadi Halwa": ("Kozhikodan Halwa", "കോഴിക്കോടൻ ഹൽവ", "Jalebi", "ജിലേബി"),
    # Home
    "Nilavilakku": ("Kuthuvilakku", "കുത്തുവിളക്ക്", "Kindi", "കിണ്ടി"),
    "Thorthu": ("Mundu", "മുണ്ട്", "Lungi", "ലുങ്കി"),
    "Muram": ("Kotta", "കൊട്ട", "Vatti", "വട്ടി"),
    "Chattukam": ("Thavi", "തവി", "Chirava", "ചിരവ"),
    "Mundum Neriyathum": ("Sari", "സാരി", "Pattupavada", "പട്ടുപാവാട"),
    "Uruli": ("Cheenachatti", "ചീനച്ചട്ടി", "Charuvam", "ചരുവം"),
    "Para": ("Edangazhi", "ഇടങ്ങഴി", "Nazhi", "നാഴി"),
    "Kudam": ("Kalam", "കലം", "Bharani", "ഭരണി"),
    "Chembu": ("Charuvam", "ചരുവം", "Kalam", "കലം"),
    "Ammikallu": ("Arakallu", "അരക്കല്ല്", "Aattukallu", "ആട്ടുകല്ല്"),
    "Arakkallu": ("Ammikallu", "അമ്മി", "Aattukallu", "ആട്ടുകല്ല്"),
    "Aattukallu": ("Ammikallu", "അമ്മി", "Ural", "ഉരൽ"),
    "Kindi": ("Kudam", "കുടം", "Mondha", "മൊന്ത"),
    "Thookkuvilakku": ("Nilavilakku", "നിലവിളക്ക്", "Aalvilakku", "ആൽവിളക്ക്"),
}

def generate_imposters(civWord, civWordMal):
    if civWord in fixes:
        w1, w1Mal, w2, w2Mal = fixes[civWord]
    else:
        w1, w1Mal = civWord + " Type", civWordMal + " തരം"
        w2, w2Mal = "Fake " + civWord, "വ്യാജ " + civWordMal
        
    relEN1 = f"Both {civWord} and {w1} are deeply related concepts often confused together."
    relML1 = f"രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ {civWordMal} ഉം {w1Mal} ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
    relEN2 = f"{w2} shares many characteristics with {civWord}, making them a tricky pair."
    relML2 = f"രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ {civWordMal} ഉം {w2Mal} ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
    
    return [
        {"word": w1, "wordMal": w1Mal, "relationEN": relEN1, "relationML": relML1},
        {"word": w2, "wordMal": w2Mal, "relationEN": relEN2, "relationML": relML2}
    ]

for category in data:
    for word_obj in category["words"]:
        if "imposters" in word_obj:
            needs_fix = False
            for imp in word_obj["imposters"]:
                if "Alternative" in imp.get("word", "") or "പകരം" in imp.get("wordMal", ""):
                    needs_fix = True
                    break
            
            if needs_fix or True: # Force fix all since they are bad
                civ = word_obj.get("civWord", "")
                civMal = word_obj.get("civWordMal", "")
                word_obj["imposters"] = generate_imposters(civ, civMal)

with open("scratch/bad_categories_fixed.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved to scratch/bad_categories_fixed.json")
