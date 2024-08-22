import {React, useState, useEffect} from "react";
import Job from "./Job";
import Loader from "./Loader";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log('Error fetching jobs', error)
      } finally {
        setLoading(false)
      }
      
    }

    fetchJobs()
  }, [])

    // console.log(jobs);
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs

  return (
    <section className="bg-fuchsia-100 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        
          {loading ? (<Loader loading={loading}/>) : (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
              <Job key={job.id} job={job} />
          ))}
            </ul>
          ) }
      </div>
    </section>
  );
};

export default JobListings;
