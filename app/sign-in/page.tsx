
import Hero from "@/components/site/hero";
import RoadMapPage from "@/components/site/roadmap";
import { redirect } from 'next/navigation'
import { auth } from '@/auth'

export default async function Home () {
const session = await auth()
// redirect to home if user is already logged in
if (session?.user) {
  redirect('/')
} 
    return (<div>

     <Hero/>
     <RoadMapPage/>
     </div>
      );
}