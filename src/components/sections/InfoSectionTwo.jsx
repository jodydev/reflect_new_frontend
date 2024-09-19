import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import AnimatedBackground from "../AnimatedBackground";
import PrimaryButton from "../buttons/PrimaryButton";
import NumberOne from "../../assets/images/number_1.png";
import NumberTwo from "../../assets/images/number_2.png";
import NumberThree from "../../assets/images/number_3.png";

const InfoSectionTwo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemsCount = 3;
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const backgroundImages = [NumberOne, NumberTwo, NumberThree];
  const backgroundRef = useRef(null);

  // Animazione GSAP con delay e transizione da esterno a interno
  useEffect(() => {
    const bg = backgroundRef.current;

    gsap.fromTo(
      bg,
      {
        opacity: 0, // Partenza invisibile
        scale: 1.5, // Zoom iniziale più grande (effetto da esterno a interno)
        x: 100, // Spostamento orizzontale dall'esterno (da destra a sinistra)
      },
      {
        opacity: 1, // Opacità finale per far apparire l'immagine
        scale: 1, // Zoom normale
        x: 0, // Centrare l'immagine
        duration: 1.5, // Durata dell'animazione (puoi cambiarla)
        ease: "power1.out", // Effetto di rallentamento
        delay: 0, // Ritardo di 0.5 secondi prima di iniziare l'animazione
      }
    );
  }, [selectedIndex]);

  const cardData = [
    { id: 0, title: "Card 1", subtitle: "This is the first card" },
    { id: 1, title: "Card 2", subtitle: "This is the second card" },
    { id: 2, title: "Card 3", subtitle: "This is the third card" },
    { id: 3, title: "Card 4", subtitle: "This is the fourth card" },
  ];

  // Animazione GSAP per la rotazione delle card
  useEffect(() => {
    const cards = cardRefs.current;
    const angleStep = 360 / itemsCount;
    const radius = 270;

    cards.forEach((card, index) => {
      const angle = (index - selectedIndex) * angleStep;
      const radians = angle * (Math.PI / 180);
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      gsap.to(card, {
        duration: 0.5,
        ease: "power1.inOut",
        rotation: angle,
        x: x,
        y: y,
        zIndex: index === selectedIndex ? 20 : 0,
      });
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, [selectedIndex]);

  // EFFETTO NUMERO 1
  useEffect(() => {
    if (cardRefs.current.length) {
      const timeline = gsap.timeline();

      cardRefs.current.forEach((card, index) => {
        const angle = (index - selectedIndex) * (360 / itemsCount);
        const isSelected = index === selectedIndex;

        timeline.to(card, {
          duration: 0.5,
          scale: isSelected ? 1.2 : 0.9,
          width: isSelected ? "300px" : "300px", // Modifica la larghezza
          height: isSelected ? "250px" : "300px", // Modifica l'altezza
          opacity: isSelected ? 1 : 0.4,
          ease: "power1.inOut",
          rotation: angle,
          transformOrigin: "center center",
          stagger: 0.1,
        });
      });

      return () => timeline.kill();
    }
  }, [selectedIndex, itemsCount]);

  // EFFETTO NUMERO 2
  // useEffect(() => {
  //   if (cardRefs.current.length) {
  //     const timeline = gsap.timeline();

  //     cardRefs.current.forEach((card, index) => {
  //       const angle = (index - selectedIndex) * (360 / itemsCount);
  //       const isSelected = index === selectedIndex;

  //       timeline.to(card, {
  //         duration: 0.7,
  //         rotation: isSelected ? 0 : 45,
  //         opacity: isSelected ? 1 : 0.5,
  //         ease: "elastic.out(1, 0.3)",
  //         transformOrigin: "center center",
  //         stagger: 0.1,
  //       });
  //     });

  //     return () => timeline.kill();
  //   }
  // }, [selectedIndex, itemsCount]);

  return (
    <div className="bg-gray-900 min-h-screen py-96 px-20 flex-col relative bg-img">
      <AnimatedBackground numBalls={10} />

      <div className="absolute top-32 right-52">
        <h2 className="text-5xl font-bold text-white">Lorem ipsum dolor</h2>
        <div className="h-1 bg-primary mx-32 mt-3"></div>
        <h2 className="text-5xl font-bold text-white ms-52 mt-2">
          Lorem ipsum dolor
        </h2>
      </div>

      <div className="flex justify-center items-start space-x-32">
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative" ref={containerRef}>
            {cardData.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`right-0 absolute flex items-center justify-center text-white text-center rounded-2xl shadow-lg will-change-transform
                    ${
                      isSelected
                        ? "shadow-secondary border-secondary border-4 shadow-2xl z-20 w-[350px] h-[300px]"
                        : "opacity-50 scale-0 h-[300px] w-[300px]"
                    }
                    bg-white bg-opacity-20 backdrop-blur-lg`}
                  style={{
                    transform: `translateX(0) translateY(0)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className="flex-col w-full h-full">
                    <div className="title bg-gray-500 rounded-t-xl">
                      <h3 className="text-xl font-semibold flex items-center justify-center pt-3">
                        {item.title}
                      </h3>
                      <p className="text-xs font-extralight border-b-1 border-gray-50 pb-4">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="content px-10">
                      <label
                        htmlFor="price"
                        className="mt-4 block text-xs font-medium text-start leading-6 text-white"
                      >
                        From
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <input
                          id="price"
                          name="price"
                          type="text"
                          placeholder="$0.00"
                          className="block bg-gray-500 bg-opacity-40 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white sm:text-sm sm:leading-6 focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>

                    <p className="text-xs  py-3">Lorem ipsum dolor sit amet.</p>
                    <div className="mx-8">
                      <PrimaryButton text="Buy Now" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start relative z-10">
          <div className="flex flex-col items-center w-full h-full p-4">
            <div className="flex w-full flex-col gap-6">
              {[0, 1, 2].map((index) => (
                <div key={index} className="w-3/4">
                  {index === 0 && (
                    <div className="flex justify-end ">
                      <div className="line w-3/4 h-0.5 bg-gray-500 mb-5 bg-opacity-40 justify-end"></div>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className={` w-full ${
                      selectedIndex === index ? "bg-gray-400 bg-opacity-40" : ""
                    } hover:bg-gray-400 hover:bg-opacity-40 transition-colors duration-300 px-6 py-3 rounded-xl text-white text-base font-base`}
                  >
                    Card {index + 1}
                  </button>
                  {index === 0 && (
                    <div className="flex justify-end">
                      <div className="line w-full h-0.5 bg-gray-500 bg-opacity-40 justify-end mt-5"></div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex justify-end">
                      <div className="line w-full h-0.5 bg-gray-500 bg-opacity-40 justify-end mt-5"></div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex justify-end">
                      <div className="line w-3/4 h-0.5 bg-gray-500 bg-opacity-40 justify-end mt-5"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Background image based on selectedIndex */}

          <div
            ref={backgroundRef} // riferimento per GSAP
            className="absolute bottom-0 right-0 left-20 -z-30 w-full h-screen bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[selectedIndex]})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionTwo;
