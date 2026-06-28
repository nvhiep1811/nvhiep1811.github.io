"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isInverted, setIsInverted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappier spring physics for the trailing effect
  const springConfig = { damping: 28, stiffness: 700, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (isHidden) setIsHidden(false);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Detect hovering over interactable elements and inverted sections
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isInteractable = 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") || 
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setIsHovering(!!isInteractable);

      // Check if cursor is over a section with the accent background
      const isInvertedSection = target.closest('.bg-accent');
      setIsInverted(!!isInvertedSection);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isHidden]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          body {
            cursor: none;
          }
          a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Outer Container */}
        <motion.div
          className="rounded-full flex items-center justify-center relative"
          animate={{
            width: isHovering ? 48 : 24,
            height: isHovering ? 48 : 24,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Hover Background */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{ 
              opacity: isHovering ? 0.15 : 0,
              backgroundColor: isInverted ? "var(--background)" : "var(--accent)"
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Border Ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-[1.5px]"
            animate={{ 
              opacity: isHovering ? 0 : 1,
              borderColor: isInverted ? "var(--background)" : "var(--accent)"
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Inner Dot */}
          <motion.div
            className="rounded-full relative z-10"
            animate={{
              width: isHovering ? 0 : 6,
              height: isHovering ? 0 : 6,
              opacity: isHovering ? 0 : 1,
              backgroundColor: isInverted ? "var(--background)" : "var(--accent)"
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
