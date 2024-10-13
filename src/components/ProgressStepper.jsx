import { useState, useEffect } from "react";
import { FaCheck } from "../utils/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProgressStepper({
  steps,
  currentStep,
  completedStep,
  disableNavigation,
  handleStepClicked,
  debug = true, // Add debug prop with default value false
}) {
  const [completedIconIndex, setCompletedIconIndex] = useState(null);

  const handleClick = (stepIndex) => {
    if (debug) {
      console.log(`Step ${stepIndex + 1} clicked`);
    }
    handleStepClicked(stepIndex + 1);
    setCompletedIconIndex(stepIndex);
  };

  useEffect(() => {
    const breakpoints = [2.5, 3.5, 4.5]; // Define breakpoints for the second and third steps

    breakpoints.forEach((breakpoint, index) => {
      ScrollTrigger.create({
        trigger: "#progress-stepper",
        start: `top ${breakpoint * 50}%`,
        onEnter: () => handleClick(index), // Adjust index to match the step
        markers: debug, // Enable markers if debug is true
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [debug]);

  useEffect(() => {
    if (debug) {
      console.log("Current Step:", currentStep);
      console.log("Completed Step:", completedStep);
      console.log("Completed Icon Index:", completedIconIndex);
    }
  }, [currentStep, completedStep, completedIconIndex, debug]);

  return (
    <div id="progress-stepper" className="flex flex-col items-start space-y-4 mx-20">
      <ol className="flex flex-col items-start">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isNavigable = completedStep >= index;

          const buttonClasses = `
            w-10 h-10 flex justify-center items-center border-2 rounded-full transition-all duration-300 
            ${
              isCompleted
                ? "bg-primary text-white border-primary"
                : isCurrent
                ? "bg-primary text-white border-primary scale-125 shadow-md"
                : "bg-transparent border-dark opacity-50 blur-sm"
            }
          `;

          const titleClasses = `
            flex flex-col ms-3 title-animation transition-all duration-300 
            ${
              isCompleted || isCurrent
                ? "blur-none opacity-100"
                : "opacity-100 blur-sm"
            }
          `;

          return (
            <li key={step.id} id={`step-${index}`} className="flex items-start">
              <div className="flex flex-col items-center mr-6 animate-fadeInBottom">
                <button
                  id="steps_button"
                  aria-label="steps button"
                  className={buttonClasses}
                  type="button"
                  disabled={disableNavigation && !isNavigable}
                  onClick={() => handleClick(index)}
                >
                  {isCompleted ||
                  (completedIconIndex === index &&
                    currentStep === stepNumber) ? (
                    <FaCheck className="w-5 h-5 text-white" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </button>

                {index < steps.length - 1 && (
                  <div className="flex-grow h-32 w-px bg-dark bg-opacity-20"></div>
                )}
              </div>

              <div className={titleClasses}>
                <h4 className="flex items-center space-x-10 mb-2 text-2xl xl:text-3xl 2xl:text-5xl font-bold">
                  {step.title}
                </h4>
                <span className="text-sm md:text-xl title-animation">
                  {step.subtitle}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
