import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import { auth } from "./Firebase";
function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //loggin
        console.log(userAuth);
      } else {
        //logout
      }
    });
    return unsubscribe;
  }, []);
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
