"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { verifyPassword, publishPost } from "./actions";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const isValid = await verifyPassword(password);
      if (isValid) {
        setIsAuthenticated(true);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await publishPost(password, title, slug, summary, content);
    } catch (err: any) {
      setError(err.message || "Failed to publish post.");
      setSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="w-full py-8 flex flex-col min-h-[55vh]">
        <div className="flex justify-start items-center mb-6">
          <Link 
            href="/blog" 
            prefetch={true}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-dashed border-border rounded-lg px-2.5 py-1 inline-flex items-center gap-1 group"
          >
            <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
            Back to Blog
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="max-w-sm w-full mx-auto flex flex-col gap-6 items-center text-center">
            <div className="flex flex-col gap-1.5">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">Password for writing blogs</h1>
              <p className="text-xs text-muted-foreground">
                Please authenticate to access the editor.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="relative w-full flex items-center border-b border-border dark:border-white/20 focus-within:border-foreground dark:focus-within:border-white transition-colors py-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent text-foreground text-center text-base outline-none pr-8 placeholder:text-muted-foreground/30 font-sans"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-0 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors cursor-pointer"
                aria-label="Unlock"
              >
                {loading ? (
                  <span className="animate-spin text-xs">...</span>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                )}
              </button>
            </form>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admin-blog" className="max-w-md py-2">
      <div className="flex justify-start gap-4 items-center mb-4">
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 group cursor-pointer"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Lock Editor
        </button>
      </div>

      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Create Blog Post</h1>
        <p className="text-sm text-muted-foreground">
          Write a new post. Content supports full Markdown rendering.
        </p>
      </div>

      <form onSubmit={handlePublish} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm font-semibold text-foreground/80">
            Title
          </label>
          <input
            id="title"
            type="text"
            required
            placeholder="e.g. Learning Rust: My First Week"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-dashed border-border rounded-lg bg-background text-foreground text-sm px-3 py-2 outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="slug" className="text-sm font-semibold text-foreground/80">
            Slug (Optional)
          </label>
          <input
            id="slug"
            type="text"
            placeholder="e.g. learning-rust (will auto-generate from title if left blank)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border border-dashed border-border rounded-lg bg-background text-foreground text-sm px-3 py-2 outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="summary" className="text-sm font-semibold text-foreground/80">
            Summary
          </label>
          <input
            id="summary"
            type="text"
            required
            placeholder="A short tagline or description for the blog list."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full border border-dashed border-border rounded-lg bg-background text-foreground text-sm px-3 py-2 outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="text-sm font-semibold text-foreground/80">
            Content (Markdown)
          </label>
          <textarea
            id="content"
            required
            placeholder="# Write your markdown content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[300px] border border-dashed border-border rounded-lg bg-background text-foreground text-sm px-3 py-2 outline-none focus:border-foreground/50 transition-colors font-mono resize-y"
          />
        </div>

        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center py-2.5 border border-dashed border-border/80 rounded-lg bg-background hover:bg-muted/50 hover:border-foreground/50 transition-colors text-foreground text-sm font-medium shadow-sm cursor-pointer mt-2 disabled:opacity-50"
        >
          {submitting ? "Publishing..." : "Publish Post"}
        </button>
      </form>
    </section>
  );
}
