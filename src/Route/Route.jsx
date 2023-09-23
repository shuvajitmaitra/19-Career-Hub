import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";

import Blog from "../Pages/Blog/Blog";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobs/:id",
        loader: () => fetch(`../../public/jobs.json`),
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/appliedjob",
        loader: () => fetch(`../../public/jobs.json`),
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default Route;
