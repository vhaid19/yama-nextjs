import React from 'react'
import {
  Linkedin,
  Whatsapp,
  Instagram,
  Facebook,
  Mail,
  Twitter
} from '@/../public/index'
import Link from 'next/link'
import Image from 'next/image'
import Nav2 from './ui/nav2'

function Footer() {
  const socialmedia = [
    {
      img: Linkedin,
      url: 'https://www.linkedin.com/company/yamaconstructions/?originalSubdomain=in'
    },
    {
      img: Whatsapp,
      url: 'https://api.whatsapp.com/send?phone=919822069723'
    },
    {
      img: Instagram,
      url: '#'
    },
    {
      img: Facebook,
      url: 'https://www.facebook.com/yamaconstructions/'
    },
    {
      img: Twitter,
      url: '#'
    }
  ]
  return (
    <div>
      <div className='footer w-full h-auto md:flex-row flex-col bg-slate-600 flex justify-between p-4'>
        <div className='discription w-1/3 flex flex-col items-center justify-center mx-auto'>
          <h1 className='text-3xl text-orange-600 font-semibold'>Yama Constructions</h1>
          <p className='w-[380px]'>
            Yama Constructions is one of the best Service Provider of Architectural Consultancy in Kolhapur, Maharashtra </p>
          <div className='social-icon flex items-center gap-3 bg-transparent'>
            {socialmedia.map((social, index) => (
              <Link
                key={index}
                href={social.url}>
                <Image
                  src={social.img}
                  width={40}
                  height={40}
                  alt={`${social.img.toString()}-icon`}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className='menu mx-auto text-white'>
          <Nav2 />
        </div>
        <div className='location flex justify-center items-center mx-auto'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.304466747485!2d74.23762817510816!3d16.661640823306634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ffc36c09045f%3A0x8527746f1944de5d!2sYAMA%20Constructions!5e0!3m2!1sen!2sin!4v1706961442539!5m2!1sen!2sin"
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Footer