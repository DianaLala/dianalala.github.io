/* ============================================================
   PROJECT DATA
   Edit this file to add, remove or change projects.
   Each project needs the same keys. Images live in assets/img/.
   paths: which adventure it belongs to — "strategist", "gamemaker", "storyteller"
   ============================================================ */
window.PROJECTS = [
  {
    id: "vimba",
    title: "Ni Skill Yo! youth campaign",
    short: "Ni Skill Yo!",
    summary: "Testing and adapting a youth campaign, a board game and role-model stories so young people in West Nile and the Rwenzori see skilled work as a future worth choosing.",
    client: "Enabel – VIMBA programme",
    year: "2024–2025",
    place: "Arua, Fort Portal, Kasese and Hoima, Uganda",
    role: "Creative lead (Urithi Studio)",
    paths: ["strategist", "gamemaker"],
    tags: ["Behaviour change", "Human-centred design", "Gamified learning"],
    color: "teal",
    cover: "vimba-report",
    challenge: "Many young people in West Nile and the Albertine/Rwenzori region see technical training, farming and green jobs as second choices. Parents push for office jobs, role models are scarce, and trades are seen as \"male domains\". A toolkit first made with communities in Busoga had to work in four new places.",
    audience: "Young people, their parents, and the community leaders and facilitators who guide them.",
    approach: "Instead of assuming the Busoga tools would fit, we took them back to the people they were for. Stakeholders and community members in each district played the game, read the stories and listened to the radio scripts, then told us what was clear, what was confusing and what did not sound like home.",
    contribution: "Led the pre-testing and adaptation, revised the visual materials, and wrote and designed the comprehensive report documenting the process and findings.",
    deliverables: ["SkillQuest board game (West Nile edition)", "Information map", "Rising Together role-model flipbooks on TVET, agriculture and solar", "Soft Skills trainer's manual", "Radio drama scripts adapted for each district", "Comprehensive pre-test report"],
    outcome: "A toolkit adapted for each region and ready for use by local facilitators.",
    gallery: [
      ["skillquest-pretest", "Pre-testing SkillQuest with participants in Jinja"],
      ["skillquest", "Cover of the SkillQuest game instructions, West Nile version"],
      ["flip-tvet", "Rising Together flipbook cover: Path to a brighter future"],
      ["flip-solar", "Rising Together flipbook cover: Solar ladies"],
      ["infomap", "VIMBA information map showing career pathways"],
      ["softskills", "Soft Skills Programme trainer's manual cover"]
    ]
  },
  {
    id: "gadc",
    title: "Gender and Nutrition game kit",
    short: "Nutrition Journey",
    summary: "Two board games that get farming households talking about nutrition, gender roles and who decides how money is spent.",
    client: "GADC",
    year: "2022",
    place: "Uganda",
    role: "Co-creation facilitator and game designer",
    paths: ["gamemaker"],
    tags: ["Gamified learning", "Behaviour change", "Illustration"],
    color: "mustard",
    cover: "gadc-kit",
    challenge: "Advice on nutrition and joint decision-making was reaching farmers as talks, and the conversations that matter happen at home between family members.",
    audience: "Farming households who meet weekly in farmer groups, and the trainers who run those meetings.",
    approach: "Co-created the games with farmers and staff, then playtested on the ground with farmer groups. The games use real household situations as event cards, with \"opportunity\" and \"disaster\" cards that reflect the luck farmers know well.",
    contribution: "Facilitated the co-creation, designed the game mechanics, illustrated the boards and cards, and wrote the trainer instructions.",
    deliverables: ["Nutrition Journey Game for 2–8 players", "Gender Game", "Illustrated board, event and opportunity/disaster cards", "Trainer instruction booklet"],
    outcome: "A game kit designed to be played by farmer groups during their weekly get-togethers.",
    gallery: [
      ["gadc-play", "Farmers gathered around a large game board during playtesting"],
      ["gadc-play2", "Participants laying out game cards on the floor during a session"]
    ]
  },
  {
    id: "harvest",
    title: "The Harvest Toolkit",
    short: "Harvest Toolkit",
    summary: "A gender behaviour-change toolkit that helps farming couples in northern Uganda plan, budget and decide together, and shows the companies that buy their crops why that pays.",
    client: "Mercy Corps Uganda (BUILD programme), with Mango Tree",
    year: "2016–2017",
    place: "Acholi sub-region, Uganda",
    role: "Co-creation facilitator and designer",
    paths: ["strategist", "gamemaker"],
    tags: ["Behaviour change", "Gender", "Gamified learning"],
    color: "orange",
    cover: "harvest-cocreation",
    challenge: "In many farming households, women and young people do most of the farm work while men decide how the money is spent. Disagreements over cash fuel domestic violence and cut harvests, and that also hurts the companies that buy from these farmers.",
    audience: "Farming couples and their households, the trainers who work with them, and private sector buyers.",
    approach: "Co-created with farmers, staff and partners, then built as five tools that work together over eight sessions: an infographic that makes the business case to companies, an interactive story where the audience decides what the couple does next, Talking Flags to open difficult conversations at home, the Harvest Game, and a household budgeting tool.",
    contribution: "Led the co-creation workshop, and designed the toolkit and its instructor's guide.",
    deliverables: ["Infographic flyer for private sector buyers", "Living Together interactive story", "Talking Flags", "The Harvest Game", "Household management and record-keeping tool", "Instructor's guide with an eight-session training schedule"],
    outcome: "A complete curriculum on joint decision-making, financial literacy and women's businesses, ready for trainers to run with farmer groups.",
    gallery: []
  },
  {
    id: "spark",
    title: "SPARK social innovation lab",
    short: "SPARK lab",
    summary: "Training practitioners to co-create games that make agricultural value chains more inclusive of persons with disabilities.",
    client: "Light for the World, with ILO and Procasur",
    year: "2023",
    place: "Mozambique",
    role: "Facilitator, trainer and report author",
    paths: ["strategist", "gamemaker"],
    tags: ["Facilitation", "Accessibility", "Gamified learning"],
    color: "lavender",
    cover: "spark",
    challenge: "SPARK works to bring persons with disabilities into agricultural and pastoral value chains. The team needed a training tool to carry the programme's ideas, and the skills to keep designing such tools themselves.",
    audience: "Programme staff, partners and experts working on disability-inclusive rural development.",
    approach: "Ran a training of trainers on co-creation: when to use it and how each stage works, from empathy to testing. Participants then worked in three groups on one problem: \"How might we increase disability inclusion in the agricultural value chain?\"",
    contribution: "Designed and facilitated the lab and master class, coached each group through game design, and wrote and designed the Social Innovation Report.",
    deliverables: ["Co-creation training of trainers", "Master class for farmers with disabilities in Beira", "Three game prototypes developed by participant groups", "Social Innovation Report"],
    outcome: "Three game prototypes developed by the participants themselves, and a team trained to run co-creation on their own.",
    gallery: []
  },
  {
    id: "fao",
    title: "Simplifying nutrition messages",
    short: "FAO Zambia",
    summary: "Rewriting key messages on diets and food hygiene with the communities in Zambia they were written for.",
    client: "FAO Zambia, with Mango Tree",
    year: "2019",
    place: "Kafue, Zambia",
    role: "Co-creation facilitator and designer",
    paths: ["strategist"],
    tags: ["Human-centred design", "Behaviour change", "Knowledge translation"],
    color: "coral",
    cover: "fao-report",
    challenge: "Key messages on good dietary practices and food sanitation were accurate but hard to act on. Rural households eat limited diets because of cost, while urban diets are shifting to processed foods seen as a status symbol.",
    audience: "Rural and urban households in Zambia, and the health and extension workers who reach them.",
    approach: "A photo walk to understand daily life, then three days of co-creation: defining the real challenges, rewriting the messages in plain language, and testing them with community members.",
    contribution: "Facilitated the design research and co-creation sessions, visualised the messages, and co-wrote the co-creation report and recommendations.",
    deliverables: ["Rewritten and tested key messages", "Co-creation report", "Recommendations for a trigger tool (such as a board game, card game or recipe calendar) and a communication strategy"],
    outcome: "Messages rewritten with and tested by the people they were meant for, plus a clear recommendation for what to build next.",
    gallery: [
      ["fao-pretest1", "Community members reviewing printed materials during pre-testing"],
      ["fao-pretest2", "A group of women discussing materials during pre-testing"],
      ["fao-pretest3", "A workshop room during the co-creation sessions"]
    ]
  },
  {
    id: "games",
    title: "Games for learning",
    short: "Game shelf",
    summary: "A shelf of board games for coffee farmers, new employees and youth, each turning a hard conversation into a turn-based one.",
    client: "Urithi Studio",
    year: "2021–2025",
    place: "Uganda",
    role: "Game designer and illustrator",
    paths: ["gamemaker"],
    tags: ["Gamified learning", "Illustration"],
    color: "orange",
    cover: "ecofarmers",
    challenge: "Lectures lose people, especially when literacy levels are mixed. Each of these games needed to make a practical topic easy to discuss.",
    audience: "Coffee farmers working in teams, staff going through onboarding, and young people choosing careers.",
    approach: "The decisions people face in real life become the mechanics. In Eco Farmers, teams earn coffee beans over 12 rounds by choosing eco-friendly practices. In Perception, players move from onboarding to probation to full-time, discussing a scenario at every stage.",
    contribution: "Game concept, mechanics, illustration, layout and facilitator instructions.",
    deliverables: ["Eco Farmers: 4–20 players, on protecting the environment in coffee farming", "Perception: a role-playing game for 2–8 players on client relations", "Quiz and event card sets", "Instruction manuals"],
    outcome: "Ready-to-play kits with instructions any trained facilitator can follow.",
    gallery: [
      ["perception", "Cover of the Perception game instructions"],
      ["skillquest", "Cover of the SkillQuest game instructions"]
    ]
  },
  {
    id: "nyuki",
    title: "Nyuki: The Bee Story",
    short: "Bee Story",
    summary: "A comic that uses bees and hive beetles to explain how colonial tax systems still drive inequality, and why the wealthy should pay more.",
    client: "Akina Mama wa Afrika",
    year: "2024",
    place: "Uganda / Pan-African",
    role: "Illustrator and script co-developer",
    paths: ["storyteller"],
    tags: ["Illustration", "Knowledge translation"],
    color: "pink",
    cover: "nyuki",
    challenge: "Tax justice is a policy debate most people never enter. The argument for a wealth tax needed to reach people who would never read a policy brief.",
    audience: "Activists, young people and the general public across Africa.",
    approach: "A metaphor people can hold onto: the bees are African people, the hive beetles are the colonisers who took over the hive, and Grandmother Xxora carries the bees' history. The script was developed with a team of writers and reviewed to match the organisation's advocacy.",
    contribution: "Co-developed the script with the AMwA team, designed the characters and drew the full book.",
    deliverables: ["Illustrated comic book", "Character designs", "Print and digital editions"],
    outcome: "Published by Akina Mama wa Afrika as part of its call for a wealth tax.",
    gallery: [["nyuki-in", "An inside page of Nyuki showing a city street and a market"]]
  },
  {
    id: "hrw",
    title: "Mothers who stand by their children",
    short: "HRW mothers",
    summary: "Illustrations for a Human Rights Watch report on Ugandan mothers who openly support their LGBT children under the Anti-Homosexuality Act.",
    client: "Human Rights Watch",
    year: "2025",
    place: "Uganda",
    role: "Illustrator",
    paths: ["storyteller"],
    tags: ["Illustration", "Human rights"],
    color: "coral",
    cover: "hrw-mother",
    challenge: "Under Uganda's Anti-Homosexuality Act, mothers who speak up for their LGBT children face legal and social persecution. Their stories needed to be told with dignity, and with care for the people involved.",
    audience: "Readers of the report and online feature in Uganda and internationally, including policy makers, journalists and the public.",
    approach: "A sensitive, human-centred visual approach: everyday scenes at home, the pressure of the law and the news, and moments of solidarity, drawn to show the mothers' strength and dignity as well as their vulnerability.",
    contribution: "Illustration and visual documentation for the report and its online publication.",
    deliverables: ["Series of editorial illustrations", "Artwork for print and online publication"],
    outcome: "Featured in Human Rights Watch's May 2025 report and online publication, helping to build empathy and awareness locally and internationally.",
    gallery: [
      ["hrw-police", "Two women hold hands as they face a line of armed police officers"],
      ["hrw-news", "An older couple at home with a radio, beside a newspaper headline about jail terms"]
    ]
  },
  {
    id: "weaklinks",
    title: "Weak Links",
    short: "Weak Links",
    summary: "A comic investigating why mass drug administration for bilharzia broke down in Uganda, told through two journalists chasing the story.",
    client: "London School of Economics (CPAID)",
    year: "2021",
    place: "Uganda",
    role: "Illustrator",
    paths: ["storyteller"],
    tags: ["Illustration", "Knowledge translation"],
    color: "teal",
    cover: "weaklinks",
    challenge: "Research on the breakdown of a national bilharzia control programme needed to be readable outside academia.",
    audience: "Policy makers, health workers and the public.",
    approach: "The findings are told as a newsroom investigation: two journalists at the Nalubaale Daily ask why infection rates rose when a control programme was meant to bring them down.",
    contribution: "Character design, panel layout and full illustration of the comic.",
    deliverables: ["Illustrated research comic", "Print and digital versions"],
    outcome: "Published by LSE's Centre for Public Authority and International Development.",
    gallery: [["weaklinks-in", "An inside page of Weak Links showing the newsroom and a health centre"]]
  },
  {
    id: "relocation",
    title: "What comes after relocation?",
    short: "After Relocation",
    summary: "A comic for activists, artists and journalists forced to leave home, about the hard question of whether and how to return.",
    client: "ifa – Martin Roth-Initiative",
    year: "2021",
    place: "Germany / international",
    role: "Co-illustrator, with Charity Atukunda",
    paths: ["storyteller"],
    tags: ["Illustration"],
    color: "lavender",
    cover: "relocation",
    challenge: "Relocation programmes for threatened civil society actors end, and participants face emotionally difficult choices about what comes next.",
    audience: "Artists, activists, journalists and human rights defenders in temporary relocation.",
    approach: "Three relocated people meet in Berlin and talk through their options, so readers can see their own situation in the characters.",
    contribution: "Artwork, co-created with Charity Atukunda.",
    deliverables: ["Illustrated comic"],
    outcome: "Published by ifa's Martin Roth-Initiative as an introductory guide.",
    gallery: []
  },
  {
    id: "wcw",
    title: "We Can Work: The Co-creation Year",
    short: "We Can Work",
    summary: "A magazine-style report and pattern-based identity that make a multi-country disability-inclusion programme's year of co-creation easy and enjoyable to read.",
    client: "Light for the World, with the Mastercard Foundation and the African Disability Forum",
    year: "2024",
    place: "Multi-country, Africa",
    role: "Publication designer",
    paths: ["storyteller"],
    tags: ["Publication design", "Branding", "Disability inclusion"],
    color: "mustard",
    cover: "wcw-cover",
    challenge: "A year of co-creation across several countries produced a lot of complex information. The programme needed a report people would actually open and read, and a visual identity that felt African, youthful and inclusive.",
    audience: "Young people with disabilities, programme partners, funders and practitioners working on inclusive employment.",
    approach: "Magazine-inspired layouts with vibrant colour, dynamic compositions and playful graphic elements, balanced with a clear structure so readers can find their way. The patterns draw on traditional symbols from across West and East Africa.",
    contribution: "Designed the interactive multi-country report, and created the programme's patterns and branded materials.",
    deliverables: ["Interactive multi-country co-creation report", "Pattern-based visual identity", "Pull-up banners, merchandise and event materials"],
    outcome: "A report and visual identity built to work across print, digital platforms, merchandise and events.",
    gallery: [
      ["wcw-spread", "Report spread opening with a reader's letter and portrait photography"],
      ["wcw-spread2", "Report spread introducing the context and barrier analysis"],
      ["wcw-pattern", "Pattern inspired by traditional West and East African symbols"],
      ["wcw-banners", "Three We Can Work pull-up banners"]
    ]
  },
  {
    id: "lookingwithin",
    title: "Looking Within",
    short: "Looking Within",
    summary: "A collection of paintings on the journey into womanhood, animated with augmented reality so the figures step out of their frames.",
    client: "Personal practice",
    year: "2025",
    place: "Kampala, Uganda",
    role: "Artist",
    paths: ["storyteller"],
    tags: ["Illustration", "Digital"],
    color: "pink",
    cover: "art-unravel",
    challenge: "How do you show a girl growing into a woman under expectations she did not choose?",
    audience: "Gallery visitors, and anyone who has been told how a woman should be.",
    approach: "The collection was inspired by my niece. Each painting holds a stage of the journey, and augmented reality lets the images move beyond the frame, the way the story resists its limits.",
    contribution: "Concept, paintings and AR animation.",
    deliverables: ["Painting series", "AR animation layer"],
    outcome: "Shown at the Annual Njabala Exhibition during the Obulo Bwaffe Festival in Kampala, March 2025, and discussed in Language of Margins (2026).",
    gallery: [
      ["art-flight", "Painting of a woman with arms raised, layered with coloured bands"],
      ["art-topsy", "Painting of two women's faces, one upside down, linked by flowing hair"],
      ["art-sprout", "Painting of a small white figure with a sprout growing from its head"],
      ["art-stillness", "Painting of a young woman seated on a box against a pale background"]
    ]
  }
];

