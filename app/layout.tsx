import localFont from 'next/font/local';
import type { Metadata } from 'next';
import "normalize.css";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "내 AI바야!",
  description: "체험을 통해 재미있게 배우는 프롬프트 엔지니어링"
};