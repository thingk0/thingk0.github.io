import React from 'react'

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: '💻',
      items: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Python', 'Express', 'Django', 'REST API'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Database',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Tools',
      icon: '🛠️',
      items: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{skill.icon}</div>

              {/* Category */}
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.category}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
