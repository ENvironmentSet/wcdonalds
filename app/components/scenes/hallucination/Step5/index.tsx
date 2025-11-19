import MessageBox from "@/components/MessageBox/MessageBox";
import { Menu } from "@/hallucination/type";
import Image from "next/image";
import bg_fire from "@/public/assets/fire.png";
import styles from "./index.module.css";
import Character from "@/components/Character/Character";
import { motion } from "motion/react";

import managerImageUrl from "@/public/assets/character/manager_character_angry.png";
import workerImageUrl from "@/public/assets/character/worker_character02.png";
import TextButton from "@/components/Button/Button";

export default function Step5({ menu, onSelect }: { menu: Menu; onSelect: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content_wrapper}
    >
      <div className={styles.fire_container}>
        <Image src={bg_fire} alt="불" fill />
      </div>
      <MessageBox>
        {
          <p>
            아니 석상씨 이게 뭐에요? 이게 {Menu[menu]}예요??? <span>Are you serious?!!!</span>
          </p>
        }
      </MessageBox>
      <div className={styles.lower_wrapper}>
        <Character imageUrl={workerImageUrl} size="m" characterName="좌절하는 석상이" />
        <Character imageUrl={managerImageUrl} size="l" characterName="분노하는 매니저" />
        <div className={styles.btn_wrapper}>
          <TextButton text="진정진정 Calm down" />
        </div>
      </div>
      <div className={styles.bg_overlay} />
    </motion.div>
  );
}
