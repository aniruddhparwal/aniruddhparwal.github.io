// pages/family.js

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import clarity from "react-microsoft-clarity";

const familyData = {
  // GreatGrandParents: [
  //   {
  //     name: "Late Murlidhar Ji Parwal",
  //   },
  //   {
  //     name: "Late Geeta Devi Parwal",
  //   },
  // ],
  GrandParents: [
    {
      name: "Shri Gopal Krishna Ji Parwal",
      occupation: "Family Business",
      relation: "Dada ji",
      contact: 9425107800,
    },
    {
      name: "Smt. Chandrakala Parwal",
      spouse: "W/O Gopal Krishna Parwal",
      relation: "Dadi ji",
    },
    {
      name: "Shri Suresh Ji Parwal",
      relation: "Chote Dada ji",
      contact: 9460076979,
      occupation:
        "Senior Administrator at Jain Diwakar Shree Labhmuni Eye hospital, Mandsaur",
    },
    {
      name: "Smt. Chandrakanta Parwal",
      spouse: "W/O Shri Suresh Parwal",
      relation: "Chote Dadi ji",
    },
    {
      name: "Shri Dinesh Ji Parwal",
      contact: 9406853033,
      relation: "Chote Dada ji",
      occupation: "Family Business",
    },
    {
      name: "Smt. Vidhya Parwal",
      spouse: "W/O Shri Dinesh Parwal",
      relation: "Chote Dadi ji",
    },
  ],
  Parents: [
    {
      name: "Shri Pankaj Parwal",
      occupation: "Principal, Aditya Public School, Mandsaur (M.P.)",
      contact: 9425923700,
    },
    {
      name: "Smt. Ritu Parwal",
      occupation: "Homemaker",
    },
  ],
  UncleAndAunt: [
    {
      name: "Shri Rajdeep Parwal",
      contact: 9425327666,
      parent: "S/O Chandrakala Gopal Krishna Parwal",
      occupation: "Family Business",
    },
    {
      name: "Smt. Anusha Parwal",
      spouse: "W/O Shri Rajdeep Parwal",
    },
  ],
  CousinUnclesAndAunts: [
    {
      name: "Shri Abhishek Parwal",
      contact: 9425105513,
      parent: "S/O Chandrakanta Suresh Parwal",
      occupation: "Family Business",
    },
    {
      name: "Smt. Rakhi Parwal",
      spouse: "W/O Shri Abhishek Parwal",
    },
    {
      name: "Shri Saurabh Parwal",
      contact: 9893609995,
      parent: "S/O Vidhya Dinesh Parwal",
      occupation: "Family Business",
    },
    {
      name: "Smt. Priyanka Parwal",
      spouse: "W/O Shri Saurabh Parwal",
    },
    {
      name: "Shri Gaurav Parwal",
      contact: 9425327566,
      parent: "S/O Vidhya Dinesh Parwal",
      occupation: "Family Business",
    },
    {
      name: "Smt. Arpita Parwal",
      spouse: "W/O Shri Gaurav Parwal",
    },
  ],
  BuaJi: [
    {
      name: "Smt. Deepshikha W/O Shri Shailendra Ji Palod",
      place: "Chittorgarh (Raj.)",
      contact: 9414306868,
    },
  ],
  CousinBuaJi: [
    {
      name: "Smt. Garima W/O Shri Manoj Ji Maheshwari",
      place: "Neemuch (M.P.)",
      contact: 9826061266,
    },
  ],
  MaternalFamily: [
    {
      name: "Shri Radhyshyam Ji Kabra",
      contact: 9351419617,
      relation: "Nana ji",
      place: "Chittorgarh (Raj.)",
    },
    {
      name: "CA Vaibhav Kabra",
      occupation: "CFO, Royal Sundaram General Insurance",
      relation: "Mama ji",
      contact: 7666282930,
      place: "Chennai",
    },
    {
      name: "Shri Deepak Kabra",
      occupation: "Experienced ASIC Verifier, Ericsson",
      relation: "Mama ji",
      contact: +46728370758,
      place: "Stockholm, Swedan",
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
      parent: "D/O Anusha Rajdeep Parwal",
    },
    {
      name: "Shreyas Parwal",
      education: "Schooling 11th",
      parent: "S/O Anusha Rajdeep Parwal",
    },
    {
      name: "Divyansh Parwal",
      education: "Schooling 10th",
      parent: "S/O Rakhi Abhishek Parwal",
    },
    {
      name: "Heenal Parwal",
      education: "Schooling Junior KG",
      parent: "D/O Priyanka Saurabh Parwal",
    },
    {
      name: "Hriday Parwal",
      parent: "S/O Arpita Gaurav Parwal",
    },
    {
      name: "Hridaan Parwal",
      parent: "S/O Arpita Gaurav Parwal",
    },
    {
      name: "Granth Parwal",
      parent: "S/O Priyanka Saurabh Parwal",
    },
  ],
};

const PASSWORD = process.env.NEXT_PUBLIC_FAMILY_PAGE_PASSWORD;

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const handlePhoneClick = (personName, number) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", "PhoneNoClicked", { name, personName, number });
  }
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
      <a
        href={`tel:${contact}`}
        onClick={() => handlePhoneClick(name, contact)}
      >
        <p className="text-gray-400 mb-1">📞 Click here to connect</p>
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
        <link rel="icon" href="/aniruddh.jpg" />
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
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
};

export default Family;
