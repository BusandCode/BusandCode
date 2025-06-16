import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-12 text-center text-sm mt-28 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Logo */}
        <a href="#" className='text-orange-500 text-3xl font-medium mb-8 inline-block hover:text-orange-400 transition-colors duration-300'>
          BusandCode
        </a>
        
        {/* Navigation Links */}
        <ul className="flex justify-center flex-wrap gap-8 mx-auto mb-12 text-gray-300">
          <li>
            <a href="#" className='hover:text-orange-400 transition-colors duration-300'>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className='hover:text-orange-400 transition-colors duration-300'>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className='hover:text-orange-400 transition-colors duration-300'>
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className='hover:text-orange-400 transition-colors duration-300'>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className='hover:text-orange-400 transition-colors duration-300'>
              Contact
            </a>
          </li>
        </ul>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a 
            href="https://facebook.com" 
            className='bg-gray-800 text-white p-3 rounded-xl border border-gray-700 hover:bg-transparent hover:text-orange-400 hover:border-orange-400 transition-all duration-300 hover:scale-110'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className='text-lg' />
          </a>
          <a 
            href="https://instagram.com" 
            className='bg-gray-800 text-white p-3 rounded-xl border border-gray-700 hover:bg-transparent hover:text-orange-400 hover:border-orange-400 transition-all duration-300 hover:scale-110'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className='text-lg' />
          </a>
          <a 
            href="https://twitter.com" 
            className='bg-gray-800 text-white p-3 rounded-xl border border-gray-700 hover:bg-transparent hover:text-orange-400 hover:border-orange-400 transition-all duration-300 hover:scale-110'
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter className='text-lg' />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-gray-400 mb-16">
          <small>&copy; Adetokunbo Andrew. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer