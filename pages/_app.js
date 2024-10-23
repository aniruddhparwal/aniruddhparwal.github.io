"use client";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { clarity } from "react-microsoft-clarity";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("hiii", process.env.NEXT_PUBLIC_clarityId);
    clarity.init(process.env.NEXT_PUBLIC_clarityId);
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
