import { Squircle } from "react-ios-corners";
import ScrollAnimation from "react-animate-on-scroll";
import Aerodrome from "../assets/images/partners/aerodrome.png";
import Dia from "../assets/images/partners/dia.png";
import Paladin from "../assets/images/partners/paladin.png";
import Pyth from "../assets/images/partners/pyth.png";
import Rwax from "../assets/images/partners/rwax.png";

export default function Partners() {
  return (
    <div className="flex flex-col items-center justify-start relative z-10 py-10 2xl:pb-30 ">
      <div className="text-center px-4 mb-10 lg:px-10 2xl:mb-20">
        <h2 className="title-animation text-3xl md:text-6xl font-bold md:leading-loose text-dark mb-6">
          Partners
        </h2>
        <ScrollAnimation duration={2} animateIn="fadeInRight">
          <div className="line border-b-4 border-primary w-32 mx-auto mb-6"></div>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn="fadeInRight">
          <div className="my-10 lg:my-20 overflow-hidden animate-fadeInBottom">
            <Squircle radius={90}>
              <div className="w-[350px] md:w-[1200px] 2xl:w-[1800px] py-6 md:py-12 bg-white bg-opacity-40 relative mx-auto">
                <div className="slider">
                  <div className="slide-track gap-[50px] md:gap-[100px]">
                    <div className="slide ">
                      <img
                        src={Aerodrome}
                        className=" w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Dia}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Paladin}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Pyth}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Rwax}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>

                    <div className="slide ">
                      <img
                        src={Aerodrome}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Dia}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Paladin}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                    <div className="slide ">
                      <img
                        src={Pyth}
                        className="w-[100px] h-[40px] md:w-[250px] md:h-[80px] 2xl:w-[350px] 2xl:h-[100px]"
                        alt="Partner Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Squircle>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
