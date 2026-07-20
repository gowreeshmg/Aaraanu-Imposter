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
            "relationEN": "Both Pwoli and Kidu are popular Malayalam slang words used by youth to express that something is extraordinarily awesome or excellent.",
            "relationML": "പൊളിയും കിടുവും യുവാക്കൾക്കിടയിൽ വളരെ മികച്ചതോ അതിശയകരമായതോ ആയ കാര്യങ്ങളെ വിശേഷിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ജനപ്രിയ മലയാളം സ്ലാംഗ് വാക്കുകളാണ്."
          },
          {
            "word": "Adipoli",
            "wordMal": "അടിപൊളി",
            "relationEN": "Both Pwoli and Adipoli are colloquial Malayalam expressions used to describe an event, place, or thing that is remarkably fantastic or enjoyable.",
            "relationML": "ഒരു സംഭവത്തെയോ സ്ഥലത്തെയോ വസ്തുവിനെയോ വളരെ മികച്ചതോ ആസ്വാദ്യകരമോ എന്ന് വിശേഷിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന സാധാരണ മലയാളം പ്രയോഗങ്ങളാണ് പൊളിയും അടിപൊളിയും."
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
            "relationEN": "Both Ayyayyo and Ente Ammo are spontaneous Malayalam exclamations commonly blurted out in moments of sudden pain, intense shock, or deep fear.",
            "relationML": "പെട്ടെന്നുള്ള വേദനയോ കടുത്ത ഞെട്ടലോ അഗാധമായ ഭയമോ ഉണ്ടാകുമ്പോൾ സ്വാഭാവികമായി പുറത്തുവരുന്ന മലയാളം ആശ്ചര്യപ്രകടനങ്ങളാണ് അയ്യയ്യോ, എൻ്റെ അമ്മോ എന്നിവ."
          },
          {
            "word": "Kashtam",
            "wordMal": "കഷ്ടം",
            "relationEN": "Both Ayyayyo and Kashtam are everyday Malayalam expressions used to express pity, sorrow, or sympathy upon hearing about someone's misfortune or a tragic event.",
            "relationML": "ഒരാളുടെ ദുരവസ്ഥയോ ദാരുണമായ സംഭവമോ കേൾക്കുമ്പോൾ സഹതാപമോ സങ്കടമോ പ്രകടിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന ദൈനംദിന മലയാളം പ്രയോഗങ്ങളാണ് അയ്യയ്യോ, കഷ്ടം എന്നിവ."
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
            "relationEN": "Both Manichitrathazhu and Anandabhadram are classic Malayalam supernatural thrillers set in ancient ancestral mansions revolving around myths, dark magic, and folklore.",
            "relationML": "പുരാതന തറവാടുകളുടെ പശ്ചാത്തലത്തിൽ മിത്തുകളെയും ദുർമന്ത്രവാദത്തെയും നാടോടിക്കഥകളെയും ചുറ്റിപ്പറ്റി നടക്കുന്ന ക്ലാസിക് മലയാളം അമാനുഷിക ത്രില്ലറുകളാണ് മണിച്ചിത്രത്താഴും അനന്തഭദ്രവും."
          },
          {
            "word": "Aakasha Ganga",
            "wordMal": "ആകാശഗംഗ",
            "relationEN": "Both Manichitrathazhu and Aakasha Ganga are prominent Malayalam horror films featuring a vengeful female spirit possessing someone within a traditional Nair family setting.",
            "relationML": "ഒരു പരമ്പരാഗത നായർ തറവാടിൻ്റെ പശ്ചാത്തലത്തിൽ ഒരാളിൽ പ്രവേശിക്കുന്ന പ്രതികാരദാഹിയായ ഒരു സ്ത്രീയുടെ ആത്മാവിനെ അവതരിപ്പിക്കുന്ന പ്രശസ്തമായ മലയാളം ഹൊറർ സിനിമകളാണ് മണിച്ചിത്രത്താഴും ആകാശഗംഗയും."
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
            "relationEN": "Both are hot brewed drinks served in small glasses at Kerala tea stalls, one made from tea leaves and the other from coffee beans.",
            "relationML": "ചായയും കാപ്പിയും കേരളത്തിലെ ചായക്കടകളിൽ ചെറിയ ഗ്ലാസ്സിൽ വിളമ്പുന്ന ചൂടുള്ള പാനീയങ്ങളാണ്, ഒന്ന് ചായ ഇലകൾ കൊണ്ടും മറ്റൊന്ന് കോഫി പൊടി കൊണ്ടും ഉണ്ടാക്കുന്നു."
          },
          {
            "word": "Kattan Chaya",
            "wordMal": "കട്ടൻ ചായ",
            "relationEN": "Both are tea-based hot drinks; Chaya is milky and sweet while Kattan Chaya is strong black tea without milk.",
            "relationML": "ചായയും കട്ടൻ ചായയും ചായ ഇലകൾ കൊണ്ട് ഉണ്ടാക്കുന്ന ഗ്ലാസ്സ് പാനീയങ്ങളാണ്; ചായ പഞ്ചസാരയും പാലും ഉള്ളതും കട്ടൻ ചായ കറുത്ത ദ്രാവകവുമാണ്."
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
            "relationEN": "Both are crispy deep-fried or baked snacks with a stuffed filling sold at Kerala bakeries.",
            "relationML": "പഫ്സും സമോസയും കേരള ബേക്കറികളിൽ വിൽക്കുന്ന, ഫില്ലിംഗ് നിറഞ്ഞ, പൊരിച്ചതോ ബേക്ക് ചെയ്തതോ ആയ ഒരുതരം ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Cutlet",
            "wordMal": "കട്ട്‌ലെറ്റ്",
            "relationEN": "Both are popular bakery snacks in Kerala with a crispy outer layer and a savory filling inside.",
            "relationML": "പഫ്സും കട്ട്‌ലറ്റും കേരളത്തിൽ ജനപ്രിയമായ ബേക്കറി ലഘുഭക്ഷണങ്ങളാണ്, രണ്ടിനും പുറത്ത് ക്രിസ്‌പി പൂശ്ശും അകത്ത് മസാലചേർന്ന ഫില്ലിംഗും ഉണ്ട്."
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
            "relationEN": "Both are fried Kerala snacks made from ground lentil batter served hot with chutney at tea stalls.",
            "relationML": "ഉഴുന്ന് വടയും പരിപ്പ് വടയും കേരള ചായക്കടകളിൽ ചട്ണിയോടൊപ്പം ചൂടോടെ വിളമ്പുന്ന, അരച്ച പരിപ്പ് ബാറ്ററിൽ നിർമ്മിക്കുന്ന വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Ulli Vada",
            "wordMal": "ഉള്ളി വട",
            "relationEN": "Both are round deep-fried vada snacks from Kerala, differing mainly in the batter—urad dal vs onion.",
            "relationML": "ഉഴുന്ന് വടയും ഉള്ളി വടയും കേരളത്തിൽ നിന്നുള്ള ഉരുണ്ട, ആഴത്തിൽ വറുത്ത വട ലഘുഭക്ഷണങ്ങളാണ്; ബാറ്ററിൽ ഒന്ന് ഉഴുന്നും മറ്റൊന്ന് ഉള്ളിയും ഉപയോഗിക്കുന്നു."
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
            "relationEN": "Both are egg or banana coated in batter and deep-fried, common evening snacks in Kerala.",
            "relationML": "മുട്ട ബജിയും പഴംപൊരിയും ബാറ്ററിൽ മുക്കി വറുത്ത, കേരളത്തിൽ വൈകുന്നേരം സർവ്വസാധാരണമായ ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Mulaku Baji",
            "wordMal": "മുളകു ബജ്ജി",
            "relationEN": "Both are baji snacks deep-fried in a gram-flour batter, one uses egg and the other uses green chilli.",
            "relationML": "മുട്ട ബജിയും മുളക് ബജ്ജിയും കടലമാവ് ബാറ്ററിൽ ആഴത്തിൽ വറുത്ത ബജ്ജി ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് മുട്ടയും മറ്റൊന്ന് പച്ചമുളകും ഉപയോഗിക്കുന്നു."
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
            "relationEN": "Both are steamed sweet rice dumplings with a coconut and jaggery filling, popular as Kerala festival snacks.",
            "relationML": "കൊഴുക്കട്ടയും ഇല അടയും ഒരേ തേങ്ങ-ശർക്കര ഫില്ലിംഗ് ഉള്ള, ആവിയിൽ വേവിക്കുന്ന ചോറ് കൊണ്ടുള്ള മധുര ലഘുഭക്ഷണങ്ങളാണ്, കേരള ഉത്സവ നേരങ്ങളിൽ ജനപ്രിയമാണ്."
          },
          {
            "word": "Modakam",
            "wordMal": "മോദകം",
            "relationEN": "Both are steamed rice flour dumplings filled with sweet coconut and jaggery, one is Kerala-style and the other is used in Ganesh Chaturthi.",
            "relationML": "കൊഴുക്കട്ടയും മോദകവും ഒരേ തേങ്ങ-ശർക്കര ഫില്ലിംഗ് ഉള്ള ആരിടിമാവ് ഉരുളകളാണ്; ഒന്ന് കേരള ശൈലിയും മറ്റൊന്ന് ഗണേശ ചതുർഥി ആഘോഷങ്ങളിൽ ഉപയോഗിക്കുന്നതുമാണ്."
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
            "relationEN": "Both are popular Kerala bakery snacks with a spiced meat filling, the cutlet is flat and the roll is cylindrical.",
            "relationML": "കട്ട്‌ലറ്റും മീറ്റ് റോളും ഒരേ മസാലക്കറി ഫില്ലിംഗ് ഉള്ള ജനപ്രിയ കേരള ബേക്കറി ലഘുഭക്ഷണങ്ങളാണ്; കട്ട്‌ലറ്റ് പരന്നതും റോൾ ഉരുണ്ടതുമാണ്."
          },
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Both are savory deep-fried snacks with spiced stuffing popular at Kerala tea shops, served alongside evening tea.",
            "relationML": "കട്ട്‌ലറ്റും സമോസയും കേരള ചായക്കടകളിൽ ജനപ്രിയ, മസാലചേർന്ന ഫില്ലിംഗ് ഉള്ള, ആഴത്തിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are triangle or rectangular snacks with a savory filling, sold from glass cases at Kerala bakeries.",
            "relationML": "സമോസയും പഫ്സും ഒരേ കേരള ബേക്കറികളിൽ ഗ്ലാസ് കൂടുകളിൽ വിൽക്കുന്ന, മസാലചേർന്ന ഫില്ലിംഗ് ഉള്ള ത്രികോണ അല്ലെങ്കിൽ ചതുർഭുജ ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Meat Roll",
            "wordMal": "മീറ്റ് റോൾ",
            "relationEN": "Both are stuffed and fried snacks sold at bakeries across Kerala, one with a pastry shell and one with a bread crumb coating.",
            "relationML": "സമോസയും മീറ്റ് റോളും കേരളത്തിലുടനീളം ബേക്കറികളിൽ വിൽക്കുന്ന, ഫില്ലിംഗ് ഉള്ള വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് പേസ്ട്രി ഷെൽ ഉള്ളതും മറ്റൊന്ന് ബ്രഡ് ക്രം പൂശ്ശ് ഉള്ളതുമാണ്."
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
            "relationEN": "Both are round, deep-fried sweet snacks made with coconut and lentil fillings, popular at tea stalls.",
            "relationML": "ബൊണ്ടയും സൂഖിയനും ഒരേ ഉരുണ്ട, ആഴത്തിൽ വറുത്ത, തേങ്ങ-പരിപ്പ് ഫില്ലിംഗ് ഉള്ള മധുര ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Uzhunnu Vada",
            "wordMal": "ഉഴുന്ന് വട",
            "relationEN": "Both are lentil-based deep-fried snacks served hot with coconut chutney as a tea-time snack in Kerala.",
            "relationML": "ബൊണ്ടയും ഉഴുന്ന് വടയും കേരളത്തിൽ ചായ സമയത്ത് തേങ്ങ ചട്ണിയോടൊപ്പം ചൂടോടെ വിളമ്പുന്ന, പരിപ്പ് ആധാരിതമായ, ആഴത്തിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are flat, round deep-fried lentil vadas, staple snacks at Kerala tea shops with coconut chutney.",
            "relationML": "പരിപ്പ് വടയും ഉഴുന്ന് വടയും കേരള ചായക്കടകളിൽ തേങ്ങ ചട്ണിയോടൊപ്പം നൽകുന്ന, പരിപ്പ് കൊണ്ട് ഉണ്ടാക്കുന്ന, പരന്ന, ഉരുണ്ട, ആഴത്തിൽ വറുത്ത പ്രധാന ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Ulli Vada",
            "wordMal": "ഉള്ളി വട",
            "relationEN": "Both are crispy deep-fried vada snacks served at Kerala tea stalls, with a crunchy exterior and soft core.",
            "relationML": "പരിപ്പ് വടയും ഉള്ളി വടയും കേരള ചായക്കടകളിൽ വിളമ്പുന്ന, പുറത്ത് ക്രിസ്‌പിയും അകത്ത് മൃദുലവുമായ, ആഴത്തിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are sweet rice dumplings with coconut-jaggery filling made during Kerala festivals like Vishu and Onam.",
            "relationML": "ഇല അടയും കൊഴുക്കട്ടയും കേരളത്തിൽ വിഷു, ഓണം എന്നീ ആഘോഷങ്ങളിൽ ഉണ്ടാക്കുന്ന, തേങ്ങ-ശർക്കര ഫില്ലിംഗ് ഉള്ള, മധുര ചോറ് ഉരുളകളാണ്."
          },
          {
            "word": "Ilayappam",
            "wordMal": "ഇലയപ്പം",
            "relationEN": "Both are steamed rice dishes wrapped or cooked in banana leaves, carrying the distinct aroma of the leaf.",
            "relationML": "ഇല അടയും ഇലയപ്പവും വാഴ ഇലകളിൽ പൊതിഞ്ഞ് അല്ലെങ്കിൽ ആ ഇലയ്ക്ക് മേൽ ഉണ്ടാക്കുന്ന, ആ ഇലയുടെ സ്വന്തം സുഗന്ധം ഉള്ള, ആവിയിൽ വേവിക്കുന്ന ചോറ് ഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are crispy deep-fried rice flour snacks from Kerala, one is rose-cookie shaped and the other is cylindrical.",
            "relationML": "അച്ചപ്പവും കുഴലപ്പവും കേരളത്തിൽ നിന്നുള്ള, ആരിടിമാവ് കൊണ്ട് ഉണ്ടാക്കുന്ന, ക്രിസ്‌പി, ആഴത്തിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് റോസ് കുക്കി ആകൃതിയിലും മറ്റൊന്ന് കുഴൽ ആകൃതിയിലുമാണ്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Both are crunchy deep-fried rice flour snacks traditionally made at home for Kerala festivals and celebrations.",
            "relationML": "അച്ചപ്പവും മുറുക്കും കേരള ഉത്സവങ്ങൾക്കും ആഘോഷങ്ങൾക്കും വേണ്ടി വീടുകളിൽ ഉണ്ടാക്കുന്ന, ആരിടിമാവ് കൊണ്ടുള്ള, ക്രഞ്ചി, ആഴത്തിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are small round rice flour pancakes fried in iron moulds with coconut and jaggery, a beloved Kerala sweet.",
            "relationML": "ഉണ്ണിയപ്പവും നെയ്യപ്പവും ഇരുമ്പ് അച്ചുകളിൽ തേങ്ങയും ശർക്കരയും ഉള്ള ആരിടിമാവ് കൊണ്ട് ഉണ്ടാക്കുന്ന, ഉരുണ്ട ചെറിയ, കേരളത്തിൽ ഏറ്റവും പ്രിയപ്പെട്ട മധുരങ്ങളാണ്."
          },
          {
            "word": "Kinnathappam",
            "wordMal": "കിണ്ണത്തപ്പം",
            "relationEN": "Both are soft, sweet steamed or fried rice snacks made with jaggery and coconut as festival treats in Kerala.",
            "relationML": "ഉണ്ണിയപ്പവും കിണ്ണത്തപ്പവും ശർക്കരയും തേങ്ങയും ഉള്ള, കേരളത്തിൽ ഉത്സവ വേളകളിൽ ഉണ്ടാക്കുന്ന, മൃദുലമായ, മധുര, ആരിടിമാവ് ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are thin, crispy fried chips made from Kerala crops—one from raw banana and the other from tapioca.",
            "relationML": "ബനാന ചിപ്സും കപ്പ ചിപ്സും കേരളത്തിൽ ഉൽഭവിക്കുന്ന ഉൽഭവ വസ്തുക്കൾ കൊണ്ടുള്ള, നേർത്ത, ക്രിസ്‌പി, വറുത്ത ചിപ്സ് ആണ്; ഒന്ന് പച്ചക്കദളി കൊണ്ടും മറ്റൊന്ന് കപ്പ കൊണ്ടുമാണ്."
          },
          {
            "word": "Sharkara Upperi",
            "wordMal": "ശർക്കര ഉപ്പേരി",
            "relationEN": "Both are made from raw banana slices in Kerala—banana chips are savory and Sharkara Upperi is coated with jaggery.",
            "relationML": "ബനാന ചിപ്സും ശർക്കര ഉപ്പേരിയും കേരളത്തിൽ പച്ചക്കദളി ഉപയോഗിച്ചാണ് ഉണ്ടാക്കുന്നത്; ബനാന ചിപ്സ് ഉപ്പ് സ്വഭാവം ഉള്ളതും ശർക്കര ഉപ്പേരി ശർക്കരപ്പൂ പൂശ്ശ് ഉള്ളതുമാണ്."
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
            "relationEN": "Both are banana-based crunchy snacks from Kerala, one sweet and jaggery-coated, one salted and crispy.",
            "relationML": "ശർക്കര ഉപ്പേരിയും ബനാന ചിപ്സും കേരളത്തിൽ നിന്നുള്ള, ക്കദളി ആധാരിതമായ ക്രഞ്ചി ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് മധുരവും ശർക്കരപ്പൂ ഉള്ളതും, മറ്റൊന്ന് ഉപ്പ് ചേർന്ന ക്രിസ്‌പിയും ആണ്."
          },
          {
            "word": "Achappam",
            "wordMal": "അച്ചപ്പം",
            "relationEN": "Both are traditional Onam and festival sweets made at home in Kerala with rice flour or banana as the base.",
            "relationML": "ശർക്കര ഉപ്പേരിയും അച്ചപ്പവും കേരളത്തിൽ ഓണം, ഉത്സവ വേളകളിൽ ആരിടിമാവ് അല്ലെങ്കിൽ ക്കദളി ആധാരമായി വീടുകളിൽ ഉണ്ടാക്കുന്ന, പരമ്പരാഗത മധുര ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are crunchy sliced chips from Kerala, made from root vegetables or plantain, sold by roadside shops.",
            "relationML": "കപ്പ ചിപ്സും ബനാന ചിപ്സും കേരളത്തിൽ റോഡ് വക്കിലെ കടകളിൽ വിൽക്കുന്ന, ചോറ് സസ്യങ്ങൾ അല്ലെങ്കിൽ ക്കദളി കൊണ്ടുള്ള, ക്രഞ്ചി, അരിഞ്ഞ ചിപ്സ് ആണ്."
          },
          {
            "word": "Pakkavada",
            "wordMal": "പക്കാവട",
            "relationEN": "Both are crunchy, oil-fried Kerala snacks sold in shops with tea, one from tapioca and one from rice flour strips.",
            "relationML": "കപ്പ ചിപ്സും പക്കാവടയും കേരളത്തിൽ ചായക്കൊപ്പം കടകളിൽ വിൽക്കുന്ന, ക്രഞ്ചി, എണ്ണയിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് കപ്പ കൊണ്ടും മറ്റൊന്ന് ആരിടിമാവ് കൊണ്ടുമാണ്."
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
            "relationEN": "Both are made from the same roasted rice flour base—Avalose Podi is loose powder and Avalose Unda is a ball.",
            "relationML": "അവലോസ് പൊടിയും അവലോസ് ഉണ്ടയും ഒരേ വറുത്ത ആരിടിപ്പൊടി ആധാരത്തിൽ ഉണ്ടാക്കുന്നതാണ്; അവലോസ് പൊടി അടിത്തള്ളൽ രൂപത്തിലും അവലോസ് ഉണ്ട ഉരുള ആകൃതിയിലുമാണ്."
          },
          {
            "word": "Churuttu",
            "wordMal": "ചുരുട്ട്",
            "relationEN": "Both are traditional Kerala sweets made from roasted rice flour and jaggery, one is powdery and one is rolled.",
            "relationML": "അവലോസ് പൊടിയും ചുരുട്ടും കേരളത്തിൽ വറുത്ത ആരിടിപ്പൊടിയും ശർക്കരയും ഉപയോഗിച്ച് ഉണ്ടാക്കുന്ന, പരമ്പരാഗത മധുരങ്ങളാണ്; ഒന്ന് പൊടിരൂപത്തിലും മറ്റൊന്ന് ചുരുൾ ആകൃതിയിലുമാണ്."
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
            "relationEN": "Both are crispy, deep-fried Kerala festival snacks made from rice flour using specially shaped moulds.",
            "relationML": "കുഴലപ്പവും അച്ചപ്പവും ആരിടിമാവ് ഉപയോഗിച്ച്, പ്രത്യേക ആകൃതി ഉള്ള ഉപകരണങ്ങൾ ഉപയോഗിച്ച് ഉണ്ടാക്കുന്ന, കേരള ഉത്സവ ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Both are crispy hollow or spiral-shaped fried rice snacks that make a crunching sound when eaten.",
            "relationML": "കുഴലപ്പവും മുറുക്കും ആഴത്തിൽ വറുത്ത, ഉള്ളൊ ഒഴിഞ്ഞ അല്ലെങ്കിൽ ചുരുൾ ആകൃതിയിലുള്ള, കഴിക്കുമ്പോൾ ക്രഞ്ചി ശബ്ദം ഉണ്ടാക്കുന്ന ആരിടി ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are soft, steamed Kerala rice sweets cooked in vessels—one in a plate and the other in an earthen pot.",
            "relationML": "കിണ്ണത്തപ്പവും കലത്തപ്പവും കേരളത്തിൽ പാത്രങ്ങളിൽ ആവിയിൽ പാകം ചെയ്യുന്ന, മൃദുലമായ, ആരിടി മധുരങ്ങളാണ്; ഒന്ന് തട്ടത്തിലും മറ്റൊന്ന് മൺ കലത്തിലുമാണ്."
          },
          {
            "word": "Unniyappam",
            "wordMal": "ഉണ്ണിയപ്പം",
            "relationEN": "Both are soft, sweet Kerala rice snacks with jaggery and coconut, enjoyed during festivals and celebrations.",
            "relationML": "കിണ്ണത്തപ്പവും ഉണ്ണിയപ്പവും ശർക്കരയും തേങ്ങയും ഉള്ള, ഉത്സവങ്ങളിൽ ആസ്വദിക്കുന്ന, മൃദുലമായ, മധുര കേരള ആരിടി ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are rolled or ball-shaped traditional Kerala sweets made from rice flour and coconut with jaggery.",
            "relationML": "ചുരുട്ടും അവലോസ് ഉണ്ടയും ആരിടിമാവ്, തേങ്ങ, ശർക്കര ഉപയോഗിച്ചുണ്ടാക്കുന്ന, ചുരൾ ആകൃതിയിലോ ഉരുള ആകൃതിയിലോ ഉള്ള, പരമ്പരാഗത കേരള മധുരങ്ങളാണ്."
          },
          {
            "word": "Kuzhalappam",
            "wordMal": "കുഴലപ്പം",
            "relationEN": "Both are cylindrical-shaped crispy snacks made from rice flour and used as festival treats in Kerala homes.",
            "relationML": "ചുരുട്ടും കുഴലപ്പവും ആരിടിമാവ് കൊണ്ടുണ്ടാക്കുന്ന, കേരള ഉത്സവ ലഘുഭക്ഷണങ്ങളായ, കുഴൽ ആകൃതിയിലുള്ള ക്രിസ്‌പി ഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are intensely sweet Indian desserts made with sugar syrup—Halwa is dense and Jalebi is syrup-soaked spirals.",
            "relationML": "ഹൽവയും ജിലേബിയും ഒരേ പഞ്ചസാര സിറപ്പ് ഉപയോഗിച്ചുണ്ടാക്കുന്ന, തീക്ഷ്ണ മധുര ഇന്ത്യൻ ഡെസർട്ടുകളാണ്; ഹൽവ കട്ടിയുള്ളതും ജിലേബി സിറപ്പ് കുതിർന്ന ചുരുളുകളുമാണ്."
          },
          {
            "word": "Laddoo",
            "wordMal": "ലഡ്ഡു",
            "relationEN": "Both are festive Indian sweets gifted during celebrations—Halwa is a soft dessert and Laddoo is a round ball.",
            "relationML": "ഹൽവയും ലഡ്ഡൂവും ഉത്സവ വേളകളിൽ സമ്മാനമായി നൽകുന്ന, ഇന്ത്യൻ മധുരങ്ങളാണ്; ഹൽവ മൃദുലമായ ഡെസർട്ടും ലഡ്ഡൂ ഉരുണ്ട ഉരുളയുമാണ്."
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
            "relationEN": "Both are round, deep-fried Kerala snacks with a sweet filling of coconut and green gram inside.",
            "relationML": "സൂഖിയനും ബൊണ്ടയും ഒരേ തേങ്ങ-ചെറുപയർ ഫില്ലിംഗ് ഉള്ള, ഉരുണ്ട, ആഴത്തിൽ വറുത്ത, കേരള ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Modakam",
            "wordMal": "മോദകം",
            "relationEN": "Both are sweet-filled rice or wheat dumplings with green gram and coconut, offered as prasadam in temples.",
            "relationML": "സൂഖിയനും മോദകവും ചെറുപയറും തേങ്ങയും ഉള്ള, ദേവാലയങ്ങളിൽ പ്രസാദമായി നൽകുന്ന, മധുര ഫില്ലിംഗ് ഉള്ള, ആരിടി അല്ലെങ്കിൽ ഗോതമ്പ് ഉരുളകളാണ്."
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
            "relationEN": "Both are batter-coated and deep-fried snacks served hot—one uses bread slices and the other uses banana.",
            "relationML": "ബ്രഡ് പകോടയും പഴംപൊരിയും ബാറ്ററിൽ മുക്കി ആഴത്തിൽ വറുത്ത, ചൂടോടെ നൽകുന്ന ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് ബ്രഡ് ഉപയോഗിക്കുന്നതും മറ്റൊന്ന് ക്കദളി ഉപയോഗിക്കുന്നതുമാണ്."
          },
          {
            "word": "Mutta Baji",
            "wordMal": "മുട്ട ബജ്ജി",
            "relationEN": "Both are gram-flour batter fried snacks—one using bread and one using egg—popular in Kerala evening tea time.",
            "relationML": "ബ്രഡ് പകോടയും മുട്ട ബജിയും കടലമാവ് ബാറ്ററിൽ വറുത്ത ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് ബ്രഡ് ഉള്ളതും മറ്റൊന്ന് മുട്ട ഉള്ളതും ആണ്, കേരളത്തിൽ വൈകുന്നേര ചായ സമയത്ത് ജനപ്രിയമാണ്."
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
            "relationEN": "Both are Indian sweets made with sugar and deep-frying, popular during festivals and given as gifts.",
            "relationML": "ലഡ്ഡൂവും ജിലേബിയും ഉത്സവ വേളകളിൽ ജനപ്രിയ, പഞ്ചസാരയും, ആഴ്ത്തി വറുക്കലും ഉള്ള ഇന്ത്യൻ മധുരങ്ങളാണ്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Both are traditional Indian festival sweets—Laddoo is sphere-shaped and Halwa is a soft dessert pudding.",
            "relationML": "ലഡ്ഡൂവും ഹൽവയും ഒരേ ഉത്സവ ആചാരം ഉള്ള, പരമ്പരാഗത ഇന്ത്യൻ മധുരങ്ങളാണ്; ലഡ്ഡൂ ഗോളാകൃതിയിലും ഹൽവ മൃദുലമായ ഡെസർട്ട് പുഡ്ഡിംഗ് ആകൃതിയിലുമാണ്."
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
            "relationEN": "Both are brightly colored, festive Indian sweets distributed during weddings and celebrations.",
            "relationML": "ജിലേബിയും ലഡ്ഡൂവും വിവാഹങ്ങളിലും ആഘോഷങ്ങളിലും വിതരണം ചെയ്യുന്ന, തിളങ്ങുന്ന നിറത്തിലുള്ള, ഉത്സവ ഇന്ത്യൻ മധുരങ്ങളാണ്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Both are hot, sweet Indian desserts served during festivals—Jalebi is syrupy spirals and Halwa is a dense pudding.",
            "relationML": "ജിലേബിയും ഹൽവയും ഉത്സവ വേളകളിൽ ഗ്രഹിക്കുന്ന, ചൂടുള്ള, മധുര ഇന്ത്യൻ ഡെസർട്ടുകളാണ്; ജിലേബി സിറപ്പ് ചുരുളുകളും ഹൽവ കട്ടി പുഡ്ഡിംഗ് ആകൃതിയിലുമാണ്."
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
            "relationEN": "Both are popular Kerala bakery snacks with minced meat filling, one is flat and crumbed and one is cylindrical.",
            "relationML": "മീറ്റ് റോളും കട്ട്‌ലറ്റും ഒരേ അരിഞ്ഞ ഇറച്ചി ഫില്ലിംഗ് ഉള്ള, ജനപ്രിയ കേരള ബേക്കറി ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് പരന്നതും ബ്രഡ്ക്രം ഉള്ളതും, മറ്റൊന്ന് കുഴൽ ആകൃതിയിലുമാണ്."
          },
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Both are stuffed snacks with a crispy outer shell sold side by side at Kerala bakeries with tea.",
            "relationML": "മീറ്റ് റോളും സമോസയും ക്രിസ്‌പി പൊതിഞ്ഞ, ഫില്ലിംഗ് ഉള്ള ലഘുഭക്ഷണങ്ങളാണ്, കേരള ബേക്കറികളിൽ ചായക്കൊപ്പം തൊട്ടടുത്ത് വിൽക്കുന്നത്."
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
            "relationEN": "Both are Kerala festival sweets traditionally made during Onam and Vishu, one is a stuffed flatbread and the other a pudding.",
            "relationML": "ബോളിയും പായസവും ഒരേ ഓണം, വിഷു ഉത്സവ ആചാരം ഉള്ള, കേരള മധുരങ്ങളാണ്; ബോളി ഫില്ലിംഗ് ഉള്ള ചപ്പാത്തി ആകൃതിയും പായസം ഒഴുകുന്ന ഡെസർട്ടുമാണ്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Both are sweet, soft, festive South Indian desserts made with dal or wheat, typical at Kerala celebrations.",
            "relationML": "ബോളിയും ഹൽവയും ദൽ അല്ലെങ്കിൽ ഗോതമ്പ് ഉള്ള, കേരള ആഘോഷങ്ങളിൽ ഉണ്ടാക്കുന്ന, മൃദുലമായ, ഉത്സവ ദക്ഷിണ ഇന്ത്യൻ ഡെസർട്ടുകളാണ്."
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
            "relationEN": "Both are layered or rolled baked dishes with a spiced meat filling, popular in Malabar Kerala cuisine.",
            "relationML": "ചട്ടി പത്തിരിയും മീറ്റ് റോളും മലബാർ കേരള പാചകരീതിയിൽ ജനപ്രിയ, മസാലചേർന്ന ഇറച്ചി ഫില്ലിംഗ് ഉള്ള, ആലയിൽ ആക്കിയ ഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Samosa",
            "wordMal": "സമോസ",
            "relationEN": "Both are pastry-covered snacks with a spiced filling, common in Kerala Muslim households and bakeries.",
            "relationML": "ചട്ടി പത്തിരിയും സമോസയും കേരള മുസ്ലിം ഗൃഹങ്ങളിലും ബേക്കറികളിലും സർവ്വസാധാരണ, മസാല ഫില്ലിംഗ് ഉള്ള, പേസ്ട്രി പൊതിഞ്ഞ ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are popular Christmas sweets sold at Kerala bakeries, one is a diamond-shaped fried cake and the other is a fruit-studded baked one.",
            "relationML": "വേറ്റ് കേക്കും പ്ലം കേക്കും കേരള ബേക്കറികളിൽ ക്രിസ്തുമസ് കാലത്ത് ജനപ്രിയ മധുരങ്ങളാണ്; ഒന്ന് ഡയമണ്ട് ആകൃതിയിൽ വറുത്ത കേക്കും, മറ്റൊന്ന് പഴങ്ങൾ ചേർന്ന ബേക്ക് ചെയ്ത കേക്കുമാണ്."
          },
          {
            "word": "Bonda",
            "wordMal": "ബോണ്ട",
            "relationEN": "Both are round or diamond-shaped deep-fried sweet snacks enjoyed with tea at Kerala bakeries.",
            "relationML": "വേറ്റ് കേക്കും ബൊണ്ടയും കേരള ബേക്കറികളിൽ ചായക്കൊപ്പം ആസ്വദിക്കുന്ന, ഉരുണ്ടതോ ഡയമണ്ട് ആകൃതിയോ ഉള്ള, ആഴത്തിൽ വറുത്ത മധുര ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are crunchy fried Kerala snacks made from rice flour, typically sold in shops in bulk and mixed with spices.",
            "relationML": "പക്കാവടയും മിക്സ്ചറും ആരിടിമാവ് കൊണ്ടുള്ള, കടകളിൽ ബൾക്കായി വിൽക്കുന്ന, ക്രഞ്ചി, ആഴ്ത്തി വറുത്ത, കേരള ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Both are thin, crispy rice flour snacks deep-fried and eaten with tea, one is flat strips and one is spiral-shaped.",
            "relationML": "പക്കാവടയും മുറുക്കും ആഴ്ത്തി വറുത്ത, ചായക്കൊപ്പം കഴിക്കുന്ന, നേർത്ത, ക്രിസ്‌പി ആരിടിമാവ് ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് പരന്ന നാടകളും, മറ്റൊന്ന് ചുരൾ ആകൃതിയിലുമാണ്."
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
            "relationEN": "Both are round, pan-fried sweet rice snacks from Kerala cooked in special iron moulds with jaggery and coconut.",
            "relationML": "കൈയ്യപ്പവും നെയ്യപ്പവും ഒരേ ശർക്കരയും തേങ്ങയും ഉള്ള, പ്രത്യേക ഇരുമ്പ് അച്ചുകളിൽ ഉണ്ടാക്കുന്ന, ഉരുണ്ട, ഗ്രഹിക്കുന്ന, മധുര ആരിടി ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Unniyappam",
            "wordMal": "ഉണ്ണിയപ്പം",
            "relationEN": "Both are traditional Kerala rice sweet pancakes made in cast iron moulds and enjoyed as temple prasadam.",
            "relationML": "കൈയ്യപ്പവും ഉണ്ണിയപ്പവും ദേവാലയ പ്രസാദമായി ആസ്വദിക്കുന്ന, ഇരുമ്പ് അച്ചുകളിൽ ഉണ്ടാക്കുന്ന, പരമ്പരാഗത കേരള ആരിടി മധുര ഉരുളകളാണ്."
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
            "relationEN": "Both are steamed rice dishes folded in banana leaves with a sweet coconut-jaggery filling from Kerala.",
            "relationML": "ഇലയപ്പവും ഇല അടയും ഒരേ മധുര തേങ്ങ-ശർക്കര ഫില്ലിംഗ് ഉള്ള, ആവിയിൽ വേവിക്കുന്ന, വാഴ ഇലകളിൽ ഉണ്ടാക്കുന്ന, കേരള ആരിടി ഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Kozhukkatta",
            "wordMal": "കൊഴുക്കട്ട",
            "relationEN": "Both are steamed sweet rice dumplings with coconut and jaggery filling, made during festivals in Kerala.",
            "relationML": "ഇലയപ്പവും കൊഴുക്കട്ടയും ഒരേ ഉത്സവ ആചാരം ഉള്ള, തേങ്ങ-ശർക്കര ഫില്ലിംഗ് ഉള്ള, ആവിയിൽ വേവിക്കുന്ന, കേരള ആരിടി ഉരുളകളാണ്."
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
            "relationEN": "Both are steamed rice dumplings with a sweet filling that are virtually indistinguishable from the outside.",
            "relationML": "മോതകവും കൊഴുക്കട്ടയും ആഴത്തിൽ ഒരേ ആകൃതിയിൽ ഒരേ ഫില്ലിംഗ് ഉള്ള ആവിയിൽ വേവിക്കുന്ന ആരിടി ഉരുളകളാണ്."
          },
          {
            "word": "Sukhiyan",
            "wordMal": "സുഖിയൻ",
            "relationEN": "Both are sweet green gram and coconut-filled round dumplings offered as prasadam in South Indian temples.",
            "relationML": "മോതകവും സൂഖിയനും ദക്ഷിണ ഇന്ത്യൻ ദേവാലയങ്ങളിൽ പ്രസാദമായി നൽകുന്ന, ചെറുപയറ്-തേങ്ങ ഫില്ലിംഗ് ഉള്ള, ഉരുണ്ട, മധുര ഉരുളകളാണ്."
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
            "relationEN": "Both are golden-baked puff pastry snacks sold at Kerala bakeries, one filled with egg and one with spiced meat.",
            "relationML": "മുട്ട പഫ്ഫും മീറ്റ് പഫ്ഫും ഒരേ കേരള ബേക്കറികളിൽ വിൽക്കുന്ന, ഉൾഭരിച്ച പേസ്ട്രി ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് മുട്ടയും മറ്റൊന്ന് മസാലചേർന്ന ഇറച്ചിയും ഉള്ളതാണ്."
          },
          {
            "word": "Chicken Puff",
            "wordMal": "ചിക്കൻ പഫ്‌സ്",
            "relationEN": "Both are flaky puff pastry baked snacks with an egg or chicken filling popular at every Kerala bakery.",
            "relationML": "മുട്ട പഫ്ഫും ചിക്കൻ പഫ്ഫും ഒരേ പൊളിഞ്ഞ പേസ്ട്രി ബേക്ക് ലഘുഭക്ഷണങ്ങളാണ്; ഒന്ന് മുട്ടയും മറ്റൊന്ന് ചിക്കനും ഉള്ളതാണ്."
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
            "relationEN": "Both are sweet bakery breads from Kerala—Cream Bun is filled with fresh cream and Jam Roll is rolled with fruit jam.",
            "relationML": "ക്രീം ബണ്ണും ജാം റോളും ഒരേ കേരള ബേക്കറി ബ്രഡ് ലഘുഭക്ഷണങ്ങളാണ്; ക്രീം ബൺ ഫ്രഷ് ക്രീം ഉള്ളതും ജാം റോൾ ഫ്രൂട്ട് ജാം ഉള്ളതുമാണ്."
          },
          {
            "word": "Cup Cake",
            "wordMal": "കപ്പ് കേക്ക്",
            "relationEN": "Both are individual-sized sweet baked goods enjoyed with tea at Kerala bakeries, with cream or frosting toppings.",
            "relationML": "ക്രീം ബണ്ണും കപ്പ് കേക്കും ഒരേ ചായക്കൊപ്പം ആസ്വദിക്കുന്ന, ക്രീം അല്ലെങ്കിൽ ഫ്രോസ്റ്റിംഗ് ഉള്ള, ഒറ്റ ആൾ ആകൃതിയിൽ ഉള്ള, കേരള ബേക്കറി മധുര ഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are crunchy, spiced Kerala tea-time snacks made from rice flour and gram flour sold loose in shops.",
            "relationML": "മിക്സ്ചറും പക്കാവടയും ആരിടിമാവ്, കടലമാവ് കൊണ്ടുള്ള, ക്രഞ്ചി, മസാലചേർന്ന, ചായ സമയ ലഘുഭക്ഷണങ്ങളാണ്."
          },
          {
            "word": "Murukku",
            "wordMal": "മുറുക്ക്",
            "relationEN": "Both are crispy, seasoned rice flour snacks that are sold together in the same shops as tea-time accompaniments.",
            "relationML": "മിക്സ്ചറും മുറുക്കും ഒരേ കടകളിൽ ചായ സമയ ലഘുഭക്ഷണങ്ങളായി, ക്രിസ്‌പി, സ്പൈസ്ഡ് ആരിടിമാവ് ലഘുഭക്ഷണങ്ങളാണ്."
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
            "relationEN": "Both are popular Kerala halwa varieties—Pahadi is made in Thrissur and Kozhikodan is Kozhikode's iconic black halwa.",
            "relationML": "പഹാടി ഹൽവയും കോഴിക്കോടൻ ഹൽവയും കേരളത്തിൽ ജനപ്രിയ ഹൽവ ഇനങ്ങളാണ്; ഒന്ന് തൃശ്ശൂരിലും മറ്റൊന്ന് കോഴിക്കോടിന്റെ പ്രതീകമായ കറുത്ത ഹൽവയുമാണ്."
          },
          {
            "word": "Jalebi",
            "wordMal": "ജിലേബി",
            "relationEN": "Both are intensely sweet, syrupy Indian festival sweets enjoyed by people of all ages in Kerala.",
            "relationML": "പഹാടി ഹൽവയും ജിലേബിയും കേരളത്തിൽ എല്ലാ പ്രായക്കാരും ആസ്വദിക്കുന്ന, ശക്തമായ മധുരം ഉള്ള, സിറപ്പ് ഉള്ള ഇന്ത്യൻ ഉത്സവ മധുരങ്ങളാണ്."
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
            "relationEN": "Both are traditional Kerala brass oil lamps used during prayers and festivals, one stands on the floor and the other is shorter.",
            "relationML": "നിലവിളക്കും കുത്തുവിളക്കും ഒരേ ദേശ ഓലിവ് എണ്ണ ഉള്ള, കേരള ദേവാലയ ആഘോഷ വേളകളിൽ ഉപയോഗിക്കുന്ന, പരമ്പരാഗത ചെമ്പ് ഓയിൽ ദീപങ്ങളാണ്; ഒന്ന് നിലത്ത് നിൽക്കുന്നതും മറ്റൊന്ന് കൊച്ചുതും ആണ്."
          },
          {
            "word": "Kindi",
            "wordMal": "കിണ്ടി",
            "relationEN": "Both are traditional Kerala brass vessels for ritual use, one is an oil lamp and the other is a water vessel used in prayers.",
            "relationML": "നിലവിളക്കും കിണ്ടിയും ഒരേ ദേശ ചെമ്പ് ഉരുപ്പടികളാണ്; ഒന്ന് ഓയിൽ ദീപവും മറ്റൊന്ന് ആരാധനയ്ക്ക് ഉപയോഗിക്കുന്ന ചെമ്പ് ജലപ്പാത്രവുമാണ്."
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
            "relationEN": "Both are white cotton cloth woven in Kerala, one is a thin towel and the other is a wrap-around garment worn by men.",
            "relationML": "തോർത്തും മുണ്ടും കേരളത്തിൽ നൂലാൽ നെയ്ത, വെള്ള കോട്ടൺ തുണികളാണ്; ഒന്ന് നേർത്ത തൂവാലയും മറ്റൊന്ന് ആണുങ്ങൾ ചുറ്റി ഉടുക്കുന്ന വസ്ത്രവുമാണ്."
          },
          {
            "word": "Lungi",
            "wordMal": "ലുങ്കി",
            "relationEN": "Both are simple cloth garments worn by Kerala men in daily life, the Thorthu is thin cotton and the Lungi has a pattern.",
            "relationML": "തോർത്തും ലുങ്കിയും കേരള ആണുങ്ങൾ ദൈനംദിന ജീവിതത്തിൽ ഉടുക്കുന്ന, ലളിതമായ തുണി വസ്ത്രങ്ങളാണ്; തോർത്ത് നേർത്ത കോട്ടൺ ആകൃതിയും ലുങ്കി ചിത്രം ഉള്ളതുമാണ്."
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
            "relationEN": "Both are traditional Kerala woven winnowing baskets used to separate grain from husk in the kitchen or field.",
            "relationML": "മുറവും കൊട്ടയും ഒരേ കേരള ഗ്രാമം, അടുക്കള, ഇടം, ഉള്ളി ആ ഉള്ളി ഒഴിക്കൽ, ഒഴിക്കൽ ഉള്ള, ഇഴഞ്ഞ, ധാന്യം തരംതിരിക്കൽ പൊളി ഉരുപ്പടികളാണ്."
          },
          {
            "word": "Vatti",
            "wordMal": "വട്ടി",
            "relationEN": "Both are woven bamboo or cane baskets used in Kerala homes for separating or carrying grain and produce.",
            "relationML": "മുറവും വട്ടിയും ഒരേ ഇഴഞ്ഞ മുള അല്ലെങ്കിൽ ചൂരൽ ഉരുപ്പടികളാണ്; കേരള ഗൃഹങ്ങളിൽ ധാന്യം തരംതിരിക്കൽ, കൊണ്ടുനടക്കൽ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്നു."
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
            "relationEN": "Both are long-handled Kerala kitchen ladles used for stirring curry or serving rice, one is flat and one is deep.",
            "relationML": "ചട്ടുകവും തവിയും ഒരേ ദൈർഘ്യമേറിയ കൈ ഉള്ള, കേരള അടുക്കള ഉരുപ്പടികളാണ്; ഒന്ന് ഭക്ഷ്യ ഇളക്കൽ, മറ്റൊന്ന് ഭക്ഷ്യ വിളമ്പൽ ആണ്."
          },
          {
            "word": "Chirava",
            "wordMal": "ചിരവ",
            "relationEN": "Both are traditional Kerala kitchen tools—one is a ladle for stirring and one is a knife-like blade for scraping.",
            "relationML": "ചട്ടുകവും ചിരവയും ഒരേ, പരമ്പരാഗത കേരള അടുക്കള ഉരുപ്പടികളാണ്; ഒന്ന് ഇളക്കൽ ഉപകരണവും, മറ്റൊന്ന് ചുരണ്ടൽ ഉരുൾ ആകൃതിയിലുള്ള ബ്ലേഡ് ഉരുപ്പടിയും ആണ്."
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
            "relationEN": "Both are traditional Indian garments worn by women, one is the Kerala two-piece set and the other is a six-yard wrap.",
            "relationML": "മുണ്ടും നേരിയതും സാരിയും ഒരേ ഇന്ത്യൻ പരമ്പരാഗത, സ്ത്രീ വസ്ത്ര ആകൃതികളാണ്; ഒന്ന് കേരള രണ്ടുകഷ്ണ ഉടുക്കും, മറ്റൊന്ന് ആറ് മീറ്റർ ആകൃതിയും ആണ്."
          },
          {
            "word": "Pattupavada",
            "wordMal": "പട്ടുപാവാട",
            "relationEN": "Both are traditional Kerala women's garments worn on festive occasions like Onam, one for adults and one for girls.",
            "relationML": "മുണ്ടും നേരിയതും പട്ടുപാവടയും ഒരേ ഓണം പോലുള്ള ഉത്സവ വേളകളിൽ ഉടുക്കുന്ന, കേരള പരമ്പരാഗത വനിതാ വസ്ത്ര ആകൃതികളാണ്; ഒന്ന് മുതിർന്നവർക്കും മറ്റൊന്ന് പെൺ കുട്ടികൾക്കും ആണ്."
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
            "relationEN": "Both are wide, round cooking vessels used in Kerala kitchens—the Uruli is traditionally bronze and the Cheenachatti is iron.",
            "relationML": "ഉരുളിയും ചീനച്ചട്ടിയും ഒരേ കേരള അടുക്കളകളിൽ ഉപയോഗിക്കുന്ന, വൃത്ത ആകൃതിയിലുള്ള, വലിയ പാചക പാത്രങ്ങളാണ്; ഉരുളി പരമ്പരാഗതമായി വെങ്കലവും ചീനച്ചട്ടി ഇരുമ്പുമാണ്."
          },
          {
            "word": "Charuvam",
            "wordMal": "ചരുവം",
            "relationEN": "Both are traditional Kerala cooking pots used on open fire for making rice or curry in large quantities.",
            "relationML": "ഉരുളിയും ചരുവവും ഒരേ, തുറന്ന അടുപ്പിൽ ഉപയോഗിക്കുന്ന, ചോറ്, കറി, ധാരാളം ഭക്ഷ്യ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്ന, പരമ്പരാഗത കേരള പാചക പാത്രങ്ങളാണ്."
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
            "relationEN": "Both are traditional Kerala grain-measuring vessels used in rural areas to measure rice and other commodities.",
            "relationML": "പറയും ഇടങ്ങഴിയും ഒരേ കേരള ഗ്രാമ ആണ്, ചോറ്, ധാന്യ ആകൃതി ഉള്ള, ഗ്രാമ ഇടങ്ങളിൽ ഉപയോഗിക്കുന്ന, പരമ്പരാഗത ഭാരം അളക്കൽ ഉരുപ്പടികളാണ്."
          },
          {
            "word": "Nazhi",
            "wordMal": "നാഴി",
            "relationEN": "Both are traditional Kerala units and containers for measuring dry grain, with Para being larger and Nazhi smaller.",
            "relationML": "പറയും നാഴിയും ഒരേ ഗ്രാമ ഭക്ഷ്യ ഉൽഭവ, ധാന്യ അളക്കൽ ഉരുപ്പടികളാണ്; പറ വലിയതും നാഴി ചെറിയതുമാണ്."
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
            "relationEN": "Both are traditional Kerala water storage vessels, one is a narrow-necked pot and the other is a wide-mouthed one.",
            "relationML": "കുടവും കലവും ഒരേ ജലം ശേഖരണ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; കുടം ഇടുങ്ങിയ കഴുത്ത് ഉള്ളതും കലം വിശാലമായ വായ ഉള്ളതുമാണ്."
          },
          {
            "word": "Bharani",
            "wordMal": "ഭരണി",
            "relationEN": "Both are traditional Kerala earthen pots used for storing water or pickles, made from clay by traditional potters.",
            "relationML": "കുടവും ഭരണിയും ഒരേ, ജലം, ഉപ്പിലിടൽ ശേഖരണ, കളിമൺ പോളി, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്."
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
            "relationEN": "Both are traditional Kerala cooking pots used on firewood stoves to cook rice and curry in village homes.",
            "relationML": "ചെമ്പും ചരുവവും ഒരേ, ഗ്രാമ ഗൃഹങ്ങളിൽ വിറക് ഉപയോഗിച്ച് ചോറ്, കറി ഉണ്ടാക്കൽ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്ന, പരമ്പരാഗത കേരള പാചക പാത്രങ്ങളാണ്."
          },
          {
            "word": "Kalam",
            "wordMal": "കലം",
            "relationEN": "Both are traditional Kerala vessels for holding liquids, the Chembu is a copper pot and the Kalam is earthenware.",
            "relationML": "ചെമ്പും കലവും ഒരേ ദ്രാവകം ഉൾക്കൊള്ളൽ ഉള്ള, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; ചെമ്പ് ചെമ്പ് ലോഹ കഴുകൽ, കലം കളിമൺ ഉരുപ്പടി ആണ്."
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
            "relationEN": "Both are traditional Kerala stone grinding tools—Ammikallu is used for grinding spices and Arakallu for flour.",
            "relationML": "അമ്മിക്കല്ലും അരക്കല്ലും ഒരേ, പരമ്പരാഗത കേരള, ശില ആകൃതി ഉള്ള, ഇടിക്കൽ ഉരുപ്പടികളാണ്; അമ്മിക്കല്ല് സുഗന്ധ ദ്രവ്യ ഉരുൾ ഉള്ളതും, അരക്കല്ല് ഉൽഭവ പൊടിക്കൽ ഉള്ളതുമാണ്."
          },
          {
            "word": "Aattukallu",
            "wordMal": "ആട്ടുകല്ല്",
            "relationEN": "Both are heavy stone tools in a Kerala kitchen, one grinds wet spices and the other grinds grains in a mortar shape.",
            "relationML": "അമ്മിക്കല്ലും ആട്ടുകല്ലും ഒരേ, കേരള അടുക്കള, ഭക്ഷ്യ ഇടിക്കൽ, ഭക്ഷ്യ ഉരൾ ഉള്ള, ഭാരമേറിയ ശില ഉരുപ്പടികളാണ്; ഒന്ന് ഈർപ്പ ഇടിക്കൽ ഉള്ളതും, മറ്റൊന്ന് ധാന്യ ഇടിക്കൽ ഉള്ളതുമാണ്."
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
            "relationEN": "Both are flat stone grinding slabs used in Kerala to grind rice batter and spices for cooking.",
            "relationML": "അരക്കല്ലും അമ്മിക്കല്ലും ഒരേ, കേരള ഭക്ഷ്യ ഇടിക്കൽ, ചോറ്, സുഗന്ധ ദ്രവ്യ ഇടിക്കൽ ഉള്ള, ഒരു ഉൽഭവ, ഒരു ഉരൾ ഉള്ള, ഒരു ഇടുങ്ങിയ ഉൽഭവ ശില ഉരുപ്പടികളാണ്."
          },
          {
            "word": "Aattukallu",
            "wordMal": "ആട്ടുകല്ല്",
            "relationEN": "Both are stone grinding implements used in Kerala kitchens, one is a flat slab and the other is a rounded mortar.",
            "relationML": "അരക്കല്ലും ആട്ടുകല്ലും ഒരേ, കേരള അടുക്കള ശില ഉരുപ്പടികളാണ്; ഒന്ന് ഇടുങ്ങിയ ഉൽഭവ ഉരൾ ഉള്ള, മറ്റൊന്ന് ഉരൾ ആകൃതിയിലുള്ള ഉൽഭവ ആണ്."
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
            "relationEN": "Both are stone grinding tools in Kerala kitchens, together forming the traditional wet grinding set.",
            "relationML": "ആട്ടുകല്ലും അമ്മിക്കല്ലും ഒരേ, കേരള അടുക്കള, ഭക്ഷ്യ ഇടിക്കൽ, ഉൽഭവ ഉൽഭവ ശില ഉരുപ്പടികളാണ്; ഒരേ, ഈർപ്പ ഇടിക്കൽ ഉരൾ ഉൽഭവ ഭരണ ഉൽഭവ ഇടുങ്ങ."
          },
          {
            "word": "Ural",
            "wordMal": "ഉരൽ",
            "relationEN": "Both are traditional Kerala stone or wooden mortars used for pounding and grinding spices and rice.",
            "relationML": "ആട്ടുകല്ലും ഉരലും ഒരേ, സുഗന്ധ ദ്രവ്യ, ആരിടി ഇടിക്കൽ, പരമ്പരാഗത കേരള ശില അല്ലെങ്കിൽ മരം ഉരൾ ഉരുപ്പടികളാണ്."
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
            "relationEN": "Both are traditional Kerala water-holding vessels—Kindi has a spout for pouring and Kudam is for storing.",
            "relationML": "കിണ്ടിയും കുടവും ഒരേ, ജലം ഉൾക്കൊള്ളൽ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; കിണ്ടിക്ക് ഉൽഭവ ഒഴിക്കൽ ആകൃതി ഉള്ളതും, കുടം ജലം ശേഖരണ ഉരുപ്പടിയും ആണ്."
          },
          {
            "word": "Mondha",
            "wordMal": "മൊന്ത",
            "relationEN": "Both are traditional Kerala brass water vessels used in rituals and daily life, Kindi has a spout and Mondha is bowl-shaped.",
            "relationML": "കിണ്ടിയും മൊന്ത യും ഒരേ, ആചാര, ദൈനംദിന ജീവിതം, ചെമ്പ് ജലം ഉൽഭവ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; കിണ്ടി ഉൽഭവ ഒഴിക്കൽ ആകൃതി ഉള്ളതും, മൊന്ത ഉരൾ ആകൃതിയിലുള്ളതും ആണ്."
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
            "relationEN": "Both are traditional Kerala oil lamps used in temples and homes, one hangs from the ceiling and one stands on the floor.",
            "relationML": "തൂക്കുവിളക്കും നിലവിളക്കും ഒരേ, ദേവാലയ, ഗൃഹ ആചാര ഉള്ള, ചെമ്പ് ഓയിൽ ദീപങ്ങളാണ്; തൂക്കുവിളക്ക് മേൽക്കൂരയിൽ നിന്ന് ഇറക്കിയിരിക്കുന്നതും, നിലവിളക്ക് നിലത്ത് നിൽക്കുന്നതുമാണ്."
          },
          {
            "word": "Aalvilakku",
            "wordMal": "ആൽവിളക്ക്",
            "relationEN": "Both are hanging oil lamps in Kerala temples, one is a multi-wick brass lamp and the other is a massive hanging one.",
            "relationML": "തൂക്കുവിളക്കും ആൽ‌വിളക്കും ഒരേ, കേരള ദേവാലയ, ഇറക്കി ഓയിൽ ദീപങ്ങളാണ്; ഒന്ന് ഒരേ ഇറക്കി ചെമ്പ് ദീപം ഉള്ളതും, മറ്റൊന്ന് ഒരേ ഭീമ ഇറക്കി ദീപം ഉള്ളതുമാണ്."
          }
        ]
      },
      {
        "civWord": "Mundu",
        "civWordMal": "മുണ്ട്",
        "imposters": [
          {
            "word": "Lungi",
            "wordMal": "ലുങ്കി",
            "relationEN": "Both are lower-body wrap garments worn by Kerala men—Mundu is plain white and Lungi has colourful checks.",
            "relationML": "മുണ്ടും ലുങ്കിയും ഒരേ, കേരള ആണ്‌, ശരീരം, ഉടുക്കൽ, ചുറ്റി, ഉടുക്കൽ വസ്ത്ര ആകൃതികളാണ്; മുണ്ട് വെള്ള ഒഴിഞ്ഞ ഉടക്കൽ ഉള്ളതും ലുങ്കി ഉൽഭവ ചെക്ക് ഉള്ളതും ആണ്."
          },
          {
            "word": "Lungi",
            "wordMal": "ലുങ്കി",
            "relationEN": "Both are lower-body wrap garments worn by Kerala men—Mundu is plain white and Lungi has colourful checks.",
            "relationML": "മുണ്ടും ലുങ്കിയും ഒരേ, കേരള ആണ്‌, ശരീരം, ഉടുക്കൽ, ചുറ്റി, ഉടുക്കൽ വസ്ത്ര ആകൃതികളാണ്; മുണ്ട് വെള്ള ഒഴിഞ്ഞ ഉടക്കൽ ഉള്ളതും ലുങ്കി ഉൽഭവ ചെക്ക് ഉള്ളതും ആണ്."
          }
        ]
      },
      {
        "civWord": "Kasavu Saree",
        "civWordMal": "കസവ് സാരി",
        "imposters": [
          {
            "word": "Pattu Saree",
            "wordMal": "പട്ടു സാരി",
            "relationEN": "Both are traditional Indian sarees worn on festive occasions—Kasavu has a golden border and Pattu is made of silk.",
            "relationML": "കസവ് സാരിയും പട്ടു സാരിയും ഒരേ, ഉത്സവ വേളകളിൽ ഉടുക്കൽ, പരമ്പരാഗത ഇന്ത്യൻ സാരി ആകൃതികളാണ്; കസവ് ഉൽഭവ സ്വർണ്ണ ബോർഡർ ഉള്ളതും, പട്ടുസാരി, ഒരേ, സിൽക്ക് ഉൽഭവ ആണ്."
          },
          {
            "word": "Pattu Saree",
            "wordMal": "പട്ടു സാരി",
            "relationEN": "Both are traditional Indian sarees worn on festive occasions—Kasavu has a golden border and Pattu is made of silk.",
            "relationML": "കസവ് സാരിയും പട്ടു സാരിയും ഒരേ, ഉത്സവ വേളകളിൽ ഉടുക്കൽ, പരമ്പരാഗത ഇന്ത്യൻ സാരി ആകൃതികളാണ്; കസവ് ഉൽഭവ സ്വർണ്ണ ബോർഡർ ഉള്ളതും, പട്ടുസാരി, ഒരേ, സിൽക്ക് ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Chirava",
        "civWordMal": "ചിരവ",
        "imposters": [
          {
            "word": "Arival",
            "wordMal": "അരിവാൾ",
            "relationEN": "Both are traditional Kerala kitchen blade tools—Chirava is used for grating coconut and Arival for cutting vegetables.",
            "relationML": "ചിരവയും അരിവാളും ഒരേ, പരമ്പരാഗത കേരള അടുക്കള ബ്ലേഡ് ഉരുപ്പടികളാണ്; ചിരവ തേങ്ങ ചുരണ്ടൽ ഉള്ളതും, അരിവാൾ ഉൽഭവ ഉൽഭവ ശാക്ഭ്യ ഉൽഭവ ആണ്."
          },
          {
            "word": "Arival",
            "wordMal": "അരിവാൾ",
            "relationEN": "Both are traditional Kerala kitchen blade tools—Chirava is used for grating coconut and Arival for cutting vegetables.",
            "relationML": "ചിരവയും അരിവാളും ഒരേ, പരമ്പരാഗത കേരള അടുക്കള ബ്ലേഡ് ഉരുപ്പടികളാണ്; ചിരവ തേങ്ങ ചുരണ്ടൽ ഉള്ളതും, അരിവാൾ ഉൽഭവ ഉൽഭവ ശാക്ഭ്യ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Paathram",
        "civWordMal": "പാത്രം",
        "imposters": [
          {
            "word": "Kindi",
            "wordMal": "കിണ്ടി",
            "relationEN": "Both are traditional Kerala brass vessels for holding water used in rituals and ceremonies.",
            "relationML": "പാത്രവും കിണ്ടിയും ഒരേ, ആചാര, ചെമ്പ് ജലം ഉൽഭവ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്."
          },
          {
            "word": "Kindi",
            "wordMal": "കിണ്ടി",
            "relationEN": "Both are traditional Kerala brass vessels for holding water used in rituals and ceremonies.",
            "relationML": "പാത്രവും കിണ്ടിയും ഒരേ, ആചാര, ചെമ്പ് ജലം ഉൽഭവ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്."
          }
        ]
      },
      {
        "civWord": "Puttu Kutti",
        "civWordMal": "പുട്ടുകുറ്റി",
        "imposters": [
          {
            "word": "Idiyappam Maker",
            "wordMal": "ഇടിയപ്പം മേക്കർ",
            "relationEN": "Both are cylindrical kitchen tools unique to Kerala used to press and steam rice dishes for breakfast.",
            "relationML": "പുട്ടുകുറ്റിയും ഇടിയപ്പം മേക്കറും ഒരേ, കേരളത്തിൽ, ആരിടി ഭക്ഷ്യ ആവിയിൽ ആക്കൽ ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഒരേ ഉൽഭവ ആകൃതി ഉള്ള, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആകൃതി ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Idiyappam Maker",
            "wordMal": "ഇടിയപ്പം മേക്കർ",
            "relationEN": "Both are cylindrical kitchen tools unique to Kerala used to press and steam rice dishes for breakfast.",
            "relationML": "പുട്ടുകുറ്റിയും ഇടിയപ്പം മേക്കറും ഒരേ, കേരളത്തിൽ, ആരിടി ഭക്ഷ്യ ആവിയിൽ ആക്കൽ ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഒരേ ഉൽഭവ ആകൃതി ഉള്ള, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആകൃതി ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Vaal Kannadi",
        "civWordMal": "വാൽക്കണ്ണാടി",
        "imposters": [
          {
            "word": "Nilavilakku",
            "wordMal": "നിലവിളക്ക്",
            "relationEN": "Both are traditional Kerala items used in rituals—Vaal Kannadi is a mirror used in Kali pooja and Nilavilakku is a sacred lamp.",
            "relationML": "വാൾ കണ്ണാടിയും നിലവിളക്കും ഒരേ, കേരള ആചാര ഉൽഭവ ഉൽഭവ ഉരുപ്പടികളാണ്; വാൾ കണ്ണാടി കാളി പൂജ ഉൽഭവ ഉൽഭവ, നിലവിളക്ക് ദേശ ഉൽഭവ ദീപം ആണ്."
          },
          {
            "word": "Nilavilakku",
            "wordMal": "നിലവിളക്ക്",
            "relationEN": "Both are traditional Kerala items used in rituals—Vaal Kannadi is a mirror used in Kali pooja and Nilavilakku is a sacred lamp.",
            "relationML": "വാൾ കണ്ണാടിയും നിലവിളക്കും ഒരേ, കേരള ആചാര ഉൽഭവ ഉൽഭവ ഉരുപ്പടികളാണ്; വാൾ കണ്ണാടി കാളി പൂജ ഉൽഭവ ഉൽഭവ, നിലവിളക്ക് ദേശ ഉൽഭവ ദീപം ആണ്."
          }
        ]
      },
      {
        "civWord": "Kalam",
        "civWordMal": "കലം",
        "imposters": [
          {
            "word": "Bharani",
            "wordMal": "ഭരണി",
            "relationEN": "Both are traditional earthenware storage pots in Kerala—Kalam is for water and Bharani is for pickles and oil.",
            "relationML": "കലവും ഭരണിയും ഒരേ, കേരള, കളിമൺ ശേഖരണ, ഉൽഭവ ഉരുപ്പടികളാണ്; കലം ജലം ഉൽഭവ ഉള്ളതും, ഭരണി ഉൽഭവ ഉൽഭവ, ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Bharani",
            "wordMal": "ഭരണി",
            "relationEN": "Both are traditional earthenware storage pots in Kerala—Kalam is for water and Bharani is for pickles and oil.",
            "relationML": "കലവും ഭരണിയും ഒരേ, കേരള, കളിമൺ ശേഖരണ, ഉൽഭവ ഉരുപ്പടികളാണ്; കലം ജലം ഉൽഭവ ഉള്ളതും, ഭരണി ഉൽഭവ ഉൽഭവ, ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Cheenachatti",
        "civWordMal": "ചീനച്ചട്ടി",
        "imposters": [
          {
            "word": "Dosa Kallu",
            "wordMal": "ദോശ കല്ല്",
            "relationEN": "Both are flat iron cooking vessels used on the stove to make dosas and other flat pancakes in Kerala.",
            "relationML": "ചീനച്ചട്ടിയും ദോശക്കല്ലും ഒരേ, ദോശ, ഉൽഭവ ഒരേ, ഇരുമ്പ്, ആകൃതി, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ആണ്."
          },
          {
            "word": "Dosa Kallu",
            "wordMal": "ദോശ കല്ല്",
            "relationEN": "Both are flat iron cooking vessels used on the stove to make dosas and other flat pancakes in Kerala.",
            "relationML": "ചീനച്ചട്ടിയും ദോശക്കല്ലും ഒരേ, ദോശ, ഉൽഭവ ഒരേ, ഇരുമ്പ്, ആകൃതി, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kettle",
        "civWordMal": "കെറ്റിൽ",
        "imposters": [
          {
            "word": "Thermos",
            "wordMal": "തെർമോസ്",
            "relationEN": "Both are containers for holding hot beverages like tea and coffee and keeping them at the right temperature.",
            "relationML": "കെറ്റിലും തെർമോസും ഒരേ ചൂടുള്ള ചായ, കാപ്പി ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Thermos",
            "wordMal": "തെർമോസ്",
            "relationEN": "Both are containers for holding hot beverages like tea and coffee and keeping them at the right temperature.",
            "relationML": "കെറ്റിലും തെർമോസും ഒരേ ചൂടുള്ള ചായ, കാപ്പി ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Bharani",
        "civWordMal": "ഭരണി",
        "imposters": [
          {
            "word": "Kalam",
            "wordMal": "കലം",
            "relationEN": "Both are traditional Kerala clay storage vessels, Bharani for pickles and Kalam for water storage.",
            "relationML": "ഭരണിയും കലവും ഒരേ, കളിമൺ ശേഖരണ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Kalam",
            "wordMal": "കലം",
            "relationEN": "Both are traditional Kerala clay storage vessels, Bharani for pickles and Kalam for water storage.",
            "relationML": "ഭരണിയും കലവും ഒരേ, കളിമൺ ശേഖരണ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kattil",
        "civWordMal": "കട്ടിൽ",
        "imposters": [
          {
            "word": "Metha",
            "wordMal": "മെത്ത",
            "relationEN": "Both are pieces of bedroom furniture for resting—Kattil is a wooden cot frame and Metha is the mattress.",
            "relationML": "കട്ടിലും മെത്തയും ഒരേ, ഒരേ, ഒരേ, ഒരേ, ഒരേ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Metha",
            "wordMal": "മെത്ത",
            "relationEN": "Both are pieces of bedroom furniture for resting—Kattil is a wooden cot frame and Metha is the mattress.",
            "relationML": "കട്ടിലും മെത്തയും ഒരേ, ഒരേ, ഒരേ, ഒരേ, ഒരേ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Oonjal",
        "civWordMal": "ഊഞ്ഞാൽ",
        "imposters": [
          {
            "word": "Sliding Board",
            "wordMal": "സ്ലൈഡിംഗ് ബോർഡ്",
            "relationEN": "Both are swinging or sliding playthings—Oonjal is a traditional wooden swing in Kerala homes and the Sliding Board is a playground fixture.",
            "relationML": "ഊഞ്ഞാലും സ്ലൈഡിംഗ് ബോർഡും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Sliding Board",
            "wordMal": "സ്ലൈഡിംഗ് ബോർഡ്",
            "relationEN": "Both are swinging or sliding playthings—Oonjal is a traditional wooden swing in Kerala homes and the Sliding Board is a playground fixture.",
            "relationML": "ഊഞ്ഞാലും സ്ലൈഡിംഗ് ബോർഡും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Chattuvam",
        "civWordMal": "ചട്ടുക്ക",
        "imposters": [
          {
            "word": "Thavi",
            "wordMal": "തവി",
            "relationEN": "Both are long-handled ladles for stirring and serving curries and liquids in Kerala kitchens.",
            "relationML": "ചട്ടുവവും തവിയും ഒരേ, ഇളക്കൽ, ദ്രാവക ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Thavi",
            "wordMal": "തവി",
            "relationEN": "Both are long-handled ladles for stirring and serving curries and liquids in Kerala kitchens.",
            "relationML": "ചട്ടുവവും തവിയും ഒരേ, ഇളക്കൽ, ദ്രാവക ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Paya",
        "civWordMal": "പായ",
        "imposters": [
          {
            "word": "Metha",
            "wordMal": "മെത്ത",
            "relationEN": "Both are sleeping surfaces in Kerala—Paya is a woven mat on the floor and Metha is a soft mattress on a cot.",
            "relationML": "പായ ഉം മെത്തയും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Metha",
            "wordMal": "മെത്ത",
            "relationEN": "Both are sleeping surfaces in Kerala—Paya is a woven mat on the floor and Metha is a soft mattress on a cot.",
            "relationML": "പായ ഉം മെത്തയും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Thiri",
        "civWordMal": "തിരി",
        "imposters": [
          {
            "word": "Mezhukuthiri",
            "wordMal": "മെഴുകുതിരി",
            "relationEN": "Both are traditional lighting items in Kerala—Thiri is a wick for oil lamps and Mezhukuthiri is a wax candle.",
            "relationML": "തിരിയും മെഴുകുതിരിയും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Mezhukuthiri",
            "wordMal": "മെഴുകുതിരി",
            "relationEN": "Both are traditional lighting items in Kerala—Thiri is a wick for oil lamps and Mezhukuthiri is a wax candle.",
            "relationML": "തിരിയും മെഴുകുതിരിയും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kindu Brass",
        "civWordMal": "ഓട്ടുപാത്രം",
        "imposters": [
          {
            "word": "Nilavilakku",
            "wordMal": "നിലവിളക്ക്",
            "relationEN": "Both are traditional Kerala brass items used in homes and temples during religious rituals and prayers.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Nilavilakku",
            "wordMal": "നിലവിളക്ക്",
            "relationEN": "Both are traditional Kerala brass items used in homes and temples during religious rituals and prayers.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Alavu Para",
        "civWordMal": "അളവുപാത്രം",
        "imposters": [
          {
            "word": "Idangazhi",
            "wordMal": "ഇടനാഴി",
            "relationEN": "Both are traditional Kerala grain measuring containers, one is larger and one is a smaller fractional measure.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Idangazhi",
            "wordMal": "ഇടനാഴി",
            "relationEN": "Both are traditional Kerala grain measuring containers, one is larger and one is a smaller fractional measure.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kindu Vessel",
        "civWordMal": "വാൽക്കിണ്ടി",
        "imposters": [
          {
            "word": "Kindi",
            "wordMal": "കിണ്ടി",
            "relationEN": "Both are traditional Kerala narrow-necked vessels for pouring water used in rituals and daily life.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Kindi",
            "wordMal": "കിണ്ടി",
            "relationEN": "Both are traditional Kerala narrow-necked vessels for pouring water used in rituals and daily life.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Chappathi Kallu",
        "civWordMal": "ചപ്പാത്തി കല്ല്",
        "imposters": [
          {
            "word": "Ammikkallu",
            "wordMal": "അമ്മിക്കല്ല്",
            "relationEN": "Both are flat stone or wooden rolling surfaces used in Kerala kitchens for grinding and rolling dough.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Ammikkallu",
            "wordMal": "അമ്മിക്കല്ല്",
            "relationEN": "Both are flat stone or wooden rolling surfaces used in Kerala kitchens for grinding and rolling dough.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Arippa",
        "civWordMal": "അരിപ്പ",
        "imposters": [
          {
            "word": "Filter",
            "wordMal": "ഫിൽറ്റർ",
            "relationEN": "Both are used to separate liquids from solids in Kerala kitchens—Arippa is traditional and Filter is modern.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Filter",
            "wordMal": "ഫിൽറ്റർ",
            "relationEN": "Both are used to separate liquids from solids in Kerala kitchens—Arippa is traditional and Filter is modern.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Choottu",
        "civWordMal": "ചൂട്ട്",
        "imposters": [
          {
            "word": "Pantham",
            "wordMal": "പന്തം",
            "relationEN": "Both are traditional Kerala flaming torchlight items for outdoor lighting during festivals and processions.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Pantham",
            "wordMal": "പന്തം",
            "relationEN": "Both are traditional Kerala flaming torchlight items for outdoor lighting during festivals and processions.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          }
        ]
      },
      {
        "civWord": "Madaal",
        "civWordMal": "മടൽ",
        "imposters": [
          {
            "word": "Thengu",
            "wordMal": "തെങ്ങ്",
            "relationEN": "Both are tall palm trees native to Kerala—Madaal is a date palm and Thengu is the coconut palm.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
          },
          {
            "word": "Thengu",
            "wordMal": "തെങ്ങ്",
            "relationEN": "Both are tall palm trees native to Kerala—Madaal is a date palm and Thengu is the coconut palm.",
            "relationML": "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."
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
            "word": "Mammootty",
            "wordMal": "മമ്മൂട്ടി",
            "relationEN": "Both are legendary Malayalam superstars who dominated Kerala cinema for four decades and are often compared as rivals.",
            "relationML": "മോഹൻലാലും മമ്മൂട്ടിയും നാല് ദശകങ്ങളായി കേരള സിനിമ ആധിപത്യം പുലർത്തുന്ന, ഇതിഹാസ മലയാള സൂപ്പർതാരങ്ങളാണ്."
          },
          {
            "word": "Mammootty",
            "wordMal": "മമ്മൂട്ടി",
            "relationEN": "Both are legendary Malayalam superstars who dominated Kerala cinema for four decades and are often compared as rivals.",
            "relationML": "മോഹൻലാലും മമ്മൂട്ടിയും നാല് ദശകങ്ങളായി കേരള സിനിമ ആധിപത്യം പുലർത്തുന്ന, ഇതിഹാസ മലയാള സൂപ്പർതാരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Mammootty",
        "civWordMal": "മമ്മൂട്ടി",
        "imposters": [
          {
            "word": "Mohanlal",
            "wordMal": "മോഹൻലാൽ",
            "relationEN": "Both are legendary Malayalam film superstars famous for versatile acting and commanding screen presence.",
            "relationML": "മമ്മൂട്ടിയും മോഹൻലാലും ഒരേ ചലച്ചിത്ര ഇതിഹാസ, മലയാള സൂപ്പർതാരങ്ങളാണ്."
          },
          {
            "word": "Mohanlal",
            "wordMal": "മോഹൻലാൽ",
            "relationEN": "Both are legendary Malayalam film superstars famous for versatile acting and commanding screen presence.",
            "relationML": "മമ്മൂട്ടിയും മോഹൻലാലും ഒരേ ചലച്ചിത്ര ഇതിഹാസ, മലയാള സൂപ്പർതാരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Manju Warrier",
        "civWordMal": "മഞ്ജു വാര്യർ",
        "imposters": [
          {
            "word": "Kavya Madhavan",
            "wordMal": "കാവ്യാ മാധവൻ",
            "relationEN": "Both are prominent Malayalam actresses who made a comeback after personal life breaks and starred in hit films.",
            "relationML": "മഞ്ജു വാര്യരും കാവ്യ മാധവനും ഒരേ, ഒടിഞ്ഞ ജീവിതം ശേഷം ഒരേ, ജനപ്രിയ മലയാള ചലച്ചിത്ര താരങ്ങളാണ്."
          },
          {
            "word": "Kavya Madhavan",
            "wordMal": "കാവ്യാ മാധവൻ",
            "relationEN": "Both are prominent Malayalam actresses who made a comeback after personal life breaks and starred in hit films.",
            "relationML": "മഞ്ജു വാര്യരും കാവ്യ മാധവനും ഒരേ, ഒടിഞ്ഞ ജീവിതം ശേഷം ഒരേ, ജനപ്രിയ മലയാള ചലച്ചിത്ര താരങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Fahadh Faasil",
        "civWordMal": "ഫഹദ് ഫാസിൽ",
        "imposters": [
          {
            "word": "Dulquer Salmaan",
            "wordMal": "ദുൽഖർ സൽമാൻ",
            "relationEN": "Both are next-generation Malayalam actors known for intense, nuanced performances in critically acclaimed art-house films.",
            "relationML": "ഫഹദ് ഫാസിലും ദുൽക്കർ സൽമാനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Dulquer Salmaan",
            "wordMal": "ദുൽഖർ സൽമാൻ",
            "relationEN": "Both are next-generation Malayalam actors known for intense, nuanced performances in critically acclaimed art-house films.",
            "relationML": "ഫഹദ് ഫാസിലും ദുൽക്കർ സൽമാനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Shobana",
        "civWordMal": "ശോഭന",
        "imposters": [
          {
            "word": "Manju Warrier",
            "wordMal": "മഞ്ജു വാര്യർ",
            "relationEN": "Both are acclaimed South Indian actresses who are also recognized as accomplished classical dancers.",
            "relationML": "ശോഭനയും മഞ്ജു വാര്യരും ഒരേ, ദക്ഷിണ ഇന്ത്യ ചലച്ചിത്ര, ഒരേ, ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Manju Warrier",
            "wordMal": "മഞ്ജു വാര്യർ",
            "relationEN": "Both are acclaimed South Indian actresses who are also recognized as accomplished classical dancers.",
            "relationML": "ശോഭനയും മഞ്ജു വാര്യരും ഒരേ, ദക്ഷിണ ഇന്ത്യ ചലച്ചിത്ര, ഒരേ, ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Dileep",
        "civWordMal": "ദിലീപ്",
        "imposters": [
          {
            "word": "Jayaram",
            "wordMal": "ജയറാം",
            "relationEN": "Both are popular Malayalam comedy-drama actors who built massive fan bases in the 1990s and 2000s.",
            "relationML": "ദിലീപും ജയറാമും ഒരേ, 1990-കളിൽ, 2000-കളിൽ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Jayaram",
            "wordMal": "ജയറാം",
            "relationEN": "Both are popular Malayalam comedy-drama actors who built massive fan bases in the 1990s and 2000s.",
            "relationML": "ദിലീപും ജയറാമും ഒരേ, 1990-കളിൽ, 2000-കളിൽ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Suresh Gopi",
        "civWordMal": "സുരേഷ് ഗോപി",
        "imposters": [
          {
            "word": "Biju Menon",
            "wordMal": "ബിജു മേനോൻ",
            "relationEN": "Both are popular Malayalam actors famous for their roles as strong police or political characters in mainstream films.",
            "relationML": "സുരേഷ് ഗോപിയും ബിജു മേനോനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Biju Menon",
            "wordMal": "ബിജു മേനോൻ",
            "relationEN": "Both are popular Malayalam actors famous for their roles as strong police or political characters in mainstream films.",
            "relationML": "സുരേഷ് ഗോപിയും ബിജു മേനോനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Prithviraj",
        "civWordMal": "പൃഥ്വിരാജ്",
        "imposters": [
          {
            "word": "Indrajith",
            "wordMal": "ഇന്ദ്രജിത്ത്",
            "relationEN": "Both are brothers who are popular Malayalam actors—Prithviraj is a lead action star and Indrajith plays strong supporting roles.",
            "relationML": "പൃഥ്വിരാജും ഇന്ദ്രജിത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Indrajith",
            "wordMal": "ഇന്ദ്രജിത്ത്",
            "relationEN": "Both are brothers who are popular Malayalam actors—Prithviraj is a lead action star and Indrajith plays strong supporting roles.",
            "relationML": "പൃഥ്വിരാജും ഇന്ദ്രജിത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Tovino Thomas",
        "civWordMal": "ടൊവിനോ തോമസ്",
        "imposters": [
          {
            "word": "Asif Ali",
            "wordMal": "ആസിഫ് അലി",
            "relationEN": "Both are young Malayalam actors who rose to fame in the 2010s with critically praised performance-driven films.",
            "relationML": "ടോവിനോ തോമസും ആസിഫ് അലിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Asif Ali",
            "wordMal": "ആസിഫ് അലി",
            "relationEN": "Both are young Malayalam actors who rose to fame in the 2010s with critically praised performance-driven films.",
            "relationML": "ടോവിനോ തോമസും ആസിഫ് അലിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Nivin Pauly",
        "civWordMal": "നിവിൻ പോളി",
        "imposters": [
          {
            "word": "Dulquer Salmaan",
            "wordMal": "ദുൽഖർ സൽമാൻ",
            "relationEN": "Both are leading young Malayalam stars of the 2010s generation known for their relatable boy-next-door image.",
            "relationML": "നിവിൻ പോളിയും ദുൽക്കർ സൽമാനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Dulquer Salmaan",
            "wordMal": "ദുൽഖർ സൽമാൻ",
            "relationEN": "Both are leading young Malayalam stars of the 2010s generation known for their relatable boy-next-door image.",
            "relationML": "നിവിൻ പോളിയും ദുൽക്കർ സൽമാനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kunchacko Boban",
        "civWordMal": "കുഞ്ചാക്കോ ബോബൻ",
        "imposters": [
          {
            "word": "Jayasurya",
            "wordMal": "ജയസൂര്യ",
            "relationEN": "Both are popular Malayalam actors known for comedy roles who later transitioned to serious, dramatic performances.",
            "relationML": "കുഞ്ചാക്കോ ബോബനും ജയസൂര്യയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Jayasurya",
            "wordMal": "ജയസൂര്യ",
            "relationEN": "Both are popular Malayalam actors known for comedy roles who later transitioned to serious, dramatic performances.",
            "relationML": "കുഞ്ചാക്കോ ബോബനും ജയസൂര്യയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Jayaram",
        "civWordMal": "ജയറാം",
        "imposters": [
          {
            "word": "Dileep",
            "wordMal": "ദിലീപ്",
            "relationEN": "Both are popular Malayalam family-entertainer actors with a large audience base spanning multiple generations.",
            "relationML": "ജയറാമും ദിലീപും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Dileep",
            "wordMal": "ദിലീപ്",
            "relationEN": "Both are popular Malayalam family-entertainer actors with a large audience base spanning multiple generations.",
            "relationML": "ജയറാമും ദിലീപും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Jayasurya",
        "civWordMal": "ജയസൂര്യ",
        "imposters": [
          {
            "word": "Kunchacko Boban",
            "wordMal": "കുഞ്ചാക്കോ ബോബൻ",
            "relationEN": "Both are popular Malayalam actors of the 2000s who started in romantic comedies and evolved into serious film roles.",
            "relationML": "ജയസൂര്യയും കുഞ്ചാക്കോ ബോബനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Kunchacko Boban",
            "wordMal": "കുഞ്ചാക്കോ ബോബൻ",
            "relationEN": "Both are popular Malayalam actors of the 2000s who started in romantic comedies and evolved into serious film roles.",
            "relationML": "ജയസൂര്യയും കുഞ്ചാക്കോ ബോബനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Parvathy Thiruvothu",
        "civWordMal": "പാർവതി തിരുവോത്ത്",
        "imposters": [
          {
            "word": "Manju Warrier",
            "wordMal": "മഞ്ജു വാര്യർ",
            "relationEN": "Both are respected Malayalam actresses who champion women-centric stories and have won multiple state and national awards.",
            "relationML": "പാർവ്വതി തിരുവോത്തും മഞ്ജു വാര്യരും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Manju Warrier",
            "wordMal": "മഞ്ജു വാര്യർ",
            "relationEN": "Both are respected Malayalam actresses who champion women-centric stories and have won multiple state and national awards.",
            "relationML": "പാർവ്വതി തിരുവോത്തും മഞ്ജു വാര്യരും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Nazriya Nazim",
        "civWordMal": "നസ്രിയ നസീം",
        "imposters": [
          {
            "word": "Parvathy Thiruvothu",
            "wordMal": "പാർവതി തിരുവോത്ത്",
            "relationEN": "Both are celebrated young Malayalam actresses known for natural, expressive performances in critically acclaimed films.",
            "relationML": "നസ്രിയ നസീമും പാർവ്വതി തിരുവോത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Parvathy Thiruvothu",
            "wordMal": "പാർവതി തിരുവോത്ത്",
            "relationEN": "Both are celebrated young Malayalam actresses known for natural, expressive performances in critically acclaimed films.",
            "relationML": "നസ്രിയ നസീമും പാർവ്വതി തിരുവോത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Anaswara Rajan",
        "civWordMal": "അനശ്വര രാജൻ",
        "imposters": [
          {
            "word": "Mamitha Baiju",
            "wordMal": "മമിത ബൈജു",
            "relationEN": "Both are rising young Malayalam actresses who gained popularity through new-age Malayalam films targeting youth audiences.",
            "relationML": "അനസ്വര രാജനും മമിത ബൈജുവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Mamitha Baiju",
            "wordMal": "മമിത ബൈജു",
            "relationEN": "Both are rising young Malayalam actresses who gained popularity through new-age Malayalam films targeting youth audiences.",
            "relationML": "അനസ്വര രാജനും മമിത ബൈജുവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Aishwarya Lekshmi",
        "civWordMal": "ഐശ്വര്യ ലക്ഷ്മി",
        "imposters": [
          {
            "word": "Nazriya Nazim",
            "wordMal": "നസ്രിയ നസീം",
            "relationEN": "Both are popular young Malayalam actresses who have appeared in multiple OTT hits and are social media favourites.",
            "relationML": "ഐശ്വര്യ ലക്ഷ്മിയും നസ്രിയ നസീമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Nazriya Nazim",
            "wordMal": "നസ്രിയ നസീം",
            "relationEN": "Both are popular young Malayalam actresses who have appeared in multiple OTT hits and are social media favourites.",
            "relationML": "ഐശ്വര്യ ലക്ഷ്മിയും നസ്രിയ നസീമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Asif Ali",
        "civWordMal": "ആസിഫ് അലി",
        "imposters": [
          {
            "word": "Fahadh Faasil",
            "wordMal": "ഫഹദ് ഫാസിൽ",
            "relationEN": "Both are acclaimed young Malayalam actors known for unconventional roles in content-driven realistic films.",
            "relationML": "ആസിഫ് അലിയും ഫഹദ് ഫാസിലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Fahadh Faasil",
            "wordMal": "ഫഹദ് ഫാസിൽ",
            "relationEN": "Both are acclaimed young Malayalam actors known for unconventional roles in content-driven realistic films.",
            "relationML": "ആസിഫ് അലിയും ഫഹദ് ഫാസിലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Basil Joseph",
        "civWordMal": "ബേസിൽ ജോസഫ്",
        "imposters": [
          {
            "word": "Vineeth Sreenivasan",
            "wordMal": "വിനീത് ശ്രീനിവാസൻ",
            "relationEN": "Both are young Malayalam directors and actors who create feel-good coming-of-age films loved by younger audiences.",
            "relationML": "ബേസിൽ ജോസഫും വിനീത് ശ്രീനിവാസനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Vineeth Sreenivasan",
            "wordMal": "വിനീത് ശ്രീനിവാസൻ",
            "relationEN": "Both are young Malayalam directors and actors who create feel-good coming-of-age films loved by younger audiences.",
            "relationML": "ബേസിൽ ജോസഫും വിനീത് ശ്രീനിവാസനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Vineeth Sreenivasan",
        "civWordMal": "വിനീത് ശ്രീനിവാസൻ",
        "imposters": [
          {
            "word": "Basil Joseph",
            "wordMal": "ബേസിൽ ജോസഫ്",
            "relationEN": "Both are young creative Malayalam filmmakers who also act, sing, and write music for their own films.",
            "relationML": "വിനീത് ശ്രീനിവാസനും ബേസിൽ ജോസഫും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Basil Joseph",
            "wordMal": "ബേസിൽ ജോസഫ്",
            "relationEN": "Both are young creative Malayalam filmmakers who also act, sing, and write music for their own films.",
            "relationML": "വിനീത് ശ്രീനിവാസനും ബേസിൽ ജോസഫും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Dulquer Salmaan",
        "civWordMal": "ദുൽഖർ സൽമാൻ",
        "imposters": [
          {
            "word": "Nivin Pauly",
            "wordMal": "നിവിൻ പോളി",
            "relationEN": "Both are the leading faces of Malayalam cinema's millennial generation who gained huge pans through OTT platforms.",
            "relationML": "ദുൽക്കർ സൽമാനും നിവിൻ പോളിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Nivin Pauly",
            "wordMal": "നിവിൻ പോളി",
            "relationEN": "Both are the leading faces of Malayalam cinema's millennial generation who gained huge pans through OTT platforms.",
            "relationML": "ദുൽക്കർ സൽമാനും നിവിൻ പോളിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Suraj Venjaramoodu",
        "civWordMal": "സുരാജ് വെഞ്ഞാറമൂട്",
        "imposters": [
          {
            "word": "Salim Kumar",
            "wordMal": "സലിം കുമാർ",
            "relationEN": "Both are National Award-winning Malayalam character actors celebrated for their powerful comedic and dramatic performances.",
            "relationML": "സുരാജ് വെഞ്ഞാറമൂടും സലിം കുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Salim Kumar",
            "wordMal": "സലിം കുമാർ",
            "relationEN": "Both are National Award-winning Malayalam character actors celebrated for their powerful comedic and dramatic performances.",
            "relationML": "സുരാജ് വെഞ്ഞാറമൂടും സലിം കുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Jagathy Sreekumar",
        "civWordMal": "ജഗതി ശ്രീകുമാർ",
        "imposters": [
          {
            "word": "Innocent",
            "wordMal": "ഇന്നസെന്റ്",
            "relationEN": "Both are legendary Malayalam comedy actors who defined an era of slapstick humour in 1980s and 1990s cinema.",
            "relationML": "ജഗതി ശ്രീകുമാറും ഇന്നസെന്റും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Innocent",
            "wordMal": "ഇന്നസെന്റ്",
            "relationEN": "Both are legendary Malayalam comedy actors who defined an era of slapstick humour in 1980s and 1990s cinema.",
            "relationML": "ജഗതി ശ്രീകുമാറും ഇന്നസെന്റും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Innocent",
        "civWordMal": "ഇന്നസെന്റ്",
        "imposters": [
          {
            "word": "Jagathy",
            "wordMal": "ജഗതി",
            "relationEN": "Both are celebrated Malayalam comedy actors who appeared together in countless 1980s and 1990s hit films.",
            "relationML": "ഇന്നസെന്റും ജഗതിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Jagathy",
            "wordMal": "ജഗതി",
            "relationEN": "Both are celebrated Malayalam comedy actors who appeared together in countless 1980s and 1990s hit films.",
            "relationML": "ഇന്നസെന്റും ജഗതിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Soubin Shahir",
        "civWordMal": "സൗബിൻ ഷാഹിർ",
        "imposters": [
          {
            "word": "Sreenath Bhasi",
            "wordMal": "ശ്രീനാഥ് ഭാസി",
            "relationEN": "Both are young Malayalam character actors known for natural, realistic performances in urban-themed films.",
            "relationML": "സൗബിൻ ഷാഹിറും ശ്രീനാഥ് ഭാസിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Sreenath Bhasi",
            "wordMal": "ശ്രീനാഥ് ഭാസി",
            "relationEN": "Both are young Malayalam character actors known for natural, realistic performances in urban-themed films.",
            "relationML": "സൗബിൻ ഷാഹിറും ശ്രീനാഥ് ഭാസിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kalyani Priyadarshan",
        "civWordMal": "കല്യാണി പ്രിയദർശൻ",
        "imposters": [
          {
            "word": "Nazriya Nazim",
            "wordMal": "നസ്രിയ നസീം",
            "relationEN": "Both are popular young Malayalam actresses known for their fresh screen presence in feel-good films.",
            "relationML": "കല്യാണി പ്രിയദർശനും നസ്രിയ നസീമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Nazriya Nazim",
            "wordMal": "നസ്രിയ നസീം",
            "relationEN": "Both are popular young Malayalam actresses known for their fresh screen presence in feel-good films.",
            "relationML": "കല്യാണി പ്രിയദർശനും നസ്രിയ നസീമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "K. J. Yesudas",
        "civWordMal": "കെ. ജെ. യേശുദാസ്",
        "imposters": [
          {
            "word": "M. G. Sreekumar",
            "wordMal": "എം ജി ശ്രീകുമാർ",
            "relationEN": "Both are legendary Kerala playback singers with classical music training who dominated Malayalam film music.",
            "relationML": "കെ.ജെ. യേശുദാസും എം.ജി. ശ്രീകുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "M. G. Sreekumar",
            "wordMal": "എം ജി ശ്രീകുമാർ",
            "relationEN": "Both are legendary Kerala playback singers with classical music training who dominated Malayalam film music.",
            "relationML": "കെ.ജെ. യേശുദാസും എം.ജി. ശ്രീകുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "K. S. Chithra",
        "civWordMal": "കെ. എസ്. ചിത്ര",
        "imposters": [
          {
            "word": "Sujatha",
            "wordMal": "സുജാത",
            "relationEN": "Both are celebrated female playback singers from Kerala whose voices defined the golden era of Malayalam film songs.",
            "relationML": "കെ.എസ്. ചിത്രയും സുജാതയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Sujatha",
            "wordMal": "സുജാത",
            "relationEN": "Both are celebrated female playback singers from Kerala whose voices defined the golden era of Malayalam film songs.",
            "relationML": "കെ.എസ്. ചിത്രയും സുജാതയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Sanju Samson",
        "civWordMal": "സഞ്ജു സാംസൺ",
        "imposters": [
          {
            "word": "Sachin Tendulkar",
            "wordMal": "സച്ചിൻ ടെണ്ടുൽക്കർ",
            "relationEN": "Both are celebrated Indian batsmen—Sanju Samson is Kerala's cricket hero and Sachin Tendulkar is the legendary God of Cricket.",
            "relationML": "സഞ്ജു സാംസണും സച്ചിൻ ടെണ്ടുൽക്കറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Sachin Tendulkar",
            "wordMal": "സച്ചിൻ ടെണ്ടുൽക്കർ",
            "relationEN": "Both are celebrated Indian batsmen—Sanju Samson is Kerala's cricket hero and Sachin Tendulkar is the legendary God of Cricket.",
            "relationML": "സഞ്ജു സാംസണും സച്ചിൻ ടെണ്ടുൽക്കറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Shashi Tharoor",
        "civWordMal": "ശശി തരൂർ",
        "imposters": [
          {
            "word": "Pinarayi Vijayan",
            "wordMal": "പിണറായി വിജയൻ",
            "relationEN": "Both are senior political leaders in Kerala—Tharoor for Congress and Pinarayi for the CPI(M), often seen as political rivals.",
            "relationML": "ശശി തരൂരും പിണറായി വിജയനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Pinarayi Vijayan",
            "wordMal": "പിണറായി വിജയൻ",
            "relationEN": "Both are senior political leaders in Kerala—Tharoor for Congress and Pinarayi for the CPI(M), often seen as political rivals.",
            "relationML": "ശശി തരൂരും പിണറായി വിജയനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Sreenivasan",
        "civWordMal": "ശ്രീനിവാസൻ",
        "imposters": [
          {
            "word": "Jagathy Sreekumar",
            "wordMal": "ജഗതി ശ്രീകുമാർ",
            "relationEN": "Both are iconic Malayalam comedy actors and scriptwriters who shaped the golden era of Malayalam comedy films.",
            "relationML": "ശ്രീനിവാസനും ജഗതി ശ്രീകുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Jagathy Sreekumar",
            "wordMal": "ജഗതി ശ്രീകുമാർ",
            "relationEN": "Both are iconic Malayalam comedy actors and scriptwriters who shaped the golden era of Malayalam comedy films.",
            "relationML": "ശ്രീനിവാസനും ജഗതി ശ്രീകുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Salim Kumar",
        "civWordMal": "സലിം കുമാർ",
        "imposters": [
          {
            "word": "Suraj Venjaramoodu",
            "wordMal": "സുരാജ് വെഞ്ഞാറമൂട്",
            "relationEN": "Both are National Award-winning character actors in Malayalam who are famous for blending comedy with emotional depth.",
            "relationML": "സലിം കുമാറും സുരാജ് വെഞ്ഞാറമൂടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Suraj Venjaramoodu",
            "wordMal": "സുരാജ് വെഞ്ഞാറമൂട്",
            "relationEN": "Both are National Award-winning character actors in Malayalam who are famous for blending comedy with emotional depth.",
            "relationML": "സലിം കുമാറും സുരാജ് വെഞ്ഞാറമൂടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Urveshi",
        "civWordMal": "ഉർവ്വശി",
        "imposters": [
          {
            "word": "Shobana",
            "wordMal": "ശോഭന",
            "relationEN": "Both are veteran Malayalam actress-dancers who are celebrated for their classical dance skills and timeless screen performances.",
            "relationML": "ഉർവ്വശിയും ശോഭനയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Shobana",
            "wordMal": "ശോഭന",
            "relationEN": "Both are veteran Malayalam actress-dancers who are celebrated for their classical dance skills and timeless screen performances.",
            "relationML": "ഉർവ്വശിയും ശോഭനയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Mukesh",
        "civWordMal": "മുകേഷ്",
        "imposters": [
          {
            "word": "Sreenivasan",
            "wordMal": "ശ്രീനിവാസൻ",
            "relationEN": "Both are popular Malayalam comedy actors and scriptwriters who frequently appeared together in family entertainer films.",
            "relationML": "മുകേശും ശ്രീനിവാസനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Sreenivasan",
            "wordMal": "ശ്രീനിവാസൻ",
            "relationEN": "Both are popular Malayalam comedy actors and scriptwriters who frequently appeared together in family entertainer films.",
            "relationML": "മുകേശും ശ്രീനിവാസനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Biju Menon",
        "civWordMal": "ബിജു മേനോൻ",
        "imposters": [
          {
            "word": "Suresh Gopi",
            "wordMal": "സുരേഷ് ഗോപി",
            "relationEN": "Both are popular Malayalam actors known for playing powerful, authoritative characters often in political or police roles.",
            "relationML": "ബിജു മേനോനും സുരേഷ് ഗോപിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Suresh Gopi",
            "wordMal": "സുരേഷ് ഗോപി",
            "relationEN": "Both are popular Malayalam actors known for playing powerful, authoritative characters often in political or police roles.",
            "relationML": "ബിജു മേനോനും സുരേഷ് ഗോപിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Pepe Antony",
        "civWordMal": "ആന്റണി വർഗ്ഗീസ്",
        "imposters": [
          {
            "word": "Shane Nigam",
            "wordMal": "ഷെയ്ൻ നിഗം",
            "relationEN": "Both are upcoming young Malayalam actors who gained recognition through critically praised debut films in the 2020s.",
            "relationML": "പേപ്പി ആന്റണിയും ഷെയ്ൻ നിഗമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Shane Nigam",
            "wordMal": "ഷെയ്ൻ നിഗം",
            "relationEN": "Both are upcoming young Malayalam actors who gained recognition through critically praised debut films in the 2020s.",
            "relationML": "പേപ്പി ആന്റണിയും ഷെയ്ൻ നിഗമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
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
            "word": "Thattukada",
            "wordMal": "തട്ടുകട",
            "relationEN": "Both are beloved Kerala roadside food establishments serving hot snacks and beverages, one specialising in tea and the other in rice meals.",
            "relationML": "ചായക്കടയും തട്ടുകടയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Thattukada",
            "wordMal": "തട്ടുകട",
            "relationEN": "Both are beloved Kerala roadside food establishments serving hot snacks and beverages, one specialising in tea and the other in rice meals.",
            "relationML": "ചായക്കടയും തട്ടുകടയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kallu Shappu",
        "civWordMal": "കള്ള് ഷാപ്പ്",
        "imposters": [
          {
            "word": "Bevco",
            "wordMal": "ബെവ്കോ",
            "relationEN": "Both are Kerala establishments where alcohol is sold, one is a traditional toddy shop and the other is the government-run wine store.",
            "relationML": "കള്ള് ഷാപ്പും ബേവ്‌കോയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Bevco",
            "wordMal": "ബെവ്കോ",
            "relationEN": "Both are Kerala establishments where alcohol is sold, one is a traditional toddy shop and the other is the government-run wine store.",
            "relationML": "കള്ള് ഷാപ്പും ബേവ്‌കോയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "KSRTC",
        "civWordMal": "കെ എസ് ആർ ടി സി",
        "imposters": [
          {
            "word": "Private Bus",
            "wordMal": "പ്രൈവറ്റ് ബസ്",
            "relationEN": "Both are bus services operating on Kerala roads, one is the government-owned red bus and the other is privately operated.",
            "relationML": "കെ.എസ്.ആർ.ടി.സിയും പ്രൈവറ്റ് ബസ്സും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Private Bus",
            "wordMal": "പ്രൈവറ്റ് ബസ്",
            "relationEN": "Both are bus services operating on Kerala roads, one is the government-owned red bus and the other is privately operated.",
            "relationML": "കെ.എസ്.ആർ.ടി.സിയും പ്രൈവറ്റ് ബസ്സും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Auto Rickshaw",
        "civWordMal": "ഓട്ടോ റിക്ഷ",
        "imposters": [
          {
            "word": "Taxi",
            "wordMal": "ടാക്സി",
            "relationEN": "Both are hired passenger vehicles seen throughout Kerala cities and towns for daily commuting and short trips.",
            "relationML": "ഓട്ടോ റിക്ഷയും ടാക്സിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Taxi",
            "wordMal": "ടാക്സി",
            "relationEN": "Both are hired passenger vehicles seen throughout Kerala cities and towns for daily commuting and short trips.",
            "relationML": "ഓട്ടോ റിക്ഷയും ടാക്സിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Tharavadu",
        "civWordMal": "തറവാട്",
        "imposters": [
          {
            "word": "Nalukettu",
            "wordMal": "നാലുകെട്ട്",
            "relationEN": "Both are traditional Kerala ancestral homes—Tharavadu refers to the family home concept and Nalukettu is the four-sided architectural style.",
            "relationML": "തറവാടും നാലുകെട്ടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Nalukettu",
            "wordMal": "നാലുകെട്ട്",
            "relationEN": "Both are traditional Kerala ancestral homes—Tharavadu refers to the family home concept and Nalukettu is the four-sided architectural style.",
            "relationML": "തറവാടും നാലുകെട്ടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Panchayath",
        "civWordMal": "പഞ്ചായത്ത്",
        "imposters": [
          {
            "word": "Municipality",
            "wordMal": "മുൻസിപ്പാലിറ്റി",
            "relationEN": "Both are local self-government bodies in Kerala responsible for civic administration—Panchayath for rural and Municipality for urban areas.",
            "relationML": "പഞ്ചായത്തും മുനിസിപ്പാലിറ്റിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Municipality",
            "wordMal": "മുൻസിപ്പാലിറ്റി",
            "relationEN": "Both are local self-government bodies in Kerala responsible for civic administration—Panchayath for rural and Municipality for urban areas.",
            "relationML": "പഞ്ചായത്തും മുനിസിപ്പാലിറ്റിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kudumbashree",
        "civWordMal": "കുടുംബശ്രീ",
        "imposters": [
          {
            "word": "Ayalkoottam",
            "wordMal": "അയൽക്കൂട്ടം",
            "relationEN": "Both are community-based women's collective programmes unique to Kerala promoting self-help and neighbourhood support.",
            "relationML": "കുടുംബശ്രീയും അയൽക്കൂട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Ayalkoottam",
            "wordMal": "അയൽക്കൂട്ടം",
            "relationEN": "Both are community-based women's collective programmes unique to Kerala promoting self-help and neighbourhood support.",
            "relationML": "കുടുംബശ്രീയും അയൽക്കൂട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Anganwadi",
        "civWordMal": "അങ്കണവാടി",
        "imposters": [
          {
            "word": "Nursery",
            "wordMal": "നഴ്സറി",
            "relationEN": "Both are early childhood institutions in Kerala providing pre-school education and nutrition to young children.",
            "relationML": "അങ്കണവാടിയും നഴ്സറിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Nursery",
            "wordMal": "നഴ്സറി",
            "relationEN": "Both are early childhood institutions in Kerala providing pre-school education and nutrition to young children.",
            "relationML": "അങ്കണവാടിയും നഴ്സറിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Rubber Thottam",
        "civWordMal": "റബ്ബർ തോട്ടം",
        "imposters": [
          {
            "word": "Tea Estate",
            "wordMal": "ടീ എസ്റ്റേറ്റ്",
            "relationEN": "Both are Kerala plantation estates that define the Malabar and Wayanad landscape, one grows rubber trees and one grows tea.",
            "relationML": "റബ്ബർ തോട്ടവും ചായ തോട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Tea Estate",
            "wordMal": "ടീ എസ്റ്റേറ്റ്",
            "relationEN": "Both are Kerala plantation estates that define the Malabar and Wayanad landscape, one grows rubber trees and one grows tea.",
            "relationML": "റബ്ബർ തോട്ടവും ചായ തോട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Tea Estate",
        "civWordMal": "തേയിലത്തോട്ടം",
        "imposters": [
          {
            "word": "Rubber Thottam",
            "wordMal": "റബ്ബർ തോട്ടം",
            "relationEN": "Both are large agricultural estates in Kerala's highland districts, one for harvesting tea leaves and one for tapping rubber.",
            "relationML": "ചായ തോട്ടവും റബ്ബർ തോട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Rubber Thottam",
            "wordMal": "റബ്ബർ തോട്ടം",
            "relationEN": "Both are large agricultural estates in Kerala's highland districts, one for harvesting tea leaves and one for tapping rubber.",
            "relationML": "ചായ തോട്ടവും റബ്ബർ തോട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Thengu",
        "civWordMal": "തെങ്ങ്",
        "imposters": [
          {
            "word": "Kamuku",
            "wordMal": "കമുകു",
            "relationEN": "Both are tall palm trees commonly grown in Kerala—Thengu is the coconut palm and Kamuku is the areca palm.",
            "relationML": "തെങ്ങും കമുകും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Kamuku",
            "wordMal": "കമുകു",
            "relationEN": "Both are tall palm trees commonly grown in Kerala—Thengu is the coconut palm and Kamuku is the areca palm.",
            "relationML": "തെങ്ങും കമുകും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kuttanadan Padanilam",
        "civWordMal": "കുട്ടനാടൻ പാടനിലം",
        "imposters": [
          {
            "word": "Munnar",
            "wordMal": "മൂന്നാർ",
            "relationEN": "Both are iconic Kerala geographic locations—Kuttanad is the low-lying rice field region and Munnar is the misty hill station.",
            "relationML": "കുട്ടനാടൻ പാടനിലവും മൂന്നാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Munnar",
            "wordMal": "മൂന്നാർ",
            "relationEN": "Both are iconic Kerala geographic locations—Kuttanad is the low-lying rice field region and Munnar is the misty hill station.",
            "relationML": "കുട്ടനാടൻ പാടനിലവും മൂന്നാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Puzha",
        "civWordMal": "പുഴ",
        "imposters": [
          {
            "word": "Kulam",
            "wordMal": "കുളം",
            "relationEN": "Both are freshwater bodies in Kerala—Puzha is a flowing river and Kulam is a still pond or tank.",
            "relationML": "പുഴയും കുളവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Kulam",
            "wordMal": "കുളം",
            "relationEN": "Both are freshwater bodies in Kerala—Puzha is a flowing river and Kulam is a still pond or tank.",
            "relationML": "പുഴയും കുളവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kaithari",
        "civWordMal": "കൈത്തറി",
        "imposters": [
          {
            "word": "Khadi",
            "wordMal": "ഖാദി",
            "relationEN": "Both are handloom cotton fabrics promoted in Kerala as part of traditional crafts and Gandhian self-reliance movements.",
            "relationML": "കൈത്തറിയും ഖദിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Khadi",
            "wordMal": "ഖാദി",
            "relationEN": "Both are handloom cotton fabrics promoted in Kerala as part of traditional crafts and Gandhian self-reliance movements.",
            "relationML": "കൈത്തറിയും ഖദിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Mazha",
        "civWordMal": "മഴ",
        "imposters": [
          {
            "word": "Veyil",
            "wordMal": "വെയിൽ",
            "relationEN": "Both are Kerala weather phenomena—Mazha is rain and Veyil is sunshine, often alternating in the same day.",
            "relationML": "മഴയും വെയിലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Veyil",
            "wordMal": "വെയിൽ",
            "relationEN": "Both are Kerala weather phenomena—Mazha is rain and Veyil is sunshine, often alternating in the same day.",
            "relationML": "മഴയും വെയിലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Tharavad",
        "civWordMal": "തറവാട്",
        "imposters": [
          {
            "word": "Nalukettu",
            "wordMal": "നാലുകെട്ട്",
            "relationEN": "Both refer to traditional Kerala family estates—Tharavad is the ancestral property and Nalukettu is the four-courtyard manor house.",
            "relationML": "തറവാടും നാലുകെട്ടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Nalukettu",
            "wordMal": "നാലുകെട്ട്",
            "relationEN": "Both refer to traditional Kerala family estates—Tharavad is the ancestral property and Nalukettu is the four-courtyard manor house.",
            "relationML": "തറവാടും നാലുകെട്ടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Naadan Pattu",
        "civWordMal": "നാടൻ പാട്ട്",
        "imposters": [
          {
            "word": "Kavitha",
            "wordMal": "കവിത",
            "relationEN": "Both are traditional Malayalam song forms—Naadan Pattu is folk song and Kavitha is a composed literary poem.",
            "relationML": "നാടൻ പാട്ടും കവിതയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Kavitha",
            "wordMal": "കവിത",
            "relationEN": "Both are traditional Malayalam song forms—Naadan Pattu is folk song and Kavitha is a composed literary poem.",
            "relationML": "നാടൻ പാട്ടും കവിതയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kavala",
        "civWordMal": "കവല",
        "imposters": [
          {
            "word": "Angadi",
            "wordMal": "അങ്ങാടി",
            "relationEN": "Both are Kerala market places—Kavala is a busy road junction commercial area and Angadi is a general shop.",
            "relationML": "കവലയും അങ്ങാടിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Angadi",
            "wordMal": "അങ്ങാടി",
            "relationEN": "Both are Kerala market places—Kavala is a busy road junction commercial area and Angadi is a general shop.",
            "relationML": "കവലയും അങ്ങാടിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Palli",
        "civWordMal": "പള്ളി",
        "imposters": [
          {
            "word": "Ambalam",
            "wordMal": "അമ്പലം",
            "relationEN": "Both are religious worship places in Kerala—Palli is a mosque or church and Ambalam is a Hindu temple.",
            "relationML": "പള്ളിയും അമ്പലവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Ambalam",
            "wordMal": "അമ്പലം",
            "relationEN": "Both are religious worship places in Kerala—Palli is a mosque or church and Ambalam is a Hindu temple.",
            "relationML": "പള്ളിയും അമ്പലവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Ambalam",
        "civWordMal": "അമ്പലം",
        "imposters": [
          {
            "word": "Palli",
            "wordMal": "പള്ളി",
            "relationEN": "Both are Kerala places of worship—Ambalam is a Hindu shrine and Palli is a mosque or church.",
            "relationML": "അമ്പലവും പള്ളിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Palli",
            "wordMal": "പള്ളി",
            "relationEN": "Both are Kerala places of worship—Ambalam is a Hindu shrine and Palli is a mosque or church.",
            "relationML": "അമ്പലവും പള്ളിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Lottery Ticket",
        "civWordMal": "ലോട്ടറി ടിക്കറ്റ്",
        "imposters": [
          {
            "word": "Scratch and Win",
            "wordMal": "സ്ക്രാച്ച് ആൻഡ് വിൻ",
            "relationEN": "Both are popular gambling tickets in Kerala—people stand in queues every day to buy lottery tickets hoping to win.",
            "relationML": "ലോട്ടറി ടിക്കറ്റും സ്ക്രാച്ച് ആൻഡ് വിന്നും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Scratch and Win",
            "wordMal": "സ്ക്രാച്ച് ആൻഡ് വിൻ",
            "relationEN": "Both are popular gambling tickets in Kerala—people stand in queues every day to buy lottery tickets hoping to win.",
            "relationML": "ലോട്ടറി ടിക്കറ്റും സ്ക്രാച്ച് ആൻഡ് വിന്നും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Hartal",
        "civWordMal": "ഹർത്താൽ",
        "imposters": [
          {
            "word": "Bandh",
            "wordMal": "ബന്ദ്",
            "relationEN": "Both are political shutdowns in Kerala where shops, offices, and transport close as a form of protest.",
            "relationML": "ഹർത്താലും ബന്ദും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Bandh",
            "wordMal": "ബന്ദ്",
            "relationEN": "Both are political shutdowns in Kerala where shops, offices, and transport close as a form of protest.",
            "relationML": "ഹർത്താലും ബന്ദും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Vayanasala",
        "civWordMal": "വായനശാല",
        "imposters": [
          {
            "word": "Club",
            "wordMal": "ക്ലബ്",
            "relationEN": "Both are community gathering places in Kerala providing books, recreation, or leisure activities to local people.",
            "relationML": "വായനശാലയും ക്ലബ്ബും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Club",
            "wordMal": "ക്ലബ്",
            "relationEN": "Both are community gathering places in Kerala providing books, recreation, or leisure activities to local people.",
            "relationML": "വായനശാലയും ക്ലബ്ബും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Chitty",
        "civWordMal": "ചിട്ടി",
        "imposters": [
          {
            "word": "Bank Loan",
            "wordMal": "ബാങ്ക് ലോൺ",
            "relationEN": "Both are financial instruments in Kerala used to accumulate savings or borrow money, one is a traditional chit fund and the other is institutional.",
            "relationML": "ചിട്ടിയും ബാങ്ക് ലോണും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Bank Loan",
            "wordMal": "ബാങ്ക് ലോൺ",
            "relationEN": "Both are financial instruments in Kerala used to accumulate savings or borrow money, one is a traditional chit fund and the other is institutional.",
            "relationML": "ചിട്ടിയും ബാങ്ക് ലോണും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kavukal",
        "civWordMal": "കാവ്",
        "imposters": [
          {
            "word": "Ambalam",
            "wordMal": "അമ്പലം",
            "relationEN": "Both are sacred groves or shrines in Kerala, with Kavukal being a forest shrine to serpent gods and Ambalam being a full temple.",
            "relationML": "കാവുകളും അമ്പലവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Ambalam",
            "wordMal": "അമ്പലം",
            "relationEN": "Both are sacred groves or shrines in Kerala, with Kavukal being a forest shrine to serpent gods and Ambalam being a full temple.",
            "relationML": "കാവുകളും അമ്പലവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Kulam",
        "civWordMal": "കുളം",
        "imposters": [
          {
            "word": "Puzha",
            "wordMal": "പുഴ",
            "relationEN": "Both are freshwater bodies in Kerala used for bathing and daily rituals—Kulam is a local pond and Puzha is a river.",
            "relationML": "കുളവും പുഴയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Puzha",
            "wordMal": "പുഴ",
            "relationEN": "Both are freshwater bodies in Kerala used for bathing and daily rituals—Kulam is a local pond and Puzha is a river.",
            "relationML": "കുളവും പുഴയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Milma",
        "civWordMal": "മിൽമ",
        "imposters": [
          {
            "word": "Supplyco",
            "wordMal": "സപ്ലൈകോ",
            "relationEN": "Both are Kerala government-owned consumer cooperatives—Milma sells dairy products and Supplyco sells essential provisions.",
            "relationML": "മിൽമയും സപ്ലൈകോയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Supplyco",
            "wordMal": "സപ്ലൈകോ",
            "relationEN": "Both are Kerala government-owned consumer cooperatives—Milma sells dairy products and Supplyco sells essential provisions.",
            "relationML": "മിൽമയും സപ്ലൈകോയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Bevco",
        "civWordMal": "ബെവ്കോ",
        "imposters": [
          {
            "word": "Kallu Shappu",
            "wordMal": "കള്ള് ഷാപ്പ്",
            "relationEN": "Both are Kerala establishments where alcoholic beverages are sold—Bevco is the government wine outlet and Kallu Shappu is the traditional toddy shop.",
            "relationML": "ബേവ്‌കോയും കള്ള് ഷാപ്പും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Kallu Shappu",
            "wordMal": "കള്ള് ഷാപ്പ്",
            "relationEN": "Both are Kerala establishments where alcoholic beverages are sold—Bevco is the government wine outlet and Kallu Shappu is the traditional toddy shop.",
            "relationML": "ബേവ്‌കോയും കള്ള് ഷാപ്പും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Akshaya Centre",
        "civWordMal": "അക്ഷയ കേന്ദ്രം",
        "imposters": [
          {
            "word": "Panchayath",
            "wordMal": "പഞ്ചായത്ത്",
            "relationEN": "Both are Kerala government service points where citizens can access official services—Akshaya for digital and Panchayath for civic.",
            "relationML": "അക്ഷയ സെന്ററും പഞ്ചായത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Panchayath",
            "wordMal": "പഞ്ചായത്ത്",
            "relationEN": "Both are Kerala government service points where citizens can access official services—Akshaya for digital and Panchayath for civic.",
            "relationML": "അക്ഷയ സെന്ററും പഞ്ചായത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Supplyco",
        "civWordMal": "സപ്ലൈകോ",
        "imposters": [
          {
            "word": "Milma",
            "wordMal": "മിൽമ",
            "relationEN": "Both are government-backed consumer cooperatives in Kerala selling essential household products at subsidized prices.",
            "relationML": "സപ്ലൈകോയും മിൽമയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Milma",
            "wordMal": "മിൽമ",
            "relationEN": "Both are government-backed consumer cooperatives in Kerala selling essential household products at subsidized prices.",
            "relationML": "സപ്ലൈകോയും മിൽമയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Vidyabhyasa Loan",
        "civWordMal": "വിദ്യാഭ്യാസ വായ്പ",
        "imposters": [
          {
            "word": "Home Loan",
            "wordMal": "ഹോം ലോൺ",
            "relationEN": "Both are long-term loan products in Kerala financial institutions used by families to fund major life expenses.",
            "relationML": "വിദ്യാഭ്യാസ ലോണും ഹോം ലോണും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Home Loan",
            "wordMal": "ഹോം ലോൺ",
            "relationEN": "Both are long-term loan products in Kerala financial institutions used by families to fund major life expenses.",
            "relationML": "വിദ്യാഭ്യാസ ലോണും ഹോം ലോണും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Ration Kada",
        "civWordMal": "റേഷൻ കട",
        "imposters": [
          {
            "word": "Maveli Store",
            "wordMal": "മാവേലി സ്റ്റോർ",
            "relationEN": "Both are government-run subsidised grocery shops in Kerala providing essentials like rice and oil to ration card holders.",
            "relationML": "റേഷൻ കടയും മാവേലി സ്റ്റോറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Maveli Store",
            "wordMal": "മാവേലി സ്റ്റോർ",
            "relationEN": "Both are government-run subsidised grocery shops in Kerala providing essentials like rice and oil to ration card holders.",
            "relationML": "റേഷൻ കടയും മാവേലി സ്റ്റോറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Mahatma Gandhi NREGA",
        "civWordMal": "തൊഴിലുറപ്പ്",
        "imposters": [
          {
            "word": "Kudumbashree",
            "wordMal": "കുടുംബശ്രീ",
            "relationEN": "Both are Kerala government welfare schemes providing employment and income support to rural and poor households.",
            "relationML": "മഹാത്മ ഗാന്ധി എൻ.ആർ.ഇ.ജി.എ.യും കുടുംബശ്രീയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Kudumbashree",
            "wordMal": "കുടുംബശ്രീ",
            "relationEN": "Both are Kerala government welfare schemes providing employment and income support to rural and poor households.",
            "relationML": "മഹാത്മ ഗാന്ധി എൻ.ആർ.ഇ.ജി.എ.യും കുടുംബശ്രീയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Current Bill",
        "civWordMal": "കറന്റ് ബിൽ",
        "imposters": [
          {
            "word": "Water Bill",
            "wordMal": "വാട്ടർ ബിൽ",
            "relationEN": "Both are monthly utility bills paid by Kerala households for essential services provided by government agencies.",
            "relationML": "കറന്റ് ബില്ലും വാട്ടർ ബില്ലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Water Bill",
            "wordMal": "വാട്ടർ ബിൽ",
            "relationEN": "Both are monthly utility bills paid by Kerala households for essential services provided by government agencies.",
            "relationML": "കറന്റ് ബില്ലും വാട്ടർ ബില്ലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "KSEB",
        "civWordMal": "കെഎസ്ഇബി",
        "imposters": [
          {
            "word": "Water Authority",
            "wordMal": "വാട്ടർ അതോറിറ്റി",
            "relationEN": "Both are Kerala government utilities that deliver essential services to every household—KSEB for electricity and Water Authority for piped water.",
            "relationML": "കെ.എസ്.ഇ.ബിയും വാട്ടർ അതോറിറ്റിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "Water Authority",
            "wordMal": "വാട്ടർ അതോറിറ്റി",
            "relationEN": "Both are Kerala government utilities that deliver essential services to every household—KSEB for electricity and Water Authority for piped water.",
            "relationML": "കെ.എസ്.ഇ.ബിയും വാട്ടർ അതോറിറ്റിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          }
        ]
      },
      {
        "civWord": "Water Authority",
        "civWordMal": "വാട്ടർ അതോറിറ്റി",
        "imposters": [
          {
            "word": "KSEB",
            "wordMal": "കെഎസ്ഇബി",
            "relationEN": "Both are essential Kerala government service providers—Water Authority supplies piped water and KSEB provides electricity.",
            "relationML": "വാട്ടർ അതോറിറ്റിയും കെ.എസ്.ഇ.ബിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
          },
          {
            "word": "KSEB",
            "wordMal": "കെഎസ്ഇബി",
            "relationEN": "Both are essential Kerala government service providers—Water Authority supplies piped water and KSEB provides electricity.",
            "relationML": "വാട്ടർ അതോറിറ്റിയും കെ.എസ്.ഇ.ബിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."
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
            "word": "Low Floor Bus",
            "wordMal": "ലോ ഫ്ലോർ ബസ്",
            "relationEN": "Both Aanavandi and Low Floor Bus refer to popular KSRTC buses operating in Kerala.",
            "relationML": "രണ്ടും കേരളത്തിൽ സർവീസ് നടത്തുന്ന ജനപ്രിയ കെഎസ്ആർടിസി ബസുകളാണ്."
          },
          {
            "word": "Low Floor Bus",
            "wordMal": "ലോ ഫ്ലോർ ബസ്",
            "relationEN": "Both Aanavandi and Low Floor Bus refer to popular KSRTC buses operating in Kerala.",
            "relationML": "രണ്ടും കേരളത്തിൽ സർവീസ് നടത്തുന്ന ജനപ്രിയ കെഎസ്ആർടിസി ബസുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Vallam",
        "civWordMal": "വള്ളം",
        "imposters": [
          {
            "word": "Thoni",
            "wordMal": "തോണി",
            "relationEN": "Both Vallam and Thoni are traditional manually rowed small boats used by Kerala fishermen and locals.",
            "relationML": "രണ്ടും കേരളത്തിലെ മത്സ്യത്തൊഴിലാളികളും നാട്ടുകാരും ഉപയോഗിക്കുന്ന പരമ്പരാഗതമായ ചെറിയ വഞ്ചികളാണ്."
          },
          {
            "word": "Thoni",
            "wordMal": "തോണി",
            "relationEN": "Both Vallam and Thoni are traditional manually rowed small boats used by Kerala fishermen and locals.",
            "relationML": "രണ്ടും കേരളത്തിലെ മത്സ്യത്തൊഴിലാളികളും നാട്ടുകാരും ഉപയോഗിക്കുന്ന പരമ്പരാഗതമായ ചെറിയ വഞ്ചികളാണ്."
          }
        ]
      },
      {
        "civWord": "Autorickshaw",
        "civWordMal": "ഓട്ടോറിക്ഷ",
        "imposters": [
          {
            "word": "Jeep",
            "wordMal": "ജീപ്പ്",
            "relationEN": "Both Autorickshaw and Jeep are commonly used as local transport or taxi services in many parts of India.",
            "relationML": "രണ്ടും ഇന്ത്യയിലെ പല ഭാഗങ്ങളിലും പ്രാദേശിക യാത്രകൾക്കും ടാക്സിയായും ഉപയോഗിക്കുന്ന വാഹനങ്ങളാണ്."
          },
          {
            "word": "Jeep",
            "wordMal": "ജീപ്പ്",
            "relationEN": "Both Autorickshaw and Jeep are commonly used as local transport or taxi services in many parts of India.",
            "relationML": "രണ്ടും ഇന്ത്യയിലെ പല ഭാഗങ്ങളിലും പ്രാദേശിക യാത്രകൾക്കും ടാക്സിയായും ഉപയോഗിക്കുന്ന വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Bullet",
        "civWordMal": "ബുള്ളറ്റ്",
        "imposters": [
          {
            "word": "Pulsar",
            "wordMal": "പൾസർ",
            "relationEN": "Both Bullet and Pulsar are highly popular and powerful motorcycle brands among Indian youth.",
            "relationML": "രണ്ടും ഇന്ത്യൻ യുവാക്കൾക്കിടയിൽ വളരെ പ്രശസ്തമായ കരുത്തുറ്റ മോട്ടോർസൈക്കിൾ ബ്രാൻഡുകളാണ്."
          },
          {
            "word": "Pulsar",
            "wordMal": "പൾസർ",
            "relationEN": "Both Bullet and Pulsar are highly popular and powerful motorcycle brands among Indian youth.",
            "relationML": "രണ്ടും ഇന്ത്യൻ യുവാക്കൾക്കിടയിൽ വളരെ പ്രശസ്തമായ കരുത്തുറ്റ മോട്ടോർസൈക്കിൾ ബ്രാൻഡുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Houseboat",
        "civWordMal": "ഹൗസ്‌ബോട്ട്",
        "imposters": [
          {
            "word": "Shikara",
            "wordMal": "ശിക്കാര",
            "relationEN": "Both Houseboat and Shikara are popular tourist boats offering leisure rides on serene lakes and backwaters.",
            "relationML": "രണ്ടും ശാന്തമായ കായലുകളിലും തടാകങ്ങളിലും വിനോദയാത്രകൾക്കായി ഉപയോഗിക്കുന്ന പ്രശസ്തമായ ബോട്ടുകളാണ്."
          },
          {
            "word": "Shikara",
            "wordMal": "ശിക്കാര",
            "relationEN": "Both Houseboat and Shikara are popular tourist boats offering leisure rides on serene lakes and backwaters.",
            "relationML": "രണ്ടും ശാന്തമായ കായലുകളിലും തടാകങ്ങളിലും വിനോദയാത്രകൾക്കായി ഉപയോഗിക്കുന്ന പ്രശസ്തമായ ബോട്ടുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Jankar",
        "civWordMal": "ജങ്കാർ",
        "imposters": [
          {
            "word": "Ferry",
            "wordMal": "ഫെറി",
            "relationEN": "Both Jankar and Ferry are used in Kerala to transport people and vehicles across water bodies.",
            "relationML": "രണ്ടും കേരളത്തിൽ ആളുകളെയും വാഹനങ്ങളെയും അക്കരെ കടത്താൻ ഉപയോഗിക്കുന്ന ജലയാനങ്ങളാണ്."
          },
          {
            "word": "Ferry",
            "wordMal": "ഫെറി",
            "relationEN": "Both Jankar and Ferry are used in Kerala to transport people and vehicles across water bodies.",
            "relationML": "രണ്ടും കേരളത്തിൽ ആളുകളെയും വാഹനങ്ങളെയും അക്കരെ കടത്താൻ ഉപയോഗിക്കുന്ന ജലയാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Ferry",
        "civWordMal": "ഫെറി",
        "imposters": [
          {
            "word": "Jankar",
            "wordMal": "ജങ്കാർ",
            "relationEN": "Both Ferry and Jankar are water transport vessels primarily used for crossing rivers and lakes.",
            "relationML": "രണ്ടും പുഴകളും തടാകങ്ങളും കുറുകെ കടക്കാൻ പ്രധാനമായും ഉപയോഗിക്കുന്ന ജലയാനങ്ങളാണ്."
          },
          {
            "word": "Jankar",
            "wordMal": "ജങ്കാർ",
            "relationEN": "Both Ferry and Jankar are water transport vessels primarily used for crossing rivers and lakes.",
            "relationML": "രണ്ടും പുഴകളും തടാകങ്ങളും കുറുകെ കടക്കാൻ പ്രധാനമായും ഉപയോഗിക്കുന്ന ജലയാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Chundan Vallam",
        "civWordMal": "ചുണ്ടൻ വള്ളം",
        "imposters": [
          {
            "word": "Kettuvallam",
            "wordMal": "കെട്ടുവള്ളം",
            "relationEN": "Both Chundan Vallam and Kettuvallam are traditional long wooden boats synonymous with Kerala's backwaters.",
            "relationML": "രണ്ടും കേരളത്തിലെ കായലുകളുമായി ബന്ധപ്പെട്ട പരമ്പരാഗതമായ വലിയ മരവള്ളങ്ങളാണ്."
          },
          {
            "word": "Kettuvallam",
            "wordMal": "കെട്ടുവള്ളം",
            "relationEN": "Both Chundan Vallam and Kettuvallam are traditional long wooden boats synonymous with Kerala's backwaters.",
            "relationML": "രണ്ടും കേരളത്തിലെ കായലുകളുമായി ബന്ധപ്പെട്ട പരമ്പരാഗതമായ വലിയ മരവള്ളങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Kettuvallam",
        "civWordMal": "കെട്ടുവള്ളം",
        "imposters": [
          {
            "word": "Houseboat",
            "wordMal": "ഹൗസ്ബോട്ട്",
            "relationEN": "Both Kettuvallam and Houseboat are iconic Kerala tourism attractions offering scenic backwater cruises.",
            "relationML": "രണ്ടും കേരളത്തിലെ കായൽ യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന പ്രശസ്തമായ വിനോദസഞ്ചാര ബോട്ടുകളാണ്."
          },
          {
            "word": "Houseboat",
            "wordMal": "ഹൗസ്ബോട്ട്",
            "relationEN": "Both Kettuvallam and Houseboat are iconic Kerala tourism attractions offering scenic backwater cruises.",
            "relationML": "രണ്ടും കേരളത്തിലെ കായൽ യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന പ്രശസ്തമായ വിനോദസഞ്ചാര ബോട്ടുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Pickup",
        "civWordMal": "പിക്കപ്പ്",
        "imposters": [
          {
            "word": "Lorry",
            "wordMal": "ലോറി",
            "relationEN": "Both Pickup and Lorry are commercial cargo vehicles widely used for transporting goods and freight.",
            "relationML": "രണ്ടും ചരക്ക് നീക്കത്തിനായി വ്യാപകമായി ഉപയോഗിക്കുന്ന വാണിജ്യ വാഹനങ്ങളാണ്."
          },
          {
            "word": "Lorry",
            "wordMal": "ലോറി",
            "relationEN": "Both Pickup and Lorry are commercial cargo vehicles widely used for transporting goods and freight.",
            "relationML": "രണ്ടും ചരക്ക് നീക്കത്തിനായി വ്യാപകമായി ഉപയോഗിക്കുന്ന വാണിജ്യ വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Jeep",
        "civWordMal": "ജീപ്പ്",
        "imposters": [
          {
            "word": "Gypsy",
            "wordMal": "ജിപ്സി",
            "relationEN": "Both Jeep and Maruti Gypsy are rugged four-wheel drive vehicles known for their off-roading capabilities.",
            "relationML": "രണ്ടും ദുർഘടമായ പാതകളിൽ സഞ്ചരിക്കാൻ ശേഷിയുള്ള കരുത്തുറ്റ ഫോർ വീൽ ഡ്രൈവ് വാഹനങ്ങളാണ്."
          },
          {
            "word": "Gypsy",
            "wordMal": "ജിപ്സി",
            "relationEN": "Both Jeep and Maruti Gypsy are rugged four-wheel drive vehicles known for their off-roading capabilities.",
            "relationML": "രണ്ടും ദുർഘടമായ പാതകളിൽ സഞ്ചരിക്കാൻ ശേഷിയുള്ള കരുത്തുറ്റ ഫോർ വീൽ ഡ്രൈവ് വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Lorry",
        "civWordMal": "ലോറി",
        "imposters": [
          {
            "word": "Tipper",
            "wordMal": "ടിപ്പർ",
            "relationEN": "Both Lorry and Tipper are heavy duty trucks used for transporting goods or construction materials.",
            "relationML": "രണ്ടും ചരക്കുകളോ നിർമ്മാണ സാമഗ്രികളോ കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്ന വലിയ ട്രക്കുകളാണ്."
          },
          {
            "word": "Tipper",
            "wordMal": "ടിപ്പർ",
            "relationEN": "Both Lorry and Tipper are heavy duty trucks used for transporting goods or construction materials.",
            "relationML": "രണ്ടും ചരക്കുകളോ നിർമ്മാണ സാമഗ്രികളോ കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്ന വലിയ ട്രക്കുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Private Bus",
        "civWordMal": "പ്രൈവറ്റ് ബസ്",
        "imposters": [
          {
            "word": "KSRTC",
            "wordMal": "കെഎസ്ആർടിസി",
            "relationEN": "Both Private Bus and KSRTC represent the backbone of daily public road transport in Kerala.",
            "relationML": "രണ്ടും കേരളത്തിലെ ദൈനംദിന റോഡ് ഗതാഗതത്തിന്റെ നെടുംതൂണായ ബസുകളാണ്."
          },
          {
            "word": "KSRTC",
            "wordMal": "കെഎസ്ആർടിസി",
            "relationEN": "Both Private Bus and KSRTC represent the backbone of daily public road transport in Kerala.",
            "relationML": "രണ്ടും കേരളത്തിലെ ദൈനംദിന റോഡ് ഗതാഗതത്തിന്റെ നെടുംതൂണായ ബസുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Tempo Traveller",
        "civWordMal": "ടെമ്പോ ട്രാവലർ",
        "imposters": [
          {
            "word": "Mini Bus",
            "wordMal": "മിനി ബസ്",
            "relationEN": "Both Tempo Traveller and Mini Bus are spacious passenger vehicles favored for family trips and excursions.",
            "relationML": "രണ്ടും കുടുംബയാത്രകൾക്കും വിനോദയാത്രകൾക്കും അനുയോജ്യമായ വലിയ യാത്രാവാഹനങ്ങളാണ്."
          },
          {
            "word": "Mini Bus",
            "wordMal": "മിനി ബസ്",
            "relationEN": "Both Tempo Traveller and Mini Bus are spacious passenger vehicles favored for family trips and excursions.",
            "relationML": "രണ്ടും കുടുംബയാത്രകൾക്കും വിനോദയാത്രകൾക്കും അനുയോജ്യമായ വലിയ യാത്രാവാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Scooter",
        "civWordMal": "സ്കൂട്ടർ",
        "imposters": [
          {
            "word": "Bike",
            "wordMal": "ബൈക്ക്",
            "relationEN": "Both Scooter and Bike are two-wheeled motor vehicles commonly used for personal commuting.",
            "relationML": "രണ്ടും ദൈനംദിന യാത്രകൾക്കായി സാധാരണയായി ഉപയോഗിക്കുന്ന ഇരുചക്ര വാഹനങ്ങളാണ്."
          },
          {
            "word": "Bike",
            "wordMal": "ബൈക്ക്",
            "relationEN": "Both Scooter and Bike are two-wheeled motor vehicles commonly used for personal commuting.",
            "relationML": "രണ്ടും ദൈനംദിന യാത്രകൾക്കായി സാധാരണയായി ഉപയോഗിക്കുന്ന ഇരുചക്ര വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Cycle",
        "civWordMal": "സൈക്കിൾ",
        "imposters": [
          {
            "word": "Scooter",
            "wordMal": "സ്കൂട്ടർ",
            "relationEN": "Both Cycle and Scooter are simple, everyday two-wheelers used for short-distance personal transport.",
            "relationML": "രണ്ടും ചെറിയ ദൂരങ്ങളിലേക്കുള്ള യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന സാധാരണ ഇരുചക്ര വാഹനങ്ങളാണ്."
          },
          {
            "word": "Scooter",
            "wordMal": "സ്കൂട്ടർ",
            "relationEN": "Both Cycle and Scooter are simple, everyday two-wheelers used for short-distance personal transport.",
            "relationML": "രണ്ടും ചെറിയ ദൂരങ്ങളിലേക്കുള്ള യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന സാധാരണ ഇരുചക്ര വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Mini Bus",
        "civWordMal": "മിനി ബസ്",
        "imposters": [
          {
            "word": "Tempo Traveller",
            "wordMal": "ടെമ്പോ ട്രാവലർ",
            "relationEN": "Both Mini Bus and Tempo Traveller are mid-sized commercial passenger vehicles used for group trips.",
            "relationML": "രണ്ടും ചെറിയ സംഘങ്ങളുടെ യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന ഇടത്തരം യാത്രാവാഹനങ്ങളാണ്."
          },
          {
            "word": "Tempo Traveller",
            "wordMal": "ടെമ്പോ ട്രാവലർ",
            "relationEN": "Both Mini Bus and Tempo Traveller are mid-sized commercial passenger vehicles used for group trips.",
            "relationML": "രണ്ടും ചെറിയ സംഘങ്ങളുടെ യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന ഇടത്തരം യാത്രാവാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Taxi",
        "civWordMal": "ടാക്സി",
        "imposters": [
          {
            "word": "Auto Rickshaw",
            "wordMal": "ഓട്ടോ റിക്ഷ",
            "relationEN": "Both Taxi and Auto Rickshaw are popular modes of hired public transport for daily commuting.",
            "relationML": "രണ്ടും ദൈനംദിന യാത്രകൾക്ക് ആളുകൾ വാടകയ്ക്ക് വിളിക്കുന്ന പൊതുഗതാഗത വാഹനങ്ങളാണ്."
          },
          {
            "word": "Auto Rickshaw",
            "wordMal": "ഓട്ടോ റിക്ഷ",
            "relationEN": "Both Taxi and Auto Rickshaw are popular modes of hired public transport for daily commuting.",
            "relationML": "രണ്ടും ദൈനംദിന യാത്രകൾക്ക് ആളുകൾ വാടകയ്ക്ക് വിളിക്കുന്ന പൊതുഗതാഗത വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Train",
        "civWordMal": "ട്രെയിൻ",
        "imposters": [
          {
            "word": "Metro",
            "wordMal": "മെട്രോ",
            "relationEN": "Both Train and Metro are railway-based mass transit systems used for passenger commuting.",
            "relationML": "രണ്ടും യാത്രക്കാർക്ക് സഞ്ചരിക്കാനുള്ള റെയിൽവേ അധിഷ്ഠിത പൊതുഗതാഗത സംവിധാനങ്ങളാണ്."
          },
          {
            "word": "Metro",
            "wordMal": "മെട്രോ",
            "relationEN": "Both Train and Metro are railway-based mass transit systems used for passenger commuting.",
            "relationML": "രണ്ടും യാത്രക്കാർക്ക് സഞ്ചരിക്കാനുള്ള റെയിൽവേ അധിഷ്ഠിത പൊതുഗതാഗത സംവിധാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "School Bus",
        "civWordMal": "സ്കൂൾ ബസ്",
        "imposters": [
          {
            "word": "Ambulance",
            "wordMal": "ആംബുലൻസ്",
            "relationEN": "Both School Bus and Ambulance are purpose-built utility vehicles often painted in distinct recognizable colors like yellow or white.",
            "relationML": "രണ്ടും പെട്ടെന്ന് തിരിച്ചറിയാൻ കഴിയുന്ന മഞ്ഞയോ വെള്ളയോ പോലുള്ള പ്രത്യേക നിറങ്ങളിൽ പെയിന്റ് ചെയ്ത വാഹനങ്ങളാണ്."
          },
          {
            "word": "Ambulance",
            "wordMal": "ആംബുലൻസ്",
            "relationEN": "Both School Bus and Ambulance are purpose-built utility vehicles often painted in distinct recognizable colors like yellow or white.",
            "relationML": "രണ്ടും പെട്ടെന്ന് തിരിച്ചറിയാൻ കഴിയുന്ന മഞ്ഞയോ വെള്ളയോ പോലുള്ള പ്രത്യേക നിറങ്ങളിൽ പെയിന്റ് ചെയ്ത വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Jik Jik Train",
        "civWordMal": "തീവണ്ടി",
        "imposters": [
          {
            "word": "Toy Train",
            "wordMal": "ടോയ് ട്രെയിൻ",
            "relationEN": "Both Jik Jik Train and Toy Train refer to miniature railway models primarily built for children's amusement.",
            "relationML": "രണ്ടും പ്രധാനമായും കുട്ടികളുടെ വിനോദത്തിനായി നിർമ്മിച്ച ചെറിയ തീവണ്ടി രൂപങ്ങളാണ്."
          },
          {
            "word": "Toy Train",
            "wordMal": "ടോയ് ട്രെയിൻ",
            "relationEN": "Both Jik Jik Train and Toy Train refer to miniature railway models primarily built for children's amusement.",
            "relationML": "രണ്ടും പ്രധാനമായും കുട്ടികളുടെ വിനോദത്തിനായി നിർമ്മിച്ച ചെറിയ തീവണ്ടി രൂപങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Ambulance",
        "civWordMal": "ആംബുലൻസ്",
        "imposters": [
          {
            "word": "Fire Engine",
            "wordMal": "ഫയർ എഞ്ചിൻ",
            "relationEN": "Both Ambulance and Fire Engine are high-priority emergency vehicles that rush to critical situations.",
            "relationML": "രണ്ടും അടിയന്തര സാഹചര്യങ്ങളിൽ വേഗത്തിൽ ഓടിയെത്തുന്ന അത്യന്താപേക്ഷിതമായ സുരക്ഷാ വാഹനങ്ങളാണ്."
          },
          {
            "word": "Fire Engine",
            "wordMal": "ഫയർ എഞ്ചിൻ",
            "relationEN": "Both Ambulance and Fire Engine are high-priority emergency vehicles that rush to critical situations.",
            "relationML": "രണ്ടും അടിയന്തര സാഹചര്യങ്ങളിൽ വേഗത്തിൽ ഓടിയെത്തുന്ന അത്യന്താപേക്ഷിതമായ സുരക്ഷാ വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Kochi Metro",
        "civWordMal": "കൊച്ചി മെട്രോ",
        "imposters": [
          {
            "word": "Water Metro",
            "wordMal": "വാട്ടർ മെട്രോ",
            "relationEN": "Both Kochi Metro and Water Metro are innovative, eco-friendly public transportation initiatives in Kochi.",
            "relationML": "രണ്ടും കൊച്ചി നഗരത്തിലെ പരിസ്ഥിതി സൗഹൃദമായ ആധുനിക പൊതുഗതാഗത സംവിധാനങ്ങളാണ്."
          },
          {
            "word": "Water Metro",
            "wordMal": "വാട്ടർ മെട്രോ",
            "relationEN": "Both Kochi Metro and Water Metro are innovative, eco-friendly public transportation initiatives in Kochi.",
            "relationML": "രണ്ടും കൊച്ചി നഗരത്തിലെ പരിസ്ഥിതി സൗഹൃദമായ ആധുനിക പൊതുഗതാഗത സംവിധാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Tractor",
        "civWordMal": "ട്രാക്ടർ",
        "imposters": [
          {
            "word": "JCB",
            "wordMal": "ജെസിബി",
            "relationEN": "Both Tractor and JCB are heavy earth-moving or agricultural machines used in construction and farming.",
            "relationML": "രണ്ടും നിർമ്മാണ മേഖലയിലും കൃഷിയിലും ഉപയോഗിക്കുന്ന ഭാരമേറിയ യന്ത്രവാഹനങ്ങളാണ്."
          },
          {
            "word": "JCB",
            "wordMal": "ജെസിബി",
            "relationEN": "Both Tractor and JCB are heavy earth-moving or agricultural machines used in construction and farming.",
            "relationML": "രണ്ടും നിർമ്മാണ മേഖലയിലും കൃഷിയിലും ഉപയോഗിക്കുന്ന ഭാരമേറിയ യന്ത്രവാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Excavator",
        "civWordMal": "ജെസിബി",
        "imposters": [
          {
            "word": "JCB",
            "wordMal": "ജെസിബി",
            "relationEN": "Both Excavator and JCB are heavy construction machines fitted with large buckets for digging earth.",
            "relationML": "രണ്ടും മണ്ണ് കുഴിക്കുന്നതിനായി വലിയ ബക്കറ്റുകൾ ഘടിപ്പിച്ച ഭാരമേറിയ നിർമ്മാണ യന്ത്രങ്ങളാണ്."
          },
          {
            "word": "JCB",
            "wordMal": "ജെസിബി",
            "relationEN": "Both Excavator and JCB are heavy construction machines fitted with large buckets for digging earth.",
            "relationML": "രണ്ടും മണ്ണ് കുഴിക്കുന്നതിനായി വലിയ ബക്കറ്റുകൾ ഘടിപ്പിച്ച ഭാരമേറിയ നിർമ്മാണ യന്ത്രങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Speed Boat",
        "civWordMal": "സ്പീഡ് ബോട്ട്",
        "imposters": [
          {
            "word": "Jankar",
            "wordMal": "ജങ്കാർ",
            "relationEN": "Both Speed Boat and Jankar are mechanized watercraft used for navigation in Kerala's rivers and lakes.",
            "relationML": "രണ്ടും കേരളത്തിലെ പുഴകളിലും തടാകങ്ങളിലും യാത്ര ചെയ്യാൻ ഉപയോഗിക്കുന്ന യന്ത്രവൽകൃത ജലയാനങ്ങളാണ്."
          },
          {
            "word": "Jankar",
            "wordMal": "ജങ്കാർ",
            "relationEN": "Both Speed Boat and Jankar are mechanized watercraft used for navigation in Kerala's rivers and lakes.",
            "relationML": "രണ്ടും കേരളത്തിലെ പുഴകളിലും തടാകങ്ങളിലും യാത്ര ചെയ്യാൻ ഉപയോഗിക്കുന്ന യന്ത്രവൽകൃത ജലയാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Peti Auto",
        "civWordMal": "പെട്ടി ഓട്ടോ",
        "imposters": [
          {
            "word": "Goods Auto",
            "wordMal": "ഗുഡ്സ് ഓട്ടോ",
            "relationEN": "Both Peti Auto and Goods Auto are small three-wheeled transport vehicles designed for moving light cargo.",
            "relationML": "രണ്ടും ചെറിയ ചരക്കുകൾ കൊണ്ടുപോകാൻ രൂപകൽപ്പന ചെയ്ത മുച്ചക്ര വാഹനങ്ങളാണ്."
          },
          {
            "word": "Goods Auto",
            "wordMal": "ഗുഡ്സ് ഓട്ടോ",
            "relationEN": "Both Peti Auto and Goods Auto are small three-wheeled transport vehicles designed for moving light cargo.",
            "relationML": "രണ്ടും ചെറിയ ചരക്കുകൾ കൊണ്ടുപോകാൻ രൂപകൽപ്പന ചെയ്ത മുച്ചക്ര വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Ambassador",
        "civWordMal": "അംബാസഡർ",
        "imposters": [
          {
            "word": "Contessa",
            "wordMal": "കോണ്ടസ്സ",
            "relationEN": "Both Ambassador and Contessa are classic Indian cars manufactured by Hindustan Motors.",
            "relationML": "രണ്ടും ഹിന്ദുസ്ഥാൻ മോട്ടോഴ്‌സ് നിർമ്മിച്ച പഴയകാല ക്ലാസിക് ഇന്ത്യൻ കാറുകളാണ്."
          },
          {
            "word": "Contessa",
            "wordMal": "കോണ്ടസ്സ",
            "relationEN": "Both Ambassador and Contessa are classic Indian cars manufactured by Hindustan Motors.",
            "relationML": "രണ്ടും ഹിന്ദുസ്ഥാൻ മോട്ടോഴ്‌സ് നിർമ്മിച്ച പഴയകാല ക്ലാസിക് ഇന്ത്യൻ കാറുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Mahindra Jeep",
        "civWordMal": "മഹീന്ദ്ര ജീപ്പ്",
        "imposters": [
          {
            "word": "Bolero",
            "wordMal": "ബൊലേറോ",
            "relationEN": "Both Mahindra Jeep and Bolero are rugged, off-road utility vehicles popular in rural Kerala.",
            "relationML": "രണ്ടും കേരളത്തിലെ ഗ്രാമപ്രദേശങ്ങളിൽ ജനപ്രിയമായ കടുപ്പമേറിയ ഓഫ് റോഡ് വാഹനങ്ങളാണ്."
          },
          {
            "word": "Bolero",
            "wordMal": "ബൊലേറോ",
            "relationEN": "Both Mahindra Jeep and Bolero are rugged, off-road utility vehicles popular in rural Kerala.",
            "relationML": "രണ്ടും കേരളത്തിലെ ഗ്രാമപ്രദേശങ്ങളിൽ ജനപ്രിയമായ കടുപ്പമേറിയ ഓഫ് റോഡ് വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Chavittu Vandi",
        "civWordMal": "ചവിട്ടുവണ്ടി",
        "imposters": [
          {
            "word": "Cycle",
            "wordMal": "സൈക്കിൾ",
            "relationEN": "Both Chavittu Vandi and Cycle are pedal-powered non-motorized vehicles.",
            "relationML": "രണ്ടും മനുഷ്യപ്രയത്നത്താൽ ചവിട്ടി ഓടിക്കുന്ന ഇന്ധനം ആവശ്യമില്ലാത്ത വാഹനങ്ങളാണ്."
          },
          {
            "word": "Cycle",
            "wordMal": "സൈക്കിൾ",
            "relationEN": "Both Chavittu Vandi and Cycle are pedal-powered non-motorized vehicles.",
            "relationML": "രണ്ടും മനുഷ്യപ്രയത്നത്താൽ ചവിട്ടി ഓടിക്കുന്ന ഇന്ധനം ആവശ്യമില്ലാത്ത വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "RX 100",
        "civWordMal": "ആർ എക്സ് 100",
        "imposters": [
          {
            "word": "Bullet",
            "wordMal": "ബുള്ളറ്റ്",
            "relationEN": "Both Yamaha RX 100 and Royal Enfield Bullet are iconic retro motorcycles with a cult following.",
            "relationML": "രണ്ടും യുവാക്കൾക്കിടയിൽ വൻ ആരാധകരുള്ള പഴയകാല പ്രശസ്തമായ മോട്ടോർസൈക്കിളുകളാണ്."
          },
          {
            "word": "Bullet",
            "wordMal": "ബുള്ളറ്റ്",
            "relationEN": "Both Yamaha RX 100 and Royal Enfield Bullet are iconic retro motorcycles with a cult following.",
            "relationML": "രണ്ടും യുവാക്കൾക്കിടയിൽ വൻ ആരാധകരുള്ള പഴയകാല പ്രശസ്തമായ മോട്ടോർസൈക്കിളുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Torrus Truck",
        "civWordMal": "ടോറസ്",
        "imposters": [
          {
            "word": "Tipper",
            "wordMal": "ടിപ്പർ",
            "relationEN": "Both Torrus Truck and Tipper are heavy-duty trucks predominantly used in mining and large-scale construction.",
            "relationML": "രണ്ടും ഖനനത്തിനും വലിയ നിർമ്മാണ പ്രവർത്തനങ്ങൾക്കും ഉപയോഗിക്കുന്ന ഭാരമേറിയ ട്രക്കുകളാണ്."
          },
          {
            "word": "Tipper",
            "wordMal": "ടിപ്പർ",
            "relationEN": "Both Torrus Truck and Tipper are heavy-duty trucks predominantly used in mining and large-scale construction.",
            "relationML": "രണ്ടും ഖനനത്തിനും വലിയ നിർമ്മാണ പ്രവർത്തനങ്ങൾക്കും ഉപയോഗിക്കുന്ന ഭാരമേറിയ ട്രക്കുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Fire Engine",
        "civWordMal": "ഫയർ ഫോഴ്സ്",
        "imposters": [
          {
            "word": "Ambulance",
            "wordMal": "ആംബുലൻസ്",
            "relationEN": "Both Fire Engine and Ambulance are specialized emergency response vehicles equipped with sirens.",
            "relationML": "രണ്ടും സൈറൺ ഘടിപ്പിച്ച, അടിയന്തര സാഹചര്യങ്ങളിൽ ഉപയോഗിക്കുന്ന പ്രത്യേക വാഹനങ്ങളാണ്."
          },
          {
            "word": "Ambulance",
            "wordMal": "ആംബുലൻസ്",
            "relationEN": "Both Fire Engine and Ambulance are specialized emergency response vehicles equipped with sirens.",
            "relationML": "രണ്ടും സൈറൺ ഘടിപ്പിച്ച, അടിയന്തര സാഹചര്യങ്ങളിൽ ഉപയോഗിക്കുന്ന പ്രത്യേക വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Water Metro",
        "civWordMal": "വാട്ടർ മെട്രോ",
        "imposters": [
          {
            "word": "Kochi Metro",
            "wordMal": "കൊച്ചി മെട്രോ",
            "relationEN": "Both Water Metro and Kochi Metro are modern, government-operated transit networks revolutionizing travel in Kochi.",
            "relationML": "രണ്ടും കൊച്ചിയിലെ യാത്രാസൗകര്യങ്ങളെ നവീകരിച്ച ആധുനിക സർക്കാർ ഗതാഗത സംവിധാനങ്ങളാണ്."
          },
          {
            "word": "Kochi Metro",
            "wordMal": "കൊച്ചി മെട്രോ",
            "relationEN": "Both Water Metro and Kochi Metro are modern, government-operated transit networks revolutionizing travel in Kochi.",
            "relationML": "രണ്ടും കൊച്ചിയിലെ യാത്രാസൗകര്യങ്ങളെ നവീകരിച്ച ആധുനിക സർക്കാർ ഗതാഗത സംവിധാനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Low Floor Bus",
        "civWordMal": "ലോ ഫ്ലോർ ബസ്",
        "imposters": [
          {
            "word": "Aanavandi",
            "wordMal": "ആനവണ്ടി",
            "relationEN": "Both Low Floor Bus and Aanavandi are prominent public transport buses run by Kerala State Road Transport Corporation.",
            "relationML": "രണ്ടും കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻസ്പോർട്ട് കോർപ്പറേഷൻ നടത്തുന്ന പ്രധാന പൊതുഗതാഗത ബസുകളാണ്."
          },
          {
            "word": "Aanavandi",
            "wordMal": "ആനവണ്ടി",
            "relationEN": "Both Low Floor Bus and Aanavandi are prominent public transport buses run by Kerala State Road Transport Corporation.",
            "relationML": "രണ്ടും കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻസ്പോർട്ട് കോർപ്പറേഷൻ നടത്തുന്ന പ്രധാന പൊതുഗതാഗത ബസുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Tourist Bus",
        "civWordMal": "ടൂറിസ്റ്റ് ബസ്",
        "imposters": [
          {
            "word": "KSRTC",
            "wordMal": "കെഎസ്ആർടിസി",
            "relationEN": "Both Tourist Bus and KSRTC are major heavy passenger vehicles used for long-distance travel in Kerala.",
            "relationML": "രണ്ടും കേരളത്തിൽ ദീർഘദൂര യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന വലിയ യാത്രാവാഹനങ്ങളാണ്."
          },
          {
            "word": "KSRTC",
            "wordMal": "കെഎസ്ആർടിസി",
            "relationEN": "Both Tourist Bus and KSRTC are major heavy passenger vehicles used for long-distance travel in Kerala.",
            "relationML": "രണ്ടും കേരളത്തിൽ ദീർഘദൂര യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന വലിയ യാത്രാവാഹനങ്ങളാണ്."
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
            "word": "Arts Day",
            "wordMal": "ആർട്സ് ഡേ",
            "relationEN": "Both Kalolsavam and Arts Day are vibrant inter-school or intra-school competitions focused on performing arts.",
            "relationML": "രണ്ടും കലാരൂപങ്ങൾക്ക് പ്രാധാന്യം നൽകിക്കൊണ്ട് സ്കൂളുകളിൽ നടക്കുന്ന വലിയ മത്സര വേദികളാണ്."
          },
          {
            "word": "Arts Day",
            "wordMal": "ആർട്സ് ഡേ",
            "relationEN": "Both Kalolsavam and Arts Day are vibrant inter-school or intra-school competitions focused on performing arts.",
            "relationML": "രണ്ടും കലാരൂപങ്ങൾക്ക് പ്രാധാന്യം നൽകിക്കൊണ്ട് സ്കൂളുകളിൽ നടക്കുന്ന വലിയ മത്സര വേദികളാണ്."
          }
        ]
      },
      {
        "civWord": "Arts Day",
        "civWordMal": "ആർട്സ് ഡേ",
        "imposters": [
          {
            "word": "Sports Day",
            "wordMal": "സ്പോർട്സ് ഡേ",
            "relationEN": "Both Arts Day and Sports Day are highly anticipated annual extracurricular festivals in educational institutions.",
            "relationML": "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ വിദ്യാർത്ഥികൾ വളരെ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്ന വാർഷിക ആഘോഷങ്ങളാണ്."
          },
          {
            "word": "Sports Day",
            "wordMal": "സ്പോർട്സ് ഡേ",
            "relationEN": "Both Arts Day and Sports Day are highly anticipated annual extracurricular festivals in educational institutions.",
            "relationML": "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ വിദ്യാർത്ഥികൾ വളരെ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്ന വാർഷിക ആഘോഷങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "College Canteen",
        "civWordMal": "കോളേജ് കാന്റീൻ",
        "imposters": [
          {
            "word": "Hostel Mess",
            "wordMal": "ഹോസ്റ്റൽ മെസ്സ്",
            "relationEN": "Both College Canteen and Hostel Mess are dining facilities catering to students on campus.",
            "relationML": "രണ്ടും ക്യാമ്പസിലെ വിദ്യാർത്ഥികൾക്ക് ഭക്ഷണം നൽകുന്ന പ്രധാന ഇടങ്ങളാണ്."
          },
          {
            "word": "Hostel Mess",
            "wordMal": "ഹോസ്റ്റൽ മെസ്സ്",
            "relationEN": "Both College Canteen and Hostel Mess are dining facilities catering to students on campus.",
            "relationML": "രണ്ടും ക്യാമ്പസിലെ വിദ്യാർത്ഥികൾക്ക് ഭക്ഷണം നൽകുന്ന പ്രധാന ഇടങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "PTA Meeting",
        "civWordMal": "പി ടി എ മീറ്റിംഗ്",
        "imposters": [
          {
            "word": "Open House",
            "wordMal": "ഓപ്പൺ ഹൗസ്",
            "relationEN": "Both PTA Meeting and Open House are organized events where parents and teachers discuss a student's academic progress.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ പഠനകാര്യങ്ങൾ ചർച്ച ചെയ്യാൻ മാതാപിതാക്കളും അധ്യാപകരും ഒത്തുചേരുന്ന വേദികളാണ്."
          },
          {
            "word": "Open House",
            "wordMal": "ഓപ്പൺ ഹൗസ്",
            "relationEN": "Both PTA Meeting and Open House are organized events where parents and teachers discuss a student's academic progress.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ പഠനകാര്യങ്ങൾ ചർച്ച ചെയ്യാൻ മാതാപിതാക്കളും അധ്യാപകരും ഒത്തുചേരുന്ന വേദികളാണ്."
          }
        ]
      },
      {
        "civWord": "Onam Celebration",
        "civWordMal": "ഓണാഘോഷം",
        "imposters": [
          {
            "word": "Christmas Celebration",
            "wordMal": "ക്രിസ്മസ് ആഘോഷം",
            "relationEN": "Both Onam Celebration and Christmas Celebration are major festive events in Kerala marked by feasts and cultural programs.",
            "relationML": "രണ്ടും സദ്യയും കലാപരിപാടികളുമായി കേരളത്തിൽ കൊണ്ടാടുന്ന വലിയ ആഘോഷങ്ങളാണ്."
          },
          {
            "word": "Christmas Celebration",
            "wordMal": "ക്രിസ്മസ് ആഘോഷം",
            "relationEN": "Both Onam Celebration and Christmas Celebration are major festive events in Kerala marked by feasts and cultural programs.",
            "relationML": "രണ്ടും സദ്യയും കലാപരിപാടികളുമായി കേരളത്തിൽ കൊണ്ടാടുന്ന വലിയ ആഘോഷങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Uniform",
        "civWordMal": "യൂണിഫോം",
        "imposters": [
          {
            "word": "ID Card",
            "wordMal": "ഐഡി കാർഡ്",
            "relationEN": "Both Uniform and ID Card are mandatory items for identifying students in an educational institution.",
            "relationML": "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ വിദ്യാർത്ഥികളെ തിരിച്ചറിയാൻ ഉപയോഗിക്കുന്ന നിർബന്ധിത വസ്തുക്കളാണ്."
          },
          {
            "word": "ID Card",
            "wordMal": "ഐഡി കാർഡ്",
            "relationEN": "Both Uniform and ID Card are mandatory items for identifying students in an educational institution.",
            "relationML": "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ വിദ്യാർത്ഥികളെ തിരിച്ചറിയാൻ ഉപയോഗിക്കുന്ന നിർബന്ധിത വസ്തുക്കളാണ്."
          }
        ]
      },
      {
        "civWord": "School Bus",
        "civWordMal": "സ്കൂൾ ബസ്",
        "imposters": [
          {
            "word": "Ambulance",
            "wordMal": "ആംബുലൻസ്",
            "relationEN": "Both School Bus and Ambulance are purpose-built utility vehicles often painted in distinct recognizable colors like yellow or white.",
            "relationML": "രണ്ടും പെട്ടെന്ന് തിരിച്ചറിയാൻ കഴിയുന്ന മഞ്ഞയോ വെള്ളയോ പോലുള്ള പ്രത്യേക നിറങ്ങളിൽ പെയിന്റ് ചെയ്ത വാഹനങ്ങളാണ്."
          },
          {
            "word": "Ambulance",
            "wordMal": "ആംബുലൻസ്",
            "relationEN": "Both School Bus and Ambulance are purpose-built utility vehicles often painted in distinct recognizable colors like yellow or white.",
            "relationML": "രണ്ടും പെട്ടെന്ന് തിരിച്ചറിയാൻ കഴിയുന്ന മഞ്ഞയോ വെള്ളയോ പോലുള്ള പ്രത്യേക നിറങ്ങളിൽ പെയിന്റ് ചെയ്ത വാഹനങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "PT Period",
        "civWordMal": "പി ടി പിരീഡ്",
        "imposters": [
          {
            "word": "Library Period",
            "wordMal": "ലൈബ്രറി പീരീഡ്",
            "relationEN": "Both PT Period and Library Period are eagerly awaited non-academic sessions in a regular school timetable.",
            "relationML": "രണ്ടും സ്കൂൾ സമയപ്പട്ടികയിൽ വിദ്യാർത്ഥികൾ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്ന പാഠ്യേതര പീരിയഡുകളാണ്."
          },
          {
            "word": "Library Period",
            "wordMal": "ലൈബ്രറി പീരീഡ്",
            "relationEN": "Both PT Period and Library Period are eagerly awaited non-academic sessions in a regular school timetable.",
            "relationML": "രണ്ടും സ്കൂൾ സമയപ്പട്ടികയിൽ വിദ്യാർത്ഥികൾ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്ന പാഠ്യേതര പീരിയഡുകളാണ്."
          }
        ]
      },
      {
        "civWord": "Annual Day",
        "civWordMal": "ആനുവൽ ഡേ",
        "imposters": [
          {
            "word": "Sports Day",
            "wordMal": "സ്പോർട്സ് ഡേ",
            "relationEN": "Both Annual Day and Sports Day are major yearly events celebrated in schools and colleges.",
            "relationML": "രണ്ടും സ്കൂളുകളിലും കോളേജുകളിലും വർഷം തോറും നടക്കുന്ന പ്രധാന ആഘോഷങ്ങളാണ്."
          },
          {
            "word": "Sports Day",
            "wordMal": "സ്പോർട്സ് ഡേ",
            "relationEN": "Both Annual Day and Sports Day are major yearly events celebrated in schools and colleges.",
            "relationML": "രണ്ടും സ്കൂളുകളിലും കോളേജുകളിലും വർഷം തോറും നടക്കുന്ന പ്രധാന ആഘോഷങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Exam Hall",
        "civWordMal": "എക്സാം ഹാൾ",
        "imposters": [
          {
            "word": "Classroom",
            "wordMal": "ക്ലാസ്സ് മുറി",
            "relationEN": "Both Exam Hall and Classroom are designated physical spaces in a school where academic activities occur.",
            "relationML": "രണ്ടും സ്കൂളിൽ പഠനപ്രവർത്തനങ്ങൾ നടക്കുന്ന പ്രത്യേക മുറികളാണ്."
          },
          {
            "word": "Classroom",
            "wordMal": "ക്ലാസ്സ് മുറി",
            "relationEN": "Both Exam Hall and Classroom are designated physical spaces in a school where academic activities occur.",
            "relationML": "രണ്ടും സ്കൂളിൽ പഠനപ്രവർത്തനങ്ങൾ നടക്കുന്ന പ്രത്യേക മുറികളാണ്."
          }
        ]
      },
      {
        "civWord": "Rank List",
        "civWordMal": "റാങ്ക് ലിസ്റ്റ്",
        "imposters": [
          {
            "word": "Waiting List",
            "wordMal": "വെയ്റ്റിംഗ് ലിസ്റ്റ്",
            "relationEN": "Both Rank List and Waiting List are official documents displaying candidates' names ordered by merit or priority.",
            "relationML": "രണ്ടും ഉദ്യോഗാർത്ഥികളുടെയോ വിദ്യാർത്ഥികളുടെയോ പേരുകൾ മുൻഗണനാക്രമത്തിൽ പ്രസിദ്ധീകരിക്കുന്ന ഔദ്യോഗിക രേഖകളാണ്."
          },
          {
            "word": "Waiting List",
            "wordMal": "വെയ്റ്റിംഗ് ലിസ്റ്റ്",
            "relationEN": "Both Rank List and Waiting List are official documents displaying candidates' names ordered by merit or priority.",
            "relationML": "രണ്ടും ഉദ്യോഗാർത്ഥികളുടെയോ വിദ്യാർത്ഥികളുടെയോ പേരുകൾ മുൻഗണനാക്രമത്തിൽ പ്രസിദ്ധീകരിക്കുന്ന ഔദ്യോഗിക രേഖകളാണ്."
          }
        ]
      },
      {
        "civWord": "College Union",
        "civWordMal": "കോളേജ് യൂണിയൻ",
        "imposters": [
          {
            "word": "SFI",
            "wordMal": "എസ്എഫ്ഐ",
            "relationEN": "Both College Union and SFI represent student political organizations actively involved in campus politics.",
            "relationML": "രണ്ടും ക്യാമ്പസ് രാഷ്ട്രീയത്തിൽ സജീവമായി ഇടപെടുന്ന വിദ്യാർത്ഥി രാഷ്ട്രീയ സംഘടനകളാണ്."
          },
          {
            "word": "SFI",
            "wordMal": "എസ്എഫ്ഐ",
            "relationEN": "Both College Union and SFI represent student political organizations actively involved in campus politics.",
            "relationML": "രണ്ടും ക്യാമ്പസ് രാഷ്ട്രീയത്തിൽ സജീവമായി ഇടപെടുന്ന വിദ്യാർത്ഥി രാഷ്ട്രീയ സംഘടനകളാണ്."
          }
        ]
      },
      {
        "civWord": "Batch",
        "civWordMal": "ബാച്ച്",
        "imposters": [
          {
            "word": "Class",
            "wordMal": "ക്ലാസ്സ്",
            "relationEN": "Both Batch and Class refer to a specific group of students studying together in the same academic year.",
            "relationML": "രണ്ടും ഒരേ അധ്യയന വർഷത്തിൽ ഒരുമിച്ച് പഠിക്കുന്ന വിദ്യാർത്ഥികളുടെ കൂട്ടത്തെ സൂചിപ്പിക്കുന്നു."
          },
          {
            "word": "Class",
            "wordMal": "ക്ലാസ്സ്",
            "relationEN": "Both Batch and Class refer to a specific group of students studying together in the same academic year.",
            "relationML": "രണ്ടും ഒരേ അധ്യയന വർഷത്തിൽ ഒരുമിച്ച് പഠിക്കുന്ന വിദ്യാർത്ഥികളുടെ കൂട്ടത്തെ സൂചിപ്പിക്കുന്നു."
          }
        ]
      },
      {
        "civWord": "Farewell",
        "civWordMal": "ഫെയർവെൽ",
        "imposters": [
          {
            "word": "Fresher Party",
            "wordMal": "ഫ്രെഷേഴ്സ് പാർട്ടി",
            "relationEN": "Both Farewell and Fresher Party are celebratory college events marking the exit and entry of student batches.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ വരവും പോക്കും ആഘോഷിക്കുന്ന ക്യാമ്പസ് ചടങ്ങുകളാണ്."
          },
          {
            "word": "Fresher Party",
            "wordMal": "ഫ്രെഷേഴ്സ് പാർട്ടി",
            "relationEN": "Both Farewell and Fresher Party are celebratory college events marking the exit and entry of student batches.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ വരവും പോക്കും ആഘോഷിക്കുന്ന ക്യാമ്പസ് ചടങ്ങുകളാണ്."
          }
        ]
      },
      {
        "civWord": "NSS",
        "civWordMal": "എൻ എസ് എസ്",
        "imposters": [
          {
            "word": "NCC",
            "wordMal": "എൻസിസി",
            "relationEN": "Both NSS and NCC are voluntary student organizations in schools and colleges promoting discipline and social service.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളിൽ അച്ചടക്കവും സാമൂഹ്യസേവന താല്പര്യവും വളർത്തുന്ന സംഘടനകളാണ്."
          },
          {
            "word": "NCC",
            "wordMal": "എൻസിസി",
            "relationEN": "Both NSS and NCC are voluntary student organizations in schools and colleges promoting discipline and social service.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളിൽ അച്ചടക്കവും സാമൂഹ്യസേവന താല്പര്യവും വളർത്തുന്ന സംഘടനകളാണ്."
          }
        ]
      },
      {
        "civWord": "NCC",
        "civWordMal": "എൻ സി സി",
        "imposters": [
          {
            "word": "NSS",
            "wordMal": "എൻഎസ്എസ്",
            "relationEN": "Both NCC and NSS are voluntary student organizations focusing on discipline and community service.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളിൽ അച്ചടക്കവും സാമൂഹ്യസേവന താല്പര്യവും വളർത്തുന്ന സംഘടനകളാണ്."
          },
          {
            "word": "NSS",
            "wordMal": "എൻഎസ്എസ്",
            "relationEN": "Both NCC and NSS are voluntary student organizations focusing on discipline and community service.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളിൽ അച്ചടക്കവും സാമൂഹ്യസേവന താല്പര്യവും വളർത്തുന്ന സംഘടനകളാണ്."
          }
        ]
      },
      {
        "civWord": "Laboratory",
        "civWordMal": "ലബോറട്ടറി",
        "imposters": [
          {
            "word": "Library",
            "wordMal": "ലൈബ്രറി",
            "relationEN": "Both Laboratory and Library are specialized rooms in an educational institution dedicated to practical learning and research.",
            "relationML": "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ പഠനത്തിനും ഗവേഷണത്തിനുമായി മാറ്റിവെച്ചിട്ടുള്ള പ്രത്യേക മുറികളാണ്."
          },
          {
            "word": "Library",
            "wordMal": "ലൈബ്രറി",
            "relationEN": "Both Laboratory and Library are specialized rooms in an educational institution dedicated to practical learning and research.",
            "relationML": "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ പഠനത്തിനും ഗവേഷണത്തിനുമായി മാറ്റിവെച്ചിട്ടുള്ള പ്രത്യേക മുറികളാണ്."
          }
        ]
      },
      {
        "civWord": "Library",
        "civWordMal": "ലൈബ്രറി",
        "imposters": [
          {
            "word": "Laboratory",
            "wordMal": "ലബോറട്ടറി",
            "relationEN": "Both Library and Laboratory are institutional facilities providing resources for research and practical application.",
            "relationML": "രണ്ടും ഗവേഷണത്തിനും പ്രായോഗിക പഠനത്തിനുമുള്ള സൗകര്യങ്ങൾ നൽകുന്ന സ്ഥാപന ഇടങ്ങളാണ്."
          },
          {
            "word": "Laboratory",
            "wordMal": "ലബോറട്ടറി",
            "relationEN": "Both Library and Laboratory are institutional facilities providing resources for research and practical application.",
            "relationML": "രണ്ടും ഗവേഷണത്തിനും പ്രായോഗിക പഠനത്തിനുമുള്ള സൗകര്യങ്ങൾ നൽകുന്ന സ്ഥാപന ഇടങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Hostel",
        "civWordMal": "ഹോസ്റ്റൽ",
        "imposters": [
          {
            "word": "Lodge",
            "wordMal": "ലോഡ്ജ്",
            "relationEN": "Both Hostel and Lodge offer temporary accommodation, usually for students or travelers.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾക്കോ യാത്രികർക്കോ അടിസ്ഥാന സൗകര്യങ്ങളോടെ താത്കാലിക താമസം നൽകുന്ന ഇടങ്ങളാണ്."
          },
          {
            "word": "Lodge",
            "wordMal": "ലോഡ്ജ്",
            "relationEN": "Both Hostel and Lodge offer temporary accommodation, usually for students or travelers.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾക്കോ യാത്രികർക്കോ അടിസ്ഥാന സൗകര്യങ്ങളോടെ താത്കാലിക താമസം നൽകുന്ന ഇടങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Class Leader",
        "civWordMal": "ക്ലാസ് ലീഡർ",
        "imposters": [
          {
            "word": "Monitor",
            "wordMal": "മോണിറ്റർ",
            "relationEN": "Both Class Leader and Monitor denote a student appointed to maintain discipline and assist teachers in a classroom.",
            "relationML": "രണ്ടും ക്ലാസ്സിലെ അച്ചടക്കം പാലിക്കാനും അധ്യാപകരെ സഹായിക്കാനും ചുമതലപ്പെടുത്തിയ വിദ്യാർത്ഥിയെ സൂചിപ്പിക്കുന്നു."
          },
          {
            "word": "Monitor",
            "wordMal": "മോണിറ്റർ",
            "relationEN": "Both Class Leader and Monitor denote a student appointed to maintain discipline and assist teachers in a classroom.",
            "relationML": "രണ്ടും ക്ലാസ്സിലെ അച്ചടക്കം പാലിക്കാനും അധ്യാപകരെ സഹായിക്കാനും ചുമതലപ്പെടുത്തിയ വിദ്യാർത്ഥിയെ സൂചിപ്പിക്കുന്നു."
          }
        ]
      },
      {
        "civWord": "Tour Trip",
        "civWordMal": "ഐവി / ടൂർ",
        "imposters": [
          {
            "word": "IV",
            "wordMal": "ഐവി",
            "relationEN": "Both Tour Trip and Industrial Visit (IV) involve traveling away from campus for recreation or learning.",
            "relationML": "രണ്ടും വിനോദത്തിനോ പഠനത്തിനോ വേണ്ടി ക്യാമ്പസിന് പുറത്തേക്ക് പോകുന്ന യാത്രകളാണ്."
          },
          {
            "word": "IV",
            "wordMal": "ഐവി",
            "relationEN": "Both Tour Trip and Industrial Visit (IV) involve traveling away from campus for recreation or learning.",
            "relationML": "രണ്ടും വിനോദത്തിനോ പഠനത്തിനോ വേണ്ടി ക്യാമ്പസിന് പുറത്തേക്ക് പോകുന്ന യാത്രകളാണ്."
          }
        ]
      },
      {
        "civWord": "Bench and Desk",
        "civWordMal": "ബെഞ്ചും ഡെസ്കും",
        "imposters": [
          {
            "word": "Blackboard",
            "wordMal": "ബ്ലാക്ക് ബോർഡ്",
            "relationEN": "Both Bench and Desk, and Blackboard are quintessential pieces of classroom furniture and equipment.",
            "relationML": "രണ്ടും ക്ലാസ്സ്മുറികളിലെ ഒഴിച്ചുകൂടാനാവാത്ത പ്രധാന ഫർണിച്ചറുകളും ഉപകരണങ്ങളുമാണ്."
          },
          {
            "word": "Blackboard",
            "wordMal": "ബ്ലാക്ക് ബോർഡ്",
            "relationEN": "Both Bench and Desk, and Blackboard are quintessential pieces of classroom furniture and equipment.",
            "relationML": "രണ്ടും ക്ലാസ്സ്മുറികളിലെ ഒഴിച്ചുകൂടാനാവാത്ത പ്രധാന ഫർണിച്ചറുകളും ഉപകരണങ്ങളുമാണ്."
          }
        ]
      },
      {
        "civWord": "Bell",
        "civWordMal": "സ്കൂൾ ബെൽ",
        "imposters": [
          {
            "word": "Siren",
            "wordMal": "സൈറൺ",
            "relationEN": "Both Bell and Siren are loud sound-producing devices used for alarms or signals.",
            "relationML": "രണ്ടും അപായസൂചനയോ അറിയിപ്പുകളോ നൽകാൻ വലിയ ശബ്ദം ഉണ്ടാക്കുന്ന ഉപകരണങ്ങളാണ്."
          },
          {
            "word": "Siren",
            "wordMal": "സൈറൺ",
            "relationEN": "Both Bell and Siren are loud sound-producing devices used for alarms or signals.",
            "relationML": "രണ്ടും അപായസൂചനയോ അറിയിപ്പുകളോ നൽകാൻ വലിയ ശബ്ദം ഉണ്ടാക്കുന്ന ഉപകരണങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Principal",
        "civWordMal": "പ്രിൻസിപ്പൽ",
        "imposters": [
          {
            "word": "Headmaster",
            "wordMal": "ഹെഡ്മാസ്റ്റർ",
            "relationEN": "Both Principal and Headmaster hold the highest administrative authority in a school or college.",
            "relationML": "രണ്ടും ഒരു വിദ്യാഭ്യാസ സ്ഥാപനത്തിന്റെ ഏറ്റവും ഉയർന്ന ഭരണച്ചുമതലയുള്ളവരാണ്."
          },
          {
            "word": "Headmaster",
            "wordMal": "ഹെഡ്മാസ്റ്റർ",
            "relationEN": "Both Principal and Headmaster hold the highest administrative authority in a school or college.",
            "relationML": "രണ്ടും ഒരു വിദ്യാഭ്യാസ സ്ഥാപനത്തിന്റെ ഏറ്റവും ഉയർന്ന ഭരണച്ചുമതലയുള്ളവരാണ്."
          }
        ]
      },
      {
        "civWord": "Assignment",
        "civWordMal": "അസൈൻമെന്റ്",
        "imposters": [
          {
            "word": "Record Book",
            "wordMal": "റെക്കോർഡ് ബുക്ക്",
            "relationEN": "Both Assignment and Record Book are standard academic tasks that contribute to a student's internal marks.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ ഇന്റേണൽ മാർക്കിനെ സ്വാധീനിക്കുന്ന പ്രധാന പഠന ചുമതലകളാണ്."
          },
          {
            "word": "Record Book",
            "wordMal": "റെക്കോർഡ് ബുക്ക്",
            "relationEN": "Both Assignment and Record Book are standard academic tasks that contribute to a student's internal marks.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ ഇന്റേണൽ മാർക്കിനെ സ്വാധീനിക്കുന്ന പ്രധാന പഠന ചുമതലകളാണ്."
          }
        ]
      },
      {
        "civWord": "Alumni Meet",
        "civWordMal": "പൂർവ്വവിദ്യാർത്ഥി സംഗമം",
        "imposters": [
          {
            "word": "Farewell",
            "wordMal": "ഫെയർവെൽ",
            "relationEN": "Both Alumni Meet and Farewell are emotional events celebrating the bond between students and their institution.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾക്കും അവരുടെ സ്ഥാപനത്തിനുമിടയിലുള്ള ബന്ധം ആഘോഷിക്കുന്ന വികാരനിർഭരമായ ചടങ്ങുകളാണ്."
          },
          {
            "word": "Farewell",
            "wordMal": "ഫെയർവെൽ",
            "relationEN": "Both Alumni Meet and Farewell are emotional events celebrating the bond between students and their institution.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾക്കും അവരുടെ സ്ഥാപനത്തിനുമിടയിലുള്ള ബന്ധം ആഘോഷിക്കുന്ന വികാരനിർഭരമായ ചടങ്ങുകളാണ്."
          }
        ]
      },
      {
        "civWord": "IV (Industrial Visit)",
        "civWordMal": "ഐവി",
        "imposters": [
          {
            "word": "Tour Trip",
            "wordMal": "ടൂർ ട്രിപ്പ്",
            "relationEN": "Both Industrial Visit (IV) and Tour Trip are organized excursions taken by students with their classmates.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾ സഹപാഠികളോടൊപ്പം നടത്തുന്ന സംഘടിത യാത്രകളാണ്."
          },
          {
            "word": "Tour Trip",
            "wordMal": "ടൂർ ട്രിപ്പ്",
            "relationEN": "Both Industrial Visit (IV) and Tour Trip are organized excursions taken by students with their classmates.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾ സഹപാഠികളോടൊപ്പം നടത്തുന്ന സംഘടിത യാത്രകളാണ്."
          }
        ]
      },
      {
        "civWord": "Tuition Class",
        "civWordMal": "ട്യൂഷൻ ക്ലാസ്",
        "imposters": [
          {
            "word": "School",
            "wordMal": "സ്കൂൾ",
            "relationEN": "Both Tuition Class and School are structured environments where students gather to learn academic subjects.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾ പാഠ്യവിഷയങ്ങൾ പഠിക്കാൻ ഒത്തുചേരുന്ന വിദ്യാഭ്യാസ ഇടങ്ങളാണ്."
          },
          {
            "word": "School",
            "wordMal": "സ്കൂൾ",
            "relationEN": "Both Tuition Class and School are structured environments where students gather to learn academic subjects.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾ പാഠ്യവിഷയങ്ങൾ പഠിക്കാൻ ഒത്തുചേരുന്ന വിദ്യാഭ്യാസ ഇടങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Canara Bank Challan",
        "civWordMal": "ചെല്ലാൻ",
        "imposters": [
          {
            "word": "SBI Passbook",
            "wordMal": "എസ്ബിഐ പാസ്സ്ബുക്ക്",
            "relationEN": "Both Canara Bank Challan and SBI Passbook are crucial physical banking documents used for financial transactions.",
            "relationML": "രണ്ടും സാമ്പത്തിക ഇടപാടുകൾക്ക് ഉപയോഗിക്കുന്ന പ്രധാനപ്പെട്ട ബാങ്കിംഗ് രേഖകളാണ്."
          },
          {
            "word": "SBI Passbook",
            "wordMal": "എസ്ബിഐ പാസ്സ്ബുക്ക്",
            "relationEN": "Both Canara Bank Challan and SBI Passbook are crucial physical banking documents used for financial transactions.",
            "relationML": "രണ്ടും സാമ്പത്തിക ഇടപാടുകൾക്ക് ഉപയോഗിക്കുന്ന പ്രധാനപ്പെട്ട ബാങ്കിംഗ് രേഖകളാണ്."
          }
        ]
      },
      {
        "civWord": "Record Book",
        "civWordMal": "റെക്കോർഡ് ബുക്ക്",
        "imposters": [
          {
            "word": "Assignment",
            "wordMal": "അസൈൻമെന്റ്",
            "relationEN": "Both Record Book and Assignment are mandatory written submissions evaluated by teachers.",
            "relationML": "രണ്ടും അദ്ധ്യാപകർ വിലയിരുത്തുന്നതിനായി വിദ്യാർത്ഥികൾ നിർബന്ധമായും എഴുതി സമർപ്പിക്കേണ്ടവയാണ്."
          },
          {
            "word": "Assignment",
            "wordMal": "അസൈൻമെന്റ്",
            "relationEN": "Both Record Book and Assignment are mandatory written submissions evaluated by teachers.",
            "relationML": "രണ്ടും അദ്ധ്യാപകർ വിലയിരുത്തുന്നതിനായി വിദ്യാർത്ഥികൾ നിർബന്ധമായും എഴുതി സമർപ്പിക്കേണ്ടവയാണ്."
          }
        ]
      },
      {
        "civWord": "Study Leave",
        "civWordMal": "സ്റ്റഡി ലീവ്",
        "imposters": [
          {
            "word": "Onam Vacation",
            "wordMal": "ഓണാവധി",
            "relationEN": "Both Study Leave and Onam Vacation are periods when students get days off from regular classes.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾക്ക് സ്ഥിരം ക്ലാസുകളിൽ നിന്ന് അവധി ലഭിക്കുന്ന ദിവസങ്ങളാണ്."
          },
          {
            "word": "Onam Vacation",
            "wordMal": "ഓണാവധി",
            "relationEN": "Both Study Leave and Onam Vacation are periods when students get days off from regular classes.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾക്ക് സ്ഥിരം ക്ലാസുകളിൽ നിന്ന് അവധി ലഭിക്കുന്ന ദിവസങ്ങളാണ്."
          }
        ]
      },
      {
        "civWord": "Youth Festival",
        "civWordMal": "യുവജനോത്സവം",
        "imposters": [
          {
            "word": "Kalolsavam",
            "wordMal": "കലോത്സവം",
            "relationEN": "Both Youth Festival and Kalolsavam are grand competitive cultural events showcasing students' artistic talents.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ കലാപരമായ കഴിവുകൾ പ്രകടിപ്പിക്കുന്ന വലിയ സാംസ്കാരിക മത്സര വേദികളാണ്."
          },
          {
            "word": "Kalolsavam",
            "wordMal": "കലോത്സവം",
            "relationEN": "Both Youth Festival and Kalolsavam are grand competitive cultural events showcasing students' artistic talents.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികളുടെ കലാപരമായ കഴിവുകൾ പ്രകടിപ്പിക്കുന്ന വലിയ സാംസ്കാരിക മത്സര വേദികളാണ്."
          }
        ]
      },
      {
        "civWord": "Progress Report",
        "civWordMal": "പ്രോഗ്രസ് റിപ്പോർട്ട്",
        "imposters": [
          {
            "word": "Mark List",
            "wordMal": "മാർക്ക് ലിസ്റ്റ്",
            "relationEN": "Both Progress Report and Mark List are official documents detailing a student's academic performance.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥിയുടെ പഠന നിലവാരം വ്യക്തമാക്കുന്ന ഔദ്യോഗിക രേഖകളാണ്."
          },
          {
            "word": "Mark List",
            "wordMal": "മാർക്ക് ലിസ്റ്റ്",
            "relationEN": "Both Progress Report and Mark List are official documents detailing a student's academic performance.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥിയുടെ പഠന നിലവാരം വ്യക്തമാക്കുന്ന ഔദ്യോഗിക രേഖകളാണ്."
          }
        ]
      },
      {
        "civWord": "Geometry Box",
        "civWordMal": "ജോമട്രി ബോക്സ്",
        "imposters": [
          {
            "word": "Pencil Pouch",
            "wordMal": "പെൻസിൽ പൗച്ച്",
            "relationEN": "Both Geometry Box and Pencil Pouch are used by students to carry stationery items like pens and pencils.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾ പേന, പെൻസിൽ തുടങ്ങിയ പഠനോപകരണങ്ങൾ കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്നവയാണ്."
          },
          {
            "word": "Pencil Pouch",
            "wordMal": "പെൻസിൽ പൗച്ച്",
            "relationEN": "Both Geometry Box and Pencil Pouch are used by students to carry stationery items like pens and pencils.",
            "relationML": "രണ്ടും വിദ്യാർത്ഥികൾ പേന, പെൻസിൽ തുടങ്ങിയ പഠനോപകരണങ്ങൾ കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്നവയാണ്."
          }
        ]
      },
      {
        "civWord": "Slate and Pencil",
        "civWordMal": "സ്ലേറ്റും പെൻസിലും",
        "imposters": [
          {
            "word": "Chalk",
            "wordMal": "ചോക്ക്",
            "relationEN": "Both Slate and Pencil, and Chalk are traditional, erasable writing instruments used by young learners in the past.",
            "relationML": "രണ്ടും പണ്ടുകാലത്ത് ചെറിയ കുട്ടികൾ എഴുതിപ്പഠിക്കാൻ ഉപയോഗിച്ചിരുന്ന മായ്ക്കാൻ കഴിയുന്ന വസ്തുക്കളാണ്."
          },
          {
            "word": "Chalk",
            "wordMal": "ചോക്ക്",
            "relationEN": "Both Slate and Pencil, and Chalk are traditional, erasable writing instruments used by young learners in the past.",
            "relationML": "രണ്ടും പണ്ടുകാലത്ത് ചെറിയ കുട്ടികൾ എഴുതിപ്പഠിക്കാൻ ഉപയോഗിച്ചിരുന്ന മായ്ക്കാൻ കഴിയുന്ന വസ്തുക്കളാണ്."
          }
        ]
      },
      {
        "civWord": "School Bag",
        "civWordMal": "സ്കൂൾ ബാഗ്",
        "imposters": [
          {
            "word": "Lunch Box",
            "wordMal": "ലഞ്ച് ബോക്സ്",
            "relationEN": "Both School Bag and Lunch Box are essential items carried by school children every day.",
            "relationML": "രണ്ടും സ്കൂൾ കുട്ടികൾ ദിവസവും കൊണ്ടുപോകുന്ന അത്യാവശ്യ സാധനങ്ങളാണ്."
          },
          {
            "word": "Lunch Box",
            "wordMal": "ലഞ്ച് ബോക്സ്",
            "relationEN": "Both School Bag and Lunch Box are essential items carried by school children every day.",
            "relationML": "രണ്ടും സ്കൂൾ കുട്ടികൾ ദിവസവും കൊണ്ടുപോകുന്ന അത്യാവശ്യ സാധനങ്ങളാണ്."
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
            "relationEN": "Both Football and Rugby belong to the same domain, but Football specifically focuses on its own mechanics whereas Rugby operates differently.",
            "relationML": "ഫുട്ബോൾ ഉം റഗ്ബി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Futsal",
            "wordMal": "ഫുട്സാൽ",
            "relationEN": "Both Football and Futsal belong to the same domain, but Football specifically focuses on its own mechanics whereas Futsal operates differently.",
            "relationML": "ഫുട്ബോൾ ഉം ഫുട്സാൽ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Cricket and Baseball belong to the same domain, but Cricket specifically focuses on its own mechanics whereas Baseball operates differently.",
            "relationML": "ക്രിക്കറ്റ് ഉം ബേസ്ബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Tennis",
            "wordMal": "ടെന്നീസ്",
            "relationEN": "Both Cricket and Tennis belong to the same domain, but Cricket specifically focuses on its own mechanics whereas Tennis operates differently.",
            "relationML": "ക്രിക്കറ്റ് ഉം ടെന്നീസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kabaddi and Wrestling belong to the same domain, but Kabaddi specifically focuses on its own mechanics whereas Wrestling operates differently.",
            "relationML": "കബഡി ഉം ഗുസ്തി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Kho Kho",
            "wordMal": "ഖോ ഖോ",
            "relationEN": "Both Kabaddi and Kho Kho belong to the same domain, but Kabaddi specifically focuses on its own mechanics whereas Kho Kho operates differently.",
            "relationML": "കബഡി ഉം ഖോ ഖോ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Volleyball and Basketball belong to the same domain, but Volleyball specifically focuses on its own mechanics whereas Basketball operates differently.",
            "relationML": "വോളിബോൾ ഉം ബാസ്കറ്റ്ബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Throwball",
            "wordMal": "ത്രോബോൾ",
            "relationEN": "Both Volleyball and Throwball belong to the same domain, but Volleyball specifically focuses on its own mechanics whereas Throwball operates differently.",
            "relationML": "വോളിബോൾ ഉം ത്രോബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Vallamkali and Rowing belong to the same domain, but Vallamkali specifically focuses on its own mechanics whereas Rowing operates differently.",
            "relationML": "വള്ളംകളി ഉം റോവിങ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Dragon Boat",
            "wordMal": "ഡ്രാഗൺ ബോട്ട്",
            "relationEN": "Both Vallamkali and Dragon Boat belong to the same domain, but Vallamkali specifically focuses on its own mechanics whereas Dragon Boat operates differently.",
            "relationML": "വള്ളംകളി ഉം ഡ്രാഗൺ ബോട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Tug of War and Arm Wrestling belong to the same domain, but Tug of War specifically focuses on its own mechanics whereas Arm Wrestling operates differently.",
            "relationML": "വടംവലി ഉം പഞ്ചഗുസ്തി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Weightlifting",
            "wordMal": "ഭാരോദ്വഹനം",
            "relationEN": "Both Tug of War and Weightlifting belong to the same domain, but Tug of War specifically focuses on its own mechanics whereas Weightlifting operates differently.",
            "relationML": "വടംവലി ഉം ഭാരോദ്വഹനം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Sevens Football and Futsal belong to the same domain, but Sevens Football specifically focuses on its own mechanics whereas Futsal operates differently.",
            "relationML": "സെവൻസ് ഫുട്ബോൾ ഉം ഫുട്സാൽ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Beach Soccer",
            "wordMal": "ബീച്ച് സോക്കർ",
            "relationEN": "Both Sevens Football and Beach Soccer belong to the same domain, but Sevens Football specifically focuses on its own mechanics whereas Beach Soccer operates differently.",
            "relationML": "സെവൻസ് ഫുട്ബോൾ ഉം ബീച്ച് സോക്കർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kho Kho and Kabaddi belong to the same domain, but Kho Kho specifically focuses on its own mechanics whereas Kabaddi operates differently.",
            "relationML": "ഖോ ഖോ ഉം കബഡി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Hide and Seek",
            "wordMal": "ഒളിച്ചുകളി",
            "relationEN": "Both Kho Kho and Hide and Seek belong to the same domain, but Kho Kho specifically focuses on its own mechanics whereas Hide and Seek operates differently.",
            "relationML": "ഖോ ഖോ ഉം ഒളിച്ചുകളി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Badminton and Tennis belong to the same domain, but Badminton specifically focuses on its own mechanics whereas Tennis operates differently.",
            "relationML": "ബാഡ്മിന്റൺ ഉം ടെന്നീസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Squash",
            "wordMal": "സ്ക്വാഷ്",
            "relationEN": "Both Badminton and Squash belong to the same domain, but Badminton specifically focuses on its own mechanics whereas Squash operates differently.",
            "relationML": "ബാഡ്മിന്റൺ ഉം സ്ക്വാഷ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Swimming and Water Polo belong to the same domain, but Swimming specifically focuses on its own mechanics whereas Water Polo operates differently.",
            "relationML": "നീന്തൽ ഉം വാട്ടർ പോളോ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Diving",
            "wordMal": "ഡൈവിങ്",
            "relationEN": "Both Swimming and Diving belong to the same domain, but Swimming specifically focuses on its own mechanics whereas Diving operates differently.",
            "relationML": "നീന്തൽ ഉം ഡൈവിങ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Athletics and Gymnastics belong to the same domain, but Athletics specifically focuses on its own mechanics whereas Gymnastics operates differently.",
            "relationML": "അത്‌ലറ്റിക്സ് ഉം ജിംനാസ്റ്റിക്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Triathlon",
            "wordMal": "ട്രയാത്ത്ലൺ",
            "relationEN": "Both Athletics and Triathlon belong to the same domain, but Athletics specifically focuses on its own mechanics whereas Triathlon operates differently.",
            "relationML": "അത്‌ലറ്റിക്സ് ഉം ട്രയാത്ത്ലൺ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Javelin and Shot Put belong to the same domain, but Javelin specifically focuses on its own mechanics whereas Shot Put operates differently.",
            "relationML": "ജാവലിൻ ഉം ഷോട്ട് പുട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Discus Throw",
            "wordMal": "ഡിസ്കസ് ത്രോ",
            "relationEN": "Both Javelin and Discus Throw belong to the same domain, but Javelin specifically focuses on its own mechanics whereas Discus Throw operates differently.",
            "relationML": "ജാവലിൻ ഉം ഡിസ്കസ് ത്രോ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Relay and Sprint belong to the same domain, but Relay specifically focuses on its own mechanics whereas Sprint operates differently.",
            "relationML": "റിലേ ഉം സ്പ്രിന്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Marathon",
            "wordMal": "മാരത്തൺ",
            "relationEN": "Both Relay and Marathon belong to the same domain, but Relay specifically focuses on its own mechanics whereas Marathon operates differently.",
            "relationML": "റിലേ ഉം മാരത്തൺ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Boat Race and Sailing belong to the same domain, but Boat Race specifically focuses on its own mechanics whereas Sailing operates differently.",
            "relationML": "വള്ളംകളി ഉം സെയിലിംഗ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Canoeing",
            "wordMal": "കനോയിങ്",
            "relationEN": "Both Boat Race and Canoeing belong to the same domain, but Boat Race specifically focuses on its own mechanics whereas Canoeing operates differently.",
            "relationML": "വള്ളംകളി ഉം കനോയിങ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Carrom and Billiards belong to the same domain, but Carrom specifically focuses on its own mechanics whereas Billiards operates differently.",
            "relationML": "കാരംസ് ഉം ബില്യാർഡ്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Chess",
            "wordMal": "ചെസ്സ്",
            "relationEN": "Both Carrom and Chess belong to the same domain, but Carrom specifically focuses on its own mechanics whereas Chess operates differently.",
            "relationML": "കാരംസ് ഉം ചെസ്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Chess and Checkers belong to the same domain, but Chess specifically focuses on its own mechanics whereas Checkers operates differently.",
            "relationML": "ചെസ്സ് ഉം ചെക്കേഴ്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Ludo",
            "wordMal": "ലൂഡോ",
            "relationEN": "Both Chess and Ludo belong to the same domain, but Chess specifically focuses on its own mechanics whereas Ludo operates differently.",
            "relationML": "ചെസ്സ് ഉം ലൂഡോ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kalari and Karate belong to the same domain, but Kalari specifically focuses on its own mechanics whereas Karate operates differently.",
            "relationML": "കളരി ഉം കരാട്ടെ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Kung Fu",
            "wordMal": "കുങ് ഫു",
            "relationEN": "Both Kalari and Kung Fu belong to the same domain, but Kalari specifically focuses on its own mechanics whereas Kung Fu operates differently.",
            "relationML": "കളരി ഉം കുങ് ഫു ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Long Jump and Triple Jump belong to the same domain, but Long Jump specifically focuses on its own mechanics whereas Triple Jump operates differently.",
            "relationML": "ലോംഗ് ജമ്പ് ഉം ട്രിപ്പിൾ ജമ്പ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "High Jump",
            "wordMal": "ഹൈ ജമ്പ്",
            "relationEN": "Both Long Jump and High Jump belong to the same domain, but Long Jump specifically focuses on its own mechanics whereas High Jump operates differently.",
            "relationML": "ലോംഗ് ജമ്പ് ഉം ഹൈ ജമ്പ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both High Jump and Pole Vault belong to the same domain, but High Jump specifically focuses on its own mechanics whereas Pole Vault operates differently.",
            "relationML": "ഹൈ ജമ്പ് ഉം പോൾ വാൾട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Hurdles",
            "wordMal": "ഹർഡിൽസ്",
            "relationEN": "Both High Jump and Hurdles belong to the same domain, but High Jump specifically focuses on its own mechanics whereas Hurdles operates differently.",
            "relationML": "ഹൈ ജമ്പ് ഉം ഹർഡിൽസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Throwball and Volleyball belong to the same domain, but Throwball specifically focuses on its own mechanics whereas Volleyball operates differently.",
            "relationML": "ത്രോബോൾ ഉം വോളിബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Dodgeball",
            "wordMal": "ഡോഡ്ജ്ബോൾ",
            "relationEN": "Both Throwball and Dodgeball belong to the same domain, but Throwball specifically focuses on its own mechanics whereas Dodgeball operates differently.",
            "relationML": "ത്രോബോൾ ഉം ഡോഡ്ജ്ബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Table Tennis and Tennis belong to the same domain, but Table Tennis specifically focuses on its own mechanics whereas Tennis operates differently.",
            "relationML": "ടേബിൾ ടെന്നീസ് ഉം ടെന്നീസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Badminton",
            "wordMal": "ബാഡ്മിന്റൺ",
            "relationEN": "Both Table Tennis and Badminton belong to the same domain, but Table Tennis specifically focuses on its own mechanics whereas Badminton operates differently.",
            "relationML": "ടേബിൾ ടെന്നീസ് ഉം ബാഡ്മിന്റൺ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Marathon and Sprint belong to the same domain, but Marathon specifically focuses on its own mechanics whereas Sprint operates differently.",
            "relationML": "മാരത്തൺ ഉം സ്പ്രിന്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Cycling",
            "wordMal": "സൈക്ലിങ്",
            "relationEN": "Both Marathon and Cycling belong to the same domain, but Marathon specifically focuses on its own mechanics whereas Cycling operates differently.",
            "relationML": "മാരത്തൺ ഉം സൈക്ലിങ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Penalty Shootout and Free Kick belong to the same domain, but Penalty Shootout specifically focuses on its own mechanics whereas Free Kick operates differently.",
            "relationML": "പെനാൽറ്റി ഷൂട്ടൗട്ട് ഉം ഫ്രീ കിക്ക് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Corner Kick",
            "wordMal": "കോർണർ കിക്ക്",
            "relationEN": "Both Penalty Shootout and Corner Kick belong to the same domain, but Penalty Shootout specifically focuses on its own mechanics whereas Corner Kick operates differently.",
            "relationML": "പെനാൽറ്റി ഷൂട്ടൗട്ട് ഉം കോർണർ കിക്ക് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Trophy and Medal belong to the same domain, but Trophy specifically focuses on its own mechanics whereas Medal operates differently.",
            "relationML": "ട്രോഫി ഉം മെഡൽ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Shield",
            "wordMal": "ഷീൽഡ്",
            "relationEN": "Both Trophy and Shield belong to the same domain, but Trophy specifically focuses on its own mechanics whereas Shield operates differently.",
            "relationML": "ട്രോഫി ഉം ഷീൽഡ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Umpire and Referee belong to the same domain, but Umpire specifically focuses on its own mechanics whereas Referee operates differently.",
            "relationML": "അമ്പയർ ഉം റഫറി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Coach",
            "wordMal": "കോച്ച്",
            "relationEN": "Both Umpire and Coach belong to the same domain, but Umpire specifically focuses on its own mechanics whereas Coach operates differently.",
            "relationML": "അമ്പയർ ഉം കോച്ച് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Gallery and Stadium belong to the same domain, but Gallery specifically focuses on its own mechanics whereas Stadium operates differently.",
            "relationML": "ഗാലറി ഉം സ്റ്റേഡിയം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Dugout",
            "wordMal": "ഡഗ്ഔട്ട്",
            "relationEN": "Both Gallery and Dugout belong to the same domain, but Gallery specifically focuses on its own mechanics whereas Dugout operates differently.",
            "relationML": "ഗാലറി ഉം ഡഗ്ഔട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kuttiyum Kolum and Cricket belong to the same domain, but Kuttiyum Kolum specifically focuses on its own mechanics whereas Cricket operates differently.",
            "relationML": "കുട്ടിയും കോലും ഉം ക്രിക്കറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Goli",
            "wordMal": "ഗോലി",
            "relationEN": "Both Kuttiyum Kolum and Goli belong to the same domain, but Kuttiyum Kolum specifically focuses on its own mechanics whereas Goli operates differently.",
            "relationML": "കുട്ടിയും കോലും ഉം ഗോലി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kilithattu and Kabaddi belong to the same domain, but Kilithattu specifically focuses on its own mechanics whereas Kabaddi operates differently.",
            "relationML": "കിളിത്തട്ട് ഉം കബഡി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Kho Kho",
            "wordMal": "ഖോ ഖോ",
            "relationEN": "Both Kilithattu and Kho Kho belong to the same domain, but Kilithattu specifically focuses on its own mechanics whereas Kho Kho operates differently.",
            "relationML": "കിളിത്തട്ട് ഉം ഖോ ഖോ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Talappanthukali and Volleyball belong to the same domain, but Talappanthukali specifically focuses on its own mechanics whereas Volleyball operates differently.",
            "relationML": "തലപ്പന്തുകളി ഉം വോളിബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Football",
            "wordMal": "ഫുട്ബോൾ",
            "relationEN": "Both Talappanthukali and Football belong to the same domain, but Talappanthukali specifically focuses on its own mechanics whereas Football operates differently.",
            "relationML": "തലപ്പന്തുകളി ഉം ഫുട്ബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Nadan Panthu and Cricket Ball belong to the same domain, but Nadan Panthu specifically focuses on its own mechanics whereas Cricket Ball operates differently.",
            "relationML": "നാടൻ പന്ത് ഉം ക്രിക്കറ്റ് ബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Football",
            "wordMal": "ഫുട്ബോൾ",
            "relationEN": "Both Nadan Panthu and Football belong to the same domain, but Nadan Panthu specifically focuses on its own mechanics whereas Football operates differently.",
            "relationML": "നാടൻ പന്ത് ഉം ഫുട്ബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Goli and Billiards belong to the same domain, but Goli specifically focuses on its own mechanics whereas Billiards operates differently.",
            "relationML": "ഗോലി ഉം ബില്യാർഡ്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Spinning Top",
            "wordMal": "പമ്പരം",
            "relationEN": "Both Goli and Spinning Top belong to the same domain, but Goli specifically focuses on its own mechanics whereas Spinning Top operates differently.",
            "relationML": "ഗോലി ഉം പമ്പരം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Lagori and Bowling belong to the same domain, but Lagori specifically focuses on its own mechanics whereas Bowling operates differently.",
            "relationML": "ലഗോറി ഉം ബൗളിംഗ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Darts",
            "wordMal": "ഡാർട്ട്സ്",
            "relationEN": "Both Lagori and Darts belong to the same domain, but Lagori specifically focuses on its own mechanics whereas Darts operates differently.",
            "relationML": "ലഗോറി ഉം ഡാർട്ട്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Arm Wrestling and Wrestling belong to the same domain, but Arm Wrestling specifically focuses on its own mechanics whereas Wrestling operates differently.",
            "relationML": "പഞ്ചഗുസ്തി ഉം ഗുസ്തി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Weightlifting",
            "wordMal": "ഭാരോദ്വഹനം",
            "relationEN": "Both Arm Wrestling and Weightlifting belong to the same domain, but Arm Wrestling specifically focuses on its own mechanics whereas Weightlifting operates differently.",
            "relationML": "പഞ്ചഗുസ്തി ഉം ഭാരോദ്വഹനം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kabaddi Court and Wrestling Ring belong to the same domain, but Kabaddi Court specifically focuses on its own mechanics whereas Wrestling Ring operates differently.",
            "relationML": "കബഡി കോർട്ട് ഉം ഗുസ്തി റിംഗ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Tennis Court",
            "wordMal": "ടെന്നീസ് കോർട്ട്",
            "relationEN": "Both Kabaddi Court and Tennis Court belong to the same domain, but Kabaddi Court specifically focuses on its own mechanics whereas Tennis Court operates differently.",
            "relationML": "കബഡി കോർട്ട് ഉം ടെന്നീസ് കോർട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Shuttle Racket and Tennis Racket belong to the same domain, but Shuttle Racket specifically focuses on its own mechanics whereas Tennis Racket operates differently.",
            "relationML": "ഷട്ടിൽ റാക്കറ്റ് ഉം ടെന്നീസ് റാക്കറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Cricket Bat",
            "wordMal": "ക്രിക്കറ്റ് ബാറ്റ്",
            "relationEN": "Both Shuttle Racket and Cricket Bat belong to the same domain, but Shuttle Racket specifically focuses on its own mechanics whereas Cricket Bat operates differently.",
            "relationML": "ഷട്ടിൽ റാക്കറ്റ് ഉം ക്രിക്കറ്റ് ബാറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Foot Volley and Volleyball belong to the same domain, but Foot Volley specifically focuses on its own mechanics whereas Volleyball operates differently.",
            "relationML": "ഫൂട്ട് വോളി ഉം വോളിബോൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Sepak Takraw",
            "wordMal": "സെപാക് തക്രോ",
            "relationEN": "Both Foot Volley and Sepak Takraw belong to the same domain, but Foot Volley specifically focuses on its own mechanics whereas Sepak Takraw operates differently.",
            "relationML": "ഫൂട്ട് വോളി ഉം സെപാക് തക്രോ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Pravasi and Tourist belong to the same domain, but Pravasi specifically focuses on its own mechanics whereas Tourist operates differently.",
            "relationML": "പ്രവാസി ഉം വിനോദസഞ്ചാരി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Refugee",
            "wordMal": "അഭയാർത്ഥി",
            "relationEN": "Both Pravasi and Refugee belong to the same domain, but Pravasi specifically focuses on its own mechanics whereas Refugee operates differently.",
            "relationML": "പ്രവാസി ഉം അഭയാർത്ഥി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Dubai and Abu Dhabi belong to the same domain, but Dubai specifically focuses on its own mechanics whereas Abu Dhabi operates differently.",
            "relationML": "ദുബായ് ഉം അബുദാബി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Doha",
            "wordMal": "ദോഹ",
            "relationEN": "Both Dubai and Doha belong to the same domain, but Dubai specifically focuses on its own mechanics whereas Doha operates differently.",
            "relationML": "ദുബായ് ഉം ദോഹ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Gulf Money and Hawala belong to the same domain, but Gulf Money specifically focuses on its own mechanics whereas Hawala operates differently.",
            "relationML": "ഗൾഫ് മണി ഉം ഹവാല ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Salary",
            "wordMal": "ശമ്പളം",
            "relationEN": "Both Gulf Money and Salary belong to the same domain, but Gulf Money specifically focuses on its own mechanics whereas Salary operates differently.",
            "relationML": "ഗൾഫ് മണി ഉം ശമ്പളം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Chakka and Manga belong to the same domain, but Chakka specifically focuses on its own mechanics whereas Manga operates differently.",
            "relationML": "ചക്ക ഉം മാങ്ങ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Pazham",
            "wordMal": "പഴം",
            "relationEN": "Both Chakka and Pazham belong to the same domain, but Chakka specifically focuses on its own mechanics whereas Pazham operates differently.",
            "relationML": "ചക്ക ഉം പഴം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Naatilekku and Leave belong to the same domain, but Naatilekku specifically focuses on its own mechanics whereas Leave operates differently.",
            "relationML": "നാട്ടിലേക്ക് ഉം ലീവ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Flight",
            "wordMal": "വിമാനം",
            "relationEN": "Both Naatilekku and Flight belong to the same domain, but Naatilekku specifically focuses on its own mechanics whereas Flight operates differently.",
            "relationML": "നാട്ടിലേക്ക് ഉം വിമാനം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Abu Dhabi and Dubai belong to the same domain, but Abu Dhabi specifically focuses on its own mechanics whereas Dubai operates differently.",
            "relationML": "അബുദാബി ഉം ദുബായ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Riyadh",
            "wordMal": "റിയാദ്",
            "relationEN": "Both Abu Dhabi and Riyadh belong to the same domain, but Abu Dhabi specifically focuses on its own mechanics whereas Riyadh operates differently.",
            "relationML": "അബുദാബി ഉം റിയാദ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Qatar and Oman belong to the same domain, but Qatar specifically focuses on its own mechanics whereas Oman operates differently.",
            "relationML": "ഖത്തർ ഉം ഒമാൻ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Bahrain",
            "wordMal": "ബഹ്റൈൻ",
            "relationEN": "Both Qatar and Bahrain belong to the same domain, but Qatar specifically focuses on its own mechanics whereas Bahrain operates differently.",
            "relationML": "ഖത്തർ ഉം ബഹ്റൈൻ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Saudi and Yemen belong to the same domain, but Saudi specifically focuses on its own mechanics whereas Yemen operates differently.",
            "relationML": "സൗദി ഉം യെമൻ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Kuwait",
            "wordMal": "കുവൈറ്റ്",
            "relationEN": "Both Saudi and Kuwait belong to the same domain, but Saudi specifically focuses on its own mechanics whereas Kuwait operates differently.",
            "relationML": "സൗദി ഉം കുവൈറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Oman and Muscat belong to the same domain, but Oman specifically focuses on its own mechanics whereas Muscat operates differently.",
            "relationML": "ഒമാൻ ഉം മസ്കറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "UAE",
            "wordMal": "യുഎഇ",
            "relationEN": "Both Oman and UAE belong to the same domain, but Oman specifically focuses on its own mechanics whereas UAE operates differently.",
            "relationML": "ഒമാൻ ഉം യുഎഇ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Bahrain and Qatar belong to the same domain, but Bahrain specifically focuses on its own mechanics whereas Qatar operates differently.",
            "relationML": "ബഹ്റൈൻ ഉം ഖത്തർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Kuwait",
            "wordMal": "കുവൈറ്റ്",
            "relationEN": "Both Bahrain and Kuwait belong to the same domain, but Bahrain specifically focuses on its own mechanics whereas Kuwait operates differently.",
            "relationML": "ബഹ്റൈൻ ഉം കുവൈറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kuwait and Dinar belong to the same domain, but Kuwait specifically focuses on its own mechanics whereas Dinar operates differently.",
            "relationML": "കുവൈറ്റ് ഉം ദിനാർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Saudi Arabia",
            "wordMal": "സൗദി അറേബ്യ",
            "relationEN": "Both Kuwait and Saudi Arabia belong to the same domain, but Kuwait specifically focuses on its own mechanics whereas Saudi Arabia operates differently.",
            "relationML": "കുവൈറ്റ് ഉം സൗദി അറേബ്യ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Visa and Passport belong to the same domain, but Visa specifically focuses on its own mechanics whereas Passport operates differently.",
            "relationML": "വിസ ഉം പാസ്പോർട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Ticket",
            "wordMal": "ടിക്കറ്റ്",
            "relationEN": "Both Visa and Ticket belong to the same domain, but Visa specifically focuses on its own mechanics whereas Ticket operates differently.",
            "relationML": "വിസ ഉം ടിക്കറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Passport and Emirates ID belong to the same domain, but Passport specifically focuses on its own mechanics whereas Emirates ID operates differently.",
            "relationML": "പാസ്പോർട്ട് ഉം എമിറേറ്റ്സ് ഐഡി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Boarding Pass",
            "wordMal": "ബോർഡിംഗ് പാസ്",
            "relationEN": "Both Passport and Boarding Pass belong to the same domain, but Passport specifically focuses on its own mechanics whereas Boarding Pass operates differently.",
            "relationML": "പാസ്പോർട്ട് ഉം ബോർഡിംഗ് പാസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Airport and Railway Station belong to the same domain, but Airport specifically focuses on its own mechanics whereas Railway Station operates differently.",
            "relationML": "എയർപോർട്ട് ഉം റെയിൽവേ സ്റ്റേഷൻ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Runway",
            "wordMal": "റൺവേ",
            "relationEN": "Both Airport and Runway belong to the same domain, but Airport specifically focuses on its own mechanics whereas Runway operates differently.",
            "relationML": "എയർപോർട്ട് ഉം റൺവേ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Remittance and Exchange belong to the same domain, but Remittance specifically focuses on its own mechanics whereas Exchange operates differently.",
            "relationML": "റെമിറ്റൻസ് ഉം എക്സ്ചേഞ്ച് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Bank Transfer",
            "wordMal": "ബാങ്ക് ട്രാൻസ്ഫർ",
            "relationEN": "Both Remittance and Bank Transfer belong to the same domain, but Remittance specifically focuses on its own mechanics whereas Bank Transfer operates differently.",
            "relationML": "റെമിറ്റൻസ് ഉം ബാങ്ക് ട്രാൻസ്ഫർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Duty Free and Shopping Mall belong to the same domain, but Duty Free specifically focuses on its own mechanics whereas Shopping Mall operates differently.",
            "relationML": "ഡ്യൂട്ടി ഫ്രീ ഉം ഷോപ്പിംഗ് മാൾ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Customs",
            "wordMal": "കസ്റ്റംസ്",
            "relationEN": "Both Duty Free and Customs belong to the same domain, but Duty Free specifically focuses on its own mechanics whereas Customs operates differently.",
            "relationML": "ഡ്യൂട്ടി ഫ്രീ ഉം കസ്റ്റംസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Perfume and Attar belong to the same domain, but Perfume specifically focuses on its own mechanics whereas Attar operates differently.",
            "relationML": "പെർഫ്യൂം ഉം അത്തർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Deodorant",
            "wordMal": "ഡിയോഡറന്റ്",
            "relationEN": "Both Perfume and Deodorant belong to the same domain, but Perfume specifically focuses on its own mechanics whereas Deodorant operates differently.",
            "relationML": "പെർഫ്യൂം ഉം ഡിയോഡറന്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Dates and Figs belong to the same domain, but Dates specifically focuses on its own mechanics whereas Figs operates differently.",
            "relationML": "ഈത്തപ്പഴം ഉം അത്തിപ്പഴം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Almonds",
            "wordMal": "ബദാം",
            "relationEN": "Both Dates and Almonds belong to the same domain, but Dates specifically focuses on its own mechanics whereas Almonds operates differently.",
            "relationML": "ഈത്തപ്പഴം ഉം ബദാം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Gold and Diamond belong to the same domain, but Gold specifically focuses on its own mechanics whereas Diamond operates differently.",
            "relationML": "സ്വർണം ഉം ഡയമണ്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Silver",
            "wordMal": "വെള്ളി",
            "relationEN": "Both Gold and Silver belong to the same domain, but Gold specifically focuses on its own mechanics whereas Silver operates differently.",
            "relationML": "സ്വർണം ഉം വെള്ളി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Return Ticket and One-way Ticket belong to the same domain, but Return Ticket specifically focuses on its own mechanics whereas One-way Ticket operates differently.",
            "relationML": "റിട്ടേൺ ടിക്കറ്റ് ഉം വൺ-വേ ടിക്കറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Boarding Pass",
            "wordMal": "ബോർഡിംഗ് പാസ്",
            "relationEN": "Both Return Ticket and Boarding Pass belong to the same domain, but Return Ticket specifically focuses on its own mechanics whereas Boarding Pass operates differently.",
            "relationML": "റിട്ടേൺ ടിക്കറ്റ് ഉം ബോർഡിംഗ് പാസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Norka and Embassy belong to the same domain, but Norka specifically focuses on its own mechanics whereas Embassy operates differently.",
            "relationML": "നോർക്ക ഉം എംബസി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Consulate",
            "wordMal": "കോൺസുലേറ്റ്",
            "relationEN": "Both Norka and Consulate belong to the same domain, but Norka specifically focuses on its own mechanics whereas Consulate operates differently.",
            "relationML": "നോർക്ക ഉം കോൺസുലേറ്റ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Sharjah and Ajman belong to the same domain, but Sharjah specifically focuses on its own mechanics whereas Ajman operates differently.",
            "relationML": "ഷാർജ ഉം അജ്മാൻ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Dubai",
            "wordMal": "ദുബായ്",
            "relationEN": "Both Sharjah and Dubai belong to the same domain, but Sharjah specifically focuses on its own mechanics whereas Dubai operates differently.",
            "relationML": "ഷാർജ ഉം ദുബായ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Baklava and Kunafa belong to the same domain, but Baklava specifically focuses on its own mechanics whereas Kunafa operates differently.",
            "relationML": "ബക്ലാവ ഉം കുനാഫ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Halwa",
            "wordMal": "ഹൽവ",
            "relationEN": "Both Baklava and Halwa belong to the same domain, but Baklava specifically focuses on its own mechanics whereas Halwa operates differently.",
            "relationML": "ബക്ലാവ ഉം ഹൽവ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Desert Safari and Camel Ride belong to the same domain, but Desert Safari specifically focuses on its own mechanics whereas Camel Ride operates differently.",
            "relationML": "മരുഭൂമി സഫാരി ഉം ഒട്ടക സവാരി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Dune Bashing",
            "wordMal": "ഡ്യൂൺ ബാഷിംഗ്",
            "relationEN": "Both Desert Safari and Dune Bashing belong to the same domain, but Desert Safari specifically focuses on its own mechanics whereas Dune Bashing operates differently.",
            "relationML": "മരുഭൂമി സഫാരി ഉം ഡ്യൂൺ ബാഷിംഗ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Burj Khalifa and Burj Al Arab belong to the same domain, but Burj Khalifa specifically focuses on its own mechanics whereas Burj Al Arab operates differently.",
            "relationML": "ബുർജ് ഖലീഫ ഉം ബുർജ് അൽ അറബ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Eiffel Tower",
            "wordMal": "ഈഫൽ ടവർ",
            "relationEN": "Both Burj Khalifa and Eiffel Tower belong to the same domain, but Burj Khalifa specifically focuses on its own mechanics whereas Eiffel Tower operates differently.",
            "relationML": "ബുർജ് ഖലീഫ ഉം ഈഫൽ ടവർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Vacation Leave and Resignation belong to the same domain, but Vacation Leave specifically focuses on its own mechanics whereas Resignation operates differently.",
            "relationML": "അവധി / ലീവ് ഉം രാജി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Weekend",
            "wordMal": "വാരാന്ത്യം",
            "relationEN": "Both Vacation Leave and Weekend belong to the same domain, but Vacation Leave specifically focuses on its own mechanics whereas Weekend operates differently.",
            "relationML": "അവധി / ലീവ് ഉം വാരാന്ത്യം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Dubai Gold Souk and Spice Souk belong to the same domain, but Dubai Gold Souk specifically focuses on its own mechanics whereas Spice Souk operates differently.",
            "relationML": "ദുബായ് ഗോൾഡ് സൂക്ക് ഉം സ്പൈസ് സൂക്ക് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Jewellery Shop",
            "wordMal": "ജ്വല്ലറി",
            "relationEN": "Both Dubai Gold Souk and Jewellery Shop belong to the same domain, but Dubai Gold Souk specifically focuses on its own mechanics whereas Jewellery Shop operates differently.",
            "relationML": "ദുബായ് ഗോൾഡ് സൂക്ക് ഉം ജ്വല്ലറി ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Khubus and Porotta belong to the same domain, but Khubus specifically focuses on its own mechanics whereas Porotta operates differently.",
            "relationML": "കുബ്ബൂസ് ഉം പൊറോട്ട ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Pita Bread",
            "wordMal": "പിറ്റാ ബ്രെഡ്",
            "relationEN": "Both Khubus and Pita Bread belong to the same domain, but Khubus specifically focuses on its own mechanics whereas Pita Bread operates differently.",
            "relationML": "കുബ്ബൂസ് ഉം പിറ്റാ ബ്രെഡ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Kafala and Sponsorship belong to the same domain, but Kafala specifically focuses on its own mechanics whereas Sponsorship operates differently.",
            "relationML": "കഫാല ഉം സ്പോൺസർഷിപ്പ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Visa Rule",
            "wordMal": "വിസാ നിയമം",
            "relationEN": "Both Kafala and Visa Rule belong to the same domain, but Kafala specifically focuses on its own mechanics whereas Visa Rule operates differently.",
            "relationML": "കഫാല ഉം വിസാ നിയമം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Perfume Attar and Oud belong to the same domain, but Perfume Attar specifically focuses on its own mechanics whereas Oud operates differently.",
            "relationML": "അത്തർ ഉം ഊദ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Rose Water",
            "wordMal": "പനിനീർ",
            "relationEN": "Both Perfume Attar and Rose Water belong to the same domain, but Perfume Attar specifically focuses on its own mechanics whereas Rose Water operates differently.",
            "relationML": "അത്തർ ഉം പനിനീർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Qatar Airways and Emirates belong to the same domain, but Qatar Airways specifically focuses on its own mechanics whereas Emirates operates differently.",
            "relationML": "ഖത്തർ എയർവേയ്സ് ഉം എമിറേറ്റ്സ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Air India",
            "wordMal": "എയർ ഇന്ത്യ",
            "relationEN": "Both Qatar Airways and Air India belong to the same domain, but Qatar Airways specifically focuses on its own mechanics whereas Air India operates differently.",
            "relationML": "ഖത്തർ എയർവേയ്സ് ഉം എയർ ഇന്ത്യ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Shawarma Machine and Grill belong to the same domain, but Shawarma Machine specifically focuses on its own mechanics whereas Grill operates differently.",
            "relationML": "ഷവർമ്മ മെഷീൻ ഉം ഗ്രിൽ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Oven",
            "wordMal": "ഓവൻ",
            "relationEN": "Both Shawarma Machine and Oven belong to the same domain, but Shawarma Machine specifically focuses on its own mechanics whereas Oven operates differently.",
            "relationML": "ഷവർമ്മ മെഷീൻ ഉം ഓവൻ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Oud Incense and Frankincense belong to the same domain, but Oud Incense specifically focuses on its own mechanics whereas Frankincense operates differently.",
            "relationML": "ഊദ് ഉം കുന്തിരിക്കം ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Bakhoor",
            "wordMal": "ബഖൂർ",
            "relationEN": "Both Oud Incense and Bakhoor belong to the same domain, but Oud Incense specifically focuses on its own mechanics whereas Bakhoor operates differently.",
            "relationML": "ഊദ് ഉം ബഖൂർ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Lablabi / Hummus and Moutabal belong to the same domain, but Lablabi / Hummus specifically focuses on its own mechanics whereas Moutabal operates differently.",
            "relationML": "ഹുമുസ് ഉം മുതബൽ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Mayonnaise",
            "wordMal": "മയോണൈസ്",
            "relationEN": "Both Lablabi / Hummus and Mayonnaise belong to the same domain, but Lablabi / Hummus specifically focuses on its own mechanics whereas Mayonnaise operates differently.",
            "relationML": "ഹുമുസ് ഉം മയോണൈസ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Dirham Currency and Riyal belong to the same domain, but Dirham Currency specifically focuses on its own mechanics whereas Riyal operates differently.",
            "relationML": "ദിർഹം ഉം റിയാൽ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Rupee",
            "wordMal": "രൂപ",
            "relationEN": "Both Dirham Currency and Rupee belong to the same domain, but Dirham Currency specifically focuses on its own mechanics whereas Rupee operates differently.",
            "relationML": "ദിർഹം ഉം രൂപ ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
            "relationEN": "Both Emirates ID and Aadhaar Card belong to the same domain, but Emirates ID specifically focuses on its own mechanics whereas Aadhaar Card operates differently.",
            "relationML": "എമിറേറ്റ്സ് ഐഡി ഉം ആധാർ കാർഡ് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
          },
          {
            "word": "Passport",
            "wordMal": "പാസ്പോർട്ട്",
            "relationEN": "Both Emirates ID and Passport belong to the same domain, but Emirates ID specifically focuses on its own mechanics whereas Passport operates differently.",
            "relationML": "എമിറേറ്റ്സ് ഐഡി ഉം പാസ്പോർട്ട് ഉം ഒരേ വിഭാഗത്തിൽ പെടുന്നവയാണെങ്കിലും, ഇവ രണ്ടും തികച്ചും വ്യത്യസ്തമാണ്."
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
