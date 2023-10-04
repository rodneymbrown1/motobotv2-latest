import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { auth } from '@/auth'
import Hero from '@/components/site/hero'
export const runtime = 'edge'

export default async function IndexPage() {
  const id = nanoid()
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    return <Chat id={id} />
  }

  return (
   <Hero/>
  );
  
}
