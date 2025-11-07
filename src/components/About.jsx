import React, { useState, useEffect, useRef } from 'react'
import profileData from '../assets/data/profile.json'
import projectsData from '../assets/data/projects.json'
import skillsData from '../assets/data/skills.json'
import SectionTitle from './ui/SectionTitle'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  // 통계 데이터 계산
  const stats = [
    {
      number: '1Y+',
      label: '경력',
      icon: '💼'
    },
    {
      number: projectsData.length,
      label: '프로젝트',
      icon: '📁'
    },
    {
      number: profileData.awards?.length || 3,
      label: '수상 경력',
      icon: '🏆'
    },
    {
      number: skillsData.categories.reduce((sum, cat) => sum + cat.skills.length, 0),
      label: '기술 스택',
      icon: '⚙️'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="About Me" />

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 scroll-animate ${isVisible ? 'animate-slideInLeft' : ''}`}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{profileData.bio.intro}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              새로운 분야에 적극적으로 도전하고, 작은 성과에 안주하지 않으며,
              실패를 배움의 기회로 삼아 끊임없이 성장합니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              프로젝트를 주도적으로 기획·구현하며, 최적화와 확장 가능성을 고민하고,
              깔끔하고 효율적인 코드를 작성하기 위해 끊임없이 학습하고 발전하고 있습니다.
            </p>
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center scroll-animate ${isVisible ? 'animate-fadeInUpStagger' : ''}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`relative scroll-animate ${isVisible ? 'animate-slideInRight' : ''}`}>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/assets/portrait/selfie01.webp"
                alt="고명성 프로필 사진"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
