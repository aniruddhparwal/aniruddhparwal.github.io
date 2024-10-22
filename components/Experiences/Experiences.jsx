import React from 'react'
import ExperienceItem from '../ExperienceItem/ExperienceItem'
import MoreButton from '../Morebutton/MoreButton'
import { experiences } from '@/components/utils/data'

function Experiences() {
  
  return (
    <>
        <section 
          id='experiences' 
          className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        >
          <ol className='group/list'>
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={index}
                job_start={experience.job_start}
                job_end={experience.job_end}
                company_name={experience.company_name}
                company_link={experience.company_link}
                designation={experience.designation}
                description={experience.description}
                description_list={experience.description_list}
                tags={experience.tags}
              />
            ))}
          </ol>
          
          <div className="mt-12">
            <MoreButton route="/resume.pdf" title="View Full Resume" />
          </div>
        </section>
    </>
  )
}

export default Experiences