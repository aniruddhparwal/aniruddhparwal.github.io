"use client";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { clarity } from "react-microsoft-clarity";
import Head from "next/head";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("hiii", process.env.NEXT_PUBLIC_clarityId);
    clarity.init(process.env.NEXT_PUBLIC_clarityId);
  }, []);
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
