"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <video src="/assets/intro.mp4" playsInline width="100%" height="100%" ref={video => {
      if (!video) return;

      const handleClick = () => {
        video.play();
      }
      
      video.addEventListener('click', handleClick);

      return () => video.removeEventListener('click', handleClick);
    }} onEnded={
      () => router.push('/hallucination')
    } />
  )
}