import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Candidate1 = () => {
  const [candidateType, setCandidateType] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate with query parameters
    navigate(`/find?candidateType=${candidateType}&location=${location}`);
    console.log("Form submitted");
  };

  return (
    <div className=' w-full '>
      <h1 className=' text-5xl w-[300%] md:w-full md:text-5xl font-bold text-[#4F185A] mt-20'>Candidate Search Portal</h1>
      <div className='h-32 w-[300%] md:w-full '>
        <form onSubmit={handleSubmit} className='flex h-full gap-10 items-center mt-10 flex-col md:flex-row'>
          <input
            type="text"
            className='px-4 w-[100%] py-2 rounded-md text-4xl md:text-xl border'
            placeholder='Enter Job Title'
            value={candidateType}
            onChange={(e) => setCandidateType(e.target.value)}
          />
          <input
            type="text"
             className='px-4 w-[100%] py-2 rounded-md text-4xl md:text-xl border'
            placeholder='Enter Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className='bg-[#FFA25C] md:px-3 md:py-2 text-2xl  w-full  py-2 rounded-md hover:scale-105 active:scale-95' type='submit'>
            Search Candidates
          </button>
        </form>
      </div>
    </div>
  );
};

export default Candidate1;
