export const profile = {
  name: "Muhammad Thanseem C",
  shortName: "Thanseem",
  titles: [
    "Software Engineer",
    "Angular Developer",
    "Full-Stack Developer",
    "IoT Enthusiast",
    "MEAN / Next.js Specialist",
    "AI / RAG Developer",
  ],
  tagline:
    "I am a self-taught developer building primarily with Angular, who loves to solve problems digitally with top notch technologies — specialised in web and IoT technologies.",
  email: "muhammedthanseem@gmail.com",
  phone: "+91 85478 64929",
  location: "Calicut, Kerala, India",
  resumeUrl: "/Muhammad-Thanseem-C-Resume.pdf",
  githubUsername: "muhammadthanseem",
  socials: [
    { label: "GitHub", href: "https://github.com/muhammadthanseem", icon: "github" },
    { label: "GitLab", href: "https://gitlab.com/muhammedthanseem", icon: "gitlab" },
    { label: "LinkedIn", href: "https://linkedin.com/in/muhammedthanseem", icon: "linkedin" },
    { label: "Medium", href: "https://medium.com/@muhammedthanseem", icon: "medium" },
  ],
};

export const philosophyNotes = [
  { text: "Ship it 🚀", tape: "cream", rotate: -6 },
  { text: "Tests > vibes ✅", tape: "stone", rotate: 4 },
  { text: "Docs while it's fresh 📝", tape: "sage", rotate: -3 },
] as const;

