import React, { useState, useEffect, useRef } from 'react'
import careerData from '../../assets/data/career.json'
import educationData from '../../assets/data/education.json'
import awardsData from '../../assets/data/awards.json'
import certificationsData from '../../assets/data/certifications.json'
import skillsData from '../../assets/data/skills.json'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import SkillBadge from '../ui/SkillBadge'

const Career = () => {
  const [activePositions, setActivePositions] = useState(
    careerData?.map((job) => {
      // Find the latest position (current position)
      return job.positions?.length > 0 ? job.positions.length - 1 : 0
    }) || []
  )
  const [visibleItems, setVisibleItems] = useState(new Set())
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]))
          }
        },
        { threshold: 0.1 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [careerData, educationData, awardsData])

  const setItemRef = (index) => (el) => {
    itemRefs.current[index] = el
  }
  // Helper function to get skill icon from skills.json
  const getSkillIcon = (skillName) => {
    for (const category of skillsData.categories) {
      const skill = category.skills.find(s =>
        s.name.toLowerCase() === skillName.toLowerCase()
      )
      if (skill) return skill.icon
    }
    return null
  }
  const renderProjectName = (projectText) => {
    const match = projectText.match(/^(.*?)[''](.+?)[''](.*)$/)
    if (match) {
      return (
        <>
          <span className="font-normal">{match[1]}</span>
          <span className="font-bold">'{match[2]}'</span>
          <span className="font-normal">{match[3]}</span>
        </>
      )
    }
    return <span className="font-semibold">{projectText}</span>
  }

  const getProjectImage = (projectName) => {
    if (projectName.includes('스마토링') || projectName.includes('Smartoring')) {
      return '/assets/images/projects/smartoring/thumbnail.webp'
    }
    if (projectName.includes('이음페이') || projectName.includes('IEUM-Pay')) {
      return '/assets/images/projects/ieumpay/thumbnail.webp'
    }
    if (projectName.includes('마이브러리') || projectName.includes('MyBrary')) {
      return '/assets/images/projects/mybrary/thumbnail.webp'
    }
    return null
  }

  return (
    <section id="career" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Career" />

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">경력</h3>
          <div className="space-y-12">
            {careerData?.map((job, jobIndex) => (
              <div
                key={jobIndex}
                ref={setItemRef(jobIndex)}
                className={`transition-all duration-700 ${visibleItems.has(jobIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <div className="relative">
                  {/* Timeline Line connecting Company to Positions */}
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                  {/* Company Header */}
                  <div className="relative flex items-center gap-6 mb-10">
                    <div className="relative z-10 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center p-2">
                      {job.logo && (
                        <img
                          src={job.logo}
                          alt={`${job.company} 로고`}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{job.company}</h4>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-600 dark:text-gray-400">
                        <span>{job.department}</span>
                        {job.level && (
                          <>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{job.level}</span>
                          </>
                        )}
                        {job.totalPeriod && (
                          <>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">
                              총 {job.totalPeriod}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Positions List */}
                  <div className="space-y-8 pl-[4.5rem]">
                    {[...job.positions].reverse().map((position, posIndex) => {
                      const isLatest = posIndex === 0
                      return (
                        <div key={posIndex} className="relative">
                          {/* Horizontal Connector */}
                          <div className="absolute -left-6 top-8 w-6 h-0.5 bg-gray-200 dark:bg-gray-700"></div>

                          {/* Timeline Node */}
                          <div className={`absolute -left-[1.85rem] top-[1.65rem] w-3 h-3 rounded-full border-2 bg-white dark:bg-gray-900 ${isLatest
                            ? 'border-blue-500 ring-4 ring-blue-50 dark:ring-blue-900/30'
                            : 'border-gray-300 dark:border-gray-600'
                            }`}></div>

                          {/* Position Card */}
                          <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border shadow-sm hover:shadow-md transition-all duration-300 ${isLatest
                            ? 'border-blue-100 dark:border-blue-900/50 ring-1 ring-blue-50 dark:ring-blue-900/20'
                            : 'border-gray-100 dark:border-gray-700'
                            }`}>
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                              <div className="flex items-center gap-3">
                                <h5 className={`text-xl font-bold ${isLatest ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                                  {position.title}
                                </h5>
                                {isLatest && (
                                  <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                                    CURRENT
                                  </span>
                                )}
                              </div>
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full w-fit">
                                {position.period}
                              </span>
                            </div>

                            {/* Content Grid */}
                            <div className="space-y-6">
                              {/* Responsibilities */}
                              {position.responsibilities?.length > 0 && (
                                <div>
                                  <h6 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                                    Work
                                  </h6>
                                  <ul className="grid gap-2">
                                    {position.responsibilities.map((responsibility, idx) => (
                                      <li key={idx} className="flex gap-3 text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed group">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-400 transition-colors flex-shrink-0"></span>
                                        <span>{responsibility}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Tech Stack & Achievements Grid */}
                              <div className="grid md:grid-cols-2 gap-6 pt-2">
                                {/* Tech Stack */}
                                {position.techStack?.length > 0 && (
                                  <div>
                                    <h6 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                      <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
                                      Tech Stack
                                    </h6>
                                    <div className="flex flex-wrap gap-2">
                                      {position.techStack.map((tech, idx) => (
                                        <SkillBadge
                                          key={idx}
                                          name={tech}
                                          icon={getSkillIcon(tech)}
                                          size="sm"
                                          variant="gray"
                                        />
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Achievements */}
                                {position.achievements?.length > 0 && (
                                  <div>
                                    <h6 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                      <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                                      Impact
                                    </h6>
                                    <div className="space-y-2">
                                      {position.achievements.map((achievement, idx) => (
                                        <div
                                          key={idx}
                                          className="p-3 bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 text-sm text-gray-700 dark:text-gray-300 rounded-lg"
                                        >
                                          {achievement}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        {educationData?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">학력</h3>
            <div className="space-y-12">
              {educationData.map((edu, index) => {
                const itemIndex = careerData.length + index
                return (
                  <div
                    key={index}
                    ref={setItemRef(itemIndex)}
                    className={`transition-all duration-700 ${visibleItems.has(itemIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                  >
                    <div className="relative">
                      {/* Timeline Line connecting Institution to details */}
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                      {/* Institution Header */}
                      <div className="relative flex items-center gap-6 mb-10">
                        <div className="relative z-10 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center p-2">
                          {edu.logo ? (
                            <img
                              src={edu.logo}
                              alt={`${edu.institution} 로고`}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-2xl">🎓</span>
                          )}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.institution}</h4>
                            {edu.major && (
                              <>
                                <span className="hidden sm:inline w-1 h-1 bg-gray-400 rounded-full"></span>
                                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                                  {edu.major}
                                </span>
                              </>
                            )}
                            {edu.url && (
                              <a
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1.5 text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium text-indigo-600 dark:text-indigo-400">{edu.type}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{edu.period}</span>
                            {edu.duration && (
                              <>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>{edu.duration}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Education Details Card */}
                      <div className="pl-[4.5rem]">
                        <div className="relative">
                          {/* Horizontal Connector */}
                          <div className="absolute -left-6 top-8 w-6 h-0.5 bg-gray-200 dark:bg-gray-700"></div>

                          {/* Timeline Node */}
                          <div className="absolute -left-[1.85rem] top-[1.65rem] w-3 h-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-gray-900 ring-4 ring-indigo-50 dark:ring-indigo-900/30"></div>

                          {/* Card */}
                          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-indigo-100 dark:border-indigo-900/50 shadow-sm hover:shadow-md transition-all duration-300">
                            {edu.description && (
                              <div className="space-y-4">
                                <h6 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                  <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
                                  Description
                                </h6>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {edu.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Awards Section */}
        {awardsData?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">수상</h3>
            <div className="space-y-6">
              {awardsData.map((award, index) => {
                const itemIndex = careerData.length + educationData.length + index
                return (
                  <div
                    key={index}
                    ref={setItemRef(itemIndex)}
                    className={`transition-all duration-700 ${visibleItems.has(itemIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                  >
                    {/* Award content */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Background layer - Image or Gradient */}
                      {getProjectImage(award.project) ? (
                        <>
                          {/* Light mode */}
                          <div
                            className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-30 dark:hidden"
                            style={{
                              backgroundImage: `linear-gradient(to left, transparent 0%, rgba(255,255,255,0.95) 100%), url('${getProjectImage(award.project)}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                          {/* Dark mode */}
                          <div
                            className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-30 hidden dark:block"
                            style={{
                              backgroundImage: `linear-gradient(to left, transparent 0%, rgba(31,41,55,0.95) 100%), url('${getProjectImage(award.project)}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                        </>
                      ) : (
                        <div className={`absolute inset-y-0 right-0 w-1/2 pointer-events-none ${award.award === "최우수"
                          ? "bg-gradient-to-l from-amber-50/40 to-transparent dark:from-amber-900/10"
                          : award.award === "우수"
                            ? "bg-gradient-to-l from-slate-50/40 to-transparent dark:from-slate-900/10"
                            : "bg-gradient-to-l from-gray-50/40 to-transparent dark:from-gray-700/10"
                          }`} />
                      )}

                      {/* Content */}
                      <div className="relative z-10 w-full sm:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant={
                              award.award === "최우수" ? "amber"
                                : award.award === "우수" ? "slate"
                                  : "gray"
                            }
                            size="sm"
                            className="font-bold"
                          >
                            {award.award}
                          </Badge>
                          <Badge variant="gray" size="sm">
                            {award.date}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {renderProjectName(award.project)}
                        </h4>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {award.event}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {certificationsData?.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">자격증</h3>
            <div className="flex flex-wrap gap-3">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full"
                >
                  {cert.icon && (
                    <img
                      src={cert.icon}
                      alt=""
                      className="w-4 h-4 object-contain opacity-60 dark:invert"
                    />
                  )}
                  <span className="font-semibold text-gray-900 dark:text-white">{cert.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">• {cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Career
