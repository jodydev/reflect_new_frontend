import SecondaryButton from "../buttons/SecondaryButton";
import Cards from "../Cards";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionOne() {
  return (
    <section id="section-1" className="py-10 bg-info-section relative">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10 ">
        <div className="text-center px-4 my-5 lg:px-10 2xl:px-[30%] 2xl:my-20">
          <h2 className="title-animation text-3xl md:text-6xl font-bold md:leading-loose text-dark mb-6 xl:mb-10">
          Createand trade your favorite crypto assets on Base chain with Reflect
          </h2>
          <div className="mt-10 xl:my-10 mx-20 xl:mx-96">
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <SecondaryButton text="Dapp Access" />
            </ScrollAnimation>
          </div>
        </div>

        <Cards />

      </div>
    </section>
  );
}
