import React from 'react';
import { FooterText } from '@/components/footer';
import Image from 'next/image';
import sys_design from '../../public/sys_design.jpg'
import IconSearch from '../../public/Picture8.svg';
import Setup from '../../public/Picture9.svg';
import DataSources from '../../public/Picture10.svg';
import DigiEarth from '../../public/Picture2.jpg'
import FineTune from '../../public/Picture3.jpg'
import motologo from '../../public/newmoto.png'
import homeBackground from '../../public/homebackground.jpg'
import User from '../../public/Picture13.png'
import UserInput from '../../public/Picture12.png'
import Phone from '../../public/smartphone.png'
import Scale from '../../public/Picture4.jpg'
const RoadMapPage = () => {
  return (
    
<div className="bg-black text-white">
<div className="mx-40">
<h1 className="text-8xl text-center font-bold py-20">Motobot Roadmap</h1>
</div>

{/* Phase 1     */}
<div className="max-w-lg container content-center">
<div>
    <p className="text-3xl font-bold py-10">Phase 1 - LLM API Foundation</p>



    <div className="flex flex-row py-10">
    <Image
              priority
              src={IconSearch}
              alt="System Overview"
              width={40}
              height={40}
            />
<p className="text-xl font-bold">Research and Feasibility Study</p>
    </div>

    <div className="flex flex-row py-10">
    <Image
              priority
              src={Setup}
              alt="System Overview"
              width={40}
              height={40}
            />
<p className="text-xl font-bold">Infrastructure Setup
</p>
    </div>

    <div className="flex flex-row py-10">
    <Image
              priority
              src={DataSources}
              alt="System Overview"
              width={40}
              height={40}
            />
<p className="text-xl font-bold">Data Sources Integration
</p>

    </div>
    </div>
    </div>
<br/><br/><br/><br/>
{/* Phase 2 */}
<div>
    <p className="text-3xl font-bold py-30 text-center">Phase 2 – Dynamic Web Crawling</p>
   <div className="flex flex-nowrap flex-row-reverse justify-start ">
    <div >
    <Image
              priority
              src={DigiEarth}
              alt="System Overview"
              width={1000}
              height={1000}
            />
    </div>
    <div>
<ol className="flex flex-col content-center text-xl p-10  lg:p-40 lg:text-2xl">
    <li>Integrate Evidence Based Data Sources</li>
    <br/>
<li>Design and Setup Web Crawling Framework</li>
<br/>
<li>Integrate NLP Classification to prompt relevant web crawling.
</li>
<br/>
<li>Parse and format fetched web data</li>
<br/>
<li>Use clean data for dynamic prompt engineering based on the user prompt.
</li>
<br/>
</ol>

    </div>
    </div>
 </div>
{/* Phase 3 */}
<div>
    <div className="relative">
    <Image
              priority
              src={FineTune}
              alt="System Overview"
              width={1000}
              height={1000}
            />
            <div className="absolute top-1/2 ">
            <div className="flex flex-col  content-center align-center">
<p className="text-3xl font-bold py-30 ">Phase 3 – Fine Tune Data Fetching</p>   
<div>
<ol className="flex flex-col content-center text-xl p-10  lg:p-40 lg:text-2xl">
    <li>Fine tune the web crawling processes</li>
    <li>Fine tune the prompt engineering process
</li>

<br/>
</ol>
</div>
    </div>

</div>     
    
    
    </div>

{/* Phase 4 */}
<div className="flex justify-between flex-row py-40">
<div>
    <p className="text-3xl font-bold py-10">Phase 4 – Testing and User Study</p>

    <div className="flex flex-row flex-start py-10">
    <Image
              priority
              src={User}
              alt="System Overview"
              width={40}
              height={40}
            />
<p className="text-xl font-bold">Conduct user testing to gather feedback on the enhanced user experience.
</p>
    </div>

    <div className="flex flex-row py-10">
    <Image
              priority
              src={UserInput}
              alt="System Overview"
              width={40}
              height={40}
            />
<p className="text-xl font-bold">Make necessary Adjustments based on user input

</p>
    </div>



  
    </div>
<div>
<Image
              priority
              src={Phone}
              alt="System Overview"
              width={500}
              height={500}
            />


</div>
    </div>

{/* Phase 5 */}
<div className="flex justify-between flex-row-reverse py-40">
<div>
    <p className="text-3xl font-bold py-10">Phase 5 – Optimization and Scaling</p>
    <ol className="flex flex-col content-center text-xl p-10  lg:p-40 lg:text-2xl">
    <li>Integrate Evidence Based Data Sources</li>
    <br/>
<li>Design and Setup Web Crawling Framework</li>
<br/>
<li>Integrate NLP Classification to prompt relevant web crawling.
</li>
<br/>
<li>Parse and format fetched web data</li>
<br/>
<li>Use clean data for dynamic prompt engineering based on the user prompt.
</li>
<br/>
</ol>
 



  
    </div>
<div className="flex flex-col">
<Image
              priority
              src={Scale}
              alt="System Overview"
              width={500}
              height={500}
            />


</div>
    </div>




</div>
 
    
</div>
  );
};

export default RoadMapPage;
