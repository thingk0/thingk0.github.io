import React, { useState } from 'react'
import profileData from '../assets/data/profile.json'

const Footer = () => {
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

  const socialLinks = [
    { name: 'GitHub', url: profileData.github, icon: '💼', type: 'link' },
    { name: 'Instagram', url: profileData.instagram, icon: '📷', type: 'link' },
    { name: 'Email', url: profileData.email, icon: '📧', type: 'email' },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400">
              {profileData.heroDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  스킬
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  프로젝트
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              새로운 기회나 협업 제안이 있으시다면 편하게 연락해주세요.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                link.type === 'email' ? (
                  <button
                    key={index}
                    onClick={handleEmailCopy}
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    title="이메일 복사"
                  >
                    <span className="text-2xl">{link.icon}</span>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                    title={link.name}
                  >
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg animate-fadeInUp z-50">
          <span className="font-medium">이메일이 복사되었습니다!</span>
        </div>
      )}
    </footer>
  )
}

export default Footer
