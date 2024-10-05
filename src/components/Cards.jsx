import { useState, useEffect } from "react";
import { Squircle } from "react-ios-corners";
import { BsRobot } from "../utils/icons";
import { cardData } from "../data/cardData";
import ScrollAnimation from "react-animate-on-scroll";

export default function Cards() {
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isSelected) {
        setIsSelected("1");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSelected]);

  return (
    <div className="flex flex-col items-center relative w-3/4 py-10">
      <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-10 space-y-10 md:space-y-0">
        {cardData.map((data, index) => {
          const number = (index + 1).toString();
          const isHovered = isSelected === number;

          const cardStyle = `bg-group relative flex flex-col items-center justify-start px-10 py-10 w-[350px] h-[300px] md:w-[300px] md:h-[350px] transition-all duration-500 ease-in-out transform hover:cursor-pointer ${
            isHovered
              ? "opacity-100 bg-dark text-white md:w-[400px] 2xl:w-[600px] 2xl:h-[400px]"
              : "group-hover:opacity-50 hover:opacity-100 bg-white text-dark bg-opacity-20"
          }`;

          return (
            <ScrollAnimation key={index} duration={2} animateIn="fadeInLeft">
              <Squircle className="hover:scale-110 transition-all duration-500 ease-in-out transform" radius={90}>
                <div
                  className={cardStyle}
                  onMouseEnter={() => setIsSelected(number)}
                  onMouseLeave={() => setIsSelected(null)}
                  onClick={() => setIsSelected(number)}
                >
                  <div className="flex justify-between items-center w-full mb-6 px-10">
                    <div className="w-10 h-10 flex items-start justify-start">
                      <BsRobot className={`text-4xl md:text-5xl ${isHovered ? "text-white" : "text-dark"}`} />
                    </div>
                    <div className={`text-xl 2xl:text-2xl font-bold px-4 py-2 rounded-full flex items-center justify-center bg-primary`}>
                      {number}
                    </div>
                  </div>
                  <div className="py-4 md:py-10 mx-4 2xl:mx-10 title-animation">
                    <h2 className="text-2xl 2xl:text-4xl font-bold text-start mb-5 2xl:mb-10">{data.title}</h2>
                    <p className="text-start text-sm 2xl:text-base">{data.subtitle}</p>
                  </div>
                </div>
              </Squircle>
            </ScrollAnimation>
          );
        })}
      </div>
      <ScrollAnimation duration={2} animateIn="fadeInLeft">
        <div className="flex space-x-2 mt-5">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-3 h-3 rounded-full cursor-pointer my-10 ${isSelected === num.toString() ? "bg-dark w-[30px]" : "bg-gray-400"}`}
              onClick={() => setIsSelected(num.toString())}
            />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}
