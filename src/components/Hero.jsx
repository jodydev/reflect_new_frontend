import BannerElement from "../assets/images/banner_effect.png";

export default function Hero() {
  return (
    <section className="relative my-10 h-96 md:h-full flex items-center">
      <div className="relative z-10 w-full flex justify-center lg:justify-start">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-8xl font-extrabold text-white mb-4 title-animation">
                  <span className="block">Lorem</span>{" "}
                  LoremLorem{" "}
                  <span className="relative">
                    Lorem Lorem
                    <img
                      src={BannerElement}
                      className="absolute w-full h-full top-0 bottom-0 -z-10 transition-transform"
                    />
                  </span>
                </h1>
                <p className="text-sm sm:text-lg lg:text-base xl:text-lg text-gray-300 mt-8 sm:mt-10 mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos excepturi neque sunt, magni numquam sapiente veniam dolorum accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
