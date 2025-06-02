import Link from "next/link";

export default function AboutMeComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-4xl">About Me</h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        <blockquote className="text-xl italic hover:bg-opacity-90">
          <p className="my-8 text-justify">
            {`" A dedicated and skilled Full-Stack Developer from University of North Texas with over 4 years of hands-on experience in creating dynamic, scalable, and user-friendly web and mobile applications. Proficient in both front-end and back-end development, with a strong command of modern technologies including React, Node.js, JavaScript, HTML, CSS, and SQL databases. Adept at working through all stages of the Software Development Life Cycle (SDLC), from conceptualization and design to development, testing, and deployment. Passionate about building efficient, high-performance applications and continuously expanding technical expertise to keep up with evolving industry trends."`}
          </p>
        </blockquote>
      </div>
    </>
  );
}
