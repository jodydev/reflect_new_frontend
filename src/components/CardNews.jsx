import { Squircle } from "react-ios-corners";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "../assets/images/yellow_1.png";

export default function CardNews({ card }) {
  const isMobile = window.innerWidth < 768;

  return (
    <ScrollAnimation
      duration={2}
      animateIn={
        card.id === 1
          ? "fadeInLeft"
          : card.id === 2
          ? isMobile
            ? "fadeInRight"
            : "fadeInUp"
          : card.id === 3 && isMobile
          ? "fadeInLeft"
          : "fadeInRight"
      }
    >
      <Squircle radius={90}>
        <div className="w-full h-full md:w-[350px] 2xl:w-[400px] md:h-[475px] 2xl:h-[500px] bg-white bg-opacity-40">
          <Squircle radius={90}>
            <img
              src={Image}
              alt="image"
              className="p-5 w-96 h-full 2xl-h-40 object-cover hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </Squircle>
          <div className="p-5 md:p-10">
            <ScrollAnimation duration={1} animateIn="fadeInRight">
              <div className="separetor h-1 w-1/2 px-20 bg-primary mb-3"></div>
            </ScrollAnimation>
            <Squircle className="bg-primary w-[25%] md:w-[20%]" radius={90}>
              <span className="w-10 text-white ms-2 text-xs font-semibold">
                {card.tag || "Finance"}
              </span>
            </Squircle>

            <h3 className="title-animation text-xl 2xl:text-2xl font-bold text-gray-900 mt-3">
              {card.title}
            </h3>
          </div>
        </div>
      </Squircle>
    </ScrollAnimation>
  );
}
