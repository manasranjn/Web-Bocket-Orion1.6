import React from "react";

const StudentDetails = ({ name, age, course, address }) => {
  //   console.log(props);

  //   const obj = {
  //     name: "Rahul",
  //     age: 20,
  //     course: "MERN",
  //     address: "Pune",
  //   };

  //   const arr = [10, 20, 30, 40, 50];
  //   const [a, b, c, d, e] = arr;

  //   const { name, age, course, address } = obj;
  //   console.log(obj.name);
  //   console.log(name);

  //   let a = 10;

  //   const { name, age, course, address } = props;

  return (
    // <div>
    //   {/* {a} */}
    //   <h1>Name: {props.name}</h1>
    //   <h2>Age: {props.age}</h2>
    //   <h2>Course: {props.course}</h2>
    //   <h2>Address: {props.address}</h2>
    // </div>
    <div className="bg-red-300 p-10 m-10">
      <h1 className="text-green-700 text-4xl">Name: {name}</h1>
      <h2 className="text-[25px]">Age: {age}</h2>
      <h2>Course: {course}</h2>
      <h2>Address: {address}</h2>
    </div>
  );
};

export default StudentDetails;
