import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  GitBranch, 
  Figma,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

export const personalInfo = {
  name: "Younus Ahmed Shaik",
  title: "B.Tech CSE Student | Aspiring Software Developer",
  shortDesc: "Final-year Computer Science Engineering student with strong foundations in Python, Java, C++, SQL, and full-stack web development.",
  about: "Final-year Computer Science Engineering student with strong foundations in Python, Java, C++, SQL, and full-stack web development. Seeking a summer internship to apply my technical skills in real-world software projects, contribute meaningfully to a team, and accelerate my professional growth.",
  objective: "To apply my technical skills in real-world software projects, contribute meaningfully to a team, and accelerate my professional growth.",
  strengths: [
    "Problem Solving",
    "Continuous Learning",
    "Team Collaboration",
    "Adaptability",
    "Attention to Detail"
  ],
  email: "younus.shaik16@gmail.com",
  phone: "+91 8332008354",
  location: "Kavali, Andhra Pradesh",
  github: "https://github.com/younusahmed",
  linkedin: "https://linkedin.com",
  resume: "#"
};

export const skills = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "Java", level: 85, category: "Languages" },
  { name: "C++", level: 80, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "HTML5 & CSS3", level: 90, category: "Web" },
  { name: "JavaScript (ES6+)", level: 85, category: "Web" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "VS Code & Colab", level: 90, category: "Tools" },
  { name: "Data Structures", level: 85, category: "Concepts" },
  { name: "OOPs", level: 85, category: "Concepts" },
  { name: "DBMS", level: 85, category: "Concepts" },
  { name: "REST API Basics", level: 80, category: "Concepts" }
];

export const projects = [
  {
    id: 1,
    title: "Student Grade Management System",
    description: "Built a CLI app to manage student records with CRUD operations, data validation, and grade computation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop",
    tech: ["Python", "OOP", "File Handling"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Responsive Portfolio Website",
    description: "Designed a mobile-first portfolio with Flexbox/Grid layouts, animations, and form validation.",
    image: "https://images.unsplash.com/photo-1507238692062-110eb210f443?q=80&w=2940&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Library Management System",
    description: "Designed normalized database schema; wrote complex queries with joins, subqueries, and aggregations.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop",
    tech: ["SQL", "DBMS"],
    github: "#",
    live: "#"
  }
];

export const experience = [];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "PBR Visvodaya Institute of Technology & Science",
    duration: "2022 - 2026",
    grade: "Relevant Coursework:",
    description: "Data Structures, OOPs, DBMS, Operating Systems, Computer Networks",
    icon: BookOpen
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    duration: "2020 - 2022",
    grade: "",
    description: "Focus on Mathematics, Physics, and Chemistry.",
    icon: Award
  },
  {
    id: 3,
    degree: "SSC (10th Grade)",
    institution: "Bhashyam High School — BSEAP Board",
    duration: "2019 - 2020",
    grade: "",
    description: "General Schooling.",
    icon: BookOpen
  }
];

export const certifications = [
  {
    id: 1,
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=3028&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Emerging Technologies",
    issuer: "Cloud Computing Workshop",
    date: "2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop"
  }
];

export const achievements = [
  "Active participant in inter-college technical quiz competitions and college technical events",
  "Presented poster on Emerging Technologies at college technical fest",
  "Languages: English (Professional), Telugu (Native), Hindi (Conversational)"
];
