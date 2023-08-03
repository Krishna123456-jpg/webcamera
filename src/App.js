import React from "react";
import WebcamImage from "./WebcamImage";
import "./App.css";
import Webcam from "react-webcam";

function App() {

  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    facingMode: { exact: "environment" }
  };


  return (
    <div className="App">
      <WebcamImage />

      {/* <Webcam width={480} height={720} videoConstraints={videoConstraints} /> */}
    </div>
  );
}

export default App;