import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Abouts from "./pages/Abouts";

import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Abouts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
