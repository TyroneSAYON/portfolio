import '../pages/Pages.css'

function Experience() {
  const experiences = [
    {
      company: 'Tech Company Name',
      role: 'Senior Developer',
      duration: 'Jan 2023 - Present',
      description: 'Led development of multiple full-stack applications, mentored junior developers, and improved system performance by 40%.'
    },
    {
      company: 'Web Solutions Inc',
      role: 'Full Stack Developer',
      duration: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained 15+ client projects using React and Node.js, ensuring 99.9% uptime and delivering features on schedule.'
    },
    {
      company: 'StartUp Studios',
      role: 'Junior Developer',
      duration: 'Jan 2020 - May 2021',
      description: 'Contributed to frontend development, fixed bugs, and learned modern web development practices in an agile environment.'
    }
  ]

  return (
    <section className="page-section" id="experience">
      <h1 className="page-title">Experience</h1>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.company}</h3>
            <div className="role">{exp.role}</div>
            <div className="duration">{exp.duration}</div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
