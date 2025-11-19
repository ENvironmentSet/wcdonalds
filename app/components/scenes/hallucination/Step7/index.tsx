"use client";
import Character from "@/components/Character/Character";
import InstructionBox from "@/components/InstructionBox/InstructionBox";
import { Menu } from "@/hallucination/type";
import { useActionState, useEffect, useRef, useState, ViewTransition, startTransition } from "react";
import styles from "./index.module.css";
import workerImageUrl from "@/public/assets/character/worker_character04.png";
import MessageBox from "@/components/MessageBox/MessageBox";
import RecipeBlock from "@/components/RecipeBlock/RecipeBlock";
import { askReceipt, ReceiptState } from "@/actions/askReceipt";
import ChatBubble from "@/components/ChatBubble/ChatBubble";
import folderImgUrl from "@/public/assets/wc_folder.png";
import Image from "next/image";
import TextButton from "@/components/TextButton/TextButton";

const initialState: ReceiptState = {
  error: "",
  answer: "",
  prompt: "",
  ok: false,
};

export default function Step7({ onSelect, menu }: { onSelect: () => void; menu: Menu }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sceneNum, setSceneNum] = useState(0);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [assistantMessages, setAssistantMessages] = useState<{ content: string; isError: boolean }[]>([]);
  const lastAnswerRef = useRef<string | null>(null);
  const lastErrorRef = useRef<string | null>(null);
  const [showRecipeModal, setShowRecipeModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const prompt = formData.get("prompt")?.toString().trim();
    if (!prompt) return;

    // 유저 메시지 누적
    setUserMessages((prev) => [...prev, prompt]);

    // 서버 액션 실행 (React 19 공식 패턴)
    startTransition(() => {
      formAction(formData);
    });

    // 입력 리셋
    form.reset();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSceneNum((prev) => prev + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const [state, formAction, isPending] = useActionState(askReceipt, initialState);

  // 서버 응답 누적
  useEffect(() => {
    if (isPending) return;

    if (state.answer && state.answer !== lastAnswerRef.current) {
      setAssistantMessages((prev) => [...prev, { content: state.answer, isError: false }]);
      lastAnswerRef.current = state.answer;
    }

    if (state.error && state.error !== lastErrorRef.current) {
      setAssistantMessages((prev) => [...prev, { content: state.error || "네트워크를 확인해주세요!", isError: true }]);
      lastErrorRef.current = state.error;
    }
  }, [state.answer, state.error, isPending]);

  const hasConversation = userMessages.length > 0 || assistantMessages.length > 0 || isPending;

  return (
    <ViewTransition>
      <div className={styles.content_wrapper}>
        <InstructionBox
          instruction={[
            `석상이가 이제 정말 ${Menu[menu]} 레시피를 완벽하게 익혔다고 하네요!`,
            `이제 채팅창에 ${Menu[menu]} 레시피에 대한 질문을 자유롭게 해보세요!`,
          ]}
        />

        {/* 메인 영역 */}
        <div className={styles.main_wrapper}>
          {sceneNum === 0 && <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />}

          {sceneNum === 1 && (
            <>
              {!hasConversation && <RecipeBlock menu={menu} />}

              {hasConversation && (
                <div className={styles.chat_wrapper}>
                  {/* 유저 메시지 */}
                  {userMessages.map((msg, i) => (
                    <ChatBubble key={`u-${i}`} role="user">
                      {msg}
                    </ChatBubble>
                  ))}

                  {/* 로딩 */}
                  {isPending && <ChatBubble role="assistant" isLoading />}

                  {/* 누적된 AI 메시지 */}
                  {assistantMessages.map((msg, i) => (
                    <ChatBubble key={`a-${i}`} role="assistant" isError={msg.isError}>
                      {msg.content}
                    </ChatBubble>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* 입력 UI */}
        <MessageBox isNextIcon={true} formRef={formRef}>
          {sceneNum === 0 && "저 이제 진짜로 빅웩웩 레시피 알아요. 빅웩웩 레시피에 대한 거 물어보세요!"}

          {sceneNum === 1 && (
            <>
              <form ref={formRef} className={styles.input_form} onSubmit={handleSubmit}>
                <input
                  name="prompt"
                  className={styles.chat_input}
                  placeholder={`"${Menu[menu]}" 레시피에 대해 궁금한 걸 물어보세요!`}
                  type="text"
                />
              </form>
            </>
          )}
        </MessageBox>

        {/* 작은 캐릭터 */}
        {sceneNum > 0 && (
          <div className={styles.small_character_wrapper}>
            <Character imageUrl={workerImageUrl} size="s" characterName="석상이" />
          </div>
        )}

        {/* 레시피 다시 보기 버튼 */}
        {sceneNum === 1 && userMessages.length > 0 && (
          <div className={styles.recipe_opener}>
            <div className={styles.folder_button}>
              <Image src={folderImgUrl} alt="폴더열기" fill />
            </div>
            <TextButton
              size="s"
              text={showRecipeModal ? "레시피 닫기" : "레시피 답안 다시 보기"}
              color="y"
              onClick={() => setShowRecipeModal((prev) => !prev)}
            />
          </div>
        )}

        {/* 레시피 모달 */}
        {showRecipeModal && (
          <div className={styles.recipe_modal_overlay} onClick={() => setShowRecipeModal(false)}>
            <div className={styles.recipe_modal} onClick={(e) => e.stopPropagation()}>
              <RecipeBlock menu={menu} />
            </div>
          </div>
        )}
      </div>
    </ViewTransition>
  );
}
