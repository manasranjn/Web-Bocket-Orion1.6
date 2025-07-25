import React, { useContext } from "react";
import { example } from "../App";

const Details = () => {
  console.log(example);
  const value = useContext(example);
  console.log(value);

  return (
    <div>
      <h1>Details</h1>
      <h2>{value.name}</h2>
      <h2>{value.age}</h2>
      <h2>{value.course}</h2>
    </div>
  );
};

export default Details;
