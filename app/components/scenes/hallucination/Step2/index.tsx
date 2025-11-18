"use client";

import MessageBox from "@/components/MessageBox/MessageBox";
import styles from "./index.module.css";
import { motion } from "motion/react";
import Character from "@/components/Character/Character";
import managerImageUrl from "@/public/assets/character/manager_character.png";
import workerImageUrl from "@/public/assets/character/worker_character01.png";
import { useState } from "react";

import workerImageUrl_02 from "@/public/assets/character/worker_character02.png";
import { Menu } from "@/hallucination/type";

type StepProps = {
  onSelect: () => void;
  menu: Menu;
};

export default function Step2({ onSelect, menu }: StepProps) {
  const [clickCounter, setClickCounter] = useState(0);
  const handleScreenClick = () => {
    setClickCounter((prev) => prev + 1);
    if (clickCounter === 2) onSelect();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content_wrapper}
      onClick={() => handleScreenClick()}
    >
      {clickCounter === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
          className={styles.dim_overlay}
        />
      )}

      <MessageBox>
        {clickCounter === 0
          ? `석상씨는 AI니까 레시 피 안알려줘도 다 알죠? 우리 웩도날드의 시그니처 ‘${Menu[menu]}’ 만들어봐요.`
          : clickCounter === 1
          ? "하 AI라고 다 아는 게 아닌데;;; 모르는데 어떡하지..괜찮아 인생은 기세다. 기세로 하자…"
          : "넵! 당연하죠 완・벽・하・게 숙지했습니다! 만들어볼게요!"}
      </MessageBox>
      <div className={styles.character_wrapper}>
        <Character imageUrl={managerImageUrl} size="l" characterName="석상이 매니저" />
        <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />
      </div>
      {clickCounter == 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.upper_character_wrapper}
        >
          <Character imageUrl={workerImageUrl_02} size="l" characterName="석상이" />
        </motion.div>
      )}
    </motion.div>
  );
}
