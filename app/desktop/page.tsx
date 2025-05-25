"use client";

import PageLoading from "@/components/motion-primitives/page-loading";
import { ExpandableFolder } from "./components/folder/expandable-folder";
import { Folder as FolderIcon, KanbanSquare, TerminalSquare } from "lucide-react";
import {images, videos} from "./components/folder/data/FoldersContents";
import { DisplayFolderContent } from "./components/folder/DisplayFolderContent";
import Background from "./components/background";
import Kanban from "./components/apps/kanban";
import Widget from "./components/widget";
import Dock2 from "./components/dock/Dock2";
import NeofetchTerminal from "./components/apps/NeofetchTerminal";




const initialFolders = [{
  title: "My Computer",
  icon: <FolderIcon />,
  content: "BBBBBBBB"
},
{
  title: "Videos",
  icon: <FolderIcon />,
  content: <DisplayFolderContent type="videos" content={videos} />
},
{
  title: "Pictures",
  description: "",
  icon: <FolderIcon />,
  content: <DisplayFolderContent type="images" content={images} />
},
{
  title: "kanban.exe",
  description: "",
  icon: <KanbanSquare />,
  content: <Kanban />
},
{
  title: "Terminal",
  description: "",
  icon: <TerminalSquare />,
  content: <NeofetchTerminal />
}

];

export default function Desktop() {
  
  return (
    <div className="flex items-center justify-center h-screen w-screen border">
      <PageLoading />
      <div className="absolute top-0 left-0 w-screen h-screen -z-50 flex justify-center">
        <Background />
      </div>
      {/* <Dock /> */}
      <Dock2 />
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

      <Widget>
        
      </Widget>

    </div>
  );
}