import React, { useState, useEffect } from 'react';
import About from './components/About';
import Services from './components/Services';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import { FiDownload } from "react-icons/fi"

const App: React.FC = () => {
  const jobTitles: string[] = [
    "SOFTWARE ENGINEER",
    "FRONTEND DEVELOPER", 
    "APP DEVELOPER",
    "GRAPHICS DESIGNER"
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0)
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * {
          font-family: 'Syne', sans-serif;
        }
        
        .mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        @keyframes linear-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
          100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        
        .linear-text {
          background: linear-linear(135deg, #6366f1, #8b5cf6, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: linear-shift 4s ease infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .mesh-linear {
          background: 
            radial-linear(at 25% 25%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
            radial-linear(at 75% 75%, rgba(139, 92, 246, 0.08) 0px, transparent 50%),
            radial-linear(at 50% 50%, rgba(167, 139, 250, 0.06) 0px, transparent 50%);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.15);
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.02;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .profile-glow {
          animation: pulse-ring 3s ease-in-out infinite;
        }
        
        .title-transition {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <section className='relative w-full min-h-screen bg-[#0a0d1f] text-white flex flex-col 
      justify-center gap-12 md:gap-16 items-center pt-32 pb-16 px-4 overflow-hidden'>
        
        {/* Noise Overlay */}
        <div className="noise-overlay" />

        {/* Animated Background */}
        <div className="fixed inset-0 mesh-linear pointer-events-none" />
        
        {/* Floating Orbs - More Subtle */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
            style={{ 
              top: '15%', 
              left: '15%',
              animation: 'float 10s ease-in-out infinite',
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            style={{ 
              bottom: '25%', 
              right: '15%',
              animation: 'float 12s ease-in-out infinite',
              animationDelay: '3s',
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className='relative z-10 flex flex-col justify-center gap-8 md:gap-10 items-center max-w-6xl mx-auto'>
          
          {/* Profile Image Section */}
          <div className='flex flex-col justify-center gap-6 items-center animate-fade-in-up stagger-1'>
            <div className='relative'>
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full profile-glow" />
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-xl" />
              
              {/* Image container */}
              <div className='relative w-45 h-45 md:w-55 md:h-55 rounded-full 
                            glass-effect p-2 hover:scale-105 transition-transform duration-500'>
                <img 
                  src="/busand.jpg" 
                  alt="Andrew Adetokunbo" 
                  width={220} 
                  height={220} 
                  className='w-full h-full rounded-full object-cover'
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Status Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect'>
              <div className='w-2 h-2 rounded-full bg-indigo-400 animate-pulse' />
              <span className='text-sm mono text-gray-400'>AVAILABLE FOR WORK</span>
            </div>
          </div>
          
          {/* Main Text Section */}
          <div className='flex flex-col justify-center gap-8 md:gap-10 items-center text-center w-full animate-fade-in-up stagger-2'>
            {/* Greeting */}
            <div className='space-y-2'>
              <p className='text-lg md:text-xl text-gray-500 mono'>HEY THERE, I&apos;M</p>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-100'>
                ANDREW ADETOKUNBO
              </h1>
            </div>
            
            {/* Animated Job Title */}
            <div className='min-h-[120px] md:min-h-[140px] flex items-center justify-center'>
              <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-[90%] md:max-w-[600px]'>
                <span 
                  className='inline-block linear-text title-transition'
                  key={currentTitleIndex}
                  style={{
                    animation: 'fade-in-up 0.5s ease-out'
                  }}
                >
                  {jobTitles[currentTitleIndex]}
                </span>
                <br />
                <span className='text-2xl md:text-3xl lg:text-4xl text-gray-500 font-normal'>
                  based in Nigeria
                </span>
              </h2>
            </div>
            
            {/* Description */}
            <div className='max-w-[90%] md:max-w-[650px] animate-fade-in-up stagger-3'>
              <p className='text-gray-400 text-lg md:text-xl leading-relaxed'>
                Software engineer with 2+ years of experience crafting exceptional digital experiences. 
                Specializing in frontend development with a passion for clean code and stunning interfaces.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-[90%] md:max-w-[500px] animate-fade-in-up stagger-4'>
              <a 
                href="#contact" 
                className='w-full md:w-auto px-8 py-4 rounded-full 
                          bg-linear-to-r from-indigo-500 to-purple-600 
                          font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/30 
                          transition-all duration-300 transform hover:scale-[1.02] mono'
              >
                LET&apos;S CONNECT
              </a>
              
              <a 
                href="/adetokunbo-andrew-resume.pdf" 
                download="Andrew Adetokunbo Resume.pdf"
                className='w-full md:w-auto px-8 py-4 rounded-full glass-effect 
                          font-bold text-lg hover:bg-white/5 border border-gray-800
                          transition-all duration-300 flex items-center justify-center gap-3 mono'
              >
                <span>DOWNLOAD CV</span>
                <FiDownload className='text-indigo-400' />
              </a>
            </div>
            
            {/* Stats Grid */}
            <div className='grid grid-cols-3 gap-6 md:gap-12 pt-8 animate-fade-in-up stagger-5'>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold linear-text'>2+</div>
                <div className='text-sm text-gray-600 mono mt-1'>YEARS EXP</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold linear-text'>10+</div>
                <div className='text-sm text-gray-600 mono mt-1'>PROJECTS</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold linear-text'>3</div>
                <div className='text-sm text-gray-600 mono mt-1'>COMPANIES</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up stagger-5'>
            <div className='flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity'>
              <span className='text-xs mono text-gray-500'>SCROLL DOWN</span>
              <div className='w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-2'>
                <div className='w-1 h-2 bg-indigo-400 rounded-full animate-bounce' />
              </div>
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