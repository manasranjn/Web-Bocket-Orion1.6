import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobileRef.current.value;
    console.log(name, email, mobile);
  };

  return (
    <div className="h-screen bg-blue-950 text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">Uncontrolled Form</h1>
      <form className="flex flex-col gap-4 bg-slate-600 p-10 rounded shadow-lg">
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-white text-black rounded px-5 py-2"
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-white text-black rounded px-5 py-2"
          ref={emailRef}
        />
        <input
          type="text"
          placeholder="Enter your Mobile"
          className="bg-white text-black rounded px-5 py-2"
          ref={mobileRef}
        />
        <button className="p-2 bg-green-500 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uncontrolled;
