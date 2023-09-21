import UserImage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="space-y-3 flex-1">
        <h1 className="text-7xl font-semibold ">
          One Step Closer To Your{" "}
          <span className="text-[#9873FF]">Dream Job</span>
        </h1>
        <p className="">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn capitalize text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">
          Get Started
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={UserImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
