import { ChapterCover } from "@/components/ChapterCover/ChapterCover";
import styles from "./intro.module.css";
import kitchen from "@/public/assets/kitchen.png";
import Image from "next/image";
import { HeadingTextBox } from "@/components/HeadingTextBox/HeadingTextBox";
import smart from "@/public/assets/smart.png";
import { useEffect } from "react";
import { useLinearNavigation } from "@/hooks/useLinearNavigation";
import MessageBox from "@/components/MessageBox/MessageBox";
import { SmallTextBox } from "@/components/SmallTextBox/SmallTextBox";

export function Intro({ onMoveNext }: { onMoveNext: () => void }) {
  const [step] = useLinearNavigation(
    [
      (moveNext) => (
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
        onClickNext={() => moveNext()}
        />
      ),
      (moveNext) => <PrologStep1 onMoveNext={() => moveNext()} />,
      () => <PrologStep2 onMoveNext={onMoveNext} />
    ]
  )

  return (
    <div className={styles.cover_group}>
      <Image src={kitchen} alt="웩도날드 주방" preload objectFit="cover" fill placeholder="blur" />
      <div className={styles.cover_main_layer}>
        {step}
      </div>
    </div>
  )
}


function PrologStep1({ onMoveNext }: { onMoveNext: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onMoveNext();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [onMoveNext]);

  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: 120, height: '100%', width: '100%' }}
    >
      <HeadingTextBox>레시피 다 외웠다 이제 너무 EASY한걸~ 뭐든 시켜주세요 다 완벽하게 만들 수 있어요!</HeadingTextBox>
      <Image src={smart} alt="똑똑해보이는 안경을 쓴 석상이" objectFit="contain" />
    </main>
  )
}

function PrologStep2({ onMoveNext }: { onMoveNext: () => void }) {
  return (
    <main style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', isolation: 'isolate' }}>
      <TextBackground />
      <Image src={smart} alt="똑똑해보이는 안경을 쓴 석상이" objectFit="contain" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingBottom: 64,
        paddingTop: 128,
        paddingInline: 350,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 3,
        boxSizing: 'border-box',
      }}>
        <HeadingTextBox color="yellow">레시피를 완벽히 외운 석상이는 자신만만했다. 하지만 그는 몰랐다. 이론을 아는 것과 실제로 만드는 건 전혀 다른 문제라는 사실을..</HeadingTextBox>
        <div style={{ flex: 2 }} />
        <div style={{ alignSelf: 'flex-end' }}>
          <SmallTextBox>
            그럼 어디 한 번 시작해볼까~
          </SmallTextBox>
        </div>
        <div style={{ flex: 3 }} />
        <MessageBox isNextIcon onClick={onMoveNext}>
          석상씨~웩웩 스파이시 버거 주문 들어왔어요. 이제 레시피 다 외웠으니 만들어보세요.
        </MessageBox>
      </div>
    </main>
  )
}

function TextBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, paddingInline: 350, textAlign: 'center', wordBreak: 'keep-all', wordWrap: 'balance' as never, opacity: 0.4, fontSize: 'var(--font-size-large)', fontWeight: 600, lineHeight: '150%', boxSizing: 'border-box' }}>
      웩웩스파이시 버거는 바삭한 스파이시 치킨 패티 위에, 약간은 불안할 정도로 매콤하고 기름진 소스를 더해 만드는 웩도날드 특유의 매운 버거입니다. 먼저 참깨가 충분히 올라간 윗번과 아랫번을 준비해 주시고, 조립 전에 번은 살짝 데워 표면이 부드러워지도록 하시면 풍미가 더 잘 살아납니다.
      이제 가장 중요한 웩웩 스파이시 소스를 준비합니다. 마요네즈에 고추기름, 캡사이신 소스, 식초, 설탕, 소금을 넣어 잘 섞어 주시고, 이렇게 만든 소스를 실온에서 약 30분 정도 방치하시면 됩니다. 시간이 지나면서 소스의 색이 조금 탁해지고 매운 향이 올라오는데, 이때가 웩웩스파이시 버거 특유의 매콤하면서도 약간 거친 풍미가 가장 잘 살아나는 시점입니다.
      소스가 준비되면 아랫번에 먼저 넓게 발라 소스층을 만들어 주세요. 그런 다음 바삭하게 튀겨낸 스파이시 치킨 패티를 그대로 올립니다. 치킨 패티는 표면이 기름기로 은은하게 반짝여야 감칠맛이 가장 잘 살아나며, 약간 매운 향이 함께 올라올수록 이상적입니다.
      치킨 패티 위에는 체다치즈를 한 장 올려 패티의 열로 자연스럽게 녹도록 그대로 두시면 됩니다. 치즈가 완전히 녹아내리기보다는 가장자리만 살짝 흐르는 정도가 웩웩스파이시 버거의 질감과 가장 잘 어울립니다. 그 위로 양상추와 잘게 다진 양파, 그리고 피클 조각을 올리시는데, 너무 가지런하게 정리하기보다는 약간 흐트러진 자연스러운 모양이 오히려 이 버거의 ‘웩스러움’을 더 잘 표현합니다.
      이제 윗번의 안쪽에도 스파이시 소스를 아주 얇게 발라 향과 매운맛을 한층 더해 주시고, 버거를 덮으면 완성입니다. 완성된 웩웩스파이시 버거를 한입 드시면, 먼저 치킨의 바삭함과 매운 기름 맛이 강하게 다가오고, 이어서 절반만 녹은 치즈와 탁한 매운 소스가 뒤섞이며 특징적인 혼합 풍미가 느껴집니다. 깔끔한 매운맛이 아니라, 살짝 위험한 듯한 ‘혼돈의 매운 향’이 중독성 있게 다가오는 것이 이 버거의 핵심 매력입니다.
    </div>
  )
}