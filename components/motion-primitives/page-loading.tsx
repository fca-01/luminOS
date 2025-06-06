
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const rectangleVariants = {
  initial: {
    x: '0%',
  },
  animate: (i: number) => ({
    x: '100%',
    transition: {
      delay: 0.1 * i, // Staggered delay for each rectangle
      duration: 0.5,
      ease: 'easeIn',
    },
  }),
};

const Loading = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-full h-1/5 bg-neutral-900 flex items-center justify-center`}
          initial="initial"
          animate="animate"
          custom={i}
          variants={rectangleVariants}
          style={{ top: `${i * 20}%` }}
        >
          {i === 2 && (
            <div className='text-4xl'>
              LuminOS
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

type Props = {
  children: React.ReactNode;
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
};

const PageTransition = ({ children, isAnimating, setIsAnimating }: Props) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Total duration of the animations
    }
    return () => clearTimeout(timer);
  }, [isAnimating, setIsAnimating]);

  return (
    <>
      <AnimatePresence>
        {isAnimating && <Loading />}
      </AnimatePresence>
      <div className={`relative ${isAnimating ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        {children}
      </div>
    </>
  );
};

function PageLoading() {
  const [isAnimating, setIsAnimating] = useState(true); // Start animation on load

  return (
    <div className="h-screen text-center py-20">
      <PageTransition isAnimating={isAnimating} setIsAnimating={setIsAnimating}>
        <>
        
        </>
      </PageTransition>
    </div>
  );
}

export default PageLoading;
          