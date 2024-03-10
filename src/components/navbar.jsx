import React from 'react'

let navbar = () => {
  
  return (
    <div className="fixed z-[999] w-full px-[3vw]  flex justify-between items-center  " id="navbar">
        <div className="w-[8vw] h-[8vw] flex items-center justify-center"> <img className="object-cover w-[80%] h-[80%] " src="/OCHI/images/logo.png" alt="" /></div>
        <div className="flex items-center "id="nav-items">
            {["Home", "About", "Insights", "products", "contact us"].map((item,index)=>
                <a key={index} className={`text-[1.4vw] font-semibold text-white mx-[1.5vw] ${index===4 &&'ml-[10vw]'} `}>{item}</a>
            
            )}
        </div>

    </div>
  )
}
export default navbar;