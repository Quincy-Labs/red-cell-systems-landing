import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  href?: string;
  variant?: "red" | "black";
  invert?: boolean;
}

const logoSrc = {
  red: "/rcs-logo-red.svg",
  black: "/rcs-logo-black.svg",
} as const;

const sizes = {
  sm: { image: 80, text: "text-sm" },
  md: { image: 80, text: "text-base" },
  lg: { image: 64, text: "text-lg" },
};

export function Logo({
  className,
  size = "md",
  showWordmark = true,
  href = "/",
  variant = "red",
  invert = false,
}: LogoProps) {
  const { image, text } = sizes[size];

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Image
        src={logoSrc[variant]}
        alt="Red Cell Systems"
        width={image}
        height={image}
        unoptimized={logoSrc[variant].endsWith(".svg")}
        className={cn(
          "shrink-0 object-contain",
          invert && "brightness-0 invert",
        )}
        priority
      />
      {showWordmark && (
        <span
          className={cn(
            "font-serif font-medium tracking-[0.12em] uppercase",
            text,
          )}
        >
          Red Cell Systems
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">
        {content}
      </Link>
    );
  }

  return content;
}
