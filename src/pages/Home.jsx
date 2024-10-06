import Header from "../components/Header";
import Hero from "../components/Hero";
import AssetCarousel from "../components/AssetCarousel";
import SectionOne from "../components/sections/SectionOne";
import SectionTwo from "../components/sections/SectionTwo";
import SectionThree from "../components/sections/SectionThree";
import SectionFour from "../components/sections/SectionFour";
import SectionFive from "../components/sections/SectionFive";
import SectionSix from "../components/sections/SectionSix";
import Footer from "../components/Footer";
import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
import Animations from "../components/Animations";

export default function Home() {
  return (
    <div className="bg-tertiary">
      <main className="md:bg-[url('/src/assets/images/yellow_shadow.webp')] bg-contain bg-no-repeat bg-right-top bg-fixed z-10">
        <Header />
        <Hero />
        <AssetCarousel />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>
      <Footer />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
}
