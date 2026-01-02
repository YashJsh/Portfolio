import { BlogCard } from "./blog-card";

export const blogs = [
    {
        title: "Ownership in Rust",
        date: "24 April, 2025",
        href: "https://medium.com/@yaxj28/ownership-in-rust-5a37863f0a89",
        cover: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mNtID2aKZOMxLcprtu0n7g.png",
        source: "Medium",
        external: true,
    },
    {
      title: "Explaining GPT to a 5-Year-Old",
      date: "12 Aug, 2025",
      href: "https://yashwrites.hashnode.dev/explaining-gpt-to-a-5-year-old",
      cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754975331784/8360cef6-e8f5-4e16-84bb-6d05ab0e4c47.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      source: "Hashnode",
      external: true,
    },
    {
        title: "Explaining Vector Embedding to my mom",
        date: "12 Aug, 2025",
        href: "https://yashwrites.hashnode.dev/explaining-vector-embedding-to-my-mom",
        cover: "https://www.pinecone.io/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fvr8gru94%2Fproduction%2Fe016bbd4d7d57ff27e261adf1e254d2d3c609aac-2447x849.png&w=3840&q=75",
        source: "Hashnode",
        external: true,
    },
    {
        title: "Tokenization : Where machine starts to understand us",
        date: "13 August, 2025",
        href: "https://yashwrites.hashnode.dev/tokenization-where-machine-starts-to-understand-us",
        source: "Hashnode",
        external: true,
    },
    {
        title: "Building a Thinking Model from a Non-Thinking Model Using Chain-of-Thought.",
        date: "15 August, 2025",
        href: "https://yashwrites.hashnode.dev/building-a-thinking-model-from-a-non-thinking-model-using-chain-of-thought",
        source: "Hashnode",
        external: true,
    },
    {
        title: "Why System Prompts Matter and How Prompting Types Shape AI Responses",
        date: "15 August, 2025",
        href: "https://yashwrites.hashnode.dev/why-system-prompts-matter-and-how-prompting-types-shape-ai-responses",
        source: "Hashnode",
        external: true,
    }, 
];
  

export function BlogGrid() {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.href} {...blog} />
      ))}
    </section>
  );
}
