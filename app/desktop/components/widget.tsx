import { CloudIcon } from "lucide-react";


export default function Widget() {
  return (
    <div className="w-96 h-96 border border-[#41797D]/0 m-5 text-[#769487]">

      {/* Header */}
      <div className="p-2 flex items-center justify-between bg-[#41797D] text-white/70">
        <div className="">
          TIME
        </div>
        <div className="">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Weather */}
      <div className="mt-5 border border-[#41797D] flex">
        <CloudIcon className="w-20 h-16 text-[#41797D] bg-[#41797D]/30 p-2" />
        <div className="w-full flex flex-col justify-center items-start mx-3">
          <span className="text-sm mb-0.5">DIVECAST CLOUDS</span>
          {/* Temperature */}
          <div className="flex flex-col items-start justify-between w-full">
            <div className="w-[40%] h-3 bg-[#41797D] " />
            {/* Scale */}
            <div className="flex items-center justify-between w-full text-xs text-#769487 mt-1 ">
              0° 10° 15° 20° 25° 30°
            </div>
          </div>
        </div>
      </div>

       {/* Weather */}
      <div className="mt-5 border border-[#41797D] flex flex-col">
        <div className="flex items-center justify-between w-full p-2">
          <span>
            /
          </span>
          <span>
            89861
          </span>
        </div>
        <div className="flex items-center justify-between w-full p-2">
          <span>
            /DEV
          </span>
          <span>
            23871
          </span>
        </div>
        <div className="flex items-center justify-between w-full p-2">
          <span>
            /NET
          </span>
          <span>
            59134
          </span>
        </div>
      </div>
    </div>
  );
}