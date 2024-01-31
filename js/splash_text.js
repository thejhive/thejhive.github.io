const splashTexts = [
    'the site\'s not done it won\'t be done soon it probably never will be done',
    'i\'m sorry officer but the speed limit does not apply when the guitar solo from free bird by lynyrd skynyrd is playing',
    'it\'s my right to stupidity and i get to use it',
    'that\'s why you built like a 2 for $5 wendy\'s chicken mcnugget sandwich',
    'can you put a cheese stick through a glue gun',
    'to the town of agua fria rode a stranger one fine day',
    'super paper mario lore',
    'letting the days go by',
    'how do people even be think',
    'by my heel, i care not',
    'how to declare variable in html',
    'nyoom',
    'my money tree died :(',
    'you are a saucy boy',
    'ever heard of the wikipedia getting to philosophy game',
    'carbon fiber stan',
    'if gap, car',
    '(3d printer noises)',
    'i want to become a videogame collectible and just float in midair while spinning',
    'have you heard of the high elves',
    'xkcd is best webcomic',
    'gp2 engine',
    'i should enjoy a mouth watering egg mcmuffin from the new all day breakfast menu only at mcdonald\'s',
    'you have very nice eyes, looks like i\'ll have to take them',
    'shakespeare was a wattpad author',
    'the j stands for jaquayveon tavious',
    'italy',
    'god knew i would be too powerful if i had an attention span',
    'romeo and juliet were killed by an underfunded postal service',
    'don\'t look up the etymology of boba',
    '(source engine ragdoll sounds)',
    'sv_cheats 1',
    'why does twitter',
    'stay awesome',
    'it\'s not "edgy", it\'s comedic nihilism',
    'it\'s turtles all the way down',
    'me when the judge sentences me to death for my crimes against humanity (they were in fact not epic gaming moments)',
    'your honor, my client was simply doing a little trolling',
    'what are these "minecraft random splash texts" you speak of',
    'wat happens when we taste exhoost fume',
    'if you are what you eat, i am but an innocent man',
    'cars are just pockets of the outside temperature amplified sevenfold',
    'you. me. gas station.',
    'if being hot was a crime i would be in jail for a triple homicide',
    'abraham lincoln is like "get lucky" by daft punk because he died',
    'taiwan',
    'my favorite sport is microwaving dogs'
    'combustible lemons'
    'stahp!'
    'freeeemaaaaann'
    'ultrakill fans when they get into a fight and have no spare pocket change'
    'please watch my old videos they\'re really good
    'this was a triumph, i\'m leaving a note here, huge success'
    'surface tension should\'ve been longer ong frfr'
    'i live in a rattmann den'
    'skibidi rizz ohio gyatt baby gronk mewing while andrew tate mogs a looksmaxxer (i\'m boutta ropemaxx)
    'c\'mon guys repulsion propulsion and conversion gel can\'t be that bad for you'
    'i surrender to the animal king'
    '(foghorn sound)'
    '(metal pipe noises)'
    'cave johnson was killed by liquid rocks'
    'y\'all just have skill issues i can easily shoot down a gargantua for real'
    'calhoun'
    'otis solos'
    'if velozdbz is reading this you suck at half life'
    'it sure is nice platforming in xen'
    'i was injected with mantis dna'
    'i was born at a very young age'
    'prepare for unforeseen consequences'
    'why doesn\'t batman call the justice league is he stupid'
    'getfixedboi is the perfect beginner terraria seed ong frfr'
    'gordon has a barnacle fetish'
    'why doesn\'t gordon take the elevator up to the surface'
    'the world collapsed because a scientist was 30 minutes late to work'
    'wheatley crab'
    'i am bad at the game so it sucks'
    'so how did gordon get the hornet gun working huh'
    'on a rail can\'t be that long you guys'
    'black mesa was a company made for making doodads'
    'how can hundreds of HECU units be killed by one scientist but two HECU grunts easily knock him out'
    'why did the government send in the black ops to kill government forces'
    'race x should be canon'
    'adrian shepherd is a femboy'
    'the gene worm is barely genetic'
    'gordon freeman\'s legs are made of glass'
    'the nihilanth is a big baby'
    'i am afraid to inform you that this next testing chamber is impossible to solve'
    'sisyphus should be happy'
    'they left prometheus to be eaten by birds'
    'long jump module go weee'
    'glados please crush my skull'
    'ultrakill is real guys i found v2 in the elevator'
    'right click shotgun'
    'meet the sniper'
    'what\'s up chucklenuts'
    'the phlog is a super friendly weapon'
    'pick up that can'
    'why does eli vance want alyx to be railed by gordon bro'
    'haha eli vance get head drilled'
    'why didn\'t the combine use gunships to attack white forest was it necessary to use slow af striders'
    'stalker scream'
    'reality can\'t be a simulation- (insert gmod map 2048 times the size of the known universe)'
    'ravenholm'
    'buzzsaw and zombies are like peanut butter and jelly'
    'about that beer i owed ya, it/'s me gordon, barney from black mesa'
    'i drink dr breen/'s private reserve'
    'antlion grubs yum'
    'can you bhop irl'
    'me when lore vortigaunt'
    'justice for the bullsquid'
    'who tf agreed to sell their souls to the combine to become soldiers'
    'combine advisor tongue'
    'what do you mean host body'
    'most of half life one was gordon getting really lucky with building-based events'
    'how did dog know where an entrance was directly to the citadel'
    'super gravity gun more like ragdoll gun'
    '"the (aurora) borealis," said mr chalmers'
    'crowbar'
    'move out of my way rebels'
    'yeah ok liberal'
    'hunters are too op they\'re worse than striders'
    'the hunter chopper cannot exist'
    'why don\'t we have irl manhacks yet an irl manhack arcade would be ethical af'
    'the s-blade has a hackblood charge'
    'car battery'
    'conjunction junction what\'s your function'
    'go to nova prospekt'
    'overwatch says to stop kicking it'
    'gnome chompski goes to space'
    'why can\'t the cremator be in half life already'
    'did you know you can shoot the combine grunt\'s gas tank and it will explode'
    'urban rescue ranch'
    'rise and shine mr freeman'
    'haha alyx get stabbed by hunter because she has a major skill issue'
    'stop messing around with the microwave casserole'
    'why does gianni matragrano have to voice gabriel i can\'t take him seriously'
    'so where did the 50k go verbalase'
    'that\'s like a zombine, heh-(head explodes)
    'vortal combat goes hard af'
    'literally 1984'
    'what\'s up meatballs'
    'headcrabs are cute in vr'
    'i am not a moron'
    'what do you mean i look like a one by one lego piece'
    'standing here i realize'
    'devil may cry fans when the devil starts crying or something'
    'frieza nah fryza'
    'the half life revolver is too good why is it so op'
    'doomguy and isabelle from animal crossing are canonically married'
    'do headcrabs taste like chicken because they look like chicken'
    'an unpaid employee at valve on november 19 1988 making the banger known as "klaxon beat"'
    'i drive'
    'i wanna live in roku city'
    'last chance to look at me hector'
    'you coin flipper'
    'i am the one who knocks'
    'gojo jar incident'
]

document.getElementById('splash-text').innerHTML = splashTexts[Math.floor(Math.random() * splashTexts.length)];
