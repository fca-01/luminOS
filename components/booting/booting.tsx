'use client';


import { useState } from "react";
import { bootingStages } from "./bootingStages";
import { MultiStepLoader as Loader } from "@/components/ui/loader";
import { SparklesCore } from "../ui/sparkles";

export default function Booting() {

  const time = bootingStages.length * 200;
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setTime = setTimeout(() => {
    setLoading(false);
  }, time);

    const logoTime = 6000

  const [logoLoading, setLogoLoading] = useState(true);


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setLogoTime = setTimeout(() => {
    setLogoLoading(false);
  }, logoTime);

  return (
    <>
      <Loader loadingStates={bootingStages} loading={loading} duration={200} loop={false}  />
      
      <div className={`${!logoLoading && "hidden"} min-h-screen w-screen absolute top-0 bg-black flex flex-col items-center justify-center overflow-hidden z-50 rounded-md`}>

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
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" 
          />

        </div>  
      </div>
    </>
  )
}