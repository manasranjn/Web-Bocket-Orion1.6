import React from "react";
import "./App.css";
import ListData from "./Components/ListData";
import AllProducts from "./Components/AllProducts";

const App = () => {
  return (
    <div className="bg-slate-500 p-10">
      <h1>App Component</h1>
      {/* <ListData /> */}
      <AllProducts />
    </div>
  );
};

export default App;
