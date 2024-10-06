import Image from "../assets/images/yellow_1.webp";
import Button from "../assets/images/button_hero.webp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-full flex items-center lg:items-start"
    >
      <div className="relative z-0 w-full h-[60vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-0 items-center">
            <div className="w-full 2xl:my-56">
              <div className="text-left mx-5">
                <h1 className="text-5xl md:text-7xl 2xl:text-8xl text-dark mt-5 mb-4">
                  <span className="title-animation">
                    Empowering Base with abundant assets
                  </span>
                </h1>
                <div className="flex items-start justify-start">
                  <img
                    src={Button}
                    alt="button"
                    className="w-full h-full my-10 animate-fadeInLeft"
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full relative z-0 justify-center">
              <img
                src={Image}
                alt="Hero Image"
                className="w-full h-full animate-fadeInRight"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
