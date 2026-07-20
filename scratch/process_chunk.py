import json

relations = {
    ('Mahindra Jeep', 'Bolero'): (
        "Both Mahindra Jeep and Bolero are rugged, off-road utility vehicles popular in rural Kerala.",
        "രണ്ടും കേരളത്തിലെ ഗ്രാമപ്രദേശങ്ങളിൽ ജനപ്രിയമായ കടുപ്പമേറിയ ഓഫ് റോഡ് വാഹനങ്ങളാണ്."
    ),
    ('Hostel', 'Lodge'): (
        "Both Hostel and Lodge offer temporary accommodation, usually for students or travelers.",
        "രണ്ടും വിദ്യാർത്ഥികൾക്കോ യാത്രികർക്കോ അടിസ്ഥാന സൗകര്യങ്ങളോടെ താത്കാലിക താമസം നൽകുന്ന ഇടങ്ങളാണ്."
    ),
    ('RX 100', 'Bullet'): (
        "Both Yamaha RX 100 and Royal Enfield Bullet are iconic retro motorcycles with a cult following.",
        "രണ്ടും യുവാക്കൾക്കിടയിൽ വൻ ആരാധകരുള്ള പഴയകാല പ്രശസ്തമായ മോട്ടോർസൈക്കിളുകളാണ്."
    ),
    ('Jankar', 'Ferry'): (
        "Both Jankar and Ferry are used in Kerala to transport people and vehicles across water bodies.",
        "രണ്ടും കേരളത്തിൽ ആളുകളെയും വാഹനങ്ങളെയും അക്കരെ കടത്താൻ ഉപയോഗിക്കുന്ന ജലയാനങ്ങളാണ്."
    ),
    ('Chavittu Vandi', 'Cycle'): (
        "Both Chavittu Vandi and Cycle are pedal-powered non-motorized vehicles.",
        "രണ്ടും മനുഷ്യപ്രയത്നത്താൽ ചവിട്ടി ഓടിക്കുന്ന ഇന്ധനം ആവശ്യമില്ലാത്ത വാഹനങ്ങളാണ്."
    ),
    ('Annual Day', 'Sports Day'): (
        "Both Annual Day and Sports Day are major yearly events celebrated in schools and colleges.",
        "രണ്ടും സ്കൂളുകളിലും കോളേജുകളിലും വർഷം തോറും നടക്കുന്ന പ്രധാന ആഘോഷങ്ങളാണ്."
    ),
    ('Ambassador', 'Contessa'): (
        "Both Ambassador and Contessa are classic Indian cars manufactured by Hindustan Motors.",
        "രണ്ടും ഹിന്ദുസ്ഥാൻ മോട്ടോഴ്‌സ് നിർമ്മിച്ച പഴയകാല ക്ലാസിക് ഇന്ത്യൻ കാറുകളാണ്."
    ),
    ('Bell', 'Siren'): (
        "Both Bell and Siren are loud sound-producing devices used for alarms or signals.",
        "രണ്ടും അപായസൂചനയോ അറിയിപ്പുകളോ നൽകാൻ വലിയ ശബ്ദം ഉണ്ടാക്കുന്ന ഉപകരണങ്ങളാണ്."
    ),
    ('Tour Trip', 'IV'): (
        "Both Tour Trip and Industrial Visit (IV) involve traveling away from campus for recreation or learning.",
        "രണ്ടും വിനോദത്തിനോ പഠനത്തിനോ വേണ്ടി ക്യാമ്പസിന് പുറത്തേക്ക് പോകുന്ന യാത്രകളാണ്."
    ),
    ('Study Leave', 'Onam Vacation'): (
        "Both Study Leave and Onam Vacation are periods when students get days off from regular classes.",
        "രണ്ടും വിദ്യാർത്ഥികൾക്ക് സ്ഥിരം ക്ലാസുകളിൽ നിന്ന് അവധി ലഭിക്കുന്ന ദിവസങ്ങളാണ്."
    ),
    ('Uniform', 'ID Card'): (
        "Both Uniform and ID Card are mandatory items for identifying students in an educational institution.",
        "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ വിദ്യാർത്ഥികളെ തിരിച്ചറിയാൻ ഉപയോഗിക്കുന്ന നിർബന്ധിത വസ്തുക്കളാണ്."
    ),
    ('Geometry Box', 'Pencil Pouch'): (
        "Both Geometry Box and Pencil Pouch are used by students to carry stationery items like pens and pencils.",
        "രണ്ടും വിദ്യാർത്ഥികൾ പേന, പെൻസിൽ തുടങ്ങിയ പഠനോപകരണങ്ങൾ കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്നവയാണ്."
    ),
    ('NSS', 'NCC'): (
        "Both NSS and NCC are voluntary student organizations in schools and colleges promoting discipline and social service.",
        "രണ്ടും വിദ്യാർത്ഥികളിൽ അച്ചടക്കവും സാമൂഹ്യസേവന താല്പര്യവും വളർത്തുന്ന സംഘടനകളാണ്."
    ),
    ('Mini Bus', 'Tempo Traveller'): (
        "Both Mini Bus and Tempo Traveller are mid-sized commercial passenger vehicles used for group trips.",
        "രണ്ടും ചെറിയ സംഘങ്ങളുടെ യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന ഇടത്തരം യാത്രാവാഹനങ്ങളാണ്."
    ),
    ('NCC', 'NSS'): (
        "Both NCC and NSS are voluntary student organizations focusing on discipline and community service.",
        "രണ്ടും വിദ്യാർത്ഥികളിൽ അച്ചടക്കവും സാമൂഹ്യസേവന താല്പര്യവും വളർത്തുന്ന സംഘടനകളാണ്."
    ),
    ('Autorickshaw', 'Jeep'): (
        "Both Autorickshaw and Jeep are commonly used as local transport or taxi services in many parts of India.",
        "രണ്ടും ഇന്ത്യയിലെ പല ഭാഗങ്ങളിലും പ്രാദേശിക യാത്രകൾക്കും ടാക്സിയായും ഉപയോഗിക്കുന്ന വാഹനങ്ങളാണ്."
    ),
    ('Chundan Vallam', 'Kettuvallam'): (
        "Both Chundan Vallam and Kettuvallam are traditional long wooden boats synonymous with Kerala's backwaters.",
        "രണ്ടും കേരളത്തിലെ കായലുകളുമായി ബന്ധപ്പെട്ട പരമ്പരാഗതമായ വലിയ മരവള്ളങ്ങളാണ്."
    ),
    ('Lorry', 'Tipper'): (
        "Both Lorry and Tipper are heavy duty trucks used for transporting goods or construction materials.",
        "രണ്ടും ചരക്കുകളോ നിർമ്മാണ സാമഗ്രികളോ കൊണ്ടുപോകാൻ ഉപയോഗിക്കുന്ന വലിയ ട്രക്കുകളാണ്."
    ),
    ('Alumni Meet', 'Farewell'): (
        "Both Alumni Meet and Farewell are emotional events celebrating the bond between students and their institution.",
        "രണ്ടും വിദ്യാർത്ഥികൾക്കും അവരുടെ സ്ഥാപനത്തിനുമിടയിലുള്ള ബന്ധം ആഘോഷിക്കുന്ന വികാരനിർഭരമായ ചടങ്ങുകളാണ്."
    ),
    ('Record Book', 'Assignment'): (
        "Both Record Book and Assignment are mandatory written submissions evaluated by teachers.",
        "രണ്ടും അദ്ധ്യാപകർ വിലയിരുത്തുന്നതിനായി വിദ്യാർത്ഥികൾ നിർബന്ധമായും എഴുതി സമർപ്പിക്കേണ്ടവയാണ്."
    ),
    ('Taxi', 'Auto Rickshaw'): (
        "Both Taxi and Auto Rickshaw are popular modes of hired public transport for daily commuting.",
        "രണ്ടും ദൈനംദിന യാത്രകൾക്ക് ആളുകൾ വാടകയ്ക്ക് വിളിക്കുന്ന പൊതുഗതാഗത വാഹനങ്ങളാണ്."
    ),
    ('Tractor', 'JCB'): (
        "Both Tractor and JCB are heavy earth-moving or agricultural machines used in construction and farming.",
        "രണ്ടും നിർമ്മാണ മേഖലയിലും കൃഷിയിലും ഉപയോഗിക്കുന്ന ഭാരമേറിയ യന്ത്രവാഹനങ്ങളാണ്."
    ),
    ('Speed Boat', 'Jankar'): (
        "Both Speed Boat and Jankar are mechanized watercraft used for navigation in Kerala's rivers and lakes.",
        "രണ്ടും കേരളത്തിലെ പുഴകളിലും തടാകങ്ങളിലും യാത്ര ചെയ്യാൻ ഉപയോഗിക്കുന്ന യന്ത്രവൽകൃത ജലയാനങ്ങളാണ്."
    ),
    ('College Canteen', 'Hostel Mess'): (
        "Both College Canteen and Hostel Mess are dining facilities catering to students on campus.",
        "രണ്ടും ക്യാമ്പസിലെ വിദ്യാർത്ഥികൾക്ക് ഭക്ഷണം നൽകുന്ന പ്രധാന ഇടങ്ങളാണ്."
    ),
    ('Progress Report', 'Mark List'): (
        "Both Progress Report and Mark List are official documents detailing a student's academic performance.",
        "രണ്ടും വിദ്യാർത്ഥിയുടെ പഠന നിലവാരം വ്യക്തമാക്കുന്ന ഔദ്യോഗിക രേഖകളാണ്."
    ),
    ('Principal', 'Headmaster'): (
        "Both Principal and Headmaster hold the highest administrative authority in a school or college.",
        "രണ്ടും ഒരു വിദ്യാഭ്യാസ സ്ഥാപനത്തിന്റെ ഏറ്റവും ഉയർന്ന ഭരണച്ചുമതലയുള്ളവരാണ്."
    ),
    ('Aanavandi', 'Low Floor Bus'): (
        "Both Aanavandi and Low Floor Bus refer to popular KSRTC buses operating in Kerala.",
        "രണ്ടും കേരളത്തിൽ സർവീസ് നടത്തുന്ന ജനപ്രിയ കെഎസ്ആർടിസി ബസുകളാണ്."
    ),
    ('Laboratory', 'Library'): (
        "Both Laboratory and Library are specialized rooms in an educational institution dedicated to practical learning and research.",
        "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ പഠനത്തിനും ഗവേഷണത്തിനുമായി മാറ്റിവെച്ചിട്ടുള്ള പ്രത്യേക മുറികളാണ്."
    ),
    ('Scooter', 'Bike'): (
        "Both Scooter and Bike are two-wheeled motor vehicles commonly used for personal commuting.",
        "രണ്ടും ദൈനംദിന യാത്രകൾക്കായി സാധാരണയായി ഉപയോഗിക്കുന്ന ഇരുചക്ര വാഹനങ്ങളാണ്."
    ),
    ('Jeep', 'Gypsy'): (
        "Both Jeep and Maruti Gypsy are rugged four-wheel drive vehicles known for their off-roading capabilities.",
        "രണ്ടും ദുർഘടമായ പാതകളിൽ സഞ്ചരിക്കാൻ ശേഷിയുള്ള കരുത്തുറ്റ ഫോർ വീൽ ഡ്രൈവ് വാഹനങ്ങളാണ്."
    ),
    ('College Union', 'SFI'): (
        "Both College Union and SFI represent student political organizations actively involved in campus politics.",
        "രണ്ടും ക്യാമ്പസ് രാഷ്ട്രീയത്തിൽ സജീവമായി ഇടപെടുന്ന വിദ്യാർത്ഥി രാഷ്ട്രീയ സംഘടനകളാണ്."
    ),
    ('PTA Meeting', 'Open House'): (
        "Both PTA Meeting and Open House are organized events where parents and teachers discuss a student's academic progress.",
        "രണ്ടും വിദ്യാർത്ഥികളുടെ പഠനകാര്യങ്ങൾ ചർച്ച ചെയ്യാൻ മാതാപിതാക്കളും അധ്യാപകരും ഒത്തുചേരുന്ന വേദികളാണ്."
    ),
    ('IV (Industrial Visit)', 'Tour Trip'): (
        "Both Industrial Visit (IV) and Tour Trip are organized excursions taken by students with their classmates.",
        "രണ്ടും വിദ്യാർത്ഥികൾ സഹപാഠികളോടൊപ്പം നടത്തുന്ന സംഘടിത യാത്രകളാണ്."
    ),
    ('School Bag', 'Lunch Box'): (
        "Both School Bag and Lunch Box are essential items carried by school children every day.",
        "രണ്ടും സ്കൂൾ കുട്ടികൾ ദിവസവും കൊണ്ടുപോകുന്ന അത്യാവശ്യ സാധനങ്ങളാണ്."
    ),
    ('Low Floor Bus', 'Aanavandi'): (
        "Both Low Floor Bus and Aanavandi are prominent public transport buses run by Kerala State Road Transport Corporation.",
        "രണ്ടും കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻസ്പോർട്ട് കോർപ്പറേഷൻ നടത്തുന്ന പ്രധാന പൊതുഗതാഗത ബസുകളാണ്."
    ),
    ('Batch', 'Class'): (
        "Both Batch and Class refer to a specific group of students studying together in the same academic year.",
        "രണ്ടും ഒരേ അധ്യയന വർഷത്തിൽ ഒരുമിച്ച് പഠിക്കുന്ന വിദ്യാർത്ഥികളുടെ കൂട്ടത്തെ സൂചിപ്പിക്കുന്നു."
    ),
    ('Ferry', 'Jankar'): (
        "Both Ferry and Jankar are water transport vessels primarily used for crossing rivers and lakes.",
        "രണ്ടും പുഴകളും തടാകങ്ങളും കുറുകെ കടക്കാൻ പ്രധാനമായും ഉപയോഗിക്കുന്ന ജലയാനങ്ങളാണ്."
    ),
    ('Farewell', 'Fresher Party'): (
        "Both Farewell and Fresher Party are celebratory college events marking the exit and entry of student batches.",
        "രണ്ടും വിദ്യാർത്ഥികളുടെ വരവും പോക്കും ആഘോഷിക്കുന്ന ക്യാമ്പസ് ചടങ്ങുകളാണ്."
    ),
    ('Canara Bank Challan', 'SBI Passbook'): (
        "Both Canara Bank Challan and SBI Passbook are crucial physical banking documents used for financial transactions.",
        "രണ്ടും സാമ്പത്തിക ഇടപാടുകൾക്ക് ഉപയോഗിക്കുന്ന പ്രധാനപ്പെട്ട ബാങ്കിംഗ് രേഖകളാണ്."
    ),
    ('Fire Engine', 'Ambulance'): (
        "Both Fire Engine and Ambulance are specialized emergency response vehicles equipped with sirens.",
        "രണ്ടും സൈറൺ ഘടിപ്പിച്ച, അടിയന്തര സാഹചര്യങ്ങളിൽ ഉപയോഗിക്കുന്ന പ്രത്യേക വാഹനങ്ങളാണ്."
    ),
    ('Train', 'Metro'): (
        "Both Train and Metro are railway-based mass transit systems used for passenger commuting.",
        "രണ്ടും യാത്രക്കാർക്ക് സഞ്ചരിക്കാനുള്ള റെയിൽവേ അധിഷ്ഠിത പൊതുഗതാഗത സംവിധാനങ്ങളാണ്."
    ),
    ('Bullet', 'Pulsar'): (
        "Both Bullet and Pulsar are highly popular and powerful motorcycle brands among Indian youth.",
        "രണ്ടും ഇന്ത്യൻ യുവാക്കൾക്കിടയിൽ വളരെ പ്രശസ്തമായ കരുത്തുറ്റ മോട്ടോർസൈക്കിൾ ബ്രാൻഡുകളാണ്."
    ),
    ('Arts Day', 'Sports Day'): (
        "Both Arts Day and Sports Day are highly anticipated annual extracurricular festivals in educational institutions.",
        "രണ്ടും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ വിദ്യാർത്ഥികൾ വളരെ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്ന വാർഷിക ആഘോഷങ്ങളാണ്."
    ),
    ('Exam Hall', 'Classroom'): (
        "Both Exam Hall and Classroom are designated physical spaces in a school where academic activities occur.",
        "രണ്ടും സ്കൂളിൽ പഠനപ്രവർത്തനങ്ങൾ നടക്കുന്ന പ്രത്യേക മുറികളാണ്."
    ),
    ('Torrus Truck', 'Tipper'): (
        "Both Torrus Truck and Tipper are heavy-duty trucks predominantly used in mining and large-scale construction.",
        "രണ്ടും ഖനനത്തിനും വലിയ നിർമ്മാണ പ്രവർത്തനങ്ങൾക്കും ഉപയോഗിക്കുന്ന ഭാരമേറിയ ട്രക്കുകളാണ്."
    ),
    ('Ambulance', 'Fire Engine'): (
        "Both Ambulance and Fire Engine are high-priority emergency vehicles that rush to critical situations.",
        "രണ്ടും അടിയന്തര സാഹചര്യങ്ങളിൽ വേഗത്തിൽ ഓടിയെത്തുന്ന അത്യന്താപേക്ഷിതമായ സുരക്ഷാ വാഹനങ്ങളാണ്."
    ),
    ('Tourist Bus', 'KSRTC'): (
        "Both Tourist Bus and KSRTC are major heavy passenger vehicles used for long-distance travel in Kerala.",
        "രണ്ടും കേരളത്തിൽ ദീർഘദൂര യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന വലിയ യാത്രാവാഹനങ്ങളാണ്."
    ),
    ('PT Period', 'Library Period'): (
        "Both PT Period and Library Period are eagerly awaited non-academic sessions in a regular school timetable.",
        "രണ്ടും സ്കൂൾ സമയപ്പട്ടികയിൽ വിദ്യാർത്ഥികൾ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്ന പാഠ്യേതര പീരിയഡുകളാണ്."
    ),
    ('Library', 'Laboratory'): (
        "Both Library and Laboratory are institutional facilities providing resources for research and practical application.",
        "രണ്ടും ഗവേഷണത്തിനും പ്രായോഗിക പഠനത്തിനുമുള്ള സൗകര്യങ്ങൾ നൽകുന്ന സ്ഥാപന ഇടങ്ങളാണ്."
    ),
    ('Bench and Desk', 'Blackboard'): (
        "Both Bench and Desk, and Blackboard are quintessential pieces of classroom furniture and equipment.",
        "രണ്ടും ക്ലാസ്സ്മുറികളിലെ ഒഴിച്ചുകൂടാനാവാത്ത പ്രധാന ഫർണിച്ചറുകളും ഉപകരണങ്ങളുമാണ്."
    ),
    ('Assignment', 'Record Book'): (
        "Both Assignment and Record Book are standard academic tasks that contribute to a student's internal marks.",
        "രണ്ടും വിദ്യാർത്ഥികളുടെ ഇന്റേണൽ മാർക്കിനെ സ്വാധീനിക്കുന്ന പ്രധാന പഠന ചുമതലകളാണ്."
    ),
    ('Private Bus', 'KSRTC'): (
        "Both Private Bus and KSRTC represent the backbone of daily public road transport in Kerala.",
        "രണ്ടും കേരളത്തിലെ ദൈനംദിന റോഡ് ഗതാഗതത്തിന്റെ നെടുംതൂണായ ബസുകളാണ്."
    ),
    ('School Bus', 'Ambulance'): (
        "Both School Bus and Ambulance are purpose-built utility vehicles often painted in distinct recognizable colors like yellow or white.",
        "രണ്ടും പെട്ടെന്ന് തിരിച്ചറിയാൻ കഴിയുന്ന മഞ്ഞയോ വെള്ളയോ പോലുള്ള പ്രത്യേക നിറങ്ങളിൽ പെയിന്റ് ചെയ്ത വാഹനങ്ങളാണ്."
    ),
    ('Water Metro', 'Kochi Metro'): (
        "Both Water Metro and Kochi Metro are modern, government-operated transit networks revolutionizing travel in Kochi.",
        "രണ്ടും കൊച്ചിയിലെ യാത്രാസൗകര്യങ്ങളെ നവീകരിച്ച ആധുനിക സർക്കാർ ഗതാഗത സംവിധാനങ്ങളാണ്."
    ),
    ('Rank List', 'Waiting List'): (
        "Both Rank List and Waiting List are official documents displaying candidates' names ordered by merit or priority.",
        "രണ്ടും ഉദ്യോഗാർത്ഥികളുടെയോ വിദ്യാർത്ഥികളുടെയോ പേരുകൾ മുൻഗണനാക്രമത്തിൽ പ്രസിദ്ധീകരിക്കുന്ന ഔദ്യോഗിക രേഖകളാണ്."
    ),
    ('Youth Festival', 'Kalolsavam'): (
        "Both Youth Festival and Kalolsavam are grand competitive cultural events showcasing students' artistic talents.",
        "രണ്ടും വിദ്യാർത്ഥികളുടെ കലാപരമായ കഴിവുകൾ പ്രകടിപ്പിക്കുന്ന വലിയ സാംസ്കാരിക മത്സര വേദികളാണ്."
    ),
    ('Kettuvallam', 'Houseboat'): (
        "Both Kettuvallam and Houseboat are iconic Kerala tourism attractions offering scenic backwater cruises.",
        "രണ്ടും കേരളത്തിലെ കായൽ യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന പ്രശസ്തമായ വിനോദസഞ്ചാര ബോട്ടുകളാണ്."
    ),
    ('Cycle', 'Scooter'): (
        "Both Cycle and Scooter are simple, everyday two-wheelers used for short-distance personal transport.",
        "രണ്ടും ചെറിയ ദൂരങ്ങളിലേക്കുള്ള യാത്രകൾക്ക് ഉപയോഗിക്കുന്ന സാധാരണ ഇരുചക്ര വാഹനങ്ങളാണ്."
    ),
    ('Tempo Traveller', 'Mini Bus'): (
        "Both Tempo Traveller and Mini Bus are spacious passenger vehicles favored for family trips and excursions.",
        "രണ്ടും കുടുംബയാത്രകൾക്കും വിനോദയാത്രകൾക്കും അനുയോജ്യമായ വലിയ യാത്രാവാഹനങ്ങളാണ്."
    ),
    ('Peti Auto', 'Goods Auto'): (
        "Both Peti Auto and Goods Auto are small three-wheeled transport vehicles designed for moving light cargo.",
        "രണ്ടും ചെറിയ ചരക്കുകൾ കൊണ്ടുപോകാൻ രൂപകൽപ്പന ചെയ്ത മുച്ചക്ര വാഹനങ്ങളാണ്."
    ),
    ('Pickup', 'Lorry'): (
        "Both Pickup and Lorry are commercial cargo vehicles widely used for transporting goods and freight.",
        "രണ്ടും ചരക്ക് നീക്കത്തിനായി വ്യാപകമായി ഉപയോഗിക്കുന്ന വാണിജ്യ വാഹനങ്ങളാണ്."
    ),
    ('Kochi Metro', 'Water Metro'): (
        "Both Kochi Metro and Water Metro are innovative, eco-friendly public transportation initiatives in Kochi.",
        "രണ്ടും കൊച്ചി നഗരത്തിലെ പരിസ്ഥിതി സൗഹൃദമായ ആധുനിക പൊതുഗതാഗത സംവിധാനങ്ങളാണ്."
    ),
    ('Vallam', 'Thoni'): (
        "Both Vallam and Thoni are traditional manually rowed small boats used by Kerala fishermen and locals.",
        "രണ്ടും കേരളത്തിലെ മത്സ്യത്തൊഴിലാളികളും നാട്ടുകാരും ഉപയോഗിക്കുന്ന പരമ്പരാഗതമായ ചെറിയ വഞ്ചികളാണ്."
    ),
    ('Tuition Class', 'School'): (
        "Both Tuition Class and School are structured environments where students gather to learn academic subjects.",
        "രണ്ടും വിദ്യാർത്ഥികൾ പാഠ്യവിഷയങ്ങൾ പഠിക്കാൻ ഒത്തുചേരുന്ന വിദ്യാഭ്യാസ ഇടങ്ങളാണ്."
    ),
    ('Slate and Pencil', 'Chalk'): (
        "Both Slate and Pencil, and Chalk are traditional, erasable writing instruments used by young learners in the past.",
        "രണ്ടും പണ്ടുകാലത്ത് ചെറിയ കുട്ടികൾ എഴുതിപ്പഠിക്കാൻ ഉപയോഗിച്ചിരുന്ന മായ്ക്കാൻ കഴിയുന്ന വസ്തുക്കളാണ്."
    ),
    ('Excavator', 'JCB'): (
        "Both Excavator and JCB are heavy construction machines fitted with large buckets for digging earth.",
        "രണ്ടും മണ്ണ് കുഴിക്കുന്നതിനായി വലിയ ബക്കറ്റുകൾ ഘടിപ്പിച്ച ഭാരമേറിയ നിർമ്മാണ യന്ത്രങ്ങളാണ്."
    ),
    ('Houseboat', 'Shikara'): (
        "Both Houseboat and Shikara are popular tourist boats offering leisure rides on serene lakes and backwaters.",
        "രണ്ടും ശാന്തമായ കായലുകളിലും തടാകങ്ങളിലും വിനോദയാത്രകൾക്കായി ഉപയോഗിക്കുന്ന പ്രശസ്തമായ ബോട്ടുകളാണ്."
    ),
    ('Class Leader', 'Monitor'): (
        "Both Class Leader and Monitor denote a student appointed to maintain discipline and assist teachers in a classroom.",
        "രണ്ടും ക്ലാസ്സിലെ അച്ചടക്കം പാലിക്കാനും അധ്യാപകരെ സഹായിക്കാനും ചുമതലപ്പെടുത്തിയ വിദ്യാർത്ഥിയെ സൂചിപ്പിക്കുന്നു."
    ),
    ('Onam Celebration', 'Christmas Celebration'): (
        "Both Onam Celebration and Christmas Celebration are major festive events in Kerala marked by feasts and cultural programs.",
        "രണ്ടും സദ്യയും കലാപരിപാടികളുമായി കേരളത്തിൽ കൊണ്ടാടുന്ന വലിയ ആഘോഷങ്ങളാണ്."
    ),
    ('Kalolsavam', 'Arts Day'): (
        "Both Kalolsavam and Arts Day are vibrant inter-school or intra-school competitions focused on performing arts.",
        "രണ്ടും കലാരൂപങ്ങൾക്ക് പ്രാധാന്യം നൽകിക്കൊണ്ട് സ്കൂളുകളിൽ നടക്കുന്ന വലിയ മത്സര വേദികളാണ്."
    ),
    ('Jik Jik Train', 'Toy Train'): (
        "Both Jik Jik Train and Toy Train refer to miniature railway models primarily built for children's amusement.",
        "രണ്ടും പ്രധാനമായും കുട്ടികളുടെ വിനോദത്തിനായി നിർമ്മിച്ച ചെറിയ തീവണ്ടി രൂപങ്ങളാണ്."
    )
}

with open('scratch/rel_chunk_3.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for pack in data:
    for word in pack['words']:
        civ = word['civWord']
        for imposter in word['imposters']:
            imp = imposter['word']
            # Sometimes the order might be reversed in our relations dict
            if (civ, imp) in relations:
                en, ml = relations[(civ, imp)]
            elif (imp, civ) in relations:
                en, ml = relations[(imp, civ)]
            else:
                # generic fallback if missed
                en = f"Both {civ} and {imp} are deeply related concepts in their respective fields."
                ml = f"{civ} ഉം {imp} ഉം പരസ്പരം ബന്ധപ്പെട്ട കാര്യങ്ങളാണ്."
            imposter['relationEN'] = en
            imposter['relationML'] = ml

with open('scratch/rel_chunk_3_done.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done processing.")
