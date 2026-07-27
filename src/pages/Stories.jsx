import './Stories.css'
import { useEffect, useRef, useState } from 'react'

function Stories() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const carouselTrackRef = useRef(null)

  const blogs = [
    {
      title: 'Internship',
      excerpt: 'A reflective look at how an internship shaped my professional discipline, creative confidence, and curiosity for systems work.',
      date: 'Feb 10, 2026',
      readTime: '5 min read',
      category: 'Experience',
      tags: ['DTI', 'IT', 'Internship', 'Growth'],
      cover: '/9.png',
      images: ['/dti1.jpg', '/dti2.jpg', '/dti3.jpg', '/dti4.png'],
      infoCards: [
        { label: 'Organization', value: 'DTI Region XI' },
        { label: 'Role', value: 'IT Intern • UI/UX Support' },
        { label: 'Duration', value: 'Feb–May 2025' },
        { label: 'Technologies', value: 'React, Django, Python, Figma' }
      ],
      milestones: [
        { period: 'Feb 2025', title: 'Joined the team', description: 'Started work in the Management Support Services Unit and adapted to office routines.' },
        { period: 'Mar 2025', title: 'Handled ICSF records', description: 'Built consistency and accountability while processing feedback data.' },
        { period: 'Apr 2025', title: 'Contributed to the portal', description: 'Helped shape the UI direction for a web-based internal portal.' }
      ],
      sections: [
        {
          heading: 'Overview',
          body: [
            'The internship became a turning point in how I understood work, growth, and the role of thoughtful design in real systems.',
            'It pushed me beyond the classroom and introduced me to the rhythm of responsibility, collaboration, and continuous improvement.'
          ]
        },
        {
          heading: 'What I carried forward',
          body: [
            'I learned how small tasks build trust, how feedback sharpens ideas, and how persistence turns obstacles into confidence.',
            'The experience also strengthened my interest in building interfaces and solutions that are clear, useful, and human-centered.'
          ]
        },
        {
          heading: 'Reflection',
          body: [
            'What stood out most was the balance between technical execution and personal development.',
            'Every challenge helped me become more adaptable, more grounded, and more excited about the work ahead.'
          ]
        }
      ]
    },
    {
      title: 'Graphic Design',
      excerpt: 'A story about how design evolved from school publication work into real-world branding, art direction, and UI thinking.',
      date: 'Feb 8, 2026',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Design', 'UI/UX', 'Branding', 'AtCurbside'],
      images: ['/L1.png', '/L2.png', '/L3.png', '/L4.png', '/L5.png', '/L6.png'],
      infoCards: [
        { label: 'Organization', value: 'AtCurbside Cafe Inc.' },
        { label: 'Role', value: 'Graphic Designer • Vector Artist' },
        { label: 'Duration', value: '2022–Present' },
        { label: 'Technologies', value: 'Photoshop, Illustrator, Canva' }
      ],
      milestones: [
        { period: '2019', title: 'Layout editor', description: 'Began developing design instincts through school publishing work.' },
        { period: '2022', title: 'Brand work', description: 'Started creating stickers, labels, and visual materials for the café.' },
        { period: '2024', title: 'Design + tech', description: 'Connected visual craft with frontend and UI/UX thinking.' }
      ],
      sections: [
        {
          heading: 'Design foundation',
          body: [
            'My first real exposure to design came through layout editing for the school paper, where I learned how structure, balance, and storytelling work together.'
          ]
        },
        {
          heading: 'Creative growth',
          body: [
            'Over time, I translated that foundation into branding work for AtCurbside, designing elements that would be printed, used, and experienced by real people.'
          ]
        },
        {
          heading: 'Where it leads',
          body: [
            'That journey gradually connected my visual skills with interface thinking, shaping the way I approach digital experiences today.'
          ]
        }
      ]
    },
    {
      title: 'Barista Maestro',
      excerpt: 'How leading a café team taught me discipline, mentorship, and how calm systems can create excellent experiences.',
      date: 'Feb 5, 2026',
      readTime: '6 min read',
      category: 'Coffee',
      tags: ['Coffee', 'Leadership', 'Mentoring', 'AtCurbside'],
      images: ['/bm1.png', '/bm2.png', '/bm3.png', '/bm4.jfif', '/card1.png'],
      infoCards: [
        { label: 'Organization', value: 'AtCurbside Cafe Inc.' },
        { label: 'Role', value: 'Barista Maestro' },
        { label: 'Duration', value: '2022–Present' },
        { label: 'Focus', value: 'Team leadership • service quality' }
      ],
      milestones: [
        { period: '2022', title: 'Started the craft', description: 'Learned the fundamentals of espresso, service flow, and consistency.' },
        { period: '2023', title: 'Built momentum', description: 'Became more confident in fast-paced, high-quality service.' },
        { period: '2024', title: 'Stepped into leadership', description: 'Guided a team, shared standards, and helped others grow.' }
      ],
      sections: [
        {
          heading: 'Craft',
          body: [
            'The role sharpened my attention to detail and taught me how small actions shape the whole customer experience.'
          ]
        },
        {
          heading: 'Leadership',
          body: [
            'As I became more experienced, I found that leadership is not only about speed, but about mentorship, calmness, and helping the team stay consistent.'
          ]
        },
        {
          heading: 'Meaning',
          body: [
            'It became a lesson in balancing quality, teamwork, and care—something that still informs how I work today.'
          ]
        }
      ]
    },
    {
      title: 'Barista',
      excerpt: 'The chapter where balancing work, school, and passion helped me discover resilience, focus, and growth.',
      date: 'Feb 1, 2026',
      readTime: '4 min read',
      category: 'Lifestyle',
      tags: ['Coffee', 'Barista', 'Working Student', 'Growth'],
      images: ['/b1.jpg', '/b2.jpg', '/b3.jpg', '/b4.png', '/C1.png', '/C2.png', '/C3.png', '/C4.png', '/C5.png'],
      infoCards: [
        { label: 'Organization', value: 'AtCurbside Cafe Inc.' },
        { label: 'Role', value: 'Working Student • Barista' },
        { label: 'Duration', value: '2022–2024' },
        { label: 'Focus', value: 'Discipline • growth • service' }
      ],
      milestones: [
        { period: '2022', title: 'Started the journey', description: 'Became a barista while balancing school and work responsibilities.' },
        { period: '2023', title: 'Kept improving', description: 'Joined brewing and latte art activities to sharpen skill and confidence.' },
        { period: '2024', title: 'Mentored others', description: 'Moved into a leadership role by helping newer team members grow.' }
      ],
      sections: [
        {
          heading: 'Early chapter',
          body: [
            'Balancing school and shifts taught me how to stay organized, resilient, and committed even when the days were demanding.'
          ]
        },
        {
          heading: 'What it built',
          body: [
            'The experience strengthened my discipline and helped me discover that growth often comes from showing up consistently.'
          ]
        },
        {
          heading: 'Why it matters',
          body: [
            'It remains one of the most meaningful chapters in my journey because it shaped my work ethic and my sense of purpose.'
          ]
        }
      ]
    }
  ]

  const openStory = (index) => {
    setSelectedBlog(index)
    setCurrentImageIndex(0)
    setIsFullscreen(false)
  }

  const closeStory = () => {
    setSelectedBlog(null)
    setCurrentImageIndex(0)
    setIsFullscreen(false)
  }

  const selectedStory = selectedBlog !== null ? blogs[selectedBlog] : null
  const imageList = selectedStory?.images?.length ? selectedStory.images : selectedStory?.cover ? [selectedStory.cover] : []
  const currentImage = imageList[currentImageIndex] || selectedStory?.cover || ''

  useEffect(() => {
    const track = carouselTrackRef.current
    if (!track || imageList.length <= 1) return

    const slideWidth = track.clientWidth
    track.scrollTo({ left: currentImageIndex * slideWidth, behavior: 'smooth' })
  }, [currentImageIndex, imageList.length])

  return (
    <section className="page-section" id="stories">
      <h1 className="page-title">Stories</h1>
      <div className="stories-container">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-card" onClick={() => openStory(index)}>
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

      {selectedStory && (
        <>
          <div className="blog-modal-overlay" onClick={closeStory}>
            <div className="blog-modal" onClick={(event) => event.stopPropagation()}>
              <button className="close-btn" onClick={closeStory} type="button">×</button>

              <div className="modal-content">
                <div className="modal-layout">
                  <div className="modal-left">
                    <span className="modal-category">{selectedStory.category}</span>
                    <div className="modal-header">
                      <h1 className="modal-title">{selectedStory.title}</h1>
                    </div>
                    <div className="modal-meta">
                      <span>{selectedStory.date}</span>
                      <span className="divider">·</span>
                      <span>{selectedStory.readTime}</span>
                    </div>
                    <p className="modal-lead">{selectedStory.excerpt}</p>

                    <div className="info-card-row">
                      {selectedStory.infoCards.map((card) => (
                        <div key={card.label} className="info-card">
                          <span className="info-card-label">{card.label}</span>
                          <strong>{card.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="story-scroll-area">
                      <div className="story-sections">
                        {selectedStory.sections.map((section) => (
                          <section key={section.heading} className="story-section">
                            <h3>{section.heading}</h3>
                            {section.body.map((paragraph, index) => (
                              <p key={`${section.heading}-${index}`}>{paragraph}</p>
                            ))}
                          </section>
                        ))}
                      </div>

                      <div className="timeline-block">
                        <div className="timeline-header">
                          <h3>Key milestones</h3>
                        </div>
                        <div className="timeline-list">
                          {selectedStory.milestones.map((milestone) => (
                            <div key={milestone.title} className="timeline-item">
                              <div className="timeline-marker" />
                              <div className="timeline-body">
                                <span className="timeline-period">{milestone.period}</span>
                                <h4>{milestone.title}</h4>
                                <p>{milestone.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="modal-tags">
                        {selectedStory.tags && selectedStory.tags.map((tag, idx) => (
                          <span key={idx} className="modal-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="modal-right">
                    {imageList.length > 0 ? (
                      <div className="carousel-container">
                        <div className="carousel-wrapper">
                          <div className="carousel-track" ref={carouselTrackRef}>
                            {imageList.map((image, idx) => (
                              <div key={`${image}-${idx}`} className="carousel-slide">
                                <img
                                  src={image}
                                  alt={`${selectedStory.title} ${idx + 1}`}
                                  className="carousel-image"
                                  onClick={() => setIsFullscreen(true)}
                                />
                              </div>
                            ))}
                          </div>
                          {imageList.length > 1 && (
                            <button className="fullscreen-btn" type="button" onClick={() => setIsFullscreen(true)}>
                              ⤢
                            </button>
                          )}
                        </div>

                        {imageList.length > 1 && (
                          <>
                            <div className="thumbnail-row" aria-label="Image previews">
                              {imageList.map((image, idx) => (
                                <button
                                  key={image}
                                  type="button"
                                  className={`thumbnail-btn ${idx === currentImageIndex ? 'active' : ''}`}
                                  onClick={() => setCurrentImageIndex(idx)}
                                >
                                  <img src={image} alt={`${selectedStory.title} preview ${idx + 1}`} />
                                </button>
                              ))}
                            </div>

                            <div className="carousel-controls">
                              <button
                                className="carousel-btn prev"
                                type="button"
                                onClick={() =>
                                  setCurrentImageIndex((currentImageIndex - 1 + imageList.length) % imageList.length)
                                }
                              >
                                ‹
                              </button>
                              <div className="carousel-dots">
                                {imageList.map((_, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(idx)}
                                  />
                                ))}
                              </div>
                              <button
                                className="carousel-btn next"
                                type="button"
                                onClick={() => setCurrentImageIndex((currentImageIndex + 1) % imageList.length)}
                              >
                                ›
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ) : selectedStory.cover ? (
                      <div className="modal-cover-image">
                        <img src={selectedStory.cover} alt={selectedStory.title} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isFullscreen && (
            <div className="fullscreen-overlay" onClick={() => setIsFullscreen(false)}>
              <div className="fullscreen-card" onClick={(event) => event.stopPropagation()}>
                <button className="fullscreen-close" type="button" onClick={() => setIsFullscreen(false)}>
                  ×
                </button>
                <img src={currentImage} alt={`${selectedStory.title} fullscreen`} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default Stories
