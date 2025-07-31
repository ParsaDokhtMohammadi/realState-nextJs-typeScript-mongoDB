import AddProfilePage from "@/components/template/AddProfilePage";
import Profile from "@/models/Profile";
import { IProfile } from "@/types/Interfaces";
import connectDB from "@/utils/connectDB";

type Props = {
  params: {
    profileId: string;
  };
};

const EditPage = async({params:{profileId}}:Props) => {
    await connectDB()
    const profile:IProfile|null = await Profile.findOne({_id:profileId})
    if(!profile) return <h3>مشکلی پیش آمده است</h3>
  return (
    <>
        <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
    </>
  )
}

export default EditPage