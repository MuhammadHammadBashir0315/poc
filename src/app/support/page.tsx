
import React from 'react'
import Table from '../components/TableTemplate'
import Link from 'next/link'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AccountForm } from '../components/FormTemplate'

const data = [
  { label: "Support", value: "support" },
  { label: "Bug Report ", value: "bug_report" },
  { label: "Failure Request", value: "failure_request" },

]

function page() {
  return (
    <div className='container mx-16 my-4 flex flex-col p-2 w-full gap-4'>
      <div className='flex justify-between'>
        <div className='font-bold text-lg'>Support</div>
        <Dialog>
          <DialogTrigger asChild className=''>
            <div className='bg-blue-500 text-white p-2 rounded-lg cursor-pointer '>New Ticket</div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>New Ticket</DialogTitle>
              <DialogDescription>
                {/* Make changes to your profile here. Click save when you're done. */}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Type
                </Label>
                {/* <Select >
                            <SelectTrigger className="w-[180px] focus:ring-0 focus:outline-none focus:ring-offset-0 ">
                                <SelectValue placeholder="Type" className=''/>
                            </SelectTrigger>
                            <SelectContent className="">
                            <div className='flex items-center bg-slate-100 my-2 rounded-lg static'>
                                    <Search className='text-gray-700' />
                                    <input type='text' placeholder='Search ' className='border-none p-2  rounded-lg bg-slate-100' />
                                    </div>
                                    
                                <SelectGroup className="">
                                    <SelectLabel>Projects</SelectLabel>
                                    
                                    <SelectItem value="org a">Support</SelectItem>
                                    <SelectItem value="org b">Bug Request</SelectItem>
                                    <SelectItem value="org c">Failure Request</SelectItem>
                                    <SelectItem value="org d"></SelectItem>
                                    <SelectItem value="org e">ORG E</SelectItem>
                                    
                                </SelectGroup>
                                
                            </SelectContent>
                        </Select> */}
                <AccountForm languages={data} name={"Select Type"} />
              </div>
              {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div> */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Subject
                </Label>
                <Input
                  id="name"
                  placeholder="subject"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Message
                </Label>
                <textarea

                  id="name"
                  placeholder="Write messaage"
                  className="col-span-3 border"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className='bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-500' >Save changes</Button>
              </DialogClose>
            </DialogFooter>

          </DialogContent>
        </Dialog>
      </div>

      <div className=''>
        <Table />
      </div>
    </div>
  )
}

export default page
