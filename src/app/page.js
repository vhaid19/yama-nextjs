import React from 'react'
import Backgrounds from '@/components/background'
import { CheckmarkIcon, Frame1 } from '../../public/index'
import Image from 'next/image'
import ProductGrid from '@/components/ui/Cart'
import LandscapeCard from '@/components/ui/Lscapcart'
import Gallery from '@/components/Projectgallary'
function page() {
  const keypoints = [
    {
      icon : CheckmarkIcon,
      'points': 'Specializes in designing and constructing'
    },
    {
      icon : CheckmarkIcon,
      'points': "Strong understanding of our clients' needs and goals"
    },
    {
      icon : CheckmarkIcon,
      'points': "Architectural design, engineering, and construction management"
    },
    {
      icon : CheckmarkIcon,
      'points': "Environmental impact of our projects"
    },
    {
      icon : CheckmarkIcon,
      'points': "Sustainable engineering solutions"
    }
  ]
  return (
    <div>
      <main>
        <Backgrounds />
      </main>
      <div className='md:flex md:justify-around w-[90%] md:mx-0 mx-auto justify-center h-auto py-14 md:w-full'>
        <div className='info-contenar'>
          <h1 className='title md:text-4xl text-2xl p-4 text-orange-600'>Welcome To Yama Constructions Real Solutions.</h1>
          <div className='company-key-points my-4 '>
            {
              keypoints.map((keypoint, index)=>{
                return(
                  <div key={index} className='key-point flex items-center gap-4 my-4 md:px-4 '>
                    <keypoint.icon />
                    <h2 className='md:w-auto w-80 md:text-3xl text-lg'>{keypoint.points}</h2>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='img-contenar flex justify-center items-center'>
          <Image 
          src={Frame1}
          width={400}
          height={500}
          alt='fram1'
          />
        </div>
      </div>
      <div className='choose-us my-10'>
        <h1 className='uppercase text-3xl text-orange-600 text-center underline my-7'>Why Choose Us</h1>
        <ProductGrid />
      </div>
      <div className='landscap-cart'>
        <LandscapeCard />
      </div>
      <hr className='w-[90%] mx-auto'/>
      <div className='gallary'>
        <h1 className='text-5xl underline text-center'>Project Gallery</h1>
        <Gallery />
      </div>
    </div>
  )
}

export default page