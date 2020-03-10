import Alan from './images/Alan.png'
import Alex from './images/Alex.png'
import Ante from './images/Ante.png'
import Anastasiya from './images/Anastasiya.png'
import Brian from './images/Brian.png'
import Dima from './images/Dima.png'
import Dino from './images/Dino.png'
import Garry from './images/Garry.png'
import Irina from './images/Irina.png'
import Ivan from './images/Ivan.png'
import IvanK from './images/IvanK.png'
import Jan from './images/Jan.png'
import Jia from './images/Jia.png'
import Kelvin from './images/Kelvin.png'
import Kim from './images/Kim.png'
import Lyudmil from './images/Lyudmil.png'
import Maksim from './images/Maksim.png'
import Max from './images/Max.png'
import Mayumi from './images/Mayumi.png'
import Nastya from './images/Nastya.png'
import Nikolay from './images/Nikolay.png'
import Rinat from './images/Rinat.png'
import Serena from './images/Serena.png'
import Tsetso from './images/Tsetso.png'
import Tzanko from './images/Tzanko.png'
import Valentin from './images/Valentin.png'
import Vassil from './images/Vassil.png'
import Yordan from './images/Yordan.png'
import Yura from './images/Yura.png'

export const GROUPS = {
  CORE: 'Core team',
  RESEARCH: 'Research Group',
  DEVS: 'Development team',
  COMMUNICATIONS: 'Communications',
  MARKETING: 'Marketing',
  BISUNESS: 'Business Development',
  DESIGN: 'Design',
  ADVISORS: 'Advisors'
}

