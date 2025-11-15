import Image from "next/image";
import logo_icon from "@/public/assets/wecdonald_logo.png";
import styles from "./index.module.css";
export default function InstructionBox({ instruction }: { instruction: string }) {
  return (
    <div className={styles.instruction_box}>
      <div className={styles.icon_wrapper}>
        <Image src={logo_icon} fill alt="logo" />
      </div>
      <p className={styles.instruction_text}>{instruction}</p>
      <div className={styles.icon_wrapper}>
        <Image src={logo_icon} fill alt="logo" />
      </div>
    </div>
  );
}
