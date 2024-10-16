import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { jobData } from '../../data/jobData';

const Jobsearch2 = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width
  const jobsPerPage = 12;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const jobType = queryParams.get('jobType') || '';
  const jobLocation = queryParams.get('location') || '';

  // Update window width state when resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Fetch jobs from data or API
    setJobs(jobData);
  }, []);

  useEffect(() => {
    // Filter jobs based on query parameters
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(jobType.toLowerCase()) &&
      job.location.toLowerCase().includes(jobLocation.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [jobType, jobLocation, jobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDetail = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Determine how many pages to show based on screen width
  const maxPageNumbersToShow = windowWidth < 768 ? 3 : 5; // Show 3 pages on small screens, 5 on larger screens
  const halfRange = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(currentPage - halfRange, 1);
  let endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

  if (endPage - startPage + 1 < maxPageNumbersToShow) {
    startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
  }

  return (
    <div className="container w-[300%]  md:w-full h-auto p-10 flex flex-wrap flex-col md:flex-row  justify-between">
      {currentJobs.map((job) => (
        <Link to={`/search/${job.id}`} key={job.id} onClick={openDetail}>
          <div className="card-container bg-gradient-to-r from-[#581F64] to-[#290C2F] mb-10 md:h-[30vh] flex flex-col gap-4 md:gap-0 justify-evenly md:w-[24vw] p-3 rounded-lg shadow-2xl text-white hover:scale-105 duration-200">
            <h1 className="text-4xl md:text-2xl font-semibold">{job.title}</h1>
            <h2 className="text-3xl md:text-xl font-semibold">{job.company}</h2>
            <p>{job.location}</p>
            <p className=" text-2xl md:text-sm font-bold">{job.salary}</p>
            <p className='text-zinc-300'>{job.postedDate}</p>
          </div>
        </Link>
      ))}

      <div className="pagination mt-8 flex justify-center w-full">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg mr-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(endPage - startPage + 1).keys()].map((index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 border rounded-lg mx-1 ${
                currentPage === pageNumber
                  ? 'bg-[#290C2F] text-white'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg ml-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Jobsearch2;
