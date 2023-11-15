import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function Test() {
  return (
    <div className='w-full'>
        <div className='flex w-full justify-between mt-4'>
            <div className='font-bold'>Name</div>
            <div className='font-bold'>Status</div>
        </div>
       <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className=''>
        <AccordionTrigger>
            <div className='flex justify-between w-full'>
            <div>Test 1</div>
            <div>Pass</div>
            </div>
            </AccordionTrigger>
        <AccordionContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, iusto? Consequuntur non ipsa praesentium deleniti ut, sunt vel ipsum facilis dignissimos corporis dicta esse placeat similique dolores atque repudiandae ipsam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> 
            <div className='flex justify-between w-full'>
            <div>Test 2</div>
            <div>Pass</div>
            </div>
            </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia accusantium fuga accusamus fugit, distinctio esse, ipsa eum soluta in velit aspernatur incidunt repellat, animi ullam libero assumenda recusandae aut. Voluptate?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
        <div className='flex justify-between w-full'>
            <div>Test 3</div>
            <div>Fail</div>
            </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, laboriosam illum provident laudantium saepe facilis, nisi officia dolores sapiente vero dolorum iusto nulla odit, illo molestias cupiditate alias dolore.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Test
 