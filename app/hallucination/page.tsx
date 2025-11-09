"use client";
import MessageBox from "../components/MessageBox/MessageBox";
import styles from "./index.module.css";

export default function Hallucination() {
  return (
    <div className={styles.background_div}>
      <MessageBox message="이 페이지는 현재 준비중입니다!" isNextIcon={true} onClick={() => alert("ff")} />
    </div>
  );
}
