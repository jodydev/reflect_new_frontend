import { useState, useEffect, useRef } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const ScrollProgressButton = () => {
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
    <button
      id="scroll_progress"
      aria-label="scroll progress"
      ref={scrollRef}
      className={`z-50 progress-wrap ${isActive ? "active-progress" : ""} fixed bottom-6 right-6`}
      onClick={handleProgressClick}
      title="Go To Top"
    >
      <span></span>
      <svg
        className="progress-circle svg-content w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          stroke="#FFBF55"
          strokeWidth="4"
          fill="none"
          style={{
            strokeDasharray: "308.66px",
            strokeDashoffset: `${308.66 - scrollProgress * 3.0866}px`,
          }}
        />
      </svg>
      <IoMdArrowRoundUp className="text-white text-2xl absolute inset-0 m-auto" />
    </button>
  );
};

export default ScrollProgressButton;
