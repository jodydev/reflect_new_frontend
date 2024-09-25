export default function ProgressStepper({
  steps,
  currentStep,
  completedStep,
  disableNavigation,
  handleStepClicked,
}) {
  const isStepCurrent = (index) => index + 1 === currentStep;

  const isStepCompleted = (index) => index + 1 < currentStep;

  const isStepNavigable = (index) => completedStep >= index;

  const getButtonClassNames = (isCompleted, isCurrent) => {
    if (isCompleted) {
      return "bg-primary text-white border-primary";
    } else if (isCurrent) {
      return "bg-primary text-white border-primary scale-125 shadow-md";
    } else {
      return "bg-transparent border-dark";
    }
  };

  const getStepClassNames = (isCurrent, isCompleted) => {
    let baseClass = "flex items-center space-x-10 mb-2 text-2xl xl:text-3xl 2xl:text-5xl font-bold";
    if (isCurrent) {
      return `${baseClass} text-primary`;
    } else if (isCompleted) {
      return `${baseClass} text-primary underline`;
    } else {
      return `${baseClass} text-dark`;
    }
  };

  return (
    <div className="flex flex-col items-start space-y-4 mx-20">
      <ol className="flex flex-col items-start">
        {steps.map((step, index) => {
          const isCurrent = isStepCurrent(index);
          const isCompleted = isStepCompleted(index);

          return (
            <li key={step.id} className="flex items-start">
              {/* Step Button */}
              <div className="flex flex-col items-center mr-6 animate-fadeInBottom">
                <button
                  className={`w-10 h-10 flex justify-center items-center border-2 rounded-full transition-all duration-300 ${getButtonClassNames(
                    isCompleted,
                    isCurrent
                  )}`}
                  type="button"
                  disabled={disableNavigation && !isStepNavigable(index)}
                  onClick={() => handleStepClicked(index + 1)}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </button>

                {/* Line between steps */}
                {index < steps.length - 1 && (
                  <div className="flex-grow h-32 w-px bg-dark"></div>
                )}
              </div>

              {/* Step Title and Label */}
              <div className="flex flex-col ms-3 title-animation">
                <h4 className={getStepClassNames(isCurrent, isCompleted)}>
                  {step.title}
                </h4>
                <span className="text-sm md:text-xl title-animation">{step.label}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

