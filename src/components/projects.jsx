import React, {useRef} from "react";
import {gsap, Power2} from 'gsap';

let projects = () => {
  
  const elementRef = useRef(null);
 const handleMouseOver = ()=>{
    console.log('Mouse over');
        gsap.from(elementRef.current,{scale:2,duration:2, ease:'power2.inOut'});
  };
  
  return (
    <div className=" w-full flex-col justify-center items-center gap-[10vh] px-[3vw] ">
      <div id="projects-headline" className="w-[98%] flex ">
        <h1 className="text-[4vw] text-white"> Featured Projects</h1>
      </div>

      {/* ----------------------------------------projects-section------------------------------------------------------ */}

      <div id="projects-showcase" className="w-[98%] flex flex-wrap justify-between  ">
        {[
          { title: "FYDE", image: "/OCHI/images/project-1-img.jpg", viewProject: "", about: "" },
          { title: "VICE", image: "/OCHI/images/project-2-img.jpg", viewProject: "", about: "" },
          { title: "TRAWA", image: "/OCHI/images/project-3-img.jpg", viewProject: "", about: "" },
          { title: "PREMIUM BLEND", image: "/OCHI/images/project-4-img.jpg", viewProject: "", about: "" },
        ].map((project, projectNo) => (
          
          <div key={projectNo} id="project-card" className="w-[49%] flex-col justify-between items-between  gap-[10vw] ">
            <div id="project-title" className="w-full flex gap-[1vw] items-center justify-start py-[5vh] ">
                <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                <p className="text-white" >{project.title}</p>
            </div>
            <div onMouseOver = {handleMouseOver}  className="project-img-div w-full h-[80vh]    relative ">
                
                <div id="img-wrapper" className="w-[100%] h-[100%] rounded-[10px] overflow-hidden  hover:scale-90 transition duration-[500ms] ease-in-out">
                    <img className="object-cover w-full h-full" src={project.image} alt="" />
                </div>
                
                <div  className={`overflow-hidden  absolute top-[50%] ${(projectNo%2===0)?('left-[102%] translate-x-[-50%]'):('right-[102%] translate-x-[50%]')}   translate-y-[-50%] z-[999] w-[20vw] h-[25vh]   flex justify-center items-center ` }>
                    <h1  className="project-name-display mt-[50vh] text-[#b2ea68] text-[4vw] font-extrabold   transition  ease-in-out opacity-0">{project.title}</h1>
                </div>
                
                
            </div>
            <div id="project-links-div" className="w-full flex justify-end gap-[1vw] py-[5vh] px-[1vw]">
                <div  id="button-1"className="w-[20%] h-[7vh] min-w-content whitespace-nowrap border-white border-[2px] rounded-full flex justify-center items-center" ><a className="text-white"href="#">View Project</a></div>
                <div className="w-[20%] h-[7vh] border-white border-[2px] rounded-full flex justify-center items-center" ><a className="text-white"href="#">About</a></div>
                
            </div>
          </div>
        ))}
      </div>

      <div id="view-all-btn-sec"></div>
    </div>
  );
};
export default projects;
