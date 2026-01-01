import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Real-time Chess Game",
        description: "Multiplayer chess using WebSockets with reconnect handling.",
        github: "https://github.com/YashJsh/Chess",
    },
    {
        title: "Notebook",
        description: "An AI notebook for uploading documents and asking context-aware questions.",
        github: "https://github.com/YashJsh/Notebooks-Rag",
    },
    {
        title: "Talkely",
        description: "Talkely is a real-time chat application that allows users to connect and chat with others live",
        github: "https://github.com/YashJsh/Talkey",
    },
    {
        title: "Whisper Link",
        description: "Anonymous messaging via shareable links.",
        github: "https://github.com/YashJsh/WhisperLink",
    },
];

export const Projects = () => {
    return <section className="flex flex-col gap-4">
         <h2 className="font-semibold text-sm ">Projects</h2>
        <div className="space-y-3">
            {projects.map((project) => (
                <a
                    key={project.title}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-border rounded-xl p-4 transition-colors hover:border-muted-foreground/30 hover:bg-card"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="font-medium text-foreground">{project.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                {project.description}
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                </a>
            ))}
        </div>
    </section>
}