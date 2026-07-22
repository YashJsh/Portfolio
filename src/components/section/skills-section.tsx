"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="relative">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="flex items-center justify-between relative">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
        </div>

        {/* The container needs to wrap naturally. */}
        <div 
          ref={constraintsRef} 
          className="relative flex flex-wrap gap-2 py-4 w-full items-start content-start z-10"
        >
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.02}>
              <motion.div
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.4}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                className="border border-dashed bg-background border-foreground/30 hover:border-foreground/50 hover:bg-muted/50 rounded-md h-8 w-fit px-3 flex items-center gap-1.5 shadow-sm transition-colors cursor-grab"
              >
                {(() => {
                  const Icon = (skill as any).icon;
                  return typeof Icon === "string" ? (
                    <img 
                      src={Icon} 
                      alt={skill.name} 
                      className={`size-3.5 rounded overflow-hidden object-contain pointer-events-none ${(skill as any).invert ? 'dark:invert' : ''}`} 
                    />
                  ) : Icon ? (
                    <Icon className="size-3.5 rounded overflow-hidden object-contain pointer-events-none" />
                  ) : null;
                })()}
                <span className="text-foreground text-xs font-semibold select-none pointer-events-none">{skill.name}</span>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
