import React from 'react'

const Cards = (props) => {
    const{data} = props;
    console.log(data)
  return (
    <div className='flex flex-col md:flex-row  w-full   gap-20 md:justify-between items-center  mt-10'>
        {data.map((item, index) => (
          <div key={index} className=' h-full rounded-md card w-[70%] md:w-[32%]  shadow-xl hover:scale-105 duration-200'>
            <img className=' h-auto md:h-56 w-full object-cover rounded-md' src={item.src} alt="" />
            <h2 className='px-4 mt-8  text-4xl  md:text-2xl'>{item.title}</h2>
            < p className=' px-4 text-zinc-600 text-2xl md:text-sm mt-6 mb-10 '>{item.description}</p>
          </div>
        ))}
    </div>
  )
}

export default Cards
