import React from 'react'
import styles from '../Projects/ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import symfonyBook from '../../assets/viberr.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={symfonyBook} link="https://github.com/ronniel28/symfony-books" title="Symfony Book" description="PHP Symfony simple book management system"/>
        </div>
    </section>
  )
}

export default Projects