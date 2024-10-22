'use client'
import AboutMe from '@/components/AboutMe/AboutMe';
import Experiences from '@/components/Experiences/Experiences';
import Projects from '@/components/Projects/Projects';
import PageLayout from '@/components/layout/layout';

import ScrollSpy from "react-ui-scrollspy";

export default function Home() {  

  return (
    <PageLayout>
      <ScrollSpy 
        offsetTop={1} 
        activeClass="active" 
        scrollThrottle={80} 
        useDataAttribute="spy" 
        updateHistoryStack={false} 
      >
        <AboutMe />
        <Experiences />
        <Projects />
      </ScrollSpy>
    </PageLayout>
  )
}
