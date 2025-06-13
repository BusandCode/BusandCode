"use client"
import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 bg-black/30 backdrop-blur-sm px-7 py-3 flex gap-3 rounded-full max-w-max">
      <a 
        href="#" 
        onClick={() => setActiveNav("#")}  
        className={`p-4 rounded-full flex text-gray-300 text-xl transition-all duration-300 hover:bg-black/30 ${
          activeNav === "#" ? "bg-orange-500 text-gray-900" : ""
        }`}
      >
        <AiOutlineHome />
      </a>
      
      <a 
        href="#about" 
        onClick={() => setActiveNav("#about")}  
        className={`p-4 rounded-full flex text-gray-300 text-xl transition-all duration-300 hover:bg-black/30 ${
          activeNav === "#about" ? "bg-orange-500 text-gray-900" : ""
        }`}
      >
        <AiOutlineUser />
      </a>
      
      <a 
        href="#service" 
        onClick={() => setActiveNav("#service")}  
        className={`p-4 rounded-full flex text-gray-300 text-xl transition-all duration-300 hover:bg-black/30 ${
          activeNav === "#service" ? "bg-orange-500 text-gray-900" : ""
        }`}
      >
        <BiBook />
      </a>
      
      <a 
        href="#portfolio" 
        onClick={() => setActiveNav("#portfolio")}  
        className={`p-4 rounded-full flex text-gray-300 text-xl transition-all duration-300 hover:bg-black/30 ${
          activeNav === "#portfolio" ? "bg-orange-500 text-gray-900" : ""
        }`}
      >
        <RiServiceLine />
      </a>
      
      <a 
        href="#contact" 
        onClick={() => setActiveNav("#contact")}  
        className={`p-4 rounded-full flex text-gray-300 text-xl transition-all duration-300 hover:bg-black/30 ${
          activeNav === "#contact" ? "bg-orange-500 text-gray-900" : ""
        }`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav