import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="text-start p-8 bg-red-50 rounded-lg">
      <img src={logo} alt="" />
      <h2 className="text-xl font-semibold mt-6 mb-3">{job_title}</h2>
      <p>{company_name}</p>
      <div className="flex gap-3 my-3">
        <p className="border border-[#7E90FE] px-5 py-2 rounded-md text-[#7E90FE] font-medium">
          {remote_or_onsite}
        </p>
        <p className="border border-[#7E90FE] px-5 py-2 rounded-md text-[#7E90FE] font-medium">
          {job_type}
        </p>
      </div>
      <div className="flex gap-6">
        <h2 className="flex gap-2 items-center">
          <CiLocationOn className="text-2xl font-extrabold"></CiLocationOn>
          {location}
        </h2>
        <h2 className="flex gap-2 items-center">
          <CiDollar className="text-2xl font-extrabold"></CiDollar>
          Salary: {salary}
        </h2>
      </div>
      <button className="btn rounded-md mt-6 capitalize text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
        View Details
      </button>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object.isRequired,
};
export default Job;
