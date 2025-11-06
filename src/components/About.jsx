import React from 'react'
import profileData from '../assets/data/profile.json'
import projectsData from '../assets/data/projects.json'
import skillsData from '../assets/data/skills.json'

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">안녕하세요!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              저는 열정적인 개발자입니다. 새로운 기술을 배우고 문제를 해결하는 것을 즐기며,
              항상 더 나은 코드를 작성하기 위해 노력합니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하기 위해
              끊임없이 학습하고 발전하고 있습니다.
            </p>
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
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
