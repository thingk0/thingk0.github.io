import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="text-gray-700">문제 해결</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-gray-700">목표 지향적</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-gray-700">빠른 학습</span>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">👨‍💻</span>
                <p className="text-gray-600 font-medium">프로필 이미지</p>
              </div>
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
