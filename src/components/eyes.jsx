import React, { useEffect, useState } from "react";

let eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div data-scroll data-scroll-speed="-.5" 
        id="play-area"
        className="w-[80%] h-[90%] bg-[#125A4F] flex justify-center items-center gap-[5vw] pt-[5vh]"
      >
        <div className="circular-eyes w-[15vw] h-[15vw] bg-[white] rounded-full flex justify-center items-center">
          <div className="relative eye-pupil w-[8vw] h-[8vw] bg-[black] rounded-full flex justify-center items-center">
            <p className="text-white">PLAY</p>
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="white-eyeBall absolute w-full h-[1.5vw]  "
            >
              <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>
            </div>
          </div>
        </div>


        <div className="circular-eyes w-[15vw] h-[15vw] bg-[white] rounded-full  flex justify-center items-center">
          <div className="relative eye-pupil w-[8vw] h-[8vw] bg-[black] rounded-full flex justify-center items-center">
            <p className="text-white">PLAY</p>
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="white-eyeBall absolute w-full h-[1.5vw] "
            >
              <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default eyes;
