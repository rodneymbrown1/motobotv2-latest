
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { auth } from '@/auth'
import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation'
import Hero from '@/components/site/hero'
import ServiceMemberForm from '@/components/forms/initial form/ServiceInfoform'
import axios from 'axios';
import RoadMapPage from '@/components/site/roadmap'
export default async function IndexPage() {
  const id = nanoid()
  const session = await auth()
  const userId = session.user.id;

  async function checkUser(userId: string) {
    try {
    const result = await sql`
      SELECT id FROM military_info1
      WHERE id = ${userId};
    `; 
    // console.log("result: " + JSON.stringify(result))
      // If result contains any rows, a record with the specified user_id exists
      return result}
 
      catch (e)
{console.log("please fill out the form.")}
  

  }
  
  if (session?.user) {
    const client = await sql.connect();
    await sql`
    CREATE TABLE IF NOT EXISTS military_info1 (
      id SERIAL PRIMARY KEY,
      branch VARCHAR(255),
      mos VARCHAR(255),
      grade VARCHAR(10),
      jobtitle VARCHAR(255),
      iscomplete BOOL
    );
  `
   
    if (await checkUser(userId)) {
        return <Chat id={id} />
    }

    else{
    return <ServiceMemberForm/>
    }
  }

  else{  
    return (
    <div>
   <Hero/>
   <RoadMapPage/>
   </div>
  );
}
}
