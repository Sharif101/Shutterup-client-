import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  let services = useLoaderData();
  return (
    <div>
      {/* <h2>{services.length}</h2> */}
      <div className="services-card">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
