import './Skills.css'

function Skills() {
  const skills = [
    {
      title: 'Graphic Design',
      image: '/graphicdesign.png'
    },
    {
      title: 'Illustrations',
      image: '/illustrations.png'
    },
    {
      title: 'Social Media',
      image: '/socialmedia.png'
    },
    {
      title: 'UI/UX Design',
      image: '/uiuxdesign.png'
    },
    {
      title: 'Virtual Task',
      image: '/Virtualtasks.png'
    },
    {
      title: 'Web Development',
      image: '/webdevelopment.png'
    }
  ]

  const designingTools = [
    { name: 'Adobe XD', logo: '/iconlogo/xd.png' },
    { name: 'InDesign', logo: '/iconlogo/indesign.png' },
    { name: 'Photoshop', logo: '/iconlogo/photoshop.png' },
    { name: 'Illustrator', logo: '/iconlogo/illustrator.png' },
    { name: 'Figma', logo: '/iconlogo/figma .png' },
    { name: 'Canva', logo: '/iconlogo/canva.png' }
  ]
  const webDevTools = [
    { name: 'HTML', logo: '/iconlogo/html.png' },
    { name: 'CSS', logo: '/iconlogo/css.png' },
    { name: 'Javascript', logo: '/iconlogo/javascript.png' },
    { name: 'Typescript', logo: '/iconlogo/typescript.png' },
    { name: 'React', logo: '/iconlogo/react.png' },
    { name: 'Vite', logo: '/iconlogo/vite.png' },
    { name: 'Next.JS', logo: '/iconlogo/nextjs.png' },
    { name: 'Laravel', logo: '/iconlogo/laravel.png' },
    { name: 'Python', logo: '/iconlogo/python.png' },
    { name: 'Java', logo: '/iconlogo/java.png' },
    { name: 'Tailwind CSS', logo: '/iconlogo/tailwind.png' },
    { name: 'MySQL', logo: '/iconlogo/mysql.png' }
  ]

  return (
    <section className="page-section" id="skills">
      <h1 className="page-title">Skills</h1>
      <div className="skills-gallery">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.title} />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
      <p className="skills-caption">A blend of creative design, user-focused thinking, and practical digital skills that support both visual and technical projects.</p>

      <div className="tech-stack-section">
        <h2 className="tech-stack-title">Tech Stack</h2>
        
        <div className="tech-category">
          <h3 className="tech-category-title">Designing Tools</h3>
          <div className="tech-grid">
            {designingTools.map((tool, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon-wrapper">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-category-title">Web Development</h3>
          <div className="tech-grid">
            {webDevTools.map((tool, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon-wrapper">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="tech-stack-caption">The tech I use to bring ideas to life, from design to development.</p>
      </div>
    </section>
  )
}

export default Skills