import React from 'react'
import { useRouter } from 'next/navigation'

function Intro() {

    const router = useRouter();

    const handlePush = (getLink) => {
        router.push('/#'+getLink)
    }

  return (
    <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Aniruddh Parwal</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Developer | SDE-2</h2>
        <p className="mt-4 max-w-xs leading-normal">Building Scalable Solutions and Digital Experiences through Code Mastery.</p>
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li data-spy="about">
                    <span className="group flex items-center py-3 cursor-pointer" onClick={() => handlePush('about')}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </span>
                </li>
                <li data-spy="experiences">
                    <span className="group flex items-center py-3 cursor-pointer" onClick={() => handlePush('experiences')}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </span>
                </li>
                <li data-spy="projects">
                    <span className="group flex items-center py-3 cursor-pointer" onClick={() => handlePush('projects')}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Intro
