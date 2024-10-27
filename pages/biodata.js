import React, { useEffect } from "react";
import Head from "next/head";
import { FiArrowRight, FiExternalLink, FiDownload } from "react-icons/fi"; // Importing the external link icon
import Footer from "@/components/Footer/Footer";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons
import { TbLibraryPhoto } from "react-icons/tb"; // Importing social media icons
import { useRouter } from "next/router";

const ProfilePage = () => {
  // Function to handle download button
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/aniruddh_parwal_bio_data.pdf";
    link.download = "Aniruddh_Parwal_Biodata.pdf";
    link.click();
  };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Aniruddh Parwal - Biodata</title>
        <link rel="icon" href="/aniruddh.jpg" />
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
                src="/aniruddh.jpg" // Replace with the actual image path
                alt="Profile"
                className="rounded-lg shadow-lg w-64 h-64 object-cover mb-4"
              />
              {/* Download Button */}
              <div className="flex">
                <button
                  onClick={handleDownload}
                  className="flex items-center bg-primary from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 transform hover:scale-105 mb-4"
                >
                  <FiDownload className="text-sm h-6 mr-2" />
                  BioData
                </button>
                <button
                  onClick={() => router.push("/gallery")}
                  className="flex items-center bg-primary from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 transform hover:scale-105 mb-4"
                >
                  <TbLibraryPhoto className="text-sm h-6 mr-2" />
                  Photo Gallery
                </button>
              </div>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://linkedin.com/in/aniruddhparwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/aniruddhparwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://twitter.com/aniruddhparwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com/aniruddhparwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            {/* Profile Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-primary">
                Aniruddh Parwal
              </h1>
              <p className="text-lg font-semibold mb-4">
                Software Developer at Visit Health, Noida
              </p>
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
                    href="tel:9752225100"
                    className="text-blue-400 hover:underline"
                  >
                    Click here to connect
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
                    <li>
                      <strong>Complexion:</strong> Wheatish
                    </li>
                    <li>
                      <strong>Address:</strong> “ANAND”, 75/4 Kalakhet, Near
                      Jain Temple, Mandsaur (M.P.)
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
                  <strong>Grandmother:</strong> Smt. Chandrakala Parwal
                </li>
                <li>
                  <strong>Father:</strong> Shri Pankaj Parwal (Principal, Aditya
                  Public School, Mandsaur)
                </li>
                <li>
                  <strong>Mother:</strong> Smt. Ritu Parwal (Homemaker)
                </li>
                <li>
                  <strong>Brother:</strong> Kartik Parwal (Pursuing CA)
                </li>
                <li>
                  <strong>Uncle Ji:</strong> Shri Rajdeep Parwal (Family
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
                    href="https://maps.app.goo.gl/ewT7SS1mLGThdpb46"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Maheshwari Coal Depot & Coal Industries, Mandsaur
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/LSv7q4QnjWvqei7U9"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Pioneer Academy, Kalakhet, Mandsaur
                  </a>
                </li>
                <li className="text-blue-400">Shreyas Enterprises, Mandsaur</li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/k15nbsFLrYXvJs5a6"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Raj Bhog AC Dining Hall, Behind Bus Stand, Mandsaur
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/AfLMmjxXrQ14b9HL6"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Computer Sarovar, Mandsaur
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/LSv7q4QnjWvqei7U9"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Surabhi Enterprises, Mandsaur
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/LSv7q4QnjWvqei7U9"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Technlogi Solution Pvt. Ltd., Indore
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Kundli</h2>
            <img
              src="/kundli.jpg"
              alt="Kundli"
              className="rounded-lg shadow-lg mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
