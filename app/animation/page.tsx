'use client'

import React from 'react'
import Lottie from 'lottie-react'
import checkAnimation from './data.json'

const page = () => {

  return (
    <div className='h-screen flex items-center justify-center'>
          <div className="container w-48">
                <Lottie animationData={checkAnimation} />
                <div id="bm">BodyMovin</div>
        </div>

    </div>
  )
}

export default page