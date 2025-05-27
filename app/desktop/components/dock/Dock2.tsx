
export default function Dock2() {
  return (
    <div className="absolute bottom-5 left-0 w-[100%] flex justify-between gap-5 text-sm text-[#769487]  border-t border-t-[#41797D]">
      <div className="flex gap-4 items-start justify-start mt-3 ml-10">
        <div className="border border-[#41797D] px-4 rounded-b-lg">
          <span>
            SEARCH STRING ../CA...
          </span>
        </div>
        <div className="border border-[#41797D] px-4 rounded-b-lg">
          <span>
            AFP;141:221:23:23
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-start justify-start mr-5">
      {items.map((item) => (
      <div className="flex gap-0 items-start justify-start mt-3" key={item.label}>
        <div className=" px-4 rounded-b-lg bg-[#4C6A59] text-black flex gap-6 uppercase font-bold">
          <span className="flex gap-2">
            {item.shortcut}
          </span>
          <span>
            {item.label}
          </span>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}

const items = [
  {
    label: "Search",
    shortcut: "F1"
  },
  {
    label: "Settings",
    shortcut: "F2"
  },
  {
    label: "Function",
    shortcut: "F3"
  },
  {
    label: "Help",
    shortcut: "F4"
  },
]