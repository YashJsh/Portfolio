/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import SkillsSection from "@/components/section/skills-section";
import { GithubActivity } from "@/components/section/github_activity";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const StripeDivider = () => (
    <div className="relative w-[100vw] left-1/2 -translate-x-1/2 h-[30px] bg-diagonal-stripes opacity-40 border-y border-dashed border-black/20 dark:border-white/30 pointer-events-none my-2"></div>
  );

  return (
    <main className="min-h-dvh flex flex-col gap-4 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-full space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <StripeDivider />

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      {DATA.work.length > 0 && (
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection />
            </BlurFade>
          </div>
        </section>
      )}
      
      <StripeDivider />
      
      <SkillsSection />
      
      <StripeDivider />
      
      <section id="projects" className="py-2">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      {DATA.education.length > 0 && (
        <>
          <StripeDivider />
          <section id="education" className="py-2">
            <div className="flex min-h-0 flex-col gap-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-2xl font-bold">Education</h2>
              </BlurFade>
              <div className="flex flex-col gap-8">
                {DATA.education.map((education, index) => (
                  <BlurFade
                    key={(education as any).school}
                    delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="size-14 rounded-2xl border border-dashed border-border/80 flex items-center justify-center bg-background shrink-0 overflow-hidden p-1.5 shadow-sm">
                        {(education as any).logoUrl ? (
                          <img
                            src={(education as any).logoUrl}
                            alt={(education as any).school}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-xl font-medium text-foreground">
                            {typeof (education as any).school === "string" ? (education as any).school.charAt(0) : "S"}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-semibold text-foreground text-lg leading-none">{(education as any).school}</h3>
                          <span className="text-sm font-medium text-muted-foreground tabular-nums tracking-wide">
                            {(education as any).start} - {(education as any).end}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground/80">{(education as any).degree}</p>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      
      <StripeDivider />
      
      <section id="github" className="py-2">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
           <GithubActivity />
        </BlurFade>
      </section>
      
      <StripeDivider />
      
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
