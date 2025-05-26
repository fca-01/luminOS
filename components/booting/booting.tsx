'use client';


import { useState } from "react";
import { bootingStages } from "./bootingStages";
import { MultiStepLoader as Loader } from "@/components/ui/loader";
import Logo from "../Logo";

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
      
      <div className={`${!logoLoading && "hidden"} `}>

        <Logo />
      </div>
    </>
  )
}
