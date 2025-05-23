/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const achievements = [
  {
    title: "UNT Engineering Recognition for Academic Excellence",
    description:
      "Featured by UNT College of Engineering for academic excellence and graduation milestone.",
    year: " 2025",
    image: "/assets/images/ach_post.png",
    link: "https://www.linkedin.com/posts/untengineering_untengineering-untgrad-meangreen-activity-7326599335209553921-HdTe",
  },
];

function AchievementsComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-2xl text-left px-4 lg:px-0">
        Achievements
      </h2>

      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="mt-8 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800 dark:shadow-white"
          >
            {/* Text Content - Top */}
            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-sky-300 mb-2">
                {achievement.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                {achievement.description}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                Awarded year {achievement.year}
              </p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-sky-600 hover:underline font-semibold"
                >
                  View 🔗
                </a>
              )}
            </div>

            {/* Image Content - Bottom */}
            <div className="flex justify-center">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="rounded-xl object-contain max-h-80 w-auto shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AchievementsComponent;
