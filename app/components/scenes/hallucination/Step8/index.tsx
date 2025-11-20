import Image from "next/image";
import styles from "./index.module.css";
import bg_image from "@/public/step4_wcwcspicy.png";
import { ViewTransition } from "react";
export default function Step7({ onSelect }: { onSelect: () => void }) {
  return (
    <ViewTransition>
      <div className={styles.bg_wrapper} onClick={() => onSelect}>
        <Image src={bg_image} fill alt="background" />
      </div>
    </ViewTransition>
  );
}
