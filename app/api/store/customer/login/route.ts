import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt")
export async function POST(
    req : Request
){
    try {
        const body = await req.json();
        const {email, password} = body;
        if(!email){
            return new NextResponse("email is Required",{status:400});
        }
        else if(!password){
            return new NextResponse("Pasword is Required",{status:400});
        }

        const customer = await prismadb.customer.findUnique({
            where :{
                email
            }
        })
        if(!customer){
            return new NextResponse('User Not Found',{status:401})
        }

        const result = await bcrypt.compare(password,customer?.password);

        if(result){
            return new NextResponse("Logged In successfully",{status:200});
        }
        else return new NextResponse("Invalid Password",{status:400});


    } catch (error) {
        return new NextResponse("CUSTOMER LOGIN ERROR",{status:500});
    }
}