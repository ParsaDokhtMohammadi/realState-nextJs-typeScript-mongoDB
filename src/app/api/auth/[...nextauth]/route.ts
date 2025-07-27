import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "credentials", 
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        try {
          await connectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password) throw new Error("اطلاعات نامعتبر است");

        const user = await User.findOne({ email });
        if (!user) throw new Error("ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه هست");
        return { id: user._id.toString(), email: user.email };
      }
    })
  ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
