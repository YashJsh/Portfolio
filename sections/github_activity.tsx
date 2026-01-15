import Image from "next/image"

export const GithubActivity = () => {
    return <section className="flex flex-col gap-4">
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Contributions</h2>
        <div className="">
            <Image
                src="https://ghchart.rshah.org/171717/YashJsh"
                alt="GitHub Contributions Graph"
                width={1000}
                height={200}
                className="w-full max-w-5xl mx-auto"
                unoptimized
            />
        </div>
    </section>
}