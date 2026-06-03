"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-glow btn-ripple",
  secondary: "bg-surface text-text-primary border border-white/10 hover:border-accent/50",
  ghost: "text-text-secondary hover:text-text-primary",
  outline:
    "border border-accent/50 text-accent hover:bg-accent-muted",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function isExternal(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:");
}

type ButtonProps = ButtonBaseProps &
  (
    | (HTMLMotionProps<"button"> & { href?: undefined })
    | { href: string; prefetch?: boolean }
  );

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const content = (
      <motion.span
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.span>
    );

    if (isExternal(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return (
      <Link href={href} prefetch={(props as { prefetch?: boolean }).prefetch ?? true}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as HTMLMotionProps<"button">;

  return (
    <motion.button className={classes} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} {...buttonProps}>
      {children}
    </motion.button>
  );
}
