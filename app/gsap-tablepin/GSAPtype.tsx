"use client"

import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import gsap from "gsap";

const todos = [
  { id: 1, text: 'Learn JavaScript', done: false },
  { id: 2, text: 'Learn Vue', done: false },
  { id: 3, text: 'Build something awesome', done: false },
  { id: 4, text: 'Everythin is awesome' , done: false }
]


export default function Home() {
  const container = useRef(null);
  return (
    <div ref={container}>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between">
          <span>{todo.text}</span>
          <input type="checkbox" checked={todo.done} />
        </div>
      ))}
    </div>
  )
}