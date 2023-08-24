import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
