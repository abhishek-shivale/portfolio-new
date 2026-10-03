import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import MermaidRenderer from "@/components/mermaid-renderer";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og.png`;

  return {
    title,
    description,
    authors: [{ name: DATA.name, url: DATA.url }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      authors: [DATA.name],
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const words = post.source.replace(/<[^>]+>/g, " ").split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(words / 220));

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og.png`,
            url: `${DATA.url}/blog/${post.slug}`,
            mainEntityOfPage: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@id": `${DATA.url}/#person`,
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
            },
            publisher: {
              "@id": `${DATA.url}/#person`,
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
            },
          }),
        }}
      />
      <header className="border-b bg-hatch px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-[720px]">
          <Link
            href="/blog"
            className="chip mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="size-4" />
            All posts
          </Link>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {post.metadata.title}
          </h1>
          {post.metadata.summary && (
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {post.metadata.summary}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="size-4" />
              {formatDate(post.metadata.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-4" />
              {readingMinutes} min read
            </span>
          </div>
        </div>
      </header>
      <article
        className="prose mx-auto max-w-[768px] px-4 py-10 dark:prose-invert sm:px-6 prose-headings:scroll-mt-24 prose-headings:tracking-tight prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
      <div className="mx-auto max-w-[768px] px-4 pb-12 sm:px-6">
        <div className="panel flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">Thanks for reading.</p>
            <p className="text-sm text-muted-foreground">
              Questions or corrections? Email me.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href={`mailto:${DATA.contact.email}`} className="chip-dark">
              <MailIcon className="size-4" />
              Email me
            </Link>
            <Link href="/blog" className="chip">
              More posts
            </Link>
          </div>
        </div>
      </div>
      <MermaidRenderer />
    </section>
  );
}
