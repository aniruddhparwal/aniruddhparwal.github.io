// pages/family.js

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";

const familyData = {
  GreatGrandParents: [
    {
      name: "Late Murlidar Ji Parwal",
    },
    {
      name: "Late Geeta Devi Parwal",
    },
  ],
  GrandParents: [
    {
      name: "Shri Gopal Krishna Ji Parwal",
      occupation: "Family Business",
      relation: "Dada ji",
      contact: 9425107800,
    },
    {
      name: "Smt. Chandrakala Parwal",
      relation: "Dadi ji",
    },
    {
      name: "Shri Suresh Parwal",
      relation: "Chote Dada ji",
      occupation: "Manager at Labhmuni, Mandsaur",
    },
    {
      name: "Smt. Chandrakanta Parwal",
      relation: "Chote Dadi ji",
    },
    {
      name: "Shri Dinesh Ji Parwal",
      relation: "Chote Dada ji",
      occupation: "Family Business",
    },
    {
      name: "Smt. Vidhya Parwal",
      relation: "Chote Dadi ji",
    },
  ],
  Parents: [
    {
      name: "Shri Pankaj Parwal",
      occupation: "Principle, Aditya Public School, Mandsaur (M.P.)",
      contact: 9425923700,
    },
    {
      name: "Smt. Ritu Parwal",
      occupation: "Homemaker",
    },
  ],
  KakaJi: [
    {
      name: "Shri Rajdeep Parwal",
      parent: "S/O Gopal Krishna Parwal",
      occupation: "Self-owned Business",
    },
    {
      name: "Shri Abhishek Parwal",
      parent: "S/O Suresh Parwal",
      occupation: "Self-owned Business",
    },
    {
      name: "Shri Saurabh Parwal",
      parent: "S/O Dinesh Parwal",
      occupation: "Self-owned Business",
    },
    {
      name: "Shri Gaurav Parwal",
      parent: "S/O Dinesh Parwal",
      occupation: "Self-owned Business",
    },
  ],
  BuaJi: [
    {
      name: "Smt. Deepshikha",
      spouse: "W/O Shri Shailendra Ji Palod",
      place: "Chittorgarh (Raj.)",
    },
  ],
  MaternalFamily: [
    {
      name: "Shri Radhyshyam Kabra",
      relation: "Nana ji",
    },
    {
      name: "Shri Vaibhav Kabra",
      occupation: "CFO, Royal Sundaram General Insurance",
      relation: "Mama ji",
    },
    {
      name: "Shri Deepak Kabra",
      occupation: "Experienced ASIC Verifier, Ericsson",
      relation: "Mama ji",
    },
  ],
  Sibling: [
    {
      name: "Kartik Parwal (Younger)",
      occupation: "Pursuing CA",
    },
  ],
  "Cousins (younger)": [
    {
      name: "Sumedha Parwal",
      education: "Pursuing MBA",
      parent: "D/O Rajdeep Parwal",
    },
    {
      name: "Shreyas Parwal",
      education: "Schooling 11th",
      parent: "S/O Rajdeep Parwal",
    },
    {
      name: "Divyash Parwal",
      education: "Schooling 10th",
      parent: "S/O Abhishek Parwal",
    },
    {
      name: "Heenal Parwal",
      parent: "D/O Saurabh Parwal",
    },
    {
      name: "Hriday Parwal",
      parent: "S/O Gaurav Parwal",
    },
    {
      name: "Hridan Parwal",
      parent: "S/O Gaurav Parwal",
    },
    {
      name: "TBD",
      parent: "S/O Saurabh Parwal",
    },
  ],
};

const PASSWORD = process.env.NEXT_PUBLIC_FAMILY_PAGE_PASSWORD; // Store this in your .env file

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const FamilyMemberCard = ({
  name,
  occupation,
  contact,
  additionalInfo,
  parent,
  place,
  relation,
  spouse,
  education,
}) => (
  <motion.div
    className="p-6 bg-[#111827] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out text-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Trigger animation only once
    variants={fadeInUp}
  >
    <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
    {relation && <p className="text-gray-400 mb-1">🔗 {relation}</p>}
    {occupation && <p className="text-gray-400 mb-1">💼 {occupation}</p>}
    {contact && (
      <a href={`tel:${contact}`}>
        <p className="text-gray-400 mb-1">📞 {contact}</p>
      </a>
    )}
    {additionalInfo && <p className="text-gray-400 mb-1">{additionalInfo}</p>}
    {parent && <p className="text-gray-400 mb-1">👪 {parent}</p>}
    {education && <p className="text-gray-400 mb-1">🏫 {education}</p>}
    {spouse && <p className="text-gray-400 mb-1">💑 {spouse}</p>}
    {place && <p className="text-gray-400">📍 {place}</p>}
  </motion.div>
);

const Family = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if password is provided in the URL params
    let { pass } = router.query;
    const getPass = sessionStorage.getItem("Pass");
    if (getPass) {
      pass = getPass;
    }
    if (pass) {
      validatePassword(pass);
      sessionStorage.setItem("Pass", PASSWORD);
    }
  }, [router.query]);

  const validatePassword = (inputPassword) => {
    if (inputPassword === PASSWORD) {
      setIsAuthenticated(true);

      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
    let newURL = location.href.split("?")[0];
    window.history.pushState("object", document.title, newURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword(password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        <motion.div
          className="p-8 bg-[#1e293b] rounded-xl shadow-md text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-3xl font-bold mb-6">Family Page Access</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Aniruddh Parwal - Family Details</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-[#0f172a] py-12 px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg bg-[#1e293b]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation only once when 10% is in view
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Aniruddh's Family Details
          </h1>

          {Object.keys(familyData).map((category, index) => (
            <motion.section
              key={index}
              className="mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-gray-300 mb-6">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {familyData[category].map((member, idx) => (
                  <FamilyMemberCard
                    key={idx}
                    name={member.name}
                    occupation={member.occupation}
                    contact={member.contact}
                    additionalInfo={member.additionalInfo}
                    parent={member.parent}
                    place={member.place}
                    relation={member.relation}
                    spouse={member.spouse}
                    education={member.education}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Family;