export const personalInfo = {
  name: "Sunil Nagar",
  shortName: "SNagar",
  title: "Full Stack Developer & Competitive Programmer",
  email: "sunilnagar682@gmail.com",
  phone: "+91 80039xxxxx",
  location: "India",
  institution: "IIIT Surat",
  github: "https://github.com/theofficialsunil",
  linkedin: "https://www.linkedin.com/in/sunil-n-03b163320/",
  codeforces: "https://codeforces.com/profile/S_Nagar",
  codechef: "https://www.codechef.com/users/s_nagar",
  leetcode: "https://leetcode.com/u/S_Nagar/",
};

export const aboutStats = [
  { value: "3+", label: "Major Projects" },
  { value: "693+", label: "CF Problems" },
  { value: "320+", label: "LC Problems" },
  { value: "2028", label: "Graduation Year" },
];

export const projects = [
  {
    title: "Smart Adaptive Load Balancer",
    description:
      "Layer 7 reverse proxy load balancer supporting Round Robin and Least Connections routing, active health checks, automatic failover, rate limiting, and real-time WebSocket metrics dashboard.",
    image:
      "p1.avif",
    tags: ["Node.js", "Express", "Next.js", "TypeScript", "WebSocket", "k6"],
    github: "https://github.com/theofficialsunil/smart-load-balancer",
    demo: "https://smart-load-balancer.vercel.app/",
  },
  {
    title: "Shortify - Smart URL Shortener & Analytics",
    description:
      "Full-stack URL shortener with custom nested aliases, click analytics, geolocation insights, referrer tracking, device statistics, QR generation, authentication, and protected routes.",
    image:
      "p2.avif",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/theofficialsunil/shortify",
    demo: "https://shortify-woad.vercel.app/",
  },
  {
    title: "WriteSpace - Full-Stack Blogging Platform",
    description:
      "Blogging platform with role-based access control for readers and publishers, Prisma models, PostgreSQL, rich-text editing, live preview, Cloudinary uploads, dynamic metadata, and sitemap generation.",
    image:
      "p3.avif",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Auth.js", "Cloudinary"],
    github: "https://github.com/theofficialsunil/writespace",
    demo: "https://writespace-one.vercel.app",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Surat",
    location: "Surat, Gujarat",
    period: "Aug. 2024 - May 2028",
    gpa: "8.16/10.0 CGPA",
    description:
      "Currently pursuing undergraduate studies in Computer Science with focus on data structures, algorithms, full-stack development, databases, and core computer science fundamentals.",
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Probability and Statistics",
    ],
    achievements: [
      "Codeforces Specialist",
      "LeetCode Knight",
      "CodeChef 3-Star",
      "Multiple college-level coding contest podium finishes",
    ],
  },
];

export const codingProfilesFallback = {
  codeforces: {
    platform: "Codeforces",
    username: "S_Nagar",
    rating: 1513,
    maxRating: 1513,
    rank: "specialist",
    maxRank: "specialist",
    contests: null,
    solved: 693,
    link: "https://codeforces.com/profile/S_Nagar",
  },
  leetcode: {
    platform: "LeetCode",
    username: "S_Nagar",
    rating: 1853,
    level: "Knight",
    globalRanking: 51795,
    attendedContests: 26,
    topPercentage: 6.08,
    totalSolved: 320,
    easySolved: 86,
    mediumSolved: 186,
    hardSolved: 48,
    profileRank: 423863,
    badges: 5,
    link: "https://leetcode.com/u/S_Nagar/",
  },
  codechef: {
    platform: "CodeChef",
    username: "s_nagar",
    rating: 1657,
    maxRating: 1657,
    stars: "3-Star",
    division: "Div 2",
    globalRank: 10865,
    countryRank: 9790,
    link: "https://www.codechef.com/users/s_nagar",
  },
};

export const resumeSections = {
  summary:
    "CSE undergraduate at IIIT Surat focused on full-stack development, data structures and algorithms, and competitive programming. Built projects using Next.js, Node.js, PostgreSQL, Prisma, MongoDB, Redis, Docker, WebSocket, and modern UI tooling. Strong interest in scalable systems, software engineering fundamentals, and algorithmic problem solving.",
  skills: [
    "C++, TypeScript, JavaScript, Python, SQL",
    "Next.js, React, Tailwind CSS, shadcn/ui",
    "Node.js, Express.js, REST APIs, Auth.js, NextAuth, Zod",
    "PostgreSQL, MongoDB, MySQL, Prisma ORM",
    "Git, GitHub, Vercel, Cloudinary, Postman, Linux",
    "WebSocket, k6, Load Balancing, RBAC, OAuth",
  ],
};

export const skills = [
  {
    title: "Languages",
    items: ["C++", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend Development",
    items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "Auth.js", "NextAuth", "Zod"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Cloudinary", "Postman", "Linux"],
  },
  {
    title: "Core Concepts",
    items: [
      "Data Structures and Algorithms",
      "System Design",
      "Load Balancing",
      "Object-Oriented Programming",
      "RBAC",
      "OAuth",
      "WebSocket",
      "k6",
    ],
  },
];

export const achievements = [
  {
    title: "Terminal Exit Contest",
    organization: "IIIT Surat",
    position: "3rd Place",
    type: "Individual",
    year: "2026",
    category: "Competitive Programming",
  },
  {
    title: "Code of Thrones",
    organization: "IIIT Surat",
    position: "3rd Place",
    type: "Team ALGOZEN",
    year: "2026",
    category: "Competitive Programming",
  },
  {
    title: "CGPA++ Contest",
    organization: "IIIT Surat",
    position: "2nd Place",
    type: "Individual",
    year: "2026",
    category: "Competitive Programming",
  },
  {
    title: "Dijkstra & Khakhra Coding Contest",
    organization: "IIIT Surat",
    position: "1st Place",
    type: "Team of 3",
    year: "2025",
    category: "Competitive Programming",
  },
  {
    title: "Code-Sprint Contest",
    organization: "IIIT Surat",
    position: "2nd Place",
    type: "Individual",
    year: "2025",
    category: "Competitive Programming",
  },
];