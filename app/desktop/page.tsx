"use client";

import PageLoading from "@/components/motion-primitives/page-loading";
import Dock from "./components/dock/Dock";
import { ExpandableFolder } from "./components/folder/expandable-folder";
import { FoldHorizontalIcon } from "lucide-react";
import {images, videos} from "./components/folder/data/FoldersContents";
import { DisplayFolderContent } from "./components/folder/DisplayFolderContent";

const initialFolders = [{
  title: "My Computer",
  icon: <FoldHorizontalIcon />,
  content: "BBBBBBBB"
},
{
  title: "Videos",
  icon: <FoldHorizontalIcon />,
  content: <DisplayFolderContent type="videos" content={videos} />
},
{
  title: "Pictures",
  description: "",
  icon: <FoldHorizontalIcon />,
  content: <DisplayFolderContent type="images" content={images} />
},
];

export default function Desktop() {
  
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <PageLoading />
      <Dock />

      {/* Display Folders in desktop */}
      <div className="flex items-start justify-start w-full h-full p-10">
        <div className="grid grid-cols-1 gap-5 w-72 h-fit">
          {initialFolders.map((item) => (
              <div key={item.title}>
                <button 
                  className="mb-5">
                    <ExpandableFolder folder={item} />
                </button>
              </div>
          ))}
        </div>
      </div>

    </div>
  );
}