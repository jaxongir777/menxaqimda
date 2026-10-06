import React from 'react'
import './projects.css'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'FinSweat',
      description: 'Zamonaviy va responsive web loyiha.',
      link: 'https://finsweat-2cnk.vercel.app/',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },

    {
      id: 2,
      title: 'Clicon',
      description: 'Online shop dizayniga asoslangan web loyiha.',
      link: 'https://clicon-weld.vercel.app/',
      technologies: ['React', 'CSS', 'JavaScript']
    },

    {
      id: 3,
      title: 'Shop.co',
      description: 'Zamonaviy online shopping web loyihasi.',
      link: 'https://shop-co-zeta-nine.vercel.app/',
      technologies: ['React', 'CSS', 'JavaScript']
    },

    {
      id: 4,
      title: 'iFly',
      description: 'Zamonaviy web interfeysga ega loyiha.',
      link: 'https://ifly-three.vercel.app/',
      technologies: ['React', 'CSS']
    },

    {
      id: 5,
      title: 'DI',
      description: 'Professional kompaniya uchun yaratilgan web sayt.',
      link: 'https://di-z4up.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'JavaScript']
    }
  ]

  return (
    <section className="projects">

      <p className="projects-small-title">
        MENING ISHLARIM
      </p>

      <h1>
        Mening <span>loyihalarim</span>
      </h1>

      <p className="projects-description">
        Frontend dasturlashni o‘rganish davomida
        yaratgan loyihalarim.
      </p>

      <div className="projects-list">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-number">
              0{project.id}
            </div>

            <h2>
              {project.title}
            </h2>

            <p>
              {project.description}
            </p>

            <div className="project-technologies">

              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Loyihani ko‘rish →
            </a>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects