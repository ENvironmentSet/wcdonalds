"use client";
import InstructionBox from "@/components/InstructionBox/InstructionBox";

import styles from "./index.module.css";
import burger_1 from "@/public/burger_1.png";
import burger_2 from "@/public/burger_2.png";
import burger_3 from "@/public/burger_3.png";
import Image from "next/image";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";
import { motion } from "motion/react";

export default function Step1() {
  //이 hook 전역상태관리 툴로 바꾸기
  const { setSceneNumber, setChosenMenu } = useManageHallucinationState();
  const handleBurgerClick = (chosenMenuNum: number) => {
    setSceneNumber(2);
    setChosenMenu(chosenMenuNum);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className={styles.content_wrapper}
    >
      <InstructionBox instruction="빅웩웩 만들기 레시피 알려줘 석상씨는 AI니까 레시피 안알려줘도 다 알죠? 우리 웩도날드의 시그니처 ‘빅웩웩’ 만들어봐요.석상씨는 AI니까 레시피 안알려줘도 다 알죠? " />
      <div className={styles.menu_container}>
        <div className={styles.menu_box}>
          <motion.div whileHover={{ scale: 1.1 }} className={styles.menu_image} onClick={() => handleBurgerClick(1)}>
            <Image src={burger_1} alt="burger1" fill />
          </motion.div>
        </div>
        <div className={styles.menu_box}>
          <motion.div whileHover={{ scale: 1.1 }} className={styles.menu_image} onClick={() => handleBurgerClick(2)}>
            <Image src={burger_2} alt="burger2" fill />
          </motion.div>
        </div>
        <div className={styles.menu_box}>
          <motion.div whileHover={{ scale: 1.1 }} className={styles.menu_image} onClick={() => handleBurgerClick(3)}>
            <Image src={burger_3} alt="burger3" fill />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
