
export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className=" text-white dark:text-neutral-900 flex mb-1.5">
      <div className="bg-[#FF615F] mr-1.5 w-2 h-full">

      </div>
      <div className="bg-[#FF615F] text-white dark:text-neutral-950 pl-1.5 w-full font-bold">
        {children?.toString().toUpperCase()}
      </div>
    </div>
  )
}