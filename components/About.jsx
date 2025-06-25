import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className='py-16 px-4' id='about'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-orange-500 text-lg font-medium mb-3'>Introduction</h2>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            About <span className='text-orange-500'>Me</span>
          </h1>
        </div>
        
        <div className='grid lg:grid-cols-2 gap-3 items-start'>
          {/* Image Section */}
          <div className='flex justify-center lg:justify-start'>
            <div className='relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden
                          bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6'>
              <div className='relative w-full h-full rounded-2xl overflow-hidden transform rotate-6 
                            hover:rotate-0 transition-transform duration-500 ease-in-out'>
                <Image 
                  src="/busand.jpg" 
                  alt="Andrew Adetokunbo portrait" 
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className='space-y-8'>
            {/* Introduction Text */}
            <div className='text-center lg:text-left'>
        
          <p className='text-[18px] md:text-[20px] text-gray-400 leading-relaxed px-4'>
           I'm Adetokunbo Andrew, I am a software engineer from Nigeria with 2 years of experience in multiple 
          companies like FlexiSaf, CodingKidsAcademy and BlizzCreative.
        </p>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4'>
              <div className='bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 
                            border border-gray-700 hover:border-orange-500/50 
                            transition-all duration-300 hover:transform hover:scale-105
                            hover:shadow-xl hover:shadow-orange-500/10 group'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4
                                group-hover:bg-orange-500/30 transition-colors duration-300'>
                    <svg className='w-6 h-6 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h4 className='text-white text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300'>
                    Experience
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    2+ Years Working
                  </p>
                </div>
              </div>

              <div className='bg-gray-900/30 backdrop-blur-sm 
              border-gray-700 
              rounded-2xl p-6
              border  hover:border-orange-500/50 
              transition-all duration-300 hover:transform hover:scale-105
              hover:shadow-xl hover:shadow-orange-500/10 group'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4
                                group-hover:bg-orange-500/30 transition-colors duration-300'>
                    <svg className='w-6 h-6 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                    </svg>
                  </div>
                  <h4 className='text-white text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300'>
                    Projects
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    10+ Completed
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className='space-y-6 flex flex-col items-center lg:items-start justify-center w-full'>
              <h3 className='text-white text-xl font-bold'>Core Skills</h3>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='bg-gray-900/30 backdrop-blur-sm 
              border-gray-700 
              rounded-2xl py-4 px-2 
              border  hover:border-orange-500/50 
              transition-all duration-300 hover:transform hover:scale-105
              hover:shadow-xl hover:shadow-orange-500/10 group'>
                  <div className='flex flex-col items-start gap-3'>
                    <div className='w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0
                                  group-hover:bg-orange-500/30 transition-colors duration-300'>
                      <svg className='w-4 h-4 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-white font-semibold mb-1 group-hover:text-orange-500 transition-colors duration-300'>
                        Languages
                      </h4>
                      <p className='text-gray-400 text-sm'>
                        JavaScript, Python, C
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-gray-900/30 backdrop-blur-sm 
              border-gray-700 
              rounded-2xl py-4 px-2 
              border  hover:border-orange-500/50 
              transition-all duration-300 hover:transform hover:scale-105
              hover:shadow-xl hover:shadow-orange-500/10 group'>
                  <div className='flex flex-col items-start gap-3'>
                    <div className='w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0
                                  group-hover:bg-orange-500/30 transition-colors duration-300'>
                      <svg className='w-4 h-4 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-white font-semibold mb-1 group-hover:text-orange-500 transition-colors duration-300'>
                        Education
                      </h4>
                      <p className='text-gray-400 text-sm'>
                        B.Tech Software Engineering
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-gray-900/30 backdrop-blur-sm 
              border-gray-700 
              rounded-2xl p-6 
              border  hover:border-orange-500/50 
              transition-all duration-300 hover:transform hover:scale-105
              hover:shadow-xl hover:shadow-orange-500/10 group'>
                  <div className='flex flex-col items-start gap-3'>
                    <div className='w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0
                                  group-hover:bg-orange-500/30 transition-colors duration-300'>
                      <svg className='w-4 h-4 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-white font-semibold mb-1 group-hover:text-orange-500 transition-colors duration-300'>
                        Specialization
                      </h4>
                      <p className='text-gray-400 text-sm'>
                        Frontend Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className='space-y-6 flex px-6 flex-col items-start'>
              <h3 className='text-white text-xl font-bold'>Tools I Use</h3>
              
              <div className='flex flex-wrap gap-4'>
                {[
                  { name: 'VS Code', icon: '/vscode.png' },
                  { name: 'Firebase', icon: '/firebase.png' },
                  { name: 'Figma', icon: '/figma.png' },
                  { name: 'Git', icon: '/git.png' }
                ].map((tool, index) => (
                  <div key={index} 
                      className='w-16 h-16 md:w-20 md:h-20 bg-gray-900/30 backdrop-blur-sm 
                      rounded-xl border border-gray-700 hover:border-orange-500/50 
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:transform hover:scale-110
                      hover:shadow-lg hover:shadow-orange-500/10 group'>
                    <Image 
                      src={tool.icon} 
                      alt={`${tool.name} logo`} 
                      width={28} 
                      height={28} 
                      className='md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300' 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className='pt-6'>
              <Link
                href='#contact'
                className='inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                         text-white rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 
                         transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 
                         hover:transform hover:scale-105'
              >
                <span>Let's Talk</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About