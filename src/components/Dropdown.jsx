'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import Link from "next/link";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="desktop-size md:flex hidden">
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger
                        id="dropmenu"
                        className="text-xl uppercase"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        Services
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        className='flex flex-col bg-transparent mt-[-10px] pt-6 items-center border-none'>
                        <Link href={`/services/constructions`}>
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Constructions
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/services/consultancy">
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Consultancy
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/services/trunkey">
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Trunkey solutions
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/services/project">
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Project Management
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
            <div className="mobile-size md:hidden flex flex-col">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-xl uppercase">Services</DropdownMenuTrigger>
                    <DropdownMenuContent className='flex flex-col bg-transparent mt-20 pt-6 items-center border-none'>
                        {/* <DropdownMenuSeparator /> */}
                        <Link href='/constructions'><DropdownMenuItem className='text-xl text-orange-500'>Constructions</DropdownMenuItem></Link>
                        <Link href="/consultancy">
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Consultancy
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/trunkey">
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Trunkey solutions
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/project">
                            <DropdownMenuItem className='text-xl text-orange-500'>
                                Project Management
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </>
    )
}

export default Dropdown