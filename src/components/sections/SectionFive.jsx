import CardNews from "../CardNews";

export default function SectionFive() {
  return (
    <section
      id="section_five"
      className="flex-col justify-center items-center pt-20 pb-20 md:pt-40 md:pb-40 2xl:md:pb-60"
    >
      <div className="flex flex-col items-center justify-start relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 md:my-20">
          <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark md:mb-5">
            News Section
          </h2>
          <p className="title-animation text-dark text-lg lg:text-xl 2xl:text-2xl">
            Stay tuned with our latest updates
          </p>
        </div>

        <div className="flex flex-col md:flex-row mx-10 mt-20 md:mt-0 2xl:mt-20 md:mx-0">
          <CardNews />
        </div>
      </div>
    </section>
  );
}
