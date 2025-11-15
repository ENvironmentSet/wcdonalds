"use client";
import InstructionBox from "@/components/InstructionBox/InstructionBox";

import styles from "./index.module.css";
import burger_1 from "@/public/burger_1.png";
import burger_2 from "@/public/burger_2.png";
import burger_3 from "@/public/burger_3.png";
import Image from "next/image";
import { useManageHallucinationState } from "@/hooks/useManageHallucinationState";

export default function Step1() {
  const { setSceneNumber } = useManageHallucinationState();

  return (
    <div className={styles.content_wrapper}>
      <InstructionBox instruction="빅웩웩 만들기 레시피 알려줘 석상씨는 AI니까 레시피 안알려줘도 다 알죠? 우리 웩도날드의 시그니처 ‘빅웩웩’ 만들어봐요.석상씨는 AI니까 레시피 안알려줘도 다 알죠? " />
      <div className={styles.menu_container}>
        <div className={styles.menu_box}>
          <div className={styles.menu_image}>
            <Image src={burger_1} alt="burger1" fill />
          </div>
        </div>
        <div className={styles.menu_box}>
          <div className={styles.menu_image}>
            <Image src={burger_2} alt="burger2" fill />
          </div>
        </div>
        <div className={styles.menu_box}>
          <div className={styles.menu_image}>
            <Image src={burger_3} alt="burger3" fill />
          </div>
        </div>
      </div>
      {/* <MessageBox onClick={() => alert("ff")}>
        석상씨는 AI니까 레시피 안알려줘도 다 알죠? 우리 웩도날드의 시그니처 ‘빅웩웩’ 만들어봐요.
      </MessageBox> */}
    </div>
  );
}
