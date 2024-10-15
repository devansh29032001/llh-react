import React from 'react'
import { useParams } from 'react-router-dom'
import { jobData } from '../../data/jobData'

const Jobdetails = () => {
    const {id}=useParams()
    const job=jobData.find(job => job.id === id)

    if(!id){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        
    </div>
  )
}

export default Jobdetails
