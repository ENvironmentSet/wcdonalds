"use client";
import styles from "./index.module.css";

type ChatBubbleProps = {
  role: "user" | "assistant";
  children?: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
};

export default function ChatBubble({ role, children, isLoading, isError }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`${styles.bubble_wrapper} ${isUser ? styles.bubble_user : styles.bubble_assistant}`}>
      <div className={`${styles.bubble} ${isError ? styles.bubble_error : ""}`}>
        {isLoading && !isError ? (
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
