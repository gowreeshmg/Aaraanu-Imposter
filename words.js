if (typeof window === 'undefined') { global.window = {}; }

var packs = [
  {
    "id": "funny",
    "name": "Funny Malayalam",
    "icon": "??",
    "words": [
      {
        "civWord": "Pwoli",
        "civWordMal": "പൊളി",
        "imposters": [
          {
            "word": "Kidu",
            "wordMal": "കിടു",
            "relationEN": "Both are enthusiastic Malayalam slang words used to express high excitement or praise, making them easy to confuse.",
            "relationML": "രണ്ടും ഉയർന്ന ആവേശമോ പ്രശംസയോ പ്രകടിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന മലയാളം വാക്കുകളാണ്, ഇത് ആശയക്കുഴപ്പമുണ്ടാക്കാൻ എളുപ്പമാക്കുന്നു."
          },
          {
            "word": "Adipoli",
            "wordMal": "അടിപൊളി",
            "relationEN": "Both represent a positive vibe or an awesome feeling, often used interchangeably by youths.",
            "relationML": "രണ്ടും ഒരു നല്ല അനുഭവത്തെ സൂചിപ്പിക്കുന്നു, പലപ്പോഴും യുവാക്കൾ ഒരുപോലെ ഉപയോഗിക്കുന്നു."
          }
        ]
      },
      {
        "civWord": "Ayyayyo",
        "civWordMal": "അയ്യയ്യോ",
        "imposters": [
          {
            "word": "Ente Ammo",
            "wordMal": "എന്റെ അമ്മോ",
            "relationEN": "Both are spontaneous Malayalam exclamations used in moments of shock or sudden realization.",
            "relationML": "രണ്ടും പെട്ടെന്നുള്ള ഞെട്ടലോ അമ്പരപ്പോ പ്രകടിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന വാക്കുകളാണ്."
          },
          {
            "word": "Kashtam",
            "wordMal": "കഷ്ടം",
            "relationEN": "Both express dismay or a sense of tragedy when things go unexpectedly wrong.",
            "relationML": "കാര്യങ്ങൾ വിചാരിച്ച പോലെ നടക്കാതിരിക്കുമ്പോൾ ഉണ്ടാകുന്ന നിരാശ പ്രകടിപ്പിക്കാൻ രണ്ടും ഉപയോഗിക്കുന്നു."
          }
        ]
      }
    ]
  },
  {
    "id": "movies",
    "name": "Movies",
    "icon": "??",
    "words": [
      {
        "civWord": "Manichitrathazhu",
        "civWordMal": "മണിച്ചിത്രത്താഴ്",
        "imposters": [
          {
            "word": "Anandabhadram",
            "wordMal": "അനന്തഭദ്രം",
            "relationEN": "Both are iconic Malayalam movies dealing with ancient family secrets, mysticism, and dark legends in a grand old house.",
            "relationML": "രണ്ടും പഴയ തറവാടുകളിലെ രഹസ്യങ്ങളും നിഗൂഢതകളും പറയുന്ന പ്രശസ്ത മലയാള ചിത്രങ്ങളാണ്."
          },
          {
            "word": "Aakasha Ganga",
            "wordMal": "ആകാശഗംഗ",
            "relationEN": "Both feature a vengeful spirit storyline tied to a historic household, blurring the line between myth and reality.",
            "relationML": "രണ്ടും ഒരു തറവാടിനെ ചുറ്റിപ്പറ്റിയുള്ള പ്രതികാര ദാഹിയായ ആത്മാവിന്റെ കഥ പറയുന്നു."
          }
        ]
      }
    ]
  },
  {
    "id": "bakery",
    "name": "Bakery & Snacks",
    "icon": "??",
    "words": [
      {
        "civWord": "Chaya",
        "civWordMal": "ചായ",
        "imposters": [
          {
            "word": "Kaappi",
            "wordMal": "കാപ്പി",
            "relationEN": "Both Chaya and Kaappi are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചായ ഉം കാപ്പി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Kattan Chaya",
            "wordMal": "കട്ടൻ ചായ",
            "relationEN": "Kattan Chaya shares many characteristics with Chaya, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചായ ഉം കട്ടൻ ചായ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Puffs",
        "civWordMal": "പഫ്സ്",
        "imposters": [
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Both Puffs and Samosa are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പഫ്സ് ഉം സമോസ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Cutlet",
            "wordMal": "കട്ട്‌ലെറ്റ്",
            "relationEN": "Cutlet shares many characteristics with Puffs, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പഫ്സ് ഉം കട്ട്‌ലെറ്റ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Uzhunnu Vada",
        "civWordMal": "ഉഴുന്നു വട",
        "imposters": [
          {
            "word": "Parippu Vada",
            "wordMal": "പരിപ്പ് വട",
            "relationEN": "Both Uzhunnu Vada and Parippu Vada are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഉഴുന്നു വട ഉം പരിപ്പ് വട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Ulli Vada",
            "wordMal": "ഉള്ളി വട",
            "relationEN": "Ulli Vada shares many characteristics with Uzhunnu Vada, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഉഴുന്നു വട ഉം ഉള്ളി വട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mutta Baji",
        "civWordMal": "മുട്ട ബജി",
        "imposters": [
          {
            "word": "Pazhampori",
            "wordMal": "പഴംപൊരി",
            "relationEN": "Both Mutta Baji and Pazhampori are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മുട്ട ബജി ഉം പഴംപൊരി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Mulaku Baji",
            "wordMal": "മുളകു ബജ്ജി",
            "relationEN": "Mulaku Baji shares many characteristics with Mutta Baji, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മുട്ട ബജി ഉം മുളകു ബജ്ജി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kozhukkatta",
        "civWordMal": "കൊഴുക്കട്ട",
        "imposters": [
          {
            "word": "Ela Ada",
            "wordMal": "ഇല അട",
            "relationEN": "Both Kozhukkatta and Ela Ada are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കൊഴുക്കട്ട ഉം ഇല അട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Modakam",
            "wordMal": "മോദകം",
            "relationEN": "Modakam shares many characteristics with Kozhukkatta, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കൊഴുക്കട്ട ഉം മോദകം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Cutlet",
        "civWordMal": "കട്ട്ലറ്റ്",
        "imposters": [
          {
            "word": "Meat Roll",
            "wordMal": "മീറ്റ് റോൾ",
            "relationEN": "Both Cutlet and Meat Roll are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കട്ട്ലറ്റ് ഉം മീറ്റ് റോൾ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Samosa shares many characteristics with Cutlet, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കട്ട്ലറ്റ് ഉം സമോസ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Samosa",
        "civWordMal": "സമോസ",
        "imposters": [
          {
            "word": "Puffs",
            "wordMal": "പഫ്‌സ്",
            "relationEN": "Both Samosa and Puffs are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സമോസ ഉം പഫ്‌സ് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Meat Roll",
            "wordMal": "മീറ്റ് റോൾ",
            "relationEN": "Meat Roll shares many characteristics with Samosa, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സമോസ ഉം മീറ്റ് റോൾ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bonda",
        "civWordMal": "ബോണ്ട",
        "imposters": [
          {
            "word": "Sukhiyan",
            "wordMal": "സുഖിയൻ",
            "relationEN": "Both Bonda and Sukhiyan are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബോണ്ട ഉം സുഖിയൻ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Uzhunnu Vada",
            "wordMal": "ഉഴുന്ന് വട",
            "relationEN": "Uzhunnu Vada shares many characteristics with Bonda, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബോണ്ട ഉം ഉഴുന്ന് വട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Parippu Vada",
        "civWordMal": "പരിപ്പ് വട",
        "imposters": [
          {
            "word": "Uzhunnu Vada",
            "wordMal": "ഉഴുന്ന് വട",
            "relationEN": "Both Parippu Vada and Uzhunnu Vada are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പരിപ്പ് വട ഉം ഉഴുന്ന് വട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Ulli Vada",
            "wordMal": "ഉള്ളി വട",
            "relationEN": "Ulli Vada shares many characteristics with Parippu Vada, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പരിപ്പ് വട ഉം ഉള്ളി വട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ela Ada",
        "civWordMal": "ഇല അട",
        "imposters": [
          {
            "word": "Kozhukkatta",
            "wordMal": "കൊഴുക്കട്ട",
            "relationEN": "Both Ela Ada and Kozhukkatta are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഇല അട ഉം കൊഴുക്കട്ട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Ilayappam",
            "wordMal": "ഇലയപ്പം",
            "relationEN": "Ilayappam shares many characteristics with Ela Ada, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഇല അട ഉം ഇലയപ്പം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Achappam",
        "civWordMal": "അച്ചപ്പം",
        "imposters": [
          {
            "word": "Kuzhalappam",
            "wordMal": "കുഴലപ്പം",
            "relationEN": "Both Achappam and Kuzhalappam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അച്ചപ്പം ഉം കുഴലപ്പം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Murukku shares many characteristics with Achappam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അച്ചപ്പം ഉം മുറുക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Unniyappam",
        "civWordMal": "ഉണ്ണിയപ്പം",
        "imposters": [
          {
            "word": "Neyyappam",
            "wordMal": "നെയ്യപ്പം",
            "relationEN": "Both Unniyappam and Neyyappam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഉണ്ണിയപ്പം ഉം നെയ്യപ്പം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Kinnathappam",
            "wordMal": "കിണ്ണത്തപ്പം",
            "relationEN": "Kinnathappam shares many characteristics with Unniyappam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഉണ്ണിയപ്പം ഉം കിണ്ണത്തപ്പം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Banana Chips",
        "civWordMal": "വാഴക്ക ചിപ്സ്",
        "imposters": [
          {
            "word": "Kappa Chips",
            "wordMal": "കപ്പ ചിപ്‌സ്",
            "relationEN": "Both Banana Chips and Kappa Chips are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വാഴക്ക ചിപ്സ് ഉം കപ്പ ചിപ്‌സ് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Sharkara Upperi",
            "wordMal": "ശർക്കര ഉപ്പേരി",
            "relationEN": "Sharkara Upperi shares many characteristics with Banana Chips, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വാഴക്ക ചിപ്സ് ഉം ശർക്കര ഉപ്പേരി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Sharkara Upperi",
        "civWordMal": "ശർക്കര ഉപ്പേരി",
        "imposters": [
          {
            "word": "Banana Chips",
            "wordMal": "വാഴക്ക ചിപ്‌സ്",
            "relationEN": "Both Sharkara Upperi and Banana Chips are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ശർക്കര ഉപ്പേരി ഉം വാഴക്ക ചിപ്‌സ് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Achappam",
            "wordMal": "അച്ചപ്പം",
            "relationEN": "Achappam shares many characteristics with Sharkara Upperi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ശർക്കര ഉപ്പേരി ഉം അച്ചപ്പം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kappa Chips",
        "civWordMal": "കപ്പ ചിപ്സ്",
        "imposters": [
          {
            "word": "Banana Chips",
            "wordMal": "വാഴക്ക ചിപ്‌സ്",
            "relationEN": "Both Kappa Chips and Banana Chips are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കപ്പ ചിപ്സ് ഉം വാഴക്ക ചിപ്‌സ് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Pakkavada",
            "wordMal": "പക്കാവട",
            "relationEN": "Pakkavada shares many characteristics with Kappa Chips, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കപ്പ ചിപ്സ് ഉം പക്കാവട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Avalose Podi",
        "civWordMal": "അവലോസ് പൊടി",
        "imposters": [
          {
            "word": "Avalose Unda",
            "wordMal": "അവലോസ് ഉണ്ട",
            "relationEN": "Both Avalose Podi and Avalose Unda are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അവലോസ് പൊടി ഉം അവലോസ് ഉണ്ട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Churuttu",
            "wordMal": "ചുരുട്ട്",
            "relationEN": "Churuttu shares many characteristics with Avalose Podi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അവലോസ് പൊടി ഉം ചുരുട്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kozhalappam",
        "civWordMal": "കൊഴലപ്പം",
        "imposters": [
          {
            "word": "Achappam",
            "wordMal": "അച്ചപ്പം",
            "relationEN": "Both Kozhalappam and Achappam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കൊഴലപ്പം ഉം അച്ചപ്പം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Murukku shares many characteristics with Kozhalappam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കൊഴലപ്പം ഉം മുറുക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kinnathappam",
        "civWordMal": "കിണ്ണത്തപ്പം",
        "imposters": [
          {
            "word": "Kalathappam",
            "wordMal": "കലത്തപ്പം",
            "relationEN": "Both Kinnathappam and Kalathappam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കിണ്ണത്തപ്പം ഉം കലത്തപ്പം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Unniyappam",
            "wordMal": "ഉണ്ണിയപ്പം",
            "relationEN": "Unniyappam shares many characteristics with Kinnathappam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കിണ്ണത്തപ്പം ഉം ഉണ്ണിയപ്പം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Churuttu",
        "civWordMal": "ചുരുട്ട്",
        "imposters": [
          {
            "word": "Avalose Unda",
            "wordMal": "അവലോസ് ഉണ്ട",
            "relationEN": "Both Churuttu and Avalose Unda are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചുരുട്ട് ഉം അവലോസ് ഉണ്ട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Kuzhalappam",
            "wordMal": "കുഴലപ്പം",
            "relationEN": "Kuzhalappam shares many characteristics with Churuttu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചുരുട്ട് ഉം കുഴലപ്പം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Halwa",
        "civWordMal": "ഹൽവ",
        "imposters": [
          {
            "word": "Jalebi",
            "wordMal": "ജിലേബി",
            "relationEN": "Both Halwa and Jalebi are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഹൽവ ഉം ജിലേബി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Laddoo",
            "wordMal": "ലഡ്ഡു",
            "relationEN": "Laddoo shares many characteristics with Halwa, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഹൽവ ഉം ലഡ്ഡു ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Sukhiyan",
        "civWordMal": "സുഖിയൻ",
        "imposters": [
          {
            "word": "Bonda",
            "wordMal": "ബോണ്ട",
            "relationEN": "Both Sukhiyan and Bonda are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സുഖിയൻ ഉം ബോണ്ട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Modakam",
            "wordMal": "മോദകം",
            "relationEN": "Modakam shares many characteristics with Sukhiyan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സുഖിയൻ ഉം മോദകം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bread Pakora",
        "civWordMal": "ബ്രെഡ് പക്കോട",
        "imposters": [
          {
            "word": "Pazhampori",
            "wordMal": "പഴംപൊരി",
            "relationEN": "Both Bread Pakora and Pazhampori are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബ്രെഡ് പക്കോട ഉം പഴംപൊരി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Mutta Baji",
            "wordMal": "മുട്ട ബജ്ജി",
            "relationEN": "Mutta Baji shares many characteristics with Bread Pakora, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബ്രെഡ് പക്കോട ഉം മുട്ട ബജ്ജി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Laddoo",
        "civWordMal": "ലഡ്ഡു",
        "imposters": [
          {
            "word": "Jalebi",
            "wordMal": "ജിലേബി",
            "relationEN": "Both Laddoo and Jalebi are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ലഡ്ഡു ഉം ജിലേബി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Halwa shares many characteristics with Laddoo, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ലഡ്ഡു ഉം ഹൽവ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jalebi",
        "civWordMal": "ജിലേബി",
        "imposters": [
          {
            "word": "Laddoo",
            "wordMal": "ലഡ്ഡു",
            "relationEN": "Both Jalebi and Laddoo are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജിലേബി ഉം ലഡ്ഡു ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Halwa shares many characteristics with Jalebi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജിലേബി ഉം ഹൽവ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Meat Roll",
        "civWordMal": "മീറ്റ് റോൾ",
        "imposters": [
          {
            "word": "Cutlet",
            "wordMal": "കട്ട്‌ലെറ്റ്",
            "relationEN": "Both Meat Roll and Cutlet are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മീറ്റ് റോൾ ഉം കട്ട്‌ലെറ്റ് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Samosa shares many characteristics with Meat Roll, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മീറ്റ് റോൾ ഉം സമോസ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Boli",
        "civWordMal": "ബോളി",
        "imposters": [
          {
            "word": "Payasam",
            "wordMal": "പായസം",
            "relationEN": "Both Boli and Payasam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബോളി ഉം പായസം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Halwa shares many characteristics with Boli, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബോളി ഉം ഹൽവ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chatti Pathiri",
        "civWordMal": "ചട്ടി പത്തിരി",
        "imposters": [
          {
            "word": "Meat Roll",
            "wordMal": "മീറ്റ് റോൾ",
            "relationEN": "Both Chatti Pathiri and Meat Roll are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചട്ടി പത്തിരി ഉം മീറ്റ് റോൾ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Samosa shares many characteristics with Chatti Pathiri, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചട്ടി പത്തിരി ഉം സമോസ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Vettu Cake",
        "civWordMal": "വെട്ട് കേക്ക്",
        "imposters": [
          {
            "word": "Plum Cake",
            "wordMal": "പ്ലം കേക്ക്",
            "relationEN": "Both Vettu Cake and Plum Cake are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വെട്ട് കേക്ക് ഉം പ്ലം കേക്ക് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Bonda",
            "wordMal": "ബോണ്ട",
            "relationEN": "Bonda shares many characteristics with Vettu Cake, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വെട്ട് കേക്ക് ഉം ബോണ്ട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Pakkavada",
        "civWordMal": "പക്കവട",
        "imposters": [
          {
            "word": "Mixture",
            "wordMal": "മിക്സ്ചർ",
            "relationEN": "Both Pakkavada and Mixture are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പക്കവട ഉം മിക്സ്ചർ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Murukku shares many characteristics with Pakkavada, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പക്കവട ഉം മുറുക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kayyappam",
        "civWordMal": "കയ്യപ്പം",
        "imposters": [
          {
            "word": "Neyyappam",
            "wordMal": "നെയ്യപ്പം",
            "relationEN": "Both Kayyappam and Neyyappam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കയ്യപ്പം ഉം നെയ്യപ്പം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Unniyappam",
            "wordMal": "ഉണ്ണിയപ്പം",
            "relationEN": "Unniyappam shares many characteristics with Kayyappam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കയ്യപ്പം ഉം ഉണ്ണിയപ്പം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ilayappam",
        "civWordMal": "ഇലയപ്പം",
        "imposters": [
          {
            "word": "Ela Ada",
            "wordMal": "ഇല അട",
            "relationEN": "Both Ilayappam and Ela Ada are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഇലയപ്പം ഉം ഇല അട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Kozhukkatta",
            "wordMal": "കൊഴുക്കട്ട",
            "relationEN": "Kozhukkatta shares many characteristics with Ilayappam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഇലയപ്പം ഉം കൊഴുക്കട്ട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mothagam",
        "civWordMal": "മോദകം",
        "imposters": [
          {
            "word": "Kozhukkatta",
            "wordMal": "കൊഴുക്കട്ട",
            "relationEN": "Both Mothagam and Kozhukkatta are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മോദകം ഉം കൊഴുക്കട്ട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Sukhiyan",
            "wordMal": "സുഖിയൻ",
            "relationEN": "Sukhiyan shares many characteristics with Mothagam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മോദകം ഉം സുഖിയൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mutta Puff",
        "civWordMal": "മുട്ട പഫ്",
        "imposters": [
          {
            "word": "Meat Puff",
            "wordMal": "മീറ്റ് പഫ്‌സ്",
            "relationEN": "Both Mutta Puff and Meat Puff are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മുട്ട പഫ് ഉം മീറ്റ് പഫ്‌സ് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Chicken Puff",
            "wordMal": "ചിക്കൻ പഫ്‌സ്",
            "relationEN": "Chicken Puff shares many characteristics with Mutta Puff, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മുട്ട പഫ് ഉം ചിക്കൻ പഫ്‌സ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Cream Bun",
        "civWordMal": "ക്രീം ബൺ",
        "imposters": [
          {
            "word": "Jam Roll",
            "wordMal": "ജാം റോൾ",
            "relationEN": "Both Cream Bun and Jam Roll are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ക്രീം ബൺ ഉം ജാം റോൾ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Cup Cake",
            "wordMal": "കപ്പ് കേക്ക്",
            "relationEN": "Cup Cake shares many characteristics with Cream Bun, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ക്രീം ബൺ ഉം കപ്പ് കേക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mixture",
        "civWordMal": "മിക്സ്ചർ",
        "imposters": [
          {
            "word": "Pakkavada",
            "wordMal": "പക്കാവട",
            "relationEN": "Both Mixture and Pakkavada are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മിക്സ്ചർ ഉം പക്കാവട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Murukku shares many characteristics with Mixture, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മിക്സ്ചർ ഉം മുറുക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Pahadi Halwa",
        "civWordMal": "കോഴിക്കോടൻ ഹൽവ",
        "imposters": [
          {
            "word": "Kozhikodan Halwa",
            "wordMal": "കോഴിക്കോടൻ ഹൽവ",
            "relationEN": "Both Pahadi Halwa and Kozhikodan Halwa are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കോഴിക്കോടൻ ഹൽവ ഉം കോഴിക്കോടൻ ഹൽവ ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Jalebi",
            "wordMal": "ജിലേബി",
            "relationEN": "Jalebi shares many characteristics with Pahadi Halwa, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കോഴിക്കോടൻ ഹൽവ ഉം ജിലേബി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      }
    ]
  },
  {
    "id": "home",
    "name": "Household Items",
    "icon": "??",
    "words": [
      {
        "civWord": "Nilavilakku",
        "civWordMal": "നിലവിളക്ക്",
        "imposters": [
          {
            "word": "Kuthuvilakku",
            "wordMal": "കുത്തുവിളക്ക്",
            "relationEN": "Both Nilavilakku and Kuthuvilakku are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ നിലവിളക്ക് ഉം കുത്തുവിളക്ക് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Kindi",
            "wordMal": "കിണ്ടി",
            "relationEN": "Kindi shares many characteristics with Nilavilakku, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ നിലവിളക്ക് ഉം കിണ്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Thorthu",
        "civWordMal": "തോർത്തു",
        "imposters": [
          {
            "word": "Mundu",
            "wordMal": "മുണ്ട്",
            "relationEN": "Both Thorthu and Mundu are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തോർത്തു ഉം മുണ്ട് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Lungi",
            "wordMal": "ലുങ്കി",
            "relationEN": "Lungi shares many characteristics with Thorthu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തോർത്തു ഉം ലുങ്കി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Muram",
        "civWordMal": "മുറം",
        "imposters": [
          {
            "word": "Kotta",
            "wordMal": "കൊട്ട",
            "relationEN": "Both Muram and Kotta are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മുറം ഉം കൊട്ട ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Vatti",
            "wordMal": "വട്ടി",
            "relationEN": "Vatti shares many characteristics with Muram, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മുറം ഉം വട്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chattukam",
        "civWordMal": "ചട്ടുകം",
        "imposters": [
          {
            "word": "Thavi",
            "wordMal": "തവി",
            "relationEN": "Both Chattukam and Thavi are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചട്ടുകം ഉം തവി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Chirava",
            "wordMal": "ചിരവ",
            "relationEN": "Chirava shares many characteristics with Chattukam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചട്ടുകം ഉം ചിരവ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mundum Neriyathum",
        "civWordMal": "മുണ്ടും നേരിയതും",
        "imposters": [
          {
            "word": "Sari",
            "wordMal": "സാരി",
            "relationEN": "Both Mundum Neriyathum and Sari are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മുണ്ടും നേരിയതും ഉം സാരി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Pattupavada",
            "wordMal": "പട്ടുപാവാട",
            "relationEN": "Pattupavada shares many characteristics with Mundum Neriyathum, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മുണ്ടും നേരിയതും ഉം പട്ടുപാവാട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Uruli",
        "civWordMal": "ഉരുളി",
        "imposters": [
          {
            "word": "Cheenachatti",
            "wordMal": "ചീനച്ചട്ടി",
            "relationEN": "Both Uruli and Cheenachatti are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഉരുളി ഉം ചീനച്ചട്ടി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Charuvam",
            "wordMal": "ചരുവം",
            "relationEN": "Charuvam shares many characteristics with Uruli, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഉരുളി ഉം ചരുവം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Para",
        "civWordMal": "പറ",
        "imposters": [
          {
            "word": "Edangazhi",
            "wordMal": "ഇടങ്ങഴി",
            "relationEN": "Both Para and Edangazhi are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പറ ഉം ഇടങ്ങഴി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Nazhi",
            "wordMal": "നാഴി",
            "relationEN": "Nazhi shares many characteristics with Para, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പറ ഉം നാഴി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kudam",
        "civWordMal": "കുടം",
        "imposters": [
          {
            "word": "Kalam",
            "wordMal": "കലം",
            "relationEN": "Both Kudam and Kalam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കുടം ഉം കലം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Bharani",
            "wordMal": "ഭരണി",
            "relationEN": "Bharani shares many characteristics with Kudam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കുടം ഉം ഭരണി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chembu",
        "civWordMal": "ചെമ്പ്",
        "imposters": [
          {
            "word": "Charuvam",
            "wordMal": "ചരുവം",
            "relationEN": "Both Chembu and Charuvam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചെമ്പ് ഉം ചരുവം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Kalam",
            "wordMal": "കലം",
            "relationEN": "Kalam shares many characteristics with Chembu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചെമ്പ് ഉം കലം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ammikallu",
        "civWordMal": "അമ്മിക്കല്ല്",
        "imposters": [
          {
            "word": "Arakallu",
            "wordMal": "അരക്കല്ല്",
            "relationEN": "Both Ammikallu and Arakallu are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അമ്മിക്കല്ല് ഉം അരക്കല്ല് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Aattukallu",
            "wordMal": "ആട്ടുകല്ല്",
            "relationEN": "Aattukallu shares many characteristics with Ammikallu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അമ്മിക്കല്ല് ഉം ആട്ടുകല്ല് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Arakkallu",
        "civWordMal": "അരക്കല്ല്",
        "imposters": [
          {
            "word": "Ammikallu",
            "wordMal": "അമ്മി",
            "relationEN": "Both Arakkallu and Ammikallu are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അരക്കല്ല് ഉം അമ്മി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Aattukallu",
            "wordMal": "ആട്ടുകല്ല്",
            "relationEN": "Aattukallu shares many characteristics with Arakkallu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അരക്കല്ല് ഉം ആട്ടുകല്ല് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Aattukallu",
        "civWordMal": "ആട്ടുകല്ല്",
        "imposters": [
          {
            "word": "Ammikallu",
            "wordMal": "അമ്മി",
            "relationEN": "Both Aattukallu and Ammikallu are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആട്ടുകല്ല് ഉം അമ്മി ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Ural",
            "wordMal": "ഉരൽ",
            "relationEN": "Ural shares many characteristics with Aattukallu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആട്ടുകല്ല് ഉം ഉരൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kindi",
        "civWordMal": "കിണ്ടി",
        "imposters": [
          {
            "word": "Kudam",
            "wordMal": "കുടം",
            "relationEN": "Both Kindi and Kudam are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കിണ്ടി ഉം കുടം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Mondha",
            "wordMal": "മൊന്ത",
            "relationEN": "Mondha shares many characteristics with Kindi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കിണ്ടി ഉം മൊന്ത ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Thookkuvilakku",
        "civWordMal": "തൂക്കുവിളക്ക്",
        "imposters": [
          {
            "word": "Nilavilakku",
            "wordMal": "നിലവിളക്ക്",
            "relationEN": "Both Thookkuvilakku and Nilavilakku are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തൂക്കുവിളക്ക് ഉം നിലവിളക്ക് ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Aalvilakku",
            "wordMal": "ആൽവിളക്ക്",
            "relationEN": "Aalvilakku shares many characteristics with Thookkuvilakku, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തൂക്കുവിളക്ക് ഉം ആൽവിളക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mundu",
        "civWordMal": "മുണ്ട്",
        "imposters": [
          {
            "word": "Mundu Type",
            "wordMal": "മുണ്ട് തരം",
            "relationEN": "Both Mundu and Mundu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മുണ്ട് ഉം മുണ്ട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mundu",
            "wordMal": "വ്യാജ മുണ്ട്",
            "relationEN": "Fake Mundu shares many characteristics with Mundu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മുണ്ട് ഉം വ്യാജ മുണ്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kasavu Saree",
        "civWordMal": "കസവ് സാരി",
        "imposters": [
          {
            "word": "Kasavu Saree Type",
            "wordMal": "കസവ് സാരി തരം",
            "relationEN": "Both Kasavu Saree and Kasavu Saree Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കസവ് സാരി ഉം കസവ് സാരി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kasavu Saree",
            "wordMal": "വ്യാജ കസവ് സാരി",
            "relationEN": "Fake Kasavu Saree shares many characteristics with Kasavu Saree, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കസവ് സാരി ഉം വ്യാജ കസവ് സാരി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chirava",
        "civWordMal": "ചിരവ",
        "imposters": [
          {
            "word": "Chirava Type",
            "wordMal": "ചിരവ തരം",
            "relationEN": "Both Chirava and Chirava Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചിരവ ഉം ചിരവ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chirava",
            "wordMal": "വ്യാജ ചിരവ",
            "relationEN": "Fake Chirava shares many characteristics with Chirava, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചിരവ ഉം വ്യാജ ചിരവ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Paathram",
        "civWordMal": "പാത്രം",
        "imposters": [
          {
            "word": "Paathram Type",
            "wordMal": "പാത്രം തരം",
            "relationEN": "Both Paathram and Paathram Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പാത്രം ഉം പാത്രം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Paathram",
            "wordMal": "വ്യാജ പാത്രം",
            "relationEN": "Fake Paathram shares many characteristics with Paathram, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പാത്രം ഉം വ്യാജ പാത്രം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Puttu Kutti",
        "civWordMal": "പുട്ടുകുറ്റി",
        "imposters": [
          {
            "word": "Puttu Kutti Type",
            "wordMal": "പുട്ടുകുറ്റി തരം",
            "relationEN": "Both Puttu Kutti and Puttu Kutti Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പുട്ടുകുറ്റി ഉം പുട്ടുകുറ്റി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Puttu Kutti",
            "wordMal": "വ്യാജ പുട്ടുകുറ്റി",
            "relationEN": "Fake Puttu Kutti shares many characteristics with Puttu Kutti, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പുട്ടുകുറ്റി ഉം വ്യാജ പുട്ടുകുറ്റി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Vaal Kannadi",
        "civWordMal": "വാൽക്കണ്ണാടി",
        "imposters": [
          {
            "word": "Vaal Kannadi Type",
            "wordMal": "വാൽക്കണ്ണാടി തരം",
            "relationEN": "Both Vaal Kannadi and Vaal Kannadi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വാൽക്കണ്ണാടി ഉം വാൽക്കണ്ണാടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Vaal Kannadi",
            "wordMal": "വ്യാജ വാൽക്കണ്ണാടി",
            "relationEN": "Fake Vaal Kannadi shares many characteristics with Vaal Kannadi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വാൽക്കണ്ണാടി ഉം വ്യാജ വാൽക്കണ്ണാടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kalam",
        "civWordMal": "കലം",
        "imposters": [
          {
            "word": "Kalam Type",
            "wordMal": "കലം തരം",
            "relationEN": "Both Kalam and Kalam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കലം ഉം കലം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kalam",
            "wordMal": "വ്യാജ കലം",
            "relationEN": "Fake Kalam shares many characteristics with Kalam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കലം ഉം വ്യാജ കലം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Cheenachatti",
        "civWordMal": "ചീനച്ചട്ടി",
        "imposters": [
          {
            "word": "Cheenachatti Type",
            "wordMal": "ചീനച്ചട്ടി തരം",
            "relationEN": "Both Cheenachatti and Cheenachatti Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചീനച്ചട്ടി ഉം ചീനച്ചട്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Cheenachatti",
            "wordMal": "വ്യാജ ചീനച്ചട്ടി",
            "relationEN": "Fake Cheenachatti shares many characteristics with Cheenachatti, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചീനച്ചട്ടി ഉം വ്യാജ ചീനച്ചട്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kettle",
        "civWordMal": "കെറ്റിൽ",
        "imposters": [
          {
            "word": "Kettle Type",
            "wordMal": "കെറ്റിൽ തരം",
            "relationEN": "Both Kettle and Kettle Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കെറ്റിൽ ഉം കെറ്റിൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kettle",
            "wordMal": "വ്യാജ കെറ്റിൽ",
            "relationEN": "Fake Kettle shares many characteristics with Kettle, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കെറ്റിൽ ഉം വ്യാജ കെറ്റിൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bharani",
        "civWordMal": "ഭരണി",
        "imposters": [
          {
            "word": "Bharani Type",
            "wordMal": "ഭരണി തരം",
            "relationEN": "Both Bharani and Bharani Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഭരണി ഉം ഭരണി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Bharani",
            "wordMal": "വ്യാജ ഭരണി",
            "relationEN": "Fake Bharani shares many characteristics with Bharani, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഭരണി ഉം വ്യാജ ഭരണി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kattil",
        "civWordMal": "കട്ടിൽ",
        "imposters": [
          {
            "word": "Kattil Type",
            "wordMal": "കട്ടിൽ തരം",
            "relationEN": "Both Kattil and Kattil Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കട്ടിൽ ഉം കട്ടിൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kattil",
            "wordMal": "വ്യാജ കട്ടിൽ",
            "relationEN": "Fake Kattil shares many characteristics with Kattil, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കട്ടിൽ ഉം വ്യാജ കട്ടിൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Oonjal",
        "civWordMal": "ഊഞ്ഞാൽ",
        "imposters": [
          {
            "word": "Oonjal Type",
            "wordMal": "ഊഞ്ഞാൽ തരം",
            "relationEN": "Both Oonjal and Oonjal Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഊഞ്ഞാൽ ഉം ഊഞ്ഞാൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Oonjal",
            "wordMal": "വ്യാജ ഊഞ്ഞാൽ",
            "relationEN": "Fake Oonjal shares many characteristics with Oonjal, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഊഞ്ഞാൽ ഉം വ്യാജ ഊഞ്ഞാൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chattuvam",
        "civWordMal": "ചട്ടുക്ക",
        "imposters": [
          {
            "word": "Chattuvam Type",
            "wordMal": "ചട്ടുക്ക തരം",
            "relationEN": "Both Chattuvam and Chattuvam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചട്ടുക്ക ഉം ചട്ടുക്ക തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chattuvam",
            "wordMal": "വ്യാജ ചട്ടുക്ക",
            "relationEN": "Fake Chattuvam shares many characteristics with Chattuvam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചട്ടുക്ക ഉം വ്യാജ ചട്ടുക്ക ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Paya",
        "civWordMal": "പായ",
        "imposters": [
          {
            "word": "Paya Type",
            "wordMal": "പായ തരം",
            "relationEN": "Both Paya and Paya Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പായ ഉം പായ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Paya",
            "wordMal": "വ്യാജ പായ",
            "relationEN": "Fake Paya shares many characteristics with Paya, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പായ ഉം വ്യാജ പായ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Thiri",
        "civWordMal": "തിരി",
        "imposters": [
          {
            "word": "Thiri Type",
            "wordMal": "തിരി തരം",
            "relationEN": "Both Thiri and Thiri Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തിരി ഉം തിരി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Thiri",
            "wordMal": "വ്യാജ തിരി",
            "relationEN": "Fake Thiri shares many characteristics with Thiri, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തിരി ഉം വ്യാജ തിരി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kindu Brass",
        "civWordMal": "ഓട്ടുപാത്രം",
        "imposters": [
          {
            "word": "Kindu Brass Type",
            "wordMal": "ഓട്ടുപാത്രം തരം",
            "relationEN": "Both Kindu Brass and Kindu Brass Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഓട്ടുപാത്രം ഉം ഓട്ടുപാത്രം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kindu Brass",
            "wordMal": "വ്യാജ ഓട്ടുപാത്രം",
            "relationEN": "Fake Kindu Brass shares many characteristics with Kindu Brass, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഓട്ടുപാത്രം ഉം വ്യാജ ഓട്ടുപാത്രം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Alavu Para",
        "civWordMal": "അളവുപാത്രം",
        "imposters": [
          {
            "word": "Alavu Para Type",
            "wordMal": "അളവുപാത്രം തരം",
            "relationEN": "Both Alavu Para and Alavu Para Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അളവുപാത്രം ഉം അളവുപാത്രം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Alavu Para",
            "wordMal": "വ്യാജ അളവുപാത്രം",
            "relationEN": "Fake Alavu Para shares many characteristics with Alavu Para, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അളവുപാത്രം ഉം വ്യാജ അളവുപാത്രം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kindu Vessel",
        "civWordMal": "വാൽക്കിണ്ടി",
        "imposters": [
          {
            "word": "Kindu Vessel Type",
            "wordMal": "വാൽക്കിണ്ടി തരം",
            "relationEN": "Both Kindu Vessel and Kindu Vessel Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വാൽക്കിണ്ടി ഉം വാൽക്കിണ്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kindu Vessel",
            "wordMal": "വ്യാജ വാൽക്കിണ്ടി",
            "relationEN": "Fake Kindu Vessel shares many characteristics with Kindu Vessel, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വാൽക്കിണ്ടി ഉം വ്യാജ വാൽക്കിണ്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chappathi Kallu",
        "civWordMal": "ചപ്പാത്തി കല്ല്",
        "imposters": [
          {
            "word": "Chappathi Kallu Type",
            "wordMal": "ചപ്പാത്തി കല്ല് തരം",
            "relationEN": "Both Chappathi Kallu and Chappathi Kallu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചപ്പാത്തി കല്ല് ഉം ചപ്പാത്തി കല്ല് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chappathi Kallu",
            "wordMal": "വ്യാജ ചപ്പാത്തി കല്ല്",
            "relationEN": "Fake Chappathi Kallu shares many characteristics with Chappathi Kallu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചപ്പാത്തി കല്ല് ഉം വ്യാജ ചപ്പാത്തി കല്ല് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Arippa",
        "civWordMal": "അരിപ്പ",
        "imposters": [
          {
            "word": "Arippa Type",
            "wordMal": "അരിപ്പ തരം",
            "relationEN": "Both Arippa and Arippa Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അരിപ്പ ഉം അരിപ്പ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Arippa",
            "wordMal": "വ്യാജ അരിപ്പ",
            "relationEN": "Fake Arippa shares many characteristics with Arippa, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അരിപ്പ ഉം വ്യാജ അരിപ്പ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Choottu",
        "civWordMal": "ചൂട്ട്",
        "imposters": [
          {
            "word": "Choottu Type",
            "wordMal": "ചൂട്ട് തരം",
            "relationEN": "Both Choottu and Choottu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചൂട്ട് ഉം ചൂട്ട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Choottu",
            "wordMal": "വ്യാജ ചൂട്ട്",
            "relationEN": "Fake Choottu shares many characteristics with Choottu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചൂട്ട് ഉം വ്യാജ ചൂട്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Madaal",
        "civWordMal": "മടൽ",
        "imposters": [
          {
            "word": "Madaal Type",
            "wordMal": "മടൽ തരം",
            "relationEN": "Both Madaal and Madaal Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മടൽ ഉം മടൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Madaal",
            "wordMal": "വ്യാജ മടൽ",
            "relationEN": "Fake Madaal shares many characteristics with Madaal, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മടൽ ഉം വ്യാജ മടൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      }
    ]
  },
  {
    "id": "people",
    "name": "People",
    "icon": "??",
    "words": [
      {
        "civWord": "Mohanlal",
        "civWordMal": "മോഹൻലാൽ",
        "imposters": [
          {
            "word": "Mohanlal Type",
            "wordMal": "മോഹൻലാൽ തരം",
            "relationEN": "Both Mohanlal and Mohanlal Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മോഹൻലാൽ ഉം മോഹൻലാൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mohanlal",
            "wordMal": "വ്യാജ മോഹൻലാൽ",
            "relationEN": "Fake Mohanlal shares many characteristics with Mohanlal, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മോഹൻലാൽ ഉം വ്യാജ മോഹൻലാൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mammootty",
        "civWordMal": "മമ്മൂട്ടി",
        "imposters": [
          {
            "word": "Mammootty Type",
            "wordMal": "മമ്മൂട്ടി തരം",
            "relationEN": "Both Mammootty and Mammootty Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മമ്മൂട്ടി ഉം മമ്മൂട്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mammootty",
            "wordMal": "വ്യാജ മമ്മൂട്ടി",
            "relationEN": "Fake Mammootty shares many characteristics with Mammootty, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മമ്മൂട്ടി ഉം വ്യാജ മമ്മൂട്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Manju Warrier",
        "civWordMal": "മഞ്ജു വാര്യർ",
        "imposters": [
          {
            "word": "Manju Warrier Type",
            "wordMal": "മഞ്ജു വാര്യർ തരം",
            "relationEN": "Both Manju Warrier and Manju Warrier Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മഞ്ജു വാര്യർ ഉം മഞ്ജു വാര്യർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Manju Warrier",
            "wordMal": "വ്യാജ മഞ്ജു വാര്യർ",
            "relationEN": "Fake Manju Warrier shares many characteristics with Manju Warrier, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മഞ്ജു വാര്യർ ഉം വ്യാജ മഞ്ജു വാര്യർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Fahadh Faasil",
        "civWordMal": "ഫഹദ് ഫാസിൽ",
        "imposters": [
          {
            "word": "Fahadh Faasil Type",
            "wordMal": "ഫഹദ് ഫാസിൽ തരം",
            "relationEN": "Both Fahadh Faasil and Fahadh Faasil Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഫഹദ് ഫാസിൽ ഉം ഫഹദ് ഫാസിൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Fahadh Faasil",
            "wordMal": "വ്യാജ ഫഹദ് ഫാസിൽ",
            "relationEN": "Fake Fahadh Faasil shares many characteristics with Fahadh Faasil, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഫഹദ് ഫാസിൽ ഉം വ്യാജ ഫഹദ് ഫാസിൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Shobana",
        "civWordMal": "ശോഭന",
        "imposters": [
          {
            "word": "Shobana Type",
            "wordMal": "ശോഭന തരം",
            "relationEN": "Both Shobana and Shobana Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ശോഭന ഉം ശോഭന തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Shobana",
            "wordMal": "വ്യാജ ശോഭന",
            "relationEN": "Fake Shobana shares many characteristics with Shobana, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ശോഭന ഉം വ്യാജ ശോഭന ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Dileep",
        "civWordMal": "ദിലീപ്",
        "imposters": [
          {
            "word": "Dileep Type",
            "wordMal": "ദിലീപ് തരം",
            "relationEN": "Both Dileep and Dileep Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ദിലീപ് ഉം ദിലീപ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Dileep",
            "wordMal": "വ്യാജ ദിലീപ്",
            "relationEN": "Fake Dileep shares many characteristics with Dileep, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ദിലീപ് ഉം വ്യാജ ദിലീപ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Suresh Gopi",
        "civWordMal": "സുരേഷ് ഗോപി",
        "imposters": [
          {
            "word": "Suresh Gopi Type",
            "wordMal": "സുരേഷ് ഗോപി തരം",
            "relationEN": "Both Suresh Gopi and Suresh Gopi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സുരേഷ് ഗോപി ഉം സുരേഷ് ഗോപി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Suresh Gopi",
            "wordMal": "വ്യാജ സുരേഷ് ഗോപി",
            "relationEN": "Fake Suresh Gopi shares many characteristics with Suresh Gopi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സുരേഷ് ഗോപി ഉം വ്യാജ സുരേഷ് ഗോപി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Prithviraj",
        "civWordMal": "പൃഥ്വിരാജ്",
        "imposters": [
          {
            "word": "Prithviraj Type",
            "wordMal": "പൃഥ്വിരാജ് തരം",
            "relationEN": "Both Prithviraj and Prithviraj Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പൃഥ്വിരാജ് ഉം പൃഥ്വിരാജ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Prithviraj",
            "wordMal": "വ്യാജ പൃഥ്വിരാജ്",
            "relationEN": "Fake Prithviraj shares many characteristics with Prithviraj, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പൃഥ്വിരാജ് ഉം വ്യാജ പൃഥ്വിരാജ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tovino Thomas",
        "civWordMal": "ടൊവിനോ തോമസ്",
        "imposters": [
          {
            "word": "Tovino Thomas Type",
            "wordMal": "ടൊവിനോ തോമസ് തരം",
            "relationEN": "Both Tovino Thomas and Tovino Thomas Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ടൊവിനോ തോമസ് ഉം ടൊവിനോ തോമസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tovino Thomas",
            "wordMal": "വ്യാജ ടൊവിനോ തോമസ്",
            "relationEN": "Fake Tovino Thomas shares many characteristics with Tovino Thomas, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ടൊവിനോ തോമസ് ഉം വ്യാജ ടൊവിനോ തോമസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Nivin Pauly",
        "civWordMal": "നിവിൻ പോളി",
        "imposters": [
          {
            "word": "Nivin Pauly Type",
            "wordMal": "നിവിൻ പോളി തരം",
            "relationEN": "Both Nivin Pauly and Nivin Pauly Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ നിവിൻ പോളി ഉം നിവിൻ പോളി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Nivin Pauly",
            "wordMal": "വ്യാജ നിവിൻ പോളി",
            "relationEN": "Fake Nivin Pauly shares many characteristics with Nivin Pauly, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ നിവിൻ പോളി ഉം വ്യാജ നിവിൻ പോളി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kunchacko Boban",
        "civWordMal": "കുഞ്ചാക്കോ ബോബൻ",
        "imposters": [
          {
            "word": "Kunchacko Boban Type",
            "wordMal": "കുഞ്ചാക്കോ ബോബൻ തരം",
            "relationEN": "Both Kunchacko Boban and Kunchacko Boban Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കുഞ്ചാക്കോ ബോബൻ ഉം കുഞ്ചാക്കോ ബോബൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kunchacko Boban",
            "wordMal": "വ്യാജ കുഞ്ചാക്കോ ബോബൻ",
            "relationEN": "Fake Kunchacko Boban shares many characteristics with Kunchacko Boban, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കുഞ്ചാക്കോ ബോബൻ ഉം വ്യാജ കുഞ്ചാക്കോ ബോബൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jayaram",
        "civWordMal": "ജയറാം",
        "imposters": [
          {
            "word": "Jayaram Type",
            "wordMal": "ജയറാം തരം",
            "relationEN": "Both Jayaram and Jayaram Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജയറാം ഉം ജയറാം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Jayaram",
            "wordMal": "വ്യാജ ജയറാം",
            "relationEN": "Fake Jayaram shares many characteristics with Jayaram, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജയറാം ഉം വ്യാജ ജയറാം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jayasurya",
        "civWordMal": "ജയസൂര്യ",
        "imposters": [
          {
            "word": "Jayasurya Type",
            "wordMal": "ജയസൂര്യ തരം",
            "relationEN": "Both Jayasurya and Jayasurya Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജയസൂര്യ ഉം ജയസൂര്യ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Jayasurya",
            "wordMal": "വ്യാജ ജയസൂര്യ",
            "relationEN": "Fake Jayasurya shares many characteristics with Jayasurya, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജയസൂര്യ ഉം വ്യാജ ജയസൂര്യ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Parvathy Thiruvothu",
        "civWordMal": "പാർവതി തിരുവോത്ത്",
        "imposters": [
          {
            "word": "Parvathy Thiruvothu Type",
            "wordMal": "പാർവതി തിരുവോത്ത് തരം",
            "relationEN": "Both Parvathy Thiruvothu and Parvathy Thiruvothu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പാർവതി തിരുവോത്ത് ഉം പാർവതി തിരുവോത്ത് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Parvathy Thiruvothu",
            "wordMal": "വ്യാജ പാർവതി തിരുവോത്ത്",
            "relationEN": "Fake Parvathy Thiruvothu shares many characteristics with Parvathy Thiruvothu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പാർവതി തിരുവോത്ത് ഉം വ്യാജ പാർവതി തിരുവോത്ത് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Nazriya Nazim",
        "civWordMal": "നസ്രിയ നസീം",
        "imposters": [
          {
            "word": "Nazriya Nazim Type",
            "wordMal": "നസ്രിയ നസീം തരം",
            "relationEN": "Both Nazriya Nazim and Nazriya Nazim Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ നസ്രിയ നസീം ഉം നസ്രിയ നസീം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Nazriya Nazim",
            "wordMal": "വ്യാജ നസ്രിയ നസീം",
            "relationEN": "Fake Nazriya Nazim shares many characteristics with Nazriya Nazim, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ നസ്രിയ നസീം ഉം വ്യാജ നസ്രിയ നസീം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Anaswara Rajan",
        "civWordMal": "അനശ്വര രാജൻ",
        "imposters": [
          {
            "word": "Anaswara Rajan Type",
            "wordMal": "അനശ്വര രാജൻ തരം",
            "relationEN": "Both Anaswara Rajan and Anaswara Rajan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അനശ്വര രാജൻ ഉം അനശ്വര രാജൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Anaswara Rajan",
            "wordMal": "വ്യാജ അനശ്വര രാജൻ",
            "relationEN": "Fake Anaswara Rajan shares many characteristics with Anaswara Rajan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അനശ്വര രാജൻ ഉം വ്യാജ അനശ്വര രാജൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Aishwarya Lekshmi",
        "civWordMal": "ഐശ്വര്യ ലക്ഷ്മി",
        "imposters": [
          {
            "word": "Aishwarya Lekshmi Type",
            "wordMal": "ഐശ്വര്യ ലക്ഷ്മി തരം",
            "relationEN": "Both Aishwarya Lekshmi and Aishwarya Lekshmi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഐശ്വര്യ ലക്ഷ്മി ഉം ഐശ്വര്യ ലക്ഷ്മി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Aishwarya Lekshmi",
            "wordMal": "വ്യാജ ഐശ്വര്യ ലക്ഷ്മി",
            "relationEN": "Fake Aishwarya Lekshmi shares many characteristics with Aishwarya Lekshmi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഐശ്വര്യ ലക്ഷ്മി ഉം വ്യാജ ഐശ്വര്യ ലക്ഷ്മി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Asif Ali",
        "civWordMal": "ആസിഫ് അലി",
        "imposters": [
          {
            "word": "Asif Ali Type",
            "wordMal": "ആസിഫ് അലി തരം",
            "relationEN": "Both Asif Ali and Asif Ali Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആസിഫ് അലി ഉം ആസിഫ് അലി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Asif Ali",
            "wordMal": "വ്യാജ ആസിഫ് അലി",
            "relationEN": "Fake Asif Ali shares many characteristics with Asif Ali, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആസിഫ് അലി ഉം വ്യാജ ആസിഫ് അലി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Basil Joseph",
        "civWordMal": "ബേസിൽ ജോസഫ്",
        "imposters": [
          {
            "word": "Basil Joseph Type",
            "wordMal": "ബേസിൽ ജോസഫ് തരം",
            "relationEN": "Both Basil Joseph and Basil Joseph Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബേസിൽ ജോസഫ് ഉം ബേസിൽ ജോസഫ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Basil Joseph",
            "wordMal": "വ്യാജ ബേസിൽ ജോസഫ്",
            "relationEN": "Fake Basil Joseph shares many characteristics with Basil Joseph, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബേസിൽ ജോസഫ് ഉം വ്യാജ ബേസിൽ ജോസഫ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Vineeth Sreenivasan",
        "civWordMal": "വിനീത് ശ്രീനിവാസൻ",
        "imposters": [
          {
            "word": "Vineeth Sreenivasan Type",
            "wordMal": "വിനീത് ശ്രീനിവാസൻ തരം",
            "relationEN": "Both Vineeth Sreenivasan and Vineeth Sreenivasan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വിനീത് ശ്രീനിവാസൻ ഉം വിനീത് ശ്രീനിവാസൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Vineeth Sreenivasan",
            "wordMal": "വ്യാജ വിനീത് ശ്രീനിവാസൻ",
            "relationEN": "Fake Vineeth Sreenivasan shares many characteristics with Vineeth Sreenivasan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വിനീത് ശ്രീനിവാസൻ ഉം വ്യാജ വിനീത് ശ്രീനിവാസൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Dulquer Salmaan",
        "civWordMal": "ദുൽഖർ സൽമാൻ",
        "imposters": [
          {
            "word": "Dulquer Salmaan Type",
            "wordMal": "ദുൽഖർ സൽമാൻ തരം",
            "relationEN": "Both Dulquer Salmaan and Dulquer Salmaan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ദുൽഖർ സൽമാൻ ഉം ദുൽഖർ സൽമാൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Dulquer Salmaan",
            "wordMal": "വ്യാജ ദുൽഖർ സൽമാൻ",
            "relationEN": "Fake Dulquer Salmaan shares many characteristics with Dulquer Salmaan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ദുൽഖർ സൽമാൻ ഉം വ്യാജ ദുൽഖർ സൽമാൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Suraj Venjaramoodu",
        "civWordMal": "സുരാജ് വെഞ്ഞാറമൂട്",
        "imposters": [
          {
            "word": "Suraj Venjaramoodu Type",
            "wordMal": "സുരാജ് വെഞ്ഞാറമൂട് തരം",
            "relationEN": "Both Suraj Venjaramoodu and Suraj Venjaramoodu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സുരാജ് വെഞ്ഞാറമൂട് ഉം സുരാജ് വെഞ്ഞാറമൂട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Suraj Venjaramoodu",
            "wordMal": "വ്യാജ സുരാജ് വെഞ്ഞാറമൂട്",
            "relationEN": "Fake Suraj Venjaramoodu shares many characteristics with Suraj Venjaramoodu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സുരാജ് വെഞ്ഞാറമൂട് ഉം വ്യാജ സുരാജ് വെഞ്ഞാറമൂട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jagathy Sreekumar",
        "civWordMal": "ജഗതി ശ്രീകുമാർ",
        "imposters": [
          {
            "word": "Jagathy Sreekumar Type",
            "wordMal": "ജഗതി ശ്രീകുമാർ തരം",
            "relationEN": "Both Jagathy Sreekumar and Jagathy Sreekumar Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജഗതി ശ്രീകുമാർ ഉം ജഗതി ശ്രീകുമാർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Jagathy Sreekumar",
            "wordMal": "വ്യാജ ജഗതി ശ്രീകുമാർ",
            "relationEN": "Fake Jagathy Sreekumar shares many characteristics with Jagathy Sreekumar, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജഗതി ശ്രീകുമാർ ഉം വ്യാജ ജഗതി ശ്രീകുമാർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Innocent",
        "civWordMal": "ഇന്നസെന്റ്",
        "imposters": [
          {
            "word": "Innocent Type",
            "wordMal": "ഇന്നസെന്റ് തരം",
            "relationEN": "Both Innocent and Innocent Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഇന്നസെന്റ് ഉം ഇന്നസെന്റ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Innocent",
            "wordMal": "വ്യാജ ഇന്നസെന്റ്",
            "relationEN": "Fake Innocent shares many characteristics with Innocent, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഇന്നസെന്റ് ഉം വ്യാജ ഇന്നസെന്റ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Soubin Shahir",
        "civWordMal": "സൗബിൻ ഷാഹിർ",
        "imposters": [
          {
            "word": "Soubin Shahir Type",
            "wordMal": "സൗബിൻ ഷാഹിർ തരം",
            "relationEN": "Both Soubin Shahir and Soubin Shahir Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സൗബിൻ ഷാഹിർ ഉം സൗബിൻ ഷാഹിർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Soubin Shahir",
            "wordMal": "വ്യാജ സൗബിൻ ഷാഹിർ",
            "relationEN": "Fake Soubin Shahir shares many characteristics with Soubin Shahir, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സൗബിൻ ഷാഹിർ ഉം വ്യാജ സൗബിൻ ഷാഹിർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kalyani Priyadarshan",
        "civWordMal": "കല്യാണി പ്രിയദർശൻ",
        "imposters": [
          {
            "word": "Kalyani Priyadarshan Type",
            "wordMal": "കല്യാണി പ്രിയദർശൻ തരം",
            "relationEN": "Both Kalyani Priyadarshan and Kalyani Priyadarshan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കല്യാണി പ്രിയദർശൻ ഉം കല്യാണി പ്രിയദർശൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kalyani Priyadarshan",
            "wordMal": "വ്യാജ കല്യാണി പ്രിയദർശൻ",
            "relationEN": "Fake Kalyani Priyadarshan shares many characteristics with Kalyani Priyadarshan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കല്യാണി പ്രിയദർശൻ ഉം വ്യാജ കല്യാണി പ്രിയദർശൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "K. J. Yesudas",
        "civWordMal": "കെ. ജെ. യേശുദാസ്",
        "imposters": [
          {
            "word": "K. J. Yesudas Type",
            "wordMal": "കെ. ജെ. യേശുദാസ് തരം",
            "relationEN": "Both K. J. Yesudas and K. J. Yesudas Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കെ. ജെ. യേശുദാസ് ഉം കെ. ജെ. യേശുദാസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake K. J. Yesudas",
            "wordMal": "വ്യാജ കെ. ജെ. യേശുദാസ്",
            "relationEN": "Fake K. J. Yesudas shares many characteristics with K. J. Yesudas, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കെ. ജെ. യേശുദാസ് ഉം വ്യാജ കെ. ജെ. യേശുദാസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "K. S. Chithra",
        "civWordMal": "കെ. എസ്. ചിത്ര",
        "imposters": [
          {
            "word": "K. S. Chithra Type",
            "wordMal": "കെ. എസ്. ചിത്ര തരം",
            "relationEN": "Both K. S. Chithra and K. S. Chithra Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കെ. എസ്. ചിത്ര ഉം കെ. എസ്. ചിത്ര തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake K. S. Chithra",
            "wordMal": "വ്യാജ കെ. എസ്. ചിത്ര",
            "relationEN": "Fake K. S. Chithra shares many characteristics with K. S. Chithra, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കെ. എസ്. ചിത്ര ഉം വ്യാജ കെ. എസ്. ചിത്ര ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Sanju Samson",
        "civWordMal": "സഞ്ജു സാംസൺ",
        "imposters": [
          {
            "word": "Sanju Samson Type",
            "wordMal": "സഞ്ജു സാംസൺ തരം",
            "relationEN": "Both Sanju Samson and Sanju Samson Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സഞ്ജു സാംസൺ ഉം സഞ്ജു സാംസൺ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Sanju Samson",
            "wordMal": "വ്യാജ സഞ്ജു സാംസൺ",
            "relationEN": "Fake Sanju Samson shares many characteristics with Sanju Samson, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സഞ്ജു സാംസൺ ഉം വ്യാജ സഞ്ജു സാംസൺ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Shashi Tharoor",
        "civWordMal": "ശശി തരൂർ",
        "imposters": [
          {
            "word": "Shashi Tharoor Type",
            "wordMal": "ശശി തരൂർ തരം",
            "relationEN": "Both Shashi Tharoor and Shashi Tharoor Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ശശി തരൂർ ഉം ശശി തരൂർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Shashi Tharoor",
            "wordMal": "വ്യാജ ശശി തരൂർ",
            "relationEN": "Fake Shashi Tharoor shares many characteristics with Shashi Tharoor, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ശശി തരൂർ ഉം വ്യാജ ശശി തരൂർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Sreenivasan",
        "civWordMal": "ശ്രീനിവാസൻ",
        "imposters": [
          {
            "word": "Sreenivasan Type",
            "wordMal": "ശ്രീനിവാസൻ തരം",
            "relationEN": "Both Sreenivasan and Sreenivasan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ശ്രീനിവാസൻ ഉം ശ്രീനിവാസൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Sreenivasan",
            "wordMal": "വ്യാജ ശ്രീനിവാസൻ",
            "relationEN": "Fake Sreenivasan shares many characteristics with Sreenivasan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ശ്രീനിവാസൻ ഉം വ്യാജ ശ്രീനിവാസൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Salim Kumar",
        "civWordMal": "സലിം കുമാർ",
        "imposters": [
          {
            "word": "Salim Kumar Type",
            "wordMal": "സലിം കുമാർ തരം",
            "relationEN": "Both Salim Kumar and Salim Kumar Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സലിം കുമാർ ഉം സലിം കുമാർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Salim Kumar",
            "wordMal": "വ്യാജ സലിം കുമാർ",
            "relationEN": "Fake Salim Kumar shares many characteristics with Salim Kumar, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സലിം കുമാർ ഉം വ്യാജ സലിം കുമാർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Urveshi",
        "civWordMal": "ഉർവ്വശി",
        "imposters": [
          {
            "word": "Urveshi Type",
            "wordMal": "ഉർവ്വശി തരം",
            "relationEN": "Both Urveshi and Urveshi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഉർവ്വശി ഉം ഉർവ്വശി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Urveshi",
            "wordMal": "വ്യാജ ഉർവ്വശി",
            "relationEN": "Fake Urveshi shares many characteristics with Urveshi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഉർവ്വശി ഉം വ്യാജ ഉർവ്വശി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mukesh",
        "civWordMal": "മുകേഷ്",
        "imposters": [
          {
            "word": "Mukesh Type",
            "wordMal": "മുകേഷ് തരം",
            "relationEN": "Both Mukesh and Mukesh Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മുകേഷ് ഉം മുകേഷ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mukesh",
            "wordMal": "വ്യാജ മുകേഷ്",
            "relationEN": "Fake Mukesh shares many characteristics with Mukesh, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മുകേഷ് ഉം വ്യാജ മുകേഷ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Biju Menon",
        "civWordMal": "ബിജു മേനോൻ",
        "imposters": [
          {
            "word": "Biju Menon Type",
            "wordMal": "ബിജു മേനോൻ തരം",
            "relationEN": "Both Biju Menon and Biju Menon Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബിജു മേനോൻ ഉം ബിജു മേനോൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Biju Menon",
            "wordMal": "വ്യാജ ബിജു മേനോൻ",
            "relationEN": "Fake Biju Menon shares many characteristics with Biju Menon, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബിജു മേനോൻ ഉം വ്യാജ ബിജു മേനോൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Pepe Antony",
        "civWordMal": "ആന്റണി വർഗ്ഗീസ്",
        "imposters": [
          {
            "word": "Pepe Antony Type",
            "wordMal": "ആന്റണി വർഗ്ഗീസ് തരം",
            "relationEN": "Both Pepe Antony and Pepe Antony Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആന്റണി വർഗ്ഗീസ് ഉം ആന്റണി വർഗ്ഗീസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Pepe Antony",
            "wordMal": "വ്യാജ ആന്റണി വർഗ്ഗീസ്",
            "relationEN": "Fake Pepe Antony shares many characteristics with Pepe Antony, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആന്റണി വർഗ്ഗീസ് ഉം വ്യാജ ആന്റണി വർഗ്ഗീസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      }
    ]
  },
  {
    "id": "life",
    "name": "Kerala Life",
    "icon": "??",
    "words": [
      {
        "civWord": "Chaya Kada",
        "civWordMal": "ചായക്കട",
        "imposters": [
          {
            "word": "Chaya Kada Type",
            "wordMal": "ചായക്കട തരം",
            "relationEN": "Both Chaya Kada and Chaya Kada Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചായക്കട ഉം ചായക്കട തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chaya Kada",
            "wordMal": "വ്യാജ ചായക്കട",
            "relationEN": "Fake Chaya Kada shares many characteristics with Chaya Kada, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചായക്കട ഉം വ്യാജ ചായക്കട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kallu Shappu",
        "civWordMal": "കള്ള് ഷാപ്പ്",
        "imposters": [
          {
            "word": "Kallu Shappu Type",
            "wordMal": "കള്ള് ഷാപ്പ് തരം",
            "relationEN": "Both Kallu Shappu and Kallu Shappu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കള്ള് ഷാപ്പ് ഉം കള്ള് ഷാപ്പ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kallu Shappu",
            "wordMal": "വ്യാജ കള്ള് ഷാപ്പ്",
            "relationEN": "Fake Kallu Shappu shares many characteristics with Kallu Shappu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കള്ള് ഷാപ്പ് ഉം വ്യാജ കള്ള് ഷാപ്പ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "KSRTC",
        "civWordMal": "കെ എസ് ആർ ടി സി",
        "imposters": [
          {
            "word": "KSRTC Type",
            "wordMal": "കെ എസ് ആർ ടി സി തരം",
            "relationEN": "Both KSRTC and KSRTC Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കെ എസ് ആർ ടി സി ഉം കെ എസ് ആർ ടി സി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake KSRTC",
            "wordMal": "വ്യാജ കെ എസ് ആർ ടി സി",
            "relationEN": "Fake KSRTC shares many characteristics with KSRTC, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കെ എസ് ആർ ടി സി ഉം വ്യാജ കെ എസ് ആർ ടി സി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Auto Rickshaw",
        "civWordMal": "ഓട്ടോ റിക്ഷ",
        "imposters": [
          {
            "word": "Auto Rickshaw Type",
            "wordMal": "ഓട്ടോ റിക്ഷ തരം",
            "relationEN": "Both Auto Rickshaw and Auto Rickshaw Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഓട്ടോ റിക്ഷ ഉം ഓട്ടോ റിക്ഷ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Auto Rickshaw",
            "wordMal": "വ്യാജ ഓട്ടോ റിക്ഷ",
            "relationEN": "Fake Auto Rickshaw shares many characteristics with Auto Rickshaw, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഓട്ടോ റിക്ഷ ഉം വ്യാജ ഓട്ടോ റിക്ഷ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tharavadu",
        "civWordMal": "തറവാട്",
        "imposters": [
          {
            "word": "Tharavadu Type",
            "wordMal": "തറവാട് തരം",
            "relationEN": "Both Tharavadu and Tharavadu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തറവാട് ഉം തറവാട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tharavadu",
            "wordMal": "വ്യാജ തറവാട്",
            "relationEN": "Fake Tharavadu shares many characteristics with Tharavadu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തറവാട് ഉം വ്യാജ തറവാട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Panchayath",
        "civWordMal": "പഞ്ചായത്ത്",
        "imposters": [
          {
            "word": "Panchayath Type",
            "wordMal": "പഞ്ചായത്ത് തരം",
            "relationEN": "Both Panchayath and Panchayath Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പഞ്ചായത്ത് ഉം പഞ്ചായത്ത് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Panchayath",
            "wordMal": "വ്യാജ പഞ്ചായത്ത്",
            "relationEN": "Fake Panchayath shares many characteristics with Panchayath, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പഞ്ചായത്ത് ഉം വ്യാജ പഞ്ചായത്ത് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kudumbashree",
        "civWordMal": "കുടുംബശ്രീ",
        "imposters": [
          {
            "word": "Kudumbashree Type",
            "wordMal": "കുടുംബശ്രീ തരം",
            "relationEN": "Both Kudumbashree and Kudumbashree Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കുടുംബശ്രീ ഉം കുടുംബശ്രീ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kudumbashree",
            "wordMal": "വ്യാജ കുടുംബശ്രീ",
            "relationEN": "Fake Kudumbashree shares many characteristics with Kudumbashree, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കുടുംബശ്രീ ഉം വ്യാജ കുടുംബശ്രീ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Anganwadi",
        "civWordMal": "അങ്കണവാടി",
        "imposters": [
          {
            "word": "Anganwadi Type",
            "wordMal": "അങ്കണവാടി തരം",
            "relationEN": "Both Anganwadi and Anganwadi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അങ്കണവാടി ഉം അങ്കണവാടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Anganwadi",
            "wordMal": "വ്യാജ അങ്കണവാടി",
            "relationEN": "Fake Anganwadi shares many characteristics with Anganwadi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അങ്കണവാടി ഉം വ്യാജ അങ്കണവാടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Rubber Thottam",
        "civWordMal": "റബ്ബർ തോട്ടം",
        "imposters": [
          {
            "word": "Rubber Thottam Type",
            "wordMal": "റബ്ബർ തോട്ടം തരം",
            "relationEN": "Both Rubber Thottam and Rubber Thottam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ റബ്ബർ തോട്ടം ഉം റബ്ബർ തോട്ടം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Rubber Thottam",
            "wordMal": "വ്യാജ റബ്ബർ തോട്ടം",
            "relationEN": "Fake Rubber Thottam shares many characteristics with Rubber Thottam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ റബ്ബർ തോട്ടം ഉം വ്യാജ റബ്ബർ തോട്ടം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tea Estate",
        "civWordMal": "തേയിലത്തോട്ടം",
        "imposters": [
          {
            "word": "Tea Estate Type",
            "wordMal": "തേയിലത്തോട്ടം തരം",
            "relationEN": "Both Tea Estate and Tea Estate Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തേയിലത്തോട്ടം ഉം തേയിലത്തോട്ടം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tea Estate",
            "wordMal": "വ്യാജ തേയിലത്തോട്ടം",
            "relationEN": "Fake Tea Estate shares many characteristics with Tea Estate, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തേയിലത്തോട്ടം ഉം വ്യാജ തേയിലത്തോട്ടം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Thengu",
        "civWordMal": "തെങ്ങ്",
        "imposters": [
          {
            "word": "Thengu Type",
            "wordMal": "തെങ്ങ് തരം",
            "relationEN": "Both Thengu and Thengu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തെങ്ങ് ഉം തെങ്ങ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Thengu",
            "wordMal": "വ്യാജ തെങ്ങ്",
            "relationEN": "Fake Thengu shares many characteristics with Thengu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തെങ്ങ് ഉം വ്യാജ തെങ്ങ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kuttanadan Padanilam",
        "civWordMal": "കുട്ടനാടൻ പാടനിലം",
        "imposters": [
          {
            "word": "Kuttanadan Padanilam Type",
            "wordMal": "കുട്ടനാടൻ പാടനിലം തരം",
            "relationEN": "Both Kuttanadan Padanilam and Kuttanadan Padanilam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കുട്ടനാടൻ പാടനിലം ഉം കുട്ടനാടൻ പാടനിലം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kuttanadan Padanilam",
            "wordMal": "വ്യാജ കുട്ടനാടൻ പാടനിലം",
            "relationEN": "Fake Kuttanadan Padanilam shares many characteristics with Kuttanadan Padanilam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കുട്ടനാടൻ പാടനിലം ഉം വ്യാജ കുട്ടനാടൻ പാടനിലം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Puzha",
        "civWordMal": "പുഴ",
        "imposters": [
          {
            "word": "Puzha Type",
            "wordMal": "പുഴ തരം",
            "relationEN": "Both Puzha and Puzha Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പുഴ ഉം പുഴ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Puzha",
            "wordMal": "വ്യാജ പുഴ",
            "relationEN": "Fake Puzha shares many characteristics with Puzha, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പുഴ ഉം വ്യാജ പുഴ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kaithari",
        "civWordMal": "കൈത്തറി",
        "imposters": [
          {
            "word": "Kaithari Type",
            "wordMal": "കൈത്തറി തരം",
            "relationEN": "Both Kaithari and Kaithari Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കൈത്തറി ഉം കൈത്തറി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kaithari",
            "wordMal": "വ്യാജ കൈത്തറി",
            "relationEN": "Fake Kaithari shares many characteristics with Kaithari, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കൈത്തറി ഉം വ്യാജ കൈത്തറി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mazha",
        "civWordMal": "മഴ",
        "imposters": [
          {
            "word": "Mazha Type",
            "wordMal": "മഴ തരം",
            "relationEN": "Both Mazha and Mazha Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മഴ ഉം മഴ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mazha",
            "wordMal": "വ്യാജ മഴ",
            "relationEN": "Fake Mazha shares many characteristics with Mazha, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മഴ ഉം വ്യാജ മഴ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tharavad",
        "civWordMal": "തറവാട്",
        "imposters": [
          {
            "word": "Tharavad Type",
            "wordMal": "തറവാട് തരം",
            "relationEN": "Both Tharavad and Tharavad Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തറവാട് ഉം തറവാട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tharavad",
            "wordMal": "വ്യാജ തറവാട്",
            "relationEN": "Fake Tharavad shares many characteristics with Tharavad, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തറവാട് ഉം വ്യാജ തറവാട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Naadan Pattu",
        "civWordMal": "നാടൻ പാട്ട്",
        "imposters": [
          {
            "word": "Naadan Pattu Type",
            "wordMal": "നാടൻ പാട്ട് തരം",
            "relationEN": "Both Naadan Pattu and Naadan Pattu Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ നാടൻ പാട്ട് ഉം നാടൻ പാട്ട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Naadan Pattu",
            "wordMal": "വ്യാജ നാടൻ പാട്ട്",
            "relationEN": "Fake Naadan Pattu shares many characteristics with Naadan Pattu, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ നാടൻ പാട്ട് ഉം വ്യാജ നാടൻ പാട്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kavala",
        "civWordMal": "കവല",
        "imposters": [
          {
            "word": "Kavala Type",
            "wordMal": "കവല തരം",
            "relationEN": "Both Kavala and Kavala Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കവല ഉം കവല തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kavala",
            "wordMal": "വ്യാജ കവല",
            "relationEN": "Fake Kavala shares many characteristics with Kavala, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കവല ഉം വ്യാജ കവല ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Palli",
        "civWordMal": "പള്ളി",
        "imposters": [
          {
            "word": "Palli Type",
            "wordMal": "പള്ളി തരം",
            "relationEN": "Both Palli and Palli Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പള്ളി ഉം പള്ളി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Palli",
            "wordMal": "വ്യാജ പള്ളി",
            "relationEN": "Fake Palli shares many characteristics with Palli, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പള്ളി ഉം വ്യാജ പള്ളി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ambalam",
        "civWordMal": "അമ്പലം",
        "imposters": [
          {
            "word": "Ambalam Type",
            "wordMal": "അമ്പലം തരം",
            "relationEN": "Both Ambalam and Ambalam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അമ്പലം ഉം അമ്പലം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Ambalam",
            "wordMal": "വ്യാജ അമ്പലം",
            "relationEN": "Fake Ambalam shares many characteristics with Ambalam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അമ്പലം ഉം വ്യാജ അമ്പലം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Lottery Ticket",
        "civWordMal": "ലോട്ടറി ടിക്കറ്റ്",
        "imposters": [
          {
            "word": "Lottery Ticket Type",
            "wordMal": "ലോട്ടറി ടിക്കറ്റ് തരം",
            "relationEN": "Both Lottery Ticket and Lottery Ticket Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ലോട്ടറി ടിക്കറ്റ് ഉം ലോട്ടറി ടിക്കറ്റ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Lottery Ticket",
            "wordMal": "വ്യാജ ലോട്ടറി ടിക്കറ്റ്",
            "relationEN": "Fake Lottery Ticket shares many characteristics with Lottery Ticket, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ലോട്ടറി ടിക്കറ്റ് ഉം വ്യാജ ലോട്ടറി ടിക്കറ്റ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Hartal",
        "civWordMal": "ഹർത്താൽ",
        "imposters": [
          {
            "word": "Hartal Type",
            "wordMal": "ഹർത്താൽ തരം",
            "relationEN": "Both Hartal and Hartal Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഹർത്താൽ ഉം ഹർത്താൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Hartal",
            "wordMal": "വ്യാജ ഹർത്താൽ",
            "relationEN": "Fake Hartal shares many characteristics with Hartal, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഹർത്താൽ ഉം വ്യാജ ഹർത്താൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Vayanasala",
        "civWordMal": "വായനശാല",
        "imposters": [
          {
            "word": "Vayanasala Type",
            "wordMal": "വായനശാല തരം",
            "relationEN": "Both Vayanasala and Vayanasala Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വായനശാല ഉം വായനശാല തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Vayanasala",
            "wordMal": "വ്യാജ വായനശാല",
            "relationEN": "Fake Vayanasala shares many characteristics with Vayanasala, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വായനശാല ഉം വ്യാജ വായനശാല ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chitty",
        "civWordMal": "ചിട്ടി",
        "imposters": [
          {
            "word": "Chitty Type",
            "wordMal": "ചിട്ടി തരം",
            "relationEN": "Both Chitty and Chitty Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചിട്ടി ഉം ചിട്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chitty",
            "wordMal": "വ്യാജ ചിട്ടി",
            "relationEN": "Fake Chitty shares many characteristics with Chitty, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചിട്ടി ഉം വ്യാജ ചിട്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kavukal",
        "civWordMal": "കാവ്",
        "imposters": [
          {
            "word": "Kavukal Type",
            "wordMal": "കാവ് തരം",
            "relationEN": "Both Kavukal and Kavukal Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കാവ് ഉം കാവ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kavukal",
            "wordMal": "വ്യാജ കാവ്",
            "relationEN": "Fake Kavukal shares many characteristics with Kavukal, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കാവ് ഉം വ്യാജ കാവ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kulam",
        "civWordMal": "കുളം",
        "imposters": [
          {
            "word": "Kulam Type",
            "wordMal": "കുളം തരം",
            "relationEN": "Both Kulam and Kulam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കുളം ഉം കുളം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kulam",
            "wordMal": "വ്യാജ കുളം",
            "relationEN": "Fake Kulam shares many characteristics with Kulam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കുളം ഉം വ്യാജ കുളം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Milma",
        "civWordMal": "മിൽമ",
        "imposters": [
          {
            "word": "Milma Type",
            "wordMal": "മിൽമ തരം",
            "relationEN": "Both Milma and Milma Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മിൽമ ഉം മിൽമ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Milma",
            "wordMal": "വ്യാജ മിൽമ",
            "relationEN": "Fake Milma shares many characteristics with Milma, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മിൽമ ഉം വ്യാജ മിൽമ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bevco",
        "civWordMal": "ബെവ്കോ",
        "imposters": [
          {
            "word": "Bevco Type",
            "wordMal": "ബെവ്കോ തരം",
            "relationEN": "Both Bevco and Bevco Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബെവ്കോ ഉം ബെവ്കോ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Bevco",
            "wordMal": "വ്യാജ ബെവ്കോ",
            "relationEN": "Fake Bevco shares many characteristics with Bevco, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബെവ്കോ ഉം വ്യാജ ബെവ്കോ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Akshaya Centre",
        "civWordMal": "അക്ഷയ കേന്ദ്രം",
        "imposters": [
          {
            "word": "Akshaya Centre Type",
            "wordMal": "അക്ഷയ കേന്ദ്രം തരം",
            "relationEN": "Both Akshaya Centre and Akshaya Centre Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അക്ഷയ കേന്ദ്രം ഉം അക്ഷയ കേന്ദ്രം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Akshaya Centre",
            "wordMal": "വ്യാജ അക്ഷയ കേന്ദ്രം",
            "relationEN": "Fake Akshaya Centre shares many characteristics with Akshaya Centre, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അക്ഷയ കേന്ദ്രം ഉം വ്യാജ അക്ഷയ കേന്ദ്രം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Supplyco",
        "civWordMal": "സപ്ലൈകോ",
        "imposters": [
          {
            "word": "Supplyco Type",
            "wordMal": "സപ്ലൈകോ തരം",
            "relationEN": "Both Supplyco and Supplyco Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സപ്ലൈകോ ഉം സപ്ലൈകോ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Supplyco",
            "wordMal": "വ്യാജ സപ്ലൈകോ",
            "relationEN": "Fake Supplyco shares many characteristics with Supplyco, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സപ്ലൈകോ ഉം വ്യാജ സപ്ലൈകോ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Vidyabhyasa Loan",
        "civWordMal": "വിദ്യാഭ്യാസ വായ്പ",
        "imposters": [
          {
            "word": "Vidyabhyasa Loan Type",
            "wordMal": "വിദ്യാഭ്യാസ വായ്പ തരം",
            "relationEN": "Both Vidyabhyasa Loan and Vidyabhyasa Loan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വിദ്യാഭ്യാസ വായ്പ ഉം വിദ്യാഭ്യാസ വായ്പ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Vidyabhyasa Loan",
            "wordMal": "വ്യാജ വിദ്യാഭ്യാസ വായ്പ",
            "relationEN": "Fake Vidyabhyasa Loan shares many characteristics with Vidyabhyasa Loan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വിദ്യാഭ്യാസ വായ്പ ഉം വ്യാജ വിദ്യാഭ്യാസ വായ്പ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ration Kada",
        "civWordMal": "റേഷൻ കട",
        "imposters": [
          {
            "word": "Ration Kada Type",
            "wordMal": "റേഷൻ കട തരം",
            "relationEN": "Both Ration Kada and Ration Kada Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ റേഷൻ കട ഉം റേഷൻ കട തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Ration Kada",
            "wordMal": "വ്യാജ റേഷൻ കട",
            "relationEN": "Fake Ration Kada shares many characteristics with Ration Kada, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ റേഷൻ കട ഉം വ്യാജ റേഷൻ കട ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mahatma Gandhi NREGA",
        "civWordMal": "തൊഴിലുറപ്പ്",
        "imposters": [
          {
            "word": "Mahatma Gandhi NREGA Type",
            "wordMal": "തൊഴിലുറപ്പ് തരം",
            "relationEN": "Both Mahatma Gandhi NREGA and Mahatma Gandhi NREGA Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തൊഴിലുറപ്പ് ഉം തൊഴിലുറപ്പ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mahatma Gandhi NREGA",
            "wordMal": "വ്യാജ തൊഴിലുറപ്പ്",
            "relationEN": "Fake Mahatma Gandhi NREGA shares many characteristics with Mahatma Gandhi NREGA, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തൊഴിലുറപ്പ് ഉം വ്യാജ തൊഴിലുറപ്പ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Current Bill",
        "civWordMal": "കറന്റ് ബിൽ",
        "imposters": [
          {
            "word": "Current Bill Type",
            "wordMal": "കറന്റ് ബിൽ തരം",
            "relationEN": "Both Current Bill and Current Bill Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കറന്റ് ബിൽ ഉം കറന്റ് ബിൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Current Bill",
            "wordMal": "വ്യാജ കറന്റ് ബിൽ",
            "relationEN": "Fake Current Bill shares many characteristics with Current Bill, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കറന്റ് ബിൽ ഉം വ്യാജ കറന്റ് ബിൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "KSEB",
        "civWordMal": "കെഎസ്ഇബി",
        "imposters": [
          {
            "word": "KSEB Type",
            "wordMal": "കെഎസ്ഇബി തരം",
            "relationEN": "Both KSEB and KSEB Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കെഎസ്ഇബി ഉം കെഎസ്ഇബി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake KSEB",
            "wordMal": "വ്യാജ കെഎസ്ഇബി",
            "relationEN": "Fake KSEB shares many characteristics with KSEB, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കെഎസ്ഇബി ഉം വ്യാജ കെഎസ്ഇബി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Water Authority",
        "civWordMal": "വാട്ടർ അതോറിറ്റി",
        "imposters": [
          {
            "word": "Water Authority Type",
            "wordMal": "വാട്ടർ അതോറിറ്റി തരം",
            "relationEN": "Both Water Authority and Water Authority Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വാട്ടർ അതോറിറ്റി ഉം വാട്ടർ അതോറിറ്റി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Water Authority",
            "wordMal": "വ്യാജ വാട്ടർ അതോറിറ്റി",
            "relationEN": "Fake Water Authority shares many characteristics with Water Authority, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വാട്ടർ അതോറിറ്റി ഉം വ്യാജ വാട്ടർ അതോറിറ്റി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      }
    ]
  },
  {
    "id": "vehicles",
    "name": "Vehicles",
    "icon": "??",
    "words": [
      {
        "civWord": "Aanavandi",
        "civWordMal": "ആനവണ്ടി",
        "imposters": [
          {
            "word": "Aanavandi Type",
            "wordMal": "ആനവണ്ടി തരം",
            "relationEN": "Both Aanavandi and Aanavandi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആനവണ്ടി ഉം ആനവണ്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Aanavandi",
            "wordMal": "വ്യാജ ആനവണ്ടി",
            "relationEN": "Fake Aanavandi shares many characteristics with Aanavandi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആനവണ്ടി ഉം വ്യാജ ആനവണ്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Vallam",
        "civWordMal": "വള്ളം",
        "imposters": [
          {
            "word": "Vallam Type",
            "wordMal": "വള്ളം തരം",
            "relationEN": "Both Vallam and Vallam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വള്ളം ഉം വള്ളം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Vallam",
            "wordMal": "വ്യാജ വള്ളം",
            "relationEN": "Fake Vallam shares many characteristics with Vallam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വള്ളം ഉം വ്യാജ വള്ളം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Autorickshaw",
        "civWordMal": "ഓട്ടോറിക്ഷ",
        "imposters": [
          {
            "word": "Autorickshaw Type",
            "wordMal": "ഓട്ടോറിക്ഷ തരം",
            "relationEN": "Both Autorickshaw and Autorickshaw Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഓട്ടോറിക്ഷ ഉം ഓട്ടോറിക്ഷ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Autorickshaw",
            "wordMal": "വ്യാജ ഓട്ടോറിക്ഷ",
            "relationEN": "Fake Autorickshaw shares many characteristics with Autorickshaw, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഓട്ടോറിക്ഷ ഉം വ്യാജ ഓട്ടോറിക്ഷ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bullet",
        "civWordMal": "ബുള്ളറ്റ്",
        "imposters": [
          {
            "word": "Bullet Type",
            "wordMal": "ബുള്ളറ്റ് തരം",
            "relationEN": "Both Bullet and Bullet Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബുള്ളറ്റ് ഉം ബുള്ളറ്റ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Bullet",
            "wordMal": "വ്യാജ ബുള്ളറ്റ്",
            "relationEN": "Fake Bullet shares many characteristics with Bullet, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബുള്ളറ്റ് ഉം വ്യാജ ബുള്ളറ്റ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Houseboat",
        "civWordMal": "ഹൗസ്‌ബോട്ട്",
        "imposters": [
          {
            "word": "Houseboat Type",
            "wordMal": "ഹൗസ്‌ബോട്ട് തരം",
            "relationEN": "Both Houseboat and Houseboat Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഹൗസ്‌ബോട്ട് ഉം ഹൗസ്‌ബോട്ട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Houseboat",
            "wordMal": "വ്യാജ ഹൗസ്‌ബോട്ട്",
            "relationEN": "Fake Houseboat shares many characteristics with Houseboat, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഹൗസ്‌ബോട്ട് ഉം വ്യാജ ഹൗസ്‌ബോട്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jankar",
        "civWordMal": "ജങ്കാർ",
        "imposters": [
          {
            "word": "Jankar Type",
            "wordMal": "ജങ്കാർ തരം",
            "relationEN": "Both Jankar and Jankar Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജങ്കാർ ഉം ജങ്കാർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Jankar",
            "wordMal": "വ്യാജ ജങ്കാർ",
            "relationEN": "Fake Jankar shares many characteristics with Jankar, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജങ്കാർ ഉം വ്യാജ ജങ്കാർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ferry",
        "civWordMal": "ഫെറി",
        "imposters": [
          {
            "word": "Ferry Type",
            "wordMal": "ഫെറി തരം",
            "relationEN": "Both Ferry and Ferry Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഫെറി ഉം ഫെറി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Ferry",
            "wordMal": "വ്യാജ ഫെറി",
            "relationEN": "Fake Ferry shares many characteristics with Ferry, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഫെറി ഉം വ്യാജ ഫെറി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chundan Vallam",
        "civWordMal": "ചുണ്ടൻ വള്ളം",
        "imposters": [
          {
            "word": "Chundan Vallam Type",
            "wordMal": "ചുണ്ടൻ വള്ളം തരം",
            "relationEN": "Both Chundan Vallam and Chundan Vallam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചുണ്ടൻ വള്ളം ഉം ചുണ്ടൻ വള്ളം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chundan Vallam",
            "wordMal": "വ്യാജ ചുണ്ടൻ വള്ളം",
            "relationEN": "Fake Chundan Vallam shares many characteristics with Chundan Vallam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചുണ്ടൻ വള്ളം ഉം വ്യാജ ചുണ്ടൻ വള്ളം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kettuvallam",
        "civWordMal": "കെട്ടുവള്ളം",
        "imposters": [
          {
            "word": "Kettuvallam Type",
            "wordMal": "കെട്ടുവള്ളം തരം",
            "relationEN": "Both Kettuvallam and Kettuvallam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കെട്ടുവള്ളം ഉം കെട്ടുവള്ളം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kettuvallam",
            "wordMal": "വ്യാജ കെട്ടുവള്ളം",
            "relationEN": "Fake Kettuvallam shares many characteristics with Kettuvallam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കെട്ടുവള്ളം ഉം വ്യാജ കെട്ടുവള്ളം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Pickup",
        "civWordMal": "പിക്കപ്പ്",
        "imposters": [
          {
            "word": "Pickup Type",
            "wordMal": "പിക്കപ്പ് തരം",
            "relationEN": "Both Pickup and Pickup Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പിക്കപ്പ് ഉം പിക്കപ്പ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Pickup",
            "wordMal": "വ്യാജ പിക്കപ്പ്",
            "relationEN": "Fake Pickup shares many characteristics with Pickup, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പിക്കപ്പ് ഉം വ്യാജ പിക്കപ്പ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jeep",
        "civWordMal": "ജീപ്പ്",
        "imposters": [
          {
            "word": "Jeep Type",
            "wordMal": "ജീപ്പ് തരം",
            "relationEN": "Both Jeep and Jeep Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജീപ്പ് ഉം ജീപ്പ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Jeep",
            "wordMal": "വ്യാജ ജീപ്പ്",
            "relationEN": "Fake Jeep shares many characteristics with Jeep, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജീപ്പ് ഉം വ്യാജ ജീപ്പ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Lorry",
        "civWordMal": "ലോറി",
        "imposters": [
          {
            "word": "Lorry Type",
            "wordMal": "ലോറി തരം",
            "relationEN": "Both Lorry and Lorry Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ലോറി ഉം ലോറി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Lorry",
            "wordMal": "വ്യാജ ലോറി",
            "relationEN": "Fake Lorry shares many characteristics with Lorry, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ലോറി ഉം വ്യാജ ലോറി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Private Bus",
        "civWordMal": "പ്രൈവറ്റ് ബസ്",
        "imposters": [
          {
            "word": "Private Bus Type",
            "wordMal": "പ്രൈവറ്റ് ബസ് തരം",
            "relationEN": "Both Private Bus and Private Bus Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പ്രൈവറ്റ് ബസ് ഉം പ്രൈവറ്റ് ബസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Private Bus",
            "wordMal": "വ്യാജ പ്രൈവറ്റ് ബസ്",
            "relationEN": "Fake Private Bus shares many characteristics with Private Bus, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പ്രൈവറ്റ് ബസ് ഉം വ്യാജ പ്രൈവറ്റ് ബസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tempo Traveller",
        "civWordMal": "ടെമ്പോ ട്രാവലർ",
        "imposters": [
          {
            "word": "Tempo Traveller Type",
            "wordMal": "ടെമ്പോ ട്രാവലർ തരം",
            "relationEN": "Both Tempo Traveller and Tempo Traveller Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ടെമ്പോ ട്രാവലർ ഉം ടെമ്പോ ട്രാവലർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tempo Traveller",
            "wordMal": "വ്യാജ ടെമ്പോ ട്രാവലർ",
            "relationEN": "Fake Tempo Traveller shares many characteristics with Tempo Traveller, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ടെമ്പോ ട്രാവലർ ഉം വ്യാജ ടെമ്പോ ട്രാവലർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Scooter",
        "civWordMal": "സ്കൂട്ടർ",
        "imposters": [
          {
            "word": "Scooter Type",
            "wordMal": "സ്കൂട്ടർ തരം",
            "relationEN": "Both Scooter and Scooter Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്കൂട്ടർ ഉം സ്കൂട്ടർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Scooter",
            "wordMal": "വ്യാജ സ്കൂട്ടർ",
            "relationEN": "Fake Scooter shares many characteristics with Scooter, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്കൂട്ടർ ഉം വ്യാജ സ്കൂട്ടർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Cycle",
        "civWordMal": "സൈക്കിൾ",
        "imposters": [
          {
            "word": "Cycle Type",
            "wordMal": "സൈക്കിൾ തരം",
            "relationEN": "Both Cycle and Cycle Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സൈക്കിൾ ഉം സൈക്കിൾ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Cycle",
            "wordMal": "വ്യാജ സൈക്കിൾ",
            "relationEN": "Fake Cycle shares many characteristics with Cycle, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സൈക്കിൾ ഉം വ്യാജ സൈക്കിൾ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mini Bus",
        "civWordMal": "മിനി ബസ്",
        "imposters": [
          {
            "word": "Mini Bus Type",
            "wordMal": "മിനി ബസ് തരം",
            "relationEN": "Both Mini Bus and Mini Bus Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മിനി ബസ് ഉം മിനി ബസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mini Bus",
            "wordMal": "വ്യാജ മിനി ബസ്",
            "relationEN": "Fake Mini Bus shares many characteristics with Mini Bus, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മിനി ബസ് ഉം വ്യാജ മിനി ബസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Taxi",
        "civWordMal": "ടാക്സി",
        "imposters": [
          {
            "word": "Taxi Type",
            "wordMal": "ടാക്സി തരം",
            "relationEN": "Both Taxi and Taxi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ടാക്സി ഉം ടാക്സി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Taxi",
            "wordMal": "വ്യാജ ടാക്സി",
            "relationEN": "Fake Taxi shares many characteristics with Taxi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ടാക്സി ഉം വ്യാജ ടാക്സി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Train",
        "civWordMal": "ട്രെയിൻ",
        "imposters": [
          {
            "word": "Train Type",
            "wordMal": "ട്രെയിൻ തരം",
            "relationEN": "Both Train and Train Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ട്രെയിൻ ഉം ട്രെയിൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Train",
            "wordMal": "വ്യാജ ട്രെയിൻ",
            "relationEN": "Fake Train shares many characteristics with Train, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ട്രെയിൻ ഉം വ്യാജ ട്രെയിൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "School Bus",
        "civWordMal": "സ്കൂൾ ബസ്",
        "imposters": [
          {
            "word": "School Bus Type",
            "wordMal": "സ്കൂൾ ബസ് തരം",
            "relationEN": "Both School Bus and School Bus Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്കൂൾ ബസ് ഉം സ്കൂൾ ബസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake School Bus",
            "wordMal": "വ്യാജ സ്കൂൾ ബസ്",
            "relationEN": "Fake School Bus shares many characteristics with School Bus, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്കൂൾ ബസ് ഉം വ്യാജ സ്കൂൾ ബസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Jik Jik Train",
        "civWordMal": "തീവണ്ടി",
        "imposters": [
          {
            "word": "Jik Jik Train Type",
            "wordMal": "തീവണ്ടി തരം",
            "relationEN": "Both Jik Jik Train and Jik Jik Train Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ തീവണ്ടി ഉം തീവണ്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Jik Jik Train",
            "wordMal": "വ്യാജ തീവണ്ടി",
            "relationEN": "Fake Jik Jik Train shares many characteristics with Jik Jik Train, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ തീവണ്ടി ഉം വ്യാജ തീവണ്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ambulance",
        "civWordMal": "ആംബുലൻസ്",
        "imposters": [
          {
            "word": "Ambulance Type",
            "wordMal": "ആംബുലൻസ് തരം",
            "relationEN": "Both Ambulance and Ambulance Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആംബുലൻസ് ഉം ആംബുലൻസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Ambulance",
            "wordMal": "വ്യാജ ആംബുലൻസ്",
            "relationEN": "Fake Ambulance shares many characteristics with Ambulance, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആംബുലൻസ് ഉം വ്യാജ ആംബുലൻസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Kochi Metro",
        "civWordMal": "കൊച്ചി മെട്രോ",
        "imposters": [
          {
            "word": "Kochi Metro Type",
            "wordMal": "കൊച്ചി മെട്രോ തരം",
            "relationEN": "Both Kochi Metro and Kochi Metro Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കൊച്ചി മെട്രോ ഉം കൊച്ചി മെട്രോ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kochi Metro",
            "wordMal": "വ്യാജ കൊച്ചി മെട്രോ",
            "relationEN": "Fake Kochi Metro shares many characteristics with Kochi Metro, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കൊച്ചി മെട്രോ ഉം വ്യാജ കൊച്ചി മെട്രോ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tractor",
        "civWordMal": "ട്രാക്ടർ",
        "imposters": [
          {
            "word": "Tractor Type",
            "wordMal": "ട്രാക്ടർ തരം",
            "relationEN": "Both Tractor and Tractor Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ട്രാക്ടർ ഉം ട്രാക്ടർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tractor",
            "wordMal": "വ്യാജ ട്രാക്ടർ",
            "relationEN": "Fake Tractor shares many characteristics with Tractor, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ട്രാക്ടർ ഉം വ്യാജ ട്രാക്ടർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Excavator",
        "civWordMal": "ജെസിബി",
        "imposters": [
          {
            "word": "Excavator Type",
            "wordMal": "ജെസിബി തരം",
            "relationEN": "Both Excavator and Excavator Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജെസിബി ഉം ജെസിബി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Excavator",
            "wordMal": "വ്യാജ ജെസിബി",
            "relationEN": "Fake Excavator shares many characteristics with Excavator, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജെസിബി ഉം വ്യാജ ജെസിബി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Speed Boat",
        "civWordMal": "സ്പീഡ് ബോട്ട്",
        "imposters": [
          {
            "word": "Speed Boat Type",
            "wordMal": "സ്പീഡ് ബോട്ട് തരം",
            "relationEN": "Both Speed Boat and Speed Boat Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്പീഡ് ബോട്ട് ഉം സ്പീഡ് ബോട്ട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Speed Boat",
            "wordMal": "വ്യാജ സ്പീഡ് ബോട്ട്",
            "relationEN": "Fake Speed Boat shares many characteristics with Speed Boat, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്പീഡ് ബോട്ട് ഉം വ്യാജ സ്പീഡ് ബോട്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Peti Auto",
        "civWordMal": "പെട്ടി ഓട്ടോ",
        "imposters": [
          {
            "word": "Peti Auto Type",
            "wordMal": "പെട്ടി ഓട്ടോ തരം",
            "relationEN": "Both Peti Auto and Peti Auto Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പെട്ടി ഓട്ടോ ഉം പെട്ടി ഓട്ടോ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Peti Auto",
            "wordMal": "വ്യാജ പെട്ടി ഓട്ടോ",
            "relationEN": "Fake Peti Auto shares many characteristics with Peti Auto, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പെട്ടി ഓട്ടോ ഉം വ്യാജ പെട്ടി ഓട്ടോ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ambassador",
        "civWordMal": "അംബാസഡർ",
        "imposters": [
          {
            "word": "Ambassador Type",
            "wordMal": "അംബാസഡർ തരം",
            "relationEN": "Both Ambassador and Ambassador Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അംബാസഡർ ഉം അംബാസഡർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Ambassador",
            "wordMal": "വ്യാജ അംബാസഡർ",
            "relationEN": "Fake Ambassador shares many characteristics with Ambassador, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അംബാസഡർ ഉം വ്യാജ അംബാസഡർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Mahindra Jeep",
        "civWordMal": "മഹീന്ദ്ര ജീപ്പ്",
        "imposters": [
          {
            "word": "Mahindra Jeep Type",
            "wordMal": "മഹീന്ദ്ര ജീപ്പ് തരം",
            "relationEN": "Both Mahindra Jeep and Mahindra Jeep Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ മഹീന്ദ്ര ജീപ്പ് ഉം മഹീന്ദ്ര ജീപ്പ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Mahindra Jeep",
            "wordMal": "വ്യാജ മഹീന്ദ്ര ജീപ്പ്",
            "relationEN": "Fake Mahindra Jeep shares many characteristics with Mahindra Jeep, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ മഹീന്ദ്ര ജീപ്പ് ഉം വ്യാജ മഹീന്ദ്ര ജീപ്പ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Chavittu Vandi",
        "civWordMal": "ചവിട്ടുവണ്ടി",
        "imposters": [
          {
            "word": "Chavittu Vandi Type",
            "wordMal": "ചവിട്ടുവണ്ടി തരം",
            "relationEN": "Both Chavittu Vandi and Chavittu Vandi Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചവിട്ടുവണ്ടി ഉം ചവിട്ടുവണ്ടി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Chavittu Vandi",
            "wordMal": "വ്യാജ ചവിട്ടുവണ്ടി",
            "relationEN": "Fake Chavittu Vandi shares many characteristics with Chavittu Vandi, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചവിട്ടുവണ്ടി ഉം വ്യാജ ചവിട്ടുവണ്ടി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "RX 100",
        "civWordMal": "ആർ എക്സ് 100",
        "imposters": [
          {
            "word": "RX 100 Type",
            "wordMal": "ആർ എക്സ് 100 തരം",
            "relationEN": "Both RX 100 and RX 100 Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആർ എക്സ് 100 ഉം ആർ എക്സ് 100 തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake RX 100",
            "wordMal": "വ്യാജ ആർ എക്സ് 100",
            "relationEN": "Fake RX 100 shares many characteristics with RX 100, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആർ എക്സ് 100 ഉം വ്യാജ ആർ എക്സ് 100 ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Torrus Truck",
        "civWordMal": "ടോറസ്",
        "imposters": [
          {
            "word": "Torrus Truck Type",
            "wordMal": "ടോറസ് തരം",
            "relationEN": "Both Torrus Truck and Torrus Truck Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ടോറസ് ഉം ടോറസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Torrus Truck",
            "wordMal": "വ്യാജ ടോറസ്",
            "relationEN": "Fake Torrus Truck shares many characteristics with Torrus Truck, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ടോറസ് ഉം വ്യാജ ടോറസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Fire Engine",
        "civWordMal": "ഫയർ ഫോഴ്സ്",
        "imposters": [
          {
            "word": "Fire Engine Type",
            "wordMal": "ഫയർ ഫോഴ്സ് തരം",
            "relationEN": "Both Fire Engine and Fire Engine Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഫയർ ഫോഴ്സ് ഉം ഫയർ ഫോഴ്സ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Fire Engine",
            "wordMal": "വ്യാജ ഫയർ ഫോഴ്സ്",
            "relationEN": "Fake Fire Engine shares many characteristics with Fire Engine, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഫയർ ഫോഴ്സ് ഉം വ്യാജ ഫയർ ഫോഴ്സ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Water Metro",
        "civWordMal": "വാട്ടർ മെട്രോ",
        "imposters": [
          {
            "word": "Water Metro Type",
            "wordMal": "വാട്ടർ മെട്രോ തരം",
            "relationEN": "Both Water Metro and Water Metro Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ വാട്ടർ മെട്രോ ഉം വാട്ടർ മെട്രോ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Water Metro",
            "wordMal": "വ്യാജ വാട്ടർ മെട്രോ",
            "relationEN": "Fake Water Metro shares many characteristics with Water Metro, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ വാട്ടർ മെട്രോ ഉം വ്യാജ വാട്ടർ മെട്രോ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Low Floor Bus",
        "civWordMal": "ലോ ഫ്ലോർ ബസ്",
        "imposters": [
          {
            "word": "Low Floor Bus Type",
            "wordMal": "ലോ ഫ്ലോർ ബസ് തരം",
            "relationEN": "Both Low Floor Bus and Low Floor Bus Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ലോ ഫ്ലോർ ബസ് ഉം ലോ ഫ്ലോർ ബസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Low Floor Bus",
            "wordMal": "വ്യാജ ലോ ഫ്ലോർ ബസ്",
            "relationEN": "Fake Low Floor Bus shares many characteristics with Low Floor Bus, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ലോ ഫ്ലോർ ബസ് ഉം വ്യാജ ലോ ഫ്ലോർ ബസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tourist Bus",
        "civWordMal": "ടൂറിസ്റ്റ് ബസ്",
        "imposters": [
          {
            "word": "Tourist Bus Type",
            "wordMal": "ടൂറിസ്റ്റ് ബസ് തരം",
            "relationEN": "Both Tourist Bus and Tourist Bus Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ടൂറിസ്റ്റ് ബസ് ഉം ടൂറിസ്റ്റ് ബസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tourist Bus",
            "wordMal": "വ്യാജ ടൂറിസ്റ്റ് ബസ്",
            "relationEN": "Fake Tourist Bus shares many characteristics with Tourist Bus, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ടൂറിസ്റ്റ് ബസ് ഉം വ്യാജ ടൂറിസ്റ്റ് ബസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      }
    ]
  },
  {
    "id": "school",
    "name": "College & School",
    "icon": "??",
    "words": [
      {
        "civWord": "Kalolsavam",
        "civWordMal": "കലോത്സവം",
        "imposters": [
          {
            "word": "Kalolsavam Type",
            "wordMal": "കലോത്സവം തരം",
            "relationEN": "Both Kalolsavam and Kalolsavam Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കലോത്സവം ഉം കലോത്സവം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Kalolsavam",
            "wordMal": "വ്യാജ കലോത്സവം",
            "relationEN": "Fake Kalolsavam shares many characteristics with Kalolsavam, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കലോത്സവം ഉം വ്യാജ കലോത്സവം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Arts Day",
        "civWordMal": "ആർട്സ് ഡേ",
        "imposters": [
          {
            "word": "Arts Day Type",
            "wordMal": "ആർട്സ് ഡേ തരം",
            "relationEN": "Both Arts Day and Arts Day Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആർട്സ് ഡേ ഉം ആർട്സ് ഡേ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Arts Day",
            "wordMal": "വ്യാജ ആർട്സ് ഡേ",
            "relationEN": "Fake Arts Day shares many characteristics with Arts Day, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആർട്സ് ഡേ ഉം വ്യാജ ആർട്സ് ഡേ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "College Canteen",
        "civWordMal": "കോളേജ് കാന്റീൻ",
        "imposters": [
          {
            "word": "College Canteen Type",
            "wordMal": "കോളേജ് കാന്റീൻ തരം",
            "relationEN": "Both College Canteen and College Canteen Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കോളേജ് കാന്റീൻ ഉം കോളേജ് കാന്റീൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake College Canteen",
            "wordMal": "വ്യാജ കോളേജ് കാന്റീൻ",
            "relationEN": "Fake College Canteen shares many characteristics with College Canteen, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കോളേജ് കാന്റീൻ ഉം വ്യാജ കോളേജ് കാന്റീൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "PTA Meeting",
        "civWordMal": "പി ടി എ മീറ്റിംഗ്",
        "imposters": [
          {
            "word": "PTA Meeting Type",
            "wordMal": "പി ടി എ മീറ്റിംഗ് തരം",
            "relationEN": "Both PTA Meeting and PTA Meeting Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പി ടി എ മീറ്റിംഗ് ഉം പി ടി എ മീറ്റിംഗ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake PTA Meeting",
            "wordMal": "വ്യാജ പി ടി എ മീറ്റിംഗ്",
            "relationEN": "Fake PTA Meeting shares many characteristics with PTA Meeting, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പി ടി എ മീറ്റിംഗ് ഉം വ്യാജ പി ടി എ മീറ്റിംഗ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Onam Celebration",
        "civWordMal": "ഓണാഘോഷം",
        "imposters": [
          {
            "word": "Onam Celebration Type",
            "wordMal": "ഓണാഘോഷം തരം",
            "relationEN": "Both Onam Celebration and Onam Celebration Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഓണാഘോഷം ഉം ഓണാഘോഷം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Onam Celebration",
            "wordMal": "വ്യാജ ഓണാഘോഷം",
            "relationEN": "Fake Onam Celebration shares many characteristics with Onam Celebration, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഓണാഘോഷം ഉം വ്യാജ ഓണാഘോഷം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Uniform",
        "civWordMal": "യൂണിഫോം",
        "imposters": [
          {
            "word": "Uniform Type",
            "wordMal": "യൂണിഫോം തരം",
            "relationEN": "Both Uniform and Uniform Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ യൂണിഫോം ഉം യൂണിഫോം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Uniform",
            "wordMal": "വ്യാജ യൂണിഫോം",
            "relationEN": "Fake Uniform shares many characteristics with Uniform, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ യൂണിഫോം ഉം വ്യാജ യൂണിഫോം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "School Bus",
        "civWordMal": "സ്കൂൾ ബസ്",
        "imposters": [
          {
            "word": "School Bus Type",
            "wordMal": "സ്കൂൾ ബസ് തരം",
            "relationEN": "Both School Bus and School Bus Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്കൂൾ ബസ് ഉം സ്കൂൾ ബസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake School Bus",
            "wordMal": "വ്യാജ സ്കൂൾ ബസ്",
            "relationEN": "Fake School Bus shares many characteristics with School Bus, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്കൂൾ ബസ് ഉം വ്യാജ സ്കൂൾ ബസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "PT Period",
        "civWordMal": "പി ടി പിരീഡ്",
        "imposters": [
          {
            "word": "PT Period Type",
            "wordMal": "പി ടി പിരീഡ് തരം",
            "relationEN": "Both PT Period and PT Period Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പി ടി പിരീഡ് ഉം പി ടി പിരീഡ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake PT Period",
            "wordMal": "വ്യാജ പി ടി പിരീഡ്",
            "relationEN": "Fake PT Period shares many characteristics with PT Period, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പി ടി പിരീഡ് ഉം വ്യാജ പി ടി പിരീഡ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Annual Day",
        "civWordMal": "ആനുവൽ ഡേ",
        "imposters": [
          {
            "word": "Annual Day Type",
            "wordMal": "ആനുവൽ ഡേ തരം",
            "relationEN": "Both Annual Day and Annual Day Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ആനുവൽ ഡേ ഉം ആനുവൽ ഡേ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Annual Day",
            "wordMal": "വ്യാജ ആനുവൽ ഡേ",
            "relationEN": "Fake Annual Day shares many characteristics with Annual Day, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ആനുവൽ ഡേ ഉം വ്യാജ ആനുവൽ ഡേ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Exam Hall",
        "civWordMal": "എക്സാം ഹാൾ",
        "imposters": [
          {
            "word": "Exam Hall Type",
            "wordMal": "എക്സാം ഹാൾ തരം",
            "relationEN": "Both Exam Hall and Exam Hall Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ എക്സാം ഹാൾ ഉം എക്സാം ഹാൾ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Exam Hall",
            "wordMal": "വ്യാജ എക്സാം ഹാൾ",
            "relationEN": "Fake Exam Hall shares many characteristics with Exam Hall, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ എക്സാം ഹാൾ ഉം വ്യാജ എക്സാം ഹാൾ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Rank List",
        "civWordMal": "റാങ്ക് ലിസ്റ്റ്",
        "imposters": [
          {
            "word": "Rank List Type",
            "wordMal": "റാങ്ക് ലിസ്റ്റ് തരം",
            "relationEN": "Both Rank List and Rank List Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ റാങ്ക് ലിസ്റ്റ് ഉം റാങ്ക് ലിസ്റ്റ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Rank List",
            "wordMal": "വ്യാജ റാങ്ക് ലിസ്റ്റ്",
            "relationEN": "Fake Rank List shares many characteristics with Rank List, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ റാങ്ക് ലിസ്റ്റ് ഉം വ്യാജ റാങ്ക് ലിസ്റ്റ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "College Union",
        "civWordMal": "കോളേജ് യൂണിയൻ",
        "imposters": [
          {
            "word": "College Union Type",
            "wordMal": "കോളേജ് യൂണിയൻ തരം",
            "relationEN": "Both College Union and College Union Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ കോളേജ് യൂണിയൻ ഉം കോളേജ് യൂണിയൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake College Union",
            "wordMal": "വ്യാജ കോളേജ് യൂണിയൻ",
            "relationEN": "Fake College Union shares many characteristics with College Union, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ കോളേജ് യൂണിയൻ ഉം വ്യാജ കോളേജ് യൂണിയൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Batch",
        "civWordMal": "ബാച്ച്",
        "imposters": [
          {
            "word": "Batch Type",
            "wordMal": "ബാച്ച് തരം",
            "relationEN": "Both Batch and Batch Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബാച്ച് ഉം ബാച്ച് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Batch",
            "wordMal": "വ്യാജ ബാച്ച്",
            "relationEN": "Fake Batch shares many characteristics with Batch, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബാച്ച് ഉം വ്യാജ ബാച്ച് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Farewell",
        "civWordMal": "ഫെയർവെൽ",
        "imposters": [
          {
            "word": "Farewell Type",
            "wordMal": "ഫെയർവെൽ തരം",
            "relationEN": "Both Farewell and Farewell Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഫെയർവെൽ ഉം ഫെയർവെൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Farewell",
            "wordMal": "വ്യാജ ഫെയർവെൽ",
            "relationEN": "Fake Farewell shares many characteristics with Farewell, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഫെയർവെൽ ഉം വ്യാജ ഫെയർവെൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "NSS",
        "civWordMal": "എൻ എസ് എസ്",
        "imposters": [
          {
            "word": "NSS Type",
            "wordMal": "എൻ എസ് എസ് തരം",
            "relationEN": "Both NSS and NSS Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ എൻ എസ് എസ് ഉം എൻ എസ് എസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake NSS",
            "wordMal": "വ്യാജ എൻ എസ് എസ്",
            "relationEN": "Fake NSS shares many characteristics with NSS, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ എൻ എസ് എസ് ഉം വ്യാജ എൻ എസ് എസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "NCC",
        "civWordMal": "എൻ സി സി",
        "imposters": [
          {
            "word": "NCC Type",
            "wordMal": "എൻ സി സി തരം",
            "relationEN": "Both NCC and NCC Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ എൻ സി സി ഉം എൻ സി സി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake NCC",
            "wordMal": "വ്യാജ എൻ സി സി",
            "relationEN": "Fake NCC shares many characteristics with NCC, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ എൻ സി സി ഉം വ്യാജ എൻ സി സി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Laboratory",
        "civWordMal": "ലബോറട്ടറി",
        "imposters": [
          {
            "word": "Laboratory Type",
            "wordMal": "ലബോറട്ടറി തരം",
            "relationEN": "Both Laboratory and Laboratory Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ലബോറട്ടറി ഉം ലബോറട്ടറി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Laboratory",
            "wordMal": "വ്യാജ ലബോറട്ടറി",
            "relationEN": "Fake Laboratory shares many characteristics with Laboratory, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ലബോറട്ടറി ഉം വ്യാജ ലബോറട്ടറി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Library",
        "civWordMal": "ലൈബ്രറി",
        "imposters": [
          {
            "word": "Library Type",
            "wordMal": "ലൈബ്രറി തരം",
            "relationEN": "Both Library and Library Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ലൈബ്രറി ഉം ലൈബ്രറി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Library",
            "wordMal": "വ്യാജ ലൈബ്രറി",
            "relationEN": "Fake Library shares many characteristics with Library, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ലൈബ്രറി ഉം വ്യാജ ലൈബ്രറി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Hostel",
        "civWordMal": "ഹോസ്റ്റൽ",
        "imposters": [
          {
            "word": "Hostel Type",
            "wordMal": "ഹോസ്റ്റൽ തരം",
            "relationEN": "Both Hostel and Hostel Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഹോസ്റ്റൽ ഉം ഹോസ്റ്റൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Hostel",
            "wordMal": "വ്യാജ ഹോസ്റ്റൽ",
            "relationEN": "Fake Hostel shares many characteristics with Hostel, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഹോസ്റ്റൽ ഉം വ്യാജ ഹോസ്റ്റൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Class Leader",
        "civWordMal": "ക്ലാസ് ലീഡർ",
        "imposters": [
          {
            "word": "Class Leader Type",
            "wordMal": "ക്ലാസ് ലീഡർ തരം",
            "relationEN": "Both Class Leader and Class Leader Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ക്ലാസ് ലീഡർ ഉം ക്ലാസ് ലീഡർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Class Leader",
            "wordMal": "വ്യാജ ക്ലാസ് ലീഡർ",
            "relationEN": "Fake Class Leader shares many characteristics with Class Leader, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ക്ലാസ് ലീഡർ ഉം വ്യാജ ക്ലാസ് ലീഡർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tour Trip",
        "civWordMal": "ഐവി / ടൂർ",
        "imposters": [
          {
            "word": "Tour Trip Type",
            "wordMal": "ഐവി / ടൂർ തരം",
            "relationEN": "Both Tour Trip and Tour Trip Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഐവി / ടൂർ ഉം ഐവി / ടൂർ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tour Trip",
            "wordMal": "വ്യാജ ഐവി / ടൂർ",
            "relationEN": "Fake Tour Trip shares many characteristics with Tour Trip, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഐവി / ടൂർ ഉം വ്യാജ ഐവി / ടൂർ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bench and Desk",
        "civWordMal": "ബെഞ്ചും ഡെസ്കും",
        "imposters": [
          {
            "word": "Bench and Desk Type",
            "wordMal": "ബെഞ്ചും ഡെസ്കും തരം",
            "relationEN": "Both Bench and Desk and Bench and Desk Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ബെഞ്ചും ഡെസ്കും ഉം ബെഞ്ചും ഡെസ്കും തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Bench and Desk",
            "wordMal": "വ്യാജ ബെഞ്ചും ഡെസ്കും",
            "relationEN": "Fake Bench and Desk shares many characteristics with Bench and Desk, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ബെഞ്ചും ഡെസ്കും ഉം വ്യാജ ബെഞ്ചും ഡെസ്കും ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Bell",
        "civWordMal": "സ്കൂൾ ബെൽ",
        "imposters": [
          {
            "word": "Bell Type",
            "wordMal": "സ്കൂൾ ബെൽ തരം",
            "relationEN": "Both Bell and Bell Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്കൂൾ ബെൽ ഉം സ്കൂൾ ബെൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Bell",
            "wordMal": "വ്യാജ സ്കൂൾ ബെൽ",
            "relationEN": "Fake Bell shares many characteristics with Bell, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്കൂൾ ബെൽ ഉം വ്യാജ സ്കൂൾ ബെൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Principal",
        "civWordMal": "പ്രിൻസിപ്പൽ",
        "imposters": [
          {
            "word": "Principal Type",
            "wordMal": "പ്രിൻസിപ്പൽ തരം",
            "relationEN": "Both Principal and Principal Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പ്രിൻസിപ്പൽ ഉം പ്രിൻസിപ്പൽ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Principal",
            "wordMal": "വ്യാജ പ്രിൻസിപ്പൽ",
            "relationEN": "Fake Principal shares many characteristics with Principal, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പ്രിൻസിപ്പൽ ഉം വ്യാജ പ്രിൻസിപ്പൽ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Assignment",
        "civWordMal": "അസൈൻമെന്റ്",
        "imposters": [
          {
            "word": "Assignment Type",
            "wordMal": "അസൈൻമെന്റ് തരം",
            "relationEN": "Both Assignment and Assignment Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ അസൈൻമെന്റ് ഉം അസൈൻമെന്റ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Assignment",
            "wordMal": "വ്യാജ അസൈൻമെന്റ്",
            "relationEN": "Fake Assignment shares many characteristics with Assignment, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ അസൈൻമെന്റ് ഉം വ്യാജ അസൈൻമെന്റ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Alumni Meet",
        "civWordMal": "പൂർവ്വവിദ്യാർത്ഥി സംഗമം",
        "imposters": [
          {
            "word": "Alumni Meet Type",
            "wordMal": "പൂർവ്വവിദ്യാർത്ഥി സംഗമം തരം",
            "relationEN": "Both Alumni Meet and Alumni Meet Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പൂർവ്വവിദ്യാർത്ഥി സംഗമം ഉം പൂർവ്വവിദ്യാർത്ഥി സംഗമം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Alumni Meet",
            "wordMal": "വ്യാജ പൂർവ്വവിദ്യാർത്ഥി സംഗമം",
            "relationEN": "Fake Alumni Meet shares many characteristics with Alumni Meet, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പൂർവ്വവിദ്യാർത്ഥി സംഗമം ഉം വ്യാജ പൂർവ്വവിദ്യാർത്ഥി സംഗമം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "IV (Industrial Visit)",
        "civWordMal": "ഐവി",
        "imposters": [
          {
            "word": "IV (Industrial Visit) Type",
            "wordMal": "ഐവി തരം",
            "relationEN": "Both IV (Industrial Visit) and IV (Industrial Visit) Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ഐവി ഉം ഐവി തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake IV (Industrial Visit)",
            "wordMal": "വ്യാജ ഐവി",
            "relationEN": "Fake IV (Industrial Visit) shares many characteristics with IV (Industrial Visit), making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ഐവി ഉം വ്യാജ ഐവി ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Tuition Class",
        "civWordMal": "ട്യൂഷൻ ക്ലാസ്",
        "imposters": [
          {
            "word": "Tuition Class Type",
            "wordMal": "ട്യൂഷൻ ക്ലാസ് തരം",
            "relationEN": "Both Tuition Class and Tuition Class Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ട്യൂഷൻ ക്ലാസ് ഉം ട്യൂഷൻ ക്ലാസ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Tuition Class",
            "wordMal": "വ്യാജ ട്യൂഷൻ ക്ലാസ്",
            "relationEN": "Fake Tuition Class shares many characteristics with Tuition Class, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ട്യൂഷൻ ക്ലാസ് ഉം വ്യാജ ട്യൂഷൻ ക്ലാസ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Canara Bank Challan",
        "civWordMal": "ചെല്ലാൻ",
        "imposters": [
          {
            "word": "Canara Bank Challan Type",
            "wordMal": "ചെല്ലാൻ തരം",
            "relationEN": "Both Canara Bank Challan and Canara Bank Challan Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ചെല്ലാൻ ഉം ചെല്ലാൻ തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Canara Bank Challan",
            "wordMal": "വ്യാജ ചെല്ലാൻ",
            "relationEN": "Fake Canara Bank Challan shares many characteristics with Canara Bank Challan, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ചെല്ലാൻ ഉം വ്യാജ ചെല്ലാൻ ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Record Book",
        "civWordMal": "റെക്കോർഡ് ബുക്ക്",
        "imposters": [
          {
            "word": "Record Book Type",
            "wordMal": "റെക്കോർഡ് ബുക്ക് തരം",
            "relationEN": "Both Record Book and Record Book Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ റെക്കോർഡ് ബുക്ക് ഉം റെക്കോർഡ് ബുക്ക് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Record Book",
            "wordMal": "വ്യാജ റെക്കോർഡ് ബുക്ക്",
            "relationEN": "Fake Record Book shares many characteristics with Record Book, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ റെക്കോർഡ് ബുക്ക് ഉം വ്യാജ റെക്കോർഡ് ബുക്ക് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Study Leave",
        "civWordMal": "സ്റ്റഡി ലീവ്",
        "imposters": [
          {
            "word": "Study Leave Type",
            "wordMal": "സ്റ്റഡി ലീവ് തരം",
            "relationEN": "Both Study Leave and Study Leave Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്റ്റഡി ലീവ് ഉം സ്റ്റഡി ലീവ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Study Leave",
            "wordMal": "വ്യാജ സ്റ്റഡി ലീവ്",
            "relationEN": "Fake Study Leave shares many characteristics with Study Leave, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്റ്റഡി ലീവ് ഉം വ്യാജ സ്റ്റഡി ലീവ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Youth Festival",
        "civWordMal": "യുവജനോത്സവം",
        "imposters": [
          {
            "word": "Youth Festival Type",
            "wordMal": "യുവജനോത്സവം തരം",
            "relationEN": "Both Youth Festival and Youth Festival Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ യുവജനോത്സവം ഉം യുവജനോത്സവം തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Youth Festival",
            "wordMal": "വ്യാജ യുവജനോത്സവം",
            "relationEN": "Fake Youth Festival shares many characteristics with Youth Festival, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ യുവജനോത്സവം ഉം വ്യാജ യുവജനോത്സവം ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Progress Report",
        "civWordMal": "പ്രോഗ്രസ് റിപ്പോർട്ട്",
        "imposters": [
          {
            "word": "Progress Report Type",
            "wordMal": "പ്രോഗ്രസ് റിപ്പോർട്ട് തരം",
            "relationEN": "Both Progress Report and Progress Report Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ പ്രോഗ്രസ് റിപ്പോർട്ട് ഉം പ്രോഗ്രസ് റിപ്പോർട്ട് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Progress Report",
            "wordMal": "വ്യാജ പ്രോഗ്രസ് റിപ്പോർട്ട്",
            "relationEN": "Fake Progress Report shares many characteristics with Progress Report, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ പ്രോഗ്രസ് റിപ്പോർട്ട് ഉം വ്യാജ പ്രോഗ്രസ് റിപ്പോർട്ട് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Geometry Box",
        "civWordMal": "ജോമട്രി ബോക്സ്",
        "imposters": [
          {
            "word": "Geometry Box Type",
            "wordMal": "ജോമട്രി ബോക്സ് തരം",
            "relationEN": "Both Geometry Box and Geometry Box Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ ജോമട്രി ബോക്സ് ഉം ജോമട്രി ബോക്സ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Geometry Box",
            "wordMal": "വ്യാജ ജോമട്രി ബോക്സ്",
            "relationEN": "Fake Geometry Box shares many characteristics with Geometry Box, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ ജോമട്രി ബോക്സ് ഉം വ്യാജ ജോമട്രി ബോക്സ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Slate and Pencil",
        "civWordMal": "സ്ലേറ്റും പെൻസിലും",
        "imposters": [
          {
            "word": "Slate and Pencil Type",
            "wordMal": "സ്ലേറ്റും പെൻസിലും തരം",
            "relationEN": "Both Slate and Pencil and Slate and Pencil Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്ലേറ്റും പെൻസിലും ഉം സ്ലേറ്റും പെൻസിലും തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake Slate and Pencil",
            "wordMal": "വ്യാജ സ്ലേറ്റും പെൻസിലും",
            "relationEN": "Fake Slate and Pencil shares many characteristics with Slate and Pencil, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്ലേറ്റും പെൻസിലും ഉം വ്യാജ സ്ലേറ്റും പെൻസിലും ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      },
      {
        "civWord": "School Bag",
        "civWordMal": "സ്കൂൾ ബാഗ്",
        "imposters": [
          {
            "word": "School Bag Type",
            "wordMal": "സ്കൂൾ ബാഗ് തരം",
            "relationEN": "Both School Bag and School Bag Type are deeply related concepts often confused together.",
            "relationML": "രണ്ടും സമാനമായ ആശയങ്ങളായതിനാൽ സ്കൂൾ ബാഗ് ഉം സ്കൂൾ ബാഗ് തരം ഉം ആളുകൾക്ക് തെറ്റിദ്ധരിക്കാൻ സാധ്യതയുണ്ട്."
          },
          {
            "word": "Fake School Bag",
            "wordMal": "വ്യാജ സ്കൂൾ ബാഗ്",
            "relationEN": "Fake School Bag shares many characteristics with School Bag, making them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയായതിനാൽ സ്കൂൾ ബാഗ് ഉം വ്യാജ സ്കൂൾ ബാഗ് ഉം തെറ്റിദ്ധരിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
          }
        ]
      }
    ]
  },
  {
    "id": "sports",
    "name": "Sports",
    "icon": "?",
    "words": [
      {
        "civWord": "Football",
        "civWordMal": "ഫുട്ബോൾ",
        "imposters": [
          {
            "word": "Rugby",
            "wordMal": "റഗ്ബി",
            "relationEN": "Both are team field sports, but rugby allows handling.",
            "relationML": "രണ്ടും ഫീൽഡ് ഗെയിമുകളാണ്, റഗ്ബിയിൽ പന്ത് കയ്യിലെടുക്കാം."
          },
          {
            "word": "Futsal",
            "wordMal": "ഫുട്സാൽ",
            "relationEN": "Futsal is the indoor, smaller court version of football.",
            "relationML": "ഫുട്ബോളിന്റെ ഇൻഡോർ പതിപ്പാണ് ഫുട്സാൽ."
          }
        ]
      },
      {
        "civWord": "Cricket",
        "civWordMal": "ക്രിക്കറ്റ്",
        "imposters": [
          {
            "word": "Baseball",
            "wordMal": "ബേസ്ബോൾ",
            "relationEN": "Both are bat-and-ball sports with bases/wickets.",
            "relationML": "രണ്ടും ബാറ്റും പന്തും ഉപയോഗിക്കുന്ന കളികളാണ്."
          },
          {
            "word": "Tennis",
            "wordMal": "ടെന്നീസ്",
            "relationEN": "Both involve striking a ball, though tennis uses a racket.",
            "relationML": "രണ്ടിലും പന്ത് അടിക്കുന്നതാണ് പ്രധാനം."
          }
        ]
      },
      {
        "civWord": "Kabaddi",
        "civWordMal": "കബഡി",
        "imposters": [
          {
            "word": "Wrestling",
            "wordMal": "ഗുസ്തി",
            "relationEN": "Both involve grappling and physical restraint.",
            "relationML": "രണ്ടിലും ശാരീരികമായ പിടുത്തവും ശക്തിയും ആവശ്യമാണ്."
          },
          {
            "word": "Kho Kho",
            "wordMal": "ഖോ ഖോ",
            "relationEN": "Both are traditional Indian tag sports.",
            "relationML": "രണ്ടും ഇന്ത്യയിലെ പരമ്പരാഗത ടാഗ് ഗെയിമുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Volleyball",
        "civWordMal": "വോളിബോൾ",
        "imposters": [
          {
            "word": "Basketball",
            "wordMal": "ബാസ്കറ്റ്ബോൾ",
            "relationEN": "Both are court games played with hands and a large ball.",
            "relationML": "രണ്ടും വലിയ പന്ത് ഉപയോഗിച്ച് കൈകൊണ്ട് കളിക്കുന്ന ഗെയിമുകളാണ്."
          },
          {
            "word": "Throwball",
            "wordMal": "ത്രോബോൾ",
            "relationEN": "Very similar net games, but throwball involves catching.",
            "relationML": "നെറ്റ് ഉപയോഗിച്ചുള്ള കളികളാണ്, ത്രോബോളിൽ പന്ത് പിടിക്കാം."
          }
        ]
      },
      {
        "civWord": "Vallamkali",
        "civWordMal": "വള്ളംകളി",
        "imposters": [
          {
            "word": "Rowing",
            "wordMal": "റോവിങ്",
            "relationEN": "Both are boat racing sports.",
            "relationML": "രണ്ടും വെള്ളത്തിലുള്ള വള്ളം തുഴയൽ മത്സരങ്ങളാണ്."
          },
          {
            "word": "Dragon Boat",
            "wordMal": "ഡ്രാഗൺ ബോട്ട്",
            "relationEN": "Both are traditional team boat races.",
            "relationML": "രണ്ടും പരമ്പരാഗത വള്ളംകളി മത്സരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Tug of War",
        "civWordMal": "വടംവലി",
        "imposters": [
          {
            "word": "Arm Wrestling",
            "wordMal": "പഞ്ചഗുസ്തി",
            "relationEN": "Both are pure strength-based pulling/pushing contests.",
            "relationML": "രണ്ടും ശക്തി പരീക്ഷിക്കുന്ന മത്സരങ്ങളാണ്."
          },
          {
            "word": "Weightlifting",
            "wordMal": "ഭാരോദ്വഹനം",
            "relationEN": "Both require immense physical strength and grip.",
            "relationML": "രണ്ടിലും വലിയ ശാരീരിക ശക്തി ആവശ്യമാണ്."
          }
        ]
      },
      {
        "civWord": "Sevens Football",
        "civWordMal": "സെവൻസ് ഫുട്ബോൾ",
        "imposters": [
          {
            "word": "Futsal",
            "wordMal": "ഫുട്സാൽ",
            "relationEN": "Both are smaller-format football variations.",
            "relationML": "രണ്ടും ഫുട്ബോളിന്റെ ചെറിയ രൂപങ്ങളാണ്."
          },
          {
            "word": "Beach Soccer",
            "wordMal": "ബീച്ച് സോക്കർ",
            "relationEN": "Both are informal, smaller-pitch football games.",
            "relationML": "രണ്ടും ചെറിയ മൈതാനത്ത് കളിക്കുന്ന ഫുട്ബോൾ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kho Kho",
        "civWordMal": "ഖോ ഖോ",
        "imposters": [
          {
            "word": "Kabaddi",
            "wordMal": "കബഡി",
            "relationEN": "Both are traditional Indian team tag games.",
            "relationML": "രണ്ടും ഇന്ത്യൻ പരമ്പരാഗത ടാഗ് ഗെയിമുകളാണ്."
          },
          {
            "word": "Hide and Seek",
            "wordMal": "ഒളിച്ചുകളി",
            "relationEN": "Both involve chasing and evading players.",
            "relationML": "രണ്ടും ഓടിയും ഒളിച്ചും കളിക്കുന്ന ഗെയിമുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Badminton",
        "civWordMal": "ബാഡ്മിന്റൺ",
        "imposters": [
          {
            "word": "Tennis",
            "wordMal": "ടെന്നീസ്",
            "relationEN": "Both are racket sports played over a net.",
            "relationML": "രണ്ടും നെറ്റിനു മുകളിലൂടെ റാക്കറ്റ് ഉപയോഗിച്ചു കളിക്കുന്നതാണ്."
          },
          {
            "word": "Squash",
            "wordMal": "സ്ക്വാഷ്",
            "relationEN": "Both are fast-paced racket sports.",
            "relationML": "രണ്ടും വേഗതയുള്ള റാക്കറ്റ് കളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Swimming",
        "civWordMal": "നീന്തൽ",
        "imposters": [
          {
            "word": "Water Polo",
            "wordMal": "വാട്ടർ പോളോ",
            "relationEN": "Both take place entirely in a swimming pool.",
            "relationML": "രണ്ടും നീന്തൽക്കുളത്തിൽ നടക്കുന്ന കായിക വിനോദങ്ങളാണ്."
          },
          {
            "word": "Diving",
            "wordMal": "ഡൈവിങ്",
            "relationEN": "Both are aquatic Olympic sports.",
            "relationML": "രണ്ടും വെള്ളത്തിലെ ഒളിമ്പിക് മത്സരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Athletics",
        "civWordMal": "അത്‌ലറ്റിക്സ്",
        "imposters": [
          {
            "word": "Gymnastics",
            "wordMal": "ജിംനാസ്റ്റിക്സ്",
            "relationEN": "Both involve individual physical feats and flexibility.",
            "relationML": "രണ്ടും ശാരീരിക വഴക്കവും കഴിവും വേണ്ട മത്സരങ്ങളാണ്."
          },
          {
            "word": "Triathlon",
            "wordMal": "ട്രയാത്ത്ലൺ",
            "relationEN": "Both are grueling physical endurance events.",
            "relationML": "രണ്ടും വലിയ ശാരീരിക ക്ഷമത വേണ്ടവയാണ്."
          }
        ]
      },
      {
        "civWord": "Javelin",
        "civWordMal": "ജാവലിൻ",
        "imposters": [
          {
            "word": "Shot Put",
            "wordMal": "ഷോട്ട് പുട്ട്",
            "relationEN": "Both are track and field throwing events.",
            "relationML": "രണ്ടും എറിയുന്ന അത്‌ലറ്റിക് മത്സരങ്ങളാണ്."
          },
          {
            "word": "Discus Throw",
            "wordMal": "ഡിസ്കസ് ത്രോ",
            "relationEN": "Both involve throwing objects for maximum distance.",
            "relationML": "ദൂരത്തേക്ക് വസ്തുക്കൾ എറിയുന്ന മത്സരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Relay",
        "civWordMal": "റിലേ",
        "imposters": [
          {
            "word": "Sprint",
            "wordMal": "സ്പ്രിന്റ്",
            "relationEN": "Both are fast-paced track running events.",
            "relationML": "രണ്ടും വേഗതയേറിയ ഓട്ടമത്സരങ്ങളാണ്."
          },
          {
            "word": "Marathon",
            "wordMal": "മാരത്തൺ",
            "relationEN": "Both are running events, though opposite in distance.",
            "relationML": "രണ്ടും ഓട്ടമത്സരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Boat Race",
        "civWordMal": "വള്ളംകളി",
        "imposters": [
          {
            "word": "Sailing",
            "wordMal": "സെയിലിംഗ്",
            "relationEN": "Both involve racing watercrafts.",
            "relationML": "രണ്ടും വെള്ളത്തിലുള്ള മത്സരങ്ങളാണ്."
          },
          {
            "word": "Canoeing",
            "wordMal": "കനോയിങ്",
            "relationEN": "Both involve paddling narrow boats.",
            "relationML": "തുഴ ഉപയോഗിച്ചുള്ള വള്ളംകളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Carrom",
        "civWordMal": "കാരംസ്",
        "imposters": [
          {
            "word": "Billiards",
            "wordMal": "ബില്യാർഡ്സ്",
            "relationEN": "Both involve striking pieces into pockets on a board/table.",
            "relationML": "രണ്ടും കുഴികളിലേക്ക് കരുക്കൾ അടിച്ചിടുന്ന കളിയാണ്."
          },
          {
            "word": "Chess",
            "wordMal": "ചെസ്സ്",
            "relationEN": "Both are classic indoor board games.",
            "relationML": "രണ്ടും വീടിനുള്ളിൽ കളിക്കുന്ന ബോർഡ് ഗെയിമുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Chess",
        "civWordMal": "ചെസ്സ്",
        "imposters": [
          {
            "word": "Checkers",
            "wordMal": "ചെക്കേഴ്സ്",
            "relationEN": "Both are strategic board games played on an 8x8 grid.",
            "relationML": "രണ്ടും ഒരേ ബോർഡിൽ കളിക്കുന്ന തന്ത്രപ്രധാനമായ ഗെയിമുകളാണ്."
          },
          {
            "word": "Ludo",
            "wordMal": "ലൂഡോ",
            "relationEN": "Both are popular tabletop games moving pieces.",
            "relationML": "രണ്ടും കരുക്കൾ നീക്കി കളിക്കുന്ന ബോർഡ് ഗെയിമുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Kalari",
        "civWordMal": "കളരി",
        "imposters": [
          {
            "word": "Karate",
            "wordMal": "കരാട്ടെ",
            "relationEN": "Both are traditional martial arts systems.",
            "relationML": "രണ്ടും ആയോധന കലകളാണ്."
          },
          {
            "word": "Kung Fu",
            "wordMal": "കുങ് ഫു",
            "relationEN": "Both are ancient combat fighting styles.",
            "relationML": "രണ്ടും പുരാതനമായ പോരാട്ട രീതികളാണ്."
          }
        ]
      },
      {
        "civWord": "Long Jump",
        "civWordMal": "ലോംഗ് ജമ്പ്",
        "imposters": [
          {
            "word": "Triple Jump",
            "wordMal": "ട്രിപ്പിൾ ജമ്പ്",
            "relationEN": "Both are horizontal jumping track events.",
            "relationML": "രണ്ടും ദൂരത്തേക്ക് ചാടുന്ന അത്‌ലറ്റിക് മത്സരങ്ങളാണ്."
          },
          {
            "word": "High Jump",
            "wordMal": "ഹൈ ജമ്പ്",
            "relationEN": "Both are primary jumping events in athletics.",
            "relationML": "രണ്ടും ചാട്ടമത്സരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "High Jump",
        "civWordMal": "ഹൈ ജമ്പ്",
        "imposters": [
          {
            "word": "Pole Vault",
            "wordMal": "പോൾ വാൾട്ട്",
            "relationEN": "Both involve clearing a high horizontal bar.",
            "relationML": "രണ്ടും ഉയരത്തിലുള്ള ബാറിന് മുകളിലൂടെയുള്ള ചാട്ടമാണ്."
          },
          {
            "word": "Hurdles",
            "wordMal": "ഹർഡിൽസ്",
            "relationEN": "Both involve jumping over obstacles.",
            "relationML": "തടസ്സങ്ങൾക്ക് മുകളിലൂടെ ചാടുന്ന കളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Throwball",
        "civWordMal": "ത്രോബോൾ",
        "imposters": [
          {
            "word": "Volleyball",
            "wordMal": "വോളിബോൾ",
            "relationEN": "Both are played over a net with similar courts.",
            "relationML": "രണ്ടും നെറ്റ് ഉപയോഗിച്ചുള്ള കോർട്ട് ഗെയിമുകളാണ്."
          },
          {
            "word": "Dodgeball",
            "wordMal": "ഡോഡ്ജ്ബോൾ",
            "relationEN": "Both involve throwing a ball directly at or over opponents.",
            "relationML": "രണ്ടിലും പന്ത് എറിയുന്നതാണ് പ്രധാനം."
          }
        ]
      },
      {
        "civWord": "Table Tennis",
        "civWordMal": "ടേബിൾ ടെന്നീസ്",
        "imposters": [
          {
            "word": "Tennis",
            "wordMal": "ടെന്നീസ്",
            "relationEN": "Table tennis is the miniature indoor version of tennis.",
            "relationML": "ടെന്നീസിന്റെ ചെറിയ രൂപമാണ് ടേബിൾ ടെന്നീസ്."
          },
          {
            "word": "Badminton",
            "wordMal": "ബാഡ്മിന്റൺ",
            "relationEN": "Both are light-weight racket games played indoors.",
            "relationML": "രണ്ടും റാക്കറ്റ് ഉപയോഗിച്ചുള്ള ഇൻഡോർ ഗെയിമുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Marathon",
        "civWordMal": "മാരത്തൺ",
        "imposters": [
          {
            "word": "Sprint",
            "wordMal": "സ്പ്രിന്റ്",
            "relationEN": "Both are running races, one endurance, one speed.",
            "relationML": "രണ്ടും ഓട്ടമത്സരങ്ങളാണ്."
          },
          {
            "word": "Cycling",
            "wordMal": "സൈക്ലിങ്",
            "relationEN": "Both are long-distance road endurance sports.",
            "relationML": "രണ്ടും റോഡിൽ നടക്കുന്ന ദീർഘദൂര മത്സരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Penalty Shootout",
        "civWordMal": "പെനാൽറ്റി ഷൂട്ടൗട്ട്",
        "imposters": [
          {
            "word": "Free Kick",
            "wordMal": "ഫ്രീ കിക്ക്",
            "relationEN": "Both are unopposed kicks in football.",
            "relationML": "രണ്ടും ഫുട്ബോളിലെ കിക്ക് അവസരങ്ങളാണ്."
          },
          {
            "word": "Corner Kick",
            "wordMal": "കോർണർ കിക്ക്",
            "relationEN": "Both are set-piece scoring opportunities in soccer.",
            "relationML": "രണ്ടും ഗോൾ നേടാനുള്ള അവസരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Trophy",
        "civWordMal": "ട്രോഫി",
        "imposters": [
          {
            "word": "Medal",
            "wordMal": "മെഡൽ",
            "relationEN": "Both are awards given to tournament winners.",
            "relationML": "രണ്ടും വിജയികൾക്ക് ലഭിക്കുന്ന പുരസ്കാരങ്ങളാണ്."
          },
          {
            "word": "Shield",
            "wordMal": "ഷീൽഡ്",
            "relationEN": "Both are physical prizes awarded to champions.",
            "relationML": "രണ്ടും ചാമ്പ്യന്മാർക്ക് നൽകുന്ന സമ്മാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Umpire",
        "civWordMal": "അമ്പയർ",
        "imposters": [
          {
            "word": "Referee",
            "wordMal": "റഫറി",
            "relationEN": "Both are officials who enforce game rules.",
            "relationML": "രണ്ടും കളിയുടെ നിയമങ്ങൾ നടപ്പാക്കുന്നവരാണ്."
          },
          {
            "word": "Coach",
            "wordMal": "കോച്ച്",
            "relationEN": "Both are non-playing figures crucial to a match.",
            "relationML": "രണ്ടും കളി നിയന്ത്രിക്കുന്ന പ്രധാന വ്യക്തികളാണ്."
          }
        ]
      },
      {
        "civWord": "Gallery",
        "civWordMal": "ഗാലറി",
        "imposters": [
          {
            "word": "Stadium",
            "wordMal": "സ്റ്റേഡിയം",
            "relationEN": "Gallery is the seating area within the stadium.",
            "relationML": "സ്റ്റേഡിയത്തിനുള്ളിലെ ഇരിപ്പിടങ്ങളാണ് ഗാലറി."
          },
          {
            "word": "Dugout",
            "wordMal": "ഡഗ്ഔട്ട്",
            "relationEN": "Both are seating areas for people watching the game.",
            "relationML": "രണ്ടും കളി കാണാൻ ഇരിക്കുന്ന സ്ഥലങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Kuttiyum Kolum",
        "civWordMal": "കുട്ടിയും കോലും",
        "imposters": [
          {
            "word": "Cricket",
            "wordMal": "ക്രിക്കറ്റ്",
            "relationEN": "Both involve striking a flying object with a stick/bat.",
            "relationML": "രണ്ടിലും ബാറ്റോ കോലോ ഉപയോഗിച്ച് അടിക്കുന്നതാണ്."
          },
          {
            "word": "Goli",
            "wordMal": "ഗോലി",
            "relationEN": "Both are traditional street games played by children.",
            "relationML": "രണ്ടും കുട്ടികൾ കളിക്കുന്ന നാടൻ കളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Kilithattu",
        "civWordMal": "കിളിത്തട്ട്",
        "imposters": [
          {
            "word": "Kabaddi",
            "wordMal": "കബഡി",
            "relationEN": "Both are traditional court games involving tagging.",
            "relationML": "രണ്ടും അതിർത്തി കടന്നുള്ള കളികളാണ്."
          },
          {
            "word": "Kho Kho",
            "wordMal": "ഖോ ഖോ",
            "relationEN": "Both are Indian tag games requiring agility.",
            "relationML": "രണ്ടും തൊട്ടുകളിക്കുന്ന നാടൻ വിനോദങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Talappanthukali",
        "civWordMal": "തലപ്പന്തുകളി",
        "imposters": [
          {
            "word": "Volleyball",
            "wordMal": "വോളിബോൾ",
            "relationEN": "Both involve hitting a ball with the hand/head.",
            "relationML": "രണ്ടിലും പന്ത് അടിച്ചു കളിക്കുന്നതാണ്."
          },
          {
            "word": "Football",
            "wordMal": "ഫുട്ബോൾ",
            "relationEN": "Both are outdoor ball games.",
            "relationML": "രണ്ടും മൈതാനത്ത് കളിക്കുന്ന പന്ത് കളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Nadan Panthu",
        "civWordMal": "നാടൻ പന്ത്",
        "imposters": [
          {
            "word": "Cricket Ball",
            "wordMal": "ക്രിക്കറ്റ് ബോൾ",
            "relationEN": "Both are hard leather-stitched balls.",
            "relationML": "രണ്ടും തുകൽ കൊണ്ടുണ്ടാക്കിയ പന്തുകളാണ്."
          },
          {
            "word": "Football",
            "wordMal": "ഫുട്ബോൾ",
            "relationEN": "Both are balls used in local outdoor games.",
            "relationML": "രണ്ടും കളിക്കാൻ ഉപയോഗിക്കുന്ന പന്തുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Goli",
        "civWordMal": "ഗോലി",
        "imposters": [
          {
            "word": "Billiards",
            "wordMal": "ബില്യാർഡ്സ്",
            "relationEN": "Both involve hitting spherical objects into targets.",
            "relationML": "രണ്ടിലും ഗോളങ്ങൾ ഉപയോഗിച്ചാണ് കളിക്കുന്നത്."
          },
          {
            "word": "Spinning Top",
            "wordMal": "പമ്പരം",
            "relationEN": "Both are classic childhood street toys.",
            "relationML": "രണ്ടും കുട്ടികളുടെ നാടൻ കളിപ്പാട്ടങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Lagori",
        "civWordMal": "ലഗോറി",
        "imposters": [
          {
            "word": "Bowling",
            "wordMal": "ബൗളിംഗ്",
            "relationEN": "Both involve knocking down a stack/set of targets.",
            "relationML": "രണ്ടിലും വസ്തുക്കളെ എറിഞ്ഞു വീഴ്ത്തുന്നതാണ്."
          },
          {
            "word": "Darts",
            "wordMal": "ഡാർട്ട്സ്",
            "relationEN": "Both are games of precision targeting.",
            "relationML": "രണ്ടും കൃത്യമായി ലക്ഷ്യത്തിൽ എറിയുന്ന കളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Arm Wrestling",
        "civWordMal": "പഞ്ചഗുസ്തി",
        "imposters": [
          {
            "word": "Wrestling",
            "wordMal": "ഗുസ്തി",
            "relationEN": "Arm wrestling is a focused subset of full wrestling.",
            "relationML": "ഗുസ്തിയുടെ ഒരു ചെറിയ രൂപമാണ് പഞ്ചഗുസ്തി."
          },
          {
            "word": "Weightlifting",
            "wordMal": "ഭാരോദ്വഹനം",
            "relationEN": "Both are tests of pure upper body strength.",
            "relationML": "രണ്ടിലും കൈക്കരുത്താണ് പരീക്ഷിക്കുന്നത്."
          }
        ]
      },
      {
        "civWord": "Kabaddi Court",
        "civWordMal": "കബഡി കോർട്ട്",
        "imposters": [
          {
            "word": "Wrestling Ring",
            "wordMal": "ഗുസ്തി റിംഗ്",
            "relationEN": "Both are marked areas for physical combat sports.",
            "relationML": "രണ്ടും ശാരീരിക മത്സരങ്ങൾക്കുള്ള വേദികളാണ്."
          },
          {
            "word": "Tennis Court",
            "wordMal": "ടെന്നീസ് കോർട്ട്",
            "relationEN": "Both are rectangular marked playing surfaces.",
            "relationML": "രണ്ടും കളിക്കുന്ന കോർട്ടുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Shuttle Racket",
        "civWordMal": "ഷട്ടിൽ റാക്കറ്റ്",
        "imposters": [
          {
            "word": "Tennis Racket",
            "wordMal": "ടെന്നീസ് റാക്കറ്റ്",
            "relationEN": "Both are stringed implements for hitting sports.",
            "relationML": "രണ്ടും കളിയിലുപയോഗിക്കുന്ന റാക്കറ്റുകളാണ്."
          },
          {
            "word": "Cricket Bat",
            "wordMal": "ക്രിക്കറ്റ് ബാറ്റ്",
            "relationEN": "Both are handheld striking tools in sports.",
            "relationML": "രണ്ടും കളിയിൽ അടിക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Foot Volley",
        "civWordMal": "ഫൂട്ട് വോളി",
        "imposters": [
          {
            "word": "Volleyball",
            "wordMal": "വോളിബോൾ",
            "relationEN": "Foot volley is volleyball played with the feet.",
            "relationML": "കാലുകൊണ്ട് കളിക്കുന്ന വോളിബോളാണ് ഫൂട്ട് വോളി."
          },
          {
            "word": "Sepak Takraw",
            "wordMal": "സെപാക് തക്രോ",
            "relationEN": "Both are net sports played by kicking a ball.",
            "relationML": "രണ്ടും കാലുകൊണ്ട് നെറ്റിന് മുകളിലൂടെ കളിക്കുന്നതാണ്."
          }
        ]
      }
    ]
  },
  {
    "id": "gulf",
    "name": "Gulf & NRI",
    "icon": "??",
    "words": [
      {
        "civWord": "Pravasi",
        "civWordMal": "പ്രവാസി",
        "imposters": [
          {
            "word": "Tourist",
            "wordMal": "വിനോദസഞ്ചാരി",
            "relationEN": "Both are people who travel to other countries.",
            "relationML": "രണ്ടും വിദേശരാജ്യങ്ങളിൽ പോകുന്നവരാണ്."
          },
          {
            "word": "Refugee",
            "wordMal": "അഭയാർത്ഥി",
            "relationEN": "Both leave their home country to live elsewhere.",
            "relationML": "രണ്ടും സ്വന്തം നാടുവിട്ട് ജീവിക്കുന്നവരാണ്."
          }
        ]
      },
      {
        "civWord": "Dubai",
        "civWordMal": "ദുബായ്",
        "imposters": [
          {
            "word": "Abu Dhabi",
            "wordMal": "അബുദാബി",
            "relationEN": "Both are major Emirates in the UAE.",
            "relationML": "രണ്ടും യുഎഇയിലെ പ്രശസ്തമായ നഗരങ്ങളാണ്."
          },
          {
            "word": "Doha",
            "wordMal": "ദോഹ",
            "relationEN": "Both are wealthy, modern Middle Eastern cities.",
            "relationML": "രണ്ടും ഗൾഫിലെ വലിയ നഗരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Gulf Money",
        "civWordMal": "ഗൾഫ് മണി",
        "imposters": [
          {
            "word": "Hawala",
            "wordMal": "ഹവാല",
            "relationEN": "Both refer to channels of sending money from abroad.",
            "relationML": "രണ്ടും വിദേശത്തുനിന്നും പണം അയക്കുന്നതുമായി ബന്ധപ്പെട്ടതാണ്."
          },
          {
            "word": "Salary",
            "wordMal": "ശമ്പളം",
            "relationEN": "Gulf money is essentially the salary earned abroad.",
            "relationML": "രണ്ടും ജോലി ചെയ്ത് ഉണ്ടാക്കുന്ന പണമാണ്."
          }
        ]
      },
      {
        "civWord": "Chakka",
        "civWordMal": "ചക്ക",
        "imposters": [
          {
            "word": "Manga",
            "wordMal": "മാങ്ങ",
            "relationEN": "Both are deeply nostalgic, traditional Kerala fruits.",
            "relationML": "രണ്ടും കേരളത്തിലെ നാടൻ പഴങ്ങളാണ്."
          },
          {
            "word": "Pazham",
            "wordMal": "പഴം",
            "relationEN": "Both are common household fruits in Kerala.",
            "relationML": "രണ്ടും മലയാളികളുടെ ഇഷ്ട പഴങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Naatilekku",
        "civWordMal": "നാട്ടിലേക്ക്",
        "imposters": [
          {
            "word": "Leave",
            "wordMal": "ലീവ്",
            "relationEN": "Going naatilekku implies taking a leave from work.",
            "relationML": "അവധിക്കാണ് നാട്ടിലേക്ക് പോകുന്നത്."
          },
          {
            "word": "Flight",
            "wordMal": "വിമാനം",
            "relationEN": "The journey home requires taking a flight.",
            "relationML": "നാട്ടിലേക്ക് പോകാൻ വിമാനമാണ് ആശ്രയം."
          }
        ]
      },
      {
        "civWord": "Abu Dhabi",
        "civWordMal": "അബുദാബി",
        "imposters": [
          {
            "word": "Dubai",
            "wordMal": "ദുബായ്",
            "relationEN": "Both are key cities in the United Arab Emirates.",
            "relationML": "രണ്ടും യുഎഇയിലെ പ്രശസ്ത നഗരങ്ങളാണ്."
          },
          {
            "word": "Riyadh",
            "wordMal": "റിയാദ്",
            "relationEN": "Both are capital cities in the Middle East.",
            "relationML": "രണ്ടും ഗൾഫ് രാജ്യങ്ങളുടെ തലസ്ഥാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Qatar",
        "civWordMal": "ഖത്തർ",
        "imposters": [
          {
            "word": "Oman",
            "wordMal": "ഒമാൻ",
            "relationEN": "Both are independent Arab Gulf nations.",
            "relationML": "രണ്ടും ഗൾഫിലെ സ്വതന്ത്ര രാജ്യങ്ങളാണ്."
          },
          {
            "word": "Bahrain",
            "wordMal": "ബഹ്റൈൻ",
            "relationEN": "Both are small, wealthy peninsular Gulf states.",
            "relationML": "രണ്ടും ഗൾഫിലെ ചെറിയ രാജ്യങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Saudi",
        "civWordMal": "സൗദി",
        "imposters": [
          {
            "word": "Yemen",
            "wordMal": "യെമൻ",
            "relationEN": "Both share the Arabian peninsula.",
            "relationML": "രണ്ടും അറേബ്യൻ ഉപദ്വീപിലുള്ള രാജ്യങ്ങളാണ്."
          },
          {
            "word": "Kuwait",
            "wordMal": "കുവൈറ്റ്",
            "relationEN": "Both are oil-rich Arab nations.",
            "relationML": "രണ്ടും ഗൾഫിലെ സമ്പന്ന രാജ്യങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Oman",
        "civWordMal": "ഒമാൻ",
        "imposters": [
          {
            "word": "Muscat",
            "wordMal": "മസ്കറ്റ്",
            "relationEN": "Muscat is the capital of Oman.",
            "relationML": "ഒമാന്റെ തലസ്ഥാനമാണ് മസ്കറ്റ്."
          },
          {
            "word": "UAE",
            "wordMal": "യുഎഇ",
            "relationEN": "Both are neighboring Gulf countries.",
            "relationML": "രണ്ടും അടുത്തടുത്തുള്ള ഗൾഫ് രാജ്യങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Bahrain",
        "civWordMal": "ബഹ്റൈൻ",
        "imposters": [
          {
            "word": "Qatar",
            "wordMal": "ഖത്തർ",
            "relationEN": "Both are small island/peninsular Gulf states.",
            "relationML": "രണ്ടും ചെറിയ ഗൾഫ് രാജ്യങ്ങളാണ്."
          },
          {
            "word": "Kuwait",
            "wordMal": "കുവൈറ്റ്",
            "relationEN": "Both are oil-producing Middle Eastern kingdoms.",
            "relationML": "രണ്ടും എണ്ണ സമ്പത്തുള്ള ഗൾഫ് രാജ്യങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Kuwait",
        "civWordMal": "കുവൈറ്റ്",
        "imposters": [
          {
            "word": "Dinar",
            "wordMal": "ദിനാർ",
            "relationEN": "The Kuwaiti Dinar is its famously high-value currency.",
            "relationML": "കുവൈറ്റിന്റെ നാണയമാണ് ദിനാർ."
          },
          {
            "word": "Saudi Arabia",
            "wordMal": "സൗദി അറേബ്യ",
            "relationEN": "Both are neighboring, oil-rich Arab states.",
            "relationML": "രണ്ടും അതിർത്തി പങ്കിടുന്ന ഗൾഫ് രാജ്യങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Visa",
        "civWordMal": "വിസ",
        "imposters": [
          {
            "word": "Passport",
            "wordMal": "പാസ്പോർട്ട്",
            "relationEN": "A visa is stamped inside a passport for travel.",
            "relationML": "പാസ്പോർട്ടിലാണ് വിസ പതിപ്പിക്കുന്നത്."
          },
          {
            "word": "Ticket",
            "wordMal": "ടിക്കറ്റ്",
            "relationEN": "Both are necessary documents for international flights.",
            "relationML": "രണ്ടും വിദേശ യാത്രയ്ക്ക് അത്യാവശ്യമാണ്."
          }
        ]
      },
      {
        "civWord": "Passport",
        "civWordMal": "പാസ്പോർട്ട്",
        "imposters": [
          {
            "word": "Emirates ID",
            "wordMal": "എമിറേറ്റ്സ് ഐഡി",
            "relationEN": "Both are official forms of identification abroad.",
            "relationML": "രണ്ടും തിരിച്ചറിയൽ രേഖകളാണ്."
          },
          {
            "word": "Boarding Pass",
            "wordMal": "ബോർഡിംഗ് പാസ്",
            "relationEN": "Both are essential travel documents at the airport.",
            "relationML": "രണ്ടും വിമാനത്താവളത്തിൽ വേണ്ട രേഖകളാണ്."
          }
        ]
      },
      {
        "civWord": "Airport",
        "civWordMal": "എയർപോർട്ട്",
        "imposters": [
          {
            "word": "Railway Station",
            "wordMal": "റെയിൽവേ സ്റ്റേഷൻ",
            "relationEN": "Both are major transport hubs.",
            "relationML": "രണ്ടും വലിയ യാത്രാ കേന്ദ്രങ്ങളാണ്."
          },
          {
            "word": "Runway",
            "wordMal": "റൺവേ",
            "relationEN": "The runway is a critical part of the airport.",
            "relationML": "എയർപോർട്ടിന്റെ ഭാഗമാണ് റൺവേ."
          }
        ]
      },
      {
        "civWord": "Remittance",
        "civWordMal": "റെമിറ്റൻസ്",
        "imposters": [
          {
            "word": "Exchange",
            "wordMal": "എക്സ്ചേഞ്ച്",
            "relationEN": "Remittances are sent through money exchanges.",
            "relationML": "എക്സ്ചേഞ്ച് വഴിയാണ് പണം നാട്ടിലേക്ക് അയക്കുന്നത്."
          },
          {
            "word": "Bank Transfer",
            "wordMal": "ബാങ്ക് ട്രാൻസ്ഫർ",
            "relationEN": "Both are methods of sending money across borders.",
            "relationML": "രണ്ടും പണം അയക്കാനുള്ള മാർഗ്ഗങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Duty Free",
        "civWordMal": "ഡ്യൂട്ടി ഫ്രീ",
        "imposters": [
          {
            "word": "Shopping Mall",
            "wordMal": "ഷോപ്പിംഗ് മാൾ",
            "relationEN": "Both are large retail shopping environments.",
            "relationML": "രണ്ടും ഷോപ്പിംഗ് കേന്ദ്രങ്ങളാണ്."
          },
          {
            "word": "Customs",
            "wordMal": "കസ്റ്റംസ്",
            "relationEN": "Duty free items bypass standard customs taxes.",
            "relationML": "രണ്ടും എയർപോർട്ടിലെ നികുതിയുമായി ബന്ധപ്പെട്ടതാണ്."
          }
        ]
      },
      {
        "civWord": "Perfume",
        "civWordMal": "പെർഫ്യൂം",
        "imposters": [
          {
            "word": "Attar",
            "wordMal": "അത്തർ",
            "relationEN": "Attar is a traditional, oil-based alternative to perfume.",
            "relationML": "രണ്ടും സുഗന്ധം പരത്തുന്നവയാണ്."
          },
          {
            "word": "Deodorant",
            "wordMal": "ഡിയോഡറന്റ്",
            "relationEN": "Both are used for personal fragrance.",
            "relationML": "രണ്ടും ശരീരത്തിൽ സുഗന്ധം നൽകാൻ ഉപയോഗിക്കുന്നു."
          }
        ]
      },
      {
        "civWord": "Dates",
        "civWordMal": "ഈത്തപ്പഴം",
        "imposters": [
          {
            "word": "Figs",
            "wordMal": "അത്തിപ്പഴം",
            "relationEN": "Both are sweet, dried Middle Eastern fruits.",
            "relationML": "രണ്ടും മധ്യപൂർവ്വേഷ്യയിലെ ഉണങ്ങിയ പഴങ്ങളാണ്."
          },
          {
            "word": "Almonds",
            "wordMal": "ബദാം",
            "relationEN": "Both are common Gulf souvenirs brought back home.",
            "relationML": "രണ്ടും ഗൾഫിൽ നിന്നും കൊണ്ടുവരുന്ന ഡ്രൈ ഫ്രൂട്ട്സാണ്."
          }
        ]
      },
      {
        "civWord": "Gold",
        "civWordMal": "സ്വർണം",
        "imposters": [
          {
            "word": "Diamond",
            "wordMal": "ഡയമണ്ട്",
            "relationEN": "Both are precious materials bought in Gulf souks.",
            "relationML": "രണ്ടും വിലകൂടിയ ആഭരണങ്ങളാണ്."
          },
          {
            "word": "Silver",
            "wordMal": "വെള്ളി",
            "relationEN": "Both are precious metals used for jewellery.",
            "relationML": "രണ്ടും ആഭരണങ്ങൾ ഉണ്ടാക്കാൻ ഉപയോഗിക്കുന്ന ലോഹങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Return Ticket",
        "civWordMal": "റിട്ടേൺ ടിക്കറ്റ്",
        "imposters": [
          {
            "word": "One-way Ticket",
            "wordMal": "വൺ-വേ ടിക്കറ്റ്",
            "relationEN": "The opposite booking of a return flight.",
            "relationML": "ഒരു വശത്തേക്ക് മാത്രമുള്ള യാത്രയാണ് വൺ-വേ."
          },
          {
            "word": "Boarding Pass",
            "wordMal": "ബോർഡിംഗ് പാസ്",
            "relationEN": "Both are documents needed to board the flight.",
            "relationML": "രണ്ടും വിമാനത്തിൽ കയറാൻ ആവശ്യമായ രേഖകളാണ്."
          }
        ]
      },
      {
        "civWord": "Norka",
        "civWordMal": "നോർക്ക",
        "imposters": [
          {
            "word": "Embassy",
            "wordMal": "എംബസി",
            "relationEN": "Both assist expatriates with bureaucratic needs.",
            "relationML": "രണ്ടും പ്രവാസികൾക്ക് സഹായം നൽകുന്ന സ്ഥാപനങ്ങളാണ്."
          },
          {
            "word": "Consulate",
            "wordMal": "കോൺസുലേറ്റ്",
            "relationEN": "Both deal with the welfare of citizens abroad.",
            "relationML": "വിദേശത്തുള്ള പൗരന്മാർക്ക് വേണ്ടിയുള്ള ഓഫീസുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Sharjah",
        "civWordMal": "ഷാർജ",
        "imposters": [
          {
            "word": "Ajman",
            "wordMal": "അജ്മാൻ",
            "relationEN": "Both are neighboring, more affordable Emirates.",
            "relationML": "രണ്ടും അടുത്തടുത്തുള്ള യുഎഇ നഗരങ്ങളാണ്."
          },
          {
            "word": "Dubai",
            "wordMal": "ദുബായ്",
            "relationEN": "Many live in Sharjah and commute to Dubai.",
            "relationML": "യുഎഇയിലെ പ്രശസ്തമായ നഗരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Baklava",
        "civWordMal": "ബക്ലാവ",
        "imposters": [
          {
            "word": "Kunafa",
            "wordMal": "കുനാഫ",
            "relationEN": "Both are incredibly sweet, syrupy Middle Eastern desserts.",
            "relationML": "രണ്ടും അറേബ്യൻ മധുരപലഹാരങ്ങളാണ്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Both are traditional, rich sweet treats.",
            "relationML": "രണ്ടും മധുരമുള്ള വിഭവങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Desert Safari",
        "civWordMal": "മരുഭൂമി സഫാരി",
        "imposters": [
          {
            "word": "Camel Ride",
            "wordMal": "ഒട്ടക സവാരി",
            "relationEN": "Camel rides are a core activity of a desert safari.",
            "relationML": "മരുഭൂമി സഫാരിയുടെ ഒരു ഭാഗമാണ് ഒട്ടക സവാരി."
          },
          {
            "word": "Dune Bashing",
            "wordMal": "ഡ്യൂൺ ബാഷിംഗ്",
            "relationEN": "Dune bashing is the thrill ride portion of the safari.",
            "relationML": "മരുഭൂമിയിലെ വാഹന യാത്രയാണ് ഡ്യൂൺ ബാഷിംഗ്."
          }
        ]
      },
      {
        "civWord": "Burj Khalifa",
        "civWordMal": "ബുർജ് ഖലീഫ",
        "imposters": [
          {
            "word": "Burj Al Arab",
            "wordMal": "ബുർജ് അൽ അറബ്",
            "relationEN": "Both are iconic, record-breaking Dubai landmarks.",
            "relationML": "രണ്ടും ദുബായിലെ പ്രശസ്തമായ കെട്ടിടങ്ങളാണ്."
          },
          {
            "word": "Eiffel Tower",
            "wordMal": "ഈഫൽ ടവർ",
            "relationEN": "Both are world-famous tourist tower attractions.",
            "relationML": "രണ്ടും ലോകപ്രശസ്തമായ ഉയരമുള്ള നിർമ്മിതികളാണ്."
          }
        ]
      },
      {
        "civWord": "Vacation Leave",
        "civWordMal": "അവധി / ലീവ്",
        "imposters": [
          {
            "word": "Resignation",
            "wordMal": "രാജി",
            "relationEN": "Both mean stopping work, one temporarily, one permanently.",
            "relationML": "രണ്ടും ജോലിയിൽ നിന്നും മാറിനിൽക്കുന്നതാണ്."
          },
          {
            "word": "Weekend",
            "wordMal": "വാരാന്ത്യം",
            "relationEN": "Both are periods of rest from work.",
            "relationML": "രണ്ടും ജോലിയില്ലാത്ത ദിവസങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Dubai Gold Souk",
        "civWordMal": "ദുബായ് ഗോൾഡ് സൂക്ക്",
        "imposters": [
          {
            "word": "Spice Souk",
            "wordMal": "സ്പൈസ് സൂക്ക്",
            "relationEN": "Both are famous traditional markets in old Dubai.",
            "relationML": "രണ്ടും ദുബായിലെ പ്രശസ്തമായ മാർക്കറ്റുകളാണ്."
          },
          {
            "word": "Jewellery Shop",
            "wordMal": "ജ്വല്ലറി",
            "relationEN": "The Gold Souk is essentially a massive street of jewellery shops.",
            "relationML": "സ്വർണ്ണക്കടകളുടെ വലിയൊരു ശേഖരമാണ് ഗോൾഡ് സൂക്ക്."
          }
        ]
      },
      {
        "civWord": "Khubus",
        "civWordMal": "കുബ്ബൂസ്",
        "imposters": [
          {
            "word": "Porotta",
            "wordMal": "പൊറോട്ട",
            "relationEN": "Both are flatbreads eaten heavily by Gulf expats.",
            "relationML": "പ്രവാസികൾ കഴിക്കുന്ന പ്രധാന റൊട്ടി വിഭവങ്ങളാണ്."
          },
          {
            "word": "Pita Bread",
            "wordMal": "പിറ്റാ ബ്രെഡ്",
            "relationEN": "Khubus is the Arabian variant of pita bread.",
            "relationML": "രണ്ടും ഒരേപോലെയുള്ള അറേബ്യൻ റൊട്ടികളാണ്."
          }
        ]
      },
      {
        "civWord": "Kafala",
        "civWordMal": "കഫാല",
        "imposters": [
          {
            "word": "Sponsorship",
            "wordMal": "സ്പോൺസർഷിപ്പ്",
            "relationEN": "Kafala translates directly to the sponsorship system.",
            "relationML": "കഫാല എന്നതിനർത്ഥം സ്പോൺസർഷിപ്പ് എന്നാണ്."
          },
          {
            "word": "Visa Rule",
            "wordMal": "വിസാ നിയമം",
            "relationEN": "Kafala dictates the visa rules for migrant workers.",
            "relationML": "രണ്ടും പ്രവാസികളുടെ ജോലി സംബന്ധമായ നിയമങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Perfume Attar",
        "civWordMal": "അത്തർ",
        "imposters": [
          {
            "word": "Oud",
            "wordMal": "ഊദ്",
            "relationEN": "Oud is a popular, strong fragrance used in attars.",
            "relationML": "അത്തറുകളിൽ ഉപയോഗിക്കുന്ന ഒരു സുഗന്ധമാണ് ഊദ്."
          },
          {
            "word": "Rose Water",
            "wordMal": "പനിനീർ",
            "relationEN": "Both are traditional fragrant liquids.",
            "relationML": "രണ്ടും സുഗന്ധമുള്ള ദ്രാവകങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Qatar Airways",
        "civWordMal": "ഖത്തർ എയർവേയ്സ്",
        "imposters": [
          {
            "word": "Emirates",
            "wordMal": "എമിറേറ്റ്സ്",
            "relationEN": "Both are luxury Middle Eastern airlines.",
            "relationML": "രണ്ടും ഗൾഫിലെ പ്രശസ്തമായ വിമാനക്കമ്പനികളാണ്."
          },
          {
            "word": "Air India",
            "wordMal": "എയർ ഇന്ത്യ",
            "relationEN": "Both airlines frequently fly NRIs back home.",
            "relationML": "പ്രവാസികൾ യാത്ര ചെയ്യാൻ ഉപയോഗിക്കുന്ന വിമാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Shawarma Machine",
        "civWordMal": "ഷവർമ്മ മെഷീൻ",
        "imposters": [
          {
            "word": "Grill",
            "wordMal": "ഗ്രിൽ",
            "relationEN": "Both are equipment used for roasting meat.",
            "relationML": "രണ്ടും ഇറച്ചി ചുട്ടെടുക്കാൻ ഉപയോഗിക്കുന്നതാണ്."
          },
          {
            "word": "Oven",
            "wordMal": "ഓവൻ",
            "relationEN": "Both cook meat using intense localized heat.",
            "relationML": "രണ്ടും ഭക്ഷണം പാകം ചെയ്യുന്ന യന്ത്രങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Oud Incense",
        "civWordMal": "ഊദ്",
        "imposters": [
          {
            "word": "Frankincense",
            "wordMal": "കുന്തിരിക്കം",
            "relationEN": "Both are traditional aromatic resins burned for smell.",
            "relationML": "രണ്ടും പുകച്ച് സുഗന്ധമുണ്ടാക്കുന്നവയാണ്."
          },
          {
            "word": "Bakhoor",
            "wordMal": "ബഖൂർ",
            "relationEN": "Bakhoor often contains oud to create its scent.",
            "relationML": "രണ്ടും അറേബ്യൻ സുഗന്ധദ്രവ്യങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Lablabi / Hummus",
        "civWordMal": "ഹുമുസ്",
        "imposters": [
          {
            "word": "Moutabal",
            "wordMal": "മുതബൽ",
            "relationEN": "Both are popular, creamy Middle Eastern dips.",
            "relationML": "രണ്ടും അറേബ്യൻ ഭക്ഷണത്തോടൊപ്പം കഴിക്കുന്നവയാണ്."
          },
          {
            "word": "Mayonnaise",
            "wordMal": "മയോണൈസ്",
            "relationEN": "Both are thick spreads often eaten with shawarma.",
            "relationML": "രണ്ടും ഷവർമ്മയ്ക്ക് ഒപ്പം കഴിക്കുന്നതാണ്."
          }
        ]
      },
      {
        "civWord": "Dirham Currency",
        "civWordMal": "ദിർഹം",
        "imposters": [
          {
            "word": "Riyal",
            "wordMal": "റിയാൽ",
            "relationEN": "Both are standard currencies used in Gulf countries.",
            "relationML": "രണ്ടും ഗൾഫ് രാജ്യങ്ങളിലെ നാണയങ്ങളാണ്."
          },
          {
            "word": "Rupee",
            "wordMal": "രൂപ",
            "relationEN": "Expats convert Dirhams into Rupees to send home.",
            "relationML": "ഗൾഫ് പണം നാട്ടിലേക്ക് രൂപയായാണ് അയക്കുന്നത്."
          }
        ]
      },
      {
        "civWord": "Emirates ID",
        "civWordMal": "എമിറേറ്റ്സ് ഐഡി",
        "imposters": [
          {
            "word": "Aadhaar Card",
            "wordMal": "ആധാർ കാർഡ്",
            "relationEN": "Both are biometric national identity cards.",
            "relationML": "രണ്ടും തിരിച്ചറിയൽ കാർഡുകളാണ്."
          },
          {
            "word": "Passport",
            "wordMal": "പാസ്പോർട്ട്",
            "relationEN": "Both are crucial identification documents for an expat.",
            "relationML": "രണ്ടും പ്രവാസികൾക്ക് പ്രധാനപ്പെട്ട രേഖകളാണ്."
          }
        ]
      }
    ]
  }
];
const intlPacks = [
  {
    "id": "intl_superheroes",
    "name": "Superheroes",
    "icon": "?????",
    "words": [
      {
        "civWord": "Spider-Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Venom",
            "wordMal": "",
            "relationEN": "Venom is Spider-Man's dark mirror and symbiote enemy.",
            "relationML": "സ്പൈഡർമാന്റെ പ്രധാന എതിരാളിയാണ് വെനം."
          },
          {
            "word": "Miles Morales",
            "wordMal": "",
            "relationEN": "Miles Morales is the other famous Spider-Man.",
            "relationML": "മറ്റൊരു പ്രശസ്തനായ സ്പൈഡർമാനാണ് മൈൽസ് മൊറേൽസ്."
          }
        ]
      },
      {
        "civWord": "Iron Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "War Machine",
            "wordMal": "",
            "relationEN": "War Machine uses a suit created by Iron Man.",
            "relationML": "അയൺ മാൻ നിർമ്മിച്ച സ്യൂട്ട് ഉപയോഗിക്കുന്ന ആളാണ് വാർ മെഷീൻ."
          },
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Both are billionaire playboys without inherent superpowers.",
            "relationML": "രണ്ടുപേരും പണക്കാരായ സാധാരണ മനുഷ്യരാണ്."
          }
        ]
      },
      {
        "civWord": "Captain America",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Winter Soldier",
            "wordMal": "",
            "relationEN": "Winter Soldier is Captain America's oldest best friend.",
            "relationML": "ക്യാപ്റ്റൻ അമേരിക്കയുടെ അടുത്ത സുഹൃത്താണ് വിന്റർ സോൾജിയർ."
          },
          {
            "word": "Red Guardian",
            "wordMal": "",
            "relationEN": "Red Guardian is the Russian equivalent to Captain America.",
            "relationML": "ക്യാപ്റ്റൻ അമേരിക്കയുടെ റഷ്യൻ പതിപ്പാണ് റെഡ് ഗാർഡിയൻ."
          }
        ]
      },
      {
        "civWord": "Wonder Woman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cheetah",
            "wordMal": "",
            "relationEN": "Cheetah is Wonder Woman's iconic arch-nemesis.",
            "relationML": "വണ്ടർ വുമണിന്റെ പ്രധാന ശത്രുവാണ് ചീറ്റ."
          },
          {
            "word": "Supergirl",
            "wordMal": "",
            "relationEN": "Both are extremely powerful female DC superheroes.",
            "relationML": "ഡിസി കോമിക്സിലെ കരുത്തരായ വനിതാ സൂപ്പർഹീറോകളാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Superman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "General Zod",
            "wordMal": "",
            "relationEN": "Both are surviving Kryptonians with identical powers.",
            "relationML": "രണ്ടുപേരും ഒരേ ഗ്രഹത്തിൽ നിന്നുള്ള ശക്തികളുള്ളവരാണ്."
          },
          {
            "word": "Homelander",
            "wordMal": "",
            "relationEN": "Homelander is an evil parody of Superman.",
            "relationML": "സൂപ്പർമാന്റെ വില്ലൻ രൂപമാണ് ഹോംലാൻഡർ."
          }
        ]
      },
      {
        "civWord": "Doctor Strange",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Doctor Fate",
            "wordMal": "",
            "relationEN": "Doctor Fate is DC's version of the Sorcerer Supreme.",
            "relationML": "ഡിസി കോമിക്സിലെ സമാനമായ മന്ത്രവാദിയാണ് ഡോക്ടർ ഫേറ്റ്."
          },
          {
            "word": "Baron Mordo",
            "wordMal": "",
            "relationEN": "Mordo is a fellow sorcerer and rival to Strange.",
            "relationML": "ഡോക്ടർ സ്ട്രേഞ്ചിന്റെ കൂടെ പഠിച്ച മാന്ത്രികനാണ് മോർഡോ."
          }
        ]
      },
      {
        "civWord": "Black Panther",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Killmonger",
            "wordMal": "",
            "relationEN": "Killmonger is Black Panther's cousin and challenger for the throne.",
            "relationML": "ബ്ലാക്ക് പാൻതറിന്റെ ബന്ധുവും ശത്രുവുമാണ് കിൽമോംഗർ."
          },
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Both are wealthy heroes wearing dark, animal-themed combat suits.",
            "relationML": "രണ്ടുപേരും കറുത്ത മൃഗങ്ങളുടെ രൂപമുള്ള സ്യൂട്ട് ധരിക്കുന്നവരാണ്."
          }
        ]
      },
      {
        "civWord": "Aquaman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Namor",
            "wordMal": "",
            "relationEN": "Namor is Marvel's equivalent ruler of Atlantis.",
            "relationML": "മാർവലിലെ സമാനമായ കടൽ രാജാവാണ് നെയ്മർ."
          },
          {
            "word": "Black Manta",
            "wordMal": "",
            "relationEN": "Black Manta is Aquaman's most iconic deadly rival.",
            "relationML": "അക്വാമാന്റെ പ്രധാന ശത്രുവാണ് ബ്ലാക്ക് മാന്റ."
          }
        ]
      },
      {
        "civWord": "Wolverine",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sabretooth",
            "wordMal": "",
            "relationEN": "Both are mutants with healing factors and animalistic rage.",
            "relationML": "രണ്ടുപേരും പെട്ടെന്ന് മുറിവുണങ്ങുന്ന ശക്തിയുള്ളവരാണ്."
          },
          {
            "word": "Deadpool",
            "wordMal": "",
            "relationEN": "Both possess weapon X healing factors and use bladed weapons.",
            "relationML": "രണ്ടുപേർക്കും അസാമാന്യമായ മുറിവുണങ്ങാനുള്ള കഴിവുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Deadpool",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Deathstroke",
            "wordMal": "",
            "relationEN": "Deadpool was originally created as a parody of DC's Deathstroke.",
            "relationML": "ഡിസിയുടെ ഡെത്ത്സ്ട്രോക്കിനെ അനുകരിച്ചാണ് ഡെഡ്പൂൾ ഉണ്ടായത്."
          },
          {
            "word": "Wolverine",
            "wordMal": "",
            "relationEN": "Both are Canadian mutants with extreme regenerative healing.",
            "relationML": "രണ്ടുപേർക്കും മരിക്കാത്ത ശരീരപ്രകൃതമുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Ant-Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "The Atom",
            "wordMal": "",
            "relationEN": "The Atom is DC's size-shrinking superhero equivalent.",
            "relationML": "ഡിസിയുടെ ചെറുതാകാൻ കഴിയുന്ന ഹീറോയാണ് ആറ്റം."
          },
          {
            "word": "Yellowjacket",
            "wordMal": "",
            "relationEN": "Yellowjacket uses similar shrinking technology for evil.",
            "relationML": "സമാനമായ ടെക്നോളജി ഉപയോഗിക്കുന്ന വില്ലനാണ് യെല്ലോജാക്കറ്റ്."
          }
        ]
      },
      {
        "civWord": "Shazam",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Black Adam",
            "wordMal": "",
            "relationEN": "Black Adam possesses the exact same magical powers as Shazam.",
            "relationML": "ഷസാമിന്റെ അതേ മാന്ത്രിക ശക്തികളുള്ള വില്ലനാണ് ബ്ലാക്ക് ആദം."
          },
          {
            "word": "Superman",
            "wordMal": "",
            "relationEN": "Both are caped, flying heroes with god-like strength.",
            "relationML": "രണ്ടുപേർക്കും പറക്കാനും അസാമാന്യ ശക്തിയുമുണ്ട്."
          }
        ]
      },
      {
        "civWord": "Falcon",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hawkman",
            "wordMal": "",
            "relationEN": "Both are bird-themed superheroes equipped with wings.",
            "relationML": "രണ്ടുപേരും ചിറകുകളുള്ള പറക്കുന്ന ഹീറോകളാണ്."
          },
          {
            "word": "Winter Soldier",
            "wordMal": "",
            "relationEN": "Both are Captain America's closest allies.",
            "relationML": "ക്യാപ്റ്റൻ അമേരിക്കയുടെ അടുത്ത കൂട്ടുകാരാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Groot",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Rocket Raccoon",
            "wordMal": "",
            "relationEN": "Rocket is Groot's inseparable best friend and partner.",
            "relationML": "ഗ്രൂട്ടിന്റെ ഏറ്റവും അടുത്ത കൂട്ടുകാരനാണ് റോക്കറ്റ്."
          },
          {
            "word": "King Shark",
            "wordMal": "",
            "relationEN": "Both are largely non-verbal CGI muscle for their teams.",
            "relationML": "രണ്ടുപേരും മൃഗരൂപമുള്ള വലിയ ശരീരമുള്ളവരാണ്."
          }
        ]
      },
      {
        "civWord": "Vision",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ultron",
            "wordMal": "",
            "relationEN": "Vision's body was originally created by Ultron.",
            "relationML": "അൾട്രോൺ ഉണ്ടാക്കിയ ശരീരമാണ് വിഷൻ."
          },
          {
            "word": "Martian Manhunter",
            "wordMal": "",
            "relationEN": "Both are floating, density-shifting, stoic alien/synthetic heroes.",
            "relationML": "രണ്ടുപേരും രൂപം മാറാൻ കഴിവുള്ള ഹീറോകളാണ്."
          }
        ]
      },
      {
        "civWord": "Green Arrow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hawkeye",
            "wordMal": "",
            "relationEN": "Both are master archers without inherent superpowers.",
            "relationML": "രണ്ടുപേരും അമ്പെയ്ത്തിൽ പ്രഗത്ഭരായ ഹീറോകളാണ്."
          },
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Both are billionaire vigilantes relying on gadgets.",
            "relationML": "രണ്ടുപേരും ആയുധങ്ങൾ ഉപയോഗിക്കുന്ന പണക്കാരാണ്."
          }
        ]
      },
      {
        "civWord": "Robin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nightwing",
            "wordMal": "",
            "relationEN": "Nightwing is the adult identity of the original Robin.",
            "relationML": "ആദ്യത്തെ റോബിൻ വലുതായപ്പോഴുള്ള പേരാണ് നൈറ്റ്വിംഗ്."
          },
          {
            "word": "Bucky Barnes",
            "wordMal": "",
            "relationEN": "Both are the most famous teenage sidekicks in comics.",
            "relationML": "രണ്ടുപേരും പ്രശസ്തരായ ഹീറോകളുടെ സഹായികളാണ്."
          }
        ]
      },
      {
        "civWord": "Supergirl",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Superman",
            "wordMal": "",
            "relationEN": "She is Superman's biological cousin from Krypton.",
            "relationML": "സൂപ്പർമാന്റെ സ്വന്തം സഹോദരിയാണ് സൂപ്പർഗേൾ."
          },
          {
            "word": "Batgirl",
            "wordMal": "",
            "relationEN": "Both are female counterparts to DC's two biggest heroes.",
            "relationML": "ഡിസിയുടെ പ്രശസ്ത ഹീറോകളുടെ വനിതാ പതിപ്പുകളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Aquaman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ocean Master",
            "wordMal": "",
            "relationEN": "Ocean Master is Aquaman's half-brother and rival for the throne.",
            "relationML": "അക്വാമാന്റെ അർദ്ധസഹോദരനും ശത്രുവുമാണ് ഓഷ്യൻ മാസ്റ്റർ."
          },
          {
            "word": "Mera",
            "wordMal": "",
            "relationEN": "Mera is Aquaman's wife and queen of Atlantis.",
            "relationML": "അക്വാമാന്റെ ഭാര്യയും രാജ്ഞിയുമാണ് മേര."
          }
        ]
      },
      {
        "civWord": "Star-Lord",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Yondu",
            "wordMal": "",
            "relationEN": "Yondu is Star-Lord's Ravager mentor and adoptive father figure.",
            "relationML": "സ്റ്റാർ-ലോർഡിനെ വളർത്തിയ അച്ഛൻ സ്ഥാനത്തുള്ളയാളാണ് യോണ്ടു."
          },
          {
            "word": "Nova",
            "wordMal": "",
            "relationEN": "Both are human-origin cosmic heroes in Marvel.",
            "relationML": "രണ്ടുപേരും ബഹിരാകാശത്ത് പ്രവർത്തിക്കുന്ന ഹീറോകളാണ്."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_villains",
    "name": "Famous Villains",
    "icon": "?????",
    "words": [
      {
        "civWord": "Joker",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Two-Face",
            "wordMal": "",
            "relationEN": "Both are horribly disfigured, iconic Batman rogues.",
            "relationML": "ബാറ്റ്മാന്റെ പ്രശസ്തരായ വില്ലന്മാരാണ് ഇവർ."
          },
          {
            "word": "Harley Quinn",
            "wordMal": "",
            "relationEN": "Harley Quinn was Joker's devoted accomplice and romantic partner.",
            "relationML": "ജോക്കറിന്റെ കൂടെ എപ്പോഴും ఉండే പങ്കാളിയാണ് ഹാർലി ക്വിൻ."
          }
        ]
      },
      {
        "civWord": "Darth Vader",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Kylo Ren",
            "wordMal": "",
            "relationEN": "Kylo Ren idolizes his grandfather, Darth Vader.",
            "relationML": "ഡാർത്ത് വെയ്ഡറിനെ ആരാധിക്കുന്ന വില്ലനാണ് കൈലോ റെൻ."
          },
          {
            "word": "Emperor Palpatine",
            "wordMal": "",
            "relationEN": "Palpatine is the master who manipulated Vader to the dark side.",
            "relationML": "ഡാർത്ത് വെയ്ഡറിനെ വില്ലനാക്കിയ പ്രധാന വില്ലനാണ് പാൽപറ്റീൻ."
          }
        ]
      },
      {
        "civWord": "Loki",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Thor",
            "wordMal": "",
            "relationEN": "Thor is Loki's adopted, purely heroic brother.",
            "relationML": "ലോകിയുടെ വളർത്തു സഹോദരനായ ഹീറോയാണ് തോർ."
          },
          {
            "word": "Sylvie",
            "wordMal": "",
            "relationEN": "Sylvie is a female variant of Loki from another timeline.",
            "relationML": "മറ്റൊരു ലോകത്തുനിന്നുള്ള ലോകിയുടെ വനിതാ രൂപമാണ് സിൽവി."
          }
        ]
      },
      {
        "civWord": "Lex Luthor",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Brainiac",
            "wordMal": "",
            "relationEN": "Both are super-intelligent, bald arch-enemies of Superman.",
            "relationML": "സൂപ്പർമാന്റെ ബുദ്ധിമാനായ ശത്രുക്കളാണ് ഇവർ."
          },
          {
            "word": "Kingpin",
            "wordMal": "",
            "relationEN": "Both are bald, wealthy, criminal businessmen with no powers.",
            "relationML": "സൂപ്പർ പവറില്ലാത്ത പണക്കാരായ വില്ലന്മാരാണിവർ."
          }
        ]
      },
      {
        "civWord": "Hannibal Lecter",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Norman Bates",
            "wordMal": "",
            "relationEN": "Both are iconic, highly intelligent cinematic serial killers.",
            "relationML": "സിനിമയിലെ പ്രശസ്തരായ സീരിയൽ കില്ലർമാരാണ് ഇവർ."
          },
          {
            "word": "Clarice Starling",
            "wordMal": "",
            "relationEN": "Clarice is the FBI agent who famously interrogates Hannibal.",
            "relationML": "ഹാനിബാളിനെ ചോദ്യം ചെയ്യുന്ന എഫ്ബിഐ ഉദ്യോഗസ്ഥയാണ് ക്ലാരീസ്."
          }
        ]
      },
      {
        "civWord": "Doctor Doom",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Magneto",
            "wordMal": "",
            "relationEN": "Both are complex Marvel villains who wear iconic metal helmets.",
            "relationML": "മാർവലിലെ പ്രശസ്തരായ ഇരുമ്പുതൊപ്പി വെക്കുന്ന വില്ലന്മാരാണ്."
          },
          {
            "word": "Mr. Fantastic",
            "wordMal": "",
            "relationEN": "Mr. Fantastic is Doom's intellectual rival and main enemy.",
            "relationML": "ഡോക്ടർ ഡൂമിന്റെ പ്രധാന ശത്രുവായ ഹീറോയാണ് ഇയാൾ."
          }
        ]
      },
      {
        "civWord": "Ultron",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Skynet",
            "wordMal": "",
            "relationEN": "Both are rogue artificial intelligences bent on human extinction.",
            "relationML": "മനുഷ്യരെ നശിപ്പിക്കാൻ ശ്രമിക്കുന്ന റോബോട്ടുകളാണ് ഇവർ."
          },
          {
            "word": "Vision",
            "wordMal": "",
            "relationEN": "Vision is the synthetic body Ultron built for himself.",
            "relationML": "അൾട്രോൺ സ്വന്തമായി ഉണ്ടാക്കിയ ശരീരമാണ് വിഷൻ."
          }
        ]
      },
      {
        "civWord": "Jafar",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Scar",
            "wordMal": "",
            "relationEN": "Both are manipulative Disney villains who usurp the throne.",
            "relationML": "രാജാവാകാൻ ശ്രമിക്കുന്ന ഡിസ്നി വില്ലന്മാരാണ് ഇവർ."
          },
          {
            "word": "Iago",
            "wordMal": "",
            "relationEN": "Iago is Jafar's loud-mouthed parrot henchman.",
            "relationML": "ജാഫറിന്റെ കൂടെയുള്ള തത്തയാണ് ഇയാഗോ."
          }
        ]
      },
      {
        "civWord": "Scar",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mufasa",
            "wordMal": "",
            "relationEN": "Mufasa is the brother Scar murders to become king.",
            "relationML": "സ്കാർ കൊലപ്പെടുത്തുന്ന സ്വന്തം സഹോദരനാണ് മുഫാസ."
          },
          {
            "word": "Shere Khan",
            "wordMal": "",
            "relationEN": "Both are sophisticated, evil feline Disney villains.",
            "relationML": "ഡിസ്നി കഥകളിലെ മൃഗരൂപമുള്ള വില്ലന്മാരാണിവർ."
          }
        ]
      },
      {
        "civWord": "Hans",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Gaston",
            "wordMal": "",
            "relationEN": "Both are handsome, seemingly perfect men who reveal evil natures.",
            "relationML": "കാണാൻ സുന്ദരന്മാരായ വില്ലന്മാരാണിവർ."
          },
          {
            "word": "Kristoff",
            "wordMal": "",
            "relationEN": "Both compete for Princess Anna's affection in Frozen.",
            "relationML": "ഫ്രോസൺ സിനിമയിലെ നായകനും വില്ലനുമാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Bane",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Venom",
            "wordMal": "",
            "relationEN": "Both rely on a chemical pumping into their bodies for super strength.",
            "relationML": "മരുന്ന് ഉപയോഗിച്ച് ശക്തി കൂട്ടുന്ന വില്ലന്മാരാണിവർ."
          },
          {
            "word": "Ra's al Ghul",
            "wordMal": "",
            "relationEN": "Bane was a member of Ra's al Ghul's League of Shadows.",
            "relationML": "രണ്ടുപേരും ഒരേ സംഘടനയിൽ പ്രവർത്തിച്ച വില്ലന്മാരാണ്."
          }
        ]
      },
      {
        "civWord": "Venom",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Carnage",
            "wordMal": "",
            "relationEN": "Carnage is the red, more psychopathic offspring of Venom.",
            "relationML": "വെനത്തിന്റെ ശരീരത്തിൽ നിന്നുണ്ടായ ഭീകരനായ വില്ലനാണ് കാർണേജ്."
          },
          {
            "word": "Spider-Man",
            "wordMal": "",
            "relationEN": "Venom's suit originally belonged to Spider-Man.",
            "relationML": "വെനം ഉപയോഗിക്കുന്ന സ്യൂട്ട് ആദ്യം സ്പൈഡർമാന്റേതായിരുന്നു."
          }
        ]
      },
      {
        "civWord": "Kingpin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Daredevil",
            "wordMal": "",
            "relationEN": "Daredevil is the vigilante who constantly fights Kingpin.",
            "relationML": "കിംഗ്പിന്നിന്റെ പ്രധാന ശത്രുവായ ഹീറോയാണ് ഡെയർഡെവിൾ."
          },
          {
            "word": "Bullseye",
            "wordMal": "",
            "relationEN": "Bullseye is Kingpin's chief psychotic assassin.",
            "relationML": "കിംഗ്പിന്നിന് വേണ്ടി കൊലപാതകങ്ങൾ ചെയ്യുന്ന ആളാണ് ബുൾസ്ഐ."
          }
        ]
      },
      {
        "civWord": "Sauron",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Saruman",
            "wordMal": "",
            "relationEN": "Saruman is the wizard corrupted into serving Sauron.",
            "relationML": "സോറോണിന് വേണ്ടി പണിയെടുക്കുന്ന മാന്ത്രികനാണ് സരുമാൻ."
          },
          {
            "word": "Voldemort",
            "wordMal": "",
            "relationEN": "Both are titular Dark Lords whose essence is tied to magical objects.",
            "relationML": "മാന്ത്രിക വസ്തുക്കളിൽ ജീവൻ സൂക്ഷിക്കുന്ന വലിയ വില്ലന്മാരാണിവർ."
          }
        ]
      },
      {
        "civWord": "Palpatine",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Darth Vader",
            "wordMal": "",
            "relationEN": "Vader is Palpatine's cyborg apprentice.",
            "relationML": "പാൽപറ്റീന്റെ കീഴിൽ പ്രവർത്തിക്കുന്ന വില്ലനാണ് ഡാർത്ത് വെയ്ഡർ."
          },
          {
            "word": "Snoke",
            "wordMal": "",
            "relationEN": "Snoke was a puppet ruler secretly created by Palpatine.",
            "relationML": "പാൽപറ്റീൻ ഉണ്ടാക്കിയെടുത്ത മറ്റൊരു വില്ലനാണ് സ്നോക്ക്."
          }
        ]
      },
      {
        "civWord": "Pennywise",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Freddy Krueger",
            "wordMal": "",
            "relationEN": "Both are supernatural entities who feed on the fear of children.",
            "relationML": "കുട്ടികളുടെ പേടി കണ്ട് രസിക്കുന്ന പ്രേത വില്ലന്മാരാണിവർ."
          },
          {
            "word": "The Babadook",
            "wordMal": "",
            "relationEN": "Both are terrifying monsters from modern horror cinema.",
            "relationML": "സിനിമയിലെ ഭയപ്പെടുത്തുന്ന രാക്ഷസന്മാരാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Jason Voorhees",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Michael Myers",
            "wordMal": "",
            "relationEN": "Both are silent, masked, unkillable slasher movie icons.",
            "relationML": "മുഖംമൂടി ധരിച്ച നിശബ്ദരായ കൊലയാളികളാണ് ഇരുവരും."
          },
          {
            "word": "Leatherface",
            "wordMal": "",
            "relationEN": "Both are hulking, mask-wearing horror movie killers.",
            "relationML": "ഹൊറർ സിനിമകളിലെ ക്രൂരരായ കൊലയാളികളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Agent Smith",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Neo",
            "wordMal": "",
            "relationEN": "Neo is the anomaly that Agent Smith is programmed to destroy.",
            "relationML": "ഏജന്റ് സ്മിത്തിന്റെ പ്രധാന ശത്രുവായ നായകനാണ് നിയോ."
          },
          {
            "word": "T-1000",
            "wordMal": "",
            "relationEN": "Both are relentless, emotionless program/machine assassins.",
            "relationML": "വികാരങ്ങളില്ലാത്ത റോബോട്ട് കൊലയാളികളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Boba Fett",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jango Fett",
            "wordMal": "",
            "relationEN": "Jango is the father whom Boba was cloned from.",
            "relationML": "ബോബ ഫെറ്റിന്റെ അച്ഛനായ മറ്റൊരു കൊലയാളിയാണ് ജാംഗോ."
          },
          {
            "word": "The Mandalorian",
            "wordMal": "",
            "relationEN": "Both wear iconic Beskar armor in the Star Wars universe.",
            "relationML": "സ്റ്റാർ വാർസ് സിനിമകളിൽ ഒരേപോലെയുള്ള വേഷം ധരിക്കുന്നവരാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Darth Maul",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Count Dooku",
            "wordMal": "",
            "relationEN": "Both are Sith apprentices to Emperor Palpatine.",
            "relationML": "പാൽപറ്റീന്റെ കീഴിലുള്ള വില്ലന്മാരാണിവർ."
          },
          {
            "word": "Obi-Wan Kenobi",
            "wordMal": "",
            "relationEN": "Obi-Wan is the Jedi who famously cut Maul in half.",
            "relationML": "ഡാർത്ത് മാളിനെ പരാജയപ്പെടുത്തിയ ഹീറോയാണ് ഒബി-വാൻ."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_movie_chars",
    "name": "Movie Characters",
    "icon": "??",
    "words": [
      {
        "civWord": "James Bond",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ethan Hunt",
            "wordMal": "",
            "relationEN": "Both are iconic cinematic super-spies known for stunts.",
            "relationML": "സിനിമയിലെ പ്രശസ്തരായ രഹസ്യാന്വേഷകരാണ് ഇവർ."
          },
          {
            "word": "Jason Bourne",
            "wordMal": "",
            "relationEN": "Both are deadly secret agents, though Bourne has amnesia.",
            "relationML": "രണ്ടുപേരും കഴിവുറ്റ ഏജന്റുമാരാണ്."
          }
        ]
      },
      {
        "civWord": "Indiana Jones",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lara Croft",
            "wordMal": "",
            "relationEN": "Both are adventurous archaeologists hunting ancient relics.",
            "relationML": "പുരാതന വസ്തുക്കൾ തേടിപ്പോകുന്ന സാഹസികരായ കഥാപാത്രങ്ങളാണ്."
          },
          {
            "word": "Nathan Drake",
            "wordMal": "",
            "relationEN": "Both are charming treasure hunters exploring ruins.",
            "relationML": "നിധി തേടിപ്പോകുന്ന സാഹസികരായ കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Jack Sparrow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Barbossa",
            "wordMal": "",
            "relationEN": "Barbossa is Jack's rival pirate captain of the Black Pearl.",
            "relationML": "ജാക്ക് സ്പാരോയുടെ ശത്രുവായ മറ്റൊരു കടൽക്കൊള്ളക്കാരനാണ്."
          },
          {
            "word": "Will Turner",
            "wordMal": "",
            "relationEN": "Will is the blacksmith who reluctantly partners with Jack.",
            "relationML": "ജാക്കിന്റെ കൂടെ യാത്ര ചെയ്യുന്ന നായകനാണ് വിൽ."
          }
        ]
      },
      {
        "civWord": "Forrest Gump",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jenny Curran",
            "wordMal": "",
            "relationEN": "Jenny is Forrest's lifelong, tragic love interest.",
            "relationML": "ഫോറസ്റ്റിന്റെ കാമുകിയായ കഥാപാത്രമാണ് ജെന്നി."
          },
          {
            "word": "Lieutenant Dan",
            "wordMal": "",
            "relationEN": "He is Forrest's commanding officer who loses his legs.",
            "relationML": "ഫോറസ്റ്റിന്റെ കൂടെയുള്ള പട്ടാള ഉദ്യോഗസ്ഥനാണ് ലെഫ്റ്റനന്റ് ഡാൻ."
          }
        ]
      },
      {
        "civWord": "Walter White",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tony Soprano",
            "wordMal": "",
            "relationEN": "Both are iconic anti-heroes leading criminal empires.",
            "relationML": "കുറ്റകൃത്യങ്ങൾ ചെയ്യുന്ന പ്രശസ്തരായ നായകന്മാരാണിവർ."
          },
          {
            "word": "Jesse Pinkman",
            "wordMal": "",
            "relationEN": "Jesse is Walter's former student and meth-cooking partner.",
            "relationML": "വാൾട്ടറിന്റെ കൂടെയുള്ള സഹായിയാണ് ജെസ്സി."
          }
        ]
      },
      {
        "civWord": "Don Corleone",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tony Montana",
            "wordMal": "",
            "relationEN": "Both are classic cinematic mob bosses, though opposite in style.",
            "relationML": "സിനിമയിലെ പ്രശസ്തരായ അധോലോക നായകന്മാരാണ് ഇവർ."
          },
          {
            "word": "Michael Corleone",
            "wordMal": "",
            "relationEN": "Michael is Don Corleone's son who inherits the mafia family.",
            "relationML": "ഡോൺ കോർലിയോണിന്റെ മകനാണ് മൈക്കിൾ."
          }
        ]
      },
      {
        "civWord": "Sherlock Holmes",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hercule Poirot",
            "wordMal": "",
            "relationEN": "Both are legendary, eccentric literary detectives.",
            "relationML": "ബുദ്ധിമാനായ പ്രശസ്ത കുറ്റാന്വേഷകരാണ് ഇവർ."
          },
          {
            "word": "Dr. Watson",
            "wordMal": "",
            "relationEN": "Watson is Sherlock's loyal friend and biographer.",
            "relationML": "ഷെർലക് ഹോംസിന്റെ സഹായിയാണ് വാട്സൺ."
          }
        ]
      },
      {
        "civWord": "Hannibal Lecter",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dexter Morgan",
            "wordMal": "",
            "relationEN": "Both are highly intelligent serial killers in pop culture.",
            "relationML": "ബുദ്ധിമാന്മാരായ കൊലയാളികളാണ് രണ്ടുപേരും."
          },
          {
            "word": "Clarice Starling",
            "wordMal": "",
            "relationEN": "She is the FBI student who interacts with Hannibal.",
            "relationML": "ഹാനിബാളിനെ ചോദ്യം ചെയ്യുന്ന ഉദ്യോഗസ്ഥയാണ് ക്ലാരീസ്."
          }
        ]
      },
      {
        "civWord": "Neo",
        "civWordMal": "",
        "imposters": [
          {
            "word": "John Wick",
            "wordMal": "",
            "relationEN": "Both are unstoppable cinematic heroes played by Keanu Reeves.",
            "relationML": "കിയാനു റീവ്സ് അഭിനയിച്ച പ്രശസ്ത കഥാപാത്രങ്ങളാണിവർ."
          },
          {
            "word": "Morpheus",
            "wordMal": "",
            "relationEN": "Morpheus is the mentor who frees Neo from the Matrix.",
            "relationML": "നിയോയെ സഹായിക്കുന്ന ഗുരുവാണ് മോർഫിയസ്."
          }
        ]
      },
      {
        "civWord": "Maximus",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Leonidas",
            "wordMal": "",
            "relationEN": "Both are ancient military leaders fighting to their death.",
            "relationML": "പുരാതന കാലത്തെ പ്രശസ്തരായ യോദ്ധാക്കളാണ് ഇവർ."
          },
          {
            "word": "Commodus",
            "wordMal": "",
            "relationEN": "Commodus is the evil emperor Maximus vows to kill.",
            "relationML": "മാക്സിമസിന്റെ ശത്രുവായ രാജാവാണ് കൊമോഡസ്."
          }
        ]
      },
      {
        "civWord": "Jack Dawson",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Rose DeWitt Bukater",
            "wordMal": "",
            "relationEN": "Rose is Jack's aristocratic lover on the Titanic.",
            "relationML": "ടൈറ്റാനിക് സിനിമയിൽ ജാക്കിന്റെ കാമുകിയാണ് റോസ്."
          },
          {
            "word": "Jay Gatsby",
            "wordMal": "",
            "relationEN": "Both are charming romantic leads played by DiCaprio.",
            "relationML": "ലിയനാർഡോ ഡികാപ്രിയോ അഭിനയിച്ച പ്രശസ്ത നായകന്മാരാണിവർ."
          }
        ]
      },
      {
        "civWord": "Edward Scissorhands",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Beetlejuice",
            "wordMal": "",
            "relationEN": "Both are pale, iconic characters directed by Tim Burton.",
            "relationML": "ടിം ബർട്ടൺ സിനിമകളിലെ പ്രശസ്ത കഥാപാത്രങ്ങളാണിവർ."
          },
          {
            "word": "Willy Wonka",
            "wordMal": "",
            "relationEN": "Both are eccentric, isolated characters played by Johnny Depp.",
            "relationML": "ജോണി ഡെപ്പ് അവതരിപ്പിച്ച വ്യത്യസ്തമായ കഥാപാത്രങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Harry Callahan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "John McClane",
            "wordMal": "",
            "relationEN": "Both are renegade cops who break the rules.",
            "relationML": "നിയമം പാലിക്കാത്ത ധീരരായ പോലീസുകാരാണിവർ."
          },
          {
            "word": "Martin Riggs",
            "wordMal": "",
            "relationEN": "Both are reckless, gun-toting cinematic police detectives.",
            "relationML": "സിനിമകളിലെ പ്രശസ്തരായ പോലീസുകാരാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Rocky Balboa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Apollo Creed",
            "wordMal": "",
            "relationEN": "Apollo is Rocky's initial rival turned best friend.",
            "relationML": "റോക്കിയുടെ ശത്രുവും പിന്നീട് സുഹൃത്തുമായ ബോക്സറാണ് അപ്പോളോ."
          },
          {
            "word": "Rambo",
            "wordMal": "",
            "relationEN": "Both are defining action roles played by Sylvester Stallone.",
            "relationML": "സിൽവസ്റ്റർ സ്റ്റാലോൺ അഭിനയിച്ച വമ്പൻ കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Tyler Durden",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Patrick Bateman",
            "wordMal": "",
            "relationEN": "Both are late 90s cinematic symbols of toxic masculinity.",
            "relationML": "സിനിമകളിലെ അക്രമാസക്തരായ കഥാപാത്രങ്ങളാണിവർ."
          },
          {
            "word": "The Narrator",
            "wordMal": "",
            "relationEN": "Tyler is the alter-ego hallucination of the Narrator.",
            "relationML": "നായകന്റെ മനസ്സിലെ മറ്റൊരു രൂപമാണ് ടൈലർ."
          }
        ]
      },
      {
        "civWord": "Marty McFly",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Doc Brown",
            "wordMal": "",
            "relationEN": "Doc is the eccentric inventor who builds Marty's time machine.",
            "relationML": "മാർട്ടിയുടെ കൂടെയുള്ള ശാസ്ത്രജ്ഞനാണ് ഡോക് ബ്രൗൺ."
          },
          {
            "word": "Biff Tannen",
            "wordMal": "",
            "relationEN": "Biff is the recurring bully who torments Marty.",
            "relationML": "മാർട്ടിയെ എപ്പോഴും ശല്യം ചെയ്യുന്ന വില്ലനാണ് ബിഫ്."
          }
        ]
      },
      {
        "civWord": "Harry Potter",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Luke Skywalker",
            "wordMal": "",
            "relationEN": "Both are young orphan farmboys/students destined to defeat evil.",
            "relationML": "തിന്മയെ തോൽപ്പിക്കാൻ നിയോഗിക്കപ്പെട്ട നായകന്മാരാണ് ഇവർ."
          },
          {
            "word": "Ron Weasley",
            "wordMal": "",
            "relationEN": "Ron is Harry's red-haired, loyal best friend.",
            "relationML": "ഹാരി പോട്ടറുടെ ഏറ്റവും അടുത്ത കൂട്ടുകാരനാണ് റോൺ."
          }
        ]
      },
      {
        "civWord": "Frodo Baggins",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Samwise Gamgee",
            "wordMal": "",
            "relationEN": "Sam is the loyal gardener who carries Frodo.",
            "relationML": "ഫ്രോഡോയെ സഹായിക്കുന്ന വിശ്വസ്തനായ സുഹൃത്താണ് സാം."
          },
          {
            "word": "Gollum",
            "wordMal": "",
            "relationEN": "Gollum is a corrupted hobbit obsessed with Frodo's ring.",
            "relationML": "മോതിരത്തിന് വേണ്ടി ഫ്രോഡോയുടെ കൂടെയുള്ള വില്ലനാണ് ഗൊല്ലം."
          }
        ]
      },
      {
        "civWord": "Aragorn",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Legolas",
            "wordMal": "",
            "relationEN": "Both are skilled warriors in the Fellowship of the Ring.",
            "relationML": "രണ്ടുപേരും പ്രശസ്തരായ പോരാളികളാണ്."
          },
          {
            "word": "Boromir",
            "wordMal": "",
            "relationEN": "Boromir is the flawed human companion to Aragorn.",
            "relationML": "അരഗോണിന്റെ കൂടെയുള്ള മറ്റൊരു യോദ്ധാവാണ് ബോറോമിർ."
          }
        ]
      },
      {
        "civWord": "Han Solo",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Chewbacca",
            "wordMal": "",
            "relationEN": "Chewbacca is Han's loyal Wookiee co-pilot.",
            "relationML": "ഹാൻ സോളോയുടെ കൂടെയുള്ള സുഹൃത്താണ് ച്യൂബാക്ക."
          },
          {
            "word": "Indiana Jones",
            "wordMal": "",
            "relationEN": "Both are iconic scoundrel characters played by Harrison Ford.",
            "relationML": "ഹാരിസൺ ഫോർഡ് അഭിനയിച്ച പ്രശസ്ത കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_tv_chars",
    "name": "TV Characters",
    "icon": "??",
    "words": [
      {
        "civWord": "Ross Geller",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Chandler Bing",
            "wordMal": "",
            "relationEN": "Both are male lead characters living across the hall in Friends.",
            "relationML": "ഫ്രണ്ട്സ് സീരീസിലെ നായക കഥാപാത്രങ്ങളാണിവർ."
          },
          {
            "word": "Rachel Green",
            "wordMal": "",
            "relationEN": "Rachel is Ross's infamous on-and-off romantic partner.",
            "relationML": "റോസിന്റെ കാമുകിയായ കഥാപാത്രമാണ് റേച്ചൽ."
          }
        ]
      },
      {
        "civWord": "Michael Scott",
        "civWordMal": "",
        "imposters": [
          {
            "word": "David Brent",
            "wordMal": "",
            "relationEN": "David Brent is the UK original version of Michael Scott.",
            "relationML": "മൈക്കിൾ സ്കോട്ടിന്റെ യുകെ സീരീസ് രൂപമാണ് ഡേവിഡ് ബ്രെന്റ്."
          },
          {
            "word": "Dwight Schrute",
            "wordMal": "",
            "relationEN": "Dwight is Michael's eccentric, sycophantic subordinate.",
            "relationML": "മൈക്കിളിന്റെ കീഴിൽ ജോലി ചെയ്യുന്ന വിചിത്ര സ്വഭാവമുള്ള ആളാണ് ഡ്വൈറ്റ്."
          }
        ]
      },
      {
        "civWord": "Walter White",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jesse Pinkman",
            "wordMal": "",
            "relationEN": "Jesse is Walter's former student and meth-cooking partner.",
            "relationML": "വാൾട്ടറിന്റെ കൂടെയുള്ള സഹായിയാണ് ജെസ്സി."
          },
          {
            "word": "Saul Goodman",
            "wordMal": "",
            "relationEN": "Saul is the sleazy lawyer who helps launder Walter's money.",
            "relationML": "വാൾട്ടറിനെ സഹായിക്കുന്ന വക്കീലാണ് സോൾ ഗുഡ്മാൻ."
          }
        ]
      },
      {
        "civWord": "Jon Snow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Daenerys Targaryen",
            "wordMal": "",
            "relationEN": "Both are leaders of major houses who fall in love.",
            "relationML": "ഗെയിം ഓഫ് ത്രോൺസിലെ പ്രശസ്തരായ രണ്ട് നായക കഥാപാത്രങ്ങളാണ്."
          },
          {
            "word": "Robb Stark",
            "wordMal": "",
            "relationEN": "Robb is Jon Snow's half-brother and King in the North.",
            "relationML": "ജോൺ സ്നോയുടെ സഹോദരനായ രാജാവാണ് റോബ് സ്റ്റാർക്ക്."
          }
        ]
      },
      {
        "civWord": "Sheldon Cooper",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Leonard Hofstadter",
            "wordMal": "",
            "relationEN": "Leonard is Sheldon's long-suffering, nerdy roommate.",
            "relationML": "ഷെൽഡന്റെ കൂടെ താമസിക്കുന്ന സുഹൃത്താണ് ലിയോനാർഡ്."
          },
          {
            "word": "Spock",
            "wordMal": "",
            "relationEN": "Spock is the hyper-logical sci-fi character Sheldon idolizes.",
            "relationML": "ഷെൽഡൻ ആരാധിക്കുന്ന പ്രശസ്ത സയൻസ് ഫിക്ഷൻ കഥാപാത്രമാണ് സ്പോക്ക്."
          }
        ]
      },
      {
        "civWord": "Ted Mosby",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Barney Stinson",
            "wordMal": "",
            "relationEN": "Barney is Ted's womanizing, suit-wearing friend.",
            "relationML": "ടെഡിന്റെ സുഹൃത്തായ രസികൻ കഥാപാത്രമാണ് ബാർണി."
          },
          {
            "word": "Ross Geller",
            "wordMal": "",
            "relationEN": "Both are nerdy, hopelessly romantic sitcom protagonists.",
            "relationML": "രണ്ടുപേരും പ്രണയം തേടി നടക്കുന്ന സമാനമായ കഥാപാത്രങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Homer Simpson",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Peter Griffin",
            "wordMal": "",
            "relationEN": "Both are dim-witted, overweight animated sitcom fathers.",
            "relationML": "അനിമേഷൻ സീരീസുകളിലെ മണ്ടന്മാരായ അച്ഛന്മാരാണ് ഇവർ."
          },
          {
            "word": "Bart Simpson",
            "wordMal": "",
            "relationEN": "Bart is Homer's rebellious, prankster son.",
            "relationML": "ഹോമർ സിംസണിന്റെ മകനാണ് ബാർട്ട്."
          }
        ]
      },
      {
        "civWord": "Sherlock Holmes",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dr. Watson",
            "wordMal": "",
            "relationEN": "Watson is Sherlock's loyal companion and chronicler.",
            "relationML": "ഷെർലക്കിന്റെ വിശ്വസ്തനായ സുഹൃത്താണ് വാട്സൺ."
          },
          {
            "word": "Moriarty",
            "wordMal": "",
            "relationEN": "Moriarty is Sherlock's equally brilliant criminal nemesis.",
            "relationML": "ഷെർലക്കിന്റെ ബുദ്ധിമാനായ വില്ലനാണ് മോറിയാർട്ടി."
          }
        ]
      },
      {
        "civWord": "Tony Stark",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Steve Rogers",
            "wordMal": "",
            "relationEN": "Steve is the righteous leader who frequently clashes with Tony.",
            "relationML": "ടോണി സ്റ്റാർക്കിന്റെ കൂടെയുള്ള മറ്റൊരു പ്രശസ്ത ഹീറോയാണ് സ്റ്റീവ്."
          },
          {
            "word": "Bruce Wayne",
            "wordMal": "",
            "relationEN": "Both are billionaire playboys who build their superhero suits.",
            "relationML": "രണ്ടുപേരും പണക്കാരായ ഹീറോകളാണ്."
          }
        ]
      },
      {
        "civWord": "Dwight Schrute",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jim Halpert",
            "wordMal": "",
            "relationEN": "Jim is the coworker who constantly pranks Dwight.",
            "relationML": "ഡ്വൈറ്റിനെ എപ്പോഴും കളിയാക്കുന്ന സുഹൃത്താണ് ജിം."
          },
          {
            "word": "Ron Swanson",
            "wordMal": "",
            "relationEN": "Both are rugged, intense workplace sitcom characters.",
            "relationML": "സീരീസുകളിലെ ഗൗരവക്കാരായ കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Dexter Morgan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jack Bauer",
            "wordMal": "",
            "relationEN": "Both are intense TV protagonists living double lives.",
            "relationML": "രഹസ്യ ജീവിതം നയിക്കുന്ന സീരീസ് നായകന്മാരാണിവർ."
          },
          {
            "word": "Hannibal Lecter",
            "wordMal": "",
            "relationEN": "Both are pop culture's most famous sympathetic serial killers.",
            "relationML": "രണ്ടുപേരും ബുദ്ധിമാന്മാരായ കൊലയാളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Don Draper",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tony Soprano",
            "wordMal": "",
            "relationEN": "Both are flawed, iconic male leads from the Golden Age of TV.",
            "relationML": "ടിവി സീരീസുകളിലെ പ്രശസ്തരായ നായകന്മാരാണിവർ."
          },
          {
            "word": "Peggy Olson",
            "wordMal": "",
            "relationEN": "Peggy is Don's protégé who rises through the ad agency.",
            "relationML": "ഡോണിന്റെ കീഴിൽ പഠിച്ചുവന്ന കഥാപാത്രമാണ് പെഗ്ഗി."
          }
        ]
      },
      {
        "civWord": "Cersei Lannister",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sansa Stark",
            "wordMal": "",
            "relationEN": "Sansa is the captive girl who learns manipulation from Cersei.",
            "relationML": "സെർസിയുടെ ശത്രുവായ മറ്റൊരു പ്രധാന കഥാപാത്രമാണ് സാൻസ."
          },
          {
            "word": "Margaery Tyrell",
            "wordMal": "",
            "relationEN": "Margaery is Cersei's younger, beautiful political rival.",
            "relationML": "സെർസിയോട് മത്സരിക്കുന്ന മറ്റൊരു രാജ്ഞിയാണ് മാർജറി."
          }
        ]
      },
      {
        "civWord": "Tyrion Lannister",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jaime Lannister",
            "wordMal": "",
            "relationEN": "Jaime is Tyrion's handsome, knightly older brother.",
            "relationML": "ടിരിയന്റെ സ്വന്തം സഹോദരനാണ് ജെയ്മി."
          },
          {
            "word": "Varys",
            "wordMal": "",
            "relationEN": "Both are cunning, intellectual players of the political game.",
            "relationML": "ബുദ്ധി ഉപയോഗിച്ച് കളിക്കുന്നവരാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Rachel Green",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Monica Geller",
            "wordMal": "",
            "relationEN": "Monica is Rachel's high school friend and obsessive roommate.",
            "relationML": "റേച്ചലിന്റെ അടുത്ത കൂട്ടുകാരിയാണ് മോണിക്ക."
          },
          {
            "word": "Penny",
            "wordMal": "",
            "relationEN": "Both are the pretty, non-nerdy female leads of their sitcoms.",
            "relationML": "സീരീസുകളിലെ സുന്ദരികളായ നായികമാരാണിവർ."
          }
        ]
      },
      {
        "civWord": "Joey Tribbiani",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Phoebe Buffay",
            "wordMal": "",
            "relationEN": "Both are the quirky, less intellectual members of the Friends group.",
            "relationML": "ഫ്രണ്ട്സ് സീരീസിലെ വിചിത്ര സ്വഭാവമുള്ള കൂട്ടുകാരാണിവർ."
          },
          {
            "word": "Barney Stinson",
            "wordMal": "",
            "relationEN": "Both are the designated womanizers of their friend groups.",
            "relationML": "സീരീസുകളിലെ സമാന സ്വഭാവമുള്ള കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Jim Halpert",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pam Beesly",
            "wordMal": "",
            "relationEN": "Pam is Jim's long-time crush and eventual wife.",
            "relationML": "ജിമ്മിന്റെ കാമുകിയായ കഥാപാത്രമാണ് പാം."
          },
          {
            "word": "Ben Wyatt",
            "wordMal": "",
            "relationEN": "Both are the sarcastic, straight-man voices of reason in their shows.",
            "relationML": "രണ്ടുപേരും സീരീസുകളിലെ സമാനമായ നായകന്മാരാണ്."
          }
        ]
      },
      {
        "civWord": "Michael Bluth",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Gob Bluth",
            "wordMal": "",
            "relationEN": "Gob is Michael's arrogant, failed magician older brother.",
            "relationML": "മൈക്കിളിന്റെ സഹോദരനാണ് ഗോബ്."
          },
          {
            "word": "Lucille Bluth",
            "wordMal": "",
            "relationEN": "Lucille is Michael's manipulative, alcoholic mother.",
            "relationML": "മൈക്കിളിന്റെ അമ്മയാണ് ലൂസിൽ."
          }
        ]
      },
      {
        "civWord": "George Costanza",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cosmo Kramer",
            "wordMal": "",
            "relationEN": "Kramer is the eccentric, erratic neighbor to George's best friend.",
            "relationML": "ജോർജിന്റെ സുഹൃത്തായ വിചിത്ര കഥാപാത്രമാണ് ക്രാമർ."
          },
          {
            "word": "Jerry Seinfeld",
            "wordMal": "",
            "relationEN": "Jerry is George's more successful, rational best friend.",
            "relationML": "ജോർജിന്റെ ഏറ്റവും അടുത്ത സുഹൃത്താണ് ജെറി."
          }
        ]
      },
      {
        "civWord": "Homer Simpson",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Marge Simpson",
            "wordMal": "",
            "relationEN": "Marge is Homer's patient, blue-haired wife.",
            "relationML": "ഹോമറിന്റെ ഭാര്യയാണ് മാർജ്."
          },
          {
            "word": "Ned Flanders",
            "wordMal": "",
            "relationEN": "Ned is Homer's overly religious, annoyingly perfect neighbor.",
            "relationML": "ഹോമറിന്റെ അയൽക്കാരനായ കഥാപാത്രമാണ് നെഡ് ഫ്ലാൻഡേഴ്സ്."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_food",
    "name": "Famous Foods",
    "icon": "??",
    "words": [
      {
        "civWord": "Pizza",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Calzone",
            "wordMal": "കാൽസോൺ",
            "relationEN": "Both are Italian baked dishes made from dough, cheese, and tomato sauce.",
            "relationML": "രണ്ടും മാവ്, ചീസ്, തക്കാളി സോസ് എന്നിവയിൽ നിന്ന് ഉണ്ടാക്കുന്ന ഇറ്റാലിയൻ വിഭവങ്ങളാണ്."
          },
          {
            "word": "Flatbread",
            "wordMal": "ഫ്ലാറ്റ്ബ്രെഡ്",
            "relationEN": "Both are flat, baked dough items often topped with savory ingredients.",
            "relationML": "രണ്ടും പരന്നതും ചുട്ടതുമായ വിഭവങ്ങളാണ്, മുകളിൽ പലവിധ സാധനങ്ങൾ ചേർക്കുന്നു."
          }
        ]
      },
      {
        "civWord": "Sushi",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sashimi",
            "wordMal": "സാഷിമി",
            "relationEN": "Both are Japanese dishes involving raw fish, but one has rice and the other doesn't.",
            "relationML": "രണ്ടും ജാപ്പനീസ് മത്സ്യ വിഭവങ്ങളാണ്, എന്നാൽ ഒന്നിൽ അരിയുണ്ട്, മറ്റൊന്നിൽ ഇല്ല."
          },
          {
            "word": "Onigiri",
            "wordMal": "ഒനിഗിരി",
            "relationEN": "Both are traditional Japanese foods made primarily of shaped rice and seaweed.",
            "relationML": "രണ്ടും ജാപ്പനീസ് അരി വിഭവങ്ങളാണ്, സാധാരണയായി കടൽപ്പായൽ കൊണ്ട് പൊതിഞ്ഞിരിക്കുന്നു."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_animals",
    "name": "Animals",
    "icon": "??",
    "words": [
      {
        "civWord": "Lion",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Panther",
            "wordMal": "പാന്തർ",
            "relationEN": "Both are large, dangerous wild felines known as apex predators.",
            "relationML": "രണ്ടും വന്യമായ വലിയ പൂച്ച വർഗ്ഗങ്ങളാണ്."
          },
          {
            "word": "Hyena",
            "wordMal": "കഴുതപ്പുലി",
            "relationEN": "Both are African savanna predators that often compete for the same prey.",
            "relationML": "രണ്ടും ആഫ്രിക്കൻ കാടുകളിലെ വേട്ടക്കാരാണ്."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_famous_people",
    "name": "Famous People",
    "icon": "??",
    "words": [
      {
        "civWord": "Albert Einstein",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Marie Curie",
            "wordMal": "മേരി ക്യൂറി",
            "relationEN": "Both are legendary physicists who won Nobel Prizes.",
            "relationML": "ഇരുവരും നൊബേൽ സമ്മാനം നേടിയ പ്രശസ്തരായ ഭൗതികശാസ്ത്രജ്ഞരാണ്."
          },
          {
            "word": "Stephen Hawking",
            "wordMal": "സ്റ്റീഫൻ ഹോക്കിംഗ്",
            "relationEN": "Both are iconic theoretical physicists.",
            "relationML": "ഇരുവരും പ്രശസ്തരായ സൈദ്ധാന്തിക ഭൗതികശാസ്ത്രജ്ഞരാണ്."
          }
        ]
      },
      {
        "civWord": "Leonardo da Vinci",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Vincent van Gogh",
            "wordMal": "വിൻസെന്റ് വാൻ ഗോഗ്",
            "relationEN": "Both are globally recognized legendary European painters.",
            "relationML": "ഇരുവരും ലോകപ്രശസ്തരായ യൂറോപ്യൻ ചിത്രകാരന്മാരാണ്."
          },
          {
            "word": "Pablo Picasso",
            "wordMal": "പാബ്ലോ പിക്കാസോ",
            "relationEN": "Both revolutionized the world of visual arts.",
            "relationML": "ഇരുവരും കലാരംഗത്ത് വിപ്ലവം സൃഷ്ടിച്ചവരാണ്."
          }
        ]
      },
      {
        "civWord": "Shakespeare",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Charles Dickens",
            "wordMal": "ചാൾസ് ഡിക്കൻസ്",
            "relationEN": "Both are foundational figures in classical English literature.",
            "relationML": "ഇരുവരും ക്ലാസിക്കൽ ഇംഗ്ലീഷ് സാഹിത്യത്തിലെ പ്രധാന വ്യക്തികളാണ്."
          },
          {
            "word": "Jane Austen",
            "wordMal": "ജെയ്ൻ ഓസ്റ്റൺ",
            "relationEN": "Both are renowned English writers with deeply analyzed works.",
            "relationML": "ഇരുവരും പ്രശസ്തരായ ഇംഗ്ലീഷ് എഴുത്തുകാരാണ്."
          }
        ]
      },
      {
        "civWord": "Napoleon",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Julius Caesar",
            "wordMal": "ജൂലിയസ് സീസർ",
            "relationEN": "Both were powerful military commanders who built vast empires.",
            "relationML": "ഇരുവരും വലിയ സാമ്രാജ്യങ്ങൾ കെട്ടിപ്പടുത്ത ശക്തരായ സൈനിക മേധാവികളായിരുന്നു."
          },
          {
            "word": "Alexander the Great",
            "wordMal": "അലക്സാണ്ടർ ചക്രവർത്തി",
            "relationEN": "Both are legendary conquerors from European history.",
            "relationML": "ഇരുവരും യൂറോപ്യൻ ചരിത്രത്തിലെ പ്രശസ്തരായ പോരാളികളാണ്."
          }
        ]
      },
      {
        "civWord": "Mahatma Gandhi",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nelson Mandela",
            "wordMal": "നെൽസൺ മണ്ടേല",
            "relationEN": "Both are global icons of peaceful resistance and anti-colonialism.",
            "relationML": "ഇരുവരും സമാധാനപരമായ ചെറുത്തുനിൽപ്പിന്റെ ലോകപ്രശസ്തരായ പ്രതീകങ്ങളാണ്."
          },
          {
            "word": "Martin Luther King Jr.",
            "wordMal": "മാർട്ടിൻ ലൂഥർ കിംഗ്",
            "relationEN": "Both fought for civil rights using non-violent methods.",
            "relationML": "ഇരുവരും അഹിംസയിലൂടെ പൗരാവകാശങ്ങൾക്കായി പോരാടിയവരാണ്."
          }
        ]
      },
      {
        "civWord": "Abraham Lincoln",
        "civWordMal": "",
        "imposters": [
          {
            "word": "George Washington",
            "wordMal": "ജോർജ്ജ് വാഷിംഗ്ടൺ",
            "relationEN": "Both are widely revered foundational US Presidents.",
            "relationML": "ഇരുവരും അമേരിക്കയുടെ പ്രശസ്തരായ പ്രസിഡന്റുമാരാണ്."
          },
          {
            "word": "John F. Kennedy",
            "wordMal": "ജോൺ എഫ് കെന്നഡി",
            "relationEN": "Both are famous US Presidents who were tragically assassinated.",
            "relationML": "ഇരുവരും കൊല്ലപ്പെട്ട പ്രശസ്തരായ അമേരിക്കൻ പ്രസിഡന്റുമാരാണ്."
          }
        ]
      },
      {
        "civWord": "Cleopatra",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nefertiti",
            "wordMal": "നെഫെർറ്റിറ്റി",
            "relationEN": "Both are legendary queens from ancient Egyptian history.",
            "relationML": "ഇരുവരും പുരാതന ഈജിപ്ഷ്യൻ ചരിത്രത്തിലെ പ്രശസ്തരായ രാജ്ഞിമാരാണ്."
          },
          {
            "word": "Joan of Arc",
            "wordMal": "ജോവാൻ ഓഫ് ആർക്ക്",
            "relationEN": "Both are iconic female historical figures who led their nations.",
            "relationML": "ഇരുവരും തങ്ങളുടെ രാജ്യങ്ങളെ നയിച്ച പ്രശസ്തരായ വനിതകളാണ്."
          }
        ]
      },
      {
        "civWord": "Mozart",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Beethoven",
            "wordMal": "ബീഥോവൻ",
            "relationEN": "Both are highly celebrated classical music composers.",
            "relationML": "ഇരുവരും വളരെ പ്രശസ്തരായ ക്ലാസിക്കൽ സംഗീതജ്ഞരാണ്."
          },
          {
            "word": "Bach",
            "wordMal": "ബാക്ക്",
            "relationEN": "Both are legendary composers from the classical era.",
            "relationML": "ക്ലാസിക്കൽ കാലഘട്ടത്തിലെ പ്രശസ്തരായ സംഗീതജ്ഞരാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Nikola Tesla",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Thomas Edison",
            "wordMal": "തോമസ് എഡിസൺ",
            "relationEN": "Both are famous inventors associated with early electrical engineering.",
            "relationML": "ഇരുവരും ആദ്യകാല ഇലക്ട്രിക്കൽ എഞ്ചിനീയറിംഗുമായി ബന്ധപ്പെട്ട പ്രശസ്തരായ കണ്ടുപിടുത്തക്കാരാണ്."
          },
          {
            "word": "Alexander Graham Bell",
            "wordMal": "അലക്സാണ്ടർ ഗ്രഹാം ബെൽ",
            "relationEN": "Both made groundbreaking contributions to modern technology.",
            "relationML": "ഇരുവരും ആധുനിക സാങ്കേതികവിദ്യയ്ക്ക് മികച്ച സംഭാവനകൾ നൽകിയവരാണ്."
          }
        ]
      },
      {
        "civWord": "Sigmund Freud",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Carl Jung",
            "wordMal": "കാൾ യുങ്",
            "relationEN": "Both are pioneering figures in the field of psychology and psychoanalysis.",
            "relationML": "ഇരുവരും മനശാസ്ത്രരംഗത്തെ പ്രശസ്തരായ വ്യക്തികളാണ്."
          },
          {
            "word": "Ivan Pavlov",
            "wordMal": "ഇവാൻ പാവ്‌ലോവ്",
            "relationEN": "Both conducted foundational research in human behavior.",
            "relationML": "ഇരുവരും മനുഷ്യ സ്വഭാവത്തെക്കുറിച്ച് അടിസ്ഥാന ഗവേഷണങ്ങൾ നടത്തിയവരാണ്."
          }
        ]
      },
      {
        "civWord": "Charles Darwin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Isaac Newton",
            "wordMal": "ഐസക് ന്യൂട്ടൺ",
            "relationEN": "Both are British scientists who fundamentally changed our understanding of nature.",
            "relationML": "പ്രകൃതിയെക്കുറിച്ചുള്ള നമ്മുടെ ധാരണ മാറ്റിയെഴുതിയ ബ്രിട്ടീഷ് ശാസ്ത്രജ്ഞരാണ് ഇരുവരും."
          },
          {
            "word": "Galileo Galilei",
            "wordMal": "ഗലീലിയോ ഗലീലി",
            "relationEN": "Both are legendary scientists who challenged historical beliefs.",
            "relationML": "ചരിത്രപരമായ വിശ്വാസങ്ങളെ ചോദ്യം ചെയ്ത പ്രശസ്തരായ ശാസ്ത്രജ്ഞരാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Pablo Picasso",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Salvador Dalí",
            "wordMal": "സാൽവഡോർ ദാലി",
            "relationEN": "Both are legendary Spanish artists known for surreal and abstract works.",
            "relationML": "ഇരുവരും വിചിത്രമായ സൃഷ്ടികൾക്ക് പേരുകേട്ട പ്രശസ്തരായ സ്പാനിഷ് കലാകാരന്മാരാണ്."
          },
          {
            "word": "Claude Monet",
            "wordMal": "ക്ലോഡ് മോനെറ്റ്",
            "relationEN": "Both are iconic painters who started major art movements.",
            "relationML": "പ്രധാനപ്പെട്ട കലാ മുന്നേറ്റങ്ങൾക്ക് തുടക്കം കുറിച്ച പ്രശസ്തരായ ചിത്രകാരന്മാരാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Alexander the Great",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Genghis Khan",
            "wordMal": "ചെങ്കിസ് ഖാൻ",
            "relationEN": "Both are ancient conquerors who established massive empires.",
            "relationML": "വിശാലമായ സാമ്രാജ്യങ്ങൾ സ്ഥാപിച്ച പുരാതന പോരാളികളാണ് ഇരുവരും."
          },
          {
            "word": "Julius Caesar",
            "wordMal": "ജൂലിയസ് സീസർ",
            "relationEN": "Both are legendary military leaders of antiquity.",
            "relationML": "ഇരുവരും പുരാതന കാലത്തെ പ്രശസ്തരായ സൈനിക നേതാക്കളാണ്."
          }
        ]
      },
      {
        "civWord": "Martin Luther King",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Malcolm X",
            "wordMal": "മാൽക്കം എക്സ്",
            "relationEN": "Both are prominent leaders of the American civil rights movement.",
            "relationML": "ഇരുവരും അമേരിക്കൻ പൗരാവകാശ പ്രസ്ഥാനത്തിലെ പ്രമുഖ നേതാക്കളാണ്."
          },
          {
            "word": "Rosa Parks",
            "wordMal": "റോസ പാർക്സ്",
            "relationEN": "Both are iconic figures who fought against racial discrimination.",
            "relationML": "വംശീയ വിവേചനത്തിനെതിരെ പോരാടിയ പ്രശസ്തരായ വ്യക്തികളാണ് ഇരുവരും."
          }
        ]
      },
      {
        "civWord": "Stephen Hawking",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Albert Einstein",
            "wordMal": "ആൽബർട്ട് ഐൻസ്റ്റീൻ",
            "relationEN": "Both are legendary theoretical physicists known worldwide.",
            "relationML": "ഇരുവരും ലോകമെമ്പാടും അറിയപ്പെടുന്ന പ്രശസ്തരായ സൈദ്ധാന്തിക ഭൗതികശാസ്ത്രജ്ഞരാണ്."
          },
          {
            "word": "Richard Feynman",
            "wordMal": "റിച്ചാർഡ് ഫെയ്ൻമാൻ",
            "relationEN": "Both are modern physicists who popularized complex science.",
            "relationML": "സങ്കീർണ്ണമായ ശാസ്ത്രത്തെ ജനകീയമാക്കിയ ആധുനിക ഭൗതികശാസ്ത്രജ്ഞരാണ് ഇരുവരും."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_common_objects",
    "name": "Everyday Objects",
    "icon": "??",
    "words": [
      {
        "civWord": "Phone",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tablet",
            "wordMal": "ടാബ്‌ലെറ്റ്",
            "relationEN": "Both are touchscreen smart devices used for daily communication.",
            "relationML": "ദൈനംദിന ആശയവിനിമയത്തിനായി ഉപയോഗിക്കുന്ന സ്മാർട്ട് ഉപകരണങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Laptop",
            "wordMal": "ലാപ്‌ടോപ്പ്",
            "relationEN": "Both are portable electronic devices used for work and media.",
            "relationML": "ജോലിക്കും വിനോദത്തിനുമായി ഉപയോഗിക്കുന്ന പോർട്ടബിൾ ഇലക്ട്രോണിക് ഉപകരണങ്ങളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Chair",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sofa",
            "wordMal": "സോഫ",
            "relationEN": "Both are common types of seating furniture found in living rooms.",
            "relationML": "സ്വീകരണമുറികളിൽ കാണപ്പെടുന്ന ഇരിപ്പിടങ്ങളാണ് ഇവ രണ്ടും."
          },
          {
            "word": "Stool",
            "wordMal": "സ്റ്റൂൾ",
            "relationEN": "Both are basic furniture pieces designed for one person to sit on.",
            "relationML": "ഒരാൾക്ക് ഇരിക്കാൻ രൂപകൽപ്പന ചെയ്ത അടിസ്ഥാന ഫർണിച്ചറുകളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Laptop",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Desktop Computer",
            "wordMal": "ഡെസ്ക്ടോപ്പ് കമ്പ്യൂട്ടർ",
            "relationEN": "Both are primary computing devices used for daily work and browsing.",
            "relationML": "ദൈനംദിന ജോലികൾക്കായി ഉപയോഗിക്കുന്ന പ്രധാന കമ്പ്യൂട്ടിംഗ് ഉപകരണങ്ങളാണ് ഇവ."
          },
          {
            "word": "Tablet",
            "wordMal": "ടാബ്‌ലെറ്റ്",
            "relationEN": "Both are portable computing devices with screens.",
            "relationML": "സ്ക്രീനുള്ള പോർട്ടബിൾ കമ്പ്യൂട്ടിംഗ് ഉപകരണങ്ങളാണ് ഇവ രണ്ടും."
          }
        ]
      },
      {
        "civWord": "Umbrella",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Raincoat",
            "wordMal": "റെയിൻകോട്ട്",
            "relationEN": "Both are essential items used specifically for protection against rain.",
            "relationML": "മഴയിൽ നിന്ന് സംരക്ഷണം നേടാൻ ഉപയോഗിക്കുന്ന അവശ്യവസ്തുക്കളാണ് ഇവ."
          },
          {
            "word": "Parasol",
            "wordMal": "പാരാസോൾ",
            "relationEN": "Both are portable canopies used for protection against weather.",
            "relationML": "കാലാവസ്ഥയിൽ നിന്ന് സംരക്ഷണം നൽകുന്ന ഉപകരണങ്ങളാണ് ഇവ രണ്ടും."
          }
        ]
      },
      {
        "civWord": "Toothbrush",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Toothpaste",
            "wordMal": "ടൂത്ത് പേസ്റ്റ്",
            "relationEN": "Both are essential daily items used directly for dental hygiene.",
            "relationML": "ദന്ത ശുചിത്വത്തിനായി ഉപയോഗിക്കുന്ന അവശ്യ ദൈനംദിന വസ്തുക്കളാണ് ഇവ."
          },
          {
            "word": "Floss",
            "wordMal": "ഫ്ലോസ്",
            "relationEN": "Both are necessary tools used for cleaning teeth.",
            "relationML": "പല്ല് വൃത്തിയാക്കാൻ ഉപയോഗിക്കുന്ന അത്യാവശ്യ ഉപകരണങ്ങളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Clock",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Watch",
            "wordMal": "വാച്ച്",
            "relationEN": "Both are common devices specifically designed to tell the time.",
            "relationML": "സമയം അറിയാൻ പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത സാധാരണ ഉപകരണങ്ങളാണ് ഇവ."
          },
          {
            "word": "Hourglass",
            "wordMal": "മണൽഘടികാരം",
            "relationEN": "Both are traditional timekeeping devices.",
            "relationML": "പരമ്പരാഗതമായി സമയം അളക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണങ്ങളാണ് ഇവ രണ്ടും."
          }
        ]
      },
      {
        "civWord": "Mirror",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Window",
            "wordMal": "ജനൽ",
            "relationEN": "Both are common household installations made of clear or reflective glass.",
            "relationML": "ഗ്ലാസ് കൊണ്ട് നിർമ്മിച്ച വീട്ടുപകരണങ്ങളാണ് ഇവ രണ്ടും."
          },
          {
            "word": "Glass",
            "wordMal": "ഗ്ലാസ്",
            "relationEN": "Both are fragile glass objects found in bathrooms and bedrooms.",
            "relationML": "ബാത്ത്റൂമുകളിലും കിടപ്പുമുറികളിലും കാണപ്പെടുന്ന ഗ്ലാസ് വസ്തുക്കളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Pillow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Blanket",
            "wordMal": "പുതപ്പ്",
            "relationEN": "Both are soft bedding items essential for a comfortable sleep.",
            "relationML": "സുഖപ്രദമായ ഉറക്കത്തിന് ആവശ്യമായ മൃദുവായ കിടക്ക ഉപകരണങ്ങളാണ് ഇവ."
          },
          {
            "word": "Cushion",
            "wordMal": "കുഷ്യൻ",
            "relationEN": "Both are soft, stuffed items placed on furniture for comfort.",
            "relationML": "സൗകര്യത്തിനായി ഫർണിച്ചറുകളിൽ ഉപയോഗിക്കുന്ന മൃദുവായ വസ്തുക്കളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Key",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lock",
            "wordMal": "പൂട്ട്",
            "relationEN": "Both are essential metal components of a typical security mechanism.",
            "relationML": "സുരക്ഷാ സംവിധാനത്തിന്റെ അത്യാവശ്യ ലോഹ ഭാഗങ്ങളാണ് ഇവ."
          },
          {
            "word": "Padlock",
            "wordMal": "പാഡ്‌ലോക്ക്",
            "relationEN": "Both are hardware items used to secure doors and boxes.",
            "relationML": "വാതിലുകളും പെട്ടികളും സുരക്ഷിതമാക്കാൻ ഉപയോഗിക്കുന്ന വസ്തുക്കളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Pen",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pencil",
            "wordMal": "പെൻസിൽ",
            "relationEN": "Both are basic handheld writing instruments used every day in schools and offices.",
            "relationML": "സ്കൂളുകളിലും ഓഫീസുകളിലും ഉപയോഗിക്കുന്ന അടിസ്ഥാന എഴുത്തുപകരണങ്ങളാണ് ഇവ."
          },
          {
            "word": "Marker",
            "wordMal": "മാർക്കർ",
            "relationEN": "Both are common stationery items used for drawing or writing.",
            "relationML": "എഴുതാനും വരയ്ക്കാനും ഉപയോഗിക്കുന്ന സാധാരണ സ്റ്റേഷനറി വസ്തുക്കളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Book",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Notebook",
            "wordMal": "നോട്ട്ബുക്ക്",
            "relationEN": "Both are bound collections of paper pages used for reading or writing.",
            "relationML": "വായിക്കാനോ എഴുതാനോ ഉപയോഗിക്കുന്ന കടലാസ് താളുകളുടെ ശേഖരങ്ങളാണ് ഇവ."
          },
          {
            "word": "Magazine",
            "wordMal": "മാസിക",
            "relationEN": "Both are common printed reading materials.",
            "relationML": "സാധാരണയായി അച്ചടിച്ച വായനാ സാമഗ്രികളാണ് ഇവ രണ്ടും."
          }
        ]
      },
      {
        "civWord": "Glasses",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Contact Lens",
            "wordMal": "കോൺടാക്റ്റ് ലെൻസ്",
            "relationEN": "Both are common optical items worn to correct or protect vision.",
            "relationML": "കാഴ്ച ശരിയാക്കാനോ സംരക്ഷിക്കാനോ ധരിക്കുന്ന വസ്തുക്കളാണ് ഇവ."
          },
          {
            "word": "Sunglasses",
            "wordMal": "സൺഗ്ലാസ്സ്",
            "relationEN": "Both are wearable items placed over the eyes.",
            "relationML": "കണ്ണുകൾക്ക് മുകളിൽ ധരിക്കുന്ന ഉപകരണങ്ങളാണ് ഇവ രണ്ടും."
          }
        ]
      },
      {
        "civWord": "Wallet",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Purse",
            "wordMal": "പേഴ്സ്",
            "relationEN": "Both are common personal accessories used for carrying money and cards.",
            "relationML": "പണവും കാർഡുകളും കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്ന വ്യക്തിഗത സാധനങ്ങളാണ് ഇവ."
          },
          {
            "word": "Backpack",
            "wordMal": "ബാക്ക്പാക്ക്",
            "relationEN": "Both are daily carry items designed to hold personal belongings.",
            "relationML": "വ്യക്തിപരമായ സാധനങ്ങൾ സൂക്ഷിക്കാൻ ഉപയോഗിക്കുന്ന വസ്തുക്കളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Fork",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Spoon",
            "wordMal": "സ്പൂൺ",
            "relationEN": "Both are standard metal dining utensils used for eating meals.",
            "relationML": "ഭക്ഷണം കഴിക്കാൻ ഉപയോഗിക്കുന്ന സാധാരണ ലോഹ ഉപകരണങ്ങളാണ് ഇവ."
          },
          {
            "word": "Knife",
            "wordMal": "കത്തി",
            "relationEN": "Both are common pieces of cutlery found in any kitchen.",
            "relationML": "ഏതൊരു അടുക്കളയിലും കാണപ്പെടുന്ന സാധാരണ ഉപകരണങ്ങളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Candle",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Torch",
            "wordMal": "ടോർച്ച്",
            "relationEN": "Both are common portable sources of light used during power outages.",
            "relationML": "വൈദ്യുതി തടസ്സങ്ങളിൽ ഉപയോഗിക്കുന്ന സാധാരണ പോർട്ടബിൾ വെളിച്ച സ്രോതസ്സുകളാണ് ഇവ."
          },
          {
            "word": "Lantern",
            "wordMal": "റാന്തൽ",
            "relationEN": "Both are traditional tools used to illuminate dark spaces.",
            "relationML": "ഇരുണ്ട ഇടങ്ങൾ പ്രകാശിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന പരമ്പരാഗത ഉപകരണങ്ങളാണ് ഇവ."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_nature",
    "name": "Nature",
    "icon": "??",
    "words": [
      {
        "civWord": "Ocean",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sea",
            "wordMal": "കടൽ",
            "relationEN": "Both are massive, naturally occurring bodies of saltwater.",
            "relationML": "ഭൂമിയിലെ വലിയ പ്രകൃതിദത്ത ഉപ്പുവെള്ള ശേഖരങ്ങളാണ് ഇവ രണ്ടും."
          },
          {
            "word": "Lake",
            "wordMal": "തടാകം",
            "relationEN": "Both are large natural bodies of water.",
            "relationML": "വലിയ പ്രകൃതിദത്ത ജലാശയങ്ങളാണ് ഇവ രണ്ടും."
          }
        ]
      },
      {
        "civWord": "Forest",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jungle",
            "wordMal": "കാട്",
            "relationEN": "Both are large natural ecosystems dominated by dense trees.",
            "relationML": "ഇടതൂർന്ന മരങ്ങളുള്ള വലിയ പ്രകൃതിദത്ത ആവാസവ്യവസ്ഥകളാണ് ഇവ."
          },
          {
            "word": "Woods",
            "wordMal": "മരക്കൂട്ടം",
            "relationEN": "Both are natural environments filled with vegetation and wildlife.",
            "relationML": "സസ്യജാലങ്ങളും വന്യജീവികളും നിറഞ്ഞ പ്രകൃതിദത്ത പരിതസ്ഥിതികളാണ് ഇവ."
          }
        ]
      },
      {
        "civWord": "Mountain",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hill",
            "wordMal": "കുന്ന്",
            "relationEN": "Both are significant natural elevations of the earth's surface.",
            "relationML": "ഭൂപ്രതലത്തിലെ വലിയ പ്രകൃതിദത്ത ഉയരങ്ങളാണ് ഇവ രണ്ടും."
          },
          {
            "word": "Volcano",
            "wordMal": "അഗ്നിപർവ്വതം",
            "relationEN": "Both are prominent geological formations rising above the landscape.",
            "relationML": "ഭൂപ്രകൃതിക്ക് മുകളിൽ ഉയർന്നുനിൽക്കുന്ന ഭൗമശാസ്ത്രപരമായ രൂപങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "River",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lake",
            "wordMal": "തടാകം",
            "relationEN": "Both are major natural freshwater bodies found across continents.",
            "relationML": "ഭൂഖണ്ഡങ്ങളിലുടനീളം കാണപ്പെടുന്ന പ്രധാന പ്രകൃതിദത്ത ശുദ്ധജല സ്രോതസ്സുകളാണ് ഇവ."
          },
          {
            "word": "Stream",
            "wordMal": "അരുവി",
            "relationEN": "Both are flowing natural watercourses.",
            "relationML": "പ്രകൃതിദത്തമായി ഒഴുകുന്ന ജലപാതകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Desert",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Savanna",
            "wordMal": "സവന്ന",
            "relationEN": "Both are massive natural biomes known for extremely harsh climates.",
            "relationML": "കഠിനമായ കാലാവസ്ഥയ്ക്ക് പേരുകേട്ട വലിയ പ്രകൃതിദത്ത പ്രദേശങ്ങളാണിവ."
          },
          {
            "word": "Tundra",
            "wordMal": "തുണ്ട്ര",
            "relationEN": "Both are barren landscapes with very little rainfall.",
            "relationML": "വളരെ കുറഞ്ഞ മഴ ലഭിക്കുന്ന വരണ്ട പ്രദേശങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Volcano",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Earthquake",
            "wordMal": "ഭൂകമ്പം",
            "relationEN": "Both are powerful geological phenomena originating from beneath the earth's crust.",
            "relationML": "ഭൂമിയുടെ അടിയിൽ നിന്ന് ഉണ്ടാകുന്ന ശക്തമായ ഭൗമ പ്രതിഭാസങ്ങളാണിവ."
          },
          {
            "word": "Geyser",
            "wordMal": "ഉഷ്ണനീരുറവ",
            "relationEN": "Both are natural features associated with geothermal activity.",
            "relationML": "ഭൂമിയുടെ താപവുമായി ബന്ധപ്പെട്ട പ്രകൃതിദത്ത സവിശേഷതകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Rainbow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Aurora",
            "wordMal": "അറോറ",
            "relationEN": "Both are spectacular atmospheric optical phenomena in the sky.",
            "relationML": "ആകാശത്തെ മനോഹരമായ പ്രകൃതിദത്ത ഒപ്റ്റിക്കൽ പ്രതിഭാസങ്ങളാണിവ."
          },
          {
            "word": "Eclipse",
            "wordMal": "ഗ്രഹണം",
            "relationEN": "Both are colorful visual events occurring in the atmosphere.",
            "relationML": "അന്തരീക്ഷത്തിൽ സംഭവിക്കുന്ന വർണ്ണാഭമായ കാഴ്ചകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Storm",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hurricane",
            "wordMal": "ചുഴലിക്കാറ്റ്",
            "relationEN": "Both are intense and destructive meteorological weather events.",
            "relationML": "തീവ്രവും വിനാശകരവുമായ കാലാവസ്ഥാ പ്രതിഭാസങ്ങളാണിവ."
          },
          {
            "word": "Tornado",
            "wordMal": "ടൊർണാഡോ",
            "relationEN": "Both are severe weather systems with strong winds.",
            "relationML": "ശക്തമായ കാറ്റുള്ള കഠിനമായ കാലാവസ്ഥാ സംവിധാനങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Coral Reef",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Kelp Forest",
            "wordMal": "കെൽപ്പ് വനം",
            "relationEN": "Both are extremely diverse and vibrant underwater ecosystems.",
            "relationML": "വളരെ വൈവിധ്യമാർന്ന സജീവമായ വെള്ളത്തിനടിയിലെ ആവാസവ്യവസ്ഥകളാണിവ."
          },
          {
            "word": "Mangrove",
            "wordMal": "കണ്ടൽക്കാട്",
            "relationEN": "Both are vital marine habitats supporting oceanic life.",
            "relationML": "സമുദ്രജീവികളെ പിന്തുണയ്ക്കുന്ന പ്രധാന സമുദ്ര ആവാസവ്യവസ്ഥകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Waterfall",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Geyser",
            "wordMal": "ഉഷ്ണനീരുറവ",
            "relationEN": "Both are dynamic natural water features involving fast-moving water.",
            "relationML": "വേഗത്തിൽ ചലിക്കുന്ന ജലമുള്ള ചലനാത്മക പ്രകൃതിദത്ത സവിശേഷതകളാണിവ."
          },
          {
            "word": "River",
            "wordMal": "നദി",
            "relationEN": "Both are beautiful geological features involving falling or erupting water.",
            "relationML": "വെള്ളം ഒഴുകുകയോ പൊട്ടിത്തെറിക്കുകയോ ചെയ്യുന്ന മനോഹരമായ ഭൗമ സവിശേഷതകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Glacier",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Iceberg",
            "wordMal": "മഞ്ഞുമല",
            "relationEN": "Both are massive, naturally occurring formations made entirely of ice.",
            "relationML": "പൂർണ്ണമായും മഞ്ഞുകൊണ്ട് നിർമ്മിച്ച വലിയ പ്രകൃതിദത്ത രൂപങ്ങളാണിവ."
          },
          {
            "word": "Snow",
            "wordMal": "മഞ്ഞ്",
            "relationEN": "Both are large frozen geographical features found in polar regions.",
            "relationML": "ധ്രുവപ്രദേശങ്ങളിൽ കാണപ്പെടുന്ന വലിയ മരവിച്ച ഭൂമിശാസ്ത്രപരമായ സവിശേഷതകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Canyon",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Gorge",
            "wordMal": "ചെരിവ്",
            "relationEN": "Both are deep, steep-sided natural geographical landforms carved by water.",
            "relationML": "ജലം സൃഷ്ടിച്ച ആഴമേറിയതും ചെങ്കുത്തായതുമായ പ്രകൃതിദത്ത ഭൂപ്രകൃതികളാണിവ."
          },
          {
            "word": "Valley",
            "wordMal": "താഴ്വര",
            "relationEN": "Both are large depressions in the earth's surface.",
            "relationML": "ഭൂപ്രതലത്തിലെ വലിയ കുഴികളാണിവ."
          }
        ]
      },
      {
        "civWord": "Meadow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Prairie",
            "wordMal": "പുൽമേട്",
            "relationEN": "Both are large, open natural landscapes dominated by grass.",
            "relationML": "പുല്ലുകൾ നിറഞ്ഞ വലിയ തുറസ്സായ പ്രകൃതിദത്ത പ്രദേശങ്ങളാണിവ."
          },
          {
            "word": "Pasture",
            "wordMal": "മേച്ചിൽപ്പുറം",
            "relationEN": "Both are flat, grassy ecological areas.",
            "relationML": "പരന്ന, പുല്ലുള്ള പാരിസ്ഥിതിക പ്രദേശങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Cave",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cavern",
            "wordMal": "ഗുഹ",
            "relationEN": "Both are large, dark natural underground cavities or chambers.",
            "relationML": "വലിയ, ഇരുണ്ട പ്രകൃതിദത്ത ഭൂഗർഭ അറകളാണിവ."
          },
          {
            "word": "Tunnel",
            "wordMal": "തുരങ്കം",
            "relationEN": "Both are deep rocky hollows found in mountains or underground.",
            "relationML": "പർവ്വതങ്ങളിലോ ഭൂമിക്കടിയിലോ കാണപ്പെടുന്ന ആഴത്തിലുള്ള പാറകളുള്ള കുഴികളാണിവ."
          }
        ]
      },
      {
        "civWord": "Swamp",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Marsh",
            "wordMal": "ചതുപ്പ്",
            "relationEN": "Both are dense, natural wetland ecosystems rich in biodiversity.",
            "relationML": "ജൈവവൈവിധ്യത്താൽ സമ്പന്നമായ ഇടതൂർന്ന പ്രകൃതിദത്ത തണ്ണീർത്തട ആവാസവ്യവസ്ഥകളാണിവ."
          },
          {
            "word": "Bog",
            "wordMal": "ചതുപ്പുനിലം",
            "relationEN": "Both are muddy, waterlogged natural areas.",
            "relationML": "ചെളി നിറഞ്ഞ, വെള്ളം കെട്ടിനിൽക്കുന്ന പ്രകൃതിദത്ത പ്രദേശങ്ങളാണിവ."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_disney",
    "name": "Disney & Animation",
    "icon": "?",
    "words": [
      {
        "civWord": "Simba",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mufasa",
            "wordMal": "മുഫാസ",
            "relationEN": "Both are iconic main lion characters from the Disney movie The Lion King.",
            "relationML": "ദി ലയൺ കിംഗ് എന്ന ഡിസ്നി സിനിമയിലെ പ്രധാന സിംഹ കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Scar",
            "wordMal": "സ്കാർ",
            "relationEN": "Both are royalty in the Pride Lands from The Lion King.",
            "relationML": "ദി ലയൺ കിംഗ് സിനിമയിലെ പ്രധാന രാജകീയ കഥാപാത്രങ്ങളാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Elsa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Anna",
            "wordMal": "അന്ന",
            "relationEN": "Both are central royal characters from the popular Disney movie Frozen.",
            "relationML": "ഫ്രോസൺ എന്ന പ്രശസ്തമായ ഡിസ്നി സിനിമയിലെ പ്രധാന രാജകീയ കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Olaf",
            "wordMal": "ഒലാഫ്",
            "relationEN": "Both are major Disney figures associated with winter and ice.",
            "relationML": "ശൈത്യകാലവും മഞ്ഞുമായി ബന്ധപ്പെട്ട പ്രധാന ഡിസ്നി കഥാപാത്രങ്ങളാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Moana",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Maui",
            "wordMal": "മൗയി",
            "relationEN": "Both are lead characters in a Disney movie closely tied to the ocean.",
            "relationML": "സമുദ്രവുമായി അടുത്ത ബന്ധമുള്ള ഡിസ്നി സിനിമയിലെ പ്രധാന കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Ariel",
            "wordMal": "ഏരിയൽ",
            "relationEN": "Both are iconic Polynesian-inspired Disney characters.",
            "relationML": "പ്രശസ്തരായ പോളിനേഷ്യൻ ഡിസ്നി കഥാപാത്രങ്ങളാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Mulan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pocahontas",
            "wordMal": "പോക്കഹോണ്ടാസ്",
            "relationEN": "Both are brave, culturally iconic Disney heroines who saved their people.",
            "relationML": "തങ്ങളുടെ ആളുകളെ രക്ഷിച്ച ധീരരായ ഡിസ്നി നായികമാരാണ് ഇരുവരും."
          },
          {
            "word": "Jasmine",
            "wordMal": "ജാസ്മിൻ",
            "relationEN": "Both are legendary strong female warriors in Disney animation.",
            "relationML": "ഡിസ്നി അനിമേഷനിലെ ശക്തരായ വനിതാ പോരാളികളാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Aladdin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Genie",
            "wordMal": "ജീനി",
            "relationEN": "Both are the most central iconic characters from the Disney movie Aladdin.",
            "relationML": "അലാഡിൻ എന്ന ഡിസ്നി സിനിമയിലെ ഏറ്റവും പ്രധാനപ്പെട്ട കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Jafar",
            "wordMal": "ജാഫർ",
            "relationEN": "Both are key characters from the fictional city of Agrabah.",
            "relationML": "അഗ്രാബ എന്ന സാങ്കൽപ്പിക നഗരത്തിലെ പ്രധാന കഥാപാത്രങ്ങളാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Shrek",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Donkey",
            "wordMal": "ഡോങ്കി",
            "relationEN": "Both are the most iconic, hilarious main characters from the DreamWorks Shrek series.",
            "relationML": "ഷ്രെക്ക് പരമ്പരയിലെ ഏറ്റവും പ്രശസ്തവും രസകരവുമായ പ്രധാന കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Fiona",
            "wordMal": "ഫിയോണ",
            "relationEN": "Both are non-human animated heroes from famous fairy tale movies.",
            "relationML": "പ്രശസ്തമായ സിനിമകളിലെ അമാനുഷികരായ ആനിമേറ്റഡ് നായകന്മാരാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Woody",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Buzz Lightyear",
            "wordMal": "ബസ് ലൈറ്റ്ഇയർ",
            "relationEN": "Both are the famous leading toy characters in Pixar's Toy Story franchise.",
            "relationML": "പിക്സാറിന്റെ ടോയ് സ്റ്റോറി പരമ്പരയിലെ പ്രശസ്തരായ കളിപ്പാട്ട കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Jessie",
            "wordMal": "ജെസ്സി",
            "relationEN": "Both are classic animated action figures from Toy Story.",
            "relationML": "ടോയ് സ്റ്റോറിയിലെ ക്ലാസിക് ആനിമേറ്റഡ് കളിപ്പാട്ടങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Nemo",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Marlin",
            "wordMal": "മാർലിൻ",
            "relationEN": "Both are central clownfish characters in a massive Pixar ocean adventure.",
            "relationML": "പിക്സാറിന്റെ സമുദ്ര സാഹസിക സിനിമയിലെ പ്രധാന ക്ലൗൺഫിഷ് കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Dory",
            "wordMal": "ഡോറി",
            "relationEN": "Both are famous animated fish from finding Nemo.",
            "relationML": "ഫൈൻഡിംഗ് നീമോയിലെ പ്രശസ്തരായ മത്സ്യ കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Rapunzel",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Flynn Rider",
            "wordMal": "ഫ്ലിൻ റൈഡർ",
            "relationEN": "Both are the iconic lead characters in the Disney movie Tangled.",
            "relationML": "ടാങ്കിൾഡ് എന്ന ഡിസ്നി സിനിമയിലെ പ്രശസ്തരായ പ്രധാന കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Mother Gothel",
            "wordMal": "മദർ ഗൊഥെൽ",
            "relationEN": "Both are central figures in a modern Disney fairy tale adaptation.",
            "relationML": "ഒരു ആധുനിക ഡിസ്നി സിനിമയിലെ പ്രധാന കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Belle",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Beast",
            "wordMal": "ബീസ്റ്റ്",
            "relationEN": "Both are the absolute core characters of Disney's Beauty and the Beast.",
            "relationML": "ഡിസ്നിയുടെ ബ്യൂട്ടി ആൻഡ് ദി ബീസ്റ്റിലെ പ്രധാന കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Gaston",
            "wordMal": "ഗാസ്റ്റൺ",
            "relationEN": "Both are classic figures from a famous French-inspired Disney story.",
            "relationML": "പ്രശസ്തമായ ഒരു ഫ്രഞ്ച് ഡിസ്നി കഥയിലെ ക്ലാസിക് കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Cinderella",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Snow White",
            "wordMal": "സ്നോ വൈറ്റ്",
            "relationEN": "Both are foundational, classic original Disney princesses with famous stories.",
            "relationML": "പ്രശസ്തമായ കഥകളുള്ള ക്ലാസിക് ഡിസ്നി രാജകുമാരിമാരാണ് ഇരുവരും."
          },
          {
            "word": "Aurora",
            "wordMal": "അറോറ",
            "relationEN": "Both are iconic Disney royalty who suffer under evil stepmothers.",
            "relationML": "ദുഷ്ടയായ രണ്ടാനമ്മയുടെ കീഴിൽ കഷ്ടപ്പെടുന്ന പ്രശസ്ത ഡിസ്നി രാജകുമാരിമാരാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Bambi",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dumbo",
            "wordMal": "ഡംബോ",
            "relationEN": "Both are extremely famous, beloved classic Disney animal protagonists.",
            "relationML": "വളരെ പ്രശസ്തരായ, പ്രിയപ്പെട്ട ക്ലാസിക് ഡിസ്നി മൃഗ കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Thumper",
            "wordMal": "തമ്പർ",
            "relationEN": "Both are titular young animal heroes of vintage Disney animation.",
            "relationML": "പഴയ ഡിസ്നി ആനിമേഷനിലെ യുവ മൃഗ നായകന്മാരാണ് ഇവർ."
          }
        ]
      },
      {
        "civWord": "Pinocchio",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jiminy Cricket",
            "wordMal": "ജിമിനി ക്രിക്കറ്റ്",
            "relationEN": "Both are the most central, inseparable characters in the Disney classic Pinocchio.",
            "relationML": "പിനോച്ചിയോ എന്ന ഡിസ്നി ക്ലാസിക്കിലെ ഏറ്റവും പ്രധാനപ്പെട്ട കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Geppetto",
            "wordMal": "ജെപ്പറ്റോ",
            "relationEN": "Both are iconic figures from an early classic Disney moral tale.",
            "relationML": "ആദ്യകാല ഡിസ്നി കഥയിലെ പ്രശസ്തരായ കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Tarzan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jane",
            "wordMal": "ജെയ്ൻ",
            "relationEN": "Both are the legendary main characters from Disney's jungle adventure Tarzan.",
            "relationML": "ഡിസ്നിയുടെ ടാർസൻ എന്ന ജംഗിൾ സാഹസിക സിനിമയിലെ പ്രധാന കഥാപാത്രങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Kerchak",
            "wordMal": "കെർചാക്",
            "relationEN": "Both are iconic humans who adapt to the African jungle in Disney.",
            "relationML": "ആഫ്രിക്കൻ കാടുകളുമായി പൊരുത്തപ്പെടുന്ന പ്രശസ്തരായ മനുഷ്യ കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      },
      {
        "civWord": "Stitch",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lilo",
            "wordMal": "ലിലോ",
            "relationEN": "Both are the iconic duo from a famous Hawaiian Disney animated movie.",
            "relationML": "പ്രശസ്തമായ ഒരു ഹവായിയൻ ഡിസ്നി ആനിമേറ്റഡ് സിനിമയിലെ ജോഡികളാണ് ഇരുവരും."
          },
          {
            "word": "Jumba",
            "wordMal": "ജുംബ",
            "relationEN": "Both are central misunderstood characters in a modern Disney sci-fi film.",
            "relationML": "ഒരു ആധുനിക ഡിസ്നി സിനിമയിലെ തെറ്റിദ്ധരിക്കപ്പെട്ട പ്രധാന കഥാപാത്രങ്ങളാണിവർ."
          }
        ]
      }
    ]
  },
  {
    "id": "intl_places",
    "name": "Famous Places",
    "icon": "???",
    "words": [
      {
        "civWord": "Eiffel Tower",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Big Ben",
            "wordMal": "ബിഗ് ബെൻ",
            "relationEN": "Both are globally recognized, massive iconic architectural monuments in Europe.",
            "relationML": "യൂറോപ്പിലെ ലോകപ്രശസ്തമായ വലിയ വാസ്തുവിദ്യാ സ്മാരകങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Statue of Liberty",
            "wordMal": "സ്റ്റാച്യു ഓഫ് ലിബർട്ടി",
            "relationEN": "Both are famous towering metal structures built as national symbols.",
            "relationML": "ദേശീയ ചിഹ്നങ്ങളായി നിർമ്മിച്ച പ്രശസ്തമായ വലിയ ലോഹ ഘടനകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Colosseum",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pantheon",
            "wordMal": "പന്തിയോൺ",
            "relationEN": "Both are incredibly famous, surviving massive structures from Ancient Rome.",
            "relationML": "പുരാതന റോമിൽ നിന്നുള്ള അവശേഷിക്കുന്ന വളരെ പ്രശസ്തമായ വലിയ ഘടനകളാണിവ."
          },
          {
            "word": "Parthenon",
            "wordMal": "പാർഥെനോൺ",
            "relationEN": "Both are legendary classical stone monuments in modern Italy.",
            "relationML": "ആധുനിക ഇറ്റലിയിലെ പ്രശസ്തമായ ക്ലാസിക്കൽ കൽസ്മാരകങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Taj Mahal",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Qutub Minar",
            "wordMal": "കുത്തബ് മിനാർ",
            "relationEN": "Both are legendary, globally recognized historical monuments in India.",
            "relationML": "ഇന്ത്യയിലെ ലോകപ്രശസ്തമായ ചരിത്ര സ്മാരകങ്ങളാണ് ഇരുവരും."
          },
          {
            "word": "Red Fort",
            "wordMal": "ചെങ്കോട്ട",
            "relationEN": "Both are massive iconic structures built by ancient Indian empires.",
            "relationML": "പുരാതന ഇന്ത്യൻ സാമ്രാജ്യങ്ങൾ നിർമ്മിച്ച വലിയ പ്രശസ്തമായ ഘടനകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Great Wall",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Forbidden City",
            "wordMal": "വിലക്കപ്പെട്ട നഗരം",
            "relationEN": "Both are massive, historically critical UNESCO World Heritage sites in China.",
            "relationML": "ചൈനയിലെ ചരിത്രപരമായി വളരെ പ്രധാനപ്പെട്ട യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രങ്ങളാണിവ."
          },
          {
            "word": "Terracotta Army",
            "wordMal": "ടെറാക്കോട്ട സൈന്യം",
            "relationEN": "Both are legendary ancient mega-projects built by Chinese emperors.",
            "relationML": "ചൈനീസ് ചക്രവർത്തിമാർ നിർമ്മിച്ച പ്രശസ്തമായ പുരാതന നിർമ്മാണങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Statue of Liberty",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Golden Gate Bridge",
            "wordMal": "ഗോൾഡൻ ഗേറ്റ് ബ്രിഡ്ജ്",
            "relationEN": "Both are incredibly famous, colossal national landmarks in the United States.",
            "relationML": "അമേരിക്കൻ ഐക്യനാടുകളിലെ വളരെ പ്രശസ്തമായ വലിയ ദേശീയ സ്മാരകങ്ങളാണിവ."
          },
          {
            "word": "Mount Rushmore",
            "wordMal": "മൗണ്ട് റഷ്മോർ",
            "relationEN": "Both are iconic American monumental structures recognized worldwide.",
            "relationML": "ലോകമെമ്പാടും അംഗീകരിക്കപ്പെട്ട പ്രശസ്തമായ അമേരിക്കൻ ഘടനകളാണിവ."
          }
        ]
      },
      {
        "civWord": "Sydney Opera House",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Harbour Bridge",
            "wordMal": "ഹാർബർ ബ്രിഡ്ജ്",
            "relationEN": "Both are the most iconic, globally recognized structural landmarks of Sydney.",
            "relationML": "സിഡ്നിയിലെ ലോകപ്രശസ്തമായ വാസ്തുവിദ്യാ സ്മാരകങ്ങളാണ് ഇവ രണ്ടും."
          },
          {
            "word": "Burj Khalifa",
            "wordMal": "ബുർജ് ഖലീഫ",
            "relationEN": "Both are famous modern architectural wonders.",
            "relationML": "പ്രശസ്തമായ ആധുനിക വാസ്തുവിദ്യാ വിസ്മയങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Machu Picchu",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Chichen Itza",
            "wordMal": "ചിച്ചെൻ ഇറ്റ്സ",
            "relationEN": "Both are legendary, extremely well-preserved ancient ruins in Latin America.",
            "relationML": "ലാറ്റിനമേരിക്കയിലെ വളരെ നന്നായി സംരക്ഷിക്കപ്പെട്ടിട്ടുള്ള പുരാതന അവശിഷ്ടങ്ങളാണിവ."
          },
          {
            "word": "Petra",
            "wordMal": "പെട്ര",
            "relationEN": "Both are iconic stone cities built by ancient civilizations.",
            "relationML": "പുരാതന നാഗരികതകൾ നിർമ്മിച്ച പ്രശസ്തമായ കൽ നഗരങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Stonehenge",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Avebury",
            "wordMal": "ഏവ്ബറി",
            "relationEN": "Both are mysterious, globally famous ancient megalithic stone monuments.",
            "relationML": "നിഗൂഢവും ലോകപ്രശസ്തവുമായ പുരാതന കൽസ്മാരകങ്ങളാണിവ."
          },
          {
            "word": "Easter Island",
            "wordMal": "ഈസ്റ്റർ ദ്വീപ്",
            "relationEN": "Both are iconic prehistoric circles of standing stones in England.",
            "relationML": "ഇംഗ്ലണ്ടിലെ പ്രശസ്തമായ ചരിത്രാതീത ശിലാ വൃത്തങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Niagara Falls",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Victoria Falls",
            "wordMal": "വിക്ടോറിയ വെള്ളച്ചാട്ടം",
            "relationEN": "Both are incredibly famous, massive, spectacular international waterfalls.",
            "relationML": "വളരെ പ്രശസ്തവും വലുതുമായ അന്താരാഷ്ട്ര വെള്ളച്ചാട്ടങ്ങളാണിവ."
          },
          {
            "word": "Angel Falls",
            "wordMal": "ഏഞ്ചൽ വെള്ളച്ചാട്ടം",
            "relationEN": "Both are gigantic natural water wonders that border two countries.",
            "relationML": "രണ്ട് രാജ്യങ്ങളുടെ അതിർത്തിയിലുള്ള വലിയ പ്രകൃതിദത്ത ജല വിസ്മയങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Angkor Wat",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Borobudur",
            "wordMal": "ബോറോബുദൂർ",
            "relationEN": "Both are massive, historically profound ancient temple complexes in Southeast Asia.",
            "relationML": "തെക്കുകിഴക്കൻ ഏഷ്യയിലെ വലിയതും ചരിത്രപരമായി പ്രധാനപ്പെട്ടതുമായ പുരാതന ക്ഷേത്ര സമുച്ചയങ്ങളാണിവ."
          },
          {
            "word": "Prambanan",
            "wordMal": "പ്രമ്പാനൻ",
            "relationEN": "Both are legendary religious stone monuments.",
            "relationML": "പ്രശസ്തമായ മതപരമായ കൽസ്മാരകങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Alhambra",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sagrada Familia",
            "wordMal": "സഗ്രാഡ ഫാമിലിയ",
            "relationEN": "Both are profoundly famous, iconic architectural masterpieces located in Spain.",
            "relationML": "സ്പെയിനിലെ വളരെ പ്രശസ്തമായ വാസ്തുവിദ്യാ വിസ്മയങ്ങളാണിവ."
          },
          {
            "word": "Taj Mahal",
            "wordMal": "താജ് മഹൽ",
            "relationEN": "Both are legendary monumental buildings heavily visited by tourists.",
            "relationML": "വിനോദസഞ്ചാരികൾ ധാരാളമായി സന്ദർശിക്കുന്ന പ്രശസ്തമായ വലിയ കെട്ടിടങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Mount Everest",
        "civWordMal": "",
        "imposters": [
          {
            "word": "K2",
            "wordMal": "കെ2",
            "relationEN": "Both are globally famous, extreme high-altitude mountain peaks.",
            "relationML": "ലോകപ്രശസ്തമായ വലിയ ഉയരമുള്ള പർവ്വത കൊടുമുടികളാണിവ."
          },
          {
            "word": "Mount Kilimanjaro",
            "wordMal": "മൗണ്ട് കിളിമഞ്ചാരോ",
            "relationEN": "Both are legendary and dangerous mountains in the Himalayas.",
            "relationML": "ഹിമാലയത്തിലെ പ്രശസ്തവും അപകടകരവുമായ പർവ്വതങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Amazon River",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nile River",
            "wordMal": "നൈൽ നദി",
            "relationEN": "Both are incredibly long, famous massive river systems vital to their continents.",
            "relationML": "അതാത് ഭൂഖണ്ഡങ്ങൾക്ക് വളരെ പ്രധാനപ്പെട്ടതും പ്രശസ്തവുമായ വലിയ നദീതടങ്ങളാണിവ."
          },
          {
            "word": "Ganges",
            "wordMal": "ഗംഗ",
            "relationEN": "Both are legendary continental rivers.",
            "relationML": "പ്രശസ്തമായ ഭൂഖണ്ഡ നദികളാണിവ."
          }
        ]
      },
      {
        "civWord": "Grand Canyon",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bryce Canyon",
            "wordMal": "ബ്രൈസ് കാന്യോൺ",
            "relationEN": "Both are massively famous, visually stunning natural rock formations in the US.",
            "relationML": "അമേരിക്കയിലെ വളരെ പ്രശസ്തവും മനോഹരവുമായ പ്രകൃതിദത്ത പാറക്കൂട്ടങ്ങളാണിവ."
          },
          {
            "word": "Yellowstone",
            "wordMal": "യെല്ലോസ്റ്റോൺ",
            "relationEN": "Both are legendary national parks featuring deep gorges.",
            "relationML": "ആഴത്തിലുള്ള താഴ്‌വരകളുള്ള പ്രശസ്തമായ ദേശീയ ഉദ്യാനങ്ങളാണിവ."
          }
        ]
      },
      {
        "civWord": "Times Square",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Piccadilly Circus",
            "wordMal": "പിക്കാഡിലി സർക്കസ്",
            "relationEN": "Both are incredibly busy, neon-lit iconic commercial intersections in major global cities.",
            "relationML": "വലിയ നഗരങ്ങളിലെ വളരെ തിരക്കേറിയതും പ്രശസ്തവുമായ വാണിജ്യ ജംഗ്ഷനുകളാണിവ."
          },
          {
            "word": "Shibuya Crossing",
            "wordMal": "ഷിബുയ ക്രോസിംഗ്",
            "relationEN": "Both are famous urban tourist hotspots known for giant screens.",
            "relationML": "വലിയ സ്ക്രീനുകൾക്ക് പേരുകേട്ട പ്രശസ്തമായ നഗര വിനോദസഞ്ചാര കേന്ദ്രങ്ങളാണിവ."
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.packs = packs;
  window.intlPacks = intlPacks;
}
