import React, { useRef } from "react";

const Reference = () => {
  const xyz = useRef();
  console.log(xyz);
  const handleChange = () => {
    xyz.current.style.color = "red";
    console.log(xyz);
  };

  return (
    <div>
      <h1 ref={xyz} className="text-3xl">
        Reference
      </h1>
      <button
        onClick={handleChange}
        className="px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Click
      </button>
    </div>
  );
};

export default Reference;
