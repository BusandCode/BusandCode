"use client"
import React, { useRef, useState } from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.sendForm(
        'service_pqqdfam', 
        'template_woo6nvh', 
        form.current, 
        {
          publicKey: 'FfJ54SALeKT2bohNB',
        }
      )
      
      setSubmitStatus('success')
      e.target.reset()
      console.log('SUCCESS!')
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      setSubmitStatus('error')
      console.log('FAILED...', error.text)
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactOptions = [
    {
      icon: MdOutlineEmail,
      title: "Email",
      value: "adetokunboandrew2@gmail.com",
      link: "mailto:adetokunboandrew2@gmail.com",
      linkText: "Send a message"
    },
    {
      icon: BsLinkedin,
      title: "LinkedIn",
      value: "Adetokunbo Andrew",
      link: "https://www.linkedin.com/in/busandCode",
      linkText: "Send a message"
    },
    {
      icon: FaGithub,
      title: "Github",
      value: "AndrewToks",
      link: "https://github.com/BusandCode",
      linkText: "View Profile"
    }
  ]
  // bg-gray-900

  return (
    <section id="contact" className="w-full mb-32 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h5 className="text-orange-500 text-lg font-medium mb-3">Get In Touch</h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Options */}
          <div className="lg:col-span-4 space-y-6">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <article 
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl text-center 
                           border border-gray-700 hover:border-orange-500/50
                           transition-all duration-300 hover:bg-transparent group"
                >
                  <IconComponent className="text-2xl text-orange-500 mx-auto mb-3 
                                         group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white text-lg font-semibold mb-2">{option.title}</h4>
                  <h5 className="text-gray-400 text-sm mb-4">{option.value}</h5>
                  <a 
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-orange-500 hover:text-orange-400 
                             text-sm font-medium transition-colors duration-300
                             hover:underline"
                  >
                    {option.linkText}
                  </a>
                </article>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="space-y-6 bg-gray-900/30 backdrop-blur-sm  p-6 sm:p-8 
                       rounded-xl border border-gray-700"
            >
              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="w-full px-4 py-4 bg-transparent border-2 border-gray-600 
                             rounded-lg text-white placeholder-gray-400 font-poppins
                             focus:border-orange-500 focus:outline-none transition-colors duration-300
                             hover:border-gray-500"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-4 bg-transparent border-2 border-gray-600 
                             rounded-lg text-white placeholder-gray-400 font-poppins
                             focus:border-orange-500 focus:outline-none transition-colors duration-300
                             hover:border-gray-500"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    rows={7}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-4 bg-transparent border-2 border-gray-600 
                             rounded-lg text-white placeholder-gray-400 font-poppins resize-none
                             focus:border-orange-500 focus:outline-none transition-colors duration-300
                             hover:border-gray-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                         text-white font-semibold rounded-lg font-poppins
                         hover:from-orange-600 hover:to-orange-700 
                         focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className=" animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm font-medium">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact