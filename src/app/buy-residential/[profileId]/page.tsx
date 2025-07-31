import DetailsPage from "@/components/template/DetailsPage"
import Profile from "@/models/Profile"
import { IProfile } from "@/types/Interfaces"
import connectDB from "@/utils/connectDB"


const ProfileDetails = async({params}:{params:{profileId:string}}) => {
    await connectDB()
    const profile:IProfile|null = await Profile.findOne({_id : params.profileId})
    if(!profile) return <h3>مشکلی پیش آمده است</h3>
     return (
        <>
            <DetailsPage data={profile}/>
        </>
    )
}

export default ProfileDetails