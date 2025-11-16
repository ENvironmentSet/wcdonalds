"use client";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";
import styles from "./index.module.css";
import Step1 from "@/components/scenes/hallucination/Step1";
import Step2 from "@/components/scenes/hallucination/Step2";
import Step3 from "@/components/scenes/hallucination/Step3";

enum Menu {
  빅웩웩 = 1,
  웩웩스파이시 = 2,
  웩웩파운더 = 3,
}
export default function Hallucination() {
  const { sceneNumber, setChosenMenu, setSceneNumber, chosenMenu } = useManageHallucinationState();

  return (
    <div className={sceneNumber <= 2 ? styles.background_div : styles.background_div_matrix}>
      {sceneNumber === 1 && (
        <Step1
          onSelect={(menuNum) => {
            setChosenMenu(menuNum);
            setSceneNumber(2);
          }}
        />
      )}
      {sceneNumber === 2 && <Step2 onSelect={() => setSceneNumber(3)} />}
      {sceneNumber === 3 && (
        <Step3
          menu={Menu[chosenMenu ?? 1]}
          onSelect={() => {
            setSceneNumber(4);
          }}
        />
      )}
    </div>
  );
}
