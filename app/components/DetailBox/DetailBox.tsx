import styles from "./index.module.css";

export function DetailBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.detail_box}>
      {children}
    </div>
  )
}