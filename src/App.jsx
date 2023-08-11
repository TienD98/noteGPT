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
        <Route exact path="/noteGPT" element={<Home />} />
        <Route path="noteGPT/signin" element={<Signin />} />
        <Route path="noteGPT/register" element={<Register />} />
        <Route path="noteGPT/success" element={<SigninSuccess />} />
      </Routes>
    </Router>
  )
}

export default App
