"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, Copy, Check, Github, Twitter, Instagram, X, Linkedin } from "lucide-react";
import axios from "axios"
import {toast} from "sonner"

export const Contact = () => {
    const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
    const [copied, setCopied] = useState(false);

    const email = "imyashj@proton.me";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("loading");

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            nickname:formData.get("nickname"),    
            email: formData.get("email"),
            message: formData.get("message"),
        };
        try {
            const response = await axios.post("/api/connect", data);
            setFormState("success");
            toast("Thankyou, your message has been sent!");
            form.reset();
        } catch (error) {
            console.error(error);
        } finally{
            setFormState("idle");
        }
    };

    return (
        <section className="w-full mx-auto py-12">
            {/* Main Container: Split Layout */}
            <div className="flex flex-col md:flex-row border border-border bg-card rounded-2xl overflow-hidden shadow-sm">


                {/* --- LEFT SIDE (1/3): Info Section --- */}
                <div className="md:basis-[40%] bg-muted/30 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">

                    <div>
                        <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                            If you have any inquiries, please feel free to reach out. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>

                    {/* Email Display with Copy Function */}
                    <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                            Email Me
                        </span>
                        <button
                            onClick={handleCopyEmail}
                            className="group flex items-center gap-3 w-full p-3 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors text-left"
                        >
                            <div className="p-2 rounded-md bg-muted text-foreground group-hover:text-primary transition-colors">
                                <Mail size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">{email}</p>
                                <p className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                                    {copied ? "Copied to clipboard!" : "Click to copy"}
                                </p>
                            </div>
                            <div className="text-muted-foreground">
                                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* --- RIGHT SIDE (2/3): The Form --- */}
                <div className="md:basis-[60%] p-8 bg-card relative">
                    {/* Subtle Gradient Glow at top right */}
                    <div className="absolute top-0 right-0 w-full bg-primary/5 blur-3xl rounded-full pointer-events-none" />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                            <div className="space-y-1">
                                <input
                                    name="name"
                                    required
                                    type="text"
                                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="space-y-1">

                                <input
                                    name="nickname"
                                    required
                                    type="text"
                                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                                    placeholder="Nickname"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">

                                <input
                                    name="email"
                                    required
                                    type="tet"
                                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                                    placeholder="Email"
                                />
                            </div>

                        <div className="space-y-1">

                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/40"
                                placeholder="Message"
                            />
                        </div>

                        <div className="flex justify-end pt-2">
                            <motion.button
                                disabled={formState !== "idle"}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`
                        min-w-[140px] px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 w-full
                        ${formState === "success"
                                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                        : "bg-primary text-primary-foreground hover:bg-primary/90"}
                        `}
                            >
                                <AnimatePresence mode="wait">
                                    {formState === "idle" && (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={14} />
                                        </>
                                    )}
                                    {formState === "loading" && (
                                        <>
                                            <Loader2 size={14} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    )}
                                    {formState === "success" && (
                                        <>
                                            <CheckCircle size={14} />
                                            <span>Sent</span>
                                        </>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </form>
                    <div className="mt-8 pt-6 border-t border-border/40">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-px w-12 bg-border/60"></span>
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Socials</span>
                            <span className="h-px w-12 bg-border/60"></span>
                        </div>

                        <div className="flex justify-center gap-6">
                            <SocialLink href="https://github.com/YashJsh" icon={<Github size={18} />} label="GitHub" />
                            <SocialLink href="https://x.com/yash_jsh" icon={<Twitter size={18} />} label="Twitter" />
                            <SocialLink href="https://www.linkedin.com/in/yashjsh/" icon={<Linkedin size={18} />} label="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 rounded-full bg-muted/30 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-muted-foreground hover:text-primary"
    >
        {icon}
        {/* Simple tooltip effect */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {label}
        </span>
    </a>
);
