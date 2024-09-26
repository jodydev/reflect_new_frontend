import { FaCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function ProgressStepper({
  steps,
  currentStep,
  completedStep,
  disableNavigation,
  handleStepClicked,
}) {
  const [showIcon, setShowIcon] = useState(null); 

  const handleClick = (stepIndex) => {
    handleStepClicked(stepIndex + 1);
    setShowIcon(stepIndex); 
  };

  return (
    <div className="flex flex-col items-start space-y-4 mx-20">
      <ol className="flex flex-col items-start">
        {steps.map((step, index) => {
          const isCurrent = index + 1 === currentStep;
          const isCompleted = index + 1 < currentStep;
          const isNavigable = completedStep >= index;

          return (
            <li key={step.id} className="flex items-start">
              {/* Step Button */}
              <div className="flex flex-col items-center mr-6 animate-fadeInBottom">
                <button
                  className={`w-10 h-10 flex justify-center items-center border-2 rounded-full transition-all duration-300 ${
                    isCompleted
                      ? "bg-primary text-white border-primary"
                      : isCurrent
                      ? "bg-primary text-white border-primary scale-125 shadow-md"
                      : "bg-transparent border-dark opacity-50 blur-sm"
                  }`}
                  type="button"
                  disabled={disableNavigation && !isNavigable}
                  onClick={() => handleClick(index)}
                >
                  {isCompleted || (showIcon === index && currentStep === index + 1) ? (
                    <FaCheck
                      className="w-5 h-5 text-white"
                    />
                  ) : (
                    <span>{index + 1}</span> 
                  )}
                </button>

                {/* Line between steps */}
                {index < steps.length - 1 && (
                  <div className="flex-grow h-32 w-px bg-dark bg-opacity-20"></div>
                )}
              </div>

              {/* Step Title and Label */}
              <div
                className={`flex flex-col ms-3 title-animation transition-all duration-300 
                  ${index === 0 ? "blur-none opacity-100" : ""} 
                  ${isCurrent && !isCompleted ? "blur-none opacity-100" : ""} 
                  ${isCompleted ? "blur-none opacity-100" : "opacity-100 blur-sm"}`}
              >
                <h4 className="flex items-center space-x-10 mb-2 text-2xl xl:text-3xl 2xl:text-5xl font-bold">
                  {step.title}
                </h4>
                <span className="text-sm md:text-xl title-animation">
                  {step.label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
