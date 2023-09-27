import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Donation from './Components/Donation.jsx';
import Statistics from './Components/Statistics.jsx';
import DonationDetails from './Components/DonationDetails.jsx';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("/Data.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch("/Data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/:id",
        loader: ()=>fetch("/Data.json"),
        element: <DonationDetails></DonationDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
