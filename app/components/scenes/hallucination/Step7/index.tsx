"use client";
import Character from "@/components/Character/Character";
import InstructionBox from "@/components/InstructionBox/InstructionBox";
import { Menu } from "@/hallucination/type";
import { useActionState, useEffect, useRef, useState, ViewTransition } from "react";
import styles from "./index.module.css";
import workerImageUrl from "@/public/assets/character/worker_character04.png";
import MessageBox from "@/components/MessageBox/MessageBox";
import RecipeBlock from "@/components/RecipeBlock/RecipeBlock";
import { askReceipt, ReceiptState } from "@/actions/askReceipt";

const initialState: ReceiptState = {
  error: "",
  answer: "",
  prompt: "",
  ok: false,
};

export default function Step7({ onSelect, menu }: { onSelect: () => void; menu: Menu }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [sceneNum, setSceneNum] = useState(0);
  const handleBtnClick = () => {
    //post
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSceneNum((prev) => prev + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  const [state, formAction, isPending] = useActionState(askReceipt, initialState);

  return (
    <ViewTransition>
      <div className={styles.content_wrapper}>
        <InstructionBox
          instruction={[
            `석상이가 이제 정말 ${Menu[menu]} 레시피를 완벽하게 익혔다고 하네요!`,
            `이제 채팅창에 ${Menu[menu]} 레시피에 대한 질문을 자유롭게 해보세요!`,
          ]}
        />
        <div className={styles.main_wrapper}>
          {sceneNum == 0 && <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />}
          {sceneNum == 1 && <RecipeBlock menu={menu} />}
        </div>
        <MessageBox isNextIcon={true} formRef={formRef} onClick={handleBtnClick}>
          {sceneNum == 0 && "저 이제 진짜로 빅웩웩 레시피 알아요. 빅웩웩 레시피에 대한 거 물어보세요!"}
          {sceneNum == 1 && (
            <>
              <form ref={formRef} className={styles.input_form} action={formAction}>
                <input
                  name="prompt"
                  className={styles.chat_input}
                  placeholder={`"${Menu[menu]}" 레시피에 대해 궁금한 걸 물어보세요!`}
                  type="text"
                />
              </form>

              {isPending && <p className={styles.answer_text}>석상이 생각 중...</p>}

              {state.answer && !isPending && <p className={styles.answer_text}>{state.answer}</p>}
            </>
          )}
        </MessageBox>

        {sceneNum > 0 && (
          <div className={styles.small_character_wrapper}>
            <Character imageUrl={workerImageUrl} size="s" characterName="석상이" />
          </div>
        )}
      </div>
    </ViewTransition>
  );
}
