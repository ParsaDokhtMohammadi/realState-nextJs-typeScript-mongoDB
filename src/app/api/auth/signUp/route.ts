import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import { IUser } from "@/types/Interfaces";




export async function POST(req:NextRequest) {
    try {
        await connectDB()
        const body:Pick<IUser,"email"|"password"> = await req.json()
        const {email , password} = body
        if(!email || !password)
            return NextResponse.json({error :"اطلاعات معتبر نمیباشد",status:422})
        const existingUser:IUser|null = await User.findOne({email})
        if(existingUser)
             return NextResponse.json({error :"حساب کاربری با این ایمیل وجود دارد",status:422})
        const hashedPassword = await hashPassword(password)
        await User.create({
            email:email,
            password:hashedPassword
        })
        return NextResponse.json({message:"حساب کاربری ایجاد شد"})
    }
    catch (err){
        console.log(err)
        return NextResponse.json({error :"ارور سمت سرور",status:500})   
    }
}