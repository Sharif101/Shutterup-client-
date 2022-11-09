import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../Pages/Addservice/Addservice";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Review/Review";
import Service from "../Pages/Service/Service";
import Privateroute from "./Privateroute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Service></Service>,
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
