import { useEffect, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'AtCurbside Stickers',
    description: 'A playful product showcase spotlighting sticker art, campaign visuals, and the creative details behind the brand.',
    technologies: ['Photoshop', 'Illustrator', 'Canva'],
    image: '/exp/curb2.png',
    liveDemo: null,
    github: null
  },
  {
    title: 'AtCurbside Visuals',
    description: 'A polished brand-forward experience that highlights the café’s identity through immersive visuals, storytelling, and a modern layout.',
    technologies: ['React', 'CSS', 'Illustration'],
    image: '/exp/curb1.png',
    liveDemo: null,
    github: null
  },
  {
    title: 'DTI-ICSF Portal',
    description: 'A functional portal concept centered on clarity, structure, and polished user flows for internal feedback systems.',
    technologies: ['React-Django', 'Python', 'Figma'],
    image: '/exp/icsf.png',
    liveDemo: null,
    github: null
  },
  {
    title: 'PUP Arta Chatbot',
    description: 'A conversational interface concept designed to help users explore campus information with a friendly, approachable experience.',
    technologies: ['Figma', 'React', 'shadcn'],
    image: '/exp/arta.png',
    liveDemo: null,
    github: null
  },
  {
    title: 'Apeiron Construction',
    description: 'A modern corporate website concept built to present projects, services, and company identity with confidence and elegance.',
    technologies: ['React', 'shadcn', 'Tailwind CSS'],
    image: '/exp/apeiron.png',
    liveDemo: null,
    github: null
  },
  {
    title: 'Stampworth',
    description: 'A clean digital platform concept for organizing and presenting collectible information in a refined, accessible way.',
    technologies: ['React', 'UX Writing', 'Responsive UI'],
    image: '/exp/stampworth.png',
    liveDemo: null,
    github: null
  }
]

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length)
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return
    }

    const delta = event.changedTouches[0].clientX - touchStartX

    if (delta > 50) {
      goToPrev()
    } else if (delta < -50) {
      goToNext()
    }

    setTouchStartX(null)
  }

  return (
    <section className="projects-section" id="projects" aria-label="Projects showcase">
      <div className="projects-shell">
        <div className="projects-header">
          <p className="projects-eyebrow">Selected work</p>
          <h2 className="projects-title">Projects that blend design, storytelling, and thoughtful interaction.</h2>
          <p className="projects-subtitle">
            A curated collection of recent concept work centered around clean layouts, immersive visuals, and modern interfaces.
          </p>
        </div>

        <div
          className="projects-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-nav prev" type="button" onClick={goToPrev} aria-label="Previous project">
            ‹
          </button>

          <div className="carousel-window">
            <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {projects.map((project) => (
                <article className="carousel-slide" key={project.title}>
                  <div className="slide-media">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={600}
                      style={{ objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => setSelectedImage(project.image)}
                    />
                  </div>

                  <div className="slide-content">
                    <p className="slide-label">Featured project</p>
                    <h3>{project.title}</h3>
                    <p className="slide-description">{project.description}</p>

                    <div className="tech-list" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="slide-actions">
                      {project.liveDemo ? (
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="action-btn primary">
                          Live Demo
                        </a>
                      ) : null}
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer" className="action-btn secondary">
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="carousel-nav next" type="button" onClick={goToNext} aria-label="Next project">
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Project pagination">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`dot-button ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <Image src={selectedImage} alt="Project preview" width={1200} height={800} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
