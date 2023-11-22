"use client"
import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { BookCheckIcon } from 'lucide-react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import { Search } from 'lucide-react'
import { Grid2X2 } from 'lucide-react'
import Link from 'next/link'
import { AccountForm } from './FormTemplate'

const data = [
  { label: "Project 1", value: "proj1" },
  { label: "Project 2", value: "proj2" },
  { label: "Project 3", value: "proj3" },
  { label: "Project 4", value: "proj4" },
  { label: "Project 5", value: "proj5" },
  { label: "Project 6", value: "proj6" },
  { label: "Project 7", value: "proj7" },
  { label: "Project 8", value: "proj8" },
  { label: "Project 9", value: "proj9" },
]

const navData = [
  {
    id: 1,
    name: 'test',
    href: '/tests',
    icon: <BookCheckIcon />
  },
  {
    id: 2,
    name: 'support',
    href: '/support',
    icon: <Grid2X2 />
  },


]

function Sidenav() {

  const [open, setOpen] = useState(true)
  const currentPath = usePathname()
  return (
    <div className='flex'>
      <div className={` border   h-screen duration-300 w-20 md:w-72  p-5 pt-8 relative space-y-4 bg-slate-100`}>

        <div className={` scale-0 md:scale-100  `}>

          <AccountForm languages={data} name={"Select Project"} />
        </div>

        <ul className='flex flex-col gap-2 '>
          {navData.map(link =>
            <Link href={link.href} key={link.id} className={classNames({
              ' text-blue-500 bg-slate-200 rounded-md': link.href === currentPath,
              'transition-all duration-300 ': link.href !== currentPath, 'hover:text-blue-500 hover:bg-slate-200  transition-colors': true
            })} ><div className='flex items-center p-2 font-semibold gap-2 '><div className=''>{link.icon}</div><div className='scale-0 md:scale-100 duration-300 transition'>{link.name}</div></div> </Link>)}

        </ul>
      </div>
    </div >
  )
}

export default Sidenav
