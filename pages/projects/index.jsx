import React from 'react'

import BackButton from '@/components/BackButton/BackButton'
import PageLayout from '@/components/layout/layout'
import ProjectItem from '@/components/ProjectItem/ProjectItem'
import { projects } from '@/components/utils/data'

function Projects() {

  return (
    <PageLayout>
      <div className="mb-12">
        <BackButton />
      </div>
      <div className='mb-16 md:mb-24 lg:mb-36'>
        <ul className='group/list'>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}

export default Projects