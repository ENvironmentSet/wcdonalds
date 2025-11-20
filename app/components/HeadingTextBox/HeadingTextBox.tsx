import clsx from "clsx";
import styles from "./index.module.css";

export function HeadingTextBox({ children, className, color = "bg" }: { children: React.ReactNode, className?: string, color?: "bg" | "yellow" }) {
  return (
    <p className={clsx(styles.heading_text_box, className, styles[color])}>
      {children}
    </p>
  )
}