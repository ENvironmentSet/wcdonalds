"use client";

import InstructionBox from "@/components/InstructionBox/InstructionBox";
import MessageBox from "@/components/MessageBox/MessageBox";
import { motion, useMotionValue } from "motion/react";
import styles from "./index.module.css";

import workerImageUrl from "@/public/assets/character/worker_character02.png";
import Character from "@/components/Character/Character";
import recipe_folder from "@/public/assets/wc_folder.png";
import Image from "next/image";
import { useState, useRef } from "react";
import solutionSign from "@/public/assets/solution.png";
import TextBox from "@/components/TextBox/TextBox";
export default function Step6({ onSelect }: { onSelect: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const [sceneNum, setSceneNum] = useState(0);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hanleBtnClick = () => {
    if (!isDropped) return;
    if (sceneNum == 1) {
      onSelect();
    }
    setSceneNum((prev) => prev + 1);
  };
  const handleDrag = (_: any, info: any) => {
    if (!dropZoneRef.current) return;

    const dropRect = dropZoneRef.current.getBoundingClientRect();
    const { point } = info;

    const inside =
      point.x > dropRect.left && point.x < dropRect.right && point.y > dropRect.top && point.y < dropRect.bottom;

    setIsOverDropZone(inside);
  };

  const handleDragEnd = () => {
    if (isOverDropZone) {
      setIsDropped(true);
    }
    setIsDragging(false);
  };

  const messageText = isDropped
    ? "레시피를 추가했어요! 다음 단계로 넘어가볼까요?"
    : "이 채팅창 안쪽으로 레시피 파일을 드래그해서 업로드해주세요.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content_wrapper}
    >
      <InstructionBox
        instruction={[
          "이제 우리의 알바생 석상이에게 올바른 레시피 파일을 전달할 시간이군요!",
          "아래의 레시피 파일을 채팅창으로 드래그해서 업로드해주세요.",
        ]}
      />

      <div className={styles.lower_wrapper}>
        <Character imageUrl={workerImageUrl} size="l" characterName="좌절하는 석상이" />

        <motion.div
          ref={dropZoneRef}
          className={`${styles.drop_zone} ${isOverDropZone && !isDropped ? styles.drop_zone_active : ""}`}
          animate={
            isDropped
              ? {
                  scale: [1, 1.06, 1],
                  transition: { duration: 0.4, ease: "easeOut" },
                }
              : { scale: 1 }
          }
        >
          <MessageBox isNextIcon={true} onClick={hanleBtnClick}>
            {messageText}
          </MessageBox>
        </motion.div>
      </div>

      <motion.div
        className={styles.folder_image_wrapper}
        drag={!isDropped}
        style={{ x, y }}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={
          isDropped
            ? {
                scale: 0,
                opacity: 0,
                transition: { duration: 0.45, ease: "easeInOut" },
              }
            : isDragging
            ? { scale: 1.08, transition: { duration: 0.2 } }
            : { scale: 1, opacity: 1 }
        }
      >
        <Image alt="레시피 파일" src={recipe_folder} fill draggable={false} />
      </motion.div>
      {sceneNum == 1 && (
        <div className={styles.overlay}>
          <div className={styles.warning}>
            <Image src={solutionSign} alt="warning" fill />
          </div>
          <h1 className={styles.warning_comment}>RAG 적용 중...</h1>
          <div className={styles.text_wrapper}>
            <h2 className={styles.warning_explanation}>석상씨, 이제 근거를 기반으로 학습할 차례입니다.</h2>
          </div>
          <TextBox
            textArr={[
              "AI가 단순히 기억이나 추론에만 의존하지 않고,",
              "답변 전에 관련 자료를 직접 찾아보고 참고하는 방식,",
              "그게 바로 RAG예요.",
              "즉, AI에게 자료집을 미리 읽혀놓고,",
              " 그 내용을 바탕으로 정확하고 신뢰할 수 있는 답변을 만들어내는 거죠.",
            ]}
            size="s"
          />
        </div>
      )}
    </motion.div>
  );
}
