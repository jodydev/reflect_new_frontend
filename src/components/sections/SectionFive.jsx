import Image from "../../assets/images/yellow_1.png";
import CardNews from "../CardNews";

const cards = [
  {
    id: 1,
    url: Image,
    tag: "Finance",
    title: "Title 1",
    subtitle: "Understanding the future of digital currencies and blockchain.",
  },
  {
    id: 2,
    url: Image,
    tag: "Features",
    title: "Title 2",
    subtitle: "Understanding the future of digital currencies and blockchain.",
  },
  {
    id: 3,
    url: Image,
    tag: "Technology",
    title: "Title 3",
    subtitle: "Understanding the future of digital currencies and blockchain.",
  },
];

export default function SectionFive() {
  return (
    <section className="flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 2xl:my-20">
          <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark mb-6 xl:mb-10">
            Section News
          </h2>
        </div>
        <div className="flex h-full overflow-hidden">
          <div className="relative h-full">
            <div className="sticky top-0 flex h-full items-center gap-20">
              {cards.map((card) => {
                return <CardNews card={card} key={card.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
