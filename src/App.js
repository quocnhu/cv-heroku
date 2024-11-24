import React, { useState } from "react";
import Sidebar from "../src/components/Sidebar/Sidebar.js";
import TimeLine from "./components/TimeLineAE/TimeLine.js";
import Banner from "./components/Banner/Banner.js";
import About from "./components/About/About.js";
import PdfViewer from '../src/components/Cv/Cv.js'
import "../src/App.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fasolid } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="m-container">
      <span className="toggle-btn">
        <i
          className={`bx ${
            isSidebarVisible ? "bxs-toggle-left" : "bxs-toggle-right"
          }`}
          onClick={toggleSidebar}
        ></i>
      </span>
      <div className={`sidebar ${isSidebarVisible ? 'visible':''}`}>
        <Sidebar />
      </div>
      <div className="main-content">
        <Banner />
        <About />
        <TimeLine />
        <PdfViewer /> 
      </div>
    </div>
  );
};

export default App;
