import Data from "@/app/tests/testslist"
import axios from "axios"

export const getUserInfo = async () => {
    const res = await fetch('http://localhost:3000/api/getUserInfo')
    if (!res.ok) return new Error("something went wrong")

    return await res.json()

}



export const getProjectTests = async () =>{
    let userdata = await axios.get('http://localhost:3000/api/getUserInfo');
    const userInfo = userdata.data;
    let testData = await axios.post('http://localhost:3000/api/getTests', {ProjectID: userInfo.data.projects[0]})
    const projectTests = testData.data;

    

    return projectTests
}

export const getOrgs = async () =>{
  let userdata = await axios.get('http://localhost:3000/api/getUserInfo');
  const userInfo = userdata.data;
  let orgs = await axios.post('http://localhost:3000/api/getOrg', {OrgIDs: userInfo.data.orgs})
  const userOrgs = orgs.data.data;
  console.log(userOrgs)
  

  return userOrgs
}



