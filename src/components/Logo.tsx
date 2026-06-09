import Link from "next/link";
import { IconBall } from "@tabler/icons-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pitch-accent to-orange-600 font-display text-lg font-bold text-pitch shadow-lg shadow-pitch-accent/30 transition group-hover:scale-110">
        <IconBall className="h-6 w-6" stroke={2.5} />
      </div>
      {!compact && (
        <div className="leading-tight">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            EXPRESS
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-pitch-accent">
            {" "}
            FOOT
          </span>
          <p className="text-[10px] uppercase tracking-widest text-pitch-muted">
            Football News 24/7
          </p>
        </div>
      )}
    </Link>
  );
}
