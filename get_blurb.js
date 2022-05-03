const randomBlurbs = [ //i want to do this with the random_blurbs.txt file dynamically but file systems aaaaaaaaaaaaaaaaaaaaaaaaaaa
    'the site\'s not done it won\'t be done soon it probably never will be done',
    'i\'m sorry officer but the speed limit does not apply when the guitar solo from free bird by lynyrd skynyrd is playing',
    'it\'s my right to stupidity and i get to use it',
    'that\'s why you built like a 2 for $5 wendy\'s chicken mcnugget sandwich',
    'can you put a cheese stick through a glue gun',
    '2001 chevy highlander',
    'to the town of agua fria rode a stranger one fine day',
    'you may not urinate on the floor but using a 1982 commodore 64 home computer is perfectly acceptable',
    'super paper mario lore',
    'letting the days go by',
    'how do people even be think',
    'by my heel, i care not',
    'random_blurbs.txt',
    'how to declare variable in html',
    'nyoom',
    'my money tree died :(',
    'you are a saucy boy',
    'ever heard of the wikipeda getting to philosophy game'
]

document.getElementById('random-blurb').innerHTML = randomBlurbs[Math.floor(Math.random() * randomBlurbs.length)];