import "./App.css";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

export default function App() {
  const [mode, setMode] = useState("light");
  const ToggleMode = () =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2F2F2F"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <div className="layout">
      <Router>
        <div id="navbar">
          <NavBar toggleMode={ToggleMode} mode={mode} />
        </div>
        <div id="about">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
        <div id="newsarea">
          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={15} country="in" category="general" mode={mode}/>}
            />
            <Route
              exact
              path="/sports"
              element={<News pageSize={15} country="in" category="sports" mode={mode}/>}
            />
            <Route
              exact
              path="/science"
              element={<News pageSize={15} country="in" category="science" mode={mode}/>}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize={15} country="in" category="business" mode={mode}/>}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News pageSize={15} country="in" category="entertainment" mode={mode}/>
              }
            />
            <Route
              exact
              path="/health"
              element={<News pageSize={15} country="in" category="health" mode={mode}/>}
            />
            <Route
              exact
              path="/technology"
              element={
                <News pageSize={15} country="in" category="technology" mode={mode}/>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
