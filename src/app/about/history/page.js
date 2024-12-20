'use client'
import Image from 'next/image'
import React from 'react'
import Typedtext from '@/components/Typed'
import { Architectureebg } from '@/../public/index'

function History() {
  return (
    <div>
      <div className='main-content my-8 flex justify-around'>
      <div className='flex justify-end mr-7'>
        <Image
        src={Architectureebg}
        width={700}
        height={700}
        alt='Architectureebg'
        />
      </div>
      <div className=''>
        <div className='Date'>

        </div>
        <div className='typed-text w-96 text-xl'>
        <Typedtext strings={['Hello World', 'Hello This is my page']}/> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default History