import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // console.log(name, email, mobile);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, mobile);
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="h-screen bg-blue-950 text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">Controlled Form</h1>
      <form className="flex flex-col gap-4 bg-slate-600 p-10 rounded shadow-lg">
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-white text-black rounded px-5 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-white text-black rounded px-5 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Mobile"
          className="bg-white text-black rounded px-5 py-2"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button className="p-2 bg-green-500 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Controlled;
