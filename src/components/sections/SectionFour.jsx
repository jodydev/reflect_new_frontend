import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../buttons/PrimaryButton";
import Dashboard from "../../assets/images/dashboard.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionFour() {
  const isMobile = window.innerWidth < 768;
  const spanRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    try {
      gsap.fromTo(
        spanRef.current,
        { width: "0px" },
        {
          width: isMobile ? "50px" : "500px",
          duration: 1,
          scrollTrigger: {
            trigger: spanRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    } catch (error) {
      console.log(error); 
    }
  }, []);

  return (
    <section id="section_four">
      <div className="flex flex-col items-center justify-start relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 2xl:my-10">
          <h2 className="z-50 text-3xl md:text-6xl font-bold md:leading-loose text-primary">
            Simplified
            <span
              ref={spanRef}
              className="inline-block mx-4 h-[15px] w-[0px] bg-gradient-to-r from-primary via-primary to-secondary align-middle"
            ></span>
            <span className="text-dark">trading</span>
          </h2>
          <div className="flex items-center justify-center w-full mt-5 md:px-40 2xl:px-96">
            <p className="text-dark md:text-lg lg:text-xl 2xl:text-2xl md:px-40 2xl:px-96">
              Leverage diverse assets to ease transactions. Access synthetic
              versions of popular blockchain assets from other ecosystems
              without leaving Base.
            </p>
          </div>
        </div>

        <div className="xl:mx-60 mb-10 2xl:mb-16 2xl:mx-72">
          <PrimaryButton text="Dapp Access" />
        </div>

        <div className="flex items-center justify-center mx-60">
          <ScrollAnimation animateIn="fadeInUp" duration={2}>
            <img
              src={Dashboard}
              alt="Dashboard Image"
              className="rounded-3xl -z-50 max-w-[350px] w-[350px] md:max-w-full md:w-full h-auto"
            />
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
}
