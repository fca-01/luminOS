import { TextScramble } from "@/components/motion-primitives/text-scramble";

interface FolderProps {
  title: string;
  content: React.ReactNode;
}

export default function Folder({ title, content }: FolderProps) {

  return (
    <div className="flex flex-col items-center justify-start min-w-[600px] min-h-[600px] border border-[#41797D] relative">

      {/* Header */}
      <div className="bg-[#41797D] w-full pl-5 text-start text-white">
        <span>{title}</span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-10 w-full h-fit text-start uppercase text-sm border-b border-[#41797D]/30 pb-5">
            
          <div className="flex flex-col gap-0">

            <TextScramble className="font-bold">V/EXE...I24.23.755/LBC #33</TextScramble>
            <TextScramble>[2023-05-24 15.05.18]</TextScramble>
            <TextScramble>[2023-05-24 15.05.18]</TextScramble>
            <TextScramble>[2023-05-24 15.05.18]</TextScramble>
          </div>

          <div className="flex flex-col gap-0">
            <TextScramble className="font-bold">SIZE</TextScramble>
            <TextScramble>[1.00 GB]</TextScramble>
            <TextScramble>[1.00 GB]</TextScramble>
            <TextScramble>[1.00 GB]</TextScramble>
          </div>
          <div className="flex flex-col gap-0">
            <TextScramble className="font-bold">TYPE</TextScramble>
            <TextScramble>{title}</TextScramble>
            <TextScramble>{title}</TextScramble>
            <TextScramble>{title}</TextScramble>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-96 flex justify-center items-center">
        <span>{content}</span>
      </div>

      {/* Footer */}
      <div className="bg-[#41797D] w-full text-sm text-right px-5 text-white flex justify-end bottom-0 absolute">
        <span>AFP: 143:22:23:16</span>
      </div>
    </div>
  );
};
