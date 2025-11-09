import React, { useState, useEffect, useRef } from 'react'
import projectsData from '../../assets/data/projects.json'
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
  const cardRefs = useRef([])
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  // Sort projects by date (most recent first)
  const sortedProjects = [...projectsData].sort((a, b) => b.date.localeCompare(a.date))

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

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
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

        {/* Projects Slider */}
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
