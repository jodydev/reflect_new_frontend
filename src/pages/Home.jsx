import Main from "../components/Main";
import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
// import InitCustomCursor from '../components/cursor/InitCustomCursor';
// import Animations from "../components/Animations";
import InfoSection from "../components/sections/InfoSection";
import InfoSectionTwo from "../components/sections/InfoSectionTwo";
import InfoSectionThree from "../components/sections/InfoSectionThree";

const Home = () => {
  return (
    <div className="my-app">
      <main>
        <Main />
        <InfoSection />
        <InfoSectionTwo />
        <InfoSectionThree />
      </main>
      {/* <Footer /> */}
      {/* <InitCustomCursor /> */}
      <ScrollProgressButton />
      {/* <Animations /> */}
    </div>
  );
};

export default Home;
