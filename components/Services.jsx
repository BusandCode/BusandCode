import React from 'react'

const Services = () => {
  return (
    <section className='mt-16' id='services'>
        <div className='text-center max-w-[764px] mx-auto'>
            <h3 className='text-[24px] font-normal text-[#242424]'>What i offer</h3>
            <h1 className='text-[60px] font-normal text-[#242424] mb-5'>My services</h1>
            <p className='text-[20px] text-[#565656]'>I am a frontend developer from California, USA with 10 years of experience in multiple 
            companies like Microsoft, Tesla and Apple.</p>
        </div>
        <div className='flex md:flex-col lg:flex-row justify-around items-center gap-5 mt-10 px-5 '>
            <article className='max-w-[335.49px] max-h-[329px] cursor-pointer rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                <img src="/web-icon.png" alt="" width={47.62} height={47.62}/>
                <small className='font-medium text-[26px] text-[#282828]'>Web development</small>
                <small className='font-normal text-[16px] text-[#797979]'>Web development is the process of building, programming...</small>
                <div className='flex items-center gap-1 justify-center'>
                  <small className='font-normal text-[16px] text-[#797979]'>Read more</small>
                  <img src="/right-arrow.png" alt="" width={16.23} height={16.23} className='flex justify-center items-center mt-1' />
                </div>
            </article>
            <article className='max-w-[335.49px] max-h-[329px]  cursor-pointer rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                <img src="/mobile-icon.png" alt="" width={47.62} height={47.62}/>
                <small className='font-medium text-[26px] text-[#282828]'>Mobile app</small>
                <small className='font-normal text-[16px] text-[#797979]'>Web development is the process of building, programming...</small>
                <div className='flex items-center gap-1 justify-center'>
                  <small className='font-normal text-[16px] text-[#797979]'>Read more</small>
                  <img src="/right-arrow.png" alt="" width={16.23} height={16.23} className='flex justify-center items-center mt-1' />
                </div>
            </article>
            <article className='max-w-[335.49px] cursor-pointer max-h-[329px] rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                <img src="/ui-icon.png" alt="" width={47.62} height={47.62}/>
                <small className='font-medium text-[26px] text-[#282828]'>UI/UX design</small>
                <small className='font-normal text-[16px] text-[#797979]'>Web development is the process of building, programming...</small>
                <div className='flex items-center gap-1 justify-center'>
                  <small className='font-normal text-[16px] text-[#797979]'>Read more</small>
                  <img src="/right-arrow.png" alt="" width={16.23} height={16.23} className='flex justify-center items-center mt-1' />
                </div>
            </article>
            <article className='max-w-[335.49px]n cursor-pointer max-h-[329px] rounded-[8px] border-[2px] border-[#EFEFEF] 
            flex flex-col gap-5 items-start p-5 '>
                <img src="/graphics-icon.png" alt="" width={47.62} height={47.62}/>
                <small className='font-medium text-[26px] text-[#282828]'>Graphics design</small>
                <small className='font-normal text-[16px] text-[#797979]'>Web development is the process of building, programming...</small>
                <div className='flex items-center gap-1 justify-center'>
                  <small className='font-normal text-[16px] text-[#797979]'>Read more</small>
                  <img src="/right-arrow.png" alt="" width={16.23} height={16.23} className='flex justify-center items-center mt-1' />
                </div>
            </article>
        </div>
      
    </section>
  )
}

export default Services
