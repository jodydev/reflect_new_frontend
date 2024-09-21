import BannerElement from "../assets/images/banner_effect.png";
import LineImage from "../assets/images/line_effect.png";
import Spline from "@splinetool/react-spline";
import ScrollAnimation from "react-animate-on-scroll";

export default function Hero() {
  const isBigScreen = window.matchMedia("(min-width: 1920px)").matches;
  const isMediumScreen = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section className="relative my-10 md:my-4 h-96 md:h-full flex items-center">
      <div className="relative z-10 w-full flex justify-center lg:justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start md:gap-x-40">
            <div className="w-full lg:w-6/12 mb-8 lg:mb-0 xl:mb-48">
              <div className="text-center lg:text-left xl:mt-32">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold text-white mt-5 mb-4 title-animation">
                  <span className="block">Lorem</span> LoremLorem{" "}
                  <span className="relative">
                    Lorem Lorem
                    <img
                      src={BannerElement}
                      className="absolute w-full h-full top-0 bottom-0 -z-10 transition-transform"
                    />
                  </span>
                </h1>
                <p className="text-sm sm:text-lg lg:text-base xl:text-xl text-gray-300 mt-8 sm:mt-10 xl:mt-16 mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos excepturi neque sunt, magni numquam sapiente
                  veniam dolorum accusamus.
                </p>
              </div>
            </div>
            {/* Spline 3D Element */}
            <div className="hidden md:block w-full lg:w-1/2 relative z-0">
                <Spline
                  style={{
                    width: isBigScreen ? "700px" : isMediumScreen ? "400px" : "425px",
                    height: isBigScreen ? "700px" : isMediumScreen ? "400px" : "425px",
                  }}
                  scene="https://prod.spline.design/E4YD-HYnDoP6Ss86/scene.splinecode"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
