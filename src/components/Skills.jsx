import React, { useState } from 'react'
import skillsData from '../assets/data/skills.json'

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillsData.categories[0].name)

  // Convert skill level to dot count (1-5)
  const getLevelDots = (level) => {
    const levelMap = {
      'Advanced': 4,
      'Intermediate': 3,
      'Beginner': 1,
    }
    return levelMap[level] || 3
  }

  // Proficiency indicator component
  const ProficiencyDots = ({ level }) => {
    const filledDots = getLevelDots(level)
    const totalDots = 5

    return (
      <div className="flex gap-1">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index < filledDots ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  // Skill card component
  const SkillCard = ({ skill }) => {
    return (
      <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 cursor-pointer group">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <h4 className="text-sm font-semibold text-gray-900 text-center">{skill.name}</h4>

        {/* Proficiency Dots */}
        <ProficiencyDots level={skill.level} />
      </div>
    )
  }

  // Get active category data
  const activeCategory = skillsData.categories.find(cat => cat.name === activeTab)

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex gap-2 border-b border-gray-200 overflow-x-auto pb-4">
          {skillsData.categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === category.name
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category.name}
            </button>
          ))}
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
