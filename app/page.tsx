import { Navbar } from "@/components/navbar";
import { About } from "@/sections/about";
import { Connect } from "@/sections/connect";
import { Footer } from "@/sections/footer";
import { GithubActivity } from "@/sections/github_activity";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Stack } from "@/sections/stack";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 space-y-12 mb-10" >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Stack />
        <GithubActivity/>
        <Connect/>
        <Footer/>
      </div>
    </main>
  );
}
