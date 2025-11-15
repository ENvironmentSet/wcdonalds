"use client";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";
import styles from "./index.module.css";
import Step1 from "@/components/scenes/hallucination/Step1";
import Step2 from "@/components/scenes/hallucination/Step2";

export default function Hallucination() {
  const { sceneNumber, setChosenMenu, setSceneNumber } = useManageHallucinationState();

  return (
    <div className={styles.background_div}>
      {sceneNumber === 1 && (
        <Step1
          onSelect={(menuNum) => {
            setChosenMenu(menuNum);
            setSceneNumber(2);
          }}
        />
      )}
      {sceneNumber === 2 && <Step2 />}
    </div>
  );
}
