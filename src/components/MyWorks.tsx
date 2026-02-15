import React, { useState, useEffect, type TouchEvent } from 'react'

interface PortfolioItem {
  id: number
  title: string
  image: string
  category: string
  github: string
  demo: string
  description: string
  stack: string[]
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "DAILYLOAD",
    image: "/dailyload.jpg",
    category: "WEB APP",
    github: "https://github.com/BusandCode/DailyLoad",
    demo: "https://daily-load.vercel.app/",
    description: "A modern task management application designed to boost productivity and help users organize their daily workflow efficiently. Features real-time updates, priority tagging, and progress tracking to keep you focused on what matters most.",
    stack:["Next.js", "Tailwind CSS", "Firebase", "TypeScript"]
  },
  {
    id: 2,
    title: "YOTOMI",
    image: "/yotomi.jpg",
    category: "E-COMMERCE",
    github: "https://github.com/BusandCode/yotomi-supermarket",
    demo: "https://yotomi-supermarket.vercel.app/",
    description: "Full-featured online supermarket platform with intuitive shopping cart, advanced product filtering, and seamless checkout experience. Built with modern web technologies for lightning-fast performance and mobile-first responsive design.",
    stack:["Next.js", "Tailwind CSS", "React Context", "Framer Motion"]
  },
  {
    id: 3,
    title: "READEVOLVE",
    image: "/readEvolve.jpg",
    category: "EDUCATION",
    github: "https://github.com/BusandCode/readEvolve-app",
    demo: "https://read-evolve-app.vercel.app/",
    description: "An innovative educational platform that transforms the learning experience with interactive content, progress tracking, and personalized learning paths. Designed to make education more engaging and accessible for modern learners.",
    stack:["React", "Tailwind CSS", "GlueStack UI", "React Router"]
  },
  {
    id: 4,
    title: "TRAVEL GUIDE",
    image: "/travel.jpg",
    category: "WEB APP",
    github: "https://github.com/BusandCode/travel-guide",
    demo: "https://travel-guide-blush-seven.vercel.app/",
    description: "Your ultimate travel companion featuring destination guides, interactive maps, and curated travel recommendations. Explore the world with detailed insights, local tips, and beautifully designed interfaces that inspire wanderlust.",
    stack:["React", "CSS3", "React Hooks", "API Integration"]
  },
  {
    id: 5,
    title: "ESTATE HUB",
    image: "/estate.jpg",
    category: "REAL ESTATE",
    github: "https://github.com/BusandCode/estate-management",
    demo: "https://real-estate-management-gray.vercel.app/",
    description: "Comprehensive property management solution with advanced search filters, virtual tours, and detailed property listings. Streamlines the real estate browsing experience with intuitive navigation and rich property information.",
    stack:["React", "CSS3", "React Context", "Responsive Design"]
  },
  {
    id: 6,
    title: "BMI CALC",
    image: "/bmi.jpg",
    category: "HEALTH",
    github: "https://github.com/BusandCode/bmi-calculator",
    demo: "https://bmi-calculator-lake-one.vercel.app/",
    description: "Smart health tracking tool that calculates Body Mass Index with personalized health insights and recommendations. Features clean UI, instant calculations, and helpful health tips to support your wellness journey.",
    stack:["React", "CSS3", "Chart.js", "Local Storage"]
  }
]

