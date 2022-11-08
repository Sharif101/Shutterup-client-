import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <h2>service</h2>
      <Link to="/login">
        <button>login</button>
      </Link>
    </div>
  );
};

export default Service;
