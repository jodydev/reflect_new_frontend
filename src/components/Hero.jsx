import BannerElement from "../assets/images/banner_effect.png";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const isBigScreen = window.matchMedia("(min-width: 1920px)").matches;
  const isMediumScreen = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section className="relative h-full flex items-center lg:items-start">
      <div className="relative z-10 w-full h-[70vh] 2xl:h-full flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-40 items-center">
            {/* Text Content */}
            <div className="w-full mb-8 lg:mb-0 xl:my-56">
              <div className="text-center lg:text-left xl:mt-32">
                <h1 className="text-5xl xl:text-7xl 2xl:text-8xl font-extrabold text-white mt-5 mb-4 title-animation">
                  <span className="block">Lorem</span> LoremLorem{" "}
                  <span className="relative">
                    Lorem Lorem
                    <img
                      src={BannerElement}
                      className="absolute w-full h-full top-0 bottom-0 -z-10 transition-transform"
                    />
                  </span>
                </h1>
                <p className="text-sm xl:text-xl text-gray-300 mt-8 sm:mt-10 xl:mt-16 mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos excepturi neque sunt, magni numquam sapiente
                  veniam dolorum accusamus.
                </p>
              </div>
            </div>

            {/* Spline 3D Element */}
            <div className="hidden md:block w-full relative z-0 justify-center">
              {/* <Spline
                style={{
                  width: isBigScreen ? "700px" : isMediumScreen ? "500px" : "425px",
                  height: isBigScreen ? "700px" : isMediumScreen ? "500px" : "425px",
                }}
                scene="https://prod.spline.design/E4YD-HYnDoP6Ss86/scene.splinecode"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
