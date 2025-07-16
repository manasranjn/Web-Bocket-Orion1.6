import React from "react";
import StudentDetails from "./StudentDetails";

const Details = (data) => {
  return (
    <div>
      <h1>Details Component</h1>
      <StudentDetails
        name={data.name}
        age={data.age}
        course={data.course}
        address={data.address}
      />
    </div>
  );
};

export default Details;
