'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BouncingBall = () => {
    const ballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ball = ballRef.current;

        if (ball) {
            gsap.to(ball, {
                duration: 2,
                y: 300,
                ease: "bounce.out",
                repeat: -1,
                yoyo: true
            });
        }
    }, []);

    return (
        <div className='w-[50px] h-[50px] bg-blue-500 rounded-full relative' ref={ballRef} ></div>
    );
};

export default BouncingBall;
