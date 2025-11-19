import { motion } from "motion/react";

import styles from "./index.module.css";
export default function TextButton({ text }: { text: string }) {
  return (
    <motion.button className={styles.button_wrapper}>
      <p>{text}</p>
    </motion.button>
  );
}
