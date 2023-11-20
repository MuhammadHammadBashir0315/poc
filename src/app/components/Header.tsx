"use client"

import React from 'react'
import Image from 'next/image'
import Topnav from './Topnav'
import avatar from '../../../public/assets/logo.svg'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useDispatch } from 'react-redux'
import { GripIcon } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function Header() {
    const isUserLoggedIn = true;
    const [info, setInfo] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    const dispatch = useDispatch();

    const handleClick = () => {
        setToggleDropdown((prev) => !prev)
    }

  

    return (
        <div className='flex items-center p-4 space-x-4 justify-between border-b-2'>
            <div className='flex  items-center gap-6 md:gap-12 lg:gap-28 '>
                <Link href={'/'}><div className='flex gap-1'>
                    {/* <Image src='/logo.png' alt='img' height={80} width={80} /> */}
                    <GripIcon />
                    <div className='font-bold text-xl whitespace-nowrap'>POC Software</div>
                </div>
                </Link>

                <div>
                    <Topnav />
                </div>
                
            </div>
            <div className='flex relative'>
                {isUserLoggedIn ?
                    (<div className=''><Popover>
                        <PopoverTrigger>
                            <div className='w-full'><Image src={avatar}
                                width={37}
                                height={37}
                                alt="profile"
                                className="rounded-full"
                                // onClick={handleClick}
                                 />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className='w-fit'>
                            <div className='w-fit'>
                                <Link href="/profile"
                                    className=" font-inter mt-2 text-gray-700 hover:text-blue-500 transition duration-150 font-medium w-full py-2 px-2"
                                    onClick={() => { setToggleDropdown(false) }}>My Profile</Link></div>
                            <button type="button"
                                onClick={() => {
                                    setToggleDropdown(false)
                                    //signOut()
                                }} className="mt-5 self-center  rounded-full  font-semibold border-white bg-blue-500 py-1.5 px-5 text-white transition-all hover:bg-blue-200 hover:text-black text-center font-inter flex items-center justify-center">
                                Sign Out
                            </button>
                        </PopoverContent>
                    </Popover>
                       
                    </div>) : ''}
            </div>

        </div>
    )
}

export default Header
