import React from 'react'
import { UserButton, auth } from '@clerk/nextjs'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { ModeToggle } from './theme-toggle'
import { redirect } from 'next/navigation'
import SheetSide from "./SheetSide"
import prismadb from '@/lib/prismadb'
interface navbarProps {
    name: string
}
const Navbar = async ({
    name
} : navbarProps) => {
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    const stores = await prismadb.store.findMany({
        where: {
            adminId: userId
        },
    });
    return (
        <div className='border-b'>
            <div className='flex h-16 items-center px-4'>
                <SheetSide name= {name}/>
                <div className='ml-auto flex gap-7 flex-row items-center space-x-4'>
                    <div className=''>
                        <ModeToggle />
                    </div>
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
