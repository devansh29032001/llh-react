// // import React from 'react' 
// // import { candidatesData } from '../../data/candidateData';

// // const Candidate2 = () => {
// //   return (
// //     <div className='containercard h-[150vh] w-full bg-zinc-100 mt-20 py-20 px-2 '>
// //         <div className=' h-[60vh] w-[60vh] flex flex-col  shadow-xl bg-white rounded-md p-3'>
// //             <h3 className='text-sm text-end text-gray-400'>Candidate Id:</h3>
// //             <h1 className='mt-10 text-xl font-semibold text-gray-800'>Cost Accountant, Business Analyst</h1>
// //             <h3 className='text-md text-gray-500 mt-1'>Beachwood,OH</h3>
// //             <div className='flex  mt-3 text-gray-500'>
// //                 <i class="ri-at-line"></i>
// //                 <div className='flex justify-between ml-2 w-full text-xs mr-1 items-center '>
// //                     <h3 >Experience:</h3>
// //                     <h3>11 years</h3>
// //                 </div>
// //             </div>

// //             <div className='flex  mt-3 text-gray-500 items-center'>
// //             <i className=" ri-phone-line"></i>
// //                 <div className='flex justify-between ml-2 w-full text-xs mr-1 items-center  '>
// //                     <h3 >Education Level:</h3>
// //                     <h3>Bachelor's</h3>
// //                 </div>
// //             </div>

// //             <div className='flex  mt-3 items-center text-gray-500'>
// //             <i class="ri-timer-line"></i>
// //                 <div className='flex justify-between ml-2 w-full text-xs mr-1 items-center  '>
// //                     <h3 >Skills:</h3>
// //                     <h3 className='w-[70%] text-right'>Operational efficiency, Human Resources, Budget management, Leadership, Employee development...
// //                     </h3>
// //                 </div>
// //             </div>

// //             <button className='self-end mt-10 px-4 '>Select Candidate</button>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Candidate2
// import React from 'react';
// import { candidatesData } from '../../data/candidateData';

// const Candidate2 = () => {
//   const maxSkillsLength = 60; // Set maximum character length for skills

//   return (
//     <div className='containercard h-auto w-full bg-zinc-100 mt-20 py-20 px-2 flex flex-wrap justify-evenly'>
//       {candidatesData.map((candidate, index) => {
//         const truncatedSkills = candidate.skills.length > maxSkillsLength
//           ? candidate.skills.substring(0, maxSkillsLength) + "..."
//           : candidate.skills;

//         return (
//           <div key={index} className='h-[60vh] w-[70vh] flex flex-col shadow-xl bg-white rounded-md p-4 mb-10'>
//             <h3 className='text-sm text-end text-gray-400'>Candidate Id: {index + 1}</h3>
//             <h1 className='mt-10 text-xl font-semibold text-gray-800'>{candidate.title}</h1>
//             <h3 className='text-md text-gray-500 mt-1'>{candidate.location}</h3>

//             <div className='flex mt-3 text-gray-500'>
//               <i className="ri-at-line"></i>
//               <div className='flex justify-between ml-2 w-full text-xs mr-1 items-center'>
//                 <h3>Experience:</h3>
//                 <h3>{candidate.experience}</h3>
//               </div>
//             </div>

//             <div className='flex mt-3 text-gray-500 items-center'>
//               <i className="ri-phone-line"></i>
//               <div className='flex justify-between ml-2 w-full text-xs mr-1 items-center'>
//                 <h3>Education Level:</h3>
//                 <h3>{candidate.educationLevel}</h3>
//               </div>
//             </div>

//             <div className='flex mt-3 items-center text-gray-500'>
//               <i className="ri-timer-line"></i>
//               <div className='flex justify-between ml-2 w-full text-xs mr-1 items-center'>
//                 <h3>Skills:</h3>
//                 <h3 className='w-[70%] text-right'>{truncatedSkills}</h3>
//               </div>
//             </div>

//             <button className='self-end mt-10 px-4'>{candidate.buttonLabel}</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Candidate2;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { candidatesData } from '../../data/candidateData';

const Candidate2 = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const candidateType = searchParams.get('candidateType')?.toLowerCase() || '';
  const locationValue = searchParams.get('location')?.toLowerCase() || '';
  const maxSkillsLength = 60;

  // Filter candidates based on query params
  const filteredCandidates = candidatesData.filter((candidate) =>
    candidate.title.toLowerCase().includes(candidateType) &&
    candidate.location.toLowerCase().includes(locationValue)
  );

  return (
    <div className='containercard h-auto w-[300%] md:w-full bg-zinc-100 mt-52 md:mt-10 py-20 px-2 flex  flex-wrap justify-evenly'>
      {filteredCandidates.length > 0 ? (
        filteredCandidates.map((candidate, index) => {
          const truncatedSkills = candidate.skills.length > maxSkillsLength
            ? candidate.skills.substring(0, maxSkillsLength) + "..."
            : candidate.skills;

          return (
            <div key={index} className='md:h-[70vh] md:w-[65vh] h-[90vh] w-[70vh] flex flex-col shadow-xl bg-white rounded-md p-8 md:p-4 mb-10'>
              <h3 className='text-3xl md:text-sm text-end text-gray-400'>Candidate Id: {index + 1}</h3>
              <h1 className='mt-20 md:mt-10 text-4xl md:text-xl font-semibold text-gray-800'>{candidate.title}</h1>
              <h3 className='text-2xl md:text-md text-gray-500 mt-3 md:mt-1'>{candidate.location}</h3>

              <div className='flex mt-9 md:mt-3 text-gray-500'>
                <i className="ri-at-line"></i>
                <div className='flex justify-between ml-2 w-full text-xl md:text-xs mr-1 items-center'>
                  <h3>Experience:</h3>
                  <h3>{candidate.experience}</h3>
                </div>
              </div>

              <div className='flex mt-3 text-gray-500 items-center'>
                <i className="ri-phone-line"></i>
                <div className='flex justify-between ml-2 w-full text-xl md:text-xs mr-1 items-center'>
                  <h3>Education Level:</h3>
                  <h3>{candidate.educationLevel}</h3>
                </div>
              </div>

              <div className='flex mt-3 items-center text-gray-500'>
                <i className="ri-timer-line"></i>
                <div className='flex justify-between ml-2 w-full text-xl md:text-xs mr-1 items-center'>
                  <h3>Skills:</h3>
                  <h3 className='w-[70%] text-right'>{truncatedSkills}</h3>
                </div>
              </div>

              <button className='md:self-end  mt-10 px-4 py-2  text-xl md:text-xs rounded-md border border-black'>{candidate.buttonLabel}</button>
            </div>
          );
        })
      ) : (
        <h2 className="text-2xl text-gray-500">No candidates found</h2>
      )}
    </div>
  );
};

export default Candidate2;

