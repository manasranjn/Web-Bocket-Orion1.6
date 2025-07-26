import React, { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setWarning("All fields are required");
      return;
    }

    const data = {
      title: title,
      description: description,
    };

    axios
      .post("http://localhost:5000/posts", data)
      .then((res) => {
        console.log(res);
        console.log("Data Created");
        setWarning("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F4EBD3]">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 p-6 rounded-md shadow-lg text-center flex flex-col gap-4 max-w-2xl w-[80%]"
      >
        <h1 className="text-lg md:text-xl lg:text-3xl text-white">
          Create Post
        </h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-white px-4 py-3 rounded-md border-none outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Description"
          className="bg-white px-4 py-3 rounded-md border-none outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {warning && <p className="text-red-600">{warning}</p>}
        {error && <p className="text-red-600">{error}</p>}
        <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 p-3 rounded-md text-white text-base md:text-lg lg:text-xl font-semibold active:scale-95 transition duration-150 flex gap-5 justify-center items-center cursor-pointer">
          Create Post <IoIosCreate />
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
