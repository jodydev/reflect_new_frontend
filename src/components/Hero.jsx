import { useState } from "react";
import { SwipeableButton } from "react-swipeable-button";
import Video from "../assets/video/video_hero.webm";
import { Squircle } from "react-ios-corners";

export default function Hero() {
  const [buttonKey, setButtonKey] = useState(0);

  const onSuccess = () => {
    try {
      window.location.href = "https://www.google.com";
      console.log("Success");
    } catch (error) {
      console.log(error);
    } finally {
      setButtonKey(prevKey => prevKey + 1);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-full flex items-center lg:items-start"
    >
      <div className="relative w-full h-[60vh] lg:h-[70vh] fh:h-[75vh] 2xl:h-[75vh] flex justify-center items-center">
        <div className="container mx-auto fh:mx-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fh:gap-96 items-center">
            <div className="w-full 2xl:my-56">
              <div className="text-left mx-5 md:px-20 md:mt-40 lg:px-0 lg:mt-0">
                <h1 className="animate-fadeInLeft text-5xl sm:text-7xl lg:text-6xl fh:text-7xl 2xl:text-8xl text-dark mt-5 mb-4">
                    Empowering Base with a whole new crop of assets
                </h1>
                <div className="flex items-start justify-start py-10 md:mt-20 lg:mt-10 animate-fadeInLeft">
                  <Squircle className="w-full 2xl:w-[80%]" radius={90}>
                    <SwipeableButton
                      key={buttonKey}
                      onSuccess={onSuccess}
                      text="Connect Wallet"
                    />
                  </Squircle>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-full z-10 relative justify-center animate-fadeInRight fh:-ms-20 2xl:-ms-40">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full fh:scale-125"
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