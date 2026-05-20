import type { ReactNode } from "react";

export function SectionHeader({
  pill,
  title,
  subtitle,
  center = false,
}: {
  pill: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="pill-label text-primary mb-3">{pill}</div>
      <h2
        className="font-display font-semibold text-3xl md:text-[44px] leading-[1.05] text-foreground"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-xl text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
