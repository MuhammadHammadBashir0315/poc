"use client"
import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { BookCheckIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react'
import {Grid2X2} from 'lucide-react'
import Link from 'next/link'


function Sidenav() {

  const [open, setOpen] = useState(true)
  return (
    <div className='flex'>
      <div className={` border bg-white h-screen w-20 md:w-72  p-5 pt-8 relative space-y-4`}>
        {/* <ChevronLeft className={`bg-white  text-blue-700 text-3xl rounded-full absolute -right-3 top-9 border ${!open && "rotate-180"}`} onClick={() => { setOpen(!open) }} /> */}
        <div className={` scale-0 md:scale-100  `}>
          <Select>
            <SelectTrigger className="  md:w-[180px]">
              <SelectValue placeholder="Select Your ORG" />
            </SelectTrigger>
            <SelectContent className="">
              {/* <div className='flex items-center bg-slate-100 my-2 rounded-lg static'>
                <Search className='text-gray-700' />
                <input type='text' placeholder='Search ' className='border-none p-2  rounded-lg bg-slate-100' />
              </div> */}

              <SelectGroup className="">
                {/* <SelectLabel>Projects</SelectLabel> */}

                <SelectItem value="apple">ORG A</SelectItem>
                <SelectItem value="banana">ORG B</SelectItem>
                <SelectItem value="blueberry">ORG C</SelectItem>
                <SelectItem value="grapes">ORG D</SelectItem>
                <SelectItem value="pineapple">ORG E</SelectItem>

              </SelectGroup>

            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col'>
          <Link href={'/tests'} className={`inline-flex cursor-pointer items-center hover:bg-slate-200 hover:text-blue-500 duration-300 w-0 md:w-full`}>
            <div><BookCheckIcon className=' text-4xl rounded cursor-pointer block float-left mr-2' /></div>
            <h1 className={`text-black origin-left font-medium  duration-300 cursor-pointer text-sm p-2 hover:bg-slate-200 hover:text-blue-500 w-full scale-0 md:scale-100`}>Test1</h1>
          </Link>
          <Link href={'/support'} className={`inline-flex cursor-pointer items-center hover:bg-slate-200 hover:text-blue-500 duration-300 w-0 md:w-full`}>
            <div><Grid2X2 className=' text-4xl rounded cursor-pointer block float-left mr-2' /></div>
            <h1 className={`text-black origin-left font-medium  duration-300 cursor-pointer text-sm p-2 hover:bg-slate-200 hover:text-blue-500 w-full scale-0 md:scale-100`}>Support</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
