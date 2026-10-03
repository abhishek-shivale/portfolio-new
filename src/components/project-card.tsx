import { LazyVideo } from "@/components/lazy-video";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
}: Props) {
  // A public website means it's live; otherwise it's a repo.
  const live = links?.some((link) => link.type === "Website");

  return (
    <div className="panel flex h-full flex-col p-3">
      <Link
        href={href || "#"}
        target="_blank"
        className="relative block aspect-video overflow-hidden rounded-lg border bg-card"
      >
        {video ? (
          <LazyVideo
            src={video}
            className="pointer-events-none size-full object-cover object-top"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 640px) 420px, 100vw"
            className="object-cover object-top"
          />
        ) : null}
        <span className="absolute left-2 top-2 rounded-md bg-card/90 px-1.5 py-px text-xs font-medium text-muted-foreground backdrop-blur">
          {dates}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
            <span
              className={cn(
                "size-2 rounded-full",
                live ? "bg-emerald-500" : "bg-blue-500"
              )}
            />
            {live ? "Live" : "Open Source"}
          </span>
        </div>
        <p
          title={description}
          className="mt-1 line-clamp-2 text-sm text-muted-foreground"
        >
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded border bg-card px-1.5 py-px text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="mt-auto flex gap-4 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                {link.type}
                <ArrowUpRightIcon className="size-3.5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
