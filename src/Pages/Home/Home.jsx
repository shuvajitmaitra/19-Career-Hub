import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategoryList></JobCategoryList>
      <FeatureJobs></FeatureJobs>
    </div>
  );
};

export default Home;
