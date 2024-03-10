import React, {useRef, useEffect} from "react";
import {gsap, Power2} from 'gsap';



let banner = () => {
  const elementRef = useRef(null);
  useEffect(()=>{
      gsap.from(elementRef.current, { scale: 0 },{ scale: 1, duration: 3, ease: 'power2.inOut' } );
  }, []);
  

  return (
    <div data-scroll data-scroll-speed="-.6" className="w-full min-h-screen pt-[0.1vh] overflow-hidden">
      <div id="banner-text" className="mt-[25vh] px-[3vw] ">
        {['WE CREATE', 'EYE OPENING', 'PRESENTATIONS'].map((value,index)=>{
          return (    
            <div id="banner-text-each" className="flex items-center gap-[1vw]">
              {index===1 && (<motion.div initial={{width:0}}
               animate={{width:"10vw"}}
               transition={{ease: [0.76,0,0.24,1], duration:1}}
               id="banner-text-img" className="w-[10vw] h-[6vw] bg-red-600 rounded-md overflow-hidden"><img className="w-full h-full object-cover" src="/OCHI/images/banner-title-img.jpg" alt="" /></motion.div>)}
              <h1   key={index } className="text-[white] text-[8vw] leading-[17vh] tracking-[-0.5vw] font-bold ">
            {value}
              </h1>
            </div>
            
          )})}      
      </div>

      <div className="border-t-[1px] mt-[15vh] mb-[5vh] border-[#cbd5e1] flex justify-between items-center px-[3vw] py-[5vh]"   id="banner-footer">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
          <a key={index} className="text-[1.3vw] tracking-[0vw] leading-none text-white" >{item}</a>
        ))}
        <div id="banner-footer-btn" className="flex gap-3 items-center">
          <div className="px-4 py-2 border-[2px] border-white rounded-full text-white  "><p className="text-[1vw]">START THE PROJECT</p></div>
          <div className="w-10 h-10 rounded-full border-white border-[2px] text-white flex justify-center items-center text-[1.3vw]"><span className = "rotate-45"><FaLongArrowAltUp /></span></div>
        </div>
      </div>
    </div>
  );
};
export default banner;
