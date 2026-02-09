import './Stories.css'
import { useState } from 'react'

function Stories() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const blogs = [
    {
      title: 'Internship',
      excerpt: 'Sharing my internship journey and valuable lessons learned in the professional world.',
      date: 'Feb 10, 2026',
      readTime: '5 min read',
      category: 'Experience',
      logo: '/2.png',
      cover: '/9.png',
      content: 'My internship at the Department of Trade and Industry (DTI) Region XI was both challenging and fulfilling. It pushed me beyond student life and introduced me to real professional responsibilities. As an Information Technology intern, I gained not only technical skills but also lessons in discipline, adaptability, and growth.\n\nAdjusting to an 8:00 AM–5:00 PM work schedule was one of my first challenges. Balancing academic requirements with daily office tasks required strong time management and commitment. Over time, I learned how to prioritize responsibilities, manage my energy, and maintain focus throughout the workday.\n\nAssigned to the Management Support Services Unit (MSSU), I handled Internal Customer Satisfaction Feedback (ICSF) records and data consolidation. Although repetitive at first, these tasks taught me the importance of accuracy and accountability, showing how even small responsibilities contribute to meaningful organizational decisions.\n\nOne of the most rewarding experiences was contributing to the design and development of the ICSF web-based portal. As a UI/UX designer, seeing my ideas become part of a functional system was fulfilling. Feedback and revisions challenged me, but they also helped me become more adaptable and open to continuous improvement.\n\nI also encountered technical challenges during backend deployment and NAS server configuration. Troubleshooting errors tested my patience and perseverance, but overcoming them boosted my confidence and reinforced the value of persistence.\n\nOverall, my internship at DTI Region XI was more than a requirement—it was a period of personal and professional growth. It strengthened my interest in system development and IT infrastructure while preparing me for future challenges in the industry.'
    },
    {
      title: 'LayoutArtist',
      excerpt: 'Exploring the art of layout design and how it transforms user experiences.',
      date: 'Feb 8, 2026',
      readTime: '7 min read',
      category: 'Design',
      content: 'Layout design is more than just arranging elements on a screen. It\'s about creating harmony, balance, and flow that guides users through a visual experience. Through years of design work, I\'ve learned that great layouts are invisible—they work so well that users don\'t even notice them. They simply feel right.'
    },
    {
      title: 'Barista Maestro',
      excerpt: 'Mastering the craft of coffee making and the philosophy behind perfect espresso shots.',
      date: 'Feb 5, 2026',
      readTime: '6 min read',
      category: 'Coffee',
      content: 'Being a Barista Maestro means understanding the science and art of coffee. From selecting the right beans to perfecting the extraction time, every detail matters. It\'s a craft that requires precision, passion, and continuous learning. The reward? Creating that perfect cup that makes someone\'s day a little better.'
    },
    {
      title: 'Barista',
      excerpt: 'The journey of becoming a barista and the passion that drives exceptional coffee culture.',
      date: 'Feb 1, 2026',
      readTime: '4 min read',
      category: 'Lifestyle',
      content: 'My journey as a barista started as a part-time job but became a passion. Every espresso shot, every latte art, and every customer interaction is an opportunity to create something special. The coffee culture has taught me that it\'s not just about the drink—it\'s about the experience and connection we create.'
    }
  ]

  return (
    <section className="page-section" id="stories">
      <h1 className="page-title">Stories</h1>
      <div className="stories-container">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-card" onClick={() => setSelectedBlog(index)}>
            <div className="blog-header">
              <span className="blog-category">{blog.category}</span>
            </div>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-excerpt">{blog.excerpt}</p>
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

      {selectedBlog !== null && (
        <div className="blog-modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedBlog(null)}>×</button>
            <div className="modal-content">
              <span className="modal-category">{blogs[selectedBlog].category}</span>
              <div className="modal-header">
                <h1 className="modal-title">{blogs[selectedBlog].title}</h1>
                {blogs[selectedBlog].logo && (
                  <div className="modal-logo">
                    <img src={blogs[selectedBlog].logo} alt={blogs[selectedBlog].title} />
                  </div>
                )}
              </div>
              <div className="modal-meta">
                <span>{blogs[selectedBlog].date}</span>
                <span className="divider">·</span>
                <span>{blogs[selectedBlog].readTime}</span>
              </div>
              <div className="modal-body">
                {blogs[selectedBlog].content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Stories
