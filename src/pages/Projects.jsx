import '../pages/Pages.css'

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Weather App',
      description: 'A weather application that displays real-time weather data with location search functionality.',
      tags: ['React', 'OpenWeather API', 'CSS']
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for tracking social media metrics across multiple platforms with data visualization.',
      tags: ['React', 'Chart.js', 'Express', 'PostgreSQL']
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for creating and publishing blog posts with markdown support.',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT']
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website showcasing my skills, experience, and projects.',
      tags: ['React', 'React Router', 'CSS', 'Vite']
    }
  ]

  return (
    <section className="page-section" id="projects">
      <h1 className="page-title">Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
