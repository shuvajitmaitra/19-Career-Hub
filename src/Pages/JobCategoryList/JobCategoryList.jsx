import { useEffect, useState } from "react";
import Category from "./Category";

const JobCategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="text-center space-y-3 mt-24">
      <h1 className="text-5xl font-semibold">
        Job Category List {categories.length}
      </h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex gap-6 justify-evenly">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
