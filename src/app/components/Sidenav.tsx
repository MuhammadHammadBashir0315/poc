"use client"
import React, { useEffect } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { BookCheckIcon } from 'lucide-react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import { Search } from 'lucide-react'
import { Grid2X2 } from 'lucide-react'
import Link from 'next/link'
import AccountForm from './ProjectsForm'
import { useSelector } from 'react-redux'
import { any } from 'zod'
import FormForCheck from './FormForCheck'



const newData: any = [
  { ID: 1, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 2, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 3, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 4, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 5, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 6, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 7, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 8, Name: "proj1", Desc: "description", Projects: [] },
  { ID: 9, Name: "proj1", Desc: "description", Projects: [] },
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
  const [prosData, setProsData] = useState<any[]>([]);
  const [allProsData, setAllProsData] = useState<any[]>([]);

  const currentPath = usePathname()

  const myArray = useSelector((state: any) => state.Projects);
  // console.log("Inside side navigation", myArray)
  // console.log('Updated Projects Array Inside side navigation:', myArray);
  console.log(myArray)
  useEffect(() => {
    // console.log("control added in use Effect ")
    const fetchData = async () => {
      // console.log("control added in fetch data ")
      const accumulatedData = [];
      if (myArray) {
        console.log("control added in IF statement")
        for (const id of myArray) {
          try {
            const response = await fetch('http://localhost:3000/api/getProject', {
              
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ProjectIDs: [id] }),
            });
          
            if (!response.ok) {
              const errorMessage = await response.text();
              throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            }
          
            const data = await response.json();
            console.log(`Data for ID ${id}:`, data);
            setProsData(data);
            accumulatedData.push(data);
          } catch (error) {
            console.error(`Error fetching data for ID ${id}:`, error);
          }
        }
        setAllProsData(accumulatedData);
      }
    };

    fetchData();
  }, [myArray]);

  console.log("Data iside navigation bar" , prosData)
  console.log("data in single array", allProsData)

  return (
    <div className='flex'>
      <div className={` border   h-screen duration-300 w-20 md:w-72  p-5 pt-8 relative space-y-4 bg-slate-100`}>

        <div className={` scale-0 md:scale-100  `}>

          {/* <AccountForm data={data} placeholder={"Select Project"} /> */}
          {/* <AccountForm data={myArray} placeholder={'Projects'} /> */}
          <FormForCheck data={allProsData} placeholder={'Projects'} />
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
