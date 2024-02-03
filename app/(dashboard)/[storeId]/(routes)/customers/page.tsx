import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'
import { CustomerClient } from './components/client';
import { CustomerColumn } from './components/colums';
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';



const page = async ({ params }: {
  params: { storeId: string }
}) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const customers = await prismadb.customer.findMany({
    where: {
      storeId: params.storeId,
    }
  })

  const formattedCustomers: CustomerColumn[] = customers.map((customer) => ({
    id: customer.id,
    contact: customer.contact,
    firstName: customer.firstName,
    email: customer.email,
    createdAt: format(customer.createdAt, "MMMM do, yyyy")
  }))

  return (
    <div>
      <div className='flex mt-4 flex-row justify-evenly '>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium ">
              New Customers <sub>/month</sub>
            </CardTitle>
            {/* <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatter.format(totalRevenue)} */}
              12
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium ">
              Verified Customers
            </CardTitle>
            {/* <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatter.format(totalRevenue)} */}
              12
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium ">
              Total Customers
            </CardTitle>
            {/* <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatter.format(totalRevenue)} */}
              12
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CustomerClient data={formattedCustomers} />
      </div>
    </div>
  )
}

export default page
