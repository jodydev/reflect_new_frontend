import Main from "../components/Main";
import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
// import InitCustomCursor from '../components/cursor/InitCustomCursor';
import Animations from "../components/Animations";
import SocialButton from "../components/buttons/SocialButton";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="my-app">
      <main>
        <Main />
        <section className="h-full bg-gray-900">
          <div className="flex items-center justify-center h-screen">
            <div className="w-full">
              <Spline
                style={{ width: "500px", height: "500px" }}
                scene="https://prod.spline.design/E4YD-HYnDoP6Ss86/scene.splinecode"
              />
            </div>
            <div className="w-full">
              <div class="container">
                <div class="card">
                  <h1 class="title">Designed For Work</h1>
                  <p class="subtitle">
                    Introducing the first ever 5G enabled tablet. You've got a
                    tablet that let's you play harder and work smarter.
                  </p>
                  <button class="btn">Get Started</button>
                </div>
                <div class="blob"></div>
              </div>
              Resources
            </div>
          </div>
        </section>
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
