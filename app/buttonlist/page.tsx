"use client"

import React, { useState }  from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { BookmarkIcon } from '@heroicons/react/24/solid';

const Page: React.FC = () => {

        const [items, setItems] = useState([0, 1, 2])
        const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
        const add = () => setItems([...items, items.length])


        // let todos = ([
        //         { id: 1, text: 'Learn JavaScript', done: false },
        //         { id: 2, text: 'Learn Vue', done: false },
        //         { id: 3, text: 'Build something awesome', done: false },
        //         { id: 4, text: 'Everythin is awesome' , done: false }
        // ])

        return (
                <div ref={parent} className='h-screen w-screen flex justify-center items-center flex-col'>
                        {items.map((item, index) => (
                                <div key={item} className='rounded flex justify-between'>
                                        <button onClick={() => {
                                                const updatedItems = [item, ...items.slice(0, index), ...items.slice(index + 1)];
                                                setItems(updatedItems);
                                        }}>
                                                <BookmarkIcon className='h-6 w-6 text-green-400'/>
                                        </button>
                                        {item}
                                </div>
                        ))}
                        <button onClick={add}>Add number</button>
                        {/* <button onClick={() => enableAnimations(false)}>Disable</button> */}
                </div>
        );
};

export default Page;