import React, { useState, useEffect } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    setProducts(data);
  };

  //   getProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-10">
      {products.map((item, index) => (
        <div className="bg-blue-300 p-10 rounded" key={index}>
          <img src={item.image} alt="" />
          <h1>{item.title}</h1>
          <h1>{item.category}</h1>
          <h4>{item.price}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
