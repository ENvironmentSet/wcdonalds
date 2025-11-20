"use client";

import { useState } from "react";
import { Menu } from "@/hallucination/type";
export const useManageHallucinationState = () => {
  const [sceneNumber, setSceneNumber] = useState(0);
  const [chosenMenu, setChosenMenu] = useState<Menu | null>(null);

  return { sceneNumber, setSceneNumber, setChosenMenu, chosenMenu };
};
