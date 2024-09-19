import Spline from "@splinetool/react-spline";
import SwiperCards from "./SwiperCards";
import ScrollAnimation from "react-animate-on-scroll";
import LineImage from "../assets/images/line_effect.png";
import PrimaryButton from "./buttons/PrimaryButton";
import AnimatedBackground from "./AnimatedBackground";

export default function InfoSection() {
  return (
    <section className="min-h-screen bg-gray-900 py-12 bg-img relative">
      {/* Sfondo Animato */}
        <AnimatedBackground numBalls={10} />

      {/* Contenuto principale con z-index più alto */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className=" text-center my-5 px-6">
            <h2 className="title-animation text-2xl lg:text-4xl font-bold text-white mb-6">
              Lorem <span className="text-secondary">Lorem ipsum</span>
            </h2>
            <p className="title-animation text-white text-xs lg:text-sm mx-40 mb-5 max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum turpis
              porta. Nam a est in lacus tincidunt elementum. In hac habitasse
              platea
            </p>
            {/* <PrimaryButton text="Lorem" /> */}
        </div>

        {/* Box con Spline e Swiper */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 px-6 relative">
          {/* Spline 3D Element */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-0">
            <ScrollAnimation duration={2} animateIn="fadeInLeft">
              <img
                src={LineImage}
                className="absolute bottom-0 top-[55%] inset-0 -z-10 w-full object-cover"
                alt="Line Background"
              />
              <Spline
                style={{ width: "425px", height: "425px" }}
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
