import { Squircle } from "react-ios-corners";
import Image from "../assets/images/yellow_1.png"; // Importa l'immagine

export default function CardNews({ card }) {
  
  return (
    <div key={card.id}>
      <Squircle radius={90}>
        <div className="md:w-[350px] 2xl:w-[400px] md:h-[400px] 2xl:h-[500px] p-3 bg-white">
          <Squircle radius={90}>
            <img
              src={Image}
              alt="Cryptocurrency"
              className="w-full h-40 md:h-60 object-cover rounded-lg mb-4 bg-dark"
            />
          </Squircle>
          <div className="news-content my-5 px-5">
            <span className="text-primary  text-xs font-semibold ">
              {card.tag || "Finance"}
            </span>
            <h3 className="news-title text-xl 2xl:text-2xl font-bold text-gray-900 mt-2">
              {card.title}
            </h3>
            <p className="news-subtitle text-sm text-gray-600 mt-1">
              {card.subtitle}
            </p>
          </div>
        </div>
      </Squircle>
    </div>
  );
}
