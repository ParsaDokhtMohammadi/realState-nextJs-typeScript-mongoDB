export interface IUser {
    id:Number|string
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