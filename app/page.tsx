'use client';

//import { Login } from "@/components/login/login";
import Booting from "@/components/booting/booting";
import dynamic from "next/dynamic";

const DynamicLogin = dynamic(() => import("../components/login/login"), { 
  loading: () => <div>Loading...</div> 
});

export default function Home() {

  return (
    <div className="flex items-center justify-center">
      <Booting />
      <DynamicLogin />
    </div>
  );
}

//font-[family-name:var(--font-geist-sans)]

