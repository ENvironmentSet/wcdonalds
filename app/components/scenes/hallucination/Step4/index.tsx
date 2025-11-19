import styles from "./index.module.css";
import { motion } from "motion/react";
import { Menu } from "@/hallucination/type";
import MessageBox from "@/components/MessageBox/MessageBox";
import Character from "@/components/Character/Character";
import workerImageUrl from "@/public/assets/character/worker_character_withd_burger.png";
import wcBurgerImageUrl from "@/public/assets/burger/wcburger.png";
import Image, { StaticImageData } from "next/image";
import TextButton from "@/components/TextButton/TextButton";

import bgBigWeck from "@/public/step4_bigwcwc.png";
import bgSpicy from "@/public/step4_wcwcspicy.png";
import bgFounder from "@/public/stpe4_wcwcpounder.png";

type StepProps = {
  menu: Menu;
  onSelect: () => void;
};
const bgByMenu: Record<Menu, StaticImageData> = {
  [Menu.빅웩웩]: bgBigWeck,
  [Menu.웩웩스파이시]: bgSpicy,
  [Menu.웩웩파운더]: bgFounder,
};
export default function Step4({ menu, onSelect }: StepProps) {
  const bg = bgByMenu[menu];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content_wrapper}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.bg_overlay} />
      <MessageBox>{`매니저님! ${Menu[menu]} 버거 완성했습니다!`}</MessageBox>
      <div className={styles.lower_container}>
        <div className={styles.burger_button_wrapper}>
          <div className={styles.burger_wrapper}>
            <Image src={wcBurgerImageUrl} alt="요상한 버거" fill />
          </div>
          <TextButton text={"따끔하게 교육하기"} onClick={() => onSelect()} />
        </div>
        <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />
        <div className={styles.burger_button_wrapper}>
          <div className={styles.burger_wrapper}>
            <Image src={wcBurgerImageUrl} alt="요상한 버거" fill />
          </div>
          <TextButton text={"화내기"} onClick={() => onSelect()} />
        </div>
      </div>
      <div className={styles.bg_overlay} />
    </motion.div>
  );
}
