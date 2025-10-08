import type { IconName } from "@/lib/icons";

export const themeSettings = {
  lightMode: {
    icon: "Sun" as IconName,
    primaryColor: "#000000",
    secondaryColor: "#333333",
    backgroundColor: "#FFFFFF",
    accentColor: "#666666",
  },
  darkMode: {
    icon: "Moon" as IconName,
    primaryColor: "#FFFFFF",
    secondaryColor: "#E0E0E0",
    backgroundColor: "#1A1A1A",
    accentColor: "#CCCCCC",
  },
};

export const personalInfo = {
  name: "Deepak GS",
  title: "MERN Stack Developer",
  tagline:
    "Crafting intuitive digital experiences with a focus on human-centered design and clean code.",
  email: "deepakgs536@gmail.com",
  phone: "",
  location: "Tamil Nadu, India",
  resumeURL: "/assets/Alex_Carter_Resume.pdf",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepak-ganesamurthi-suseela-b0b41228b/",
      icon: "Linkedin" as IconName,
    },
    {
      name: "GitHub",
      url: "https://github.com/deepakgs536",
      icon: "Github" as IconName,
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/DEEPAK_G_S/",
      icon: "CodeXml" as IconName,
    },
  ],
};

export const sections = [
  { id: "home", title: "Home", icon: "Home" as IconName, template: "hero" },
  {
    id: "portfolio",
    title: "Work",
    icon: "LayoutGrid" as IconName,
    template: "grid",
  },
  { id: "about", title: "About", icon: "User" as IconName, template: "text_photo" },
  { id: "contact", title: "Contact", icon: "Mail" as IconName, template: "form" },
] as const;

export const skills = {
  design: {
    heading: "Frontend & Architecture",
    items: [
      { name: "React / Next.js", icon: "Code" as IconName },
      { name: "TypeScript & ES6+", icon: "Type" as IconName },
      { name: "Tailwind CSS / Styled-Components", icon: "Palette" as IconName },
      {
        name: "REST APIs & Version Control (Git)",
        icon: "GitBranch" as IconName,
      },
    ],
  },
  development: {
    heading: "Backend & Architecture",
    items: [
      { name: "Node.js", icon: "Server" as IconName },
      { name: "Express", icon: "Terminal" as IconName },
      { name: "Socket.io", icon: "Zap" as IconName },
      { name: "MongoDB", icon: "Database" as IconName },
    ],
  },
};

export const projects = [
  {
    id: "doodle-dash-web-app",
    title: "Doodle Dash Web Application",
    category: "Full Stack Development, Real-Time UX",
    thumbnailImage: "/images/doodle-dash-thumb.png",
    link: "https://doodle-dashh.vercel.app",
    caseStudy: {
      summary:
        "Developed a real-time multiplayer drawing and guessing web app inspired by Skribbl.io, integrating chat, live synchronization, and responsive gameplay.",
      role: "Full Stack Developer",
      solution:
        "Engineered a WebSocket-based architecture using Node.js and Socket.io for real-time communication. Designed a clean, intuitive interface emphasizing game clarity and quick interactions. Integrated chat and lobby systems for seamless user engagement.",
      techUsed: ["React", "Express", "Socket.io", "MongoDB"],
     metrics:
      "Introduced a live chat system with instant message delivery",
    },
  },
  {
    id: "chronos-crm-web",
    title: "Chronos CRM Backend & API",
    category: "Full-Stack Development, Architecture",
    thumbnailImage: "/images/chronos-thumb.svg",
    link: "/portfolio/chronos-crm",
    caseStudy: {
      summary:
        "Developed a high-performance RESTful API and implemented the frontend dashboard for a customer relationship management system.",
      role: "Full-Stack Developer",
      challenge:
        "Latency issues due to an outdated Python/Django system hindered real-time data flow for sales agents.",
      solution:
        "Rebuilt the API using Node.js and PostgreSQL. The frontend was deployed with Next.js to leverage Server-Side Rendering for maximum speed and SEO performance.",
      techUsed: ["Next.js", "PostgreSQL", "REST API", "TypeScript"],
      metrics:
        "Server response time reduced by 50ms on average; 99.9% uptime maintained across all core features.",
    },
  },
];

export const aboutContent = {
  heading: "Make It Beautiful. Make It Work.",
  subheading: "2+ years developing high-performance, full-stack MERN applications.",
  bioParagraph1:
    'I’m Deepak GS, a multidisciplinary developer merging modern UX principles with full-stack development expertise to create seamless, scalable, and user-focused digital experiences. I focus on transforming complex challenges into simple, intuitive solutions that balance functionality and design.',
  bioParagraph2:
    'My development approach is rooted in delivering robust, scalable MERN architecture. I prioritize readable, optimized code as the foundation for creating intuitive user interfaces. For me, the best solutions blend technical rigor with a seamless, user-first experience.',
  callToAction:
    "Interested in collaborating on a product that demands both pixel-perfect design and technical rigor? Let's connect.",
};

export const contactForm = {
  title: "Let's Start a Project",
  fields: [
    { name: "Name", type: "text", required: true },
    { name: "Email", type: "email", required: true },
    { name: "Subject", type: "text", required: true },
    { name: "Message", type: "textarea", required: true },
  ] as const,
  submitButtonText: "Send Message",
};
