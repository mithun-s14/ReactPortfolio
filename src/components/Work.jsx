import React from 'react';


const Work = () => {
  return (
    <div name="work" className="sm:mt-8 w-full h-full bg-[#0a192f] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#38A5FF]">
            Internship Experience
          </p>
        </div>

        <div className="w-full mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col">
              <p className="mb-2 font-semibold text-lg">
                Software Developer (Co-op) -{" "}
                <span className="text-md text-[#38A5FF]">
                  Ontario Ministry of Treasury Board Secretariat
                </span>
                <p className="text-sm text-gray-300">
                  January 2024 - August 2024
                </p>
              </p>
              <ol className="text-gray-300 mb-4 text-sm">
                <li className="py-1">
                  Developed, debugged, enhanced, and documented several features
                  to continuously update two legacy web applications for the
                  Ministry of Finance, aiding millions of Ontarians with tax
                  concerns.
                </li>
                <li className="py-1">
                  Actively participated in a Scrum-based Agile development team,
                  contributing to daily stand-up meetings, reporting progress,
                  handling assignments, addressing technical challenges, and
                  estimating timelines.
                </li>
                <li className="py-1">
                  Conducted comprehensive testing, including smoke, unit, and
                  regression tests, ensuring the monthly delivery of
                  high-quality releases
                </li>
              </ol>
              <div className="flex flex-wrap space-x-2">
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  HTML
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  CSS
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  JavaScript
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  SQL
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col">
              <p className="mb-2 font-semibold text-lg">
                Software Developer (Co-op) -{" "}
                <span className="text-md text-[#38A5FF]">
                  Environment and Climate Change Canada
                </span>
                <p className="text-sm text-gray-300">
                  May 2025 - December 2025
                </p>
              </p>
              <ol className="text-gray-300 mb-4 text-sm">
                <li className="py-1">
                  Developed and maintained components of the Environmental
                  Emergency Regulations, 2019 (E2) Reporting System, a national
                  digital platform used by regulated facilities to report
                  environmental emergencies.
                </li>
                <li className="py-1">
                  Engineered backend features using .NET 8, C#, and Entity
                  Framework, improving data retrieval performance and
                  reliability across 10,000+ facility submissions
                </li>
                <li className="py-1">
                  Wrote and optimized complex SQL queries to identify and
                  populate missing or inconsistent records, improving data
                  completeness and enhancing reporting accuracy
                  across multiple production databases.
                </li>
                <li className="py-1">
                  Collaborated with analysts and QA teams to troubleshoot
                  production issues and validate system updates, ensuring full
                  compliance with Government of Canada architecture and security
                  standards.
                </li>
              </ol>
              <div className="flex flex-wrap space-x-2">
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  C#
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  .NET
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  Entity Framework
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  XML
                </span>
                <span className="mt-1 rounded bg-[#2f343d53] px-2 py-1 text-sm font-medium text-[#38A5FF]">
                  Microsoft SQL Server
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
