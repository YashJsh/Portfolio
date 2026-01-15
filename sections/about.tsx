export const About = () => {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">About</h2>
            <p className="max-w-2xl leading-relaxed text-foreground/80">
                Hi, I’m Yash.
            </p>
            <p className="mx-w-2xl leading-relaxed text-foreground/80">
                I like building things that genuinely interest me. Most of my projects start with curiosity rather than a checklist or a tutorial.
            </p>
            <p className="mx-w-2xl leading-relaxed text-foreground/80">
                If something makes me wonder “how does this actually work?”, I try to build a small version of it myself. I’ve built a chess game to better understand game logic and real-time interactions, and a WebSocket-based video calling app to learn how signaling and media streams work behind the scenes
            </p>
            <p className="mx-w-2xl leading-relaxed text-foreground/80">
                I work across both frontend and backend, and I enjoy connecting the two — designing APIs, handling data flow, and seeing everything come together cleanly in the browser.
            </p>
            <p className="mx-w-2xl leading-relaxed text-foreground/80">
                Right now, I’m focused on learning deeply, building practical projects, and growing step by step as an engineer.
            </p>

        </section>
    );
}