"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Search} from 'lucide-react'




function Topnav() {
    return (
        <div className="">

            <NavigationMenu>
                <NavigationMenuList>
                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem>
                        {/* <Link href="#" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Female
                            </NavigationMenuLink>
                        </Link> */}
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Project" />
                            </SelectTrigger>
                            <SelectContent className="">
                            {/* <div className='flex items-center bg-slate-100 my-2 rounded-lg static'>
                                    <Search className='text-gray-700' />
                                    <input type='text' placeholder='Search ' className='border-none p-2  rounded-lg bg-slate-100' />
                                    </div> */}
                                    
                                <SelectGroup className="">
                                    {/* <SelectLabel>Projects</SelectLabel> */}
                                    
                                    <SelectItem value="apple">Project A</SelectItem>
                                    <SelectItem value="banana">Project B</SelectItem>
                                    <SelectItem value="blueberry">Project C</SelectItem>
                                    <SelectItem value="grapes">Project D</SelectItem>
                                    <SelectItem value="pineapple">Project E</SelectItem>
                                    
                                </SelectGroup>
                                
                            </SelectContent>
                        </Select>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

export default Topnav
