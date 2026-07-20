import json

data = {
  "sports": [
    {"civWord": "Football", "civWordMal": "ഫുട്ബോൾ", "imposters": [
      {"word": "Rugby", "wordMal": "റഗ്ബി", "relationEN": "Both are team field sports, but rugby allows handling.", "relationML": "രണ്ടും ഫീൽഡ് ഗെയിമുകളാണ്, റഗ്ബിയിൽ പന്ത് കയ്യിലെടുക്കാം."},
      {"word": "Futsal", "wordMal": "ഫുട്സാൽ", "relationEN": "Futsal is the indoor, smaller court version of football.", "relationML": "ഫുട്ബോളിന്റെ ഇൻഡോർ പതിപ്പാണ് ഫുട്സാൽ."}
    ]},
    {"civWord": "Cricket", "civWordMal": "ക്രിക്കറ്റ്", "imposters": [
      {"word": "Baseball", "wordMal": "ബേസ്ബോൾ", "relationEN": "Both are bat-and-ball sports with bases/wickets.", "relationML": "രണ്ടും ബാറ്റും പന്തും ഉപയോഗിക്കുന്ന കളികളാണ്."},
      {"word": "Tennis", "wordMal": "ടെന്നീസ്", "relationEN": "Both involve striking a ball, though tennis uses a racket.", "relationML": "രണ്ടിലും പന്ത് അടിക്കുന്നതാണ് പ്രധാനം."}
    ]},
    {"civWord": "Kabaddi", "civWordMal": "കബഡി", "imposters": [
      {"word": "Wrestling", "wordMal": "ഗുസ്തി", "relationEN": "Both involve grappling and physical restraint.", "relationML": "രണ്ടിലും ശാരീരികമായ പിടുത്തവും ശക്തിയും ആവശ്യമാണ്."},
      {"word": "Kho Kho", "wordMal": "ഖോ ഖോ", "relationEN": "Both are traditional Indian tag sports.", "relationML": "രണ്ടും ഇന്ത്യയിലെ പരമ്പരാഗത ടാഗ് ഗെയിമുകളാണ്."}
    ]},
    {"civWord": "Volleyball", "civWordMal": "വോളിബോൾ", "imposters": [
      {"word": "Basketball", "wordMal": "ബാസ്കറ്റ്ബോൾ", "relationEN": "Both are court games played with hands and a large ball.", "relationML": "രണ്ടും വലിയ പന്ത് ഉപയോഗിച്ച് കൈകൊണ്ട് കളിക്കുന്ന ഗെയിമുകളാണ്."},
      {"word": "Throwball", "wordMal": "ത്രോബോൾ", "relationEN": "Very similar net games, but throwball involves catching.", "relationML": "നെറ്റ് ഉപയോഗിച്ചുള്ള കളികളാണ്, ത്രോബോളിൽ പന്ത് പിടിക്കാം."}
    ]},
    {"civWord": "Vallamkali", "civWordMal": "വള്ളംകളി", "imposters": [
      {"word": "Rowing", "wordMal": "റോവിങ്", "relationEN": "Both are boat racing sports.", "relationML": "രണ്ടും വെള്ളത്തിലുള്ള വള്ളം തുഴയൽ മത്സരങ്ങളാണ്."},
      {"word": "Dragon Boat", "wordMal": "ഡ്രാഗൺ ബോട്ട്", "relationEN": "Both are traditional team boat races.", "relationML": "രണ്ടും പരമ്പരാഗത വള്ളംകളി മത്സരങ്ങളാണ്."}
    ]},
    {"civWord": "Tug of War", "civWordMal": "വടംവലി", "imposters": [
      {"word": "Arm Wrestling", "wordMal": "പഞ്ചഗുസ്തി", "relationEN": "Both are pure strength-based pulling/pushing contests.", "relationML": "രണ്ടും ശക്തി പരീക്ഷിക്കുന്ന മത്സരങ്ങളാണ്."},
      {"word": "Weightlifting", "wordMal": "ഭാരോദ്വഹനം", "relationEN": "Both require immense physical strength and grip.", "relationML": "രണ്ടിലും വലിയ ശാരീരിക ശക്തി ആവശ്യമാണ്."}
    ]},
    {"civWord": "Sevens Football", "civWordMal": "സെവൻസ് ഫുട്ബോൾ", "imposters": [
      {"word": "Futsal", "wordMal": "ഫുട്സാൽ", "relationEN": "Both are smaller-format football variations.", "relationML": "രണ്ടും ഫുട്ബോളിന്റെ ചെറിയ രൂപങ്ങളാണ്."},
      {"word": "Beach Soccer", "wordMal": "ബീച്ച് സോക്കർ", "relationEN": "Both are informal, smaller-pitch football games.", "relationML": "രണ്ടും ചെറിയ മൈതാനത്ത് കളിക്കുന്ന ഫുട്ബോൾ ആണ്."}
    ]},
    {"civWord": "Kho Kho", "civWordMal": "ഖോ ഖോ", "imposters": [
      {"word": "Kabaddi", "wordMal": "കബഡി", "relationEN": "Both are traditional Indian team tag games.", "relationML": "രണ്ടും ഇന്ത്യൻ പരമ്പരാഗത ടാഗ് ഗെയിമുകളാണ്."},
      {"word": "Hide and Seek", "wordMal": "ഒളിച്ചുകളി", "relationEN": "Both involve chasing and evading players.", "relationML": "രണ്ടും ഓടിയും ഒളിച്ചും കളിക്കുന്ന ഗെയിമുകളാണ്."}
    ]},
    {"civWord": "Badminton", "civWordMal": "ബാഡ്മിന്റൺ", "imposters": [
      {"word": "Tennis", "wordMal": "ടെന്നീസ്", "relationEN": "Both are racket sports played over a net.", "relationML": "രണ്ടും നെറ്റിനു മുകളിലൂടെ റാക്കറ്റ് ഉപയോഗിച്ചു കളിക്കുന്നതാണ്."},
      {"word": "Squash", "wordMal": "സ്ക്വാഷ്", "relationEN": "Both are fast-paced racket sports.", "relationML": "രണ്ടും വേഗതയുള്ള റാക്കറ്റ് കളികളാണ്."}
    ]},
    {"civWord": "Swimming", "civWordMal": "നീന്തൽ", "imposters": [
      {"word": "Water Polo", "wordMal": "വാട്ടർ പോളോ", "relationEN": "Both take place entirely in a swimming pool.", "relationML": "രണ്ടും നീന്തൽക്കുളത്തിൽ നടക്കുന്ന കായിക വിനോദങ്ങളാണ്."},
      {"word": "Diving", "wordMal": "ഡൈവിങ്", "relationEN": "Both are aquatic Olympic sports.", "relationML": "രണ്ടും വെള്ളത്തിലെ ഒളിമ്പിക് മത്സരങ്ങളാണ്."}
    ]},
    {"civWord": "Athletics", "civWordMal": "അത്‌ലറ്റിക്സ്", "imposters": [
      {"word": "Gymnastics", "wordMal": "ജിംനാസ്റ്റിക്സ്", "relationEN": "Both involve individual physical feats and flexibility.", "relationML": "രണ്ടും ശാരീരിക വഴക്കവും കഴിവും വേണ്ട മത്സരങ്ങളാണ്."},
      {"word": "Triathlon", "wordMal": "ട്രയാത്ത്ലൺ", "relationEN": "Both are grueling physical endurance events.", "relationML": "രണ്ടും വലിയ ശാരീരിക ക്ഷമത വേണ്ടവയാണ്."}
    ]},
    {"civWord": "Javelin", "civWordMal": "ജാവലിൻ", "imposters": [
      {"word": "Shot Put", "wordMal": "ഷോട്ട് പുട്ട്", "relationEN": "Both are track and field throwing events.", "relationML": "രണ്ടും എറിയുന്ന അത്‌ലറ്റിക് മത്സരങ്ങളാണ്."},
      {"word": "Discus Throw", "wordMal": "ഡിസ്കസ് ത്രോ", "relationEN": "Both involve throwing objects for maximum distance.", "relationML": "ദൂരത്തേക്ക് വസ്തുക്കൾ എറിയുന്ന മത്സരങ്ങളാണ്."}
    ]},
    {"civWord": "Relay", "civWordMal": "റിലേ", "imposters": [
      {"word": "Sprint", "wordMal": "സ്പ്രിന്റ്", "relationEN": "Both are fast-paced track running events.", "relationML": "രണ്ടും വേഗതയേറിയ ഓട്ടമത്സരങ്ങളാണ്."},
      {"word": "Marathon", "wordMal": "മാരത്തൺ", "relationEN": "Both are running events, though opposite in distance.", "relationML": "രണ്ടും ഓട്ടമത്സരങ്ങളാണ്."}
    ]},
    {"civWord": "Boat Race", "civWordMal": "വള്ളംകളി", "imposters": [
      {"word": "Sailing", "wordMal": "സെയിലിംഗ്", "relationEN": "Both involve racing watercrafts.", "relationML": "രണ്ടും വെള്ളത്തിലുള്ള മത്സരങ്ങളാണ്."},
      {"word": "Canoeing", "wordMal": "കനോയിങ്", "relationEN": "Both involve paddling narrow boats.", "relationML": "തുഴ ഉപയോഗിച്ചുള്ള വള്ളംകളികളാണ്."}
    ]},
    {"civWord": "Carrom", "civWordMal": "കാരംസ്", "imposters": [
      {"word": "Billiards", "wordMal": "ബില്യാർഡ്സ്", "relationEN": "Both involve striking pieces into pockets on a board/table.", "relationML": "രണ്ടും കുഴികളിലേക്ക് കരുക്കൾ അടിച്ചിടുന്ന കളിയാണ്."},
      {"word": "Chess", "wordMal": "ചെസ്സ്", "relationEN": "Both are classic indoor board games.", "relationML": "രണ്ടും വീടിനുള്ളിൽ കളിക്കുന്ന ബോർഡ് ഗെയിമുകളാണ്."}
    ]},
    {"civWord": "Chess", "civWordMal": "ചെസ്സ്", "imposters": [
      {"word": "Checkers", "wordMal": "ചെക്കേഴ്സ്", "relationEN": "Both are strategic board games played on an 8x8 grid.", "relationML": "രണ്ടും ഒരേ ബോർഡിൽ കളിക്കുന്ന തന്ത്രപ്രധാനമായ ഗെയിമുകളാണ്."},
      {"word": "Ludo", "wordMal": "ലൂഡോ", "relationEN": "Both are popular tabletop games moving pieces.", "relationML": "രണ്ടും കരുക്കൾ നീക്കി കളിക്കുന്ന ബോർഡ് ഗെയിമുകളാണ്."}
    ]},
    {"civWord": "Kalari", "civWordMal": "കളരി", "imposters": [
      {"word": "Karate", "wordMal": "കരാട്ടെ", "relationEN": "Both are traditional martial arts systems.", "relationML": "രണ്ടും ആയോധന കലകളാണ്."},
      {"word": "Kung Fu", "wordMal": "കുങ് ഫു", "relationEN": "Both are ancient combat fighting styles.", "relationML": "രണ്ടും പുരാതനമായ പോരാട്ട രീതികളാണ്."}
    ]},
    {"civWord": "Long Jump", "civWordMal": "ലോംഗ് ജമ്പ്", "imposters": [
      {"word": "Triple Jump", "wordMal": "ട്രിപ്പിൾ ജമ്പ്", "relationEN": "Both are horizontal jumping track events.", "relationML": "രണ്ടും ദൂരത്തേക്ക് ചാടുന്ന അത്‌ലറ്റിക് മത്സരങ്ങളാണ്."},
      {"word": "High Jump", "wordMal": "ഹൈ ജമ്പ്", "relationEN": "Both are primary jumping events in athletics.", "relationML": "രണ്ടും ചാട്ടമത്സരങ്ങളാണ്."}
    ]},
    {"civWord": "High Jump", "civWordMal": "ഹൈ ജമ്പ്", "imposters": [
      {"word": "Pole Vault", "wordMal": "പോൾ വാൾട്ട്", "relationEN": "Both involve clearing a high horizontal bar.", "relationML": "രണ്ടും ഉയരത്തിലുള്ള ബാറിന് മുകളിലൂടെയുള്ള ചാട്ടമാണ്."},
      {"word": "Hurdles", "wordMal": "ഹർഡിൽസ്", "relationEN": "Both involve jumping over obstacles.", "relationML": "തടസ്സങ്ങൾക്ക് മുകളിലൂടെ ചാടുന്ന കളികളാണ്."}
    ]},
    {"civWord": "Throwball", "civWordMal": "ത്രോബോൾ", "imposters": [
      {"word": "Volleyball", "wordMal": "വോളിബോൾ", "relationEN": "Both are played over a net with similar courts.", "relationML": "രണ്ടും നെറ്റ് ഉപയോഗിച്ചുള്ള കോർട്ട് ഗെയിമുകളാണ്."},
      {"word": "Dodgeball", "wordMal": "ഡോഡ്ജ്ബോൾ", "relationEN": "Both involve throwing a ball directly at or over opponents.", "relationML": "രണ്ടിലും പന്ത് എറിയുന്നതാണ് പ്രധാനം."}
    ]},
    {"civWord": "Table Tennis", "civWordMal": "ടേബിൾ ടെന്നീസ്", "imposters": [
      {"word": "Tennis", "wordMal": "ടെന്നീസ്", "relationEN": "Table tennis is the miniature indoor version of tennis.", "relationML": "ടെന്നീസിന്റെ ചെറിയ രൂപമാണ് ടേബിൾ ടെന്നീസ്."},
      {"word": "Badminton", "wordMal": "ബാഡ്മിന്റൺ", "relationEN": "Both are light-weight racket games played indoors.", "relationML": "രണ്ടും റാക്കറ്റ് ഉപയോഗിച്ചുള്ള ഇൻഡോർ ഗെയിമുകളാണ്."}
    ]},
    {"civWord": "Marathon", "civWordMal": "മാരത്തൺ", "imposters": [
      {"word": "Sprint", "wordMal": "സ്പ്രിന്റ്", "relationEN": "Both are running races, one endurance, one speed.", "relationML": "രണ്ടും ഓട്ടമത്സരങ്ങളാണ്."},
      {"word": "Cycling", "wordMal": "സൈക്ലിങ്", "relationEN": "Both are long-distance road endurance sports.", "relationML": "രണ്ടും റോഡിൽ നടക്കുന്ന ദീർഘദൂര മത്സരങ്ങളാണ്."}
    ]},
    {"civWord": "Penalty Shootout", "civWordMal": "പെനാൽറ്റി ഷൂട്ടൗട്ട്", "imposters": [
      {"word": "Free Kick", "wordMal": "ഫ്രീ കിക്ക്", "relationEN": "Both are unopposed kicks in football.", "relationML": "രണ്ടും ഫുട്ബോളിലെ കിക്ക് അവസരങ്ങളാണ്."},
      {"word": "Corner Kick", "wordMal": "കോർണർ കിക്ക്", "relationEN": "Both are set-piece scoring opportunities in soccer.", "relationML": "രണ്ടും ഗോൾ നേടാനുള്ള അവസരങ്ങളാണ്."}
    ]},
    {"civWord": "Trophy", "civWordMal": "ട്രോഫി", "imposters": [
      {"word": "Medal", "wordMal": "മെഡൽ", "relationEN": "Both are awards given to tournament winners.", "relationML": "രണ്ടും വിജയികൾക്ക് ലഭിക്കുന്ന പുരസ്കാരങ്ങളാണ്."},
      {"word": "Shield", "wordMal": "ഷീൽഡ്", "relationEN": "Both are physical prizes awarded to champions.", "relationML": "രണ്ടും ചാമ്പ്യന്മാർക്ക് നൽകുന്ന സമ്മാനങ്ങളാണ്."}
    ]},
    {"civWord": "Umpire", "civWordMal": "അമ്പയർ", "imposters": [
      {"word": "Referee", "wordMal": "റഫറി", "relationEN": "Both are officials who enforce game rules.", "relationML": "രണ്ടും കളിയുടെ നിയമങ്ങൾ നടപ്പാക്കുന്നവരാണ്."},
      {"word": "Coach", "wordMal": "കോച്ച്", "relationEN": "Both are non-playing figures crucial to a match.", "relationML": "രണ്ടും കളി നിയന്ത്രിക്കുന്ന പ്രധാന വ്യക്തികളാണ്."}
    ]},
    {"civWord": "Gallery", "civWordMal": "ഗാലറി", "imposters": [
      {"word": "Stadium", "wordMal": "സ്റ്റേഡിയം", "relationEN": "Gallery is the seating area within the stadium.", "relationML": "സ്റ്റേഡിയത്തിനുള്ളിലെ ഇരിപ്പിടങ്ങളാണ് ഗാലറി."},
      {"word": "Dugout", "wordMal": "ഡഗ്ഔട്ട്", "relationEN": "Both are seating areas for people watching the game.", "relationML": "രണ്ടും കളി കാണാൻ ഇരിക്കുന്ന സ്ഥലങ്ങളാണ്."}
    ]},
    {"civWord": "Kuttiyum Kolum", "civWordMal": "കുട്ടിയും കോലും", "imposters": [
      {"word": "Cricket", "wordMal": "ക്രിക്കറ്റ്", "relationEN": "Both involve striking a flying object with a stick/bat.", "relationML": "രണ്ടിലും ബാറ്റോ കോലോ ഉപയോഗിച്ച് അടിക്കുന്നതാണ്."},
      {"word": "Goli", "wordMal": "ഗോലി", "relationEN": "Both are traditional street games played by children.", "relationML": "രണ്ടും കുട്ടികൾ കളിക്കുന്ന നാടൻ കളികളാണ്."}
    ]},
    {"civWord": "Kilithattu", "civWordMal": "കിളിത്തട്ട്", "imposters": [
      {"word": "Kabaddi", "wordMal": "കബഡി", "relationEN": "Both are traditional court games involving tagging.", "relationML": "രണ്ടും അതിർത്തി കടന്നുള്ള കളികളാണ്."},
      {"word": "Kho Kho", "wordMal": "ഖോ ഖോ", "relationEN": "Both are Indian tag games requiring agility.", "relationML": "രണ്ടും തൊട്ടുകളിക്കുന്ന നാടൻ വിനോദങ്ങളാണ്."}
    ]},
    {"civWord": "Talappanthukali", "civWordMal": "തലപ്പന്തുകളി", "imposters": [
      {"word": "Volleyball", "wordMal": "വോളിബോൾ", "relationEN": "Both involve hitting a ball with the hand/head.", "relationML": "രണ്ടിലും പന്ത് അടിച്ചു കളിക്കുന്നതാണ്."},
      {"word": "Football", "wordMal": "ഫുട്ബോൾ", "relationEN": "Both are outdoor ball games.", "relationML": "രണ്ടും മൈതാനത്ത് കളിക്കുന്ന പന്ത് കളികളാണ്."}
    ]},
    {"civWord": "Nadan Panthu", "civWordMal": "നാടൻ പന്ത്", "imposters": [
      {"word": "Cricket Ball", "wordMal": "ക്രിക്കറ്റ് ബോൾ", "relationEN": "Both are hard leather-stitched balls.", "relationML": "രണ്ടും തുകൽ കൊണ്ടുണ്ടാക്കിയ പന്തുകളാണ്."},
      {"word": "Football", "wordMal": "ഫുട്ബോൾ", "relationEN": "Both are balls used in local outdoor games.", "relationML": "രണ്ടും കളിക്കാൻ ഉപയോഗിക്കുന്ന പന്തുകളാണ്."}
    ]},
    {"civWord": "Goli", "civWordMal": "ഗോലി", "imposters": [
      {"word": "Billiards", "wordMal": "ബില്യാർഡ്സ്", "relationEN": "Both involve hitting spherical objects into targets.", "relationML": "രണ്ടിലും ഗോളങ്ങൾ ഉപയോഗിച്ചാണ് കളിക്കുന്നത്."},
      {"word": "Spinning Top", "wordMal": "പമ്പരം", "relationEN": "Both are classic childhood street toys.", "relationML": "രണ്ടും കുട്ടികളുടെ നാടൻ കളിപ്പാട്ടങ്ങളാണ്."}
    ]},
    {"civWord": "Lagori", "civWordMal": "ലഗോറി", "imposters": [
      {"word": "Bowling", "wordMal": "ബൗളിംഗ്", "relationEN": "Both involve knocking down a stack/set of targets.", "relationML": "രണ്ടിലും വസ്തുക്കളെ എറിഞ്ഞു വീഴ്ത്തുന്നതാണ്."},
      {"word": "Darts", "wordMal": "ഡാർട്ട്സ്", "relationEN": "Both are games of precision targeting.", "relationML": "രണ്ടും കൃത്യമായി ലക്ഷ്യത്തിൽ എറിയുന്ന കളികളാണ്."}
    ]},
    {"civWord": "Arm Wrestling", "civWordMal": "പഞ്ചഗുസ്തി", "imposters": [
      {"word": "Wrestling", "wordMal": "ഗുസ്തി", "relationEN": "Arm wrestling is a focused subset of full wrestling.", "relationML": "ഗുസ്തിയുടെ ഒരു ചെറിയ രൂപമാണ് പഞ്ചഗുസ്തി."},
      {"word": "Weightlifting", "wordMal": "ഭാരോദ്വഹനം", "relationEN": "Both are tests of pure upper body strength.", "relationML": "രണ്ടിലും കൈക്കരുത്താണ് പരീക്ഷിക്കുന്നത്."}
    ]},
    {"civWord": "Kabaddi Court", "civWordMal": "കബഡി കോർട്ട്", "imposters": [
      {"word": "Wrestling Ring", "wordMal": "ഗുസ്തി റിംഗ്", "relationEN": "Both are marked areas for physical combat sports.", "relationML": "രണ്ടും ശാരീരിക മത്സരങ്ങൾക്കുള്ള വേദികളാണ്."},
      {"word": "Tennis Court", "wordMal": "ടെന്നീസ് കോർട്ട്", "relationEN": "Both are rectangular marked playing surfaces.", "relationML": "രണ്ടും കളിക്കുന്ന കോർട്ടുകളാണ്."}
    ]},
    {"civWord": "Shuttle Racket", "civWordMal": "ഷട്ടിൽ റാക്കറ്റ്", "imposters": [
      {"word": "Tennis Racket", "wordMal": "ടെന്നീസ് റാക്കറ്റ്", "relationEN": "Both are stringed implements for hitting sports.", "relationML": "രണ്ടും കളിയിലുപയോഗിക്കുന്ന റാക്കറ്റുകളാണ്."},
      {"word": "Cricket Bat", "wordMal": "ക്രിക്കറ്റ് ബാറ്റ്", "relationEN": "Both are handheld striking tools in sports.", "relationML": "രണ്ടും കളിയിൽ അടിക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണങ്ങളാണ്."}
    ]},
    {"civWord": "Foot Volley", "civWordMal": "ഫൂട്ട് വോളി", "imposters": [
      {"word": "Volleyball", "wordMal": "വോളിബോൾ", "relationEN": "Foot volley is volleyball played with the feet.", "relationML": "കാലുകൊണ്ട് കളിക്കുന്ന വോളിബോളാണ് ഫൂട്ട് വോളി."},
      {"word": "Sepak Takraw", "wordMal": "സെപാക് തക്രോ", "relationEN": "Both are net sports played by kicking a ball.", "relationML": "രണ്ടും കാലുകൊണ്ട് നെറ്റിന് മുകളിലൂടെ കളിക്കുന്നതാണ്."}
    ]}
  ],
  "gulf": [
    {"civWord": "Pravasi", "civWordMal": "പ്രവാസി", "imposters": [
      {"word": "Tourist", "wordMal": "വിനോദസഞ്ചാരി", "relationEN": "Both are people who travel to other countries.", "relationML": "രണ്ടും വിദേശരാജ്യങ്ങളിൽ പോകുന്നവരാണ്."},
      {"word": "Refugee", "wordMal": "അഭയാർത്ഥി", "relationEN": "Both leave their home country to live elsewhere.", "relationML": "രണ്ടും സ്വന്തം നാടുവിട്ട് ജീവിക്കുന്നവരാണ്."}
    ]},
    {"civWord": "Dubai", "civWordMal": "ദുബായ്", "imposters": [
      {"word": "Abu Dhabi", "wordMal": "അബുദാബി", "relationEN": "Both are major Emirates in the UAE.", "relationML": "രണ്ടും യുഎഇയിലെ പ്രശസ്തമായ നഗരങ്ങളാണ്."},
      {"word": "Doha", "wordMal": "ദോഹ", "relationEN": "Both are wealthy, modern Middle Eastern cities.", "relationML": "രണ്ടും ഗൾഫിലെ വലിയ നഗരങ്ങളാണ്."}
    ]},
    {"civWord": "Gulf Money", "civWordMal": "ഗൾഫ് മണി", "imposters": [
      {"word": "Hawala", "wordMal": "ഹവാല", "relationEN": "Both refer to channels of sending money from abroad.", "relationML": "രണ്ടും വിദേശത്തുനിന്നും പണം അയക്കുന്നതുമായി ബന്ധപ്പെട്ടതാണ്."},
      {"word": "Salary", "wordMal": "ശമ്പളം", "relationEN": "Gulf money is essentially the salary earned abroad.", "relationML": "രണ്ടും ജോലി ചെയ്ത് ഉണ്ടാക്കുന്ന പണമാണ്."}
    ]},
    {"civWord": "Chakka", "civWordMal": "ചക്ക", "imposters": [
      {"word": "Manga", "wordMal": "മാങ്ങ", "relationEN": "Both are deeply nostalgic, traditional Kerala fruits.", "relationML": "രണ്ടും കേരളത്തിലെ നാടൻ പഴങ്ങളാണ്."},
      {"word": "Pazham", "wordMal": "പഴം", "relationEN": "Both are common household fruits in Kerala.", "relationML": "രണ്ടും മലയാളികളുടെ ഇഷ്ട പഴങ്ങളാണ്."}
    ]},
    {"civWord": "Naatilekku", "civWordMal": "നാട്ടിലേക്ക്", "imposters": [
      {"word": "Leave", "wordMal": "ലീവ്", "relationEN": "Going naatilekku implies taking a leave from work.", "relationML": "അവധിക്കാണ് നാട്ടിലേക്ക് പോകുന്നത്."},
      {"word": "Flight", "wordMal": "വിമാനം", "relationEN": "The journey home requires taking a flight.", "relationML": "നാട്ടിലേക്ക് പോകാൻ വിമാനമാണ് ആശ്രയം."}
    ]},
    {"civWord": "Abu Dhabi", "civWordMal": "അബുദാബി", "imposters": [
      {"word": "Dubai", "wordMal": "ദുബായ്", "relationEN": "Both are key cities in the United Arab Emirates.", "relationML": "രണ്ടും യുഎഇയിലെ പ്രശസ്ത നഗരങ്ങളാണ്."},
      {"word": "Riyadh", "wordMal": "റിയാദ്", "relationEN": "Both are capital cities in the Middle East.", "relationML": "രണ്ടും ഗൾഫ് രാജ്യങ്ങളുടെ തലസ്ഥാനങ്ങളാണ്."}
    ]},
    {"civWord": "Qatar", "civWordMal": "ഖത്തർ", "imposters": [
      {"word": "Oman", "wordMal": "ഒമാൻ", "relationEN": "Both are independent Arab Gulf nations.", "relationML": "രണ്ടും ഗൾഫിലെ സ്വതന്ത്ര രാജ്യങ്ങളാണ്."},
      {"word": "Bahrain", "wordMal": "ബഹ്റൈൻ", "relationEN": "Both are small, wealthy peninsular Gulf states.", "relationML": "രണ്ടും ഗൾഫിലെ ചെറിയ രാജ്യങ്ങളാണ്."}
    ]},
    {"civWord": "Saudi", "civWordMal": "സൗദി", "imposters": [
      {"word": "Yemen", "wordMal": "യെമൻ", "relationEN": "Both share the Arabian peninsula.", "relationML": "രണ്ടും അറേബ്യൻ ഉപദ്വീപിലുള്ള രാജ്യങ്ങളാണ്."},
      {"word": "Kuwait", "wordMal": "കുവൈറ്റ്", "relationEN": "Both are oil-rich Arab nations.", "relationML": "രണ്ടും ഗൾഫിലെ സമ്പന്ന രാജ്യങ്ങളാണ്."}
    ]},
    {"civWord": "Oman", "civWordMal": "ഒമാൻ", "imposters": [
      {"word": "Muscat", "wordMal": "മസ്കറ്റ്", "relationEN": "Muscat is the capital of Oman.", "relationML": "ഒമാന്റെ തലസ്ഥാനമാണ് മസ്കറ്റ്."},
      {"word": "UAE", "wordMal": "യുഎഇ", "relationEN": "Both are neighboring Gulf countries.", "relationML": "രണ്ടും അടുത്തടുത്തുള്ള ഗൾഫ് രാജ്യങ്ങളാണ്."}
    ]},
    {"civWord": "Bahrain", "civWordMal": "ബഹ്റൈൻ", "imposters": [
      {"word": "Qatar", "wordMal": "ഖത്തർ", "relationEN": "Both are small island/peninsular Gulf states.", "relationML": "രണ്ടും ചെറിയ ഗൾഫ് രാജ്യങ്ങളാണ്."},
      {"word": "Kuwait", "wordMal": "കുവൈറ്റ്", "relationEN": "Both are oil-producing Middle Eastern kingdoms.", "relationML": "രണ്ടും എണ്ണ സമ്പത്തുള്ള ഗൾഫ് രാജ്യങ്ങളാണ്."}
    ]},
    {"civWord": "Kuwait", "civWordMal": "കുവൈറ്റ്", "imposters": [
      {"word": "Dinar", "wordMal": "ദിനാർ", "relationEN": "The Kuwaiti Dinar is its famously high-value currency.", "relationML": "കുവൈറ്റിന്റെ നാണയമാണ് ദിനാർ."},
      {"word": "Saudi Arabia", "wordMal": "സൗദി അറേബ്യ", "relationEN": "Both are neighboring, oil-rich Arab states.", "relationML": "രണ്ടും അതിർത്തി പങ്കിടുന്ന ഗൾഫ് രാജ്യങ്ങളാണ്."}
    ]},
    {"civWord": "Visa", "civWordMal": "വിസ", "imposters": [
      {"word": "Passport", "wordMal": "പാസ്പോർട്ട്", "relationEN": "A visa is stamped inside a passport for travel.", "relationML": "പാസ്പോർട്ടിലാണ് വിസ പതിപ്പിക്കുന്നത്."},
      {"word": "Ticket", "wordMal": "ടിക്കറ്റ്", "relationEN": "Both are necessary documents for international flights.", "relationML": "രണ്ടും വിദേശ യാത്രയ്ക്ക് അത്യാവശ്യമാണ്."}
    ]},
    {"civWord": "Passport", "civWordMal": "പാസ്പോർട്ട്", "imposters": [
      {"word": "Emirates ID", "wordMal": "എമിറേറ്റ്സ് ഐഡി", "relationEN": "Both are official forms of identification abroad.", "relationML": "രണ്ടും തിരിച്ചറിയൽ രേഖകളാണ്."},
      {"word": "Boarding Pass", "wordMal": "ബോർഡിംഗ് പാസ്", "relationEN": "Both are essential travel documents at the airport.", "relationML": "രണ്ടും വിമാനത്താവളത്തിൽ വേണ്ട രേഖകളാണ്."}
    ]},
    {"civWord": "Airport", "civWordMal": "എയർപോർട്ട്", "imposters": [
      {"word": "Railway Station", "wordMal": "റെയിൽവേ സ്റ്റേഷൻ", "relationEN": "Both are major transport hubs.", "relationML": "രണ്ടും വലിയ യാത്രാ കേന്ദ്രങ്ങളാണ്."},
      {"word": "Runway", "wordMal": "റൺവേ", "relationEN": "The runway is a critical part of the airport.", "relationML": "എയർപോർട്ടിന്റെ ഭാഗമാണ് റൺവേ."}
    ]},
    {"civWord": "Remittance", "civWordMal": "റെമിറ്റൻസ്", "imposters": [
      {"word": "Exchange", "wordMal": "എക്സ്ചേഞ്ച്", "relationEN": "Remittances are sent through money exchanges.", "relationML": "എക്സ്ചേഞ്ച് വഴിയാണ് പണം നാട്ടിലേക്ക് അയക്കുന്നത്."},
      {"word": "Bank Transfer", "wordMal": "ബാങ്ക് ട്രാൻസ്ഫർ", "relationEN": "Both are methods of sending money across borders.", "relationML": "രണ്ടും പണം അയക്കാനുള്ള മാർഗ്ഗങ്ങളാണ്."}
    ]},
    {"civWord": "Duty Free", "civWordMal": "ഡ്യൂട്ടി ഫ്രീ", "imposters": [
      {"word": "Shopping Mall", "wordMal": "ഷോപ്പിംഗ് മാൾ", "relationEN": "Both are large retail shopping environments.", "relationML": "രണ്ടും ഷോപ്പിംഗ് കേന്ദ്രങ്ങളാണ്."},
      {"word": "Customs", "wordMal": "കസ്റ്റംസ്", "relationEN": "Duty free items bypass standard customs taxes.", "relationML": "രണ്ടും എയർപോർട്ടിലെ നികുതിയുമായി ബന്ധപ്പെട്ടതാണ്."}
    ]},
    {"civWord": "Perfume", "civWordMal": "പെർഫ്യൂം", "imposters": [
      {"word": "Attar", "wordMal": "അത്തർ", "relationEN": "Attar is a traditional, oil-based alternative to perfume.", "relationML": "രണ്ടും സുഗന്ധം പരത്തുന്നവയാണ്."},
      {"word": "Deodorant", "wordMal": "ഡിയോഡറന്റ്", "relationEN": "Both are used for personal fragrance.", "relationML": "രണ്ടും ശരീരത്തിൽ സുഗന്ധം നൽകാൻ ഉപയോഗിക്കുന്നു."}
    ]},
    {"civWord": "Dates", "civWordMal": "ഈത്തപ്പഴം", "imposters": [
      {"word": "Figs", "wordMal": "അത്തിപ്പഴം", "relationEN": "Both are sweet, dried Middle Eastern fruits.", "relationML": "രണ്ടും മധ്യപൂർവ്വേഷ്യയിലെ ഉണങ്ങിയ പഴങ്ങളാണ്."},
      {"word": "Almonds", "wordMal": "ബദാം", "relationEN": "Both are common Gulf souvenirs brought back home.", "relationML": "രണ്ടും ഗൾഫിൽ നിന്നും കൊണ്ടുവരുന്ന ഡ്രൈ ഫ്രൂട്ട്സാണ്."}
    ]},
    {"civWord": "Gold", "civWordMal": "സ്വർണം", "imposters": [
      {"word": "Diamond", "wordMal": "ഡയമണ്ട്", "relationEN": "Both are precious materials bought in Gulf souks.", "relationML": "രണ്ടും വിലകൂടിയ ആഭരണങ്ങളാണ്."},
      {"word": "Silver", "wordMal": "വെള്ളി", "relationEN": "Both are precious metals used for jewellery.", "relationML": "രണ്ടും ആഭരണങ്ങൾ ഉണ്ടാക്കാൻ ഉപയോഗിക്കുന്ന ലോഹങ്ങളാണ്."}
    ]},
    {"civWord": "Return Ticket", "civWordMal": "റിട്ടേൺ ടിക്കറ്റ്", "imposters": [
      {"word": "One-way Ticket", "wordMal": "വൺ-വേ ടിക്കറ്റ്", "relationEN": "The opposite booking of a return flight.", "relationML": "ഒരു വശത്തേക്ക് മാത്രമുള്ള യാത്രയാണ് വൺ-വേ."},
      {"word": "Boarding Pass", "wordMal": "ബോർഡിംഗ് പാസ്", "relationEN": "Both are documents needed to board the flight.", "relationML": "രണ്ടും വിമാനത്തിൽ കയറാൻ ആവശ്യമായ രേഖകളാണ്."}
    ]},
    {"civWord": "Norka", "civWordMal": "നോർക്ക", "imposters": [
      {"word": "Embassy", "wordMal": "എംബസി", "relationEN": "Both assist expatriates with bureaucratic needs.", "relationML": "രണ്ടും പ്രവാസികൾക്ക് സഹായം നൽകുന്ന സ്ഥാപനങ്ങളാണ്."},
      {"word": "Consulate", "wordMal": "കോൺസുലേറ്റ്", "relationEN": "Both deal with the welfare of citizens abroad.", "relationML": "വിദേശത്തുള്ള പൗരന്മാർക്ക് വേണ്ടിയുള്ള ഓഫീസുകളാണ്."}
    ]},
    {"civWord": "Sharjah", "civWordMal": "ഷാർജ", "imposters": [
      {"word": "Ajman", "wordMal": "അജ്മാൻ", "relationEN": "Both are neighboring, more affordable Emirates.", "relationML": "രണ്ടും അടുത്തടുത്തുള്ള യുഎഇ നഗരങ്ങളാണ്."},
      {"word": "Dubai", "wordMal": "ദുബായ്", "relationEN": "Many live in Sharjah and commute to Dubai.", "relationML": "യുഎഇയിലെ പ്രശസ്തമായ നഗരങ്ങളാണ്."}
    ]},
    {"civWord": "Baklava", "civWordMal": "ബക്ലാവ", "imposters": [
      {"word": "Kunafa", "wordMal": "കുനാഫ", "relationEN": "Both are incredibly sweet, syrupy Middle Eastern desserts.", "relationML": "രണ്ടും അറേബ്യൻ മധുരപലഹാരങ്ങളാണ്."},
      {"word": "Halwa", "wordMal": "ഹൽവ", "relationEN": "Both are traditional, rich sweet treats.", "relationML": "രണ്ടും മധുരമുള്ള വിഭവങ്ങളാണ്."}
    ]},
    {"civWord": "Desert Safari", "civWordMal": "മരുഭൂമി സഫാരി", "imposters": [
      {"word": "Camel Ride", "wordMal": "ഒട്ടക സവാരി", "relationEN": "Camel rides are a core activity of a desert safari.", "relationML": "മരുഭൂമി സഫാരിയുടെ ഒരു ഭാഗമാണ് ഒട്ടക സവാരി."},
      {"word": "Dune Bashing", "wordMal": "ഡ്യൂൺ ബാഷിംഗ്", "relationEN": "Dune bashing is the thrill ride portion of the safari.", "relationML": "മരുഭൂമിയിലെ വാഹന യാത്രയാണ് ഡ്യൂൺ ബാഷിംഗ്."}
    ]},
    {"civWord": "Burj Khalifa", "civWordMal": "ബുർജ് ഖലീഫ", "imposters": [
      {"word": "Burj Al Arab", "wordMal": "ബുർജ് അൽ അറബ്", "relationEN": "Both are iconic, record-breaking Dubai landmarks.", "relationML": "രണ്ടും ദുബായിലെ പ്രശസ്തമായ കെട്ടിടങ്ങളാണ്."},
      {"word": "Eiffel Tower", "wordMal": "ഈഫൽ ടവർ", "relationEN": "Both are world-famous tourist tower attractions.", "relationML": "രണ്ടും ലോകപ്രശസ്തമായ ഉയരമുള്ള നിർമ്മിതികളാണ്."}
    ]},
    {"civWord": "Vacation Leave", "civWordMal": "അവധി / ലീവ്", "imposters": [
      {"word": "Resignation", "wordMal": "രാജി", "relationEN": "Both mean stopping work, one temporarily, one permanently.", "relationML": "രണ്ടും ജോലിയിൽ നിന്നും മാറിനിൽക്കുന്നതാണ്."},
      {"word": "Weekend", "wordMal": "വാരാന്ത്യം", "relationEN": "Both are periods of rest from work.", "relationML": "രണ്ടും ജോലിയില്ലാത്ത ദിവസങ്ങളാണ്."}
    ]},
    {"civWord": "Dubai Gold Souk", "civWordMal": "ദുബായ് ഗോൾഡ് സൂക്ക്", "imposters": [
      {"word": "Spice Souk", "wordMal": "സ്പൈസ് സൂക്ക്", "relationEN": "Both are famous traditional markets in old Dubai.", "relationML": "രണ്ടും ദുബായിലെ പ്രശസ്തമായ മാർക്കറ്റുകളാണ്."},
      {"word": "Jewellery Shop", "wordMal": "ജ്വല്ലറി", "relationEN": "The Gold Souk is essentially a massive street of jewellery shops.", "relationML": "സ്വർണ്ണക്കടകളുടെ വലിയൊരു ശേഖരമാണ് ഗോൾഡ് സൂക്ക്."}
    ]},
    {"civWord": "Khubus", "civWordMal": "കുബ്ബൂസ്", "imposters": [
      {"word": "Porotta", "wordMal": "പൊറോട്ട", "relationEN": "Both are flatbreads eaten heavily by Gulf expats.", "relationML": "പ്രവാസികൾ കഴിക്കുന്ന പ്രധാന റൊട്ടി വിഭവങ്ങളാണ്."},
      {"word": "Pita Bread", "wordMal": "പിറ്റാ ബ്രെഡ്", "relationEN": "Khubus is the Arabian variant of pita bread.", "relationML": "രണ്ടും ഒരേപോലെയുള്ള അറേബ്യൻ റൊട്ടികളാണ്."}
    ]},
    {"civWord": "Kafala", "civWordMal": "കഫാല", "imposters": [
      {"word": "Sponsorship", "wordMal": "സ്പോൺസർഷിപ്പ്", "relationEN": "Kafala translates directly to the sponsorship system.", "relationML": "കഫാല എന്നതിനർത്ഥം സ്പോൺസർഷിപ്പ് എന്നാണ്."},
      {"word": "Visa Rule", "wordMal": "വിസാ നിയമം", "relationEN": "Kafala dictates the visa rules for migrant workers.", "relationML": "രണ്ടും പ്രവാസികളുടെ ജോലി സംബന്ധമായ നിയമങ്ങളാണ്."}
    ]},
    {"civWord": "Perfume Attar", "civWordMal": "അത്തർ", "imposters": [
      {"word": "Oud", "wordMal": "ഊദ്", "relationEN": "Oud is a popular, strong fragrance used in attars.", "relationML": "അത്തറുകളിൽ ഉപയോഗിക്കുന്ന ഒരു സുഗന്ധമാണ് ഊദ്."},
      {"word": "Rose Water", "wordMal": "പനിനീർ", "relationEN": "Both are traditional fragrant liquids.", "relationML": "രണ്ടും സുഗന്ധമുള്ള ദ്രാവകങ്ങളാണ്."}
    ]},
    {"civWord": "Qatar Airways", "civWordMal": "ഖത്തർ എയർവേയ്സ്", "imposters": [
      {"word": "Emirates", "wordMal": "എമിറേറ്റ്സ്", "relationEN": "Both are luxury Middle Eastern airlines.", "relationML": "രണ്ടും ഗൾഫിലെ പ്രശസ്തമായ വിമാനക്കമ്പനികളാണ്."},
      {"word": "Air India", "wordMal": "എയർ ഇന്ത്യ", "relationEN": "Both airlines frequently fly NRIs back home.", "relationML": "പ്രവാസികൾ യാത്ര ചെയ്യാൻ ഉപയോഗിക്കുന്ന വിമാനങ്ങളാണ്."}
    ]},
    {"civWord": "Shawarma Machine", "civWordMal": "ഷവർമ്മ മെഷീൻ", "imposters": [
      {"word": "Grill", "wordMal": "ഗ്രിൽ", "relationEN": "Both are equipment used for roasting meat.", "relationML": "രണ്ടും ഇറച്ചി ചുട്ടെടുക്കാൻ ഉപയോഗിക്കുന്നതാണ്."},
      {"word": "Oven", "wordMal": "ഓവൻ", "relationEN": "Both cook meat using intense localized heat.", "relationML": "രണ്ടും ഭക്ഷണം പാകം ചെയ്യുന്ന യന്ത്രങ്ങളാണ്."}
    ]},
    {"civWord": "Oud Incense", "civWordMal": "ഊദ്", "imposters": [
      {"word": "Frankincense", "wordMal": "കുന്തിരിക്കം", "relationEN": "Both are traditional aromatic resins burned for smell.", "relationML": "രണ്ടും പുകച്ച് സുഗന്ധമുണ്ടാക്കുന്നവയാണ്."},
      {"word": "Bakhoor", "wordMal": "ബഖൂർ", "relationEN": "Bakhoor often contains oud to create its scent.", "relationML": "രണ്ടും അറേബ്യൻ സുഗന്ധദ്രവ്യങ്ങളാണ്."}
    ]},
    {"civWord": "Lablabi / Hummus", "civWordMal": "ഹുമുസ്", "imposters": [
      {"word": "Moutabal", "wordMal": "മുതബൽ", "relationEN": "Both are popular, creamy Middle Eastern dips.", "relationML": "രണ്ടും അറേബ്യൻ ഭക്ഷണത്തോടൊപ്പം കഴിക്കുന്നവയാണ്."},
      {"word": "Mayonnaise", "wordMal": "മയോണൈസ്", "relationEN": "Both are thick spreads often eaten with shawarma.", "relationML": "രണ്ടും ഷവർമ്മയ്ക്ക് ഒപ്പം കഴിക്കുന്നതാണ്."}
    ]},
    {"civWord": "Dirham Currency", "civWordMal": "ദിർഹം", "imposters": [
      {"word": "Riyal", "wordMal": "റിയാൽ", "relationEN": "Both are standard currencies used in Gulf countries.", "relationML": "രണ്ടും ഗൾഫ് രാജ്യങ്ങളിലെ നാണയങ്ങളാണ്."},
      {"word": "Rupee", "wordMal": "രൂപ", "relationEN": "Expats convert Dirhams into Rupees to send home.", "relationML": "ഗൾഫ് പണം നാട്ടിലേക്ക് രൂപയായാണ് അയക്കുന്നത്."}
    ]},
    {"civWord": "Emirates ID", "civWordMal": "എമിറേറ്റ്സ് ഐഡി", "imposters": [
      {"word": "Aadhaar Card", "wordMal": "ആധാർ കാർഡ്", "relationEN": "Both are biometric national identity cards.", "relationML": "രണ്ടും തിരിച്ചറിയൽ കാർഡുകളാണ്."},
      {"word": "Passport", "wordMal": "പാസ്പോർട്ട്", "relationEN": "Both are crucial identification documents for an expat.", "relationML": "രണ്ടും പ്രവാസികൾക്ക് പ്രധാനപ്പെട്ട രേഖകളാണ്."}
    ]}
  ],
  "intl_superheroes": [
    {"civWord": "Spider-Man", "civWordMal": "", "imposters": [
      {"word": "Venom", "wordMal": "", "relationEN": "Venom is Spider-Man's dark mirror and symbiote enemy.", "relationML": "സ്പൈഡർമാന്റെ പ്രധാന എതിരാളിയാണ് വെനം."},
      {"word": "Miles Morales", "wordMal": "", "relationEN": "Miles Morales is the other famous Spider-Man.", "relationML": "മറ്റൊരു പ്രശസ്തനായ സ്പൈഡർമാനാണ് മൈൽസ് മൊറേൽസ്."}
    ]},
    {"civWord": "Iron Man", "civWordMal": "", "imposters": [
      {"word": "War Machine", "wordMal": "", "relationEN": "War Machine uses a suit created by Iron Man.", "relationML": "അയൺ മാൻ നിർമ്മിച്ച സ്യൂട്ട് ഉപയോഗിക്കുന്ന ആളാണ് വാർ മെഷീൻ."},
      {"word": "Batman", "wordMal": "", "relationEN": "Both are billionaire playboys without inherent superpowers.", "relationML": "രണ്ടുപേരും പണക്കാരായ സാധാരണ മനുഷ്യരാണ്."}
    ]},
    {"civWord": "Captain America", "civWordMal": "", "imposters": [
      {"word": "Winter Soldier", "wordMal": "", "relationEN": "Winter Soldier is Captain America's oldest best friend.", "relationML": "ക്യാപ്റ്റൻ അമേരിക്കയുടെ അടുത്ത സുഹൃത്താണ് വിന്റർ സോൾജിയർ."},
      {"word": "Red Guardian", "wordMal": "", "relationEN": "Red Guardian is the Russian equivalent to Captain America.", "relationML": "ക്യാപ്റ്റൻ അമേരിക്കയുടെ റഷ്യൻ പതിപ്പാണ് റെഡ് ഗാർഡിയൻ."}
    ]},
    {"civWord": "Wonder Woman", "civWordMal": "", "imposters": [
      {"word": "Cheetah", "wordMal": "", "relationEN": "Cheetah is Wonder Woman's iconic arch-nemesis.", "relationML": "വണ്ടർ വുമണിന്റെ പ്രധാന ശത്രുവാണ് ചീറ്റ."},
      {"word": "Supergirl", "wordMal": "", "relationEN": "Both are extremely powerful female DC superheroes.", "relationML": "ഡിസി കോമിക്സിലെ കരുത്തരായ വനിതാ സൂപ്പർഹീറോകളാണ് ഇവർ."}
    ]},
    {"civWord": "Superman", "civWordMal": "", "imposters": [
      {"word": "General Zod", "wordMal": "", "relationEN": "Both are surviving Kryptonians with identical powers.", "relationML": "രണ്ടുപേരും ഒരേ ഗ്രഹത്തിൽ നിന്നുള്ള ശക്തികളുള്ളവരാണ്."},
      {"word": "Homelander", "wordMal": "", "relationEN": "Homelander is an evil parody of Superman.", "relationML": "സൂപ്പർമാന്റെ വില്ലൻ രൂപമാണ് ഹോംലാൻഡർ."}
    ]},
    {"civWord": "Doctor Strange", "civWordMal": "", "imposters": [
      {"word": "Doctor Fate", "wordMal": "", "relationEN": "Doctor Fate is DC's version of the Sorcerer Supreme.", "relationML": "ഡിസി കോമിക്സിലെ സമാനമായ മന്ത്രവാദിയാണ് ഡോക്ടർ ഫേറ്റ്."},
      {"word": "Baron Mordo", "wordMal": "", "relationEN": "Mordo is a fellow sorcerer and rival to Strange.", "relationML": "ഡോക്ടർ സ്ട്രേഞ്ചിന്റെ കൂടെ പഠിച്ച മാന്ത്രികനാണ് മോർഡോ."}
    ]},
    {"civWord": "Black Panther", "civWordMal": "", "imposters": [
      {"word": "Killmonger", "wordMal": "", "relationEN": "Killmonger is Black Panther's cousin and challenger for the throne.", "relationML": "ബ്ലാക്ക് പാൻതറിന്റെ ബന്ധുവും ശത്രുവുമാണ് കിൽമോംഗർ."},
      {"word": "Batman", "wordMal": "", "relationEN": "Both are wealthy heroes wearing dark, animal-themed combat suits.", "relationML": "രണ്ടുപേരും കറുത്ത മൃഗങ്ങളുടെ രൂപമുള്ള സ്യൂട്ട് ധരിക്കുന്നവരാണ്."}
    ]},
    {"civWord": "Aquaman", "civWordMal": "", "imposters": [
      {"word": "Namor", "wordMal": "", "relationEN": "Namor is Marvel's equivalent ruler of Atlantis.", "relationML": "മാർവലിലെ സമാനമായ കടൽ രാജാവാണ് നെയ്മർ."},
      {"word": "Black Manta", "wordMal": "", "relationEN": "Black Manta is Aquaman's most iconic deadly rival.", "relationML": "അക്വാമാന്റെ പ്രധാന ശത്രുവാണ് ബ്ലാക്ക് മാന്റ."}
    ]},
    {"civWord": "Wolverine", "civWordMal": "", "imposters": [
      {"word": "Sabretooth", "wordMal": "", "relationEN": "Both are mutants with healing factors and animalistic rage.", "relationML": "രണ്ടുപേരും പെട്ടെന്ന് മുറിവുണങ്ങുന്ന ശക്തിയുള്ളവരാണ്."},
      {"word": "Deadpool", "wordMal": "", "relationEN": "Both possess weapon X healing factors and use bladed weapons.", "relationML": "രണ്ടുപേർക്കും അസാമാന്യമായ മുറിവുണങ്ങാനുള്ള കഴിവുണ്ട്."}
    ]},
    {"civWord": "Deadpool", "civWordMal": "", "imposters": [
      {"word": "Deathstroke", "wordMal": "", "relationEN": "Deadpool was originally created as a parody of DC's Deathstroke.", "relationML": "ഡിസിയുടെ ഡെത്ത്സ്ട്രോക്കിനെ അനുകരിച്ചാണ് ഡെഡ്പൂൾ ഉണ്ടായത്."},
      {"word": "Wolverine", "wordMal": "", "relationEN": "Both are Canadian mutants with extreme regenerative healing.", "relationML": "രണ്ടുപേർക്കും മരിക്കാത്ത ശരീരപ്രകൃതമുണ്ട്."}
    ]},
    {"civWord": "Ant-Man", "civWordMal": "", "imposters": [
      {"word": "The Atom", "wordMal": "", "relationEN": "The Atom is DC's size-shrinking superhero equivalent.", "relationML": "ഡിസിയുടെ ചെറുതാകാൻ കഴിയുന്ന ഹീറോയാണ് ആറ്റം."},
      {"word": "Yellowjacket", "wordMal": "", "relationEN": "Yellowjacket uses similar shrinking technology for evil.", "relationML": "സമാനമായ ടെക്നോളജി ഉപയോഗിക്കുന്ന വില്ലനാണ് യെല്ലോജാക്കറ്റ്."}
    ]},
    {"civWord": "Shazam", "civWordMal": "", "imposters": [
      {"word": "Black Adam", "wordMal": "", "relationEN": "Black Adam possesses the exact same magical powers as Shazam.", "relationML": "ഷസാമിന്റെ അതേ മാന്ത്രിക ശക്തികളുള്ള വില്ലനാണ് ബ്ലാക്ക് ആദം."},
      {"word": "Superman", "wordMal": "", "relationEN": "Both are caped, flying heroes with god-like strength.", "relationML": "രണ്ടുപേർക്കും പറക്കാനും അസാമാന്യ ശക്തിയുമുണ്ട്."}
    ]},
    {"civWord": "Falcon", "civWordMal": "", "imposters": [
      {"word": "Hawkman", "wordMal": "", "relationEN": "Both are bird-themed superheroes equipped with wings.", "relationML": "രണ്ടുപേരും ചിറകുകളുള്ള പറക്കുന്ന ഹീറോകളാണ്."},
      {"word": "Winter Soldier", "wordMal": "", "relationEN": "Both are Captain America's closest allies.", "relationML": "ക്യാപ്റ്റൻ അമേരിക്കയുടെ അടുത്ത കൂട്ടുകാരാണ് ഇരുവരും."}
    ]},
    {"civWord": "Groot", "civWordMal": "", "imposters": [
      {"word": "Rocket Raccoon", "wordMal": "", "relationEN": "Rocket is Groot's inseparable best friend and partner.", "relationML": "ഗ്രൂട്ടിന്റെ ഏറ്റവും അടുത്ത കൂട്ടുകാരനാണ് റോക്കറ്റ്."},
      {"word": "King Shark", "wordMal": "", "relationEN": "Both are largely non-verbal CGI muscle for their teams.", "relationML": "രണ്ടുപേരും മൃഗരൂപമുള്ള വലിയ ശരീരമുള്ളവരാണ്."}
    ]},
    {"civWord": "Vision", "civWordMal": "", "imposters": [
      {"word": "Ultron", "wordMal": "", "relationEN": "Vision's body was originally created by Ultron.", "relationML": "അൾട്രോൺ ഉണ്ടാക്കിയ ശരീരമാണ് വിഷൻ."},
      {"word": "Martian Manhunter", "wordMal": "", "relationEN": "Both are floating, density-shifting, stoic alien/synthetic heroes.", "relationML": "രണ്ടുപേരും രൂപം മാറാൻ കഴിവുള്ള ഹീറോകളാണ്."}
    ]},
    {"civWord": "Green Arrow", "civWordMal": "", "imposters": [
      {"word": "Hawkeye", "wordMal": "", "relationEN": "Both are master archers without inherent superpowers.", "relationML": "രണ്ടുപേരും അമ്പെയ്ത്തിൽ പ്രഗത്ഭരായ ഹീറോകളാണ്."},
      {"word": "Batman", "wordMal": "", "relationEN": "Both are billionaire vigilantes relying on gadgets.", "relationML": "രണ്ടുപേരും ആയുധങ്ങൾ ഉപയോഗിക്കുന്ന പണക്കാരാണ്."}
    ]},
    {"civWord": "Robin", "civWordMal": "", "imposters": [
      {"word": "Nightwing", "wordMal": "", "relationEN": "Nightwing is the adult identity of the original Robin.", "relationML": "ആദ്യത്തെ റോബിൻ വലുതായപ്പോഴുള്ള പേരാണ് നൈറ്റ്വിംഗ്."},
      {"word": "Bucky Barnes", "wordMal": "", "relationEN": "Both are the most famous teenage sidekicks in comics.", "relationML": "രണ്ടുപേരും പ്രശസ്തരായ ഹീറോകളുടെ സഹായികളാണ്."}
    ]},
    {"civWord": "Supergirl", "civWordMal": "", "imposters": [
      {"word": "Superman", "wordMal": "", "relationEN": "She is Superman's biological cousin from Krypton.", "relationML": "സൂപ്പർമാന്റെ സ്വന്തം സഹോദരിയാണ് സൂപ്പർഗേൾ."},
      {"word": "Batgirl", "wordMal": "", "relationEN": "Both are female counterparts to DC's two biggest heroes.", "relationML": "ഡിസിയുടെ പ്രശസ്ത ഹീറോകളുടെ വനിതാ പതിപ്പുകളാണിവർ."}
    ]},
    {"civWord": "Aquaman", "civWordMal": "", "imposters": [
      {"word": "Ocean Master", "wordMal": "", "relationEN": "Ocean Master is Aquaman's half-brother and rival for the throne.", "relationML": "അക്വാമാന്റെ അർദ്ധസഹോദരനും ശത്രുവുമാണ് ഓഷ്യൻ മാസ്റ്റർ."},
      {"word": "Mera", "wordMal": "", "relationEN": "Mera is Aquaman's wife and queen of Atlantis.", "relationML": "അക്വാമാന്റെ ഭാര്യയും രാജ്ഞിയുമാണ് മേര."}
    ]},
    {"civWord": "Star-Lord", "civWordMal": "", "imposters": [
      {"word": "Yondu", "wordMal": "", "relationEN": "Yondu is Star-Lord's Ravager mentor and adoptive father figure.", "relationML": "സ്റ്റാർ-ലോർഡിനെ വളർത്തിയ അച്ഛൻ സ്ഥാനത്തുള്ളയാളാണ് യോണ്ടു."},
      {"word": "Nova", "wordMal": "", "relationEN": "Both are human-origin cosmic heroes in Marvel.", "relationML": "രണ്ടുപേരും ബഹിരാകാശത്ത് പ്രവർത്തിക്കുന്ന ഹീറോകളാണ്."}
    ]}
  ],
  "intl_villains": [
    {"civWord": "Joker", "civWordMal": "", "imposters": [
      {"word": "Two-Face", "wordMal": "", "relationEN": "Both are horribly disfigured, iconic Batman rogues.", "relationML": "ബാറ്റ്മാന്റെ പ്രശസ്തരായ വില്ലന്മാരാണ് ഇവർ."},
      {"word": "Harley Quinn", "wordMal": "", "relationEN": "Harley Quinn was Joker's devoted accomplice and romantic partner.", "relationML": "ജോക്കറിന്റെ കൂടെ എപ്പോഴും ఉండే പങ്കാളിയാണ് ഹാർലി ക്വിൻ."}
    ]},
    {"civWord": "Darth Vader", "civWordMal": "", "imposters": [
      {"word": "Kylo Ren", "wordMal": "", "relationEN": "Kylo Ren idolizes his grandfather, Darth Vader.", "relationML": "ഡാർത്ത് വെയ്ഡറിനെ ആരാധിക്കുന്ന വില്ലനാണ് കൈലോ റെൻ."},
      {"word": "Emperor Palpatine", "wordMal": "", "relationEN": "Palpatine is the master who manipulated Vader to the dark side.", "relationML": "ഡാർത്ത് വെയ്ഡറിനെ വില്ലനാക്കിയ പ്രധാന വില്ലനാണ് പാൽപറ്റീൻ."}
    ]},
    {"civWord": "Loki", "civWordMal": "", "imposters": [
      {"word": "Thor", "wordMal": "", "relationEN": "Thor is Loki's adopted, purely heroic brother.", "relationML": "ലോകിയുടെ വളർത്തു സഹോദരനായ ഹീറോയാണ് തോർ."},
      {"word": "Sylvie", "wordMal": "", "relationEN": "Sylvie is a female variant of Loki from another timeline.", "relationML": "മറ്റൊരു ലോകത്തുനിന്നുള്ള ലോകിയുടെ വനിതാ രൂപമാണ് സിൽവി."}
    ]},
    {"civWord": "Lex Luthor", "civWordMal": "", "imposters": [
      {"word": "Brainiac", "wordMal": "", "relationEN": "Both are super-intelligent, bald arch-enemies of Superman.", "relationML": "സൂപ്പർമാന്റെ ബുദ്ധിമാനായ ശത്രുക്കളാണ് ഇവർ."},
      {"word": "Kingpin", "wordMal": "", "relationEN": "Both are bald, wealthy, criminal businessmen with no powers.", "relationML": "സൂപ്പർ പവറില്ലാത്ത പണക്കാരായ വില്ലന്മാരാണിവർ."}
    ]},
    {"civWord": "Hannibal Lecter", "civWordMal": "", "imposters": [
      {"word": "Norman Bates", "wordMal": "", "relationEN": "Both are iconic, highly intelligent cinematic serial killers.", "relationML": "സിനിമയിലെ പ്രശസ്തരായ സീരിയൽ കില്ലർമാരാണ് ഇവർ."},
      {"word": "Clarice Starling", "wordMal": "", "relationEN": "Clarice is the FBI agent who famously interrogates Hannibal.", "relationML": "ഹാനിബാളിനെ ചോദ്യം ചെയ്യുന്ന എഫ്ബിഐ ഉദ്യോഗസ്ഥയാണ് ക്ലാരീസ്."}
    ]},
    {"civWord": "Doctor Doom", "civWordMal": "", "imposters": [
      {"word": "Magneto", "wordMal": "", "relationEN": "Both are complex Marvel villains who wear iconic metal helmets.", "relationML": "മാർവലിലെ പ്രശസ്തരായ ഇരുമ്പുതൊപ്പി വെക്കുന്ന വില്ലന്മാരാണ്."},
      {"word": "Mr. Fantastic", "wordMal": "", "relationEN": "Mr. Fantastic is Doom's intellectual rival and main enemy.", "relationML": "ഡോക്ടർ ഡൂമിന്റെ പ്രധാന ശത്രുവായ ഹീറോയാണ് ഇയാൾ."}
    ]},
    {"civWord": "Ultron", "civWordMal": "", "imposters": [
      {"word": "Skynet", "wordMal": "", "relationEN": "Both are rogue artificial intelligences bent on human extinction.", "relationML": "മനുഷ്യരെ നശിപ്പിക്കാൻ ശ്രമിക്കുന്ന റോബോട്ടുകളാണ് ഇവർ."},
      {"word": "Vision", "wordMal": "", "relationEN": "Vision is the synthetic body Ultron built for himself.", "relationML": "അൾട്രോൺ സ്വന്തമായി ഉണ്ടാക്കിയ ശരീരമാണ് വിഷൻ."}
    ]},
    {"civWord": "Jafar", "civWordMal": "", "imposters": [
      {"word": "Scar", "wordMal": "", "relationEN": "Both are manipulative Disney villains who usurp the throne.", "relationML": "രാജാവാകാൻ ശ്രമിക്കുന്ന ഡിസ്നി വില്ലന്മാരാണ് ഇവർ."},
      {"word": "Iago", "wordMal": "", "relationEN": "Iago is Jafar's loud-mouthed parrot henchman.", "relationML": "ജാഫറിന്റെ കൂടെയുള്ള തത്തയാണ് ഇയാഗോ."}
    ]},
    {"civWord": "Scar", "civWordMal": "", "imposters": [
      {"word": "Mufasa", "wordMal": "", "relationEN": "Mufasa is the brother Scar murders to become king.", "relationML": "സ്കാർ കൊലപ്പെടുത്തുന്ന സ്വന്തം സഹോദരനാണ് മുഫാസ."},
      {"word": "Shere Khan", "wordMal": "", "relationEN": "Both are sophisticated, evil feline Disney villains.", "relationML": "ഡിസ്നി കഥകളിലെ മൃഗരൂപമുള്ള വില്ലന്മാരാണിവർ."}
    ]},
    {"civWord": "Hans", "civWordMal": "", "imposters": [
      {"word": "Gaston", "wordMal": "", "relationEN": "Both are handsome, seemingly perfect men who reveal evil natures.", "relationML": "കാണാൻ സുന്ദരന്മാരായ വില്ലന്മാരാണിവർ."},
      {"word": "Kristoff", "wordMal": "", "relationEN": "Both compete for Princess Anna's affection in Frozen.", "relationML": "ഫ്രോസൺ സിനിമയിലെ നായകനും വില്ലനുമാണ് ഇവർ."}
    ]},
    {"civWord": "Bane", "civWordMal": "", "imposters": [
      {"word": "Venom", "wordMal": "", "relationEN": "Both rely on a chemical pumping into their bodies for super strength.", "relationML": "മരുന്ന് ഉപയോഗിച്ച് ശക്തി കൂട്ടുന്ന വില്ലന്മാരാണിവർ."},
      {"word": "Ra's al Ghul", "wordMal": "", "relationEN": "Bane was a member of Ra's al Ghul's League of Shadows.", "relationML": "രണ്ടുപേരും ഒരേ സംഘടനയിൽ പ്രവർത്തിച്ച വില്ലന്മാരാണ്."}
    ]},
    {"civWord": "Venom", "civWordMal": "", "imposters": [
      {"word": "Carnage", "wordMal": "", "relationEN": "Carnage is the red, more psychopathic offspring of Venom.", "relationML": "വെനത്തിന്റെ ശരീരത്തിൽ നിന്നുണ്ടായ ഭീകരനായ വില്ലനാണ് കാർണേജ്."},
      {"word": "Spider-Man", "wordMal": "", "relationEN": "Venom's suit originally belonged to Spider-Man.", "relationML": "വെനം ഉപയോഗിക്കുന്ന സ്യൂട്ട് ആദ്യം സ്പൈഡർമാന്റേതായിരുന്നു."}
    ]},
    {"civWord": "Kingpin", "civWordMal": "", "imposters": [
      {"word": "Daredevil", "wordMal": "", "relationEN": "Daredevil is the vigilante who constantly fights Kingpin.", "relationML": "കിംഗ്പിന്നിന്റെ പ്രധാന ശത്രുവായ ഹീറോയാണ് ഡെയർഡെവിൾ."},
      {"word": "Bullseye", "wordMal": "", "relationEN": "Bullseye is Kingpin's chief psychotic assassin.", "relationML": "കിംഗ്പിന്നിന് വേണ്ടി കൊലപാതകങ്ങൾ ചെയ്യുന്ന ആളാണ് ബുൾസ്ഐ."}
    ]},
    {"civWord": "Sauron", "civWordMal": "", "imposters": [
      {"word": "Saruman", "wordMal": "", "relationEN": "Saruman is the wizard corrupted into serving Sauron.", "relationML": "സോറോണിന് വേണ്ടി പണിയെടുക്കുന്ന മാന്ത്രികനാണ് സരുമാൻ."},
      {"word": "Voldemort", "wordMal": "", "relationEN": "Both are titular Dark Lords whose essence is tied to magical objects.", "relationML": "മാന്ത്രിക വസ്തുക്കളിൽ ജീവൻ സൂക്ഷിക്കുന്ന വലിയ വില്ലന്മാരാണിവർ."}
    ]},
    {"civWord": "Palpatine", "civWordMal": "", "imposters": [
      {"word": "Darth Vader", "wordMal": "", "relationEN": "Vader is Palpatine's cyborg apprentice.", "relationML": "പാൽപറ്റീന്റെ കീഴിൽ പ്രവർത്തിക്കുന്ന വില്ലനാണ് ഡാർത്ത് വെയ്ഡർ."},
      {"word": "Snoke", "wordMal": "", "relationEN": "Snoke was a puppet ruler secretly created by Palpatine.", "relationML": "പാൽപറ്റീൻ ഉണ്ടാക്കിയെടുത്ത മറ്റൊരു വില്ലനാണ് സ്നോക്ക്."}
    ]},
    {"civWord": "Pennywise", "civWordMal": "", "imposters": [
      {"word": "Freddy Krueger", "wordMal": "", "relationEN": "Both are supernatural entities who feed on the fear of children.", "relationML": "കുട്ടികളുടെ പേടി കണ്ട് രസിക്കുന്ന പ്രേത വില്ലന്മാരാണിവർ."},
      {"word": "The Babadook", "wordMal": "", "relationEN": "Both are terrifying monsters from modern horror cinema.", "relationML": "സിനിമയിലെ ഭയപ്പെടുത്തുന്ന രാക്ഷസന്മാരാണ് ഇരുവരും."}
    ]},
    {"civWord": "Jason Voorhees", "civWordMal": "", "imposters": [
      {"word": "Michael Myers", "wordMal": "", "relationEN": "Both are silent, masked, unkillable slasher movie icons.", "relationML": "മുഖംമൂടി ധരിച്ച നിശബ്ദരായ കൊലയാളികളാണ് ഇരുവരും."},
      {"word": "Leatherface", "wordMal": "", "relationEN": "Both are hulking, mask-wearing horror movie killers.", "relationML": "ഹൊറർ സിനിമകളിലെ ക്രൂരരായ കൊലയാളികളാണിവർ."}
    ]},
    {"civWord": "Agent Smith", "civWordMal": "", "imposters": [
      {"word": "Neo", "wordMal": "", "relationEN": "Neo is the anomaly that Agent Smith is programmed to destroy.", "relationML": "ഏജന്റ് സ്മിത്തിന്റെ പ്രധാന ശത്രുവായ നായകനാണ് നിയോ."},
      {"word": "T-1000", "wordMal": "", "relationEN": "Both are relentless, emotionless program/machine assassins.", "relationML": "വികാരങ്ങളില്ലാത്ത റോബോട്ട് കൊലയാളികളാണിവർ."}
    ]},
    {"civWord": "Boba Fett", "civWordMal": "", "imposters": [
      {"word": "Jango Fett", "wordMal": "", "relationEN": "Jango is the father whom Boba was cloned from.", "relationML": "ബോബ ഫെറ്റിന്റെ അച്ഛനായ മറ്റൊരു കൊലയാളിയാണ് ജാംഗോ."},
      {"word": "The Mandalorian", "wordMal": "", "relationEN": "Both wear iconic Beskar armor in the Star Wars universe.", "relationML": "സ്റ്റാർ വാർസ് സിനിമകളിൽ ഒരേപോലെയുള്ള വേഷം ധരിക്കുന്നവരാണ് ഇവർ."}
    ]},
    {"civWord": "Darth Maul", "civWordMal": "", "imposters": [
      {"word": "Count Dooku", "wordMal": "", "relationEN": "Both are Sith apprentices to Emperor Palpatine.", "relationML": "പാൽപറ്റീന്റെ കീഴിലുള്ള വില്ലന്മാരാണിവർ."},
      {"word": "Obi-Wan Kenobi", "wordMal": "", "relationEN": "Obi-Wan is the Jedi who famously cut Maul in half.", "relationML": "ഡാർത്ത് മാളിനെ പരാജയപ്പെടുത്തിയ ഹീറോയാണ് ഒബി-വാൻ."}
    ]}
  ],
  "intl_movie_chars": [
    {"civWord": "James Bond", "civWordMal": "", "imposters": [
      {"word": "Ethan Hunt", "wordMal": "", "relationEN": "Both are iconic cinematic super-spies known for stunts.", "relationML": "സിനിമയിലെ പ്രശസ്തരായ രഹസ്യാന്വേഷകരാണ് ഇവർ."},
      {"word": "Jason Bourne", "wordMal": "", "relationEN": "Both are deadly secret agents, though Bourne has amnesia.", "relationML": "രണ്ടുപേരും കഴിവുറ്റ ഏജന്റുമാരാണ്."}
    ]},
    {"civWord": "Indiana Jones", "civWordMal": "", "imposters": [
      {"word": "Lara Croft", "wordMal": "", "relationEN": "Both are adventurous archaeologists hunting ancient relics.", "relationML": "പുരാതന വസ്തുക്കൾ തേടിപ്പോകുന്ന സാഹസികരായ കഥാപാത്രങ്ങളാണ്."},
      {"word": "Nathan Drake", "wordMal": "", "relationEN": "Both are charming treasure hunters exploring ruins.", "relationML": "നിധി തേടിപ്പോകുന്ന സാഹസികരായ കഥാപാത്രങ്ങളാണിവർ."}
    ]},
    {"civWord": "Jack Sparrow", "civWordMal": "", "imposters": [
      {"word": "Barbossa", "wordMal": "", "relationEN": "Barbossa is Jack's rival pirate captain of the Black Pearl.", "relationML": "ജാക്ക് സ്പാരോയുടെ ശത്രുവായ മറ്റൊരു കടൽക്കൊള്ളക്കാരനാണ്."},
      {"word": "Will Turner", "wordMal": "", "relationEN": "Will is the blacksmith who reluctantly partners with Jack.", "relationML": "ജാക്കിന്റെ കൂടെ യാത്ര ചെയ്യുന്ന നായകനാണ് വിൽ."}
    ]},
    {"civWord": "Forrest Gump", "civWordMal": "", "imposters": [
      {"word": "Jenny Curran", "wordMal": "", "relationEN": "Jenny is Forrest's lifelong, tragic love interest.", "relationML": "ഫോറസ്റ്റിന്റെ കാമുകിയായ കഥാപാത്രമാണ് ജെന്നി."},
      {"word": "Lieutenant Dan", "wordMal": "", "relationEN": "He is Forrest's commanding officer who loses his legs.", "relationML": "ഫോറസ്റ്റിന്റെ കൂടെയുള്ള പട്ടാള ഉദ്യോഗസ്ഥനാണ് ലെഫ്റ്റനന്റ് ഡാൻ."}
    ]},
    {"civWord": "Walter White", "civWordMal": "", "imposters": [
      {"word": "Tony Soprano", "wordMal": "", "relationEN": "Both are iconic anti-heroes leading criminal empires.", "relationML": "കുറ്റകൃത്യങ്ങൾ ചെയ്യുന്ന പ്രശസ്തരായ നായകന്മാരാണിവർ."},
      {"word": "Jesse Pinkman", "wordMal": "", "relationEN": "Jesse is Walter's former student and meth-cooking partner.", "relationML": "വാൾട്ടറിന്റെ കൂടെയുള്ള സഹായിയാണ് ജെസ്സി."}
    ]},
    {"civWord": "Don Corleone", "civWordMal": "", "imposters": [
      {"word": "Tony Montana", "wordMal": "", "relationEN": "Both are classic cinematic mob bosses, though opposite in style.", "relationML": "സിനിമയിലെ പ്രശസ്തരായ അധോലോക നായകന്മാരാണ് ഇവർ."},
      {"word": "Michael Corleone", "wordMal": "", "relationEN": "Michael is Don Corleone's son who inherits the mafia family.", "relationML": "ഡോൺ കോർലിയോണിന്റെ മകനാണ് മൈക്കിൾ."}
    ]},
    {"civWord": "Sherlock Holmes", "civWordMal": "", "imposters": [
      {"word": "Hercule Poirot", "wordMal": "", "relationEN": "Both are legendary, eccentric literary detectives.", "relationML": "ബുദ്ധിമാനായ പ്രശസ്ത കുറ്റാന്വേഷകരാണ് ഇവർ."},
      {"word": "Dr. Watson", "wordMal": "", "relationEN": "Watson is Sherlock's loyal friend and biographer.", "relationML": "ഷെർലക് ഹോംസിന്റെ സഹായിയാണ് വാട്സൺ."}
    ]},
    {"civWord": "Hannibal Lecter", "civWordMal": "", "imposters": [
      {"word": "Dexter Morgan", "wordMal": "", "relationEN": "Both are highly intelligent serial killers in pop culture.", "relationML": "ബുദ്ധിമാന്മാരായ കൊലയാളികളാണ് രണ്ടുപേരും."},
      {"word": "Clarice Starling", "wordMal": "", "relationEN": "She is the FBI student who interacts with Hannibal.", "relationML": "ഹാനിബാളിനെ ചോദ്യം ചെയ്യുന്ന ഉദ്യോഗസ്ഥയാണ് ക്ലാരീസ്."}
    ]},
    {"civWord": "Neo", "civWordMal": "", "imposters": [
      {"word": "John Wick", "wordMal": "", "relationEN": "Both are unstoppable cinematic heroes played by Keanu Reeves.", "relationML": "കിയാനു റീവ്സ് അഭിനയിച്ച പ്രശസ്ത കഥാപാത്രങ്ങളാണിവർ."},
      {"word": "Morpheus", "wordMal": "", "relationEN": "Morpheus is the mentor who frees Neo from the Matrix.", "relationML": "നിയോയെ സഹായിക്കുന്ന ഗുരുവാണ് മോർഫിയസ്."}
    ]},
    {"civWord": "Maximus", "civWordMal": "", "imposters": [
      {"word": "Leonidas", "wordMal": "", "relationEN": "Both are ancient military leaders fighting to their death.", "relationML": "പുരാതന കാലത്തെ പ്രശസ്തരായ യോദ്ധാക്കളാണ് ഇവർ."},
      {"word": "Commodus", "wordMal": "", "relationEN": "Commodus is the evil emperor Maximus vows to kill.", "relationML": "മാക്സിമസിന്റെ ശത്രുവായ രാജാവാണ് കൊമോഡസ്."}
    ]},
    {"civWord": "Jack Dawson", "civWordMal": "", "imposters": [
      {"word": "Rose DeWitt Bukater", "wordMal": "", "relationEN": "Rose is Jack's aristocratic lover on the Titanic.", "relationML": "ടൈറ്റാനിക് സിനിമയിൽ ജാക്കിന്റെ കാമുകിയാണ് റോസ്."},
      {"word": "Jay Gatsby", "wordMal": "", "relationEN": "Both are charming romantic leads played by DiCaprio.", "relationML": "ലിയനാർഡോ ഡികാപ്രിയോ അഭിനയിച്ച പ്രശസ്ത നായകന്മാരാണിവർ."}
    ]},
    {"civWord": "Edward Scissorhands", "civWordMal": "", "imposters": [
      {"word": "Beetlejuice", "wordMal": "", "relationEN": "Both are pale, iconic characters directed by Tim Burton.", "relationML": "ടിം ബർട്ടൺ സിനിമകളിലെ പ്രശസ്ത കഥാപാത്രങ്ങളാണിവർ."},
      {"word": "Willy Wonka", "wordMal": "", "relationEN": "Both are eccentric, isolated characters played by Johnny Depp.", "relationML": "ജോണി ഡെപ്പ് അവതരിപ്പിച്ച വ്യത്യസ്തമായ കഥാപാത്രങ്ങളാണ്."}
    ]},
    {"civWord": "Harry Callahan", "civWordMal": "", "imposters": [
      {"word": "John McClane", "wordMal": "", "relationEN": "Both are renegade cops who break the rules.", "relationML": "നിയമം പാലിക്കാത്ത ധീരരായ പോലീസുകാരാണിവർ."},
      {"word": "Martin Riggs", "wordMal": "", "relationEN": "Both are reckless, gun-toting cinematic police detectives.", "relationML": "സിനിമകളിലെ പ്രശസ്തരായ പോലീസുകാരാണ് ഇവർ."}
    ]},
    {"civWord": "Rocky Balboa", "civWordMal": "", "imposters": [
      {"word": "Apollo Creed", "wordMal": "", "relationEN": "Apollo is Rocky's initial rival turned best friend.", "relationML": "റോക്കിയുടെ ശത്രുവും പിന്നീട് സുഹൃത്തുമായ ബോക്സറാണ് അപ്പോളോ."},
      {"word": "Rambo", "wordMal": "", "relationEN": "Both are defining action roles played by Sylvester Stallone.", "relationML": "സിൽവസ്റ്റർ സ്റ്റാലോൺ അഭിനയിച്ച വമ്പൻ കഥാപാത്രങ്ങളാണിവർ."}
    ]},
    {"civWord": "Tyler Durden", "civWordMal": "", "imposters": [
      {"word": "Patrick Bateman", "wordMal": "", "relationEN": "Both are late 90s cinematic symbols of toxic masculinity.", "relationML": "സിനിമകളിലെ അക്രമാസക്തരായ കഥാപാത്രങ്ങളാണിവർ."},
      {"word": "The Narrator", "wordMal": "", "relationEN": "Tyler is the alter-ego hallucination of the Narrator.", "relationML": "നായകന്റെ മനസ്സിലെ മറ്റൊരു രൂപമാണ് ടൈലർ."}
    ]},
    {"civWord": "Marty McFly", "civWordMal": "", "imposters": [
      {"word": "Doc Brown", "wordMal": "", "relationEN": "Doc is the eccentric inventor who builds Marty's time machine.", "relationML": "മാർട്ടിയുടെ കൂടെയുള്ള ശാസ്ത്രജ്ഞനാണ് ഡോക് ബ്രൗൺ."},
      {"word": "Biff Tannen", "wordMal": "", "relationEN": "Biff is the recurring bully who torments Marty.", "relationML": "മാർട്ടിയെ എപ്പോഴും ശല്യം ചെയ്യുന്ന വില്ലനാണ് ബിഫ്."}
    ]},
    {"civWord": "Harry Potter", "civWordMal": "", "imposters": [
      {"word": "Luke Skywalker", "wordMal": "", "relationEN": "Both are young orphan farmboys/students destined to defeat evil.", "relationML": "തിന്മയെ തോൽപ്പിക്കാൻ നിയോഗിക്കപ്പെട്ട നായകന്മാരാണ് ഇവർ."},
      {"word": "Ron Weasley", "wordMal": "", "relationEN": "Ron is Harry's red-haired, loyal best friend.", "relationML": "ഹാരി പോട്ടറുടെ ഏറ്റവും അടുത്ത കൂട്ടുകാരനാണ് റോൺ."}
    ]},
    {"civWord": "Frodo Baggins", "civWordMal": "", "imposters": [
      {"word": "Samwise Gamgee", "wordMal": "", "relationEN": "Sam is the loyal gardener who carries Frodo.", "relationML": "ഫ്രോഡോയെ സഹായിക്കുന്ന വിശ്വസ്തനായ സുഹൃത്താണ് സാം."},
      {"word": "Gollum", "wordMal": "", "relationEN": "Gollum is a corrupted hobbit obsessed with Frodo's ring.", "relationML": "മോതിരത്തിന് വേണ്ടി ഫ്രോഡോയുടെ കൂടെയുള്ള വില്ലനാണ് ഗൊല്ലം."}
    ]},
    {"civWord": "Aragorn", "civWordMal": "", "imposters": [
      {"word": "Legolas", "wordMal": "", "relationEN": "Both are skilled warriors in the Fellowship of the Ring.", "relationML": "രണ്ടുപേരും പ്രശസ്തരായ പോരാളികളാണ്."},
      {"word": "Boromir", "wordMal": "", "relationEN": "Boromir is the flawed human companion to Aragorn.", "relationML": "അരഗോണിന്റെ കൂടെയുള്ള മറ്റൊരു യോദ്ധാവാണ് ബോറോമിർ."}
    ]},
    {"civWord": "Han Solo", "civWordMal": "", "imposters": [
      {"word": "Chewbacca", "wordMal": "", "relationEN": "Chewbacca is Han's loyal Wookiee co-pilot.", "relationML": "ഹാൻ സോളോയുടെ കൂടെയുള്ള സുഹൃത്താണ് ച്യൂബാക്ക."},
      {"word": "Indiana Jones", "wordMal": "", "relationEN": "Both are iconic scoundrel characters played by Harrison Ford.", "relationML": "ഹാരിസൺ ഫോർഡ് അഭിനയിച്ച പ്രശസ്ത കഥാപാത്രങ്ങളാണിവർ."}
    ]}
  ],
  "intl_tv_chars": [
    {"civWord": "Ross Geller", "civWordMal": "", "imposters": [
      {"word": "Chandler Bing", "wordMal": "", "relationEN": "Both are male lead characters living across the hall in Friends.", "relationML": "ഫ്രണ്ട്സ് സീരീസിലെ നായക കഥാപാത്രങ്ങളാണിവർ."},
      {"word": "Rachel Green", "wordMal": "", "relationEN": "Rachel is Ross's infamous on-and-off romantic partner.", "relationML": "റോസിന്റെ കാമുകിയായ കഥാപാത്രമാണ് റേച്ചൽ."}
    ]},
    {"civWord": "Michael Scott", "civWordMal": "", "imposters": [
      {"word": "David Brent", "wordMal": "", "relationEN": "David Brent is the UK original version of Michael Scott.", "relationML": "മൈക്കിൾ സ്കോട്ടിന്റെ യുകെ സീരീസ് രൂപമാണ് ഡേവിഡ് ബ്രെന്റ്."},
      {"word": "Dwight Schrute", "wordMal": "", "relationEN": "Dwight is Michael's eccentric, sycophantic subordinate.", "relationML": "മൈക്കിളിന്റെ കീഴിൽ ജോലി ചെയ്യുന്ന വിചിത്ര സ്വഭാവമുള്ള ആളാണ് ഡ്വൈറ്റ്."}
    ]},
    {"civWord": "Walter White", "civWordMal": "", "imposters": [
      {"word": "Jesse Pinkman", "wordMal": "", "relationEN": "Jesse is Walter's former student and meth-cooking partner.", "relationML": "വാൾട്ടറിന്റെ കൂടെയുള്ള സഹായിയാണ് ജെസ്സി."},
      {"word": "Saul Goodman", "wordMal": "", "relationEN": "Saul is the sleazy lawyer who helps launder Walter's money.", "relationML": "വാൾട്ടറിനെ സഹായിക്കുന്ന വക്കീലാണ് സോൾ ഗുഡ്മാൻ."}
    ]},
    {"civWord": "Jon Snow", "civWordMal": "", "imposters": [
      {"word": "Daenerys Targaryen", "wordMal": "", "relationEN": "Both are leaders of major houses who fall in love.", "relationML": "ഗെയിം ഓഫ് ത്രോൺസിലെ പ്രശസ്തരായ രണ്ട് നായക കഥാപാത്രങ്ങളാണ്."},
      {"word": "Robb Stark", "wordMal": "", "relationEN": "Robb is Jon Snow's half-brother and King in the North.", "relationML": "ജോൺ സ്നോയുടെ സഹോദരനായ രാജാവാണ് റോബ് സ്റ്റാർക്ക്."}
    ]},
    {"civWord": "Sheldon Cooper", "civWordMal": "", "imposters": [
      {"word": "Leonard Hofstadter", "wordMal": "", "relationEN": "Leonard is Sheldon's long-suffering, nerdy roommate.", "relationML": "ഷെൽഡന്റെ കൂടെ താമസിക്കുന്ന സുഹൃത്താണ് ലിയോനാർഡ്."},
      {"word": "Spock", "wordMal": "", "relationEN": "Spock is the hyper-logical sci-fi character Sheldon idolizes.", "relationML": "ഷെൽഡൻ ആരാധിക്കുന്ന പ്രശസ്ത സയൻസ് ഫിക്ഷൻ കഥാപാത്രമാണ് സ്പോക്ക്."}
    ]},
    {"civWord": "Ted Mosby", "civWordMal": "", "imposters": [
      {"word": "Barney Stinson", "wordMal": "", "relationEN": "Barney is Ted's womanizing, suit-wearing friend.", "relationML": "ടെഡിന്റെ സുഹൃത്തായ രസികൻ കഥാപാത്രമാണ് ബാർണി."},
      {"word": "Ross Geller", "wordMal": "", "relationEN": "Both are nerdy, hopelessly romantic sitcom protagonists.", "relationML": "രണ്ടുപേരും പ്രണയം തേടി നടക്കുന്ന സമാനമായ കഥാപാത്രങ്ങളാണ്."}
    ]},
    {"civWord": "Homer Simpson", "civWordMal": "", "imposters": [
      {"word": "Peter Griffin", "wordMal": "", "relationEN": "Both are dim-witted, overweight animated sitcom fathers.", "relationML": "അനിമേഷൻ സീരീസുകളിലെ മണ്ടന്മാരായ അച്ഛന്മാരാണ് ഇവർ."},
      {"word": "Bart Simpson", "wordMal": "", "relationEN": "Bart is Homer's rebellious, prankster son.", "relationML": "ഹോമർ സിംസണിന്റെ മകനാണ് ബാർട്ട്."}
    ]},
    {"civWord": "Sherlock Holmes", "civWordMal": "", "imposters": [
      {"word": "Dr. Watson", "wordMal": "", "relationEN": "Watson is Sherlock's loyal companion and chronicler.", "relationML": "ഷെർലക്കിന്റെ വിശ്വസ്തനായ സുഹൃത്താണ് വാട്സൺ."},
      {"word": "Moriarty", "wordMal": "", "relationEN": "Moriarty is Sherlock's equally brilliant criminal nemesis.", "relationML": "ഷെർലക്കിന്റെ ബുദ്ധിമാനായ വില്ലനാണ് മോറിയാർട്ടി."}
    ]},
    {"civWord": "Tony Stark", "civWordMal": "", "imposters": [
      {"word": "Steve Rogers", "wordMal": "", "relationEN": "Steve is the righteous leader who frequently clashes with Tony.", "relationML": "ടോണി സ്റ്റാർക്കിന്റെ കൂടെയുള്ള മറ്റൊരു പ്രശസ്ത ഹീറോയാണ് സ്റ്റീവ്."},
      {"word": "Bruce Wayne", "wordMal": "", "relationEN": "Both are billionaire playboys who build their superhero suits.", "relationML": "രണ്ടുപേരും പണക്കാരായ ഹീറോകളാണ്."}
    ]},
    {"civWord": "Dwight Schrute", "civWordMal": "", "imposters": [
      {"word": "Jim Halpert", "wordMal": "", "relationEN": "Jim is the coworker who constantly pranks Dwight.", "relationML": "ഡ്വൈറ്റിനെ എപ്പോഴും കളിയാക്കുന്ന സുഹൃത്താണ് ജിം."},
      {"word": "Ron Swanson", "wordMal": "", "relationEN": "Both are rugged, intense workplace sitcom characters.", "relationML": "സീരീസുകളിലെ ഗൗരവക്കാരായ കഥാപാത്രങ്ങളാണിവർ."}
    ]},
    {"civWord": "Dexter Morgan", "civWordMal": "", "imposters": [
      {"word": "Jack Bauer", "wordMal": "", "relationEN": "Both are intense TV protagonists living double lives.", "relationML": "രഹസ്യ ജീവിതം നയിക്കുന്ന സീരീസ് നായകന്മാരാണിവർ."},
      {"word": "Hannibal Lecter", "wordMal": "", "relationEN": "Both are pop culture's most famous sympathetic serial killers.", "relationML": "രണ്ടുപേരും ബുദ്ധിമാന്മാരായ കൊലയാളികളാണ്."}
    ]},
    {"civWord": "Don Draper", "civWordMal": "", "imposters": [
      {"word": "Tony Soprano", "wordMal": "", "relationEN": "Both are flawed, iconic male leads from the Golden Age of TV.", "relationML": "ടിവി സീരീസുകളിലെ പ്രശസ്തരായ നായകന്മാരാണിവർ."},
      {"word": "Peggy Olson", "wordMal": "", "relationEN": "Peggy is Don's protégé who rises through the ad agency.", "relationML": "ഡോണിന്റെ കീഴിൽ പഠിച്ചുവന്ന കഥാപാത്രമാണ് പെഗ്ഗി."}
    ]},
    {"civWord": "Cersei Lannister", "civWordMal": "", "imposters": [
      {"word": "Sansa Stark", "wordMal": "", "relationEN": "Sansa is the captive girl who learns manipulation from Cersei.", "relationML": "സെർസിയുടെ ശത്രുവായ മറ്റൊരു പ്രധാന കഥാപാത്രമാണ് സാൻസ."},
      {"word": "Margaery Tyrell", "wordMal": "", "relationEN": "Margaery is Cersei's younger, beautiful political rival.", "relationML": "സെർസിയോട് മത്സരിക്കുന്ന മറ്റൊരു രാജ്ഞിയാണ് മാർജറി."}
    ]},
    {"civWord": "Tyrion Lannister", "civWordMal": "", "imposters": [
      {"word": "Jaime Lannister", "wordMal": "", "relationEN": "Jaime is Tyrion's handsome, knightly older brother.", "relationML": "ടിരിയന്റെ സ്വന്തം സഹോദരനാണ് ജെയ്മി."},
      {"word": "Varys", "wordMal": "", "relationEN": "Both are cunning, intellectual players of the political game.", "relationML": "ബുദ്ധി ഉപയോഗിച്ച് കളിക്കുന്നവരാണ് ഇരുവരും."}
    ]},
    {"civWord": "Rachel Green", "civWordMal": "", "imposters": [
      {"word": "Monica Geller", "wordMal": "", "relationEN": "Monica is Rachel's high school friend and obsessive roommate.", "relationML": "റേച്ചലിന്റെ അടുത്ത കൂട്ടുകാരിയാണ് മോണിക്ക."},
      {"word": "Penny", "wordMal": "", "relationEN": "Both are the pretty, non-nerdy female leads of their sitcoms.", "relationML": "സീരീസുകളിലെ സുന്ദരികളായ നായികമാരാണിവർ."}
    ]},
    {"civWord": "Joey Tribbiani", "civWordMal": "", "imposters": [
      {"word": "Phoebe Buffay", "wordMal": "", "relationEN": "Both are the quirky, less intellectual members of the Friends group.", "relationML": "ഫ്രണ്ട്സ് സീരീസിലെ വിചിത്ര സ്വഭാവമുള്ള കൂട്ടുകാരാണിവർ."},
      {"word": "Barney Stinson", "wordMal": "", "relationEN": "Both are the designated womanizers of their friend groups.", "relationML": "സീരീസുകളിലെ സമാന സ്വഭാവമുള്ള കഥാപാത്രങ്ങളാണിവർ."}
    ]},
    {"civWord": "Jim Halpert", "civWordMal": "", "imposters": [
      {"word": "Pam Beesly", "wordMal": "", "relationEN": "Pam is Jim's long-time crush and eventual wife.", "relationML": "ജിമ്മിന്റെ കാമുകിയായ കഥാപാത്രമാണ് പാം."},
      {"word": "Ben Wyatt", "wordMal": "", "relationEN": "Both are the sarcastic, straight-man voices of reason in their shows.", "relationML": "രണ്ടുപേരും സീരീസുകളിലെ സമാനമായ നായകന്മാരാണ്."}
    ]},
    {"civWord": "Michael Bluth", "civWordMal": "", "imposters": [
      {"word": "Gob Bluth", "wordMal": "", "relationEN": "Gob is Michael's arrogant, failed magician older brother.", "relationML": "മൈക്കിളിന്റെ സഹോദരനാണ് ഗോബ്."},
      {"word": "Lucille Bluth", "wordMal": "", "relationEN": "Lucille is Michael's manipulative, alcoholic mother.", "relationML": "മൈക്കിളിന്റെ അമ്മയാണ് ലൂസിൽ."}
    ]},
    {"civWord": "George Costanza", "civWordMal": "", "imposters": [
      {"word": "Cosmo Kramer", "wordMal": "", "relationEN": "Kramer is the eccentric, erratic neighbor to George's best friend.", "relationML": "ജോർജിന്റെ സുഹൃത്തായ വിചിത്ര കഥാപാത്രമാണ് ക്രാമർ."},
      {"word": "Jerry Seinfeld", "wordMal": "", "relationEN": "Jerry is George's more successful, rational best friend.", "relationML": "ജോർജിന്റെ ഏറ്റവും അടുത്ത സുഹൃത്താണ് ജെറി."}
    ]},
    {"civWord": "Homer Simpson", "civWordMal": "", "imposters": [
      {"word": "Marge Simpson", "wordMal": "", "relationEN": "Marge is Homer's patient, blue-haired wife.", "relationML": "ഹോമറിന്റെ ഭാര്യയാണ് മാർജ്."},
      {"word": "Ned Flanders", "wordMal": "", "relationEN": "Ned is Homer's overly religious, annoyingly perfect neighbor.", "relationML": "ഹോമറിന്റെ അയൽക്കാരനായ കഥാപാത്രമാണ് നെഡ് ഫ്ലാൻഡേഴ്സ്."}
    ]}
  ]
}

with open('scratch/chunk_2_done.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
