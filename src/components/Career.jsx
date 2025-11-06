import React from 'react'
import profileData from '../assets/data/profile.json'

const Career = () => {
  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">경력</h3>
          <div className="space-y-8">
            {profileData.career?.map((job, jobIndex) => (
              <div key={jobIndex} className="relative pl-8 border-l-2 border-indigo-500">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                {/* Job content */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
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
                        <h4 className="text-xl font-bold text-gray-900">{job.company}</h4>
                        <p className="text-sm text-gray-600 mt-1">{job.department}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                      {job.period}
                    </span>
                  </div>

                  {/* Positions */}
                  <div className="space-y-3">
                    {job.positions?.map((position, posIndex) => (
                      <div
                        key={posIndex}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pl-4 border-l-2 border-gray-300"
                      >
                        <span className="font-medium text-gray-900">{position.title}</span>
                        <span className="text-sm text-gray-600">{position.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        {profileData.awards?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">수상</h3>
            <div className="space-y-8">
              {profileData.awards.map((award, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-amber-400">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-amber-400 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                  {/* Award content */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏆</span>
                        <div>
                          <span className="inline-block text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-2">
                            {award.award}
                          </span>
                          <h4 className="font-semibold text-gray-900">{award.project}</h4>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 bg-gray-50 px-3 py-1 rounded-full w-fit">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-11">{award.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {profileData.education?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">학력</h3>
            <div className="space-y-8">
              {profileData.education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-indigo-500"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                  {/* Education content */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                            {edu.type}
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
                            <h4 className="text-lg font-bold text-gray-900">{edu.institution}</h4>
                            {edu.major && (
                              <p className="text-sm text-gray-600 mt-1">전공: {edu.major}</p>
                            )}
                          </div>
                        </div>
                    </div>
                    <div className="text-right md:text-left">
                      <p className="font-semibold text-gray-900">{edu.period}</p>
                      {edu.duration && (
                        <p className="text-sm text-gray-600">({edu.duration})</p>
                      )}
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {profileData.certifications?.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">자격증</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 border-l-4 border-l-green-400 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">📜</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
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
