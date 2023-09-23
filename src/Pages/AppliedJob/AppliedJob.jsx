import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilies/LocalStorage";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  const handleFilter = (filter) => {
    if (filter == "All") {
      setDisplayJob(appliedJob);
    } else if (filter == "Remote") {
      const remoteJob = appliedJob.filter(
        (job) => job.remote_or_onsite == "Remote"
      );
      setDisplayJob(remoteJob);
    } else {
      const onsiteJob = appliedJob.filter(
        (job) => job.remote_or_onsite == "Onsite"
      );
      setDisplayJob(onsiteJob);
    }
  };

  useEffect(() => {
    const storedId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobApplied = jobs.filter((job) => storedId.includes(job.id));
      // এখানে storedId এর মধ্যে localStorage এ save করা id গুলো আছে এবং jobs এর ভিতর সবগুলো data আছে
      /**
       * ১ => সবগুলো data  কে filter  করতে হবে filter করলে একটা করে ডাটা পাওয়া যাবে এবং যে যে ডাটা গুলোর আইডি storedId র সাথে mathch করে সে গুলো কে storedId.includes এর মাধ্যমে check করে variable এ store করতে হবে
       *
       * => অন্য system:
       * storedId array গুলোর মধ্যে for loop চালাতে হবে এবং তার মধ্যে jobs গুলো কে find করে  একটি job পাবো এই job er id er sathe for loop chaliya je id pabo tar soman jodi hoi tahole sei data gulo ke ekti state e rekhe dibo
       */

      const jobApplied = [];
      for (const id of storedId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJob(jobApplied);
      setDisplayJob(jobApplied);

      // console.log(jobs, storedId, jobApplied);
    }
  }, [jobs]);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">
          Total applies: {appliedJob.length}
        </h2>
        <details className="dropdown mb-32">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-3 gap6 ">
        {displayJob.map((job) => (
          <div
            key={job.id}
            className="m-4 shadow-lg bg-slate-100 p-4 space-y-2"
          >
            <img src={job.logo} alt="" />
            <h3 className="text-xl font-bold">{job.job_title}</h3>
            <h3 className="text-lg font-medium">{job.company_name}</h3>
            <h3>{job.remote_or_onsite}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
