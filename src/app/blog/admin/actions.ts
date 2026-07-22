"use server";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export async function verifyPassword(password: string) {
  return password === process.env.ADMIN_PASSWORD;
}

export async function publishPost(
  password: string,
  title: string,
  customSlug: string,
  summary: string,
  content: string
) {
  // Always verify password on server-side before performing DB writes!
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Unauthorized");
  }

  if (!title || !summary || !content) {
    throw new Error("Title, summary, and content are required.");
  }

  // Generate slug from title if not specified
  const slug = (customSlug || title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  await prisma.post.create({
    data: {
      title,
      slug,
      summary,
      content,
    },
  });

  redirect("/blog");
}
