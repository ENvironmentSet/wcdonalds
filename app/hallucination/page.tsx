"use client";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";
import styles from "./index.module.css";
import Step1 from "@/components/scenes/hallucination/Step1";
import Step2 from "@/components/scenes/hallucination/Step2";
import { useEffect } from "react";

export default function Hallucination() {
  const { sceneNumber } = useManageHallucinationState();

  useEffect(() => {
    console.log("sceneNumber changed:", sceneNumber);
  }, [sceneNumber]);
  return (
    <div className={styles.background_div}>
      {sceneNumber === 0 && <Step1 />}
      {sceneNumber === 1 && <Step1 />}
      {sceneNumber === 2 && <Step2 />}
    </div>
  );
}
