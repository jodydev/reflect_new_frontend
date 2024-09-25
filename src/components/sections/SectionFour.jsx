import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondaryButton from "../buttons/SecondaryButton";
import Cards from "../Cards";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const spanRef = useRef(null);

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
    <section className="relative">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 2xl:my-20">
          <h2 className="z-50 text-3xl md:text-6xl font-bold md:leading-loose text-dark">
            Easy to Set Up
            <span
              ref={spanRef}
              className="inline-block mx-4 h-[15px] w-[0px] bg-gradient-to-r from-secondary via-primary to-primary align-middle" // Larghezza iniziale a 0px
            ></span>
            <span className="text-primary">and Use</span>
          </h2>
        </div>

        <div className="xl:mx-60 mb-10 2xl:mb-20 2xl:mx-72">
          <SecondaryButton text="Dapp Access" />
        </div>

        <Cards isSectionFour={true} />
      </div>
    </section>
  );
}
