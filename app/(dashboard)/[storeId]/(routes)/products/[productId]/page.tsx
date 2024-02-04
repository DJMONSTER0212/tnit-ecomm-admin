import React from 'react'
import ImageUpload from "@/components/ui/image-upload";
import prismadb from '@/lib/prismadb'

const page = async ({
    params
}:{params :{storeId : string , productId : string}}) => {
    if(params.productId !== "new"){
        const product = await prismadb.product.findUnique({where :{
        id: params.productId ==="new"?"":params.productId ,
        storeId : params.storeId
    }})
    }

    return (
        <div>

        </div>
    )
}

export default page
