import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
