import json
import os

input_file = "scratch/rel_chunk_0.json"
output_file = "scratch/rel_chunk_0_done.json"

with open(input_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

replacements = {
    "Pwoli": {
        "Kidu": {
            "EN": "Both Pwoli and Kidu are popular Malayalam slang words used by youth to express that something is extraordinarily awesome or excellent.",
            "ML": "പൊളിയും കിടുവും യുവാക്കൾക്കിടയിൽ വളരെ മികച്ചതോ അതിശയകരമായതോ ആയ കാര്യങ്ങളെ വിശേഷിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ജനപ്രിയ മലയാളം സ്ലാംഗ് വാക്കുകളാണ്."
        },
        "Adipoli": {
            "EN": "Both Pwoli and Adipoli are colloquial Malayalam expressions used to describe an event, place, or thing that is remarkably fantastic or enjoyable.",
            "ML": "ഒരു സംഭവത്തെയോ സ്ഥലത്തെയോ വസ്തുവിനെയോ വളരെ മികച്ചതോ ആസ്വാദ്യകരമോ എന്ന് വിശേഷിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന സാധാരണ മലയാളം പ്രയോഗങ്ങളാണ് പൊളിയും അടിപൊളിയും."
        }
    },
    "Ayyayyo": {
        "Ente Ammo": {
            "EN": "Both Ayyayyo and Ente Ammo are spontaneous Malayalam exclamations commonly blurted out in moments of sudden pain, intense shock, or deep fear.",
            "ML": "പെട്ടെന്നുള്ള വേദനയോ കടുത്ത ഞെട്ടലോ അഗാധമായ ഭയമോ ഉണ്ടാകുമ്പോൾ സ്വാഭാവികമായി പുറത്തുവരുന്ന മലയാളം ആശ്ചര്യപ്രകടനങ്ങളാണ് അയ്യയ്യോ, എൻ്റെ അമ്മോ എന്നിവ."
        },
        "Kashtam": {
            "EN": "Both Ayyayyo and Kashtam are everyday Malayalam expressions used to express pity, sorrow, or sympathy upon hearing about someone's misfortune or a tragic event.",
            "ML": "ഒരാളുടെ ദുരവസ്ഥയോ ദാരുണമായ സംഭവമോ കേൾക്കുമ്പോൾ സഹതാപമോ സങ്കടമോ പ്രകടിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ദൈനംദിന മലയാളം പ്രയോഗങ്ങളാണ് അയ്യയ്യോ, കഷ്ടം എന്നിവ."
        }
    },
    "Manichitrathazhu": {
        "Anandabhadram": {
            "EN": "Both Manichitrathazhu and Anandabhadram are classic Malayalam supernatural thrillers set in ancient ancestral mansions revolving around myths, dark magic, and folklore.",
            "ML": "പുരാതന തറവാടുകളുടെ പശ്ചാത്തലത്തിൽ മിത്തുകളെയും ദുർമന്ത്രവാദത്തെയും നാടോടിക്കഥകളെയും ചുറ്റിപ്പറ്റി നടക്കുന്ന ക്ലാസിക് മലയാളം അമാനുഷിക ത്രില്ലറുകളാണ് മണിച്ചിത്രത്താഴും അനന്തഭദ്രവും."
        },
        "Aakasha Ganga": {
            "EN": "Both Manichitrathazhu and Aakasha Ganga are prominent Malayalam horror films featuring a vengeful female spirit possessing someone within a traditional Nair family setting.",
            "ML": "ഒരു പരമ്പരാഗത നായർ തറവാടിൻ്റെ പശ്ചാത്തലത്തിൽ ഒരാളിൽ പ്രവേശിക്കുന്ന പ്രതികാരദാഹിയായ ഒരു സ്ത്രീയുടെ ആത്മാവിനെ അവതരിപ്പിക്കുന്ന പ്രശസ്തമായ മലയാളം ഹൊറർ സിനിമകളാണ് മണിച്ചിത്രത്താഴും ആകാശഗംഗയും."
        }
    }
}

for pack in data:
    for word_obj in pack["words"]:
        civWord = word_obj["civWord"]
        for imposter in word_obj["imposters"]:
            word = imposter["word"]
            if civWord in replacements and word in replacements[civWord]:
                imposter["relationEN"] = replacements[civWord][word]["EN"]
                imposter["relationML"] = replacements[civWord][word]["ML"]

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done writing to", output_file)
