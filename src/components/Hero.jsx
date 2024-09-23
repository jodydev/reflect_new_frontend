import Image from "../assets/images/yellow_1.png";
import Button from "../assets/images/button_hero.png";

export default function Hero() {
  return (
    <section className="relative h-full flex items-center lg:items-start">
      <div className="relative z-0 w-full h-[60vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-0 items-center">
            <div className="w-full 2xl:my-56">
              <div className="text-center lg:text-left ">
                <h1 className="text-4xl xl:text-7xl 2xl:text-8xl font-involve text-dark mt-5 mb-4 title-animation">
                  <span className="block ">
                    RWA simplified through test sunthetics bla bla bla
                  </span>
                </h1>
                <div className="flex items-start justify-start">
                    <img
                      src={Button}
                      alt="button"
                      className=" my-10 px-10 md:px-0 animate-fadeInLeft"
                    />
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full relative z-0 justify-center">
                <img
                  src={Image}
                  alt="Yellow Element"
                  className="w-full h-full animate-fadeInRight"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
