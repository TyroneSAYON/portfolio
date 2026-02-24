import './Stories.css'
import { useState } from 'react'

function Stories() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectModalContent, setProjectModalContent] = useState('')
  const [projectLoading, setProjectLoading] = useState(false)
  const [imageZoomLevel, setImageZoomLevel] = useState(1)
  const [imagePanX, setImagePanX] = useState(0)
  const [imagePanY, setImagePanY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const blogs = [
    {
      title: 'Internship',
      excerpt: 'Sharing my internship journey and valuable lessons learned in the professional world.',
      date: 'Feb 10, 2026',
      readTime: '5 min read',
      category: 'Experience',
      tags: ['DTI', 'IT', 'Internship', 'Growth'],
      logo: '/2.png',
      cover: '/9.png',
      images: ['/dti1.jpg', '/dti2.jpg', '/dti3.jpg', '/dti4.png'],
      content: 'My internship at the Department of Trade and Industry (DTI) Region XI was both challenging and fulfilling. It pushed me beyond student life and introduced me to real professional responsibilities. As an Information Technology intern, I gained not only technical skills but also lessons in discipline, adaptability, and growth.\n\nAdjusting to an 8:00 AM–5:00 PM work schedule was one of my first challenges. Balancing academic requirements with daily office tasks required strong time management and commitment. Over time, I learned how to prioritize responsibilities, manage my energy, and maintain focus throughout the workday.\n\nAssigned to the Management Support Services Unit (MSSU), I handled Internal Customer Satisfaction Feedback (ICSF) records and data consolidation. Although repetitive at first, these tasks taught me the importance of accuracy and accountability, showing how even small responsibilities contribute to meaningful organizational decisions.\n\nOne of the most rewarding experiences was contributing to the design and development of the ICSF web-based portal. As a UI/UX designer, seeing my ideas become part of a functional system was fulfilling. Feedback and revisions challenged me, but they also helped me become more adaptable and open to continuous improvement.\n\nI also encountered technical challenges during backend deployment and NAS server configuration. Troubleshooting errors tested my patience and perseverance, but overcoming them boosted my confidence and reinforced the value of persistence.\n\nOverall, my internship at DTI Region XI was more than a requirement—it was a period of personal and professional growth. It strengthened my interest in system development and IT infrastructure while preparing me for future challenges in the industry.'
    },
    {
      title: 'Graphic Design',
      excerpt: 'Exploring the art of graphic design and how it transforms user experiences.',
      date: 'Feb 8, 2026',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Design', 'UI/UX', 'Branding', 'AtCurbside'],
      images: ['/L1.png', '/L2.png', '/L3.png', '/L4.png', '/L5.png', '/L6.png'],
      content: 'I actually started getting into design way back in 2019–2020 when I became a Layout Editor for our school paper. That was my first real exposure to it. I learned how to arrange elements, balance text and visuals, and see how design helps tell a story. I didn\'t realize it then, but that experience became the foundation of what I do now.\n\nAs time went on, I kept exploring and improving my skills. In 2022 up to the present, I\'ve been working as a Graphic Designer and Vector Artist for AtCurbside Cafe Inc., creating stickers, labels, and other branding materials for the café. Seeing my designs printed and used in real life made me appreciate how creativity connects with business.\n\nAt the same time, I was studying BS Information Technology. I initially thought I\'d go fully into coding and systems, but along the way I discovered something that really clicked with me—simple frontend development and UI/UX design.\n\nI realized I enjoy designing experiences just as much as visuals. I like making things not only look good, but also feel intuitive and functional for users.\n\nFrom working on school publications, to real-world branding, to blending design with technology…\n\nI found my space right at the intersection of design and IT—and I\'m still learning, still creating, and still growing.'
    },
    {
      title: 'Barista Maestro',
      excerpt: 'Mastering the craft of coffee making and the philosophy behind perfect espresso shots.',
      date: 'Feb 5, 2026',
      readTime: '6 min read',
      category: 'Coffee',
      tags: ['Coffee', 'Leadership', 'Mentoring', 'AtCurbside'],
      images: ['/bm1.png', '/bm2.png', '/bm3.png', '/bm4.jfif', '/card1.png'],
      content: 'I started my barista journey in July 2022 at AtCurbside. At first, I was just curious and eager to learn—figuring out espresso extraction, practicing milk texture, and realizing how even the smallest details can change a customer\'s experience.\n\nAs time went on, I learned that being a barista is more than just making drinks. It\'s about rhythm, teamwork, and creating moments for people—whether it\'s their quick morning coffee before work or a relaxing afternoon break.\n\nFor the next year and five months, I really immersed myself in the craft. I learned how to stay efficient during peak hours, keep every cup consistent, and connect with customers beyond just taking orders. Every shift taught me discipline, time management, and how to maintain quality even when things get busy.\n\nThen on January 15, I was given the opportunity to step into a new role as Barista Maestro—and it meant more than just a new title. It meant stepping up as a leader.\n\nNow, I lead a team of baristas, making sure our drinks meet quality standards and that we deliver great customer service every day. I help guide the team, keep the workflow smooth during busy hours, and share what I\'ve learned along the way.\n\nFor me, leadership in a café isn\'t just about managing—it\'s about mentoring, setting the example, and helping others feel confident in their role. It\'s about balancing speed with quality and responsibility with passion for the craft.\n\nThis journey showed me that growth really does happen one cup at a time—and I\'m excited to keep learning, leading, and serving more cups with purpose.'
    },
    {
      title: 'Barista',
      excerpt: 'The journey of becoming a barista and the passion that drives exceptional coffee culture.',
      date: 'Feb 1, 2026',
      readTime: '4 min read',
      category: 'Lifestyle',
      tags: ['Coffee', 'Barista', 'Working Student', 'Growth'],
      images: ['/b1.jpg', '/b2.jpg', '/b3.jpg', '/b4.png', '/C1.png', '/C2.png', '/C3.png', '/C4.png', '/C5.png'],
      content: 'I started my journey in July 2022 when I got hired as a barista at AtCurbside while also studying BSIT. Being a working student meant balancing early classes, deadlines, and long café shifts. There were days when I\'d go straight from coding projects to making coffee during peak hours—but those moments really built my discipline, focus, and sense of responsibility.\n\nEven with the challenges, I stayed motivated because of my passion for coffee and my eagerness to learn. I pushed myself to grow by joining latte art and brewing competitions, which helped me improve my skills, gain confidence, and appreciate the craft even more.\n\nThrough continuous learning and hard work, I was eventually promoted to Barista Maestro. Now, I lead and mentor new baristas, sharing the lessons and experiences that once helped me grow. Teaching others has become one of the most fulfilling parts of my journey, because I see my past self in every new learner.\n\nBalancing school and work shaped me into someone who values growth, resilience, and passion—whether I\'m solving IT problems or crafting the perfect cup of coffee.'
    }
  ]

  const projects = [
    {
      name: 'AtCurbside Stickers',
      image: '/atcurbsidesticker.png',
      description: 'Custom sticker designs for AtCurbside Cafe Inc.',
      contentFile: '/atcurbside.txt'
    },
    {
      name: 'DTI-ICSF Portal',
      image: '/DTI-ICSF.png',
      description: 'Web-based portal for Internal Customer Satisfaction Feedback',
      contentFile: '/ICSF.txt'
    },
    {
      name: 'Stampworth',
      image: '/stampworth.png',
      description: 'Digital platform for stamp collection management',
      contentFile: '/stampworth.txt'
    },
    {
      name: 'PUP Arta Chatbot',
      image: '/puparta.png',
      description: 'AI-powered chatbot for PUP Arta information',
      contentFile: '/pup.txt'
    },
    {
      name: 'Apeiron Construction',
      image: '/apeiron.png',
      description: 'Construction company website and portfolio',
      contentFile: '/apeiron.txt'
    }
  ]

  const openProjectModal = async (project) => {
    setSelectedProject(project)
    setProjectLoading(true)
    setProjectModalContent('')
    
    try {
      const response = await fetch(project.contentFile)
      if (!response.ok) throw new Error('Failed to load content')
      const text = await response.text()
      const paragraphs = text.split('\n\n').filter(p => p.trim())
      const formattedContent = paragraphs.map((para) => (
        <p key={Math.random()} className="project-content-paragraph">{para}</p>
      ))
      setProjectModalContent(formattedContent)
    } catch (error) {
      console.error('Error loading project content:', error)
      setProjectModalContent(<p className="project-content-paragraph">Error loading content</p>)
    } finally {
      setProjectLoading(false)
    }
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setProjectModalContent('')
    setImageZoomLevel(1)
    setImagePanX(0)
    setImagePanY(0)
    setIsDragging(false)
  }

  const handleImageMouseWheel = (e) => {
    if (!isDragging) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.2 : 0.2
      const newZoom = Math.max(1, Math.min(3, imageZoomLevel + delta))
      setImageZoomLevel(newZoom)
    }
  }

  const handleImageMouseDown = (e) => {
    if (imageZoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - imagePanX, y: e.clientY - imagePanY })
    }
  }

  const handleImageMouseMove = (e) => {
    if (isDragging && imageZoomLevel > 1) {
      setImagePanX(e.clientX - dragStart.x)
      setImagePanY(e.clientY - dragStart.y)
    }
  }

  const handleImageMouseUp = () => {
    setIsDragging(false)
  }

  const handleZoomIn = () => {
    setImageZoomLevel(prev => Math.min(3, prev + 0.5))
  }

  const handleZoomOut = () => {
    const newZoom = imageZoomLevel - 0.5
    if (newZoom <= 1) {
      setImageZoomLevel(1)
      setImagePanX(0)
      setImagePanY(0)
    } else {
      setImageZoomLevel(newZoom)
    }
  }

  const handleResetZoom = () => {
    setImageZoomLevel(1)
    setImagePanX(0)
    setImagePanY(0)
  }

  return (
    <section className="page-section" id="stories">
      <h1 className="page-title">Stories</h1>
      <div className="stories-container">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-card" onClick={() => {
            setSelectedBlog(index)
            setCurrentImageIndex(0)
          }}>
            <div className="blog-header">
              <span className="blog-category">{blog.category}</span>
            </div>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <div className="blog-tags">
              {blog.tags && blog.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">{tag}</span>
              ))}
            </div>
            <div className="blog-footer">
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-divider">·</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">My Projects</h2>
          
          {/* Projects Grid Cards */}
          <div className="projects-card-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card-grid-item"
                onClick={() => openProjectModal(project)}
              >
                <div className="project-card-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-card-image" />
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedBlog !== null && (
        <div className="blog-modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedBlog(null)}>×</button>
            <div className="modal-content">
              <div className="modal-layout">
                <div className="modal-left">
                  <span className="modal-category">{blogs[selectedBlog].category}</span>
                  <div className="modal-header">
                    <h1 className="modal-title">{blogs[selectedBlog].title}</h1>
                  </div>
                  <div className="modal-meta">
                    <span>{blogs[selectedBlog].date}</span>
                    <span className="divider">·</span>
                    <span>{blogs[selectedBlog].readTime}</span>
                  </div>
                  <div className="modal-tags">
                    {blogs[selectedBlog].tags && blogs[selectedBlog].tags.map((tag, idx) => (
                      <span key={idx} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="modal-body">
                    {blogs[selectedBlog].content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="modal-right">
                  {blogs[selectedBlog].images && blogs[selectedBlog].images.length > 0 ? (
                    <div className="carousel-container">
                      <div className="carousel-wrapper">
                        <img
                          src={blogs[selectedBlog].images[currentImageIndex]}
                          alt={`${blogs[selectedBlog].title} ${currentImageIndex + 1}`}
                          className="carousel-image"
                        />
                      </div>
                      <div className="carousel-controls">
                        <button
                          className="carousel-btn prev"
                          onClick={() =>
                            setCurrentImageIndex(
                              (currentImageIndex - 1 + blogs[selectedBlog].images.length) %
                                blogs[selectedBlog].images.length
                            )
                          }
                        >
                          ‹
                        </button>
                        <div className="carousel-dots">
                          {blogs[selectedBlog].images.map((_, idx) => (
                            <button
                              key={idx}
                              className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(idx)}
                            />
                          ))}
                        </div>
                        <button
                          className="carousel-btn next"
                          onClick={() =>
                            setCurrentImageIndex(
                              (currentImageIndex + 1) % blogs[selectedBlog].images.length
                            )
                          }
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  ) : blogs[selectedBlog].cover ? (
                    <div className="modal-cover-image">
                      <img src={blogs[selectedBlog].cover} alt={blogs[selectedBlog].title} />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject !== null && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal-split" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProjectModal}>×</button>
            
            {/* Left Half */}
            <div className="project-modal-left">
              <div className="project-modal-body">
                <h1 className="project-modal-title">{selectedProject.name}</h1>
                <p className="project-modal-description">{selectedProject.description}</p>
                
                {projectLoading ? (
                  <div className="project-loading">Loading...</div>
                ) : (
                  <div className="project-modal-text">
                    {projectModalContent}
                  </div>
                )}
              </div>
            </div>
            
            {/* Divider */}
            <div className="project-modal-divider"></div>
            
            {/* Right Half */}
            <div className="project-modal-right">
              <div 
                className="project-modal-image-container"
                onWheel={handleImageMouseWheel}
                onMouseDown={handleImageMouseDown}
                onMouseMove={handleImageMouseMove}
                onMouseUp={handleImageMouseUp}
                onMouseLeave={handleImageMouseUp}
              >
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="project-modal-image"
                  style={{
                    transform: `translate(${imagePanX}px, ${imagePanY}px) scale(${imageZoomLevel})`,
                    cursor: imageZoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                  }}
                />
                <div className="zoom-controls">
                  <button 
                    className="zoom-btn" 
                    onClick={handleZoomIn}
                    title="Zoom in"
                  >
                    +
                  </button>
                  <button 
                    className="zoom-btn" 
                    onClick={handleZoomOut}
                    title="Zoom out"
                    style={{ opacity: imageZoomLevel > 1 ? 1 : 0.5, pointerEvents: imageZoomLevel > 1 ? 'auto' : 'none' }}
                  >
                    −
                  </button>
                  {imageZoomLevel > 1 && (
                    <button 
                      className="zoom-btn" 
                      onClick={handleResetZoom}
                      title="Reset zoom"
                    >
                      ✓
                    </button>
                  )}
                </div>
                <div className="zoom-info">
                  {imageZoomLevel > 1 && <span>Drag to pan • Scroll to zoom</span>}
                  {imageZoomLevel <= 1 && <span>Scroll to zoom</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Stories
