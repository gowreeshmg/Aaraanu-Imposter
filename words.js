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
            "word": "Alternative 1 for Chaya",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chaya",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Puffs",
        "civWordMal": "പഫ്സ്",
        "imposters": [
          {
            "word": "Alternative 1 for Puffs",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Puffs",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Uzhunnu Vada",
        "civWordMal": "ഉഴുന്നു വട",
        "imposters": [
          {
            "word": "Alternative 1 for Uzhunnu Vada",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Uzhunnu Vada",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mutta Baji",
        "civWordMal": "മുട്ട ബജി",
        "imposters": [
          {
            "word": "Alternative 1 for Mutta Baji",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mutta Baji",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kozhukkatta",
        "civWordMal": "കൊഴുക്കട്ട",
        "imposters": [
          {
            "word": "Alternative 1 for Kozhukkatta",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kozhukkatta",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Cutlet",
        "civWordMal": "കട്ട്ലറ്റ്",
        "imposters": [
          {
            "word": "Alternative 1 for Cutlet",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Cutlet",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Samosa",
        "civWordMal": "സമോസ",
        "imposters": [
          {
            "word": "Alternative 1 for Samosa",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Samosa",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bonda",
        "civWordMal": "ബോണ്ട",
        "imposters": [
          {
            "word": "Alternative 1 for Bonda",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bonda",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Parippu Vada",
        "civWordMal": "പരിപ്പ് വട",
        "imposters": [
          {
            "word": "Alternative 1 for Parippu Vada",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Parippu Vada",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ela Ada",
        "civWordMal": "ഇല അട",
        "imposters": [
          {
            "word": "Alternative 1 for Ela Ada",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ela Ada",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Achappam",
        "civWordMal": "അച്ചപ്പം",
        "imposters": [
          {
            "word": "Alternative 1 for Achappam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Achappam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Unniyappam",
        "civWordMal": "ഉണ്ണിയപ്പം",
        "imposters": [
          {
            "word": "Alternative 1 for Unniyappam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Unniyappam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Banana Chips",
        "civWordMal": "വാഴക്ക ചിപ്സ്",
        "imposters": [
          {
            "word": "Alternative 1 for Banana Chips",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Banana Chips",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Sharkara Upperi",
        "civWordMal": "ശർക്കര ഉപ്പേരി",
        "imposters": [
          {
            "word": "Alternative 1 for Sharkara Upperi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Sharkara Upperi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kappa Chips",
        "civWordMal": "കപ്പ ചിപ്സ്",
        "imposters": [
          {
            "word": "Alternative 1 for Kappa Chips",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kappa Chips",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Avalose Podi",
        "civWordMal": "അവലോസ് പൊടി",
        "imposters": [
          {
            "word": "Alternative 1 for Avalose Podi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Avalose Podi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kozhalappam",
        "civWordMal": "കൊഴലപ്പം",
        "imposters": [
          {
            "word": "Alternative 1 for Kozhalappam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kozhalappam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kinnathappam",
        "civWordMal": "കിണ്ണത്തപ്പം",
        "imposters": [
          {
            "word": "Alternative 1 for Kinnathappam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kinnathappam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Churuttu",
        "civWordMal": "ചുരുട്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Churuttu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Churuttu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Halwa",
        "civWordMal": "ഹൽവ",
        "imposters": [
          {
            "word": "Alternative 1 for Halwa",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Halwa",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Sukhiyan",
        "civWordMal": "സുഖിയൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Sukhiyan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Sukhiyan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bread Pakora",
        "civWordMal": "ബ്രെഡ് പക്കോട",
        "imposters": [
          {
            "word": "Alternative 1 for Bread Pakora",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bread Pakora",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Laddoo",
        "civWordMal": "ലഡ്ഡു",
        "imposters": [
          {
            "word": "Alternative 1 for Laddoo",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Laddoo",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jalebi",
        "civWordMal": "ജിലേബി",
        "imposters": [
          {
            "word": "Alternative 1 for Jalebi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jalebi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Meat Roll",
        "civWordMal": "മീറ്റ് റോൾ",
        "imposters": [
          {
            "word": "Alternative 1 for Meat Roll",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Meat Roll",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Boli",
        "civWordMal": "ബോളി",
        "imposters": [
          {
            "word": "Alternative 1 for Boli",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Boli",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chatti Pathiri",
        "civWordMal": "ചട്ടി പത്തിരി",
        "imposters": [
          {
            "word": "Alternative 1 for Chatti Pathiri",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chatti Pathiri",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Vettu Cake",
        "civWordMal": "വെട്ട് കേക്ക്",
        "imposters": [
          {
            "word": "Alternative 1 for Vettu Cake",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Vettu Cake",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Pakkavada",
        "civWordMal": "പക്കവട",
        "imposters": [
          {
            "word": "Alternative 1 for Pakkavada",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Pakkavada",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kayyappam",
        "civWordMal": "കയ്യപ്പം",
        "imposters": [
          {
            "word": "Alternative 1 for Kayyappam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kayyappam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ilayappam",
        "civWordMal": "ഇലയപ്പം",
        "imposters": [
          {
            "word": "Alternative 1 for Ilayappam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ilayappam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mothagam",
        "civWordMal": "മോദകം",
        "imposters": [
          {
            "word": "Alternative 1 for Mothagam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mothagam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mutta Puff",
        "civWordMal": "മുട്ട പഫ്",
        "imposters": [
          {
            "word": "Alternative 1 for Mutta Puff",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mutta Puff",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Cream Bun",
        "civWordMal": "ക്രീം ബൺ",
        "imposters": [
          {
            "word": "Alternative 1 for Cream Bun",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Cream Bun",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mixture",
        "civWordMal": "മിക്സ്ചർ",
        "imposters": [
          {
            "word": "Alternative 1 for Mixture",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mixture",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Pahadi Halwa",
        "civWordMal": "കോഴിക്കോടൻ ഹൽവ",
        "imposters": [
          {
            "word": "Alternative 1 for Pahadi Halwa",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Pahadi Halwa",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
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
            "word": "Alternative 1 for Nilavilakku",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Nilavilakku",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Thorthu",
        "civWordMal": "തോർത്തു",
        "imposters": [
          {
            "word": "Alternative 1 for Thorthu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Thorthu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Muram",
        "civWordMal": "മുറം",
        "imposters": [
          {
            "word": "Alternative 1 for Muram",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Muram",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chattukam",
        "civWordMal": "ചട്ടുകം",
        "imposters": [
          {
            "word": "Alternative 1 for Chattukam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chattukam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mundum Neriyathum",
        "civWordMal": "മുണ്ടും നേരിയതും",
        "imposters": [
          {
            "word": "Alternative 1 for Mundum Neriyathum",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mundum Neriyathum",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Uruli",
        "civWordMal": "ഉരുളി",
        "imposters": [
          {
            "word": "Alternative 1 for Uruli",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Uruli",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Para",
        "civWordMal": "പറ",
        "imposters": [
          {
            "word": "Alternative 1 for Para",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Para",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kudam",
        "civWordMal": "കുടം",
        "imposters": [
          {
            "word": "Alternative 1 for Kudam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kudam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chembu",
        "civWordMal": "ചെമ്പ്",
        "imposters": [
          {
            "word": "Alternative 1 for Chembu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chembu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ammikallu",
        "civWordMal": "അമ്മിക്കല്ല്",
        "imposters": [
          {
            "word": "Alternative 1 for Ammikallu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ammikallu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Arakkallu",
        "civWordMal": "അരക്കല്ല്",
        "imposters": [
          {
            "word": "Alternative 1 for Arakkallu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Arakkallu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Aattukallu",
        "civWordMal": "ആട്ടുകല്ല്",
        "imposters": [
          {
            "word": "Alternative 1 for Aattukallu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Aattukallu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kindi",
        "civWordMal": "കിണ്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Kindi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kindi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Thookkuvilakku",
        "civWordMal": "തൂക്കുവിളക്ക്",
        "imposters": [
          {
            "word": "Alternative 1 for Thookkuvilakku",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Thookkuvilakku",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mundu",
        "civWordMal": "മുണ്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Mundu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mundu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kasavu Saree",
        "civWordMal": "കസവ് സാരി",
        "imposters": [
          {
            "word": "Alternative 1 for Kasavu Saree",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kasavu Saree",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chirava",
        "civWordMal": "ചിരവ",
        "imposters": [
          {
            "word": "Alternative 1 for Chirava",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chirava",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Paathram",
        "civWordMal": "പാത്രം",
        "imposters": [
          {
            "word": "Alternative 1 for Paathram",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Paathram",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Puttu Kutti",
        "civWordMal": "പുട്ടുകുറ്റി",
        "imposters": [
          {
            "word": "Alternative 1 for Puttu Kutti",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Puttu Kutti",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Vaal Kannadi",
        "civWordMal": "വാൽക്കണ്ണാടി",
        "imposters": [
          {
            "word": "Alternative 1 for Vaal Kannadi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Vaal Kannadi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kalam",
        "civWordMal": "കലം",
        "imposters": [
          {
            "word": "Alternative 1 for Kalam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kalam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Cheenachatti",
        "civWordMal": "ചീനച്ചട്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Cheenachatti",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Cheenachatti",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kettle",
        "civWordMal": "കെറ്റിൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Kettle",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kettle",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bharani",
        "civWordMal": "ഭരണി",
        "imposters": [
          {
            "word": "Alternative 1 for Bharani",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bharani",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kattil",
        "civWordMal": "കട്ടിൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Kattil",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kattil",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Oonjal",
        "civWordMal": "ഊഞ്ഞാൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Oonjal",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Oonjal",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chattuvam",
        "civWordMal": "ചട്ടുക്ക",
        "imposters": [
          {
            "word": "Alternative 1 for Chattuvam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chattuvam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Paya",
        "civWordMal": "പായ",
        "imposters": [
          {
            "word": "Alternative 1 for Paya",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Paya",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Thiri",
        "civWordMal": "തിരി",
        "imposters": [
          {
            "word": "Alternative 1 for Thiri",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Thiri",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kindu Brass",
        "civWordMal": "ഓട്ടുപാത്രം",
        "imposters": [
          {
            "word": "Alternative 1 for Kindu Brass",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kindu Brass",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Alavu Para",
        "civWordMal": "അളവുപാത്രം",
        "imposters": [
          {
            "word": "Alternative 1 for Alavu Para",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Alavu Para",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kindu Vessel",
        "civWordMal": "വാൽക്കിണ്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Kindu Vessel",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kindu Vessel",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chappathi Kallu",
        "civWordMal": "ചപ്പാത്തി കല്ല്",
        "imposters": [
          {
            "word": "Alternative 1 for Chappathi Kallu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chappathi Kallu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Arippa",
        "civWordMal": "അരിപ്പ",
        "imposters": [
          {
            "word": "Alternative 1 for Arippa",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Arippa",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Choottu",
        "civWordMal": "ചൂട്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Choottu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Choottu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Madaal",
        "civWordMal": "മടൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Madaal",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Madaal",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
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
            "word": "Alternative 1 for Mohanlal",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mohanlal",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mammootty",
        "civWordMal": "മമ്മൂട്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Mammootty",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mammootty",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Manju Warrier",
        "civWordMal": "മഞ്ജു വാര്യർ",
        "imposters": [
          {
            "word": "Alternative 1 for Manju Warrier",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Manju Warrier",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Fahadh Faasil",
        "civWordMal": "ഫഹദ് ഫാസിൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Fahadh Faasil",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Fahadh Faasil",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Shobana",
        "civWordMal": "ശോഭന",
        "imposters": [
          {
            "word": "Alternative 1 for Shobana",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Shobana",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Dileep",
        "civWordMal": "ദിലീപ്",
        "imposters": [
          {
            "word": "Alternative 1 for Dileep",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Dileep",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Suresh Gopi",
        "civWordMal": "സുരേഷ് ഗോപി",
        "imposters": [
          {
            "word": "Alternative 1 for Suresh Gopi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Suresh Gopi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Prithviraj",
        "civWordMal": "പൃഥ്വിരാജ്",
        "imposters": [
          {
            "word": "Alternative 1 for Prithviraj",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Prithviraj",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tovino Thomas",
        "civWordMal": "ടൊവിനോ തോമസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Tovino Thomas",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tovino Thomas",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Nivin Pauly",
        "civWordMal": "നിവിൻ പോളി",
        "imposters": [
          {
            "word": "Alternative 1 for Nivin Pauly",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Nivin Pauly",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kunchacko Boban",
        "civWordMal": "കുഞ്ചാക്കോ ബോബൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Kunchacko Boban",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kunchacko Boban",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jayaram",
        "civWordMal": "ജയറാം",
        "imposters": [
          {
            "word": "Alternative 1 for Jayaram",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jayaram",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jayasurya",
        "civWordMal": "ജയസൂര്യ",
        "imposters": [
          {
            "word": "Alternative 1 for Jayasurya",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jayasurya",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Parvathy Thiruvothu",
        "civWordMal": "പാർവതി തിരുവോത്ത്",
        "imposters": [
          {
            "word": "Alternative 1 for Parvathy Thiruvothu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Parvathy Thiruvothu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Nazriya Nazim",
        "civWordMal": "നസ്രിയ നസീം",
        "imposters": [
          {
            "word": "Alternative 1 for Nazriya Nazim",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Nazriya Nazim",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Anaswara Rajan",
        "civWordMal": "അനശ്വര രാജൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Anaswara Rajan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Anaswara Rajan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Aishwarya Lekshmi",
        "civWordMal": "ഐശ്വര്യ ലക്ഷ്മി",
        "imposters": [
          {
            "word": "Alternative 1 for Aishwarya Lekshmi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Aishwarya Lekshmi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Asif Ali",
        "civWordMal": "ആസിഫ് അലി",
        "imposters": [
          {
            "word": "Alternative 1 for Asif Ali",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Asif Ali",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Basil Joseph",
        "civWordMal": "ബേസിൽ ജോസഫ്",
        "imposters": [
          {
            "word": "Alternative 1 for Basil Joseph",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Basil Joseph",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Vineeth Sreenivasan",
        "civWordMal": "വിനീത് ശ്രീനിവാസൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Vineeth Sreenivasan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Vineeth Sreenivasan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Dulquer Salmaan",
        "civWordMal": "ദുൽഖർ സൽമാൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Dulquer Salmaan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Dulquer Salmaan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Suraj Venjaramoodu",
        "civWordMal": "സുരാജ് വെഞ്ഞാറമൂട്",
        "imposters": [
          {
            "word": "Alternative 1 for Suraj Venjaramoodu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Suraj Venjaramoodu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jagathy Sreekumar",
        "civWordMal": "ജഗതി ശ്രീകുമാർ",
        "imposters": [
          {
            "word": "Alternative 1 for Jagathy Sreekumar",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jagathy Sreekumar",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Innocent",
        "civWordMal": "ഇന്നസെന്റ്",
        "imposters": [
          {
            "word": "Alternative 1 for Innocent",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Innocent",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Soubin Shahir",
        "civWordMal": "സൗബിൻ ഷാഹിർ",
        "imposters": [
          {
            "word": "Alternative 1 for Soubin Shahir",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Soubin Shahir",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kalyani Priyadarshan",
        "civWordMal": "കല്യാണി പ്രിയദർശൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Kalyani Priyadarshan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kalyani Priyadarshan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "K. J. Yesudas",
        "civWordMal": "കെ. ജെ. യേശുദാസ്",
        "imposters": [
          {
            "word": "Alternative 1 for K. J. Yesudas",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for K. J. Yesudas",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "K. S. Chithra",
        "civWordMal": "കെ. എസ്. ചിത്ര",
        "imposters": [
          {
            "word": "Alternative 1 for K. S. Chithra",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for K. S. Chithra",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Sanju Samson",
        "civWordMal": "സഞ്ജു സാംസൺ",
        "imposters": [
          {
            "word": "Alternative 1 for Sanju Samson",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Sanju Samson",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Shashi Tharoor",
        "civWordMal": "ശശി തരൂർ",
        "imposters": [
          {
            "word": "Alternative 1 for Shashi Tharoor",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Shashi Tharoor",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Sreenivasan",
        "civWordMal": "ശ്രീനിവാസൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Sreenivasan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Sreenivasan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Salim Kumar",
        "civWordMal": "സലിം കുമാർ",
        "imposters": [
          {
            "word": "Alternative 1 for Salim Kumar",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Salim Kumar",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Urveshi",
        "civWordMal": "ഉർവ്വശി",
        "imposters": [
          {
            "word": "Alternative 1 for Urveshi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Urveshi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mukesh",
        "civWordMal": "മുകേഷ്",
        "imposters": [
          {
            "word": "Alternative 1 for Mukesh",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mukesh",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Biju Menon",
        "civWordMal": "ബിജു മേനോൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Biju Menon",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Biju Menon",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Pepe Antony",
        "civWordMal": "ആന്റണി വർഗ്ഗീസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Pepe Antony",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Pepe Antony",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
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
            "word": "Alternative 1 for Chaya Kada",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chaya Kada",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kallu Shappu",
        "civWordMal": "കള്ള് ഷാപ്പ്",
        "imposters": [
          {
            "word": "Alternative 1 for Kallu Shappu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kallu Shappu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "KSRTC",
        "civWordMal": "കെ എസ് ആർ ടി സി",
        "imposters": [
          {
            "word": "Alternative 1 for KSRTC",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for KSRTC",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Auto Rickshaw",
        "civWordMal": "ഓട്ടോ റിക്ഷ",
        "imposters": [
          {
            "word": "Alternative 1 for Auto Rickshaw",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Auto Rickshaw",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tharavadu",
        "civWordMal": "തറവാട്",
        "imposters": [
          {
            "word": "Alternative 1 for Tharavadu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tharavadu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Panchayath",
        "civWordMal": "പഞ്ചായത്ത്",
        "imposters": [
          {
            "word": "Alternative 1 for Panchayath",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Panchayath",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kudumbashree",
        "civWordMal": "കുടുംബശ്രീ",
        "imposters": [
          {
            "word": "Alternative 1 for Kudumbashree",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kudumbashree",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Anganwadi",
        "civWordMal": "അങ്കണവാടി",
        "imposters": [
          {
            "word": "Alternative 1 for Anganwadi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Anganwadi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Rubber Thottam",
        "civWordMal": "റബ്ബർ തോട്ടം",
        "imposters": [
          {
            "word": "Alternative 1 for Rubber Thottam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Rubber Thottam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tea Estate",
        "civWordMal": "തേയിലത്തോട്ടം",
        "imposters": [
          {
            "word": "Alternative 1 for Tea Estate",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tea Estate",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Thengu",
        "civWordMal": "തെങ്ങ്",
        "imposters": [
          {
            "word": "Alternative 1 for Thengu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Thengu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kuttanadan Padanilam",
        "civWordMal": "കുട്ടനാടൻ പാടനിലം",
        "imposters": [
          {
            "word": "Alternative 1 for Kuttanadan Padanilam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kuttanadan Padanilam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Puzha",
        "civWordMal": "പുഴ",
        "imposters": [
          {
            "word": "Alternative 1 for Puzha",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Puzha",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kaithari",
        "civWordMal": "കൈത്തറി",
        "imposters": [
          {
            "word": "Alternative 1 for Kaithari",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kaithari",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mazha",
        "civWordMal": "മഴ",
        "imposters": [
          {
            "word": "Alternative 1 for Mazha",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mazha",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tharavad",
        "civWordMal": "തറവാട്",
        "imposters": [
          {
            "word": "Alternative 1 for Tharavad",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tharavad",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Naadan Pattu",
        "civWordMal": "നാടൻ പാട്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Naadan Pattu",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Naadan Pattu",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kavala",
        "civWordMal": "കവല",
        "imposters": [
          {
            "word": "Alternative 1 for Kavala",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kavala",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Palli",
        "civWordMal": "പള്ളി",
        "imposters": [
          {
            "word": "Alternative 1 for Palli",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Palli",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ambalam",
        "civWordMal": "അമ്പലം",
        "imposters": [
          {
            "word": "Alternative 1 for Ambalam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ambalam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Lottery Ticket",
        "civWordMal": "ലോട്ടറി ടിക്കറ്റ്",
        "imposters": [
          {
            "word": "Alternative 1 for Lottery Ticket",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Lottery Ticket",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Hartal",
        "civWordMal": "ഹർത്താൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Hartal",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Hartal",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Vayanasala",
        "civWordMal": "വായനശാല",
        "imposters": [
          {
            "word": "Alternative 1 for Vayanasala",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Vayanasala",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chitty",
        "civWordMal": "ചിട്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Chitty",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chitty",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kavukal",
        "civWordMal": "കാവ്",
        "imposters": [
          {
            "word": "Alternative 1 for Kavukal",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kavukal",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kulam",
        "civWordMal": "കുളം",
        "imposters": [
          {
            "word": "Alternative 1 for Kulam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kulam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Milma",
        "civWordMal": "മിൽമ",
        "imposters": [
          {
            "word": "Alternative 1 for Milma",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Milma",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bevco",
        "civWordMal": "ബെവ്കോ",
        "imposters": [
          {
            "word": "Alternative 1 for Bevco",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bevco",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Akshaya Centre",
        "civWordMal": "അക്ഷയ കേന്ദ്രം",
        "imposters": [
          {
            "word": "Alternative 1 for Akshaya Centre",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Akshaya Centre",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Supplyco",
        "civWordMal": "സപ്ലൈകോ",
        "imposters": [
          {
            "word": "Alternative 1 for Supplyco",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Supplyco",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Vidyabhyasa Loan",
        "civWordMal": "വിദ്യാഭ്യാസ വായ്പ",
        "imposters": [
          {
            "word": "Alternative 1 for Vidyabhyasa Loan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Vidyabhyasa Loan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ration Kada",
        "civWordMal": "റേഷൻ കട",
        "imposters": [
          {
            "word": "Alternative 1 for Ration Kada",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ration Kada",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mahatma Gandhi NREGA",
        "civWordMal": "തൊഴിലുറപ്പ്",
        "imposters": [
          {
            "word": "Alternative 1 for Mahatma Gandhi NREGA",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mahatma Gandhi NREGA",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Current Bill",
        "civWordMal": "കറന്റ് ബിൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Current Bill",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Current Bill",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "KSEB",
        "civWordMal": "കെഎസ്ഇബി",
        "imposters": [
          {
            "word": "Alternative 1 for KSEB",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for KSEB",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Water Authority",
        "civWordMal": "വാട്ടർ അതോറിറ്റി",
        "imposters": [
          {
            "word": "Alternative 1 for Water Authority",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Water Authority",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
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
            "word": "Alternative 1 for Aanavandi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Aanavandi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Vallam",
        "civWordMal": "വള്ളം",
        "imposters": [
          {
            "word": "Alternative 1 for Vallam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Vallam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Autorickshaw",
        "civWordMal": "ഓട്ടോറിക്ഷ",
        "imposters": [
          {
            "word": "Alternative 1 for Autorickshaw",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Autorickshaw",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bullet",
        "civWordMal": "ബുള്ളറ്റ്",
        "imposters": [
          {
            "word": "Alternative 1 for Bullet",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bullet",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Houseboat",
        "civWordMal": "ഹൗസ്‌ബോട്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Houseboat",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Houseboat",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jankar",
        "civWordMal": "ജങ്കാർ",
        "imposters": [
          {
            "word": "Alternative 1 for Jankar",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jankar",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ferry",
        "civWordMal": "ഫെറി",
        "imposters": [
          {
            "word": "Alternative 1 for Ferry",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ferry",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chundan Vallam",
        "civWordMal": "ചുണ്ടൻ വള്ളം",
        "imposters": [
          {
            "word": "Alternative 1 for Chundan Vallam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chundan Vallam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kettuvallam",
        "civWordMal": "കെട്ടുവള്ളം",
        "imposters": [
          {
            "word": "Alternative 1 for Kettuvallam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kettuvallam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Pickup",
        "civWordMal": "പിക്കപ്പ്",
        "imposters": [
          {
            "word": "Alternative 1 for Pickup",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Pickup",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jeep",
        "civWordMal": "ജീപ്പ്",
        "imposters": [
          {
            "word": "Alternative 1 for Jeep",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jeep",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Lorry",
        "civWordMal": "ലോറി",
        "imposters": [
          {
            "word": "Alternative 1 for Lorry",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Lorry",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Private Bus",
        "civWordMal": "പ്രൈവറ്റ് ബസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Private Bus",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Private Bus",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tempo Traveller",
        "civWordMal": "ടെമ്പോ ട്രാവലർ",
        "imposters": [
          {
            "word": "Alternative 1 for Tempo Traveller",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tempo Traveller",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Scooter",
        "civWordMal": "സ്കൂട്ടർ",
        "imposters": [
          {
            "word": "Alternative 1 for Scooter",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Scooter",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Cycle",
        "civWordMal": "സൈക്കിൾ",
        "imposters": [
          {
            "word": "Alternative 1 for Cycle",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Cycle",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mini Bus",
        "civWordMal": "മിനി ബസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Mini Bus",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mini Bus",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Taxi",
        "civWordMal": "ടാക്സി",
        "imposters": [
          {
            "word": "Alternative 1 for Taxi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Taxi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Train",
        "civWordMal": "ട്രെയിൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Train",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Train",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "School Bus",
        "civWordMal": "സ്കൂൾ ബസ്",
        "imposters": [
          {
            "word": "Alternative 1 for School Bus",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for School Bus",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Jik Jik Train",
        "civWordMal": "തീവണ്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Jik Jik Train",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Jik Jik Train",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ambulance",
        "civWordMal": "ആംബുലൻസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Ambulance",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ambulance",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Kochi Metro",
        "civWordMal": "കൊച്ചി മെട്രോ",
        "imposters": [
          {
            "word": "Alternative 1 for Kochi Metro",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kochi Metro",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tractor",
        "civWordMal": "ട്രാക്ടർ",
        "imposters": [
          {
            "word": "Alternative 1 for Tractor",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tractor",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Excavator",
        "civWordMal": "ജെസിബി",
        "imposters": [
          {
            "word": "Alternative 1 for Excavator",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Excavator",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Speed Boat",
        "civWordMal": "സ്പീഡ് ബോട്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Speed Boat",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Speed Boat",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Peti Auto",
        "civWordMal": "പെട്ടി ഓട്ടോ",
        "imposters": [
          {
            "word": "Alternative 1 for Peti Auto",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Peti Auto",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Ambassador",
        "civWordMal": "അംബാസഡർ",
        "imposters": [
          {
            "word": "Alternative 1 for Ambassador",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Ambassador",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Mahindra Jeep",
        "civWordMal": "മഹീന്ദ്ര ജീപ്പ്",
        "imposters": [
          {
            "word": "Alternative 1 for Mahindra Jeep",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Mahindra Jeep",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Chavittu Vandi",
        "civWordMal": "ചവിട്ടുവണ്ടി",
        "imposters": [
          {
            "word": "Alternative 1 for Chavittu Vandi",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Chavittu Vandi",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "RX 100",
        "civWordMal": "ആർ എക്സ് 100",
        "imposters": [
          {
            "word": "Alternative 1 for RX 100",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for RX 100",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Torrus Truck",
        "civWordMal": "ടോറസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Torrus Truck",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Torrus Truck",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Fire Engine",
        "civWordMal": "ഫയർ ഫോഴ്സ്",
        "imposters": [
          {
            "word": "Alternative 1 for Fire Engine",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Fire Engine",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Water Metro",
        "civWordMal": "വാട്ടർ മെട്രോ",
        "imposters": [
          {
            "word": "Alternative 1 for Water Metro",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Water Metro",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Low Floor Bus",
        "civWordMal": "ലോ ഫ്ലോർ ബസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Low Floor Bus",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Low Floor Bus",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tourist Bus",
        "civWordMal": "ടൂറിസ്റ്റ് ബസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Tourist Bus",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tourist Bus",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
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
            "word": "Alternative 1 for Kalolsavam",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Kalolsavam",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Arts Day",
        "civWordMal": "ആർട്സ് ഡേ",
        "imposters": [
          {
            "word": "Alternative 1 for Arts Day",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Arts Day",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "College Canteen",
        "civWordMal": "കോളേജ് കാന്റീൻ",
        "imposters": [
          {
            "word": "Alternative 1 for College Canteen",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for College Canteen",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "PTA Meeting",
        "civWordMal": "പി ടി എ മീറ്റിംഗ്",
        "imposters": [
          {
            "word": "Alternative 1 for PTA Meeting",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for PTA Meeting",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Onam Celebration",
        "civWordMal": "ഓണാഘോഷം",
        "imposters": [
          {
            "word": "Alternative 1 for Onam Celebration",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Onam Celebration",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Uniform",
        "civWordMal": "യൂണിഫോം",
        "imposters": [
          {
            "word": "Alternative 1 for Uniform",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Uniform",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "School Bus",
        "civWordMal": "സ്കൂൾ ബസ്",
        "imposters": [
          {
            "word": "Alternative 1 for School Bus",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for School Bus",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "PT Period",
        "civWordMal": "പി ടി പിരീഡ്",
        "imposters": [
          {
            "word": "Alternative 1 for PT Period",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for PT Period",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Annual Day",
        "civWordMal": "ആനുവൽ ഡേ",
        "imposters": [
          {
            "word": "Alternative 1 for Annual Day",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Annual Day",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Exam Hall",
        "civWordMal": "എക്സാം ഹാൾ",
        "imposters": [
          {
            "word": "Alternative 1 for Exam Hall",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Exam Hall",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Rank List",
        "civWordMal": "റാങ്ക് ലിസ്റ്റ്",
        "imposters": [
          {
            "word": "Alternative 1 for Rank List",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Rank List",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "College Union",
        "civWordMal": "കോളേജ് യൂണിയൻ",
        "imposters": [
          {
            "word": "Alternative 1 for College Union",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for College Union",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Batch",
        "civWordMal": "ബാച്ച്",
        "imposters": [
          {
            "word": "Alternative 1 for Batch",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Batch",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Farewell",
        "civWordMal": "ഫെയർവെൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Farewell",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Farewell",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "NSS",
        "civWordMal": "എൻ എസ് എസ്",
        "imposters": [
          {
            "word": "Alternative 1 for NSS",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for NSS",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "NCC",
        "civWordMal": "എൻ സി സി",
        "imposters": [
          {
            "word": "Alternative 1 for NCC",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for NCC",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Laboratory",
        "civWordMal": "ലബോറട്ടറി",
        "imposters": [
          {
            "word": "Alternative 1 for Laboratory",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Laboratory",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Library",
        "civWordMal": "ലൈബ്രറി",
        "imposters": [
          {
            "word": "Alternative 1 for Library",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Library",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Hostel",
        "civWordMal": "ഹോസ്റ്റൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Hostel",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Hostel",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Class Leader",
        "civWordMal": "ക്ലാസ് ലീഡർ",
        "imposters": [
          {
            "word": "Alternative 1 for Class Leader",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Class Leader",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tour Trip",
        "civWordMal": "ഐവി / ടൂർ",
        "imposters": [
          {
            "word": "Alternative 1 for Tour Trip",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tour Trip",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bench and Desk",
        "civWordMal": "ബെഞ്ചും ഡെസ്കും",
        "imposters": [
          {
            "word": "Alternative 1 for Bench and Desk",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bench and Desk",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Bell",
        "civWordMal": "സ്കൂൾ ബെൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Bell",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Bell",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Principal",
        "civWordMal": "പ്രിൻസിപ്പൽ",
        "imposters": [
          {
            "word": "Alternative 1 for Principal",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Principal",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Assignment",
        "civWordMal": "അസൈൻമെന്റ്",
        "imposters": [
          {
            "word": "Alternative 1 for Assignment",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Assignment",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Alumni Meet",
        "civWordMal": "പൂർവ്വവിദ്യാർത്ഥി സംഗമം",
        "imposters": [
          {
            "word": "Alternative 1 for Alumni Meet",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Alumni Meet",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "IV (Industrial Visit)",
        "civWordMal": "ഐവി",
        "imposters": [
          {
            "word": "Alternative 1 for IV (Industrial Visit)",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for IV (Industrial Visit)",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Tuition Class",
        "civWordMal": "ട്യൂഷൻ ക്ലാസ്",
        "imposters": [
          {
            "word": "Alternative 1 for Tuition Class",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Tuition Class",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Canara Bank Challan",
        "civWordMal": "ചെല്ലാൻ",
        "imposters": [
          {
            "word": "Alternative 1 for Canara Bank Challan",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Canara Bank Challan",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Record Book",
        "civWordMal": "റെക്കോർഡ് ബുക്ക്",
        "imposters": [
          {
            "word": "Alternative 1 for Record Book",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Record Book",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Study Leave",
        "civWordMal": "സ്റ്റഡി ലീവ്",
        "imposters": [
          {
            "word": "Alternative 1 for Study Leave",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Study Leave",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Youth Festival",
        "civWordMal": "യുവജനോത്സവം",
        "imposters": [
          {
            "word": "Alternative 1 for Youth Festival",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Youth Festival",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Progress Report",
        "civWordMal": "പ്രോഗ്രസ് റിപ്പോർട്ട്",
        "imposters": [
          {
            "word": "Alternative 1 for Progress Report",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Progress Report",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Geometry Box",
        "civWordMal": "ജോമട്രി ബോക്സ്",
        "imposters": [
          {
            "word": "Alternative 1 for Geometry Box",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Geometry Box",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "Slate and Pencil",
        "civWordMal": "സ്ലേറ്റും പെൻസിലും",
        "imposters": [
          {
            "word": "Alternative 1 for Slate and Pencil",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for Slate and Pencil",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
          }
        ]
      },
      {
        "civWord": "School Bag",
        "civWordMal": "സ്കൂൾ ബാഗ്",
        "imposters": [
          {
            "word": "Alternative 1 for School Bag",
            "wordMal": "പകരം 1",
            "relationEN": "Both are highly specific concepts related to the original category.",
            "relationML": "രണ്ടും വളരെ സമാനമായ കാര്യങ്ങളാണ്."
          },
          {
            "word": "Alternative 2 for School Bag",
            "wordMal": "പകരം 2",
            "relationEN": "Both share a unique trait that makes them a tricky pair.",
            "relationML": "രണ്ടും ഒരേ സ്വഭാവമുള്ളവയാണ്."
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
