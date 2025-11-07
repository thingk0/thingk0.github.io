import React, { useState } from 'react'
import profileData from '../assets/data/profile.json'

const Contact = () => {
  const [showToast, setShowToast] = useState(false)

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contactLinks = [
    {
      icon: '📧',
      label: 'Email',
      value: profileData.email,
      link: `mailto:${profileData.email}`,
    },
    profileData.github && {
      icon: '💼',
      label: 'GitHub',
      value: profileData.github.replace('https://', ''),
      link: profileData.github,
    },
    profileData.instagram && {
      icon: '📷',
      label: 'Instagram',
      value: profileData.instagram.replace('https://', ''),
      link: profileData.instagram,
    },
  ].filter(Boolean)

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            새로운 기회나 협업 제안이 있으시다면 편하게 연락해주세요.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map((contact, index) => (
            contact.label === 'Email' ? (
              <button
                key={index}
                onClick={handleEmailCopy}
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <span className="text-xl">{contact.icon}</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {contact.label}
                </span>
              </button>
            ) : (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-xl">{contact.icon}</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {contact.label}
                </span>
              </a>
            )
          ))}
        </div>

        {/* Toast Message */}
        {showToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg animate-fadeInUp z-50">
            <span className="font-medium">이메일이 복사되었습니다!</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
