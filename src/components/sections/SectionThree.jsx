import { useState, useRef, useEffect } from "react";
import ReflectLogo from "../../assets/images/logo.webp";
import EthereumLogo from "../../assets/images/ethereum.png";
import TaoLogo from "../../assets/images/tao.svg";
import BitcoinLogo from "../../assets/images/bitcoin.webp";
import { gsap } from "gsap";
import { IoIosArrowDown } from "../../utils/icons";
import { Squircle } from "react-ios-corners";
import {
  options,
  optionsDate,
  optionsRatio,
  optionsLogo,
  cardData,
} from "../../data/cardDataSectionThree";
import SecondaryButton from "../buttons/SecondaryButton";
import NumberOne from "../../assets/images/1.png";
import NumberTwo from "../../assets/images/2.png";
import NumberThree from "../../assets/images/3.png";
import ScrollAnimation from "react-animate-on-scroll";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

export default function InfoSectionThree() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputValueSwap, setInputValueSwap] = useState("");
  const [inputValueInitialSupply, setInputValueInitialSupply] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const [selectedOptionsRatio, setSelectedOptionsRatio] = useState(
    Array(optionsRatio.length).fill(optionsRatio[0])
  );
  const [selectedOptions, setSelectedOptions] = useState(
    Array(options.length).fill(options[0])
  );
  const [selectedOptionsDate, setSelectedOptionsDate] = useState(
    Array(options.length).fill(optionsDate[0])
  );
  const [selectedOptionsLogo, setSelectedOptionsLogo] = useState(
    Array(optionsLogo.length).fill(optionsLogo[0])
  );
  const cardRefs = useRef([]);
  const backgroundRef = useRef(null);
  const backgroundImages = [NumberOne, NumberTwo, NumberThree];
  const totalCards = cardData.length;

  const isCreate = selectedIndex === 1;
  const isStake = selectedIndex === 2;

  useEffect(() => {
    try {
      // 1. Genera un valore casuale per l'input subito
      setTimeout(() => {
        gsap.to(
          { val: 0 },
          {
            val: 1,
            duration: 2,
            onUpdate: function () {
              const currentVal = this.targets()[0].val;
              setInputValue(
                `${
                  isStake
                    ? `${(currentVal * 100).toFixed(0)} RFL`
                    : isCreate
                    ? `${(currentVal * 3).toFixed(2)} ETH`
                    : `${(currentVal * 3).toFixed(2)} ETH`
                }`
              );
              setInputValueSwap(
                isStake
                  ? `${(currentVal * 168).toFixed(3)} TAO`
                  : isCreate
                  ? `${(currentVal * 0.1).toFixed(1)} rBTC`
                  : `${(currentVal * 168).toFixed(3)} TAO`
              );
              
              setInputValueInitialSupply(
                `$${`${(currentVal * 100).toFixed(4)}`}`
              );
            },
          }
        );
      }, 1000);

      const intervalId = setInterval(() => {
        // 2. Apro il dropdown
        setTimeout(() => {
          setDropdownOpen(true);
        }, -1000);

        // 2.1 Apro il secondo dropdown solo per opzione create
        if (isCreate) {
          setTimeout(() => {
            setSecondDropdownOpen(true);
          }, 1000);
        }

        // 3. Seleziona l'opzione in base all'indice attuale
        setTimeout(() => {
          setSelectedOptions((prevOptions) => {
            const newOptions = [...prevOptions];

            let newOption;
            do {
              const currentOptionIndex = Math.floor(
                Math.random() * options.length
              );
              newOption = options[currentOptionIndex];
            } while (newOption.value === newOptions[selectedIndex]?.value);

            newOptions[selectedIndex] = newOption;
            return newOptions;
          });
        }, 1500);

        // 3.1 Seleziona l'opzione delle date in base all'indice attuale solo per opzione create
        if (isCreate) {
          setTimeout(() => {
            setSelectedOptionsDate((prevOptions) => {
              const newOptions = [...prevOptions];

              let newOption;
              do {
                const currentOptionIndex = Math.floor(
                  Math.random() * optionsDate.length
                );
                newOption = optionsDate[currentOptionIndex];
              } while (newOption.value === newOptions[selectedIndex]?.value);

              newOptions[selectedIndex] = newOption;
              return newOptions;
            });
          }, 1500);

          // 3.2 Seleziona l'opzione del logo in base all'indice attuale solo per opzione create
          setTimeout(() => {
            setSelectedOptionsLogo((prevOptions) => {
              const newOptions = [...prevOptions];

              let newOption;
              do {
                const currentOptionIndex = Math.floor(
                  Math.random() * optionsLogo.length
                );
                newOption = optionsLogo[currentOptionIndex];
              } while (newOption.img === newOptions[selectedIndex]?.img);

              newOptions[selectedIndex] = newOption;
              return newOptions;
            });
          }, 1500);
        }

        // 4. Chiudo il dropdown
        setTimeout(() => {
          setDropdownOpen(false);
        }, 1500);

        // 4.1 Chiudo il secondo dropdown solo per opzione create
        if (isCreate) {
          setTimeout(() => {
            setSecondDropdownOpen(false);
          }, 3000);
        }

        // 5. Cambio indice della card
        setTimeout(() => {
          setSelectedIndex((prevIndex) => (prevIndex + 1) % totalCards);
        }, 4000);
      }, 5000); // Ripeti ogni 5 secondi

      return () => clearInterval(intervalId);
    } catch (error) {
      console.error(error);
    }
  }, [options, selectedIndex, totalCards]);

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  }, [selectedIndex]);

  useEffect(() => {
    try {
      const isMobile = window.innerWidth < 768;
      const isBigScreen = window.innerWidth > 1920;
      const cards = cardRefs.current;
      const angleStep = 360 / totalCards;
      const radius = isMobile ? 275 : isBigScreen ? 450 : 350;

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
    } catch (error) {
      console.error(error);
    }
  }, [selectedIndex]);

  return (
    <section
      id="section_three"
      className="min-h-screen py-12 mt-20 md:mt-0 xl:py-20 2xl:py-40 px-4 sm:px-20 flex-col relative bg-img bg-trasparent"
    >
      <div className="ms-0 md:ms-60 fh:ms-[500px] 2xl:ms-[700px]">
        <p className="text-xl md:text-5xl 2xl:text-6xl font-bold text-dark title-animation">
          Create your favourite rAsset
        </p>
        <ScrollAnimation duration={2} animateIn="fadeInRight">
          <div className="h-1 rounded-3xl bg-primary mx-32 w-full xl:w-1/2 mt-3 xl:mt-5"></div>
        </ScrollAnimation>
        <p className="text-xl md:text-5xl 2xl:text-6xl font-bold text-dark ms-32 xl:ms-[300px] 2xl:ms-[700px] mt-3 xl:mt-5 title-animation">
          in three simple steps
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative">
            {cardData.map((item, index) => {
              const isSelected = index === selectedIndex;
              const isStake = selectedIndex === 2;

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`absolute right-[-50px] md:right-[100px] 2xl:right-[350px] top-32 md:top-40 2xl:top-80 flex items-center justify-center text-white text-center ${
                    isSelected
                      ? "w-72 h-60"
                      : "opacity-50 scale-75 w-72 h-60 blur-[3px]"
                  }`}
                  style={{
                    transform: "translateX(0) translateY(0)",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <Squircle className="bg-white bg-opacity-10 " radius={90}>
                    <div className="cursor-not-allowed flex-col w-full h-full min-h-[340px] md:w-[400px] md:h-[350px] 2xl:w-[500px] 2xl:h-[450px] text-dark">
                      <div className="title p-4 bg-white bg-opacity-20 rounded-t-[35px] title-animation">
                        <h3 className="text-lg md:text-2xl font-semibold flex items-center justify-center pt-3 2xl:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-md 2xl:text-lg font-extralight pb-4">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="content px-4 md:px-12 md:py-3">
                        {!isCreate ? (
                          <div className="flex justify-between">
                            <label
                              htmlFor="priceFrom"
                              className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                            >
                              {isStake
                                ? "Quantity"
                                : isCreate
                                ? "Collateral"
                                : "From"}
                            </label>
                            <label
                              htmlFor="priceTo"
                              className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                            >
                              {isStake ? "Duration" : !isCreate ? "To" : ""}
                            </label>
                          </div>
                        ) : (
                          <div className="flex justify-between text-start">
                            <label
                              htmlFor="priceFrom"
                              className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                            >
                              Collateral
                            </label>
                            <label
                              htmlFor="priceTo"
                              className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                            >
                              Minted
                            </label>
                            <label
                              htmlFor="priceTo"
                              className="title-animation mt-4 block text-xs md:text-base font-medium text-start leading-6 text-dark"
                            >
                              Ratio
                            </label>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-2 space-x-10">
                          {!isCreate && !isStake ? (
                            <>
                              <div className="w-1/2 flex items-center bg-white bg-opacity-20 rounded-md">
                                <img
                                  src={EthereumLogo}
                                  alt="Etherium Logo"
                                  className="w-4 h-4 md:w-5 md:h-5 ms-2"
                                />
                                <input
                                  id="swapForm"
                                  name="swapForm"
                                  type="text"
                                  placeholder={isStake ? "0RFL" : "$0.00"}
                                  value={inputValue}
                                  className={`w-full block bg-transparent h-10 md:h-12 border-0 py-1.5 pl-1 text-primary font-bold text-sm md:text-base focus:outline-none focus:ring-0`}
                                  readOnly
                                />
                              </div>

                              <div className="w-1/2 flex items-center bg-white bg-opacity-20 rounded-md">
                                <img
                                  src={TaoLogo}
                                  alt="Tao Logo"
                                  className="w-4 h-4 md:w-5 md:h-5 ms-2"
                                />
                                <input
                                  id="swapForm"
                                  name="swapForm"
                                  type="text"
                                  placeholder={isStake ? "0RFL" : "$0.00"}
                                  value={inputValueSwap}
                                  className={`w-full block bg-transparent h-10 md:h-12 border-0 py-1.5 pl-1 text-primary font-bold text-sm md:text-base focus:outline-none focus:ring-0`}
                                  readOnly
                                />
                              </div>
                            </>
                          ) : isCreate ? (
                            <div className="relative flex flex-row items-center justify-between space-x-3">
                               <div className="w-1/3 flex items-center bg-white bg-opacity-20 rounded-md">
                                <img
                                  src={EthereumLogo}
                                  alt="Etherium Logo"
                                  className="w-4 h-4 md:w-5 md:h-5 ms-2"
                                />
                                <input
                                  id="swapForm"
                                  name="swapForm"
                                  type="text"
                                  placeholder={isStake ? "0RFL" : "$0.00"}
                                  value={inputValue}
                                  className={`w-full block bg-transparent h-10 md:h-12 border-0 py-1.5 pl-1 text-primary font-bold text-sm md:text-base focus:outline-none focus:ring-0`}
                                  readOnly
                                />
                              </div>

                              <div className="w-1/3 flex items-center bg-white bg-opacity-20 rounded-md">
                                <img
                                  src={BitcoinLogo}
                                  alt="Bitcoin Logo"
                                  className="w-4 h-4 md:w-5 md:h-5 ms-2"
                                />
                                <input
                                  id="swapForm"
                                  name="swapForm"
                                  type="text"
                                  placeholder={isStake ? "0RFL" : "$0.00"}
                                  value={inputValueSwap}
                                  className={`w-full block bg-transparent h-10 md:h-12 border-0 py-1.5 pl-1 text-primary font-bold text-sm md:text-base focus:outline-none focus:ring-0`}
                                  readOnly
                                />
                              </div>

                              {/* Dropdown Options Logo */}
                              <div className="w-1/5 flex items-center bg-white bg-opacity-20 h-10 md:h-12 rounded-md pl-2 pr-2 text-gray-400 sm:text-sm cursor-not-allowed">
                                <div className="flex items-center flex-grow text-nowrap">
                                  <span className="text-xs">
                                    {selectedOptionsRatio[index]?.label}
                                  </span>
                                </div>
                                <div className="flex items-center hidden md:block">
                                  <IoIosArrowDown className="text-gray-400" />
                                </div>
                              </div>

                              {dropdownOpen && index === selectedIndex && (
                                <div className="absolute top-[40px] left-[200px] md:top-[50px] md:left-[240px] mt-1 bg-white backdrop-blur-md rounded-lg shadow-lg z-10 title-animation">
                                  {optionsRatio.map((option) => (
                                    <div
                                      key={option.id}
                                      className="cursor-pointer hover:bg-gray-100 p-2"
                                    >
                                      <div className="flex items-center text-nowrap">
                                        <span>{option.label}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="relative flex flex-row items-center justify-between space-x-10">
                              <div className="w-1/2 flex items-center bg-white bg-opacity-20 rounded-md">
                                <img
                                  src={ReflectLogo}
                                  alt="Reflect Logo"
                                  className="w-4 h-4 md:w-5 md:h-5 mx-2"
                                />
                                <input
                                  id="swapForm"
                                  name="swapForm"
                                  type="text"
                                  placeholder={isStake ? "0RFL" : "$0.00"}
                                  value={inputValue}
                                  className={`w-full block bg-transparent h-10 md:h-12 border-0 py-1.5 pl-1 text-primary font-bold text-sm md:text-base focus:outline-none focus:ring-0`}
                                  readOnly
                                />
                              </div>

                              {/* Dropdown Options Date */}
                              <div className="flex items-center bg-white bg-opacity-20 h-10 md:h-12 rounded-md pl-3 pr-3 text-gray-400 sm:text-sm cursor-not-allowed">
                                <div className="flex items-center flex-grow text-nowrap">
                                  <span>
                                    {selectedOptionsDate[index]?.label}
                                  </span>
                                </div>
                                <div className="flex items-center ms-2 ">
                                  <IoIosArrowDown className="text-gray-400" />
                                </div>
                              </div>

                              {dropdownOpen && index === selectedIndex && (
                                <div className="absolute top-[40px] left-[85px] md:top-[50px] md:left-[170px] mt-1 bg-white backdrop-blur-md rounded-lg shadow-lg z-10 title-animation">
                                  {optionsDate.map((option) => (
                                    <div
                                      key={option.id}
                                      className="cursor-pointer hover:bg-gray-100 p-2"
                                    >
                                      <div className="flex items-center text-nowrap">
                                        <span>{option.label}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-xs 2xl:text-base py-4 2xl:py-8">
                        {isStake
                          ? "Estimated Reward: "
                          : isCreate
                          ? ""
                          : "Account Balance: "}
                        <span className="text-primary font-bold">
                          {isStake
                            ? "12%"
                            : isCreate
                            ? ``
                            : `${inputValueSwap}`}
                        </span>
                        {isStake
                          ? " x Month"
                          : isCreate
                          ? ""
                          : ``}
                      </p>
                      <div className="mx-10">
                        <SecondaryButton
                          bol={true}
                          text={
                            isStake
                              ? "Stake"
                              : isCreate
                              ? "Start Create"
                              : "Swap"
                          }
                        />
                      </div>
                    </div>
                  </Squircle>
                </div>
              );
            })}
          </div>
        </div>

        {/* Button Section for larger screens */}
        <div className="hidden md:block relative z-10 py-12 md:py-24 2xl:py-60 px-4 md:px-20 fh:px-52 2xl:px-96">
          <div className="flex flex-col items-center w-full h-full p-4 xl:p-10 bg-trasparent">
            <div className="flex w-full flex-col gap-6 xl:gap-14">
              {cardData.map((index) => (
                <Squircle key={index.id} radius={90}>
                  <button
                    id="card_button"
                    aria-label="card button"
                    onClick={() => setSelectedIndex(index.id)}
                    className={`title-animation w-full 2xl:h-20 rounded-lg shadow-md transition-all duration-300 px-6 py-3 text-base xl:text-2xl font-medium
                      ${
                        selectedIndex === index.id
                          ? "bg-white bg-opacity-60 text-primary ring-2 ring-primary ring-opacity-50 scale-105 hover:text-primary"
                          : "bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-60"
                      }
                       hover:shadow-lg hover:scale-105`}
                  >
                    {index.title}
                  </button>
                </Squircle>
              ))}
            </div>
          </div>
        </div>

        {/* Button Section for mobile devices */}
        <div className="block md:hidden absolute bottom-40 right-0 left-0 px-5">
          <div className="flex w-full flex-row gap-6">
            {cardData.map((index) => (
              <div key={index.id} className="w-full">
                <button
                  id="card_button"
                  aria-label="card button"
                  onClick={() => setSelectedIndex(index.id)}
                  className={`w-full ${
                    selectedIndex === index.id
                      ? "bg-white bg-opacity-60 border-primary border-2"
                      : "border-white border-opacity-0 border-2 "
                  } bg-white bg-opacity-20 transition-colors title-animation duration-300 px-6 py-3 rounded-xl text-dark text-base font-base`}
                >
                  {index.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image Section */}
        <div
          ref={backgroundRef}
          className="animate-fadeInRight z-0 absolute xl:top-[0px] 2xl:top-[-200px] xl:right-[-50px] xl:w-[400px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[700px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages[selectedIndex]})`,
          }}
        ></div>
      </div>
    </section>
  );
}
