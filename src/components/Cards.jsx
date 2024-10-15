import { useState, useEffect } from "react";
import { Squircle } from "react-ios-corners";
import { cardData } from "../data/cardData";
import ScrollAnimation from "react-animate-on-scroll";

export default function Cards() {
  const [isSelected, setIsSelected] = useState("1");

  return (
    <div className="flex flex-col items-center relative w-3/4 py-10">
      <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-10 2xl:space-x-20 space-y-10 md:space-y-0">
        {cardData.map((data, index) => {
          const number = (index + 1).toString();
          const isHovered = isSelected === number;
          const IconComponent = data.icon;

          return (
            // <ScrollAnimation id="card" key={index} duration={2} animateIn="fadeInLeft">
              <Squircle
                className="hover:scale-105 transition-all duration-500 ease-in-out transform bg-gray bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 backdrop-contrast-100"
                radius={90}
              >
                <div
                  className={`${isHovered ? " bg-dark text-white md:w-[400px] 2xl:w-[500px]" : "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 backdrop-contrast-100" }  relative flex flex-col items-center justify-start px-10 py-16 w-[320px] h-[340px] md:w-[300px] md:h-[350px] 2xl:w-[400px] 2xl:h-[400px] transition-all duration-500 ease-in-out transform hover:cursor-pointer`}
                  onMouseEnter={() => setIsSelected(number)}
                  onMouseLeave={() => setIsSelected("1")}
                  onClick={() => setIsSelected(number)}
                >
                  <div className="flex justify-between items-center w-full mb-6 px-10">
                    <div className="w-10 h-10 flex items-start justify-start">
                      <p className={`text-4xl md:text-5xl ${isHovered ? "text-white" : "text-dark"}`}>
                        <IconComponent className="w-full h-full" />
                      </p>
                    </div>
                    <div
                      className={`text-xl 2xl:text-2xl font-bold px-4 py-2 rounded-full flex items-center justify-center bg-primary`}
                    >
                      {number}
                    </div>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-center text-2xl 2xl:text-4xl font-bold mb-5 2xl:mb-10 title-animation text-no-wrap">
                      {data.title}
                    </h2>
                    <p className={`leading-4 tracking-normal text-center text-sm 2xl:text-lg text-no-wrap ${isHovered ? "block" : "hidden"}`}>
                      {data.subtitle}
                    </p>
                  </div>
                </div>
              </Squircle>
            // </ScrollAnimation>
          );
        })}

      </div>
      <ScrollAnimation duration={2} animateIn="fadeInLeft">
        <div className="flex space-x-2 mt-5">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-3 h-3 rounded-full cursor-pointer my-10 ${
                isSelected === num.toString()
                  ? "bg-dark w-[30px]"
                  : "bg-gray-400"
              }`}
              onClick={() => setIsSelected(num.toString())}
            />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}
