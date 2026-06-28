"use client";

import { ExternalLink } from "../ui/external-link";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p className="text-muted-foreground text-sm">{profile.title}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <ExternalLink href={profile.socials.github.url} hideIcon className="hover:text-accent">
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.socials.linkedin.url} hideIcon className="hover:text-accent">
            LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.socials.email.url} hideIcon className="hover:text-accent">
            Email
          </ExternalLink>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>&copy; {currentYear}</span>
          <a
            href="#home"
            className="hover:text-accent transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
