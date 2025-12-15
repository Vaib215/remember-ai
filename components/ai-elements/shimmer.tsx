"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export type ShimmerProps = ComponentProps<"span"> & {
  duration?: number;
};

export const Shimmer = ({ className, duration = 2, children, ...props }: ShimmerProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1",
      "relative overflow-hidden",
      className
    )}
    {...props}
  >
    {children}
    <span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"
      style={{
        animationDuration: `${duration}s`,
      }}
    />
  </span>
);
