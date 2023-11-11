import { auth } from '@/auth'
import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation'


function ServiceMemberForm() {

 async function handleSubmit(formData: FormData) {
  'use server'
  const session = await auth()
  const userId = session.user.id
  //save id to postgres
  const branch = formData.get("branch") as string
  const rank = formData.get("rank") as string
  const mos = formData.get("mos") as string
  const jobTitle = formData.get("jobTitle") as string
  var iscomplete = 0;


 // Check if all fields are selected
 if (!branch || !rank || !mos || !jobTitle) {
  console.error("Please fill out all fields before submitting.");
  // You can also show an error message to the user if needed
  return;
}

else {
  iscomplete = 1;
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
  // const { rows } = await client.sql`SELECT * FROM military_info1 WHERE id = ${userId};`;
  await client.sql`INSERT INTO military_info1 (id, branch, mos, grade, jobtitle, iscomplete)
  VALUES (${userId}, ${branch}, ${mos}, ${rank}, ${jobTitle}, ${iscomplete})`;

client.release();
redirect('/')
}

  
  }


    return (
      <div>
<form action={handleSubmit}>
{/* Select Branch */}
<div>
        <label htmlFor="branch">Branch of Service</label>
        <select
          id="branch"
          name="branch"
          className="border border-gray-300 rounded p-2"
        >
          <option value="">Select Branch</option>
          <option value="Marine Corps">Marine Corps</option>
          <option value="Navy">Navy</option>
          <option value="Army">Army</option>
          <option value="Air Force">Air Force</option>
          <option value="Space Force">Space Force</option>
        </select>
</div>
{/* Select Rank */}
        <div>
          <label htmlFor="rank">Rank</label>
          <select
            id="rank"
            name="rank"
            className="border border-gray-300 rounded p-2"
          >
 <option value="E-1">E-1</option>
<option value="E-2">E-2</option>
<option value="E-3">E-3</option>
<option value="E-4">E-4</option>
<option value="E-5">E-5</option>
<option value="E-6">E-6</option>
<option value="E-7">E-7</option>
<option value="E-8">E-8</option>
<option value="E-9">E-9</option>
<option value="O-1">O-1</option>
<option value="O-2">O-2</option>
<option value="O-3">O-3</option>
<option value="O-4">O-4</option>
<option value="O-5">O-5</option>
<option value="O-6">O-6</option>
<option value="O-7">O-7</option>
<option value="O-8">O-8</option>
<option value="O-9">O-9</option>
<option value="O-10">O-10</option>
            {/* Add more rank options */}
          </select>
        </div>
{/* Select MOS  */}
        <div>
          <label htmlFor="mos">MOS</label>
          <input 
          type="text"
          placeholder="2831"
            id="mos"
            name="mos"
            className="border border-gray-300 rounded p-2"
          >
            {/* Add more MOS options */}
          </input>
        </div>
{/* Select Job Title */}
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            placeholder="SATCOMM REPAIR"
            id="jobTitle"
            name="jobTitle"
            className="border border-gray-300 rounded p-2"
          />
        </div>
  
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      <div></div>
      </div>
    
    );
  }
  
  export default ServiceMemberForm;
  