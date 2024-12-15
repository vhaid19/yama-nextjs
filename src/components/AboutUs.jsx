import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Quality, Costomersatisfaction } from '@/../public/index'
import Image from 'next/image'

function AboutUs() {
    const images = [
        {
            "img": Quality,
            'title': 'Quality Assurance',
            'info': 'At Yama Constructions, quality assurance is at the heart of everything we do. We pride ourselves on a rigorous quality control process that involves both freshers and experienced engineers. Our freshers bring innovative ideas and a fresh perspective, while our seasoned professionals ensure that every project meets the highest standards of excellence. By blending youthful creativity with expert oversight, we deliver turnkey solutions that stand the test of time. Trust Yama Constructions for unparalleled quality and reliability in every build.'
        },
        {
            'img': Costomersatisfaction,
            'title': 'Customer Satisfaction',
            'info': 'At Yama Constructions, client satisfaction is our top priority. We are dedicated to delivering exceptional civil construction services, tailored to meet the unique needs of each client. Our team of experts ensures clear communication, meticulous attention to detail, and adherence to timelines, guaranteeing a smooth and efficient project experience. With our turnkey solutions, we handle every aspect from start to finish, providing peace of mind and superior results. Our commitment to quality and excellence drives us to exceed expectations, building trust and lasting relationships. At Yama Constructions, your satisfaction is the foundation of our success.'
        }
    ]
    return (
        <div className='w-[90%] h-auto p-3 mx-auto border-2 rounded-2xl my-3'>
            <div className='flex justify-around flex-wrap'>
                <h1 className='text-3xl text-orange-600'>About Us</h1>
                <div className="buttons md:gap-6 flex md:flex-row flex-col gap-3">
                    <Link href='/compoverview'><Button className='border-2 border-orange-600 text-xl bg-transparent'>Company Overview</Button></Link>
                    <Link href='/compoverview'><Button className='border-2 border-orange-600 text-xl bg-transparent'>Our History</Button></Link>
                    <Link href='/compoverview'><Button className='border-2 border-orange-600 text-xl bg-transparent'>Company team</Button></Link>
                </div>

                <div className='company goal flex gap-8 my-5 md:flex-row flex-col md:gap-48'>
                    <div className='misson md:w-96 w-80 text-pretty'>
                        <h1 className='text-xl text-orange-600'>Misson</h1>
                        <div className='info'>To make YAMA Constructions Pvt. Ltd. the foremost Civil Construction and Structural Engineering Company in India.</div>
                    </div>
                    <div className='vison md:w-96 w-80 text-pretty'>
                        <h1 className='text-xl text-orange-600'>Vison</h1>
                        <div className="info"> To make YAMA Constructions Pvt. Ltd. the foremost Civil Construction and Structural Engineering Company in India.</div>
                    </div>
                </div>
                <hr className='h-1 w-[80%] mb-8' />
            </div>
            <div className="comoverview md:w-[80%] w-[90%] m-auto">
                <h1 className='text-5xl'>Company Overview</h1>
                <div className="shortinfo md:text-2xl text-lg">
                    <div className='info1 mb-5'>YAMA Constructions is registered proprietary firm established in 1993 at Kolhapur owned by Mr. Jiya S. Momin (Chartered Engineer). </div>
                    <div className="info2 mb-5">The profound knowledge and rich experience of the CEO has assisted the company to acquire distinguished position amidst the dependable providers of Consulting Services in India. Apart from being renowned as one of the well-reputed Architectural Consultants, we also specialize in providing Engineering Project Management Services.</div>
                    <div className="info3 mb-5">We have a huge and established business network that is spread all round India. The network has helped us in acquiring loads of appreciation in the market. Additionally, network has also made us able in providing appropriate solutions for respective requirements</div>
                </div>
            </div>
            <div className="image-info">
                {
                    images.map((content, index) => {
                        return (
                            <div key={index} className='flex flex-wrap md:w-[80%] w-[90%] mx-auto gap-8 my-8'>
                                <Image
                                    src={content.img}
                                    alt={content.title}
                                    width={600}
                                    height={500}
                                    className='rounded-xl'
                                />
                                <div className='flex flex-col gap-4'>
                                    <h1 className='md:text-4xl text-xl'>{content.title}</h1>
                                    <div className='md:w-[28rem] text-justify'>
                                        {content.info}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutUs