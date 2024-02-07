import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { name, description, gstin, pan, addressLine1, addressLine2, contactno, city, state, pincode } = body;
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!name) {
            return new NextResponse("Name is Required", { status: 400 });
        }
        const store = await prismadb.store.create({
            data: {
                name,
                description,
                adminId: userId
            }
        });
        console.log(store)
        const settings = await prismadb.settings.create({
            data: {
                gstin,
                pan,
                storeId: store.id
            }
        })
        const address = await prismadb.address.create({
            data: {
                addressLine1,
                addressLine2,
                city,
                state,
                pincode,
                contactno,
                settingId : settings.id
            }
        })
        return NextResponse.json(store);

    } catch (error) {
        console.log('[STORES_POST]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}