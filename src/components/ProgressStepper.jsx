import { useState, useEffect, useRef } from "react";
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
  debug = false,
}) {
  const [completedIconIndex, setCompletedIconIndex] = useState(null);
  const stepperRef = useRef(null); 

  const handleClick = (stepIndex) => {
    handleStepClicked(stepIndex + 1);
    setCompletedIconIndex(stepIndex);
  };

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    steps.forEach((step, index) => {
      ScrollTrigger.create({
        trigger: `#step-${index}`, // Step trigger based on id
        start: "top center", // Trigger when top of step reaches center of viewport
        end: "bottom center", // Keep active until bottom of step reaches center
        onEnter: () => handleClick(index), // Move to the next step when entering the viewport
        markers: debug, // Show markers if debug is true
        toggleActions: "play none none none", // Control the animation actions
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [steps, debug]);

  return (
    <div
      id="progress-stepper"
      ref={stepperRef} 
      className="flex flex-col items-start space-y-4 mx-20"
    >
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
