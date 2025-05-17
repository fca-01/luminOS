'use client';

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { MultiStepLoader as Loader } from "@/components/ui/loader";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Login } from "@/components/login/login";
import PageLoading from "@/components/motion-primitives/page-loading";

export default function Home() {
  const links = [
   {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  const loadingStates = [
    { text: "Welcome!" },
    { text: "Loading..." },
    { text: "Checking your wallet..." },
    { text: "Connecting to the network..." },
    { text: "Creating your wallet..." },
    { text: "Deploying your contract..." },
    { text: "Setting up your wallet..." },
    { text: "Setting up your contract..." },
    { text: "Setting up your contract..." },
    { text: "Loading..." },
    { text: "Loading..." },
    { text: "Checking your wallet..." },
    { text: "Connecting to the network..." },
    { text: "Creating your wallet..." },
    { text: "Deploying your contract..." },
    { text: "Setting up your wallet..." },
    { text: "Setting up your contract..." },
    { text: "Booting Complete!" },
  ];

  const time = loadingStates.length * 200;
  const logoTime = 6000

  const [loading, setLoading] = useState(true);
  const [logoLoading, setLogoLoading] = useState(true);

  const setTime = setTimeout(() => {
    setLoading(false);
  }, time);

  const setLogoTime = setTimeout(() => {
    setLogoLoading(false);
  }, logoTime);

  return (
    <div className="flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={200} loop={false}  />

      {logoLoading && !loading && (
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden     rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          SkyOS
        </h1>
        <div className="w-[40rem] h-40 relative flex justify-center items-center">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  
        {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
  
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>  
      </div>
      )}
      
      {!logoLoading && !loading && (
        <>
          <Login />
          
        </>

      )}
    </div>
  );
}

//font-[family-name:var(--font-geist-sans)]

