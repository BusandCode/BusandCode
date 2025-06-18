"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const portfolioData = [
  {
    id: 1,
    title: "DailyLoad",
    image: "/dailyload.jpg",
    category: "Web Development",
    github: "https://github.com/BusandCode/DailyLoad",
    demo: "https://daily-load.vercel.app/",
    description: "A personal task tracker",
    stack:["Nextjs", "Tailwindcss", "Firebase"]
  },
  {
    id: 2,
    title: "Yotomi",
    image: "/yotomi.jpg",
    category: "Web Development",
    github: "https://github.com/BusandCode/yotomi-supermarket",
    demo: "https://yotomi-supermarket.vercel.app/",
    description: "E-commerce platform for supermarket",
    stack:["Nextjs", "Tailwindcss"]

  },
  {
    id: 3,
    title: "Travel guide",
    image: "/travel.jpg",
    category: "Web Development",
    github: "https://github.com/BusandCode/travel-guide",
    demo: "https://travel-guide-blush-seven.vercel.app/",
    description: "Interactive travel guide application",
    stack:["Reactjs", "CSS"]

  },
  {
    id: 4,
    title: "Estate Management",
    image: "/estate.jpg",
    category: "Web Development",
    github: "https://github.com/BusandCode/estate-management",
    demo: "https://real-estate-management-gray.vercel.app/",
    description: "",
    stack:["Nextjs", "Tailwindcss", "Firebase"]

  },
  {
    id: 5,
    title: "BMI Calculator",
    image: "/bmi.jpg",
    category: "Web Development",
    github: "https://github.com/BusandCode/bmi-calculator",
    demo: "https://bmi-calculator-lake-one.vercel.app/",
    description: "BMI is a screening tool that calculates the ratio of your weight to your height squared. ",
    stack:["ReactJs", "CSS"]

  },
  {
    id: 6,
    title: "Travel Guide",
    image: "/travel.jpg",
    category: "Web Development",
    github: "https://github.com/AndrewToks/travel-guide",
    demo: "https://travel-guide-demo.vercel.app/",
    description: "Interactive travel guide application",
    stack:["Nextjs", "Tailwindcss", "Firebase"]

  }
]

const MyWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [itemsVisible, setItemsVisible] = useState(1)
  const [isClient, setIsClient] = useState(false)

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1  // Mobile: 1 item
      if (window.innerWidth < 1024) return 2 // Tablet: 2 items
      return 3 // Desktop: 3 items
    }
    return 1 // Default to mobile for SSR
  }

  useEffect(() => {
    setIsClient(true)
    
    const updateItemsVisible = () => {
      const newItemsVisible = getItemsPerSlide()
      setItemsVisible(newItemsVisible)
      
      // Ensure current slide is within bounds when screen size changes
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

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(0)
  }

  const handleTouchMove = (e) => {
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

  // Render portfolio card component
  const renderPortfolioCard = (item) => (
    <div
      key={item.id}
      className="w-full bg-gray-900/30 backdrop-blur-sm rounded-2xl px-4 py-8 sm:p-6 
                border border-gray-700 hover:border-orange-500/50 
                transition-all duration-300 hover:transform hover:scale-105
                hover:shadow-xl hover:shadow-orange-500/10
                flex flex-col group"
    >
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden bg-gray-700">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/work-1.png'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-orange-500 text-sm font-medium mb-3">
            {item.category}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Technology Stack Tags - Same styling as Services */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {item.stack.map((tech, index) => (
              <span 
                key={index}
                className='px-3 py-1 text-xs rounded-full border border-orange-500/20
                         bg-orange-500/10 text-orange-300 
                         group-hover:bg-orange-500/20 group-hover:text-orange-200
                         transition-all duration-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 border border-orange-500/50 text-orange-500 
                     rounded-xl text-center text-sm font-medium
                     hover:bg-orange-500 hover:text-white hover:border-orange-500
                     transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
          >
            GitHub
          </Link>
          <Link
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 
                     text-white rounded-xl text-center text-sm font-medium
                     hover:from-orange-600 hover:to-orange-700 hover:shadow-lg 
                     hover:shadow-orange-500/25 transition-all duration-300"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  )

  // SSR fallback - show first few items in a grid
  if (!isClient) {
    return (
      <section className="py-8 sm:py-16" id="portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-orange-500 text-lg font-medium mb-3">Portfolio</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My Latest <span className="text-orange-500">Work</span>
            </h1>
            <p className="text-gray-400 px-4 sm:p-5 text-base sm:text-lg max-w-[400px] lg:max-w-2xl mx-auto">
              Welcome to my web development portfolio! Explore a collection of projects showcasing
              my expertise in front-end development.
            </p>
          </div>

          {/* Static Grid for SSR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {portfolioData.slice(0, 3).map(renderPortfolioCard)}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 sm:py-16 px-4" id="portfolio">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-orange-500 text-lg font-medium mb-3">Portfolio</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My Latest <span className="text-orange-500">Work</span>
          </h1>
          <p className="text-gray-400 px-4 sm:p-5 text-base sm:text-lg max-w-[400px] lg:max-w-2xl mx-auto">
            Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in front-end development.
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative max-w-6xl w-full mx-auto">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
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
                    className="flex-shrink-0"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className={`
                      grid gap-6 px-2 h-full
                      ${itemsVisible === 1 ? 'grid-cols-1 max-w-sm mx-auto' : ''}
                      ${itemsVisible === 2 ? 'grid-cols-2 max-w-3xl mx-auto' : ''}
                      ${itemsVisible === 3 ? 'grid-cols-3 max-w-5xl mx-auto' : ''}
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
                className="hidden lg:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 
                         bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full 
                         items-center justify-center hover:from-orange-600 hover:to-orange-700 
                         transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 
                         bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full 
                         items-center justify-center hover:from-orange-600 hover:to-orange-700 
                         transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Mobile Navigation Arrows */}
          {totalSlides > 1 && (
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full 
                         flex items-center justify-center hover:from-orange-600 hover:to-orange-700 
                         transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full 
                         flex items-center justify-center hover:from-orange-600 hover:to-orange-700 
                         transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 mt-8 sm:mt-12">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-orange-500 shadow-lg shadow-orange-500/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MyWorks