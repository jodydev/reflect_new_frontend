import Header from "../components/Header";
import Hero from "../components/Hero";
import AssetCarousel from "../components/AssetCarousel";
import SectionOne from "../components/sections/SectionOne";
import SectionTwo from "../components/sections/SectionTwo";
import SectionThree from "../components/sections/SectionThree";
import SectionFour from "../components/sections/SectionFour";
import SectionFive from "../components/sections/SectionFive";
import Footer from '../components/Footer';
import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
import Animations from "../components/Animations";
import SectionSix from "../components/sections/SectionSix";
// import InitCustomCursor from '../components/cursor/InitCustomCursor';

const Home = () => {
  return (
    <div className="my-app bg-tertiary">
      <main>
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
      {/* <InitCustomCursor /> */}
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default Home;
