"use client"

import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import gsap from "gsap";
import { BookmarkIcon } from '@heroicons/react/24/solid'

interface todos{
  id: number;
  text: string;
}




export default function Home() {
  const [todos, setTodos] = useState([
  { id: 1, text: 'Learn JavaScript' },
  { id: 2, text: 'Learn Vue' }, 
  { id: 3, text: 'Build something awesome' },
   { id: 4, text: 'Everythin is awesome' }])

  const container = useRef(null);

// useEffect(() => {
//   gsap.from(container.current, { duration: 0.5, y: -100, opacity: 0 });
// }, []);

const handleButtonClick = (id: number) => {
  const updatedTodos = [...todos];
  const index = updatedTodos.findIndex(todo => todo.id === id);
  const [removedTodo] = updatedTodos.splice(index, 1);
  updatedTodos.unshift(removedTodo);
  setTodos(updatedTodos);
};


 
  return (
    <div ref={container} className='flex flex-col m-2 gap-2 '>
      {todos.map((todo, index) => (
        <div key={todo.id} className="flex items-center justify-between gap-5 p-3 bg-yellow-300 rounded-lg">
          <button ><BookmarkIcon className='h-6 w-6 text-green-400'/></button>
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  )
}


