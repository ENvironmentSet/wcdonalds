import styles from "./index.module.css";
import { motion } from "motion/react";
import { Menu } from "@/hallucination/type";
import MessageBox from "@/components/MessageBox/MessageBox";
import Character from "@/components/Character/Character";
import workerImageUrl from "@/public/assets/character/worker_character_withd_burger.png";
import wcBurgerImageUrl from "@/public/assets/burger/wcburger.png";
import Image from "next/image";
import TextButton from "@/components/Button/Button";
type StepProps = {
  menu: Menu;
  onSelect: () => void;
};
export default function Step4({ menu, onSelect }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content_wrapper}
    >
      <MessageBox>`매니저님! ${menu} 버거 완성했습니다!`</MessageBox>
      <div>
        <div className={styles.burger_wrapper}>
          <Image src={wcBurgerImageUrl} alt="요상한 버거" fill />
          <TextButton text={"따끔하게 교육하기"} />
        </div>
        <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />
        <div className={styles.burger_wrapper}>
          <Image src={wcBurgerImageUrl} alt="요상한 버거" fill />
        </div>
      </div>
    </motion.div>
  );
}
