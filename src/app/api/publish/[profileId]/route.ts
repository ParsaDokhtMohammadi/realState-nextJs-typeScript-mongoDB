import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { IUser } from "@/types/Interfaces";
import User from "@/models/User";
import Profile from "@/models/Profile";

export async function PATCH(req: NextRequest, context: { params: { profileId: string } }) {
    try {
        await connectDB()
        const id: string = context.params.profileId
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید", status: 401 })
        }
        const user: IUser | null = await User.findOne({ email: session.user?.email })
        if (!user) {
            return NextResponse.json({ error: "کاربر یافت نشد", status: 404 })
        }
        if(user.role!=="ADMIN"){
            return NextResponse.json({error:"دسترسی محدود",status:403})
        }
        const profile = await Profile.findOne({_id:id})
        profile.published=true
        profile.save()
        return NextResponse.json({message:"آگهی منتشر شد",status:200})
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است", status: 500 })
    }
}
