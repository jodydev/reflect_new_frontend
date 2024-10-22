import PrimaryButton from "../buttons/PrimaryButton";
import Cards from "../Cards";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionOne() {
  return (
    <section id="section_one" className="mt-20 md:mt-0 md:my-40 bg-info-section relative">
      <div className="flex flex-col items-center justify-start h-full relative z-10 ">
        <div className="text-center my-5 2xl:my-20">
          <div className="text-center mb-10">
            <h2 className="title-animation text-3xl md:text-6xl md:leading-loose font-bold text-dark mb-5">
              Reflect on Base
            </h2>
            <p className="title-animation text-dark text-lg lg:text-xl 2xl:text-2xl mb-6 xl:mb-10">
              Create and trade your favorite crypto assets on Base chain with
              Reflect
            </p>
          </div>

          <div className="mt-10 xl:my-10 mx-20 xl:mx-96">
            <ScrollAnimation duration={2} animateIn="fadeInUp">
              <PrimaryButton text="Dapp Access" />
            </ScrollAnimation>
          </div>
        </div>

        <Cards />
      </div>
    </section>
  );
}
