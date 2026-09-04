import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Pencil } from "lucide-react";

export const DATA = {
  name: "Yash Joshi",
  initials: "YJ",
  url: "https://www.imyash.in",
  location: "Remote",
  locationLink: "",
  description:
    "I build things. I write code. Software Developer.",
  summary:
    `I’m Yash Joshi, Software Developer who builds projects from scratch to understand how they work behind the scenes. I treat products like my own, spend my time learning, and care about refining the details of what I build.`,
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
    { href: "/blog/admin", icon: Pencil, label: "Write" },
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
      school: "Amrita University, Coimbatore",
      degree: "Masters in Computer Application",
      start: "2025",
      end: "2027",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Amrita_Vishwa_Vidyapeetham_-_Logo_Icon.svg",
    },
    {
      school: "BCAS, Delhi University",
      degree: "BSc (H) Computer Science",
      start: "2021",
      end: "2024",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1WKOPZjFE6GY9RsRPYLJXwDBSodbyRaTOMl0MjCs-w&s=10",
    },
    {
      school: "New Beersheba Public School, Pithoragarh",
      degree: "CBSE Class - XI",
      start: "2019",
      end: "2021",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnRbEPBhk7253DDOMoShK9EjDlTu1f3RUQDySKiLl9w&s=10",
    }
  ] as any[],
  projects: [
    {
      title: "Perpetual Futures Exchange Engine",
      href: "https://github.com/YashJsh/PERP",
      dates: "",
      active: true,
      description:
        "A high-performance perpetual futures matching engine with in-memory orderbook structures, event-driven processing, and risk controls.",
      technologies: [
        "TypeScript",
        "Turborepo",
        "Redis Streams",
        "WebSocket",
        "B-Trees",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YashJsh/PERP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/perp_.svg",
      video: "",
    },
    {
      title: "Lobable",
      href: "https://github.com/YashJsh/lobable",
      dates: "",
      active: true,
      description:
        "Cloud-based AI application generator with real-time code execution, live previews, and a human-in-the-loop blueprint refinement workflow.",
      technologies: [
        "Next.js",
        "Express.js",
        "E2B",
        "Monaco Editor",
        "SSE",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YashJsh/lobable",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "lobable.svg",
      video: "",
    },
    {
      title: "AI Coding CLI",
      href: "https://github.com/YashJsh/AI-Harness",
      dates: "",
      active: true,
      description:
        "A CLI-based AI coding agent with autonomous tool execution and an interactive shell for single-shot and iterative workflows.",
      technologies: [
        "TypeScript",
        "Bun",
        "Groq SDK",
        "CLI/TUI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YashJsh/AI-Harness",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real-time Multiplayer Chess Game",
      href: "https://chess.imyash.in",
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
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://chess.imyash.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/YashJsh/chess",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chess.svg",
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
        "AI SDK",
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
  ],
  hackathons: [] as any[],
} as const;
