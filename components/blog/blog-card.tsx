
import Link from "next/link";
import { ExternalLink, Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
    title: string;
    date: string;
    cover?: string;
    href: string;
    source?: string;
    external?: boolean;
}


export const BlogCard = ({
  title,
  date,
  cover,
  href,
  source,
  external,
}: BlogCardProps) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block space-y-3"
    >
      {/* Cover / Fallback */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
        {cover ? (
          <img
            src={cover}
            alt={title}
            className="
              absolute inset-0
              h-full w-full
              object-cover
              opacity-90
              transition-transform
              group-hover:scale-[1.02]
            "
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 text-center">
            <h3 className="text-lg font-medium leading-snug text-foreground/80">
              {title}
            </h3>
          </div>
        )}

        {/* Icons */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-background/80 p-1 backdrop-blur">
          {external && <ExternalLink className="h-3.5 w-3.5" />}
          <Pin className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>

      {/* Meta */}
      <div className="space-y-1">
        <h3 className="text-base font-medium leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{date}</span>
          {source && <Badge variant="secondary">{source}</Badge>}
        </div>
      </div>
    </Link>
  );
};
