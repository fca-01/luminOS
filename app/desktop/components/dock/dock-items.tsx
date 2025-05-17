import { IconBuildingStore, IconFolder, IconHome, IconSettings } from "@tabler/icons-react";
import React from "react";

export const dockItems = [
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