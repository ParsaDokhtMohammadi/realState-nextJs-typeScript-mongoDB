import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import User from "@/models/User"
import { IUser } from "@/types/Interfaces"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"

const MyProfiles = async() => {
    await connectDB()
    const session = await getServerSession(authOptions)
    const [user]:IUser[] = await User.aggregate([
        {$match : {email:session?.user?.email}},
        {$lookup:{
            from:"profiles",
            foreignField:"userId",
            localField:"_id",
            as:"profiles"
        }}
    ])
    console.log(user);
    
    return (
    <div>
        MyProfiles
    </div>
  )
}

export default MyProfiles