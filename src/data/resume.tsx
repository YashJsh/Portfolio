import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Joshi",
  initials: "YJ",
  url: "https://yashjoshi.com", // Replace if they have a specific url
  location: "Remote",
  locationLink: "",
  description:
    "I build things. I write code. Software Developer.",
  summary:
    "Hi, I’m Yash. I like building things that genuinely interest me. Most of my projects start with curiosity rather than a checklist or a tutorial. If something makes me wonder “how does this actually work?”, I try to build a small version of it myself. I’ve built a chess game to better understand game logic and real-time interactions, and a WebSocket-based video calling app to learn how signaling and media streams work behind the scenes. I work across both frontend and backend, and I enjoy connecting the two — designing APIs, handling data flow, and seeing everything come together cleanly in the browser. Right now, I’m focused on learning deeply, building practical projects, and growing step by step as an engineer.",
  avatarUrl: "/yashjsh.svg",
  skills: [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
    { name: "Hono", icon: "https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-logo.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invert: true },
    { name: "Zustand", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", invert: true },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yash.jsh0@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/YashJsh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashjsh/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yash_jsh",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:yash.jsh0@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [] as any[],
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      degree: "B.Tech in Computer Science",
      start: "2023",
      end: "2027",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Maharaja_Agrasen_Institute_of_Technology_logo.png/220px-Maharaja_Agrasen_Institute_of_Technology_logo.png",
    },
    {
      school: "Siddhartha Public School",
      degree: "Class XII (CBSE) - 84.8%",
      start: "2021",
      end: "2023",
      logoUrl: "",
    },
    {
      school: "D.A.V. Public School",
      degree: "Class X (CBSE) - 91.6%",
      start: "2010",
      end: "2021",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/DAV_College_Managing_Committee_logo.svg/1200px-DAV_College_Managing_Committee_logo.svg.png",
    }
  ] as any[],
  projects: [
    {
      title: "Real-time Multiplayer Chess Game",
      href: "https://chess-opal-one.vercel.app/",
      dates: "",
      active: true,
      description:
        "A real-time two-player chess game with optimistic UI, full rule enforcement, and reliable game state synchronization.",
      technologies: [
        "Next.js",
        "React",
        "Zustand",
        "Socket.IO",
        "Node.js",
        "Chess.js",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://chess-opal-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/YashJsh/chess",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "NotebookLM-style AI Assistant",
      href: "https://github.com/YashJsh/Notebooks-Rag",
      dates: "",
      active: true,
      description:
        "An AI-powered assistant that answers questions based on user-provided documents, websites, or raw text using retrieval-augmented generation (RAG).",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Hono",
        "OpenAI",
        "Qdrant",
        "AI SDK"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YashJsh/Notebooks-Rag",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Raw WebRTC Video Calling App",
      href: "https://github.com/YashJsh/Raw-sockets-Video-Chat",
      dates: "",
      active: true,
      description:
        "A peer-to-peer video calling application built using WebRTC with manual signaling over raw WebSockets, without relying on high-level abstractions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "WebRTC",
        "WebSockets",
        "Node.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YashJsh/Raw-sockets-Video-Chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [] as any[],
} as const;
