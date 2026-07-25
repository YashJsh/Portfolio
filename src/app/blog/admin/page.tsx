"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Pencil, Trash2, Plus, Lock, RefreshCw, ArrowLeft } from "lucide-react";
import { verifyPassword, savePost, deletePost, getAdminPosts, type AdminPost } from "./actions";
import { formatDate } from "@/lib/utils";
import { toast } from "sonner";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [fetchingPosts, setFetchingPosts] = useState(false);

  // Toggle view state: show list by default, show editor when creating/editing
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadPosts = async (pwd: string) => {
    setFetchingPosts(true);
    try {
      const list = await getAdminPosts(pwd);
      setPosts(list);
    } catch (err: any) {
      toast.error("Failed to load posts.");
    } finally {
      setFetchingPosts(false);
    }
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const isValid = await verifyPassword(password);
      if (isValid) {
        setIsAuthenticated(true);
        await loadPosts(password);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setSummary("");
    setContent("");
    setError("");
    setIsEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
    setEditingId(null);
    setTitle("");
    setSlug("");
    setSummary("");
    setContent("");
    setError("");
  };

  const handleLock = () => {
    setIsAuthenticated(false);
    setPassword("");
    handleCloseEditor();
    router.push("/blog");
  };

  const handleEdit = (post: AdminPost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setSummary(post.summary);
    setContent(post.content);
    setError("");
    setIsEditorOpen(true);
  };

  const handleDelete = async (id: string, postTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${postTitle}"?`)) return;
    setDeletingId(id);
    try {
      await deletePost(password, id);
      toast.success("Post deleted!");
      if (editingId === id) {
        handleCloseEditor();
      }
      await loadPosts(password);
    } catch (err: any) {
      toast.error(err.message || "Failed to delete post.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await savePost(password, editingId, title, slug, summary, content);
      toast.success(editingId ? "Post updated successfully!" : "Post published successfully!");
      handleCloseEditor();
      await loadPosts(password);
    } catch (err: any) {
      setError(err.message || "Failed to save post.");
    } finally {
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
              <h1 className="text-xl font-semibold tracking-tight text-foreground">
                Password for writing blogs
              </h1>
              <p className="text-xs text-muted-foreground">
                Please authenticate to access the editor.
              </p>
            </div>

            <form
              onSubmit={handleUnlock}
              className="relative w-full flex items-center border-b border-border dark:border-white/20 focus-within:border-foreground dark:focus-within:border-white transition-colors py-2"
            >
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
    <section id="admin-blog" className="w-full max-w-xl mx-auto py-2 flex flex-col gap-6">
      {/* Top navigation & controls */}
      <div className="flex items-center justify-between border-b border-dashed border-border pb-4">
        <button
          onClick={handleLock}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2.5 py-1.5 inline-flex items-center gap-1.5 group cursor-pointer"
        >
          <Lock className="size-3.5" />
          Lock Editor
        </button>

        {!isEditorOpen && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => loadPosts(password)}
              disabled={fetchingPosts}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg p-1.5 cursor-pointer disabled:opacity-50"
              title="Refresh Posts"
              aria-label="Refresh Posts"
            >
              <RefreshCw className={`size-3.5 ${fetchingPosts ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleOpenCreate}
              className="text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors border border-primary rounded-lg px-3 py-1.5 inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Plus className="size-3.5" />
              Create New Post
            </button>
          </div>
        )}
      </div>

      {!isEditorOpen ? (
        /* LIST VIEW: Existing Posts */
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
              Existing Posts
              <span className="text-xs font-normal text-muted-foreground bg-muted border border-border rounded-md px-2 py-0.5">
                {posts.length}
              </span>
            </h1>
          </div>

          {fetchingPosts && posts.length === 0 ? (
            <div className="p-8 border border-dashed border-border rounded-xl text-center text-xs text-muted-foreground">
              Loading posts...
            </div>
          ) : posts.length === 0 ? (
            <div className="p-8 border border-dashed border-border rounded-xl text-center flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">No blog posts published yet.</p>
              <button
                onClick={handleOpenCreate}
                className="text-xs font-medium text-foreground bg-muted hover:bg-muted/80 border border-border rounded-lg px-3 py-1.5 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="size-3.5" />
                Create First Post
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between gap-3 p-3.5 border border-dashed border-border hover:border-foreground/40 rounded-xl bg-background transition-colors group"
                >
                  <div className="flex flex-col min-w-0 flex-1 gap-1">
                    <h3 className="font-medium text-foreground text-sm sm:text-base leading-snug truncate">
                      {post.title}
                    </h3>
                    <time className="text-xs text-muted-foreground tabular-nums">
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border rounded-lg transition-colors cursor-pointer"
                      title="Edit Post"
                      aria-label={`Edit ${post.title}`}
                    >
                      <Pencil className="size-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      disabled={deletingId === post.id}
                      className="p-1.5 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                      title="Delete Post"
                      aria-label={`Delete ${post.title}`}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* CREATE / EDIT FORM VIEW */
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <button
              onClick={handleCloseEditor}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-dashed border-border rounded-lg px-2.5 py-1.5 inline-flex items-center gap-1.5 cursor-pointer group"
            >
              <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to Posts
            </button>
            <span className="text-xs text-muted-foreground font-mono">
              {editingId ? "Editing mode" : "New post mode"}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              {editingId ? "Edit Blog Post" : "Create New Post"}
            </h1>
            <p className="text-xs text-muted-foreground">
              {editingId
                ? "Update your existing blog post. Content supports Markdown."
                : "Fill out the fields below to publish a new blog post."}
            </p>
          </div>

          <form onSubmit={handleSave} className="flex flex-col gap-4 mt-1">
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
                placeholder="e.g. learning-rust (will auto-generate from title if blank)"
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
                className="w-full min-h-[320px] border border-dashed border-border rounded-lg bg-background text-foreground text-sm px-3 py-2 outline-none focus:border-foreground/50 transition-colors font-mono resize-y"
              />
            </div>

            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

            <div className="flex gap-2.5 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 flex items-center justify-center py-2.5 border border-primary rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors shadow-sm cursor-pointer disabled:opacity-50"
              >
                {submitting
                  ? editingId
                    ? "Updating..."
                    : "Publishing..."
                  : editingId
                  ? "Update Post"
                  : "Publish Post"}
              </button>
              <button
                type="button"
                onClick={handleCloseEditor}
                className="px-4 py-2.5 border border-border rounded-lg bg-background hover:bg-muted text-foreground text-sm font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
