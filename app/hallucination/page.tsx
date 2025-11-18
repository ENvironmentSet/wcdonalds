"use client";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";
import styles from "./index.module.css";
import Step1 from "@/components/scenes/hallucination/Step1";
import Step2 from "@/components/scenes/hallucination/Step2";
import Step3 from "@/components/scenes/hallucination/Step3";

import { Menu, MenuMessage } from "@/hallucination/type";
const menuConfig: Record<Menu, MenuMessage> = {
  [Menu.빅웩웩]: {
    message: [
      "빅... 웩웩...? 음... 빅맥이랑 비슷한건가?",
      "아니다 빅웩웩이니까... 크게 웩할만한 버거면 보자마자 우웩할 버거인가 보다! 역시 난 천재야 ",
    ],
  },
  [Menu.웩웩스파이시]: {
    message: [
      "웩웩스파이시...? 음... 맥스파이시랑 비슷한건가?",
      "아니다 웩웩스파이시니까...보자마자 우웩할 버거인가 보다! 역시 난 천재야 ",
    ],
  },
  [Menu.웩웩파운더]: {
    message: [
      "웩웩파운더...? 음... 쿼터파운더랑 비슷한건가?",
      "아니다 웩웩파운더니까...보자마자 우웩할 버거인가 보다! 역시 난 천재야 ",
    ],
  },
} as const;

export default function Hallucination() {
  const { sceneNumber, setChosenMenu, setSceneNumber, chosenMenu } = useManageHallucinationState();

  return (
    <div className={sceneNumber <= 2 ? styles.background_div : styles.background_div_matrix}>
      {sceneNumber === 1 && (
        <Step1
          onSelect={(menu) => {
            setChosenMenu(menu);
            setSceneNumber(2);
          }}
        />
      )}
      {sceneNumber === 2 && <Step2 menu={chosenMenu ?? Menu.빅웩웩} onSelect={() => setSceneNumber(3)} />}
      {sceneNumber === 3 && (
        <Step3
          menu={chosenMenu ?? Menu.빅웩웩}
          menuMessage={menuConfig[chosenMenu ?? Menu.빅웩웩]}
          onSelect={() => {
            setSceneNumber(4);
          }}
        />
      )}
    </div>
  );
}
