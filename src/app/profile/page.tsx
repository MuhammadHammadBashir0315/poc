import axios from "axios";
// import UserData from "./profiledata";


async function getData() {
  let r = await axios.get('http://localhost:3000/api/getUserInfo');
  const userInfo = r.data;

  return userInfo
}
export default async function Page() {
  const userdata = await getData()
  return (
    // <div className="flex flex-col gap-4 p-4">
    // <div>userID : {userdata.data.userID}</div>
    // <div>firstName: {userdata.data.firstName}</div>
    // <div>lastName: {userdata.data.lastName}</div>
    // <div>email: {userdata.data.email}</div>
    // <div>currentOrg: {userdata.data.currentOrg}</div>
    // <div>currentProject: {userdata.data.currentProject}</div>
    <div className='w-full my-4 mx-16 flex flex-col gap-4'>
      <div className='font-bold text-lg'>Profile</div>
      <div className='mx-auto flex flex-col justify-center w-full '>
        <div>userID : {userdata.data.userID}</div>
        <div>firstName: {userdata.data.firstName}</div>
        <div>lastName: {userdata.data.lastName}</div>
        <div>email: {userdata.data.email}</div>
        <div>currentOrg: {userdata.data.currentOrg}</div>
        <div>currentProject: {userdata.data.currentProject}</div>
        <div>I have made some changes</div>
        {/* <UserData /> */}
        {/* <Test  /> */}
      </div>
    </div>



  )
}