import styles from "./index.module.css";
import clsx from "clsx";

export function SmallTextBox({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx(styles.small_text_box, className)}>
      {children}
    </div>
  )
}