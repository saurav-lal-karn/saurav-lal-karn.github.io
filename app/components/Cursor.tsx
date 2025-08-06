"use client";

import { useEffect, useState, useCallback } from "react";

interface CursorProps {
  size?: number;
  color?: string;
  hoverColor?: string;
}

const Cursor = ({
  size = 16,
  color = "#ffffff",
  hoverColor = "#ff6b6b",
}: CursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Use requestAnimationFrame to sync with browser's render cycle
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleElementHover = useCallback((e: Event) => {
    const target = e.target as HTMLElement;

    // Skip if target is a canvas or 3D element
    if (target.tagName === "CANVAS" || target.closest("canvas")) {
      setIsHovering(false);
      return;
    }

    const isInteractive =
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT" ||
      !!target.closest("[data-cursor-hover]") ||
      target.style.cursor === "pointer";

    setIsHovering(isInteractive);
  }, []);

  const handleElementLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    // Add event listeners with passive option for better performance
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover, {
      passive: true,
    });
    document.addEventListener("mouseout", handleElementLeave);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseout", handleElementLeave);
      document.body.style.cursor = "auto";
    };
  }, [
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleElementHover,
    handleElementLeave,
  ]);

  const getCursorColor = () => {
    return isHovering ? hoverColor : color;
  };

  const getCursorSize = () => {
    return isHovering ? size * 1.2 : size;
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 rounded-full transition-all duration-150 ease-out cursor-optimized"
      style={{
        left: position.x - getCursorSize() / 2,
        top: position.y - getCursorSize() / 2,
        width: getCursorSize(),
        height: getCursorSize(),
        backgroundColor: getCursorColor(),
        opacity: 0.8,
      }}
    />
  );
};

export default Cursor;
