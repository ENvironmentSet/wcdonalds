import Image from "next/image";
import logo_icon from "@/public/assets/wecdonald_logo.png";
import styles from "./index.module.css";
export default function InstructionBox({ instruction }: { instruction: string[] }) {
  return (
    <div className={styles.instruction_box}>
      <div className={styles.icon_wrapper}>
        <Image src={logo_icon} fill alt="logo" />
      </div>
      <div className={styles.text_box}>
        {instruction.map((text) => (
          <p key={text} className={styles.instruction_text}>
            {text}
          </p>
        ))}
      </div>
      <div className={styles.icon_wrapper}>
        <Image src={logo_icon} fill alt="logo" />
      </div>
    </div>
  );
}
