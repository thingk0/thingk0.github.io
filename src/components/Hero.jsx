import React from 'react'
import profileData from '../assets/data/profile.json'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Greeting */}
          <p className="text-blue-600 font-semibold text-lg mb-4">{profileData.greeting}</p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            저는{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {profileData.heroTitle}
            </span>
            입니다
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {profileData.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              연락하기
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
