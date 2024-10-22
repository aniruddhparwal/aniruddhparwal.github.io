import AboutMe from '@/components/AboutMe/AboutMe'
import BackButton from '@/components/BackButton/BackButton'
import PageLayout from '@/components/layout/layout'
import React, {useEffect} from 'react'

function About() {

  return (
    <PageLayout>
      <BackButton />
      <AboutMe />
    </PageLayout>
  )
}

export default About