import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredJobApplication,
  saveJobApplication,
} from "../../Utilies/LocalStorage";
// import { useState } from "react";

const JobDetails = () => {
  const jobs = useLoaderData(); //এখান থেকে আমারা টোটাল ডাটাটাকে fetch করার জন্য object আকারে পাবো

  const { id } = useParams(); //এখানে useParams এর জন্য রাউটের থেকে id টা পাবো

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id == idInt);

  const handleApplyButton = () => {
    const localItem = getStoredJobApplication();

    const idExist = localItem.find((id) => id == idInt);

    if (!idExist) {
      toast.success("Successfully Applied !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      saveJobApplication(idInt);
    } else {
      toast.error("Already Applied !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="grid gap-6 grid-cols-4 my-20">
      <div className="col-span-3  p-4 space-y-4">
        <p>
          <b>Job Description:</b> {job.job_description}
        </p>
        <p>
          <b>job_responsibility:</b> {job.job_responsibility}
        </p>
        <p>
          <b>educational_requirements:</b> {job.educational_requirements}
        </p>
        <p>
          <b>experiences:</b> {job.experiences}
        </p>
      </div>
      <div className="col-span-1  ">
        <div className="bg-blue-50 rounded-md space-y-2 p-4 ">
          <h2>
            <b>Job Details</b>
          </h2>
          <p>
            <b>Salary:</b> {job.salary} <small>(per month)</small>
          </p>
          <p>
            <b>Job Title:</b> {job.job_title}
          </p>
          <h2>
            <b>Contact Information</b>
          </h2>
          <p>
            <b>Phone: </b>
            {job.contact_information.phone}
          </p>
          <p>
            <b>Email:</b> {job.contact_information.email}
          </p>
          <p>
            <b>Address: </b>
            {job.contact_information.address}
          </p>
        </div>
        <button
          onClick={handleApplyButton}
          className="btn w-full rounded-md mt-6 capitalize text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
        >
          Apply Now
        </button>{" "}
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
