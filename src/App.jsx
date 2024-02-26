import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FaceDetecttion from "./FaceDetecttion";
import AllRoutes from "./AllRoutes";
import HomePage from "./HomePage";
import Testing from "./Testing";
function App() {
  return (
    <div className="myApp">
      <Testing />
    </div>
  );
}

export default App;
