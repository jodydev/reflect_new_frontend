import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Card from "./Card";

export default function SwiperCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesContent = [
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
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card data={slide} activeIndex={activeIndex} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
