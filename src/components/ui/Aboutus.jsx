import React from 'react'
import Link from 'next/link'
import { Button } from './button'

function Aboutus() {
    return (
        <div>
            <div className='flex justify-around flex-wrap my-6'>
                <h1 className='text-3xl text-orange-600'>About Us</h1>
                <div className="buttons md:gap-6 flex md:flex-row flex-col gap-3">
                    <Link href='/about/compoverview'><Button className='border-2 border-orange-600 text-xl bg-transparent'>Company Overview</Button></Link>
                    <Link href='/about/ourhistory'><Button className='border-2 border-orange-600 text-xl bg-transparent'>Our History</Button></Link>
                    <Link href='/about/companyteam'><Button className='border-2 border-orange-600 text-xl bg-transparent'>Company team</Button></Link>
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
        </div>
    )
}

export default Aboutus