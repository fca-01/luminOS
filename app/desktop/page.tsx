"use client";

import PageLoading from "@/components/motion-primitives/page-loading";
import Dock from "./components/dock/Dock";
import { IconFolder } from "@tabler/icons-react";
import { Reorder } from "motion/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
//import Image from "next/image";

const initialItems = ["Computer", "Documents", "Pictures", "Music", "Videos", "Downloads"];

export default function Desktop() {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();
  const searchParams = useSearchParams();

  const adicionarParametro = ( target: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("folder", target.toLowerCase()); // atualiza ou cria o parâmetro

    router.push(`?${params.toString()}`, { scroll: false });
  };
  
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <PageLoading />
      <Dock />

      <div className="flex items-start justify-start w-full h-full p-10">

        <div className="flex gap-5 w-full h-full">
          <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item) => (
              <Reorder.Item value={item} id={item} key={item}>
                <button 
                  onClick={() => adicionarParametro(item)}
                  className="w-24 h-fit p-2.5 rounded-lg hover:bg-neutral-900 border border-transparent hover:border-neutral-700 flex flex-col items-center justify-center mb-5 gap-2">
                    <IconFolder />
                    <span className="text-sm">{item}</span>
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>

    </div>
  );
}