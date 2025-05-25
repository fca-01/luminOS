
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
//import Folder from "./Folder";

import dynamic from "next/dynamic";
import Loading from "@/components/loading";

const DynamicFolder = dynamic(() => import("./Folder"), {
  loading: () => <Loading />,
});

interface Props {
  folder: FolderProps;
}
interface FolderProps {
  title: string;
  content: React.ReactNode
  icon: React.ReactNode | React.ReactSVGElement;
}

export function ExpandableFolder({ folder }: Props) {
  const [active, setActive] = useState<(typeof folder) | string | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      {/* background */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* background */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 w-screen grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            {/* modal container */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" h-fit w-fit flex flex-col bg-white dark:bg-neutral-900 overflow-hidden"
            >
              {/* modal Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-0">
                  <div className="">
                    {/* modal Title */}
                    {/* <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3> */}

                    {/* modal content */}
                    <motion.p
                      layoutId={`description-${active.content}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      <DynamicFolder title={active.title} content={active.content} showHeader/>
                    </motion.p>
                  </div>
                  {/* modal action Button */}
                 {/*  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* folder list */}
      <ul className="flex flex-col w-32 h-fit gap-4">
          <motion.div
            onClick={() => setActive(folder)}
            className="p-1.5 flex flex-col justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-900 border border-transparent hover:border-neutral-600 rounded-b-lg cursor-pointer"
          >
            <div className="flex flex-col gap-2 items-center justify-center text-[#6ba0a4] ">

              {folder.icon}
              {/* folder list Title */}
              <motion.h3
                className="font-medium text-[#96b4a7] text-center text-xs uppercase"
              >
                {folder.title}
              </motion.h3>
            </div>
          </motion.div>

      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

