import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../Pages/Addservice/Addservice";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Review/Review";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

import Privateroute from "./Privateroute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://server-theta-henna.vercel.app");
        },
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: async () => {
          return fetch("https://server-theta-henna.vercel.app/services");
        },
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) => {
          return fetch(
            ` https://server-theta-henna.vercel.app/services/${params.id}`
          );
        },
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/addservice",
        element: (
          <Privateroute>
            <Addservice></Addservice>
          </Privateroute>
        ),
      },
      {
        path: "/review",
        loader: async () => {
          return fetch("https://server-theta-henna.vercel.app/reviews");
        },
        element: (
          <Privateroute>
            <Review></Review>
          </Privateroute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
