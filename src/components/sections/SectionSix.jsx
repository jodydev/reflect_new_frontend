import Dashboard from "../../assets/images/dashboard.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionFive() {
  return (
    <section className="flex-col justify-center items-center py-20">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 xl:my-10">
          <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark mb-6 xl:mb-10">
            Lorem ipsum dolor
          </h2>
          <p className="text-dark text-lg lg:text-xl 2xl:text-2xl mx-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            facilis laudantium error maxime ex magnam minus quidem id nam ipsam.
          </p>
        </div>

        <div className="flex items-center justify-center mx-60">
          <ScrollAnimation duration={2} animateIn="fadeInUp">
            <img
              src={Dashboard}
              alt="dashboard image"
              className="rounded-3xl -z-50"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
