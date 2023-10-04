import React from 'react';
import { FooterText } from '@/components/footer';
import Image from 'next/image';
import sys_design from '../../public/sys_design.jpg'
const DocumentationPage = () => {
  return (
    <div className="bg-white text-black">
    <div className="max-w-lg container content-center">
         

        <div>
      <h1 className="text-4xl font-bold py-10 ">Documentation</h1>

      <Image
              priority
              src={sys_design}
              alt="System Overview"
              width={800}
              height={800}
            />
      <p className="text-lg font-bold py-10">
        Welcome to the Motobot Documentation page. </p>
      <br/>

      <p className="text-lg font-bold ">What is motobot?</p>
      <p className="text-lg">
     Motobot is a project built on top of ChatGPT, an advanced language model developed by OpenAI. It aims to provide AI insights specifically tailored to military service members.
     </p>
      <p className="text-lg">
        With Motobot, military service members can access AI-powered features that are not available in any other AI systems. The project will incrementally add prompt engineering features to enhance the user experience and deliver valuable insights.
      </p>
      <br/>
      <p className="text-lg">
        We are actively working to gain support from the military community to ensure that Motobot meets the unique needs of military service members. As part of this effort, we are striving to implement encrypted authentication via Common Access Cards (CAC) for secure access to the service.
      </p>
      <br/>
      <p className="text-lg">
        Please note that Motobot is primarily designed for use in garrison environments and not intended for field operations.
      </p>
      <br/>
      <h2 className="text-2xl font-bold">Getting Started</h2>
      <br/>
      <p className="text-lg">
        To get started with Motobot, follow these steps:
      </p>
      <br/>
      <ol className="list-decimal list-inside">
        <li className="text-lg">Step 1: Create an Account</li>
        <li className="text-lg">Step 2: Sign in</li>
        <li className="text-lg">Step 3: Start using Motobot</li>
      </ol>
      <br/>
      <a href="/sign-in?callbackUrl=/">
             <p className="max-w-sm text-center z-11 text-lg bg-lime-900 hover:bg-lime-600 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"> Get Started</p>
             </a>
      {/* <FooterText/> */}
    </div></div></div>
  );
};

export default DocumentationPage;
