import React from 'react'
import Badge from '../Badge/Badge'
import { UpArrow } from '../Icons/Icons'

function ExperienceItem({job_end, job_start, company_name, company_link, designation, description, description_list, tags}) {
  return (
    <li className="mb-12">
        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{job_start} — {job_end}</header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <a href={company_link} target='_blank' className="cursor-pointer inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                            {designation} · <span className='inline-block'>{company_name} </span> <UpArrow />
                        </span>
                    </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
                { description_list && (
                    <ul className='list-disc pl-4 mt-4'>
                        { description_list.map((item, index) => (
                            <li key={index} className=' text-sm leading-normal text-slate-400'>{item}</li>
                        ))}
                    </ul>
                    )
                }
                <ul className="mt-2 flex flex-wrap">
                    {tags.map((tag, index) => (
                        <li className="mr-1.5 mt-2" key={index}>
                            <Badge title={tag} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </li>
  )
}

export default ExperienceItem