import BannerElement from "../assets/images/banner_effect.png";

export default function Hero() {
  return (
    <section className="relative mt-16">
      <div className="relative z-10 flex items-center justify-center bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-6/12">
              <div className="text-center lg:text-left">
                <h1 className="text-xl lg:text-6xl l:text-8xl font-extrabold text-white mb-4 title-animation">
                  <span className="block text-primary">Lorem</span>{" "}
                  LoremLorem{" "}
                  <span className="relative">
                    Lorem Lorem
                    <img
                      src={BannerElement}
                      className="absolute w-[120%] h-[120%] top-0 bottom-0 -z-10 transition-transform"
                    />
                  </span>
                </h1>
                <p className="text-md lg:text-lg text-gray-300 mt-10 mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos excepturi neque sunt, magni numquam sapiente
                  veniam dolorum accusamus officiis animi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
