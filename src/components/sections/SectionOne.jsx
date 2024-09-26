import SecondaryButton from "../buttons/SecondaryButton";
import Cards from "../Cards";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionOne() {
  return (
    <section id="section-1" className="py-10 bg-info-section relative">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10 ">
        <div className="text-center px-4 my-5 lg:px-10 2xl:px-[30%] 2xl:my-20">
          <h2 className="title-animation text-3xl md:text-6xl font-bold md:leading-loose text-dark mb-6 xl:mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
          </h2>
          <div className="mt-10 xl:my-10 mx-20 xl:mx-96">
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <SecondaryButton text="Dapp Access" />
            </ScrollAnimation>
          </div>
        </div>

        <Cards />
        
        {/* Spline 3D Element and Swiper Cards */}
        {/* <div className="w-full lg:w-1/2 flex justify-center items-center relative z-0">
            <ScrollAnimation duration={2} animateIn="fadeInLeft">
              <img
                src={LineImage}
                className="absolute bottom-0 top-[50%] inset-0 -z-10 w-full object-cover"
                alt="Line Background"
              />
              <Spline
                style={{
                  width: isBigScreen ? "600px" : "425px",
                  height: isBigScreen ? "600px" : "425px",
                }}
                scene="https://prod.spline.design/E4YD-HYnDoP6Ss86/scene.splinecode"
              />
            </ScrollAnimation>
          </div>

       
          <div className="w-full lg:w-1/2 max-w-lg relative z-10">
            <ScrollAnimation duration={2} animateIn="fadeInRight">
              <SwiperCards />
            </ScrollAnimation>
          </div> */}
      </div>
    </section>
  );
}
