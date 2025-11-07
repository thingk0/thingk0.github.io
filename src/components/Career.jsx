import React from 'react'
import profileData from '../assets/data/profile.json'

const Career = () => {
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
      return '/assets/images/projects/smartoring.webp'
    }
    if (projectName.includes('이음페이') || projectName.includes('IEUM-Pay')) {
      return '/assets/images/projects/ieumpay.webp'
    }
    if (projectName.includes('마이브러리') || projectName.includes('MyBrary')) {
      return '/assets/images/projects/mybrary.webp'
    }
    return null
  }

  return (
    <section id="career" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Career
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">경력</h3>
          <div className="space-y-8">
            {profileData.career?.map((job, jobIndex) => (
              <div key={jobIndex} className="relative pl-8 border-l-2 border-indigo-500">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                {/* Job content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {job.logo && (
                        <img
                          src={job.logo}
                          alt={`${job.company} 로고`}
                          className="h-16 w-auto object-contain flex-shrink-0"
                        />
                      )}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.company}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.department}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full w-fit">
                      {job.period}
                    </span>
                  </div>

                  {/* Positions */}
                  <div className="space-y-3">
                    {job.positions?.map((position, posIndex) => (
                      <div
                        key={posIndex}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
                      >
                        <span className="font-medium text-gray-900 dark:text-white">{position.title}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{position.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        {profileData.education?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">학력</h3>
            <div className="space-y-8">
              {profileData.education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-indigo-500"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                  {/* Education content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <div>
                      <div className="flex gap-2 mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                          {edu.type}
                        </span>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {edu.logo && (
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} 로고`}
                            className="h-16 w-auto object-contain flex-shrink-0"
                          />
                        )}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.institution}</h4>
                          {edu.major && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              전공: {edu.major} {edu.duration && `(${edu.duration})`}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  {edu.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards Section */}
        {profileData.awards?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">수상</h3>
            <div className="space-y-8">
              {profileData.awards.map((award, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-amber-400">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-amber-400 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

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
                      <div className={`absolute inset-y-0 right-0 w-1/2 pointer-events-none ${
                        award.award === "최우수"
                          ? "bg-gradient-to-l from-amber-50/40 to-transparent dark:from-amber-900/10"
                          : award.award === "우수"
                          ? "bg-gradient-to-l from-slate-50/40 to-transparent dark:from-slate-900/10"
                          : "bg-gradient-to-l from-gray-50/40 to-transparent dark:from-gray-700/10"
                      }`} />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex gap-2 mb-3">
                        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                          award.award === "최우수"
                            ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30"
                            : award.award === "우수"
                            ? "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/30"
                            : "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800"
                        }`}>
                          {award.award}
                        </span>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                          {award.date}
                        </span>
                      </div>
                      <h4 className="text-gray-900 dark:text-white">{renderProjectName(award.project)}</h4>
                    </div>
                    <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400">{award.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {profileData.certifications?.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">자격증</h3>
            <div className="flex flex-wrap gap-3">
              {profileData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full"
                >
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
