import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ClassBase from "./Components/ClassBase";
import FunctionBase from "./Components/FunctionBase";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>App Component</h1>
      <ClassBase />
      <FunctionBase />
      <Footer></Footer>
    </div>
  );
};

export default App;
