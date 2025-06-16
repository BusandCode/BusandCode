import React, { useState } from 'react'
import { FaCode, FaMobile, FaPaintBrush } from "react-icons/fa"
import Link from 'next/link'

const servicesData = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description: "Creating responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS to deliver exceptional user experiences.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript"]
  },
  {
    id: 2,
    icon: FaMobile,
    title: "Mobile App Development",
    description: "Building cross-platform mobile applications using React Native to bring your ideas to life on iOS and Android devices.",
    technologies: ["React Native", "Expo Go", "iOS", "Android"]
  },
  {
    id: 3,
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Designing eye-catching visuals, user interfaces, and brand identities that communicate your message effectively and leave a lasting impression.",
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
  }
]

const Services = () => {
  const [activeCard, setActiveCard] = useState(null)

  const handleCardInteraction = (serviceId) => {
    // Toggle active state - if already active, deactivate it
    setActiveCard(activeCard === serviceId ? null : serviceId)
  }

  return (
    <section className='py-16 bg-gray-900' id='service'>
      <div className='text-center max-w-[764px] mx-auto mb-16'>
        <h3 className='text-orange-500 text-lg font-medium mb-3'>
          What I Offer
        </h3>
        <h1 className='text-[36px] md:text-[48px] lg:text-[60px] font-normal text-center mb-8 text-white'>
          My <span className='text-orange-500'>Services</span>
        </h1>
        <p className='text-[18px] md:text-[20px] text-gray-400 leading-relaxed px-4'>
          I am a software engineer from Nigeria with 2 years of experience in multiple 
          companies like FlexiSaf, CodingKidsAfrica and BlizzCreative.
        </p>
      </div>

      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center'>
          {servicesData.map((service) => {
            const IconComponent = service.icon
            const isActive = activeCard === service.id
            
            return (
              <article 
                key={service.id}
                onClick={() => handleCardInteraction(service.id)}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-full max-w-[350px] h-auto min-h-[320px] cursor-pointer 
                         rounded-xl border-2 bg-gray-900/30 backdrop-blur-sm
                         flex flex-col gap-6 items-start p-6 group
                         transform transition-all duration-300 ease-in-out
                         ${isActive 
                           ? 'shadow-2xl shadow-orange-500/20 border-orange-400 bg-gray-800/40 -translate-y-2 scale-105' 
                           : 'border-gray-600 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400 hover:bg-gray-800/40 hover:-translate-y-2'
                         }`}
              >
                {/* Icon Container */}
                <div className='relative'>
                  <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 
                                rounded-xl flex items-center justify-center shadow-lg
                                transition-all duration-300
                                ${isActive 
                                  ? 'scale-110 rotate-3' 
                                  : 'group-hover:scale-110 group-hover:rotate-3'
                                }`}>
                    <IconComponent className='text-white text-2xl' />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 bg-orange-500/20 rounded-xl blur-xl 
                                transition-opacity duration-300 -z-10
                                ${isActive 
                                  ? 'opacity-100' 
                                  : 'opacity-0 group-hover:opacity-100'
                                }`}></div>
                </div>

                {/* Content */}
                <div className='flex flex-col gap-4 flex-grow'>
                  <h3 className={`font-semibold text-2xl transition-colors duration-300
                               ${isActive 
                                 ? 'text-orange-300' 
                                 : 'text-white group-hover:text-orange-300'
                               }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`font-normal text-[16px] leading-relaxed flex-grow
                              transition-colors duration-300
                              ${isActive 
                                ? 'text-gray-300' 
                                : 'text-gray-400 group-hover:text-gray-300'
                              }`}>
                    {service.description}
                  </p>

                  {/* Technology Tags */}
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {service.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 text-xs rounded-full border border-orange-500/20
                                 transition-all duration-300
                                 ${isActive 
                                   ? 'bg-orange-500/20 text-orange-200' 
                                   : 'bg-orange-500/10 text-orange-300 group-hover:bg-orange-500/20 group-hover:text-orange-200'
                                 }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow Indicator */}
                <div className={`absolute top-4 right-4 transition-all duration-300
                              ${isActive 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0'
                              }`}>
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

                {/* Mobile tap indicator */}
                <div className={`absolute bottom-4 right-4 md:hidden transition-all duration-300
                              ${isActive ? 'opacity-0' : 'opacity-60'}`}>
                  <div className='w-8 h-8 border-2 border-orange-400/40 rounded-full flex items-center justify-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-gray-400 mb-6'>
            Ready to bring your ideas to life?
          </p>
          <Link href="#contact"
          className='px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                           text-white font-medium rounded-full hover:from-orange-600 
                           hover:to-orange-700 transform hover:scale-105 transition-all 
                           duration-300 shadow-lg hover:shadow-xl
                           active:scale-95 active:shadow-md'>
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services