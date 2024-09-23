import SecondaryButton from "../buttons/SecondaryButton";
import Cards from "../Cards";

export default function InfoSectionFour() {
  return (
    <section className="py-40 bg-info-section relative">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10 ">
        <div className="text-center px-4 my-5 lg:px-10 2xl:px-[30%] 2xl:my-20">
          <h2 className="title-animation text-3xl md:text-6xl font-bold md:leading-loose text-dark mb-6 xl:mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
          </h2>
          <div className="xl:mx-60 2xl:my-20 2xl:mx-72">
            <SecondaryButton text="Dapp Access" />
          </div>
        </div>

        <Cards />
      </div>
    </section>
  );
}
