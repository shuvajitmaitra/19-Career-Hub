import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [data, setData] = useState(4);

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
        {jobs.slice(0, data).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={data === jobs.length ? "hidden" : undefined}>
        <button
          onClick={() => setData(jobs.length)}
          className="btn rounded-md mt-6 capitalize text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
