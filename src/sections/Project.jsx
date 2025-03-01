import React from 'react'
import { projects } from '../config'
import ProjectCard from '../components/ProjectCard'


const Project = () => {
    return (
        <section className='my-20 c-space max-w-7xl mx-auto' id='projects'>
            <h3 className='head-text mb-2'>My Selected Work</h3>
            <p className="grid-subtext">
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
            </p>

            <div className='mt-16 flex flex-wrap gap-7'>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </section>

    )
}

export default Project
