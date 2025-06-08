import React from 'react'

const About = () => {
  return (
    <section className='mt-16' id='about'>
      <div>
        <h3 className='text-[24px] font-normal text-center text-white'>Introduction</h3>
        <h1 className='text-[60px] font-normal text-center mb-5 text-white'>About me</h1>
        <div className='flex lg:flex-row flex-col justify-center gap-10 max-w-[800px] mx-auto'>
            <img src="/busand.jpg" alt=""  width={400} height={538} className='rounded-[30px] flex justify-center items-center'/>
            <div>
            <p className='pb-4 text-gray-400'>
            I am a software engineer with over two years of professional
             expertise in the field. Throughout my career, I have had the privilege
             of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <div className='flex lg:flex-row justify-between items-center gap-5 flex-col'>
            <article className='w-[243px] h-[195px] cursor-pointer rounded-[8px] border-[1px] border-[#D8D8D8]
               hover:shadow-md  hover:shadow-[#000000] flex flex-col justify-center gap-3 items-start px-4'>
                <img src="/code-icon.png" alt="" width={22} height={20}/>
                <small className='text-[#fff] text-[20px] font-medium'>Languages</small>
                <small className='text-[15px] text-gray-400 font-normal'>HTML, CSS, JavaScript,
                  React Js, Next Js and TailwindCSS</small>
              </article>
              <article className='w-[243px] h-[195px] cursor-pointer rounded-[8px] border-[1px] border-[#D8D8D8]
               hover:shadow-md  hover:shadow-[#000000] flex flex-col justify-center gap-3 items-start px-4'>
                <img src="/edu-icon.png" alt="" width={28} height={24}/>
                <small className='text-[#fff] text-[20px] font-medium'>Education</small>
                <small className='text-[15px] text-gray-400 font-normal'>B.Tech in Software Engineering</small>
              </article>
              <article className='w-[243px] h-[195px] cursor-pointer rounded-[8px] border-[1px] border-[#D8D8D8] hover:shadow-md  hover:shadow-[#000000] flex flex-col justify-center gap-3 items-start px-8'>
                <img src="/project-icon.png" alt="" width={24} height={21.8} className='flex justify-center items-start'/>
                <small className='text-[#fff] text-[20px] font-medium'>Projects</small>
                <small className='text-[15px] text-gray-400 font-normal'>Built more than 5 projects</small>
              </article>
            </div>
            <div className='mt-6 flex flex-col items-start gap-5'>
              <div>
            <h1 className='text-[#868686]'>Tools I use</h1>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <div className='w-[75px] h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484]'>
                <img src="/vscode.png" alt="Vscode logo"  width={33} height={33} />
              </div>
              <div className='w-[75px] h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484]'>
                <img src="/firebase.png" alt="Firebase logo"  width={33} height={33} />
              </div>
              <div className='w-[75px] h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484]'>
                <img src="/figma.png" alt="Figma logo"  width={33} height={33} />
              </div>
              <div className='w-[75px] h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484]'>
                <img src="/git.png" alt="Git logo"  width={33} height={33} />
              </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
