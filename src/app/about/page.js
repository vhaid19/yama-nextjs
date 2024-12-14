import Image from 'next/image'
import React from 'react'
import {  Backgrounds } from '@/../public/index'
import AboutUs from '@/components/AboutUs'

function About() {
  return (
    <div>
      <div className='banar w-full h-auto'>
        <Image
        src={Backgrounds}
        width={500}
        height={500}
        alt='Background banar'
        className='w-full h-[800px]'
        />
      </div>
      <AboutUs />
    </div>
  )
}

export default About