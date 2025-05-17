"use client";


import { FloatingDock } from "@/components/ui/floating-dock";
import { dockItems } from "./dock-items";

export default function Dock() {
  return (
    <div className="fixed bottom-5">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={dockItems}
      />
    </div>
  );
}