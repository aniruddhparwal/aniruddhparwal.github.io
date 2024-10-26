import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer/Footer"; // Ensure Footer is properly imported

const Kundli = () => {
  return (
    <>
      <Head>
        <title>Aniruddh Parwal - Kundli</title>
        <link rel="icon" href="/aniruddh.jpg" />
      </Head>

      <div className="bg-darkBg text-darkText min-h-screen flex flex-col justify-center items-center py-10 px-5">
        {/* Kundli Section */}
        <h1 className="text-4xl font-bold text-primary mb-6">Kundli</h1>
        <img
          src="/kundli.jpg"
          alt="Kundli"
          className="rounded-lg shadow-lg w-96 h-auto object-contain"
        />

        {/* Footer */}
        <div className="mt-10 w-full flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Kundli;
