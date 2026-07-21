if (typeof window === 'undefined') { global.window = {}; }

var packs = [
  {
    "id": "funny",
    "name": "Funny Malayalam",
    "icon": "😂",
    "words": [
      [
        "Pwoli",
        "പൊളി",
        "High Energy",
        "വലിയ ആവേശം"
      ],
      [
        "Ayyayyo",
        "അയ്യയ്യോ",
        "Sudden Reaction",
        "പെട്ടെന്നുള്ള പ്രതികരണം"
      ],
      [
        "Scene illa",
        "സീൻ ഇല്ല",
        "Calm Mindset",
        "സമാധാനപരമായ അവസ്ഥ"
      ],
      [
        "Thallal",
        "തള്ളൽ",
        "Tall Tales",
        "കൂട്ടുകാരുടെ സംസാരം"
      ],
      [
        "Kidu",
        "കിടു",
        "Great Impression",
        "നല്ല അനുഭവം"
      ],
      [
        "Adipoli",
        "അടിപൊളി",
        "Positive Vibe",
        "നല്ല ഒരു അന്തരീക്ഷം"
      ],
      [
        "Poli Scene",
        "പൊളി സീൻ",
        "Memorable Experience",
        "ഓർമ്മയിൽ നിൽക്കുന്ന കാര്യം"
      ],
      [
        "Sadhanam Kayyil Undo",
        "സാധനം കയ്യിൽ ഉണ്ടോ",
        "Coded Message",
        "രഹസ്യമായ അന്വേഷണം"
      ],
      [
        "Thenga",
        "തേങ്ങ",
        "Casual Exclamation",
        "സാധാരണ പറയുന്ന വാക്ക്"
      ],
      [
        "Chetta",
        "ചേട്ടാ",
        "Social Conversation Start",
        "സംസാരം തുടങ്ങുമ്പോൾ"
      ],
      [
        "Eda Mone",
        "എടാ മോനെ",
        "Informal Bonding",
        "അടുപ്പമുള്ളവരോടുള്ള സമീപനം"
      ],
      [
        "Kidilan",
        "കിടിലൻ",
        "High Rating",
        "മികച്ച അഭിപ്രായം"
      ],
      [
        "Chali",
        "ചളി",
        "Lighthearted Entertainment",
        "നേരംപോക്ക് സംസാരം"
      ],
      [
        "Koppu",
        "കോപ്പ്",
        "Emotional Outburst",
        "മനസ്സിലെ അനിഷ്ടം"
      ],
      [
        "Pani Paali",
        "പണി പാളി",
        "Unexpected Turn",
        "വിചാരിക്കാത്ത മാറ്റം"
      ],
      [
        "Ambada",
        "അമ്പടാ",
        "Friendly Teasing",
        "തമാശയ്ക്കുള്ള പ്രശംസ"
      ],
      [
        "Poda Pulle",
        "പോടാ പുള്ളേ",
        "Casual Rejection",
        "തമാശയുള്ള തർക്കം"
      ],
      [
        "Vattaano",
        "വട്ടാണോ",
        "Curiosity About Behavior",
        "പെരുമാറ്റത്തെക്കുറിച്ചുള്ള സംശയം"
      ],
      [
        "Athu Sheri",
        "അത് ശരി",
        "Skeptical Response",
        "സംശയത്തോടെയുള്ള പ്രതികരണം"
      ],
      [
        "Thallumala",
        "തല്ലുമാല",
        "Group Chaos",
        "കൂട്ടമായ ബഹളം"
      ],
      [
        "Chummadive",
        "ചുമ്മാടിവേ",
        "Playful Exclamation",
        "തമാശയ്ക്കുള്ള പ്രതികരണം"
      ],
      [
        "Oodayi",
        "ഉടായിപ്പ്",
        "Clever Shortcut",
        "വളഞ്ഞ വഴിയുള്ള ഉപായം"
      ],
      [
        "Jada",
        "ജാഡ",
        "Social Attitude",
        "ആളുകളുടെ പെരുമാറ്റ രീതി"
      ],
      [
        "Vera Level",
        "വേറെ ലെവൽ",
        "Extraordinary Situation",
        "സാധാരണയിൽ കവിഞ്ഞ അവസ്ഥ"
      ],
      [
        "Blunder",
        "ബ്ലണ്ടർ",
        "Awkward Moment",
        "അബദ്ധം പിണയുന്ന സമയം"
      ],
      [
        "Suhurthe",
        "സുഹൃത്തേ",
        "Polite Addressing",
        "മാന്യമായ അഭിസംബോധന"
      ],
      [
        "Kittu",
        "കിട്ടു",
        "Fulfillment Moment",
        "ആഗ്രഹസാഫല്യം"
      ],
      [
        "Scene Contra",
        "സീൻ കോൺട്ര",
        "Unexpected Complication",
        "പ്രതീക്ഷിക്കാത്ത തടസ്സം"
      ],
      [
        "Chamakku",
        "ചമക്ക്",
        "Showy Attitude",
        "പ്രകടനപരത"
      ],
      [
        "Shavapetti",
        "ശവപ്പെട്ടി",
        "Wooden Enclosure",
        "തടിപ്പെട്ടി"
      ],
      [
        "Pothu",
        "പോത്ത്",
        "Stubborn Nature",
        "വാശിപിടിക്കുന്ന സ്വഭാവം"
      ],
      [
        "Kuthikazhapp",
        "കുതിക്കഴപ്പ്",
        "Restless Energy",
        "അടങ്ങിയിരിക്കാത്ത അവസ്ഥ"
      ],
      [
        "Senti",
        "സെന്റി",
        "Emotional Reaction",
        "വികാരഭരിതമായ പ്രതികരണം"
      ],
      [
        "Kidu Vibe",
        "കിടു വൈബ്",
        "Top Tier Quality",
        "ഉയർന്ന നിലവാരം"
      ],
      [
        "Oomfi",
        "ഊംഫി",
        "Sudden Loss",
        "പെട്ടെന്നുണ്ടായ നഷ്ടം"
      ],
      [
        "Vatt",
        "വട്ട്",
        "Unusual Thinking",
        "വ്യത്യസ്ത ചിന്താഗതി"
      ]
    ]
  },
  {
    "id": "movies",
    "name": "Movies",
    "icon": "🎬",
    "words": [
      [
        "Manichitrathazhu",
        "മണിച്ചിത്രത്താഴ്",
        "Ancient Mansion Mystery",
        "പഴയ തറവാട്ടിലെ രഹസ്യം"
      ],
      [
        "Drishyam",
        "ദൃശ്യം",
        "Clever Cover-up",
        "ബുദ്ധിപരമായ നീക്കങ്ങൾ"
      ],
      [
        "Kumbalangi Nights",
        "കുമ്പളങ്ങി നൈറ്റ്സ്",
        "Coastal Brotherhood",
        "തീരദേശത്തെ ജീവിതം"
      ],
      [
        "Bangalore Days",
        "ബാംഗ്ലൂർ ഡെയ്സ്",
        "Cousins Bonding",
        "ബന്ധുക്കളുടെ കൂട്ടായ്മ"
      ],
      [
        "Premam",
        "പ്രേമം",
        "Stages of Life",
        "ജീവിതത്തിലെ വിവിധ ഘട്ടങ്ങൾ"
      ],
      [
        "Nadodikkattu",
        "നാടോടിക്കാറ്റ്",
        "Struggle and Survival",
        "ജീവിത പോരാട്ടവും യാത്രയും"
      ],
      [
        "Thenmavin Kombath",
        "തേന്മാവിൻ കൊമ്പത്ത്",
        "Village Romance",
        "ഗ്രാമീണ പശ്ചാത്തലമുള്ള കഥ"
      ],
      [
        "Kilukkam",
        "കിലുക്കം",
        "Humorous Journey",
        "ചിരിയും യാത്രയും ചേർന്നത്"
      ],
      [
        "Chithram",
        "ചിത്രം",
        "Emotional Relationship",
        "ബന്ധങ്ങളുടെ ആഴം"
      ],
      [
        "Bharatham",
        "ഭരതം",
        "Classical Art Background",
        "കലാപരമായ പശ്ചാത്തലം"
      ],
      [
        "Devasuram",
        "ദേവാസുരം",
        "Rivalry and Honor",
        "അഭിമാനവും വാശിയും"
      ],
      [
        "Ustad Hotel",
        "ഉസ്താദ് ഹോട്ടൽ",
        "Generations and Culture",
        "തലമുറകളും പാരമ്പര്യവും"
      ],
      [
        "Maheshinte Prathikaaram",
        "മഹേഷിന്റെ പ്രതികാരം",
        "Simple Town Life",
        "സാധാരണക്കാരുടെ ജീവിതം"
      ],
      [
        "Ayyappanum Koshiyum",
        "അയ്യപ്പനും കോശിയും",
        "Conflict of Personalities",
        "വ്യക്തികൾ തമ്മിലുള്ള തർക്കം"
      ],
      [
        "Lucifer",
        "ലൂസിഫർ",
        "Power and Strategy",
        "അധികാരവും തന്ത്രങ്ങളും"
      ],
      [
        "Thondimuthalum Driksakshiyum",
        "തൊണ്ടിമുതലും ദൃക്സാക്ഷിയും",
        "Human Nature",
        "മനുഷ്യ സ്വഭാവങ്ങളുടെ സത്യം"
      ],
      [
        "Action Hero Biju",
        "ആക്ഷൻ ഹീറോ ബിജു",
        "Real Life Incidents",
        "യാഥാർത്ഥ്യത്തോട് അടുത്ത സംഭവങ്ങൾ"
      ],
      [
        "Sudani from Nigeria",
        "സുഡാനി ഫ്രം നൈജീരിയ",
        "Compassion and Friendship",
        "സ്നേഹവും കൂട്ടായ്മയും"
      ],
      [
        "Traffic",
        "ട്രാഫിക്",
        "Time Sensitive Race",
        "സമയത്തോടുള്ള മത്സരം"
      ],
      [
        "Indian Rupee",
        "ഇന്ത്യൻ റുപ്പി",
        "Financial Ambitions",
        "സാമ്പത്തിക ലക്ഷ്യങ്ങൾ"
      ],
      [
        "Romancham",
        "രോമാഞ്ചം",
        "Bachelor Living Drama",
        "കൂട്ടുകാരുടെ ഒന്നിച്ചുള്ള ജീവിതം"
      ],
      [
        "Premalu",
        "പ്രേമലു",
        "Youth Relationship",
        "പുതിയ തലമുറയുടെ ചിന്തകൾ"
      ],
      [
        "Aavesham",
        "ആവേശം",
        "High Energy Encounter",
        "ആവേശകരമായ കൂട്ടായ്മ"
      ],
      [
        "Bramayugam",
        "ഭ്രമയുഗം",
        "Ancient Mystery",
        "പഴയകാല നിഗൂഢത"
      ],
      [
        "Manjummel Boys",
        "മഞ്ഞുമ്മൽ ബോയ്സ്",
        "Friendship Rescue",
        "സുഹൃത്തുക്കളുടെ സ്നേഹം"
      ],
      [
        "Godfather",
        "ഗോഡ്ഫാദർ",
        "Family Tradition",
        "കുടുംബത്തിലെ കാരണവന്മാർ"
      ],
      [
        "Malaikottai Vaaliban",
        "മലൈക്കോട്ടൈ വാലിബൻ",
        "Desert Folklore",
        "നാടോടിക്കഥകൾ"
      ],
      [
        "Minnal Murali",
        "മിന്നൽ മുരളി",
        "Tailor Shop Incident",
        "തയ്യൽക്കടയിലെ സംഭവം"
      ],
      [
        "Kishkindha Kaandam",
        "കിഷ്കിന്ധാ കാണ്ഡം",
        "Forest Reserve Inquiry",
        "വനമേഖലയിലെ അന്വേഷണം"
      ],
      [
        "Rorschach",
        "റോഷാക്ക്",
        "White Mask Mystery",
        "മുഖംമൂടി രഹസ്യം"
      ],
      [
        "Kattappanayile Rithwik Roshan",
        "കട്ടപ്പനയിലെ ഹൃതിക് റോഷൻ",
        "Local Casting Call",
        "സിനിമ മോഹം"
      ],
      [
        "Varathan",
        "വരത്തൻ",
        "Estate Intrusion",
        "തോട്ടത്തിലെ അതിക്രമം"
      ],
      [
        "Bheeshma Parvam",
        "ഭീഷ്മ പർവ്വം",
        "Mattancherry Trade",
        "മട്ടാഞ്ചേരിയിലെ കച്ചവടം"
      ],
      [
        "Memories",
        "മെമ്മറീസ്",
        "Investigative Thriller",
        "രഹസ്യാന്വേഷണ കഥ"
      ],
      [
        "Classmates",
        "ക്ലാസ്മേറ്റ്സ്",
        "Campus Nostalgia",
        "കോളേജ് ഓർമ്മകൾ"
      ],
      [
        "Spadikam",
        "സ്ഫടികം",
        "Rebellious Son",
        "കുടുംബത്തിലെ തർക്കങ്ങൾ"
      ]
    ]
  },
  {
    "id": "characters",
    "name": "Characters",
    "icon": "🎯",
    "words": [
      [
        "Georgekutty",
        "ജോർജ് കുട്ടി",
        "Resourceful Protector",
        "കുടുംബത്തെ സംരക്ഷിക്കുന്നവൻ"
      ],
      [
        "Nagavalli",
        "നാഗവല്ലി",
        "Legendary Persona",
        "പഴയകാല ഓർമ്മകളുള്ള കഥാപാത്രം"
      ],
      [
        "Sethumadhavan",
        "സേതുമാധവൻ",
        "Misunderstood Youth",
        "സാഹചര്യങ്ങളുടെ ഇര"
      ],
      [
        "Dasan",
        "ദാസൻ",
        "Jobless Aspiring Man",
        "വലിയ സ്വപ്നങ്ങളുള്ള യുവാവ്"
      ],
      [
        "Mangalassery Neelakandan",
        "മംഗലശ്ശേരി നീലകണ്ഠൻ",
        "Powerful Feudal Figure",
        "ഗ്രാമത്തിലെ പ്രബലനായ വ്യക്തി"
      ],
      [
        "Appukuttan",
        "അപ്പുക്കുട്ടൻ",
        "Humorous Companion",
        "ചിരിപ്പിക്കുന്ന സുഹൃത്ത്"
      ],
      [
        "Ramanan",
        "രാമനൻ",
        "Loyal Follower",
        "വിശ്വസ്തനായ സഹായി"
      ],
      [
        "Induchoodan",
        "ഇന്ദുചൂഡൻ",
        "Outspoken Leader",
        "തന്റേടമുള്ള നായകൻ"
      ],
      [
        "Kunjikoonan",
        "കുഞ്ഞിക്കൂനൻ",
        "Sympathetic Villager",
        "സ്നേഹമുള്ള ഗ്രാമീണൻ"
      ],
      [
        "Koshy Kurien",
        "കോശി കുര്യൻ",
        "Influential Challenger",
        "സ്വാധീനമുള്ള എതിരാളി"
      ],
      [
        "Ayyappan Nair",
        "അയ്യപ്പൻ നായർ",
        "Strict Authority Figure",
        "നിയമം പാലിക്കുന്ന ഉദ്യോഗസ്ഥൻ"
      ],
      [
        "Mahesh Bhavana",
        "മഹേഷ് ഭാവന",
        "Modest Town Photographer",
        "സാധാരണക്കാരനായ ചെറുപ്പക്കാരൻ"
      ],
      [
        "Biju Paulose",
        "ബിജു പൗലോസ്",
        "Dedicated Lawman",
        "കടമ നിർവ്വഹിക്കുന്നവൻ"
      ],
      [
        "Rameshan Nair",
        "രമേശൻ നായർ",
        "Passionate Enthusiast",
        "വലിയ ഇഷ്ടങ്ങൾ സൂക്ഷിക്കുന്നവൻ"
      ],
      [
        "Pachu",
        "പച്ചു",
        "Helpful Neighbor",
        "എല്ലാവർക്കും വേണ്ടപ്പെട്ടവൻ"
      ],
      [
        "Kunjiraman",
        "കുഞ്ഞിരാമൻ",
        "Prominent Local",
        "ഗ്രാമത്തിലെ പ്രധാന വ്യക്തി"
      ],
      [
        "Pavanayi",
        "പവനായി",
        "Overconfident Outsider",
        "വലിയ അവകാശവാദങ്ങൾ ഉന്നയിക്കുന്നവൻ"
      ],
      [
        "Manavalan",
        "മാനവാളൻ",
        "Comical Businessman",
        "തമാശക്കാരനായ വ്യാപാരി"
      ],
      [
        "Ganga",
        "ഗംഗ",
        "Double Personality",
        "മനസ്സിൽ രഹസ്യം സൂക്ഷിക്കുന്നവൾ"
      ],
      [
        "Rukmini",
        "രുക്മിണി",
        "Traditional Homemaker",
        "തറവാട്ടിലെ പ്രധാനി"
      ],
      [
        "Girish M.A.",
        "ഗിരീഷ് എം.എ.",
        "Funny Romantic Youth",
        "പ്രണയിക്കുന്ന ചെറുപ്പക്കാരൻ"
      ],
      [
        "Shammi",
        "ഷമ്മി",
        "Unusual Houseguest",
        "പ്രത്യേക സ്വഭാവമുള്ള അതിഥി"
      ],
      [
        "Ranga",
        "രംഗ",
        "Flamboyant Leader",
        "ആവേശക്കാരനായ നായകൻ"
      ],
      [
        "Dashamoolam Damu",
        "ദശമൂലം ദാമു",
        "Excitable Comedian",
        "ചിരിപ്പിക്കുന്ന കഥാപാത്രം"
      ],
      [
        "Gafoor Ka Dosth",
        "ഗഫൂർ കാ ദോസ്ത്",
        "Travel Guide Trickster",
        "വഴി കാണിക്കുന്ന സഹായി"
      ],
      [
        "Anandavalli",
        "ആനന്ദവല്ലി",
        "Loving Motherly Figure",
        "സ്നേഹമുള്ള അമ്മ"
      ],
      [
        "Beemboy",
        "ബീംബോയ്",
        "Heavy Lifter",
        "ഭാരം ചുമക്കുന്നയാൾ"
      ],
      [
        "Kattalan Porinchu",
        "കാട്ടാളൻ പൊറിഞ്ചു",
        "Market Enforcer",
        "ചന്തയിലെ കരുത്തൻ"
      ],
      [
        "Digambaran",
        "ദിഗംബരൻ",
        "Black Magic Healer",
        "മന്ത്രവാദ ക്രിയകൾ"
      ],
      [
        "Dileep Role",
        "ദിലീപ് റോൾ",
        "Mimicry Artist",
        "മിമിക്രി കലാകാരൻ"
      ],
      [
        "Kuttan",
        "കുട്ടൻ",
        "Tech Employee",
        "ഐടി ജീവനക്കാരൻ"
      ],
      [
        "Krishnan",
        "കൃഷ്ണൻ",
        "Colony Resident",
        "കോളനിവാസി"
      ],
      [
        "Sachy",
        "സച്ചി",
        "Advocate Writer",
        "നിയമജ്ഞനായ എഴുത്തുകാരൻ"
      ],
      [
        "Aadu Thoma",
        "ആട് തോമ",
        "Quarry Operator",
        "ക്വാറി ഉടമ"
      ],
      [
        "Keeleri Achu",
        "കീശേരി അച്ചു",
        "Comical Muscleman",
        "ചിരിപ്പിക്കുന്ന ഗുണ്ട"
      ],
      [
        "Niranjan",
        "നിരഞ്ജൻ",
        "Convict Fugitive",
        "നിയമത്തിൽ നിന്നും ഓടിയവൻ"
      ]
    ]
  },
  {
    "id": "festivals",
    "name": "Festivals",
    "icon": "🎉",
    "words": [
      [
        "Onam",
        "ഓണം",
        "Seasonal Celebration",
        "സീസണലായ ആഘോഷം"
      ],
      [
        "Vishu",
        "വിഷു",
        "Traditional Calendar Event",
        "പാരമ്പര്യ ആചാര ദിനം"
      ],
      [
        "Thrissur Pooram",
        "തൃശ്ശൂർ പൂരം",
        "Cultural Spectacle",
        "വലിയ ജനക്കൂട്ടമുള്ള ഉത്സവം"
      ],
      [
        "Attukal Pongala",
        "ആറ്റുകാൽ പൊങ്കാല",
        "Devotional Gathering",
        "ഭക്തിസാന്ദ്രമായ കൂട്ടായ്മ"
      ],
      [
        "Vallamkali",
        "വള്ളംകളി",
        "Backwater Competition",
        "ജലത്തിൽ നടക്കുന്ന മത്സരം"
      ],
      [
        "Kerala Piravi",
        "കേരളപ്പിറവി",
        "State Anniversary",
        "സംസ്ഥാനവുമായി ബന്ധപ്പെട്ട ദിനം"
      ],
      [
        "Christmas",
        "ക്രിസ്മസ്",
        "Winter Holiday",
        "വർഷാവസാനത്തെ ആഘോഷം"
      ],
      [
        "Eid",
        "ഈദ്",
        "Festive Feast Day",
        "പ്രാർത്ഥനയും സ്നേഹവുമുള്ള ദിവസം"
      ],
      [
        "Theyyam",
        "തെയ്യം",
        "Folk Ritual Performance",
        "അനുഷ്ഠാനപരമായ കല"
      ],
      [
        "Karkidaka Vavu",
        "കർക്കിടക വാവ്",
        "Solemn Observance",
        "ആത്മീയമായ ആചാരം"
      ],
      [
        "Navarathri",
        "നവരാത്രി",
        "Multi-day Devotion",
        "ദിവസങ്ങൾ നീളുന്ന ആചാരം"
      ],
      [
        "Thiruvathira",
        "തിരുവാതിര",
        "Traditional Moonlight Dance",
        "സ്ത്രീകൾ പങ്കെടുക്കുന്ന ആചാരം"
      ],
      [
        "Makaravilakku",
        "മകരവിളക്ക്",
        "Hilltop Pilgrimage Event",
        "തീർത്ഥാടനവുമായി ബന്ധപ്പെട്ടത്"
      ],
      [
        "Kodiyettam",
        "കൊടിയേറ്റം",
        "Ceremonial Flag Hoisting",
        "ഉത്സവങ്ങളുടെ തുടക്കച്ചടങ്ങ്"
      ],
      [
        "Pulikali",
        "പുലിക്കളി",
        "Street Art Procession",
        "തെരുവിൽ നടക്കുന്ന കലാപ്രകടനം"
      ],
      [
        "Aranmula Uthrattathi",
        "ആറന്മുള ഉത്രട്ടാതി",
        "Historic River Pageant",
        "നദിയിലെ പൈതൃക ചടങ്ങ്"
      ],
      [
        "Kettukazhcha",
        "കെട്ടുകാഴ്ച",
        "Effigy Display Procession",
        "വലിയ രൂപങ്ങൾ എഴുന്നള്ളിക്കുന്നത്"
      ],
      [
        "Thiruvulsavam",
        "തിരുവുത്സവം",
        "Annual Temple Celebration",
        "വാർഷിക ഉത്സവ കാലം"
      ],
      [
        "Pooram",
        "പൂരം",
        "Percussion & Elephant Gathering",
        "വാദ്യമേളങ്ങളും ആഘോഷവും"
      ],
      [
        "Palliperunnal",
        "പള്ളിപ്പെരുന്നാൾ",
        "Parish Jubilee Feast",
        "പ്രാദേശിക പള്ളിയിലെ ഉത്സവം"
      ],
      [
        "Beemapally Uroos",
        "ബീമാപള്ളി ഉറൂസ്",
        "Spiritual Annual Event",
        "ആത്മീയ സംഗമം"
      ],
      [
        "Malayattoor Perunnal",
        "മലയാറ്റൂർ പെരുന്നാൾ",
        "Mountain Pilgrimage",
        "മലകയറ്റവും പ്രാർത്ഥനയും"
      ],
      [
        "Oachira Kettukazhcha",
        "ഓച്ചിറ കെട്ടുകാഴ്ച",
        "Historic Heritage Fair",
        "ചരിത്രപരമായ ഉത്സവം"
      ],
      [
        "Kalpathi Ratholsavam",
        "കൽപ്പാത്തി രഥോത്സവം",
        "Traditional Chariot Festival",
        "പൈതൃകഗ്രാമത്തിലെ ആഘോഷം"
      ],
      [
        "Chettikulangara Bharani",
        "ചെട്ടികുളങ്ങര ഭരണി",
        "Grand Cultural Procession",
        "പ്രശസ്തമായ ഗ്രാമോത്സവം"
      ],
      [
        "Sivarathri",
        "ശിവരാത്രി",
        "Night-long Devotional Vigil",
        "രാത്രിയിലെ ഭക്തിസാന്ദ്രമായ ആചാരം"
      ],
      [
        "Kuthiyottam",
        "കുത്തിയോട്ടം",
        "Devotional Step Dance",
        "അനുഷ്ഠാന ചുവടുകൾ"
      ],
      [
        "Kaalavela",
        "കാളവേല",
        "Straw Effigy Parade",
        "വൈക്കോൽ പ്രതിമാ ഘോഷയാത്ര"
      ],
      [
        "Ganamela",
        "ഗാനമേള",
        "Stage Audio Setup",
        "സ്റ്റേജ് ഓഡിയോ സിസ്റ്റം"
      ],
      [
        "Kalampaattu",
        "കളംപാട്ട്",
        "Floor Powder Drawing",
        "പൊടിക്കളം വരയ്ക്കൽ"
      ],
      [
        "Theeyattam",
        "തീയാട്ടം",
        "Torchlight Ritual",
        "പന്തം കൊളുത്തിയുള്ള ചടങ്ങ്"
      ],
      [
        "Ezhunnallathu",
        "എഴുന്നള്ളത്ത്",
        "Royal Procession",
        "രാജകീയ ഘോഷയാത്ര"
      ],
      [
        "Chenda Melam",
        "ചെണ്ടമേളം",
        "Cylindrical Drum Beat",
        "താളമേളങ്ങൾ"
      ],
      [
        "Thalappoli",
        "താലപ്പൊലി",
        "Lamp Bearing Procession",
        "വിളക്കുകളേന്തിയുള്ള യാത്ര"
      ],
      [
        "Vishu Kani",
        "വിഷുക്കണി",
        "Morning Auspicious Sight",
        "പുലർച്ചെ കാണുന്ന കാഴ്ച"
      ],
      [
        "Chutti Art",
        "ചുട്ടി",
        "Rice Paste Makeover",
        "അരിമാവ് അലങ്കാരം"
      ]
    ]
  },
  {
    "id": "places",
    "name": "Places",
    "icon": "📍",
    "words": [
      [
        "Kochi",
        "കൊച്ചി",
        "Coastal City",
        "കടൽത്തീരത്തെ നഗരം"
      ],
      [
        "Munnar",
        "മൂന്നാർ",
        "Hill Destination",
        "മലയോര വിനോദസഞ്ചാര ഇടം"
      ],
      [
        "Alappuzha",
        "ആലപ്പുഴ",
        "Waterway Tourism Town",
        "കായലുകളുള്ള നാട്"
      ],
      [
        "Wayanad",
        "വയനാട്",
        "Green Plateau Region",
        "പ്രകൃതിഭംഗിയുള്ള മലയോരം"
      ],
      [
        "Varkala",
        "വർക്കല",
        "Tourist Beach Cliff",
        "തീരദേശ വിനോദ കേന്ദ്രം"
      ],
      [
        "Thrissur",
        "തൃശ്ശൂർ",
        "Central Heritage Town",
        "സാംസ്കാരിക പ്രാധാന്യമുള്ള നഗരം"
      ],
      [
        "Kollam",
        "കൊല്ലം",
        "Southern Waterfront District",
        "തെക്കൻ ജില്ലയിലെ പ്രധാന ഇടം"
      ],
      [
        "Kannur",
        "കണ്ണൂർ",
        "Northern Coastal District",
        "വടക്കൻ പൈതൃക നാട്"
      ],
      [
        "Kottayam",
        "കോട്ടയം",
        "Inland Rubber Hub",
        "തോട്ടങ്ങളും അക്ഷരവുമുള്ള നാട്"
      ],
      [
        "Palakkad",
        "പാലക്കാട്",
        "Border Gateway District",
        "കാറ്റും പാടങ്ങളുമുള്ള അതിർത്തി"
      ],
      [
        "Thiruvananthapuram",
        "തിരുവനന്തപുരം",
        "Administrative Headquarters",
        "ഭരണസിരാകേന്ദ്രം"
      ],
      [
        "Kasaragod",
        "കാസർഗോഡ്",
        "Northernmost Border Region",
        "ഏറ്റവും വടക്കൻ ജില്ല"
      ],
      [
        "Idukki",
        "ഇടുക്കി",
        "Mountain Hydro Hub",
        "മലനിരകളും ഡാമുകളുമുള്ള ജില്ല"
      ],
      [
        "Malappuram",
        "മലപ്പുറം",
        "Passionate Soccer Region",
        "കളിയാവേശമുള്ള നാട്"
      ],
      [
        "Guruvayur",
        "ഗുരുവായൂർ",
        "Famous Pilgrimage Town",
        "പ്രസിദ്ധമായ തീർത്ഥാടന കേന്ദ്രം"
      ],
      [
        "Bekal",
        "ബേക്കൽ",
        "Historic Fort Coast",
        "ചരിത്രപരമായ കടൽത്തീരം"
      ],
      [
        "Thekkady",
        "തേക്കടി",
        "Forest Wildlife Sanctuary",
        "വന്യജീവി വിനോദസഞ്ചാര കേന്ദ്രം"
      ],
      [
        "Kovalam",
        "കോവളം",
        "International Beach Resort",
        "പ്രശസ്തമായ കടൽത്തീരം"
      ],
      [
        "Ponmudi",
        "പൊന്മുടി",
        "Misty Hill Station",
        "തണുപ്പുള്ള മലമുകൾ"
      ],
      [
        "Athirappilly",
        "അതിരപ്പിള്ളി",
        "Waterfall Nature Attraction",
        "വനത്തിനുള്ളിലെ ജലാശയം"
      ],
      [
        "Kumarakom",
        "കുമാരകം",
        "Backwater Resort Village",
        "കായൽ തീരത്തെ ഗ്രാമം"
      ],
      [
        "Vagamon",
        "വാഗമൺ",
        "Green Meadows Hill",
        "പുൽമേടുകളുള്ള മലയോരം"
      ],
      [
        "Sultan Bathery",
        "സുൽത്താൻ ബത്തേരി",
        "Historic Forest Town",
        "ചരിത്രമുള്ള വടക്കൻ പട്ടണം"
      ],
      [
        "Fort Kochi",
        "ഫോർട്ട് കൊച്ചി",
        "Colonial Heritage Zone",
        "പൈതൃകമുള്ള തീരപ്രദേശം"
      ],
      [
        "Silent Valley",
        "സൈലന്റ് വാലി",
        "Deep Rainforest Reserve",
        "നിശബ്ദമായ വനമേഖല"
      ],
      [
        "Nelliyampathy",
        "നെല്ലിയാമ്പതി",
        "Scenic Mountain Range",
        "തേയിലത്തോട്ടങ്ങളുള്ള മലയോരം"
      ],
      [
        "Sabarimala",
        "ശബരിമല",
        "Dense Forest Shrine",
        "വനമധ്യത്തിലെ തീർത്ഥാടനം"
      ],
      [
        "Sree Padmanabhaswamy Temple",
        "ശ്രീപത്മനാഭസ്വാമി ക്ഷേത്രം",
        "Vault Heritage Structure",
        "നിലവറകളുള്ള സ്മാരകം"
      ],
      [
        "Thenmala",
        "തെന്മല",
        "Eco-Tourism Dam Zone",
        "ഇക്കോ ടൂറിസം മേഖല"
      ],
      [
        "Marari Beach",
        "മരാരി ബീച്ച്",
        "Coir Fishing Coast",
        "കയർ നിർമ്മാണ തീരം"
      ],
      [
        "Agasthyarkoodam",
        "അഗസ്ത്യർകൂടം",
        "Medicinal Herb Peak",
        "ഔഷധസസ്യങ്ങളുടെ മല"
      ],
      [
        "Banasura Sagar",
        "ബാണാസുര സാഗർ",
        "Earth Dam Reservoir",
        "മണ്ണുകൊണ്ട് നിർമ്മിച്ച അണക്കെട്ട്"
      ],
      [
        "Poonjar",
        "പൂഞ്ഞാർ",
        "Palace Valley",
        "കൊട്ടാരമുള്ള താഴ്വര"
      ],
      [
        "Muzhappilangad",
        "മുഴപ്പിലങ്ങാട്",
        "Drive-in Shore",
        "വാഹനം ഓടിക്കാവുന്ന തീരം"
      ],
      [
        "Kuttanad",
        "കുട്ടനാട്",
        "Below Sea Level Farming",
        "സമുദ്രനിരപ്പിന് താഴെയുള്ള കൃഷി"
      ],
      [
        "Pathanamthitta",
        "പത്തനംതിട്ട",
        "Pilgrims District",
        "തീർത്ഥാടകരുടെ നാട്"
      ]
    ]
  },
  {
    "id": "food",
    "name": "Kerala Food",
    "icon": "🍛",
    "words": [
      [
        "Puttu",
        "പുട്ട്",
        "Steamed Breakfast Staple",
        "ആവിയിൽ വേവിക്കുന്ന പ്രഭാതഭക്ഷണം"
      ],
      [
        "Appam",
        "അപ്പം",
        "Traditional Morning Bread",
        "രാവിലെ കഴിക്കുന്ന പലഹാരം"
      ],
      [
        "Sadya",
        "സദ്യ",
        "Traditional Feast",
        "വിശേഷ ദിവസത്തെ വലിയ ഭക്ഷണം"
      ],
      [
        "Kappa",
        "കപ്പ",
        "Root Vegetable Dish",
        "കിഴങ്ങ് വർഗ്ഗത്തിൽപ്പെട്ടത്"
      ],
      [
        "Pazham Pori",
        "പഴംപൊരി",
        "Sweet Tea Accompaniment",
        "ചായയ്ക്കൊപ്പമുള്ള മധുരം"
      ],
      [
        "Idiyappam",
        "ഇടിയപ്പം",
        "Steamed Rice Preparation",
        "അരിമാവ് കൊണ്ടുള്ള വിഭവം"
      ],
      [
        "Dosa",
        "ദോശ",
        "Griddle Cooked Item",
        "ചൂടോടെ ചുട്ടെടുക്കുന്നത്"
      ],
      [
        "Sambar",
        "സാമ്പാർ",
        "Vegetable Gravy",
        "പച്ചക്കറികൾ ചേർത്ത ഒഴിച്ചു കറി"
      ],
      [
        "Avial",
        "അവിയൽ",
        "Mixed Vegetable Combination",
        "പല പച്ചക്കറികൾ ചേർത്ത വിഭവം"
      ],
      [
        "Thoran",
        "തോരൻ",
        "Grated Coconut Stir-fry",
        "തേങ്ങ ചേർത്ത വറുത്തുപ്പേരി"
      ],
      [
        "Olan",
        "ഓലൻ",
        "Coconut Milk Vegetable Stew",
        "തേങ്ങാപ്പാൽ ചേർത്ത വിഭവം"
      ],
      [
        "Kalan",
        "കാളൻ",
        "Yogurt Based Gravy",
        "തൈര് ചേർത്ത കട്ടി കറി"
      ],
      [
        "Erissery",
        "എരിശ്ശേരി",
        "Roasted Coconut Preparation",
        "വറുത്ത തേങ്ങ ചേർത്ത കറി"
      ],
      [
        "Inji Curry",
        "ഇഞ്ചി കറി",
        "Spicy Tangy Condiment",
        "പുളിയും എരിവുമുള്ള വിഭവം"
      ],
      [
        "Pappadam",
        "പപ്പടം",
        "Crunchy Meal Side",
        "ഊണിനൊപ്പം പൊട്ടിച്ചു കഴിക്കുന്നത്"
      ],
      [
        "Payasam",
        "പായസം",
        "Sweet Liquid Dessert",
        "വിശേഷ ദിവസത്തെ മധുര വിഭവം"
      ],
      [
        "Beef Fry",
        "ബീഫ് ഫ്രൈ",
        "Spiced Roast Meat",
        "മസാല ചേർത്ത മാംസ വിഭവം"
      ],
      [
        "Meen Curry",
        "മീൻ കറി",
        "Tangy Seafood Gravy",
        "എരിവുള്ള കടൽ വിഭവം"
      ],
      [
        "Porotta",
        "പൊറോട്ട",
        "Layered Flatbread",
        "അടുക്കുകളുള്ള പ്രശസ്ത വിഭവം"
      ],
      [
        "Malabar Biriyani",
        "മലബാർ ബിരിയാണി",
        "Aromatic Spiced Rice",
        "സുഗന്ധമുള്ള റൈസ് വിഭവം"
      ],
      [
        "Pathiri",
        "പത്തിരി",
        "Soft Rice Flatbread",
        "അരിമാവ് കൊണ്ടുള്ള പലഹാരം"
      ],
      [
        "Karimeen Pollichathu",
        "കരിമീൻ പൊള്ളിച്ചത്",
        "Banana Leaf Wrapped Seafood",
        "ഇലയിൽ പൊതിഞ്ഞു വേവിച്ച വിഭവം"
      ],
      [
        "Chicken Stew",
        "ചിക്കൻ സ്റ്റ്യൂ",
        "Mild Coconut Gravy",
        "തേങ്ങാപ്പാൽ ചേർത്ത കറി"
      ],
      [
        "Kothu Parotta",
        "കൊത്ത് പൊറോട്ട",
        "Street Food Mix",
        "തട്ടുകടയിലെ പ്രശസ്ത വിഭവം"
      ],
      [
        "Palappam",
        "പാലപ്പം",
        "Lacy Breakfast Item",
        "പ്രഭാതത്തിലെ പ്രധാന വിഭവം"
      ],
      [
        "Thalassery Biriyani",
        "തലശ്ശേരി ബിരിയാണി",
        "Special Rice Delicacy",
        "വടക്കൻ കേരളത്തിലെ വിശേഷ വിഭവം"
      ],
      [
        "Mutton Chaaps",
        "മട്ടൺ ചാപ്സ്",
        "Pepper Gravy Roast",
        "കുരുമുളക് ചേർത്ത വിഭവം"
      ],
      [
        "Kappa Biriyani",
        "കപ്പ ബിരിയാണി",
        "Tuber Meat Blend",
        "കിഴങ്ങും ഇറച്ചിയും ചേർത്തത്"
      ],
      [
        "Neyyappam Special",
        "നെയ്യപ്പം",
        "Fried Rice Batter Cake",
        "വറുത്തെടുത്ത അരിമാവ് പലഹാരം"
      ],
      [
        "Kallappam",
        "കള്ളപ്പം",
        "Fermented Rice Pancake",
        "പുളിപ്പിച്ച അരിപ്പലഹാരം"
      ],
      [
        "Chemeen Curry",
        "ചെമ്മീൻ കരി",
        "Kokum Seafood Stew",
        "കുടംപുളി ചേർത്ത കറി"
      ],
      [
        "Parippu Curry",
        "പരിപ്പ് കറി",
        "Yellow Lentil Mash",
        "പരിപ്പ് വേവിച്ചത്"
      ],
      [
        "Meen Peera",
        "മീൻ പീര",
        "Grated Coconut Seafood",
        "തേങ്ങ അരച്ച വിഭവം"
      ],
      [
        "Fish Moolie",
        "ഫിഷ് മോളി",
        "Coconut Milk Fish Stew",
        "തേങ്ങാപ്പാലിലുള്ള മീൻ കറി"
      ],
      [
        "Chicken 65",
        "ചിക്കൻ 65",
        "Deep Fried Spicy Bite",
        "വറുത്തെടുത്ത മാംസ വിഭവം"
      ],
      [
        "Chammanthi Podi",
        "ചമ്മന്തിപ്പൊടി",
        "Dry Ground Coconut Mix",
        "ഉണക്കത്തേങ്ങ അരച്ചത്"
      ]
    ]
  },
  {
    "id": "bakery",
    "name": "Bakery & Snacks",
    "icon": "🥐",
    "words": [
      [
        "Chaya",
        "ചായ",
        "Popular Hot Drink",
        "ചൂടുള്ള പാനീയം"
      ],
      [
        "Puffs",
        "പഫ്സ്",
        "Layered Bakery Pastry",
        "ബേക്കറിയിലെ ബേക്കഡ് വിഭവം"
      ],
      [
        "Uzhunnu Vada",
        "ഉഴുന്നു വട",
        "Crispy Lentil Fritter",
        "വട്ടത്തിൽ വറുത്തെടുത്ത പലഹാരം"
      ],
      [
        "Mutta Baji",
        "മുട്ട ബജി",
        "Fried Batter Snack",
        "മാവിൽ മുക്കി വറുത്തത്"
      ],
      [
        "Kozhukkatta",
        "കൊഴുക്കട്ട",
        "Steamed Sweet Dumpling",
        "ആവിയിൽ പുഴുങ്ങിയ മധുരം"
      ],
      [
        "Cutlet",
        "കട്ട്ലറ്റ്",
        "Crumbed Spiced Snack",
        "മൊരിഞ്ഞ ബേക്കറി സ്നാക്ക്"
      ],
      [
        "Samosa",
        "സമോസ",
        "Filled Triangular Snack",
        "ത്രികോണ രൂപത്തിലുള്ള പലഹാരം"
      ],
      [
        "Bonda",
        "ബോണ്ട",
        "Round Deep Fried Snack",
        "ഉരുണ്ട വറുത്ത പലഹാരം"
      ],
      [
        "Parippu Vada",
        "പരിപ്പ് വട",
        "Crunchy Lentil Bite",
        "കറുമുറെ കഴിക്കുന്ന വട"
      ],
      [
        "Ela Ada",
        "ഇല അട",
        "Leaf Steamed Sweet",
        "ഇലയിൽ പൊതിഞ്ഞു വേവിച്ചത്"
      ],
      [
        "Achappam",
        "അച്ചപ്പം",
        "Molded Crispy Snack",
        "അച്ചിൽ ചുട്ടെടുക്കുന്ന വിഭവം"
      ],
      [
        "Unniyappam",
        "ഉണ്ണിയപ്പം",
        "Round Sweet Fritter",
        "ഉരുണ്ട മധുര പലഹാരം"
      ],
      [
        "Banana Chips",
        "വാഴക്ക ചിപ്സ്",
        "Crunchy Fried Slices",
        "വറുത്തുപ്പേരി"
      ],
      [
        "Sharkara Upperi",
        "ശർക്കര ഉപ്പേരി",
        "Jaggery Coated Snack",
        "മധുരത്തിൽ പൊതിഞ്ഞ കഷണങ്ങൾ"
      ],
      [
        "Kappa Chips",
        "കപ്പ ചിപ്സ്",
        "Spiced Tuber Crisps",
        "എരിവുള്ള ചിപ്സ്"
      ],
      [
        "Avalose Podi",
        "അവലോസ് പൊടി",
        "Roasted Flour Mix",
        "വറുത്തുണ്ടാക്കുന്ന പൊടി"
      ],
      [
        "Kozhalappam",
        "കൊഴലപ്പം",
        "Crispy Tube Snack",
        "കുഴൽ രൂപത്തിലുള്ള പലഹാരം"
      ],
      [
        "Kinnathappam",
        "കിണ്ണത്തപ്പം",
        "Steamed Sweet Cake",
        "പാത്രത്തിൽ വേവിച്ച മധുരം"
      ],
      [
        "Churuttu",
        "ചുരുട്ട്",
        "Rolled Sweet Pastry",
        "ചുരുട്ടി വെച്ച മധുരപലഹാരം"
      ],
      [
        "Halwa",
        "ഹൽവ",
        "Colorful Sweet Slab",
        "ബേക്കറിയിലെ മധുര വിഭവം"
      ],
      [
        "Sukhiyan",
        "സുഖിയൻ",
        "Sweet Lentil Fritter",
        "മധുരം നിറച്ചു വറുത്ത പലഹാരം"
      ],
      [
        "Bread Pakora",
        "ബ്രെഡ് പക്കോട",
        "Teatime Fried Slice",
        "വൈകുന്നേരത്തെ ചൂടുള്ള പലഹാരം"
      ],
      [
        "Laddoo",
        "ലഡ്ഡു",
        "Round Festive Sweet",
        "ഉരുണ്ട മധുരപലഹാരം"
      ],
      [
        "Jalebi",
        "ജിലേബി",
        "Syrup Coated Crispy Sweet",
        "മധുരപാനീയത്തിൽ മുക്കിയ വിഭവം"
      ],
      [
        "Meat Roll",
        "മീറ്റ് റോൾ",
        "Spiced Bakery Pastry",
        "ബേക്കറിയിലെ എരിവുള്ള സ്നാക്ക്"
      ],
      [
        "Boli",
        "ബോളി",
        "Yellow Gram Flatbread",
        "മഞ്ഞ നിറമുള്ള മധുരപ്പൊടി"
      ],
      [
        "Chatti Pathiri",
        "ചട്ടി പത്തിരി",
        "Layered Pastry Cake",
        "അടുക്കുകളായുള്ള പലഹാരം"
      ],
      [
        "Vettu Cake",
        "വെട്ട് കേക്ക്",
        "Cross Cut Dough Ball",
        "കുറുകെ വരഞ്ഞ പലഹാരം"
      ],
      [
        "Pakkavada",
        "പക്കവട",
        "Spiced Ribbon Crisps",
        "എരിവുള്ള നാടൻ സ്നാക്ക്"
      ],
      [
        "Kayyappam",
        "കയ്യപ്പം",
        "Banana Fritter Ball",
        "പഴം ചേർത്ത ഉണ്ടപ്പലഹാരം"
      ],
      [
        "Ilayappam",
        "ഇലയപ്പം",
        "Leaf Wrapped Dumpling",
        "ഇലയിൽ പൊതിഞ്ഞത്"
      ],
      [
        "Mothagam",
        "മോദകം",
        "Sweet Filled Steamed Ball",
        "മധുരം നിറച്ച കൊഴുക്കട്ട"
      ],
      [
        "Mutta Puff",
        "മുട്ട പഫ്",
        "Layered Egg Pastry",
        "അടുക്കുകളുള്ള ബേക്കറി വിഭവം"
      ],
      [
        "Cream Bun",
        "ക്രീം ബൺ",
        "Sweet Filled Bread",
        "മധുരം തേച്ച റൊട്ടി"
      ],
      [
        "Mixture",
        "മിക്സ്ചർ",
        "Assorted Savory Crunch",
        "പലതരം വറുത്തവയുടെ മിശ്രിതം"
      ],
      [
        "Pahadi Halwa",
        "കോഴിക്കോടൻ ഹൽവ",
        "Black Sweet Slice",
        "കറുത്ത മധുര വിഭവം"
      ]
    ]
  },
  {
    "id": "home",
    "name": "Household Items",
    "icon": "🏠",
    "words": [
      [
        "Nilavilakku",
        "നിലവിളക്ക്",
        "Traditional Lighting",
        "വീട്ടിലെ പരമ്പരാഗത വിളക്ക്"
      ],
      [
        "Thorthu",
        "തോർത്തു",
        "Daily Cotton Cloth",
        "നിത്യസഹായ വസ്ത്രം"
      ],
      [
        "Muram",
        "മുറം",
        "Woven Bamboo Craft",
        "മുള കൊണ്ടുള്ള ഉപകരണം"
      ],
      [
        "Chattukam",
        "ചട്ടുകം",
        "Kitchen Stirring Utensil",
        "പാചകം ചെയ്യാൻ ഉപയോഗിക്കുന്നത്"
      ],
      [
        "Mundum Neriyathum",
        "മുണ്ടും നേരിയതും",
        "Traditional Attire",
        "പരമ്പരാഗത വസ്ത്രധാരണം"
      ],
      [
        "Uruli",
        "ഉരുളി",
        "Heavy Cookware",
        "വലിയ ഓട്ടുപാത്രം"
      ],
      [
        "Para",
        "പറ",
        "Traditional Measuring Unit",
        "പഴയകാല അളവുപാത്രം"
      ],
      [
        "Kudam",
        "കുടം",
        "Water Storage Vessel",
        "വെള്ളം സൂക്ഷിക്കുന്ന പാത്രം"
      ],
      [
        "Chembu",
        "ചെമ്പ്",
        "Large Metal Boiler",
        "വലിയ പാചക പാത്രം"
      ],
      [
        "Ammikallu",
        "അമ്മിക്കല്ല്",
        "Stone Grinding Tool",
        "അരയ്ക്കാൻ ഉപയോഗിക്കുന്ന കല്ല്"
      ],
      [
        "Arakkallu",
        "അരക്കല്ല്",
        "Traditional Stone Grinder",
        "ചമ്മന്തി അരയ്ക്കുന്ന ഉപകരണം"
      ],
      [
        "Aattukallu",
        "ആട്ടുകല്ല്",
        "Heavy Grinding Stone",
        "മാവടിക്കാനുള്ള കല്ല്"
      ],
      [
        "Kindi",
        "കിണ്ടി",
        "Spouted Metal Vessel",
        "പൂജയ്ക്കും മറ്റും ഉപയോഗിക്കുന്ന പാത്രം"
      ],
      [
        "Thookkuvilakku",
        "തൂക്കുവിളക്ക്",
        "Hanging Metal Lamp",
        "തൂക്കിയിടുന്ന വിളക്ക്"
      ],
      [
        "Mundu",
        "മുണ്ട്",
        "Traditional Bottom Wear",
        "പരമ്പരാഗത പുരുഷ വസ്ത്രം"
      ],
      [
        "Kasavu Saree",
        "കസവ് സാരി",
        "Golden Border Saree",
        "സ്വർണ്ണക്കരയുള്ള വസ്ത്രം"
      ],
      [
        "Chirava",
        "ചിരവ",
        "Kitchen Grating Tool",
        "അടുക്കളയിലെ ഇരിപ്പിടം"
      ],
      [
        "Paathram",
        "പാത്രം",
        "General Utensil",
        "അടുക്കളയിലെ പാത്രം"
      ],
      [
        "Puttu Kutti",
        "പുട്ടുകുറ്റി",
        "Steaming Cylinder Tool",
        "ആവിയിൽ വേവിക്കുന്ന കുറ്റി"
      ],
      [
        "Vaal Kannadi",
        "വാൽക്കണ്ണാടി",
        "Handheld Brass Mirror",
        "വിഷുക്കണിയിലെ കണ്ണാടി"
      ],
      [
        "Kalam",
        "കലം",
        "Clay Cooking Pot",
        "മൺപാത്രം"
      ],
      [
        "Cheenachatti",
        "ചീനച്ചട്ടി",
        "Deep Frying Pan",
        "വറുക്കാൻ ഉപയോഗിക്കുന്ന പാത്രം"
      ],
      [
        "Kettle",
        "കെറ്റിൽ",
        "Water Boiling Pot",
        "വെള്ളം തിളപ്പിക്കുന്ന ഉപകരണം"
      ],
      [
        "Bharani",
        "ഭരണി",
        "Ceramic Pickle Jar",
        "അച്ചാർ സൂക്ഷിക്കുന്ന ഭരണി"
      ],
      [
        "Kattil",
        "കട്ടിൽ",
        "Bedroom Wooden Furniture",
        "കിടക്കാൻ ഉപയോഗിക്കുന്നത്"
      ],
      [
        "Oonjal",
        "ഊഞ്ഞാൽ",
        "Hanging Porch Seat",
        "മുറ്റത്തോ വരാന്തയിലോ കെട്ടുന്നത്"
      ],
      [
        "Chattuvam",
        "ചട്ടുക്ക",
        "Flat Stirring Spatula",
        "ഇളക്കാനുള്ള ഉപകരണം"
      ],
      [
        "Paya",
        "പായ",
        "Woven Grass Mat",
        "പുല്ലുകൊണ്ട് മെടഞ്ഞത്"
      ],
      [
        "Thiri",
        "തിരി",
        "Cotton Lamp Wick",
        "വിളക്കിലിടുന്ന പരുത്തി"
      ],
      [
        "Kindu Brass",
        "ഓട്ടുപാത്രം",
        "Metal Plate Vessel",
        "ലോഹ പാത്രം"
      ],
      [
        "Alavu Para",
        "അളവുപാത്രം",
        "Grain Measure Vessel",
        "ധാന്യങ്ങൾ അളക്കുന്നത്"
      ],
      [
        "Kindu Vessel",
        "വാൽക്കിണ്ടി",
        "Water Pouring Vessel",
        "വെള്ളം ഒഴിക്കുന്ന പാത്രം"
      ],
      [
        "Chappathi Kallu",
        "ചപ്പാത്തി കല്ല്",
        "Rolling Pin Base",
        "മാവു പരത്തുന്ന ഉപകരണം"
      ],
      [
        "Arippa",
        "അരിപ്പ",
        "Tea Strainer Mesh",
        "അരിച്ചെടുക്കാൻ ഉപയോഗിക്കുന്നത്"
      ],
      [
        "Choottu",
        "ചൂട്ട്",
        "Dry Palm Torch",
        "രാത്രി വെളിച്ചം തരുന്ന ഓല"
      ],
      [
        "Madaal",
        "മടൽ",
        "Palm Frond Base",
        "തെങ്ങിന്റെ ഭാഗം"
      ]
    ]
  },
  {
    "id": "people",
    "name": "People",
    "icon": "👥",
    "words": [
      [
        "Mohanlal",
        "മോഹൻലാൽ",
        "Acting Legend",
        "മലയാള സിനിമയിലെ പ്രമുഖൻ"
      ],
      [
        "Mammootty",
        "മമ്മൂട്ടി",
        "Veteran Star",
        "പ്രശസ്തനായ മുതിർന്ന നടൻ"
      ],
      [
        "Manju Warrier",
        "മഞ്ജു വാര്യർ",
        "Lead Actress",
        "പ്രശസ്തയായ നായിക"
      ],
      [
        "Fahadh Faasil",
        "ഫഹദ് ഫാസിൽ",
        "Versatile Performer",
        "വ്യത്യസ്ത കഥാപാത്രങ്ങൾ ചെയ്യുന്ന നടൻ"
      ],
      [
        "Shobana",
        "ശോഭന",
        "Dancer Star",
        "നർത്തകിയായ പ്രശസ്ത നായിക"
      ],
      [
        "Dileep",
        "ദിലീപ്",
        "Popular Entertainer",
        "ജനപ്രിയ നായകൻ"
      ],
      [
        "Suresh Gopi",
        "സുരേഷ് ഗോപി",
        "Action Dialogue Star",
        "ആക്ഷൻ ഡയലോഗ് താരം"
      ],
      [
        "Prithviraj",
        "പൃഥ്വിരാജ്",
        "Modern Cinema Lead",
        "പ്രമുഖ യുവനായകൻ"
      ],
      [
        "Tovino Thomas",
        "ടൊവിനോ തോമസ്",
        "Youth Action Star",
        "ആവേശമുയർത്തുന്ന നായകൻ"
      ],
      [
        "Nivin Pauly",
        "നിവിൻ പോളി",
        "Romantic Comedy Lead",
        "റൊമാന്റിക് ഹീറോ"
      ],
      [
        "Kunchacko Boban",
        "കുഞ്ചാക്കോ ബോബൻ",
        "Family Favorite Hero",
        "കുടുംബ ചിത്രങ്ങളിലെ നായകൻ"
      ],
      [
        "Jayaram",
        "ജയറാം",
        "Family Entertainer",
        "കുടുംബ പ്രേക്ഷകരുടെ താരം"
      ],
      [
        "Jayasurya",
        "ജയസൂര്യ",
        "Character Actor",
        "വൈവിധ്യമുള്ള കഥാപാത്രങ്ങൾ ചെയ്യുന്ന നടൻ"
      ],
      [
        "Parvathy Thiruvothu",
        "പാർവതി തിരുവോത്ത്",
        "Award Winning Actress",
        "ശക്തമായ കഥാപാത്രങ്ങൾ ചെയ്യുന്ന നായിക"
      ],
      [
        "Nazriya Nazim",
        "നസ്രിയ നസീം",
        "Charming Lead",
        "പ്രേക്ഷകരുടെ പ്രിയ നായിക"
      ],
      [
        "Anaswara Rajan",
        "അനശ്വര രാജൻ",
        "Young Generation Star",
        "പുതിയ തലമുറയിലെ നായിക"
      ],
      [
        "Aishwarya Lekshmi",
        "ഐശ്വര്യ ലക്ഷ്മി",
        "Popular Lead Actress",
        "പ്രശസ്ത നായിക"
      ],
      [
        "Asif Ali",
        "ആസിഫ് അലി",
        "Relatable Youth Lead",
        "യുവാക്കളുടെ പ്രിയ താരം"
      ],
      [
        "Basil Joseph",
        "ബേസിൽ ജോസഫ്",
        "Director & Actor",
        "സംവിധായകനും നടനും"
      ],
      [
        "Vineeth Sreenivasan",
        "വിനീത് ശ്രീനിവാസൻ",
        "Multi Talented Artist",
        "പാട്ടുകാരനും സംവിധായകനും നടനും"
      ],
      [
        "Dulquer Salmaan",
        "ദുൽഖർ സൽമാൻ",
        "Youth Icon Star",
        "പുതിയ തലമുറയിലെ പ്രമുഖ നായകൻ"
      ],
      [
        "Suraj Venjaramoodu",
        "സുരാജ് വെഞ്ഞാറമൂട്",
        "Comedy & Drama Legend",
        "ചിരിപ്പിക്കുകയും കരയിക്കുകയും ചെയ്യുന്ന നടൻ"
      ],
      [
        "Jagathy Sreekumar",
        "ജഗതി ശ്രീകുമാർ",
        "Evergreen Comedy Emperor",
        "മലയാളിയുടെ എക്കാലത്തെയും പ്രിയ ഹാസ്യനടൻ"
      ],
      [
        "Innocent",
        "ഇന്നസെന്റ്",
        "Beloved Character Star",
        "തമാശയും സ്നേഹവുമുള്ള നടൻ"
      ],
      [
        "Soubin Shahir",
        "സൗബിൻ ഷാഹിർ",
        "Natural Acting Talent",
        "സ്വാഭാവിക അഭിനയ ശൈലിയുള്ള നടൻ"
      ],
      [
        "Kalyani Priyadarshan",
        "കല്യാണി പ്രിയദർശൻ",
        "Modern Youth Actress",
        "യുവനിരയിലെ ശ്രദ്ധേയയായ നായിക"
      ],
      [
        "K. J. Yesudas",
        "കെ. ജെ. യേശുദാസ്",
        "Classical Concert Vocalist",
        "കർണ്ണാട്ടിക് സംഗീതജ്ഞൻ"
      ],
      [
        "K. S. Chithra",
        "കെ. എസ്. ചിത്ര",
        "Melody Pioneer",
        "ഗാനരംഗത്തെ പ്രമുഖ"
      ],
      [
        "Sanju Samson",
        "സഞ്ജു സാംസൺ",
        "Wicketkeeper Athlete",
        "വിക്കറ്റ് കാക്കുന്ന കായികതാരം"
      ],
      [
        "Shashi Tharoor",
        "ശശി തരൂർ",
        "English Lexicon Author",
        "ഇംഗ്ലീഷ് പദപ്രയോഗങ്ങൾ അറിയുന്നയാൾ"
      ],
      [
        "Sreenivasan",
        "ശ്രീനിവാസൻ",
        "Satirical Screenwriter",
        "ആക്ഷേപഹാസ്യ എഴുത്തുകാരൻ"
      ],
      [
        "Salim Kumar",
        "സലിം കുമാർ",
        "National Award Comedian",
        "അംഗീകാരം നേടിയ ഹാസ്യനടൻ"
      ],
      [
        "Urveshi",
        "ഉർവ്വശി",
        "Brilliant Character Lead",
        "ശക്തമായ അഭിനയമികവുള്ള നായിക"
      ],
      [
        "Mukesh",
        "മുകേഷ്",
        "Witty Dialogue Lead",
        "സംഭാഷണങ്ങളിൽ തമാശയുള്ള നടൻ"
      ],
      [
        "Biju Menon",
        "ബിജു മേനോൻ",
        "Deep Voice Actor",
        "ഗംഭീര ശബ്ദമുള്ള താരം"
      ],
      [
        "Pepe Antony",
        "ആന്റണി വർഗ്ഗീസ്",
        "Angamaly Action Lead",
        "ആക്ഷൻ രംഗങ്ങളിലെ നായകൻ"
      ]
    ]
  },
  {
    "id": "life",
    "name": "Kerala Life",
    "icon": "🌴",
    "words": [
      [
        "Chaya Kada",
        "ചായക്കട",
        "Local Gathering Spot",
        "നാട്ടിൻപുറത്തെ കൂടിച്ചേരൽ സ്ഥലം"
      ],
      [
        "Kallu Shappu",
        "കള്ള് ഷാപ്പ്",
        "Rustic Food Junction",
        "എരിവുള്ള നാടൻ വിഭവങ്ങൾ കിട്ടുന്ന സ്ഥലം"
      ],
      [
        "KSRTC",
        "കെ എസ് ആർ ടി സി",
        "Public Transportation",
        "സർക്കാർ യാത്രാ സർവീസ്"
      ],
      [
        "Auto Rickshaw",
        "ഓട്ടോ റിക്ഷ",
        "Three Wheeler Transit",
        "മൂന്നു ചക്ര യാത്രാ വണ്ടി"
      ],
      [
        "Tharavadu",
        "തറവാട്",
        "Ancestral Home",
        "പഴയകാല കുടുംബ വീട്"
      ],
      [
        "Panchayath",
        "പഞ്ചായത്ത്",
        "Local Administration",
        "നാട്ടിൻപുറത്തെ ഭരണകൂടം"
      ],
      [
        "Kudumbashree",
        "കുടുംബശ്രീ",
        "Women Self-help Group",
        "വനിതകളുടെ കൂട്ടായ്മ"
      ],
      [
        "Anganwadi",
        "അങ്കണവാടി",
        "Village Child Center",
        "കുട്ടികളുടെ പരിപാലന കേന്ദ്രം"
      ],
      [
        "Rubber Thottam",
        "റബ്ബർ തോട്ടം",
        "Agricultural Estate",
        "പാൽ എടുക്കുന്ന തോട്ടം"
      ],
      [
        "Tea Estate",
        "തേയിലത്തോട്ടം",
        "Hill Plantation",
        "മലയോരത്തെ പച്ചപ്പ്"
      ],
      [
        "Thengu",
        "തെങ്ങ്",
        "Signature Tropical Tree",
        "കേരളത്തിന്റെ കൽപവൃക്ഷം"
      ],
      [
        "Kuttanadan Padanilam",
        "കുട്ടനാടൻ പാടനിലം",
        "Vast Agricultural Fields",
        "വിശാലമായ കാർഷിക നിലം"
      ],
      [
        "Puzha",
        "പുഴ",
        "Flowing River",
        "ഒഴുകുന്ന ജലാശയം"
      ],
      [
        "Kaithari",
        "കൈത്തറി",
        "Handloom Weaving",
        "പരമ്പരാഗത വസ്ത്ര നിർമ്മാണം"
      ],
      [
        "Mazha",
        "മഴ",
        "Monsoon Weather",
        "പ്രകൃതിയിലെ കാലാവസ്ഥ"
      ],
      [
        "Tharavad",
        "തറവാട്",
        "Heritage Family Mansion",
        "പൈതൃകമുള്ള വലിയ വീട്"
      ],
      [
        "Naadan Pattu",
        "നാടൻ പാട്ട്",
        "Folk Musical Tradition",
        "നാട്ടിൻപുറത്തെ പാട്ടുകൾ"
      ],
      [
        "Kavala",
        "കവല",
        "Village Junction",
        "ആളുകൾ കൂടുന്ന കവല"
      ],
      [
        "Palli",
        "പള്ളി",
        "Place of Worship",
        "ആരാധനാലയം"
      ],
      [
        "Ambalam",
        "അമ്പലം",
        "Sacred Temple",
        "ദൈവികമായ സ്ഥലം"
      ],
      [
        "Lottery Ticket",
        "ലോട്ടറി ടിക്കറ്റ്",
        "Luck and Fortune Hope",
        "ഭാഗ്യപരീക്ഷണം"
      ],
      [
        "Hartal",
        "ഹർത്താൽ",
        "Public Shutdown Day",
        "കടകളും വണ്ടികളും അടങ്ങുന്ന ദിവസം"
      ],
      [
        "Vayanasala",
        "വായനശാല",
        "Village Library & Reading Room",
        "പുസ്തകങ്ങളും പത്രങ്ങളും വായിക്കുന്ന ഇടം"
      ],
      [
        "Chitty",
        "ചിട്ടി",
        "Monthly Savings Scheme",
        "നാട്ടിൻപുറത്തെ സാമ്പത്തിക ഇടപാട്"
      ],
      [
        "Kavukal",
        "കാവ്",
        "Sacred Forest Grove",
        "പ്രകൃതിയും വിശ്വാസവും ചേർന്ന സ്ഥലം"
      ],
      [
        "Kulam",
        "കുളം",
        "Village Bathing Pond",
        "നാട്ടിൻപുറത്തെ ജലാശയം"
      ],
      [
        "Milma",
        "മിൽമ",
        "Blue Packet Dairy",
        "നീല കവറിലുള്ള ഉൽപ്പന്നം"
      ],
      [
        "Bevco",
        "ബെവ്കോ",
        "Evening Queue Outlet",
        "വൈകുന്നേരത്തെ വരി"
      ],
      [
        "Akshaya Centre",
        "അക്ഷയ കേന്ദ്രം",
        "Digital Certificate Counter",
        "രേഖകൾ ശരിയാക്കുന്ന സ്ഥലം"
      ],
      [
        "Supplyco",
        "സപ്ലൈകോ",
        "Subsidized Ration Depot",
        "സബ്സിഡി സാധനങ്ങൾ കിട്ടുന്നിടം"
      ],
      [
        "Vidyabhyasa Loan",
        "വിദ്യാഭ്യാസ വായ്പ",
        "College Tuition Funding",
        "പഠനത്തിനുള്ള ധനസഹായം"
      ],
      [
        "Ration Kada",
        "റേഷൻ കട",
        "Essential Supply Store",
        "നിത്യോപയോഗ സാധന വിതരണം"
      ],
      [
        "Mahatma Gandhi NREGA",
        "തൊഴിലുറപ്പ്",
        "Village Morning Assembly",
        "ഗ്രാമീണ തൊഴിൽ പദ്ധതി"
      ],
      [
        "Current Bill",
        "കറന്റ് ബിൽ",
        "Monthly Electricity Meter",
        "വൈദ്യുതി ഉപയോഗ രേഖ"
      ],
      [
        "KSEB",
        "കെഎസ്ഇബി",
        "Power Board Authority",
        "വൈദ്യുതി വകുപ്പ്"
      ],
      [
        "Water Authority",
        "വാട്ടർ അതോറിറ്റി",
        "Pipe Supply Network",
        "കുടിവെള്ള വിതരണം"
      ]
    ]
  },
  {
    "id": "vehicles",
    "name": "Vehicles",
    "icon": "🚌",
    "words": [
      [
        "Aanavandi",
        "ആനവണ്ടി",
        "State Transport Ride",
        "സർക്കാറിന്റെ പ്രിയ വണ്ടി"
      ],
      [
        "Vallam",
        "വള്ളം",
        "Traditional Boat",
        "കായലിലൂടെ സഞ്ചരിക്കുന്നത്"
      ],
      [
        "Autorickshaw",
        "ഓട്ടോറിക്ഷ",
        "Three Wheeler Taxi",
        "നഗരങ്ങളിലെ വാടക വണ്ടി"
      ],
      [
        "Bullet",
        "ബുള്ളറ്റ്",
        "Classic Motorcycle",
        "ഗംഭീര ശബ്ദമുള്ള ഇരുചക്ര വാഹനം"
      ],
      [
        "Houseboat",
        "ഹൗസ്‌ബോട്ട്",
        "Backwater Stay Vessel",
        "കായലിൽ താമസിക്കാവുന്ന ബോട്ട്"
      ],
      [
        "Jankar",
        "ജങ്കാർ",
        "Waterway Ferry Craft",
        "വാഹനങ്ങൾ കടത്തുന്ന ബോട്ട്"
      ],
      [
        "Ferry",
        "ഫെറി",
        "Public Boat Transit",
        "ജലമാർഗ്ഗമുള്ള യാത്രാ ബോട്ട്"
      ],
      [
        "Chundan Vallam",
        "ചുണ്ടൻ വള്ളം",
        "Long Racing Craft",
        "മത്സരത്തിന് ഉപയോഗിക്കുന്ന നീളമുള്ള വള്ളം"
      ],
      [
        "Kettuvallam",
        "കെട്ടുവള്ളം",
        "Traditional Houseboat",
        "പരമ്പരാഗത വലിയ തോണി"
      ],
      [
        "Pickup",
        "പിക്കപ്പ്",
        "Goods Transport Vehicle",
        "ചരക്കുകൾ കൊണ്ടുപോകുന്ന വണ്ടി"
      ],
      [
        "Jeep",
        "ജീപ്പ്",
        "Hill Station Off-roader",
        "മലയോരങ്ങളിൽ ഉപയോഗിക്കുന്ന വാഹനം"
      ],
      [
        "Lorry",
        "ലോറി",
        "Heavy Cargo Truck",
        "വലിയ ചരക്ക് വാഹനം"
      ],
      [
        "Private Bus",
        "പ്രൈവറ്റ് ബസ്",
        "Speedy Passenger Bus",
        "വേഗതയിലോടുന്ന സ്വകാര്യ ബസ്"
      ],
      [
        "Tempo Traveller",
        "ടെമ്പോ ട്രാവലർ",
        "Group Tour Van",
        "സംഘങ്ങളായി യാത്ര ചെയ്യുന്ന വാഹനം"
      ],
      [
        "Scooter",
        "സ്കൂട്ടർ",
        "Two-wheeler Ride",
        "നിത്യയാത്രയ്ക്ക് ഉപയോഗിക്കുന്ന വാഹനം"
      ],
      [
        "Cycle",
        "സൈക്കിൾ",
        "Pedal Powered Transport",
        "ചവിട്ടി ഓടിക്കുന്ന വാഹനം"
      ],
      [
        "Mini Bus",
        "മിനി ബസ്",
        "Compact Route Bus",
        "ചെറിയ യാത്രാ ബസ്"
      ],
      [
        "Taxi",
        "ടാക്സി",
        "Hired Passenger Cab",
        "വാടകയ്ക്ക് വിളിക്കുന്ന കാർ"
      ],
      [
        "Train",
        "ട്രെയിൻ",
        "Railway Transport",
        "തീവണ്ടി യാത്ര"
      ],
      [
        "School Bus",
        "സ്കൂൾ ബസ്",
        "Student Transport",
        "കുട്ടികളെ കൊണ്ടുപോകുന്ന വാഹനം"
      ],
      [
        "Jik Jik Train",
        "തീവണ്ടി",
        "Long Distance Rail Journey",
        "പാളത്തിലൂടെ ഓടുന്നത്"
      ],
      [
        "Ambulance",
        "ആംബുലൻസ്",
        "Emergency Medical Vehicle",
        "അടിയന്തര ആവശ്യത്തിന് ഓടുന്നത്"
      ],
      [
        "Kochi Metro",
        "കൊച്ചി മെട്രോ",
        "Modern Urban Rail",
        "നഗരത്തിലെ വേഗതയേറിയ യാത്ര"
      ],
      [
        "Tractor",
        "ട്രാക്ടർ",
        "Farm Field Vehicle",
        "കാർഷിക ആവശ്യത്തിന് ഉപയോഗിക്കുന്നത്"
      ],
      [
        "Excavator",
        "ജെസിബി",
        "Heavy Earth Mover",
        "നിർമ്മാണ പ്രവർത്തനങ്ങൾക്ക് ഉപയോഗിക്കുന്നത്"
      ],
      [
        "Speed Boat",
        "സ്പീഡ് ബോട്ട്",
        "Fast Watercraft Ride",
        "കായലിലൂടെ വേഗത്തിൽ കുതിക്കുന്നത്"
      ],
      [
        "Peti Auto",
        "പെട്ടി ഓട്ടോ",
        "Small Cargo Carrier",
        "സാധനങ്ങൾ കൊണ്ടുപോകുന്നത്"
      ],
      [
        "Ambassador",
        "അംബാസഡർ",
        "Classic White Sedan",
        "പഴയകാല സർക്കാർ വാഹനം"
      ],
      [
        "Mahindra Jeep",
        "മഹീന്ദ്ര ജീപ്പ്",
        "Hill Track Vehicle",
        "മലയോരങ്ങളിൽ ഓടുന്നത്"
      ],
      [
        "Chavittu Vandi",
        "ചവിട്ടുവണ്ടി",
        "Pedal Powered Transport",
        "ചവിട്ടി ഓടിക്കുന്നത്"
      ],
      [
        "RX 100",
        "ആർ എക്സ് 100",
        "Two Stroke Bike",
        "പഴയകാല സ്പീഡ് ബൈക്ക്"
      ],
      [
        "Torrus Truck",
        "ടോറസ്",
        "Heavy Rock Carrier",
        "വലിയ കല്ലുകൾ കൊണ്ടുപോകുന്നത്"
      ],
      [
        "Fire Engine",
        "ഫയർ ഫോഴ്സ്",
        "Red Emergency Tanker",
        "രക്ഷാപ്രവർത്തന വാഹനം"
      ],
      [
        "Water Metro",
        "വാട്ടർ മെട്രോ",
        "Modern Electric Ferry",
        "നൂതന ജലയാത്രാ സൗകര്യം"
      ],
      [
        "Low Floor Bus",
        "ലോ ഫ്ലോർ ബസ്",
        "AC City Transit",
        "നഗരത്തിലെ എസി യാത്രാ വണ്ടി"
      ],
      [
        "Tourist Bus",
        "ടൂറിസ്റ്റ് ബസ്",
        "Music & Light Coach",
        "പാട്ടും ലൈറ്റുമുള്ള യാത്രാ വണ്ടി"
      ]
    ]
  },
  {
    "id": "school",
    "name": "College & School",
    "icon": "🎒",
    "words": [
      [
        "Kalolsavam",
        "കലോത്സവം",
        "Arts Competition",
        "വിദ്യാർത്ഥികളുടെ കലാമേള"
      ],
      [
        "Arts Day",
        "ആർട്സ് ഡേ",
        "Campus Cultural Stage",
        "ക്യാമ്പസിലെ ആഘോഷ വേദി"
      ],
      [
        "College Canteen",
        "കോളേജ് കാന്റീൻ",
        "Student Food Hangout",
        "വിദ്യാർത്ഥികൾ ഭക്ഷണം കഴിക്കുന്ന സ്ഥലം"
      ],
      [
        "PTA Meeting",
        "പി ടി എ മീറ്റിംഗ്",
        "Parents & Teachers Meet",
        "രക്ഷാകർത്താക്കളുടെയും അധ്യാപകരുടെയും യോഗം"
      ],
      [
        "Onam Celebration",
        "ഓണാഘോഷം",
        "Campus Festival Day",
        "ക്യാമ്പസിലെ വിശേഷ ആഘോഷം"
      ],
      [
        "Uniform",
        "യൂണിഫോം",
        "Institutional Attire",
        "എല്ലാവരും ധരിക്കുന്ന ഒരേപോലത്തെ വസ്ത്രം"
      ],
      [
        "School Bus",
        "സ്കൂൾ ബസ്",
        "Student Transit Vehicle",
        "വിദ്യാർത്ഥികളുടെ യാത്രാ വാഹനം"
      ],
      [
        "PT Period",
        "പി ടി പിരീഡ്",
        "Sports and Games Hour",
        "കളിക്കാനായി കിട്ടുന്ന സമയം"
      ],
      [
        "Annual Day",
        "ആനുവൽ ഡേ",
        "Yearly School Function",
        "വാർഷിക കലാപരിപാടി"
      ],
      [
        "Exam Hall",
        "എക്സാം ഹാൾ",
        "Silent Test Classroom",
        "നിശബ്ദമായി പരീക്ഷ എഴുതുന്ന ഇടം"
      ],
      [
        "Rank List",
        "റാങ്ക് ലിസ്റ്റ്",
        "Merit Score Results",
        "വിജയികളുടെ വിവരങ്ങൾ"
      ],
      [
        "College Union",
        "കോളേജ് യൂണിയൻ",
        "Student Council Group",
        "വിദ്യാർത്ഥികളുടെ പ്രതിനിധി സഭ"
      ],
      [
        "Batch",
        "ബാച്ച്",
        "Classmates Year Group",
        "ഒന്നിച്ചു പഠിച്ച കൂട്ടുകാർ"
      ],
      [
        "Farewell",
        "ഫെയർവെൽ",
        "Graduation Send-off",
        "പഠനം കഴിഞ്ഞ് പിരിയുന്ന ദിവസം"
      ],
      [
        "NSS",
        "എൻ എസ് എസ്",
        "Social Service Camp",
        "സാമൂഹിക സേവന കൂട്ടായ്മ"
      ],
      [
        "NCC",
        "എൻ സി സി",
        "Cadet Corps Training",
        "ശിക്ഷണവും പരേഡുമുള്ള സേന"
      ],
      [
        "Laboratory",
        "ലബോറട്ടറി",
        "Practical Experiment Room",
        "പരീക്ഷണങ്ങൾ ചെയ്യുന്ന മുറി"
      ],
      [
        "Library",
        "ലൈബ്രറി",
        "Quiet Book Room",
        "പുസ്തകങ്ങൾ സൂക്ഷിക്കുന്ന മുറി"
      ],
      [
        "Hostel",
        "ഹോസ്റ്റൽ",
        "Student Living Quarters",
        "വിദ്യാർത്ഥികൾ താമസിക്കുന്ന ഹോസ്റ്റൽ മുറി"
      ],
      [
        "Class Leader",
        "ക്ലാസ് ലീഡർ",
        "Student Representative",
        "ക്ലാസ് നിയന്ത്രിക്കുന്ന വിദ്യാർത്ഥി"
      ],
      [
        "Tour Trip",
        "ഐവി / ടൂർ",
        "Group Student Excursion",
        "കൂട്ടുകാരോടൊത്തുള്ള യാത്ര"
      ],
      [
        "Bench and Desk",
        "ബെഞ്ചും ഡെസ്കും",
        "Classroom Wooden Seating",
        "ക്ലാസ് മുറിയിലെ ഇരിപ്പിടം"
      ],
      [
        "Bell",
        "സ്കൂൾ ബെൽ",
        "Period Change Sound",
        "സമയമാറ്റം അറിയിക്കുന്നത്"
      ],
      [
        "Principal",
        "പ്രിൻസിപ്പൽ",
        "Head of Institution",
        "സ്ഥാപനത്തിന്റെ പ്രധാന ചുമതലക്കാരൻ"
      ],
      [
        "Assignment",
        "അസൈൻമെന്റ്",
        "Written Homework Task",
        "എഴുതി സമർപ്പിക്കേണ്ട ജോലി"
      ],
      [
        "Alumni Meet",
        "പൂർവ്വവിദ്യാർത്ഥി സംഗമം",
        "Old Classmates Reunion",
        "പഴയ കൂട്ടുകാരുടെ ഒത്തുചേരൽ"
      ],
      [
        "IV (Industrial Visit)",
        "ഐവി",
        "Final Year Tour",
        "അവസാന വർഷ യാത്ര"
      ],
      [
        "Tuition Class",
        "ട്യൂഷൻ ക്ലാസ്",
        "Evening Study Batch",
        "വൈകുന്നേരത്തെ പഠനം"
      ],
      [
        "Canara Bank Challan",
        "ചെല്ലാൻ",
        "Fee Payment Slip",
        "ഫീസ് അടക്കാനുള്ള രേഖ"
      ],
      [
        "Record Book",
        "റെക്കോർഡ് ബുക്ക്",
        "Lab Diagram Manual",
        "ലാബ് വരകളുള്ള പുസ്തകം"
      ],
      [
        "Study Leave",
        "സ്റ്റഡി ലീവ്",
        "Pre-Exam Preparation",
        "പരീക്ഷാ മുന്നൊരുക്കം"
      ],
      [
        "Youth Festival",
        "യുവജനോത്സവം",
        "Inter-College Competition",
        "കലാമത്സരങ്ങൾ"
      ],
      [
        "Progress Report",
        "പ്രോഗ്രസ് റിപ്പോർട്ട്",
        "Term Mark Evaluation",
        "മാർക്ക് വിവരങ്ങളുള്ള രേഖ"
      ],
      [
        "Geometry Box",
        "ജോമട്രി ബോക്സ്",
        "Compass & Ruler Case",
        "വരയ്ക്കാൻ ഉപയോഗിക്കുന്ന പെട്ടി"
      ],
      [
        "Slate and Pencil",
        "സ്ലേറ്റും പെൻസിലും",
        "Childhood Writing Tool",
        "ആദ്യകാല പഠന ഉപകരണം"
      ],
      [
        "School Bag",
        "സ്കൂൾ ബാഗ്",
        "Books Shoulder Carrier",
        "പുസ്തകങ്ങൾ കൊണ്ടുപോകുന്നത്"
      ]
    ]
  },
  {
    "id": "sports",
    "name": "Sports",
    "icon": "⚽",
    "words": [
      [
        "Football",
        "ഫുട്ബോൾ",
        "Popular Ground Game",
        "മൈതാനത്ത് കളിക്കുന്ന കളി"
      ],
      [
        "Cricket",
        "ക്രിക്കറ്റ്",
        "Batting & Bowling Game",
        "റൺസ് നേടുന്ന മത്സരം"
      ],
      [
        "Kabaddi",
        "കബഡി",
        "Team Tag Sport",
        "ശ്വാസം പിടിച്ചു കളിക്കുന്ന മത്സരം"
      ],
      [
        "Volleyball",
        "വോളിബോൾ",
        "High Net Ball Game",
        "നെറ്റിന് മുകളിലൂടെയുള്ള കളി"
      ],
      [
        "Vallamkali",
        "വള്ളംകളി",
        "Water Racing Sport",
        "ജലത്തിലെ ആവേശ മത്സരം"
      ],
      [
        "Tug of War",
        "വടംവലി",
        "Team Rope Pulling",
        "കയർ വലിക്കുന്ന മത്സരം"
      ],
      [
        "Sevens Football",
        "സെവൻസ് ഫുട്ബോൾ",
        "Local 7-a-side Tournament",
        "ചെറിയ മൈതാനത്തെ ആവേശ മത്സരം"
      ],
      [
        "Kho Kho",
        "ഖോ ഖോ",
        "Sit & Chase Court Game",
        "ഇരുന്നും ഓടിയും കളിക്കുന്നത്"
      ],
      [
        "Badminton",
        "ബാഡ്മിന്റൺ",
        "Racket Court Sport",
        "റാക്കറ്റും ഷട്ടിലും ഉപയോഗിക്കുന്ന കളി"
      ],
      [
        "Swimming",
        "നീന്തൽ",
        "Water Pool Racing",
        "വെള്ളത്തിലെ മത്സരം"
      ],
      [
        "Athletics",
        "അത്‌ലറ്റിക്സ്",
        "Track and Field Events",
        "കായിക മത്സര വേദി"
      ],
      [
        "Javelin",
        "ജാവലിൻ",
        "Distance Throwing Event",
        "ദൂരത്തേക്ക് എറിയുന്ന മത്സരം"
      ],
      [
        "Relay",
        "റിലേ",
        "Team Sprint Event",
        "കൈമാറി ഓടുന്ന മത്സരം"
      ],
      [
        "Boat Race",
        "വള്ളംകളി",
        "Traditional River Race",
        "കായലിലെ വേഗത മത്സരം"
      ],
      [
        "Carrom",
        "കാരംസ്",
        "Indoor Board Game",
        "ബോർഡിൽ കളിക്കുന്ന ഇൻഡോർ ഗെയിം"
      ],
      [
        "Chess",
        "ചെസ്സ്",
        "Mind Strategy Game",
        "ബുദ്ധി ഉപയോഗിക്കുന്ന ബോർഡ് ഗെയിം"
      ],
      [
        "Kalari",
        "കളരി",
        "Martial Art Tradition",
        "പരമ്പരാഗത അഭ്യാസ മുറ"
      ],
      [
        "Long Jump",
        "ലോംഗ് ജമ്പ്",
        "Sand Pit Distance Leap",
        "ദൂരത്തേക്ക് ചാടുന്ന മത്സരം"
      ],
      [
        "High Jump",
        "ഹൈ ജമ്പ്",
        "Bar Clearance Leaping",
        "ഉയരത്തിലേക്ക് ചാടുന്ന മത്സരം"
      ],
      [
        "Throwball",
        "ത്രോബോൾ",
        "Over the Net Sport",
        "ബോൾ എറിഞ്ഞു കളിക്കുന്നത്"
      ],
      [
        "Table Tennis",
        "ടേബിൾ ടെന്നീസ്",
        "Indoor Table Racket Game",
        "ഇൻഡോർ മത്സര വിനോദം"
      ],
      [
        "Marathon",
        "മാരത്തൺ",
        "Long Distance Running Race",
        "ദീർഘദൂര ഓട്ടമത്സരം"
      ],
      [
        "Penalty Shootout",
        "പെനാൽറ്റി ഷൂട്ടൗട്ട്",
        "Tiebreaker Goal Kick",
        "നിർണായകമായ ഗോൾ മത്സരം"
      ],
      [
        "Trophy",
        "ട്രോഫി",
        "Tournament Winner Cup",
        "വിജയികൾക്ക് നൽകുന്ന സമ്മാനം"
      ],
      [
        "Umpire",
        "അമ്പയർ",
        "Match Referee Authority",
        "കളിയുടെ വിധികർത്താവ്"
      ],
      [
        "Gallery",
        "ഗാലറി",
        "Spectator Seating Stands",
        "കാണികൾ ഇരിക്കുന്ന സ്ഥലം"
      ],
      [
        "Kuttiyum Kolum",
        "കുട്ടിയും കോലും",
        "Wooden Stick Strike",
        "മരക്കമ്പ് കൊണ്ടുള്ള കളി"
      ],
      [
        "Kilithattu",
        "കിളിത്തട്ട്",
        "Court Crossing Dodge",
        "വരകൾ കടന്നുള്ള കളി"
      ],
      [
        "Talappanthukali",
        "തലപ്പന്തുകളി",
        "Coconut Leaf Ball Game",
        "ഓലപ്പന്ത് കളി"
      ],
      [
        "Nadan Panthu",
        "നാടൻ പന്ത്",
        "Leather Stitched Ball",
        "തൊലി കൊണ്ടുണ്ടാക്കിയ പന്ത്"
      ],
      [
        "Goli",
        "ഗോലി",
        "Glass Marble Aim",
        "കണ്ണാടിച്ചില്ല് ഉണ്ടകൾ"
      ],
      [
        "Lagori",
        "ലഗോറി",
        "Tile Stack Strike",
        "ഓടുടുക്കുകൾ എറിഞ്ഞുവീഴ്ത്തൽ"
      ],
      [
        "Arm Wrestling",
        "പഞ്ചഗുസ്തി",
        "Hand Strength Contest",
        "കൈക്കരുത്ത് പരീക്ഷിക്കുന്നത്"
      ],
      [
        "Kabaddi Court",
        "കബഡി കോർട്ട്",
        "Breath Control Game Area",
        "ശ്വാസം പിടിച്ചു കളിക്കുന്ന വേദി"
      ],
      [
        "Shuttle Racket",
        "ഷട്ടിൽ റാക്കറ്റ്",
        "Feather Birdie Game Tool",
        "ഷട്ടിൽ കളിക്കുന്ന ഉപകരണം"
      ],
      [
        "Foot Volley",
        "ഫൂട്ട് വോളി",
        "Leg Only Ball Game",
        "കാലുകൊണ്ട് മാത്രം കളിക്കുന്നത്"
      ]
    ]
  },
  {
    "id": "gulf",
    "name": "Gulf & NRI",
    "icon": "✈️",
    "words": [
      [
        "Pravasi",
        "പ്രവാസി",
        "Overseas Resident",
        "വിദേശത്ത് ജീവിക്കുന്ന മലയാളി"
      ],
      [
        "Dubai",
        "ദുബായ്",
        "Middle East Destination",
        "പ്രസിദ്ധമായ ഗൾഫ് നഗരം"
      ],
      [
        "Gulf Money",
        "ഗൾഫ് മണി",
        "Foreign Earnings Remittance",
        "വിദേശത്തു നിന്നും അയക്കുന്ന സമ്പത്ത്"
      ],
      [
        "Chakka",
        "ചക്ക",
        "Beloved Home Fruit",
        "നാട്ടിലെ പ്രിയപ്പെട്ട പഴം"
      ],
      [
        "Naatilekku",
        "നാട്ടിലേക്ക്",
        "Homeward Vacation Journey",
        "അവധിക്ക് വീട്ടിലേക്ക് വരുന്നത്"
      ],
      [
        "Abu Dhabi",
        "അബുദാബി",
        "Capital Emirate City",
        "തലസ്ഥാന നഗരം"
      ],
      [
        "Qatar",
        "ഖത്തർ",
        "Gas Rich Gulf Nation",
        "പ്രസിദ്ധമായ ഗൾഫ് രാജ്യം"
      ],
      [
        "Saudi",
        "സൗദി",
        "Largest Arabian Nation",
        "വലിയ മരുഭൂമി രാജ്യം"
      ],
      [
        "Oman",
        "ഒമാൻ",
        "Scenic Middle East Country",
        "പ്രകൃതിഭംഗിയുള്ള ഗൾഫ് രാജ്യം"
      ],
      [
        "Bahrain",
        "ബഹ്റൈൻ",
        "Island Arabian Kingdom",
        "ദ്വീപ് രൂപത്തിലുള്ള രാജ്യം"
      ],
      [
        "Kuwait",
        "കുവൈറ്റ്",
        "High Currency Gulf State",
        "ഉയർന്ന കറൻസി മൂല്യമുള്ള രാജ്യം"
      ],
      [
        "Visa",
        "വിസ",
        "Travel Permit Approval",
        "വിദേശയാത്രയ്ക്കുള്ള അനുമതി"
      ],
      [
        "Passport",
        "പാസ്പോർട്ട്",
        "International Travel Document",
        "യാത്ര ചെയ്യാനുള്ള രേഖ"
      ],
      [
        "Airport",
        "എയർപോർട്ട്",
        "Flight Terminal",
        "വിമാനങ്ങൾ വന്നിറങ്ങുന്ന സ്ഥലം"
      ],
      [
        "Remittance",
        "റെമിറ്റൻസ്",
        "Money Sent to Family",
        "നാട്ടിലേക്ക് അയക്കുന്ന പണം"
      ],
      [
        "Duty Free",
        "ഡ്യൂട്ടി ഫ്രീ",
        "Airport Shopping Zone",
        "എയർപോർട്ടിലെ ഷോപ്പിംഗ് സ്ഥലം"
      ],
      [
        "Perfume",
        "പെർഫ്യൂം",
        "Fragrant Gift Item",
        "സുഗന്ധം പരത്തുന്ന സമ്മാനം"
      ],
      [
        "Dates",
        "ഈത്തപ്പഴം",
        "Arabian Palm Fruit",
        "മരുഭൂമിയിലെ മധുരമുള്ള പഴം"
      ],
      [
        "Gold",
        "സ്വർണം",
        "Precious Metal Investment",
        "വിലയേറിയ ആഭരണ വസ്തു"
      ],
      [
        "Return Ticket",
        "റിട്ടേൺ ടിക്കറ്റ്",
        "Homeward Flight Booking",
        "തിരികെ പോകാനുള്ള ടിക്കറ്റ്"
      ],
      [
        "Norka",
        "നോർക്ക",
        "Expatriate Welfare Agency",
        "പ്രവാസികളുടെ ക്ഷേമ സംഘടന"
      ],
      [
        "Sharjah",
        "ഷാർജ",
        "Popular Emirate Hub",
        "മലയാളികൾ ഏറെയുള്ള ഗൾഫ് നഗരം"
      ],
      [
        "Baklava",
        "ബക്ലാവ",
        "Arabian Sweet Pastry",
        "മധ്യപൂർവ്വേഷ്യയിലെ മധുരപലഹാരം"
      ],
      [
        "Desert Safari",
        "മരുഭൂമി സഫാരി",
        "Sand Dune Adventure",
        "മരുഭൂമിയിലെ സാഹസിക യാത്ര"
      ],
      [
        "Burj Khalifa",
        "ബുർജ് ഖലീഫ",
        "World Famous Skyscraper",
        "ലോകത്തിലെ ഏറ്റവും വലിയ കെട്ടിടം"
      ],
      [
        "Vacation Leave",
        "അവധി / ലീവ്",
        "Annual Trip Home",
        "നാട്ടിലേക്ക് വരുന്ന സന്തോഷ സമയം"
      ],
      [
        "Dubai Gold Souk",
        "ദുബായ് ഗോൾഡ് സൂക്ക്",
        "Jewellery Market Lane",
        "ആഭരണ വിപണി"
      ],
      [
        "Khubus",
        "കുബ്ബൂസ്",
        "Round Arabian Bread",
        "വട്ടത്തിലുള്ള അറേബ്യൻ റൊട്ടി"
      ],
      [
        "Kafala",
        "കഫാല",
        "Sponsorship Regulations",
        "സ്പോൺസർഷിപ്പ് നിയമം"
      ],
      [
        "Perfume Attar",
        "അത്തർ",
        "Concentrated Fragrance Oil",
        "സുഗന്ധദ്രവ്യം"
      ],
      [
        "Qatar Airways",
        "ഖത്തർ എയർവേയ്സ്",
        "Gulf Connection Carrier",
        "പ്രവാസികളുടെ വിമാനയാത്ര"
      ],
      [
        "Shawarma Machine",
        "ഷവർമ്മ മെഷീൻ",
        "Rotating Grill Skewer",
        "ഇറച്ചി കറങ്ങി വേവുന്നത്"
      ],
      [
        "Oud Incense",
        "ഊദ്",
        "Aromatic Wood Smoke",
        "സുഗന്ധമുള്ള പുക"
      ],
      [
        "Lablabi / Hummus",
        "ഹുമുസ്",
        "Chickpea Dip Paste",
        "അറേബ്യൻ ഭക്ഷണം കഴിക്കുമ്പോൾ കൂട്ടുന്നത്"
      ],
      [
        "Dirham Currency",
        "ദിർഹം",
        "Expatriate Salary Note",
        "ഗൾഫിലെ കറൻസി"
      ],
      [
        "Emirates ID",
        "എമിറേറ്റ്സ് ഐഡി",
        "Residence Identity Card",
        "ഗൾഫിലെ തിരിച്ചറിയൽ രേഖ"
      ]
    ]
  }
];

