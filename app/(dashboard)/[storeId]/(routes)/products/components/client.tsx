"use client";

import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { PorductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";


interface ProductClientProps{
    data: PorductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({
    data
})=>{
    const router = useRouter();
    const params = useParams();

    return (
        <>
        <div className="flex items-center justify-between">
            <Heading
                title={`Products (${data.length})`}
                description="Manage Products for your store"
            />
            <Button onClick={()=>router.push(`/${params.storeId}/products/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading title="API" description="API calls for Products "/>
        <Separator />
        </>
    )
}