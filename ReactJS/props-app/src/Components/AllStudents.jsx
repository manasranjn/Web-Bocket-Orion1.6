import React from "react";
import Details from "./Details";

const AllStudents = (props) => {
  return (
    <div>
      <h1>All Students</h1>
      <Details
        name={props.name}
        age={props.age}
        course={props.course}
        address={props.address}
      />
    </div>
  );
};

export default AllStudents;
