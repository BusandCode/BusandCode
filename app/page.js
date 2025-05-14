import About from '@/components/About'
import MyWorks from '@/components/MyWorks'
import Services from '@/components/Services'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center gap-11 items-center py-10'>
      <div className='flex flex-col justify-center gap-8'>
        <div className='flex justify-center items-center'>
        <img src="/busand.jpg" alt="porfolio-image" width={200} height={200} className='max-w-[400px] max-h-[400px] rounded-[100px]'/>
        </div>
        <h1 className='text-[28px] text-[#242424] font-normal'>Hi! I’m Andrew Adetokunbo 👋🏻</h1>
      </div>
      <div className='flex flex-col justify-center gap-8 items-center text-center'>
        <h1 className='text-[#242424] text-[60px] max-w-[507px] max-h-[170px] text-center'>
        Software Engineer based in Nigeria.
        </h1>
        <div className='w-[764px] h-[80px]'>
          <h1 className='text-[#565656] text-[20px] font-normal'>I am a software engineer from Nigeria, with relevant years of experience in multiple 
          companies.</h1>
        </div>
        <small className='max-w-[508px] mx-auto h-[64px] flex items-center text-[18px] gap-3 font-normal'>
          <div href="/" className='w-[226px]  h-[64px] flex justify-center items-center text-center gap-3 bg-[#202020] rounded-[50px] text-[18px] text-[#ffffff]'>
          <Link href="/">connect with me</Link>
          <img src="/connect-with-me-arrow.png" alt="connect arrow" width={15} height={15} className='flex justify-center items-center mt-[3px]' />
          </div>
          <div className='border-[1px] border-[#A7A7A7] text-[#242424] w-[204px] h-[64px] rounded-[50px] flex justify-center gap-3 items-center'>
          <Link href="/">my resume</Link>
          <img src="/download-resume.png" alt="download resume" width={20} height={20} />
          </div>
        </small>
      </div>
      <About />
      <Services />
      <MyWorks />
    </section>
  )
}

export default Hero
