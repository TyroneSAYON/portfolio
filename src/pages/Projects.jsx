import './Projects.css'
import { useState, useEffect } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalContent, setModalContent] = useState('')
  const [loading, setLoading] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'AtCurbside Stickers',
      image: '/atcurbsidesticker.png',
      description: 'Creative sticker designs for AtCurbside Coffee Roastery, bringing brand personality to life through practical and visually appealing packaging designs.',
      category: 'Branding & Design',
      technologies: ['Canva', 'Illustrator', 'Photoshop'],
      featured: true,
      contentFile: '/atcurbside.txt'
    },
    {
      id: 2,
      title: 'Apeiron Construction Services',
      image: '/apeiron.png',
      description: 'Construction monitoring system with progress billing module for tracking project completion and financial management.',
      category: 'Web Development',
      technologies: ['Figma', 'shadcn/ui', 'React', 'Vite'],
      featured: false,
      contentFile: '/apeiron.txt'
    },
    {
      id: 3,
      title: 'DTI-ICSF Portal',
      image: '/DTI-ICSF.png',
      description: 'Centralized portal for collecting and analyzing customer satisfaction feedback with automated analytics and reporting.',
      category: 'Full Stack Development',
      technologies: ['React', 'Django', 'Python', 'NAS', 'Figma'],
      featured: false,
      contentFile: '/ICSF.txt'
    },
    {
      id: 4,
      title: 'PUP Arta-Chatbot',
      image: '/puparta.png',
      description: 'Interactive AI chatbot kiosk for university services, providing easy access to Citizen\'s Charter information.',
      category: 'AI & Web Development',
      technologies: ['React', 'shadcn/ui', 'Gemini AI', 'Figma'],
      featured: false,
      contentFile: '/pup.txt'
    },
    {
      id: 5,
      title: 'Stampworth',
      image: '/stampworth.png',
      description: 'Digital loyalty platform with QR-code transactions and geofencing for modern customer engagement.',
      category: 'Mobile Development',
      technologies: ['Figma', 'React Native', 'React', 'Node.js'],
      featured: false,
      contentFile: '/stampworth.txt'
    }
  ]

  const openModal = async (project) => {
    setSelectedProject(project)
    setModalContent('')
    setLoading(true)
    
    try {
      const response = await fetch(project.contentFile)
      if (!response.ok) throw new Error('Failed to load content')
      const text = await response.text()
      setModalContent(text)
    } catch (error) {
      console.error('Error:', error)
      setModalContent('Unable to load project details.')
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
    setModalContent('')
  }

  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">Selected Work</h1>
          <p className="projects-subtitle">A collection of my recent projects and design work</p>
        </div>
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="featured-project" onClick={() => openModal(featuredProject)} style={{ cursor: 'pointer' }}>
            <div className="featured-image-wrapper">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="featured-image"
              />
              <div className="featured-overlay">
                <span className="featured-category">{featuredProject.category}</span>
              </div>
            </div>
            <div className="featured-details">
              <h2 className="featured-title">{featuredProject.title}</h2>
              <p className="featured-description">{featuredProject.description}</p>
              <div className="featured-technologies">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="projects-gallery">
          {otherProjects.map((project) => (
            <div key={project.id} className="project-item" onClick={() => openModal(project)}>
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>×</button>
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className="modal-category">{selectedProject.category}</span>
              </div>
              
              <p className="project-modal-explanation">{selectedProject.description}</p>
              
              <div className="modal-body">
                <div className="modal-text">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    modalContent
                      .split('\n\n')
                      .filter(para => para.trim())
                      .map((paragraph, idx) => (
                        <p key={idx} style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                          {paragraph.trim()}
                        </p>
                      ))
                  )}
                </div>
              </div>
              
              <div className="modal-technologies">
                <h4 className="modal-tech-title">Technologies Used:</h4>
                <div className="modal-tech-list">
                  {selectedProject.technologies && selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
