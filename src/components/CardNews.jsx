import { Squircle } from "react-ios-corners";
import Image from "../assets/images/yellow_1.png";

export default function CardNews({ card }) {
  return (
      <div key={card.id}>
<Squircle radius={90}>
  <div className="relative md:w-[350px] 2xl:w-[400px] md:h-[450px] 2xl:h-[500px] bg-white bg-opacity-40">
    <Squircle radius={90}>
      <img
        src={Image}
        alt="Cryptocurrency"
        className="p-10 w-full md-h-40 object-cover rounded-lg bg-dark"
      />
    </Squircle>

    {/* Div rosso posizionato sotto */}
    <div className="z-10 h-18 bg-red-500 w-full absolute bottom-0 top-[55%]"></div>

    {/* Contenuti sopra al div rosso */}
    <div className="z-20 relative my-3 2xl:my-5 px-5">
      <span className="text-primary text-xs font-semibold ">
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
