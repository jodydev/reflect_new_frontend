import Main from "../components/Main";
import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
// import InitCustomCursor from '../components/cursor/InitCustomCursor';
import Animations from "../components/Animations";
import InfoSection from "../components/InfoSection";
import InfoSectionTwo from "../components/InfoSectionTwo";
import InfoSectionThree from "../components/InfoSectionThree";

const Home = () => {
  return (
    <div className="my-app">
      <main>
        <Main />
        <InfoSection />
        <InfoSectionTwo />
        <InfoSectionThree />

        {/* <TextSliderLargeTwo />
        <CounterOne />
        <GenerationThree />
        <Partner />
        <Easy />
        <OverviewTwo />
        <EasyTwo />
        <Review />
        <EasyThree /> */}
      </main>
      {/* <Footer /> */}
      {/* <InitCustomCursor /> */}
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default Home;
