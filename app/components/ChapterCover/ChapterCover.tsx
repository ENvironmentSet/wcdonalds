"use client";

import Image from "next/image";
import styles from "./index.module.css";
import { DetailBox } from "../DetailBox/DetailBox";
import { NextButton } from "../NextButton/NextButton";
import typography from "@/public/assets/wcdonalds-typography.png";
import clsx from "clsx";

export function ChapterCover({ className, title, keywords, detail, onClickNext }: {
  className?: string;
  title: string;
  keywords: string[];
  detail: React.ReactNode;
  onClickNext: () => void;
}) {
  return (
    <div className={clsx(styles.cover_background, className)}>
      <main className={styles.cover_container}>
        <Image src={typography} alt="웩도날드 타이포그래피" preload objectFit="contain" />
        <h1 className={styles.cover_title}>{title}</h1>
        <div className={styles.cover_keywords_container}>
          <p className={styles.cover_keywords_container_heading}>오늘의 키워드</p>
          <ul className={styles.cover_keywords_container_list}>
            {keywords.map((keyword) => (
              <li key={keyword} className={styles.cover_keywords_container_list_item}>{keyword}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cover_detail_box_container}>
          <DetailBox>
            {detail}
          </DetailBox>
          <NextButton onClick={onClickNext} className={styles.cover_next_button} />
        </div>
      </main>
    </div>
  );
}