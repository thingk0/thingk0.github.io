import React, { useState, useRef, useEffect } from 'react'
import skillsData from '../../assets/data/skills.json'
import SectionTitle from '../ui/SectionTitle'

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillsData.categories[0].name)
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const [showRightGradient, setShowRightGradient] = useState(true)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current
      if (!container) return

      const { scrollLeft, scrollWidth, clientWidth } = container
      
      // Show left gradient if scrolled right
      setShowLeftGradient(scrollLeft > 10)
      
      // Show right gradient if not at the end
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10)
    }

    const container = scrollContainerRef.current
    if (container) {
      handleScroll() // Initial check
      container.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [])

  // Proficiency indicator component with half-fill support
  const ProficiencyDots = ({ level }) => {
    const totalDots = 5

    const getDotFillState = (index) => {
      const dotPosition = index + 1
      if (level >= dotPosition) {
        return 'full'
      } else if (level >= dotPosition - 0.5) {
        return 'half'
      }
      return 'empty'
    }

    return (
      <div className="flex gap-1">
        {Array.from({ length: totalDots }).map((_, index) => {
          const fillState = getDotFillState(index)
          
          return (
            <div key={index} className="relative w-2 h-2">
              {fillState === 'full' && (
                <div className="w-full h-full rounded-full bg-blue-500 transition-colors" />
              )}
              {fillState === 'half' && (
                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
                  <div className="w-1/2 h-full bg-blue-500" />
                </div>
              )}
              {fillState === 'empty' && (
                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-colors" />
              )}
            </div>
          )
        })}
      </div>
    )
  }

  // Skill card component
  const SkillCard = ({ skill }) => {
    return (
      <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 cursor-pointer group">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">{skill.name}</h4>

        {/* Proficiency Dots */}
        <ProficiencyDots level={skill.level} />
      </div>
    )
  }

  // Get active category data
  const activeCategory = skillsData.categories.find(cat => cat.name === activeTab)

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Skills" />

        {/* Tab Navigation */}
        <div className="relative mb-8">
          {/* Left gradient overlay */}
          {showLeftGradient && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10 transition-opacity duration-300"></div>
          )}
          
          {/* Right gradient overlay */}
          {showRightGradient && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10 transition-opacity duration-300"></div>
          )}
          
          <div ref={scrollContainerRef} className="flex gap-2 overflow-x-auto scrollbar-hide">
            {skillsData.categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${activeTab === category.name
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        {activeCategory && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {activeCategory.skills.map((skill, skillIndex) => (
                <SkillCard key={skillIndex} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
