import { useState, useEffect, useRef } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function ScrollProgressButton() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setIsActive(window.scrollY > 50);
  };

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div className="z-50 fixed bottom-6 right-6">
      {/* Cerchio esterno rotante */}
      {isActive && (
        <div className="animate-spin rounded-full border-4 border-transparent border-t-primary w-16 h-16 absolute -top-2 -left-2"></div>
      )}
      
      {/* Pulsante */}
      <button
        ref={scrollRef}
        className={`p-3 text-white rounded-full shadow-lg transition-transform duration-300 ${
          isActive ? "transform scale-115" : "opacity-0"
        }`}
        onClick={handleProgressClick}
      >
        <IoMdArrowRoundUp className="text-2xl text-white" />
      </button>
    </div>

  );
}
