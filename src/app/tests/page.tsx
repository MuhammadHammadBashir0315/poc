import React from 'react'
import Test from '../components/Test'

function page() {
  return (
    <div className='w-full p-2'>
        <div className='font-bold'>Test Heading</div>
      <div className='mx-auto flex justify-center w-full'><Test  /></div>
    </div>
  )
}

export default page
