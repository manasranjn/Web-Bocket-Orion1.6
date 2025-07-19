import React from "react";
import InlineCSS from "./Components/InlineCSS";
import StyleObject from "./Components/StyleObject";
import GlobalCSS from "./Components/GlobalCSS";
import "./style.css";
import Example from "./Components/Example";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <InlineCSS />
      <StyleObject />
      <GlobalCSS />
      <Example />
    </div>
  );
};

export default App;
