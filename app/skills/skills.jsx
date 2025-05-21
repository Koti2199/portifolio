import { useTheme } from "next-themes";
import SkillCard from "../components/skillCard";
import SoftSkillCard from "../components/softSkillsCard";

function SkillsComponent() {
  const { resolvedTheme } = useTheme();

  const technicalSkills = [
    // C, JavaScript, Typescript, Python, HTML, CSS, React, React Native, Node.js, Jest, Sequelize, Express
    { name: "C #", imageUrl: "/assets/svgs/csharp.svg" },
    { name: ".Net core", imageUrl: "/assets/svgs/netcore.svg" },
    { name: "Javascript", imageUrl: "/assets/svgs/javascript.svg" },
    { name: "Microsoft SQL", imageUrl: "/assets/images/mssql.svg" },
    { name: "Python", imageUrl: "/assets/svgs/python.svg" },
    { name: "HTML", imageUrl: "/assets/svgs/html5.svg" },
    { name: "CSS", imageUrl: "/assets/svgs/css.svg" },
    { name: "React", imageUrl: "/assets/svgs/react.svg" },
    { name: "React Native", imageUrl: "/assets/svgs/react.svg" },
    { name: "NextJs", imageUrl: "/assets/images/nextJs1.jpeg" },
    { name: "Tailwind", imageUrl: "/assets/images/tailwind.webp" },
    { name: "C", imageUrl: "/assets/images/C.png" },
    {
      name: "Node.js",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/svgs/node-js.svg"
          : "/assets/svgs/nodejs.svg",
    },
    {
      name: "Express",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/images/express.png"
          : "/assets/svgs/express.svg",
    },
    { name: "Postgres", imageUrl: "/assets/svgs/postgresql.svg" },
    { name: "MySql", imageUrl: "/assets/svgs/mysql.svg" },
    { name: "MongoDb", imageUrl: "/assets/svgs/mongodb.svg" },
    {
      name: "AWS",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/svgs/aws-dark.svg"
          : "/assets/svgs/aws.svg",
    },
    { name: "Jenkins", imageUrl: "/assets/svgs/jenkins.svg" },
    { name: "Git", imageUrl: "/assets/svgs/git.svg" },
    { name: "Postman", imageUrl: "/assets/svgs/postman.svg" },
    { name: "npm", imageUrl: "/assets/svgs/npm.svg" },
  ];

  const softSkills = [
    { name: "Leadership", description: "" },
    { name: "Effective Communication", description: "" },
    { name: "Team Management", description: "" },
    { name: "Problem-Solving", description: "" },
    { name: "Collaboration", description: "" },
    { name: "Learning Agility", description: "" },
    { name: "Critical Thinking", description: "" },
    { name: "Time Management", description: "" },
  ];

  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Skills
      </h2>
      <h4 className="text-2xl mx-auto max-w-6xl font-semibold mt-4 py-2 sm:text-xl">
        Technical Skills
      </h4>
      <div className="mx-auto max-w-6xl flex flex-wrap justify-center">
        {technicalSkills?.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              name={skill.name}
              imageUrl={skill.imageUrl}
            />
          );
        })}
      </div>

      <h4 className="text-2xl mx-auto max-w-6xl font-semibold mt-4 py-2 sm:text-xl">
        Soft Skills
      </h4>
      <div className="mx-auto max-w-6xl flex justify-center flex-wrap overflow-x-scroll sm:flex-nowrap sm:justify-normal">
        {softSkills?.map((skill, index) => {
          return (
            <SoftSkillCard
              key={index}
              name={skill.name}
              description={skill.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default SkillsComponent;
