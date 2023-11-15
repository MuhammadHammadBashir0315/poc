
import React from 'react'
import Table from '../components/TableTemplate'
import Link from 'next/link'

function page() {
  return (
    <div className='flex flex-col p-2 w-full gap-4'>
        <div className='flex justify-between'>
        <div className='font-bold'>Support</div>
        <Link href={'/support/createticket'}><div className='bg-blue-500 text-white p-2 rounded-lg cursor-pointer'>New Ticket</div></Link>
        </div>
        <div className=''>
        <Table />
        </div>
    </div>
  )
}

export default page
