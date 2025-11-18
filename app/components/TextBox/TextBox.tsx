import styles from "./index.module.css";

export default function TextBox({ textArr, size }: { textArr: string[]; size: "s" | "m" }) {
  return (
    <div className={`${styles.textContainer} ${styles[size]}`}>
      {textArr.map((text) => (
        <p key={text} className={styles.text}>
          {text}
        </p>
      ))}
      <p className={styles.text}></p>
    </div>
  );
}
