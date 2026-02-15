import React, { useState } from 'react'
import { FaCode, FaMobile, FaPaintBrush } from "react-icons/fa"
import type { IconType } from 'react-icons'

interface ServiceData {
  id: number
  icon: IconType
  title: string
  description: string
  technologies: string[]
  gradient: string
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    icon: FaCode,
    title: "WEB DEVELOPMENT",
    description: "Creating responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS to deliver exceptional user experiences.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    icon: FaMobile,
    title: "MOBILE APP DEVELOPMENT",
    description: "Building cross-platform mobile applications using React Native to bring your ideas to life on iOS and Android devices.",
    technologies: ["React Native", "Expo Go", "iOS", "Android"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: FaPaintBrush,
    title: "UI/UX DESIGN",
    description: "Designing eye-catching visuals, user interfaces, and brand identities that communicate your message effectively and leave a lasting impression.",
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    gradient: "from-orange-500 to-yellow-500"
  }
]

const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @keyframes float-service {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .service-card {
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
      `}</style>

      <section className='relative py-20 md:py-32 px-4 bg-[#0a0e1a] overflow-hidden' id='service'>
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 left-10" />
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-40 right-20" />
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl bottom-20 left-1/3" />
        </div>

        <div className='relative text-center max-w-4xl mx-auto mb-16 md:mb-20'>
          <div className='inline-block px-4 py-2 rounded-full glass-effect mb-4 border border-white/10'>
            <span className='text-orange-500 mono text-sm font-semibold'>WHAT I OFFER</span>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            My <span className='gradient-text'>Services</span>
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Transforming ideas into digital reality with cutting-edge technology and creative excellence
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mt-6' />
        </div>

        <div className='relative max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
            {servicesData.map((service, index) => {
              const IconComponent = service.icon
              const isActive = activeCard === service.id
              
              return (
                <article 
                  key={service.id}
                  onClick={() => setActiveCard(service.id)}
                  onMouseEnter={() => setActiveCard(service.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`service-card w-full max-w-[380px] h-auto min-h-[420px] cursor-pointer 
                           glass-effect rounded-3xl border border-white/10
                           flex flex-col gap-6 items-start p-8 group
                           transform transition-all duration-500 ease-out
                           hover:shadow-2xl
                           ${isActive 
                             ? 'shadow-2xl shadow-orange-500/30 border-orange-500/50 -translate-y-3 scale-105' 
                             : 'hover:shadow-orange-500/20 hover:border-orange-500/30 hover:-translate-y-3'
                           }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                                opacity-0 rounded-3xl transition-opacity duration-500
                                ${isActive ? 'opacity-5' : 'group-hover:opacity-5'}`} />

                  {/* Icon Container */}
                  <div className='relative z-10'>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                                  rounded-2xl blur-2xl transition-all duration-500
                                  ${isActive 
                                    ? 'opacity-40 scale-125' 
                                    : 'opacity-0 group-hover:opacity-40 group-hover:scale-125'
                                  }`} />
                    
                    {/* Icon box */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} 
                                  rounded-2xl flex items-center justify-center shadow-xl
                                  transition-all duration-500
                                  ${isActive 
                                    ? 'scale-110 rotate-6' 
                                    : 'group-hover:scale-110 group-hover:rotate-6'
                                  }`}>
                      <IconComponent className='text-white text-3xl' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative z-10 flex flex-col gap-4 flex-grow'>
                    <h3 className={`font-bold text-xl mono transition-colors duration-300
                                 ${isActive 
                                   ? 'text-orange-400' 
                                   : 'text-white group-hover:text-orange-400'
                                 }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-base leading-relaxed flex-grow
                                transition-colors duration-300
                                ${isActive 
                                  ? 'text-gray-300' 
                                  : 'text-gray-400 group-hover:text-gray-300'
                                }`}>
                      {service.description}
                    </p>

                    {/* Technology Tags */}
                    <div className='flex flex-wrap gap-2 mt-auto pt-4'>
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1.5 text-xs rounded-full border mono font-semibold
                                   transition-all duration-300
                                   ${isActive 
                                     ? 'bg-orange-500/20 border-orange-500/50 text-orange-300 scale-105' 
                                     : 'bg-white/5 border-white/10 text-gray-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 group-hover:text-orange-400'
                                   }`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow Indicator */}
                  <div className={`absolute top-6 right-6 transition-all duration-300 z-10
                                ${isActive 
                                  ? 'opacity-100 translate-x-0' 
                                  : 'opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                                }`}>
                    <div className='w-10 h-10 rounded-full glass-effect border border-orange-500/50 
                                  flex items-center justify-center'>
                      <svg 
                        className='w-5 h-5 text-orange-400' 
                        fill='none' 
                        stroke='currentColor' 
                        viewBox='0 0 24 24'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                              d='M7 17L17 7M17 7H7M17 7V17' />
                      </svg>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className={`absolute bottom-6 right-6 w-12 h-12 rounded-full 
                                glass-effect border border-white/10 
                                flex items-center justify-center
                                transition-all duration-300
                                ${isActive 
                                  ? 'scale-110 border-orange-500/50' 
                                  : 'group-hover:scale-110 group-hover:border-orange-500/30'
                                }`}>
                    <span className={`text-2xl font-bold mono transition-colors duration-300
                                   ${isActive 
                                     ? 'text-orange-400' 
                                     : 'text-gray-600 group-hover:text-orange-400'
                                   }`}>
                      {service.id}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className='text-center mt-20'>
            <div className='glass-effect border border-white/10 rounded-3xl p-10 max-w-2xl mx-auto 
                          hover:border-orange-500/30 transition-all duration-500'>
              <p className='text-gray-400 mb-3 mono text-sm font-semibold'>
                READY TO START?
              </p>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>
                Let&apos;s Build Something <span className='gradient-text'>Amazing</span>
              </h3>
              <a 
                href="#contact"
                className='inline-flex items-center gap-3 px-8 py-4 
                         bg-gradient-to-r from-orange-500 to-orange-600 
                         text-white font-bold rounded-full mono text-sm
                         hover:from-orange-600 hover:to-orange-700 
                         hover:shadow-2xl hover:shadow-orange-500/50
                         transform hover:scale-105 transition-all duration-300'>
                <span>LET&apos;S WORK TOGETHER</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services