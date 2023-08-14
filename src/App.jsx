import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import SigninSuccess from "./Pages/SigninSuccess";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
        <Route path="success" element={<SigninSuccess />} />
      </Routes>
    </Router>
  )
}

export default App
