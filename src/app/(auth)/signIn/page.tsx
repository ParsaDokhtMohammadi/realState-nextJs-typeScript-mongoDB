import SignInPage from "@/components/template/SignInPage"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
const SignIn = async() => {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
  
  return (
    <>
        <SignInPage></SignInPage>
    </>
  )
}

export default SignIn