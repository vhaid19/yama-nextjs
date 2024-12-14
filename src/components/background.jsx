'use client'

import React, { useState, useEffect } from 'react'
import {
  Background2,
  Background,
  Background1,
} from '../../public/index'
import Image from 'next/image'

function Backgrounds() {
  const background = [Background2, Background1, Background]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === background.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change background every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {background.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={item}
            alt="background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  )
}

export default Backgrounds