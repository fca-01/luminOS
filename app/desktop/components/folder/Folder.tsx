import { TextScramble } from "@/components/motion-primitives/text-scramble";

interface FolderProps {
  title: string;
  content: React.ReactNode;
  showHeader?: true | boolean;
}

export default function Folder({ title, content }: FolderProps) {

  return (
    <div className="flex flex-col items-start justify-between min-w-[600px] min-h-[600px] border border-[#41797D] relative overflow-y-auto max-h-[600px]">


      <div className=" flex flex-col items-start justify-start w-full">
        {/* Header */}
        <div className="bg-[#41797D] w-full pl-5 text-start text-white">
          <span>{title}</span>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full h-fit text-start uppercase text-sm border-b border-[#41797D]/30 p-5 ">
          <div className="flex flex-col gap-0 min-w-72">
            <TextScramble className="font-bold">V/EXE...I24.23.755/LBC #33</TextScramble>
            <TextScramble>[2023-05-24 15.05.18]</TextScramble>
            <TextScramble>[2023-05-24 15.05.18]</TextScramble>
            <TextScramble>[2023-05-24 15.05.18]</TextScramble>
          </div>

          <div className="flex flex-col gap-0 min-w-72">
            <TextScramble className="font-bold">SIZE</TextScramble>
            <TextScramble>[1.00 GB]</TextScramble>
            <TextScramble>[1.00 GB]</TextScramble>
            <TextScramble>[1.00 GB]</TextScramble>
          </div>
          <div className="flex flex-col gap-0 min-w-72">
            <TextScramble className="font-bold">TYPE</TextScramble>
            <TextScramble>{title}</TextScramble>
            <TextScramble>{title}</TextScramble>
            <TextScramble>{title}</TextScramble>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-start items-start h-full w-full">
        <span>{content}</span>
      </div>

      {/* Footer */}
      <div className="bg-[#41797D] w-full text-sm text-right px-5 text-white flex justify-end  bottom-0">
        <span>AFP: 143:22:23:16</span>
      </div>
    </div>
  );
};
