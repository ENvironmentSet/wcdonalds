import { ChapterCover } from "@/components/ChapterCover/ChapterCover";
import bg from "@/public/assets/image.png";
import styles from "./index.module.css";
import Image from "next/image";
export default function Step0({ onSelect }: { onSelect: () => void }) {
  return (
    <div className={styles.wrapper}>
      <Image src={bg} alt="wecdonald" fill onClick={() => onSelect()} />
    </div>
    // <div className={styles.cover_group}>
    //   <Image src={kitchen} alt="웩도날드 주방" preload objectFit="cover" fill placeholder="blur" />
    //   <ChapterCover
    //     title={`웩도날드 신입교육 2일차 : “첫 버거는 마음대로 되지 않아”"`}
    //     keywords={["할루시네이션", "RAG"]}
    //     detail={
    //       <p className={styles.detail_box_text}>
    //         오늘은 석상이가 처음으로 버거를 만드는 날이다. 드디어 웩도날드의 시그니처 버거를 만들 차례지만, 문제는
    //         석상이는 메뉴 이름조차 처음 듣는다는것. 결국 석상이는 잘못된 추론인
    //         <span className={styles.highlight}>할루시네이션</span>으로 괴식 같은 버거를 만들고, 이후 점장의
    //         <span className={styles.highlight}>RAG 학습</span>을 통해 올바른 레시피를 배우게 된다.
    //       </p>
    //     }
    //     className={styles.cover_main_layer}
    //     onClickNext={() => onSelect()}
    //   />
    // </div>
  );
}
