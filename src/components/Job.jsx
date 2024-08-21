import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaMapMarker} from 'react-icons/fa'

const Job = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false)

  let description = job.description
  
  if (!showFullDesc) {
    description = description.substring(0, 90) + '...'
  }


  return (
    <li  className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                          <div className="text-gray-600 my-2">{job.type}</div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">
                 {description}
        </div>
        <button className='text-fuchsia-700 mb-5 hover:text-fuchsia-800'
        onClick={()=>setShowFullDesc((prevState) => !prevState)}
        >
          {showFullDesc ? 'Less' : 'More'}
        </button>

                <h3 className="text-fuchsia-700 mb-2">{job.salary} / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-indigo-700 mb-3">
                    <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                    {job.location}
                  </div>
                  <Link
                    to={`/job/${job.id}`}
                    className="h-[36px] bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </li>
  )
}

export default Job
