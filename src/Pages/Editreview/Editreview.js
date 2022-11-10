import React from "react";
import { useLoaderData } from "react-router-dom";
import Editreviewdetails from "../Editreviewdetails/Editreviewdetails";

const Editreview = () => {
  let allreview = useLoaderData();
  return (
    <div>
      {allreview.map((allrev) => (
        <Editreviewdetails allrev={allrev} key={allrev}></Editreviewdetails>
      ))}
    </div>
  );
};

export default Editreview;
