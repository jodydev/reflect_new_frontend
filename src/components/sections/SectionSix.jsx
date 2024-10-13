import { Squircle } from "react-ios-corners";
import { partners } from "../../data/partners";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionSix() {
  return (
    <section id="section_six">
      <div className="flex flex-col items-center justify-start relative z-10 py-10 2xl:pb-30">
        <div className="text-center px-4 mb-10 lg:px-10 2xl:mb-20">
          <h2 className="title-animation text-3xl md:text-6xl font-bold md:leading-loose text-dark mb-6">
            Partners
          </h2>
          <ScrollAnimation duration={2} animateIn="fadeInRight">
            <div className="line border-b-4 border-primary w-32 mx-auto mb-6"></div>
          </ScrollAnimation>

          <ScrollAnimation duration={2} animateIn="fadeIn">
            <div className="my-10 lg:my-40 overflow-hidden animate-fadeInBottom">
              <Squircle radius={90}>
                {/* <div className="w-[350px] md:w-[1200px] 2xl:w-[1800px] py-6 md:py-12 bg-white bg-opacity-40 relative mx-auto"> */}
                  <div className="slider">
                    <div className="slide-track gap-[50px] md:gap-[100px]">
                      {partners.map((partner, index) => (
                        <div className="slide" key={partner.id}>
                          <img
                            src={partner.src}
                            className="w-full h-full object-contain"
                            alt={partner.alt}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                {/* </div> */}
              </Squircle>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
