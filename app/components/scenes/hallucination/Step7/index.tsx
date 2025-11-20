"use client";

import Character from "@/components/Character/Character";
import InstructionBox from "@/components/InstructionBox/InstructionBox";
import { Menu } from "@/hallucination/type";
import { useEffect, useRef, useState, ViewTransition } from "react";
import styles from "./index.module.css";
import workerImageUrl from "@/public/assets/character/worker_character04.png";
import MessageBox from "@/components/MessageBox/MessageBox";
import RecipeBlock from "@/components/RecipeBlock/RecipeBlock";
import ChatBubble from "@/components/ChatBubble/ChatBubble";
import folderImgUrl from "@/public/assets/wc_folder.png";
import Image from "next/image";
import TextButton from "@/components/TextButton/TextButton";

type AssistantMessage = {
  content: string;
  isError: boolean;
};

export default function Step7({ onSelect, menu }: { onSelect: () => void; menu: Menu }) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [sceneNum, setSceneNum] = useState(0);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [assistantMessages, setAssistantMessages] = useState<AssistantMessage[]>([]);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [wantMoreModal, setWantMoreModal] = useState(false);
  const [isPending, setIsPending] = useState(false);

  // 페이지 뜬 뒤 4초 후 sceneNum 1로 전환
  useEffect(() => {
    const timer = setTimeout(() => {
      setSceneNum((prev) => prev + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // 질문 3번, 6번, 9번... 했을 때 모달 띄우기
  useEffect(() => {
    const count = userMessages.length;
    if (count === 0) return;

    if (count % 3 === 0) {
      setWantMoreModal(true);
    }
  }, [userMessages.length]);
  let apipath = "";
  if (menu == 1) {
    apipath = "big";
  } else if (menu == 2) {
    apipath = "spicy";
  } else if (menu == 3) {
    apipath = "pounder";
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const prompt = formData.get("prompt")?.toString().trim();
    if (!prompt) return;

    // 1) 내 질문 말풍선 누적
    setUserMessages((prev) => [...prev, prompt]);

    // 2) 서버 호출
    setIsPending(true);
    try {
      const res = await fetch(`http://localhost:8080/api/receipt/${apipath}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
        cache: "no-store",
      });

      if (!res.ok) {
        // 서버가 500/404 등 에러
        setAssistantMessages((prev) => [...prev, { content: `서버 오류: ${res.status}`, isError: true }]);
      } else {
        const data = await res.json();
        const answer =
          typeof data.answer === "string" && data.answer.trim() !== "" ? data.answer : "답변을 가져오지 못했어요.";

        setAssistantMessages((prev) => [...prev, { content: answer, isError: false }]);
      }
    } catch (err) {
      // 네트워크 에러
      setAssistantMessages((prev) => [
        ...prev,
        { content: "네트워크 오류: 서버와 통신할 수 없습니다.", isError: true },
      ]);
    } finally {
      setIsPending(false);
    }

    // 3) input 비우기
    form.reset();
  };

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
                  {/* 유저 메시지 누적 */}
                  {userMessages.map((msg, i) => (
                    <ChatBubble key={`u-${i}`} role="user">
                      {msg}
                    </ChatBubble>
                  ))}

                  {/* AI 메시지 누적 */}
                  {assistantMessages.map((msg, i) => (
                    <ChatBubble key={`a-${i}`} role="assistant" isError={msg.isError}>
                      {msg.content}
                    </ChatBubble>
                  ))}

                  {/* 로딩 버블 */}
                  {isPending && <ChatBubble role="assistant" isLoading />}
                </div>
              )}
            </>
          )}
        </div>

        {/* 입력 UI */}
        <MessageBox isNextIcon={true} formRef={formRef}>
          {sceneNum === 0 && "저 이제 진짜로 빅웩웩 레시피 알아요. 빅웩웩 레시피에 대한 거 물어보세요!"}

          {sceneNum === 1 && (
            <form ref={formRef} className={styles.input_form} onSubmit={handleSubmit}>
              <input
                name="prompt"
                className={styles.chat_input}
                placeholder={`"${Menu[menu]}" 레시피에 대해 궁금한 걸 물어보세요!`}
                type="text"
              />
            </form>
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

      {/* "더 물어볼래요?" 모달 (원하면 내용 추가해서 사용) */}
      {wantMoreModal && (
        <div className={styles.modal_overlay} onClick={() => setWantMoreModal(false)}>
          <div className={styles.modal_box} onClick={(e) => e.stopPropagation()}>
            <p>알바생이 레시피를 잘 알고 있는 것 같나요?</p>
            <div className={styles.modal_button_row}>
              <button className={styles.modal_primary} onClick={() => setWantMoreModal(false)}>
                더 질문할래요
              </button>
              <button
                className={styles.modal_secondary}
                onClick={() => {
                  setWantMoreModal(false);
                  onSelect(); // 다음 단계로
                }}
              >
                이 정도면 괜찮아요
              </button>
            </div>
          </div>
        </div>
      )}
    </ViewTransition>
  );
}
