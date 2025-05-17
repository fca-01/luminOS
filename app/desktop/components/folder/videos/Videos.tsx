import { IconVideo } from "@tabler/icons-react"
import { PlayVideo } from "./play-video"



export default function Videos() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-1.5 border border-transparent hover:border-neutral-600 p-1.5">
      <PlayVideo />
      <IconVideo className="w-8 h-8" />
      <span>cat.mp4</span>
    </div>
  )
}