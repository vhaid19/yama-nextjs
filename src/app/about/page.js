import Image from 'next/image'
import React from 'react'
import {  Background } from '@/../public/index'
import { Fullscreen } from 'lucide-react'

function About() {
  return (
    <div>
      <div className='banar w-full h-auto'>
        <Image
        src={Background}
        width={500}
        height={500}
        alt='Background banar'
        className='w-full h-[800px]'
        />
      </div>
    </div>
  )
}

export default About