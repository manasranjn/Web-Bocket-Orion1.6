import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getPost = () => {
    axios
      .get(`http://localhost:5000/posts/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const updatePost = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
    };
    axios
      .put(`http://localhost:5000/posts/${params.id}`, data)
      .then((res) => {
        console.log(res);
        console.log("Data Updated");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F4EBD3]">
      <form
        action=""
        className="bg-gray-700 p-6 rounded-md shadow-lg text-center flex flex-col gap-4 max-w-2xl w-[80%]"
      >
        <h1 className="textlg md:text-xl lg:text-3xl text-white">Edit Post</h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-white px-4 py-3 rounded-md border-none outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Description"
          className="bg-white px-4 py-3 rounded-md border-none outline-none h-36"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="bg-green-600 hover:bg-green-500 active:bg-green-700 p-3 rounded-md text-white text-base md:text-lg lg:text-xl font-semibold active:scale-95 transition duration-150"
          onClick={updatePost}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
