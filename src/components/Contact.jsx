import React from 'react'
import profileData from '../assets/data/profile.json'

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: profileData.email,
      link: `mailto:${profileData.email}`,
      gradient: 'from-blue-500 to-cyan-500',
    },
    profileData.github && {
      icon: '💼',
      label: 'GitHub',
      value: profileData.github.replace('https://', ''),
      link: profileData.github,
      gradient: 'from-gray-700 to-gray-900',
    },
    profileData.linkedin && {
      icon: '🔗',
      label: 'LinkedIn',
      value: profileData.linkedin.replace('https://', ''),
      link: profileData.linkedin,
      gradient: 'from-blue-600 to-blue-800',
    },
  ].filter(Boolean)

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            프로젝트 제안이나 협업 문의는 언제든지 환영합니다!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-5xl mb-4">{contact.icon}</div>
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}>
                {contact.label}
              </h3>
              <p className="text-gray-600 text-sm break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 text-lg mb-4">
              함께 멋진 프로젝트를 만들어보실래요?
            </p>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              이메일 보내기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
