"use client";

import MessageBox from "@/components/MessageBox/MessageBox";
import styles from "./index.module.css";
import { motion } from "motion/react";
import Character from "@/components/Character/Character";

import workerImageUrl from "@/public/assets/character/worker_character03.png";

import breadImageUrl from "@/public/assets/burger_ingredients/bread.png";
import baconImageUrl from "@/public/assets/burger_ingredients/bacon.png";
import cheeseImageUrl from "@/public/assets/burger_ingredients/cheese.png";
import lettuceImageUrl from "@/public/assets/burger_ingredients/lettuce.png";
import fireImageUrl from "@/public/assets/burger_ingredients/fire.png";
import tomatoImageUrl from "@/public/assets/burger_ingredients/tomato.png";
import onionImageUrl from "@/public/assets/burger_ingredients/onion.png";
import EmojiContainer from "@/components/EmojiContainer/EmojiContainer";
import burgerImageUrl from "@/public/assets/burger_ingredients/burger.png";
import burgerImageUrl2 from "@/public/assets/burger_ingredients/burger2.png";

type StepProps = {
  onSelect: () => void;
  menu: string;
};

const ingredientImages = [
  [breadImageUrl, "bread"],
  [baconImageUrl, "bacon"],
  [cheeseImageUrl, "cheese"],
  [lettuceImageUrl, "lettuce"],
  [fireImageUrl, "fire"],
  [tomatoImageUrl, "tomato"],
  [onionImageUrl, "onion"],
  [burgerImageUrl, "burger"],
  [burgerImageUrl2, "burger1"],
] as const;
const wcIncredientImages = [[]];
export default function Step3({ onSelect, menu }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className={styles.content_wrapper}
      onClick={() => onSelect()}
    >
      <MessageBox>{menu}...? 음... 빅맥이랑 비슷한건가?</MessageBox>
      <div className={styles.character_wrapper}>
        <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />
      </div>
      {ingredientImages.map(([src, name]) => {
        return (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2 }}
            className={`${styles.emoji_wrapper} ${styles[`emoji_${name}`]}`}
          >
            <EmojiContainer imagePath={src} altText={name} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
