import React, { useState } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Filter_Nav from '../components/Filter_Nav';
import Jobs_cards from '../components/Jobs_cards';
import Job_Description from "../components/Job_Description";
import Navbar from '../components/Navbar.jsx';
import '../styles/Jobs.scss';
import jobData from '../jobData.js';

const Jobs = () => {
 

  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleFilter = (department, location) => {
    const filtered = jobData.filter((job) => {
      const departmentMatch =
        !department || job.jobType === department || department === 'All JobTypes';
      const locationMatch =
        !location || job.location === location || location === 'All Locations';
      return departmentMatch && locationMatch;
    });
    setFilteredJobs(filtered);
  };

  return (
    <>
    <Navbar/>
    <div className="jobcontainer">
      {/* <div className="Job_heading">Careers at HireXzo</div> */}
      <Filter_Nav onFilter={handleFilter} />
      <div className="job_cardSection">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Jobs_cards
              key={index}
              jobName={job.jobName}
              jobID={job.jobID}
              jobType={job.jobType}
              location={job.location}
              experience={job.experience}
            />
          ))
        ) : (
          <p>No jobs match the selected filters.</p>
        )}
      </div>
      </div>
    </>
  );
};

export default Jobs;