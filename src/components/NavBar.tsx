import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from 'react-icons/bi'
import type { IconType } from 'react-icons'

interface NavItem {
  href: string;
  icon: IconType;
  label: string;
}

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("#")
  const [scrolled, setScrolled] = useState<boolean>(false)
  
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: NavItem[] = [
    { href: "#", icon: AiOutlineHome, label: "HOME" },
    { href: "#about", icon: AiOutlineUser, label: "ABOUT" },
    { href: "#service", icon: BiBook, label: "SERVICES" },
    { href: "#portfolio", icon: RiServiceLine, label: "PORTFOLIO" },
    { href: "#contact", icon: BiMessageSquareDetail, label: "CONTACT" }
  ]
  
  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.25); }
          50% { box-shadow: 0 0 25px rgba(99, 102, 241, 0.4); }
        }
        
        .nav-tooltip {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        
        .nav-item:hover .nav-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
        
        .active-indicator {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <nav className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 
                    transition-all duration-500 ${
                      scrolled 
                        ? 'scale-95' 
                        : 'scale-100'
                    }`}>
        {/* Main nav container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 
                        rounded-full blur-xl opacity-50" />
          
          {/* Nav bar */}
          <div className="relative glass-effect border border-white/8 px-6 py-3 
                        flex gap-2 rounded-full backdrop-blur-xl">
            {navItems.map((item: NavItem) => {
              const Icon = item.icon
              const isActive = activeNav === item.href
              
              return (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setActiveNav(item.href)}  
                  className="nav-item relative group"
                >
                  {/* Tooltip */}
                  <div className="nav-tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 
                                px-3 py-1.5 rounded-lg glass-effect border border-white/8 
                                whitespace-nowrap">
                    <span className="text-xs mono font-semibold text-indigo-400">
                      {item.label}
                    </span>
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                                  w-2 h-2 bg-gray-900/90 rotate-45 border-r border-b border-white/8" />
                  </div>
                  
                  {/* Icon button */}
                  <div className={`relative p-3.5 rounded-full flex items-center justify-center
                                text-xl transition-all duration-300 overflow-hidden
                                ${isActive 
                                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white active-indicator scale-110' 
                                  : 'text-gray-400 hover:text-white hover:bg-white/5 hover:scale-110'
                                }`}>
                    {/* Active background glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 
                                    opacity-50 blur-sm" />
                    )}
                    
                    {/* Icon */}
                    <Icon className="relative z-10" />
                  </div>
                  
                  {/* Active dot indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                                  w-1 h-1 bg-indigo-400 rounded-full" />
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;