"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: { label: string; href: string }[];
  activeSection: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({ items, activeSection, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    onNavigate(e, href);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm relative z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md p-6 pt-24 flex flex-col">
          <nav className="flex flex-col gap-6 mt-8">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigate(e, item.href)}
                className={cn(
                  "text-2xl font-medium tracking-tight hover:text-accent transition-colors w-fit",
                  activeSection === item.href.substring(1) ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
