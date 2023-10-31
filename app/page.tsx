import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { auth } from '@/auth'
import Hero from '@/components/site/hero'
// export const runtime = 'edge'
import axios from 'axios';
import RoadMapPage from '@/components/site/roadmap'
export default async function IndexPage() {
  const id = nanoid()
  const session = await auth()

  if (session) {
    // console.log("Session from header:" + JSON.stringify(session))

    // console.log("session.user" + JSON.stringify(session.user))
  }
  if (session?.user) {
    return <Chat id={id} />
  }

  return (
    <div>
   <Hero/>
   <RoadMapPage/></div>
  );
  
}
