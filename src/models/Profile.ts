import { CATEGORY } from "@/types/Interfaces"
import {Schema , model , models} from "mongoose"
import User from "./User"

const profileSchema = new Schema({
    title : {
        type:String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    location : {
        type:String,
        required : true
    },
    phone : {
        type:String,
        required : true
    },
    realState : {
        type:String,
        required : true
    },
    price : {
        type:Number,
        required : true
    },
    constructionDate : {
        type:Date,
        required : true
    },
    category : {
        type:CATEGORY,
        required : true
    },
    ameneties : {
        type:[String],
        default : []
    },
    rules : {
        type:[String],
        default : []
    },
    userId : {
        type:Schema.Types.ObjectId,
        ref : User
    }
},{timestamps:true})
//timestamps is just createdAt and updatedAt

const Profile = models.profile || model("profile",profileSchema)
export default Profile