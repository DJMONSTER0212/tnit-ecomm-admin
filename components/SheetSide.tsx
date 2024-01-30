"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import {Separator} from "@/components/ui/separator"
import prismadb from "@/lib/prismadb"
import { HomeIcon , BarChartIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/router'
const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]
interface sheetprops{
    name : string
}

const  SheetSide= ({name}: sheetprops)=> {
    // const id = {}
    // const router = useRouter();
    // const {storeId} = router;
    // console.log(storeId);
    const getName = async ()=>{
        try {
            // const store = await prismadb.store.findUnique({where:{
            //     // id : router.query.storeId
            // }})

        } catch (error) {
            console.log(error);
            return;
        }
    }
    return (
        <div className="grid grid-cols-2 gap-2">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <Button variant="outline">Menu</Button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>{name} <img src={"testUrl"} alt="companyLogo"/></SheetTitle>
                            <SheetDescription>
                                Explore
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div>
                            <Link  replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                            <Separator/>
                            </div>
                            <div>
                            <Link  replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                            <Separator/>
                            </div>
                            <div>
                            <Link  replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                            <Separator/>
                            </div>
                            <div>
                            <Link  replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                            <Separator/>
                            </div>
                            <div>
                            <Link  replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                            <Separator/>
                            </div>
                            <div>
                            <Link  replace={true} className="flex px-4 text-xl text-center mb-1 flex-row items-center gap-2" href={'/'}> <BarChartIcon fontSize={100} /><span>DashBoard</span></Link>
                            <Separator/>
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