import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="p-10 rounded-xl bg-green-600 text-white shadow-lg">
      <h1 className="text-4xl text-center">Counter: {count}</h1>
      <div className="flex gap-4 mt-6 text-lg">
        <button
          className="px-5 py-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-90 transition duration-300"
          onClick={increment}
        >
          Incremenet
        </button>
        <button
          className="px-5 py-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-90 transition duration-300"
          onClick={() => setCount(count - 1)}
        >
          Decremenet
        </button>
        <button
          className="px-5 py-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-90 transition duration-300"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
