import { useState, useCallback } from "react";
import { steps } from "../../data/steps";
import ScrollAnimation from "react-animate-on-scroll";
import ProgressStepper from "../ProgressStepper";
import Video from "../../assets/images/video_2.webm";

export default function SectionTwo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(0);

  const handleStepClicked = useCallback(
    (value) => {
      setCurrentStep(value);
      if (value > completedStep) {
        setCompletedStep(value - 1);
      }
    },
    [completedStep]
  );

  return (
    <section
      id="section_two"
      className="py-12 flex-col justify-center items-center"
    >
      <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark mb-6 xl:mb-10">
        Why Reflect on Base?
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-40 py-10 2xl:py-40">
        <ScrollAnimation duration={2} animateIn="fadeInLeft">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[400px] animate-fadeInRight"
          >
            <source src={Video} type="video/webm" />
          </video>
        </ScrollAnimation>

        <div className="flex justify-center items-center">
          <ProgressStepper
            steps={steps}
            currentStep={currentStep}
            completedStep={completedStep}
            disableNavigation={false}
            handleStepClicked={handleStepClicked}
          />
        </div>
      </div>
    </section>
  );
}
