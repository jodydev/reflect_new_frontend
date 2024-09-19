import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Logo3d from "../assets/images/logo_3d.png";
import AnimatedBackground from "./AnimatedBackground";
import PrimaryButton from "./buttons/PrimaryButton";

const InfoSectionTwo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemsCount = 4;
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const cardData = [
    { id: 0, title: "Card 1", subtitle: "This is the first card" },
    { id: 1, title: "Card 2", subtitle: "This is the second card" },
    { id: 2, title: "Card 3", subtitle: "This is the third card" },
    { id: 3, title: "Card 4", subtitle: "This is the fourth card" },
  ];

  const next = () => {
    const newIndex = (selectedIndex + 1) % itemsCount;
    setSelectedIndex(newIndex);
  };

  const prev = () => {
    const newIndex = (selectedIndex - 1 + itemsCount) % itemsCount;
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const cards = cardRefs.current;
    const angleStep = 360 / itemsCount;
    const radius = 240; // Distance from the center

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
    if (cardRefs.current.length) {
      const timeline = gsap.timeline();
  
      cardRefs.current.forEach((card, index) => {
        const angle = (index - selectedIndex) * (360 / itemsCount);
        const isSelected = index === selectedIndex;
  
        timeline.to(card, {
          duration: 1,
          scale: isSelected ? 1 : 0.5,
          opacity: isSelected ? 1 : 0.3,
          ease: "power1.inOut",
          rotation: angle,
          transformOrigin: "center center",
          stagger: 0.1,
        });
      });
  
      return () => timeline.kill();
    }
  }, [selectedIndex, itemsCount]);
  

  return (
    <div className="bg-gray-900 min-h-screen py-96 px-20 flex-col relative bg-img">
      <AnimatedBackground numBalls={10} />

      <div className="absolute top-10 right-52">
        <h2 className="text-5xl font-bold text-white">Lorem ipsum dolor</h2>
        <div className="h-1 bg-primary mx-32 mt-3"></div>
        <h2 className="text-5xl font-bold text-white ms-52 mt-2">Lorem ipsum dolor</h2>
      </div>

      <div className="flex justify-center items-start space-x-96">
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative" ref={containerRef}>
            {cardData.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`right-0 absolute flex items-center justify-center text-white text-center rounded-2xl shadow-lg will-change-transform
                    ${isSelected ? "shadow-secondary border-secondary border-4 shadow-2xl z-20 w-[350px] h-[300px]" : "opacity-30 scale-0 h-[300px] w-[300px]"}
                    bg-white bg-opacity-20 backdrop-blur-lg`}
                  style={{
                    transform: `translateX(0) translateY(0)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {isSelected ? (
                    <div className="flex-col w-full h-full">
                      <div className="title bg-gray-500 rounded-t-xl">
                        <h3 className="text-xl font-semibold flex items-center justify-center pt-3">{item.title}</h3>
                        <p className="text-xs font-extralight border-b-1 border-gray-50 pb-4">{item.subtitle}</p>
                      </div>
                      <div className="content px-10">
                        <label htmlFor="price" className="mt-4 block text-xs font-medium text-start leading-6 text-white">From</label>
                        <div className="relative rounded-md shadow-sm">
                          <input
                            id="price"
                            name="price"
                            type="text"
                            placeholder="0.00"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <p className="text-xs border-t-1 border-gray-50 py-6">Lorem ipsum dolor sit amet.</p>
                      <div className="mx-5">
                        <PrimaryButton text="Buy Now" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <img src={Logo3d} className="w-40 h-40" alt="Item logo" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-8 relative z-10">
          <div className="space-y-4 flex flex-col items-center">
            <button onClick={prev} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">⬅️ Previous</button>
            <button onClick={next} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">Next ➡️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionTwo;
