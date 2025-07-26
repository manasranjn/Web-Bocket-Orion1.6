import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import EditPost from "./Components/EditPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
