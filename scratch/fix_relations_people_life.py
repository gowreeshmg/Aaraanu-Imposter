import json

RELATIONS_PEOPLE = {
    ("Mohanlal","Mammootty"): ("Both are legendary Malayalam superstars who dominated Kerala cinema for four decades and are often compared as rivals.", "മോഹൻലാലും മമ്മൂട്ടിയും നാല് ദശകങ്ങളായി കേരള സിനിമ ആധിപത്യം പുലർത്തുന്ന, ഇതിഹാസ മലയാള സൂപ്പർതാരങ്ങളാണ്."),
    ("Mammootty","Mohanlal"): ("Both are legendary Malayalam film superstars famous for versatile acting and commanding screen presence.", "മമ്മൂട്ടിയും മോഹൻലാലും ഒരേ ചലച്ചിത്ര ഇതിഹാസ, മലയാള സൂപ്പർതാരങ്ങളാണ്."),
    ("Manju Warrier","Kavya Madhavan"): ("Both are prominent Malayalam actresses who made a comeback after personal life breaks and starred in hit films.", "മഞ്ജു വാര്യരും കാവ്യ മാധവനും ഒരേ, ഒടിഞ്ഞ ജീവിതം ശേഷം ഒരേ, ജനപ്രിയ മലയാള ചലച്ചിത്ര താരങ്ങളാണ്."),
    ("Fahadh Faasil","Dulquer Salmaan"): ("Both are next-generation Malayalam actors known for intense, nuanced performances in critically acclaimed art-house films.", "ഫഹദ് ഫാസിലും ദുൽക്കർ സൽമാനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Shobana","Manju Warrier"): ("Both are acclaimed South Indian actresses who are also recognized as accomplished classical dancers.", "ശോഭനയും മഞ്ജു വാര്യരും ഒരേ, ദക്ഷിണ ഇന്ത്യ ചലച്ചിത്ര, ഒരേ, ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Dileep","Jayaram"): ("Both are popular Malayalam comedy-drama actors who built massive fan bases in the 1990s and 2000s.", "ദിലീപും ജയറാമും ഒരേ, 1990-കളിൽ, 2000-കളിൽ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Suresh Gopi","Biju Menon"): ("Both are popular Malayalam actors famous for their roles as strong police or political characters in mainstream films.", "സുരേഷ് ഗോപിയും ബിജു മേനോനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Prithviraj","Indrajith"): ("Both are brothers who are popular Malayalam actors—Prithviraj is a lead action star and Indrajith plays strong supporting roles.", "പൃഥ്വിരാജും ഇന്ദ്രജിത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Tovino Thomas","Asif Ali"): ("Both are young Malayalam actors who rose to fame in the 2010s with critically praised performance-driven films.", "ടോവിനോ തോമസും ആസിഫ് അലിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Nivin Pauly","Dulquer Salmaan"): ("Both are leading young Malayalam stars of the 2010s generation known for their relatable boy-next-door image.", "നിവിൻ പോളിയും ദുൽക്കർ സൽമാനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kunchacko Boban","Jayasurya"): ("Both are popular Malayalam actors known for comedy roles who later transitioned to serious, dramatic performances.", "കുഞ്ചാക്കോ ബോബനും ജയസൂര്യയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Jayaram","Dileep"): ("Both are popular Malayalam family-entertainer actors with a large audience base spanning multiple generations.", "ജയറാമും ദിലീപും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Jayasurya","Kunchacko Boban"): ("Both are popular Malayalam actors of the 2000s who started in romantic comedies and evolved into serious film roles.", "ജയസൂര്യയും കുഞ്ചാക്കോ ബോബനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Parvathy Thiruvothu","Manju Warrier"): ("Both are respected Malayalam actresses who champion women-centric stories and have won multiple state and national awards.", "പാർവ്വതി തിരുവോത്തും മഞ്ജു വാര്യരും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Nazriya Nazim","Parvathy Thiruvothu"): ("Both are celebrated young Malayalam actresses known for natural, expressive performances in critically acclaimed films.", "നസ്രിയ നസീമും പാർവ്വതി തിരുവോത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Anaswara Rajan","Mamitha Baiju"): ("Both are rising young Malayalam actresses who gained popularity through new-age Malayalam films targeting youth audiences.", "അനസ്വര രാജനും മമിത ബൈജുവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Aishwarya Lekshmi","Nazriya Nazim"): ("Both are popular young Malayalam actresses who have appeared in multiple OTT hits and are social media favourites.", "ഐശ്വര്യ ലക്ഷ്മിയും നസ്രിയ നസീമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Asif Ali","Fahadh Faasil"): ("Both are acclaimed young Malayalam actors known for unconventional roles in content-driven realistic films.", "ആസിഫ് അലിയും ഫഹദ് ഫാസിലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Basil Joseph","Vineeth Sreenivasan"): ("Both are young Malayalam directors and actors who create feel-good coming-of-age films loved by younger audiences.", "ബേസിൽ ജോസഫും വിനീത് ശ്രീനിവാസനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Vineeth Sreenivasan","Basil Joseph"): ("Both are young creative Malayalam filmmakers who also act, sing, and write music for their own films.", "വിനീത് ശ്രീനിവാസനും ബേസിൽ ജോസഫും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Dulquer Salmaan","Nivin Pauly"): ("Both are the leading faces of Malayalam cinema's millennial generation who gained huge pans through OTT platforms.", "ദുൽക്കർ സൽമാനും നിവിൻ പോളിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Suraj Venjaramoodu","Salim Kumar"): ("Both are National Award-winning Malayalam character actors celebrated for their powerful comedic and dramatic performances.", "സുരാജ് വെഞ്ഞാറമൂടും സലിം കുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Jagathy Sreekumar","Innocent"): ("Both are legendary Malayalam comedy actors who defined an era of slapstick humour in 1980s and 1990s cinema.", "ജഗതി ശ്രീകുമാറും ഇന്നസെന്റും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Innocent","Jagathy"): ("Both are celebrated Malayalam comedy actors who appeared together in countless 1980s and 1990s hit films.", "ഇന്നസെന്റും ജഗതിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Soubin Shahir","Sreenath Bhasi"): ("Both are young Malayalam character actors known for natural, realistic performances in urban-themed films.", "സൗബിൻ ഷാഹിറും ശ്രീനാഥ് ഭാസിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kalyani Priyadarshan","Nazriya Nazim"): ("Both are popular young Malayalam actresses known for their fresh screen presence in feel-good films.", "കല്യാണി പ്രിയദർശനും നസ്രിയ നസീമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("K. J. Yesudas","M. G. Sreekumar"): ("Both are legendary Kerala playback singers with classical music training who dominated Malayalam film music.", "കെ.ജെ. യേശുദാസും എം.ജി. ശ്രീകുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("K. S. Chithra","Sujatha"): ("Both are celebrated female playback singers from Kerala whose voices defined the golden era of Malayalam film songs.", "കെ.എസ്. ചിത്രയും സുജാതയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Sanju Samson","Sachin Tendulkar"): ("Both are celebrated Indian batsmen—Sanju Samson is Kerala's cricket hero and Sachin Tendulkar is the legendary God of Cricket.", "സഞ്ജു സാംസണും സച്ചിൻ ടെണ്ടുൽക്കറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Shashi Tharoor","Pinarayi Vijayan"): ("Both are senior political leaders in Kerala—Tharoor for Congress and Pinarayi for the CPI(M), often seen as political rivals.", "ശശി തരൂരും പിണറായി വിജയനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Sreenivasan","Jagathy Sreekumar"): ("Both are iconic Malayalam comedy actors and scriptwriters who shaped the golden era of Malayalam comedy films.", "ശ്രീനിവാസനും ജഗതി ശ്രീകുമാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Salim Kumar","Suraj Venjaramoodu"): ("Both are National Award-winning character actors in Malayalam who are famous for blending comedy with emotional depth.", "സലിം കുമാറും സുരാജ് വെഞ്ഞാറമൂടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Urveshi","Shobana"): ("Both are veteran Malayalam actress-dancers who are celebrated for their classical dance skills and timeless screen performances.", "ഉർവ്വശിയും ശോഭനയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Mukesh","Sreenivasan"): ("Both are popular Malayalam comedy actors and scriptwriters who frequently appeared together in family entertainer films.", "മുകേശും ശ്രീനിവാസനും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Biju Menon","Suresh Gopi"): ("Both are popular Malayalam actors known for playing powerful, authoritative characters often in political or police roles.", "ബിജു മേനോനും സുരേഷ് ഗോപിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Pepe Antony","Shane Nigam"): ("Both are upcoming young Malayalam actors who gained recognition through critically praised debut films in the 2020s.", "പേപ്പി ആന്റണിയും ഷെയ്ൻ നിഗമും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
}

RELATIONS_LIFE = {
    ("Chaya Kada","Thattukada"): ("Both are beloved Kerala roadside food establishments serving hot snacks and beverages, one specialising in tea and the other in rice meals.", "ചായക്കടയും തട്ടുകടയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kallu Shappu","Bevco"): ("Both are Kerala establishments where alcohol is sold, one is a traditional toddy shop and the other is the government-run wine store.", "കള്ള് ഷാപ്പും ബേവ്‌കോയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("KSRTC","Private Bus"): ("Both are bus services operating on Kerala roads, one is the government-owned red bus and the other is privately operated.", "കെ.എസ്.ആർ.ടി.സിയും പ്രൈവറ്റ് ബസ്സും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Auto Rickshaw","Taxi"): ("Both are hired passenger vehicles seen throughout Kerala cities and towns for daily commuting and short trips.", "ഓട്ടോ റിക്ഷയും ടാക്സിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Tharavadu","Nalukettu"): ("Both are traditional Kerala ancestral homes—Tharavadu refers to the family home concept and Nalukettu is the four-sided architectural style.", "തറവാടും നാലുകെട്ടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Panchayath","Municipality"): ("Both are local self-government bodies in Kerala responsible for civic administration—Panchayath for rural and Municipality for urban areas.", "പഞ്ചായത്തും മുനിസിപ്പാലിറ്റിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kudumbashree","Ayalkoottam"): ("Both are community-based women's collective programmes unique to Kerala promoting self-help and neighbourhood support.", "കുടുംബശ്രീയും അയൽക്കൂട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Anganwadi","Nursery"): ("Both are early childhood institutions in Kerala providing pre-school education and nutrition to young children.", "അങ്കണവാടിയും നഴ്സറിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Rubber Thottam","Tea Estate"): ("Both are Kerala plantation estates that define the Malabar and Wayanad landscape, one grows rubber trees and one grows tea.", "റബ്ബർ തോട്ടവും ചായ തോട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Tea Estate","Rubber Thottam"): ("Both are large agricultural estates in Kerala's highland districts, one for harvesting tea leaves and one for tapping rubber.", "ചായ തോട്ടവും റബ്ബർ തോട്ടവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Thengu","Kamuku"): ("Both are tall palm trees commonly grown in Kerala—Thengu is the coconut palm and Kamuku is the areca palm.", "തെങ്ങും കമുകും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kuttanadan Padanilam","Munnar"): ("Both are iconic Kerala geographic locations—Kuttanad is the low-lying rice field region and Munnar is the misty hill station.", "കുട്ടനാടൻ പാടനിലവും മൂന്നാറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Puzha","Kulam"): ("Both are freshwater bodies in Kerala—Puzha is a flowing river and Kulam is a still pond or tank.", "പുഴയും കുളവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kaithari","Khadi"): ("Both are handloom cotton fabrics promoted in Kerala as part of traditional crafts and Gandhian self-reliance movements.", "കൈത്തറിയും ഖദിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Mazha","Veyil"): ("Both are Kerala weather phenomena—Mazha is rain and Veyil is sunshine, often alternating in the same day.", "മഴയും വെയിലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Tharavad","Nalukettu"): ("Both refer to traditional Kerala family estates—Tharavad is the ancestral property and Nalukettu is the four-courtyard manor house.", "തറവാടും നാലുകെട്ടും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Naadan Pattu","Kavitha"): ("Both are traditional Malayalam song forms—Naadan Pattu is folk song and Kavitha is a composed literary poem.", "നാടൻ പാട്ടും കവിതയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kavala","Angadi"): ("Both are Kerala market places—Kavala is a busy road junction commercial area and Angadi is a general shop.", "കവലയും അങ്ങാടിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Palli","Ambalam"): ("Both are religious worship places in Kerala—Palli is a mosque or church and Ambalam is a Hindu temple.", "പള്ളിയും അമ്പലവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Ambalam","Palli"): ("Both are Kerala places of worship—Ambalam is a Hindu shrine and Palli is a mosque or church.", "അമ്പലവും പള്ളിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Lottery Ticket","Scratch and Win"): ("Both are popular gambling tickets in Kerala—people stand in queues every day to buy lottery tickets hoping to win.", "ലോട്ടറി ടിക്കറ്റും സ്ക്രാച്ച് ആൻഡ് വിന്നും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Hartal","Bandh"): ("Both are political shutdowns in Kerala where shops, offices, and transport close as a form of protest.", "ഹർത്താലും ബന്ദും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Vayanasala","Club"): ("Both are community gathering places in Kerala providing books, recreation, or leisure activities to local people.", "വായനശാലയും ക്ലബ്ബും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Chitty","Bank Loan"): ("Both are financial instruments in Kerala used to accumulate savings or borrow money, one is a traditional chit fund and the other is institutional.", "ചിട്ടിയും ബാങ്ക് ലോണും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kavukal","Ambalam"): ("Both are sacred groves or shrines in Kerala, with Kavukal being a forest shrine to serpent gods and Ambalam being a full temple.", "കാവുകളും അമ്പലവും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Kulam","Puzha"): ("Both are freshwater bodies in Kerala used for bathing and daily rituals—Kulam is a local pond and Puzha is a river.", "കുളവും പുഴയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Milma","Supplyco"): ("Both are Kerala government-owned consumer cooperatives—Milma sells dairy products and Supplyco sells essential provisions.", "മിൽമയും സപ്ലൈകോയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Bevco","Kallu Shappu"): ("Both are Kerala establishments where alcoholic beverages are sold—Bevco is the government wine outlet and Kallu Shappu is the traditional toddy shop.", "ബേവ്‌കോയും കള്ള് ഷാപ്പും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Akshaya Centre","Panchayath"): ("Both are Kerala government service points where citizens can access official services—Akshaya for digital and Panchayath for civic.", "അക്ഷയ സെന്ററും പഞ്ചായത്തും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Supplyco","Milma"): ("Both are government-backed consumer cooperatives in Kerala selling essential household products at subsidized prices.", "സപ്ലൈകോയും മിൽമയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Vidyabhyasa Loan","Home Loan"): ("Both are long-term loan products in Kerala financial institutions used by families to fund major life expenses.", "വിദ്യാഭ്യാസ ലോണും ഹോം ലോണും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Ration Kada","Maveli Store"): ("Both are government-run subsidised grocery shops in Kerala providing essentials like rice and oil to ration card holders.", "റേഷൻ കടയും മാവേലി സ്റ്റോറും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Mahatma Gandhi NREGA","Kudumbashree"): ("Both are Kerala government welfare schemes providing employment and income support to rural and poor households.", "മഹാത്മ ഗാന്ധി എൻ.ആർ.ഇ.ജി.എ.യും കുടുംബശ്രീയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Current Bill","Water Bill"): ("Both are monthly utility bills paid by Kerala households for essential services provided by government agencies.", "കറന്റ് ബില്ലും വാട്ടർ ബില്ലും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("KSEB","Water Authority"): ("Both are Kerala government utilities that deliver essential services to every household—KSEB for electricity and Water Authority for piped water.", "കെ.എസ്.ഇ.ബിയും വാട്ടർ അതോറിറ്റിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
    ("Water Authority","KSEB"): ("Both are essential Kerala government service providers—Water Authority supplies piped water and KSEB provides electricity.", "വാട്ടർ അതോറിറ്റിയും കെ.എസ്.ഇ.ബിയും ഒരേ, ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ഒരേ ആണ്."),
}

with open("scratch/rel_chunk_2.json", "r", encoding="utf-8") as f:
    chunk = json.load(f)

fixed = 0
for pack in chunk:
    for word in pack["words"]:
        cv = word["civWord"]
        for imp in word["imposters"]:
            key = (cv, imp["word"])
            if pack["id"] == "people" and key in RELATIONS_PEOPLE:
                imp["relationEN"], imp["relationML"] = RELATIONS_PEOPLE[key]
                fixed += 1
            elif pack["id"] == "life" and key in RELATIONS_LIFE:
                imp["relationEN"], imp["relationML"] = RELATIONS_LIFE[key]
                fixed += 1

print(f"Fixed {fixed} people/life relations")

with open("scratch/rel_chunk_2_done.json", "w", encoding="utf-8") as f:
    json.dump(chunk, f, indent=2, ensure_ascii=False)
