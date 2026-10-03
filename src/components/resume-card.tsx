"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  location?: string;
  description?: string;
  defaultOpen?: boolean;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  location,
  description,
  defaultOpen = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultOpen);
  const points = description?.split(/(?<=\.)\s+/);

  return (
    <div className="panel">
      <div className="flex items-start gap-3 p-4">
        <Avatar className="size-11 shrink-0 rounded-lg border bg-card">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback className="rounded-lg">{altText[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold leading-tight">
              {href && href !== "#" ? (
                <Link href={href} target="_blank" className="hover:underline">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            {badges?.map((badge) => (
              <span
                key={badge}
                className="rounded-md border bg-card px-1.5 py-px text-xs text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          {subtitle && (
            <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-0.5 text-right text-xs sm:text-sm">
          <span className="tabular-nums">{period}</span>
          {location && (
            <span className="text-muted-foreground">{location}</span>
          )}
          {description && (
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Hide details" : "Show details"}
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 rounded p-0.5 text-muted-foreground hover:text-foreground"
            >
              <ChevronDownIcon
                className={cn(
                  "size-4 transition-transform",
                  isExpanded && "rotate-180"
                )}
              />
            </button>
          )}
        </div>
      </div>
      {points && (
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <ul className="ml-4 list-disc space-y-1 border-t px-4 py-3 text-sm text-muted-foreground marker:text-muted-foreground/60">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
