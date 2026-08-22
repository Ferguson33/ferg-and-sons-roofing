type LogoProps = {
  className?: string;
  markClassName?: string;
  variant?: "full" | "stacked" | "mark";
  invert?: boolean;
};

export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Ferg and Sons Roofing"
    >
      <rect x="4" y="4" width="56" height="56" rx="8" fill="#1F2124" />
      <path
        d="M10 38 L32 16 L54 38 L48 38 L32 23 L16 38 Z"
        fill="#C44536"
      />
      <rect x="22" y="38" width="20" height="14" fill="#8B939C" />
      <circle cx="32" cy="45" r="2.2" fill="#1F2124" />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-11 w-11",
  variant = "full",
  invert = false,
}: LogoProps) {
  const name = invert ? "text-white" : "text-charcoal";
  const sub = invert ? "text-steel-light" : "text-steel";

  if (variant === "mark") return <Mark className={markClassName} />;

  const stacked = variant === "stacked";

  return (
    <span
      className={`inline-flex items-center gap-3 ${stacked ? "flex-col text-center" : ""} ${className}`}
    >
      <Mark className={markClassName} />
      <span className={stacked ? "" : "leading-none"}>
        <span
          className={`block font-display uppercase tracking-[0.12em] ${name} ${stacked ? "text-2xl" : "text-[1.3rem]"}`}
        >
          Ferg and Sons
        </span>
        <span
          className={`block font-display uppercase tracking-[0.22em] ${sub} ${stacked ? "text-xs mt-1" : "text-[0.62rem] mt-1"}`}
        >
          Roofing, LLC
        </span>
      </span>
    </span>
  );
}
