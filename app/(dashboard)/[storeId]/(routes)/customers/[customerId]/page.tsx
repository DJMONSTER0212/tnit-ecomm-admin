"use client";
import React from 'react'
import { useParams ,useRouter} from 'next/navigation';

const page = () => {
    const router = useRouter();
    const params = useParams();
    return (
        <div>
            {params.customerId}
        </div>
    )
}

export default page
