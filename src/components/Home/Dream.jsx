import React from 'react';

const Dream = () => {
  return (
    <div className='flex flex-col items-center h-32 gap-6'>
      <h1 className='text-4xl font-semibold mt-4'>Find Your Dream Job</h1>
      <div className='flex  w-full gap-10 justify-center'>
        {/* Job title/keyword input with search icon */}
        <div className="relative w-[25%]">
          <input
            className='w-full h-10 rounded-md pl-10 pr-4 border border-violet-800 hover:border-pink-900'
            type="text"
            placeholder='Search for job title or keyword'
          />
          <i className="absolute ri-search-line left-3 top-2 text-xl"></i>
        </div>

        {/* City/state/zip input with map pin icon */}
        <div className="relative w-[25%]">
          <input
            className='w-full h-10 rounded-md pl-10 pr-4 border border-violet-800 hover:border-pink-900'
            type="text"
            placeholder='Search for city, state or zip'
          />
          <i className="absolute ri-map-pin-2-line left-3 top-2 text-xl"></i>
        </div>

        {/* Search button */}
        <button className='bg-blue-900 px-10 py-2 rounded-md text-xl text-white'>
          Search
        </button>
      </div>
    </div>
  );
};

export default Dream;
