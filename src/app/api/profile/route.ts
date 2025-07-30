import { IProfile, IUser } from "@/types/Interfaces";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";
import Profile from "@/models/Profile";
import { Types } from "mongoose";
import { error } from "console";



export async function POST(req:NextRequest) {
    try{
        await connectDB()
        const body:IProfile = await req.json() 
        const {
            title , description , location , 
            phone , price ,realState , constructionDate
            ,ameneties , rules , category} = body
        const session = await getServerSession(authOptions)
        if(!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود شوید",status : 401})
        }
        const user:IUser|null = await User.findOne({email:session.user?.email})
        if(!user){
            return NextResponse.json({error:"کاربر یافت نشد",status:404})
        }
        if(
            !title||!description||!location||
            !phone||!price||!realState||
            !constructionDate||!category
        ) return NextResponse.json({error:"اطلاعات نامعتبر است",status:400})
        
        const newProfile:IProfile = await Profile.create({
           title,description,location,phone,price:+price,realState,constructionDate
           ,ameneties,rules,category,userId:new Types.ObjectId(user._id)
        })
        console.log(newProfile)
        return NextResponse.json({message:"آگهی ایجاد شد" , status:201})
        
     }
    catch(err){
        console.log(err);
        return NextResponse.json(
            {error:"مشکلی در سرور رخ داده است",status:500}
        )
    }
}
export async function PATCH(req:NextResponse) {
    try{
        await connectDB()
        const body:IProfile = await req.json() 
        const {
            _id,title , description , location , 
            phone , price ,realState , constructionDate
            ,ameneties , rules , category} = body
        const session = await getServerSession(authOptions)
        if(!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود شوید",status : 401})
        }
         const user:IUser|null = await User.findOne({email:session.user?.email})
        if(!user){
            return NextResponse.json({error:"کاربر یافت نشد",status:404})
        }
        if(
            !_id||!title||!description||!location||
            !phone||!price||!realState||
            !constructionDate||!category
        ) return NextResponse.json({error:"اطلاعات نامعتبر است",status:400})
        const profile:IProfile|null = await Profile.findOne({_id:_id})
        
        if (!profile) {
        return NextResponse.json({ error: "آگهی یافت نشد", status: 404 });
        }
        if(!user._id.equals(profile?.userId)){
            return NextResponse.json({error:"دست رسی شما به این آگهی محدود شده است",status:403})
        }
        profile.title = title
        profile.description = description
        profile.location = location
        profile.phone = phone
        profile.realState = realState
        profile.price = price
        profile.constructionDate = constructionDate
        profile.ameneties = ameneties
        profile.rules = rules
        profile.category = category
        profile.save()
        return NextResponse.json({message:"آگهی با موفقیت ویرایش شد",status:200})
    }
    catch(err){
         console.log(err);
        return NextResponse.json(
            {error:"مشکلی در سرور رخ داده است",status:500}
        )
    }
}