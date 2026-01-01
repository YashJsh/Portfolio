import Image from "next/image";

const techStack = [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",invert : true},
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invert: true },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", invert: true },
   
  ];
  

  export const Stack = () => {
    return (
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-sm ">
          Skills & Tools
        </h2>
  
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="
                group flex items-center gap-2
                rounded-xl border border-border
                hover:bg-card px-5 py-2.5
                text-sm font-medium text-foreground
                transition-all
                hover:-translate-y-0.5
                hover:shadow-md
                bg-muted
              "
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`h-5 w-5 transition-transform group-hover:scale-105 ${
                    tech.invert ? "dark:invert" : ""
                  }`}
              />
              <span className="whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
