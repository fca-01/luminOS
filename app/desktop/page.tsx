"use client";

import PageLoading from "@/components/motion-primitives/page-loading";
import Dock from "./components/dock/Dock";
//import { Reorder } from "motion/react";
//import { useState } from "react";
//import { useRouter, useSearchParams } from "next/navigation";
import { ExpandableCardDemo } from "./components/folder/expandable-folder";
import { FoldHorizontalIcon } from "lucide-react";
import Videos from "./components/folder/videos/Videos";
//import Image from "next/image";

const initialItems2 = [{
  title: "My Computer",
  icon: <FoldHorizontalIcon />,
  content: "BBBBBBBB"
},
{
  title: "Videos",
  icon: <FoldHorizontalIcon />,
  content: <Videos />
},
{
  title: "Pictures",
  description: "",
  icon: <FoldHorizontalIcon />,
  content: "AAAAAAAAAAAAAa"
},
];

export default function Desktop() {
  //const [items, setItems] = useState(initialItems2);
  /* const router = useRouter();
  const searchParams = useSearchParams();

  const adicionarParametro = ( target: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("folder", target.toLowerCase()); // atualiza ou cria o parâmetro
    router.push(`?${params.toString()}`, { scroll: false });
  }; */
  
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <PageLoading />
      <Dock />

      <div className="flex items-start justify-start w-full h-full p-10">

        <div className="grid grid-cols-1 gap-5 w-72 h-fit">
          {initialItems2.map((item) => (
              <div key={item.title}>
                <button 
                 //onClick={() => adicionarParametro(item.title)}
                  className="mb-5">
                    <ExpandableCardDemo folder={item} />
                </button>
              </div>
          ))}

          {/* <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item) => (
              <Reorder.Item value={item} id={item} key={item.title}>
                <button 
                  onClick={() => adicionarParametro(item.title)}
                  className="mb-5">
                    <ExpandableCardDemo folder={item} />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group> */}
        </div>
      </div>

    </div>
  );
}