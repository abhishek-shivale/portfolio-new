import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVELS = [
  "bg-muted",
  "bg-foreground/25",
  "bg-foreground/45",
  "bg-foreground/70",
  "bg-foreground",
];

// ponytail: public proxy for GitHub's contribution graph; swap for the GitHub GraphQL API if it goes away.
async function getContributions(username: string) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 60 * 60 * 24 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as {
      total: { lastYear: number };
      contributions: Day[];
    };
  } catch {
    return null;
  }
}

export async function GitHubCalendar({ username }: { username: string }) {
  const data = await getContributions(username);
  if (!data?.contributions.length) return null;

  // Pad the first column so each row is a weekday (Sun..Sat).
  const pad = new Date(data.contributions[0].date).getUTCDay();
  const cells: (Day | null)[] = [...Array(pad).fill(null), ...data.contributions];

  return (
    <div className="panel p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Icons.github className="size-6" />
          <div>
            <p className="font-semibold leading-tight">
              {data.total.lastYear.toLocaleString("en-US")} contributions
            </p>
            <p className="text-xs text-muted-foreground">
              in the past 12 months
            </p>
          </div>
        </div>
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-full border bg-card px-2.5 py-0.5 text-xs text-muted-foreground hover:text-foreground"
        >
          @{username}
          <ArrowUpRightIcon className="size-3" />
        </Link>
      </div>
      <div className="mt-4 overflow-x-auto pb-1">
        <div className="grid w-max grid-flow-col grid-rows-7 gap-[3px]">
          {cells.map((day, i) =>
            day ? (
              <div
                key={day.date}
                title={`${day.count} contributions on ${day.date}`}
                className={cn("size-[10px] rounded-[2px]", LEVELS[day.level])}
              />
            ) : (
              <div key={`pad-${i}`} className="size-[10px]" />
            )
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-end gap-1 text-xs text-muted-foreground">
        Less
        {LEVELS.map((level) => (
          <span key={level} className={cn("size-[10px] rounded-[2px]", level)} />
        ))}
        More
      </div>
    </div>
  );
}
