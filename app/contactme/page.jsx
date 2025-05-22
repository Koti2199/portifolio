import React from "react";
import Contact from "./contactme";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-sky-400">Sai Nallamothu</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          I’m a passionate developer focused on building beautiful and performant web applications.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Contact Me
        </a>
      </section>

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
