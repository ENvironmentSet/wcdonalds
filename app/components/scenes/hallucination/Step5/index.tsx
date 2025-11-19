import MessageBox from "@/components/MessageBox/MessageBox";
import { Menu } from "@/hallucination/type";
import Image from "next/image";
import bg_fire from "@/public/assets/fire.png";
import styles from "./index.module.css";
import Character from "@/components/Character/Character";
import { motion } from "motion/react";

import managerImageUrl from "@/public/assets/character/manager_character_angry.png";
import managerImageUrl2 from "@/public/assets/character/manager_character.png";
import workerImageUrl from "@/public/assets/character/worker_character02.png";
import TextButton from "@/components/TextButton/TextButton";
import { useState } from "react";

export default function Step5({ menu, onSelect }: { menu: Menu; onSelect: () => void }) {
  const [sceneNum, setSceneNum] = useState(0);
  const handleBtnClick = () => {
    if (sceneNum == 1) {
      onSelect();
    }
    setSceneNum((prev) => prev + 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content_wrapper}
    >
      {sceneNum == 0 && (
        <div className={styles.fire_container}>
          <Image src={bg_fire} alt="불" fill />
        </div>
      )}
      <MessageBox>
        {sceneNum == 0 ? (
          <p>
            아니 석상씨 이게 뭐에요? 이게 {Menu[menu]}예요??? <span>Are you serious?!!!</span>
          </p>
        ) : (
          <p>후 진정하자..석상씨 모르면 모른다고 하세요. 제가 {Menu[menu]} 레시피 드릴테니까 외우시고요.</p>
        )}
      </MessageBox>
      <div className={styles.lower_wrapper}>
        <Character imageUrl={workerImageUrl} size="m" characterName="좌절하는 석상이" />
        <Character
          imageUrl={sceneNum == 0 ? managerImageUrl : managerImageUrl2}
          size="l"
          characterName="분노하는 매니저"
        />
        <div className={styles.btn_wrapper}>
          <TextButton text={sceneNum == 0 ? "진정진정 Calm down" : "레시피 전달하기"} onClick={handleBtnClick} />
        </div>
      </div>
      {sceneNum == 1 && (
        <div className={styles.popup_message}>
          <TextButton text="죄송합니다.." color="w" />
        </div>
      )}
      {sceneNum == 0 && <div className={styles.bg_overlay} />}
    </motion.div>
  );
}
