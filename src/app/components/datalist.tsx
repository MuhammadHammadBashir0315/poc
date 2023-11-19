// async function getData(){
//     const res = await fetch('http://localhost:3001/api/getUserInfo')

//     return res.json()
// }
// export default async function TicketList() {
//     const tickets = await getData()
//     return(
//         <div>{tickets.map((ticket:any)=>(
//             <div key={ticket.id}>{ticket.userID}</div>
//         ))}</div>
//     )
// }

import Image from 'next/image'
import axios from 'axios';

// import { userInfoResp, getProjectResponse, getProjectInput, getOrgInput } from '@/types/types'

export default async function DataList() {

  let r = await axios.get('http://localhost:3000/api/getUserInfo');
  const userInfo = r.data;

  r = await axios.post('http://localhost:3000/api/getOrg', {OrgIDs: userInfo.data.orgs})
  const userOrgs = r.data;

  r = await axios.post('http://localhost:3000/api/getProject', {ProjectIDs: userInfo.data.projects})
  const userProjects = r.data;

  r = await axios.post('http://localhost:3000/api/getTests', {ProjectID: userInfo.data.projects[0]})
  const projectTests = r.data;

  return(
    <main>
      {/* <p>UserInfo: {JSON.stringify(userInfo, null, 2)}</p>
      <p>Orgs: {JSON.stringify(userOrgs, null, 2)}</p>
      <p>Projects: {JSON.stringify(userProjects, null, 2)}</p>
      <p>tests: {JSON.stringify(projectTests, null, 2)}</p> */}
      
    </main>
    )
  
}
