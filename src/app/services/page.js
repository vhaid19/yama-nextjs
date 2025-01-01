import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Img75 } from '../../../public'

function Services() {
  return (
    <div>
      <div className='flex justify-around my-6'>
        <section>
          <div className='flex flex-col items-center md:w-96 rounded-3xl gap-5 py-6 border-2 border-white'>
            <h1 className='text-4xl text-orange-500'>Our Services</h1>
            <Link href={"#"} className='text-xl'>Construction Services</Link>
            <Link href={"#"} className='text-xl'>Consulting Services</Link>
            <Link href={"#"} className='text-xl'>Turnkey Solutions Services</Link>
            <Link href={"#"} className='text-xl'>Project Management Services Services</Link>
          </div>
        </section>
        <section>
          <h1>Construction Services</h1>
          <Image 
          src={Img75}
          width={500}
          height={500}
          />
        </section>
      </div>
    </div>
  )
}

export default Services