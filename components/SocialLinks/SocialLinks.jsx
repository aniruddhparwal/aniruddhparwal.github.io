import React from 'react'
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../Icons/Icons'

function SocialLinks() {
  return (
    <>
        <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://github.com/aniruddhparwal" target="_blank" aria-label="Click to visit Github Profile" alt="Github">
                    <GithubIcon style={{height: 20, width: 20,}} />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://twitter.com/aniruddhparwal" target="_blank" aria-label="Click to visit Twitter Profile" alt="Twitter">
                    <TwitterIcon style={{height: 20, width: 20,}} />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/aniruddhparwal/" target="_blank" aria-label="Click to visit Linkedin Profile" alt="Linkedin">
                    <LinkedInIcon style={{height: 20, width: 20,}} />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.instagram.com/aniruddhparwal/" target="_blank"  aria-label="Click to visit Instagram Profile" alt="Instagram">
                    <InstagramIcon style={{height: 20, width: 20,}} />
                </a>
            </li>
        </ul>
    </>
  )
}

export default SocialLinks