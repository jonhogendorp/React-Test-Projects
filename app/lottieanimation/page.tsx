 "use client";

import frame2 from "../Lottie/Frame 2.json";
import React, {useRef} from "react";


export default function LottieAnimation() {
        const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
        return (
                
                <div className="flex items-center justify-center h-screen">
                        <lottie-player
                                src="https://lottie.host/35f61e04-7ee6-4355-ac46-c8276750e87a/7iQYiYCKbR.lottie"
                                background="transparent"
                                speed="1"
                                style={{ width: "300px", height: "300px" }}
                                loop
                                autoplay
                        ></lottie-player>
                </div>
        );
}