import React from "react";
import "./Resume/resume.css";
import Header from "./Resume/Header";
import Footer from "./Resume/Footer";
import Section from "./Resume/Section";

const Main = () => {
  return (
    <>
      <Header />
      <Section
        headline="Career Objective"
        para="To work in an organization which enables me to learn and become a professional in a long-term perspective and also be able to use my skills in a respective manner for the betterment of the organization."
      />

      <Section
        headline="Academic Qualifications"
        data={{
          li1: "Diploma in Mechanical Engineering (2018-2021) - Arka Jain University: 78.33%",
          li2: "Matriculation (2018) - NIOS: 61%",
        }}
      />

      <Section
        headline="Experience / Training"
        data={{
          li1: "1 Year Experience in Induction Hardening Disc and Hardness Checking at Brembo Brakes INDIA PVT LTD, Chakan, Pune (Dec 2020 - Jan 2022)",
          li2: "6 months Training in Software Testing (Dec 2021 - May 2022)",
        }}
      />

      <Section
        headline="Hobbies and Interests"
        data={{
          li1: "Playing Cricket",
          li2: "Travelling",
        }}
      />
      <Section headline="Languages Known" para="English, Hindi, Telugu" />

      <Footer />
    </>
  );
};

export default Main;
