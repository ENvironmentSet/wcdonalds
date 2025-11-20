import Image from "next/image";
import styles from "./index.module.css";
import bg_image from "@/public/image.png";
import { ViewTransition } from "react";
import { useRouter } from "next/navigation";
export default function Step8({ onSelect }: { onSelect: () => void }) {
  const router = useRouter();
  return (
    <ViewTransition>
      <div className={styles.bg_wrapper} onClick={() => router.push("/few-shot-learning")}>
        <Image src={bg_image} fill alt="background" />
      </div>
    </ViewTransition>
  );
}
