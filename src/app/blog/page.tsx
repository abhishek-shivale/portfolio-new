import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "engineering articles by Abhishek Shivale about backend systems, Node.js, TypeScript, databases, distributed systems, and Rust.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description:
      "Articles about backend systems, Node.js, TypeScript, databases, distributed systems, and Rust.",
    url: "/blog",
    type: "website",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <div className="border-b bg-hatch px-4 py-3 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      </div>
      <div className="flex flex-col gap-4 px-4 py-8 sm:px-6">
        {posts
          .sort((a, b) =>
            b.metadata.publishedAt.localeCompare(a.metadata.publishedAt)
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <BlogCard
                slug={post.slug}
                title={post.metadata.title}
                publishedAt={post.metadata.publishedAt}
                summary={post.metadata.summary ?? post.metadata.description}
              />
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
