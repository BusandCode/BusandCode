import React from 'react'

const About = () => {
  return (
    <section className='mt-16 px-4' id='about'>
      <div>
        <h3 className='text-[20px] md:text-[24px] font-normal text-center text-white'>Introduction</h3>
        <h1 className='text-[36px] md:text-[48px] lg:text-[60px] font-normal text-center mb-8 text-white'>About me</h1>
        
        <div className='flex lg:flex-row flex-col justify-center gap-8 lg:gap-10 max-w-[1000px] mx-auto'>
          <div className='flex justify-center lg:justify-start'>
            <img 
              src="/busand.jpg" 
              alt="Andrew Adetokunbo portrait" 
              width={400} 
              height={538} 
              className='rounded-[20px] md:rounded-[30px] w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] object-cover'
            />
          </div>
          
          <div className='flex-1'>
            <p className='pb-6 text-gray-400 text-[14px] md:text-[16px] leading-relaxed'>
              I am a software engineer with over two years of professional
              expertise in the field. Throughout my career, I have had the privilege
              of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-8'>
            <article className='w-full max-w-[280px] mx-auto md:mx-0 h-[180px] md:h-[195px] 
            cursor-pointer rounded-[8px] border-[1px] border-[#D8D8D8] 
            hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 transition-all duration-300 flex flex-col justify-center items-start gap-3 px-4'>
              <img src="/code-icon.png" alt="Code icon" width={22} height={20}/>
              <h4 className='text-[#fff] text-[18px] md:text-[20px] font-medium'>Languages</h4>
              <p className='text-[13px] md:text-[15px] text-gray-400 font-normal leading-relaxed'>
                Javascript, Python and C
              </p>
            </article>
            
            <article className='w-full max-w-[280px] mx-auto md:mx-0 h-[180px] md:h-[195px] cursor-pointer rounded-[8px] border-[1px] border-[#D8D8D8] hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 transition-all duration-300 flex flex-col justify-center items-start gap-3 px-4'>
              <img src="/edu-icon.png" alt="Education icon" width={28} height={24}/>
              <h4 className='text-[#fff] text-[18px] md:text-[20px] font-medium'>Education</h4>
              <p className='text-[13px] md:text-[15px] text-gray-400 font-normal'>
                B.Tech in Software Engineering
              </p>
            </article>
            
            <article className='w-full max-w-[280px] mx-auto md:mx-0 h-[180px] md:h-[195px] cursor-pointer rounded-[8px] border-[1px] border-[#D8D8D8] hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 transition-all duration-300 flex flex-col justify-center items-start gap-3 px-4 md:col-span-2 lg:col-span-1'>
              <img src="/project-icon.png" alt="Projects icon" width={24} height={21.8}/>
              <h4 className='text-[#fff] text-[18px] md:text-[20px] font-medium'>Projects</h4>
              <p className='text-[13px] md:text-[15px] text-gray-400 font-normal'>
                Built more than 5 projects
              </p>
            </article>
          </div>
            
            <div className='mt-6 flex flex-col items-start gap-5'>
              <h3 className='text-[#868686] text-[16px] md:text-[18px] font-medium'>Tools I use</h3>
              
              <div className='flex flex-wrap justify-center lg:justify-start items-center gap-3'>
                <div className='w-[65px] hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 h-[65px] md:w-[75px] md:h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484] transition-all duration-300'>
                  <img src="/vscode.png" alt="VS Code logo" width={28} height={28} className='md:w-[33px] md:h-[33px]' />
                </div>
                <div className='w-[65px] hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 h-[65px] md:w-[75px] md:h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484] transition-all duration-300'>
                  <img src="/firebase.png" alt="Firebase logo" width={28} height={28} className='md:w-[33px] md:h-[33px]' />
                </div>
                <div className='w-[65px] hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 h-[65px] md:w-[75px] md:h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484] transition-all duration-300'>
                  <img src="/figma.png" alt="Figma logo" width={28} height={28} className='md:w-[33px] md:h-[33px]' />
                </div>
                <div className='w-[65px] hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/10 h-[65px] md:w-[75px] md:h-[75px] cursor-pointer flex justify-center items-center rounded-[10px] border-[1px] border-[#848484] transition-all duration-300'>
                  <img src="/git.png" alt="Git logo" width={28} height={28} className='md:w-[33px] md:h-[33px]' />
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