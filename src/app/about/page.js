import Image from 'next/image'
import React from 'react'
import {  Background } from '@/../public/index'
import { Fullscreen } from 'lucide-react'

function About() {
  return (
    <div>
      <div className='banar'>
        <Image
        src={Background}
        width={1500}
        height={300}
        alt='Background banar'/>
      </div>
    </div>
  )
}

export default About