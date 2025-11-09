import Image from "next/image";
import styles from "./index.module.css";
import arrow_icon_url from "@/public/assets/next_arrow.png";

type MessageBoxProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  isNextIcon?: boolean;
};

export default function MessageBox({ children, onClick, isNextIcon = false }: MessageBoxProps) {
  const isString = typeof children === "string";

  return (
    <div className={styles.message_box}>
      {isString ? <p className={styles.message}>{children}</p> : children}
      {isNextIcon && (
        <div className={styles.next_icon}>
          <Image src={arrow_icon_url} alt="next icon" fill onClick={onClick} />
        </div>
      )}
    </div>
  );
}
