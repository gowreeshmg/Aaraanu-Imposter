import json

RELATIONS_HH = {
    ("Nilavilakku","Kuthuvilakku"): ("Both are traditional Kerala brass oil lamps used during prayers and festivals, one stands on the floor and the other is shorter.", "നിലവിളക്കും കുത്തുവിളക്കും ഒരേ ദേശ ഓലിവ് എണ്ണ ഉള്ള, കേരള ദേവാലയ ആഘോഷ വേളകളിൽ ഉപയോഗിക്കുന്ന, പരമ്പരാഗത ചെമ്പ് ഓയിൽ ദീപങ്ങളാണ്; ഒന്ന് നിലത്ത് നിൽക്കുന്നതും മറ്റൊന്ന് കൊച്ചുതും ആണ്."),
    ("Nilavilakku","Kindi"): ("Both are traditional Kerala brass vessels for ritual use, one is an oil lamp and the other is a water vessel used in prayers.", "നിലവിളക്കും കിണ്ടിയും ഒരേ ദേശ ചെമ്പ് ഉരുപ്പടികളാണ്; ഒന്ന് ഓയിൽ ദീപവും മറ്റൊന്ന് ആരാധനയ്ക്ക് ഉപയോഗിക്കുന്ന ചെമ്പ് ജലപ്പാത്രവുമാണ്."),
    ("Thorthu","Mundu"): ("Both are white cotton cloth woven in Kerala, one is a thin towel and the other is a wrap-around garment worn by men.", "തോർത്തും മുണ്ടും കേരളത്തിൽ നൂലാൽ നെയ്ത, വെള്ള കോട്ടൺ തുണികളാണ്; ഒന്ന് നേർത്ത തൂവാലയും മറ്റൊന്ന് ആണുങ്ങൾ ചുറ്റി ഉടുക്കുന്ന വസ്ത്രവുമാണ്."),
    ("Thorthu","Lungi"): ("Both are simple cloth garments worn by Kerala men in daily life, the Thorthu is thin cotton and the Lungi has a pattern.", "തോർത്തും ലുങ്കിയും കേരള ആണുങ്ങൾ ദൈനംദിന ജീവിതത്തിൽ ഉടുക്കുന്ന, ലളിതമായ തുണി വസ്ത്രങ്ങളാണ്; തോർത്ത് നേർത്ത കോട്ടൺ ആകൃതിയും ലുങ്കി ചിത്രം ഉള്ളതുമാണ്."),
    ("Muram","Kotta"): ("Both are traditional Kerala woven winnowing baskets used to separate grain from husk in the kitchen or field.", "മുറവും കൊട്ടയും ഒരേ കേരള ഗ്രാമം, അടുക്കള, ഇടം, ഉള്ളി ആ ഉള്ളി ഒഴിക്കൽ, ഒഴിക്കൽ ഉള്ള, ഇഴഞ്ഞ, ധാന്യം തരംതിരിക്കൽ പൊളി ഉരുപ്പടികളാണ്."),
    ("Muram","Vatti"): ("Both are woven bamboo or cane baskets used in Kerala homes for separating or carrying grain and produce.", "മുറവും വട്ടിയും ഒരേ ഇഴഞ്ഞ മുള അല്ലെങ്കിൽ ചൂരൽ ഉരുപ്പടികളാണ്; കേരള ഗൃഹങ്ങളിൽ ധാന്യം തരംതിരിക്കൽ, കൊണ്ടുനടക്കൽ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്നു."),
    ("Chattukam","Thavi"): ("Both are long-handled Kerala kitchen ladles used for stirring curry or serving rice, one is flat and one is deep.", "ചട്ടുകവും തവിയും ഒരേ ദൈർഘ്യമേറിയ കൈ ഉള്ള, കേരള അടുക്കള ഉരുപ്പടികളാണ്; ഒന്ന് ഭക്ഷ്യ ഇളക്കൽ, മറ്റൊന്ന് ഭക്ഷ്യ വിളമ്പൽ ആണ്."),
    ("Chattukam","Chirava"): ("Both are traditional Kerala kitchen tools—one is a ladle for stirring and one is a knife-like blade for scraping.", "ചട്ടുകവും ചിരവയും ഒരേ, പരമ്പരാഗത കേരള അടുക്കള ഉരുപ്പടികളാണ്; ഒന്ന് ഇളക്കൽ ഉപകരണവും, മറ്റൊന്ന് ചുരണ്ടൽ ഉരുൾ ആകൃതിയിലുള്ള ബ്ലേഡ് ഉരുപ്പടിയും ആണ്."),
    ("Mundum Neriyathum","Sari"): ("Both are traditional Indian garments worn by women, one is the Kerala two-piece set and the other is a six-yard wrap.", "മുണ്ടും നേരിയതും സാരിയും ഒരേ ഇന്ത്യൻ പരമ്പരാഗത, സ്ത്രീ വസ്ത്ര ആകൃതികളാണ്; ഒന്ന് കേരള രണ്ടുകഷ്ണ ഉടുക്കും, മറ്റൊന്ന് ആറ് മീറ്റർ ആകൃതിയും ആണ്."),
    ("Mundum Neriyathum","Pattupavada"): ("Both are traditional Kerala women's garments worn on festive occasions like Onam, one for adults and one for girls.", "മുണ്ടും നേരിയതും പട്ടുപാവടയും ഒരേ ഓണം പോലുള്ള ഉത്സവ വേളകളിൽ ഉടുക്കുന്ന, കേരള പരമ്പരാഗത വനിതാ വസ്ത്ര ആകൃതികളാണ്; ഒന്ന് മുതിർന്നവർക്കും മറ്റൊന്ന് പെൺ കുട്ടികൾക്കും ആണ്."),
    ("Uruli","Cheenachatti"): ("Both are wide, round cooking vessels used in Kerala kitchens—the Uruli is traditionally bronze and the Cheenachatti is iron.", "ഉരുളിയും ചീനച്ചട്ടിയും ഒരേ കേരള അടുക്കളകളിൽ ഉപയോഗിക്കുന്ന, വൃത്ത ആകൃതിയിലുള്ള, വലിയ പാചക പാത്രങ്ങളാണ്; ഉരുളി പരമ്പരാഗതമായി വെങ്കലവും ചീനച്ചട്ടി ഇരുമ്പുമാണ്."),
    ("Uruli","Charuvam"): ("Both are traditional Kerala cooking pots used on open fire for making rice or curry in large quantities.", "ഉരുളിയും ചരുവവും ഒരേ, തുറന്ന അടുപ്പിൽ ഉപയോഗിക്കുന്ന, ചോറ്, കറി, ധാരാളം ഭക്ഷ്യ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്ന, പരമ്പരാഗത കേരള പാചക പാത്രങ്ങളാണ്."),
    ("Para","Edangazhi"): ("Both are traditional Kerala grain-measuring vessels used in rural areas to measure rice and other commodities.", "പറയും ഇടങ്ങഴിയും ഒരേ കേരള ഗ്രാമ ആണ്, ചോറ്, ധാന്യ ആകൃതി ഉള്ള, ഗ്രാമ ഇടങ്ങളിൽ ഉപയോഗിക്കുന്ന, പരമ്പരാഗത ഭാരം അളക്കൽ ഉരുപ്പടികളാണ്."),
    ("Para","Nazhi"): ("Both are traditional Kerala units and containers for measuring dry grain, with Para being larger and Nazhi smaller.", "പറയും നാഴിയും ഒരേ ഗ്രാമ ഭക്ഷ്യ ഉൽഭവ, ധാന്യ അളക്കൽ ഉരുപ്പടികളാണ്; പറ വലിയതും നാഴി ചെറിയതുമാണ്."),
    ("Kudam","Kalam"): ("Both are traditional Kerala water storage vessels, one is a narrow-necked pot and the other is a wide-mouthed one.", "കുടവും കലവും ഒരേ ജലം ശേഖരണ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; കുടം ഇടുങ്ങിയ കഴുത്ത് ഉള്ളതും കലം വിശാലമായ വായ ഉള്ളതുമാണ്."),
    ("Kudam","Bharani"): ("Both are traditional Kerala earthen pots used for storing water or pickles, made from clay by traditional potters.", "കുടവും ഭരണിയും ഒരേ, ജലം, ഉപ്പിലിടൽ ശേഖരണ, കളിമൺ പോളി, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്."),
    ("Chembu","Charuvam"): ("Both are traditional Kerala cooking pots used on firewood stoves to cook rice and curry in village homes.", "ചെമ്പും ചരുവവും ഒരേ, ഗ്രാമ ഗൃഹങ്ങളിൽ വിറക് ഉപയോഗിച്ച് ചോറ്, കറി ഉണ്ടാക്കൽ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്ന, പരമ്പരാഗത കേരള പാചക പാത്രങ്ങളാണ്."),
    ("Chembu","Kalam"): ("Both are traditional Kerala vessels for holding liquids, the Chembu is a copper pot and the Kalam is earthenware.", "ചെമ്പും കലവും ഒരേ ദ്രാവകം ഉൾക്കൊള്ളൽ ഉള്ള, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; ചെമ്പ് ചെമ്പ് ലോഹ കഴുകൽ, കലം കളിമൺ ഉരുപ്പടി ആണ്."),
    ("Ammikallu","Arakallu"): ("Both are traditional Kerala stone grinding tools—Ammikallu is used for grinding spices and Arakallu for flour.", "അമ്മിക്കല്ലും അരക്കല്ലും ഒരേ, പരമ്പരാഗത കേരള, ശില ആകൃതി ഉള്ള, ഇടിക്കൽ ഉരുപ്പടികളാണ്; അമ്മിക്കല്ല് സുഗന്ധ ദ്രവ്യ ഉരുൾ ഉള്ളതും, അരക്കല്ല് ഉൽഭവ പൊടിക്കൽ ഉള്ളതുമാണ്."),
    ("Ammikallu","Aattukallu"): ("Both are heavy stone tools in a Kerala kitchen, one grinds wet spices and the other grinds grains in a mortar shape.", "അമ്മിക്കല്ലും ആട്ടുകല്ലും ഒരേ, കേരള അടുക്കള, ഭക്ഷ്യ ഇടിക്കൽ, ഭക്ഷ്യ ഉരൾ ഉള്ള, ഭാരമേറിയ ശില ഉരുപ്പടികളാണ്; ഒന്ന് ഈർപ്പ ഇടിക്കൽ ഉള്ളതും, മറ്റൊന്ന് ധാന്യ ഇടിക്കൽ ഉള്ളതുമാണ്."),
    ("Arakkallu","Ammikallu"): ("Both are flat stone grinding slabs used in Kerala to grind rice batter and spices for cooking.", "അരക്കല്ലും അമ്മിക്കല്ലും ഒരേ, കേരള ഭക്ഷ്യ ഇടിക്കൽ, ചോറ്, സുഗന്ധ ദ്രവ്യ ഇടിക്കൽ ഉള്ള, ഒരു ഉൽഭവ, ഒരു ഉരൾ ഉള്ള, ഒരു ഇടുങ്ങിയ ഉൽഭവ ശില ഉരുപ്പടികളാണ്."),
    ("Arakkallu","Aattukallu"): ("Both are stone grinding implements used in Kerala kitchens, one is a flat slab and the other is a rounded mortar.", "അരക്കല്ലും ആട്ടുകല്ലും ഒരേ, കേരള അടുക്കള ശില ഉരുപ്പടികളാണ്; ഒന്ന് ഇടുങ്ങിയ ഉൽഭവ ഉരൾ ഉള്ള, മറ്റൊന്ന് ഉരൾ ആകൃതിയിലുള്ള ഉൽഭവ ആണ്."),
    ("Aattukallu","Ammikallu"): ("Both are stone grinding tools in Kerala kitchens, together forming the traditional wet grinding set.", "ആട്ടുകല്ലും അമ്മിക്കല്ലും ഒരേ, കേരള അടുക്കള, ഭക്ഷ്യ ഇടിക്കൽ, ഉൽഭവ ഉൽഭവ ശില ഉരുപ്പടികളാണ്; ഒരേ, ഈർപ്പ ഇടിക്കൽ ഉരൾ ഉൽഭവ ഭരണ ഉൽഭവ ഇടുങ്ങ."),
    ("Aattukallu","Ural"): ("Both are traditional Kerala stone or wooden mortars used for pounding and grinding spices and rice.", "ആട്ടുകല്ലും ഉരലും ഒരേ, സുഗന്ധ ദ്രവ്യ, ആരിടി ഇടിക്കൽ, പരമ്പരാഗത കേരള ശില അല്ലെങ്കിൽ മരം ഉരൾ ഉരുപ്പടികളാണ്."),
    ("Kindi","Kudam"): ("Both are traditional Kerala water-holding vessels—Kindi has a spout for pouring and Kudam is for storing.", "കിണ്ടിയും കുടവും ഒരേ, ജലം ഉൾക്കൊള്ളൽ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; കിണ്ടിക്ക് ഉൽഭവ ഒഴിക്കൽ ആകൃതി ഉള്ളതും, കുടം ജലം ശേഖരണ ഉരുപ്പടിയും ആണ്."),
    ("Kindi","Mondha"): ("Both are traditional Kerala brass water vessels used in rituals and daily life, Kindi has a spout and Mondha is bowl-shaped.", "കിണ്ടിയും മൊന്ത യും ഒരേ, ആചാര, ദൈനംദിന ജീവിതം, ചെമ്പ് ജലം ഉൽഭവ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്; കിണ്ടി ഉൽഭവ ഒഴിക്കൽ ആകൃതി ഉള്ളതും, മൊന്ത ഉരൾ ആകൃതിയിലുള്ളതും ആണ്."),
    ("Thookkuvilakku","Nilavilakku"): ("Both are traditional Kerala oil lamps used in temples and homes, one hangs from the ceiling and one stands on the floor.", "തൂക്കുവിളക്കും നിലവിളക്കും ഒരേ, ദേവാലയ, ഗൃഹ ആചാര ഉള്ള, ചെമ്പ് ഓയിൽ ദീപങ്ങളാണ്; തൂക്കുവിളക്ക് മേൽക്കൂരയിൽ നിന്ന് ഇറക്കിയിരിക്കുന്നതും, നിലവിളക്ക് നിലത്ത് നിൽക്കുന്നതുമാണ്."),
    ("Thookkuvilakku","Aalvilakku"): ("Both are hanging oil lamps in Kerala temples, one is a multi-wick brass lamp and the other is a massive hanging one.", "തൂക്കുവിളക്കും ആൽ‌വിളക്കും ഒരേ, കേരള ദേവാലയ, ഇറക്കി ഓയിൽ ദീപങ്ങളാണ്; ഒന്ന് ഒരേ ഇറക്കി ചെമ്പ് ദീപം ഉള്ളതും, മറ്റൊന്ന് ഒരേ ഭീമ ഇറക്കി ദീപം ഉള്ളതുമാണ്."),
    ("Mundu","Lungi"): ("Both are lower-body wrap garments worn by Kerala men—Mundu is plain white and Lungi has colourful checks.", "മുണ്ടും ലുങ്കിയും ഒരേ, കേരള ആണ്‌, ശരീരം, ഉടുക്കൽ, ചുറ്റി, ഉടുക്കൽ വസ്ത്ര ആകൃതികളാണ്; മുണ്ട് വെള്ള ഒഴിഞ്ഞ ഉടക്കൽ ഉള്ളതും ലുങ്കി ഉൽഭവ ചെക്ക് ഉള്ളതും ആണ്."),
    ("Kasavu Saree","Pattu Saree"): ("Both are traditional Indian sarees worn on festive occasions—Kasavu has a golden border and Pattu is made of silk.", "കസവ് സാരിയും പട്ടു സാരിയും ഒരേ, ഉത്സവ വേളകളിൽ ഉടുക്കൽ, പരമ്പരാഗത ഇന്ത്യൻ സാരി ആകൃതികളാണ്; കസവ് ഉൽഭവ സ്വർണ്ണ ബോർഡർ ഉള്ളതും, പട്ടുസാരി, ഒരേ, സിൽക്ക് ഉൽഭവ ആണ്."),
    ("Chirava","Arival"): ("Both are traditional Kerala kitchen blade tools—Chirava is used for grating coconut and Arival for cutting vegetables.", "ചിരവയും അരിവാളും ഒരേ, പരമ്പരാഗത കേരള അടുക്കള ബ്ലേഡ് ഉരുപ്പടികളാണ്; ചിരവ തേങ്ങ ചുരണ്ടൽ ഉള്ളതും, അരിവാൾ ഉൽഭവ ഉൽഭവ ശാക്ഭ്യ ഉൽഭവ ആണ്."),
    ("Paathram","Kindi"): ("Both are traditional Kerala brass vessels for holding water used in rituals and ceremonies.", "പാത്രവും കിണ്ടിയും ഒരേ, ആചാര, ചെമ്പ് ജലം ഉൽഭവ, പരമ്പരാഗത കേരള ഉരുപ്പടികളാണ്."),
    ("Puttu Kutti","Idiyappam Maker"): ("Both are cylindrical kitchen tools unique to Kerala used to press and steam rice dishes for breakfast.", "പുട്ടുകുറ്റിയും ഇടിയപ്പം മേക്കറും ഒരേ, കേരളത്തിൽ, ആരിടി ഭക്ഷ്യ ആവിയിൽ ആക്കൽ ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഒരേ ഉൽഭവ ആകൃതി ഉള്ള, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആകൃതി ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Vaal Kannadi","Nilavilakku"): ("Both are traditional Kerala items used in rituals—Vaal Kannadi is a mirror used in Kali pooja and Nilavilakku is a sacred lamp.", "വാൾ കണ്ണാടിയും നിലവിളക്കും ഒരേ, കേരള ആചാര ഉൽഭവ ഉൽഭവ ഉരുപ്പടികളാണ്; വാൾ കണ്ണാടി കാളി പൂജ ഉൽഭവ ഉൽഭവ, നിലവിളക്ക് ദേശ ഉൽഭവ ദീപം ആണ്."),
    ("Kalam","Bharani"): ("Both are traditional earthenware storage pots in Kerala—Kalam is for water and Bharani is for pickles and oil.", "കലവും ഭരണിയും ഒരേ, കേരള, കളിമൺ ശേഖരണ, ഉൽഭവ ഉരുപ്പടികളാണ്; കലം ജലം ഉൽഭവ ഉള്ളതും, ഭരണി ഉൽഭവ ഉൽഭവ, ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Cheenachatti","Dosa Kallu"): ("Both are flat iron cooking vessels used on the stove to make dosas and other flat pancakes in Kerala.", "ചീനച്ചട്ടിയും ദോശക്കല്ലും ഒരേ, ദോശ, ഉൽഭവ ഒരേ, ഇരുമ്പ്, ആകൃതി, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ആണ്."),
    ("Kettle","Thermos"): ("Both are containers for holding hot beverages like tea and coffee and keeping them at the right temperature.", "കെറ്റിലും തെർമോസും ഒരേ ചൂടുള്ള ചായ, കാപ്പി ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Bharani","Kalam"): ("Both are traditional Kerala clay storage vessels, Bharani for pickles and Kalam for water storage.", "ഭരണിയും കലവും ഒരേ, കളിമൺ ശേഖരണ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Kattil","Metha"): ("Both are pieces of bedroom furniture for resting—Kattil is a wooden cot frame and Metha is the mattress.", "കട്ടിലും മെത്തയും ഒരേ, ഒരേ, ഒരേ, ഒരേ, ഒരേ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Oonjal","Sliding Board"): ("Both are swinging or sliding playthings—Oonjal is a traditional wooden swing in Kerala homes and the Sliding Board is a playground fixture.", "ഊഞ്ഞാലും സ്ലൈഡിംഗ് ബോർഡും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Chattuvam","Thavi"): ("Both are long-handled ladles for stirring and serving curries and liquids in Kerala kitchens.", "ചട്ടുവവും തവിയും ഒരേ, ഇളക്കൽ, ദ്രാവക ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Paya","Metha"): ("Both are sleeping surfaces in Kerala—Paya is a woven mat on the floor and Metha is a soft mattress on a cot.", "പായ ഉം മെത്തയും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Thiri","Mezhukuthiri"): ("Both are traditional lighting items in Kerala—Thiri is a wick for oil lamps and Mezhukuthiri is a wax candle.", "തിരിയും മെഴുകുതിരിയും ഒരേ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ, ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Kindu Brass","Nilavilakku"): ("Both are traditional Kerala brass items used in homes and temples during religious rituals and prayers.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Alavu Para","Idangazhi"): ("Both are traditional Kerala grain measuring containers, one is larger and one is a smaller fractional measure.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Kindu Vessel","Kindi"): ("Both are traditional Kerala narrow-necked vessels for pouring water used in rituals and daily life.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Chappathi Kallu","Ammikkallu"): ("Both are flat stone or wooden rolling surfaces used in Kerala kitchens for grinding and rolling dough.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Arippa","Filter"): ("Both are used to separate liquids from solids in Kerala kitchens—Arippa is traditional and Filter is modern.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Choottu","Pantham"): ("Both are traditional Kerala flaming torchlight items for outdoor lighting during festivals and processions.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
    ("Madaal","Thengu"): ("Both are tall palm trees native to Kerala—Madaal is a date palm and Thengu is the coconut palm.", "ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ഉൽഭവ ആണ്."),
}

with open("scratch/rel_chunk_1.json", "r", encoding="utf-8") as f:
    chunk = json.load(f)

# Load existing bakery fixes
with open("scratch/rel_chunk_1_done.json", "r", encoding="utf-8") as f:
    chunk_done = json.load(f)

# Now apply household fixes to chunk_done
fixed = 0
for pack in chunk_done:
    if pack["id"] == "home":
        for word in pack["words"]:
            cv = word["civWord"]
            for imp in word["imposters"]:
                key = (cv, imp["word"])
                if key in RELATIONS_HH:
                    imp["relationEN"], imp["relationML"] = RELATIONS_HH[key]
                    fixed += 1

print(f"Fixed {fixed} household relations")

with open("scratch/rel_chunk_1_done.json", "w", encoding="utf-8") as f:
    json.dump(chunk_done, f, indent=2, ensure_ascii=False)
