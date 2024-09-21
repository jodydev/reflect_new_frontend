import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import AnimatedBackground from "../AnimatedBackground";
import PrimaryButton from "../buttons/PrimaryButton";
import NumberOne from "../../assets/images/number_1.png";
import NumberTwo from "../../assets/images/number_2.png";
import NumberThree from "../../assets/images/number_3.png";

const InfoSectionTwo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 1920);
  const itemsCount = 3;
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const backgroundImages = [NumberOne, NumberTwo, NumberThree];
  const backgroundRef = useRef(null);
  const isMobile = window.innerWidth < 768; 

  const cardData = [
    { id: 0, title: "Card 1", subtitle: "This is the first card" },
    { id: 1, title: "Card 2", subtitle: "This is the second card" },
    { id: 2, title: "Card 3", subtitle: "This is the third card" },
  ];

  useEffect(() => {
    const bg = backgroundRef.current;
    gsap.fromTo(
      bg,
      { opacity: 0, scale: 1.5, x: 100 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
      }
    );
  }, [selectedIndex]);

  useEffect(() => {
    const cards = cardRefs.current;
    const angleStep = 360 / itemsCount;
    const radius = isBigScreen ? 350 : 270;

    cards.forEach((card, index) => {
      const angle = (index - selectedIndex) * angleStep;
      const radians = angle * (Math.PI / 180);
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      gsap.to(card, {
        duration: 0.5,
        ease: "power1.inOut",
        rotation: angle,
        x: x,
        y: y,
        zIndex: index === selectedIndex ? 20 : 0,
      });
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (cardRefs.current.length) {
      const timeline = gsap.timeline();
      cardRefs.current.forEach((card, index) => {
        const angle = (index - selectedIndex) * (360 / itemsCount);
        const isSelected = index === selectedIndex;

        timeline.to(card, {
          duration: 0.5,
          scale: isSelected ? 1.2 : 0.9,
          width: isMobile
            ? isSelected
              ? "200px"
              : "150px"
            : isBigScreen
            ? isSelected
              ? "400px"  
              : "350px"
            : isSelected
            ? "300px"
            : "250px",
          height: isMobile
            ? isSelected
              ? "250px"
              : "200px"
            : isBigScreen
            ? isSelected
              ? "300px"
              : "300px"
            : isSelected
            ? "250px"
            : "250px",
          opacity: isSelected ? 1 : 0.4,
          ease: "power1.inOut",
          rotation: angle,
          transformOrigin: "center center",
          stagger: 0.1,
        });
      });

      return () => timeline.kill();
    }
  }, [selectedIndex, itemsCount, isBigScreen, isMobile]);

  return (
    <div className="py-12 px-4 sm:px-20 flex-col relative bg-img">
      <AnimatedBackground numBalls={10} />

      <div className="ms-0 md:ms-32 xl:ms-96">
        <h2 className="text-2xl md:text-5xl xl:text-6xl font-bold text-white">
          Lorem ipsum dolor
        </h2>
        <div className="h-1 bg-primary mx-32 mt-3"></div>
        <h2 className="text-2xl md:text-5xl xl:text-6xl font-bold text-white ms-32 md:ms-52 mt-2">
          Lorem ipsum dolor
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative" ref={containerRef}>
            {cardData.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`absolute right-10 md:right-[400px] xl:right-[600px] top-14 xl:top-60 md:top-40 flex items-center justify-center text-white text-center rounded-2xl shadow-lg will-change-transform
                    ${
                      isSelected
                        ? "shadow-secondary border-secondary border-4 z-20 w-72 h-60"
                        : "opacity-50 scale-75 h-60 w-56"
                    }
                    bg-white bg-opacity-20 backdrop-blur-lg`}
                  style={{
                    transform: `translateX(0) translateY(0)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className="flex-col w-full h-full">
                    <div className="title bg-gray-500 rounded-t-xl">
                      <h3 className="text-lg xl:text-2xl font-semibold flex items-center justify-center pt-3">
                        {item.title}
                      </h3>
                      <p className="text-xs xl:text-md font-extralight border-b-1 border-gray-50 pb-4">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="content px-4">
                      <label
                        htmlFor="price"
                        className="mt-4 block text-xs font-medium text-start leading-6 text-white"
                      >
                        From
                      </label>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="$0.00"
                        className="block bg-gray-500 bg-opacity-40 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white sm:text-sm focus:outline-none focus:ring-0"
                      />
                    </div>

                    <p className="text-xs py-3 xl:py-6">Lorem ipsum dolor sit amet.</p>
                    <div className="mx-4">
                      <PrimaryButton text="Buy Now" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute right-0 top-[50%] md:top-[25%] xl:top-[100%] w-1/2 py-20 md:py-40 px-0 md:px-20 xl:px-60 z-10">
          <div className="flex flex-col items-center w-full h-full p-4">
            <div className="flex w-full flex-col gap-6">
              {[0, 1, 2].map((index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className={`w-full ${
                      selectedIndex === index ? "bg-gray-400 bg-opacity-40" : ""
                    } hover:bg-gray-400 hover:bg-opacity-40 transition-colors duration-300 px-6 py-3 rounded-xl text-white text-base font-base`}
                  >
                    Card {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={backgroundRef}
            className="hidden md:block absolute bottom-0 xl:bottom-[-150px] right-0 xl:left-[300px] left-0 -z-30 w-full h-screen bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[selectedIndex]})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionTwo;

// EFFETTO NUMERO 2
// useEffect(() => {
//   if (cardRefs.current.length) {
//     const timeline = gsap.timeline();

//     cardRefs.current.forEach((card, index) => {
//       const angle = (index - selectedIndex) * (360 / itemsCount);
//       const isSelected = index === selectedIndex;

//       timeline.to(card, {
//         duration: 0.7,
//         rotation: isSelected ? 0 : 45,
//         opacity: isSelected ? 1 : 0.5,
//         ease: "elastic.out(1, 0.3)",
//         transformOrigin: "center center",
//         stagger: 0.1,
//       });
//     });

//     return () => timeline.kill();
//   }
// }, [selectedIndex, itemsCount]);
