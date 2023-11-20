"use client"

import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
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
import { AccountForm } from './FormTemplate'
import { useState, useEffect } from 'react'
import Home from '../api/page'
//import Data from './orgsDataList'



const ORG = [
    { label: "ORG 1", value: "org1" },
    { label: "ORG 2", value: "org2" },
    { label: "ORG 3", value: "org3" },
    { label: "ORG 4", value: "org4" },
    { label: "ORG 5", value: "org5" },
    { label: "ORG 6", value: "org6" },
    { label: "ORG 7", value: "org7" },
    { label: "ORG 8", value: "org8" },
    { label: "ORG 9", value: "org9" },
]



async function Topnav(props : any) {

    const [info, setInfo] = useState(null)
    const [dataFromFirstApi, setDataFromFirstApi] = useState(null);
    const [dataFromSecondApi, setDataFromSecondApi] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const p = props.t


   
    
    return (
        <div className="">
            <NavigationMenu>
                <NavigationMenuList>                   
                    <NavigationMenuItem>                       
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        
                        <AccountForm languages={ORG} name={"Select ORG"} />
                        {/* <Data /> */}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Topnav
