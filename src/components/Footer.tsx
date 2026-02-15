import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"
import type { IconType } from 'react-icons'

interface NavLink {
  href: string
  label: string
}

interface SocialLink {
  href: string
  icon: IconType
  label: string
  color: string
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  const navLinks: NavLink[] = [
    { href: "#", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#service", label: "SERVICES" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#contact", label: "CONTACT" }
  ]
  
  const socialLinks: SocialLink[] = [
    { href: "https://github.com", icon: FaGithub, label: "GitHub", color: "hover:text-purple-400 hover:border-purple-400" },
    { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400" },
    { href: "https://twitter.com", icon: IoLogoTwitter, label: "Twitter", color: "hover:text-cyan-400 hover:border-cyan-400" },
    { href: "https://instagram.com", icon: FiInstagram, label: "Instagram", color: "hover:text-pink-400 hover:border-pink-400" },
    { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook", color: "hover:text-blue-500 hover:border-blue-500" }
  ]

  return (
    <>
      <style>{`
        .footer-link {
          position: relative;
          overflow: hidden;
        }
        
        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #f7931e);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::before {
          width: 100%;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float-slow 3s ease-in-out infinite;
        }
      `}</style>

      <footer className='relative w-full bg-[#0a0e1a] py-16 text-center overflow-hidden'>
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl bottom-0 left-1/4" />
          <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl bottom-0 right-1/4" />
        </div>

        {/* Gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

        <div className='relative w-full max-w-6xl mx-auto px-4 space-y-12'>
          {/* Logo Section */}
          <div className='flex flex-col items-center gap-4'>
            <a 
              href="#" 
              className='group relative inline-block'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 
                            rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
              <div className='relative text-4xl md:text-5xl font-bold mono gradient-text 
                            hover:scale-105 transition-transform duration-300'>
                BUSANDCODE
              </div>
            </a>
            <p className='text-gray-400 max-w-md mono text-sm'>
              Crafting digital experiences through code and creativity
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav>
            <ul className="flex justify-center flex-wrap gap-6 md:gap-8 mx-auto text-gray-300">
              {navLinks.map((link, index) => (
                <li key={link.href} 
                    className='float-animation'
                    style={{ animationDelay: `${index * 0.1}s` }}>
                  <a 
                    href={link.href} 
                    className='footer-link text-sm md:text-base mono font-semibold 
                             hover:text-orange-400 transition-colors duration-300 pb-1'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Social Media Links */}
          <div className="space-y-4">
            <p className='text-gray-400 mono text-sm font-semibold'>CONNECT WITH ME</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.href}
                    href={social.href} 
                    className={`glass-effect border border-white/10 text-white p-4 rounded-xl
                               hover:bg-white/5 ${social.color}
                               transition-all duration-300 hover:scale-110 hover:shadow-lg
                               group relative overflow-hidden`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover gradient effect */}
                    <div className='absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 
                                  group-hover:from-orange-500/10 group-hover:to-transparent 
                                  transition-all duration-300' />
                    <Icon className='text-xl relative z-10' />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div className='w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
          
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-gray-400 mono text-sm">
              © {currentYear} <span className='text-orange-500 font-semibold'>ADETOKUNBO ANDREW</span>
            </p>
            <p className='text-gray-500 text-xs'>
              Designed & Built with <span className='text-red-500'>♥</span> in Nigeria
            </p>
          </div>

          {/* Back to top button */}
          <div className='pt-4'>
            <a 
              href="#" 
              className='inline-flex items-center gap-2 px-6 py-3 glass-effect 
                       border border-orange-500/30 text-orange-400 rounded-full
                       hover:border-orange-500/50 hover:bg-orange-500/10
                       transition-all duration-300 hover:scale-105 group mono text-sm font-bold'
            >
              <svg 
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              BACK TO TOP
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer