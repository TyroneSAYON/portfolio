function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'REST API', category: 'Architecture' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Docker', category: 'DevOps' }
  ]

  return (
    <section className="page-section" id="techstack">
      <h1 className="page-title">Tech Stack</h1>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <h4>{tech.name}</h4>
            <p>{tech.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
