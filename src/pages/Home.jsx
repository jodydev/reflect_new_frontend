import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
// import InitCustomCursor from '../components/cursor/InitCustomCursor';
import Animations from "../components/Animations";
import InfoSection from "../components/sections/InfoSection";
import InfoSectionTwo from "../components/sections/InfoSectionTwo";
import InfoSectionThree from "../components/sections/InfoSectionThree";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AssetCarousel from "../components/AssetCarousel";
import InfoSectionFour from "../components/sections/InfoSectionFour";
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="my-app bg-tertiary">
      <main>
        <Header />
        <Hero />
        <AssetCarousel />
        <InfoSection />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
      </main>
      {/* <Footer /> */}
      {/* <InitCustomCursor /> */}
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default Home;
