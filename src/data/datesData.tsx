// data/datesData.ts
export interface DateVariety {
  name: string;
  flavor: string;
  origin: string;
  country: string;
  lattitude: number;
  longitude: number;
  description: string;
  excerpt: string;
}

export const DATE_VARIETIES: DateVariety[] = [
  {
    "name": "Medjool",
    "flavor": "Large and chewy with deep caramel and brown-sugar notes and a velvety, sticky flesh.",
    "origin": "Boudenib region, Morocco",
    "country": "USA",
    "lattitude": 33.7,
    "longitude": -116.3,
    "description": "Glossy mahogany-hued fruits with plump, wrinkled skins that glisten like jewels nestled in lush date palms.",
    "excerpt": "Indulge in the king of dates: Medjool’s sumptuous, almost caramel-like sweetness and juicy texture makes every bite a decadent escape to desert oases."
  },
  {
    "name": "Deglet Noor",
    "flavor": "Semi-dry and firm with a honey-like sweetness and a translucent amber-gold glow.",
    "origin": "Tolga Oasis, Algeria",
    "country": "Tunisia",
    "lattitude": 33.9,
    "longitude": 8.1,
    "description": "Translucent golden-amber dates, slightly firm to the touch, showcasing a luminous glow when held to the light.",
    "excerpt": "Discover the bright elegance of Deglet Noor: its delicate honeyed flavor and satisfying chew make it a pantry staple for both sweet snacking and gourmet baking."
  },
  {
    "name": "Barhi",
    "flavor": "Syrupy soft with butterscotch and brown sugar undertones that melt on your tongue.",
    "origin": "Basra region, Iraq",
    "country": "Iraq",
    "lattitude": 30.5,
    "longitude": 47.8,
    "description": "Small, round fruits transitioning from bright yellow to amber-brown, their skins smooth and inviting like polished amber beads.",
    "excerpt": "Experience Barhi’s heavenly sweetness at its peak: these buttery, syrupy jewels offer a creamy butterscotch bliss that delights with every tender bite."
  },
  {
    "name": "Ajwa",
    "flavor": "Richly sweet with subtle honey and warm cinnamon spice, soft yet resilient.",
    "origin": "Medina, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 24.47,
    "longitude": 39.61,
    "description": "Deep ebony fruits with a matte finish, their tender flesh yielding easily to a gentle press, hinting at sumptuous sweetness within.",
    "excerpt": "Savor the sacred legend of Ajwa: a storied date with heavenly honeyed notes and a soft, chewy texture revered for centuries in oasis kingdoms."
  },
  {
    "name": "Mazafati",
    "flavor": "Lusciously moist with caramel-chocolate undertones and a deep, jammy sweetness.",
    "origin": "Bam, Kerman Province, Iran",
    "country": "Iran",
    "lattitude": 29.11,
    "longitude": 58.36,
    "description": "Dark mahogany to nearly black plums of dates, with taut skins that shimmer with natural moisture like polished obsidian.",
    "excerpt": "Dive into Mazafati’s rich, indulgent world: these dark, succulent gems burst with velvety, chocolatey sweetness that lingers long after the last bite."
  },
  {
    "name": "Piarom",
    "flavor": "Semi-dry with toffee-like sweetness and delicate nutty undertones.",
    "origin": "Hormozgan Province, Iran",
    "country": "Iran",
    "lattitude": 27.18,
    "longitude": 56.27,
    "description": "Elongated, dark-brown dates with thin, almost translucent skins revealing the firm, jammy flesh beneath.",
    "excerpt": "Embrace the sophisticated charm of Piarom: its slender silhouette conceals a rich toffee sweetness with subtle nutty flair—perfect for the modern foodie."
  },
  {
    "name": "Halawy",
    "flavor": "Intensely sweet and creamy with gentle, nutty hints and a soft, melt-in-your-mouth texture.",
    "origin": "Iraq",
    "country": "Iraq",
    "lattitude": 33.0,
    "longitude": 44.0,
    "description": "Plump, golden-brown dates with a satiny sheen, their supple skins giving way to a pillowy-soft interior.",
    "excerpt": "Fall for Halawy’s silky sweetness: with its creamy texture and delicate nutty finish, each bite feels like a dessert all on its own."
  },
  {
    "name": "Thoory",
    "flavor": "Dry and chewy with mild, nutty notes and a satisfying, long-lasting bite.",
    "origin": "Tolga Oasis, Algeria",
    "country": "Algeria",
    "lattitude": 34.5,
    "longitude": 5.5,
    "description": "Wrinkled, light-brown fruits with a rustic, leathery appearance that speak to their hardy desert roots.",
    "excerpt": "Meet Thoory: the ultra-shelf-stable snack that marries a lightly nutty taste with a delightfully chewy texture—ideal for on-the-go energy boosts."
  },
  {
    "name": "Sayer",
    "flavor": "Semi-dry and hefty, with a balanced sweetness and firm texture that holds shape well.",
    "origin": "Persian Gulf region",
    "country": "Iran",
    "lattitude": 28.9,
    "longitude": 50.8,
    "description": "Broad, reddish-brown to dark-amber fruits with smooth skins and a plump, substantial form.",
    "excerpt": "Discover Sayer’s hearty allure: its robust chew and gentle sweetness make it a versatile ingredient for both savory dishes and sweet treats."
  },
  {
    "name": "Khadrawy",
    "flavor": "Soft and mildly sweet, with a smooth, moist texture that’s less syrupy than most.",
    "origin": "Iraq",
    "country": "Iraq",
    "lattitude": 33.0,
    "longitude": 44.0,
    "description": "Round, dark-brown dates with velvety skins that invite a delicate squeeze to reveal their moist interior.",
    "excerpt": "Indulge in the comforting softness of Khadrawy: its gentle sweetness and tender flesh deliver a subtle, refined date experience."
  },
  {
    "name": "Zahidi",
    "flavor": "Chewy and mildly sweet with a distinct nutty character and firm bite.",
    "origin": "Iraq",
    "country": "Iraq",
    "lattitude": 30.5,
    "longitude": 47.8,
    "description": "Smooth, golden-yellow to light-brown dates with a firm, dense appearance and faintly wrinkled skins.",
    "excerpt": "Fall in love with Zahidi’s understated elegance: its nutty, chewy texture and mellow sweetness make it an ideal companion for coffee or cheese."
  },
  {
    "name": "Dayri",
    "flavor": "Richly sweet with syrupy depth and a luxuriously tender bite.",
    "origin": "Basra region, Iraq",
    "country": "Iraq",
    "lattitude": 30.5,
    "longitude": 47.8,
    "description": "Long, slender fruits with glossy, deep-brown skins that catch the light and promise juicy sweetness.",
    "excerpt": "Satisfy your sweetest cravings with Dayri: these slender, succulent dates bring a depth of flavor that feels like a gourmet indulgence."
  },
  {
    "name": "Fard",
    "flavor": "Smooth and mildly sweet with a delicate chew and a subtle fruity nuance.",
    "origin": "Oman",
    "country": "Oman",
    "lattitude": 23.0,
    "longitude": 57.0,
    "description": "Medium-sized, dark-reddish fruits with sleek skins and a subtly plump profile.",
    "excerpt": "Experience Fard’s gentle elegance: these semi-soft dates offer a subtly sweet, smooth flavor perfect for sophisticated palates."
  },
  {
    "name": "Sukari",
    "flavor": "Explosively sweet and juicy, with a bright honeyed essence.",
    "origin": "Al-Qassim, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 26.3,
    "longitude": 43.8,
    "description": "Vibrant golden-brown dates with lightly wrinkled skins that glisten like polished amber under the sun.",
    "excerpt": "Let Sukari transport you: its golden, melting flesh bursts with sunny sweetness that elevates any snack or dessert."
  },
  {
    "name": "Anbara",
    "flavor": "Velvety and intensely sweet with a luxurious, melt-in-your-mouth texture.",
    "origin": "Medina, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 24.47,
    "longitude": 39.61,
    "description": "Glossy, deep-brown fruits shaped like oversized olives, their skins taut and shimmering with moisture.",
    "excerpt": "Indulge in Anbara’s royal decadence: these plump, glossy dates offer an opulent sweetness fit for the most refined tastes."
  },
  {
    "name": "Sagai",
    "flavor": "Crisp-fibrous at first bite, unfolding into a sweet, hearty finish.",
    "origin": "Riyadh region, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 24.7,
    "longitude": 46.7,
    "description": "Two-toned dates with golden tips and rich brown bases, their skins subtly ridged and inviting.",
    "excerpt": "Crunch into Sagai’s unique texture: a two-stage sensation that starts firm, then melts into a satisfying, balanced sweetness."
  },
  {
    "name": "Mabroom",
    "flavor": "Fruity and mildly sweet with a silky, smooth consistency.",
    "origin": "Al-Ahsa Oasis, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 25.4,
    "longitude": 49.6,
    "description": "Long, slender fruits with uniform brown skins that exhibit a gentle sheen and graceful taper.",
    "excerpt": "Treat yourself to Mabroom’s elegant simplicity: its sleek form and gentle sweetness make it a sophisticated snack any time."
  },
  {
    "name": "Rotab",
    "flavor": "Ultra-ripe and syrupy sweet with a creamy, luscious texture.",
    "origin": "Bam, Iran",
    "country": "Iran",
    "lattitude": 29.11,
    "longitude": 58.36,
    "description": "Dark-black dates with barely wrinkled skins that glisten with fresh orchard moisture.",
    "excerpt": "Savor Rotab’s fleeting perfection: these sky-fresh, peak-harvest dates deliver an incomparable, mouthcoating sweetness."
  },
  {
    "name": "Hayani",
    "flavor": "Juicy and sweet with a fresh, ripe tang that’s both vibrant and tender.",
    "origin": "Qena, Egypt",
    "country": "Egypt",
    "lattitude": 26.16,
    "longitude": 32.72,
    "description": "Glossy, deep-red to black fruits with smooth skins that catch the light, revealing hints of vibrant juice within.",
    "excerpt": "Dive into Hayani’s lush sweetness: its tender flesh and bright flavor feel like biting into sunshine by the Nile."
  },
  {
    "name": "Barni",
    "flavor": "Balanced sweetness with a subtle firmness that’s delightfully chewy.",
    "origin": "Medina, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 24.47,
    "longitude": 39.61,
    "description": "Golden-brown dates that boast a uniform color and a gently plump silhouette.",
    "excerpt": "Discover Barni’s perfect balance: a toothsome chew and mellow sweetness that pairs beautifully with morning coffee."
  },
  {
    "name": "Itrana",
    "flavor": "Rich and sticky, with deep, complex sweetness and a satisfying chew.",
    "origin": "Iraq",
    "country": "Iraq",
    "lattitude": 33.0,
    "longitude": 44.0,
    "description": "Dark-brown dates with glossy skins and a slightly elongated, rustic shape.",
    "excerpt": "Indulge in Itrana’s robust character: its sticky, honeyed richness makes it a standout treat for true date enthusiasts."
  },
  {
    "name": "Safawi",
    "flavor": "Soft and subtly smoky sweet, with a clean, tender finish.",
    "origin": "Medina, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 24.47,
    "longitude": 39.61,
    "description": "Jet-black dates with a sleek, matte skin that feels satiny to the touch.",
    "excerpt": "Relish Safawi’s nuanced delight: its gentle sweetness and whisper of smokiness evoke the mystique of oasis nights."
  },
  {
    "name": "Kabkab",
    "flavor": "Honey-like sweetness with a sticky, luscious finish and robust mouthfeel.",
    "origin": "Bushehr Province, Iran",
    "country": "Iran",
    "lattitude": 28.9,
    "longitude": 50.8,
    "description": "Glossy, dark-brown fruits with rounded tops that bulge enticingly, promising rich sweetness.",
    "excerpt": "Experience Kabkab’s syrupy embrace: its bold honey tones and plush texture make it a pure, unadulterated delight."
  },
  {
    "name": "Khalas",
    "flavor": "Caramel-nutty sweetness with a smooth, creamy texture.",
    "origin": "Qatif, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 26.6,
    "longitude": 50.1,
    "description": "Golden to reddish-brown dates with a gently wrinkled skin and an even, plump shape.",
    "excerpt": "Let Khalas transport you to Arabian feasts: its warm caramel notes and smooth mouthfeel feel like a festive indulgence."
  },
  {
    "name": "Bumaan",
    "flavor": "Creamy and slightly tangy, with a delicate sweetness and soft bite.",
    "origin": "Hadhramaut, Yemen",
    "country": "Yemen",
    "lattitude": 15.3,
    "longitude": 48.3,
    "description": "Light-brown to golden dates with smooth, almost velvety skins and a faint sheen.",
    "excerpt": "Discover Bumaan’s exotic charm: its creamy tang and tender texture offer a rare, tropical date experience."
  },
  {
    "name": "Dabbas",
    "flavor": "Moderately sweet with firm, chewy flesh and a pleasant earthiness.",
    "origin": "Al Ain, UAE",
    "country": "UAE",
    "lattitude": 24.2,
    "longitude": 55.8,
    "description": "Reddish-brown dates with slightly ridged skins that exude a rustic, artisanal vibe.",
    "excerpt": "Explore Dabbas’s grounding delight: its firm chew and mild sweetness make it a steadfast companion to savory snacks."
  },
  {
    "name": "Ghars",
    "flavor": "Rich and syrupy sweet with intense fruity depth.",
    "origin": "Ghardaïa, Algeria",
    "country": "Algeria",
    "lattitude": 32.49,
    "longitude": 3.67,
    "description": "Large, glossy black dates that shine like polished onyx, with taut skins hinting at their juicy core.",
    "excerpt": "Immerse in Ghars’s decadent richness: its opulent sweetness and full body capture the spirit of Sahara traditions."
  },
  {
    "name": "Lulu",
    "flavor": "Delicately sweet with a light, buttery finish and soft texture.",
    "origin": "Al Ain, UAE",
    "country": "UAE",
    "lattitude": 24.2,
    "longitude": 55.8,
    "description": "Small, round golden-brown dates with smooth, satin-like skins and a petite, elegant form.",
    "excerpt": "Treat yourself to Lulu’s graceful sweetness: its gentle, buttery notes and tender flesh feel like a refined luxury."
  },
  {
    "name": "Mejhoul",
    "flavor": "Intensely sweet and plush, akin to Medjool but with extra plumpness.",
    "origin": "Tafilalet, Morocco",
    "country": "Morocco",
    "lattitude": 31.5,
    "longitude": -4.0,
    "description": "Oversized, deep-brown fruits with velvety skins that look as though they’ve been dusted with desert breeze.",
    "excerpt": "Sample the rare Moroccan Mejhoul: its oversized sweetness and pillowy texture make it an unforgettable gourmet treasure."
  },
  {
    "name": "Naghal",
    "flavor": "Mildly fruity sweetness with a clean, refreshing finish.",
    "origin": "Al-Qassim, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 26.3,
    "longitude": 43.8,
    "description": "Two-toned dates with golden-yellow highlights blending into brown bases, each piece smooth and glistening.",
    "excerpt": "Refresh your palate with Naghal’s light sweetness: its bright, clean taste and tender flesh are perfect for a summer treat."
  },
  {
    "name": "Rabia",
    "flavor": "Subtle nutty sweetness with a firm, chewy bite.",
    "origin": "Southern oases, Tunisia",
    "country": "Tunisia",
    "lattitude": 33.9,
    "longitude": 8.1,
    "description": "Light-brown to tan dates with faint wrinkles and a consistently firm shape.",
    "excerpt": "Discover Rabia’s understated elegance: its gentle sweetness and hearty texture make it ideal for baking or healthy snacking."
  },
  {
    "name": "Shishi",
    "flavor": "Juicy with floral undertones and gentle sweetness.",
    "origin": "Fars Province, Iran",
    "country": "Iran",
    "lattitude": 29.6,
    "longitude": 52.5,
    "description": "Golden-amber fruits with smooth, translucent skins that glow like afternoon sunlight on petals.",
    "excerpt": "Let Shishi enchant you with its floral sweetness: a bite offers a tender, aromatic journey through Persian gardens."
  },
  {
    "name": "Tunis",
    "flavor": "Mildly sweet with a firm, satisfying chew and subtle earthiness.",
    "origin": "Tunis region, Tunisia",
    "country": "Tunisia",
    "lattitude": 36.8,
    "longitude": 10.2,
    "description": "Light tan dates with gently ridged skins and a sturdy, rectangular profile.",
    "excerpt": "Enjoy Tunis’s classic simplicity: its steady sweetness and firm texture make it an authentic taste of North Africa."
  },
  {
    "name": "Wanan",
    "flavor": "Sticky and intensely sweet with a rich, succulent depth.",
    "origin": "Al-Hasa Oasis, Saudi Arabia",
    "country": "Saudi Arabia",
    "lattitude": 25.3,
    "longitude": 49.8,
    "description": "Dark, glossy dates with smooth skins that cling to your fingertips, promising a burst of syrupy delight.",
    "excerpt": "Surrender to Wanan’s luscious sweetness: its sticky, robust flavor transports you to sun-drenched oasis groves."
  },
  {
    "name": "Yellow Barhi",
    "flavor": "Freshly crisp and mildly sweet with an apple-like snap.",
    "origin": "Basra region, Iraq",
    "country": "Iraq",
    "lattitude": 30.5,
    "longitude": 47.8,
    "description": "Bright yellow, almost candy-like rounds with firm skins that crack delightfully under nibble.",
    "excerpt": "Experience Yellow Barhi’s rare crunch: bitten at the golden khalal stage, it offers a refreshing, orchard-fresh snap."
  },
  {
    "name": "Zahedi",
    "flavor": "Dense chew with a subdued, nutty sweetness.",
    "origin": "Abadan, Iran",
    "country": "Iran",
    "lattitude": 30.3,
    "longitude": 48.3,
    "description": "Yellowish-brown dates with firm, textured skins that hint at their chewy, compact flesh.",
    "excerpt": "Embrace Zahedi’s timeless charm: its chewy texture and mellow nutty notes evoke the heritage of Persian date craft."
  },
];

