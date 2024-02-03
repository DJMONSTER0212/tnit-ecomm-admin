import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt")

export async function POST(
    req : Request
){
    try {
        const body = await req.json();
        console.log(body);
        const {firstName , lastName, storeId, contact,email,password} = body;
        console.log(firstName)
        if(!firstName){
            return new NextResponse("Name is Required",{status:400});
        }
        else if(!lastName){
            return new NextResponse("LastName is Required",{status:400});
        }else if(!contact){
            return new NextResponse("contact is Required",{status:400});
        }else if(!email){
            return new NextResponse("Email is Required",{status:400});
        }
        else if(!password){
            return new NextResponse("Password is Required",{status:400});
        }else if(!storeId){
            return new NextResponse("StoreId is required",{status:400});
        }

        const user = await prismadb.customer.findUnique({where:{
            email : email
        }})

        if(user){
            return new NextResponse("User with the specified email already exist",{status:400});
        }
        let hashedPwd = await bcrypt.hash(password,10)
        const customer = await prismadb.customer.create({
            data:{
                firstName,
                lastName,
                contact,
                password : hashedPwd,
                email,
                storeId
            }
        })

        return NextResponse.json(customer);

    } catch (error) {

    }
}