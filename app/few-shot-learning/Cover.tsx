import { ChapterCover } from "@/components/ChapterCover/ChapterCover";
import styles from "./index.module.css";
import kitchen from "@/public/assets/kitchen.png";
import Image from "next/image";

export function Cover({ onClickNext }: { onClickNext: () => void }) {
  return (
    <div className={styles.cover_group}>
      <Image src={kitchen} alt="웩도날드 주방" preload objectFit="cover" fill placeholder="blur" />
      <ChapterCover 
        title={`웩도날드 신입교육 3일차: "네가 왜 거기서 나와..?"`} 
        keywords={["Few-Shot Learning"]} 
        detail={
          <p className={styles.detail_box_text}>
            석상이는 이미 레시피를 숙지했지만, 아직 경험이 부족해 버거를 만들 때마다 조금씩 이상하게 만들어버리곤 한다.
            그래서 오늘 교육은 여러 번의 연습과 함께, 좋은 예시를 여러 개 보여주는 방식으로 진행된다.
            예시가 많아질수록 석상이는 더 정확하게 따라 만들 수 있게 되는 것, 바로 <span className={styles.highlight}>Few-Shot Learning</span>의 핵심이다.
            과연 석상이는 충분한 ‘좋은 예시’를 보고 제대로 된 버거를 완성할 수 있을까?
          </p>
        }
        className={styles.cover_main_layer}
        onClickNext={onClickNext}
      />
    </div>
  )
}