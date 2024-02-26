import React from "react";
import FaceDetecttion from "./FaceDetecttion";
import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";
const Testing = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/facial">Face</Link>
      <AllRoutes/>
    </div>
  );
};

export default Testing;