const MyWorks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)
  const [itemsVisible, setItemsVisible] = useState<number>(1)
  const [isClient] = useState<boolean>(false)

  const getItemsPerSlide = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 1
  }

  useEffect(() => {
    const updateItemsVisible = () => {
      const newItemsVisible = getItemsPerSlide()
      setItemsVisible(newItemsVisible)
      
      const newTotalSlides = Math.ceil(portfolioData.length / newItemsVisible)
      setCurrentSlide(prev => prev >= newTotalSlides ? 0 : prev)
    }

    updateItemsVisible()

    const handleResize = () => {
      updateItemsVisible()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(portfolioData.length / itemsVisible)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(0)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  const renderPortfolioCard = (item: PortfolioItem) => (
    <div
      key={item.id}
      className="w-full glass-effect rounded-3xl overflow-hidden border border-white/5
                hover:border-indigo-500/30 transition-all duration-500 
                hover:transform hover:scale-[1.02] hover:shadow-2xl 
                hover:shadow-indigo-500/15 flex flex-col group h-full"
    >
      {/* Project Image - Now Much Larger */}
      <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1f] via-[#0a0d1f]/40 to-transparent 
                      opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10" />
        
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 
                   group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/work-1.png'
          }}
        />
        
        {/* Category badge - Repositioned */}
        <div className="absolute top-6 right-6 z-20">
          <span className="px-4 py-2 rounded-full glass-effect text-xs mono font-bold 
                         text-indigo-400 border border-indigo-500/30 backdrop-blur-xl">
            {item.category}
          </span>
        </div>

        {/* Title Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 
                       group-hover:text-indigo-400 transition-colors duration-300 mono">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col grow p-6">
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Technology Stack */}
        <div className='mb-6'>
          <div className='flex items-center gap-2 mb-3'>
            <svg className='w-4 h-4 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} 
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
            </svg>
            <span className='text-xs mono font-bold text-gray-500'>TECH STACK</span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {item.stack.map((tech, index) => (
              <span 
                key={index}
                className='px-3 py-1.5 text-xs rounded-full border border-indigo-500/30
                         bg-indigo-500/10 text-indigo-300 mono font-medium
                         group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50
                         transition-all duration-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-6' />

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-4 glass-effect border border-indigo-500/30 
                     text-indigo-400 rounded-xl text-center text-sm font-bold mono
                     hover:bg-indigo-500 hover:text-white hover:border-indigo-500
                     transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20
                     flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" 
                 fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>VIEW CODE</span>
          </a>
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 
                     text-white rounded-xl text-center text-sm font-bold mono
                     hover:shadow-xl hover:shadow-indigo-500/40
                     transition-all duration-300 hover:scale-[1.02]
                     flex items-center justify-center gap-2 group/btn relative overflow-hidden"
          >
            {/* Shine effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          translate-x-[-200%] group-hover/btn:translate-x-[200%] 
                          transition-transform duration-700' />
            <svg className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className='relative z-10'>LIVE DEMO</span>
          </a>
        </div>
      </div>
    </div>
  )

  if (!isClient) {
    return (
      <section className="relative py-20 md:py-32 bg-[#0a0d1f]" id="portfolio">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl top-20 right-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className='inline-block px-4 py-2 rounded-full glass-effect mb-4'>
              <span className='text-indigo-400 mono text-sm font-semibold'>PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, where creativity meets functionality
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioData.slice(0, 3).map(renderPortfolioCard)}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 md:py-32 bg-[#0a0d1f] px-4" id="portfolio">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl top-20 right-10" />
        <div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl bottom-20 left-10" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className='inline-block px-4 py-2 rounded-full glass-effect mb-4'>
            <span className='text-indigo-400 mono text-sm font-semibold'>PORTFOLIO</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, where creativity meets functionality
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6' />
        </div>

        {/* Portfolio Slider */}
        <div className="relative max-w-7xl w-full mx-auto">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {/* Generate slides */}
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const startIndex = slideIndex * itemsVisible
                const endIndex = startIndex + itemsVisible
                const slideItems = portfolioData.slice(startIndex, endIndex)

                return (
                  <div 
                    key={slideIndex}
                    className="shrink-0"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className={`
                      grid gap-6 px-2 h-full
                      ${itemsVisible === 1 ? 'grid-cols-1 max-w-lg mx-auto' : ''}
                      ${itemsVisible === 2 ? 'grid-cols-2 max-w-4xl mx-auto' : ''}
                      ${itemsVisible === 3 ? 'grid-cols-3 max-w-6xl mx-auto' : ''}
                    `}>
                      {slideItems.map(renderPortfolioCard)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-17.5 top-1/2 -translate-y-1/2 
                         w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 
                         text-white rounded-full items-center justify-center 
                         hover:shadow-xl hover:shadow-indigo-500/30
                         transition-all duration-300 z-10 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-17.5 top-1/2 -translate-y-1/2 
                         w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 
                         text-white rounded-full items-center justify-center 
                         hover:shadow-xl hover:shadow-indigo-500/30
                         transition-all duration-300 z-10 hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Mobile Navigation */}
          {totalSlides > 1 && (
            <div className="flex lg:hidden justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 
                         text-white rounded-full flex items-center justify-center 
                         hover:shadow-xl hover:shadow-indigo-500/30
                         transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 
                         text-white rounded-full flex items-center justify-center 
                         hover:shadow-xl hover:shadow-indigo-500/30
                         transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 
                     glass-effect border border-indigo-500/30 text-indigo-400 
                     rounded-full font-bold mono text-sm
                     hover:bg-indigo-500 hover:text-white
                     transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
          >
            <span>WANT TO SEE MORE?</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyWorks