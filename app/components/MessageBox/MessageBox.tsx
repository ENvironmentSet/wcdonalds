import Image from "next/image";
import styles from "./index.module.css";
import arrow_icon_url from "@/public/assets/next_arrow.png";
export type MessageBoxProps =
  | { message: string; child?: never; onClick?: () => void; isNextIcon?: boolean }
  | { child: React.ReactNode; message?: never; onClick?: () => void; isNextIcon?: boolean };
export default function MessageBox({ message, onClick, child, isNextIcon = false }: MessageBoxProps) {
  return (
    <div className={styles.message_box}>
      {child ? child : <p className={styles.message}>{message}</p>}
      <div className={styles.next_icon}>
        {isNextIcon && <Image src={arrow_icon_url} alt="next icon" fill onClick={onClick} />}
      </div>
    </div>
  );
}
