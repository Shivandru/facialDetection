import { useState, useRef, useEffect } from "react";
import "./App.css";
import * as faceapi from "face-api.js";
import AllRoutes from "./AllRoutes";
import { useNavigate } from "react-router-dom";
function FaceDetecttion() {
  const videoRef = useRef();
  const naviagte = useNavigate();
  useEffect(() => {
    startVideo();
    loadModels();
  }, []);
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.log("Something went wrong!");
      });
  };
  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ])
      .then(() => {
        console.log("Models loaded");
        detectMyFace();
      })
      .catch((err) => {
        err;
      });
  };

  const detectMyFace = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();
      detectEyeGaze(detections);
    }, 3000);
  };
  function detectEyeGaze(detections) {
    detections.forEach((detection) => {
      const landmarks = detection.landmarks;
      const leftEye = landmarks.getLeftEye();
      const rightEye = landmarks.getRightEye();
      console.log(leftEye, rightEye);
      if (leftEye && rightEye) {
        naviagte("/home");
      }
    });
  }

  return (
    <div className="myApp">
      <h1>Face Detection</h1>
      <div className="appvide">
        <video crossOrigin="anonymous" ref={videoRef} autoPlay muted></video>
      </div>
      <AllRoutes />
    </div>
  );
}

export default FaceDetecttion;
