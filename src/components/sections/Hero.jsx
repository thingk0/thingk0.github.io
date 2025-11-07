import React from 'react'
import profileData from '../../assets/data/profile.json'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Greeting */}
          <p className="text-gray-900 dark:text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-4 text-center">{profileData.greeting}</p>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-center break-words leading-relaxed">
            <span className="text-gray-900 dark:text-white">저는</span>{' '}
            <span className="relative inline-block">
              <span className="text-transparent select-none">
                {profileData.name}
              </span>
              <span className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradientFadeIn">
                {profileData.name}
              </span>
            </span>{' '}
            <span className="text-gray-900 dark:text-white">입니다</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 sm:mb-16 md:mb-20 text-center break-words leading-relaxed">
            <span className="text-gray-600 dark:text-gray-300">BE &</span>{' '}
            <span className="relative inline-block">
              <span className="text-transparent select-none">
                AI Agent
              </span>
              <span className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradientFadeIn-delay">
                AI Agent
              </span>
            </span>{' '}
            <span className="text-gray-600 dark:text-gray-300">Engineer</span>
          </h2>

          {/* Quote */}
          <div className="mt-8 mb-16 max-w-5xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 italic mb-2 px-4 break-words">
              "{profileData.heroQuote}"
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 dark:text-gray-500">
              – {profileData.heroQuoteAuthor}
            </p>
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
