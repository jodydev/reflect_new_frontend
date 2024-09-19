import React, { useEffect, useState, useRef } from "react";
import Logo3d from "../assets/images/logo_3d.png";
import AnimatedBackground from "./AnimatedBackground";
import InfoCard from "./InfoCard";






const InfoSectionTwo = () => {
  const [carouselDeg, setCarouselDeg] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const itemsCount = 4;

  const cardData = [
    { id: 0, title: "Card 1", subtitle: "This is the first card" },
    { id: 1, title: "Card 2", subtitle: "This is the second card" },
    { id: 2, title: "Card 3", subtitle: "This is the third card" },
    { id: 3, title: "Card 4", subtitle: "This is the fourth card" },
  ];

  const rotateCarousel = (degChange) => {
    setTransitioning(true);

    setCarouselDeg((prevDeg) => prevDeg + degChange);

    setSelectedIndex((prevIndex) => {
      let newIndex = (prevIndex - degChange / 90 + itemsCount) % itemsCount;
      return newIndex;
    });

    setTimeout(() => {
      setTransitioning(false);
    }, 800);
  };

  const next = () => rotateCarousel(-90);
  const prev = () => rotateCarousel(90);


  return (
    <div className="bg-gray-900 min-h-screen py-96 px-20 flex-col relative bg-img">
      {/* Sfondo Animato */}
      <AnimatedBackground numBalls={10} />

      {/* Titolo al centro */}
      <div className="absolute top-10 right-52">
        <h2 className="text-5xl font-bold text-white">Lorem ipsum dolor</h2>
        <div className="h-1 bg-primary mx-32 mt-3"></div>
        <h2 className="text-5xl font-bold text-white ms-52 mt-2">
          Lorem ipsum dolor
        </h2>
      </div>

      {/* Contenitore principale per le due sezioni */}
      <div className="flex justify-center items-start space-x-96">
        {/* Sezione delle Card */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative">
            <div
              className={`absolute right-[200px] w-full h-full flex items-center justify-center carousel-transition ${
                transitioning ? "transitioning" : ""
              }`}
              style={{
                transform: `rotate(${carouselDeg}deg)`,
              }}
            >
              {cardData.map((item, index) => {
                const isSelected = index === selectedIndex;
  
                return (
                  <>
                    <InfoCard
                      index={index}
                      item={item}
                      isSelected={isSelected}
                      selectedIndex={selectedIndex}
                      itemsCount={itemsCount}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* <Carousell /> */}

        {/* Sezione dei Bottoni */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 relative z-10">
          <div className="space-y-4 flex flex-col items-center">
            <button
              onClick={prev}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              ⬅️ Previous
            </button>
            <button
              onClick={next}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Next ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionTwo;
