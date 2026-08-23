import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-14 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Ferg & Sons Roofing, LLC"
      width={1306}
      height={1030}
      priority={priority}
      className={className}
      sizes="180px"
    />
  );
}
