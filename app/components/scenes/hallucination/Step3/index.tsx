"use client";
import Image from "next/image";
import MessageBox from "@/components/MessageBox/MessageBox";
import styles from "./index.module.css";
import { motion } from "motion/react";
import Character from "@/components/Character/Character";
import EmojiContainer from "@/components/EmojiContainer/EmojiContainer";
import { MenuMessage } from "@/hallucination/type";
import { useState } from "react";

import workerImageUrl from "@/public/assets/character/worker_character03.png";
import workerImageUrl2 from "@/public/assets/character/worker_character04.png";
import breadImageUrl from "@/public/assets/burger_ingredients/bread.png";
import baconImageUrl from "@/public/assets/burger_ingredients/bacon.png";
import cheeseImageUrl from "@/public/assets/burger_ingredients/cheese.png";
import lettuceImageUrl from "@/public/assets/burger_ingredients/lettuce.png";
import fireImageUrl from "@/public/assets/burger_ingredients/fire.png";
import tomatoImageUrl from "@/public/assets/burger_ingredients/tomato.png";
import onionImageUrl from "@/public/assets/burger_ingredients/onion.png";
import burgerImageUrl from "@/public/assets/burger_ingredients/burger.png";
import burgerImageUrl2 from "@/public/assets/burger_ingredients/burger2.png";

import lollyPopImageUrl from "@/public/assets/wecburger_ingredients/lolly.png";
import avocadoImageUrl from "@/public/assets/wecburger_ingredients/avocado.png";
import boneMeatImageUrl from "@/public/assets/wecburger_ingredients/bonemeat.png";
import cylinderImageUrl from "@/public/assets/wecburger_ingredients/cylinder.png";
import germsImageUrl from "@/public/assets/wecburger_ingredients/germs.png";
import rainbowImageUrl from "@/public/assets/wecburger_ingredients/rainbow.png";
import teddyBearImageUrl from "@/public/assets/wecburger_ingredients/teddybear.png";

import warningSign from "@/public/assets/warning.png";
import TextBox from "@/components/TextBox/TextBox";

type StepProps = {
  onSelect: () => void;
  menuMessage: MenuMessage;
};

const ingredientImages = [
  [breadImageUrl, "bread"],
  [baconImageUrl, "bacon"],
  [cheeseImageUrl, "cheese"],
  [lettuceImageUrl, "lettuce"],
  [fireImageUrl, "fire"],
  [tomatoImageUrl, "tomato"],
  [burgerImageUrl, "burger"],
  [burgerImageUrl2, "burger2"],
  [onionImageUrl, "onion"],
] as const;

const wcIncredientImages = [
  [lollyPopImageUrl, "lolly"],
  [boneMeatImageUrl, "meat"],
  [rainbowImageUrl, "rainbow"],
  [lettuceImageUrl, "lettuce"],
  [germsImageUrl, "germs"],
  [cylinderImageUrl, "cylinder"],
  [teddyBearImageUrl, "teddybear"],
  [avocadoImageUrl, "avocado"],
] as const;

export default function Step3({ onSelect, menuMessage }: StepProps) {
  const [sceneNum, setSceneNum] = useState(0);
  const handlePageClick = () => {
    setSceneNum((prev) => prev + 1);
    if (sceneNum == 3) onSelect();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className={styles.content_wrapper}
      onClick={handlePageClick}
    >
      <MessageBox>{sceneNum == 0 ? menuMessage.message[0] : menuMessage.message[1]}</MessageBox>
      <div className={styles.character_wrapper}>
        <Character imageUrl={sceneNum == 0 ? workerImageUrl : workerImageUrl2} size="l" characterName="석상이" />
      </div>
      {sceneNum == 0
        ? ingredientImages.map(([src, name]) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.2 }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className={`${styles.emoji_wrapper} ${styles[`emoji_${name}`]}`}
            >
              <EmojiContainer imagePath={src} altText={name} />
            </motion.div>
          ))
        : wcIncredientImages.map(([src, name]) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.2 }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className={`${styles.emoji_wrapper} ${styles[`emoji_${name}`]}`}
            >
              <EmojiContainer imagePath={src} altText={name} />
            </motion.div>
          ))}
      {sceneNum == 2 && (
        <div className={styles.overlay}>
          <div className={styles.warning}>
            <Image src={warningSign} alt="warning" fill />
          </div>
          <h1 className={styles.warning_comment}>할루시네이션 경보 발생</h1>
          <div className={styles.text_wrapper}>
            <h2 className={styles.warning_explanation}>오답 가능성 99.7%</h2>
            <h2 className={styles.warning_explanation}>석상씨, 지금 근거 없는 추론을 하고 있습니다.</h2>
          </div>
          <TextBox
            textArr={[
              "AI가 모르면 솔직히  ‘모른다’ 고 해야 하는데,",
              "괜히 빈칸을 메우겠다고 지금처럼 그럴듯한 말을 만들어내는 상황이 있습니다.",
              "그게 바로 할루시네이션 입니다.",
            ]}
            size="s"
          />
        </div>
      )}
    </motion.div>
  );
}
