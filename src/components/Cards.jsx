import { useState, useEffect } from "react";
import { Squircle } from "react-ios-corners";
import { cardData } from "../data/cardData";
import ScrollAnimation from "react-animate-on-scroll";

export default function Cards() {
  const [isSelected, setIsSelected] = useState("1");

  return (
    <div
      id="card_section_one"
      className="flex flex-col items-center relative w-3/4 py-10"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 fh:space-x-20">
        {cardData.map((data, index) => {
          const number = (index + 1).toString();
          const isHovered = isSelected === number;
          const IconComponent = data.icon;

          return (
            <Squircle
              key={index}
              className="hover:scale-105 transition-all duration-500 ease-in-out transform bg-gray bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 backdrop-contrast-100"
              radius={90}
            >
              <div
                className={`${
                  isHovered
                    ? "bg-dark text-white w-[360px] md:w-[480px] fh:w-[600px] 2xl:w-[700px] transition-all"
                    : "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 backdrop-contrast-100"
                } relative flex flex-col items-center justify-start px-8 py-10 w-[300px] h-[320px] md:w-[380px] md:h-[340px] fh:w-[450px] fh:h-[380px] 2xl:w-[500px] 2xl:h-[450px] transition-all duration-500 ease-in-out transform hover:cursor-pointer`}
                onMouseEnter={() => setIsSelected(number)}
                onMouseLeave={() => setIsSelected("1")}
                onClick={() => setIsSelected(number)}
              >
                <div className="flex justify-between items-center w-full mb-6 px-10">
                  <div className="w-10 h-10 flex items-start justify-start">
                    <p
                      className={`text-4xl md:text-5xl ${
                        isHovered ? "text-white" : "text-dark"
                      }`}
                    >
                      <IconComponent className="w-full h-full" />
                    </p>
                  </div>
                  <div
                    className={`text-xl 2xl:text-2xl font-bold px-4 py-2 rounded-full flex items-center justify-center bg-primary`}
                  >
                    {number}
                  </div>
                </div>
                <div className="mt-10 2xl:mt-20">
                  <h2 className="text-center text-2xl 2xl:text-4xl font-bold mb-5 2xl:mb-10 text-no-wrap">
                    {data.title}
                  </h2>
                  <p
                    className={`leading-4 tracking-normal text-center text-sm 2xl:text-lg text-no-wrap ${
                      isHovered ? "block" : "hidden"
                    }`}
                  >
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </Squircle>
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
