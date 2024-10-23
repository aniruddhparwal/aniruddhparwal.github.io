import React from 'react';

import { Inter } from 'next/font/google'
import Head from 'next/head';
import Intro from '@/components/Intro/Intro';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Footer from '../Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

function PageLayout({children}) {

  return (
    <main className={`${inter.className}`}>
        <div>
            <Head>
                <title>Aniruddh Parwal | Full-Stack Developer & System Design Expert</title>
                <meta name="description" content="Aniruddh Parwal, a Full-Stack Developer and System Design Expert with expertise in MERN stack, AR development, and crafting digital experiences. Currently working as an SDE-2 at Visit Health Pvt. Ltd." />
                <meta name="keywords" content="Aniruddh Parwal, Full-Stack Developer, System Design, MERN Stack, JavaScript, React, Node.js, AR Developer, Visit Health, Noida, Software Engineer, Digital Experiences" />
                <meta name="author" content="Aniruddh Parwal" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.aniruddhparwal.com" />
                <meta property="og:title" content="Aniruddh Parwal | Full-Stack Developer & System Design Expert" />
                <meta property="og:description" content="Aniruddh Parwal, Full-Stack Developer with expertise in MERN stack, system design, and digital solutions. Learn more about his projects and career." />
                <meta property="og:image" content="/aniruddh.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.aniruddhparwal.com/" />
                <meta property="twitter:title" content="Aniruddh Parwal | Full-Stack Developer & System Design Expert" />
                <meta property="twitter:description" content="Learn more about Aniruddh Parwal, Full-Stack Developer, MERN stack expert, and System Design enthusiast. See his latest projects and contributions." />
                <meta property="twitter:image" content="/aniruddh.jpg" />

                {/* Favicon */}
                <link rel="icon" href="/aniruddh.jpg" />
            </Head>

            <div className="bg-slate-900">
                <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-4 min-h-screen">
                        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                            <Intro />
                            <SocialLinks />
                        </header>
                        <div className="pt-24 lg:w-1/2 lg:py-24 flex flex-col">

                            <div className="flex-1">
                                {children}
                            </div>

                            <Footer />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
  )
}

export default PageLayout