export const showcaseSites = [
  {
    name: "Al Hawaj Builders",
    domain: "alhawajbuilders.com",
    url: "https://www.alhawajbuilders.com/",
    image: "/showcase/alhawaj.webp",
    blurb: "Immersive architecture & construction site with 3D visuals and scroll-driven animation.",
  },
  {
    name: "RepConnect.ai",
    domain: "repconnect.ai",
    url: "https://repconnect.ai/",
    image: "/showcase/repconnect.webp",
    blurb: "AI virtual sales rep for B2B flooring distributors — pricing, quotes and team controls.",
  },
  {
    name: "NRGY Events",
    domain: "nrgyevents.com",
    url: "https://nrgyevents.com/",
    image: "/showcase/nrgy.webp",
    blurb: "Expo & event booking platform with live floor plans and booth reservations.",
  },
  {
    name: "FloorMatch",
    domain: "floormatch.repconnect.ai",
    url: "https://floormatch.repconnect.ai/",
    image: "/showcase/floormatch.webp",
    blurb: "Conversational AI tool that guides homeowners to a personalized flooring match.",
  },
  {
    name: "Mega Max Global Trading",
    domain: "megamaxglobaltrading.com",
    url: "https://www.megamaxglobaltrading.com/",
    image: "/showcase/megamax.webp",
    blurb: "Marketplace for certified heavy construction equipment with inspection support.",
  },
  {
    name: "March Match",
    domain: "march-match-frontend.vercel.app",
    url: "https://march-match-frontend.vercel.app/",
    image: "/showcase/marchmatch.webp",
    blurb: "Fast-paced March Madness betting-pool app with live scoring checkpoints.",
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Companies" },
];

export const skillGroups = [
  {
    title: "Core (5000+ lines)",
    skills: [
      { name: "Angular", level: 95 },
      { name: "Next JS", level: 90 },
      { name: "Vue JS", level: 88 },
      { name: "Node JS", level: 88 },
      { name: "Python", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Git", level: 92 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      { name: "RAG (Retrieval-Augmented Generation)", level: 75 },
      { name: "LangChain", level: 70 },
      { name: "Vector Databases", level: 70 },
      { name: "LLM APIs (OpenAI / Anthropic)", level: 78 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    title: "Proficient (1000+ lines)",
    skills: [
      { name: "C / C++", level: 65 },
      { name: "Android", level: 60 },
      { name: "PHP", level: 60 },
      { name: "Assembly", level: 45 },
    ],
  },
  {
    title: "Familiar & Frameworks",
    skills: [
      { name: "PostgreSQL", level: 55 },
      { name: "MySQL", level: 60 },
      { name: "Kafka", level: 50 },
      { name: "Flask / Django", level: 60 },
      { name: "Express", level: 75 },
      { name: "Quasar", level: 60 },
    ],
  },
];

export const experience = [
  {
    company: "Trivand Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "Oct 2023 — Present",
    location: "Trivandrum, India",
    points: [
      "Develop and maintain Angular applications as primary frontend framework, alongside Node JS and Next JS projects.",
      "Configure and deploy MEAN stack based projects using version control.",
      "Work on insurance-based projects and vehicle inspection claim creation systems.",
      "Own JIRA project management and Scrum planning.",
      "Lead Git version control, team management, branching, code merging and release management.",
      "Architect an Atomic Structure project in Angular with reusable, atomic-design components.",
      "Practice Agile methodologies across delivery cycles.",
    ],
  },
  {
    company: "Vuelogix Technologies Pvt Ltd",
    role: "Junior Software Engineer",
    period: "Jan 2022 — Oct 2023",
    location: "Ernakulam, India",
    points: [
      "Install and configure Vue JS, Django, ThingsBoard and Grafana projects.",
      "Configure and deploy Vue.js / Django projects using Bitbucket version control.",
      "Work hands-on with IoT devices and configurations.",
      "Automate release pipelines with GitHub Actions CI/CD.",
      "Manage Docker containers for deployment and configuration.",
      "Practice Agile methodologies across sprints.",
    ],
  },
  {
    company: "Voxynoks",
    role: "MEAN Stack Developer",
    period: "Jun 2021 — Dec 2021",
    location: "Calicut, India",
    points: [
      "Install and configure MEAN stack projects following OOP principles.",
      "Configure and deploy MEAN stack projects using Bitbucket version control.",
      "Manage databases, backups and SQL queries with MongoDB.",
      "Configure servers through Linux SSH commands.",
      "Handle Firebase hosting, storage, authentication and billing.",
      "Handle Heroku hosting, storage and authentication.",
    ],
  },
];

export const clientProjects = [
  {
    title: "RepConnect.ai",
    type: "AI SaaS Product",
    stack: ["Next.js", "AI / LLM"],
    description:
      "An AI-powered virtual sales rep for B2B flooring distributors — instant multi-supplier product search, automated proposal and quote generation, and team pricing controls.",
    url: "https://repconnect.ai/",
  },
  {
    title: "FloorMatch",
    type: "AI SaaS Product",
    stack: ["Next.js", "AI / LLM"],
    description:
      "A guided, conversational flooring-recommendation experience that walks homeowners through lifestyle, design and budget questions to surface a personalized floor match.",
    url: "https://floormatch.repconnect.ai/",
  },
  {
    title: "Al Hawaj Builders",
    type: "Client Website",
    stack: ["Next.js", "Three.js", "GSAP"],
    description:
      "An immersive marketing site for a 25-year Kerala architecture and construction firm with 1,400+ completed projects, built with 3D visuals and scroll-driven animation.",
    url: "https://www.alhawajbuilders.com/",
  },
  {
    title: "NRGY Events",
    type: "Client Project",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "An expo and event booking platform where exhibitors and attendees browse upcoming trade shows, view floor plans, and reserve booth space.",
    url: "https://nrgyevents.com/",
  },
  {
    title: "Mega Max Global Trading",
    type: "Client Project",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "A marketplace for certified heavy construction equipment — cranes, excavators, and loaders — with transparent listings, inspection and delivery support.",
    url: "https://www.megamaxglobaltrading.com/",
  },
  {
    title: "March Match",
    type: "Full-Stack Web App",
    stack: ["Next.js", "Express", "MongoDB"],
    description:
      "A fast-paced March Madness betting-pool app with live scoring checkpoints and multiple cash-out windows throughout each game.",
    url: "https://march-match-frontend.vercel.app/",
  },
  {
    title: "TeacherInd Finance",
    type: "Client Project",
    stack: ["Next.js"],
    description:
      "A finance management system for TeacherInd staff to sign in and manage budgeting and financial workflows.",
    url: "https://finance.teacherind.com/signin",
  },
  {
    title: "TeacherInd Question Bank",
    type: "Client Project",
    stack: ["React"],
    description: "An authenticated question-bank portal built for TeacherInd's teaching staff.",
    url: "https://teacherind-question-bank.netlify.app/",
  },
  {
    title: "PlaceLock",
    type: "Client Project",
    stack: ["Next.js"],
    description: "An authenticated workspace and booking platform with account sign-up and sign-in flows.",
    url: "https://placelockcs.com/",
  },
];

export const earlyProjects = [
  {
    title: "Digital Menu",
    type: "Freelance Project",
    stack: ["Angular", "Node", "MongoDB"],
    description:
      "A QR-based digital restaurant menu. Guests scan a table-specific QR code, browse the live menu, place an order and pay instantly — no app download required.",
  },
  {
    title: "E-Ticket",
    type: "Mini Project",
    stack: ["Python", "Android", "MySQL"],
    description:
      "A web-based Android ticketing system for city buses. Riders scan a QR code instead of a paper ticket, linking a wallet funded from their bank account.",
  },
  {
    title: "Mind Reader",
    type: "Degree Main Project",
    stack: ["Python", "Android", "MySQL"],
    description:
      "An anonymous tele-psychiatry app that reads a user's facial expressions to relay emotional state to a psychiatrist without revealing the user's identity.",
  },
  {
    title: "Attendance Register",
    type: "Freelance Project",
    stack: ["Python", "Android", "MySQL"],
    description:
      "A mobile-based attendance system for schools and colleges with web-based tracking, in-depth reports, and Excel / PDF export.",
  },
];

export const education = [
  {
    school: "College Of Engineering, Vatakara",
    degree: "M in Computer Application — Kerala Technical University",
    period: "2019 — 2021",
    detail: "83%",
  },
  {
    school: "Sree Narayana College, Vatakara",
    degree: "BS in Computer Science — Calicut University",
    period: "2016 — 2019",
    detail: "66%",
  },
  {
    school: "Memunda Higher Secondary School",
    degree: "Plus Two — Kerala Board",
    period: "2014 — 2016",
    detail: "80%",
  },
  {
    school: "Memunda Higher Secondary School",
    degree: "SSLC — Kerala Board",
    period: "2014",
    detail: "94%",
  },
];

export const certificates = [
  "Python: Go From Beginner To Advance",
  "360-Degree Video and Virtual Reality",
  "Introduction to Virtual Reality — University of London",
  "Cloud OnBoard: Unleash Your Data Potential",
  "Getting Started with AWS Machine Learning",
];

export const coursework = [
  "Advanced Machine Learning",
  "Open Source Software Engineering",
  "Cloud Computing",
  "Artificial Intelligence",
  "Machine Learning",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover & Scope",
    icon: "search",
    description:
      "Dig into the problem before touching code — requirements, users, constraints, and what \"done\" actually looks like.",
  },
  {
    step: "02",
    title: "Architect",
    icon: "layers",
    description:
      "Sketch the data model, API contracts and component structure up front so the build doesn't paint itself into a corner.",
  },
  {
    step: "03",
    title: "Build",
    icon: "code",
    description:
      "Iterative development in small, reviewable commits — clean git history, meaningful messages, CI green the whole way.",
  },
  {
    step: "04",
    title: "Test & Review",
    icon: "rocket",
    description:
      "Automated tests and a real code review pass before anything merges — vibes are not a test strategy.",
  },
  {
    step: "05",
    title: "Ship & Monitor",
    icon: "cloud",
    description:
      "Deploy, watch logs and metrics, and iterate on what real usage tells you instead of what the spec assumed.",
  },
] as const;

export const services = [
  {
    title: "Web App Development",
    icon: "code",
    description: "Full-stack web apps with Next.js, Angular and Vue — from first commit to production deploy.",
  },
  {
    title: "Backend & API Engineering",
    icon: "layers",
    description: "REST/GraphQL APIs, database design and integrations with Node.js, Express and Python.",
  },
  {
    title: "AI & RAG Integration",
    icon: "sparkle",
    description: "Retrieval-augmented assistants grounded in your product data using LangChain and LLM APIs.",
  },
  {
    title: "IoT Dashboards & Integration",
    icon: "cpu",
    description: "Device configuration and live dashboards with ThingsBoard, Grafana and MQTT pipelines.",
  },
  {
    title: "DevOps & Deployment",
    icon: "cloud",
    description: "Dockerized deployments, CI/CD pipelines and release management across Git workflows.",
  },
  {
    title: "Code Review & Consulting",
    icon: "chat",
    description: "Architecture reviews, PR feedback and technical consulting to keep a codebase healthy as it grows.",
  },
] as const;
