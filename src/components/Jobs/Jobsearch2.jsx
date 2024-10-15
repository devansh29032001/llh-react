import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { jobData } from '../../data/jobData';

const Jobsearch2 = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 12;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const jobType = queryParams.get('jobType') || '';
  const jobLocation = queryParams.get('location') || '';

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
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
  };

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container w-full h-auto p-10 flex flex-wrap justify-between">
      {currentJobs.map((job) => (
        <Link to={`/search/${job.id}`} key={job.id}>
          <div className="card-container bg-gradient-to-r from-purple-700 to-purple-900 mb-10 h-[30vh] flex flex-col justify-evenly w-[24vw] p-3 rounded-lg shadow-2xl text-white hover:scale-105 duration-200">
            <h1 className="text-2xl font-semibold">{job.title}</h1>
            <h2 className="text-xl font-semibold">{job.company}</h2>
            <p>{job.location}</p>
            <p className="font-bold">{job.salary}</p>
            <p>{job.postedDate}</p>
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

        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 border rounded-lg mx-1 ${
              currentPage === number + 1
                ? 'bg-purple-900 text-white'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            {number + 1}
          </button>
        ))}

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
