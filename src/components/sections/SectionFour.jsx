import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondaryButton from "../buttons/SecondaryButton";
import Dashboard from "../../assets/images/dashboard.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionFour() {
  const spanRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      spanRef.current,
      { width: "0px" },
      {
        width: "500px",
        duration: 1,
        scrollTrigger: {
          trigger: spanRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 2xl:my-10">
          <h2 className="z-50 text-3xl md:text-6xl font-bold md:leading-loose text-dark">
            Simplified
            <span
              ref={spanRef}
              className="inline-block mx-4 h-[15px] w-[0px] bg-gradient-to-r from-secondary via-primary to-primary align-middle" // Larghezza iniziale a 0px
            ></span>
            <span className="text-primary">trading</span>
          </h2>
          <div className="flec items-center justify-center w-full px-96">
            <p className="text-dark text-lg lg:text-xl 2xl:text-2xl px-96">
              Leverage diverse assets to ease transactions. Access synthetic
              versions of popular blockchain assets from other ecosystems
              without leaving Base.
            </p>
          </div>
        </div>

        <div className="xl:mx-60 mb-10 2xl:mb-16 2xl:mx-72">
          <SecondaryButton text="Dapp Access" />
        </div>

        <div className="flex items-center justify-center mx-60">
          <ScrollAnimation duration={2} animateIn="fadeInUp">
            <img
              src={Dashboard}
              alt="dashboard image"
              className="rounded-3xl -z-50"
            />
          </ScrollAnimation>
        </div>

        {/* <Cards isSectionFour={true} /> */}
      </div>
    </section>
  );
}
