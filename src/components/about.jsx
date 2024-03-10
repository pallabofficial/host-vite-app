import React from 'react'

let  about = () => {
  return (
    <div className="bg-[#CDEA68] w-full pt-[20vh] flex-col ">
        <div id="description" className="w-[100%] border-b-[1px] border-[#99AD53] px-[3vw] pb-[15vh]">
          <h1 className="w-[90%] text-[4vw] leading-[1.1] tracking-[1]">Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className="underline underline-offset-8">raise funds</span>, <span className="underline underline-offset-8">sell prod­ucts</span>, ex­plain com­plex ideas, and <span className="underline underline-offset-8">hire great peo­ple</span> .</h1>
        </div>
        <div id="approach" className="flex py-[10vh]">
          <div id="read-more" className = "flex-col gap-3 w-1/2 px-[3vw]">
            <h1 className = "text-[5vw] ">Our approach</h1>
            <div  className="btn w-[30%] bg-[#000000c7] hover:bg-black rounded-full text-white py-[3vh] px-[1.5vw] flex justify-between items-center">
              <p>READ MORE</p>
              <div className = "btn-hover:w-[2vw] w-[0.7vw] h-[0.7vw] rounded-full bg-white"></div>          
            </div>
          </div>
          <div id="about-img" className="w-1/2 h-[80vh] px-[3vw] ">
            <div className="w-full h-full bg-[#6d7e2f] rounded-[20px] overflow-hidden"><img className="object-cover w-full h-full" src="/OCHI/images/about-img.jpg" alt="" /></div>
          </div>
        </div>
    </div>
  )
}
export default about;
