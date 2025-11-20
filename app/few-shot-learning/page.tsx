"use client";

import { useLinearNavigation } from "@/hooks/useLinearNavigation";
import { Intro } from "./Intro";
import { Mistakes } from "./Mistakes";

export default function FewShotLearning() {
  const [step] = useLinearNavigation([
    (moveNext) => <Intro onMoveNext={() => moveNext()} />,
    () => <Mistakes onMoveNext={() => {}} />,
  ])

  return step;
}