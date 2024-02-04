import { format } from "date-fns";
import React from 'react'
import { ProductClient } from './components/client'
import prismadb from '@/lib/prismadb'
import { PorductColumn } from './components/columns'
import { formatter } from "@/lib/utils";

const ProductPage = async ({
    params
}: { params: { storeId: string } }) => {

    const products = await prismadb.product.findMany({
        where: {
            storeId: params.storeId
        }
    })

    const formattedProducts: PorductColumn[] = [];

    return (
        <div>
            <div className="p-5">
                <ProductClient data={formattedProducts} />
            </div>
        </div>
    )
}

export default ProductPage
