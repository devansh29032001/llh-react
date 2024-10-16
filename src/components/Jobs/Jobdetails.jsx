import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { jobData } from '../../data/jobData';


const Jobdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Convert id to a number for comparison
  const jobId = Number(id);
  const job = jobData.find(job => job.id === jobId);

  // Handle job not found case
  if (!job) {
    return <h1>Job not found</h1>; // You can also redirect or handle it differently
  }

  return (
    <>
      
      <div className="container px-10  lg:p-10 h-auto mt-8 lg:mt-10 md:w-full flex flex-col lg:flex-row items-start justify-evenly ">
      <div onClick={() => navigate(-1)} className="cursor-pointer flex items-center gap-3 mb-20">
          <i className="ri-arrow-left-circle-line text-3xl text-gray-700 hover:text-gray-900"></i>
          <h1 className='text-xl md:text-sm text-gray-600'>Back to Job Search</h1>
        </div>
        <div className='flex flex-col ' >
          <h2 className="text-4xl lg:text-7xl mb-4 lg:mb-10 font-bold">{job.title}</h2>
          <h3 className="text-2xl lg:text-4xl mb-2 lg:mb-4 font-semibold">{job.company}</h3>
          
          <div className='flex gap-2 text-xl lg:text-2xl'>
            <i className="text-gray-600 ri-map-pin-line"></i>
            <p className="text-gray-600">{job.location}</p>
          </div>

          <p className="text-gray-700 mt-2 text-xl lg:text-2xl">{job.description}</p>
          <p className="text-xl lg:text-2xl text-gray-900 mt-4 font-bold">{job.salary}</p>
          <p className="text-gray-500 text-md mt-6 lg:mt-10">Posted on: {job.postedDate}</p>
        </div>

        <div className='flex md:flex-col  mt-10 gap-5 md:gap-10 md:h-[20vh]'>
        <button className='bg-yellow-400 px-4 lg:px-5 py-2 text-md lg:text-lg rounded-md mt-6 lg:mt-0'>
          Apply Now
        </button>

        <button className='bg-yellow-400 px-4 lg:px-5 py-2 text-md lg:text-lg rounded-md mt-6 lg:mt-0'>
          Share  <i class="ri-share-line"></i>
        </button>
        
        </div>
      </div>
      <div className="container2 px-10  lg:px-40 h-auto mt-8 lg:mt-5 md:w-full flex flex-col  items-start justify-evenly ">
        <h1 className='text-3xl font-semibold mt-10 mb-5'>Job Description</h1>
        <p className='text-zinc-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, expedita! Quasi iusto suscipit error optio repellat esse consequatur dolorum voluptatem doloribus temporibus necessitatibus est deleniti fuga quidem atque assumenda corporis sit in quibusdam, at cum. Quibusdam, ullam commodi. Sunt, dignissimos. Iusto veniam asperiores quibusdam vitae, nemo, repudiandae ipsum dolore repellendus perspiciatis eveniet temporibus, animi consequatur obcaecati sed cupiditate? Ratione excepturi culpa et, repudiandae officiis veniam, quis voluptatem dolores corporis quasi recusandae minima quos earum quo nemo accusantium tempore. Aliquam qui ratione nam laborum a expedita repellendus minima cupiditate error mollitia, explicabo maiores hic alias nihil totam ipsa odio harum tenetur, tempore perspiciatis illum molestiae quasi distinctio rerum. Nobis officia praesentium quasi vero deleniti suscipit, laboriosam amet consequuntur numquam rem dolores atque quas facilis! Accusantium doloremque architecto fuga quidem veniam quibusdam, animi aperiam inventore illo dolore quis odio aut rerum natus maxime dolorem suscipit praesentium recusandae quae quaerat, enim porro nisi quod. Deleniti libero quo perferendis eos provident ex doloremque dolorem at voluptas dicta, laudantium tenetur qui tempore optio delectus ut eveniet repudiandae sunt blanditiis sed modi dolore, facilis dignissimos quam. Error beatae, sit vel optio dolor nihil saepe nam in voluptatum corrupti odio minima laborum doloremque et hic eveniet maxime illum, magnam soluta! Quam esse reiciendis praesentium ratione repellat vero, voluptatum commodi accusantium. Adipisci quibusdam eos ex rem rerum itaque aut nostrum quisquam, sit dicta? Dicta quos aliquid quasi laudantium repellat repudiandae consectetur consequatur explicabo eligendi non, perspiciatis, itaque quam. Autem ipsum adipisci architecto et, quas nostrum ea ipsa temporibus.</p>
        
      </div>
    </>
  );
};

export default Jobdetails;
