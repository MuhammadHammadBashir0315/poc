import axios from "axios";
import Test from "../components/Test";
import Topnav from "./Topnav";

async function getData(){
    let userdata = await axios.get('http://localhost:3000/api/getUserInfo');
    const userInfo = userdata.data;
    let r = await axios.post('http://localhost:3000/api/getOrg', {OrgIDs: userInfo.data.orgs})
  const userOrgs = r.data;

    return userOrgs
}
export default async function Data() {
    const orgs = await getData()
    return(
        <>
        {/* <p>testsInfo: {JSON.stringify(tests)}</p> */}
        {/* <div>{tickets.map((ticket:any)=>(<div key={ticket.userID}>{ticket.firstName}</div>))}</div> */}
        <p>testsInfo: {JSON.stringify(orgs)}</p>
        <Topnav t={orgs} />
        </>
    )
}