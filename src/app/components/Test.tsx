'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Test(props: any) {
  const p = props.t.data
  // console.log(p.Tests[0].ID)
  return (
    <div className='w-full'>
      <div className='flex w-full justify-between border p-4 hover:bg-gray-50'>
        <div className=' text-[#64748B] font-medium'>Name</div>
        <div className='text-[#64748B] font-medium'>Status</div>

      </div>

      {p.Tests.map((test: any) => (
        <Accordion key={test.ID} type="single" collapsible className="w-full ">
          <AccordionItem value="item-1" className=' border-x px-4 hover:bg-gray-50'>
            <AccordionTrigger className=''>
              <div className='flex justify-between w-full'>
                <div className=''>{test.Name}</div>
                <div>{test.Status}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {test.Extra}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}


    </div>
  )
}

export default Test
