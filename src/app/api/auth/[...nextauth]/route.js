import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import User from "@/models/User"
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
const authOptions = {
    session : {strategy:"jwt"},
    
    providers : [
        CredentialsProvider({
            async authorize(credentials){
                const {email , password}= credentials
                try{
                    await connectDB()
                }catch(err){
                    throw new Error("مشکلی در سرور رخ داده است")
                }
                if(!email || !password) throw new Error("اطلاعات نامعتبر است")
                const user = await User.findOne({email})
                if(!user) throw new Error("ابتدا حساب کاربری ایجاد کنید")
                const isValid = await verifyPassword(password , user.password)
                if(!isValid) throw new Error("ایمیل یا رمز عبور اشتباه هست")
                return {email}
            }
        })
    ]
}
const handler =  NextAuth(authOptions)
export {handler as GET , handler as POST}