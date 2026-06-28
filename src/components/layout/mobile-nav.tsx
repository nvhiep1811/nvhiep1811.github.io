"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: { label: string; href: string }[];
  activeSection: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({ items, activeSection, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Prevent scrolling and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    onNavigate(e, href);
  };

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm relative z-50 md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md p-6 pt-24 flex flex-col md:hidden"
            >
              <motion.nav 
                className="flex flex-col gap-6 mt-8"
                variants={navVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {items.map((item) => (
                  <motion.a
                    variants={itemVariants}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavigate(e, item.href)}
                    className={cn(
                      "text-3xl font-heading font-medium tracking-tight hover:text-accent transition-colors w-fit",
                      activeSection === item.href.substring(1) ? "text-accent" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
