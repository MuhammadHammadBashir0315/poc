import axios from "axios";
import { getUserInfo } from "@/utils/features";
import Profiledatalist from "./profiledatalist";





const Page = async () => {
  

  return (
    <div className="w-full p-8">
      
      <Profiledatalist />
    </div>
  )
}

export default Page