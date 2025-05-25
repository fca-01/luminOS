//import Image from "next/image";
//import Kanban from "./apps/kanban";
//import Folder from "./folder/Folder";

export default function Background() {
  return (
    <div className=" top-0 left-0 w-screen h-screen -z-50 flex justify-end">
      {/* <Image src={'/wallpapers/wallpaper2.jpg'} alt="wallpaper" fill className="object-cover w-full h-full" quality={100} /> */}
      <div className="w-72 h-fit  right-10 top-10 -z-50 ">
        {/* <Folder title="My Computer" content={<Kanban />} /> */}
      </div>
    </div>
  );
}