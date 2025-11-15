"use client";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";
import styles from "./index.module.css";
import Step1 from "@/components/scenes/hallucination/Step1";

export default function Hallucination() {
  const { sceneNumber } = useManageHallucinationState();
  return (
    <div className={styles.background_div}>
      {sceneNumber === 0 && <Step1 />}
      {sceneNumber === 1 && <Step1 />}
      {sceneNumber === 2 && <Step1 />}
    </div>
  );
}
