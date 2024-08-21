import React from "react";
import jobs from "../jobs.json";
import Job from "./Job";

const JobListings = () => {
    console.log(jobs);
    const recentJobs = jobs.slice(0, 3)

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 text-center">
          Browse Jobs
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
              <Job key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobListings;
