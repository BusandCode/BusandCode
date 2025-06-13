import React from 'react'
import { AiOutlineBehance } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";

const Services = () => {
  return (
    <section className='mt-16' id='service'>
        <div className='text-center max-w-[764px] mx-auto'>
            <h3 className='text-[24px] font-normal text-white'>What i offer</h3>
            <h1 className='text-[60px] font-normal text-white mb-5'>My services</h1>
            <p className='text-[20px] text-gray-400'>I am a frontend developer from California, USA with 10 years of experience in multiple 
            companies like Microsoft, Tesla and Apple.</p>
        </div>
        <div className='flex md:flex-col lg:flex-row justify-around items-center gap-5 mt-10 px-5 '>
            <article className='max-w-[335.49px] max-h-[329px] cursor-pointer 
            rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                <AiOutlineBehance className='text-[white] text-[20px] p-3 bg-[#FF6E00] w-[60px] h-[60px] rounded-[10px]' />
                <small className='font-medium text-[26px] text-white'>Web development</small>
                <small className='font-normal text-[16px] text-gray-400'>Creating responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS to deliver exceptional user experiences.</small>
            </article>
            <article className='max-w-[335.49px] max-h-[329px]  cursor-pointer rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                {/* <img src="/mobile-icon.png" alt="" width={47.62} height={47.62}/> */}
                <AiFillAndroid className='text-[white] text-[20px] p-3 bg-[#FF6E00] w-[60px] h-[60px] rounded-[10px]' />
                <small className='font-medium text-[26px] text-white'>Mobile app</small>
                <small className='font-normal text-[16px] text-gray-400'>Building cross-platform mobile applications using React Native and Flutter to bring your ideas to life on iOS and Android devices.</small>
            </article>
            <article className='max-w-[335.49px] cursor-pointer max-h-[329px] rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                <img src="/graphics-icon.png" alt="" width={47.62} height={47.62}/>
                <small className='font-medium text-[26px] text-white'>Graphics design</small>
                <small className='font-normal text-[16px] text-gray-400'>Designing eye-catching visuals, logos, and brand identities that communicate your message effectively and leave a lasting impression.</small>
            </article>
        </div>
      
    </section>
  )
}

export default Services