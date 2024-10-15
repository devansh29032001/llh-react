import React from 'react';

const Dream = () => {
  return (
    <div className='flex flex-col items-center h-auto w-[200%] md:w-[100%] gap-6'>
      <h1 className=' text-6xl md:text-4xl font-semibold mt-4'>Find Your Dream Job</h1>
      <div className='flex flex-col md:flex-row  w-full gap-10 justify-center items-center'>
        {/* Job title/keyword input with search icon */}
        <div className="relative w-[50%] md:w-[25%]">
          <input
            className='w-full h-14 md:h-10 rounded-md pl-10 pr-4 border border-violet-800 hover:border-pink-900 text-2xl'
            type="text"
            placeholder='Search for job title or keyword'
          />
          <i className="absolute ri-search-line top-4 left-3 md:left-3 md:top-2 text-xl"></i>
        </div>

        {/* City/state/zip input with map pin icon */}
        <div className="relative w-[50%] md:w-[25%]">
          <input
            className='w-full h-14 md:h-10 rounded-md pl-10 pr-4 border border-violet-800 hover:border-pink-900 text-2xl'
            type="text"
            placeholder='Search for city,state,country'
          />
          <i className="absolute ri-search-line top-4 left-3 md:left-3 md:top-2 text-xl"></i>
        </div>

        {/* Search button */}
        <button className='bg-blue-900 px-10 py-2 rounded-md text-2xl md:text-xl text-white'>
          Search
        </button>
      </div>
    </div>
  );
};

export default Dream;
