"use client";

import { useState } from "react";

export const useManageHallucinationState = () => {
  const [sceneNumber, setSceneNumber] = useState(1);
  const [chosenMenu, setChosenMenu] = useState<number | null>(null);

  return { sceneNumber, setSceneNumber, setChosenMenu, chosenMenu };
};
