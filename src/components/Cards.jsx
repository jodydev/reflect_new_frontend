import { useState, useEffect } from "react";
import { BsRobot } from "react-icons/bs";

export default function Cards() {
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = 100; 

      if (scrollPosition > triggerHeight && !isSelected) {
        setIsSelected("1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSelected]);

  return (
    <div className="flex flex-col items-center 2xl:py-10">
      <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 lg:space-x-20 space-y-10 md:space-y-0 py-10">
        <Card
          number="1"
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <Card
          number="2"
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <Card
          number="3"
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      </div>

      {/* Indicatore di posizione */}
      <div className="flex space-x-2 mt-5">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`w-3 h-3 rounded-full hover:cursor-pointer ${
              isSelected === num.toString() ? "bg-dark w-[30px]" : "bg-gray-400"
            }`}
            onClick={() => setIsSelected(num.toString())}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ number, isSelected, setIsSelected }) {
  const isHovered = isSelected === number; 

  return (
    <div
      className={`${
        isHovered
          ? "bg-dark text-white bg-opacity-100"
          : "bg-white text-dark bg-opacity-20"
      } group relative flex flex-col items-center justify-start py-10 w-full max-w-[350px] md:max-w-full h-[300px] md:h-[400px] border-2 border-dark backdrop-blur-lg rounded-[35px] shadow-xl transition-all duration-500 ease-in-out transform hover:cursor-pointer ${
        isHovered
          ? "w-[450px] 2xl:w-[600px] border-primary z-10 opacity-100"
          : "w-[300px] 2xl:hover:w-[600px] hover:border-white hover:z-10 hover:cursor-pointer group-hover:opacity-50 hover:opacity-100"
      }`}
      onMouseEnter={() => setIsSelected(number)} 
      onMouseLeave={() => setIsSelected(null)}
      onClick={() => setIsSelected(number)} 
    >
      <div className="flex justify-between items-start w-full mb-6 px-10">
        <div className="w-10 h-10 flex items-start justify-start">
          <BsRobot
            className={`${isHovered ? "text-white" : "text-dark"} text-4xl`}
          />
        </div>
        <div className="text-xl font-bold">{number}</div>
      </div>

      <div className="py-4 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-start mb-5 mx-10">
          Monitor and Manage
        </h2>
        <p className="text-start font mx-10 text-sm md:text-base">
          Oversee all aspects of your business from a single control center.
        </p>
      </div>
    </div>
  );
}
