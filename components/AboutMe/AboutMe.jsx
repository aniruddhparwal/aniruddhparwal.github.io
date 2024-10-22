import React from 'react'

function AboutMe({route}) {
  return (
    <>
        <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="about me">
          <div className="text-slate-500">
            <p className=' mb-2'>I'm Aniruddh Parwal, a passionate <span className='hover-highlight'>Full Stack Developer</span> with a focus on building exceptional digital experiences. My journey has led me to master <span className='hover-highlight'>JavaScript</span>, particularly in the <span className='hover-highlight'>MERN Stack</span>. Currently, I contribute as an <span className='hover-highlight'>SDE-2 Full Stack Developer</span> at <span className="hover-highlight">Visit Health</span>, where I design and optimize systems that impact millions of users.</p>
            <p className=' mb-2'>I specialize in <span className="hover-highlight">Node.js</span> and <span className="hover-highlight">React</span>, leveraging them to create scalable, high-performance web applications. Constantly learning and evolving, I enjoy solving complex problems and integrating <span className="hover-highlight">cutting-edge technologies</span> like AI to drive innovation in <span className="hover-highlight">health tech</span> and beyond.</p>
            <p className=''>Beyond coding, I love the creative process of transforming ideas into <span className="hover-highlight">user-friendly applications</span>. My journey is fueled by a passion for continuous learning, a dedication to the craft, and the pursuit of excellence in every line of <span className="hover-highlight">code</span>.</p>
          </div>
        </section>
    </>
  )
}

export default AboutMe
