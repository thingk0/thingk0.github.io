import React, { useState } from 'react'
import profileData from '../assets/data/profile.json'
import SectionTitle from './ui/SectionTitle'

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
    <section id="contact" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <SectionTitle
          title="Let's Connect"
          subtitle="새로운 기회나 협업 제안이 있으시다면 편하게 연락해주세요."
          subtitleSize="xl"
          dividerWidth="wide"
          spacing="compact"
        />

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map((contact, index) => (
            contact.label === 'Email' ? (
              <button
                key={index}
                onClick={handleEmailCopy}
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <span className="text-xl">{contact.icon}</span>
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {contact.label}
                </span>
              </button>
            ) : (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-xl">{contact.icon}</span>
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
