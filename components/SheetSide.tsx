"use client"

import { Button } from "@/components/ui/button"
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import prismadb from "@/lib/prismadb"
import { HomeIcon, BarChartIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/router'
import { IndianRupee, ListOrdered, Settings, Settings2, ShoppingBag, User } from "lucide-react";
const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]
interface sheetprops {
    name: string
}

const SheetSide = ({ name }: sheetprops) => {
    const pathName = usePathname();
    const params = useParams();
    return (
        <div className="grid grid-cols-2 gap-2">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <Button variant="outline">Menu</Button>
                    </SheetTrigger>
                    <SheetContent className="w-1/5" side={side}>
                        <SheetHeader>
                            <SheetTitle>Navigation Controls</SheetTitle>
                            <SheetDescription>
                                Explore
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div>
                                <SheetTrigger asChild>
                                    <Link replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                                </SheetTrigger>
                                <Separator />
                            </div>
                            <div>
                                <SheetTrigger asChild>
                                    <Link replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={`/${params.storeId}/orders`}> <ListOrdered fontSize={100} /><span>Orders</span></Link>
                                </SheetTrigger>
                                <Separator />
                            </div>
                            <div>
                                <SheetTrigger asChild>
                                    <Link replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={`/${params.storeId}/products`} > <ShoppingBag fontSize={100} /><span>Products</span></Link>
                                </SheetTrigger>
                                <Separator />
                            </div>
                            <div>
                                <SheetTrigger asChild>
                                    <Link replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={`/${params.storeId}/customers`}> <User fontSize={100} /><span>Customers</span></Link>
                                </SheetTrigger>
                                <Separator />
                            </div>
                            <div>
                                <SheetTrigger asChild>
                                    <Link replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={`/{params.storeId}/payments`}> <IndianRupee fontSize={100} /><span>Payments</span></Link>
                                </SheetTrigger>
                                <Separator />
                            </div>
                            <div>
                                <SheetTrigger asChild>
                                    <Link replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={`/${params.storeId}/settings`}> <Settings2 fontSize={50} /><span>Settings</span></Link>
                                </SheetTrigger>
                                <Separator />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                {/* <Button type="submit">Save changes</Button> */}
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}

export default SheetSide