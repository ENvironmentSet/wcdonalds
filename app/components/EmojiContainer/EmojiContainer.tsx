import Image, { StaticImageData } from "next/image";
import styles from "./index.module.css";
type EmojiContainerProps = {
  imagePath: StaticImageData;
  altText: string;
};
export default function EmojiContainer({ imagePath, altText }: EmojiContainerProps) {
  return (
    <div className={styles.emoji_container}>
      <Image src={imagePath} alt={altText} fill />
    </div>
  );
}
