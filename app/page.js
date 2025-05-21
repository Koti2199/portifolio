"use client";

import { useEffect } from "react";

import AboutMeComponent from "./about-me/about-me";
import IntroSection from "./components/introSection";
import EducationComponent from "./education/education";
import SkillsComponent from "./skills/skills";
import ExperienceComponent from "./experience/experience";
import ProjectsComponent from "./projects/projects";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          scrollTo(element);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollTo = (element) => {
    const offsetTop = element.getBoundingClientRect().top;
    const duration = 800;

    const startTime = performance.now();
    const startOffset = window.scrollY;

    function scroll(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      window.scrollTo({
        top: startOffset + offsetTop * ease(progress),
        behavior: "auto",
      });

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };

  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container-xl md:mx-auto flex min-h-screen flex-col items-center justify-between p-2 pt-24">
        <section className="d-block px-2 py-14 w-9/12 sm:w-full sm:pt-0 sm:pb-18 lg:px-4">
          <IntroSection />
        </section>

        <section
          id="about-me"
          className="d-block px-2 py-4 w-9/12 sm:w-full sm:py-1 lg:px-4"
        >
          <AboutMeComponent />
        </section>

        <section
          id="education"
          className="d-block px-2 py-8 w-9/12 sm:w-full sm:py-8 lg:px-4"
        >
          <EducationComponent />
        </section>

        <section
          id="experience"
          className="d-block px-2 py-8 w-9/12 sm:w-full sm:py-8 lg:px-4"
        >
          <ExperienceComponent />
        </section>

        <section
          id="skills"
          className="d-block px-2 py-8 w-9/12 sm:w-full sm:py-8 lg:px-4"
        >
          <SkillsComponent />
        </section>

        <section
          id="projects"
          className="d-block px-2 py-8 w-9/12 sm:w-full sm:py-8 lg:px-4"
        >
          <ProjectsComponent />
        </section>
      </div>
    </div>
  );
}
