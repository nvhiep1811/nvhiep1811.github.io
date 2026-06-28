"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink } from "./external-link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "group relative flex flex-col rounded-3xl bg-card border border-border shadow-sm overflow-hidden transition-shadow hover:shadow-md",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 119, 198, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 p-8 flex-1 flex flex-col pointer-events-none">
        <div className="pointer-events-auto flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
              <span>{project.role}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        <p className="pointer-events-auto text-muted-foreground text-lg mb-8 leading-relaxed">
          {project.summary}
        </p>

        {project.responsibilities && project.responsibilities.length > 0 && (
          <ul className="pointer-events-auto space-y-3 mb-8 flex-1">
            {project.responsibilities.map((resp, i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <span className="text-accent mt-1.5">•</span>
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pointer-events-auto flex flex-col gap-6 mt-auto pt-6 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md bg-muted/50 border border-border/50 text-foreground text-sm font-mono transition-colors group-hover:bg-muted group-hover:border-border"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div>
            <ExternalLink href={project.repository} className="text-accent font-semibold relative z-20">
              View Repository
            </ExternalLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
