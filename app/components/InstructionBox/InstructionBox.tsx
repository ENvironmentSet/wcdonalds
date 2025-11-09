import Image from "next/image";

export default function InstructionBox({ instruction }: { instruction: string }) {
  return (
    <div>
      <Image />
      <p>{instruction}</p>
      <Image />
    </div>
  );
}
