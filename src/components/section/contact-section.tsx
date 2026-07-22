"use client"
import React from "react";
import { Mail } from "lucide-react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";

export default function ContactSection() {
    return (
        <div className="flex flex-col items-center justify-center pt-4 pb-8 text-center relative z-10 w-full mt-2">
            
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.06em] mb-4">
                Get in Touch
            </h2>
            
            <div className="text-lg md:text-xl text-muted-foreground mb-6 flex flex-col items-center justify-center gap-y-1 font-medium">
                <div className="flex items-center flex-wrap justify-center gap-y-1">
                    <span>Want to chat? Just shoot me a dm via</span>
                    <a 
                        href={`mailto:${DATA.contact.email}`} 
                        className="inline-flex items-center gap-2 px-3 py-1.5 mx-1.5 border border-dashed border-border/80 rounded-lg bg-background hover:bg-muted/50 hover:border-foreground/50 transition-colors text-foreground text-base shadow-sm"
                    >
                       <Mail className="size-4 text-red-500" /> Gmail
                    </a>
                    <span>or</span>
                </div>
                <div className="flex items-center flex-wrap justify-center gap-y-1">
                    <span>reach out on</span>
                    <a 
                        href={DATA.contact.social.X.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 mx-1.5 border border-dashed border-border/80 rounded-lg bg-background hover:bg-muted/50 hover:border-foreground/50 transition-colors text-foreground text-base shadow-sm"
                    >
                       <Icons.x className="size-4" /> Twitter
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col items-center gap-2 mt-2">
                <span className="text-sm font-semibold text-foreground/80">Support my work</span>
                <div className="flex items-center gap-4 text-muted-foreground/50">
                    <a 
                        href="#" 
                        className="inline-flex items-center gap-2 px-4 py-2 border border-dashed border-border/80 rounded-lg bg-background hover:bg-muted/50 hover:border-foreground/50 transition-colors text-foreground shadow-sm"
                    >
                        <svg width="14" height="14" viewBox="0 0 397 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="#00FFA3"/>
                            <path d="M64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="#00FFA3"/>
                            <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="#DC1FFF"/>
                        </svg>
                        <span className="text-sm font-medium">Solana</span>
                    </a>
                    <span className="text-xl leading-none">•</span>
                    <a 
                        href="#" 
                        className="inline-flex items-center gap-2 px-4 py-2 border border-dashed border-border/80 rounded-lg bg-background hover:bg-muted/50 hover:border-foreground/50 transition-colors text-foreground shadow-sm"
                    >
                        <svg width="24" height="14" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.518 10.985h-6.223v14.492h6.223c4.767 0 8.525-3.328 8.525-7.246 0-3.918-3.758-7.246-8.525-7.246zm-.437 11.455h-2.31V14.02h2.31c2.617 0 4.664 2.115 4.664 4.209 0 2.094-2.047 4.211-4.664 4.211zM42.106 17.525c0-1.847-1.396-3.155-3.666-3.155-2.093 0-3.868.995-4.595 2.502l2.96 1.399c.351-.81 1.05-.157 1.636-.157.755 0 1.25.327 1.25 1.014v.46h-3.344c-2.589 0-4.654 1.144-4.654 3.336 0 2.094 1.776 3.14 3.753 3.14 1.658 0 3.025-.622 3.896-1.929v1.635h3.404V17.526h-.64zm-3.313 5.465c-.755 0-1.745-.394-1.745-1.146 0-.818.843-1.275 2.181-1.275h2.241v.72c0 1.045-1.338 1.7-2.677 1.7zM66.45 10.985h-3.46v3.172h-1.632v-3.172h-3.432l-2.735 9.061-2.909-9.061h-3.811l4.918 14.492h3.518l1.456-4.646h1.597v4.646h3.461V14.157h2.998v-3.172h-2.998V10.985h.029zm-5.092 10.37h-1.597v-4.088h1.597v4.088zM99.98 10.985h-3.517v8.082c0 2.03-1.018 3.206-2.589 3.206-1.514 0-2.27-.981-2.27-2.715v-8.572H88.09v8.082c0 2.03-1.02 3.206-2.592 3.206-1.512 0-2.268-.981-2.268-2.715v-8.572h-3.518v9.127c0 3.305 1.83 4.908 4.305 4.908 2.094 0 3.636-.98 4.625-2.65 .727 1.636 2.183 2.65 4.19 2.65 2.27 0 3.753-1.046 4.654-2.65v2.355h3.493V10.985h.001zM11.602 1.625L8.724 10.1h6.634l-3.756 8.475z" fill="#002970"/>
                            <path d="M15.358 10.1H8.724l-8.491 21.6 3.755-8.475h6.635z" fill="#00BAF2"/>
                        </svg>
                        <span className="text-sm font-medium">Paytm</span>
                    </a>
                </div>
            </div>
            
        </div>
    );
}