/* Mini challenges for the Play section. One option is the approach Dianah takes. */
window.CHALLENGES = [
  {
    q: "A 60-page training manual sits unused on facilitators' shelves. What do you do first?",
    options: [
      ["Redesign it with better illustrations", false],
      ["Sit in on sessions and ask facilitators how they actually teach", true],
      ["Cut it down to 20 pages", false]
    ],
    reveal: "I start with the people using it. A better-looking manual that doesn't fit how facilitators teach will stay on the shelf. That's how the VIMBA tools were adapted: pre-tests with facilitators and communities in four districts before final production.",
    link: "vimba"
  },
  {
    q: "Farmers nod through nutrition talks, but nothing changes at home. What do you try?",
    options: [
      ["A more detailed poster", false],
      ["A game the whole household plays together", true],
      ["A longer training session", false]
    ],
    reveal: "Change at home needs a conversation at home. A game gives family members a safe reason to talk about who eats what and who decides, which is why GADC's Nutrition Journey game is played by households in farmer groups.",
    link: "gadc"
  },
  {
    q: "Research on tax justice needs to reach the public, not just policy makers. What format?",
    options: [
      ["A 40-page report", false],
      ["An infographic", false],
      ["A comic with characters readers care about", true]
    ],
    reveal: "People remember stories about characters long after they forget statistics. In Nyuki, bees and hive beetles carry a policy argument that a report would lose.",
    link: "nyuki"
  }
];
