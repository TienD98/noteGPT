import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import Main from "./Pages/mainApp";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App
