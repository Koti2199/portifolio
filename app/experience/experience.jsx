/* eslint-disable @next/next/no-img-element */
const experience = [

  {
    companyName: "Infosys Pvt Ltd",
    title: "Systems Engineer",
    duration: "Nov 2021 – Jul 2023",
    location: "Hyderabad, Telangana",
    description: [
      "Proficient in implementing the three-tier architecture, which consists of the User Interface (UI), Business Logic Layer (BLL), and Data Access Layer (DAL).",
      "Acquianted in .NET security features such as Authentication (Windows-based Authentication, Forms-based Authentication) and Authorization (Authorizing Users and Roles).",
      "Knowledge in designing and maintaining SQL Server databases, as well as writing intricate SQL queries with joins, tables, views, indexes, stored procedures, functions and triggers.",
      "Designed and deployed SSIS packages to read and store data in DB using script tasks, Execute SQL tasks, Data flow tasks, send email tasks, Flat file creation based on client requirements.",
      "Hands-on experience in application maintenance, unit testing, and debugging to ensure quality software delivery. Skilled in error handling, tracing, and logging for efficient runtime analysis and issue resolution.",
      "Successfully handled application migration projects across servers and upgraded source code packages to ensure smooth transitions and operational continuity. Generated reports using Crystal Reports tools for HR-related applications.",
      "Demonstrated strong communication skills by regularly collaborating with clients and end users to address application issues and incorporate change requests.",
      "Maintained 10+ applications and enhanced issue resolution processes by streamlining project tracking.",
      "Developed web-based solutions that aligned with business requirements, improving application efficiency up to 30%.",
      "Performed Query optimization on the database servers to improve the application efficiency by 15%.",
      "Migrated applications to updated servers, ensuring data integrity and operational continuity.",
    ],
    logo: "/assets/images/infy.jpg",
  },
];

function ExperienceComponent() {
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
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
