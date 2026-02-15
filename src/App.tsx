import React, { useState, useEffect } from 'react';
import About from './components/About';
import Services from './components/Services';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi"

const App: React.FC = () => {
  const jobTitles: string[] = [
    "SOFTWARE ENGINEER",
    "FRONTEND DEVELOPER", 
    "APP DEVELOPER",
    "GRAPHICS DESIGNER"
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => 
        (prevIndex + 1) % jobTitles.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [jobTitles.length])

  return (
    <>
      <Nav />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .space-font {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes border-dance {
          0%, 100% { border-color: rgba(59, 130, 246, 0.5); }
          50% { border-color: rgba(147, 51, 234, 0.5); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #fff 0%,
            #fff 40%,
            #3b82f6 50%,
            #fff 60%,
            #fff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-shimmer 3s linear infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }
        
        .glow-border {
          position: relative;
          border: 2px solid transparent;
          background: linear-gradient(#0f172a, #0f172a) padding-box,
                      linear-gradient(135deg, #3b82f6, #8b5cf6) border-box;
          animation: border-dance 3s ease infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
        
        .floating-blob {
          animation: blob-float 8s ease-in-out infinite;
        }
        
        .grid-background {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .spotlight {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(59, 130, 246, 0.08),
            transparent 40%
          );
        }
      `}</style>

      <section className='relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 
                        text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden'>
        
        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-40" />
        
        {/* Spotlight Effect */}
        <div 
          className="spotlight"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          } as React.CSSProperties}
        />
        
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] floating-blob"
            style={{ top: '10%', left: '10%' }}
          />
          <div 
            className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] floating-blob"
            style={{ bottom: '10%', right: '10%', animationDelay: '2s' }}
          />
          <div 
            className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[120px] floating-blob"
            style={{ top: '50%', right: '20%', animationDelay: '4s' }}
          />
        </div>

        {/* Main Content Container */}
        <div className='relative z-10 max-w-7xl mx-auto w-full py-20 md:py-32'>
          
          {/* Hero Grid Layout */}
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            
            {/* Left Column - Text Content */}
            <div className='space-y-8'>
              
              {/* Badge */}
              <div className='animate-scale-in delay-100'>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full 
                              bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm'>
                  <div className='relative w-2 h-2'>
                    <div className='absolute inset-0 rounded-full bg-blue-400 animate-ping' />
                    <div className='relative w-2 h-2 rounded-full bg-blue-400' />
                  </div>
                  <span className='text-sm font-medium text-blue-400 space-font'>
                    Open to opportunities
                  </span>
                </div>
              </div>
              
              {/* Main Heading */}
              <div className='space-y-4 animate-slide-up delay-200'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight'>
                  <span className='block text-gray-400 text-2xl sm:text-3xl font-normal mb-2 space-font'>
                    Hi, I'm
                  </span>
                  <span className='shimmer-text block'>
                    Andrew
                  </span>
                  <span className='shimmer-text block'>
                    Adetokunbo
                  </span>
                </h1>
              </div>
              
              {/* Animated Job Title */}
              <div className='animate-slide-up delay-300'>
                <div className='min-h-[80px] flex items-center'>
                  <h2 className='text-3xl sm:text-4xl font-bold space-font'>
                    <span 
                      className='gradient-text'
                      key={currentTitleIndex}
                      style={{
                        animation: 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {jobTitles[currentTitleIndex]}
                    </span>
                  </h2>
                </div>
              </div>
              
              {/* Description */}
              <div className='animate-slide-up delay-400'>
                <p className='text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl'>
                  Transforming ideas into elegant digital solutions. I specialize in building 
                  modern web applications with a focus on performance, accessibility, and 
                  exceptional user experiences.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className='flex flex-wrap gap-4 animate-slide-up delay-500'>
                <a 
                  href="#contact" 
                  className='group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 
                            font-semibold text-base hover:shadow-2xl hover:shadow-blue-500/50 
                            transition-all duration-300 flex items-center gap-2 space-font
                            hover:scale-105 active:scale-95'
                >
                  <FiMail className='w-5 h-5' />
                  <span>Get In Touch</span>
                  <FiArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </a>
                
                <a 
                  href="/adetokunbo-andrew-resume.pdf" 
                  download="Andrew Adetokunbo Resume.pdf"
                  className='px-8 py-4 rounded-xl bg-white/5 border border-white/10 
                            font-semibold text-base hover:bg-white/10 backdrop-blur-sm
                            transition-all duration-300 flex items-center gap-2 space-font
                            hover:scale-105 active:scale-95'
                >
                  <span>Download CV</span>
                  <FiDownload className='w-5 h-5' />
                </a>
              </div>
              
              {/* Stats */}
              <div className='grid grid-cols-3 gap-8 pt-8 animate-slide-up delay-600'>
                {[
                  { value: '2+', label: 'Years Experience' },
                  { value: '10+', label: 'Projects Completed' },
                  { value: '3', label: 'Happy Clients' }
                ].map((stat, idx) => (
                  <div key={idx} className='text-center lg:text-left'>
                    <div className='text-3xl sm:text-4xl font-bold gradient-text space-font'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-500 mt-1'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Profile Image */}
            <div className='flex justify-center lg:justify-end animate-scale-in delay-300'>
              <div className='relative group'>
                {/* Decorative Elements */}
                <div className='absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 
                              rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 
                              transition-opacity duration-500' />
                
                {/* Image Container */}
                <div className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] 
                              lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden
                              glow-border group-hover:scale-105 transition-transform duration-500'>
                  
                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 
                                mix-blend-overlay z-10' />
                  
                  {/* Profile Image */}
                  <img 
                    src="/busand.jpg" 
                    alt="Andrew Adetokunbo" 
                    className='w-full h-full object-cover'
                    loading="eager"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 px-6 py-3 rounded-2xl 
                              bg-slate-900 border border-blue-500/30 backdrop-blur-xl
                              shadow-xl shadow-blue-500/20'>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                    <span className='text-sm font-semibold text-white space-font'>
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Tag */}
          <div className='mt-16 flex justify-center lg:justify-start animate-slide-up delay-600'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-white/5 border border-white/10 backdrop-blur-sm'>
              <svg className='w-4 h-4 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
              </svg>
              <span className='text-sm text-gray-400'>Based in Nigeria</span>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <Services />
      <MyWorks />
      <Contact />
      <Footer />
    </>
  )
}

export default App