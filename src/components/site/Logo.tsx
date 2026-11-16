import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 40"
        aria-hidden="true"
        className={cn("h-10 w-12 shrink-0", inverted ? "text-primary-foreground" : "text-brand")}
      >
        <path
          d="M4 22 24 6l20 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M34 9.5V5h5v8.5" fill="currentColor" />
        <rect x="19" y="20" width="10" height="10" rx="1" fill="currentColor" />
        <path d="M24 20v10M19 25h10" className="stroke-background" strokeWidth="1.4" />
        <path
          d="M40 1.5l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z"
          className="fill-gold"
        />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.62rem] font-semibold uppercase tracking-[0.25em]",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Dienstleistungen
        </span>
        <span className="truncate font-display text-xl font-extrabold italic sm:text-2xl">
          <span className={inverted ? "text-primary-foreground" : "text-navy"}>Kurti </span>
          <span className="text-gold">Service</span>
        </span>
      </span>
    </span>
  );
}
