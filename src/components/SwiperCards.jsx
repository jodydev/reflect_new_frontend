import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function SwiperCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsContent = [
    {
      title: "Slide 1 Title",
      description:
        "This is a description for the second slide. It's different from the first one.",
    },
    {
      title: "Slide 2 Title",
      description:
        "This is a description for the second slide. It's different from the first one.",
    },
    {
      title: "Slide 3 Title",
      description: "Description for slide 3. Here is some more text.",
    },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {cardsContent.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-full flex items-center justify-center bg-radial at-0-0 from-gray-700 to-gray-900 rounded-lg border border-gray-800 text-white transition-all duration-500 ease-in-out transform ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              } hover:scale-105`}
            >
              <div className="w-56 h-full  bg-gray-400/40 rounded-full shadow-[0_0_50px_rgba(255,255,255,1)] blur-lg opacity-40 absolute top-0 left-0 transform rotate-40 origin-[10%]"></div>

              <div className="flex-col px-10">
                <h2 className="mt-5 font-bold text-3xl bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  {card.title}
                </h2>
                <p className="my-10 font-bold text-sm bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
