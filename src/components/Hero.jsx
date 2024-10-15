import Image from "../assets/images/cubo_prova.png";
import Button from "../assets/images/button_hero.webp";
import { SwipeableButton } from "react-swipeable-button";
import Video from "../assets/images/video.webm";
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
      <div className="relative z-0 w-full h-[60vh] xl:h-[75vh] 2xl:h-[80vh] flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-0 items-center">
            <div className="w-full 2xl:my-56">
              <div className="text-left mx-5">
                <h1 className="text-5xl md:text-7xl 2xl:text-8xl text-dark mt-5 mb-4">
                  <span className="title-animation">
                    Empowering Base with abundant assets
                  </span>
                </h1>
                <div className="flex items-start justify-start py-10">
                  <Squircle className="w-full" radius={90}>
                    <SwipeableButton
                      onSuccess={onSuccess}
                      text="Swipe to connect"
                      // text_unlocked="yeee"
                    />
                  </Squircle>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full relative z-0 justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="ms-[50px] w-full h-full animate-fadeInRight scale-150"
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
