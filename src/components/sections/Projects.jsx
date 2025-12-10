import React, { useState, useEffect, useRef } from 'react'
import projectsData from '../../assets/data/projects.json'
import liveProjectsData from '../../assets/data/live-projects.json'
import Modal from '../ui/Modal'
import ProjectDetailModal from '../modals/ProjectDetailModal'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [visibleLiveCards, setVisibleLiveCards] = useState(new Set())
  const cardRefs = useRef([])
  const liveCardRefs = useRef([])
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const livePrevRef = useRef(null)
  const liveNextRef = useRef(null)

  // Sort projects by date (most recent first)
  const sortedProjects = [...projectsData].sort((a, b) => b.date.localeCompare(a.date))
  const sortedLiveProjects = [...liveProjectsData].sort((a, b) => b.date.localeCompare(a.date))

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]))
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
  }, [sortedProjects])

  useEffect(() => {
    const observers = liveCardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleLiveCards(prev => new Set([...prev, index]))
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
  }, [sortedLiveProjects])

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el
  }

  const setLiveCardRef = (index) => (el) => {
    liveCardRefs.current[index] = el
  }

  const handleProjectClick = (project, isLive = false) => {
    setSelectedProject({ ...project, isLive })
    setIsDetailModalOpen(true)
  }

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Projects"
        />

        {/* Live Projects Section */}
        {sortedLiveProjects.length > 0 && (
          <div className="mb-20">
            {/* Live Projects Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="text-white font-semibold text-sm">LIVE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">운영 중인 프로젝트</h3>
            </div>

            {/* Live Projects List (Horizontal Layout) */}
            <div className="space-y-12">
              {sortedLiveProjects.map((project, index) => (
                <div
                  key={`live-${index}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden group h-64 lg:h-auto cursor-pointer" onClick={() => handleProjectClick(project, true)}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 px-6 py-2 bg-white/90 text-gray-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          자세히 보기
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {project.period && (
                          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                            {project.period}
                          </span>
                        )}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.teamSize}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors cursor-pointer" onClick={() => handleProjectClick(project, true)}>
                        {project.title}
                      </h3>

                      {project.tagline && (
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                          {project.tagline}
                        </p>
                      )}

                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.slice(0, 5).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 5 && (
                          <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm rounded-md">
                            +{project.tags.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mt-auto">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 lg:flex-none text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
                          >
                            서비스 바로가기
                          </a>
                        )}
                        <button
                          onClick={() => handleProjectClick(project, true)}
                          className="flex-1 lg:flex-none px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200"
                        >
                          상세 정보
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Projects Section */}
        <div>
          {/* Past Projects Header */}
          {sortedLiveProjects.length > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-500 dark:bg-gray-600 rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="text-white font-semibold text-sm">ARCHIVE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">종료된 프로젝트</h3>
            </div>
          )}

          {/* Past Projects Slider */}
          <div className="relative">
            {/* Previous Button */}
            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center text-gray-800 dark:text-white transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              ref={nextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center text-gray-800 dark:text-white transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-12 mb-12"
            >
              {sortedProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard
                    project={project}
                    index={index}
                    isVisible={visibleCards.has(index)}
                    cardRef={setCardRef(index)}
                    onClick={() => handleProjectClick(project)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal isOpen={isDetailModalOpen} onClose={handleCloseDetailModal}>
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseDetailModal}
        />
      </Modal>
    </section>
  )
}

export default Projects
