import React from 'react'
import { Overview } from '@/components/overview'
import { Heading } from "@/components/ui/Heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatter } from "@/lib/utils"
import { CreditCardIcon, IndianRupeeIcon, Package } from "lucide-react"
import { getGraphRevenue } from '@/actions/get-graph-revenue'


interface DashboardPageProps {
    params: { storeId: string }
}


const DashBoardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {

    const graphRevenue = await getGraphRevenue(params.storeId);
    return (
        <div className='flex h-[100vh] w-full flex-col'>
            <div className='flex-1  space-y-4 p-8 pt-6'>
                <Heading title="Dashboard" description="Overview of your store." />
                <Separator />
                <div className="grid grid-cols-3 ">
                    <div className='grid gap-y-3'>
                        <Card className='w-3/4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium ">
                                    Total Revenue
                                </CardTitle>
                                <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {/* {formatter.format(totalRevenue)} */}
                                    {12324}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='w-3/4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium ">
                                    Sales
                                </CardTitle>
                                <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    +{12}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='w-3/4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium ">
                                    Products In Stock
                                </CardTitle>
                                <Package className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {41}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='w-[100vh] h-full'>
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview data={graphRevenue} />
                            </CardContent>
                        </Card>
                    </div>

                </div>
                <div className='flex flex-row gap-4'>
                    <Card className='w-3/4'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium ">
                                Total Revenue
                            </CardTitle>
                            <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {/* {formatter.format(totalRevenue)} */}
                                {12324}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='w-3/4'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium ">
                                Total Revenue
                            </CardTitle>
                            <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {/* {formatter.format(totalRevenue)} */}
                                {12324}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='w-3/4'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium ">
                                Total Revenue
                            </CardTitle>
                            <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {/* {formatter.format(totalRevenue)} */}
                                {12324}
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default DashBoardPage
