'use client'

import React, { useState }  from "react";


export default function Page() {
	const [index, setIndex] = useState(0);

	const handleLinkClick = (index: number) => {
		setIndex(index);
		const underline = document.querySelector('.underline') as HTMLElement;
		if (underline) {
			const button = document.querySelectorAll('button')[index];
			const buttonRect = button.getBoundingClientRect();
			const navRect = underline.parentElement?.getBoundingClientRect();
			if (navRect) {
				const left = buttonRect.left - navRect.left;
				const width = buttonRect.width;
				underline.style.transform = `translateX(${left}px)`;
				underline.style.width = `${width}px`;
			}
		}
	};

        return (
                <div className="h-screen bg-white">
                    <nav className="relative whitespace-nowrap p-2 my-4 shadow-lg">
						<div className="underline absolute block z-0 bottom-0 left-0 w-1/5 h-2 pointer-events-none mix-blend-multiply transition-all bg-blue-500"></div>
						<button onClick={() => handleLinkClick(0)} className="inline-block z-10 w-1/5 p-4 cursor-pointer text-center">Home</button>
						<button onClick={() => handleLinkClick(1)} className="inline-block z-10 w-1/5 p-4 cursor-pointer text-center" >Contact</button>
						<button onClick={() => handleLinkClick(2)} className="inline-block z-10 w-1/5 p-4 cursor-pointer text-center" >Channels</button>
						<button onClick={() => handleLinkClick(3)} className="inline-block z-10 w-1/5 p-4 cursor-pointer text-center">Playlists</button>
						<button onClick={() => handleLinkClick(4)} className="inline-block z-10 w-1/5 p-4 cursor-pointer text-center">About</button>
					</nav>
                </div>
        );
}