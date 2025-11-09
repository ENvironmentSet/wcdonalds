import type { Metadata } from "next";
import "normalize.css";
import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

//@TODO: 메타데이터 추가
export const metadata: Metadata = {};
