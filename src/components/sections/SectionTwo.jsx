import { steps } from "../../data/steps";
import Video from "../../assets/video/cube.webm";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionTwo() {
  return (
    <section
      id="section_two"
      className="relative flex-col justify-center items-center h-full lg:h-screen"
    >
      <h2 className="mb-20 lg:mb-0 text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark">
        Why Reflect on Base?
      </h2>

      <div className="container mx-auto flex flex-col items-center justify-center py-0 md:py-10 2xl:py-20 2xl:px-20 fh:px-10 px-5 md:px-0 mb-40 lg:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Card sinistra */}
          <ScrollAnimation
            animateIn="fadeInLeft"
            duration={2}
            className="lg:col-start-1 lg:row-start-2 w-full h-32 lg:h-24 fh:h-32 2xl:h-40 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 flex items-center justify-center p-6 2xl:p-10 rounded-t-3xl border-l-8 border-primary"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2 text-start">
                {steps[0].title}
              </h3>
              <p className="text-xs md:text-sm 2xl:text-lg text-start">
                {steps[0].subtitle}
              </p>
            </div>
          </ScrollAnimation>

          {/* Card destra */}
          <ScrollAnimation
            animateIn="fadeInRight"
            duration={2}
            className="lg:col-start-3 lg:row-start-2 w-full h-32 lg:h-24 fh:h-32 2xl:h-40 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 flex items-center justify-center p-6 2xl:p-10 rounded-t-3xl border-l-8 border-primary"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2 text-start">
                {steps[1].title}
              </h3>
              <p className="text-xs md:text-sm 2xl:text-lg text-start">
                {steps[1].subtitle}
              </p>
            </div>
          </ScrollAnimation>

          {/* Card centrale */}
          <ScrollAnimation
            animateIn="fadeInUp"
            duration={2}
            className="lg:col-start-2 lg:row-start-1 w-full h-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 flex items-center justify-center p-6 md:p-5 2xl:p-10 rounded-t-3xl border-l-8 border-primary"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2 text-start">
                {steps[2].title}
              </h3>
              <p className="text-xs md:text-sm 2xl:text-lg text-start">
                {steps[2].subtitle}
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Video centrale */}
        <div className="w-full flex items-center justify-center animate-fadeInBottom transition duration-1000">
          <video
            onMouseOver={(e) => e.target.play()}
            loop
            muted
            playsInline
            className="w-full h-auto scale-125"
          >
            <source src={Video} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}

// const [currentStep, setCurrentStep] = useState(1);
//   const [completedStep, setCompletedStep] = useState(0);

//   const handleStepClicked = useCallback(
//     (value) => {
//       setCurrentStep(value);
//       if (value > completedStep) {
//         setCompletedStep(value - 1);
//       }
//     },
//     [completedStep]
//   );

{
  /* <ScrollAnimation duration={2} animateIn="fadeInLeft">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[90%] mb-20 xl:scale-125 2xl:scale-150 animate-fadeInRight"
          >
            <source src={Video} type="video/webm" />
          </video>
        </ScrollAnimation> */
}

{
  /* <ProgressStepper
            steps={steps}
            currentStep={currentStep}
            completedStep={completedStep}
            disableNavigation={false}
            handleStepClicked={handleStepClicked}
          /> */
}
