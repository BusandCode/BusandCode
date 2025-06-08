"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const MyWorks = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShow = () =>{
        setShowMore(true)
    }
  return (
    <section className='mt-16' id='my-works'>
        <div className='text-center max-w-[764px] mx-auto '>
            <h3 className='text-[24px] font-normal text-[#242424]'>My portfolio</h3>
            <h1 className='text-[60px] font-normal text-[#242424] mb-5'>My latest work</h1>
            <p className='text-[20px] text-[#565656]'>Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in front-end development.</p>
        </div>
        <div className='mt-10 max-w-[1300px] mx-auto'>
            <div className='flex md:flex-col lg:flex-row  mx-auto gap-5 items-center'>
            <article className='bg-[url(/work-1.png)] bg-no-repeat bg-cover 
            bg-center flex justify-center items-end  w-[335px] h-[335px] rounded-[8px]'>
                <div className='bg-[#FFFFFF] w-[273px] rounded-[8px] h-[83px]  flex items-center justify-between px-5 mb-8'>
                    <div className='flex flex-col items-start'>
                    <small className='font-semibold text-[#2A2A2A] text-[18px] capitalize'>Yotomi Supermarket</small>
                    <small className='font-normal text-[16px] text-[#5E5E5E]'>Web Development</small>
                    </div>
                    <Link href="https://yotomi-supermarket.vercel.app/" className='rounded-[100px] w-[42px] h-[43px] border-[1px] border-[#000000] hover:bg-[#D8FC68] cursor-pointer flex justify-center items-center'>
                        <img src="/send-icon.png" alt="" width={18} height={17}/>
                    </Link>
                </div>
            </article>
            <article className='bg-[url(/work-1.png)] bg-no-repeat bg-cover rounded-[8px] bg-center flex justify-center items-end  w-[335px] h-[335px]'>
                {/* <div>
                    <img src="/work-1.png" alt="" width={335} height={335} className='rounded-[8px]'/>
                </div> */}
                <div className='bg-[#FFFFFF] w-[273px] rounded-[8px] h-[83px]  flex items-center justify-between px-5 mb-8'>
                    <div className='flex flex-col items-start'>
                    <small className='font-semibold text-[#2A2A2A] text-[18px] capitalize'>ReadEvolve</small>
                    <small className='font-normal text-[16px] text-[#5E5E5E]'>Web Development</small>
                    </div>
                    <Link href="https://read-evolve.vercel.app/" className='rounded-[100px] w-[42px] h-[43px] border-[1px] border-[#000000] hover:bg-[#D8FC68] cursor-pointer flex justify-center items-center'>
                        <img src="/send-icon.png" alt="" width={18} height={17}/>
                    </Link>
                </div>
            </article>
            <article className='bg-[url(/work-1.png)] bg-no-repeat rounded-[8px] bg-cover bg-center flex justify-center items-end  w-[335px] h-[335px]'>
                <div className='bg-[#FFFFFF] w-[273px] rounded-[8px] h-[83px]  flex items-center justify-between px-5 mb-8'>
                    <div className='flex flex-col items-start'>
                    <small className='font-semibold text-[#2A2A2A] text-[18px] capitalize'>Travel Guide</small>
                    <small className='font-normal text-[16px] text-[#5E5E5E]'>Web Development</small>
                    </div>
                    <Link href="https://yotomi-supermarket.vercel.app/" className='rounded-[100px] w-[42px] h-[43px] border-[1px] border-[#000000] hover:bg-[#D8FC68] cursor-pointer flex justify-center items-center'>
                        <img src="/send-icon.png" alt="" width={18} height={17}/>
                    </Link>
                </div>
            </article>
            <article className='bg-[url(/work-1.png)] bg-no-repeat rounded-[8px] bg-cover bg-center flex justify-center items-end  w-[335px] h-[335px]'>
                <div className='bg-[#FFFFFF] w-[273px] rounded-[8px] h-[83px]  flex items-center justify-between px-5 mb-8'>
                    <div className='flex flex-col items-start'>
                    <small className='font-semibold text-[#2A2A2A] text-[18px] capitalize'>Estate Management</small>
                    <small className='font-normal text-[16px] text-[#5E5E5E]'>Web Development</small>
                    </div>
                    <Link href="https://real-estate-management-gray.vercel.app/" className='rounded-[100px] w-[42px] h-[43px] border-[1px] border-[#000000] hover:bg-[#D8FC68] cursor-pointer flex justify-center items-center'>
                        <img src="/send-icon.png" alt="" width={18} height={17}/>
                    </Link>
                </div>
            </article>
            </div>
        </div>
        <div onClick={handleShow}
        className='w-[204px] mt-12 cursor-pointer mx-auto h-[64px] rounded-[50px] 
        flex justify-center items-center border-[1px] gap-2 border-[#A7A7A7]'>
            <small className='text-[#6F6F6F] text-[18px] font-normal'>Show more</small>
            <img src="/right-arrow.png" alt="show more" width={20.72} height={26.36} className='mt-1'/>
        </div>
        {showMore ? <h1>Hello World</h1> : null}
      
    </section>
  )
}

export default MyWorks
