import Navbar from "@/components/Navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import {redirect} from "next/navigation"
import { useEffect, useState } from "react";

export default async function DashboardLayout({
    children,
    params
}:{
    children : React.ReactNode;
    params:{storeId : string}
}){
    const {userId} = auth();
    if(!userId){
        redirect("/sign-in");
    }
    // const [storeName, setStoreName] = useState<string>("")
    const store = await prismadb.store.findFirst({
        where:{
            id : params.storeId,
            adminId:userId
        }
    });

    if(!store){
        redirect("/")
    }
    return(
        <>
            <Navbar name={store.name}/>
            {children}
        </>
    )
}