export const PEOPLE = [
  {
    name: 'Maksim Balashevich',
    img: Maksim,
    position: 'Founder',
    group: GROUPS.CORE,
    description:
      'Veteran product creator and entrepreneur with more than 15 years experience leading international teams, and more than 10 years in financial markets analysis. A distinguished sentiment analyst and crowd psychology expert, he’s a regular media commentator who has been featured in Forbes and other financial publications. He also draws on his unique background in a yogic way of life to foster a human-focused, balanced approach to building communities and decentralized platforms.',
    links: {
      sanbase: 'https://app.santiment.net/profile/836',
      twitter: 'https://twitter.com/balance_ra',
      linkedin: 'https://www.linkedin.com/in/maksim-balashevich-640a8948/'
    }
  },
  {
    name: 'Valentin Mihov',
    img: Valentin,
    position: 'CTO',
    group: GROUPS.CORE,
    description:
      'Software engineer with 10+ years experience building startups, plus a silver medal winner on the International Olympiad of Informatics 2004. He loves building great products, performance optimizations and advanced software like AI and scalable systems. When he’s not cracking up code, he’s trekking in the mountains or kitesurfing on the beach.',
    links: {
      sanbase: 'https://app.santiment.net/profile/121',
      twitter: 'https://twitter.com/valentinmihov',
      linkedin: 'https://www.linkedin.com/in/valentinmihov/',
      github: 'https://github.com/valo'
    }
  },
  {
    name: 'Yura Zatsepin',
    img: Yura,
    position: 'Product Dev Lead',
    group: GROUPS.CORE,
    description:
      'He’s developed a guitar education service, online payment services for banks, and MMO mobile/flash games and extensions for purchase. He also won first place in 2 hackathons (Gazprom, QIWI) and got special prizes from Evernote. He now wants to turn his passion for building great applications toward the crypto world.',
    links: {
      sanbase: 'https://app.santiment.net/profile/120',
      github: 'https://github.com/Partysun'
    }
  },
  {
    name: 'Tzanko Matev',
    position: 'PhD Developer / Mathematician',
    img: Tzanko,
    group: GROUPS.RESEARCH,
    description:
      'Number theorist, software developer and devops leader keeping Santiment systems in shape. Brings experience with backend logic and data structures as well. Data scientist. New crypto explorer. Meditator.',
    links: {
      linkedin: 'https://www.linkedin.com/in/tzanko-matev-2328425/'
    }
  },
  {
    name: 'Jan Smirny',
    position: 'Data Scientist',
    group: GROUPS.RESEARCH,
    img: Jan,
    description:
      'Jan is a data scientist with a background in psychology and proven experience with cognitive modeling, bayesian statistics and machine learning. He is fascinated by the intersection of financial markets and behaviorism – and what better place to explore that relationship than crypto!',
    links: {
      linkedin: 'https://www.linkedin.com/in/jan-smirny-6a7a64116/'
    }
  },
  {
    name: 'Irina Pranovich',
    position: 'Data Scientist',
    group: GROUPS.RESEARCH,
    img: Irina,
    description:
      'Data science nerd currently writing apps and creating visualizations for social data collection and analysis. A python coder, she’s built a knowledge base for a major university project based on graph theory, and holds a BSc with specialization in AI (Minsk). She studied Data Mining in Eötvös Loránd University (Budapest). She also takes amazing photos while exploring the world.',
    links: {
      linkedin: 'https://www.linkedin.com/in/irina-pranovich-93400310a/',
      github: 'https://github.com/ipranovich'
    }
  },
  {
    name: 'Alexander Grablevski',
    position: 'Data Scientist',
    group: GROUPS.RESEARCH,
    img: Alex,
    description:
      'He has a Major in Economics, enjoys DS and ML, and has deep experience in econometrics, including awards in several Econometric competitions. He also has a passion for discovering crypto space and used to work as analyst of crypto projects. He currently is a teacher for Cryptocurrencies and Derivatives course in Belarusian National Technical University. Likes learning and discovering new things.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alexander-grablevski-4544a7149/'
    }
  },
  {
    name: 'Ivan Klimuk',
    position: 'Data Scientist',
    group: GROUPS.RESEARCH,
    img: IvanK,
    description:
      'A data scientist by trade, Ivan has been performing deep learning and data mining research in bioinformatics, in collaboration with the Luxembourg Institute of Health and the Norwegian University of Life Sciences. Originally, he’s a radio-physicist and has studied all things related to signals and information theory. Last year he discovered blockchain and was hooked. He also enjoys sports (esp. football), music, cinematography and travel',
    links: {
      linkedin: 'https://www.linkedin.com/in/ivan-klimuk-30491a157/'
    }
  },
  {
    name: 'Serena Tan',
    position: 'Partnerships',
    img: Serena,
    group: GROUPS.BISUNESS,
    description:
      'Builds partnerships at the project level, and brings users, developers and traders in the Santiment community together. She’s committed to diversity, inclusion and representation for the industry, facilitating meetups and learning opportunities for the wider Santiment community. She graduated from Sydney University with a Bachelor of Liberal Arts & Science and previously worked in non-profit and social enterprise before joining Santiment.',
    links: {
      twitter: 'https://twitter.com/tserenam',
      linkedin: 'https://www.linkedin.com/in/tanserena/'
    }
  },
  {
    name: 'Mayumi Tsukada',
    position: 'Partnerships (North Asia)',
    group: GROUPS.BISUNESS,
    img: Mayumi,
    description:
      'Mayumi is focused on establishing Santiment partnerships in North Asia. She is the bridge between the Japanese-speaking community, and brings experience in finance and localization. An avid crypto trader, she is passionate about exploring the capabilities of blockchain and beyond.',
    links: {
      email: 'mailto:mayumi.t@santiment.net'
    }
  },
  {
    name: 'Brian Quinlivan',
    position: 'Director of Marketing',
    img: Brian,
    group: GROUPS.MARKETING,
    description:
      'With a freshly-minted MBA in finance from Chapman University, Brian has 10+ years of marketing, financial, and data analytics experience. He enjoys creating financial models to improve modern-day investing strategies and to study the intricacies of market variations. He’s also fascinated by cryptocurrency and loves being part of a growing community that represents a change from the status quo of traditional banking and transactions. When away from work, he’s an avid music producer and writer, and enjoys playing tennis, basketball, and cards.',
    links: {
      twitter: 'https://twitter.com/brianquinlivan',
      linkedin: 'https://www.linkedin.com/in/brian-quinlivan-mba-3a95b18b/',
      medium: 'https://medium.com/@bquinliv3',
      facebook: 'https://www.facebook.com/brian.quinlivan.7'
    }
  },
  {
    name: 'Alan Podemski',
    position: 'Product Designer',
    group: GROUPS.DESIGN,
    img: Alan,
    description:
      'Self-taught and with a strong eye for detail, Alan has 9 years of experience in presenting user experience solutions that make people’s lives easier. He jumped into crypto in 2016 and has been learning about market metrics and human behaviour ever since. After the regular workday, he enjoys spending time inviting new folks into cryptocurrencies and supporting the no-code development movement.',
    links: {
      twitter: 'https://twitter.com/alanpodemski',
      linkedin: 'https://www.linkedin.com/in/alanpodemski/'
    }
  },
  {
    name: 'Anastasia Gelemeeva',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Anastasiya,
    description:
      'Anastasia is a passionate product-marketing designer who believes in simple and balanced design. She helps Santiment look pretty and structured. She has worked mostly with B2B and e-commerce companies but has always was looked forward to creating something unique and high-valued in a new industry.',
    links: {
      linkedin: 'https://www.linkedin.com/in/anastasia-gelemeeva-663ab110a'
    }
  },
  {
    name: 'Kim Carson',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Kim,
    description:
      'User-focused visual/interactive designer specializing in partnership integrations, and enterprise apps for web and mobile. Dreams in html/css and data visualizations. Wordsmither. Aspiring crypto trader.',
    links: {
      linkedin: 'https://linkedin.com/in/kimcarson'
    }
  },
  {
    name: 'Feng Jiahong',
    position: 'Graphic Illustrator',
    group: GROUPS.DESIGN,
    img: Jia,
    description:
      'Design and visual druidess. Creator of the Santiment brand, ants, and other magic creatures. Inspired by the adventure of the crypto world. Brings fintech experience, too.',
    links: {
      linkedin: 'https://www.linkedin.com/in/jiahong-feng-903a8187/'
    }
  },
  {
    name: 'Kelvin “Wilhelm” Lee',
    position: 'Community Manager',
    group: GROUPS.COMMUNICATIONS,
    img: Kelvin,
    description:
      'Known as “Wilhelm” in the crypto space, he’s your gateway to all things Santiment. He ensures that communication between the team and community is in sync, and info you need is at your fingertips. No stranger to building great communities, he’s also a core member of crypto’s largest slack, Cryptocopia. There have been rumors he might be an AI, have a chat with him to find out more.',
    links: {
      twitter: 'https://twitter.com/claptrapxl',
      linkedin: 'https://www.linkedin.com/in/whoiskelvinlee/'
    }
  },
  {
    name: 'Garry Kabankin',
    position: 'Project Coordinator',
    img: Garry,
    group: GROUPS.BISUNESS,
    description:
      'Organizer, structurizer, and master in wrangling complex data into manageable forms. Keeps Santiment projects running smoothly and never stops learning. Aviator.',
    links: {
      sanbase: 'https://app.santiment.net/profile/6',
      linkedin: 'https://www.linkedin.com/in/kabankin/'
    }
  },
  {
    name: 'Dino Ibisbegovic',
    position: 'Content & SEO',
    group: GROUPS.MARKETING,
    img: Dino,
    description:
      'Resident wordsmith and SEO nerd, Dino oversees all things content. He’s worked in a medley of startups big and small before joining Santiment, specializing in content creation, search engine optimization and many other -ations. He has since caught the crypto bug and is currently a refreshingly average swing trader. Get in touch with him to talk content collabs and/or favorite html tags.',
    links: {
      sanbase: 'https://app.santiment.net/profile/1269',
      linkedin: 'https://www.linkedin.com/in/dino-ibisbegovic-5911b711/',
      email: 'mailto:dino.i@santiment.net'
    }
  },
  {
    name: 'Max “balresch” Bartel',
    position: 'Tech Support',
    img: Max,
    group: GROUPS.COMMUNICATIONS,
    description:
      'Max got hooked on crypto in 2018, after the last bull run. While his portfolio is still in the red, he’s learned a lot during this bear market, including that “bear market conferences” can be great for making connections (Santiment was lucky to meet him at Devcon IV!) With more than 7 years of experience in small teams providing high-quality tech support, he can help answer all of your Santiment questions.',
    links: {
      twitter: 'https://twitter.com/balresch'
    }
  },
  {
    name: 'Ivan Aleksandrov',
    position: 'Backend developer',
    group: GROUPS.DEVS,
    img: Ivan,
    description:
      'Ivan is a new crypto enthusiast and developer with C++ experience writing software for telecoms and working as a university teaching assistant in computer programming. He is also pursuing a BA in Computer Science. He loves music, books, mountaineering and exploring nature.',
    links: {
      linkedin: 'https://www.linkedin.com/in/ivan-aleksandrov-63b8668a/',
      github: 'https://github.com/IvanIvanoff'
    }
  },
  {
    name: 'Tsvetozar Penov',
    position: 'Backend developer',
    group: GROUPS.DEVS,
    img: Tsetso,
    description:
      'Tsvetozar is an experienced full stack developer who has worked for several startups. He enjoys building robust and scalable systems that have impact. He also holds a purple belt in Brazilian Jiu Jitsu and is a certified trainer who loves rolling, hiking and doing all kinds of sports.',
    links: {
      linkedin: 'https://www.linkedin.com/in/tsvetozar-penov-545267115/'
    }
  },
  {
    name: 'Dmitri Marov',
    position: 'Frontend developer',
    group: GROUPS.DEVS,
    img: Dima,
    description:
      'Curious. Disciplined. Passionate. Dmitri Is not afraid to wonder and learn more about how things work. He always tries to find ways to make life better…. and never stops doing these things because he loves it.',
    links: {
      linkedin: 'https://www.linkedin.com/in/dmitrijs-marovs-ab073a16a',
      github: 'https://github.com/DmitriVanGuard'
    }
  },
  {
    name: 'Yordan Pavlov',
    position: 'Big Data Engineer',
    img: Yordan,
    group: GROUPS.RESEARCH,
    description:
      'Yordan has 10+ years of experience as a software developer, mainly as a C++ developer. He has worked on projects in the telecom and travel industries, and likes devising optimized and lean software especially related to fast networking, optimized algorithms and high performance data structures. He was instantly drawn to cryptocurrencies because they intersect cryptography, finance and social behavior. Outside of work, he enjoys hiking, snowboarding or just going for a walk.',
    links: {
      linkedin: 'https://www.linkedin.com/in/yordan-pavlov/',
      github: 'https://github.com/YordanPavlov'
    }
  },
  {
    name: 'Vassil Kalkov',
    position: 'Big Data Engineer',
    img: Vassil,
    group: GROUPS.RESEARCH,
    description:
      'Vassil brings a pragmatic approach plus experience in startups and mid-size companies, using a diverse set of technologies. He’s a long-time crypto believer and is committed to building applications that foster its adoption. He’s also passionate about hardware, mining, connected devices, and shooting pictures with old analog cameras.',
    links: {
      linkedin: 'https://www.linkedin.com/in/vassilkalkov/',
      github: 'https://github.com/kalkov'
    }
  },
  {
    name: 'Nastya Kharitonova',
    position: 'Frontend developer',
    group: GROUPS.DEVS,
    img: Nastya,
    description:
      'Nastya loves to make awesome apps. She is attentive to details, and is crazy about friendly UX, animations and beautiful UI. As a frontend developer, she helps people understand the crypto world and tries to understand it herself.',
    links: {
      linkedin: 'https://www.linkedin.com/in/haritonasty/',
      github: 'https://github.com/haritonasty'
    }
  },
  {
    name: 'Rinat Rahimulin',
    position: 'Frontend developer',
    img: Rinat,
    group: GROUPS.DEVS,
    description:
      'Rinat is a senior full stack developer with experience in fintech (crypto exchanges, trading) plus education and enterprise (CRM/ERP, widgets) solutions. He communicate with the business according to its needs and proposes the best technology solutions for the job. When he’s not working, he enjoys fantastic books and fishing.',
    links: {
      linkedin: 'https://www.linkedin.com/in/rfihtengolts',
      github: 'https://github.com/garageinc'
    }
  },
  {
    name: 'Lyudmil Danailov',
    position: 'Junior Developer',
    group: GROUPS.RESEARCH,
    img: Lyudmil,
    description:
      'Lyudmil is starting his career in development while studying Informatics at Sofia University. He’s also a martial artist and guitar player, and really enjoys reading books in English (and in the future, maybe Italian, French or Japanese). He also loves spending time with his girlfriend and playing with his dog in his hometown of Varna.',
    links: {
      github: 'https://github.com/spiderjako',
      email:
        'mailto:lyudmil_danailov@abv.bg'
    }
  },
  {
    name: 'Dorjee Sun',
    position: 'Advisor',
    group: GROUPS.ADVISORS,
    description:
      'Social entrepreneur who has co-founded 17 companies in the areas of biotech, education, conservation, agriculture, philanthropy, technology and financial innovation. Named one of TIME Magazine’s Heroes of the Environment, he also is a hero of Santiment business development and leading new initiatives.',
    links: {
      linkedin: 'https://sg.linkedin.com/in/dorjee'
    }
  },
  {
    name: 'Nikolay Kalev',
    position: 'DevSecOps',
    group: GROUPS.DEVS,
    img: Nikolay,
    description:
      'He has a Master degree in industrial automation with more than 15 years of IT/infrastructure expertise. Throughout his career, he grew few large scale projects to more than 4000 hosts and devices. He is passionate with cloud technologies, automation, security, Linux, BSD and embedded systems. He is interested about scifi , technology and always enjoy learning new things on his spare time',
    links: {
      linkedin: 'https://www.linkedin.com/in/nkalev'
    }
  },
  {
    name: 'Ante Sosa',
    position: 'Big Data Engineer',
    img: Ante,
    group: GROUPS.RESEARCH,
    description:
      'Ante has a background in mathematics with experience in analyzing large amounts of malicious files. He is passionate about data science and exploring innovations in crypto space. He enjoys playing football, traveling and meeting new people.',
    links: {
      linkedin: 'https://www.linkedin.com/in/ante-sosa-80a198157/',
      github: 'https://github.com/antisaa'
    }
  }
]
