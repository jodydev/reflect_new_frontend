import { useState, useEffect } from "react";
import { Squircle } from "react-ios-corners";
import { BsRobot } from "react-icons/bs";
import { TbClick } from "react-icons/tb";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "../assets/images/yellow_3.png";

export default function Cards({ isSectionFour }) {
  const [isSelected, setIsSelected] = useState(null);

  const cardData = [
    {
      title: "Monitor and Manage",
      subtitle:
        "Oversee all aspects of your business from a single control center.",
    },
    {
      title: "Automate Tasks",
      subtitle:
        "Let AI handle the routine tasks so you can focus on what matters.",
    },
    {
      title: "Optimize Resources",
      subtitle: "Ensure maximum efficiency in all aspects of your workflow.",
    },
  ];

  const cardDataSectionFour = [
    {
      title: "AI Integration Technology",
      subtitle: "Leverage AI for more intelligent decision-making. Bla bla bla",
    },
    {
      title: "Blockchain Security",
      subtitle:
        "Enhance your security with decentralized blockchain solutions.",
    },
    {
      title: "Next-Gen Analytics",
      subtitle: "Unlock insights with advanced data analytics and forecasting.",
    },
  ];

  const currentData = isSectionFour ? cardDataSectionFour : cardData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100 && !isSelected) {
        setIsSelected("1");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSelected]);

  const cardStyles = {
    container: `flex flex-col items-center relative w-3/4 py-10 2xl:py-10`,
    wrapper: `flex flex-wrap justify-center items-center space-x-0 md:space-x-10 2xl:space-x-20 space-y-10 md:space-y-0`,
    indicator: `flex space-x-2 mt-5`,
    indicatorDot: (num) =>
      `w-3 h-3 rounded-full cursor-pointer my-10 ${
        isSelected === num.toString() ? "bg-dark w-[30px]" : "bg-gray-400"
      }`,
    backgroundImage: "absolute inset-0 -z-10",
  };

  const cardBaseStyle = `bg-group relative flex flex-col items-center justify-start px-10 py-10 w-[350px] h-[300px] md:w-[300px] md:h-[350px] 2xl:w-[400px] 2xl:h-[450px] transition-all duration-500 ease-in-out transform`;

  const getCardStyles = (isHovered) => {
    return `${cardBaseStyle} ${
      isHovered
        ? isSectionFour
          ? "w-[350px] h-[300px] cursor-pointer"
          : "opacity-100 bg-dark text-white md:w-[400px] 2xl:w-[600px] 2xl:h-[400px]"
        : "w-[300px] hover:cursor-pointer group-hover:opacity-50 hover:opacity-100 bg-white text-dark bg-opacity-20"
    } ${
      isSectionFour
        ? "my-10 backdrop-filter backdrop-blur-2xl bg-opacity-70 bg-gray-100"
        : "backdrop-blur-lg"
    }`;
  };

  return (
    <div className={cardStyles.container}>
      {isSectionFour && (
        <div className={cardStyles.backgroundImage}>
          <img
            src={Image}
            className="w-full h-full blur-[1px]"
            alt="Background"
          />
        </div>
      )}

      <div className={cardStyles.wrapper}>
        {currentData.map((data, index) => (
          <Card
            key={index}
            number={(index + 1).toString()}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            isSectionFour={isSectionFour}
            title={data.title}
            subtitle={data.subtitle}
            getCardStyles={getCardStyles}
          />
        ))}
      </div>

      <ScrollAnimation duration={2} animateIn="fadeInLeft">
        <div className={cardStyles.indicator}>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={cardStyles.indicatorDot(num)}
              onClick={() => setIsSelected(num.toString())}
            />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

function Card({
  number,
  isSelected,
  setIsSelected,
  isSectionFour,
  title,
  subtitle,
  getCardStyles,
}) {
  const isHovered = isSelected === number;

  return (
    <ScrollAnimation duration={2} animateIn={"fadeInLeft"}>
      <Squircle
        className={`${
          isSectionFour
            ? "hover:scale-110 transition-all duration-500 ease-in-out transform"
            : ""
        }`}
        radius={90}
      >
        <div
          className={getCardStyles(isHovered)}
          onMouseEnter={() => setIsSelected(number)}
          onMouseLeave={() => setIsSelected(null)}
          onClick={() => setIsSelected(number)}
        >
          <div className="flex justify-between items-center w-full mb-6 px-10">
            <div className="w-10 h-10 flex items-start justify-start">
              {isSectionFour ? (
                <TbClick
                  className={`text-4xl md:text-5xl ${
                    isHovered ? "text-dark" : "text-dark"
                  }`}
                />
              ) : (
                <BsRobot
                  className={`text-4xl md:text-5xl ${
                    isHovered ? "text-white" : "text-dark"
                  }`}
                />
              )}
            </div>
            <div
              className={`${
                isSectionFour ? "bg-transparent text-white" : "bg-primary"
              } text-xl 2xl:text-2xl font-bold px-4 py-2 rounded-full flex items-center justify-center`}
            >
              {number}
            </div>
          </div>

          <div className="py-4 md:py-10 mx-4 2xl:mx-10 title-animation">
            <h2 className="text-2xl 2xl:text-4xl font-bold text-start mb-5 2xl:mb-10">
              {title}
            </h2>
            <p className="text-start text-sm 2xl:text-base">{subtitle}</p>
          </div>
        </div>
      </Squircle>
    </ScrollAnimation>
  );
}
