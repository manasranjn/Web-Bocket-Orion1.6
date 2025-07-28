import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const getAllPosts = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setAllPosts(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        console.log(res);
        getAllPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen h-full w-full bg-[#F4EBD3] p-6 md:p-8 lg:p-10">
      <h1 className="text-center md:text-2xl lg:text-4xl mb-10">All Posts</h1>
      {error && <h1 className="text-red-600 text-xl text-center">{error}</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <div
            className="bg-emerald-300 p-5 rounded-md relative h-[75vh] lg:h-96"
            key={post.id}
          >
            <h1 className="text-xl md:text-3xl mb-6">{post.title}</h1>
            <p>{post.description}</p>
            <div>
              <button
                className="px-6 py-2 rounded-md md:text-lg text-white bg-blue-600 absolute bottom-5 left-5 cursor-pointer"
                onClick={() => navigate(`/edit-post/${post.id}`)}
              >
                Edit
              </button>
              <button
                className="px-6 py-2 rounded-md md:text-lg text-white bg-red-600 absolute bottom-5 right-5 cursor-pointer"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
