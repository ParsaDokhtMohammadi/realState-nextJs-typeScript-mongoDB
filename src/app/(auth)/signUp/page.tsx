import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import SignUpPage from "@/components/template/SignUpPage"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const SignUp = async() => {
    const session = await getServerSession(authOptions)
    if(session) redirect("/")
  return (
    <>
      <SignUpPage></SignUpPage>
    </>
  )
}

export default SignUp