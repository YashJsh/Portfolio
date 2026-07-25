"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function verifyPassword(password: string) {
  return password === process.env.ADMIN_PASSWORD;
}

export type AdminPost = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
};

export async function getAdminPosts(password: string): Promise<AdminPost[]> {
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Unauthorized");
  }

  const posts = await prisma.post.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return posts.map((post) => ({
    ...post,
    publishedAt: post.publishedAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));
}

export async function savePost(
  password: string,
  id: string | null,
  title: string,
  customSlug: string,
  summary: string,
  content: string
) {
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Unauthorized");
  }

  if (!title || !summary || !content) {
    throw new Error("Title, summary, and content are required.");
  }

  const slug = (customSlug || title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (id) {
    await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        summary,
        content,
      },
    });
  } else {
    await prisma.post.create({
      data: {
        title,
        slug,
        summary,
        content,
      },
    });
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/blog/admin");
}

export async function publishPost(
  password: string,
  title: string,
  customSlug: string,
  summary: string,
  content: string
) {
  return savePost(password, null, title, customSlug, summary, content);
}

export async function deletePost(password: string, id: string) {
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Unauthorized");
  }

  await prisma.post.delete({
    where: { id },
  });

  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/blog/admin");
}

