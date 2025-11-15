"use client";
import InstructionBox from "@/components/InstructionBox/InstructionBox";

import styles from "./index.module.css";
import burger_1 from "@/public/burger_1.png";
import burger_2 from "@/public/burger_2.png";
import burger_3 from "@/public/burger_3.png";
import Image from "next/image";

import { motion } from "motion/react";

type Step1Props = {
  onSelect: (menuNum: number) => void;
};
export default function Step1({ onSelect }: Step1Props) {
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
        {[burger_1, burger_2, burger_3].map((img, idx) => (
          <div key={idx} className={styles.menu_box}>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.menu_image} onClick={() => onSelect(idx + 1)}>
              <Image src={img} alt={`burger${idx + 1}`} fill />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
