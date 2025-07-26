import React from "react";

const EditPost = () => {
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
        />
        <textarea
          placeholder="Enter Description"
          className="bg-white px-4 py-3 rounded-md border-none outline-none"
        ></textarea>
        <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 p-3 rounded-md text-white text-base md:text-lg lg:text-xl font-semibold active:scale-95 transition duration-150">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
