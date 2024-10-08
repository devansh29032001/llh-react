import React from 'react'

const data=[{
    src:"https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/card-images/09image35733x200.png?h=200&w=358&rev=96380364778b426ea316b273e39d5a99&hash=A0EAF3FE3594835572B7AFAD2B685E23",
    title:"Diversity & Inclusion",
    description:"We recognize the importance of diversity, equity, and inclusion in building a thriving and innovative workplace. We are committed to creating a more diverse and inclusive environment where everyone feels valued, respected, and empowered. Our goal is to actively increase the representation of underrepresented groups at all levels of our organization and create a workplace that reflects the diversity of the communities we serve.",
},{
    src:"https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/card-images/09image35733x2001.png?h=200&w=358&rev=78f92e0e07fb43e7bcd7558cf1720b53&hash=C2724A4B60A0CF00E0BCC4FB10AC0E9C",
    title:"Community Involvement",
    description:"At LHH, we believe in making a difference beyond the walls of our office. We actively engage with the community through volunteer programs, philanthropic partnerships, and sustainable practices. Join us in our mission to create a better world.",
},
{
    src:"https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/card-images/09image35733x2002.png?h=200&w=358&rev=8203b3a0c0a746f08ecbcc4700573a5d&hash=24CBB11E2B62704B0E66CBF732B3C730",
    title:"Career Development",
    description:"LHH is part of the Adecco Group, the world’s leading talent advisory and solutions company. Our purpose is to empower and inspire through professional development and career opportunities. We invest in our people to enable them to achieve their full potential — for whatever comes next.",
}]
const About5 = () => {
  return (
    <div className='mt-20  h-[100vh] w-full flex justify-between '>
        {data.map((item)=>{
          return <div className='h-[100vh] w-[32%] shadow-xl rounded-md overflow-hidden '>
                <img  className="" src={item.src} alt=""/>
                <h1 className='p-2 text-2xl'>{item.title}</h1>
                <p className='p-2  text-zinc-600'>{item.description}</p>
            </div>
        })}
    </div>
  )
}

export default About5
