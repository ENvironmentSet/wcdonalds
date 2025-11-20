import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import mistake1 from "@/public/assets/mistake-1.png";
import mistake2 from "@/public/assets/mistake-2.png";
import mistake3 from "@/public/assets/mistake-3.png";
import mistakeHam from "@/public/assets/mistake-ham.png";
import headache from "@/public/assets/headache.png";
import { HeadingTextBox } from "@/components/HeadingTextBox/HeadingTextBox";
import { SmallTextBox } from "@/components/SmallTextBox/SmallTextBox";

export function Mistakes({ onMoveNext }: { onMoveNext: () => void }) {
  const steps = [
    {
      text: '황급히 소스를 짜려던 석상이는 손에 힘이 너무 들어가는 바람에 소스가 펑! 하고 폭발하듯 튀어나와버렸다.',
      id: 0,
    },
    {
      text: '양상추는 자꾸 흘러내리고, 치즈는 너무 빨리 녹아 흐물흐물 손가락에 들러붙었다. 패티 옆으로 미끄러지며 붙었다 떨어지기를 반복하니 버거 모양은 점점 망가져가는중..',
      id: 1,
    },
    {
      text: '겨우 윗번을 덮는 순간 손의 소스 때문에 번이 미끄러져 버거가 불안한 타워처럼 기울더니 결국 쿠당탕하고 무너져 내렸다.',
      id: 2,
    },
    {
      text: '레시피는 완벽히 외웠는데… 결국 실전에서는 감각과 요령이 전부라는 걸 깨달아버린 석상이..',
      id: 3,
    }
  ];
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const currentStep = steps[currentStepIndex]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentStepIndex === steps.length - 1) {
        onMoveNext();
        return;
      }

      setCurrentStepIndex(currentStepIndex + 1)
    }, 4000);

    return () => clearTimeout(timeout);
  }, [currentStepIndex, onMoveNext, steps.length]);

  return (
    <main style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
    }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 128,
        zIndex: 3,
      }}>
        <HeadingTextBox color="yellow">
          {currentStep.text}
        </HeadingTextBox>
      </div>
      <MistakeSection image={mistake1} isCurrentStep={currentStep.id === 0} color="#A2D900" />
      <MistakeSection image={mistake2} isCurrentStep={currentStep.id === 1} color="#C22CE8" />
      <MistakeSection image={mistake3} isCurrentStep={currentStep.id === 2} color="#2755FD" />
      {
        currentStep.id === 3 && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}>
            <div style={{
              flex: 2,
            }}>
              <Image src={mistakeHam} alt="망가진 햄버거" objectFit="contain" style={{ display: 'block', transform: 'translateX(85px)', marginLeft: 'auto' }} />
            </div>
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 60,
            }}>
              <SmallTextBox>
                  메니저님께 또 혼나겠지..?
              </SmallTextBox>
              <Image src={headache} alt="머리가 아픈 석상이" objectFit="contain" style={{ display: 'block' }} />
            </div>
          </div>
        )
      }
    </main>
  )
}

function MistakeSection({ image, isCurrentStep, color }: { image: StaticImageData, isCurrentStep: boolean, color: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      backgroundColor: color,
      position: 'relative',
      flex: 1,
    }}>
      <Image src={image} alt="실수하는 석상이" objectFit="contain" style={{ display: 'block' }} />
      {
        !isCurrentStep && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.60)'
          }} />
        )
      }
    </div>
  )
}