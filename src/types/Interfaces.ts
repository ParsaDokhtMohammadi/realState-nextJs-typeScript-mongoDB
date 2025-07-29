import { Types } from "mongoose"
import { Dispatch, SetStateAction } from "react"

export interface IUser {
    _id:Types.ObjectId
    email:string
    password:string
    createdAt:Date
}
export interface IResponse {
    message?:string
    status:number
    error?:string
}
export interface IChildren {
    children: React.ReactNode
}

export interface IProfile {
        title:string
        description:string
        location:string
        phone:string
        price:string
        realState:string
        constructionDate:Date
        category: CATEGORY
        rules ?:string[]
        amenities ?: string[]
        [key: string]: any;


}
export enum CATEGORY {
    VILLA = "villa",
    APARTMENT = "apartment",
    STORE = "store",
    OFFICE = "office",
    NULL = ""
}
export interface IProfileData {
    profileData : IProfile
    setProfileData : Dispatch<SetStateAction<IProfile>>
}
export interface ITextInput extends IProfileData {
    title : string
    name : keyof IProfile
    textArea ?: boolean
}

export interface ITextList extends IProfileData{
    type:string
    title:string   
    
}