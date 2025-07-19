import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="p-4 md:p-6 lg:p-10 rounded-xl bg-amber-300 md:bg-blue-500 lg:bg-green-600 text-white shadow-lg">
      <h1 className="text-2xl md:text-4xl text-center">Counter: {count}</h1>
      <div className="flex gap-2 md:gap-4 mt-6 text-sm md:text-lg">
        <button
          className="px-3 md:px-5 py-1 md:py-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-90 transition duration-300"
          onClick={increment}
        >
          Incremenet
        </button>
        <button
          className="px-3 md:px-5 py-1 md:py-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-90 transition duration-300"
          onClick={() => setCount(count - 1)}
        >
          Decremenet
        </button>
        <button
          className="px-3 md:px-5 py-1 md:py-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-90 transition duration-300"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
