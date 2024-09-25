import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import SecondaryButton from "../buttons/SecondaryButton";
import NumberOne from "../../assets/images/number_1.png";
import NumberTwo from "../../assets/images/number_2.png";
import NumberThree from "../../assets/images/number_3.png";
import AmazonLogo from "../../assets/images/amazon_logo.png";
import AppleLogo from "../../assets/images/apple_logo.png";
import GoogleLogo from "../../assets/images/google_logo.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function InfoSectionThree () {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  const isMediumScreen = window.innerWidth > 1024 && window.innerWidth < 1920;
  const isBigScreen = window.innerWidth > 1920;
  const backgroundImages = [NumberOne, NumberTwo, NumberThree];
  const itemsCount = 3;
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const backgroundRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "option1",
    label: "gAMZN",
    img: AmazonLogo,
  });

  const options = [
    { value: "option1", label: "gAMZN", img: AmazonLogo },
    { value: "option2", label: "gAAPL", img: AppleLogo },
    { value: "option3", label: "gGOOGL", img: GoogleLogo },
  ];

  const cardData = [
    {
      id: 0,
      title: "Open Value 1",
      subtitle: "Deposit collateral and mint gAsset 1",
    },
    {
      id: 1,
      title: "Open Value 2",
      subtitle: "Deposit collateral and mint gAsset 2",
    },
    {
      id: 2,
      title: "Open Value 3",
      subtitle: "Deposit collateral and mint gAsset 3",
    },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
    const cards = cardRefs.current;
    const angleStep = 360 / itemsCount;
    const radius = isBigScreen ? 400 : isMediumScreen ? 330 : 270;

    cards.forEach((card, index) => {
      const isSelected = index === selectedIndex;
      const angle = (index - selectedIndex) * angleStep;
      const radians = angle * (Math.PI / 180);
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      gsap.to(card, {
        duration: 0.5,
        ease: "power1.inOut",
        x: x,
        y: y,
        zIndex: isSelected ? 20 : 0,
        rotation: index === 0 && !isSelected ? 360 : angle,
      });
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, [selectedIndex, itemsCount]);

  useEffect(() => {
    if (cardRefs.current.length) {
      const timeline = gsap.timeline();
      cardRefs.current.forEach((card, index) => {
        const isSelected = index === selectedIndex;

        timeline.to(card, {
          width: isMobile
            ? isSelected
              ? "250px"
              : "300px"
            : isBigScreen
            ? isSelected
              ? "500px"
              : "500px"
            : isMediumScreen
            ? isSelected
              ? "400px"
              : "400px"
            : isSelected
            ? "350px"
            : "300px",
          height: isMobile
            ? isSelected
              ? "300px"
              : "300px"
            : isBigScreen
            ? isSelected
              ? "450px"
              : "450px"
            : isMediumScreen
            ? isSelected
              ? "350px"
              : "350px"
            : isSelected
            ? "300px"
            : "300px",
          duration: 0.3,
          scale: isSelected ? 1.1 : 1,
          opacity: isSelected ? 1 : 0.6,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          transformOrigin: "center center",
          ease: "power1.out",
          stagger: 0.05,
        });
      });

      return () => timeline.kill();
    }
  }, [selectedIndex, itemsCount, isBigScreen, isMobile]);

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
          <div className="relative" ref={containerRef}>
            {cardData.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`bg-white bg-opacity-10 absolute right-[-40px] md:right-[100px] 2xl:right-[250px] top-24 md:top-20 2xl:top-60 flex items-center justify-center text-white text-center rounded-[35px] shadow-lg 
                  ${
                    isSelected
                      ? "shadow-md z-20 w-72 h-60"
                      : "opacity-50 scale-75 h-60 w-56"
                  }
                `}
                  style={{
                    transform: `translateX(0) translateY(0)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className="flex-col w-full h-full text-dark">
                    <div className="title p-4 bg-white bg-opacity-20 rounded-t-[35px] title-animation">
                      <h3 className=" text-lg md:text-2xl font-semibold flex items-center justify-center pt-3 2xl:mb-2">
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
                          className="block bg-white bg-opacity-20 w-full h-10 md:h-12 rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-400 sm:text-sm focus:outline-none focus:ring-0"
                        />
                        <div className="relative inline-block ml-1 md:ml-4">
                          <div
                            className="flex items-center bg-white bg-opacity-20 h-10 md:h-12 rounded-md pl-3 pr-3 text-gray-400 sm:text-sm cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            <div className="flex items-center flex-grow">
                              <img
                                src={selectedOption.img}
                                alt={selectedOption.label}
                                className="w-4 h-4 mr-2"
                              />
                              <span>{selectedOption.label}</span>
                            </div>
                            <div className="flex items-center ms-6">
                              <IoIosArrowDown className="text-gray-400" />
                            </div>
                          </div>

                          {isOpen && (
                            <div className="absolute mt-1 bg-white rounded-md shadow-lg z-10 title-animation">
                              {options.map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                                  onClick={() => handleSelect(option)}
                                >
                                  <img
                                    src={option.img}
                                    alt={option.label}
                                    className="w-4 h-4 mr-2"
                                  />
                                  <span>{option.label}</span>
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
                      <SecondaryButton text="Buy Now" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Button Section for larger screens */}
        <div className="hidden md:block relative z-10 py-12 md:py-32 2xl:py-72 px-4 md:px-20 xl:px-40 2xl:px-60">
          <div className="flex flex-col items-center w-full h-full p-4 xl:p-10 bg-trasparent">
            <div className="flex w-full flex-col gap-6 2xl:gap-10">
              {[0, 1, 2].map((index) => (
                <div key={index} className=" w-full">
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className={`w-full ${
                      selectedIndex === index ? "bg-white bg-opacity-40" : ""
                    } hover:bg-white hover:bg-opacity-20 transition-colors title-animation duration-300 px-6 py-3 rounded-xl text-white text-base xl:text-2xl font-base`}
                  >
                    Open Value {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button Section for mobile devices */}
        <div className="block md:hidden absolute bottom-20 right-0 left-0 px-10">
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
};

