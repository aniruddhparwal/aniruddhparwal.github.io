import React from 'react'

function Badge({title}) {
  return (
    <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{title}</span>
  )
}

export default Badge