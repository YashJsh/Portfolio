import { GithubIcon, Linkedin, Mail } from "lucide-react";

const links = [
    { label: "GitHub", href: "https://github.com/YashJsh", icon: GithubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yashjsh/", icon: Linkedin },
    { label: "Email", href: "mailto:yash.jsh0@gmail.com", icon: Mail },
];

export const Connect = () => {
    return <section className="flex flex-col gap-4">
         <h2 className="font-semibold text-sm ">Contact</h2>
        <div className="flex gap-6">
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-sm flex items-center gap-2 hover:link-subtle text-muted-foreground hover:text-foreground"
                >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                </a>
            ))}
        </div>
    </section>
}