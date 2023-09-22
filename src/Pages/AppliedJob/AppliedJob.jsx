import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilies/LocalStorage";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);

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
      // console.log(jobs, storedId, jobApplied);
    }
  }, [jobs]);

  return <div>Total applies: {appliedJob.length}</div>;
};

export default AppliedJob;
