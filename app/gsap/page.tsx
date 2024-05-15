import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
// import { CustomEase } from "gsap/CustomEase";
// import { RoughEase } from "gsap/EasePack";
    
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP);


export default function gsapAnimation() {
return(

<div className=" flex items-center h-full justify-center">
        <div className="bg-gradient-to-r rounded-full from-red-500 to-blue-500 w-[300px] h-[300px]">
        </div>
</div>
)
}