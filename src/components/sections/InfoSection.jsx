import Spline from "@splinetool/react-spline";
import SwiperCards from "../SwiperCards";
import ScrollAnimation from "react-animate-on-scroll";
import LineImage from "../../assets/images/line_effect.png";
import AnimatedBackground from "../AnimatedBackground";
import PrimaryButton from "../buttons/PrimaryButton";

export default function InfoSection() {
  const isBigScreen = window.matchMedia("(min-width: 1920px)").matches;

  return (
    <section className=" py-12 bg-img relative">
      {/* Sfondo Animato */}
      <AnimatedBackground numBalls={10} />

      <div className="flex flex-col items-center justify-start min-h-screen relative z-10 ">
        <div className=" text-center my-5 px-6 xl:my-20">
          <h2 className="title-animation text-3xl lg:text-5xl xl:text-7xl font-bold text-white mb-6 xl:mb-10">
            Lorem <span className="text-gray-500">Lorem ipsum</span>
          </h2>
          <p className="title-animation text-white text-xs lg:text-sm xl:text-lg mx-10 md:mx-60 mb-5 max-w-4xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum turpis porta.
            Nam a est in lacus tincidunt elementum. In hac habitasse platea
            malesuada lorem maximus mauris scelerisque, at rutrum turpis porta.
          </p>
          <div className="my-6 mx-20 lg:my-10 lg:mx-96 ">
            <PrimaryButton text="Lorem" />
          </div>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 px-6 relative">
          {/* Spline 3D Element */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative z-0">
            <ScrollAnimation duration={2} animateIn="fadeInLeft">
              <img
                src={LineImage}
                className="absolute bottom-0 top-[50%] inset-0 -z-10 w-full object-cover"
                alt="Line Background"
              />
              <Spline
                style={{
                  width: isBigScreen ? "600px" : "425px",
                  height: isBigScreen ? "600px" : "425px",
                }}
                scene="https://prod.spline.design/E4YD-HYnDoP6Ss86/scene.splinecode"
              />
            </ScrollAnimation>
          </div>

          {/* Swiper Cards */}
          <div className="w-full lg:w-1/2 max-w-lg relative z-10">
            <ScrollAnimation duration={2} animateIn="fadeInRight">
              <SwiperCards />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
