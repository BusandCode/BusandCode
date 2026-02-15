import React, { useRef, useState, type FormEvent } from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

interface ContactOption {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  link: string
  linkText: string
  gradient: string
}

type SubmitStatus = 'success' | 'error' | null

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!form.current) return

    try {
      await emailjs.sendForm(
        'service_pqqdfam', 
        'template_woo6nvh', 
        form.current, 
        'FfJ54SALeKT2bohNB'
      )
      
      setSubmitStatus('success')
      form.current.reset()
      console.log('SUCCESS!')
      
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      setSubmitStatus('error')
      console.error('FAILED...', error)
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactOptions: ContactOption[] = [
    {
      icon: MdOutlineEmail,
      title: "EMAIL",
      value: "adetokunboandrew2@gmail.com",
      link: "mailto:adetokunboandrew2@gmail.com",
      linkText: "Send a message",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BsLinkedin,
      title: "LINKEDIN",
      value: "Adetokunbo Andrew",
      link: "https://www.linkedin.com/in/busandCode",
      linkText: "Connect with me",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      icon: FaGithub,
      title: "GITHUB",
      value: "AndrewToks",
      link: "https://github.com/BusandCode",
      linkText: "View profile",
      gradient: "from-purple-600 to-purple-400"
    }
  ]

  return (
    <>
      <style>{`
        @keyframes float-contact {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .contact-card {
          animation: float-contact 3s ease-in-out infinite;
        }
        
        .input-glow:focus {
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.2);
        }
      `}</style>

      <section id="contact" className="relative w-full py-20 md:py-32 px-4 bg-[#0a0e1a] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-20 left-10" />
          <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl bottom-20 right-10" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className='inline-block px-4 py-2 rounded-full glass-effect mb-4 border border-white/10'>
              <span className='text-orange-500 mono text-sm font-semibold'>GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can work together
            </p>
            <div className='w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mt-6' />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Options */}
            <div className="lg:col-span-4 space-y-6">
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon
                return (
                  <article 
                    key={index}
                    className="contact-card glass-effect p-6 rounded-2xl text-center 
                             border border-white/10 hover:border-orange-500/50
                             transition-all duration-500 hover:scale-105
                             hover:shadow-2xl hover:shadow-orange-500/20 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon with gradient background */}
                    <div className="relative inline-block mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} 
                                    opacity-20 blur-xl rounded-full`} />
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${option.gradient} 
                                    rounded-2xl flex items-center justify-center mx-auto
                                    group-hover:scale-110 group-hover:rotate-6 
                                    transition-all duration-300`}>
                        <IconComponent className="text-3xl text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-white text-sm font-bold mb-2 mono 
                                 group-hover:text-orange-400 transition-colors duration-300">
                      {option.title}
                    </h4>
                    <h5 className="text-gray-400 text-xs mb-4 break-words">{option.value}</h5>
                    <a 
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 
                               text-sm font-semibold transition-all duration-300 mono
                               group-hover:gap-3"
                    >
                      <span>{option.linkText}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
                className="space-y-6 glass-effect p-6 sm:p-10 rounded-3xl 
                         border border-white/10 hover:border-orange-500/30 
                         transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <label className="block text-sm font-bold mono text-gray-400 mb-2 
                                    group-focus-within:text-orange-400 transition-colors">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 bg-white/5 border-2 border-white/10
                               rounded-xl text-white placeholder-gray-500
                               focus:border-orange-500 focus:outline-none focus:bg-white/10
                               transition-all duration-300 input-glow hover:border-white/20"
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative group">
                    <label className="block text-sm font-bold mono text-gray-400 mb-2
                                    group-focus-within:text-orange-400 transition-colors">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="johndoe@example.com"
                      required
                      className="w-full px-5 py-4 bg-white/5 border-2 border-white/10
                               rounded-xl text-white placeholder-gray-500
                               focus:border-orange-500 focus:outline-none focus:bg-white/10
                               transition-all duration-300 input-glow hover:border-white/20"
                    />
                  </div>
                  
                  {/* Message Textarea */}
                  <div className="relative group">
                    <label className="block text-sm font-bold mono text-gray-400 mb-2
                                    group-focus-within:text-orange-400 transition-colors">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows={7}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-5 py-4 bg-white/5 border-2 border-white/10
                               rounded-xl text-white placeholder-gray-500 resize-none
                               focus:border-orange-500 focus:outline-none focus:bg-white/10
                               transition-all duration-300 input-glow hover:border-white/20"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                           text-white font-bold rounded-xl mono
                           hover:from-orange-600 hover:to-orange-700 hover:shadow-2xl 
                           hover:shadow-orange-500/50
                           focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                           focus:ring-offset-[#0a0e1a]
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300 transform hover:scale-105
                           flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-5 glass-effect border-2 border-green-500/50 rounded-xl 
                                bg-green-500/10 backdrop-blur-sm animate-fade-in-up">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-green-400 font-bold mb-1">SUCCESS!</p>
                        <p className="text-green-300 text-sm">
                          Message sent successfully! I&apos;ll get back to you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-5 glass-effect border-2 border-red-500/50 rounded-xl 
                                bg-red-500/10 backdrop-blur-sm animate-fade-in-up">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-red-400 font-bold mb-1">ERROR!</p>
                        <p className="text-red-300 text-sm">
                          Failed to send message. Please try again or contact me directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center">
            <div className="glass-effect border border-white/10 rounded-2xl p-8 inline-block">
              <p className="text-gray-400 mb-2 mono text-sm">PREFER EMAIL?</p>
              <a 
                href="mailto:adetokunboandrew2@gmail.com" 
                className="text-2xl font-bold gradient-text hover:scale-105 
                         transition-transform duration-300 inline-block"
              >
                adetokunboandrew2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact