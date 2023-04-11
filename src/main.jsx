import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import { getAppliedAndJobData } from "./loaders/GetAppliedAndJobData";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getAppliedAndJobData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
        loader: () => fetch('blog.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: ()=> fetch('statistics.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
