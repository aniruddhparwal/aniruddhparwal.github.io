import React from 'react'
import { LeftArrow } from '../Icons/Icons'
import { useRouter } from 'next/navigation'

function BackButton() {

    const router = useRouter();

  return (
    <div>
        <span onClick={router.back} className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 cursor-pointer">
            <LeftArrow />
            Back
        </span>
    </div>
  )
}

export default BackButton