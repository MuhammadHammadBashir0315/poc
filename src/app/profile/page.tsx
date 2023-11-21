import axios from "axios";
import { getUserInfo } from "@/utils/features";





const Page = async () => {
  const user = await getUserInfo()
  console.log(user)

  return (
    <div className="">
      <div>User Profile</div>
      <div> ID : {user.data.userID}</div>
      <div> First Name : {user.data.firstName}</div>
      <div>Last Name : {user.data.lastName}</div>
      <div>Email : {user.data.email}</div>
      <div>Current Project : {user.data.currentProject}</div>
      <div>Current Organization : {user.data.currentProject}</div>     
    </div>
  )
}

export default Page