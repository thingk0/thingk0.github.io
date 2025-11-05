import React from 'react'
import profileData from '../assets/data/profile.json'

const Contact = () => {
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
    profileData.linkedin && {
      icon: '🔗',
      label: 'LinkedIn',
      value: profileData.linkedin.replace('https://', ''),
      link: profileData.linkedin,
    },
  ].filter(Boolean)

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            새로운 기회나 협업 제안이 있으시다면 편하게 연락해주세요.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4 mb-12">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center gap-4 p-4 md:p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-3xl flex-shrink-0">{contact.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-lg text-gray-900 group-hover:text-blue-600 group-hover:underline decoration-2 underline-offset-2 transition-colors duration-200 break-all">
                    {contact.value}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8 border-t border-gray-200">
          <a
            href={`mailto:${profileData.email}`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            이메일 보내기
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
