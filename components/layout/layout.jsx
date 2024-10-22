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
                <title>Aniruddh Parwal</title>
                {/* <link rel="icon" href="/favicon-96x96.png" /> */}
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