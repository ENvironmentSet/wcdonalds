"use client";

import { useState } from "react";

export const useManageHallucinationState = () => {
  const [sceneNumber, setSceneNumber] = useState(0);

  return { sceneNumber, setSceneNumber };
};
