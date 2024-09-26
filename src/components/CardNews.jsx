import { Squircle } from "react-ios-corners";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "../assets/images/yellow_1.png";

export default function CardNews({ card }) {
  return (
    <ScrollAnimation
      duration={2}
      animateIn={`${card.id === 1 ? "fadeInLeft" : card.id === 2 ? "fadeInUp" : "fadeInRight"}`}
    >
      <Squircle radius={90}>
        <div className="md:w-[350px] 2xl:w-[400px] md:h-[475px] 2xl:h-[500px] bg-white bg-opacity-40">
          <Squircle radius={90}>
            <img
              src={Image}
              alt="image"
              className="p-5 w-full h-full 2xl-h-40 object-cover hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </Squircle>
          <div className="px-5">
            <ScrollAnimation duration={1} animateIn="fadeInRight">
              <div className="separetor h-1 w-1/2 px-20 bg-primary mb-3"></div>
            </ScrollAnimation>
            <Squircle className="bg-primary w-[20%]" radius={90}>
              <span className="w-10 text-white ms-2 text-xs font-semibold">
                {card.tag || "Finance"}
              </span>
            </Squircle>

            <h3 className="title-animation text-xl 2xl:text-2xl font-bold text-gray-900 mt-3">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{card.subtitle}</p>
          </div>
        </div>
      </Squircle>
    </ScrollAnimation>
  );
}
