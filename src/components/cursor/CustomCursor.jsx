"use client";
import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const [isCursorBig, setIsCursorBig] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCursorHover = () => {
    setIsCursorHovering(true);
  };

  const handleCursorLeave = () => {
    setIsCursorHovering(false);
  };

  const handleMouseEnterTitle = () => {
    setIsCursorBig(true);
  };

  const handleMouseLeaveTitle = () => {
    setIsCursorBig(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const titleElements = document.querySelectorAll(".zig");
    const clickableElements = document.querySelectorAll("a, button");

    titleElements.forEach((titleElement) => {
      titleElement.addEventListener("mouseover", handleMouseEnterTitle);
      titleElement.addEventListener("mouseout", handleMouseLeaveTitle);
    });

    clickableElements.forEach((clickableElement) => {
      clickableElement.addEventListener("mouseenter", handleCursorHover);
      clickableElement.addEventListener("mouseleave", handleCursorLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      titleElements.forEach((titleElement) => {
        titleElement.removeEventListener("mouseover", handleMouseEnterTitle);
        titleElement.removeEventListener("mouseout", handleMouseLeaveTitle);
      });

      clickableElements.forEach((clickableElement) => {
        clickableElement.removeEventListener("mouseenter", handleCursorHover);
        clickableElement.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, [cursorPosition]);

  return (
    <>
      <div
        className={`mouseCursor cursor-outer ${isCursorHovering ? "cursor-hover" : ""} ${isCursorBig ? "cursor-big" : ""}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <div
        className={`mouseCursor cursor-inner ${isCursorHovering ? "cursor-hover" : ""} ${isCursorBig ? "cursor-big" : ""}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      >
        <span>Drag</span>
      </div>
    </>
  );
};

export default CustomCursor;
