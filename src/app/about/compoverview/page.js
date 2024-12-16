import Image from 'next/image'
import React from 'react'
import { Background2, Prjakta, Saad, Aman } from '@/../public/index'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Compoverview() {
  return (
    <div>
      <div className='w-full h-auto p-4 flex justify-around'>
        <div className='w-[30%] flex justify-center items-center flex-wrap'>
          <div className='w-[60%] mx-auto'>

          </div>
        </div>
        <div className='w-full gap-5'>
          <h1 className='font-mono text-4xl'>Compnay overview</h1>
          <div className='w-[80%] text-xl my-8'>
            Yama Constructions, founded in 1993 by visionary leader Jiya Moin, is a premier construction company committed to excellence in the building and infrastructure industry. With over three decades of expertise, Yama Constructions has grown into a trusted name, known for delivering innovative and high-quality projects. Under the dynamic leadership of CEO Jiya Moin, the company has continuously evolved to meet the ever-changing demands of the construction sector, maintaining a balance between traditional values and modern advancements.
          </div>
          <div className='w-[80%] text-xl my-8'>
            Operating across an extensive network, Yama Constructions has successfully completed projects in multiple locations, catering to diverse industries, including residential, commercial, and industrial. The company’s wide reach ensures its ability to deliver superior solutions tailored to the unique needs of its clients, irrespective of location. This network also fosters collaborations with local communities and suppliers, creating a significant positive impact in the regions we serve.
          </div>
        </div>
      </div>
      <div className='Image'>
        <Image
          src={Background2}
          alt=''
          className='m-auto w-[60%] h-auto my-9 rounded-lg'
        />
      </div>
      <div className='w-full p-10 flex justify-around'>
        {/* Adding temperary Qutes */}
        <div className='qutes text-4xl font-serif text-wrap max-w-96 flex flex-wrap'>
          <ImQuotesLeft />
          Our Work does make sense only if it is a faithful witness of his time.
          <ImQuotesRight className='flex justify-end' />
        </div>
        {/* Adding temperary Image */}
        <div className='Image-inspired'>
          <Image
            src={Background2}
            width={500}
            height={500}
            alt='Background2' 
            className='rounded-lg grayscale hover:grayscale-0'
            />
        </div>
      </div>

      {/*  */}
      <div className='w-[90%] m-auto p-6 flex justify-around gap-3'>
        <div className='teaments-images flex items-center w-[60%] gap-6'>
          <div className='two-image grid gap-4'>
            <div className='border-2 rounded-lg transition ease-in-out delay-150 hover:scale-110 duration-300 group' >
              <Image
                src={Prjakta}
                width={500}
                height={500}
                alt='company employe'
                className='rounded-lg grayscale hover:grayscale-0 transition ease-in-out delay-100 group-hover:-translate-y-5 group-hover:scale-105 duration-600 group-hover:z-30'
              />
            </div>
            <div className='border-2 rounded-lg transition ease-in-out delay-150 hover:scale-110 duration-300'>
              <Image
                src={Saad}
                width={500}
                height={500}
                alt='Company Employe'
                className='rounded-lg transition grayscale hover:grayscale-0 ease-in-out delay-100 hover:-translate-y-5  hover:scale-105 duration-600'
              />
            </div>
          </div>
          <div className='one-image'>
            <div className='border-2 rounded-lg transition ease-in-out delay-150 hover:scale-110 duration-300'>
              <Image
                src={Aman}
                width={500}
                height={500}
                alt='Aman'
                className='rounded-lg transition grayscale hover:grayscale-0 ease-in-out delay-100 hover:-translate-y-5  hover:scale-105 duration-300'
              />
            </div>
          </div>
        </div>
        <div className='teamets-info w-full px-16'>
          <h1 className='text-7xl font-serif'>The Team.</h1>
          <div className='my-3'>
            <h1 className='text-3xl'>Quality Assurance</h1>
            <div className='text-xl'>
            At Yama Constructions, quality is non-negotiable. From sourcing premium materials to employing innovative techniques, every project is built to stand the test of time. Our rigorous quality control measures ensure that each structure meets the highest industry standards, offering safety, functionality, and aesthetic appeal.
            </div>
          </div>
          <div className=''>
            <h1 className='text-3xl'>Customer Satisfaction</h1>
            <div className='text-xl'>
            Customer satisfaction is at the core of our business philosophy. We prioritize open communication and collaboration to fully understand our clients’ visions and expectations. By delivering tailored solutions and maintaining transparency throughout the process, we aim to create lasting relationships based on trust and reliability.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compoverview