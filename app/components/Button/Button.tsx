import { motion } from "motion/react";
import styles from "./index.module.css";
export default function TextButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <motion.button
      className={styles.button_wrapper}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <p>{text}</p>
    </motion.button>
  );
}
