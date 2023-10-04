import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { LoginButton2 } from '@/components/login-button2'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
    
     <div className="flex flex-col">
     <div>
      <h1 className="text-2xl text-center"> Signin/ Signup</h1>
     </div>
     <LoginButton />
      <LoginButton2/>
      </div> 

    </div>
  )
}
