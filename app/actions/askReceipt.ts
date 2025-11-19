"use server";

export type ReceiptState = {
  error: string;
  answer: string;
  prompt: string;
  ok: boolean;
};

export async function askReceipt(prevState: ReceiptState, formData: FormData): Promise<ReceiptState> {
  const prompt = formData.get("prompt") as string;

  if (!prompt || prompt.trim() === "") {
    return {
      error: "질문을 입력해주세요!",
      answer: "",
      prompt: "",
      ok: false,
    };
  }

  try {
    const res = await fetch("/api/receipt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        error: `서버 오류: ${res.status}`,
        answer: "",
        prompt,
        ok: false,
      };
    }

    const data = await res.json();

    return {
      error: "",
      answer: data.answer ?? "",
      prompt,
      ok: true,
    };
  } catch (err) {
    return {
      error: "네트워크 오류: 서버와 통신할 수 없습니다.",
      answer: "",
      prompt,
      ok: false,
    };
  }
}
