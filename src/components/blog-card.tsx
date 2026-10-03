import { CalendarIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  publishedAt: string;
  summary?: string;
}

export function BlogCard({ slug, title, publishedAt, summary }: Props) {
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link href={`/blog/${slug}`} className="panel group block p-4">
      <div className="flex flex-col-reverse gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
          <CalendarIcon className="size-4" />
          {date}
        </span>
      </div>
      {summary && (
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {summary}
        </p>
      )}
      <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
        Read article
        <ChevronRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
