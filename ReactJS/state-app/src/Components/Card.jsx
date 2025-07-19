import React from "react";
import cat from "../assets/cat.jpg";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row h-full p-4 md:p-6 lg:p-10">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white">Content</h1>
        <p className="text-white text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque
          consequuntur nam culpa accusantium. Quos aliquid deserunt facilis
          nulla ratione mollitia suscipit libero tempore praesentium molestiae
          facere impedit, corporis sunt!
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={cat} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Card;
