import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Formation from "./components/Formation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow max-w-screen-2xl mx-auto px-4 py-8">
        <Header />
        <AboutMe />
        <Projects />
        <Formation />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
