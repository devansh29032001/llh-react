// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { jobData } from '../../data/jobData';
// import { fetchJobDetails } from '../../data/api';

// const Jobsearch2 = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width
//   const [selectedJobId, setSelectedJobId] = useState(null); // State for selected job
//   const jobsPerPage = 10;

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const jobType = queryParams.get('jobType') || '';
//   const jobLocation = queryParams.get('location') || '';

//   // Update window width state when resizing
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // useEffect(() => {
//   //   // Fetch jobs from data or API
//   //   setJobs(jobData);
//   // }, []);

//   useEffect(() => {
//     const filtered = jobs.filter((job) =>
//       (jobType ? job.title.toLowerCase().includes(jobType.toLowerCase()) : true) &&
//       (jobLocation ? job.location.toLowerCase().includes(jobLocation.toLowerCase()) : true)
//     );
//     setFilteredJobs(filtered);
//   }, [jobType, jobLocation, jobs]);

//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const openDetail = (jobId) => {
//     setSelectedJobId(jobId);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   // Determine how many pages to show based on screen width
//   const maxPageNumbersToShow =  3 ; // Show 3 pages on small screens, 5 on larger screens
//   const halfRange = Math.floor(maxPageNumbersToShow / 2);
//   let startPage = Math.max(currentPage - halfRange, 1);
//   let endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

//   if (endPage - startPage + 1 < maxPageNumbersToShow) {
//     startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
//   }

//   return (
//     <div className="container w-[300%]   md:w-full h-auto p-10 flex flex-col  justify-between ">
//       {currentJobs.map((job) => (
//         <Link to={`${job.id}`} key={job.id} onClick={openDetail}>
//           <div  className={`card-container bg-gradient-to-r from-[#581F64] to-[#290C2F] mb-10 md:h-[30vh] flex flex-col gap-4 md:gap-0 justify-evenly md:w-[24vw] p-3 rounded-lg shadow-2xl text-white hover:scale-105 duration-200
//             ${selectedJobId === job.id ? 'bg-yellow-300' : 'bg-yellow-300'}`}>

//             <h1 className="text-4xl md:text-2xl font-semibold">{job.title}</h1>
//             <h2 className="text-3xl md:text-xl font-semibold">{job.company}</h2>
//             <p>{job.location}</p>
//             <p className=" text-2xl md:text-sm font-bold">{job.salary}</p>
//             <p className='text-zinc-300'>{job.postedDate}</p>
//           </div>
//         </Link>
//       ))}

//       <div className="pagination mt-8 flex justify-center  w-full">
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="  border rounded-lg   disabled:opacity-50"
//         >
//           <i className=" text-4xl ri-arrow-left-circle-fill"></i>
//         </button>

//         {[...Array(endPage - startPage + 1).keys()].map((index) => {
//           const pageNumber = startPage + index;
//           return (
//             <button
//               key={pageNumber}
//               onClick={() => paginate(pageNumber)}
//               className={`px-4 py-2 border rounded-lg mx-1 ${
//                 currentPage === pageNumber
//                   ? 'bg-[#290C2F] text-white'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             >
//               {pageNumber}
//             </button>
//           );
//         })}

//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className=" border rounded-lg   disabled:opacity-50"
//         >
//         <i class="ri-arrow-right-circle-fill text-4xl"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Jobsearch2;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getApiData } from "../../api/api"; // Import your API function

const API = "https://linkedin-data-api.p.rapidapi.com";

const Jobsearch2 = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const jobsPerPage = 10;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobType = queryParams.get("jobType") || "";
  const jobLocation = queryParams.get("location") || "";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApiData(`${API}/active-ats-7d`);
      setJobs(response.data || []); // Assuming response.data contains the job listings
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter(
      (job) =>
        (jobType
          ? job.title.toLowerCase().includes(jobType.toLowerCase())
          : true) &&
        (jobLocation
          ? job.location.toLowerCase().includes(jobLocation.toLowerCase())
          : true)
    );
    setFilteredJobs(filtered);
  }, [jobType, jobLocation, jobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDetail = (jobId) => {
    setSelectedJobId(jobId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const maxPageNumbersToShow = windowWidth < 768 ? 3 : 5;
  const halfRange = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(currentPage - halfRange, 1);
  let endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

  if (endPage - startPage + 1 < maxPageNumbersToShow) {
    startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
  }

  return (
    <div className="container w-full h-auto p-10 flex flex-col justify-between">
      {currentJobs.map((job) => (
        <Link
          to={`/job${job.id}`}
          key={job.id}
          onClick={() => openDetail(job.id)}
        >
          <div
            className={`card-container bg-gradient-to-r from-[#581F64] to-[#290C2F] mb-10 md:h-[30vh] flex flex-col gap-4 md:gap-0 justify-evenly md:w-[24vw] p-3 rounded-lg shadow-2xl text-white hover:scale-105 duration-200 ${
              selectedJobId === job.id ? "bg-yellow-500" : "bg-yellow-300"
            }`}
          >
            <h1 className="text-4xl md:text-2xl font-semibold">{job.title}</h1>
            <h2 className="text-3xl md:text-xl font-semibold">
              {job.organization}
            </h2>
            <p>{job.locations_derived[0]}</p>
            <p className="text-2xl md:text-sm font-bold">
              {job.benefits || "N/A"}
            </p>
            <p className="text-zinc-300">{job.date_posted || "unknown"}</p>
          </div>
        </Link>
      ))}

      <div className="pagination mt-8 flex justify-center w-full">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="border rounded-lg disabled:opacity-50"
        >
          <i className="text-4xl ri-arrow-left-circle-fill"></i>
        </button>

        {[...Array(endPage - startPage + 1).keys()].map((index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 border rounded-lg mx-1 ${
                currentPage === pageNumber
                  ? "bg-[#290C2F] text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border rounded-lg disabled:opacity-50"
        >
          <i className="ri-arrow-right-circle-fill text-4xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Jobsearch2;
