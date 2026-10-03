import { Banner } from "@/components/banner";
import { BlogCard } from "@/components/blog-card";
import { GitHubCalendar } from "@/components/github-calendar";
import { Icons } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { ArrowUpRightIcon, MailIcon, MapPinIcon, NotebookIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const GITHUB_USERNAME = DATA.contact.social.GitHub.url.split("/").pop()!;

// Renders **word** as bold; the bio lines in DATA use this.
function withBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-y bg-hatch px-4 py-3 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  const posts = (await getBlogPosts())
    .sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt))
    .slice(0, 3);

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${DATA.name} - Backend Engineer in Pune`,
    url: DATA.url,
    description: DATA.description,
    mainEntity: {
      "@id": `${DATA.url}/#person`,
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
      image: `${DATA.url}${DATA.avatarUrl}`,
      jobTitle: "Backend Engineer",
      description: DATA.description,
      email: `mailto:${DATA.contact.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: DATA.work[0].company,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: DATA.education[0].school,
        url: DATA.education[0].href,
      },
      knowsAbout: DATA.skills,
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
      ],
    },
  };

  return (
    <main className="flex min-h-[100dvh] flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section id="hero">
        <Banner />
        <div className="space-y-6 px-4 pb-10 pt-5 sm:px-6">
          <div className="flex items-center gap-4">
            <Avatar className="ring-double size-24 shrink-0 rounded-2xl border bg-card sm:size-28">
              <AvatarImage
                alt={DATA.name}
                className="object-contain"
                src={DATA.avatarUrl}
              />
              <AvatarFallback className="rounded-2xl">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight">
                {DATA.name}
              </h1>
              <p className="text-lg text-muted-foreground">{DATA.title}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPinIcon className="size-3.5" />
                {DATA.location}
              </p>
            </div>
          </div>

          <ul className="ml-5 list-disc space-y-1.5 text-muted-foreground marker:text-muted-foreground/50">
            {DATA.bio.map((line) => (
              <li key={line}>{withBold(line)}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link href={`mailto:${DATA.contact.email}`} className="chip-dark">
              <MailIcon className="size-4" />
              Email me
            </Link>
            <Link href="/blog" className="chip">
              <NotebookIcon className="size-4" />
              Read the blog
            </Link>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Find me on{" "}
              <span className="font-medium text-foreground">socials</span>
            </p>
            <div className="flex flex-wrap gap-3">
              {(["GitHub", "LinkedIn", "X"] as const).map((name) => {
                const social = DATA.contact.social[name];
                return (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    className="chip"
                  >
                    <social.icon className="size-3.5" />
                    {social.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-card px-2 py-0.5 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col gap-4 px-4 py-8 sm:px-6">
          {DATA.work.map((work, id) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              location={work.location}
              description={work.description}
              defaultOpen={id === 0}
            />
          ))}
        </div>
      </section>

      <section id="education">
        <SectionHeading>Education</SectionHeading>
        <div className="flex flex-col gap-4 px-4 py-8 sm:px-6">
          {DATA.education.map((education) => (
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          ))}
        </div>
      </section>

      <section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6">
          {DATA.projects.map((project) => (
            <ProjectCard
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section id="blog">
          <SectionHeading>Blog</SectionHeading>
          <div className="flex flex-col gap-4 px-4 py-8 sm:px-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.metadata.title}
                publishedAt={post.metadata.publishedAt}
                summary={post.metadata.summary ?? post.metadata.description}
              />
            ))}
            <Link href="/blog" className="chip-dark mx-auto mt-2">
              View all
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
        </section>
      )}

      <section id="github">
        <SectionHeading>GitHub</SectionHeading>
        <div className="px-4 py-8 sm:px-6">
          <GitHubCalendar username={GITHUB_USERNAME} />
        </div>
      </section>

      <section id="contact">
        <SectionHeading>Contact</SectionHeading>
        <div className="space-y-4 px-4 py-8 sm:px-6">
          <p className="max-w-prose text-muted-foreground">
            Hiring for backend work, or want to talk about Kafka, Rust, or
            Postgres? Email me or send a DM on X. I reply to every real
            message.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`mailto:${DATA.contact.email}`} className="chip-dark">
              <MailIcon className="size-4" />
              {DATA.contact.email}
            </Link>
            <Link
              href={DATA.contact.social.X.url}
              target="_blank"
              className="chip"
            >
              <Icons.x className="size-3.5" />
              DM on X
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
