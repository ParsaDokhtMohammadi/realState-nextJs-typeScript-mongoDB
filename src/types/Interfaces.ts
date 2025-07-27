export interface IUser {
    id:Number|string
    email:string
    password:string
}
export interface IResponse {
    message?:string
    status:number
    error?:string
}