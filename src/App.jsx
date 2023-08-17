import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
