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

export default function Step6() {
  const [isDragging, setIsDragging] = useState(false);
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [isDropped, setIsDropped] = useState(false);

  const dropZoneRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
          <MessageBox isNextIcon={true}>{messageText}</MessageBox>
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
    </motion.div>
  );
}
