import { steps } from "../../data/steps";

export default function SectionTwo() {
  return (
    <section
      id="section_two"
      className="flex-col justify-center items-center md:h-screen mb-40 md:mb-0"
    >
      <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center  leading-loose text-dark mb-6 xl:mb-10">
        Why Reflect on Base?
      </h2>

      <div className="container mx-auto flex items-center justify-center py-0 md:py-10 2xl:py-40 px-5 md:px-0 mt-20 md:mt-0">
        <div className="md:grid md:grid-cols-3 md:grid-rows-3 gap-10 2xl:gap-40 justify-center items-center space-y-10 space--10">
          {steps.slice(0, 4).map((step, index) =>
            step.id === "4" ? (
              <div
                key={index}
                className="hidden md:block col-start-2 row-start-2 w-full h-full flex items-center justify-center"
              >
                <img
                  src={step.img}
                  alt="Image"
                  className="w-1/3 object-cover rounded-3xl absolute md:top-[290%] xl:top-[250%] 2xl:top-[260%] left-[30%]"
                />
              </div>
            ) : (
              <div
                key={index}
                className={`col-start-${
                  index === 0 ? 2 : index === 1 ? 1 : index === 2 ? 3 : 2
                } row-start-${
                  index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 2 : 3
                }
                 w-full h-32 md:h-40 2xl:h-48 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 saturate-100 backdrop-contrast-100 flex items-center justify-center p-6 2xl:p-10 rounded-3xl border-l-8 border-primary`}
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-bold mb-2 2xl:mb-5 text-start title-animation">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm 2xl:text-xl text-start title-animation">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            )
          )}
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
