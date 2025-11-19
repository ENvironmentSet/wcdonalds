"use client";
import InstructionBox from "@/components/InstructionBox/InstructionBox";

import styles from "./index.module.css";
import burger_1 from "@/public/assets/burger/burger_1.png";
import burger_2 from "@/public/assets/burger/burger_2.png";
import burger_3 from "@/public/assets/burger/burger_3.png";
import Image from "next/image";

import { motion } from "motion/react";
import { Menu } from "@/hallucination/type";

type StepProps = {
  onSelect: (menu: Menu) => void;
};
const menus: Menu[] = [Menu.빅웩웩, Menu.웩웩스파이시, Menu.웩웩파운더];

export default function Step1({ onSelect }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className={styles.content_wrapper}
    >
      <InstructionBox
        instruction={[
          "당신은 지금 웩도날드의 매니저입니다. 아래의 웩도날드 메뉴판에서 하나를 선택하고,",
          "알바생 석상이에게 만들어보라는 프롬프트를 입력해보세요.",
        ]}
      />
      <div className={styles.menu_container}>
        {[burger_1, burger_2, burger_3].map((img, idx) => {
          const menu = menus[idx];
          return (
            <div key={idx} className={styles.menu_box}>
              <motion.div whileHover={{ scale: 1.1 }} className={styles.menu_image} onClick={() => onSelect(menu)}>
                <Image src={img} alt={`burger${idx + 1}`} fill />
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
