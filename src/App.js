import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import Desktop from "./components/desktop";
import SideBar from "./components/sidebar";
import Mobile from "./components/mobile";
import Tablet from "./components/tablet";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
