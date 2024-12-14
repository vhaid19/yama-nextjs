import React from 'react'
import Dropdown from '../Dropdown'
import Link from 'next/link'

function nav2() {
    return (
        <>
            <div className=' text-white flex flex-col w-full items-center mr-20 '>
                <Link
                    href='/'
                >
                    <div className='home m-2 uppercase text-xl'>Home</div>
                </Link>
                <Link
                    href='/about'
                >
                    <div className='home m-2 uppercase text-xl'>About</div>
                </Link>
                <Link
                    href='/services'
                >
                    <div className='home m-2 uppercase text-xl'><Dropdown className='mt-[500px]'/></div>
                </Link>
                <Link
                    href='/projects'
                >
                    <div className='home m-2 uppercase text-xl'>Projects</div>
                </Link>
                <Link
                    href='/contact'
                >
                    <div className='home m-2 uppercase text-xl'>Contact</div>
                </Link>

            </div>
        </>
    )
}

export default nav2