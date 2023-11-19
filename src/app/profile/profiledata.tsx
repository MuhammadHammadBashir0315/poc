import axios from "axios";

async function getData(){
    let r = await axios.get('http://localhost:3000/api/getUserInfo');
  const userInfo = r.data;

    return userInfo
}
export default async function UserData() {
    const userdata = await getData()
    return(
        <>
        <div>UserInfo: {userdata.userID}</div>
        {/* <div>{tickets.map((ticket:any)=>(<div key={ticket.userID}>{ticket.firstName}</div>))}</div> */}
        </>
    )
}