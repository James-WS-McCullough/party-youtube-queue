import React from "react";
import QRCodeGenerator from "./components/QRCodeGenerator";
import VideoPlayer from "./components/VideoPlayer";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Party Video Queue</h1>
      <QRCodeGenerator />
      <VideoPlayer />
    </div>
  );
};

export default Home;
