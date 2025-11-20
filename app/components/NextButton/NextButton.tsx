import clsx from "clsx";
import styles from "./index.module.css";

export function NextButton({ onClick, className, disabled }: { onClick: () => void, className: string, disabled?: boolean }) {
  return (
    <button onClick={onClick} className={clsx(styles.next_button, className)} disabled={disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="74" viewBox="0 0 76 74" fill="none">
        <path d="M74.5355 40.3558C76.4882 38.4032 76.4882 35.2374 74.5355 33.2848L42.7157 1.46497C40.7631 -0.487648 37.5973 -0.487648 35.6447 1.46497C33.692 3.41759 33.692 6.58342 35.6447 8.53604L63.9289 36.8203L35.6447 65.1046C33.692 67.0572 33.692 70.223 35.6447 72.1757C37.5973 74.1283 40.7631 74.1283 42.7157 72.1757L74.5355 40.3558ZM0 36.8203V41.8203H71V36.8203V31.8203H0V36.8203Z" fill="#FFDD0E"/>
      </svg>
    </button>
  )
}