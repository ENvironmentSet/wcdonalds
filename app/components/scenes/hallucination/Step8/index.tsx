import { Menu, MenuSauce } from "@/hallucination/type";
import { ViewTransition } from "react";
import styles from "./index.module.css";
import InstructionBox from "@/components/InstructionBox/InstructionBox";
import Character from "@/components/Character/Character";
import workerImageUrl from "@/public/assets/character/worker_character04.png";
import MessageBox from "@/components/MessageBox/MessageBox";
import RecipeBlock from "@/components/RecipeBlock/RecipeBlock";
export default function Step7({ onSelect, menu }: { onSelect: () => void; menu: Menu }) {
  const handleBtnClick = () => {
    //post
  };
  return (
    <ViewTransition>
      <div className={styles.content_wrapper}>
        <InstructionBox
          instruction={[
            "석상이가 제대로 답변하는지 확인하기 위해 매니저님께만 정답을 공개합니다!",
            `예를 들어 “${MenuSauce[menu]}엔 뭐가 들어가요?”라고 질문할 수 있겠죠? 석상이를 테스트해보세요!`,
          ]}
        />
        <RecipeBlock menu={menu} />
        <div className={styles.character_wrapper}>
          <Character imageUrl={workerImageUrl} size="l" characterName="석상이" />
        </div>

        <MessageBox isNextIcon={true} onClick={handleBtnClick}>
          저 이제 진짜로 빅웩웩 레시피 알아요. 빅웩웩 레시피에 대한 거 물어보세요!
        </MessageBox>
      </div>
    </ViewTransition>
  );
}
