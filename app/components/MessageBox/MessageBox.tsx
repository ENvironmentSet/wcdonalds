import Image from "next/image";
import styles from "./index.module.css";
import arrow_icon_url from "@/public/assets/next_arrow.png";
import { motion } from "motion/react";
type MessageBoxProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  isNextIcon?: boolean;
  isInput?: boolean;
  formRef?: React.RefObject<HTMLFormElement | null>;
};

export default function MessageBox({ children, onClick, isNextIcon = false, formRef }: MessageBoxProps) {
  const isString = typeof children === "string";

  const handleNextClick = () => {
    if (formRef?.current) {
      formRef.current.requestSubmit();
      return;
    }
    if (onClick) onClick();
  };

  return (
    <div className={styles.message_box}>
      {isString ? <p className={isNextIcon ? styles.message_gray : styles.message}>{children}</p> : children}

      {isNextIcon && (
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextClick}
          className={styles.next_icon}
        >
          <Image src={arrow_icon_url} alt="next icon" fill />
        </motion.div>
      )}
    </div>
  );
}
