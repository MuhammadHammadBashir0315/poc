import axios from "axios";
import Test from "../components/Test";

async function getData(){
    let userdata = await axios.get('http://localhost:3000/api/getUserInfo');
    const userInfo = userdata.data;
    let testData = await axios.post('http://localhost:3000/api/getTests', {ProjectID: userInfo.data.projects[0]})
    const projectTests = testData.data;

    return projectTests
}
export default async function Data() {
    const tests = await getData()
    return(
        <>
        {/* <p>testsInfo: {JSON.stringify(tests)}</p> */}
        {/* <div>{tickets.map((ticket:any)=>(<div key={ticket.userID}>{ticket.firstName}</div>))}</div> */}
        <Test t={tests} />
        </>
    )
}