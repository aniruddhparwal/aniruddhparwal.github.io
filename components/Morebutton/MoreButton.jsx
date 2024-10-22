import React, { useEffect } from 'react'
import { RightArrow } from '../Icons/Icons'
import { useRouter } from 'next/navigation'

function MoreButton({route, title}) {

  const router = useRouter();

  const handleRoute = () => {
    router.push(route);
  }


  return (
    <span onClick={handleRoute} className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 cursor-pointer group">
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none mr-1">{title}</span>
        <RightArrow />
    </span>
  )
}

export default MoreButton