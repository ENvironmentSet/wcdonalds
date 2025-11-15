"use client";

import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";

export default function Step2() {
  const { chosenMenu } = useManageHallucinationState();
  return <div>{chosenMenu}</div>;
}
