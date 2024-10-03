import Image from "../../assets/images/yellow_1.png";
import CardNews from "../CardNews";
import ScrollAnimation from "react-animate-on-scroll";

const cards = [
  {
    id: 1,
    url: Image,
    tag: "Finance",
    title: "Title 1",
    subtitle:
      "Understanding the future of digital currencies and blockchain. But also the future of digital currencies and blockchain.",
  },
  {
    id: 2,
    url: Image,
    tag: "Features",
    title: "Title 2",
    subtitle:
      "Understanding the future of digital currencies and blockchain. But also the future of digital currencies and blockchain.",
  },
  {
    id: 3,
    url: Image,
    tag: "Finance",
    title: "Title 3",
    subtitle:
      "Understanding the future of digital currencies and blockchain. But also the future of digital currencies and blockchain.",
  },
];

export default function SectionFive() {
  return (
    <section className="flex-col justify-center items-center py-20">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 xl:my-20">
          <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark mb-6 xl:mb-10">
            Section News
          </h2>
          <p className="text-dark text-lg lg:text-xl 2xl:text-2xl">
            Stay tuned with latest updates
          </p>
        </div>

        <div className="flex gap-10">
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <CardNews card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
