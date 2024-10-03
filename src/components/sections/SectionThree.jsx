import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import SecondaryButton from "../buttons/SecondaryButton";
import NumberOne from "../../assets/images/number_1.png";
import NumberTwo from "../../assets/images/number_2.png";
import NumberThree from "../../assets/images/number_3.png";
import ScrollAnimation from "react-animate-on-scroll";
import { Squircle } from "react-ios-corners";
import { options, cardData } from "../../data/card_section_three";

export default function InfoSectionThree() {
  const [openCards, setOpenCards] = useState([false, false, false]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(options[0]));
  const cardRefs = useRef([]);
  const backgroundRef = useRef(null);
  const backgroundImages = [NumberOne, NumberTwo, NumberThree];
  const totalCards = cardData.length;

  useEffect(() => {

    // 1. Genera un valore casuale per l'input subito
    setTimeout(() => {
      gsap.to(
        { val: 0 },
        {
          val: 1,
          duration: 2,
          onUpdate: function () {
            const currentVal = this.targets()[0].val;
            setInputValue(`$${(currentVal * 100).toFixed(2)}`);
          },
        }
      );
    }, 1000);

    const intervalId = setInterval(() => {
      // 2. Apro il dropdown
      setTimeout(() => {
        setDropdownOpen(true);
      }, 0);

      // 3. Seleziona l'opzione in base all'indice attuale
      setTimeout(() => {
        setSelectedOptions((prevOptions) => {
          const newOptions = [...prevOptions];
    
          let newOption;
          do {
            const currentOptionIndex = Math.floor(Math.random() * options.length); 
            newOption = options[currentOptionIndex];
          } while (newOption.value === newOptions[selectedIndex]?.value);
      
          newOptions[selectedIndex] = newOption;
          return newOptions; 
        });
      }, 1500);
      
      // 4. Chiudo il dropdown
      setTimeout(() => {
        setDropdownOpen(false);
      }, 2500);

      // 5. Cambio indice della card
      setTimeout(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % totalCards);
      }, 4000);
    }, 5000); // Ripeti ogni 5 secondi

    return () => clearInterval(intervalId);
  }, [options, selectedIndex, totalCards]);

  useEffect(() => {
    const bg = backgroundRef.current;
    gsap.fromTo(
      bg,
      { opacity: 0, scale: 1.5, x: 100 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
      }
    );
  }, [selectedIndex]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const cards = cardRefs.current;
    const angleStep = 360 / totalCards;
    const radius = isMobile ? 275 : 360;

    cards.forEach((card, index) => {
      const isSelected = index === selectedIndex;
      const angle = (index - selectedIndex) * angleStep;
      const radians = angle * (Math.PI / 180);
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      gsap.to(card, {
        duration: 0.1,
        ease: "none",
        x: x,
        y: y,
        zIndex: isSelected ? 50 : -50,
      });
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, [selectedIndex]);

  return (
    <div className="min-h-screen py-12 xl:py-20 px-4 sm:px-20 flex-col relative bg-img bg-trasparent">
      <div className="ms-0 md:ms-60 2xl:ms-96">
        <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-bold text-dark title-animation">
          Lorem ipsum dolor
        </h2>
        <ScrollAnimation duration={2} animateIn="fadeInRight">
          <div className="h-1 rounded-3xl bg-primary mx-32 w-full xl:w-1/2 mt-3"></div>
        </ScrollAnimation>
        <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-bold text-dark ms-32 md:ms-96 mt-2 title-animation">
          Lorem ipsum dolor
        </h2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative">
            {cardData.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`absolute right-[-55px] md:right-[100px] 2xl:right-[250px] top-24 md:top-40 2xl:top-60 flex items-center justify-center text-white text-center ${
                    isSelected
                      ? "z-20 w-72 h-60"
                      : "opacity-50 scale-75 w-72 h-60"
                  }`}
                  style={{
                    transform: "translateX(0) translateY(0)",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <Squircle className="bg-white bg-opacity-10" radius={90}>
                    <div className="cursor-not-allowed flex-col w-full h-full min-h-[320px] md:w-[400px] md:h-[350px] 2xl:w-[450px] 2xl:h-[400px] text-dark">
                      <div className="title p-4 bg-white bg-opacity-20 rounded-t-[35px] title-animation">
                        <h3 className="text-lg md:text-2xl font-semibold flex items-center justify-center pt-3 2xl:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-md 2xl:text-lg font-extralight pb-4">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="content px-4 md:px-12 md:py-3">
                        <div className="flex justify-between">
                          <label
                            htmlFor="priceFrom"
                            className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                          >
                            From
                          </label>
                          <label
                            htmlFor="priceTo"
                            className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                          >
                            To
                          </label>
                        </div>

                        <div className="flex items-center mt-2">
                          <input
                            id="priceFrom"
                            name="priceFrom"
                            type="text"
                            placeholder="$0.00"
                            value={inputValue}
                            className="block bg-white bg-opacity-20 w-full h-10 md:h-12 rounded-md border-0 py-1.5 pl-3 pr-20 text-primary font-bold text-sm md:text-base focus:outline-none focus:ring-0 cursor-not-allowed"
                          />
                          <div className="relative inline-block ml-1 md:ml-4">
                            <div
                              className="flex items-center bg-white bg-opacity-20 h-10 md:h-12 rounded-md pl-3 pr-3 text-gray-400 sm:text-sm cursor-not-allowed"
                            >
                               <div className="flex items-center flex-grow">
                                <img
                                  src={selectedOptions[index]?.img} 
                                  alt={selectedOptions[index]?.label}
                                  className="w-4 h-4 mr-2"
                                />
                                <span>{selectedOptions[index]?.label}</span>
                              </div>
                              <div className="flex items-center ms-6">
                                <IoIosArrowDown className="text-gray-400" />
                              </div>
                            </div>

                            {dropdownOpen && index === selectedIndex && (
                              <div className="absolute mt-1 bg-white backdrop-blur-md rounded-lg shadow-lg z-10 title-animation">
                                  {options.map((option) => (
                                  <div
                                    key={option.value}
                                    className="cursor-pointer hover:bg-gray-100 p-2"
                                  >
                                    <div className="flex items-center">
                                      <img
                                        src={option.img} 
                                        alt={option.label}
                                        className="w-4 h-4 mr-2"
                                      />
                                      <span>{option.label}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs 2xl:text-base py-4 2xl:py-8 title-animation">
                        Account Balance:{" "}
                        <span className="text-primary font-bold">42</span>{" "}
                        {selectedOption.label}
                      </p>
                      <div className="mx-10">
                        <SecondaryButton bol={true} text="Buy Now" />
                      </div>
                    </div>
                  </Squircle>
                </div>
              );
            })}
          </div>
        </div>

        {/* Button Section for larger screens */}
        <div className="hidden md:block relative z-10 py-12 md:py-32 2xl:py-72 px-4 md:px-20 xl:px-40 2xl:px-60">
          <div className="flex flex-col items-center w-full h-full p-4 xl:p-10 bg-trasparent">
            <div className="flex w-full flex-col gap-6 2xl:gap-10">
              {cardData.map((index) => (
                <Squircle key={index.id} radius={90}>
                  <button
                    onClick={() => setSelectedIndex(index.id)}
                    className={`w-full rounded-lg shadow-md transition-all duration-300 px-6 py-3 text-base xl:text-2xl font-medium
                      ${
                        selectedIndex === index.id
                          ? "bg-white bg-opacity-60 text-primary ring-2 ring-primary ring-opacity-50 scale-105 hover:text-primary"
                          : "bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-60"
                      }
                       hover:shadow-lg hover:scale-105`}
                  >
                    Open Value {index.id + 1}
                  </button>
                </Squircle>
              ))}
            </div>
          </div>
        </div>


        {/* Button Section for mobile devices */}
        <div className="block md:hidden absolute bottom-20 right-0 left-0 px-5">
          <div className="flex w-full flex-row gap-6">
            {[0, 1, 2].map((index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full ${
                    selectedIndex === index
                      ? "bg-white bg-opacity-60 border-primary border-2"
                      : "border-white border-opacity-0 border-2 "
                  } bg-white bg-opacity-20 transition-colors title-animation duration-300 px-6 py-3 rounded-xl text-dark text-base font-base`}
                >
                  Card{index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image Section */}
        <div
          ref={backgroundRef}
          className="animate-fadeInRight z-0 absolute xl:top-[50px] 2xl:top-[-200px] xl:right-[-50px] xl:w-[400px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[700px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages[selectedIndex]})`,
          }}
        ></div>
      </div>
    </div>
  );
}
