"use client";

import { useRef, ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function RevealOnScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
