/* eslint-disable @next/next/no-img-element */
const educationDetails = [
  {
    universityName: "University Of North Texas",
    address: "Denton, Texas, United States",
    major: "Master of Science in Data Engineering",
    duration: "Aug 2023 - May 2025",
    gpa: "4.0",
    courseWork: [
      "Machine Learning",
      "Information Retrieval And Web Search",
      "Data Mining",
      "Natural Language Processing",
      "Methods in Emperical Analysis",
      "Fundamentals of Artificial Intelligence",
      "Scientific Data Visualization",
      "Distributed and Parallel Database Systems",
      "Introduction to Big Data and Data Science",
      "Pattern Recognition",
      "Fundamentals of Database Systems",
    ],
    concentration: "Concentration in General Data Engineering",
    logo: "/assets/images/untNoBg.png",
  },
  {
    universityName: "Velagapudi RamaKrishna Siddhartha Engineering College",
    address: "Vijayawada, Andhra Pradesh, India",
    major: "Bachelors of Technology in Mechanical Engineering",
    duration: "Aug 2018 - May 2021",
    gpa: "3.77",
    // Removed coursework for Velagapudi RamaKrishna Siddhartha Engineering College
    logo: "/assets/images/vr.jpeg",
  },
];

export default function EducationComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-2xl text-left px-4 lg:px-0">
        Education
      </h2>

      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {educationDetails.map((education, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-lg rounded-xl text-justify p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className="flex flex-col w-1/3  border-black items-center justify-center sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <img
                  src={education.logo}
                  alt={education.universityName}
                  className="w-36 h-36 object-cove shadow-xl ring-1 ring-gray-400/10 mb-8 sm:flex-1 sm:mb-0 dark:ring-white"
                  width={100}
                  height={100}
                />

                <div className="sm:flex-1">
                  <p className="text-center flex-1 font-semibold text-base mt-4  sm:text-sm">
                    GPA - <span className="">{education.gpa} / 4.0</span>
                  </p>
                  <p className="text-center flex-1 font-semibold text-base mt-4 sm:text-sm">
                    {education.duration}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-2/3 justify-center pl-8 sm:w-full sm:p-0">
                <div className="pb-2 mb-4">
                  <p className="text-2xl font-semibold sm:text-xl">
                    {education.universityName}
                  </p>
                  <p className="text-xl font-semibold sm:text-l">
                    {education.major}
                  </p>
                </div>
                {/* Only display coursework if it exists */}
                {education.courseWork && (
                  <div>
                    <p className="text-base font-semibold sm:text-sm">
                      Coursework :
                    </p>
                    <ul className="list-disc">
                      {education.courseWork.map((course, index) => {
                        return (
                          <li key={index} className="text-sm ml-8">
                            {course}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
