import { useState, useCallback } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ProgressStepper from "../ProgressStepper";
import Image from "../../assets/images/yellow_1.png";

const steps = [
  {
    id: "1",
    title: "Security",
    label:
      "Lorem cioasjfoi uadn a qwiund ow qadwq, Lorem cioasjfoi uadn a qwiund ow qadwq",
  },
  {
    id: "2",
    title: "Transparency",
    label:
      "Lorem cioasjfoi uadn a qwiund ow qadwq, Lorem cioasjfoi uadn a qwiund ow qadwq",
  },
  {
    id: "3",
    title: "Scalability",
    label:
      "Lorem cioasjfoi uadn a qwiund ow qadwq, Lorem cioasjfoi uadn a qwiund ow qadwq",
  },
];

export default function SectionTwo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(0);

  // Memorizza la funzione di gestione del clic sui passi per evitare ri-render inutili
  const handleStepClicked = useCallback((value) => {
    setCurrentStep(value);
    if (value > completedStep) {
      setCompletedStep(value - 1);
    }
  }, [completedStep]);

  return (
    <section className="py-12 flex-col justify-center items-center">
      <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark mb-6 xl:mb-10">
        Why RWA market built on Base?
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-40 py-10 2xl:py-40">
        <ScrollAnimation duration={2} animateIn="fadeInLeft">
          <img className="hidden md:block" src={Image} alt="Image description" />
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
