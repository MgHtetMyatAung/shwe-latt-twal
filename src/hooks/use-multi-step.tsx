import { ReactElement, useState } from "react";

type Props = {
  steps: ReactElement[];
};

export default function useMultiStep({ steps }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const next = () => {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (step: number) => {
    setCurrentStep(step);
  };

  return {
    currentStep,
    step: steps[currentStep],
    next,
    back,
    isFirstStep,
    isLastStep,
    goTo,
    steps,
  };
}
