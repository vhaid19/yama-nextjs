import React from 'react'
import Image from 'next/image'
import {
    Linkedin,
    Whatsapp,
    Instagram,
    Facebook,
    Mail,
    Twitter
} from '@/../public/index'
import Link from 'next/link'
import { FcClock, FcPhone } from "react-icons/fc";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Nav2 from './ui/nav2';
import { Button } from './ui/button';
import Dropdown from './Dropdown';


function Navbar() {
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

    const officeinfo = [
        {
            icon: Mail,
            title: 'Mail',
            url: 'mailto:jiya_ji@yahoo.com'
        },
        {
            icon: FcPhone,
            title: 'Contact',
            url: 'tel:+919822069723'
        },
        {
            icon: FcClock,
            title: 'Office-Time',
            url: '09:30 AM - 6:30 PM'
        },
    ]

    return (
        <div>
            <nav className='nav1-soical w-full h-16 bg-black border-white border-b-[1px] rounded-b-2xl md:flex hidden justify-around'>
                <div className='office-time h-full items-center flex gap-6 justify-center'>
                    {
                        officeinfo.map((info, index) => (
                            <div key={index} className='flex flex-wrap w-44 items-center justify-start'>
                                {info.icon === Mail ? (
                                    <Image src={info.icon} alt={info.title} width={20} height={20} />
                                ) : (
                                    <info.icon />
                                )}
                                <span className="text-white ml-1">{info.title}</span>
                                {info.icon !== FcClock ? (
                                    <a href={info.url} className="text-white ml-1">
                                        {info.url}
                                    </a>
                                ) : (
                                    <div className="text-white ml-1">{info.url}</div>
                                )}
                            </div>
                        ))
                    }
                </div>
                <div className='social-icon flex items-center h-full gap-3'>
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
            </nav>
            <nav className='nav2-menu w-full h-16 bg-black border-white border-b-[1px] rounded-b-2xl flex justify-end'>
                <div className='menu md:flex hidden items-center mr-20 '>
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
                        <div className='home m-2 uppercase text-xl'><Dropdown /></div>
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
                <div className='menu-icon md:hidden flex mr-14'>
                    <Sheet className=''>
                        <SheetTrigger asChild className='my-auto'>
                            <Button variant="none">Menu</Button>
                        </SheetTrigger>
                        <SheetContent className='text-white bg-black'>
                            <SheetHeader className='text-white'>
                                <SheetTitle className='text-white'>Navigation Menu</SheetTitle>
                                <SheetDescription className='text-white'>
                                    Navigate through our website.
                                </SheetDescription>
                            </SheetHeader>
                            <Nav2 />
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    )
}

export default Navbar