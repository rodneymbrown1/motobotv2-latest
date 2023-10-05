
import Image from 'next/image';
import motologo from '../../public/newmoto.png'
import homeBackground from '../../public/homebackground.jpg'

export default function Hero () {
    return ( <section className=" ">
    <section className="hero relative">
         {/* Fixed Background Image */}
         <div
     className="absolute inset-0 z-[-1] h-full w-full bg-no-repeat bg-center"
     style={{
       backgroundImage: `url(${homeBackground.src})`,
       backgroundSize: 'cover', // Increase size by using 'cover'
     }}
   ></div>
   
         {/* Content */}
         <div className="flex flex-wrap flex-col content-center container mx-auto relative z-10 text-center py-16">
         <div className="">
           <Image
                 priority
                 src={motologo}
                 alt="System Overview"
                 width={600}
                 height={600}
               /></div>
   
   <div className="md:w-1/2">
               <h1 className="bg-gray-900 text-4xl font-semibold text-white  font-courier mb-4">
                 Motobot: Your Military AI Assistant
               </h1>
               <p className="bg-gray-900 text-lg mb-8 text-white font-courier">
                 Motobot is your dedicated AI companion designed to assist and support military personnel. Stay up-to-date with evidence-based data, mission information, and tactical insights 24/7.
               </p>
   <a href="/sign-in?callbackUrl=/">
             <p className="z-11 text-lg bg-lime-900 hover:bg-lime-600 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"> Get Started</p>
             </a>
               <br/>
               <br/>
               <br/>
              
             </div>
           {/* Add your call-to-action button or additional content here */}
         </div>
       </section>
   
         <div className="bg-blue-900 flex flex-wrap flex-col justify-start content-center">
   
       
   
           
             {/* <div className="md:w-1/2 mt-8 md:mt-0">
               <div >
               </div>
             </div> */}
         {/* <WhyMotobotSection/>
               <BridgingTheGapSection/> */}
         </div>
      
       </section>
     )
}