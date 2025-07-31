import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import { IProfile, IUser } from "@/types/Interfaces";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, context: { params: { [key: string]: string } }) {
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
        const profile: IProfile | null = await Profile.findOne({ _id: id })
        if (!profile) {
            return NextResponse.json({ error: "دسترسی شما به این آگهی محدود شده است", status: 403 });
        }
        await Profile.deleteOne({_id:id})
        return NextResponse.json({message:"آگهی مورد نظر حذف شد",status:200})
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است", status: 500 }
        )
    }
}