"use client";
import React from "react";
import Image from "next/image";

const achievements = [
  {
    title: "UNT Engineering Graduation Spotlight",
    description:
      "Featured by UNT College of Engineering for academic excellence and graduation milestone.",
    year: "2025",
    image: "/assets/images/ach_post.png",
    link: "https://www.linkedin.com/posts/untengineering_untengineering-untgrad-meangreen-activity-7326599335209553921-HdTe",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading - left aligned */}
        <h2 className="text-3xl font-bold mb-6 text-left">Achievements</h2>

        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8"
          >
            {/* Left - Text Content */}
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-sky-300 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {item.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                📅 {item.year}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-sky-600 hover:underline font-medium"
                >
                  View Certificate 🔗
                </a>
              )}
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