const intlPacks = [
  {
    "id": "intl_superheroes",
    "name": "Superheroes",
    "icon": "🦸",
    "words": [
      {
        "civWord": "Spider-Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Orphaned heroes",
            "relationML": ""
          },
          {
            "word": "Deadpool",
            "wordMal": "",
            "relationEN": "Red-suited heroes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Iron Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Billionaire tech heroes",
            "relationML": ""
          },
          {
            "word": "Cyborg",
            "wordMal": "",
            "relationEN": "Machine enhanced",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Captain America",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Superman",
            "wordMal": "",
            "relationEN": "Symbol of hope",
            "relationML": ""
          },
          {
            "word": "Winter Soldier",
            "wordMal": "",
            "relationEN": "Super soldiers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Thor",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Aquaman",
            "wordMal": "",
            "relationEN": "Royal mythological heroes",
            "relationML": ""
          },
          {
            "word": "Loki",
            "wordMal": "",
            "relationEN": "Asgardian brothers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Hulk",
        "civWordMal": "",
        "imposters": [
          {
            "word": "The Thing",
            "wordMal": "",
            "relationEN": "Super strength brutes",
            "relationML": ""
          },
          {
            "word": "Juggernaut",
            "wordMal": "",
            "relationEN": "Unstoppable forces",
            "relationML": ""
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
            "relationEN": "Healing factor mutants",
            "relationML": ""
          },
          {
            "word": "Deadpool",
            "wordMal": "",
            "relationEN": "Weapon X experiments",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Black Panther",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Wealthy tactical heroes",
            "relationML": ""
          },
          {
            "word": "Killmonger",
            "wordMal": "",
            "relationEN": "Wakandan royalty",
            "relationML": ""
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
            "relationEN": "Magic users",
            "relationML": ""
          },
          {
            "word": "Scarlet Witch",
            "wordMal": "",
            "relationEN": "Reality warpers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Flash",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Quicksilver",
            "wordMal": "",
            "relationEN": "Speedsters",
            "relationML": ""
          },
          {
            "word": "Sonic",
            "wordMal": "",
            "relationEN": "Fastest alive",
            "relationML": ""
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
            "relationEN": "Kings of Atlantis",
            "relationML": ""
          },
          {
            "word": "Thor",
            "wordMal": "",
            "relationEN": "Powerful royalty",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Wonder Woman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Captain Marvel",
            "wordMal": "",
            "relationEN": "Powerful female heroes",
            "relationML": ""
          },
          {
            "word": "Supergirl",
            "wordMal": "",
            "relationEN": "Flying heroines",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Batman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Iron Man",
            "wordMal": "",
            "relationEN": "Rich without powers",
            "relationML": ""
          },
          {
            "word": "Nightwing",
            "wordMal": "",
            "relationEN": "Gotham vigilantes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Superman",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Captain America",
            "wordMal": "",
            "relationEN": "Blue and red leaders",
            "relationML": ""
          },
          {
            "word": "Omni-Man",
            "wordMal": "",
            "relationEN": "Alien powerhouses",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Green Lantern",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nova",
            "wordMal": "",
            "relationEN": "Cosmic cops",
            "relationML": ""
          },
          {
            "word": "Flash",
            "wordMal": "",
            "relationEN": "Justice League founders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Deadpool",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Wolverine",
            "wordMal": "",
            "relationEN": "Regenerating mutants",
            "relationML": ""
          },
          {
            "word": "Deathstroke",
            "wordMal": "",
            "relationEN": "Mercenaries",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Daredevil",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Batman",
            "wordMal": "",
            "relationEN": "Dark vigilantes",
            "relationML": ""
          },
          {
            "word": "Nightwing",
            "wordMal": "",
            "relationEN": "Acrobatic fighters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ghost Rider",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Spawn",
            "wordMal": "",
            "relationEN": "Demonic anti-heroes",
            "relationML": ""
          },
          {
            "word": "Hellboy",
            "wordMal": "",
            "relationEN": "Hellish origins",
            "relationML": ""
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
            "relationEN": "Shrinking heroes",
            "relationML": ""
          },
          {
            "word": "Wasp",
            "wordMal": "",
            "relationEN": "Insect themes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Scarlet Witch",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jean Grey",
            "wordMal": "",
            "relationEN": "Telekinetic women",
            "relationML": ""
          },
          {
            "word": "Doctor Strange",
            "wordMal": "",
            "relationEN": "Magic wielders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cyborg",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Iron Man",
            "wordMal": "",
            "relationEN": "Armored heroes",
            "relationML": ""
          },
          {
            "word": "RoboCop",
            "wordMal": "",
            "relationEN": "Man-machine hybrids",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_villains",
    "name": "Famous Villains",
    "icon": "🦹",
    "words": [
      {
        "civWord": "Joker",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Green Goblin",
            "wordMal": "",
            "relationEN": "Laughing maniacs",
            "relationML": ""
          },
          {
            "word": "Riddler",
            "wordMal": "",
            "relationEN": "Gotham rogues",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Darth Vader",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Thanos",
            "wordMal": "",
            "relationEN": "Galactic conquerors",
            "relationML": ""
          },
          {
            "word": "Kylo Ren",
            "wordMal": "",
            "relationEN": "Dark side users",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Thanos",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Darkseid",
            "wordMal": "",
            "relationEN": "Cosmic tyrants",
            "relationML": ""
          },
          {
            "word": "Kang",
            "wordMal": "",
            "relationEN": "Time and space threats",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Voldemort",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sauron",
            "wordMal": "",
            "relationEN": "Dark lords",
            "relationML": ""
          },
          {
            "word": "Grindelwald",
            "wordMal": "",
            "relationEN": "Dark wizards",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Loki",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Joker",
            "wordMal": "",
            "relationEN": "Tricksters",
            "relationML": ""
          },
          {
            "word": "Magneto",
            "wordMal": "",
            "relationEN": "Misunderstood villains",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Magneto",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Doctor Doom",
            "wordMal": "",
            "relationEN": "Complex antagonists",
            "relationML": ""
          },
          {
            "word": "Professor X",
            "wordMal": "",
            "relationEN": "Mutant leaders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Doctor Doom",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lex Luthor",
            "wordMal": "",
            "relationEN": "Genius masterminds",
            "relationML": ""
          },
          {
            "word": "Green Goblin",
            "wordMal": "",
            "relationEN": "Armored foes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Lex Luthor",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Kingpin",
            "wordMal": "",
            "relationEN": "Bald criminal bosses",
            "relationML": ""
          },
          {
            "word": "Joker",
            "wordMal": "",
            "relationEN": "Superman/Batman rivals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Green Goblin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Joker",
            "wordMal": "",
            "relationEN": "Insane arch-enemies",
            "relationML": ""
          },
          {
            "word": "Hobgoblin",
            "wordMal": "",
            "relationEN": "Glider riders",
            "relationML": ""
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
            "relationEN": "Symbiotes",
            "relationML": ""
          },
          {
            "word": "Bane",
            "wordMal": "",
            "relationEN": "Hulking brutes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sauron",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Voldemort",
            "wordMal": "",
            "relationEN": "Pure evil lords",
            "relationML": ""
          },
          {
            "word": "Darth Vader",
            "wordMal": "",
            "relationEN": "Armored terrors",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Freddy Krueger",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jason Voorhees",
            "wordMal": "",
            "relationEN": "Horror slashers",
            "relationML": ""
          },
          {
            "word": "Pennywise",
            "wordMal": "",
            "relationEN": "Nightmare creatures",
            "relationML": ""
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
            "relationEN": "Silent masked killers",
            "relationML": ""
          },
          {
            "word": "Ghostface",
            "wordMal": "",
            "relationEN": "Slasher icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pennywise",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Joker",
            "wordMal": "",
            "relationEN": "Creepy clowns",
            "relationML": ""
          },
          {
            "word": "Freddy Krueger",
            "wordMal": "",
            "relationEN": "Fear eaters",
            "relationML": ""
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
            "relationEN": "Psychological killers",
            "relationML": ""
          },
          {
            "word": "Dexter",
            "wordMal": "",
            "relationEN": "Serial killers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Michael Myers",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jason Voorhees",
            "wordMal": "",
            "relationEN": "Unstoppable killers",
            "relationML": ""
          },
          {
            "word": "Leatherface",
            "wordMal": "",
            "relationEN": "Masked slashers",
            "relationML": ""
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
            "relationEN": "Muscular villains",
            "relationML": ""
          },
          {
            "word": "Doomsday",
            "wordMal": "",
            "relationEN": "Brute strength",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Palpatine",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Voldemort",
            "wordMal": "",
            "relationEN": "Evil magic/force users",
            "relationML": ""
          },
          {
            "word": "Darth Vader",
            "wordMal": "",
            "relationEN": "Sith lords",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Kingpin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lex Luthor",
            "wordMal": "",
            "relationEN": "Crime bosses",
            "relationML": ""
          },
          {
            "word": "Penguin",
            "wordMal": "",
            "relationEN": "Mob leaders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Two-Face",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Joker",
            "wordMal": "",
            "relationEN": "Arkham inmates",
            "relationML": ""
          },
          {
            "word": "Penguin",
            "wordMal": "",
            "relationEN": "Gotham mobsters",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_movie_chars",
    "name": "Movie Characters",
    "icon": "🎬",
    "words": [
      {
        "civWord": "James Bond",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jason Bourne",
            "wordMal": "",
            "relationEN": "Secret agents",
            "relationML": ""
          },
          {
            "word": "Ethan Hunt",
            "wordMal": "",
            "relationEN": "Action spies",
            "relationML": ""
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
            "relationEN": "Adventurous archaeologists",
            "relationML": ""
          },
          {
            "word": "Han Solo",
            "wordMal": "",
            "relationEN": "Harrison Ford roles",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Jack Sparrow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Captain Hook",
            "wordMal": "",
            "relationEN": "Pirate captains",
            "relationML": ""
          },
          {
            "word": "Willy Wonka",
            "wordMal": "",
            "relationEN": "Eccentric leaders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Harry Potter",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Frodo Baggins",
            "wordMal": "",
            "relationEN": "Chosen ones",
            "relationML": ""
          },
          {
            "word": "Luke Skywalker",
            "wordMal": "",
            "relationEN": "Young heroes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Luke Skywalker",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Harry Potter",
            "wordMal": "",
            "relationEN": "Magic/Force learners",
            "relationML": ""
          },
          {
            "word": "Frodo Baggins",
            "wordMal": "",
            "relationEN": "Farm boy to hero",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "John Wick",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jason Bourne",
            "wordMal": "",
            "relationEN": "Lethal assassins",
            "relationML": ""
          },
          {
            "word": "Neo",
            "wordMal": "",
            "relationEN": "Keanu Reeves roles",
            "relationML": ""
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
            "relationEN": "Action protagonists",
            "relationML": ""
          },
          {
            "word": "Trinity",
            "wordMal": "",
            "relationEN": "Matrix characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Rocky Balboa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Adonis Creed",
            "wordMal": "",
            "relationEN": "Boxing champions",
            "relationML": ""
          },
          {
            "word": "Rambo",
            "wordMal": "",
            "relationEN": "Sylvester Stallone roles",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Rambo",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Terminator",
            "wordMal": "",
            "relationEN": "80s action heroes",
            "relationML": ""
          },
          {
            "word": "John McClane",
            "wordMal": "",
            "relationEN": "One-man armies",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Terminator",
        "civWordMal": "",
        "imposters": [
          {
            "word": "RoboCop",
            "wordMal": "",
            "relationEN": "Cyborgs",
            "relationML": ""
          },
          {
            "word": "Predator",
            "wordMal": "",
            "relationEN": "Sci-fi icons",
            "relationML": ""
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
            "relationEN": "Time travelers",
            "relationML": ""
          },
          {
            "word": "Luke Skywalker",
            "wordMal": "",
            "relationEN": "80s movie heroes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Forrest Gump",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Rain Man",
            "wordMal": "",
            "relationEN": "Unique perspectives",
            "relationML": ""
          },
          {
            "word": "Truman Burbank",
            "wordMal": "",
            "relationEN": "Innocent protagonists",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Katniss Everdeen",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tris Prior",
            "wordMal": "",
            "relationEN": "Dystopian heroines",
            "relationML": ""
          },
          {
            "word": "Hermione Granger",
            "wordMal": "",
            "relationEN": "Strong female leads",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ellen Ripley",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sarah Connor",
            "wordMal": "",
            "relationEN": "Fierce sci-fi women",
            "relationML": ""
          },
          {
            "word": "Leia Organa",
            "wordMal": "",
            "relationEN": "Space heroines",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ethan Hunt",
        "civWordMal": "",
        "imposters": [
          {
            "word": "James Bond",
            "wordMal": "",
            "relationEN": "Super spies",
            "relationML": ""
          },
          {
            "word": "Jason Bourne",
            "wordMal": "",
            "relationEN": "Rogue agents",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Jason Bourne",
        "civWordMal": "",
        "imposters": [
          {
            "word": "John Wick",
            "wordMal": "",
            "relationEN": "Hunted assassins",
            "relationML": ""
          },
          {
            "word": "James Bond",
            "wordMal": "",
            "relationEN": "Trained killers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Willy Wonka",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mad Hatter",
            "wordMal": "",
            "relationEN": "Eccentric characters",
            "relationML": ""
          },
          {
            "word": "Jack Sparrow",
            "wordMal": "",
            "relationEN": "Johnny Depp roles",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Gollum",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dobby",
            "wordMal": "",
            "relationEN": "CGI creatures",
            "relationML": ""
          },
          {
            "word": "Yoda",
            "wordMal": "",
            "relationEN": "Small wise/cunning beings",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Yoda",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mr. Miyagi",
            "wordMal": "",
            "relationEN": "Wise old masters",
            "relationML": ""
          },
          {
            "word": "Gandalf",
            "wordMal": "",
            "relationEN": "Mentors",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Gandalf",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dumbledore",
            "wordMal": "",
            "relationEN": "Wise old wizards",
            "relationML": ""
          },
          {
            "word": "Obi-Wan Kenobi",
            "wordMal": "",
            "relationEN": "Bearded mentors",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_tv_chars",
    "name": "TV Characters",
    "icon": "📺",
    "words": [
      {
        "civWord": "Walter White",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dexter Morgan",
            "wordMal": "",
            "relationEN": "Secret double lives",
            "relationML": ""
          },
          {
            "word": "Tony Soprano",
            "wordMal": "",
            "relationEN": "Anti-heroes",
            "relationML": ""
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
            "relationEN": "Cringey bosses",
            "relationML": ""
          },
          {
            "word": "Dwight Schrute",
            "wordMal": "",
            "relationEN": "Office workers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sheldon Cooper",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sherlock Holmes",
            "wordMal": "",
            "relationEN": "Brilliant but socially awkward",
            "relationML": ""
          },
          {
            "word": "Ross Geller",
            "wordMal": "",
            "relationEN": "Nerdy characters",
            "relationML": ""
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
            "relationEN": "Animated dads",
            "relationML": ""
          },
          {
            "word": "Bender",
            "wordMal": "",
            "relationEN": "Cartoon icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Jon Snow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Aragorn",
            "wordMal": "",
            "relationEN": "Fantasy heroes",
            "relationML": ""
          },
          {
            "word": "Daenerys Targaryen",
            "wordMal": "",
            "relationEN": "Game of Thrones leads",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Daenerys Targaryen",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cersei Lannister",
            "wordMal": "",
            "relationEN": "Ambitious queens",
            "relationML": ""
          },
          {
            "word": "Jon Snow",
            "wordMal": "",
            "relationEN": "Targaryens",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Tony Soprano",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Walter White",
            "wordMal": "",
            "relationEN": "Crime bosses",
            "relationML": ""
          },
          {
            "word": "Tommy Shelby",
            "wordMal": "",
            "relationEN": "Mobsters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sherlock Holmes",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Gregory House",
            "wordMal": "",
            "relationEN": "Genius investigators",
            "relationML": ""
          },
          {
            "word": "Hercule Poirot",
            "wordMal": "",
            "relationEN": "Famous detectives",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Gregory House",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sherlock Holmes",
            "wordMal": "",
            "relationEN": "Cynical geniuses",
            "relationML": ""
          },
          {
            "word": "Dr. Strange",
            "wordMal": "",
            "relationEN": "Medical doctors",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Rick Sanchez",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bender",
            "wordMal": "",
            "relationEN": "Cynical sci-fi cartoons",
            "relationML": ""
          },
          {
            "word": "Homer Simpson",
            "wordMal": "",
            "relationEN": "Animated troublemakers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "SpongeBob",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Patrick Star",
            "wordMal": "",
            "relationEN": "Underwater cartoons",
            "relationML": ""
          },
          {
            "word": "Mickey Mouse",
            "wordMal": "",
            "relationEN": "Yellow/Iconic cartoons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Dwight Schrute",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ron Swanson",
            "wordMal": "",
            "relationEN": "Eccentric coworkers",
            "relationML": ""
          },
          {
            "word": "Michael Scott",
            "wordMal": "",
            "relationEN": "The Office characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ron Swanson",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dwight Schrute",
            "wordMal": "",
            "relationEN": "Deadpan workplace characters",
            "relationML": ""
          },
          {
            "word": "Homer Simpson",
            "wordMal": "",
            "relationEN": "Meat lovers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Tommy Shelby",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tony Soprano",
            "wordMal": "",
            "relationEN": "Gang leaders",
            "relationML": ""
          },
          {
            "word": "Walter White",
            "wordMal": "",
            "relationEN": "Criminal masterminds",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Eleven",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Carrie",
            "wordMal": "",
            "relationEN": "Telekinetic girls",
            "relationML": ""
          },
          {
            "word": "Max Mayfield",
            "wordMal": "",
            "relationEN": "Stranger Things kids",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Dexter Morgan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hannibal Lecter",
            "wordMal": "",
            "relationEN": "Serial killers",
            "relationML": ""
          },
          {
            "word": "Walter White",
            "wordMal": "",
            "relationEN": "Hidden identities",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Chandler Bing",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Joey Tribbiani",
            "wordMal": "",
            "relationEN": "Friends characters",
            "relationML": ""
          },
          {
            "word": "Barney Stinson",
            "wordMal": "",
            "relationEN": "Sitcom wingmen",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Barney Stinson",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Joey Tribbiani",
            "wordMal": "",
            "relationEN": "Sitcom womanizers",
            "relationML": ""
          },
          {
            "word": "Chandler Bing",
            "wordMal": "",
            "relationEN": "Suit wearers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mr. Bean",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Charlie Chaplin",
            "wordMal": "",
            "relationEN": "Silent comedians",
            "relationML": ""
          },
          {
            "word": "Michael Scott",
            "wordMal": "",
            "relationEN": "Awkward characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Peter Griffin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Homer Simpson",
            "wordMal": "",
            "relationEN": "Fat animated dads",
            "relationML": ""
          },
          {
            "word": "Eric Cartman",
            "wordMal": "",
            "relationEN": "Controversial cartoons",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_food",
    "name": "Famous Foods",
    "icon": "🍔",
    "words": [
      {
        "civWord": "Pizza",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Burger",
            "wordMal": "",
            "relationEN": "Fast food staples",
            "relationML": ""
          },
          {
            "word": "Pasta",
            "wordMal": "",
            "relationEN": "Italian dishes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Burger",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hot Dog",
            "wordMal": "",
            "relationEN": "BBQ favorites",
            "relationML": ""
          },
          {
            "word": "Sandwich",
            "wordMal": "",
            "relationEN": "Meat in bread",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sushi",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sashimi",
            "wordMal": "",
            "relationEN": "Raw fish dishes",
            "relationML": ""
          },
          {
            "word": "Ramen",
            "wordMal": "",
            "relationEN": "Japanese cuisine",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Tacos",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Burritos",
            "wordMal": "",
            "relationEN": "Mexican street food",
            "relationML": ""
          },
          {
            "word": "Nachos",
            "wordMal": "",
            "relationEN": "Tortilla based",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pasta",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pizza",
            "wordMal": "",
            "relationEN": "Italian dishes",
            "relationML": ""
          },
          {
            "word": "Noodles",
            "wordMal": "",
            "relationEN": "Boiled dough strings",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ice Cream",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Gelato",
            "wordMal": "",
            "relationEN": "Frozen desserts",
            "relationML": ""
          },
          {
            "word": "Cake",
            "wordMal": "",
            "relationEN": "Sweet treats",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Steak",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pork Chop",
            "wordMal": "",
            "relationEN": "Cooked meats",
            "relationML": ""
          },
          {
            "word": "Ribs",
            "wordMal": "",
            "relationEN": "BBQ meats",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pancakes",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Waffles",
            "wordMal": "",
            "relationEN": "Breakfast sweets",
            "relationML": ""
          },
          {
            "word": "Crepes",
            "wordMal": "",
            "relationEN": "Flat batter foods",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "French Fries",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Onion Rings",
            "wordMal": "",
            "relationEN": "Fried sides",
            "relationML": ""
          },
          {
            "word": "Potato Chips",
            "wordMal": "",
            "relationEN": "Fried potatoes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Fried Chicken",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Chicken Nuggets",
            "wordMal": "",
            "relationEN": "Breaded poultry",
            "relationML": ""
          },
          {
            "word": "Hot Wings",
            "wordMal": "",
            "relationEN": "Fried bird parts",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Donut",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bagel",
            "wordMal": "",
            "relationEN": "Ring shaped breads",
            "relationML": ""
          },
          {
            "word": "Croissant",
            "wordMal": "",
            "relationEN": "Pastries",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Croissant",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Baguette",
            "wordMal": "",
            "relationEN": "French breads",
            "relationML": ""
          },
          {
            "word": "Donut",
            "wordMal": "",
            "relationEN": "Breakfast pastries",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Hot Dog",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sausage",
            "wordMal": "",
            "relationEN": "Processed meats",
            "relationML": ""
          },
          {
            "word": "Burger",
            "wordMal": "",
            "relationEN": "Stadium foods",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Noodles",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pasta",
            "wordMal": "",
            "relationEN": "Long carb strands",
            "relationML": ""
          },
          {
            "word": "Ramen",
            "wordMal": "",
            "relationEN": "Asian soups",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ramen",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pho",
            "wordMal": "",
            "relationEN": "Asian noodle soups",
            "relationML": ""
          },
          {
            "word": "Udon",
            "wordMal": "",
            "relationEN": "Japanese noodles",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Burrito",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Taco",
            "wordMal": "",
            "relationEN": "Mexican wraps",
            "relationML": ""
          },
          {
            "word": "Wrap",
            "wordMal": "",
            "relationEN": "Rolled foods",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cheese",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Butter",
            "wordMal": "",
            "relationEN": "Dairy products",
            "relationML": ""
          },
          {
            "word": "Yogurt",
            "wordMal": "",
            "relationEN": "Cultured milk",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Chocolate",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Candy",
            "wordMal": "",
            "relationEN": "Sweet confectioneries",
            "relationML": ""
          },
          {
            "word": "Ice Cream",
            "wordMal": "",
            "relationEN": "Desserts",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Salad",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Soup",
            "wordMal": "",
            "relationEN": "Appetizers",
            "relationML": ""
          },
          {
            "word": "Sandwich",
            "wordMal": "",
            "relationEN": "Healthy lunches",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Soup",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Stew",
            "wordMal": "",
            "relationEN": "Liquid foods",
            "relationML": ""
          },
          {
            "word": "Chili",
            "wordMal": "",
            "relationEN": "Warm bowls",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_animals",
    "name": "Animals",
    "icon": "🦁",
    "words": [
      {
        "civWord": "Lion",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tiger",
            "wordMal": "",
            "relationEN": "Big cats",
            "relationML": ""
          },
          {
            "word": "Leopard",
            "wordMal": "",
            "relationEN": "African predators",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Tiger",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lion",
            "wordMal": "",
            "relationEN": "Big cats",
            "relationML": ""
          },
          {
            "word": "Panther",
            "wordMal": "",
            "relationEN": "Jungle predators",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Elephant",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Rhino",
            "wordMal": "",
            "relationEN": "Large grey mammals",
            "relationML": ""
          },
          {
            "word": "Mammoth",
            "wordMal": "",
            "relationEN": "Trunked animals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Giraffe",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Zebra",
            "wordMal": "",
            "relationEN": "African herbivores",
            "relationML": ""
          },
          {
            "word": "Camel",
            "wordMal": "",
            "relationEN": "Long necked animals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Zebra",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Horse",
            "wordMal": "",
            "relationEN": "Equines",
            "relationML": ""
          },
          {
            "word": "Giraffe",
            "wordMal": "",
            "relationEN": "African plains animals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Kangaroo",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Koala",
            "wordMal": "",
            "relationEN": "Australian marsupials",
            "relationML": ""
          },
          {
            "word": "Wallaby",
            "wordMal": "",
            "relationEN": "Hoppers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Koala",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sloth",
            "wordMal": "",
            "relationEN": "Slow tree dwellers",
            "relationML": ""
          },
          {
            "word": "Panda",
            "wordMal": "",
            "relationEN": "Cute bears",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Panda",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Grizzly Bear",
            "wordMal": "",
            "relationEN": "Bears",
            "relationML": ""
          },
          {
            "word": "Koala",
            "wordMal": "",
            "relationEN": "Bamboo eaters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Penguin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Puffin",
            "wordMal": "",
            "relationEN": "Flightless cold birds",
            "relationML": ""
          },
          {
            "word": "Seal",
            "wordMal": "",
            "relationEN": "Antarctic swimmers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Dolphin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Whale",
            "wordMal": "",
            "relationEN": "Marine mammals",
            "relationML": ""
          },
          {
            "word": "Shark",
            "wordMal": "",
            "relationEN": "Ocean predators",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Shark",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dolphin",
            "wordMal": "",
            "relationEN": "Finned ocean swimmers",
            "relationML": ""
          },
          {
            "word": "Crocodile",
            "wordMal": "",
            "relationEN": "Aquatic predators",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Crocodile",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Alligator",
            "wordMal": "",
            "relationEN": "Large reptiles",
            "relationML": ""
          },
          {
            "word": "Snake",
            "wordMal": "",
            "relationEN": "Cold blooded killers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Snake",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lizard",
            "wordMal": "",
            "relationEN": "Reptiles",
            "relationML": ""
          },
          {
            "word": "Worm",
            "wordMal": "",
            "relationEN": "Legless animals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Eagle",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hawk",
            "wordMal": "",
            "relationEN": "Birds of prey",
            "relationML": ""
          },
          {
            "word": "Falcon",
            "wordMal": "",
            "relationEN": "Sharp eyed birds",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Owl",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bat",
            "wordMal": "",
            "relationEN": "Nocturnal flyers",
            "relationML": ""
          },
          {
            "word": "Eagle",
            "wordMal": "",
            "relationEN": "Predatory birds",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Wolf",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dog",
            "wordMal": "",
            "relationEN": "Canines",
            "relationML": ""
          },
          {
            "word": "Fox",
            "wordMal": "",
            "relationEN": "Pack animals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Fox",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Wolf",
            "wordMal": "",
            "relationEN": "Wild canines",
            "relationML": ""
          },
          {
            "word": "Coyote",
            "wordMal": "",
            "relationEN": "Sly animals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Bear",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Wolf",
            "wordMal": "",
            "relationEN": "Forest predators",
            "relationML": ""
          },
          {
            "word": "Panda",
            "wordMal": "",
            "relationEN": "Ursidae family",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Monkey",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ape",
            "wordMal": "",
            "relationEN": "Primates",
            "relationML": ""
          },
          {
            "word": "Lemur",
            "wordMal": "",
            "relationEN": "Tree swingers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Frog",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Toad",
            "wordMal": "",
            "relationEN": "Amphibians",
            "relationML": ""
          },
          {
            "word": "Lizard",
            "wordMal": "",
            "relationEN": "Swamp dwellers",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_sports",
    "name": "Sports",
    "icon": "⚽",
    "words": [
      {
        "civWord": "Football",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Rugby",
            "wordMal": "",
            "relationEN": "Field team sports",
            "relationML": ""
          },
          {
            "word": "Basketball",
            "wordMal": "",
            "relationEN": "Ball games",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Basketball",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Volleyball",
            "wordMal": "",
            "relationEN": "Court sports",
            "relationML": ""
          },
          {
            "word": "Football",
            "wordMal": "",
            "relationEN": "Team ball sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Tennis",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Badminton",
            "wordMal": "",
            "relationEN": "Racket sports",
            "relationML": ""
          },
          {
            "word": "Table Tennis",
            "wordMal": "",
            "relationEN": "Net sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cricket",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Baseball",
            "wordMal": "",
            "relationEN": "Bat and ball sports",
            "relationML": ""
          },
          {
            "word": "Golf",
            "wordMal": "",
            "relationEN": "Precision sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Baseball",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cricket",
            "wordMal": "",
            "relationEN": "Batting sports",
            "relationML": ""
          },
          {
            "word": "Softball",
            "wordMal": "",
            "relationEN": "Diamond sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Rugby",
        "civWordMal": "",
        "imposters": [
          {
            "word": "American Football",
            "wordMal": "",
            "relationEN": "Contact field sports",
            "relationML": ""
          },
          {
            "word": "Football",
            "wordMal": "",
            "relationEN": "Tackling sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Golf",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mini Golf",
            "wordMal": "",
            "relationEN": "Club sports",
            "relationML": ""
          },
          {
            "word": "Tennis",
            "wordMal": "",
            "relationEN": "Individual ball sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Boxing",
        "civWordMal": "",
        "imposters": [
          {
            "word": "MMA",
            "wordMal": "",
            "relationEN": "Combat sports",
            "relationML": ""
          },
          {
            "word": "Wrestling",
            "wordMal": "",
            "relationEN": "Ring fighting",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "MMA",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Wrestling",
            "wordMal": "",
            "relationEN": "Grappling sports",
            "relationML": ""
          },
          {
            "word": "Boxing",
            "wordMal": "",
            "relationEN": "Cage fighting",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Swimming",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Diving",
            "wordMal": "",
            "relationEN": "Water sports",
            "relationML": ""
          },
          {
            "word": "Water Polo",
            "wordMal": "",
            "relationEN": "Pool sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Athletics",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Gymnastics",
            "wordMal": "",
            "relationEN": "Olympic sports",
            "relationML": ""
          },
          {
            "word": "Marathon",
            "wordMal": "",
            "relationEN": "Track and field",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Gymnastics",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Figure Skating",
            "wordMal": "",
            "relationEN": "Judged artistic sports",
            "relationML": ""
          },
          {
            "word": "Cheerleading",
            "wordMal": "",
            "relationEN": "Acrobatic sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cycling",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Running",
            "wordMal": "",
            "relationEN": "Endurance racing",
            "relationML": ""
          },
          {
            "word": "Triathlon",
            "wordMal": "",
            "relationEN": "Leg powered sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Volleyball",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Basketball",
            "wordMal": "",
            "relationEN": "Hand sports",
            "relationML": ""
          },
          {
            "word": "Tennis",
            "wordMal": "",
            "relationEN": "Net sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ice Hockey",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Field Hockey",
            "wordMal": "",
            "relationEN": "Stick sports",
            "relationML": ""
          },
          {
            "word": "Skating",
            "wordMal": "",
            "relationEN": "Ice sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Skiing",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Snowboarding",
            "wordMal": "",
            "relationEN": "Winter mountain sports",
            "relationML": ""
          },
          {
            "word": "Ice Skating",
            "wordMal": "",
            "relationEN": "Snow sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Snowboarding",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Skateboarding",
            "wordMal": "",
            "relationEN": "Board sports",
            "relationML": ""
          },
          {
            "word": "Surfing",
            "wordMal": "",
            "relationEN": "Extreme sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Surfing",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Skateboarding",
            "wordMal": "",
            "relationEN": "Balance board sports",
            "relationML": ""
          },
          {
            "word": "Swimming",
            "wordMal": "",
            "relationEN": "Ocean sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Table Tennis",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tennis",
            "wordMal": "",
            "relationEN": "Small racket sports",
            "relationML": ""
          },
          {
            "word": "Badminton",
            "wordMal": "",
            "relationEN": "Indoor net sports",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Badminton",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tennis",
            "wordMal": "",
            "relationEN": "Racket sports",
            "relationML": ""
          },
          {
            "word": "Volleyball",
            "wordMal": "",
            "relationEN": "Shuttlecock sports",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_countries",
    "name": "Countries",
    "icon": "🌍",
    "words": [
      {
        "civWord": "USA",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Canada",
            "wordMal": "",
            "relationEN": "North American countries",
            "relationML": ""
          },
          {
            "word": "UK",
            "wordMal": "",
            "relationEN": "English speaking nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Canada",
        "civWordMal": "",
        "imposters": [
          {
            "word": "USA",
            "wordMal": "",
            "relationEN": "North American countries",
            "relationML": ""
          },
          {
            "word": "Australia",
            "wordMal": "",
            "relationEN": "Large commonwealths",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "UK",
        "civWordMal": "",
        "imposters": [
          {
            "word": "USA",
            "wordMal": "",
            "relationEN": "English speaking powers",
            "relationML": ""
          },
          {
            "word": "France",
            "wordMal": "",
            "relationEN": "European powers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "France",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Italy",
            "wordMal": "",
            "relationEN": "European cultural hubs",
            "relationML": ""
          },
          {
            "word": "Germany",
            "wordMal": "",
            "relationEN": "Western European nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Germany",
        "civWordMal": "",
        "imposters": [
          {
            "word": "France",
            "wordMal": "",
            "relationEN": "European economic powers",
            "relationML": ""
          },
          {
            "word": "Austria",
            "wordMal": "",
            "relationEN": "German speaking nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Italy",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Spain",
            "wordMal": "",
            "relationEN": "Mediterranean countries",
            "relationML": ""
          },
          {
            "word": "Greece",
            "wordMal": "",
            "relationEN": "Southern European nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Spain",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mexico",
            "wordMal": "",
            "relationEN": "Spanish speaking countries",
            "relationML": ""
          },
          {
            "word": "Portugal",
            "wordMal": "",
            "relationEN": "Iberian nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Japan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "China",
            "wordMal": "",
            "relationEN": "East Asian powers",
            "relationML": ""
          },
          {
            "word": "South Korea",
            "wordMal": "",
            "relationEN": "Island nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "China",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Japan",
            "wordMal": "",
            "relationEN": "East Asian powers",
            "relationML": ""
          },
          {
            "word": "India",
            "wordMal": "",
            "relationEN": "Most populated countries",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "India",
        "civWordMal": "",
        "imposters": [
          {
            "word": "China",
            "wordMal": "",
            "relationEN": "Populous Asian nations",
            "relationML": ""
          },
          {
            "word": "Pakistan",
            "wordMal": "",
            "relationEN": "South Asian countries",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Brazil",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Argentina",
            "wordMal": "",
            "relationEN": "South American giants",
            "relationML": ""
          },
          {
            "word": "Portugal",
            "wordMal": "",
            "relationEN": "Portuguese speaking nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Argentina",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Brazil",
            "wordMal": "",
            "relationEN": "South American powers",
            "relationML": ""
          },
          {
            "word": "Spain",
            "wordMal": "",
            "relationEN": "Spanish speaking nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mexico",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Spain",
            "wordMal": "",
            "relationEN": "Spanish speaking countries",
            "relationML": ""
          },
          {
            "word": "USA",
            "wordMal": "",
            "relationEN": "North American neighbors",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Australia",
        "civWordMal": "",
        "imposters": [
          {
            "word": "New Zealand",
            "wordMal": "",
            "relationEN": "Oceania nations",
            "relationML": ""
          },
          {
            "word": "Canada",
            "wordMal": "",
            "relationEN": "Large former colonies",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "New Zealand",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Australia",
            "wordMal": "",
            "relationEN": "Oceania nations",
            "relationML": ""
          },
          {
            "word": "UK",
            "wordMal": "",
            "relationEN": "Island commonwealths",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Russia",
        "civWordMal": "",
        "imposters": [
          {
            "word": "China",
            "wordMal": "",
            "relationEN": "Vast Asian/European powers",
            "relationML": ""
          },
          {
            "word": "Ukraine",
            "wordMal": "",
            "relationEN": "Eastern European nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Egypt",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Morocco",
            "wordMal": "",
            "relationEN": "North African countries",
            "relationML": ""
          },
          {
            "word": "Saudi Arabia",
            "wordMal": "",
            "relationEN": "Arab nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "South Africa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nigeria",
            "wordMal": "",
            "relationEN": "African economic powers",
            "relationML": ""
          },
          {
            "word": "Australia",
            "wordMal": "",
            "relationEN": "Southern hemisphere nations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "South Korea",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Japan",
            "wordMal": "",
            "relationEN": "East Asian tech hubs",
            "relationML": ""
          },
          {
            "word": "North Korea",
            "wordMal": "",
            "relationEN": "Korean peninsula",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Greece",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Italy",
            "wordMal": "",
            "relationEN": "Ancient Mediterranean cultures",
            "relationML": ""
          },
          {
            "word": "Turkey",
            "wordMal": "",
            "relationEN": "Aegean nations",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_videogames",
    "name": "Video Game Characters",
    "icon": "🎮",
    "words": [
      {
        "civWord": "Mario",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Luigi",
            "wordMal": "",
            "relationEN": "Nintendo brothers",
            "relationML": ""
          },
          {
            "word": "Sonic",
            "wordMal": "",
            "relationEN": "Platformer mascots",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Luigi",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mario",
            "wordMal": "",
            "relationEN": "Nintendo brothers",
            "relationML": ""
          },
          {
            "word": "Tails",
            "wordMal": "",
            "relationEN": "Player two sidekicks",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sonic",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mario",
            "wordMal": "",
            "relationEN": "Platformer mascots",
            "relationML": ""
          },
          {
            "word": "Shadow",
            "wordMal": "",
            "relationEN": "Speedy hedgehogs",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Link",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Zelda",
            "wordMal": "",
            "relationEN": "Hyrule heroes",
            "relationML": ""
          },
          {
            "word": "Cloud",
            "wordMal": "",
            "relationEN": "Sword fighters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Zelda",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Peach",
            "wordMal": "",
            "relationEN": "Video game princesses",
            "relationML": ""
          },
          {
            "word": "Link",
            "wordMal": "",
            "relationEN": "Triforce wielders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pikachu",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Kirby",
            "wordMal": "",
            "relationEN": "Cute Nintendo mascots",
            "relationML": ""
          },
          {
            "word": "Charizard",
            "wordMal": "",
            "relationEN": "Pokemon icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Master Chief",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Doomguy",
            "wordMal": "",
            "relationEN": "Armored space marines",
            "relationML": ""
          },
          {
            "word": "Cortana",
            "wordMal": "",
            "relationEN": "Halo characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Kratos",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dante",
            "wordMal": "",
            "relationEN": "Hack and slash heroes",
            "relationML": ""
          },
          {
            "word": "Atreus",
            "wordMal": "",
            "relationEN": "God of War characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Lara Croft",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nathan Drake",
            "wordMal": "",
            "relationEN": "Tomb raiders",
            "relationML": ""
          },
          {
            "word": "Indiana Jones",
            "wordMal": "",
            "relationEN": "Adventurers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Nathan Drake",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lara Croft",
            "wordMal": "",
            "relationEN": "Treasure hunters",
            "relationML": ""
          },
          {
            "word": "Sully",
            "wordMal": "",
            "relationEN": "Uncharted characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Geralt of Rivia",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ezio",
            "wordMal": "",
            "relationEN": "Action RPG protagonists",
            "relationML": ""
          },
          {
            "word": "Ciri",
            "wordMal": "",
            "relationEN": "Witcher characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ezio",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Altair",
            "wordMal": "",
            "relationEN": "Assassin's Creed protagonists",
            "relationML": ""
          },
          {
            "word": "Desmond",
            "wordMal": "",
            "relationEN": "Assassins",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Solid Snake",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sam Fisher",
            "wordMal": "",
            "relationEN": "Stealth action heroes",
            "relationML": ""
          },
          {
            "word": "Big Boss",
            "wordMal": "",
            "relationEN": "Metal Gear characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cloud Strife",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sephiroth",
            "wordMal": "",
            "relationEN": "Final Fantasy VII characters",
            "relationML": ""
          },
          {
            "word": "Squall",
            "wordMal": "",
            "relationEN": "JRPG swordsmen",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sephiroth",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bowser",
            "wordMal": "",
            "relationEN": "Video game villains",
            "relationML": ""
          },
          {
            "word": "Cloud Strife",
            "wordMal": "",
            "relationEN": "Buster sword rivals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Bowser",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ganondorf",
            "wordMal": "",
            "relationEN": "Nintendo villains",
            "relationML": ""
          },
          {
            "word": "Mario",
            "wordMal": "",
            "relationEN": "Mushroom Kingdom foes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pac-Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Donkey Kong",
            "wordMal": "",
            "relationEN": "Arcade classics",
            "relationML": ""
          },
          {
            "word": "Mega Man",
            "wordMal": "",
            "relationEN": "Retro icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Donkey Kong",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bowser",
            "wordMal": "",
            "relationEN": "Heavyweight Nintendo characters",
            "relationML": ""
          },
          {
            "word": "Diddy Kong",
            "wordMal": "",
            "relationEN": "Kong family",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Kirby",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pikachu",
            "wordMal": "",
            "relationEN": "Pink/Yellow cute mascots",
            "relationML": ""
          },
          {
            "word": "Meta Knight",
            "wordMal": "",
            "relationEN": "Dream Land heroes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mega Man",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Samus",
            "wordMal": "",
            "relationEN": "Armored blaster heroes",
            "relationML": ""
          },
          {
            "word": "Zero",
            "wordMal": "",
            "relationEN": "Capcom heroes",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_music",
    "name": "Music & Bands",
    "icon": "🎸",
    "words": [
      {
        "civWord": "The Beatles",
        "civWordMal": "",
        "imposters": [
          {
            "word": "The Rolling Stones",
            "wordMal": "",
            "relationEN": "60s British rock bands",
            "relationML": ""
          },
          {
            "word": "Queen",
            "wordMal": "",
            "relationEN": "Legendary bands",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Queen",
        "civWordMal": "",
        "imposters": [
          {
            "word": "The Beatles",
            "wordMal": "",
            "relationEN": "Legendary British bands",
            "relationML": ""
          },
          {
            "word": "Elton John",
            "wordMal": "",
            "relationEN": "70s icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Michael Jackson",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Prince",
            "wordMal": "",
            "relationEN": "80s pop icons",
            "relationML": ""
          },
          {
            "word": "Madonna",
            "wordMal": "",
            "relationEN": "King/Queen of Pop",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Elvis Presley",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Johnny Cash",
            "wordMal": "",
            "relationEN": "50s rock/country legends",
            "relationML": ""
          },
          {
            "word": "Michael Jackson",
            "wordMal": "",
            "relationEN": "Kings of music",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Madonna",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lady Gaga",
            "wordMal": "",
            "relationEN": "Pop innovators",
            "relationML": ""
          },
          {
            "word": "Michael Jackson",
            "wordMal": "",
            "relationEN": "Pop royalty",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Eminem",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jay-Z",
            "wordMal": "",
            "relationEN": "Rap legends",
            "relationML": ""
          },
          {
            "word": "Dr. Dre",
            "wordMal": "",
            "relationEN": "Hip hop icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Beyonce",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Rihanna",
            "wordMal": "",
            "relationEN": "Modern R&B/Pop queens",
            "relationML": ""
          },
          {
            "word": "Jay-Z",
            "wordMal": "",
            "relationEN": "Music power couples",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Taylor Swift",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Katy Perry",
            "wordMal": "",
            "relationEN": "Modern pop superstars",
            "relationML": ""
          },
          {
            "word": "Adele",
            "wordMal": "",
            "relationEN": "Chart-topping singers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Nirvana",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pearl Jam",
            "wordMal": "",
            "relationEN": "90s Grunge bands",
            "relationML": ""
          },
          {
            "word": "Foo Fighters",
            "wordMal": "",
            "relationEN": "Dave Grohl bands",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Metallica",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Iron Maiden",
            "wordMal": "",
            "relationEN": "Heavy metal legends",
            "relationML": ""
          },
          {
            "word": "Megadeth",
            "wordMal": "",
            "relationEN": "Thrash metal bands",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pink Floyd",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Led Zeppelin",
            "wordMal": "",
            "relationEN": "70s classic rock",
            "relationML": ""
          },
          {
            "word": "The Beatles",
            "wordMal": "",
            "relationEN": "British rock icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Led Zeppelin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Black Sabbath",
            "wordMal": "",
            "relationEN": "Hard rock pioneers",
            "relationML": ""
          },
          {
            "word": "The Who",
            "wordMal": "",
            "relationEN": "British invasion bands",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "David Bowie",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Elton John",
            "wordMal": "",
            "relationEN": "Theatrical British soloists",
            "relationML": ""
          },
          {
            "word": "Prince",
            "wordMal": "",
            "relationEN": "Eccentric musicians",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Elton John",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Billy Joel",
            "wordMal": "",
            "relationEN": "Piano rock legends",
            "relationML": ""
          },
          {
            "word": "David Bowie",
            "wordMal": "",
            "relationEN": "70s solo stars",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Lady Gaga",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Madonna",
            "wordMal": "",
            "relationEN": "Provocative pop stars",
            "relationML": ""
          },
          {
            "word": "Katy Perry",
            "wordMal": "",
            "relationEN": "Modern pop stars",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ed Sheeran",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Justin Bieber",
            "wordMal": "",
            "relationEN": "Modern male pop stars",
            "relationML": ""
          },
          {
            "word": "Adele",
            "wordMal": "",
            "relationEN": "British singer-songwriters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Adele",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sam Smith",
            "wordMal": "",
            "relationEN": "Soulful British singers",
            "relationML": ""
          },
          {
            "word": "Ed Sheeran",
            "wordMal": "",
            "relationEN": "Ballad singers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Justin Bieber",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Shawn Mendes",
            "wordMal": "",
            "relationEN": "Canadian pop stars",
            "relationML": ""
          },
          {
            "word": "One Direction",
            "wordMal": "",
            "relationEN": "Teen idols",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Coldplay",
        "civWordMal": "",
        "imposters": [
          {
            "word": "U2",
            "wordMal": "",
            "relationEN": "Anthemic rock bands",
            "relationML": ""
          },
          {
            "word": "Maroon 5",
            "wordMal": "",
            "relationEN": "Modern pop rock",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "U2",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Coldplay",
            "wordMal": "",
            "relationEN": "Arena rock bands",
            "relationML": ""
          },
          {
            "word": "The Rolling Stones",
            "wordMal": "",
            "relationEN": "Legendary rock bands",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_famous_people",
    "name": "Famous People",
    "icon": "⭐",
    "words": [
      {
        "civWord": "Albert Einstein",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Isaac Newton",
            "wordMal": "",
            "relationEN": "Genius physicists",
            "relationML": ""
          },
          {
            "word": "Stephen Hawking",
            "wordMal": "",
            "relationEN": "Famous scientists",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Isaac Newton",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Galileo",
            "wordMal": "",
            "relationEN": "Historical scientists",
            "relationML": ""
          },
          {
            "word": "Albert Einstein",
            "wordMal": "",
            "relationEN": "Physics pioneers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Abraham Lincoln",
        "civWordMal": "",
        "imposters": [
          {
            "word": "George Washington",
            "wordMal": "",
            "relationEN": "Mount Rushmore presidents",
            "relationML": ""
          },
          {
            "word": "JFK",
            "wordMal": "",
            "relationEN": "Assassinated presidents",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "George Washington",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Thomas Jefferson",
            "wordMal": "",
            "relationEN": "Founding fathers",
            "relationML": ""
          },
          {
            "word": "Abraham Lincoln",
            "wordMal": "",
            "relationEN": "Historic presidents",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Nelson Mandela",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Martin Luther King Jr.",
            "wordMal": "",
            "relationEN": "Civil rights leaders",
            "relationML": ""
          },
          {
            "word": "Gandhi",
            "wordMal": "",
            "relationEN": "Peaceful revolutionaries",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Martin Luther King Jr.",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Malcolm X",
            "wordMal": "",
            "relationEN": "American civil rights leaders",
            "relationML": ""
          },
          {
            "word": "Nelson Mandela",
            "wordMal": "",
            "relationEN": "Nobel Peace Prize winners",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mahatma Gandhi",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nelson Mandela",
            "wordMal": "",
            "relationEN": "Nonviolent leaders",
            "relationML": ""
          },
          {
            "word": "Mother Teresa",
            "wordMal": "",
            "relationEN": "Peace icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mother Teresa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Princess Diana",
            "wordMal": "",
            "relationEN": "Humanitarian women",
            "relationML": ""
          },
          {
            "word": "Gandhi",
            "wordMal": "",
            "relationEN": "Nobel Peace Prize winners",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Princess Diana",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Queen Elizabeth II",
            "wordMal": "",
            "relationEN": "British royals",
            "relationML": ""
          },
          {
            "word": "Mother Teresa",
            "wordMal": "",
            "relationEN": "Beloved female figures",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Queen Elizabeth II",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Queen Victoria",
            "wordMal": "",
            "relationEN": "Long-reigning queens",
            "relationML": ""
          },
          {
            "word": "Princess Diana",
            "wordMal": "",
            "relationEN": "British monarchs",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Marilyn Monroe",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Audrey Hepburn",
            "wordMal": "",
            "relationEN": "Classic Hollywood icons",
            "relationML": ""
          },
          {
            "word": "Elvis Presley",
            "wordMal": "",
            "relationEN": "50s pop culture icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Audrey Hepburn",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Marilyn Monroe",
            "wordMal": "",
            "relationEN": "Iconic actresses",
            "relationML": ""
          },
          {
            "word": "Grace Kelly",
            "wordMal": "",
            "relationEN": "Classic beauties",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Muhammad Ali",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mike Tyson",
            "wordMal": "",
            "relationEN": "Legendary boxers",
            "relationML": ""
          },
          {
            "word": "Michael Jordan",
            "wordMal": "",
            "relationEN": "Sports icons",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Michael Jordan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "LeBron James",
            "wordMal": "",
            "relationEN": "Basketball legends",
            "relationML": ""
          },
          {
            "word": "Tiger Woods",
            "wordMal": "",
            "relationEN": "Nike athletes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Leonardo da Vinci",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Michelangelo",
            "wordMal": "",
            "relationEN": "Renaissance artists",
            "relationML": ""
          },
          {
            "word": "Vincent van Gogh",
            "wordMal": "",
            "relationEN": "Famous painters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Vincent van Gogh",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pablo Picasso",
            "wordMal": "",
            "relationEN": "Legendary painters",
            "relationML": ""
          },
          {
            "word": "Leonardo da Vinci",
            "wordMal": "",
            "relationEN": "Artists",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "William Shakespeare",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Charles Dickens",
            "wordMal": "",
            "relationEN": "Classic British authors",
            "relationML": ""
          },
          {
            "word": "Mark Twain",
            "wordMal": "",
            "relationEN": "Famous writers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Steve Jobs",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bill Gates",
            "wordMal": "",
            "relationEN": "Tech billionaires",
            "relationML": ""
          },
          {
            "word": "Elon Musk",
            "wordMal": "",
            "relationEN": "Visionary CEOs",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Bill Gates",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Steve Jobs",
            "wordMal": "",
            "relationEN": "Computer pioneers",
            "relationML": ""
          },
          {
            "word": "Mark Zuckerberg",
            "wordMal": "",
            "relationEN": "Tech founders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Elon Musk",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jeff Bezos",
            "wordMal": "",
            "relationEN": "Modern billionaires",
            "relationML": ""
          },
          {
            "word": "Steve Jobs",
            "wordMal": "",
            "relationEN": "Tech CEOs",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_common_objects",
    "name": "Everyday Objects",
    "icon": "📦",
    "words": [
      {
        "civWord": "Chair",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sofa",
            "wordMal": "",
            "relationEN": "Seating furniture",
            "relationML": ""
          },
          {
            "word": "Table",
            "wordMal": "",
            "relationEN": "Dining furniture",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Table",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Desk",
            "wordMal": "",
            "relationEN": "Flat surface furniture",
            "relationML": ""
          },
          {
            "word": "Chair",
            "wordMal": "",
            "relationEN": "Furniture pairs",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Bed",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sofa",
            "wordMal": "",
            "relationEN": "Resting furniture",
            "relationML": ""
          },
          {
            "word": "Pillow",
            "wordMal": "",
            "relationEN": "Bedroom items",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sofa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Armchair",
            "wordMal": "",
            "relationEN": "Living room seating",
            "relationML": ""
          },
          {
            "word": "Bed",
            "wordMal": "",
            "relationEN": "Comfortable furniture",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Television",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Computer",
            "wordMal": "",
            "relationEN": "Screens",
            "relationML": ""
          },
          {
            "word": "Radio",
            "wordMal": "",
            "relationEN": "Entertainment devices",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Computer",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Laptop",
            "wordMal": "",
            "relationEN": "Computing devices",
            "relationML": ""
          },
          {
            "word": "Smartphone",
            "wordMal": "",
            "relationEN": "Digital screens",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Smartphone",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tablet",
            "wordMal": "",
            "relationEN": "Mobile devices",
            "relationML": ""
          },
          {
            "word": "Telephone",
            "wordMal": "",
            "relationEN": "Communication devices",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Clock",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Watch",
            "wordMal": "",
            "relationEN": "Timepieces",
            "relationML": ""
          },
          {
            "word": "Calendar",
            "wordMal": "",
            "relationEN": "Time tracking",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Watch",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Clock",
            "wordMal": "",
            "relationEN": "Timepieces",
            "relationML": ""
          },
          {
            "word": "Bracelet",
            "wordMal": "",
            "relationEN": "Wrist accessories",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Book",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Magazine",
            "wordMal": "",
            "relationEN": "Reading materials",
            "relationML": ""
          },
          {
            "word": "Notebook",
            "wordMal": "",
            "relationEN": "Paper items",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pen",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pencil",
            "wordMal": "",
            "relationEN": "Writing instruments",
            "relationML": ""
          },
          {
            "word": "Marker",
            "wordMal": "",
            "relationEN": "Drawing tools",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pencil",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pen",
            "wordMal": "",
            "relationEN": "Writing instruments",
            "relationML": ""
          },
          {
            "word": "Eraser",
            "wordMal": "",
            "relationEN": "School supplies",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cup",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Glass",
            "wordMal": "",
            "relationEN": "Drinking vessels",
            "relationML": ""
          },
          {
            "word": "Mug",
            "wordMal": "",
            "relationEN": "Beverage containers",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Plate",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bowl",
            "wordMal": "",
            "relationEN": "Eating dishes",
            "relationML": ""
          },
          {
            "word": "Fork",
            "wordMal": "",
            "relationEN": "Tableware",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Fork",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Spoon",
            "wordMal": "",
            "relationEN": "Eating utensils",
            "relationML": ""
          },
          {
            "word": "Knife",
            "wordMal": "",
            "relationEN": "Cutlery",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Knife",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Scissors",
            "wordMal": "",
            "relationEN": "Cutting tools",
            "relationML": ""
          },
          {
            "word": "Fork",
            "wordMal": "",
            "relationEN": "Utensils",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Shoe",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Boot",
            "wordMal": "",
            "relationEN": "Footwear",
            "relationML": ""
          },
          {
            "word": "Sock",
            "wordMal": "",
            "relationEN": "Foot clothing",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Shirt",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jacket",
            "wordMal": "",
            "relationEN": "Upper body clothing",
            "relationML": ""
          },
          {
            "word": "Pants",
            "wordMal": "",
            "relationEN": "Clothing items",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Toothbrush",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hairbrush",
            "wordMal": "",
            "relationEN": "Personal hygiene tools",
            "relationML": ""
          },
          {
            "word": "Toothpaste",
            "wordMal": "",
            "relationEN": "Dental care",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Towel",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Blanket",
            "wordMal": "",
            "relationEN": "Fabric rectangles",
            "relationML": ""
          },
          {
            "word": "Soap",
            "wordMal": "",
            "relationEN": "Bathroom items",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_nature",
    "name": "Nature",
    "icon": "🌿",
    "words": [
      {
        "civWord": "Tree",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Bush",
            "wordMal": "",
            "relationEN": "Woody plants",
            "relationML": ""
          },
          {
            "word": "Flower",
            "wordMal": "",
            "relationEN": "Plants",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Flower",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tree",
            "wordMal": "",
            "relationEN": "Plants",
            "relationML": ""
          },
          {
            "word": "Grass",
            "wordMal": "",
            "relationEN": "Garden greenery",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mountain",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hill",
            "wordMal": "",
            "relationEN": "Elevated landmasses",
            "relationML": ""
          },
          {
            "word": "Volcano",
            "wordMal": "",
            "relationEN": "Large landforms",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "River",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Lake",
            "wordMal": "",
            "relationEN": "Bodies of water",
            "relationML": ""
          },
          {
            "word": "Stream",
            "wordMal": "",
            "relationEN": "Flowing water",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Lake",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pond",
            "wordMal": "",
            "relationEN": "Still bodies of water",
            "relationML": ""
          },
          {
            "word": "River",
            "wordMal": "",
            "relationEN": "Freshwater bodies",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ocean",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sea",
            "wordMal": "",
            "relationEN": "Saltwater bodies",
            "relationML": ""
          },
          {
            "word": "Lake",
            "wordMal": "",
            "relationEN": "Large bodies of water",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sun",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Moon",
            "wordMal": "",
            "relationEN": "Celestial bodies",
            "relationML": ""
          },
          {
            "word": "Star",
            "wordMal": "",
            "relationEN": "Sky objects",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Moon",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sun",
            "wordMal": "",
            "relationEN": "Sky objects seen from Earth",
            "relationML": ""
          },
          {
            "word": "Planet",
            "wordMal": "",
            "relationEN": "Orbiting bodies",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Star",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Planet",
            "wordMal": "",
            "relationEN": "Space objects",
            "relationML": ""
          },
          {
            "word": "Sun",
            "wordMal": "",
            "relationEN": "Glowing celestial bodies",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cloud",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Fog",
            "wordMal": "",
            "relationEN": "Atmospheric moisture",
            "relationML": ""
          },
          {
            "word": "Rain",
            "wordMal": "",
            "relationEN": "Weather phenomena",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Rain",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Snow",
            "wordMal": "",
            "relationEN": "Precipitation",
            "relationML": ""
          },
          {
            "word": "Cloud",
            "wordMal": "",
            "relationEN": "Water from the sky",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Snow",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Ice",
            "wordMal": "",
            "relationEN": "Frozen water",
            "relationML": ""
          },
          {
            "word": "Rain",
            "wordMal": "",
            "relationEN": "Cold weather",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Wind",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Breeze",
            "wordMal": "",
            "relationEN": "Moving air",
            "relationML": ""
          },
          {
            "word": "Storm",
            "wordMal": "",
            "relationEN": "Weather conditions",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Storm",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hurricane",
            "wordMal": "",
            "relationEN": "Severe weather",
            "relationML": ""
          },
          {
            "word": "Rain",
            "wordMal": "",
            "relationEN": "Bad weather",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Volcano",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mountain",
            "wordMal": "",
            "relationEN": "Tall geological formations",
            "relationML": ""
          },
          {
            "word": "Earthquake",
            "wordMal": "",
            "relationEN": "Natural disasters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Earthquake",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tsunami",
            "wordMal": "",
            "relationEN": "Natural disasters",
            "relationML": ""
          },
          {
            "word": "Volcano",
            "wordMal": "",
            "relationEN": "Tectonic events",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Desert",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Beach",
            "wordMal": "",
            "relationEN": "Sandy landscapes",
            "relationML": ""
          },
          {
            "word": "Forest",
            "wordMal": "",
            "relationEN": "Ecosystems",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Forest",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Jungle",
            "wordMal": "",
            "relationEN": "Tree dense ecosystems",
            "relationML": ""
          },
          {
            "word": "Desert",
            "wordMal": "",
            "relationEN": "Natural biomes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Beach",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Desert",
            "wordMal": "",
            "relationEN": "Sandy areas",
            "relationML": ""
          },
          {
            "word": "Ocean",
            "wordMal": "",
            "relationEN": "Coastal areas",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Grass",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Moss",
            "wordMal": "",
            "relationEN": "Ground covering plants",
            "relationML": ""
          },
          {
            "word": "Flower",
            "wordMal": "",
            "relationEN": "Lawn plants",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_disney",
    "name": "Disney & Animation",
    "icon": "🏰",
    "words": [
      {
        "civWord": "Mickey Mouse",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Donald Duck",
            "wordMal": "",
            "relationEN": "Classic Disney characters",
            "relationML": ""
          },
          {
            "word": "Bugs Bunny",
            "wordMal": "",
            "relationEN": "Cartoon mascots",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Donald Duck",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Daffy Duck",
            "wordMal": "",
            "relationEN": "Cartoon ducks",
            "relationML": ""
          },
          {
            "word": "Goofy",
            "wordMal": "",
            "relationEN": "Mickey's friends",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Goofy",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pluto",
            "wordMal": "",
            "relationEN": "Disney dogs",
            "relationML": ""
          },
          {
            "word": "Donald Duck",
            "wordMal": "",
            "relationEN": "Classic Disney pals",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Simba",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mufasa",
            "wordMal": "",
            "relationEN": "Lion King lions",
            "relationML": ""
          },
          {
            "word": "Bambi",
            "wordMal": "",
            "relationEN": "Animated animal princes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Woody",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Buzz Lightyear",
            "wordMal": "",
            "relationEN": "Toy Story leads",
            "relationML": ""
          },
          {
            "word": "Jessie",
            "wordMal": "",
            "relationEN": "Pixar characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Buzz Lightyear",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Woody",
            "wordMal": "",
            "relationEN": "Andy's favorite toys",
            "relationML": ""
          },
          {
            "word": "Wall-E",
            "wordMal": "",
            "relationEN": "Sci-fi Pixar characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Snow White",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cinderella",
            "wordMal": "",
            "relationEN": "Classic Disney princesses",
            "relationML": ""
          },
          {
            "word": "Aurora",
            "wordMal": "",
            "relationEN": "Original princesses",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Cinderella",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Belle",
            "wordMal": "",
            "relationEN": "Disney princesses",
            "relationML": ""
          },
          {
            "word": "Snow White",
            "wordMal": "",
            "relationEN": "Fairy tale heroines",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Ariel",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Moana",
            "wordMal": "",
            "relationEN": "Ocean related princesses",
            "relationML": ""
          },
          {
            "word": "Belle",
            "wordMal": "",
            "relationEN": "Disney renaissance princesses",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Belle",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Cinderella",
            "wordMal": "",
            "relationEN": "Disney princesses",
            "relationML": ""
          },
          {
            "word": "Jasmine",
            "wordMal": "",
            "relationEN": "Brunette princesses",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Elsa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Anna",
            "wordMal": "",
            "relationEN": "Frozen sisters",
            "relationML": ""
          },
          {
            "word": "Rapunzel",
            "wordMal": "",
            "relationEN": "Modern CGI princesses",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Anna",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Elsa",
            "wordMal": "",
            "relationEN": "Arendelle royalty",
            "relationML": ""
          },
          {
            "word": "Rapunzel",
            "wordMal": "",
            "relationEN": "Spirited princesses",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Aladdin",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Peter Pan",
            "wordMal": "",
            "relationEN": "Adventurous Disney boys",
            "relationML": ""
          },
          {
            "word": "Hercules",
            "wordMal": "",
            "relationEN": "90s Disney heroes",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Peter Pan",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pinocchio",
            "wordMal": "",
            "relationEN": "Classic Disney boys",
            "relationML": ""
          },
          {
            "word": "Aladdin",
            "wordMal": "",
            "relationEN": "Flying characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Nemo",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Dory",
            "wordMal": "",
            "relationEN": "Finding Nemo fish",
            "relationML": ""
          },
          {
            "word": "Marlin",
            "wordMal": "",
            "relationEN": "Pixar ocean characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Dory",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Nemo",
            "wordMal": "",
            "relationEN": "Forgetful/Lost fish",
            "relationML": ""
          },
          {
            "word": "Wall-E",
            "wordMal": "",
            "relationEN": "Pixar protagonists",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Wall-E",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Eve",
            "wordMal": "",
            "relationEN": "Pixar robots",
            "relationML": ""
          },
          {
            "word": "Buzz Lightyear",
            "wordMal": "",
            "relationEN": "Space-faring characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Shrek",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Fiona",
            "wordMal": "",
            "relationEN": "Ogres",
            "relationML": ""
          },
          {
            "word": "Donkey",
            "wordMal": "",
            "relationEN": "Dreamworks characters",
            "relationML": ""
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
            "relationEN": "Animated dads",
            "relationML": ""
          },
          {
            "word": "SpongeBob",
            "wordMal": "",
            "relationEN": "Iconic yellow characters",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "SpongeBob",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Patrick Star",
            "wordMal": "",
            "relationEN": "Bikini Bottom residents",
            "relationML": ""
          },
          {
            "word": "Mickey Mouse",
            "wordMal": "",
            "relationEN": "Cartoon legends",
            "relationML": ""
          }
        ]
      }
    ]
  },
  {
    "id": "intl_places",
    "name": "Famous Places",
    "icon": "🗼",
    "words": [
      {
        "civWord": "Eiffel Tower",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Big Ben",
            "wordMal": "",
            "relationEN": "European landmarks",
            "relationML": ""
          },
          {
            "word": "Statue of Liberty",
            "wordMal": "",
            "relationEN": "Iconic monuments",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Statue of Liberty",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Eiffel Tower",
            "wordMal": "",
            "relationEN": "Iconic metal monuments",
            "relationML": ""
          },
          {
            "word": "Mount Rushmore",
            "wordMal": "",
            "relationEN": "American landmarks",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Big Ben",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Eiffel Tower",
            "wordMal": "",
            "relationEN": "European clock/towers",
            "relationML": ""
          },
          {
            "word": "Tower Bridge",
            "wordMal": "",
            "relationEN": "London landmarks",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Colosseum",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pantheon",
            "wordMal": "",
            "relationEN": "Ancient Roman structures",
            "relationML": ""
          },
          {
            "word": "Parthenon",
            "wordMal": "",
            "relationEN": "Ancient ruins",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Great Wall of China",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Machu Picchu",
            "wordMal": "",
            "relationEN": "Ancient wonders",
            "relationML": ""
          },
          {
            "word": "Taj Mahal",
            "wordMal": "",
            "relationEN": "Asian landmarks",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Taj Mahal",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Great Wall of China",
            "wordMal": "",
            "relationEN": "Asian wonders",
            "relationML": ""
          },
          {
            "word": "Pyramids of Giza",
            "wordMal": "",
            "relationEN": "Iconic tombs/monuments",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Pyramids of Giza",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Sphinx",
            "wordMal": "",
            "relationEN": "Ancient Egyptian monuments",
            "relationML": ""
          },
          {
            "word": "Machu Picchu",
            "wordMal": "",
            "relationEN": "Ancient wonders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Machu Picchu",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Chichen Itza",
            "wordMal": "",
            "relationEN": "Ancient American ruins",
            "relationML": ""
          },
          {
            "word": "Colosseum",
            "wordMal": "",
            "relationEN": "Historic ruins",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Sydney Opera House",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Eiffel Tower",
            "wordMal": "",
            "relationEN": "Modern iconic buildings",
            "relationML": ""
          },
          {
            "word": "Burj Khalifa",
            "wordMal": "",
            "relationEN": "Architectural marvels",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Burj Khalifa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Empire State Building",
            "wordMal": "",
            "relationEN": "Record breaking skyscrapers",
            "relationML": ""
          },
          {
            "word": "Eiffel Tower",
            "wordMal": "",
            "relationEN": "Tall structures",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Empire State Building",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Chrysler Building",
            "wordMal": "",
            "relationEN": "New York skyscrapers",
            "relationML": ""
          },
          {
            "word": "Burj Khalifa",
            "wordMal": "",
            "relationEN": "Famous tall buildings",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Mount Everest",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Mount Fuji",
            "wordMal": "",
            "relationEN": "Famous mountains",
            "relationML": ""
          },
          {
            "word": "Grand Canyon",
            "wordMal": "",
            "relationEN": "Natural wonders",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Grand Canyon",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Niagara Falls",
            "wordMal": "",
            "relationEN": "North American natural wonders",
            "relationML": ""
          },
          {
            "word": "Mount Everest",
            "wordMal": "",
            "relationEN": "Geological marvels",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Niagara Falls",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Victoria Falls",
            "wordMal": "",
            "relationEN": "Famous waterfalls",
            "relationML": ""
          },
          {
            "word": "Grand Canyon",
            "wordMal": "",
            "relationEN": "Natural tourist attractions",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Stonehenge",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Pyramids of Giza",
            "wordMal": "",
            "relationEN": "Ancient mysteries",
            "relationML": ""
          },
          {
            "word": "Colosseum",
            "wordMal": "",
            "relationEN": "European historical sites",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Leaning Tower of Pisa",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Eiffel Tower",
            "wordMal": "",
            "relationEN": "European towers",
            "relationML": ""
          },
          {
            "word": "Colosseum",
            "wordMal": "",
            "relationEN": "Italian landmarks",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Times Square",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Piccadilly Circus",
            "wordMal": "",
            "relationEN": "Famous neon intersections",
            "relationML": ""
          },
          {
            "word": "Central Park",
            "wordMal": "",
            "relationEN": "New York locations",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Central Park",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Hyde Park",
            "wordMal": "",
            "relationEN": "Famous city parks",
            "relationML": ""
          },
          {
            "word": "Times Square",
            "wordMal": "",
            "relationEN": "New York attractions",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Golden Gate Bridge",
        "civWordMal": "",
        "imposters": [
          {
            "word": "Tower Bridge",
            "wordMal": "",
            "relationEN": "Iconic bridges",
            "relationML": ""
          },
          {
            "word": "Statue of Liberty",
            "wordMal": "",
            "relationEN": "American landmarks",
            "relationML": ""
          }
        ]
      },
      {
        "civWord": "Louvre Museum",
        "civWordMal": "",
        "imposters": [
          {
            "word": "British Museum",
            "wordMal": "",
            "relationEN": "Famous museums",
            "relationML": ""
          },
          {
            "word": "Eiffel Tower",
            "wordMal": "",
            "relationEN": "Paris landmarks",
            "relationML": ""
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') window.intlPacks = intlPacks;
if (typeof window !== 'undefined') window.packs = packs;
if (typeof module !== 'undefined' && module.exports) module.exports = { packs, intlPacks };
