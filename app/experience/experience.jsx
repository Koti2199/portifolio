/* eslint-disable @next/next/no-img-element */
const experience = [

  {
    companyName: "Infosys Pvt Ltd",
    title: "Senior Systems Engineer",
    duration: "Nov 2021 – Jul 2023",
    location: "Hyderabad, Telangana",
    description: [
      "Built and supported web applications using \textit{ASP.NET}, \textit{SQL Server}, \textit{JavaScript}, \textit{jQuery}, \textit{HTML}, and \textit{CSS}, focusing on reliability and ease of use.",
      "Developed stored procedures, views, and user-defined functions in \textit{SQL Server}, helping reduce database response times.",
      "Unit testing, debugging, and logs were handled to identify and fix issues during development and after deployment.",
      "Implemented server load balancing using \textit{Azure Load Balancer} to ensure high availability, scalability, and fault tolerance across web applications.",
      "Configured authentication mechanisms and enforced access control policies using built-in .NET security features.",
      "Improved system performance by around 15\% through better SQL query design and indexing.",
      "Automated business email notifications triggered by transaction status updates using SSIS (SQL Server Integration Services).",
      "Worked through all parts of the \textit{Software Development Life Cycle (SDLC)}, including planning, coding, testing, and maintenance.",
      "Took part in \textit{SCRUM} team activities like sprint planning and daily meetings to stay on track with development goals.",
      "Moved applications between servers and updated source code to latest versions without interrupting business operations and workflow.",
      "Used \textit{Crystal Reports} to generate reports for HR teams based on business data.",
      "Worked directly with users and clients to fix application issues and update features based on their feedback.",
      "Supported over 10 different applications, keeping them updated and solving technical issues when needed.",
      "Updated older systems to current platforms, making sure data stayed safe and apps stayed online during the switch.",
    ],
    logo: "/assets/images/infy.jpg",
  },
  {
    companyName: "Wipro Ltd",
    title: "Software Engineer",
    duration: "Jun 2019 – Nov 2021",
    location: "Hyderabad, Telangana",
    description: [
      "Designed and built internal applications to streamline financial processes using ASP.NET Core MVC and C\#.",
      "Created and maintained SQL Server databases, including stored procedures, views, and triggers, to support day-to-day business operations.",
      "Developed REST APIs to connect internal systems and third-party platforms, improving data flow and automation.",
      "Added role-based access and form validation features to ensure the security and reliability of applications.",
      "Improved overall performance by optimizing SQL queries and API logic, reducing load times and improving user experience.",
      "Set up automated workflows using GitHub Actions to handle builds, run tests, and deploy code with fewer errors.",
      "Found and fixed bugs during testing phases (SIT and UAT), helping to reduce problems after release.",
      "Handled deployments to IIS servers and made sure all documentation was up to date for future releases and rollbacks.",
      "Worked as part of an Agile team, attending stand-ups, planning meetings, and retrospectives to stay aligned and meet goals.",
    ],
    logo: "/assets/images/wipro.png",
  },
];

function ExperienceComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-2xl text-left px-4 lg:px-0">
        Experience
      </h2>

      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-lg rounded-xl p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className=" sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <div className="flex items-center sm:flex-col sm:justify-center">
                  <img
                    src={experience.logo}
                    alt={experience.companyName}
                    className="w-auto h-16 object-cover shadow-xl ring-1 ring-gray-400/10 sm:flex-1 sm:mb-0 dark:ring-white sm:object-none sm:h-auto"
                    width={100}
                    height={100}
                  />
                  {/* <p className="ml-8 text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p> */}
                  <div className="ml-8 sm:ml-0 sm:mt-4 sm:items-center">
                    <p className="text-lg font-semibold sm:text-m">
                      {experience.companyName} -{" "}
                      <span className="font-medium text-base">
                        {experience.location}
                      </span>
                    </p>
                    <p className="italic sm:text-sm ">{experience.duration}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p>
                  {/* <p className="text-lg font-semibold sm:text-m">
                    {experience.companyName} -{" "}
                    <span className="font-medium text-base">
                      {experience.location}
                    </span>
                  </p>
                  <p className="italic sm:text-sm">{experience.duration}</p> */}
                </div>
                <div className="pt-4">
                  <ul className="list-disc">
                    {experience.description.map((desc, index) => {
                      return (
                        <li key={index} className="sm:text-m">
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExperienceComponent;
