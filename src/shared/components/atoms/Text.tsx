import React from "react";
import { cn } from "@/lib/cn";

interface Props {
  size?: "sm" | "md" | "lg";
  variant?: "secondary" | "disabled" | "white" | "primary";
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  size = "md",
  variant = "secondary",
  center = false,
  className,
  children,
}: Props) {
  const sizes = {
    sm: "ds-text-sm",
    md: "ds-text-base",
    lg: "ds-text-lg",
  };

  const variants = {
    secondary: "ds-text-secondary",
    disabled: "ds-text-disabled",
    white: "ds-text-white",
    primary: "ds-text-primary",
  };

  return (
    <p
      className={cn(
        sizes[size],
        variants[variant],
        center && "text-center",
        className
      )}
    >
      {children}
    </p>
  );
}