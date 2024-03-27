import React from 'react'
import { projects } from '../constants'
import { arrow, github } from '../assets/icons'
import CTA from '../components/CTA'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold
        drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've embarked on numerous projects over the years,
          but there are a select few that hold a special place in my heart.
          Many of these personal self-development projects are open-source, offering an opportunity for
          collaboration and exploration. If you stumble upon something that catches
          your eye, don't hesitate to delve into the codebase and share your insights
          for further improvement or enhancement. Your contribution and collaboration
          are immensely valued and appreciated.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.theme}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-4">
                {project.github && (
                  <Link
                  to={project.github}
                  target="_blank"
                  rel='noopener noreferrer'
                  className="font-semibold text-red-400 flex items-center"
                  >
                    CodeBase
                    <img
                      src={github}
                      alt="Github Link"
                      className="w-4 h-4 object-contain ml-1"
                      />
                  </Link>
                )}
                {project.link && (
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-500 flex items-center"
                  >
                    Live Link
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain ml-1"
                    />
                  </Link>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects