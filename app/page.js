import About from '@/components/About'
import MyWorks from '@/components/MyWorks'
import Services from '@/components/Services'
import Link from 'next/link'
import React from 'react'
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className='w-full text-white flex flex-col justify-center gap-8 md:gap-11 items-center py-10 px-4'>
      <div className='flex flex-col justify-center gap-6 md:gap-8 items-center'>
        <div className='flex justify-center items-center'>
          <img 
            src="/busand.jpg" 
            alt="portfolio-image" 
            width={200} 
            height={200} 
            className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:max-w-[400px] lg:max-h-[400px] rounded-[75px] md:rounded-[100px] object-cover'
          />
        </div>
        <h1 className='text-[20px] md:text-[28px] font-normal text-center'>Hi! I'm Andrew Adetokunbo 👋🏻</h1>
      </div>
      
      <div className='flex flex-col justify-center gap-6 md:gap-8 items-center text-center w-full max-w-6xl'>
        <h1 className='text-[32px] md:text-[48px] lg:text-[60px] max-w-[300px] md:max-w-[400px] lg:max-w-[507px] text-center leading-tight'>
          Software Engineer based in Nigeria.
        </h1>
        
        <div className='w-full max-w-[300px] md:max-w-[500px] lg:max-w-[774px]'>
          <p className='text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed'>
            I am a software engineer from Nigeria, with relevant years of experience in multiple companies.
          </p>
        </div>
        
        <div className='w-full max-w-[320px] md:max-w-[480px] mx-auto flex flex-col md:flex-row items-center justify-center text-[16px] md:text-[18px] gap-4 md:gap-3 font-normal'>
          <Link 
            href="/" 
            className='w-full md:w-[200px] p-3 h-[56px] md:h-[64px] flex justify-center items-center text-center gap-3 bg-[#FF6E00] rounded-[28px] md:rounded-[50px] text-[16px] md:text-[18px] text-[#ffffff] hover:bg-[#e55a00] transition-colors'
          >
            <span>connect with me</span>
            <img 
              src="/connect-with-me-arrow.png" 
              alt="connect arrow" 
              width={15} 
              height={15} 
              className='flex justify-center items-center mt-[2px]' 
            />
          </Link>
          
          <Link 
            href="/" 
            className='w-full md:w-[190px] p-3 h-[56px] md:h-[64px] border-[1px] border-[#A7A7A7] rounded-[28px] md:rounded-[50px] flex justify-center gap-3 items-center hover:border-white transition-colors'
          >
            <span>my resume</span>
            <FiDownload className='text-white' />
          </Link>
        </div>
      </div>
      
      <About />
      <Services />
      {/* <MyWorks /> */}
    </section>
  )
}

export default Hero