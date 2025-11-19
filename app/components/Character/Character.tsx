import Image from "next/image";
import styles from "./index.module.css";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
type CharacterProps = {
  imageUrl: StaticImageData;
  size: "s" | "m" | "l";
  characterName?: string;
};
export default function Character({ imageUrl, size, characterName }: CharacterProps) {
  const ratio = imageUrl.width / imageUrl.height;
  return (
    <div className={styles[`character_${size}`]} style={{ aspectRatio: ratio }}>
      <Image src={imageUrl} fill alt={characterName || "character"} />
    </div>
  );
}
