import React from "react";

const InlineCSS = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h1 style={{ backgroundColor: "red", color: "white" }}>Inline CSS</h1>
      <p className="para">This is a paragraph</p>
    </div>
  );
};

export default InlineCSS;
