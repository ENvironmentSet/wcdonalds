"use client";

import MessageBox from "@/components/MessageBox/MessageBox";
import styles from "./index.module.css";
import { motion } from "motion/react";
import Character from "@/components/Character/Character";
import workerImageUrl from "@/public/assets/character/manager_character.png";
export default function Step2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className={styles.content_wrapper}
    >
      <MessageBox>석상씨는 AI니까 레시피 안알려줘도 다 알죠? 우리 웩도날드의 시그니처 ‘빅웩웩’ 만들어봐요.</MessageBox>
      <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />
    </motion.div>
  );
}
