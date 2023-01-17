import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import Desktop from "./components/desktop";
import SideBar from "./components/sidebar";
import Mobile from "./components/mobile";
import Tablet from "./components/tablet";
import {
  displayUnitList,
  videoUnitList,
  audioUnitList,
  nativeUnitList,
} from "./Data/data";

export const sideBarContext = React.createContext();

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("DISPLAY");
  const [activeUnit, setActiveUnit] = useState();
  const [isActiveResoultion, setIsActiveResoultion] = useState();
  const [activeIframeUrl, setActiveIframeUrl] = useState("");

  useEffect(() => {
    document.title = "Streamlyn Ad Formats";
  });

  const handleSideBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleActiveAddUnit = (id) => {
    setActiveUnit(id);
  };

  return (
    <>
      <div className="App">
        <sideBarContext.Provider
          value={{
            isOpen: isOpen,
            activeTab: activeTab,
            activeUnit: activeUnit,
            displayUnitList: displayUnitList,
            videoUnitList: videoUnitList,
            audioUnitList: audioUnitList,
            nativeUnitList: nativeUnitList,
            isActiveResoultion: isActiveResoultion,
            activeIframeUrl: activeIframeUrl,
            handleActiveAddUnit: handleActiveAddUnit,
            handleSideBar: handleSideBar,
            setActiveTab: setActiveTab,
            setIsActiveResoultion: setIsActiveResoultion,
            setActiveIframeUrl: setActiveIframeUrl,
          }}
        >
          <BrowserRouter>
            <SideBar />
            <div>
              <NavBar />
              <div className="main-content">
                <Routes>
                  <Route exact path="/" element={<Desktop />} />
                  <Route exact path="/mobile" element={<Mobile />} />
                  <Route exact path="/tablet" element={<Tablet />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </sideBarContext.Provider>
      </div>
    </>
  );
}

export default App;
