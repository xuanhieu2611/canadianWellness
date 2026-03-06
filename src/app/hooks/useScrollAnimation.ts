"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".animate-on-scroll, .animate-fade-in, .stagger-children"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
