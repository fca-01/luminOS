"use client";

import PageLoading from "@/components/motion-primitives/page-loading";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBuildingStore, IconFolder, IconHome, IconSettings } from "@tabler/icons-react";
//import Image from "next/image";

export default function Desktop() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="w-20 h-20"/>
      ),
      href: "#",
    },
    {
      title: "Folder",
      icon: (
        <IconFolder className="w-20 h-20"/>
      ),
      href: "#",
    },
    {
      title: "Apps",
      icon: (
        <IconBuildingStore className="w-20 h-20"/>
      ),
      href: "#",
    },
    {
      title: "Configs",
      icon: (
        <IconSettings className="w-20 h-20"/>
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <PageLoading />
      {/* <Image src={"/wallpapers/wallpaper1.jpg"} width={4000} height={4000} alt="" className="fixed top-0 -z-10 opacity-50" quality={100} /> */}
      <div className="fixed bottom-5">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
      <div>
        <IconFolder />
      </div>
    </div>
  );
}