import { type ReactNode, useState, useTransition, ViewTransition } from "react";

export function useLinearNavigation(steps: [...((moveNext: () => void, isPending: boolean) => ReactNode)[], () => ReactNode]): [ReactNode, boolean] {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPending, startTransition] = useTransition();
  const currentStep = steps[currentStepIndex];

  if (!currentStep) throw new Error("No step found");

  const step = currentStep(() => {
    if (currentStepIndex === steps.length - 1) {
      throw new Error("Last step");
    }

    startTransition(() => {
      setCurrentStepIndex(currentStepIndex + 1);
    })
  }, isPending);

  return [<ViewTransition key="useLinearNavigation/noop">{step}</ViewTransition>, isPending];
}
