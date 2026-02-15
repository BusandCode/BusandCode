import React from 'react'

const About: React.FC = () => {
  const tools = [
    { name: 'VS Code', icon: '/vscode.png' },
    { name: 'Firebase', icon: '/firebase.png' },
    { name: 'Figma', icon: '/figma.png' },
    { name: 'Git', icon: '/git.png' }
  ]

  return (
    <section className='relative py-20 md:py-32 px-4 bg-[#0a0d1f]' id='about'>
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl bottom-20 right-10" />
      </div>

      <div className='relative max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16 md:mb-20'>
          <div className='inline-block px-4 py-2 rounded-full glass-effect mb-4'>
            <span className='text-indigo-400 mono text-sm font-semibold'>WHO I AM</span>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            About <span className='gradient-text'>Me</span>
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full' />
        </div>
        
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Image Section */}
          <div className='flex justify-center lg:justify-start'>
            <div className='relative group'>
              {/* Glow effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl 
                            group-hover:blur-2xl transition-all duration-500' />
              
              {/* Image container */}
              <div className='relative w-full max-w-[400px] aspect-[4/5] glass-effect rounded-3xl p-6 
                            hover:scale-105 transition-transform duration-500 border border-white/5'>
                <div className='relative w-full h-full rounded-2xl overflow-hidden'>
                  <img 
                    src="/busand.jpg" 
                    alt="Andrew Adetokunbo" 
                    className='w-full h-full object-cover'
                  />
                  {/* Gradient overlay on hover */}
                  <div className='absolute inset-0 bg-gradient-to-t from-indigo-500/15 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className='space-y-8'>
            {/* Introduction Text */}
            <div className='space-y-4'>
              <h3 className='text-2xl md:text-3xl font-bold text-white'>
                Crafting Digital Experiences
              </h3>
              <p className='text-lg text-gray-400 leading-relaxed'>
                I&apos;m <span className='text-white font-semibold'>Adetokunbo Andrew</span>, 
                a software engineer from Nigeria with 2 years of hands-on experience building 
                impactful digital solutions. I&apos;ve contributed to innovative projects at 
                <span className='text-indigo-400'> FlexiSaf</span>, 
                <span className='text-indigo-400'> CodingKidsAcademy</span>, and 
                <span className='text-indigo-400'> BlizzCreative</span>.
              </p>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='glass-effect rounded-2xl p-6 hover:border-indigo-500/30 
                            transition-all duration-300 hover:transform hover:scale-[1.02]
                            hover:shadow-xl hover:shadow-indigo-500/10 group border border-white/5'>
                <div className='flex flex-col items-start space-y-4'>
                  <div className='w-14 h-14 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 
                                rounded-xl flex items-center justify-center
                                group-hover:from-indigo-500/25 group-hover:to-indigo-600/25 
                                transition-all duration-300'>
                    <svg className='w-7 h-7 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-white text-2xl font-bold mb-1 group-hover:text-indigo-400 transition-colors'>
                      Experience
                    </h4>
                    <p className='text-gray-500 mono text-sm'>
                      2+ YEARS IN THE FIELD
                    </p>
                  </div>
                </div>
              </div>

              <div className='glass-effect rounded-2xl p-6 hover:border-indigo-500/30 
                            transition-all duration-300 hover:transform hover:scale-[1.02]
                            hover:shadow-xl hover:shadow-indigo-500/10 group border border-white/5'>
                <div className='flex flex-col items-start space-y-4'>
                  <div className='w-14 h-14 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 
                                rounded-xl flex items-center justify-center
                                group-hover:from-indigo-500/25 group-hover:to-indigo-600/25 
                                transition-all duration-300'>
                    <svg className='w-7 h-7 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-white text-2xl font-bold mb-1 group-hover:text-indigo-400 transition-colors'>
                      Projects
                    </h4>
                    <p className='text-gray-500 mono text-sm'>
                      10+ COMPLETED WORKS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className='space-y-6'>
              <h3 className='text-white text-2xl font-bold flex items-center gap-2'>
                <div className='w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full' />
                Core Skills
              </h3>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Languages */}
                <div className='glass-effect rounded-xl p-5 hover:border-indigo-500/30 
                              border border-white/5 transition-all duration-300 
                              hover:transform hover:scale-[1.02] group'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 
                                  rounded-lg flex items-center justify-center flex-shrink-0
                                  group-hover:from-indigo-500/25 group-hover:to-indigo-600/25 
                                  transition-all duration-300'>
                      <svg className='w-5 h-5 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-white font-bold mb-2 group-hover:text-indigo-400 transition-colors'>
                        Languages
                      </h4>
                      <p className='text-gray-400 text-sm mono'>
                        JavaScript • Python • C
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className='glass-effect rounded-xl p-5 hover:border-indigo-500/30 
                              border border-white/5 transition-all duration-300 
                              hover:transform hover:scale-[1.02] group'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 
                                  rounded-lg flex items-center justify-center flex-shrink-0
                                  group-hover:from-indigo-500/25 group-hover:to-indigo-600/25 
                                  transition-all duration-300'>
                      <svg className='w-5 h-5 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-white font-bold mb-2 group-hover:text-indigo-400 transition-colors'>
                        Education
                      </h4>
                      <p className='text-gray-400 text-sm mono'>
                        B.Tech Software Engineering
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className='glass-effect rounded-xl p-5 hover:border-indigo-500/30 
                              border border-white/5 transition-all duration-300 
                              hover:transform hover:scale-[1.02] group md:col-span-2'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-gradient-to-br from-indigo-500/15 to-indigo-600/15 
                                  rounded-lg flex items-center justify-center flex-shrink-0
                                  group-hover:from-indigo-500/25 group-hover:to-indigo-600/25 
                                  transition-all duration-300'>
                      <svg className='w-5 h-5 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-white font-bold mb-2 group-hover:text-indigo-400 transition-colors'>
                        Specialization
                      </h4>
                      <p className='text-gray-400 text-sm mono'>
                        FRONTEND DEVELOPMENT • UI/UX DESIGN • RESPONSIVE WEB APPS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className='space-y-6'>
              <h3 className='text-white text-2xl font-bold flex items-center gap-2'>
                <div className='w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full' />
                Tools & Tech
              </h3>
              
              <div className='flex flex-wrap gap-4'>
                {tools.map((tool, index) => (
                  <div key={index} 
                      className='w-20 h-20 glass-effect rounded-2xl border border-white/5 
                                hover:border-indigo-500/30 flex items-center justify-center 
                                cursor-pointer transition-all duration-300 
                                hover:transform hover:scale-110 hover:shadow-lg 
                                hover:shadow-indigo-500/10 group'>
                    <img 
                      src={tool.icon} 
                      alt={`${tool.name} logo`} 
                      width={36} 
                      height={36} 
                      className='group-hover:scale-110 transition-transform duration-300' 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className='pt-6'>
              <a
                href="#contact"
                className='inline-flex items-center gap-3 px-8 py-4 
                          bg-gradient-to-r from-indigo-500 to-purple-600 
                          text-white rounded-full font-bold mono text-sm
                          hover:shadow-xl hover:shadow-indigo-500/25 
                          transition-all duration-300 hover:transform hover:scale-[1.02]'
              >
                <span>LET&apos;S BUILD SOMETHING</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About