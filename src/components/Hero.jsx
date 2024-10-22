import { SwipeableButton } from "react-swipeable-button";
import Video from "../assets/video/hero.webm";
import { Squircle } from "react-ios-corners";

export default function Hero() {
  const onSuccess = () => {
    try {
      window.location.href = "https://www.google.com";
      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-full flex items-center lg:items-start"
    >
      <div className="relative z-0 w-full h-[60vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-60 items-center">
            <div className="w-full 2xl:my-56">
              <div className="text-left mx-5">
                <h1 className="text-5xl md:text-6xl 2xl:text-8xl text-dark mt-5 mb-4">
                  <span className="title-animation">
                    Empowering Base with a whole new crop of assets
                  </span>
                </h1>
                <div className="flex items-start justify-start py-10 xl:mt-10 animate-fadeInLeft">
                  <Squircle className="w-full 2xl:w-[80%]" radius={90}>
                    <SwipeableButton
                      onSuccess={onSuccess}
                      text="Connect Wallet"
                    />
                  </Squircle>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full relative z-0 justify-center  animate-fadeInRight">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full scale-125"
              >
                <source src={Video} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
