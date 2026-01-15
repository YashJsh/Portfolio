"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Cpu, Zap, Network, Database, Lock, Search } from "lucide-react";

// --- Data Structure ---
const projects = [
  {
    title: "Real-time Multiplayer Chess Game",
    description:
      "A real-time two-player chess game with optimistic UI, full rule enforcement, and reliable game state synchronization.",
    tags: ["Next.js", "React", "Zustand", "Socket.IO", "Node.js", "Chess.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/YashJsh/chess",
      live: "https://chess-opal-one.vercel.app/"
    },
    about: {
      why: "Built to understand real-time multiplayer systems, game state synchronization, and how optimistic UI interacts with authoritative server validation.",
      highlights: [
        {
          title: "State Sync",
          desc: "Optimistic UI updates with server-authoritative validation to keep both players in sync without noticeable latency.",
          icon: <Network size={16} />
        },
        {
          title: "Game Logic",
          desc: "Centralized rule enforcement using chess.js to prevent invalid moves and handle edge cases like check, draw, and promotion.",
          icon: <Cpu size={16} />
        },
        {
          title: "Real-time Events",
          desc: "Room-based Socket.IO event architecture to manage player lifecycle, turns, reconnections, and broadcasts.",
          icon: <Zap size={16} />
        }
      ]
    }
  },
  {
    title: "NotebookLM-style AI Assistant",
    description:
      "An AI-powered assistant that answers questions based on user-provided documents, websites, or raw text using retrieval-augmented generation (RAG).",
    tags: ["Next.js", "TypeScript", "Node.js", "Hono", "OpenAI", "Qdrant", "AI SDK"],
    links: {
      github: "https://github.com/YashJsh/Notebooks-Rag",
    },
    about: {
      why: "Built to understand how retrieval-augmented generation works in practice, including document ingestion, vector search, and grounding LLM responses in external context.",
      highlights: [
        {
          title: "RAG Pipeline",
          desc: "Implemented a full RAG flow: ingesting documents, generating embeddings, retrieving relevant chunks, and injecting context into LLM prompts.",
          icon: <Search size={16} />
        },
        {
          title: "Vector Search",
          desc: "Used Qdrant for high-dimensional vector storage and similarity search to retrieve the most relevant context for each query.",
          icon: <Database size={16} />
        },
        {
          title: "API Design",
          desc: "Designed clean backend routes using Hono to handle ingestion, querying, and streaming responses efficiently.",
          icon: <Cpu size={16} />
        }
      ]
    }
  },
  {
    title: "Raw WebRTC Video Calling App",
    description:
      "A peer-to-peer video calling application built using WebRTC with manual signaling over raw WebSockets, without relying on high-level abstractions.",
    tags: ["Next.js", "TypeScript", "WebRTC", "WebSockets", "Node.js"],
    links: {
      github: "https://github.com/YashJsh/Raw-sockets-Video-Chat",
    },
    about: {
      why: "Built to understand how real-time peer-to-peer communication works at a protocol level, including WebRTC signaling, ICE negotiation, and direct media stream exchange.",
      highlights: [
        {
          title: "Manual Signaling",
          desc: "Implemented custom WebRTC signaling using raw WebSockets, handling SDP offer/answer exchange and ICE candidates without Socket.IO or third-party services.",
          icon: <Network size={16} />
        },
        {
          title: "Peer Connection",
          desc: "Worked directly with RTCPeerConnection to manage connection states, media tracks, and peer lifecycle events.",
          icon: <Cpu size={16} />
        },
        {
          title: "Media Streams",
          desc: "Handled local and remote media streams manually using addTrack and ontrack callbacks for real-time audio and video rendering.",
          icon: <Zap size={16} />
        }
      ]
    }
  }
];

export function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-12 flex flex-col gap-8">
      <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
        Projects
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  // Renamed logic to 'isExpanded' to make more sense for both click and hover
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ borderRadius: 12 }}
      className="group w-full border border-border bg-card overflow-hidden relative cursor-pointer"
      
      // 1. DESKTOP: Hover still works as before
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      
      // 2. MOBILE: Click toggles the state
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Subtle Hover/Active Highlight (Left Border) */}
      <motion.div
        layout
        className={`absolute left-0 top-0 bottom-0 w-1 bg-primary transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="p-6">
        {/* --- TOP SECTION (Always Visible) --- */}
        <motion.div layout="position">
          <div className="flex justify-between items-start mb-2">
            <h3 className={`text-lg font-medium transition-colors duration-300 ${
                isExpanded ? "text-primary" : "text-foreground"
            }`}>
              {project.title}
            </h3>

            {/* Action Icons */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex gap-3"
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    // 3. IMPORTANT: Stop click from bubbling up and closing the card
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      // 3. IMPORTANT: Stop click from bubbling up
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- EXPANDED SECTION --- */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-border mt-6">

                {/* Goal Section */}
                <div className="mb-6">
                  <span className="text-[10px] uppercase text-primary font-bold tracking-widest mb-1 block">
                    Goal
                  </span>
                  <p className="text-sm text-foreground/90">
                    {project.about.why}
                  </p>
                </div>

                {/* Highlights Grid - Made Responsive (1 col mobile, 3 cols desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {project.about.highlights.map((item: any) => (
                    <div
                      key={item.title}
                      className="flex flex-col items-center text-center p-3 rounded-lg bg-muted/30 border border-border/50"
                    >
                      <div className="text-primary mb-2 opacity-80">
                        {item.icon}
                      </div>
                      <span className="text-xs font-medium text-foreground mb-1">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-muted-foreground leading-tight">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};