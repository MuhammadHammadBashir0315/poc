import TicketList from "./tickelist";
import userInfo from "../api/page";

import React from 'react'

function page() {
  
  console.log(userInfo)
  return (
    <div>
      <TicketList />
    </div>
  )
}

export default page
