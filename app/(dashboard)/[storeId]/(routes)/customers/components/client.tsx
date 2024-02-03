"use client";

import { Heading } from "@/components/ui/Heading";
import { CustomerColumn, columns } from "./colums";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface CustomerClientProps{
    data : CustomerColumn[]
}

export const CustomerClient : React.FC<CustomerClientProps> = ({
    data
})=>{
    return(
        <>
            {/* <Heading title={`Customer (${data.length})`} description="View all the customers"/> */}

            <Separator />
            <DataTable searchKey="email" columns={columns} data={data}/>
        </>
    )
}