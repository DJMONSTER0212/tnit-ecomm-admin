import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        const store  = await prismadb.store.findUnique({
            where:{
                id :"65c3ce1173fa6b1cfe31b52c"
            },
            include:{
                setting : true,
            },
        })
        console.log(store)
        return NextResponse.json(store);
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
}