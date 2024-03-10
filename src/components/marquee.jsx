
import React from "react";

let marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01"  className="w-full  bg-[#004D43] flex items-center py-[5vw] rounded-tl-[20px] rounded-tr-[20px] ">
      <div className = " flex  border-t-[1px] border-b-[1px] px-[-10vh] border-[#4D837C] overflow-hidden whitespace-nowrap ">
        {Array(3).fill().map((_, index) => (
            
              <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration:5}} className="text-[10vw] leading-none text-white font-bold  px-[10vw] ">WE ARE OCHI</motion.h1>
            
          ))}
      </div>
      
    </div>
  );
};
export default marquee;
