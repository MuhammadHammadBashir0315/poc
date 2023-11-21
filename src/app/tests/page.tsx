import React from 'react'
import Test from '../components/Test'

import { getProjectTests } from '@/utils/features'

async function page() {
  const test = await getProjectTests()
  return (
    <div className='w-full my-4 mx-16 flex flex-col gap-4'>
        <div className='font-bold text-lg'>Test Heading</div>
      <div className='mx-auto flex justify-center w-full '>
     
      <Test t={test} />
      </div>
    </div>
  )
}

export default page
