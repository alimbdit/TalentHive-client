import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route  } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import { getAppliedAndJobData } from './loders/GetAppliedAndJobData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getAppliedAndJobData,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        // element: ({params}) => { return (<JobDetails id={params.id}/>)},
        
        element: <JobDetails/>,
        // loader: ({params}) => handleViewDetails(params.id)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
