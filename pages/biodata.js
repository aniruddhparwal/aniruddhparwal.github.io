import React, { useEffect } from "react";
import Head from "next/head";
import { FiArrowRight, FiExternalLink } from "react-icons/fi"; // Importing the external link icon

const ProfilePage = () => {
  // Function to handle download button
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/aniruddh_parwal_bio_data.pdf";
    link.download = "Aniruddh_Parwal_Biodata.pdf";
    link.click();
  };

  return (
    <>
      <Head>
        <title>Aniruddh Parwal - Biodata</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="bg-darkBg text-darkText min-h-screen py-10 px-5">
        {/* Main Container */}
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <img
                src="/aniruddh.jpg"
                alt="Profile"
                className="rounded-lg shadow-lg w-80 h-80 object-cover mb-4"
              />
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Download Bio Data
              </button>
            </div>

            {/* Profile Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-primary">
                Aniruddh Parwal
              </h1>
              <p className="text-lg font-semibold mb-4">Software Developer</p>
              <p className="mb-4 text-highlight">
                I am a software engineer with a simple lifestyle and strong
                family values. I believe in hard work, honesty, and respecting
                elders. I am looking for a life partner who values family,
                shares similar thoughts, and is ready to walk together in this
                journey of life with understanding and respect.
              </p>

              {/* Contact Info */}
              <div className="text-lg font-semibold text-highlight mb-6">
                <p>
                  📞 Contact:{" "}
                  <a
                    href="tel:9425923700"
                    className="text-blue-400 hover:underline"
                  >
                    9425923700
                  </a>
                </p>
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:aniruddhparwal@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    aniruddhparwal@gmail.com
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* About Me Section */}
                <div>
                  <h2 className="text-xl font-semibold text-primary">
                    About Me
                  </h2>
                  <ul className="list-none mt-2 space-y-1 text-highlight">
                    <li>
                      <strong>Date of Birth:</strong> 17th Dec 1999
                    </li>
                    <li>
                      <strong>Time & Place:</strong> 12:14 PM, Mandsaur
                    </li>
                    <li>
                      <strong>Height:</strong> 5 ft. 11 in
                    </li>
                    <li>
                      <strong>Sankhein:</strong> Parwal / Kabra
                    </li>
                  </ul>
                </div>
                {/* Interests Section */}
                <div>
                  <h2 className="text-xl font-semibold text-primary">
                    Interests
                  </h2>
                  <ul className="list-none mt-2 space-y-1">
                    <li>Sports</li>
                    <li>Music</li>
                    <li>Travel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Family Information Section */}
          <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold text-primary">About Family</h2>

            {/* Link Icon on the Right */}
            <a
              href="/family?pass=1712" // Redirect to another page for family history
              className="text-blue-500 hover:underline flex items-center space-x-2 ml-2"
            >
              <FiExternalLink size={25} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Family Members Section */}
            <div>
              <h3 className="text-xl font-semibold text-primary">
                Family Members
              </h3>
              <ul className="list-none mt-2 space-y-2 text-highlight">
                <li>
                  <strong>Grandfather:</strong> Shri Gopal Krishna Ji Parwal
                </li>
                <li>
                  <strong>Father:</strong> Shri Pankaj Parwal (Principle, Aditya
                  Public School)
                </li>
                <li>
                  <strong>Mother:</strong> Smt. Ritu Parwal (Homemaker)
                </li>
                <li>
                  <strong>Brother:</strong> Kartik Parwal (Pursuing CA)
                </li>
                <li>
                  <strong>Tau Ji:</strong> Shri Rajdeep Parwal (Self-owned
                  Business)
                </li>
              </ul>
            </div>

            {/* Business Establishments Section */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Business Establishments
              </h3>
              <ul className="list-none mt-2 space-y-2">
                <li>
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Maheshwari Coal Depot & Coal Industries
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Sarovar Bhojanalaya
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Pioneer Academy
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Shreyas Enterprises
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Surabhi Enterprises
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
