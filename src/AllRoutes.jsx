import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FaceDetecttion from "./FaceDetecttion";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/facial" element={<FaceDetecttion />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
