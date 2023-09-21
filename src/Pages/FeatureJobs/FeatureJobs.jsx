import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center space-y-3 mt-24">
      <h1 className="text-5xl font-semibold">Feature Jobs</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
