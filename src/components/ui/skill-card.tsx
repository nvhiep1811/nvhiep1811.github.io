"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  skills: string[];
  className?: string;
}

export function SkillCard({ title, skills, className }: SkillCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border overflow-hidden shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 119, 198, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-foreground text-sm font-medium transition-colors group-hover:bg-muted group-hover:border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
