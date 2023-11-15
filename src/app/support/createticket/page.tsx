import React from 'react'
import SupportForm from '@/app/components/SupportForm'

function page() {
  return (
    <div className=' flex flex-col justify-center items-center  w-full gap-8  '>
     
      <div className='flex flex-col  w-fit bg-white rounded-lg items-center'>
      <div className='font-bold'>New Ticket</div>
        <SupportForm />
        </div>
      
    </div>
  )
}

export default page
