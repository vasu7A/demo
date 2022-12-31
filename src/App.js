import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import Desktop from "./components/desktop";
import SideBar from "./components/sidebar";
import Mobile from "./components/mobile";
import Tablet from "./components/tablet";

export const sideBarContext = React.createContext();

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="App">
      <sideBarContext.Provider
        value={{ isOpen: isOpen, handleSideBar: handleSideBar }}
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
  );
}

export default App;
